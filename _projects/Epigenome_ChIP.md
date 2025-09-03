---
layout: page
title: Epigenomics (ChIP-seq)
description: My epigenomic (ChIP-seq) portfolio 
img: assets/img/Epigenome.jpeg
importance: 1
category: ComBioPortfolio
giscus_comments: true
toc:
  sidebar: left
---
## Introduction
Epigenomics ignited my passion for exploring the intricate world of cancer biology through the lens of unbiased computational approaches. I envision epigenomics as the dynamic blueprint of life, orchestrating the symphony of gene expression. The completion of the Human Genome Project unveiled the secrets of our DNA, but it's the epigenome that holds the key to understanding how this genetic code is regulated and expressed.

Inspired by the groundbreaking ENCODE project, which illuminated the critical role of the epigenome, I embarked on a journey into the fascinating realm of ChIP-seq analysis. This powerful technique has allowed me to unravel the complex interplay between promoters, transcription factors, transcription start sites, enhancers, and histone modifications—the very machinery that drives gene expression. This knowledge seamlessly integrates with my background in transcriptomics [(see my transcriptomics portfolio)](https://kuchikinamthip.github.io/projects/Transcriptome/), providing a holistic view of cellular regulation.

My next frontier is to delve into the world of methylation analysis, further expanding my epigenomic toolkit. With each step, I'm driven by the prospect of uncovering the epigenetic intricacies that underlie cancer development and progression, ultimately contributing to the advancement of precision medicine.

---
## 1. Data set 1: GSE66083 (CURRENTLY DEVELOP!)
### 1.1 Analysis overview:
#### 1.1.1 Analysis set 1: From FASTQ file to visualization 
1.1 <a href="https://kuchikinamthip.github.io/ComBio_Portfolio/Epigenome_ChIP-seq/2015-Zanconato/nfcore_Upstream.html">From FASTQ file to peak (`.bed` file)</a> \
1.2 From peak data analyzed to visualization including 
1. <a href="https://kuchikinamthip.github.io/ComBio_Portfolio/Epigenome_ChIP-seq/2015-Zanconato/Downstream1_Fig1a_1b.html">Figure 1a & 1b:</a>  Venn diagram show the overlapping peaks between each transcription factors.  
2. <a href="https://kuchikinamthip.github.io/ComBio_Portfolio/Epigenome_ChIP-seq/2015-Zanconato/Downstream1_Fig_1c.html">Figure 1c:</a> Peak density of TEAD4 relative to the summits of the overlapping YAP/TAZ peaks
3. Figure 1d --> CURRENTLY DEVELOP
4. <a href="https://kuchikinamthip.github.io/ComBio_Portfolio/Epigenome_ChIP-seq/2015-Zanconato/Downstream1_Fig_1f.html">Figure 1f:</a> Stack bar showed distance from YAP, TAZ, TEAD4, and YAP/TAZ/TEAD4 peaks to the nearest TSS
5. Figure 1g --> CURRENTLY DEVELOP
6. Figure 1h --> CURRENTLY DEVELOP
7. Figure 1i --> CURRENTLY DEVELOP
8. Figure 1j --> CURRENTLY DEVELOP
9. Figure 1k --> CURRENTLY DEVELOP

### 1.2 Result Discussion
The differences in results and visualizations between original paper and my re-produced figures may arise from the points below:

1. The upstream and downstream processes I used did not employ the same tools as those used in the publication. This is the limitation of the HPC. The use of different tools, processes, and reference genome version might lead to variations in gene count results. 


### 1.3 What I have learned from this data set
This is the first epigenomics analysis. I picked ChIP-seq first because it is closely linked to transcriptomics analysis. I spent my time during the New Year holiday reading about ChIP-seq analysis; it is totally a new world compared to RNA-seq analysis. Many details of biology and algorithms popped up along the way. I listed some important issues here.

1. Peak calling mode: whether `narrowPeak` or `broadPeak` should be used for each transcription factor/histone modifier.
2. Some configurations for single-end and paired-end `.fastq `files, such as `-no-model` and `-extend-size` in `macs3` software.
3. Blacklisted regions that should always be excluded from our data.
4. The reason that when `_narrow/boardPeak.bed` or `_summit.bed` should be used.

---
## Other related posts
- [My personal note about ChIP-seq analysis](https://github.com/KuchikiNamthip/ChIP-seq_Analysis)

---

## Acknowledgment
- I would like to acknowledge [Dr. Ming (Tommy) Tang](https://x.com/tangming2005) for his encouragement and the valuable knowledge he provided through various online platforms. The tutorials, books, blogs, and many others that Tommy created with great explaination from principle to advance about ChIP-seq. Those all have made this portfolio possible.

- I would like to thank [Prof. Dr. Xiaole Shirley Liu](https://liulab-dfci.github.io/). I do not persocally know her, however, STAT115 (a Harvard course she taught) help me love basic and principle understanding of epigenetics and computational analysis. 

- I would like to thank [Prof. Dr. Apiwat Mutirangura](https://scholar.google.co.th/citations?user=KBpzI14AAAAJ&hl=en). I had been trained in his lab at Chulalongkorn University when I was an undergraduate student; that was the first and great time I learned about epigenomics.

- Lastly, I would like to thank my Ph.D. advisor, [Assoc. Prof. Dr. Siwanon Jirawatnotai](https://scholar.google.ca/citations?user=5nSlAnIAAAAJ&hl=en). Without him, I would not have discovered the exciting world of cancer biology. 🌞🌞 From that point, I expanded my interest to the -omic fields for a deeper understanding. 🤩🤩

---
#### README.please
I am currently collaborating on ChIP-seq and RNA-seq analysis with my Ph.D. advisor and a very nice postdoc in our lab 🤓. 

Accordingly, this portfolio might be paused for a while 🥹. \
I will be back to update it as soon as possible after I have finished those exciting real-world analyses 🤩.

---
I'm very happy 🥰 that you are visiting my computational biology portfolio and would be even happier if you could provide suggestions or feedback 🤩. 

You can contact me through various online platforms [here 📬](https://kuchikinamthip.github.io/) or leave a comment below using GitHub account. 👇🏼
