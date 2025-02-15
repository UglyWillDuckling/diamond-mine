---
related:
  - "[[rockbox]]"
  - "[[IpodConversionToFAT32  Main  Wiki]]"
  - "[[Setup Rockbox]]"
tags:
  - howto
  - manual
rel:
---
[![](https://www.rockbox.org/rockbox100.png)](https://www.rockbox.org/)

Installing Rockbox is generally a quick and easy procedure. However before beginning there are a few important things to know.

- [[#2.1  Before Starting|2.1  Before Starting]]
	- [[#2.1  Before Starting#2.1.1  Storage/Capacity Limits|2.1.1  Storage/Capacity Limits]]
	- [[#2.1  Before Starting#2.1.2  Flash/SSD mods|2.1.2  Flash/SSD mods]]
- [[#2.2  Installing Rockbox|2.2  Installing Rockbox]]
	- [[#2.2  Installing Rockbox#2.2.1  Automated Installation|2.2.1  Automated Installation]]
		- [[#2.2.1  Automated Installation#Choosing a Rockbox version|Choosing a Rockbox version]]
	- [[#2.2  Installing Rockbox#2.2.2  Manual Installation|2.2.2  Manual Installation]]
		- [[#2.2.2  Manual Installation#Installing the firmware|Installing the firmware]]
		- [[#2.2.2  Manual Installation#Installing the bootloader|Installing the bootloader]]
		- [[#2.2.2  Manual Installation#Bootloader installation from Windows|Bootloader installation from Windows]]
		- [[#2.2.2  Manual Installation#Bootloader installation from Mac OS X|Bootloader installation from Mac OS X]]
		- [[#2.2.2  Manual Installation#Bootloader installation from Linux|Bootloader installation from Linux]]
	- [[#2.2  Installing Rockbox#2.2.3  Finishing the install|2.2.3  Finishing the install]]
	- [[#2.2  Installing Rockbox#2.2.4  Enabling Speech Support (optional)|2.2.4  Enabling Speech Support (optional)]]
- [[#2.3  Running Rockbox|2.3  Running Rockbox]]
- [[#2.4  Updating Rockbox|2.4  Updating Rockbox]]
- [[#2.5  Uninstalling Rockbox|2.5  Uninstalling Rockbox]]
	- [[#2.5  Uninstalling Rockbox#2.5.1  Automatic Uninstallation|2.5.1  Automatic Uninstallation]]
	- [[#2.5  Uninstalling Rockbox#2.5.2  Manual Uninstallation|2.5.2  Manual Uninstallation]]
- [[#2.6  Troubleshooting|2.6  Troubleshooting]]

### 2.1  Before Starting

Supported hardware versions.

The Classic refers to the 6th generation model of the Ipod. It comes with disk sizes of 80GB, 120GB, and 160GB in “thick” and “slim” versions.

USB connection.

To transfer Rockbox to your player you need to connect it to your computer. For manual installation/uninstallation, or should autodetection fail during automatic installation, you need to know where to access the player. On Windows this means you need to know the drive letter associated with the player. On Linux you need to know the mount point of your player. On Mac OS X you need to know the volume name of your player.

If you have Itunes installed and it is configured to open automatically when your player is attached (the default behaviour), then wait for it to open and then quit it. You also need to ensure the “Enable use as disk” option is enabled for your player in Itunes. Your player should then enter disk mode automatically when connected to a computer via USB. If your computer does not recognise your player, you may need to enter disk mode manually. Disconnect your player from the computer. Hard reset the player by pressing and holding the Menu and Select buttons simultaneously. As soon as the player resets, press and hold the Select and Play buttons simultaneously. Your player should enter disk mode and you can try reconnecting to the computer.

Administrator/[[Root]] rights.

Installing the bootloader portion of Rockbox requires you to have administrative (Windows) or **root (Linux) rights.** Consequently when doing either the automatic or manual bootloader install, please ensure that you are logged in with an administrator account or have root rights.

File system format.

Rockbox only works on Ipods formatted with the [[FAT32]] filesystem (*i.e. Ipods initialised by Itunes for Windows*). It does not work with the [[HFS+]] filesystem (i.e. Ipods initialised by Itunes for the [[Macintosh|Mac]]). More information and instructions for **converting** an Ipod to FAT32 can be found on the [IpodConversionToFAT32](https://www.rockbox.org/wiki/IpodConversionToFAT32) wiki page on the Rockbox website. Note that after conversion, you can still use a FAT32 Ipod with a Mac.

#### 2.1.1  Storage/Capacity Limits

Rockbox supports very large drive capacities when used with GPT partitioning on devices that utilize ATA storage, but due to the limitations of the **FAT32** filesystem, **individual paritions cannot exceed 2TiB**.

For example, the stock Apple firmware on earlier 6th generation iPod Classic models[<sup class="textsuperscript">1</sup>](https://download.rockbox.org/daily/manual/rockbox-ipod6g/rockbox-build5.html#fn1x2) is limited to drives no larger than 128GiB, and booting into the Apple firmware firmware with larger drive sizes will result in massive data corruption. Later 6th generation iPod Classic models[<sup class="textsuperscript">2</sup>](https://download.rockbox.org/daily/manual/rockbox-ipod6g/rockbox-build6.html#fn2x2) (sometimes referred to as “7th gen”) do not have this issue. 
> [!tip] Rockbox itself will function correctly on all 6th/7th generation iPod Classic models.

**Note: In practice, no Rockbox-capable device can currently handle total drive capacities exceeding 2TiB.**

#### 2.1.2  Flash/SSD mods

It is common to replace the device’s original mechanical hard drive with some sort of solid-state storage. Older versions of Rockbox (3.15 or prior) do not work properly with many of these so-called “flash mods”, the most common symptom being data corruption on write-heavy operations. All known data integrity issues have been resolved, but each type of adapter still has its own quirks:

Compact Flash.

True Compact Flash cards natively implement the ATA command set, including advanced power management and the removeable attribute. They are performant, reliable, and physically robust, but tend to be expensive and not available in larger sizes.

SATA.

These are fast, reliable, and available in high capacities, but are typically optimized for high performance at the expense of power consumption.. However, as they implement the full ATA command set, we are able to minimize their power consumption and power them down when not being actively used.

Single Secure Digital (SD).

While these adapters come in different form factors from multiple vendors, they are all based on the same basic design. The ATA command set is incompletely emulated, notably lacking support for mandatory ATA power management commands that Rockbox uses to safely transition the device in and out of low power states. Additionally, SD cards vary widely in quality and power consumption with the resultant effects on data longevity and battery life. Finally, these SD adapters do not support 2TiB or larger SDUC cards.

Dual/Quad SD.

These are similar to the above, only allowing use of mulitiple SD cards to increase the overall storage capacity. While typically described as JBOD[<sup class="textsuperscript">4</sup>](https://download.rockbox.org/daily/manual/rockbox-ipod6g/rockbox-build8.html#fn4x2) , this is not accurate as each card is not individually accessable. Instead, the adapter claims to be to be a single logical drive of the combined capacity of the individual cards in a RAID0-like manner. Consquently, if any one card fails, all data on all other cards may be rendered inacessible. Given the quality concerns mentioned earlier, this means use of multiple SD cards in one of these adapters is the least reliable/robust of the various SSD mods. Finally, in another violation of the ATA specification, these ATA-SD adapters fail to properly support LBA48 addressing, meaning that no matter what combination of cards is used, if their combined capacity exceeds 2TiB, the extra capacity will not be usable, and the device may even present as having (considerably) less space.

Note: All of these flash/SSD mods take up less physical space in the device enclosure than the original hard drive, so care must be taken to ensure they are securely mounted and resistant to the vibration and impacts that typically occur in portable devices. Ribbon cables are particularly vulnerable.

It is also worth noting that you will not likely see improved data transfer rates when using solid-state storage; the underlying player hardware is simply too slow to materially benefit. However, the improved access times should help the player to feel much more responsive.

### 2.2  Installing Rockbox

There are two ways to install Rockbox: automated and manual. The **automated way is the preferred** method of installing Rockbox for the majority of people. Rockbox Utility is a graphical application that does almost everything for you. However, should you encounter a problem, then the manual way is still available to you.  

There are three separate components, two of which need to be installed in order to run Rockbox:

The **Ipod bootloader**.

The Ipod bootloader is the program that tells your player how to load and start the original firmware. It is also responsible for any emergency, recovery, or disk modes on your player. This bootloader is stored in special flash memory in your Ipod and comes factory-installed. It is not necessary to modify this in order to install Rockbox.

The **Rockbox** **bootloader**.

The Rockbox [[bootloader]] is loaded from disk by the Ipod bootloader. It is responsible for loading the Rockbox firmware and for providing the dual boot function. It directly replaces the Ipod firmware in the player’s boot sequence.

The Rockbox **firmware**.

Similar to the Ipod firmware, most of the Rockbox code is contained in a “build” that resides on your player’s drive. This makes it easy to update Rockbox. The build consists of a directory called .rockbox which contains all of the Rockbox files, and is located in the root of your player’s drive.

Apart from the required parts there are some addons you might be interested in installing.

Fonts.

Rockbox can load custom fonts. The fonts are distributed as a separate package and thus need to be installed separately. They are not required to run Rockbox itself but a lot of themes require the fonts package to be installed.

Themes.

The appearance of Rockbox can be customised by themes. Depending on your taste you might want to install additional themes to change the look of Rockbox.

#### 2.2.1  Automated Installation

To automatically install Rockbox, download the official installer and housekeeping tool Rockbox Utility. It allows you to:

- Automatically install all needed components for using Rockbox (“Minimal Installation”).
- Automatically install all suggested components (“Complete Installation”).
- Selectively install optional components.
- Install additional fonts and themes.
- Install voice files and generate talk clips.
- Uninstall all components you installed using Rockbox Utility.

Prebuilt binaries for Windows, Linux and Mac OS X are available at the [RockboxUtility](https://www.rockbox.org/wiki/RockboxUtility) wiki page.  

When first starting Rockbox Utility run “Autodetect”, found in the configuration dialog (File → Configure). Autodetection can detect most player types. If autodetection fails or is unable to detect the mountpoint, make sure to enter the correct values. The mountpoint indicates the location of the player in your filesystem. On Windows, this is the drive letter the player gets assigned, on other systems this is a path in the filesystem.  

##### Choosing a Rockbox version

There are three different versions of Rockbox available from the Rockbox website: Release version, current build and archived daily build. You need to decide which one you want to install and get the appropriate version for your player. If you select either “Minimal Installation” or “Complete Installation” from the “Quick Start” tab, then Rockbox Utility will automatically install the release version of Rockbox. Using the “Installation” tab will allow you to select which version you wish to install.

Release.

The release version is the latest stable release, free of known critical bugs. For a manual install, the current stable release of Rockbox is available at [https://www.rockbox.org/download/](https://www.rockbox.org/download/).

Development Build.

The development build is built at each change to the Rockbox source code repository and represents the current state of Rockbox development. This means that the build could contain bugs but most of the time is safe to use. For a manual install, you can download the current build from [https://build.rockbox.org/](https://build.rockbox.org/).

Archived Build.

In addition to the release version and the current build, there is also an archive of daily builds available for download. These are built once a day from the latest source code in the repository. For a manual install, you can download archived builds from [https://www.rockbox.org/daily.shtml](https://www.rockbox.org/daily.shtml).

Note: Because current and archived builds are development versions that change frequently, they may behave differently than described in this manual, or they may introduce new (and potentially annoying) bugs. Unless you wish to try the latest and greatest features at the price of possibly greater instability, or you wish to help with development, you should stick with the release.  

Please now go to section [2.2.3](https://download.rockbox.org/daily/manual/rockbox-ipod6g/#x4-190002.2.3) to complete the installation procedure.

#### 2.2.2  Manual Installation

The manual installation method is still available to you, should you need or desire it by following the instructions below. If you have used Rockbox Utility to install Rockbox, then you do not need to follow the next section and can skip straight to section [2.2.3](https://download.rockbox.org/daily/manual/rockbox-ipod6g/#x4-190002.2.3)

##### Installing the firmware

1.

Download your chosen version of Rockbox from the links in the previous section.

2.

Connect your player to the computer via USB as described in the manual that came with your player.

3.

Take the .zip file that you downloaded and use the “Extract all” command of your unzip program to extract the files onto your player.

Note: The entire contents of the .zip file should be extracted directly to the root of your player’s drive. Do not try to create a separate directory on your player for the Rockbox files! The .zip file already contains the internal structure that Rockbox needs.  

If the contents of the .zip file are extracted correctly, you will have a directory called .rockbox, which contains all the files needed by Rockbox, in the main directory of your player’s drive.

##### Installing the bootloader

##### Bootloader installation from Windows

Manual installation under Windows is not supported. Please use Rockbox Utility for bootloader and Rockbox installation.

##### Bootloader installation from Mac OS X

Warning: Please make sure that your iPod is formatted using FAT32 (a.k.a. WinPod) before attempting to install the bootloader! Installation will not work on HFS/HFS+ iPods (a.k.a. MacPods).

1.

Download the bootloader in .ipod format from [https://files.freemyipod.org/~user890104/bootloader-ipodclassic-v1\_0/bootloader-ipod6g.ipod](https://files.freemyipod.org/~user890104/bootloader-ipodclassic-v1_0/bootloader-ipod6g.ipod)

2.

Download mks5lboot for your operating system from [https://files.freemyipod.org/~user890104/bootloader-ipodclassic.html\\#download\_stable](https://files.freemyipod.org/~user890104/bootloader-ipodclassic.html/#download_stable)

3.

You need to have package libusb installed using Homebrew (brew install libusb) or MacPorts (port install libusb) in order to run mks5lboot.

4.

Start mks5lboot from a terminal with the following command-line: mks5lboot –dfuscan -l It should scan for DFU devices every second.

5.

It is important to stop iTunes (dock icon -> Quit) and iTunesHelper (using Activity monitor, find the process and select Quit or Force quit if it keeps restarting) BEFORE continuing to the next step. Otherwise iTunes will put your iPod in wrong mode, and you will not be able to proceed with the installation.

6.

Put your iPod in DFU mode.

7.

When the device is detected, press CTRL+C to terminate the scan process, and proceed to the next step.

8.

Start mks5lboot from a terminal with the following command-line: mks5lboot –bl-inst path/to/bootloader-ipod6g.ipod, providing the correct path to bootloader-ipod6g.ipod that you downloaded earlier.

9.

When the installation is complete, you should have Rockbox up and running!

##### Bootloader installation from Linux

1.

Connect your iPod in normal mode (iTunes/file transfer).

2.

Download [RockboxUtility](https://www.rockbox.org/wiki/RockboxUtility) for your operating system.

3.

When Rockbox Utility opens, select the checkbox named Show disabled targets, and point the installer to your iPod’s mount point.

4.

On the installation screen make sure that Rockbox is selected and Bootloader is not selected. You can install themes or the game files if you want.

5.

Start the Rockbox installation.

6.

Download the [bootloader in .ipod format](https://files.freemyipod.org/~user890104/bootloader-ipodclassic-v1_0/bootloader-ipod6g.ipod).

7.

Download [mks5lboot](https://files.freemyipod.org/~user890104/bootloader-ipodclassic.html#download_stable) for your operating system. Alternatively, you can [build it](https://files.freemyipod.org/~user890104/bootloader-ipodclassic.html#build_mks5lboot) from the source code.

8.

You need to have package libusb-1.0.0 installed in order to run mks5lboot.

9.

To make sure the installer is marked as executable, start the following command in the terminal: chmod +x mks5lboot.

10.

Start mks5lboot from a terminal with the following command-line: ./mks5lboot –dfuscan -l. It should scan for DFU devices every second.

11.

Put your iPod in [DFU mode](https://files.freemyipod.org/~user890104/bootloader-ipodclassic.html#dfu).

12.

When the device is detected, press CTRL+C to terminate the scan process, and proceed to the next step.

13.

Start mks5lboot from a terminal with the following command-line: ./mks5lboot –bl-inst path/to/bootloader-ipod6g.ipod, providing the correct path to bootloader-ipod6g.ipod that you downloaded earlier.

14.

When the installation is complete, you should have Rockbox up and running!

#### 2.2.3  Finishing the install

Safely eject / unmount the USB drive, unplug the cable and restart.

#### 2.2.4  Enabling Speech Support (optional)

If you wish to use speech support you will also need a voice file. Voice files allow Rockbox to speak the user interface to you. Rockbox Utility can install an English voice file, or you can download it from [https://www.rockbox.org/daily.shtml](https://www.rockbox.org/daily.shtml) and unzip it to the root of your player. Rockbox Utility can also aid you in the creation of voice files with different voices or in other languages if you have a suitable speech engine installed on your computer. Voice menus are enabled by default and will come into effect after a reboot. See section [8.11](https://download.rockbox.org/daily/manual/rockbox-ipod6g/rockbox-buildch8.html#x15-1770008.11) for details on voice settings. Rockbox Utility can also aid in the production of talk files, which allow Rockbox to speak file and folder names.

### 2.3  Running Rockbox

Hard reset the Ipod by holding Menu and Select simultaneously for a couple of seconds until the player resets. Now Rockbox should load.

Note: If you have loaded music onto your player using Itunes, you will not be able to see your music properly in the File Browser. This is because Itunes changes your files’ names and hides them in directories in the Ipod\_Control directory. Files placed on your player using Itunes can be viewed by initialising and using Rockbox’s database. See section [4.2](https://download.rockbox.org/daily/manual/rockbox-ipod6g/rockbox-buildch4.html#x11-470004.2) for more information.

### 2.4  Updating Rockbox

Rockbox can be easily updated with Rockbox Utility. You can also update Rockbox manually – download a Rockbox build as detailed above, and unzip the build to the root directory of your player as in the manual installation stage. If your unzip program asks you whether to overwrite files, choose the “Yes to all” option. The new build will be installed over your current build.  

The bootloader only changes rarely, and should not normally need to be updated.  

Note: If you use Rockbox Utility be aware that it cannot detect manually installed components.

### 2.5  Uninstalling Rockbox

Note: The Rockbox bootloader allows you to choose between Rockbox and the original firmware. (See section [3.1.3](https://download.rockbox.org/daily/manual/rockbox-ipod6g/rockbox-buildch3.html#x9-310003.1.3) for more information.)

#### 2.5.1  Automatic Uninstallation

You can uninstall Rockbox automatically by using Rockbox Utility. If you installed Rockbox manually you can still use Rockbox Utility for uninstallation but will not be able to do this selectively.

#### 2.5.2  Manual Uninstallation

To uninstall Rockbox and go back to using just the original Ipod software, connect the player to your computer and follow the instructions to install the bootloader but, when prompted by ipodpatcher, enter u for uninstall instead of i for install.

If you wish to clean up your disk, you may also wish to delete the .rockbox directory and its contents. Turn the Ipod off. Turn the player back on and the original Ipod software will load.

### 2.6  Troubleshooting

Bootloader install problems

If you have trouble installing the bootloader, please ensure that you are either logged in as an administrator (Windows), or you have root rights (Linux)

“File Not Found”

If you receive a “File Not Found” from the bootloader, then the bootloader cannot find the Rockbox firmware. This is usually a result of not extracting the contents of the .zip file to the proper location, and should not happen when Rockbox has been installed with Rockbox Utility.

To fix this, either install Rockbox with the Rockbox Utility which will take care of this for you, or recheck the Manual Install section to see where the files need to be located.