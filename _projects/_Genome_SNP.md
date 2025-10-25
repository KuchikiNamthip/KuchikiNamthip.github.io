---
layout: page
title: Genomics (SNP)
description: My genomics (SNP analysis) portfolio
img: assets/img/SNP/SNP.jpeg
importance: 1
category: ComBioPortfolio
giscus_comments: true
toc:
  sidebar: left
---

# Introduction

My passion for disease biology has led me to systematically investigate the multilayered mechanisms of gene regulation. I've already established a deep understanding of the regulatory landscape through my prior work:

🎨 *Epigenomics (ChIP-seq)*: Analyzing the dynamic blueprint of the epigenome [(see my Epigenomic portfolio).](https://kuchikinamthip.github.io/projects/Epigenome_ChIP/)

🎨 *Transcriptomics*: Investigating the functional output of gene expression [(see my Transcriptomics portfolio)](https://kuchikinamthip.github.io/projects/Transcriptome/).

However, a fundamental piece of the puzzle has been missing: Genomics. To achieve a truly holistic view—moving beyond how the code is regulated to encompass the primary variations within the code itself—I must delve into the DNA sequence.

This portfolio marks my entry into the essential world of genomics, focusing specifically on Single Nucleotide Polymorphism (SNP) analysis. This foundational work is crucial for identifying the genetic variations that drive disease susceptibility.

I am extremely fortunate to be mentored in this new domain by [Dr. Metha Yaikwawong](https://www.researchgate.net/profile/Metha-Yaikwawong), a respected expert in SNP analysis. Under his guidance, I am committed to bridging the gap between underlying genetic variation, epigenetic control, and resulting transcriptomic profiles, thereby contributing a complete picture to the field of precision medicine.

---
# Overview of Genome Analysis
Firstly, I would like to clarify that ”genome analysis” ≠ only “variant analysis”,
but variant analysis (detecting mutations) is one major branch within it.
And SNPs analysis is under variant analysis!

## 1️⃣ What “Genome Analysis” Actually Includes

Genome analysis is a big umbrella — it includes:

| Category                                | What it studies                                                           |
| :-------------------------------------- | :------------------------------------------------------------------------ |
| **Structural / Variant analysis**       | Detects mutations: SNPs, Indels, CNVs, SVs                                |
| **Functional analysis**                 | Studies how genes are expressed or regulated (RNA-seq, methylation, etc.) |
| **Comparative / Evolutionary genomics** | Compares genomes across individuals or species                            |
| **Epigenomic analysis**                 | Looks at DNA methylation, histone modification                            |
| **Metagenomics**                        | Sequences all DNA from an environment or microbiome                       |



## 2️⃣ Variant (Mutation) Analysis — the Core Idea

When people say they “detect mutations” from sequencing data, what they really mean is they find differences between a sample genome and a reference genome.
*These differences are your "variants" or "mutations".*

### 🧬 The different between "mutations" and "variants"

| Term         | Simple Definition                                                           | Neutral or Value-Judgment?      |
| :----------- | :-------------------------------------------------------------------------- | :------------------------------ |
| **Variant**  | Any change in DNA sequence compared to a reference genome                   | **Neutral** (just a difference) |
| **Mutation** | A change in DNA that may **alter biological function** or cause **disease** | **Value-loaded** (often “bad”)  |



In modern genomics, people mostly use “variant” because not every DNA change is harmful.

### 🧬 Terminology in Practice

| Modern Genomics Term                        | Older Equivalent         | Used in               |
| :------------------------------------------ | :----------------------- | :-------------------- |
| **SNV (Single Nucleotide Variant)**         | SNP or point mutation    | Research / sequencing |
| **Pathogenic variant**                      | Disease-causing mutation | Clinical reports      |
| **Benign variant**                          | Non-disease variant      | Clinical reports      |
| **VUS (Variant of Uncertain Significance)** | Unknown mutation effect  | Genetic testing       |



## 3️⃣ Main Types of Variants

| Variant Type                             | Description                                                        | Example                |   Size   |
| :--------------------------------------- | :----------------------------------------------------------------- | :--------------------- | :------: |
| **SNP (Single Nucleotide Polymorphism)** | One base changes                                                   | A → G                  |   1 bp   |
| **Indel (Insertion/Deletion)**           | Few bases added or removed                                         | +AT or -TG             |  1–50 bp |
| **CNV (Copy Number Variation)**          | Gene/region duplicated or deleted                                  | 2 copies → 1 copy      |   >1 kb  |
| **SV (Structural Variant)**              | Rearrangements: inversion, translocation, large insertion/deletion | Chromosome breakpoints |   >1 kb  |
| **Somatic Mutation**                     | Found only in cancer or tissue cells                               | e.g., KRAS G12D        | any size |

<div class="row justify-content-center">
  <div class="col-sm mt-3 mt-md-0 content-center" style="max-width: 100%;">
    {% include figure.liquid loading="eager" path="assets/img/SNP/types_of_variants.png" title="Types of variant" class="img-fluid rounded z-depth-1 mx-auto" style="max-width: 70%;" %}
  </div>
</div>
<div class="caption text-center">
    <a>Image source: https://www.pacb.com/human-genetics-research/ </a> 
</div>

### 🧬Sequencing strategy for variant calling

<div class="row justify-content-center">
  <div class="col-sm mt-3 mt-md-0 content-center" style="max-width: 100%;">
    {% include figure.liquid loading="eager" path="assets/img/SNP/variant_seq_table.png" title="Types of variant" class="img-fluid rounded z-depth-1 mx-auto" style="max-width: 70%;" %}
  </div>
</div>
<div class="caption text-center">
    <a>Image source: Koboldt DC, Genome Medicine 2020  </a> 
</div>

## 4️⃣ Variant Calling Workflow
<div class="row justify-content-center">
  <div class="col-sm mt-3 mt-md-0 content-center" style="max-width: 100%;">
    {% include figure.liquid loading="eager" path="assets/img/SNP/Full_variant calling_pipeline.png" title="Types of variant" class="img-fluid rounded z-depth-1 mx-auto" style="max-width: 40%;" %}
  </div>
</div>
<div class="caption">
    <a href="https://hbctraining.github.io/Intro-to-variant-analysis/lessons/00_intro_to_variant_calling.html" target="_blank">Intro-to-variant-analysis by  Harvard Chan Bioinformatics Core (HBC)</a>
</div>

1. Sample → DNA Extraction → Sequencing (FASTQ) \
  🎯Goal: high-quality reads for alignment \
  🧩Input: paired-end FASTQ files (sample_R1.fastq, sample_R2.fastq) \
  ⚙️Tools: Illumina sequencer, Nanopore, PacBio \
   ↓ 
2. Quality Control (QC) \
  🎯Goal: Check read quality, adapter contamination, GC content. \
  ⚙️Tools: Adapter trimming (Trimmomatic, Cutadapt),QC report (FastQC, MultiQC) \
  🧩Output: cleaned FASTQ files \
   ↓ 
3. Alignment to Reference Genome (BAM) \
  🎯Goal:Map reads to a reference genome (e.g., hg38 for human). \
  ⚙️Tools: BWA-MEM, Bowtie2, HISAT2 \
  🧩Output: SAM → convert to BAM (samtools view -b) \
   ↓ 
4. Post-processing of BAM (Sorting, Duplicate removal, Recalibration) \
  🎯Goal: Sort reads, mark PCR duplicates, and perform base quality recalibration. \
  ⚙️Tools: samtools sort, Picard MarkDuplicates, GATK BaseRecalibrator \
  🧩Output: cleaned and indexed BAM file (sample.bam, sample.bai) \
   ↓ 
5. SNP Calling (VCF) \
  🎯Goal: Compare aligned reads to the reference genome → find positions with base changes. \
  ⚙️Tools: GATK HaplotypeCaller, bcftools mpileup + call, FreeBayes \
  🧩Output: VCF (Variant Call Format) file \   
   ↓ 
6. Variant Filtering & Quality Control \
  🎯Goal: Remove false positives and low-quality SNPs. \
  ⚙️Tools: GATK VariantFiltration, vcftools, bcftools filter \
  🧩Output: high-confidence VCF 
  🎯Filtering criteria: \
      - Depth (DP) > 10 \
      - Quality (QUAL) > 30 \
      - Variant allele frequency (VAF) threshold \
↓ 
7. SNP Annotation (gene, function, dbSNP ID) \
  🎯Goal: Add biological meaning to each SNP: gene name, transcript, coding effect, dbSNP ID, clinical significance. \
  ⚙️Tools: ANNOVAR, VEP (Variant Effect Predictor), SnpEff \
  🎯Databases used: \
    - dbSNP (known SNPs) \
    - ClinVar (pathogenicity) \
    - gnomAD (population frequency) \
    - RefSeq / Ensembl gene models \
↓ 
8. Downstream / Biological Interpretation (depends on purpose) \

| Application                   | Example analysis               | Tools                            |
| :---------------------------- | :----------------------------- | :------------------------------- |
| **Population genomics**       | PCA, Fst, population structure | `PLINK`, `vcftools`, `ADMIXTURE` |
| **GWAS**                      | Trait–SNP association          | `PLINK`, `GEMMA`, `SAIGE`        |
| **Phylogenetics / evolution** | SNP distance, tree             | `IQ-TREE`, `SNPhylo`             |
| **Clinical genomics**         | Pathogenic variant report      | `ClinVar`, `gnomAD`, `VarSome`   |


## 5️⃣ Conceptual Flow

**🐚 UNIX (core bioinformatics)**

FASTQ ──▶ QC ──▶ Alignment ──▶ BAM ──▶ Variant Calling ──▶ VCF


**🐍 Python (data science layer)**

VCF ──▶ Filtering ──▶ Summary stats ──▶ Visualization ──▶ Report

---

# 🧬 Full SNP Analysis Pipeline with Tool Mapping

| Step                                    | Purpose                             | UNIX / Command Line Tools                                      | Python Libraries / Packages                                          |
| :-------------------------------------- | :---------------------------------- | :------------------------------------------------------------- | :------------------------------------------------------------------- |
| **1️⃣ Raw data QC**                     | Check sequencing read quality       | `fastqc`, `multiqc`, `trimmomatic`, `cutadapt`                 | ⚪ (rarely in Python) – can wrap tools using `subprocess`             |
| **2️⃣ Alignment**                       | Map reads to reference genome       | `bwa mem`, `bowtie2`, `hisat2`                                 | ⚪ `pysam` can read alignment files (BAM/SAM)                         |
| **3️⃣ SAM → BAM conversion**            | Compress and sort alignment files   | `samtools view`, `samtools sort`, `samtools index`             | ✅ `pysam` (Python bindings for samtools)                             |
| **4️⃣ Post-processing**                 | Mark duplicates, base recalibration | `picard MarkDuplicates`, `gatk BaseRecalibrator`               | ⚪ Usually command line (GATK wrapped by Python subprocess if needed) |
| **5️⃣ Variant calling (SNP detection)** | Detect SNPs/indels                  | `bcftools mpileup + call`, `gatk HaplotypeCaller`, `freebayes` | ⚪ Usually done by UNIX (some Python wrappers exist for automation)   |
| **6️⃣ Variant filtering**               | Filter by quality/depth             | `bcftools filter`, `vcftools --minQ`, `grep`, `awk`            | ✅ `pandas`, `cyvcf2`, `PyVCF` (for programmatic filtering)           |
| **7️⃣ Variant statistics**              | Ts/Tv ratio, allele frequency       | `vcftools --TsTv-summary`, `bcftools stats`                    | ✅ `scikit-allel`, `pandas`                                           |
| **8️⃣ Variant annotation**              | Add gene, effect, dbSNP ID          | `VEP`, `ANNOVAR`, `SnpEff`                                     | ⚪ Can parse output in Python for summary                             |
| **9️⃣ Data visualization**              | Plot SNP density, allele frequency  | —                                                              | ✅ `matplotlib`, `seaborn`, `plotly`, `scikit-allel`                  |
| **🔟 Population analysis (optional)**   | PCA, diversity, Fst, GWAS           | `plink`, `vcftools`, `ADMIXTURE`                               | ✅ `scikit-allel`, `numpy`, `scipy`, `pandas`                         |
| **1️⃣1️⃣ Reporting**                    | Summarize and export tables         | `awk`, `sed`, `grep`, `Rscript`                                | ✅ `pandas`, `xlsxwriter`, `csv`, `matplotlib`                        |

## NOTE
There are so many details about the analysis such as
- Germline and somatic variant calling is different, thus tools and setting are different.


---
# My SNPs analysis
I will start with a VCF files which were finished upstream process. 

**✅ Good sources of public VCF files**
1. [International Genome Sample Resource (IGSR)](https://www.internationalgenome.org/category/vcf) – Their site hosts VCFs from the 1000 Genomes Project (phase 3) and other human variation datasets. 
internationalgenome.org
2. [Personal Genome Project (PGP)](https://my.pgp-hms.org/public_genetic_data?data_type=other&utf8=%E2%9C%93&utm) – Contains VCF files of participants (e.g., exome or whole-genome VCFs) available for download. 
my.pgp-hms.org
3. [Germplasm & genetic data resources](https://agdatacommons.nal.usda.gov/articles/dataset/Data_from_Genetic_variation_among_481_diverse_soybean_accessions/25212539) – For example the dataset from 481 diverse soybean accessions includes VCF files.

---

## 1. Data set 1:
I want small VDF files, thus I will download it from [PGP](https://my.pgp-hms.org/public_genetic_data?data_type=other&utf8=%E2%9C%93&utm).

Step

Then you can apply your pipeline: read the VCF with Python, filter by QUAL, count SNPs, plot distribution, etc.

If you want a bit more complexity, use a multi-sample VCF from IGSR (1000 Genomes) which allows you to do allele-frequency, sample-based filtering, etc.
## 1. Data set 1: GSE66083 (CURRENTLY DEVELOP!)

### 1.1 Analysis overview:

#### 1.1.1 Analysis set 1: From FASTQ file to visualization



### 1.2 Result Discussion

### 1.3 What I have learned from this data set

---

## Other related posts

- [My personal note about ChIP-seq analysis](https://github.com/KuchikiNamthip/ChIP-seq_Analysis)

---

## Acknowledgment

- I would like to acknowledge [Dr. Metha Yaikwawong](https://www.researchgate.net/profile/Metha-Yaikwawong) for his encouragement and the valuable knowledge he provided on the earlier days of my programming journey.

---

I'm very happy 🥰 that you are visiting my computational biology portfolio and would be even happier if you could provide suggestions or feedback 🤩.

You can contact me through various online platforms [here 📬](https://kuchikinamthip.github.io/) or leave a comment below using GitHub account. 👇🏼
