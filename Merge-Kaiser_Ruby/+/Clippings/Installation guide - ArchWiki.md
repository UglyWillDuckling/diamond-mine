---
author: 
created: 2025-03-01
published: 
source: https://wiki.archlinux.org/title/Installation_guide
tags:
  - howto/arch/installation
  - guide
---
This document is a guide for installing [Arch Linux](https://wiki.archlinux.org/title/Arch_Linux "Arch Linux") using the live system booted from an installation medium made from an official installation image. The installation medium provides accessibility features which are described on the page [Install Arch Linux with accessibility options](https://wiki.archlinux.org/title/Install_Arch_Linux_with_accessibility_options "Install Arch Linux with accessibility options"). For alternative means of installation, see [Category:Installation process](https://wiki.archlinux.org/title/Category:Installation_process "Category:Installation process").

Before installing, it would be advised to view the [FAQ](https://wiki.archlinux.org/title/FAQ "FAQ"). For conventions used in this document, see [Help:Reading](https://wiki.archlinux.org/title/Help:Reading "Help:Reading"). In particular, code examples may contain placeholders (formatted in `*italics*`) that must be replaced manually.

This guide is kept concise and you are advised to follow the instructions in the presented order per section. For more detailed instructions, see the respective [ArchWiki](https://wiki.archlinux.org/title/ArchWiki "ArchWiki") articles or the various programs' [man pages](https://wiki.archlinux.org/title/Man_page "Man page"), both linked from this guide. For interactive help, the [IRC channel](https://wiki.archlinux.org/title/IRC_channel "IRC channel") and the [forums](https://bbs.archlinux.org/) are also available.

Arch Linux should run on any [x86\_64](https://en.wikipedia.org/wiki/X86-64 "wikipedia:X86-64")\-compatible machine with a minimum of 512 MiB RAM, though more memory is needed to boot the live system for installation.[\[1\]](https://lists.archlinux.org/archives/list/arch-releng@lists.archlinux.org/message/D5HSGOFTPGYI6IZUEB3ZNAX4D3F3ID37/) A basic installation should take less than 2 GiB of disk space. As the installation process needs to retrieve packages from a remote repository, this guide assumes a working internet connection is available.

## Pre-installation

### Acquire an installation image

Visit the [Download](https://archlinux.org/download/) page and, depending on how you want to boot, acquire the ISO file or a netboot image, and the respective PGP signature.

### Verify signature

It is recommended to verify the image signature before use, especially when downloading from an *HTTP mirror*, where downloads are generally prone to be intercepted to [serve malicious images](https://www2.cs.arizona.edu/stork/packagemanagersecurity/attacks-on-package-managers.html).

On a system with [GnuPG](https://wiki.archlinux.org/title/GnuPG "GnuPG") installed, do this by downloading the *ISO PGP signature* ([under Checksums in the page Download](https://archlinux.org/download/#checksums)) to the ISO directory, and [verifying](https://wiki.archlinux.org/title/GnuPG#Verify_a_signature "GnuPG") it with:

```
$ gpg --keyserver-options auto-key-retrieve --verify archlinux-version-x86_64.iso.sig
```

Alternatively, from an existing Arch Linux installation run:

```
$ pacman-key -v archlinux-version-x86_64.iso.sig
```

**Note:**

- The signature itself could be manipulated if it is downloaded from a mirror site, instead of from [archlinux.org](https://archlinux.org/download/) as above. In this case, ensure that the public key, which is used to decode the signature, is signed by another, trustworthy key. The `gpg` command will output the fingerprint of the public key.
- Another method to verify the authenticity of the signature is to ensure that the public key's fingerprint is identical to the key fingerprint of the [Arch Linux developer](https://archlinux.org/people/developers/) who signed the ISO-file. See [Wikipedia:Public-key cryptography](https://en.wikipedia.org/wiki/Public-key_cryptography "wikipedia:Public-key cryptography") for more information on the public-key process to authenticate keys.

### Prepare an installation medium

The ISO can be supplied to the target machine via a [USB flash drive](https://wiki.archlinux.org/title/USB_flash_installation_medium "USB flash installation medium"), an [optical disc](https://wiki.archlinux.org/title/Optical_disc_drive#Burning "Optical disc drive") or a network with [PXE](https://wiki.archlinux.org/title/PXE "PXE"): follow the appropriate article to prepare yourself an installation medium from the ISO file.

For the netboot image, follow [Netboot#Boot from a USB flash drive](https://wiki.archlinux.org/title/Netboot#Boot_from_a_USB_flash_drive "Netboot") to prepare a USB flash drive for UEFI booting.

### Boot the live environment

**Note:** Arch Linux installation images do not support Secure Boot. You will need to [disable Secure Boot](https://wiki.archlinux.org/title/Unified_Extensible_Firmware_Interface/Secure_Boot#Disabling_Secure_Boot "Unified Extensible Firmware Interface/Secure Boot") to boot the installation medium. If desired, [Secure Boot](https://wiki.archlinux.org/title/Secure_Boot "Secure Boot") can be set up after completing the installation.

1. Point the current boot device to the one which has the Arch Linux installation medium. Typically it is achieved by pressing a key during the [POST](https://en.wikipedia.org/wiki/Power-on_self_test "wikipedia:Power-on self test") phase, as indicated on the splash screen. Refer to your motherboard's manual for details.
2. When the installation medium's boot loader menu appears,
- if you used the ISO, select *Arch Linux install medium* and press `Enter` to enter the installation environment.
- if you used the Netboot image, choose a geographically close mirror from *Mirror* menu, then select *Boot Arch Linux* and press `Enter`.

**Tip:**

- The ISO uses [systemd-boot](https://wiki.archlinux.org/title/Systemd-boot "Systemd-boot") for UEFI and [syslinux](https://wiki.archlinux.org/title/Syslinux "Syslinux") for BIOS booting. Use respectively `e` or `Tab` to enter the [boot parameters](https://wiki.archlinux.org/title/Kernel_parameters#Boot_loader_configuration "Kernel parameters"). The Netboot image uses iPXE and the boot parameters can be specified in the *Boot options* menu. See [README.bootparams](https://gitlab.archlinux.org/archlinux/mkinitcpio/mkinitcpio-archiso/blob/master/docs/README.bootparams) for a list.
- A common example of manually defined boot parameter would be the font size. For better readability on HiDPI screens—when they are not already recognized as such—using `fbcon=font:TER16x32` can help. See [HiDPI#Linux console (tty)](https://wiki.archlinux.org/title/HiDPI#Linux_console_\(tty\) "HiDPI") for a detailed explanation.

4. You will be logged in on the first [virtual console](https://en.wikipedia.org/wiki/Virtual_console "wikipedia:Virtual console") as the root user, and presented with a [Zsh](https://wiki.archlinux.org/title/Zsh "Zsh") shell prompt.

To switch to a different console—for example, to view this guide with [Lynx](https://lynx.invisible-island.net/lynx_help/Lynx_users_guide.html) alongside the installation—use the `Alt+*arrow*` [shortcut](https://wiki.archlinux.org/title/Keyboard_shortcuts "Keyboard shortcuts"). To [edit](https://wiki.archlinux.org/title/Textedit "Textedit") configuration files, [mcedit(1)](https://man.archlinux.org/man/mcedit.1), [nano](https://wiki.archlinux.org/title/Nano#Usage "Nano") and [vim](https://wiki.archlinux.org/title/Vim#Usage "Vim") are available. See [pkglist.x86\_64.txt](https://geo.mirror.pkgbuild.com/iso/latest/arch/pkglist.x86_64.txt) for a list of the packages included in the installation medium.

### Set the console keyboard layout and font

The default [console keymap](https://wiki.archlinux.org/title/Console_keymap "Console keymap") is [US](https://en.wikipedia.org/wiki/File:KB_United_States-NoAltGr.svg "wikipedia:File:KB United States-NoAltGr.svg"). Available layouts can be listed with:

```
# localectl list-keymaps
```

To set the keyboard layout, pass its name to [loadkeys(1)](https://man.archlinux.org/man/loadkeys.1). For example, to set a [German](https://en.wikipedia.org/wiki/File:KB_Germany.svg "wikipedia:File:KB Germany.svg") keyboard layout:

```
# loadkeys de-latin1
```

[Console fonts](https://wiki.archlinux.org/title/Console_fonts "Console fonts") are located in `/usr/share/kbd/consolefonts/` and can likewise be set with [setfont(8)](https://man.archlinux.org/man/setfont.8) omitting the path and file extension. For example, to use one of the largest fonts suitable for [HiDPI screens](https://wiki.archlinux.org/title/HiDPI#Linux_console_\(tty\) "HiDPI"), run:

```
# setfont ter-132b
```

### Verify the boot mode

To verify the boot mode, check the [UEFI bitness](https://wiki.archlinux.org/title/Unified_Extensible_Firmware_Interface#UEFI_firmware_bitness "Unified Extensible Firmware Interface"):

```
# cat /sys/firmware/efi/fw_platform_size
```

- If the command returns `64`, the system is booted in UEFI mode and has a 64-bit x64 UEFI.
- If the command returns `32`, the system is booted in UEFI mode and has a 32-bit IA32 UEFI. While this is supported, it will limit the boot loader choice to those that support mixed mode booting.

- If it returns `No such file or directory`, the system may be booted in [BIOS](https://en.wikipedia.org/wiki/BIOS "w:BIOS") (or [CSM](https://en.wikipedia.org/wiki/Compatibility_Support_Module "w:Compatibility Support Module")) mode.

If the system did not boot in the mode you desired (UEFI vs BIOS), refer to your motherboard's manual.

### Connect to the internet

To set up a network connection in the live environment, go through the following steps:

1. Ensure your [network interface](https://wiki.archlinux.org/title/Network_interface "Network interface") is listed and enabled, for example with [ip-link(8)](https://man.archlinux.org/man/ip-link.8):
```
# ip link
```
2. For wireless and WWAN, make sure the card is not blocked with [rfkill](https://wiki.archlinux.org/title/Rfkill "Rfkill").
3. Connect to the network:
- Ethernet—plug in the cable.
- Wi-Fi—authenticate to the wireless network using [iwctl](https://wiki.archlinux.org/title/Iwctl "Iwctl").
- Mobile broadband modem—connect to the mobile network with the [mmcli](https://wiki.archlinux.org/title/Mmcli "Mmcli") utility.
4. Configure your network connection:
- [DHCP](https://wiki.archlinux.org/title/DHCP "DHCP"): dynamic IP address and DNS server assignment (provided by [systemd-networkd](https://wiki.archlinux.org/title/Systemd-networkd "Systemd-networkd") and [systemd-resolved](https://wiki.archlinux.org/title/Systemd-resolved "Systemd-resolved")) should work out of the box for Ethernet, WLAN, and WWAN network interfaces.
- Static IP address: follow [Network configuration#Static IP address](https://wiki.archlinux.org/title/Network_configuration#Static_IP_address "Network configuration").
5. The connection may be verified with [ping](https://wiki.archlinux.org/title/Ping "Ping"):
```
# ping archlinux.org
```

### Update the system clock

In the live environment [systemd-timesyncd](https://wiki.archlinux.org/title/Systemd-timesyncd "Systemd-timesyncd") is enabled by default and time will be synced automatically once a connection to the internet is established.

Use [timedatectl(1)](https://man.archlinux.org/man/timedatectl.1) to ensure the system clock is synchronized:

```
# timedatectl
```

### Partition the disks

When recognized by the live system, disks are assigned to a [block device](https://wiki.archlinux.org/title/Block_device "Block device") such as `/dev/sda`, `/dev/nvme0n1` or `/dev/mmcblk0`. To identify these devices, use [lsblk](https://wiki.archlinux.org/title/Lsblk "Lsblk") or *fdisk*.

```
# fdisk -l
```

Results ending in `rom`, `loop` or `airootfs` may be ignored. `mmcblk*` devices ending in `rpbm`, `boot0` and `boot1` can be ignored.

**Tip:** Check that your NVMe drives and Advanced Format hard disk drives are using the [optimal logical sector size](https://wiki.archlinux.org/title/Advanced_Format "Advanced Format") before partitioning.

The following [partitions](https://wiki.archlinux.org/title/Partition "Partition") are **required** for a chosen device:

- One partition for the [root directory](https://en.wikipedia.org/wiki/Root_directory "wikipedia:Root directory") `/`.
- For booting in [UEFI](https://wiki.archlinux.org/title/UEFI "UEFI") mode: an [EFI system partition](https://wiki.archlinux.org/title/EFI_system_partition "EFI system partition").

Use a [partitioning tool](https://wiki.archlinux.org/title/Partitioning#Partitioning_tools "Partitioning") like [fdisk](https://wiki.archlinux.org/title/Fdisk "Fdisk") to modify partition tables. For example:

```
# fdisk /dev/the_disk_to_be_partitioned
```

**Note:**

- Take time to plan a long-term partitioning scheme to avoid risky and complicated conversion or re-partitioning procedures in the future.
- If you want to create any stacked block devices for [LVM](https://wiki.archlinux.org/title/Install_Arch_Linux_on_LVM "Install Arch Linux on LVM"), [system encryption](https://wiki.archlinux.org/title/Dm-crypt "Dm-crypt") or [RAID](https://wiki.archlinux.org/title/RAID "RAID"), do it now.
- If the disk from which you want to boot [already has an EFI system partition](https://wiki.archlinux.org/title/EFI_system_partition#Check_for_an_existing_partition "EFI system partition"), do not create another one, but use the existing partition instead.
- [Swap](https://wiki.archlinux.org/title/Swap "Swap") space can be set on a [swap file](https://wiki.archlinux.org/title/Swap_file "Swap file") for file systems supporting it. Alternatively, disk based swap can be avoided entirely by setting up [swap on zram](https://wiki.archlinux.org/title/Zram#Usage_as_swap "Zram") after installing the system.

#### Example layouts

| Mount point on the installed system | Partition | [Partition type](https://en.wikipedia.org/wiki/GUID_Partition_Table#Partition_type_GUIDs "wikipedia:GUID Partition Table") | Suggested size |
| --- | --- | --- | --- |
| `/boot`<sup>1</sup> | `/dev/*efi_system_partition*` | [EFI system partition](https://wiki.archlinux.org/title/EFI_system_partition "EFI system partition") | 1 GiB |
| `[SWAP]` | `/dev/*swap_partition*` | Linux swap | At least 4 GiB |
| `/` | `/dev/*root_partition*` | Linux x86-64 root (/) | Remainder of the device. At least 23–32 GiB. |

1. [Other mount points](https://wiki.archlinux.org/title/EFI_system_partition#Typical_mount_points "EFI system partition"), such as `/efi`, are possible, provided that the used boot loader is capable of loading the kernel and initramfs images from the root volume. See the warning in [Arch boot process#Boot loader](https://wiki.archlinux.org/title/Arch_boot_process#Boot_loader "Arch boot process").

| Mount point on the installed system | Partition | [Partition type](https://en.wikipedia.org/wiki/Partition_type "wikipedia:Partition type") | Suggested size |
| --- | --- | --- | --- |
| `[SWAP]` | `/dev/*swap_partition*` | Linux swap | At least 4 GiB |
| `/` | `/dev/*root_partition*` | Linux | Remainder of the device. At least 23–32 GiB. |

See also [Partitioning#Example layouts](https://wiki.archlinux.org/title/Partitioning#Example_layouts "Partitioning").

### Format the partitions

Once the partitions have been created, each newly created partition must be formatted with an appropriate [file system](https://wiki.archlinux.org/title/File_system "File system"). See [File systems#Create a file system](https://wiki.archlinux.org/title/File_systems#Create_a_file_system "File systems") for details.

For example, to create an [Ext4](https://wiki.archlinux.org/title/Ext4 "Ext4") file system on `/dev/*root_partition*`, run:

```
# mkfs.ext4 /dev/root_partition
```

If you created a partition for [swap](https://wiki.archlinux.org/title/Swap "Swap"), initialize it with [mkswap(8)](https://man.archlinux.org/man/mkswap.8):

```
# mkswap /dev/swap_partition
```

**Note:** For stacked block devices replace `/dev/**_partition*` with the appropriate block device path.

If you created an EFI system partition, [format it](https://wiki.archlinux.org/title/EFI_system_partition#Format_the_partition "EFI system partition") to FAT32 using [mkfs.fat(8)](https://man.archlinux.org/man/mkfs.fat.8).

**Warning:** Only format the EFI system partition if you created it during the partitioning step. If there already was an EFI system partition on disk beforehand, reformatting it can destroy the boot loaders of other installed operating systems.

```
# mkfs.fat -F 32 /dev/efi_system_partition
```

### Mount the file systems

[Mount](https://wiki.archlinux.org/title/Mount "Mount") the root volume to `/mnt`. For example, if the root volume is `/dev/*root_partition*`:

```
# mount /dev/root_partition /mnt
```

Create any remaining mount points under `/mnt` (such as `/mnt/boot` for `/boot`) and mount the volumes in their corresponding hierarchical order.

**Tip:** Run [mount(8)](https://man.archlinux.org/man/mount.8) with the `--mkdir` option to create the specified mount point. Alternatively, create it using [mkdir(1)](https://man.archlinux.org/man/mkdir.1) beforehand.

For UEFI systems, mount the EFI system partition:

```
# mount --mkdir /dev/efi_system_partition /mnt/boot
```

If you created a [swap](https://wiki.archlinux.org/title/Swap "Swap") volume, enable it with [swapon(8)](https://man.archlinux.org/man/swapon.8):

```
# swapon /dev/swap_partition
```

[genfstab(8)](https://man.archlinux.org/man/genfstab.8) will later detect mounted file systems and swap space.

## Installation

### Select the mirrors

Packages to be installed must be downloaded from [mirror servers](https://wiki.archlinux.org/title/Mirrors "Mirrors"), which are defined in `/etc/pacman.d/mirrorlist`. On the live system, after connecting to the internet, [reflector](https://wiki.archlinux.org/title/Reflector "Reflector") updates the mirror list by choosing 20 most recently synchronized HTTPS mirrors and sorting them by download rate.

The higher a mirror is placed in the list, the more priority it is given when downloading a package. You may want to inspect the file to see if it is satisfactory. If it is not, [edit](https://wiki.archlinux.org/title/Textedit "Textedit") the file accordingly, and move the geographically closest mirrors to the top of the list, although other criteria should be taken into account.

This file will later be copied to the new system by *pacstrap*, so it is worth getting right.

### Install essential packages

**Note:** No software or configuration (except for `/etc/pacman.d/mirrorlist`) gets carried over from the live environment to the installed system.

Use the [pacstrap(8)](https://man.archlinux.org/man/pacstrap.8) script to install the [base](https://archlinux.org/packages/?name=base) package, Linux [kernel](https://wiki.archlinux.org/title/Kernel "Kernel") and firmware for common hardware:

```
# pacstrap -K /mnt base linux linux-firmware
```

**Tip:**

- You can substitute [linux](https://archlinux.org/packages/?name=linux) with a [kernel](https://wiki.archlinux.org/title/Kernel "Kernel") package of your choice, or you could omit it entirely when installing in a [container](https://en.wikipedia.org/wiki/Container_\(virtualization\) "wikipedia:Container (virtualization)").
- You could omit the installation of the firmware package when installing in a virtual machine or container.

The [base](https://archlinux.org/packages/?name=base) package does not include all tools from the live installation, so installing more packages may be necessary for a fully functional base system. To install other packages or package groups, append the names to the *pacstrap* command above (space separated) or use [pacman](https://wiki.archlinux.org/title/Pacman "Pacman") to [install](https://wiki.archlinux.org/title/Install "Install") them while [chrooted into the new system](https://wiki.archlinux.org/title/#Chroot). In particular, consider installing:

- CPU [microcode](https://wiki.archlinux.org/title/Microcode "Microcode") updates—[amd-ucode](https://archlinux.org/packages/?name=amd-ucode) or [intel-ucode](https://archlinux.org/packages/?name=intel-ucode)—for hardware bug and security fixes,
- [userspace utilities for file systems](https://wiki.archlinux.org/title/File_systems "File systems") that will be used on the system—for the purposes of e.g. file system creation and [fsck](https://wiki.archlinux.org/title/Fsck "Fsck"),
- utilities for accessing and managing [RAID](https://wiki.archlinux.org/title/RAID#Installation "RAID") or [LVM](https://wiki.archlinux.org/title/LVM#Installation "LVM") if they will be used on the system,
- specific firmware for other devices not included in [linux-firmware](https://archlinux.org/packages/?name=linux-firmware) (e.g. [sof-firmware](https://archlinux.org/packages/?name=sof-firmware) for [onboard audio](https://wiki.archlinux.org/title/Advanced_Linux_Sound_Architecture#Firmware "Advanced Linux Sound Architecture"), [linux-firmware-marvell](https://archlinux.org/packages/?name=linux-firmware-marvell) for Marvell wireless and any of the multiple firmware packages for [Broadcom wireless](https://wiki.archlinux.org/title/Broadcom_wireless "Broadcom wireless")),
- software necessary for [networking](https://wiki.archlinux.org/title/Networking "Networking") (e.g. [a network manager or a standalone DHCP client](https://wiki.archlinux.org/title/Network_configuration#Network_managers "Network configuration"), [authentication software](https://wiki.archlinux.org/title/Network_configuration/Wireless#Authentication "Network configuration/Wireless") for Wi-Fi, [ModemManager](https://wiki.archlinux.org/title/ModemManager "ModemManager") for mobile broadband connections),
- a [console text editor](https://wiki.archlinux.org/title/List_of_applications/Documents#Console "List of applications/Documents") (e.g [nano](https://wiki.archlinux.org/title/Nano "Nano")) to allow editing configuration files from the console,
- packages for accessing documentation in [man](https://wiki.archlinux.org/title/Man "Man") and [info](https://wiki.archlinux.org/title/Info "Info") pages: [man-db](https://archlinux.org/packages/?name=man-db), [man-pages](https://archlinux.org/packages/?name=man-pages) and [texinfo](https://archlinux.org/packages/?name=texinfo).

For comparison, packages available in the live system can be found in [pkglist.x86\_64.txt](https://geo.mirror.pkgbuild.com/iso/latest/arch/pkglist.x86_64.txt).

## Configure the system

### Fstab

Generate an [fstab](https://wiki.archlinux.org/title/Fstab "Fstab") file (use `-U` or `-L` to define by [UUID](https://wiki.archlinux.org/title/UUID "UUID") or labels, respectively):

```
# genfstab -U /mnt >> /mnt/etc/fstab
```

Check the resulting `/mnt/etc/fstab` file, and [edit](https://wiki.archlinux.org/title/Textedit "Textedit") it in case of errors.

### Chroot

[Change root](https://wiki.archlinux.org/title/Change_root "Change root") into the new system:

```
# arch-chroot /mnt
```

### Time

Set the [time zone](https://wiki.archlinux.org/title/Time_zone "Time zone"):

```
# ln -sf /usr/share/zoneinfo/Region/City /etc/localtime
```

Run [hwclock(8)](https://man.archlinux.org/man/hwclock.8) to generate `/etc/adjtime`:

```
# hwclock --systohc
```

This command assumes the hardware clock is set to [UTC](https://en.wikipedia.org/wiki/UTC "wikipedia:UTC"). See [System time#Time standard](https://wiki.archlinux.org/title/System_time#Time_standard "System time") for details.

To prevent clock drift and ensure accurate time, set up [time synchronization](https://wiki.archlinux.org/title/Time_synchronization "Time synchronization") using a [Network Time Protocol](https://en.wikipedia.org/wiki/Network_Time_Protocol "wikipedia:Network Time Protocol") (NTP) client such as [systemd-timesyncd](https://wiki.archlinux.org/title/Systemd-timesyncd "Systemd-timesyncd").

### Localization

[Edit](https://wiki.archlinux.org/title/Textedit "Textedit") `/etc/locale.gen` and uncomment `en_US.UTF-8 UTF-8` and other needed UTF-8 [locales](https://wiki.archlinux.org/title/Locale "Locale"). Generate the locales by running:

```
# locale-gen
```

[Create](https://wiki.archlinux.org/title/Create "Create") the [locale.conf(5)](https://man.archlinux.org/man/locale.conf.5) file, and [set the LANG variable](https://wiki.archlinux.org/title/Locale#Setting_the_system_locale "Locale") accordingly:

```
/etc/locale.conf
```
```
LANG=en_US.UTF-8
```

If you [set the console keyboard layout](https://wiki.archlinux.org/title/#Set_the_console_keyboard_layout_and_font), make the changes persistent in [vconsole.conf(5)](https://man.archlinux.org/man/vconsole.conf.5):

```
/etc/vconsole.conf
```
```
KEYMAP=de-latin1
```

### Network configuration

[Create](https://wiki.archlinux.org/title/Create "Create") the [hostname](https://wiki.archlinux.org/title/Hostname "Hostname") file:

```
/etc/hostname
```
```
yourhostname
```

Complete the [network configuration](https://wiki.archlinux.org/title/Network_configuration "Network configuration") for the newly installed environment. That may include installing suitable [network management](https://wiki.archlinux.org/title/Network_management "Network management") software, configuring it if necessary and enabling its systemd unit so that it starts at boot.

### Initramfs

Creating a new *initramfs* is usually not required, because [mkinitcpio](https://wiki.archlinux.org/title/Mkinitcpio "Mkinitcpio") was run on installation of the [kernel](https://wiki.archlinux.org/title/Kernel "Kernel") package with *pacstrap*.

For [LVM](https://wiki.archlinux.org/title/Install_Arch_Linux_on_LVM#Adding_mkinitcpio_hooks "Install Arch Linux on LVM"), [system encryption](https://wiki.archlinux.org/title/Dm-crypt "Dm-crypt") or [RAID](https://wiki.archlinux.org/title/RAID#Configure_mkinitcpio "RAID"), modify [mkinitcpio.conf(5)](https://man.archlinux.org/man/mkinitcpio.conf.5) and recreate the initramfs image:

```
# mkinitcpio -P
```

### Root password

Set the root [password](https://wiki.archlinux.org/title/Password "Password"):

```
# passwd
```

### Boot loader

Choose and install a Linux-capable [boot loader](https://wiki.archlinux.org/title/Boot_loader "Boot loader").

## Reboot

Exit the chroot environment by typing `exit` or pressing `Ctrl+d`.

Optionally manually unmount all the partitions with `umount -R /mnt`: this allows noticing any "busy" partitions, and finding the cause with [fuser(1)](https://man.archlinux.org/man/fuser.1).

Finally, restart the machine by typing `reboot`: any partitions still mounted will be automatically unmounted by *systemd*. Remember to remove the installation medium and then login into the new system with the root account.

## Post-installation

See [General recommendations](https://wiki.archlinux.org/title/General_recommendations "General recommendations") for system management directions and post-installation tutorials (like creating unprivileged user accounts, setting up a graphical user interface, sound or a touchpad).

For a list of applications that may be of interest, see [List of applications](https://wiki.archlinux.org/title/List_of_applications "List of applications").