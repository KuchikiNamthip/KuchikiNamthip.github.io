Gotcha. Here’s a tight, interview-ready checklist of what to **inspect and debug** when writing Python to filter “causation-kind” SNPs (pathogenic/likely-causal) — with concrete fixes you can drop in fast.

# 0) Sanity checks (before coding)

* **File type**: `.vcf` vs `.vcf.gz` (bgzip vs gzip), **coordinate system** (VCF is 1-based), **reference build** (GRCh37 vs GRCh38).
* **Chrom labels**: `chr17` vs `17` — normalize one scheme.
* **Single sample vs cohort**: decide which FORMAT fields you need (GT, AD, DP, GQ, PL).
* **Variant class**: make sure you’re truly working on **SNPs** (len(REF)==len(ALT)==1), exclude indels/MNVs unless intended.

# 1) Reading & parsing bugs

* **Gzip text mode**: open gz with text mode.

  ```python
  import gzip, pandas as pd
  with gzip.open(vcf_path, 'rt') as f: header = next(l for l in f if l.startswith('#CHROM')).strip().split('\t')
  df = pd.read_csv(vcf_path, sep='\t', comment='#', names=header, compression='gzip', dtype=str, low_memory=False)
  ```
* **Headers shifting**: if you didn’t pass `names=header`, Pandas may treat first record as header → misaligned columns.
* **Huge INFO strings**: don’t `expand=True` on the whole column at read time; parse lazily on subsets.
* **Dtypes**: everything in as `str`, then **coerce numerics**:

  ```python
  df['POS'] = pd.to_numeric(df['POS'], errors='coerce')
  ```
* **Trailing spaces / NA**: strip and fill.

  ```python
  df = df.applymap(lambda x: x.strip() if isinstance(x,str) else x).fillna('')
  ```

# 2) SNP vs non-SNP bugs

* **Biallelic filter** (very common interview bug: forgetting to split multi-allelic):

  ```python
  df = df[(df['REF'].str.len()==1) & (df['ALT'].str.len()==1) & (~df['ALT'].str.contains(','))]
  # OR split multiallelic safely
  df = df.assign(ALT=df['ALT'].str.split(',')).explode('ALT')
  df = df[(df['REF'].str.len()==1) & (df['ALT'].str.len()==1)]
  ```

# 3) FILTER & quality logic bugs

* **Ignoring FILTER** field: don’t.

  ```python
  pass_ok = (df['FILTER'].isin(['PASS','.']))
  df = df[pass_ok]
  ```
* **QUAL mis-use**: QUAL isn’t always comparable across callers; if used:

  ```python
  df = df[pd.to_numeric(df['QUAL'], errors='coerce') >= 30]
  ```
* **Depth (DP) location**: caller may put **site-level** DP in INFO *and* **sample-level** DP in FORMAT/sample. Decide which you use and extract correctly.

# 4) INFO parsing bugs (ANN/CSQ, AF, gene, consequence)

* **Fragile splitting**: robust key=value parser.

  ```python
  def parse_info(s):
      out={}
      for kv in s.split(';'):
          if '=' in kv:
              k,v = kv.split('=',1); out[k]=v
          else:
              out[k]=True
      return out
  info = df['INFO'].map(parse_info)
  df['AF'] = info.map(lambda d: d.get('AF','')).str.split(',').str[0]  # take first ALT’s AF
  df['AF'] = pd.to_numeric(df['AF'], errors='coerce')
  ```
* **ANN/CSQ field** (SnpEff/VEP) sub-parsing:

  * Read the **header** to get the ANN/CSQ schema (don’t hardcode order).
  * Handle **multiple transcripts** → pick the **most severe** consequence.

  ```python
  # Example: pick worst consequence using a dict
  SEV = {'HIGH':4,'MODERATE':3,'LOW':2,'MODIFIER':1}
  def worst_ann(ann_str):
      if not ann_str: return {}
      items = ann_str.split(',')
      best = None; best_rank = -1
      for it in items:
          fields = it.split('|')  # order comes from header meta
          consequence_list = fields[1].split('&')  # e.g., missense_variant&splice_region_variant
          rank = max(SEV.get(c.upper(),0) for c in [x.split('_variant')[0].upper() for x in consequence_list])
          if rank>best_rank: best, best_rank = fields, rank
      return {'gene':best[3], 'consequence':best[1], 'impact_rank':best_rank}
  tmp = info.map(lambda d: d.get('ANN',''))
  ann_df = tmp.map(worst_ann).apply(pd.Series)
  df = pd.concat([df, ann_df], axis=1)
  ```

# 5) Genotype (FORMAT) parsing bugs

* **FORMAT mismatch**: don’t assume order; read `FORMAT` then index.

  ```python
  def get_sample_field(row, sample_col, key):
      fmt = row['FORMAT'].split(':')
      val = row[sample_col].split(':')
      idx = {k:i for i,k in enumerate(fmt)}
      return val[idx[key]] if key in idx and idx[key]<len(val) else ''
  sample = df.columns[-1]  # if single sample
  df['GT'] = df.apply(get_sample_field, axis=1, args=(sample,'GT'))
  df['DP'] = pd.to_numeric(df.apply(get_sample_field, axis=1, args=(sample,'DP')), errors='coerce')
  ```
