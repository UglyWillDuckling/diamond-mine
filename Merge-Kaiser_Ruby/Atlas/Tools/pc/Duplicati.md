---
source: https://en.wikipedia.org/wiki/Duplicati
author:
  - 
published: 2011-08-02
created: 2025-03-03
tags:
  - software/backup
found_in: "[[Bug 388]]"
worked_on_in:
  - "[[instalacija sofwarea iz Bug 388]]"
official_link: https://duplicati.com
---
From Wikipedia, the free encyclopedia

Backup software

<table><caption>Duplicati</caption><tbody><tr><td colspan="2"><span><a href="https://en.wikipedia.org/wiki/File:Duplicati_1.3.4.png"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Duplicati_1.3.4.png/220px-Duplicati_1.3.4.png" width="220" height="244"></a></span><p>Screenshot of Duplicati 1.3.4</p></td></tr><tr><th scope="row"><a href="https://en.wikipedia.org/wiki/Programmer">Original author(s)</a></th><td>Kenneth Skovhede</td></tr><tr><th scope="row"><a href="https://en.wikipedia.org/wiki/Programmer">Developer(s)</a></th><td>Kenneth Skovhede</td></tr><tr><th scope="row">Initial release</th><td>June&nbsp;1, 2008<span>; 16 years ago</span><span>&nbsp;(<span>2008-06-01</span>)</span></td></tr><tr><td colspan="2"></td></tr><tr><th scope="row"><a href="https://en.wikipedia.org/wiki/Software_release_life_cycle#Beta">Preview release</a></th><td><p>2.1.0.2<sup><a href="https://en.wikipedia.org/wiki/#cite_note-wikidata-0d30ab04e540f539a26a9408e7ecbe7521675591-v18-1"><span>[</span>1<span>]</span></a></sup>&nbsp;<span><a href="https://www.wikidata.org/wiki/Q1266534?uselang=en#P348"><img src="https://upload.wikimedia.org/wikipedia/en/thumb/8/8a/OOjs_UI_icon_edit-ltr-progressive.svg/10px-OOjs_UI_icon_edit-ltr-progressive.svg.png" width="10" height="10"></a></span> / 29 November 2024<span>; 2 months ago</span><span>&nbsp;(<span>29 November 2024</span>)</span></p></td></tr><tr><td colspan="2"></td></tr><tr><th scope="row"><a href="https://en.wikipedia.org/wiki/Repository_(version_control)">Repository</a></th><td><span><a href="https://github.com/duplicati/duplicati">github<wbr>.com<wbr>/duplicati<wbr>/duplicati</a></span></td></tr><tr><th scope="row"><a href="https://en.wikipedia.org/wiki/Operating_system">Operating system</a></th><td><a href="https://en.wikipedia.org/wiki/Windows">Windows</a>, <a href="https://en.wikipedia.org/wiki/MacOS">macOS</a>, <a href="https://en.wikipedia.org/wiki/Linux">Linux</a></td></tr><tr><th scope="row"><a href="https://en.wikipedia.org/wiki/Computing_platform">Platform</a></th><td><a href="https://en.wikipedia.org/wiki/C_Sharp_(programming_language)">C#</a></td></tr><tr><th scope="row">Available in</th><td>English, Danish, Portuguese, French, German, Spanish, Italian, Chinese, Russian</td></tr><tr><th scope="row"><a href="https://en.wikipedia.org/wiki/Software_categories#Categorization_approaches">Type</a></th><td><a href="https://en.wikipedia.org/wiki/Backup_software">Backup software</a></td></tr><tr><th scope="row"><a href="https://en.wikipedia.org/wiki/Software_license">License</a></th><td><a href="https://en.wikipedia.org/wiki/MIT_License">MIT License</a></td></tr><tr><th scope="row">Website</th><td><span><a href="https://www.duplicati.com/">www<wbr>.duplicati<wbr>.com</a></span></td></tr></tbody></table>

