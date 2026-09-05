---
title: Arch Linux tty5 Issue
source: https://chatgpt.com/c/6a6901f2-8060-83eb-836f-ccde7a2eb058
author:
published:
created: 2026-07-28
description: ChatGPT conversation with 7 messages
tags:
  - incident/arch
---
> **can't log to /dev/tty5**
> 
> or the boot hangs trying to start `getty@tty5.service`

it's usually one of these issues:

1. A failing `agetty` /systemd service.
2. Graphics driver or display manager problems.
3. Filesystem corruption affecting `/dev`.
4. Kernel or hardware issues.

### First: Boot into another TTY

If `tty5` is broken, try:

- `Ctrl+Alt+F2`
- `Ctrl+Alt+F3`
- `Ctrl+Alt+F4`

If one works, log in there.

If none work, boot into the Arch ISO and chroot into the installation.

---

## Check the service

Run:

```bash
systemctl status getty@tty5.service
```

and

```bash
journalctl -u getty@tty5.service -b
```

Also check for broader boot errors:

```bash
journalctl -p err -b
```

---

## See if tty5 actually exists

```bash
ls -l /dev/tty5
```

Expected:

```
crw--w---- 1 root tty 4, 5 ...
```

If it doesn't exist:

```bash
ls /dev/tty*
```

---

## Check dmesg

```bash
dmesg | grep tty
```

and

```bash
dmesg | grep -i drm
```

If it's related to graphics, you'll usually see errors here.

---

## If it says "Failed to open /dev/tty5"

That can happen if:

- `/dev` wasn't populated correctly
- udev failed
- the kernel couldn't create virtual consoles

Check:

```bash
systemctl status systemd-udevd
```

---

## If it's random (sometimes tty3, sometimes tty5)

That points more toward:

- RAM problems
- disk corruption
- filesystem issues
- buggy kernel

Check:

```bash
journalctl -b -1
```

for the previous boot.

Also check:

```bash
sudo dmesg | grep -i error
```

and

```bash
sudo smartctl -a /dev/nvme0n1
```

(or `/dev/sda` depending on your drive).

---

## If you recently updated Arch

A new kernel or NVIDIA driver mismatch is a common cause.

Check:

```bash
pacman -Q linux
pacman -Q nvidia
```

or

```bash
pacman -Q linux linux-headers
```

---

### Could you post the exact error?

The exact wording matters. For example:

```
getty@tty5.service: Failed with result 'exit-code'
```

is very different from

```
Failed to open /dev/tty5
```

or

```
cannot login on /dev/tty5
```

Also provide the output of:

```bash
systemctl status getty@tty5.service
journalctl -b -p err
```

and tell me:

- Are you using NVIDIA, AMD, or Intel graphics?
- Does the system eventually boot, or does it freeze at that message?

---

**ChatGPT said**

Great — that confirms the NVIDIA stack was indeed part of the problem.

Current state:

- Filesystem repaired ✅
- System boots to TTY ✅
- NVIDIA userspace works (`nvidia-smi`) ✅
- NVIDIA kernel module/initramfs is likely OK ✅

Now focus on SDDM.

From the TTY, check:

```bash
systemctl status sddm
```

If it is failed, get the actual reason:

```bash
journalctl -b -u sddm --no-pager
```

Also check whether the GPU driver is loaded:

```bash
lsmod | grep nvidia
```

and:

```bash
nvidia-smi
```

should show the process list (which confirms the driver is loaded).

Since you mentioned:

> xorg dumped core -> should be using wayland instead

check your SDDM configuration:

```bash
cat /etc/sddm.conf
```

and:

```bash
ls /etc/sddm.conf.d/
```

For KDE Plasma with NVIDIA, you usually want Wayland enabled. Check that the Wayland session exists:

```bash
ls /usr/share/wayland-sessions/
```

You should see something like:

```
plasmawayland.desktop
```

Then check Plasma packages:

```bash
pacman -Q | grep plasma
```

If SDDM is still trying X11, you can force Wayland:

```bash
sudo mkdir -p /etc/sddm.conf.d
sudo nano /etc/sddm.conf.d/wayland.conf
```

Add:

```
[General]
DisplayServer=wayland
```

Then:

```bash
sudo systemctl restart sddm
```

