---
layout: distill
title: Containerization using Docker - [Proj:My Computer Workbench]
description:
tags: Unix Linux Docker Container
giscus_comments: true
date: 2024-09-26
related_posts: false
categories: ComputerWorkbench
featured: false

authors:
  - name: Krittiyabhorn (Namthip) Kongtanawanich
    url: "https://kuchikinamthip.github.io/"
    affiliations:
      name: Faculty of Medicine Siriraj Hospital, Mahidol University, Thailand

bibliography: 2018-12-22-distill.bib

toc:
  - name: Introduction
  - name: Containerize (Docker)
---

## Introduction

For this part of [My Computer Workbench](https://kuchikinamthip.github.io/projects/ComBio), I would like to explain the concept of containers and their benefits in computational biology.

## Containerize (Docker)

To solve the Linux problem and address the issue of reproducibility, I use [container](https://www.docker.com/resources/what-container/) called ["Docker"](https://www.docker.com/).

The concept of containerization is to include all the necessary components, such as the operating system, programs, and dependencies, within the container. This ensures that the container is always ready to use without any installation issues.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/ComSetting/docker.png" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Concept of Docker container
</div>
