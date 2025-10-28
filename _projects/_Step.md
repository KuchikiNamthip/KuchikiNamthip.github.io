Got it. Here’s the exact, interview-friendly **workflow** I’d follow—with plain language only (no code). I split it into:

* A) Core SNP filtering with a 1000 Genomes VCF
* B) (Later) Adding ClinVar — kept separate

---

# A) Core SNP filtering using a 1000 Genomes (1KG) VCF

## 1) Prepare the data and scope it down

1. Confirm the **genome build** of your VCF (e.g., GRCh37 vs GRCh38).
2. Pick a **small region** (e.g., one chromosome or a 1–5 Mb window) so you can iterate fast.
3. Make sure the VCF is **bgzipped and indexed** (so random access/region queries are possible).

## 2) Read and normalize records

4. Load variants and **split multi-allelic sites** into separate rows per ALT allele.
5. Extract key fields per row: `CHROM, POS, ID, REF, ALT, QUAL, FILTER, INFO` (and later, any annotation fields like AF/ANN/CSQ).
6. Normalize chromosome labels if needed (e.g., convert `chr17` ↔ `17` consistently).

## 3) Basic typing and QC filters

7. **SNP-only:** keep records where REF and ALT are single nucleotides (A/C/G/T).
8. **Biallelic:** after splitting, each row is one ALT; keep those and drop rows that still imply multiple ALT alleles.
9. **FILTER = PASS:** keep only variants that passed the caller’s filters.
10. **Quality threshold:** apply a sensible QUAL cutoff (e.g., ≥30). If depth (DP) or quality-by-depth (QD) exists, you can require reasonable ranges too.

## 4) Allele frequency handling (1KG strength)

11. Pull **allele frequency (AF)** from the INFO field.
12. Ensure AF is **aligned to the correct ALT** (at multi-allelic sites, AF is per ALT).
13. **Rarity filter:** keep rare variants (e.g., AF < 1% or < 0.1%, depending on how strict you want).
14. Decide how to treat **missing AF** (often keep them for now, but note as a limitation).

## 5) Functional severity (only if annotation exists)

15. Check if your VCF already has **functional consequence annotations** (`ANN` or `CSQ`).
16. If present, derive a simple **severity priority** (e.g., HIGH > MODERATE > LOW > MODIFIER) and keep HIGH/MODERATE.
17. If not present, note that you can’t judge consequence yet; you’re currently prioritizing by **QC + rarity** only.

## 6) Optional: gene-based focusing

18. If you have a **gene panel** for the disease area, keep variants whose annotations map to those genes.
19. If you don’t have annotations, acknowledge that gene filtering needs an annotation step before you can do this.

## 7) Summarize and output

20. Produce a **stepwise summary**: how many variants at each stage (raw → SNP PASS → rare → severe → in-panel).
21. Save a **clean table** of the prioritized variants with the essential columns (site, REF/ALT, QUAL, FILTER, AF, any consequence/gene fields).
22. Clearly label **assumptions and thresholds** (e.g., “AF < 1%”, “QUAL ≥ 30”).

## 8) Explain your use of Python dictionaries/sets (conceptually)

23. Use a **dictionary** to map impact labels to numeric ranks (e.g., `{"HIGH":3, "MODERATE":2, ...}`) so you can sort/prioritize.
24. Use a **set** for the gene panel (fast “is this gene in the list?” checks).
25. Convert the INFO string into a **dict** (key→value) so AF, AC, AN, ANN, etc., are easy to access.

## 9) State limitations & next steps (shows practical judgment)

26. **1KG rarely includes functional annotations** by default—so without `ANN/CSQ` you can’t prioritize by effect.
27. Add an annotation step (e.g., VEP or SnpEff) to enable consequence, gene, and splice predictions.
28. Consider **genotype context** (if relevant to your task), inheritance, or zygosity when you have sample genotypes.
29. Beware of **left-normalization/representation differences** before joining with external resources later.

---

# B) (Later) Add ClinVar (kept separate, easy to plug in)

## 10) Prepare ClinVar

30. Download the **ClinVar VCF** for the **same genome build** as your 1KG VCF (or plan to liftover).
31. Ensure it’s bgzipped + indexed; load key fields like `CHROM, POS, REF, ALT, CLNSIG, CLNREVSTAT, CLNDN`.

## 11) Harmonize and join

32. **Harmonize CHROM labels** (e.g., drop/add `chr` prefix to match).
33. If builds differ, **liftover** one dataset so coordinates match.
34. **Join** your prioritized 1KG variants to ClinVar on the exact site key `(CHROM, POS, REF, ALT)`.

## 12) Interpret ClinVar fields

35. Flag variants whose clinical significance includes **Pathogenic/Likely_pathogenic**.
36. Consider **review status** (e.g., “criteria provided, multiple submitters, no conflicts” carries more weight than single-submitter).
37. Re-prioritize so **ClinVar-pathogenic + rare** float to the top.

## 13) Report

38. Produce a small table of **ClinVar hits** (with CLNSIG, CLNREVSTAT, condition names) and keep the non-ClinVar rare/severe variants as “research candidates.”
39. Document the **join criteria** and any exclusions (e.g., build mismatches, allele representation differences).

---

## Common “gotchas” I’d mention out loud

* **Multi-allelic sites**: AF must match the specific ALT; don’t treat the first AF as universal.
* **Indels vs SNPs**: ensure REF/ALT lengths are 1 for SNPs.
* **Missing annotations**: you can’t claim functional effect without `ANN/CSQ` or an external annotation run.
* **Build mismatch** (GRCh37 vs GRCh38): must be aligned before any ClinVar merge.
* **Chromosome labels** (`chr1` vs `1`): normalize before joining.
* **Over-filtering**: choose thresholds and justify them (e.g., why AF < 1% vs < 0.1%).

---

## What I’d hand the panel at the end

* A clear **stepwise summary table** (counts after each filter).
* A **prioritized TSV/Parquet** of candidate variants (columns: site, QUAL, FILTER, AF, consequence/gene if available).
* A short **Limitations & Next Steps** note (annotation, ClinVar merge, gene panel rationale, etc.).

If you want, tell me your genome build and an example VCF path/region, and I’ll map these steps directly to your file so you can practice on a tiny slice fast.
