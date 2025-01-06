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
2.1 <a href="https://kuchikinamthip.github.io/ComBio_Portfolio/Transcriptome/Hypox/count_GEO/GEO_Count_ToTPM.html">From gene count matrix to transcripts per Million (TPM)</a>  \
2.2 <a href="https://kuchikinamthip.github.io/ComBio_Portfolio/Transcriptome/Hypox/count_GEO/GEO_Count_ToDESeq2.html">From gene count matrix analyzed to differentially expressed genes by DESeq2 for functional analysis and visualization.</a>  

### 1.2 Result Discussion
[My analysis set 1](https://kuchikinamthip.github.io/ComBio_Portfolio/Transcriptome/Hypox/nf/nfcore_Count_ToDESeq2.html) is derived from the same wet laboratory data. However, the differences in results and visualizations between [analysis set 1](https://kuchikinamthip.github.io/ComBio_Portfolio/Transcriptome/Hypox/nf/nfcore_Count_ToDESeq2.html) and [analysis set 2](https://kuchikinamthip.github.io/ComBio_Portfolio/Transcriptome/Hypox/count_GEO/GEO_Count_ToDESeq2.html) (this data set) may arise from two points:

1. [The upstream processes I used upstream processes](https://kuchikinamthip.github.io/ComBio_Portfolio/Transcriptome/Hypox/nf/nfcore_Upstream.html) did not employ the same tools as those used in the publication. This is the limitation of the HPC. The use of different tools and processes might lead to variations in gene count results. 

2. The gene count from GEO is presented as gene symbols, which can be duplicated. To manage these duplications, several methods can be employed, such as summation, averaging, or taking the maximum count. In this case, the gene counts from GEO have been processed to address duplicated genes, which may differ from my approach. 

In my approach, I try to maintain the ENSEMBL ID from the upstream analysis and change them to gene symbols only for readability in visualizations. 

### 1.3 What I have learned from this data set
This is the first transcriptomics analysis oin my computational biology portfolio, I think alwhere I reflect ong and explore every step I ran. Itook. I have mostly explained thoese steps in each file and wrote a blog which camepost that originated from a question while I didI had during the analysis: ["What are GO, msigDB, KEGG, ORA, and GSEA in transcriptomics analysis?"](https://kuchikinamthip.github.io/blog/2024/msigDB_ORA_GSEA/). 

One unique aspect of this data set is the data filtering process. The p-value distribution of the differentially expressed genes is not normally distributed. I learned how to filter the data from a post by [Ming (Tommy) Tang.](https://divingintogeneticsandgenomics.com/)

---
## Other related posts
- [What are GO, msigDB, KEGG, ORA, and GSEA in transcriptomics analysis?](https://kuchikinamthip.github.io/blog/2024/msigDB_ORA_GSEA/)

---

## Acknowledgment
- I would like to acknowledge [Ming (Tommy) Tang](https://x.com/tangming2005) for his encouragement and the valuable knowledge he provided through various online platforms. 

- I would like to thank Dr. Patipark Kueanjinda, who kindly supported my learning in transcriptomics. 

- I would like to thank all my colleagues for their comments, suggestions, and assistance.

- Lastly, I would like to thank my Ph.D. advisor. Without him, I would not have discovered the exciting world of cancer biology. 🌞🌞 From that point, I expanded my interest to the -omic fields for a deeper understanding. 🤩🤩

---
I'm very happy 🥰 that you are visiting my computational biology portfolio and would be even happier if you could provide suggestions or feedback 🤩. 

You can contact me through various online platforms [here 📬](https://kuchikinamthip.github.io/) or leave a comment below using GitHub account. 👇🏼
