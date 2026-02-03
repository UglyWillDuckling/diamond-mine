## iPod Conversion to FAT32


## The Easy Way

The easiest way to convert your iPod to FAT32 is to attach it to a Windows computer which has iTunes installed. When iTunes detects your ipod, it will offer to reformat it for you.

For iTunes 7.0.2 on Windows, the following will occur when you connect a Mac formatted iPod: A popup box stating "iTunes has detected a Macintosh-formatted iPod. You must restore this iPod before you can use it on Windows". Then in the iTunes window you'll have an option to 'Restore' the iPod. Follow the steps (iPod Software Update will be downloaded within iTunes if required). The iPod will be restored, and you'll get a window stating "Your iPod has been restored to factory settings, and is restarting. Please leave the iPod connected, and it will appear in the source list once it completes the restore process.".

You'll see a progress bar move along the iPod's screen. Once done, you'll be prompted within Windows to name the iPod and asked whether you want to automatically sync music (and possibly photos). Untick the automatic sync options and proceed. At this point you'll see your iPod connected in iTunes and the 'Format' will be 'Windows'. You'll then be able to eject the iPod.

You can then return to your Mac and install Rockbox and continue to use your iPod with iTunes on your Mac.

## Manual conversion

If you have a Mac formatted iPod, and don't have access to a Windows computer, perform these steps to convert your iPod to FAT32:

## a) Find your iPod and unmount it

Before you proceed you must find the device name Mac OS X has assigned to your iPod and unmount the disk. To unmount your disk, open Disk Utility (located in Applications/Utilities). Then select your iPod and click 'Unmount'. Make sure you do not eject it - this will cause the 'dd' command below to fail.

## b) Download the partition table file that match your iPod

To recreate the partition table of a Windows formatted iPod you need to download the partition table file that **exactly matches** your iPod model. Save this to a convenient location.

NOTE: If you have the 30GB video iPod, you need to determine your sector size. This can be done with the ipodpatcher command - after identifying your iPod, type "ipodpatcher /dev/diskN" (replacing diskN with the device name assigned to your iPod). This should then display the sector size.

