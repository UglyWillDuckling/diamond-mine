---
title: "\"Unable to find root device\" on a fresh ArchLinux install"
source: "https://superuser.com/questions/769047/unable-to-find-root-device-on-a-fresh-archlinux-install"
author:
  - "[[Super User]]"
published: 2014-06-15
created: 2025-03-01
description: "I have installed the latest version of ArchLinux (2014.06.01) on a MacBook Pro 8,1 (15\", if that matters regarding hardware) dual-booting with OSX following the instructions in the official install..."
tags:
  - "clippings"
---
I have installed the latest version of ArchLinux (2014.06.01) on a MacBook Pro 8,1 (15", if that matters regarding hardware) dual-booting with OSX following the instructions in the [official install guide](https://wiki.archlinux.org/index.php/Installation_Guide). However, when try and reboot into the newly installed system, it drops me into a recovery shell:

```
ERROR: device 'UUID=<snip>' not found. Skipping fsck.
ERROR: Unable to find root device 'UUID=<snip>'.
You are being dropped to a recovery shell
    Type 'exit' to try and continue booting
sh: can't access tty: job control turned off
[rootfs /]# 
```

(I removed the UUID because I didn't want to type it out, but it is the same as the one given to me by `blkid` (from the install disk) for the partition ArchLinux is installed on)

[Other](https://bbs.archlinux.org/viewtopic.php?id=135288) [online](https://bbs.archlinux.org/viewtopic.php?pid=1311047) [sources](http://fanweiphysicist.blogspot.com.ar/2012/02/unable-to-find-root-device-archlinux.html) suggest this is due to an outdated `pacman`, `udev`, `filesystem` or `linux` package. However, they describe this problem only after a kernel update from a working system, not a fresh install. I force-reinstalled these packages from the `arch-chroot` environment while booted to the install disk, but that did not change the situation.

Instead, a little bit of experimentation with my `grub.cfg` shows that whatever is complained about is the `root` parameter to the `linux` command selecting what `vmlinuz` file to use. Indeed, changing `root=UUID=<snip>` to `root=LABEL=ArchLinux` or `root=/dev/sda8` (both describe where ArchLinux is installed and I have certainly used the second version successfully before with another distribution) gives `Unable to find root device 'LABEL=ArchLinux'` and `Unable to find root device '/dev/sda8'` respectively. Furthermore, GRUB seems to be able to find the partition by UUID, only the linux kernel complains about it not being found, as the initial ramdisk is properly loaded (ie. this is not a GRUB error as described [here](https://superuser.com/questions/359417/linux-installation-wont-boot-due-to-grub-no-such-device-error) but rather a linux error).

As a side note: the recovery shell is severely limited, and standard output does not appear to work properly. Nevertheless, `ls` works, and listing files shows a basic (temporary) file system, but all disk devices appear to be missing from `/dev`. However, I don't know if this is part of the error or not.

This is similar, but not the same as [Linux doesn't find root file system when booting](https://superuser.com/questions/759311/linux-doesnt-find-root-file-system-when-booting), as the partition was *ext4* from the beginning. Also not exactly the same, but maybe relevant is [Unable to boot ArchLinux on Macbook Pro 7.1 - drops to recovery shell](https://superuser.com/questions/318866/unable-to-boot-archlinux-on-macbook-pro-7-1-drops-to-recovery-shell), however, there, it drops into a `ramfs` shell instead of a `rootfs` shell and the error messages differ.