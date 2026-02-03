---
title: How To Manage An iPod From A Linux Desktop With gtkpod
source: https://www.howtoforge.com/linux_gtkpod_ipod
author:
  - "[[HowtoForge]]"
published: 
created: 2025-01-01
description: How To Manage An iPod From A Linux Desktop With gtkpodThis article shows how you can use an iPod on a Linux desktop with gtkpod(a graphical user...
tags:
  - clippings
  - iPod
  - linux
related:
  - "[[ipod]]"
  - "[[linux]]"
  - "[[gtkpod]]"
---

[[gtkpod]]

## How To Manage An iPod From A Linux Desktop With gtkpod

Version 1.0  
Author: Falko Timme  

This article shows how you can use an [[ipod]] on a Linux desktop with [gtkpod](http://www.gtkpod.org/about.html) (a graphical user interface for Apple's iPod). It covers how you can upload MP3 files from your desktop to your iPod, download MP3 files from your iPod to your desktop, how you can delete files on the iPod, and how you can create and modify playlists. Normally, Apple's iTunes software is needed to manage an iPod, but iTunes is not available for Linux. Fortunately, there are Linux alternatives such as gtkpod that can handle the task.

I do not issue any guarantee that this will work for you!

### 1 Preliminary Note

I have tested this with an iPod nano on a PCLinuxOS 2007 desktop where I have installed gtkpod using the PCLinuxOS package manager. If gtkpod isn't already installed on your desktop, install it using your distribution's package manager. The usage of gtkpod is the same, regardless of the distribution.

### 2 Plug In Your iPod

First plug in your iPod into your desktop system using the iPod USB cable. The iPod should be mounted automatically, and you should find an iPod icon on your desktop. On my PCLinuxOS 2007 desktop, I get asked what to do with the new medium - I select Open in New Window to make sure the iPod really gets mounted (I close the new window then). Depending on your distribution, your iPod might as well be mounted at once, without a question.

![[~/×/0a655047d027d6c97d56a5bd341863ad_MD5.jpg]]

This is how it should look if your iPod got mounted:

![[~/×/d4d28bc2508e643f4c453d7eee791198_MD5.jpg]]

### 3 Find Out About The iPod's Mountpoint

We need to find out about our iPod's mountpoint so that we can properly configure gtkpod later on. Right-click on the iPod icon on your desktop and select Properties:

![[~/×/ddf71ae8dfa7a969a04e4a8c4cd176e8_MD5.jpg]]

In the Properties window you can see the mountpoint of your iPod (in my case it's /media/ipod):

![[~/×/b77d8b0457cc3dd8d69822e8eb88b058_MD5.webp]]

### 4 Configure gtkpod

Now start gtkpod (on PCLinuxOS 2007, it's under Multimedia > Sound > GTKPod):

![[~/×/729d9c94c4c1170f16822869b55b1a41_MD5.webp]]

This is how gtkpod looks:

![[~/×/6440ed78d9685e9cfce76f9d06c769cd_MD5.jpg]]

Now we must configure gtkpod so that it knows where our iPod got mounted and what iPod model we use. This configuration has to be done only once - gtkpod remembers these settings for the future. Go to Edit > Edit Repository/iPod Options:

![[~/×/f5d27752f252893b5c233a65c6ce7393_MD5.jpg]]

In the Repository Options window, click on the Add new repository/iPod button:

![[~/×/c1be83a0ff27dcb7621bc71958ec15a8_MD5.jpg]]

A new window named Create Repository comes up. First we tell gtkpod where our iPod got mounted, so we click on the Browse button right to iPod mountpoint:

![[~/×/ac3dc71911fc47214bb64d89bc84aa8c_MD5.jpg]]

A new window opens where you can browse your filesystem. Browse to where your iPod got mounted (see chapter three; usually it's something like /media/ipod or /mnt/ipod) and click on the OK button:

![[~/×/8a9965f1f8da9b34f8773b8ce83492f6_MD5.jpg]]

Next we select our iPod model in the drop-down menu right to Model. I have a fifth generation iPod nano (2GB, black):

![[~/×/364be56568f3afd8a4d0d33c3ec8a597_MD5.webp]]

Finally, give your repository a unique name in the Repository name field, then click on OK to leave the Create Repository window:

![[~/×/2ef505a3aba70171ab7e11b6adf82e64_MD5.jpg]]

Click on OK again to leave the Repository Options window:

![[~/×/73a4bef378535d9439f7bce053c9d61f_MD5.jpg]]

That's it for the gtkpod configuration. As mentioned earlier, this has to be done only once.