If it still fails, paste:

```bash
systemctl status sddm --no-pager
journalctl -b -u sddm --no-pager
```

The remaining issue should now be isolated to SDDM/Plasma configuration rather than the driver.

---

**You said**

sddm says it's runing

---

**ChatGPT said**

If `sddm` says it is **running**, then the display manager itself has started successfully. The problem has moved one layer higher: either the **display output**, **Wayland session**, or **Plasma session startup**.

Let's check what SDDM is actually doing.

### 1\. Check the SDDM status details

Run:

```bash
systemctl status sddm --no-pager
```

Look for lines like:

```
Started Simple Desktop Display Manager
```

and whether it spawned:

```
/usr/bin/sddm-helper
```

---

### 2\. Check if SDDM is listening / has a display

Run:

```bash
loginctl list-sessions
```

and:

```bash
ps aux | grep -E 'sddm|Xorg|wayland|kwin'
```

You should see either:

- `kwin_wayland` (Wayland session)
- `Xorg` (X11 session)

---

### 3\. Check if the screen is just black

Try switching to a TTY:

```
Ctrl + Alt + F2
```

Then check:

```bash
journalctl -b | grep -iE 'sddm|**You said**

issue on arch linux. Getting error on boot cant log to /dev/tty5. Sometimes other tty

---

**ChatGPT said**

If you're seeing errors like:

kwin|wayland|plasma|drm|nvidia'
```

---

### 4\. Verify Plasma Wayland is installed

Run:

```bash
ls /usr/share/wayland-sessions/
```

For KDE you should see something like:

```
plasmawayland.desktop
```

Also:

```bash
pacman -Q | grep plasma
```

---

### 5\. Try starting a session manually

From the TTY, as your normal user:

```bash
startplasma-wayland
```

If that fails, the error message will usually tell us the missing component.

---

Since SDDM is running now, I would not change SDDM configuration yet. The previous Xorg crash may simply have been from the broken NVIDIA libraries. Now that `nvidia-smi` works, a reboot may already fix it.

Try:

```bash
sudo reboot
```

and if you still get a black screen, paste:

```bash
journalctl -b -u sddm --no-pager
```

and:

```bash
journalctl -b | grep -iE 'kwin|wayland|plasma|nvidia|drm'
```

---

**You said**

system is working now

---

**ChatGPT said**

Great — that confirms the root cause was very likely the **filesystem corruption cascading into damaged packages**, rather than a fundamental SDDM or GPU configuration problem.

The recovery path ended up being:

1. `fsck` repaired filesystem inconsistencies:
	- `***** FILE SYSTEM WAS MODIFIED *****`
2. The repaired filesystem still had damaged package contents:
	- corrupted pacman `mtree` metadata
		- missing/altered files reported by `pacman -Qkk`
3. NVIDIA packages were among the damaged files:
	- `nvidia-utils` checksum mismatches
		- `nvidia-open` needed repair
4. Reinstalling the NVIDIA stack restored:
	- `nvidia-smi`
		- NVIDIA userspace libraries
		- kernel module consistency
5. `mkinitcpio -P` rebuilt the initramfs with the repaired kernel module state
6. SDDM/Wayland started working again

I would do two final cleanup checks while everything is running:

### 1\. Check for remaining damaged packages

```bash
sudo pacman -Qkk 2>&1 | tee ~/pacman-check.txt
```

Review:

```bash
grep -E "warning|missing|modified|mtree|checksum" ~/pacman-check.txt
```

If there are still many hits, repair those packages with:

```bash
sudo pacman -S <package-name> --overwrite '*'
```

---

### 2\. Check the filesystem/storage health

Because you had corruption severe enough to damage package files, verify the disk did not cause it.

For NVMe:

```bash
sudo smartctl -a /dev/nvme0n1
```

Look especially for:

- media errors
- critical warnings
- unsafe shutdown count
- error log entries

Also check recent kernel storage errors:

```bash
journalctl -k | grep -iE "error|fail|nvme|ata|ext4|corrupt"
```

If those are clean, it was likely a one-off unclean shutdown. If you see storage errors, investigate the drive.

Good recovery — the fact that `nvidia-smi` started working before SDDM came back was the key indicator that the graphics stack had been corrupted.