**Duplicati** is a [backup](https://en.wikipedia.org/wiki/Backup "Backup") client that securely stores [encrypted](https://en.wikipedia.org/wiki/Encryption "Encryption"), incremental, compressed [remote backups](https://en.wikipedia.org/wiki/Remote_backup "Remote backup") of local files on cloud storage services and remote file servers. Duplicati supports not only various [online backup services](https://en.wikipedia.org/wiki/Comparison_of_online_backup_services "Comparison of online backup services") like [OneDrive](https://en.wikipedia.org/wiki/OneDrive "OneDrive"),[^skydrive_support-2] [Amazon S3](https://en.wikipedia.org/wiki/Amazon_S3 "Amazon S3"), [Backblaze](https://en.wikipedia.org/wiki/Backblaze "Backblaze"), [Rackspace](https://en.wikipedia.org/wiki/Rackspace "Rackspace") Cloud Files, [Tahoe LAFS](https://en.wikipedia.org/wiki/Tahoe_Least-Authority_Filesystem "Tahoe Least-Authority Filesystem"), and [Google Drive](https://en.wikipedia.org/wiki/Google_Drive "Google Drive"), but also any servers that support [SSH/SFTP](https://en.wikipedia.org/wiki/SSH_File_Transfer_Protocol "SSH File Transfer Protocol"), [WebDAV](https://en.wikipedia.org/wiki/WebDAV "WebDAV"), or [FTP](https://en.wikipedia.org/wiki/File_Transfer_Protocol "File Transfer Protocol").

Duplicati uses standard components such as [rdiff](https://en.wikipedia.org/wiki/Rdiff "Rdiff"), [zip](https://en.wikipedia.org/wiki/Zip_\(file_format\) "Zip (file format)"), [AESCrypt](https://en.wikipedia.org/w/index.php?title=AESCrypt&action=edit&redlink=1 "AESCrypt (page does not exist)"), and [GnuPG](https://en.wikipedia.org/wiki/GnuPG "GnuPG"). This allows users to recover backup files even if Duplicati is not available. Duplicati is [free software](https://en.wikipedia.org/wiki/Free_software "Free software"), originally released under the terms of the [GNU Lesser General Public License](https://en.wikipedia.org/wiki/GNU_Lesser_General_Public_License "GNU Lesser General Public License") (LGPL), it has been under the [MIT License](https://en.wikipedia.org/wiki/MIT_License "MIT License") since March 2024.[^3] This changeover took place as part of the launch of Duplicati, Inc. and the commercial use of the Duplicati base.[^4]

Duplicati is written mostly in [C#](https://en.wikipedia.org/wiki/C_Sharp_\(programming_language\) "C Sharp (programming language)") and implemented completely within the [CLR](https://en.wikipedia.org/wiki/Common_Language_Runtime "Common Language Runtime"), which enables it to be cross-platform. It runs well on 32-bit and 64-bit versions on [Windows](https://en.wikipedia.org/wiki/Windows "Windows"), [macOS](https://en.wikipedia.org/wiki/MacOS "MacOS") and [Linux](https://en.wikipedia.org/wiki/Linux "Linux") using either [.NET Framework](https://en.wikipedia.org/wiki/.NET_Framework ".NET Framework") or [Mono](https://en.wikipedia.org/wiki/Mono_\(software\) "Mono (software)").

Duplicati has both a [graphical user interface](https://en.wikipedia.org/wiki/Graphical_user_interfaces "Graphical user interfaces") with a [wizard](https://en.wikipedia.org/wiki/Wizard_\(software\) "Wizard (software)")\-style interface and a [command-line](https://en.wikipedia.org/wiki/Command-line "Command-line") version for use in [headless](https://en.wikipedia.org/wiki/Headless_system "Headless system") environments. Both interfaces use the same core and thus have the same set of features and capabilities. The command-line version is similar to the [Duplicity](https://en.wikipedia.org/wiki/Duplicity_\(software\) "Duplicity (software)") interface.

Duplicati has some unique features that are usually only found in commercial systems, such as remote verification of backup files, disk snapshots, and backup of open files. The disk snapshots are performed with [VSS](https://en.wikipedia.org/wiki/Shadow_Copy "Shadow Copy") on [Windows](https://en.wikipedia.org/wiki/Windows "Windows") and [LVM](https://en.wikipedia.org/wiki/Logical_volume_management "Logical volume management") on [Linux](https://en.wikipedia.org/wiki/Linux "Linux").

The original Duplicati project was started in June 2008 and intended to produce a [graphical user interface](https://en.wikipedia.org/wiki/Graphical_user_interfaces "Graphical user interfaces") for the [Duplicity](https://en.wikipedia.org/wiki/Duplicity_\(software\) "Duplicity (software)") program. This included a port of the Duplicity code for use on Windows, but was dropped in September 2008,[^duplicati_background-5] where work on a clean re-implementation began. This re-implementation includes all the sub-programs found in Duplicity, such as [rdiff](https://en.wikipedia.org/wiki/Rdiff "Rdiff"), ftp, etc. This initial version of Duplicati saw an initial release in June 2009.

In 2012, work on Duplicati 2 started, which is a complete rewrite. It includes a new storage engine that allows efficient, incremental, continuous backups. The new user interface is web-based, which makes it possible to install Duplicati 2 on headless systems like servers or a [NAS](https://en.wikipedia.org/wiki/Network-attached_storage "Network-attached storage"). As it is also [responsive](https://en.wikipedia.org/wiki/Responsive_web_design "Responsive web design"), it can be easily used on mobile devices.

In 2024, Duplicati, Inc. was founded with the aim of commercialising Duplicati.[^6] The previous developer Kenneth Skovhede takes on the role of CTO as a full-time position. Open Core Ventures provides Duplicati, Inc. with $2M in funding for the expansion of the open source base and the development of enterprise-grade features.[^7] In May 2024, the first commercial product ‘Duplicati Portal’ was introduced, which is a centralised, cloud-based solution designed to monitor and manage backups across multiple devices and environments.[^8]

The Duplicati [GUI](https://en.wikipedia.org/wiki/Graphical_user_interfaces "Graphical user interfaces") and [command-line](https://en.wikipedia.org/wiki/Command-line "Command-line") interface both call a common component called *Main*, which serves as a binding point for all the operations supported. Currently the encryption, compression, and storage component are considered subcomponent and are loaded at runtime, making it possible for a third-party developer to inject a subcomponent into Duplicati without access to the source or any need to modify Duplicati itself. The license type is also flexible enough to allow redistribution of Duplicati with a [closed-source](https://en.wikipedia.org/wiki/Proprietary_software "Proprietary software") storage provider. Duplicati is designed to be as independent of the provider as possible, which means that any storage medium that supports the common commands (`GET`, `PUT`, `LIST`, `DELETE`) can work with Duplicati.

The Duplicity model, on which Duplicati is based, relies heavily on components in the system, such as [librdiff](https://en.wikipedia.org/wiki/Rdiff "Rdiff"), TcFTP, and others. Since Duplicati is intended to be cross-platform, and it is unlikely that all those components are available on all platforms, Duplicati re-implements the components instead. Most notably, Duplicati features an rdiff and AESCrypt implementation that work on any system that supports a [Common Language Runtime](https://en.wikipedia.org/wiki/Common_Language_Runtime "Common Language Runtime").

## Limitations of Duplicati 1

The [GUI](https://en.wikipedia.org/wiki/Graphical_user_interfaces "Graphical user interfaces") frontend in Duplicati 1.x is intended to be used on a single machine with a display attached. However, it is also possible to install Duplicati as a [Windows service](https://en.wikipedia.org/wiki/Windows_service "Windows service") or Linux [daemon](https://en.wikipedia.org/wiki/Daemon_\(computing\) "Daemon (computing)"), and set the Duplicati system tray from starting the Duplicati service.[^9][^10] This limitation has been addressed in Duplicati 2, which has a web interface and can be used on headless systems.

Duplicati 1.x has extremely slow file listings, so browsing a file tree to do restores can take a long time.

Since Duplicati produces [incremental](https://en.wikipedia.org/wiki/Incremental_backup "Incremental backup") backups, a [corrupt](https://en.wikipedia.org/wiki/Data_corruption "Data corruption") or missing incremental volume can render all following incremental backups (up to the next full backup) useless. Duplicati 2 regularly tests the backup to detect corrupted files early.

Duplicati 1.x only stores the file modification date, not metadata like permissions and attributes. This has been addressed in Duplicati 2.

- [List of backup software](https://en.wikipedia.org/wiki/List_of_backup_software "List of backup software")

[^wikidata-0d30ab04e540f539a26a9408e7ecbe7521675591-v18-1]: ["v2.1.0.2\_beta\_2024-11-29"](https://github.com/duplicati/duplicati/releases/tag/v2.1.0.2_beta_2024-11-29). Retrieved 25 December 2024.

[^skydrive_support-2]: Stach, Rene (2 November 2011). ["Duplicati 1.3 beta (r969) available"](https://web.archive.org/web/20111106154924/http://www.duplicati.com/news/duplicati13betar969available). *Duplicati.com*. Archived from [the original](http://www.duplicati.com/news/duplicati13betar969available) on 6 November 2011.

[^3]: ["duplicati/LICENSE.txt at master · duplicati/duplicati"](https://github.com/duplicati/duplicati/blob/master/LICENSE.txt). *GitHub*. Retrieved 2024-07-20.

[^4]: ["Introducing "Duplicati, Inc.""](https://forum.duplicati.com/t/introducing-duplicati-inc/17491). *Duplicati*. 2024-03-01. Retrieved 2024-07-20.

[^duplicati_background-5]: [Duplicati Background](https://code.google.com/p/duplicati/wiki/DuplicatiBackground).

[^6]: ["Introducing "Duplicati, Inc.""](https://forum.duplicati.com/t/introducing-duplicati-inc/17491). *Duplicati*. 2024-03-01. Retrieved 2024-07-20.

[^7]: ["Duplicati: Zero trust, fully encrypted backup"](https://opencoreventures.com/blog/2024-05-duplicati-zero-trust-encrypted-backup/). *opencoreventures.com*. 2024-05-13. Retrieved 2024-07-20.

[^8]: ["Introducing the Duplicati Portal: Your New Hub for Cloud-Based Backup Monitoring and Management"](https://forum.duplicati.com/t/introducing-the-duplicati-portal-your-new-hub-for-cloud-based-backup-monitoring-and-management/17855). *Duplicati*. 2024-05-02. Retrieved 2024-07-20.

[^9]: *[Migrating from User to Service install on Windows](https://forum.duplicati.com/t/migrating-from-user-to-service-install-on-windows/660/3)* on the Duplicati forum

[^10]: *[How do I install on CentOS 7?](https://forum.duplicati.com/t/how-do-i-install-on-centos-7/1024/12?u=kenkendk)* on the Duplicati forum

- [Official website](https://www.duplicati.com/)