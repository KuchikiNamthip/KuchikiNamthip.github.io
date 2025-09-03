---
layout: page
title: 3D-SiSP for 3D multi-spheroid quantitative analysis
description: Scientific Reports publication on 3D multi-spheroid CSC models and drug response profiling
img: assets/img/publication_preview/3D-SiSP-new.png
importance: 2
category: Research
related_publications: true
giscus_comments: true
toc:
  sidebar: left
---

## High-content confocal analysis of tumorigenesis, cancer stem cells, and drug response in 3D cholangiocarcinoma cultures

<!-- ✅ Research Highlights -->
![Peer Reviewed](https://img.shields.io/badge/Peer--reviewed-✔-brightgreen?style=for-the-badge&logo=academia)
![Journal](https://img.shields.io/badge/Scientific%20Reports-Nature%20Portfolio-blueviolet?style=for-the-badge&logo=nature)
[![DOI](https://img.shields.io/badge/DOI-10.1038%2Fs41598--025--16144--9-orange?style=for-the-badge&logo=doi)](https://doi.org/10.1038/s41598-025-16144-9)  

<!-- 📑 Protocols -->
[![Protocols.io](https://img.shields.io/badge/Protocols.io-Available-ff69b4?style=for-the-badge&logo=protocols.io)](https://www.protocols.io/private/ECE27AC5049811EFBE540A58A9FEAC02)  

<!-- 💻 Versions + Code -->
[![3D-SiSP Code Source](https://img.shields.io/badge/GitHub-3D--SiSP%20R%20Code%20Tutorial-lightgrey?style=social&logo=github)](https://kuchikinamthip.github.io/projects/3D-SiSP)
![R Version](https://img.shields.io/badge/R-4.3.3-276DC3?style=flat&logo=r)

---

### 📖 Brief introduction
<div class="row align-items-center">
  <div class="col-md-8">
    <div>

      <p>
      <b>3D Surface Integrative Spheroid Profiling (3D-SiSP)</b> is a high-content confocal imaging–based methodology developed for <b>quantitative analysis of 3D multi-spheroid cultures</b> in cholangiocarcinoma (CCA). 
      </p>

      <p>
        This approach was designed to overcome the limitations of traditional 2D cultures and length-based spheroid measurements by providing a flexible and scalable framework that captures both spheroid morphology and cancer stem cell (CSC) dynamics.  
      </p>

      <p>
        On this page, we provide two key resources linked to our <b>Scientific Reports (2025)</b> publication {% cite Kongtanawanich2025_SciRep %}:  
      </p>

      <ul>
        <li><b>Wet-lab protocols</b>: step-by-step laboratory methods published on <a href="https://www.protocols.io/">protocols.io</a>, covering spheroid preparation, CSC biosensor use, tumorigenicity assays, and drug-response evaluation.</li>
        <li><b>R coding tutorials</b>: five analysis modules that guide users through quantitative image analysis, CSC differentiation assessment, and drug-response profiling in 3D cultures.</li>
      </ul>

      <p>
        Together, these resources allow researchers to reproduce the experiments, adapt the pipelines to their own 3D culture systems, and integrate both <b>experimental</b> and <b>computational</b> workflows for CSC research and anti-cancer drug testing.
      </p>
    </div>
  </div>

  <div class="col-md-4 text-right" style="max-width: 28%;">
    {% include figure.liquid loading="eager" path="assets/img/3D-SiSP/3D-method.jpg" title="3D-SiSP wet and dry methods" class="img-fluid rounded z-depth-1 mx-auto" style="max-width: 28%;" %}
  </div>
</div>

---

### 🧪 Wet-Lab Protocols
The protocols were published in [protocol.io](https://www.protocols.io/) in the colletion name [3D-SiSP: High-content confocal analysis of tumorigenesis, cancer stem cells, and drug response in 3D cholangiocarcinoma cultures](https://www.protocols.io/private/ECE27AC5049811EFBE540A58A9FEAC02)

1. [Evaluating the in vitro tumorigenicity of cancer stem cell candidate using the 3D multi-spheroid model.](https://www.protocols.io/private/94571B42046A11EFBE540A58A9FEAC02)
<div class="row">
  <div class="col-sm mt-3 mt-md-0">
    {% include figure.liquid loading="eager" path="assets/img/3D-SiSP/wet-proc1.png" title="Schematic diagram of the in vitro tumorigenesis assessment by the 3D-SiSP." class="img-fluid rounded z-depth-1" %}
  </div>
</div>

<div class="caption">
    Schematic diagram of the in vitro tumorigenesis assessment by the 3D-SiSP. (Created by BioRender.com/Mahidol University)
</div>

2. [Evaluating CSC content and cytotoxicity under anti-cancer drug treatments for the 3D multi-spheroid model.](https://www.protocols.io/private/CED0FA6187C711F0B2120A58A9FEAC02)
<div class="row">
  <div class="col-sm mt-3 mt-md-0">
    {% include figure.liquid loading="eager" path="assets/img/3D-SiSP/wet-proc2.png" title="Schematic diagram of the 3D multi-spheroid model for evaluating anti-cancer drugs in CCA CSCs" class="img-fluid rounded z-depth-1" %}
  </div>
</div>

<div class="caption">
    Schematic diagram of the 3D multi-spheroid model for evaluating anti-cancer drugs in CCA CSCs (Created by BioRender.com/Mahidol University)
</div>

---

### 🚀 R Coding Tutorial
#### ⚙️ Installation requirements
   **R (≥ 4.3.3)** and RStudio  
   See [R installation guide](https://rstudio-education.github.io/hopr/starting.html).

#### 🔬 Analysis Modules
The analysis tutorial is composed of **5 coding modules**:  

1. Evaluating the **in vitro tumorigenicity** of CSC candidate for the 3D multi-spheroid model **by determining spheroid number using 3D-SiSP analytical method.**: 
   - [Material](https://github.com/KuchikiNamthip/3D-SiSP/tree/main/1-2_InVitroTumorigenesis/input) 
   - [R coding tutorial](https://kuchikinamthip.github.io/3D-SiSP/1-2_InVitroTumorigenesis/1_NoSphere/script/1_Tumorigenic_SpheroidNo_WtCutOff-SISP.html) 
   
2. Evaluating the **in vitro tumorigenicity** of CSC candidate for the 3D multi-spheroid model **by determining object area using 3D-SiSP analytical method.**: 
   - [Material](https://github.com/KuchikiNamthip/3D-SiSP/tree/main/1-2_InVitroTumorigenesis/input) 
   - [R coding tutorial](https://kuchikinamthip.github.io/3D-SiSP/1-2_InVitroTumorigenesis/2_ObjectValue/script/2_Tumorigenic_ObjArea_NoCutOff-SISP.html)  

3. Investigating the relationship between **spheroid size** and their **differentiation status** for the 3D multi-spheroid model using 3D-SiSP analytical method.: 
   - [Material](https://github.com/KuchikiNamthip/3D-SiSP/tree/main/3_Differentiation_Spheroid/input) 
   - [R coding tutorial](https://kuchikinamthip.github.io/3D-SiSP/3_Differentiation_Spheroid/script/3_DiffSpheroid_Size-SISP.html)
   
4. Evaluating **CSC content** and **cytotoxicity under anti-cancer drug treatments** for the 3D multi-spheroid model using 3D-SiSP analytical method.: 
   - [Material](https://github.com/KuchikiNamthip/3D-SiSP/tree/main/4_Cytotoxicity_DoubleYaxis/input) 
   - [R coding tutorial](hhttps://kuchikinamthip.github.io/3D-SiSP/4_Cytotoxicity_DoubleYaxis/script/4_CytotoxicEvaluate_DetailExplain_A_ForPublish-SISP.html)
   
5. **Comparing CSC content among cytotoxic drugs** across a range of spheroid viability index.: 
   - [Material](https://github.com/KuchikiNamthip/3D-SiSP/tree/main/5_CompareCSCcontent_amongDrugs/input) 
   - [R coding tutorial](https://kuchikinamthip.github.io/3D-SiSP/5_CompareCSCcontent_amongDrugs/script/5_3D_AUCofCSCcontent_Trapizoid_ForPublish-SISP.html) 

---
### 🧮 Citation

If you use 3D-SiSP in your research, please cite:

Kongtanawanich, K., Jamnongsong, S., Hokland, M. et al. High-content confocal analysis of tumorigenesis, cancer stem cells, and drug response in 3D cholangiocarcinoma cultures. *Sci Rep* 15, 31387 (2025). DOI: [10.1038/s41598-025-16144-9](https://doi.org/10.1038/s41598-025-16144-9)

---

### 👩‍🔬 Contributors
This project is developed and maintained by  
**Namthip Krittiyabhorn Kongtanawanich** ([@KuchikiNamthip](https://kuchikinamthip.github.io/)) at the **Siriraj Center of Research Excellence for Precision Medicine and Systems Pharmacology**, Faculty of Medicine Siriraj Hospital, Mahidol University, Bangkok, Thailand:contentReference.