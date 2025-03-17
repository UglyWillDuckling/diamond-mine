---
created: 2025-01-02
title: "VMSetError: VirtualBox can't enable the AMD-V extension. Please disable the KVM kernel extension, re - virtualbox.org"
source: https://forums.virtualbox.org/viewtopic.php?t=107117
tags:
  - clippings
  - docker
  - error
  - kvm
related:
  - "[[Atlas/Tools/pc/virtualbox]]"
  - "[[Docker]]"
  - "[[Docker Desktop]]"
---

### [VMSetError: VirtualBox can't enable the AMD-V extension. Please disable the KVM kernel extension, re](https://forums.virtualbox.org/viewtopic.php?p=524088#p524088)

Since some time I cannot start any machine any more. I decided to completely erase virtualbox including the configs, not the machines, and reinstalle again. Version 6.1.38 with ditto guest additions and the extension pack on Ubuntu 22.04 with Gnome.

I created a new machine with the Ubuntu 22.04 image and it did not start with the same error I had with my existing machines earlier:

> Failed to open a session for the virtual machine ubuntu-mate-22.04.  
> VirtualBox can't enable the AMD-V extension. Please disable the KVM kernel extension, recompile your kernel and reboot (VERR\_SVM\_IN\_USE).  
> Result Code: NS\_ERROR\_FAILURE (0x80004005)  
> Component: ConsoleWrap  
> Interface: IConsole {872da645-4a9b-1727-bee2-5585105b9eed}

I found a post on this forum and as a result I checked whether AMD virtualization was enabled in my BIOS: it was. I tried with nested VT-x/AMD-V enabled and disabled. No changes.Imported existing machines did not run either, whether it was an ubuntu or a windows guest. I am not sure what side-effects will pop-up when I recompile the kernel with kvm kernel extension disabled.

I don't understand the message. Does the message VERR\_SVM\_IN\_USE refer to other virtualization software like docker (which I use)?

Anybody any advice?

Attachments

![](https://forums.virtualbox.org/images/upload_icons/txt.gif) [ubuntu-mate-22.04-2022-09-16-15-31-38.log](https://forums.virtualbox.org/download/file.php?id=47685)

(98.44 KiB) Downloaded 143 times

[mpack](https://forums.virtualbox.org/memberlist.php?mode=viewprofile&u=17541)

Site Moderator

**Posts:** [39134](https://forums.virtualbox.org/search.php?author_id=17541&sr=posts)

**Joined:** 4. Sep 2008, 17:09

**Primary OS:** MS Windows 10

**VBox Version:** VirtualBox+Oracle ExtPack

**Guest OSses:** Mostly XP

### [Re: VMSetError: VirtualBox can't enable the AMD-V extension. Please disable the KVM kernel extension](https://forums.virtualbox.org/viewtopic.php?p=524089#p524089)

[Post](https://forums.virtualbox.org/viewtopic.php?p=524089#p524089 "Post") by **[mpack](https://forums.virtualbox.org/memberlist.php?mode=viewprofile&u=17541)** » 16\. Sep 2022, 16:17

Is the quoted text not perfectly clear?

You can't have two bits of software using your AMD processor's hardware virtualization feature (SVM aka AMD-v) at the same time. Similar to how only one app at a time can use the serial port.

In your case you have *KVM* enabled - probably in the kernel if you didn't explicit run another VM app. KVM is using SVM and this prevents *VirtualBox* from running because it also needs SVM.

Obvious the feature must be enabled in the BIOS otherwise neither bit of software could be using it.


<mark style="background: #BBFABBA6;">In my case (Kubuntu 22.04), I had to stop the docker-desktop service. That fixed it</mark>
