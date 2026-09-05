---
title: Arch Linux tty5 Issue
source: https://chatgpt.com/c/6a6901f2-8060-83eb-836f-ccde7a2eb058
author:
published:
created: 2026-07-28
description: ChatGPT conversation with 8 messages
tags:
  - incident
---
dio [[Incident - Arch Linux corrupt or bad installation]]
___

This error:

```
error while reading file /var/lib/pacman/local/systemd/mtree
Unrecognized archive format
no mtree file
```

means the **pacman database entry for `systemd` is corrupted**. The package itself may be fine, but the metadata pacman uses to verify installed files is damaged.

This can happen after filesystem corruption (which matches your earlier `fsck` repair).

### Fix the corrupted pacman metadata

Inside `arch-chroot`:

#### 1. Check the package database entry

```bash
ls -la /var/lib/pacman/local/systemd/
```

You will probably see files like:

```
desc
files
mtree
```

The `mtree` file is broken.

#### 2. Remove the broken mtree file

```bash
rm /var/lib/pacman/local/systemd/mtree
```

This is safe. It only removes verification metadata.

#### 3. Reinstall systemd

Force reinstall:

```bash
pacman -S systemd --overwrite '*'
```

This recreates the package metadata.

---

### Also check for other corrupted packages

Since filesystem corruption affected pacman metadata, run:

```bash
pacman -Qkk
```

This may take a while.

Look for:

* `warning: ... mtree:`
* missing files
* modified files

---

### Then rebuild boot files

After reinstalling:

```bash
mkinitcpio -P
```

If you use GRUB:

```bash
grub-mkconfig -o /boot/grub/grub.cfg
```

Then reboot:

```bash
exit
umount -R /mnt
reboot
```

---

Given the original symptoms (no tty1, random tty failures), a corrupted `systemd` installation is now a very plausible cause. The `fsck` repair likely fixed the filesystem, but it did not repair damaged package metadata or partially corrupted binaries.

___
This confirms the filesystem corruption affected **pacman's local package database**, not just one package.

`pacman -Qkk` checking packages does two things:

* **verifies the installed files against the package database**
* **reads the package metadata (`mtree`) to know what should exist**

Your results:

```
unrecognized archive format for mtree
no such file or directory
```

mean two categories of damage:

1. **Corrupted pacman metadata**

   * `/var/lib/pacman/local/<package>/mtree` files are damaged.
   * This is common after disk corruption because these files are small compressed metadata files.

2. **Missing installed files**

   * Some actual files from packages are gone.
   * This is more serious and can explain why systemd is not booting correctly.

---

## First: don't try to fix packages one by one

You likely need to reinstall a large part of the base system.

Before doing that, make sure your package cache is available:

```bash
ls /var/cache/pacman/pkg | head
```

If it contains packages, good.

---

## Refresh the pacman database

Inside `arch-chroot`:

```bash
pacman -Syy
```

Then force reinstall the core packages:


> [!tip] Title
>```bash
>pacman -S base systemd linux linux-firmware util-linux --overwrite '*'
>```

This will restore:

* systemd
* udev
* agetty
* login tools
* kernel modules
* firmware

---

## Rebuild initramfs

After reinstall:

```bash
mkinitcpio -P
```

---

## Re-run the check

Afterward:

```bash
pacman -Qkk systemd util-linux
```

You should no longer see:

```
mtree: unrecognized archive format
```
