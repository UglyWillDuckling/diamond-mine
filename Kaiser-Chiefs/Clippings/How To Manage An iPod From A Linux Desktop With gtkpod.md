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

![](https://www.howtoforge.com/images/linux_gtkpod_ipod/9.jpg)

This is how it should look if your iPod got mounted:

![](https://www.howtoforge.com/images/linux_gtkpod_ipod/10.jpg)

### 3 Find Out About The iPod's Mountpoint

We need to find out about our iPod's mountpoint so that we can properly configure gtkpod later on. Right-click on the iPod icon on your desktop and select Properties:

![](https://www.howtoforge.com/images/linux_gtkpod_ipod/49.jpg)

In the Properties window you can see the mountpoint of your iPod (in my case it's /media/ipod):

![](https://www.howtoforge.com/images/linux_gtkpod_ipod/50.jpg)

### 4 Configure gtkpod

Now start gtkpod (on PCLinuxOS 2007, it's under Multimedia > Sound > GTKPod):

![](https://www.howtoforge.com/images/linux_gtkpod_ipod/11.jpg)

This is how gtkpod looks:

![](https://www.howtoforge.com/images/linux_gtkpod_ipod/12.jpg)

Now we must configure gtkpod so that it knows where our iPod got mounted and what iPod model we use. This configuration has to be done only once - gtkpod remembers these settings for the future. Go to Edit > Edit Repository/iPod Options:

![](https://www.howtoforge.com/images/linux_gtkpod_ipod/14.jpg)

In the Repository Options window, click on the Add new repository/iPod button:

![](https://www.howtoforge.com/images/linux_gtkpod_ipod/15.jpg)

A new window named Create Repository comes up. First we tell gtkpod where our iPod got mounted, so we click on the Browse button right to iPod mountpoint:

![](https://www.howtoforge.com/images/linux_gtkpod_ipod/16.jpg)

A new window opens where you can browse your filesystem. Browse to where your iPod got mounted (see chapter three; usually it's something like /media/ipod or /mnt/ipod) and click on the OK button:

![](https://www.howtoforge.com/images/linux_gtkpod_ipod/17.jpg)

Next we select our iPod model in the drop-down menu right to Model. I have a fifth generation iPod nano (2GB, black):

![](https://www.howtoforge.com/images/linux_gtkpod_ipod/18.jpg)

Finally, give your repository a unique name in the Repository name field, then click on OK to leave the Create Repository window:

![](https://www.howtoforge.com/images/linux_gtkpod_ipod/19.jpg)

Click on OK again to leave the Repository Options window:

![](https://www.howtoforge.com/images/linux_gtkpod_ipod/20.jpg)

That's it for the gtkpod configuration. As mentioned earlier, this has to be done only once.