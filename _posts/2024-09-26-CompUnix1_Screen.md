---
layout: distill
title: Screen command to Maintain Terminal Screen - [Unix trick]
description: 
tags: Unix Linux UnixTrick
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
  - name: Setting up screen
  - name: Useful command and shortcuts for screen

---
## Introduction

I found that one of the problems in cloud computing and remote HPC is the disconnection of the signal. Most of the processes on cloud and HPC are heavily worked and take a long analysis time. If the connection on your local computer is poor, the screen is lost, which means what you run on the remote computer stops. To solve this issue, I have tried many ways, such as using `snap` or running a Docker container in the background. However, the most convenient way is using the command `screen`.

## Setting up screen
First, you need to install `screen` on your remote computer (either cloud computing or remote HPC). Now the screen can work properly just by calling the `screen` command. However, I want it to be easier to work with. Tommy suggested using the screen command and `.screenrc` file in [his video](https://www.youtube.com/watch?v=7t9LdMPPY7g&t=231s). I followed his suggestion by doing the steps below.

### 1. Install screen
First, install screen if it is available on your system. For HPC, if you can't run the command below, it means that you are not an admin. The installation requires the system administrator (root).
```{bash}
sudo apt install screen
```
### 2. Create a `.screenrc` file at `$HOME`
Then, go to your home directory and create a `.screenrc` file using `nano`.
```{bash}
# Go to home directory
cd ~

# Create a `.screenrc` file using nano
nano .screenrc
```
Put the script below to the `.screenrc` file.
```{bash}
# Script for `.screenrc` file on home directory
startup_message off
vbell off
autodetach on
shell -$SHELL

bind c screen 1
bind ^c screen 1
bind 0 select 10                                                            
screen 1

term xterm-256color

hardstatus alwayslastline 
# Very nice tabbed colored hardstatus line
hardstatus string '%{= kG}[ %{G}%H | %{R}%l %{g}][%= %{= kw}%?%-Lw%?%{r}(%{W}%n*%f%t%?(%u)%?%{r})%{w}%?%+Lw%?%?%= %{g}][%{B} %d/%m %{W}%c %{g}]'
 
# change command character from ctrl-a to ctrl-b (emacs users may want this)
#escape ^Bb
 
# Hide hardstatus: ctrl-a f 
bind f eval "hardstatus ignore"
# Show hardstatus: ctrl-a F
bind F eval "hardstatus alwayslastline"
```
You can use the `ls` and `cat` commands to check it, then re-run the `screen` command again.
```{bash}
# To list all objects including hided object.
ls -al

# To obserse the `.screenrc` file
cat .screenrc
```
### 3. Test the `screen` command
To start using screen, we run this command.
```{bash}
screen
```
This is the terminal after adding the `.screenrc` file and ran the `screen` command.
<center> ![](pic/screen_command.jpeg){width=50%} </center> \

## Useful command and shortcuts for screen
Here is the useful commands for using screen.
```{bash}
# list all screen
screen -ls

# resume the screen section
screen -r # if you have only one screen
screen -r <screen no> # if you have more than one screen, you will need to define which one you want to open
```

After you open the screen as shown in the picture, these are the useful commands that I often use. \
`Ctrl+a` `c` : Create a new window (with shell). \
`Ctrl+a` `0` : Switch to window 0 (by number). \
`Ctrl+a` `X` : Close the current region. \
`Ctrl+a` `d` : Detach the screen section. \
`Ctrl+a` `k` : Kill the screen section. \

Please note that after the computer is shut down, all screens will be terminated. If you are running something on the screen, such as Dockerized R Studio, don't forget to close it properly. Otherwise, it might affect your files.
