---
author: 
created: 2025-03-01
published: 
source: https://wiki.archlinux.org/title/USB_flash_installation_medium
tags:
  - howto/arch/installation
related:
  - "[[Installation guide - ArchWiki]]"
---
This page discusses various multi-platform methods on how to create an Arch Linux Installer USB drive (also referred to as *"flash drive", "USB stick", "USB key"*, etc) for booting in BIOS and UEFI systems. The result will be a [live USB](https://en.wikipedia.org/wiki/Live_USB "wikipedia:Live USB") system that can be used for installing Arch Linux, system maintenance or for recovery purposes, and that, because of using [Overlayfs](https://wiki.archlinux.org/title/Overlayfs "Overlayfs") for `/`, will discard all changes once the computer shuts down.

If you would like to run a full install of Arch Linux from a USB drive (i.e. with persistent settings), see [Install Arch Linux on a removable medium](https://wiki.archlinux.org/title/Install_Arch_Linux_on_a_removable_medium "Install Arch Linux on a removable medium"). If you would like to use your bootable Arch Linux USB stick as a rescue USB, see [chroot](https://wiki.archlinux.org/title/Chroot "Chroot").

Before following any of these steps, download the ISO from [https://archlinux.org/download/](https://archlinux.org/download/) and [verify its integrity](https://wiki.archlinux.org/title/Installation_guide#Verify_signature "Installation guide").

## Using the ISO as is (BIOS and UEFI)

**Warning:** This will irrevocably delete all data on your USB flash drive, so make sure you do not have any important files on the flash drive before doing this.

**Note:** If, instead of a USB flash drive or an SD card, you want to write the ISO to a hard disk drive or a solid state drive, make sure the drive's logical sector size is not larger than 2048 bytes (the [ISO 9660](https://en.wikipedia.org/wiki/ISO_9660 "wikipedia:ISO 9660") sector size) and aligns to it. This means the ISO cannot be written to a 4Kn [Advanced Format](https://wiki.archlinux.org/title/Advanced_Format "Advanced Format") drive using this method.

### In GNU/Linux

#### Using basic command line utilities

This method is recommended due to its simplicity and universal availability, since these tools are part of [coreutils](https://archlinux.org/packages/?name=coreutils) (pulled in by the [base](https://archlinux.org/packages/?name=base) [meta package](https://wiki.archlinux.org/title/Meta_package "Meta package")).

Find out the name of your USB drive with `ls -l /dev/disk/by-id/usb-*` and check with `lsblk` to make sure that it is **not** mounted.

**Tip:** If a partition of your USB drive is mounted, [unmount](https://wiki.archlinux.org/title/Unmount "Unmount") it first.

Run one of the following commands, replacing `/dev/disk/by-id/usb-*My_flash_drive*` with your drive, e.g. `/dev/disk/by-id/usb-Kingston_DataTraveler_2.0_408D5C1654FDB471E98BED5C-0:0`. (Do **not** append a partition number, so do **not** use something like `/dev/disk/by-id/usb-Kingston_DataTraveler_2.0_408D5C1654FDB471E98BED5C-0:0**-part1**` or `/dev/sdb**1**`):

- using [cat(1)](https://man.archlinux.org/man/cat.1):
```
# cat path/to/archlinux-version-x86_64.iso > /dev/disk/by-id/usb-My_flash_drive
```
- using [cp(1)](https://man.archlinux.org/man/cp.1):
```
# cp path/to/archlinux-version-x86_64.iso /dev/disk/by-id/usb-My_flash_drive
```
- using [dd](https://wiki.archlinux.org/title/Dd "Dd"):
```
# dd bs=4M if=path/to/archlinux-version-x86_64.iso of=/dev/disk/by-id/usb-My_flash_drive conv=fsync oflag=direct status=progress
```
- using [tee(1)](https://man.archlinux.org/man/tee.1):
```
# tee < path/to/archlinux-version-x86_64.iso > /dev/disk/by-id/usb-My_flash_drive
```
- using [pv](https://archlinux.org/packages/?name=pv):
```
# pv path/to/archlinux-version-x86_64.iso -Yo /dev/disk/by-id/usb-My_flash_drive
```

See [\[1\]](https://unix.stackexchange.com/questions/224277/is-it-better-to-use-cat-dd-pv-or-another-procedure-to-copy-a-cd-dvd/224314#224314) and [\[2\]](https://www.vidarholen.net/contents/blog/?p=479) for a comparison and perspective on the use of those tools and why *dd* may be the least adapted one.

**Tip:**

- Executing `sync` with root privileges after the respective command ensures buffers are fully written to the device before you remove it.
- If the UEFI version of the USB's Arch ISO hangs or is unable to load, try repeating the medium creation process on the same USB drive one or more times. If this does not work, you may also try updating your motherboard's firmware.

**Note:** To restore the USB drive as an empty, usable storage device after using the Arch ISO image, the ISO 9660 filesystem signature needs to be removed by running `wipefs --all /dev/disk/by-id/usb-*My_flash_drive*` as root, before [repartitioning](https://wiki.archlinux.org/title/Repartition "Repartition") and [reformatting](https://wiki.archlinux.org/title/Reformat "Reformat") the USB drive.

#### Using KDE ISO Image Writer

KDE ISO Image Writer can be downloaded via [isoimagewriter](https://archlinux.org/packages/?name=isoimagewriter). It can auto-detect the USB-drive and you need to manually select a ISO file. It is recommended to use *.sig* file to signature but it can be skipped by clicking "create".

#### Using GNOME Disk Utility

Linux distributions running GNOME can easily make a live USB through [nautilus](https://archlinux.org/packages/?name=nautilus) and [gnome-disk-utility](https://archlinux.org/packages/?name=gnome-disk-utility). Simply right-click on the *.iso* file, and select *Open With Disk Image Writer*. When GNOME Disk Utility opens, specify the flash drive from the *Destination* drop-down menu and click *Start Restoring*.

#### Using MultiWriter

[gnome-multi-writer](https://archlinux.org/packages/?name=gnome-multi-writer) is a simple [GTK](https://wiki.archlinux.org/title/GTK "GTK")3 based graphical tool to write an ISO file to one or multiple USB devices at once.

#### Using Kindd

[Kindd](https://github.com/LinArcX/Kindd) is a Qt based graphical frontend for dd. It is available as [kindd](https://aur.archlinux.org/packages/kindd/)<sup><small>AUR</small></sup>.

#### Using Popsicle

[Popsicle](https://github.com/pop-os/popsicle) is a tool made for flashing ISO files to multiple USB devices in parallel by the PopOS development team. It is written in Rust and uses GTK. It is available as [popsicle](https://aur.archlinux.org/packages/popsicle/)<sup><small>AUR</small></sup>.

#### Using SUSE Studio ImageWriter

[SUSE Studio ImageWriter](https://github.com/openSUSE/imagewriter) is a Qt based tool made by the openSUSE development team. It is available as [imagewriter](https://aur.archlinux.org/packages/imagewriter/)<sup><small>AUR</small></sup>.

#### Using xorriso-dd-target

[xorriso-dd-target](https://dev.lovelyhq.com/libburnia/libisoburn/raw/master/xorriso-dd-target/xorriso-dd-target) (from [libisoburn](https://archlinux.org/packages/?name=libisoburn)) is a shell script which attempts to reduce the risk of overwriting the wrong storage device. Its safest mode is named `-plug_test`. For example, to use it as a regular user who can elevate to root using [sudo](https://wiki.archlinux.org/title/Sudo "Sudo"):

```
$ xorriso-dd-target -with_sudo -plug_test -DO_WRITE -image_file archlinux-version-x86_64.iso
```

See [xorriso-dd-target(1)](https://man.archlinux.org/man/xorriso-dd-target.1) for details.

#### Using USBImager

[USBImager](https://gitlab.com/bztsrc/usbimager/) is a multiplatform graphical application that writes and verifies compressed disk images to USB drives, and creates backups. It is available as [usbimager](https://aur.archlinux.org/packages/usbimager/)<sup><small>AUR</small></sup>.

### In Windows

#### Using KDE ISO Image Writer

KDE ISO Image Writer can be downloaded as *.exe* file at [isoimagewriter](https://apps.kde.org/isoimagewriter/). It can auto-detect the USB-drive and you need to manually select a ISO file. It is recommended to use *.sig* file to signature but it can be skipped by clicking "create".

#### Using win32diskimager

[win32diskimager](https://sourceforge.net/projects/win32diskimager/) is another graphical tool for writing images to USB sticks or SD/CF cards from Windows. Select your ISO image and the target USB drive letter (you may have to format it first to assign it a drive letter), and click *Write*.

#### Using USBwriter

This method does not require any workaround and is as straightforward as `dd` under Linux. Just download the Arch Linux ISO, and with local administrator rights use the [USBwriter](https://sourceforge.net/p/usbwriter/wiki/Documentation/) utility to write to your USB flash memory.

#### Using USBImager

[USBImager](https://gitlab.com/bztsrc/usbimager/) is a multiplatform graphical application that writes and verifies compressed disk images to USB drives, and creates backups.

#### Using Rufus

[Rufus](https://rufus.ie/) is a multi-purpose USB ISO writer. It provides a graphical user interface and does not care if the drive is properly formatted or not.

Simply select the Arch Linux ISO, the USB drive you want to create the bootable Arch Linux onto and click *START*.

**Note:** If the USB drive does not boot properly using the default ISO Image mode, **DD Image mode** should be used instead. To switch this mode on, select *GPT* from the *Partition scheme* drop-down menu. After clicking *START* you will get the mode selection dialog, select *DD Image mode*.

**Tip:** To add [an additional partition for persistent storage](https://github.com/pbatard/rufus/issues/691) use the slider to choose the persistent partition's size. When using the persistent partition feature, make sure to select *MBR* in the *Partition scheme* drop-down menu and *BIOS or UEFI* in *Target System*, otherwise the drive will not be usable for both BIOS and UEFI booting.

#### Using Cygwin

Make sure your [Cygwin](https://www.cygwin.com/) installation contains the `dd` package.

Place your image file in your home directory:

```
C:\cygwin\home\User\
```

Run cygwin as administrator (required for cygwin to access hardware). To write to your USB drive use the following command:

```
dd if=archlinux-version-x86_64.iso of=\\.\x: bs=4M
```

where `archlinux-*version*-x86_64.iso` is the path to the iso image file within the `cygwin` directory and `\\.\*x*:` is your USB flash drive where `*x*` is the windows designated letter, e.g. `\\.\d:`.

On Cygwin 6.0, find out the correct partition with:

```
cat /proc/partitions
```

and write the ISO image with the information from the output. Example:

```
dd if=archlinux-version-x86_64.iso of=/dev/sdb bs=4M
```

#### Using dd for Windows

A GPL licensed dd version for Windows is available at [http://www.chrysocome.net/dd](http://www.chrysocome.net/dd). The advantage of this over Cygwin is a smaller download. Use it as shown in instructions for Cygwin above.

To begin, download the latest version of dd for Windows. Once downloaded, extract the archive's contents into the `Downloads` directory or elsewhere.

Now, launch your *Command Prompt* as an administrator. Next, change directory (`cd`) into the `Downloads` directory.

If your Arch Linux ISO is elsewhere you may need to state the full path, for convenience you may wish to put the Arch Linux ISO into the same folder as the *dd* executable. The basic format of the command will look like this.

```
# dd if=archlinux-version-x86_64.iso od=\\.\x: bs=4M
```

**Note:** The Windows drive letters are linked to a partition. To allow selecting the entire disk, *dd for Windows* provides the `od` parameter, which is used in the commands above. Note however that this parameter is specific to *dd for Windows* and cannot be found in other implementations of *dd*.

#### Using flashnul

[flashnul](https://github.com/amarao/flashnul/blob/master/README.md) is an utility to verify the functionality and maintenance of Flash-Memory (USB-Flash, IDE-Flash, SecureDigital, MMC, MemoryStick, SmartMedia, XD, CompactFlash etc).

From a command prompt, invoke flashnul with `-p`, and determine which device index is your USB drive, e.g.:

```
C:\>flashnul -p
```
```
Avaible physical drives:
Avaible logical disks:
C:\
D:\
E:\
```

When you have determined which device is the correct one, you can write the image to your drive, by invoking flashnul with the device index, `-L`, and the path to your image, e.g:

```
C:\>flashnul E: -L path\to\archlinux-version-x86_64.iso
```

As long as you are really sure you want to write the data, type yes, then wait a bit for it to write. If you get an access denied error, close any Explorer windows you have open.

**Note:** Open the command prompt as administrator, or else flashnul will fail to open the stick as a block device and will only be able to write via the drive handle windows provides.

### In macOS

#### Using macOS dd

First, you need to identify the USB device. Open `/Applications/Utilities/Terminal` and list all storage devices with the command:

```
$ diskutil list
```

Your USB device will appear as something like `/dev/disk2 (external, physical)`. Verify that this is the device you want to erase by checking its name and size and then use its identifier for the commands below instead of `/dev/disk*X*`.

A USB device is normally auto-mounted in macOS, and you have to unmount (not eject) it before block-writing to it with `dd`. In *Terminal*, do:

```
$ diskutil unmountDisk /dev/diskX
```

Now copy the ISO image file to the device:

**Note:**

- BSD-derived `dd`, which includes macOS's default `dd`, uses lower-case `m` suffix. This differs from GNU `dd`, used elsewhere in this article.
- The `r` before `disk` is for raw mode which makes the transfer much faster.
- In newer versions of macOS, the dd command supports `status=progress` and can be used to show progress. It's also possible to view progress manually as described below.

```
# dd if=path/to/archlinux-version-x86_64.iso of=/dev/rdiskX bs=1m
```

This command will run silently. To view progress, send SIGINFO by pressing `Ctrl+t`. Note `disk*X*` here should not include the `s1` suffix, or else the USB device will only be bootable in UEFI mode and not legacy. After completion, macOS may complain that *The disk you inserted was not readable by this computer*. Select *Ignore*. The USB device will be bootable.

#### Using USBImager

[USBImager](https://gitlab.com/bztsrc/usbimager/) is a multiplatform graphical application that writes and verifies compressed disk images to USB drives, and creates backups.

### In Android

#### Using EtchDroid

[EtchDroid](https://etchdroid.depau.eu/) is a OS image flasher for Android. It works without root permissions since Android 5. Check the upstream [GitHub](https://github.com/EtchDroid/EtchDroid/issues/) if you have issue.

To create an Arch Linux installer, download the ISO image file on your Android device. Plug the USB drive to your device, using a USB-OTG adapter if needed. Open EtchDroid, select *Flash raw image*, select your Arch ISO, then select your USB drive. Grant the USB API permission and confirm.

Keep your phone on a table while it is writing the image: a lot of USB-OTG adapters are a bit wobbly and you might unplug it by mistake.

## Using manual formatting

### BIOS and UEFI

#### In GNU/Linux

This method is more complicated than writing the image directly with `dd`, but it does keep the flash drive usable for data storage (that is, the ISO is installed in a specific partition within the already [partitioned device](https://wiki.archlinux.org/title/Partitioning "Partitioning") without altering other partitions).

**Note:** Here, we will denote the targeted partition as `/dev/disk/by-id/usb-*My_flash_drive*-part*n*`. In any of the following commands, adjust `*My_flash_drive*` and `*n*` according to your system.

- If not done yet, create a [partition table](https://wiki.archlinux.org/title/Partition_table "Partition table") on `/dev/disk/by-id/usb-*My_flash_drive*`.
- If not done yet, create a partition on the device. The partition `/dev/disk/by-id/usb-*My_flash_drive*-part*n*` must be formatted to [FAT32](https://wiki.archlinux.org/title/FAT32 "FAT32").
- Mount the FAT32 file system located in the USB flash device and [extract](https://wiki.archlinux.org/title/Extract "Extract") the contents of the ISO image to it. For example:

```
# mount /dev/disk/by-id/usb-My_flash_drive-partn /mnt
# bsdtar -x -f archlinux-version-x86_64.iso -C /mnt
```

[Syslinux](https://wiki.archlinux.org/title/Syslinux "Syslinux") files for BIOS systems are already copied to `/mnt/boot/syslinux/`. [Unmount](https://wiki.archlinux.org/title/Unmount "Unmount") the FAT file system, [install](https://wiki.archlinux.org/title/Install "Install") the [syslinux](https://archlinux.org/packages/?name=syslinux) and [mtools](https://archlinux.org/packages/?name=mtools) packages and run the following commands to make the partition bootable:

```
# umount /mnt
# syslinux --directory boot/syslinux --install /dev/disk/by-id/usb-My_flash_drive-partn
# dd bs=440 count=1 conv=notrunc if=/usr/lib/syslinux/bios/mbr.bin of=/dev/disk/by-id/usb-My_flash_drive
```

**Note:**

- Replace `mbr.bin` with `gptmbr.bin` if `/dev/disk/by-id/usb-*My_flash_drive*` has a [GUID Partition Table](https://wiki.archlinux.org/title/GUID_Partition_Table "GUID Partition Table"). See [Syslinux#Manually](https://wiki.archlinux.org/title/Syslinux#Manually "Syslinux") for details.
- For the [MBR](https://wiki.archlinux.org/title/MBR "MBR") partition table you will need to set the "boot" flag. See [Syslinux#MBR partition table](https://wiki.archlinux.org/title/Syslinux#MBR_partition_table "Syslinux") for details.

#### In Windows

**Note:**

- For manual formatting, do not use any **Bootable USB Creator utility** for creating the UEFI bootable USB. For manual formatting, do not use *dd for Windows* to dd the ISO to the USB drive either.
- In the below commands, `*X*:` is assumed to be the USB flash drive in Windows.
- Windows uses backward slash `\` as path-separator, so the same is used in the below commands.
- All commands should be run in Windows command prompt **as administrator**.
- `>` denotes the Windows command prompt.

- Partition and format the USB drive using [Rufus USB partitioner](https://rufus.ie/). Select partition scheme option as **MBR for BIOS and UEFI** and File system as **FAT32**. Uncheck "Create a bootable disk using ISO image" and "Create extended label and icon files" options.
- Extract the ISO (similar to extracting ZIP archive) to the USB flash drive using [7-Zip](https://www.7-zip.org/).
- Download official Syslinux 6.xx binaries (zip file) from [https://www.kernel.org/pub/linux/utils/boot/syslinux/](https://www.kernel.org/pub/linux/utils/boot/syslinux/) and extract it. The version of Syslinux should be the same version used in the ISO image.

- Run the following command (in Windows cmd prompt, as admin):

```
> cd bios\
> for /r %Y in (*.c32) do copy "%Y" "X:\boot\syslinux\" /y
> copy mbr\*.bin X:\boot\syslinux\ /y
```

- Install Syslinux to the USB by running (use `win64\syslinux64.exe` for x64 Windows):

```
> cd bios\
> win32\syslinux.exe -d /boot/syslinux -i -a -m X:
```

**Note:**

- Only copying the files will result in an un-bootable device: this last command installs Syslinux's files to the VBR of the USB partition, sets the partition as "active/boot" in the MBR partition table and writes the MBR boot code to the USB device.
- The `-d` switch expects a path with forward slash path-separator like in \*unix systems.

### BIOS only

#### In GNU/Linux

##### Making a USB-ZIP drive

For some old BIOS systems, only booting from USB-ZIP drives is supported. This method allows you to still boot from a USB hard drive.

- [Install](https://wiki.archlinux.org/title/Install "Install") [syslinux](https://archlinux.org/packages/?name=syslinux) and [mtools](https://archlinux.org/packages/?name=mtools).
- Find your USB drive with `ls /dev/disk/by-id/usb-*`.
- Type `mkdiskimage -4 /dev/disk/by-id/usb-*My_flash_drive* 0 64 32`. This will take a while.

From here continue with the manual formatting method. The partition will be `/dev/disk/by-id/usb-*My_flash_drive*-part4` due to the way ZIP drives work.

**Note:** Do not format the drive as FAT32; keep it as FAT16.

### UEFI only

For UEFI-only booting, it is enough to extract the ISO contents onto a FAT-formatted USB flash drive.

It does not require creating a EFI system partition on the drive as all UEFI will happily boot any FAT volume from USB flash drives. The most compatible setup would be using the MBR partition table with a single active (bootable) primary partition of type `0c` "W95 FAT32 (LBA)".[\[3\]](https://lists.gnu.org/archive/html/grub-devel/2019-05/msg00063.html)

#### In GNU/Linux

This method extracts files from the ISO image to a USB flash drive.

1. If not done yet, create a [partition table](https://wiki.archlinux.org/title/Partition_table "Partition table") on `/dev/disk/by-id/usb-*My_flash_drive*` and a [partition](https://wiki.archlinux.org/title/Partition "Partition") (`/dev/disk/by-id/usb-*My_flash_drive*-part*n*`) on the device.
2. If not done yet, format the partition to [FAT32](https://wiki.archlinux.org/title/FAT32 "FAT32"):
```
# mkfs.fat -F 32 /dev/disk/by-id/usb-My_flash_drive-partn
```
3. [Mount](https://wiki.archlinux.org/title/Mount "Mount") the file system:
```
# mount /dev/disk/by-id/usb-My_flash_drive-partn /mnt
```
4. Extract the ISO image to the mounted file system:
```
# bsdtar -x -f archlinux-version-x86_64.iso -C /mnt
```
5. [Unmount](https://wiki.archlinux.org/title/Unmount "Unmount") the file system.

#### In Windows

This method copies files from the ISO image to a USB flash drive.

1. Partition the USB flash drive and format it to FAT32.
2. Right click on `archlinux-*version*-x86_64.iso` and select *Mount*.
3. Navigate to the newly created DVD drive and copy all files and folders to the USB flash drive.
4. When done copying, right click on the DVD drive and select *Eject*.
5. Eject the USB flash drive.

#### In macOS

Neither *DiskImageMounter* nor *Disk Utility* can mount isohybrid ISOs, but since macOS ships with *libarchive*, the ISO can simply be extracted onto the flash drive using *bsdtar*.

1. If not done yet, partition the USB flash drive and format the partition to FAT32 using *Disk Utility*.
2. Mount the volume.
3. Open the *Terminal* application and use *bsdtar* to extract the ISO image to the mounted file system:
```
$ bsdtar -x -f archlinux-version-x86_64.iso -C /Volumes/your-flash-drive
```
4. When done, unmount and eject the USB flash drive.

## Using a multiboot USB drive

This allows booting multiple ISOs from a single USB device, including the archiso. Updating an existing USB drive to a more recent ISO is simpler than for most other methods. See [Multiboot USB drive](https://wiki.archlinux.org/title/Multiboot_USB_drive "Multiboot USB drive").

### Using Ventoy

[Ventoy](https://wiki.archlinux.org/title/Ventoy "Ventoy") is an open source tool to create bootable USB drive for ISO/WIM/IMG/VHD(x)/EFI files. With Ventoy, you do not need to format the disk over and over, you just need to copy the ISO/WIM/IMG/VHD(x)EFI files to the USB drive and boot them directly. You can copy many files at a time and Ventoy will give you a boot menu to select them. It is available as [ventoy-bin](https://aur.archlinux.org/packages/ventoy-bin/)<sup><small>AUR</small></sup>.

### In Windows

#### Loading the installation medium from RAM

This method uses [Syslinux](https://wiki.archlinux.org/title/Syslinux "Syslinux") and a [Ramdisk](https://wiki.archlinux.org/title/Ramdisk "Ramdisk") ([MEMDISK](https://wiki.syslinux.org/wiki/index.php/MEMDISK)) to load the entire Arch Linux ISO image into RAM. Since this will be running entirely from system memory, you will need to make sure the system you will be installing this on has an adequate amount. A minimum amount of RAM between 500 MB and 1 GB should suffice for a MEMDISK based, Arch Linux install.

For more information on Arch Linux system requirements as well as those for MEMDISK see the [Installation guide](https://wiki.archlinux.org/title/Installation_guide "Installation guide") and [here](http://www.etherboot.org/wiki/bootingmemdisk#preliminaries). For reference, here is the [preceding forum thread](https://bbs.archlinux.org/viewtopic.php?id=135266).

**Tip:** Once the installer has completed loading you can simply remove the USB stick and even use it on a different machine to start the process all over again. Utilizing MEMDISK also allows booting and installing Arch Linux to and from the same USB flash drive.

##### Preparing the USB flash drive

Begin by formatting the USB flash drive as **FAT32**. Then create the following folders on the newly formatted drive.

- `Boot`
- `Boot/ISOs`
- `Boot/Settings`

##### Copy the needed files to the USB flash drive

Next copy the ISO that you would like to boot to the `Boot/ISOs` folder. After that, extract from the following files from the latest release of [syslinux](https://archlinux.org/packages/?name=syslinux) from [here](https://www.kernel.org/pub/linux/utils/boot/syslinux/) and copy them into the following folders.

- `./win32/syslinux.exe` to the Desktop or Downloads folder on your system.
- `./memdisk/memdisk` to the `Settings` folder on your USB flash drive.

##### Create the configuration file

After copying the needed files, navigate to the USB flash drive, `Boot/Settings` and create a `syslinux.cfg` file.

**Note:** On the `INITRD` line, be sure to use the name of the ISO file that you copied to your `ISOs` folder.

```
/Boot/Settings/syslinux.cfg
```
```
DEFAULT arch_iso

LABEL arch_iso
        MENU LABEL Arch Setup
        LINUX memdisk
        INITRD /Boot/ISOs/archlinux-version-x86_64.iso
        APPEND iso
```

For more information see the [Syslinux](https://wiki.archlinux.org/title/Syslinux "Syslinux") article.

##### Final steps

Finally, create a `*.bat` file where `syslinux.exe` is located and run it ("Run as administrator" if you are on Vista or Windows 7):

```
C:\Documents and Settings\username\Desktop\install.bat
```
```
@echo off
syslinux.exe -m -a -d /Boot/Settings X:
```

## Inadvisable methods

**Warning:** The following methods are discouraged.

### Using etcher

etcher contains analytics and first-party advertising. See [\[4\]](https://github.com/balena-io/etcher/issues/2057), [\[5\]](https://github.com/balena-io/etcher/blob/37769efbeda0abe7993d95e2b2aea2f461edd307/lib/gui/app/pages/main/MainPage.tsx#L151) and [\[6\]](https://github.com/balena-io/etcher/blob/37769efbeda0abe7993d95e2b2aea2f461edd307/docs/MAINTAINERS.md#publishing).

### Using Universal USB Installer

- The download page contains fake *Download* buttons that may contain malware.
- Universal USB Installer does not write the ISO as-is which breaks BIOS booting due to the discrepancy in syslinux versions. See [\[7\]](https://bbs.archlinux.org/viewtopic.php?pid=1344629).
- The Arch Linux installation image's boot loaders expect the ISO contents to reside on volume with the label `ARCH_*YYYYXX*`. Universal USB Installer does not update the file system label, nor does it correct the boot loader configuration.

### Using UNetbootin

- UNetbootin does not write the ISO as-is which breaks BIOS booting due to the discrepancy in syslinux versions.
- The Arch Linux installation image's boot loaders expect the ISO contents to reside on volume with the label `ARCH_*YYYYXX*`. UNetbootin does not update the file system label, nor does it correct the boot loader configuration.

## Tips and tricks

### Add an additional data partition to the drive

There are two ways to add an additional (third) partition to a drive prepared using [#Using the ISO as is (BIOS and UEFI)](https://wiki.archlinux.org/title/#Using_the_ISO_as_is_\(BIOS_and_UEFI\)).

1. By creating a file system image of a desired size and attaching to the ISO (before writing the ISO to the USB flash drive). See [Install Arch Linux via SSH#Using a single USB flash drive](https://wiki.archlinux.org/title/Install_Arch_Linux_via_SSH#Using_a_single_USB_flash_drive "Install Arch Linux via SSH") for an example.
2. By using [fdisk](https://wiki.archlinux.org/title/Fdisk "Fdisk") to edit the drive's MBR partition table without touching the ISO 9660 or invalid GPT structures. This will destroy the backup GPT header in the invalid GPT, but that should not matter.

To edit the MBR partition table on the drive, run:

```
# fdisk -t mbr --wipe never /dev/disk/by-id/usb-My_flash_drive
```

Use the `n` command to create a new partition (leave the default values for the first and last sectors if it should span all available free size). If you want to access it in other operating systems, change the MBR partition type ID using the `t` command (e.g. to `0c` "W95 FAT32 (LBA)" or `07` "HPFS/NTFS/exFAT"). Write the changes to disk and exit via the `w` command.

After partitioning, [create a file system](https://wiki.archlinux.org/title/Create_a_file_system "Create a file system") on the new partition (`/dev/disk/by-id/usb-*My_flash_drive*-part3`).

## Troubleshooting

### Device does not show up

If you get the `device did not show up after 30 seconds` error due to `/dev/disk/by-label/ARCH_*YYYYMM*` not mounting, try renaming your USB medium to `ARCH_*YYYYMM*` so Arch can find it. (e.g. For `archlinux-2021.02.01-x86_64.iso`, use `ARCH_202102`).

### Failed to set up loop devices: No such file or directory

If you get `losetup: /run/archiso/bootmnt/arch/x86_64/airootfs.sfs: failed to set up loop devices: No such file or directory`, try using a USB 2.0 port. For example, some USB 3.0 ports through USB hubs do not work.

### Other errors

If you get other errors, try using another USB device. There are multiple scenarios in which it solved all issues.

## See also

- [Gentoo:LiveUSB/Guide](https://wiki.gentoo.org/wiki/LiveUSB/Guide "gentoo:LiveUSB/Guide")
- [Fedora:How to create and use Live USB](https://fedoraproject.org/wiki/How_to_create_and_use_Live_USB "fedora:How to create and use Live USB")
- [openSUSE wiki - SDB:Live USB stick](https://en.opensuse.org/SDB:Live_USB_stick)