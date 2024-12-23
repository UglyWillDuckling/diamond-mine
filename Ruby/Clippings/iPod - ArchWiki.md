---
title: "iPod - ArchWiki"
source: "https://wiki.archlinux.org/title/IPod"
author:
published:
created: 2024-12-21
description:
tags:
  - "clippings"
---
The [iPod](https://en.wikipedia.org/wiki/IPod "wikipedia:IPod") is a discontinued series of portable media players created by Apple Inc. Officially, you can only add music to iPods using Apple's iTunes program, but there are several other programs that are able to sync music with an iPod.

## Accessing the storage

Traditional iPods are accessed just like a normal USB storage device containing a *vfat* or *hfsplus* file system. See the [USB storage devices](https://wiki.archlinux.org/title/USB_storage_devices "USB storage devices") article for detailed instructions on how to access your device.

**Tip:**

- If your iPod is formatted as *hfsplus*, you will need [hfsprogs](https://aur.archlinux.org/packages/hfsprogs/)<sup><small>AUR</small></sup> to access it. You may also restore your iPod using iTunes on Windows in order to format it as vfat.
- If your iPod is formatted as *vfat*, you can use *dosfslabel* (from [dosfstools](https://archlinux.org/packages/?name=dosfstools)) to rename your iPod's volume label:

```
# dosfslabel /dev/sdXY ArchPod
```

## Library management

These tools use the [libgpod](https://archlinux.org/packages/?name=libgpod) library:

- **[Clementine](https://en.wikipedia.org/wiki/Clementine_\(software\) "wikipedia:Clementine (software)")** — Amarok 1.4 clone, ported to Qt5.

[https://www.clementine-player.org/](https://www.clementine-player.org/) || [clementine](https://aur.archlinux.org/packages/clementine/)<sup><small>AUR</small></sup>

- **Strawberry** — Fork of Clementine aimed at audio enthusiasts and music collectors.

[https://www.strawberrymusicplayer.org/](https://www.strawberrymusicplayer.org/) || [strawberry](https://archlinux.org/packages/?name=strawberry)

- **[Rhythmbox](https://wiki.archlinux.org/title/Rhythmbox "Rhythmbox")** — GTK clone of iTunes, formerly GNOME's default music player.

[https://wiki.gnome.org/Apps/Rhythmbox](https://wiki.gnome.org/Apps/Rhythmbox) || [rhythmbox](https://archlinux.org/packages/?name=rhythmbox)

- **[gtkpod](https://en.wikipedia.org/wiki/gtkpod "wikipedia:gtkpod")** — GUI for Apple's iPod using GTK. It allows you to import your existing iTunes database, add songs, podcasts, videos and cover art, and to edit ID3 tags.

[https://sourceforge.net/projects/gtkpod/](https://sourceforge.net/projects/gtkpod/) || [gtkpod](https://aur.archlinux.org/packages/gtkpod/)<sup><small>AUR</small></sup>

- **[Amarok](https://wiki.archlinux.org/title/Amarok "Amarok")** — Mature Qt-based player known for its plethora of features.

[https://amarok.kde.org/](https://amarok.kde.org/) || [amarok](https://aur.archlinux.org/packages/amarok/)<sup><small>AUR</small></sup>

## Converting video for devices

### Handbrake

[Handbrake](https://handbrake.fr/) is a nifty tool with presets for a variety of iPod versions. CLI and GTK versions are available with the [handbrake-cli](https://archlinux.org/packages/?name=handbrake-cli) and [handbrake](https://archlinux.org/packages/?name=handbrake) packages respectively.

If you do decide to take the CLI way, a good guide is available at [https://handbrake.fr/docs/en/latest/cli/command-line-reference.html](https://handbrake.fr/docs/en/latest/cli/command-line-reference.html).

### Avidemux

[Install](https://wiki.archlinux.org/title/Install "Install") the [avidemux-qt](https://archlinux.org/packages/?name=avidemux-qt) package.

This can convert to mp4 files. If you enforce a hard max of bit rate @ 700ish and keep the video size to 720x480 or 320x240 than it works fine for video file exporting.

### Mencoder

[Install](https://wiki.archlinux.org/title/Install "Install") the [mplayer](https://archlinux.org/packages/?name=mplayer) package.

Has *extremely* comprehensive configuration support, which will be able to spit out iPod-compatible video files. Check out [mencoder(1)](https://man.archlinux.org/man/mencoder.1); a lot of MPlayer opts will also affect encoding.

A basic guide is also available at [MEncoder](https://wiki.archlinux.org/title/MEncoder "MEncoder").

An example command to encode iPhone/iPod Touch-compatible video:

```
$ mencoder INPUT -o output.mp4 \
-vf scale=480:-10,harddup \
-oac faac -faacopts mpeg=4:object=2:raw:br=128 \
-of lavf -lavfopts format=mp4 \
-ovc x264 -x264encopts nocabac:level_idc=30:bframes=0
```

### FFmpeg

[Install](https://wiki.archlinux.org/title/Install "Install") the [ffmpeg](https://archlinux.org/packages/?name=ffmpeg) package.

Another encoder with comprehensive configuration support. Example command to encode for 5G iPod:

```
$ ffmpeg -vcodec xvid -b 300 -qmin 3 -qmax 5 -bufsize 4096 \
-g 300 -acodec aac -ab 96 -i INPUT -s 320x240 \
-aspect 4:3 output.mp4
```

or iPod Touch/iPhone compatible video output:

```
$ ffmpeg -f mp4 -vcodec mpeg4 -maxrate 1000 -b 700 -qmin 3 -qmax 5\
-bufsize 4096 -g 300 -acodec aac -ab 192 -s 480×320 -aspect 4:3 -i INPUT output.mp4
```

## Device specific

### iPhone/iPod Touch

#### Generating HashInfo file

If you have never synced your device using *iTunes*, you will get error messages telling you that the HashInfo file is missing. This can be fixed by syncing once with iTunes in order to create it. Alternatively one can create this file using the site [http://ihash.marcansoft.com/](http://ihash.marcansoft.com/). Enter the serial number of the iPod on the website. It will generate a file named `HashInfo` which you will place under the `/mnt/ipod/iPod_Control/Device/` directory. Unplug the iPod device and plug it back.

#### Unobfuscating the Database

![](https://wiki.archlinux.org/images/4/4e/View-refresh-red.svg)**This article or section is out of date.**

**Reason:** iOS version 2.0 is from 2008, and libgpod is already able to read the database without jailbreaking the device and editing system files. (Discuss in [Talk:IPod](https://wiki.archlinux.org/title/Talk:IPod))

Since firmware version 2.0, Apple has obfuscated the music database. If you are using recent firmware, the file `/System/Library/Lockdown/Checkpoint.xml` can be modified to enable use of the older, non-obfuscated database. If that file does not exist then try to copy from ` /System/Library/CoreServices/Checkpoint.xml` to `/System/Library/Lockdown/Checkpoint.xml` then replace:

```
<key>DBVersion</key>
<integer>4</integer>
```

with:

```
<key>DBVersion</key>
<integer>2</integer>
```

Then reboot your device.

If syncing fails with `ERROR: Unsupported checksum type '0' in cbk file generation!`, you may need to leave this at 4. libgpod seems to [expect a hashed database](https://gitorious.org/libgpod/libgpod/?p=libgpod:libgpod.git;a=blob;f=src/itdb_sqlite.c;h=b5b29753ece09fc14aec462d3b88bb86882302cd;hb=HEAD#l2067)<sup title="Last check status: SSL error">[<a href="https://en.wikipedia.org/wiki/Wikipedia:Link_rot" class="extiw" title="wikipedia:Wikipedia:Link rot">dead link</a> 2023-04-23&nbsp;ⓘ]</sup>.

### iPod Classic/Nano (3rd generation)

You need to set up the iPod to make libgpod able to find its Firewire ID. For this, you will need to get your FireWire ID manually

1. Mount the iPod as a rw mount point. In the following example, use `/mnt/ipod`.
2. Find the serial number by typing
```
# lsusb -v | grep -i Serial
```
this should print a 16 character long string like `00A1234567891231` (it will have no colons or hyphens)
3. Once you have that number, create or edit `/mnt/ipod/iPod_Control/Device/SysInfo`. Add to that file the line below:
```
FirewireGuid: 0xffffffffffffffff
```
(replace `ffffffffffffffff` with the 16 digit string you obtained at the previous step and do not forget the leading `0x` before the string)

Your iPod can now be managed with Amarok or gtkpod.

### iPod Nano 5th generation

Follow the instructions above [#Generating HashInfo file](https://wiki.archlinux.org/title/#Generating_HashInfo_file) in order to set up the hash file, it is needed to write into the device music library. To be able to use the iPod Nano 5th gen with [libgpod](https://archlinux.org/packages/?name=libgpod), a `SysInfoExtended` file is also needed to be placed in the directory `/mnt/ipod/iPod_Control/Device/`. It can be generated using:

```
# ipod-read-sysinfo-extended bus device mountpoint
```

for example:

```
# ipod-read-sysinfo-extended 001 011 /mnt/ipod/
```

### iPod Nano 6th generation

By default libgpod does not seem to be able to synchronize on a iPod Nano 6th generation. It copies data, but as soon as USB is disconnected, everything is as before. The package [libhashab-git](https://aur.archlinux.org/packages/libhashab-git/)<sup><small>AUR</small></sup> fixes this. Additionally, the `SysInfoExtended` file is also required, and can be generated in the same fashion as in [#iPod Nano 5th generation](https://wiki.archlinux.org/title/#iPod_Nano_5th_generation), however a `HashInfo` file is unnecessary on this model.

### iPod Shuffle 1st and 2nd generation

[rebuild\_db](https://shuffle-db.sourceforge.net/) is a Python 2 script that makes it possible to use the iPod Shuffle almost like any other USB flash MP3 player. Download the script from the website, then place it in the iPod's root directory. Copy your MP3 files onto the iPod Shuffle (sub-folders are allowed too) and then run the script:

```
$ python2 /mnt/iPod/rebuild_db.py
```

### iPod Shuffle 4th generation

In order to use this version of the iPod Shuffle under linux, you can use the python based command line tool [ipod-shuffle-4g](https://aur.archlinux.org/packages/ipod-shuffle-4g/)<sup><small>AUR</small></sup>. It also provides advanced voiceover and (auto)playlist generation support.

### iPod Video (5th and 5.5th generation)

iPods in the mainline series up to and including this model do not support the AAC PNS feature, and will display audible artifacts when encountering it. Disable the feature in [ffmpeg](https://archlinux.org/packages/?name=ffmpeg) when encoding AAC files for these devices.

```
$ ffmpeg -i input.ogg -c:a aac -b:a 256k -aac_pns 0 -movflags +faststart -vn output.m4a
```

The `-movflags +faststart` options place the moov atom at the start of the file, which helps the iPod parse the file faster.