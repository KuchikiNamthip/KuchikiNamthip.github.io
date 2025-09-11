---
layout: page
title: Transcriptomics
description: My transcriptomics portfolio :)
img: assets/img/DancingRNA.jpeg
importance: 1
category: ComBioPortfolio
giscus_comments: true
toc:
  sidebar: left
---

## Introduction

I began learning transcriptomics analysis as my first step into computational biology, aiming to explore the world of cancer biology through non-hypothesis-driven research. I hope that transcriptomics will whisper me toward a fulfilling and exciting journey in the field of oncology.
My heart shakes when analyzing wet lab data, and now it also shakes when I press Enter while analyzing dry lab data.

---

## 1. Data set 1: GSE197576

### 1.1 Analysis overview:

#### 1.1.1 Analysis set 1: From FASTQ file to visualization

1.1 <a href="https://kuchikinamthip.github.io/ComBio_Portfolio/Transcriptome/Hypox/nf/nfcore_Upstream.html">From FASTQ file to gene counts</a> \
1.2 <a href="https://kuchikinamthip.github.io/ComBio_Portfolio/Transcriptome/Hypox/nf/nfcore_Count_ToDESeq2.html">From gene count matrix analyzed to differentially expressed genes by DESeq2 for functional analysis and visualization including</a>

1. Volcano plot
2. PCA
3. Heatmap
4. Over-Representation Analysis (ORA) using GO term and MSigDB
5. Gene Set Enrichment Analysis (GSEA) using fast GSEA

#### 1.1.2. Analysis set 2: From gene count matrix (download from GEO) to visualization

2.1 <a href="https://kuchikinamthip.github.io/ComBio_Portfolio/Transcriptome/Hypox/count_GEO/GEO_Count_ToTPM.html">From gene count matrix to transcripts per Million (TPM)</a> \
2.2 <a href="https://kuchikinamthip.github.io/ComBio_Portfolio/Transcriptome/Hypox/count_GEO/GEO_Count_ToDESeq2.html">From gene count matrix analyzed to differentially expressed genes by DESeq2 for functional analysis and visualization.</a>

### 1.2 Result Discussion

[My analysis set 1](https://kuchikinamthip.github.io/ComBio_Portfolio/Transcriptome/Hypox/nf/nfcore_Count_ToDESeq2.html) is derived from the same wet laboratory data. However, the differences in results and visualizations between [analysis set 1](https://kuchikinamthip.github.io/ComBio_Portfolio/Transcriptome/Hypox/nf/nfcore_Count_ToDESeq2.html) and [analysis set 2](https://kuchikinamthip.github.io/ComBio_Portfolio/Transcriptome/Hypox/count_GEO/GEO_Count_ToDESeq2.html) (this data set) may arise from two points:

1. [The upstream processes I used](https://kuchikinamthip.github.io/ComBio_Portfolio/Transcriptome/Hypox/nf/nfcore_Upstream.html) did not employ the same tools as those used in the publication. This is the limitation of the HPC. The use of different tools and processes might lead to variations in gene count results.

2. The gene count from GEO is presented as gene symbols, which can be duplicated. To manage these duplications, several methods can be employed, such as summation, averaging, or taking the maximum count. In this case, the gene counts from GEO have been processed to address duplicated genes, which may differ from my approach.

In my approach, I try to maintain the ENSEMBL ID from the upstream analysis and change them to gene symbols only for readability in visualizations.

### 1.3 What I have learned from this data set

This transcriptomics analysis marks a significant milestone in my computational biology portfolio, representing a journey of deep exploration and reflection. I meticulously examined each step of the process, documenting my insights and rationale along the way. These detailed explanations can be found within the project files, providing a comprehensive guide to my analytical approach.

Furthermore, a question that arose during the analysis sparked the creation of a blog post: ["What are GO, msigDB, KEGG, ORA, and GSEA in transcriptomics analysis?"](https://kuchikinamthip.github.io/blog/2024/msigDB_ORA_GSEA/) This post delves into the intricacies of these essential tools and concepts, offering a valuable resource for anyone navigating the world of transcriptomics.

---

## Other related posts

- [What are GO, msigDB, KEGG, ORA, and GSEA in transcriptomics analysis?](https://kuchikinamthip.github.io/blog/2024/msigDB_ORA_GSEA/)
- [My personal note about transcriptomics analysis](https://github.com/KuchikiNamthip/RNA-seq_Analysis)

---

## Acknowledgment

- I would like to acknowledge [Dr. Ming (Tommy) Tang](https://x.com/tangming2005) for his encouragement and the valuable knowledge he provided through various online platforms.

- I would like to thank Dr. Patipark Kueanjinda, who kindly supported my learning in transcriptomics.

- I would like to thank all my colleagues for their comments, suggestions, and assistance.

- Lastly, I would like to thank my Ph.D. advisor, [Assoc. Prof. Dr. Siwanon Jirawatnotai](https://scholar.google.ca/citations?user=5nSlAnIAAAAJ&hl=en). Without him, I would not have discovered the exciting world of cancer biology. 🌞🌞 From that point, I expanded my interest to the -omic fields for a deeper understanding. 🤩🤩

---

I'm very happy 🥰 that you are visiting my computational biology portfolio and would be even happier if you could provide suggestions or feedback 🤩.

You can contact me through various online platforms [here 📬](https://kuchikinamthip.github.io/) or leave a comment below using GitHub account. 👇🏼
