---
title: "How to Access Your iPhone, iPad, iPod on Ubuntu, Manjaro, Arch Linux"
source: "https://techblog.dev/posts/2021/10/how-to-access-your-iphone-ipad-ipod-on-ubuntu-manjaro-arch-linux/"
author:
  - "[[Muzaffar Rayyan Auhammud]]"
published: 2021-10-03
created: 2024-12-31
description: "This tutorial explains how to transfer files to or from an iPhone/iPad/iPod on Ubuntu, Manjaro, and Arch Linux."
tags:
  - "clippings"
---
This tutorial explains how to transfer files to or from an iPhone/iPad/iPod on Ubuntu, Manjaro, and Arch Linux.

![[~/×/0dcb41bc973d214081aeb83739b4d80a_MD5.webp]]

If you have tried downloading iTunes for Ubuntu, Arch Linux, Manjaro, or any other Linux distro in the past, you might have been confronted with a nasty surprise: “There’s no iTunes for Ubuntu / Arch Linux ! How do I access my iPhone / iPad / iPod from Linux !?” That was my reaction when I tried to access my iPad from Linux out of curiosity. Previously, I had always transferred files between my iPad and my computer using iTunes on Windows.

The bitter truth is that a native version of iTunes is not available for Linux yet. At the time of writing this blog post, there is no official support for iTunes on operating systems other than Windows and Mac OS. Hopefully this will change in the future. For the time being, the least we can do is make use of some workarounds.

While it’s possible to run the Windows version of iTunes on Linux using WINE, this method doesn’t always work with all versions of iTunes. In this blog post, I’m going to share a native solution that is guaranteed to work well on Linux.

## No iTunes? iFuse to the Rescue!

It’s possible to access your iPhone/iPad from Linux without using iTunes at all. “Without iTunes you say !?” You read that right :) We can make Linux communicate directly with iDevices, thereby cutting the need for iTunes completely.

**iFuse** is an open source *“FUSE filesystem driver which uses libiphone to connect to iPhone and iPod Touch devices without needing to “jailbreak” them.”*

In order to install iFuse, open a Terminal window and run the appropriate command below depending on your Linux distro:

1. For Ubuntu and Debian derivatives:

2. For Manjaro / Arch Linux:

## Step 2: Reboot Computer

Next, reboot your computer for the changes to take effect.

## Step 3: Connect the iPhone / iPad Using USB Cable

At this point, connecting your iPhone/iPad to your computer using a USB cable should bring up a prompt on your iPhone/iPad asking if you want to trust this computer. Touch **“Trust”** to give your computer access to the device.

![[~/×/2b05fef6a8496fd96dc905fa1fe53c8e_MD5.webp]]

## Step 4: Mount the iPhone / iPad Using iFuse

Run the following command in your Terminal to mount the iDevice. Here, we are mapping the contents of the iPhone or iPad to `~/ipad` for accessibility. You can use any other directory if you wish.

## Step 5: Access Your iPhone / iPad Contents

If you now open your file manager (e.g Nautilus), you should see two additional entries: One to access the documents for the various apps on your iDevice, and another one to access the Camera Roll and Books.

![[~/×/a59536932b44cecf16ef007542bc21a3_MD5.png]]

## Step 6: Copy Files from Linux to the Files App on iPhone / iPad

The 2 mount points that iFuse created will only give you access to the Documents directory (folder) of apps that support file sharing, and also to the camera roll and books on your iDevice.

If you want to transfer files from your Linux machine to the `Files` app on your iPhone / iPad, the following workaround will enable you to do so.

1. From your iDevice, install an app that allows file sharing. `VLC media player` and `Firefox` (amongst other apps) have that feature. I personally use VLC media player as it has a neat option for wireless transfer, but Firefox should be fine as well.
2. Open your file manager on Linux and click the **Documents** tab that iFuse has added, and you will see all apps that support file sharing.

![[~/×/6c1712c8ebb07c3c5dddea82bc87e317_MD5.png]]

3. Double click on any app that you want to use, and you will be taken to the document root of that app. Here I’m using `VLC`. You can now copy any file or directory (folder) into the app’s document root. As an example, I have copied an image `screenshot.png` into the document root of the VLC app.

![[~/×/e3a82152f233e39ae9a531256ca3f30c_MD5.png]]

4. Next, open the `Files` app on your iPhone/iPad. Then, swipe on the left edge of the screen to reveal the sidebar, and select **“On My iPad”**.

![[~/×/753ab31b8fa83c3bbd91aad7000fb601_MD5.png]]

5. Inside the `Files` app on your iPhone/iPad, open the app’s folder (e.g VLC) where you copied your files from Linux. Then, do a **long press** on the file / directory that you want and select **“Move”**.

![[~/×/33b54928c30929a8fd5258b2c9c69739_MD5.png]]

6. Make sure **“On My iPad”** is highligted and select **“Move”**.

![[~/×/1de15465842b683249eafab2953c32a2_MD5.png]]

7. And voila! If you go back to the first screen of the `Files` app, you should see the file or directory that you copied in the `Files` app on your iPhone/iPad.

![[~/×/94e416b01ff7b6657554b327dca0659d_MD5.png]]

## Conclusion

It is now possible to transfer files between your iPhone/iPad and your Linux machine without iTunes. iFuse seamlessly integrates with Linux and hides all complexities of the communication happening between your iDevice and your computer, without requiring any additional configuration from our part. Accessing the Camera Roll and documents of your iPhone/iPad and transferring files from Linux is now a piece of cake :)

[https://forum.manjaro.org/t/error-installing-ifuse-to-access-ipad-device-content/73124](https://forum.manjaro.org/t/error-installing-ifuse-to-access-ipad-device-content/73124)

[https://manpages.ubuntu.com/manpages/xenial/man1/ifuse.1.html](https://manpages.ubuntu.com/manpages/xenial/man1/ifuse.1.html)

[https://github.com/libimobiledevice/ifuse](https://github.com/libimobiledevice/ifuse)