* **Phasing symbols**: `0/1`, `1|0` both heterozygous. Normalize:

  ```python
  GT_MAP = {'0/0':'hom_ref','0|0':'hom_ref','0/1':'het','1/0':'het','0|1':'het','1|0':'het','1/1':'hom_alt','1|1':'hom_alt'}
  df['gt_class'] = df['GT'].map(GT_MAP).fillna('other')
  ```
* **AD field**: sometimes missing; guard with `errors='coerce'` and defaults.

# 6) “Causation” filters (domain pitfalls)

* **Population frequency**: drop common variants (e.g., AF ≥ 0.01). If AF absent, don’t crash; treat as unknown.

  ```python
  df = df[(df['AF'].isna()) | (df['AF'] < 0.01)]
  ```
* **Impact / consequence**: prioritize HIGH/MODERATE (nonsense, splice-site, missense) via your ANN dict.

  ```python
  df = df[df['impact_rank'] >= 3]  # MODERATE/HIGH
  ```
* **Gene panels / dicts**: interviewer wants **dictionary use**:

  * **Gene whitelist** (disease panel) → fast membership test.

    ```python
    DISEASE_GENES = {'BRCA1','BRCA2', 'CFTR', ...}
    df = df[df['gene'].isin(DISEASE_GENES)]
    ```
  * **Consequence → severity** map (shown above).
  * **ClinSig map** (if merging ClinVar): `{'Pathogenic','Likely_pathogenic'}`.
  * **Transcript priority map** (canonical per gene) if provided.

# 7) Normalization bugs

* **Left-trim / right-trim** and **REF/ALT normalization** (esp. multi-allelic). If you can’t run vt/bcftools in interview, at least **refuse non-A/C/G/T single bases** and **dedupe** identical records after split.
* **Sorting / duplicates**:

  ```python
  df = df.drop_duplicates(subset=['#CHROM','POS','REF','ALT']).sort_values(['#CHROM','POS'])
  ```

# 8) Performance traps (big VCF)

* **Chunking**:

  ```python
  it = pd.read_csv(vcf_path, sep='\t', comment='#', names=header, compression='gzip', dtype=str, chunksize=200_000)
  for chunk in it: ... # filter then append to disk
  ```
* **Selective columns**: read minimal columns then merge parsed INFO fields you truly need.

# 9) Robustness & UX

* **Argparse & logging**: common “bug” they ask you to add.

  ```python
  import argparse, logging; logging.basicConfig(level=logging.INFO)
  p=argparse.ArgumentParser(); p.add_argument('--vcf'); p.add_argument('--af',type=float,default=0.01)
  ```
* **Graceful missing fields**: never KeyError when INFO keys absent.
* **Deterministic output**: sorted, with header and consistent NA markers.

# 10) Typical bugs they may plant (and quick fixes)

1. **Multi-allelic not split** → AF/ANN mis-aligned.
   *Fix*: `.explode('ALT')`, take the **matching** AF index, not always `[0]`.
2. **Using FILTER==PASS only** but forgetting that some callers use `.` for pass.
   *Fix*: accept `PASS` **or** `.`.
3. **Parsing FORMAT by fixed positions** (e.g., assuming `GT:AD:DP`) → breaks.
   *Fix*: build `idx = {k:i for i,k in enumerate(fmt)}` and index by key.
4. **QUAL numeric cast fails** due to “.” → rows dropped silently.
   *Fix*: `pd.to_numeric(..., errors='coerce')` then `fillna(0)` or filter with `>=`.
5. **Chromosome sort bug** (`1,10,11,2`).
   *Fix*: natural sort with mapping `{'X':23,'Y':24,'M':25}` etc.
6. **Non-SNP included** (indels slip in).
   *Fix*: enforce `len(REF)==len(ALT)==1`.
7. **Case-sensitive gene matching** → misses hits.
   *Fix*: `.str.upper()` both sides.
8. **AF threshold logic inverted** (keeping common instead of rare).
   *Fix*: assert with a unit test and a tiny toy VCF.
9. **Memory blow-up** on big files.
   *Fix*: chunked reads; pushdown filters (early filter on FILTER/QUAL before ANN parsing).
10. **Wrong build mixing** (GRCh37 vs GRCh38) when joining ClinVar/gnomAD.
    *Fix*: require a `--build` arg; refuse to merge if mismatch.

# 11) Minimal “dictionary usage” patterns to demo

* **Consequence severity** (shown above, `SEV`).
* **Gene panel set** for O(1) membership.
* **GT class map** (hetero/homo) to drive zygosity filters.
* Optional: **ClinSig → keep/drop** map after merging external TSV.

# 12) Quick self-tests they love

* **Toy 6-line VCF** with one PASS rare missense, one common synonymous, one multi-allelic → assert the pipeline keeps only the intended one.
* **Unit-style check**:

  ```python
  assert (df['REF'].str.len()==1).all()
  assert set(df['FILTER'].unique()) <= {'PASS','.'}
  assert (df['AF'].dropna() < 0.01).all()
  ```

If you want, I can turn this into a tiny template script (read → normalize → parse INFO/FORMAT → dict-based filters → write TSV) that you can run in Jupyter and tweak per interview prompt.
