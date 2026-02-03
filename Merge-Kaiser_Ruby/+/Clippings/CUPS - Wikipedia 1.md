---
source: "https://en.wikipedia.org/wiki/CUPS"
author:
published:
created: 2025-05-19
tags:
---
**CUPS** (formerly an [acronym](https://en.wikipedia.org/wiki/Acronym "Acronym") for **Common UNIX Printing System**) is a modular [printing](https://en.wikipedia.org/wiki/Computer_printer "Computer printer") system for [Unix-like](https://en.wikipedia.org/wiki/Unix-like "Unix-like") computer [operating systems](https://en.wikipedia.org/wiki/Operating_systems "Operating systems") which allows a computer to act as a [print server](https://en.wikipedia.org/wiki/Print_server "Print server"). A computer running CUPS is a [host](https://en.wikipedia.org/wiki/Server_\(computing\) "Server (computing)") that can accept print jobs from [client](https://en.wikipedia.org/wiki/Client_\(computing\) "Client (computing)") computers, process them, and send them to the appropriate printer.

CUPS consists of a [print spooler](https://en.wikipedia.org/wiki/Print_spooler "Print spooler") and scheduler, a filter system that converts the print data to a format that the printer will understand, and a backend system that sends this data to the print device. CUPS uses the [Internet Printing Protocol](https://en.wikipedia.org/wiki/Internet_Printing_Protocol "Internet Printing Protocol") (IPP) as the basis for managing [print jobs](https://en.wikipedia.org/wiki/Print_job "Print job") and [queues](https://en.wikipedia.org/wiki/Queue_\(printing\) "Queue (printing)"). It also provides the traditional [command line interfaces](https://en.wikipedia.org/wiki/Command_line_interface "Command line interface") for the [System V](https://en.wikipedia.org/wiki/System_V_printing_system "System V printing system") and [Berkeley](https://en.wikipedia.org/wiki/Berkeley_printing_system "Berkeley printing system") print systems, and provides support for the Berkeley print system's [Line Printer Daemon protocol](https://en.wikipedia.org/wiki/Line_Printer_Daemon_protocol "Line Printer Daemon protocol") and limited support for the [Server Message Block](https://en.wikipedia.org/wiki/Server_Message_Block "Server Message Block") (SMB) protocol. System administrators can configure the [device drivers](https://en.wikipedia.org/wiki/Device_driver "Device driver") which CUPS supplies by editing text files in Adobe's [PostScript Printer Description](https://en.wikipedia.org/wiki/PostScript_Printer_Description "PostScript Printer Description") (PPD) format. There are a number of user interfaces for different platforms that can configure CUPS, and it has a built-in web-based interface. CUPS is [free software](https://en.wikipedia.org/wiki/Free_software "Free software"), provided under the [Apache License](https://en.wikipedia.org/wiki/Apache_License "Apache License").

## History

[Michael Sweet](https://en.wikipedia.org/wiki/Michael_Sweet_\(programmer\) "Michael Sweet (programmer)"), who owned [Easy Software Products](https://en.wikipedia.org/wiki/Easy_Software_Products "Easy Software Products"), started developing CUPS in 1997 and the first public betas appeared in 1999.[^4] [^5] The original design of CUPS used the [Line Printer Daemon protocol](https://en.wikipedia.org/wiki/Line_Printer_Daemon_protocol "Line Printer Daemon protocol") (LPD), but due to limitations in LPD and vendor incompatibilities, the [Internet Printing Protocol](https://en.wikipedia.org/wiki/Internet_Printing_Protocol "Internet Printing Protocol") (IPP) was chosen instead. CUPS was initially called "The Common UNIX Printing System". This name was shortened to just "CUPS" beginning with CUPS 1.4 due to legal concerns with the UNIX trademark.[^6] CUPS was quickly adopted as the default printing system for most [Linux distributions](https://en.wikipedia.org/wiki/Linux_distribution "Linux distribution"). In March 2002, [Apple Inc.](https://en.wikipedia.org/wiki/Apple_Inc. "Apple Inc.") adopted CUPS as the printing system for [Mac OS X](https://en.wikipedia.org/wiki/Mac_OS_X "Mac OS X") 10.2. In February 2007, [Apple Inc.](https://en.wikipedia.org/wiki/Apple_Inc. "Apple Inc.") hired chief developer Michael Sweet and purchased the CUPS source code.[^7] On December 20, 2019, Michael Sweet announced on his blog that he had left Apple.[^8] [^9] In 2020, the [OpenPrinting](https://en.wikipedia.org/wiki/OpenPrinting "OpenPrinting") organization forked the project, with Michael Sweet continuing work on it. Apple retained the builds for macOS, [iOS](https://en.wikipedia.org/wiki/IOS "IOS"), and [iPadOS](https://en.wikipedia.org/wiki/IPadOS "IPadOS") with latest release of Apple CUPS being version 2.3.6 on May 25, 2022.[^10] [^11] [^12] In 2024, a critical vulnerability involving [remote code execution](https://en.wikipedia.org/wiki/Remote_code_execution "Remote code execution") in CUPS was found impacting all GNU/Linux systems.[^13]

## Overview

![[~/×/08d69b2e8b9c1fe3103abb67458b8a0c_MD5.png]]

CUPS provides a mechanism that allows print jobs to be sent to printers in a standard fashion. The print data goes to a *scheduler* [^14] which sends jobs to a *filter system* that converts the print job into a format the printer will understand.[^15] The filter system then passes the data on to a *backend* —a special filter that sends print data to a device or network connection.[^16] The system makes extensive use of [PostScript](https://en.wikipedia.org/wiki/PostScript "PostScript") and [rasterization](https://en.wikipedia.org/wiki/Raster_graphics "Raster graphics") of data to convert the data into a format suitable for the destination printer.

CUPS offers a standard and modularised printing system that can process numerous data formats on the print server. Before CUPS, it was difficult to find a standard printer management system that would accommodate the very wide variety of printers on the market using their own printer languages and formats. For instance, the System V and Berkeley printing systems were largely incompatible with each other, and they required complicated scripts and workarounds to convert the program's data format to a printable format. They often could not detect the file format that was being sent to the printer and thus could not automatically and correctly convert the data stream. Additionally, data conversion was performed on individual workstations rather than a central server.

CUPS allows printer manufacturers and printer-driver developers to create drivers more easily that work natively on the print server. Processing occurs on the server, allowing for easier network-based printing than with other Unix printing systems. With [Samba](https://en.wikipedia.org/wiki/Samba_software "Samba software") installed, users can address printers on remote Windows computers, and generic PostScript drivers can be used for printing across the network.

### Scheduler

The CUPS scheduler implements [Internet Printing Protocol](https://en.wikipedia.org/wiki/Internet_Printing_Protocol "Internet Printing Protocol") (IPP) over HTTP/1.1. A helper application (cups-lpd) converts [Line Printer Daemon protocol](https://en.wikipedia.org/wiki/Line_Printer_Daemon_protocol "Line Printer Daemon protocol") (LPD) requests to IPP. The scheduler also provides a web-based interface for managing print jobs, the configuration of the server, and for documentation about CUPS itself.[^14]

An *authorization* module controls which IPP and HTTP messages can pass through the system.[^17] Once the IPP/HTTP packets are authorized they are sent to the *client* module, which listens for and processes incoming connections. The client module is also responsible for executing external [CGI](https://en.wikipedia.org/wiki/Common_Gateway_Interface "Common Gateway Interface") programs as needed to support web-based printers, classes, and job status monitoring and administration.[^18] Once this module has processed its requests, it sends them to the *IPP* module which performs [Uniform Resource Identifier](https://en.wikipedia.org/wiki/Uniform_Resource_Identifier "Uniform Resource Identifier") (URI) validation to prevent a client from sidestepping any [access controls](https://en.wikipedia.org/wiki/Access_control "Access control") or [authentication](https://en.wikipedia.org/wiki/Authentication "Authentication") on the HTTP server.[^19] The URI is a text [string](https://en.wikipedia.org/wiki/String_\(computer_science\) "String (computer science)") that indicates a name or address that can be used to refer to an abstract or physical resource on a network.

The scheduler allows for classes of printers. Applications can send requests to groups of printers in a class, allowing the scheduler to direct the job to the first available printer in that class.[^20] A *jobs* module manages print jobs, sending them to the filter and backend processes for final conversion and printing, and monitoring the status messages from those processes.[^21]

The CUPS scheduler utilizes a *configuration* module, which parses configuration files, initializes CUPS [data structures](https://en.wikipedia.org/wiki/Data_structure "Data structure"), and starts and stops the CUPS program. The configuration module will stop CUPS services during configuration file processing and then restart the service when processing is complete.[^22]

A *logging* module handles the logging of scheduler events for access, error, and page [log files](https://en.wikipedia.org/wiki/Computer_data_logging "Computer data logging"). The *main* module handles timeouts and dispatch of I/O requests for client connections, watching for [signals](https://en.wikipedia.org/wiki/Signal_\(computing\) "Signal (computing)"), handling child process errors and exits, and reloading the server configuration files as needed.[^23]

Other modules used by the scheduler include:

- the *MIME* module, which handles a [Multipurpose Internet Mail Extensions](https://en.wikipedia.org/wiki/Multipurpose_Internet_Mail_Extensions "Multipurpose Internet Mail Extensions") (MIME) type and conversion database used in the filtering process that converts print data to a format suitable for a print device;[^24]
- a *PPD* module that handles a list of [Postscript Printer Description](https://en.wikipedia.org/wiki/Postscript_Printer_Description "Postscript Printer Description") (PPD) files;[^25]
- a *devices* module that manages a list of devices that are available in the system;[^26]
- a *printers* module that handles printers and PPDs within CUPS.[^27]

### Filter system

![[~/×/0c8fd7a38394aeda1f4acb501ee508c9_MD5.png]]

CUPS allows users to send different data to the CUPS server and have that data converted into a format the printer will understand and be able to print

CUPS can process a variety of data formats on the print server. It converts the print-job data into the final language/format of the printer via a series of *filters*.[^28] [^29] It uses [MIME types](https://en.wikipedia.org/wiki/Internet_media_type "Internet media type") for identifying file formats.

#### MIME databases

After the CUPS system has assigned the print job to the scheduler, it is passed to the CUPS filter system. This converts the data to a format suitable for the printer. During start-up, the CUPS daemon loads two MIME databases: `mime.types` that defines the known file types that CUPS can accept data for, and `mime.convs` that defines the programs that process each particular MIME type.[^30]

The `mime.types` file has the syntax:

`mimetype      { [file-extensions] | [pattern-match] }`

For example, to detect an [HTML](https://en.wikipedia.org/wiki/HTML "HTML") file, the following entry would be applicable:

`text/html       html htm \`  

`printable(0,1024) + (string(0,"<HTML>") string(0,"<!DOCTYPE"))`

The second line matches the file contents to the specified MIME type by determining that the first kilobyte of text in the file holds printable characters and that those characters include HTML markup. If the pattern above matches, then the filter system would mark the file as the MIME type text/html.[^31]

The `mime.convs` file has the syntax:

`source destination cost program`

The *source* field designates the MIME type that is determined by looking up the `mime.types` file, while the *destination* field lists the type of output requested and determines what program should be used. This is also retrieved from `mime.types`. The *cost* field assists in the selection of sets of filters when converting a file. The last field, *program*, determines which filter program to use to perform the data conversion.[^32]

Some examples:

```
text/plain application/postscript 50 texttops
application/vnd.cups-postscript application/vnd.cups-raster 50 pstoraster
image/* application/vnd.cups-postscript 50 imagetops
image/* application/vnd.cups-raster 50 imagetoraster
```

#### Filtering process

The filtering process works by taking input data pre-formatted with six arguments:

1. the job ID of the print job
2. the user name
3. the job name
4. the number of copies to print
5. any print options
6. the filename (though this is unnecessary if it has been redirected from [standard input](https://en.wikipedia.org/wiki/Standard_input "Standard input")).[^29]

It then determines the type of data that is being input and the filter to be used through the use of the MIME databases; for instance, image data will be detected and processed through a particular filter, and HTML data detected and processed through another filter.

CUPS can convert supplied data either into [PostScript](https://en.wikipedia.org/wiki/PostScript "PostScript") data or directly into raster data. If it is converted into PostScript data an additional filter is applied called a *prefilter*, which runs the PostScript data through another PostScript converter so that it can add printer-specific options like selecting page ranges to print, setting *n* -up mode and other device-specific things.[^33] After the pre-filtering is done, the data can either be sent directly to a CUPS [backend](https://en.wikipedia.org/wiki/#Backends) if using a PostScript printer, or it can be passed to another filter like [Foomatic](https://en.wikipedia.org/wiki/Foomatic "Foomatic") by [linuxprinting.org](https://en.wikipedia.org/wiki/Linuxprinting.org "Linuxprinting.org"). Alternatively, it can be passed to [Ghostscript](https://en.wikipedia.org/wiki/Ghostscript "Ghostscript"), which converts the PostScript into an intermediary *CUPS-raster* format.[^34] The intermediary raster format is then passed onto a final filter which converts the raster data to a printer-specific format. The default filters included with CUPS include:

- raster to [PCL](https://en.wikipedia.org/wiki/Printer_Command_Language "Printer Command Language")
- raster to [ESC/P](https://en.wikipedia.org/wiki/ESC/P "ESC/P") or [ESC/P2](https://en.wikipedia.org/wiki/ESC/P2 "ESC/P2") (an [Epson](https://en.wikipedia.org/wiki/Epson "Epson") printer language, now largely superseded by their new ESC/P-Raster format)
- raster to [Dymo](https://en.wikipedia.org/wiki/Dymo "Dymo") (another printer company).
- raster to Zebra Programming Language or ZPL (a [Zebra Technologies](https://en.wikipedia.org/wiki/Zebra_Technologies "Zebra Technologies") printer language)

As of 2009 other proprietary languages like GDI or SPL (Samsung Printer Language) are supported by Splix, a raster to SPL translator.[^35]

However, several other alternatives can integrate with CUPS. [HPLIP](https://en.wikipedia.org/wiki/HPLIP "HPLIP") (previously known as HP-IJS) provides Linux+CUPS drivers for HP printers, [Gutenprint](https://en.wikipedia.org/wiki/Gutenprint "Gutenprint") (previously known as Gimp-Print) is a range of high-quality printer drivers for (mostly) inkjet printers, and [TurboPrint](https://en.wikipedia.org/wiki/TurboPrint "TurboPrint") for Linux has another range of quality printer drivers for a wide range of printers.

### Backends

The backends are the ways in which CUPS sends data to printers. There are several backends available for CUPS: [parallel](https://en.wikipedia.org/wiki/Parallel_port "Parallel port"), [serial](https://en.wikipedia.org/wiki/Serial_port "Serial port"), and [USB](https://en.wikipedia.org/wiki/USB "USB") ports, cups-pdf [^36] PDF Virtual Printing, as well as network backends that operate via the [IPP](https://en.wikipedia.org/wiki/Internet_Printing_Protocol "Internet Printing Protocol"), [JetDirect](https://en.wikipedia.org/wiki/JetDirect "JetDirect") (AppSocket), [Line Printer Daemon](https://en.wikipedia.org/wiki/Line_Printer_Daemon "Line Printer Daemon") ("LPD"), and [SMB](https://en.wikipedia.org/wiki/Server_Message_Block "Server Message Block") [protocols](https://en.wikipedia.org/wiki/Protocol_\(computing\) "Protocol (computing)").

A new `mdns` backend in CUPS 1.4 provides [Bonjour](https://en.wikipedia.org/wiki/Bonjour_\(software\) "Bonjour (software)") ([DNS-SD](https://en.wikipedia.org/wiki/DNS-SD "DNS-SD")) based printer discovery.[^37] In CUPS 1.6, Bonjour printer discovery and sharing using [Avahi](https://en.wikipedia.org/wiki/Avahi_\(software\) "Avahi (software)") is also supported.[^38]

## Compatibility

CUPS provides both the System V and Berkeley printing commands, so users can continue with traditional commands for printing via CUPS. CUPS uses port 631 (TCP and UDP), which is the standard IPP port, and optionally on port 515 by [inetd](https://en.wikipedia.org/wiki/Inetd "Inetd"), [launchd](https://en.wikipedia.org/wiki/Launchd "Launchd"), the [Solaris](https://en.wikipedia.org/wiki/Solaris_\(operating_system\) "Solaris (operating system)") [Service Management Facility](https://en.wikipedia.org/wiki/Service_Management_Facility "Service Management Facility"), or [xinetd](https://en.wikipedia.org/wiki/Xinetd "Xinetd") which use the cups-lpd helper program to support LPD printing. When CUPS is installed the `[lp](https://en.wikipedia.org/wiki/Lp_\(Unix\) "Lp (Unix)")` [System V printing system](https://en.wikipedia.org/wiki/System_V_printing_system "System V printing system") command and the `lpr` [Berkeley printing system](https://en.wikipedia.org/wiki/Berkeley_printing_system "Berkeley printing system") commands are installed as compatible programs. This allows a standard interface to CUPS and allows maximum compatibility with existing applications that rely on these printing systems.

Several tools exist to help set up CUPS.

![[~/×/4cdd828263f4075e26c5b2b601de884b_MD5.png]]

CUPS web-based interface

![[~/×/65c8cb591af2029e07b8a61772d49803_MD5.png]]

Printers information in CUPS web-based interface

On all platforms, CUPS has a web-based administration interface that runs on [port](https://en.wikipedia.org/wiki/TCP_and_UDP_port "TCP and UDP port") [631](https://en.wikipedia.org/wiki/List_of_TCP_and_UDP_port_numbers "List of TCP and UDP port numbers").[^39] It particularly helps organisations that need to monitor print jobs and add print queues and printers remotely.

CUPS 1.0 provided a simple class, job, and printer-monitoring interface for web browsers.

CUPS 1.1 replaced this interface with an enhanced administration interface that allows users to add, modify, delete, configure, and control classes, jobs, and printers.

CUPS 1.2 and later provide a revamped web interface which features improved readability and design, support for automatically discovered printers, and better access to system logs and advanced settings.

### GNOME

![[~/×/6c72c5db9686b5f0cde9ad993364c978_MD5.png]]

GNOME Settings as of version 40

In [GNOME](https://en.wikipedia.org/wiki/GNOME "GNOME") starting from GNOME 3, CUPS printing has been handled in the Settings application, which is part of the [GNOME Core Applications](https://en.wikipedia.org/wiki/GNOME_Core_Applications#Configuration "GNOME Core Applications"). The GUI can add CUPS printers and manage CUPS printers and queues.[^40] Before GNOME 3, the [GNOME](https://en.wikipedia.org/wiki/GNOME "GNOME") Print Settings (formerly called CUPS Manager) were used to perform these tasks.[^41]

GNOME's [widget toolkit](https://en.wikipedia.org/wiki/Widget_toolkit "Widget toolkit") [GTK+](https://en.wikipedia.org/wiki/GTK%2B "GTK+") included integrated printing support based on CUPS in its version 2.10, released in 2006.

### KDE

![[~/×/519e91aed76bc73614affd1f09e170cb_MD5.png]]

Printers configuration on KDE Plasma 6

The KDEPrint framework for [KDE](https://en.wikipedia.org/wiki/KDE "KDE") contains various [GUI](https://en.wikipedia.org/wiki/Graphical_user_interface "Graphical user interface") tools that act as CUPS [front ends](https://en.wikipedia.org/wiki/Front_end_processor_\(program\) "Front end processor (program)") and allows the administration of classes, print queues and print jobs; it includes a printer wizard to assist with adding new printers amongst other features.[^42] KDEPrint first appeared in KDE 2.2.

KDEPrint supports several different printing platforms, with CUPS one of the best supported. It replaced a previous version of printing support in KDE, *qtcups* and is backwards compatible with this module of KDE. As of 2009 *kprinter*, a [dialogue-box](https://en.wikipedia.org/wiki/Dialogue_box "Dialogue box") program, serves as the main tool for sending jobs to the print device; it can also be started from the [command line](https://en.wikipedia.org/wiki/Command_line "Command line"). KDEPrint includes a system to pre-filter any jobs before they are handed over to CUPS, or to handle jobs all on its own, such as converting files to [PDF](https://en.wikipedia.org/wiki/Portable_Document_Format "Portable Document Format"). These filters are described by a pair of Desktop/ [XML](https://en.wikipedia.org/wiki/XML "XML") files.

KDEPrint's main components include:

- a Print Dialog box, which allows printer properties to be modified
- a Print Manager, which allows management of printers, such as adding and removing printers, through an Add Printer Wizard
- a Job Viewer/Manager, which manages printer jobs, such as hold/release, cancel and move to another printer
- a CUPS configuration module (integrated into KDE)

In Mac OS X 10.5, printers are configured in the Print & Fax panel in [System Preferences](https://en.wikipedia.org/wiki/System_Preferences "System Preferences"), and in printer proxy applications which display the print queues and allow additional configuration after printers are set up. Earlier versions of Mac OS X also included a [Printer Setup Utility](https://en.wikipedia.org/wiki/Printer_Setup_Utility "Printer Setup Utility"), which supplied configuration options missing from earlier versions of the Print & Fax preference pane.

### PrinterSetup

The PrinterSetup system can manage CUPS queues. It takes the approach of assigning a text file to describe each print queue. These 'PrinterSetupFiles' may then be added to other text files called 'PrinterSetupLists'. This allows logical grouping of printers. As of 2009 the PrinterSetup project remains in its infancy.[^43]

![[~/×/887a10e5acd9827ad3d76718f841fb20_MD5.png]]

Fedora provides a print manager that can modify CUPS-based printers

Starting with Red Hat Linux 9, Red Hat provided an integrated print manager based on CUPS and integrated into [GNOME](https://en.wikipedia.org/wiki/GNOME "GNOME"). This allowed adding printers via a user interface similar to the one [Microsoft Windows](https://en.wikipedia.org/wiki/Microsoft_Windows "Microsoft Windows") uses, where a new printer could be added using an *add new printer wizard*, along with changing default printer properties in a window containing a list of installed printers. Jobs could also be started and stopped using a print manager, and the printer could be paused using a [context menu](https://en.wikipedia.org/wiki/Context_menu "Context menu") that pops up when the printer icon is right-clicked.

[Eric Raymond](https://en.wikipedia.org/wiki/Eric_S._Raymond "Eric S. Raymond") criticised this system in his piece *The Luxury of Ignorance*. Raymond had attempted to install CUPS using the Fedora Core 1 print manager but found it non-intuitive; he criticised the interface designers for not designing with the user's point of view in mind. He found the idea of printer queues not obvious because users create queues on their local computer but these queues are actually created on the CUPS server.

He also found the plethora of queue-type options confusing as he could choose from between networked CUPS (IPP), networked Unix ([LPD](https://en.wikipedia.org/wiki/Line_Printer_Daemon_protocol "Line Printer Daemon protocol")), networked Windows ([SMB](https://en.wikipedia.org/wiki/Server_Message_Block "Server Message Block")), networked Novell ([NCP](https://en.wikipedia.org/wiki/NetWare_Core_Protocol "NetWare Core Protocol")) or networked [JetDirect](https://en.wikipedia.org/wiki/JetDirect "JetDirect"). He found the help file singularly unhelpful and largely irrelevant to a user's needs. Raymond used CUPS as a general topic to show that user-interface design on Linux desktops needs rethinking and more careful design. He stated:[^44]

> The meta-problem here is that the configuration wizard does all the approved rituals (GUI with standardized clicky buttons, help popping up in a browser, etc. etc.) but doesn't have the central attribute these are supposed to achieve: discoverability. That is, the quality that every point in the interface has prompts and actions attached to it from which you can learn what to do next. Does your project have this quality?

[Easy Software Products](https://en.wikipedia.org/wiki/Easy_Software_Products "Easy Software Products"), the original creators of CUPS, created a GUI, provided support for many printers and implemented a PostScript [RIP](https://en.wikipedia.org/wiki/Raster_image_processor "Raster image processor"). ESP Print Pro ran on Windows, UNIX and Linux, but is no longer available and support for this product ended on December 31, 2007.[^45]

## See also

- [Foomatic](https://en.wikipedia.org/wiki/Foomatic "Foomatic")
- [Gutenprint](https://en.wikipedia.org/wiki/Gutenprint "Gutenprint")
- [HP Linux Imaging and Printing](https://en.wikipedia.org/wiki/HP_Linux_Imaging_and_Printing "HP Linux Imaging and Printing")
- [Lp (Unix)](https://en.wikipedia.org/wiki/Lp_\(Unix\) "Lp (Unix)")
- [LPRng](https://en.wikipedia.org/wiki/LPRng "LPRng")
- [Scanner Access Now Easy](https://en.wikipedia.org/wiki/Scanner_Access_Now_Easy "Scanner Access Now Easy")
- [Spooling](https://en.wikipedia.org/wiki/Spooling "Spooling")
- [Xprint](https://en.wikipedia.org/wiki/Xprint "Xprint")

## References

## Further reading

- [Design of CUPS Filtering System — including the context for Mac OS X ("Jaguar")](http://www.linuxprinting.org/CUPS-Filter-Chart.html). *LinuxPrinting.org*. Retrieved January 5, 2005.
- [KDE](https://en.wikipedia.org/wiki/KDE "KDE"). *[KDEPrint information](https://web.archive.org/web/20050207054956/http://printing.kde.org/info/)*. KDE-printing website. Retrieved January 14, 2005.
- [How to Manage Printers in Linux](https://www.linux.com/learn/tutorials/774476-how-to-manage-printers-in-linux), Linux.com, 2015-04-27.

## External links

- ["CUPS"](http://freecode.com/projects/cups/). *[Freecode](https://en.wikipedia.org/wiki/Freecode "Freecode")*.
- [OpenPrinting](https://wiki.linuxfoundation.org/openprinting/start)
- [Universal Plug and Play – Printer Device V 1.0 and Printer Basic Service V 1.0](https://web.archive.org/web/20081017120654/http://upnp.org/standardizeddcps/printer.asp)

[^1]: ["CUPS 2"](https://www.arcanoae.com/arcaos/arcaos-screenshots/captured010/). Retrieved September 3, 2020.

[^2]: . Retrieved April 8, 2025.

[^3]: ["CUPS 2"](https://www.arcanoae.com/arcaos/arcaos-screenshots/captured010/). Retrieved September 3, 2020.

[^4]: Sweet, Michael (June 9, 1999). ["A Bright New Future for Printing on Linux"](http://linuxtoday.com/news_story.php3?ltsn=1999-06-09-014-10-NW-SM). *Linux Today*. [Archived](https://web.archive.org/web/20071005023152/http://www.linuxtoday.com/news_story.php3?ltsn=1999-06-09-014-10-NW-SM) from the original on October 5, 2007.

[^5]: Sweet, Michael (June 11, 1999). ["The Future Brightens for Linux Printing"](http://linuxtoday.com/news_story.php3?ltsn=1999-06-11-018-10-NW-SM). *Linux Today*. [Archived](https://web.archive.org/web/20050108235355/http://linuxtoday.com/news_story.php3?ltsn=1999-06-11-018-10-NW-SM) from the original on January 8, 2005.

[^6]: ["CUPS Presentation at 2012 Open Printing Summit"](http://ftp.pwg.org/pub/pwg/liaison/openprinting/presentations/cups-plenary-april-12.pdf) (PDF). April 24, 2012. [Archived](https://web.archive.org/web/20170214175407/http://ftp.pwg.org/pub/pwg/liaison/openprinting/presentations/cups-plenary-april-12.pdf) (PDF) from the original on February 14, 2017.

[^7]: ["CUPS Purchased by Apple Inc"](https://web.archive.org/web/20140331093622/http://cups.org/blog.php?L475) (Press release). CUPS. July 11, 2007. Archived from [the original](https://www.cups.org/blog.php?L475) on March 31, 2014. Retrieved June 5, 2014.

[^8]: Anderson, Tim (October 15, 2020). ["Has Apple abandoned CUPS, the Linux's world's widely used open-source printing system? Seems so"](https://www.theregister.com/2020/10/15/apple_cups_develoment/). *[The Register](https://en.wikipedia.org/wiki/The_Register "The Register")*. Retrieved January 7, 2023.

[^9]: ["Thoughts on Leaving Apple..."](https://www.msweet.org/blog/2019-12-20-left-apple.html) *www.msweet.org*.

[^10]: Proven, Liam (November 10, 2022). ["OpenPrinting keeps old printers working, even on Windows"](https://www.theregister.com/2022/11/10/openprinting_keeps_old_printers_working/). *[The Register](https://en.wikipedia.org/wiki/The_Register "The Register")*. Retrieved January 7, 2023.

[^11]: Michael Sweet (October 17, 2020). ["Add an OpenPrinting changes file"](https://github.com/OpenPrinting/cups/commit/0fa2987637adc27ecab69ee29acc4cde19daff7d#diff-b335630551682c19a781afebcf4d07bf978fb1f8ac04c6bf87428ed5106870f5). *CUPS (OpenPrinting fork) repository*. GitHub.

[^12]: ["CUPS.org"](https://www.cups.org/). *CUPS.org*. Apple Inc. Retrieved February 23, 2025.

[^13]: Lyons, Jessica (September 26, 2024). ["Critical doomsday Linux bug is CUPS-based vulnerability"](https://www.theregister.com/2024/09/26/cups_linux_rce_disclosed/). *The Register*. Retrieved September 27, 2024.

[^14]: ["CUPS Design Description"](https://www.cups.org/doc/spec-design.html). *CUPS documentation*. [Apple Inc.](https://en.wikipedia.org/wiki/Apple_Inc. "Apple Inc.") Scheduler. Retrieved December 31, 2020.

[^15]: ["CUPS Design Description"](https://www.cups.org/doc/spec-design.html). *CUPS documentation*. [Apple Inc.](https://en.wikipedia.org/wiki/Apple_Inc. "Apple Inc.") Filters. Retrieved December 31, 2020.

[^16]: ["CUPS Design Description"](https://www.cups.org/doc/spec-design.html). *CUPS documentation*. [Apple Inc.](https://en.wikipedia.org/wiki/Apple_Inc. "Apple Inc.") Backend. Retrieved December 31, 2020.

[^17]: ["Authorization"](https://web.archive.org/web/20070110180805/http://www.cups.org/doc-1.1/sdd.html#3_8_1). *[Easy Software Products](https://en.wikipedia.org/wiki/Easy_Software_Products "Easy Software Products")*. CUPS Software Design. Archived from [the original](http://www.cups.org/doc-1.1/sdd.html#3_8_1) on January 10, 2007. Retrieved January 9, 2007.

[^18]: ["Authorisation"](https://web.archive.org/web/20070110180805/http://www.cups.org/doc-1.1/sdd.html#3_8_3). *[Easy Software Products](https://en.wikipedia.org/wiki/Easy_Software_Products "Easy Software Products")*. CUPS Software Administrators Manual. Archived from [the original](http://www.cups.org/doc-1.1/sdd.html#3_8_3) on January 10, 2007. Retrieved January 9, 2007.

[^19]: ["IPP"](https://web.archive.org/web/20070110180805/http://www.cups.org/doc-1.1/sdd.html#3_8_7). *[Easy Software Products](https://en.wikipedia.org/wiki/Easy_Software_Products "Easy Software Products")*. CUPS Software Design. Archived from [the original](http://www.cups.org/doc-1.1/sdd.html#3_8_7) on January 10, 2007. Retrieved January 9, 2007.

[^20]: ["Classes"](https://web.archive.org/web/20070106145359/http://www.cups.org/doc-1.1/sam.html#2_4). *[Easy Software Products](https://en.wikipedia.org/wiki/Easy_Software_Products "Easy Software Products")*. CUPS Software Administrators Manual. Archived from [the original](http://www.cups.org/doc-1.1/sam.html#2_4) on January 6, 2007. Retrieved January 9, 2007.

[^21]: ["Jobs"](https://web.archive.org/web/20070106145359/http://www.cups.org/doc-1.1/sam.html#2_3). *[Easy Software Products](https://en.wikipedia.org/wiki/Easy_Software_Products "Easy Software Products")*. CUPS Software Administrators Manual. Archived from [the original](http://www.cups.org/doc-1.1/sam.html#2_3) on January 6, 2007. Retrieved January 9, 2007.

[^22]: ["Configuration"](https://web.archive.org/web/20070110180805/http://www.cups.org/doc-1.1/sdd.html#3_8_4). *[Easy Software Products](https://en.wikipedia.org/wiki/Easy_Software_Products "Easy Software Products")*. CUPS Software Design. Archived from [the original](http://www.cups.org/doc-1.1/sdd.html#3_8_4) on January 10, 2007. Retrieved January 9, 2007.

[^23]: ["Logging"](https://web.archive.org/web/20070110180805/http://www.cups.org/doc-1.1/sdd.html#3_8_9). *[Easy Software Products](https://en.wikipedia.org/wiki/Easy_Software_Products "Easy Software Products")*. CUPS Software Design. Archived from [the original](http://www.cups.org/doc-1.1/sdd.html#3_8_9) on January 10, 2007. Retrieved January 9, 2007.

[^24]: ["MIME"](https://web.archive.org/web/20070110180805/http://www.cups.org/doc-1.1/sdd.html#3_8_11). *[Easy Software Products](https://en.wikipedia.org/wiki/Easy_Software_Products "Easy Software Products")*. CUPS Software Design. Archived from [the original](http://www.cups.org/doc-1.1/sdd.html#3_8_11) on January 10, 2007. Retrieved January 9, 2007.

[^25]: ["PPD"](https://web.archive.org/web/20070110180805/http://www.cups.org/doc-1.1/sdd.html#3_8_12). *[Easy Software Products](https://en.wikipedia.org/wiki/Easy_Software_Products "Easy Software Products")*. CUPS Software Design. Archived from [the original](http://www.cups.org/doc-1.1/sdd.html#3_8_12) on January 10, 2007. Retrieved January 9, 2007.

[^26]: ["Devices"](https://web.archive.org/web/20070110180805/http://www.cups.org/doc-1.1/sdd.html#3_8_5). *[Easy Software Products](https://en.wikipedia.org/wiki/Easy_Software_Products "Easy Software Products")*. CUPS Software Design. Archived from [the original](http://www.cups.org/doc-1.1/sdd.html#3_8_5) on January 10, 2007. Retrieved January 9, 2007.

[^27]: ["Printers"](https://web.archive.org/web/20070110180805/http://www.cups.org/doc-1.1/sdd.html#3_8_13). *[Easy Software Products](https://en.wikipedia.org/wiki/Easy_Software_Products "Easy Software Products")*. CUPS Software Design. Archived from [the original](http://www.cups.org/doc-1.1/sdd.html#3_8_13) on January 10, 2007. Retrieved January 9, 2007.

[^28]: ["Filters"](https://web.archive.org/web/20070106145359/http://www.cups.org/doc-1.1/sam.html#2_5). *[Easy Software Products](https://en.wikipedia.org/wiki/Easy_Software_Products "Easy Software Products")*. CUPS Software Administrators Manual. Archived from [the original](http://www.cups.org/doc-1.1/sam.html#2_5) on January 6, 2007. Retrieved January 9, 2007.

[^29]: ["Filters"](https://web.archive.org/web/20070110180805/http://www.cups.org/doc-1.1/sdd.html#3_7). *[Easy Software Products](https://en.wikipedia.org/wiki/Easy_Software_Products "Easy Software Products")*. CUPS Software Design. Archived from [the original](http://www.cups.org/doc-1.1/sdd.html#3_7) on January 10, 2007. Retrieved January 9, 2007.

[^30]: ["File Typing and Filtering"](https://web.archive.org/web/20070106145359/http://www.cups.org/doc-1.1/sam.html#FILE_TYPING_FILTERING). *[Easy Software Products](https://en.wikipedia.org/wiki/Easy_Software_Products "Easy Software Products")*. CUPS Software Administrators Manual. Archived from [the original](http://www.cups.org/doc-1.1/sam.html#FILE_TYPING_FILTERING) on January 6, 2007. Retrieved January 9, 2007.

[^31]: ["mime.types"](https://web.archive.org/web/20070106145359/http://www.cups.org/doc-1.1/sam.html#7_13_1). *[Easy Software Products](https://en.wikipedia.org/wiki/Easy_Software_Products "Easy Software Products")*. CUPS Software Administrators Manual. Archived from [the original](http://www.cups.org/doc-1.1/sam.html#7_13_1) on January 6, 2007. Retrieved January 9, 2007.

[^32]: ["mime.convs"](https://web.archive.org/web/20070106145359/http://www.cups.org/doc-1.1/sam.html#7_13_%C3%A9). *[Easy Software Products](https://en.wikipedia.org/wiki/Easy_Software_Products "Easy Software Products")*. CUPS Software Administrators Manual. Archived from [the original](http://www.cups.org/doc-1.1/sam.html#7_13_%C3%A9) on January 6, 2007. Retrieved January 9, 2007.

[^33]: ["pstops"](https://web.archive.org/web/20070110180805/http://www.cups.org/doc-1.1/sdd.html#3_7_5). *[Easy Software Products](https://en.wikipedia.org/wiki/Easy_Software_Products "Easy Software Products")*. CUPS Software Administrators Manual. Archived from [the original](http://www.cups.org/doc-1.1/sdd.html#3_7_5) on January 10, 2007. Retrieved January 9, 2007.

[^34]: The MIME type for the CUPS raster format is application/vnd.cups-raster.

[^35]: ["SPL driver for UNIX"](http://splix.sourceforge.net/). *splix.sourceforge.net*.

[^36]: ["Debian - Details of package cups-pdf in wheezy"](https://packages.debian.org/wheezy/cups-pdf). [Archived](https://web.archive.org/web/20150501081102/https://packages.debian.org/wheezy/cups-pdf) from the original on May 1, 2015.

[^37]: ["What's New in CUPS 1.4"](https://web.archive.org/web/20121102142550/http://cups.org/documentation.php/doc-1.4/whatsnew.html). Archived from [the original](http://www.cups.org/documentation.php/doc-1.4/whatsnew.html) on November 2, 2012.

[^38]: ["What's New in CUPS 1.6"](https://web.archive.org/web/20121004041235/http://cups.org/documentation.php/doc-1.6/whatsnew.html). Archived from [the original](http://www.cups.org/documentation.php/doc-1.6/whatsnew.html) on October 4, 2012.

[^39]: ["Managing Printers from the Web"](https://web.archive.org/web/20041225043927/http://www.cups.org/sam.html#4_4). CUPS Software Administrators Manual. Archived from [the original](http://www.cups.org/sam.html#4_4) on December 25, 2004.

[^40]: ["Handling printing in GNOME Red Hat Enterprise Linux 8"](https://access.redhat.com/documentation/en-us/red_hat_enterprise_linux/8/html/using_the_desktop_environment_in_rhel_8/getting-started-with-gnome_using-the-desktop-environment-in-rhel-8#handling-printing_getting-started-with-gnome). *Red Hat Customer Portal*. Red Hat. Retrieved May 12, 2021.

[^41]: ["gnome-cups-manager"](https://web.archive.org/web/20140915052227/http://manpages.ubuntu.com/manpages/hardy/man1/gnome-cups-manager.1.html). Archived from [the original](http://manpages.ubuntu.com/manpages/hardy/man1/gnome-cups-manager.1.html) on September 15, 2014.

[^42]: printing.kde.org Webmaster. ["KDEPrint Homepage"](https://web.archive.org/web/20080509132047/http://printing.kde.org/). Archived from [the original](http://printing.kde.org/) on May 9, 2008. Retrieved April 2, 2008.

[^43]: ["Printer Setup is in a prototyping phase"](https://web.archive.org/web/20080828092855/http://www.lucidsystems.org/printersetup/moreinformation.php). *Lucid Information Systems*. Archived from [the original](http://www.lucidsystems.org/printersetup/moreinformation.php) on August 28, 2008.

[^44]: ["The Luxury of Ignorance: An Open-Source Horror Story"](http://www.catb.org/~esr/writings/cups-horror.html). [Archived](https://web.archive.org/web/20100528112951/http://www.catb.org/~esr/writings/cups-horror.html) from the original on May 28, 2010.

[^45]: ["Easy Software Products' ESP Print Pro"](https://web.archive.org/web/20090619184222/http://www.easysw.com/discontinued.php). Archived from [the original](http://www.easysw.com/discontinued.php) on June 19, 2009.