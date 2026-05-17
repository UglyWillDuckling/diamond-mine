---
interest: 5
quality: 9
value: 8.7
part of:
  - "[[troubleshooting is vital. here's how to do it. BreadTube]]"
category:
  - "[[Debugging]]"
  - "[[Arch Linux]]"
---
#resource/troubleshoot
#howto/troubleshoot

*Intended as a troubleshooting quickstart, or a TL;DR of some ArchWiki sections (a crime, I know) :^)*

---

## General Advice

* **ALWAYS read error messages and logs fully.**
  They probably contain the solution to your problem!!
* **Remember:** there can be unintended consequences to any system changes you make.
* ArchWiki troubleshooting sections explain everything here in greater depth!

---

## If You Are Unable to Boot

### (a) Can't Even Get to GRUB

1. **Use SUPERGRUB**

   * Detects boot entries and allows manual booting.

2. **Alternative: Arch ISO**

   * Boot into the Arch ISO
   * Mount partitions
   * Run:

     ```bash
     arch-chroot /mnt
     ```

3. **Reinstall GRUB**

   ```bash
   grub-install --target=x86_64-efi --efi-directory=/boot --bootloader-id=GRUB
   grub-mkconfig -o /boot/grub/grub.cfg
   ```

4. **Try Another Bootloader**

   * Example: Refind
   * Sometimes an alternative tool is the most effective solution.

---

### (b) GRUB Shows Up, But…

#### Kernel or initramfs Missing?

1. Regenerate initramfs:

   ```bash
   mkinitcpio -P
   ```

   * `mkinitcpio` creates an initial ramdisk environment.
   * Runs automatically on kernel updates via pacman hook.

2. Reinstall kernel:

   ```bash
   pacman -S linux linux-firmware
   ```

---

#### Interrupted Mid-Upgrade?

* **DO NOT REBOOT!!**
* Check logs:

  ```bash
  /var/log/pacman.log
  ```
* Replicate the upgrade exactly.

If already rebooted and system is broken:

* Boot into Arch ISO
* Mount partitions
* `arch-chroot /mnt`
* Replicate upgrade exactly

---

#### Filesystem Not Found / Read-Only?

1. Boot into Arch ISO and chroot:

   ```bash
   arch-chroot /mnt
   ```

2. Check fstab:

   ```bash
   /etc/fstab
   ```

3. Regenerate fstab:

   ```bash
   genfstab -U /mnt >> /mnt/etc/fstab
   ```

4. Ensure correct mount options:

   * Use: `rw,relatime`

---

#### Filesystem Corrupted (Power Failure, etc.)

* Run filesystem check:

  ```bash
  fsck -a
  ```

If journal issues:

```bash
umount /dev/partition
tune2fs -j /dev/partition
fsck -p /dev/partition
```

---

### (c) "pls help nothing werks!!1!!!!1"

* If `/home` is on a separate partition:

  * Reinstall system without touching personal files

* If not:

  * Backup everything first!

⚠️ **ALWAYS back up important data before modifying partitions**

#### Save Installed Package List

```bash
yay -Qq > packages_list
```

#### Reinstall Process

1. Reinstall system (pacstrap, etc.)
2. Reinstall `yay`
3. Restore packages:

   ```bash
   yay -S $(cat packages_list)
   ```

---

## Pacman & Package Issues

### Repository Changes

* Edit `/etc/pacman.conf`
* Remove:

  ```
  [community]
  [community-testing]
  [testing]
  [testing-debug]
  [staging]
  [staging-debug]
  ```

---

### Running Out of Space

```bash
sudo pacman -Sc
# or
sudo pacman -Scc
```

* Optional: **automate with pacman hooks**

---

### Signature Errors (After Long Time Without Updates)

```bash
pacman -Sy --needed archlinux-keyring && pacman -Su
```

---

### Mirror Errors

```bash
reflector --latest 10 --sort rate --save /etc/pacman.d/mirrorlist
```

If reflector can't be installed:

```bash
pacman -U <file path>
```

---

### Unable to Lock Database

```bash
rm /var/lib/pacman/db.lck
```

---

### Pacman Broken?

* Install statically compiled version:

  * `pacman-static`

* Or:

  * Boot into Arch ISO and reinstall

---

## Final Notes

* Logs are your best friend.
* Arch rewards careful reading and patience.
* When in doubt: [[ArchWiki]].