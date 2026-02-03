---
title: Restore without iTunes - wikiPodLinux
source: http://www.ipodlinux.org/Restore_without_iTunes.html
author: 
published: 
created: 2025-01-13
description: 
tags:
  - iPod
favicon: http://www.ipodlinux.org/favicon.ico
related:
  - "[[Setup Rockbox]]"
---
### From wikiPodLinux

## Restore the Disk Layout

**Note:** Following this step will erase ***everything*** on your iPod. If you only want to restore the firmware partition without formating your iPod please read "[Restore the Firmware](http://www.ipodlinux.org/#Restore_the_Firmware)".

### Recreate the MBR

Use fdisk to repartition your iPod. [Below](http://www.ipodlinux.org/#Partition_Tables) are some examples of partition tables from with iTunes restored iPods.

Before you start make sure that the iPod's partitions are not mounted.

```
umount /dev/sdX2
umount /dev/sdX3 //if you have a EXT2/3 partition
```

Now start fdisk:

```
# fdisk /dev/sdX
The number of cylinders for this disk is set to 2431. //remeber the underlined value
There is nothing wrong with that, but this is larger than 1024,
and could in certain setups cause problems with:
1) software that runs at boot time (e.g., old versions of LILO)
2) booting and partitioning software from other OSs
(e.g., DOS FDISK, OS/2 FDISK)

Command (m for help): 
```

Now recreate the firmware partition:

```bash
Command (m for help): d
Partition number (1-4): 1

Command (m for help): n
Command action
   e extended
   p primary partition (1-4)
p
Partition number (1-4): 1
First cylinder (1-19073, default 1): 1
Last cylinder or +size or +sizeM or +sizeK (1-33, default 33): [*]
```

**\[\*\]** Now enter a value which creates a big enogh firmware partition.

Activate the first partition:

```
Command (m for help): a
Partition number (1-4): 1
```

Set the partition type to **Empty**:

```
Command (m for help): t
Partition number (1-4): 1
Hex code (type L to list codes): 0
```

Create the data partition to fill the rest of your iPod.

```
Command (m for help): n
Command action
   e extended
   p primary partition (1-4)
p
Partition number (1-4): 2
First cylinder (1-19073, default 1): //value you entered for last cylinder of partition 1, plus 1
Last cylinder or +size or +sizeM or +sizeK (1-19073, default 33): //use the value you've remebered      
                                                                  //above
```

Set the partition type to **W95 FAT32**:

```
Command (m for help): t
Partition number (1-4): 2
Hex code (type L to list codes): b
Changed system type of partition 2 to b (W95 FAT32)
```

Review the Partition:

```
Command (m for help): p
```

The partition table now should look like the ones [below](http://www.ipodlinux.org/#Partition_Tables).

Save the partition table:

```
Command (m for help): w
The partition table has been altered!
```

### Format the FAT32 partition

```
mkfs.vfat -F 32 /dev/sdX2
```

If you get an error with mkfs.vfat (bash: mkfs.vfat: command not found) try:

```
mkdosfs -F 32 /dev/sdX2
```

If you have a 5.5G iPod read [this](http://www.ipodlinux.org/5.5G/index.html#mkfs_bug "5.5G") note.

## Restore the Firmware

### Get a clean Firmware Image

Choose your iPod Model from this (*http://www.felixbruns.de/iPod/firmware/*) drop down menu. If there are two firmwares for one iPod you can chose one. They are the same.

Or you can get the links to the lates firmwares in this XML file (*http://phobos.apple.com/version*) (use the link that ends with .ipsw). The first number from the .ipsw file is corresponding to the iPod model (you can find all numbers [in this table](http://www.ipodlinux.org/Firmware.html#Firmware_updates "Firmware")).

Both ways to download a .ipsw file will result in the same file.

The .ipsw file is a .zip file. If you unpack it you will get a file called manifest.plist and a file without extension, for example Firmware-14.5.3. The last one is the firmware image.

### Move the Image to the iPod

Use **dd** (preinstalled on Linux and MacOSX, Windows users have to download it first) to move the firmware to your iPod.

Linux, MacOSX:

```
dd if=Firmware-X.Y.Z of=/dev/sdX seek=63
```

Windows:

```
dd if=Firmware-X.Y.Z  of='\\.\physicaldriveX' seek=63
```

If you have a 5.5G iPod (2048 bytes per sector) you have to replace seek=63 with seek=252!

  
If you don't want to use seek=?? you can point directly to the firmware partition (not possible on Windows):

```
dd if=Firmware-X.Y.Z of=/dev/sdX1
```

  
You can also use ipodpatcher (*http://download.rockbox.org/bootloader/ipod/ipodpatcher/*) instead of dd if it detects the iPod correctly (Linux, MacOSX and Windows).

```
./ipodpatcher -w Firmware-X.Y.Z
```

  
Another way to restore the firmware for Windows users is with iPodWizard (*http://www.ipodwizard.net*).

1. Open iPodwizard.
2. Select from the drop down menu "Firmware File"
3. Click "Load".
4. A box should appear. Navigate to where your firmware file is.
5. Load it. (You might have to press a load button I'm not too sure.)
6. Then click "Write to iPod" and that firmware will be written to your iPod in a matter of seconds.

## Partition Tables

**3G**

---

**40GB**

```
   Device Boot      Start         End      Blocks   Id  System
/dev/sda1               1           5       40131    0  Empty
/dev/sda2               6        4863    39021885    b  W95 FAT32
```

  
**4G**

---

**20GB**

```
   Device Boot      Start         End      Blocks   Id  System
/dev/sda1   *           1           5       40131    0  Empty
/dev/sda2               6        2431    19486845    b  W95 FAT32
```

  
**Photo/Color**

---

**60GB**

```
   Device Boot      Start         End      Blocks   Id  System
/dev/sda1   *           1           5       40131    0  Empty
/dev/sda2   *           6        7296    58564957+   b  W95 FAT32
```

  
**mini**

---

**4GB**

```
   Device Boot      Start         End      Blocks   Id  System
/dev/sda1   *           1           5       40131    0  Empty
/dev/sda2   *           6         497     3951990    b  W95 FAT32
```

  
**nano 1G**

---

**1GB**

```
   Device Boot      Start         End      Blocks   Id  System
/dev/sda1               1          10      80293+    0  Empty
/dev/sda2              11         124      915705    b  W95 FAT32
```

**2GB**

```
   Device Boot      Start         End      Blocks   Id  System 
/dev/sda1               1          10       80293+   0  Empty 
/dev/sda2              11         248     1911735    b  W95 FAT32 
```

**4GB**

```
   Device Boot      Start         End      Blocks   Id  System
/dev/sda1   *           1          10       80293+   0  Empty
/dev/sda2   *          11         497     3911824+   b  W95 FAT32 
```

  
**5G**

---

**30GB**

```
   Device Boot      Start         End      Blocks   Id  System 
/dev/sda1               1          10      80293+    0  Empty 
/dev/sda2   *          11        3648    29222235    b  W95 FAT32 
```

**60GB**

```
   Device Boot      Start         End      Blocks   Id  System 
/dev/sda1               1          14     112423+    0  Empty 
/dev/sda2   *          15        7296    58492665    b  W95 FAT32 
```

  
**5.5G**

---

**30GB**

```
   Device Boot      Start         End      Blocks   Id  System 
/dev/sda1               1           3       96264    0  Empty 
/dev/sda2               4         912    29206170    b  W95 FAT32
```

**80GB**

```
   Device Boot      Start         End      Blocks   Id  System
/dev/sda1               1           4      128394    0  Empty
/dev/sda2               5        2432    77497560    b  W95 FAT32
```