| iPod Model | Partition table |
| --- | --- |
| 5GB 1st Generation | [mbr-1g-5gb.bin](http://download.rockbox.org/bootloader/ipod/mbr-1g-5gb.bin) |
| 10GB 2nd Generation | [mbr-g2-10gb.bin](https://www.rockbox.org/realwiki/pub/Main/IpodConversionToFAT32/mbr-g2-10gb.bin) |
| 20GB 2nd Generation | [mbr-g2-20gb.bin](https://www.rockbox.org/realwiki/pub/Main/IpodConversionToFAT32/mbr-g2-20gb.bin) |
| 15GB 3rd Generation | [mbr-3g-15gb.bin](https://www.rockbox.org/realwiki/pub/Main/IpodConversionToFAT32/mbr-3g-15gb.img) |
| 20GB 3rd Generation | [mbr-3g-20gb.bin](http://download.rockbox.org/bootloader/ipod/mbr-3g-20gb.bin) |
| 40GB 3rd Generation | [mbr-3g-40gb.bin](http://download.rockbox.org/bootloader/ipod/mbr-3g-40gb.bin) |
| 20GB 4th Generation | [mbr-4g-20gb.bin](http://download.rockbox.org/bootloader/ipod/mbr-4g-20gb.bin) |
| 40GB 4th Generation | [mbr-4g-40gb.bin](http://download.rockbox.org/bootloader/ipod/mbr-4g-40gb.bin) |
| 4GB Mini 1st Generation | [mbr-mini1g-4gb.bin](http://download.rockbox.org/bootloader/ipod/mbr-mini1g-4gb.bin) |
| 4GB Mini 2nd Generation | [mbr-mini2g-4gb.bin](http://download.rockbox.org/bootloader/ipod/mbr-mini2g-4gb.bin) |
| 6GB Mini 2nd Generation | [mbr-mini2g-6gb.bin](http://download.rockbox.org/bootloader/ipod/mbr-mini2g-6gb.bin) |
| 1GB Nano 1st Generation | [mbr-nano1g.bin](http://download.rockbox.org/bootloader/ipod/mbr-nano1g.bin) |
| 2GB Nano 1st Generation | [mbr-nano2gb.bin](http://download.rockbox.org/bootloader/ipod/mbr-nano2gb.bin) |
| 4GB Nano 1st Generation | [mbr-nano4gb.bin](http://download.rockbox.org/bootloader/ipod/mbr-nano4gb.bin) |
| 60GB Photo/Color | [mbr-photo60gb.bin](http://download.rockbox.org/bootloader/ipod/mbr-photo60gb.bin) |
| 30GB Video (512-byte sectors) | [mbr-video30gb.bin](http://download.rockbox.org/bootloader/ipod/mbr-video30gb.bin) |
| 60GB Video (512-byte sectors) | [mbr-video60gb.bin](http://download.rockbox.org/bootloader/ipod/mbr-video60gb.bin) |
| 30GB Video (2048-byte sectors) | [mbr-video30gb-2048.bin](http://download.rockbox.org/bootloader/ipod/mbr-video30gb-2048.bin) |
| 80GB Video (2048-byte sectors) | [mbr-video80gb-2048.bin](http://download.rockbox.org/bootloader/ipod/mbr-video80gb-2048.bin) |

## c) Apply the correct partition table

Open a terminal and navigate to the directory where you saved the partition table in step b). Then run the below command to write the partition table to your iPod:

`**dd if=mbr-xxxx.bin of=/dev/diskN**`

Replace `mbr-xxxx.bin` with the name of the MBR file you downloaded in step b).

To find out the disk device name for your iPod, mount it in Disk Utility, click on it to select it, and open the Details screen. Alternatively, you can mount the iPod and then on the command line type "mount" to see a list of mounted disks with their device names, including the iPod. For this step you want the disk device name of the whole disk, which should be in the form of "diskN", where N is a simple number. If you see something like "disk1s2", leave off the "s2" part, which specifically identifies the iPod's main data partition. Remember to unmount the iPod again in Disk Utility after you have its disk device name.

**CAUTION** You must replace "diskN" with the correct name of the disk device assigned to your iPod. Using an incorrect device name in this command may result in the partition table for another hard disk in your system being changed. Which is very bad news.

Writing over the MBR is risky; if it fails, it may cause your iPod to continually attempt reboots, which makes it difficult to access again from your computer. Should this happen, you need to put your iPod into "disk mode", as described [here](http://docs.info.apple.com/article.html?artnum=93651). In summary:

For click-wheel iPods (Minis, Nanos, 4th Generation and later iPods):

- Put the iPod on "hold" and then off again.
- Hard reset by holding down "menu" and "select" simultaneously for several seconds.
- As it comes back on, switch to holding "select" and "play" for a few seconds.

For 1st, 2nd and 3rd Generation iPod models:

- Put the iPod on "hold" and then off again.
- Hard reset by holding down "play" and "menu" simultaneously for several seconds.
- As it comes back on, switch to holding "previous" and "next" for a few seconds.

The iPod should then display it is in "disk mode" and ready to mount like an external hard drive.

## d) Disconnect and reconnect your ipod to make sure the new MBR is read by the Operating System on your computer

Possibly this step is only required on a Linux box, not a Mac.

Type the following command:

`**eject /dev/diskN**`

Then physically unplug the ipod, and plug it back in again.

## e) Format the main partition with FAT32 file system

Note - there is a problem with mkfs.vfat on disks over 30GB in size. We recommend mtools format utility instead. See below.

### For 5th Generation and below iPods

The easiest method is to use 'Disk Utility'. Select the iPod partition disk on the left side, click the Erase tab, select 'MS-DOS File System' and at last click the 'Erase' button.

If you are happy with the Terminal, you can 'newfs\_msdos' command:

`**newfs_msdos -F32 -v iPod /dev/rdiskNs2**`

(where diskN is the correct name of your iPod).

### For 5.5th Generation iPods

These iPods have their storage exported as 2048-byte sectors. Simply add an argument to the 'newfs\_msdos' command:

`**newfs_msdos -F 32 -S 2048 -v iPod /dev/rdiskNs2**`

I've successfully used this method on a CF-modded 5.5G iPod. However, by checking the generated filesystem, I've deduced that this method will also work on unmodded iPods. Additionally, this method is easier and simpler than the older method below. -- [WilliamPoetra](https://www.rockbox.org/wiki/WilliamPoetra.html) - 21 Jul 2008

### For 5.5th Generation iPods (older, alternative method)

If the method above doesn't work, then use this method.

You will need the mtools package installed, this is available through fink if you have it, or alternatively build mtools yourself from the source: [http://mtools.linux.lu/](http://mtools.linux.lu/) . As of June 13, 2008, the current version of mtools is 3.9.11.

Edit or create /etc/mtools.conf (or /sw/etc/mtools.conf if installed via fink), adding the following line to identify the iPod's main partition for mtools:

`**drive a: file="/dev/diskNs2"**`

Note that you will need administrative access (or sudo) for this step. Here you do want to include the "s2" to indicate the iPod's data partition, which is what is being reformatted to FAT32.

Now you may issue the command

`**mformat -t 2428 -h 255 -s 63 -S 4 -M 2048 -F a:**`

Some versions of mformat need '-n' instead of '-s', so if you get the error "argssize must be less than 6", try

`**mformat -t 2428 -h 255 -n 63 -S 4 -M 2048 -F a:**`

If you have trouble with the disk being in use, make sure iTunes is not running and the ipod is not mounted.

Once this process finishes running, you can confirm that your iPod is now formatted as FAT32 by mounting it in Disk Utility (if it doesn't remount automatically), clicking it to select it, and looking at the formatting information at the bottom of the Disk Utility window. It should now say FAT32 instead of Macintosh Extended (Journaled).

Copyright Â© by the contributing authors.