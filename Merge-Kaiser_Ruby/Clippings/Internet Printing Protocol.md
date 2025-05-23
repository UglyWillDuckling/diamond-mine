---
source: https://en.wikipedia.org/wiki/Internet_Printing_Protocol
author: 
published: 
created: 2025-05-19
tags: 
aliases:
  - IPP
---
The **Internet Printing Protocol** (**IPP**) is a specialized [communication protocol](https://en.wikipedia.org/wiki/Communication_protocol "Communication protocol") used between client devices (computers, mobile phones, tablets, etc.) and printers (or [print servers](https://en.wikipedia.org/wiki/Print_server "Print server")). The protocol allows clients to submit one or more [print jobs](https://en.wikipedia.org/wiki/Print_job "Print job") to the network-attached printer or print server, and perform tasks such as querying the status of a [printer](https://en.wikipedia.org/wiki/Printer_\(computing\) "Printer (computing)"), obtaining the status of print jobs, or cancelling individual print jobs.

Like all [IP](https://en.wikipedia.org/wiki/Internet_Protocol "Internet Protocol") -based protocols, IPP can run locally or over the [Internet](https://en.wikipedia.org/wiki/Internet "Internet"). Unlike other printing protocols, IPP also supports [access control](https://en.wikipedia.org/wiki/Access_control "Access control"), [authentication](https://en.wikipedia.org/wiki/Authentication "Authentication"), and [encryption](https://en.wikipedia.org/wiki/Encryption "Encryption"), making it a much more capable and secure printing mechanism than older ones.

IPP is the basis of several printer logo certification programs including [AirPrint](https://en.wikipedia.org/wiki/AirPrint "AirPrint"), IPP Everywhere,[^1] and [Mopria Alliance](https://en.wikipedia.org/wiki/Mopria_Alliance "Mopria Alliance"), and is supported by over 98% of printers sold today.[^2]

## History

IPP began as a proposal by [Novell](https://en.wikipedia.org/wiki/Novell "Novell") for the creation of an Internet printing [protocol](https://en.wikipedia.org/wiki/Communications_protocol "Communications protocol") project in 1996. The result was a draft written by Novell and [Xerox](https://en.wikipedia.org/wiki/Xerox "Xerox") called the Lightweight Document Printing Application (LDPA), derived from ECMA-140: [Document Printing Application](https://en.wikipedia.org/w/index.php?title=Document_Printing_Application&action=edit&redlink=1 "Document Printing Application (page does not exist)") (DPA). At about the same time, [IBM](https://en.wikipedia.org/wiki/IBM "IBM") publicly proposed something called the [HyperText](https://en.wikipedia.org/wiki/HyperText "HyperText") Printing Protocol (HTPP), and both [HP](https://en.wikipedia.org/wiki/Hewlett-Packard "Hewlett-Packard") and [Microsoft](https://en.wikipedia.org/wiki/Microsoft "Microsoft") had started work on new print services for what became [Windows 2000](https://en.wikipedia.org/wiki/Windows_2000 "Windows 2000"). Each of the companies chose to start a common Internet Printing Protocol project in the [Printer Working Group](https://en.wikipedia.org/wiki/Printer_Working_Group "Printer Working Group") (PWG) and negotiated an IPP [birds-of-a-feather (or BOF)](https://en.wikipedia.org/wiki/Birds_of_a_feather_\(computing\) "Birds of a feather (computing)") session with the Application Area Directors in the [Internet Engineering Task Force](https://en.wikipedia.org/wiki/Internet_Engineering_Task_Force "Internet Engineering Task Force") (IETF). The BOF session in December 1996 showed sufficient interest in developing a printing protocol, leading to the creation of the IETF Internet Printing Protocol (ipp) [^3] working group, which concluded in 2005.

Work on IPP continues in the PWG [Internet Printing Protocol workgroup](https://www.pwg.org/ipp) with the publication of 23 candidate standards, 1 new and 3 updated IETF RFCs, and several registration and best practice documents providing extensions to IPP and support for different services including [3D Printing](https://www.pwg.org/3d), scanning, facsimile, cloud-based services, and overall system and resource management.

IPP/1.0 was published as a series of experimental documents (RFC 2565,[^4] RFC 2566,[^5] RFC 2567,[^6] RFC 2568,[^7] RFC 2569,[^8] and RFC 2639 [^9]) in 1999.

IPP/1.1 followed as a draft standard in 2000 with support documents in 2001, 2003, and 2015 (RFC 2910,[^10] RFC 2911,[^11] RFC 3196,[^12] RFC 3510 [^13] RFC 7472 [^14]). IPP/1.1 was updated as a proposed standard in January 2017 (RFC 8010,[^15] RFC 8011,[^16]) and then adopted as Internet Standard 92 (STD 92,[^17]) in June 2018.

IPP 2.0 was published as a PWG Candidate Standard in 2009 (PWG 5100.10-2009,[^18]) and defined two new IPP versions (2.0 for printers and 2.1 for print servers) with additional conformance requirements beyond IPP 1.1. A subsequent Candidate Standard replaced it in 2011 defining an additional 2.2 version for production printers (PWG 5100.12-2011,[^19]). This specification was updated and approved as a full PWG Standard (PWG 5100.12-2015,[^20]) in 2015.

[IPP Everywhere](https://www.pwg.org/ipp/everywhere.html) was published in 2013 and provides a common baseline for printers to support so-called "driverless" printing from client devices. It builds on IPP and specifies additional rules for interoperability, such as a list of document formats printers need to support. A corresponding self-certification manual and tool suite was published in 2016 allowing printer manufacturers and print server implementors to certify their solutions against the published specification and be listed on the [IPP Everywhere printers](https://www.pwg.org/printers) page maintained by the PWG.

## Implementation

IPP is implemented using the [Hypertext Transfer Protocol](https://en.wikipedia.org/wiki/Hypertext_Transfer_Protocol "Hypertext Transfer Protocol") (HTTP) and inherits all of the HTTP streaming and security features. For example, [authorization](https://en.wikipedia.org/wiki/Authorization "Authorization") can take place via HTTP's [Digest access authentication](https://en.wikipedia.org/wiki/Digest_access_authentication "Digest access authentication") mechanism, [GSSAPI](https://en.wikipedia.org/wiki/GSSAPI "GSSAPI"), or any other HTTP authentication methods. [Encryption](https://en.wikipedia.org/wiki/Encryption "Encryption") is provided using the [TLS](https://en.wikipedia.org/wiki/Transport_Layer_Security "Transport Layer Security") protocol-layer, either in the traditional always-on mode used by [HTTPS](https://en.wikipedia.org/wiki/HTTPS "HTTPS") or using the HTTP Upgrade extension to HTTP (RFC 2817 [^21]). [Public key certificates](https://en.wikipedia.org/wiki/Public_key_certificates "Public key certificates") can be used for authentication with TLS. Streaming is supported using HTTP chunking. The document to be printed is usually sent as a data stream.

IPP accommodates various formats for documents to be printed. The [PWG](https://en.wikipedia.org/wiki/Printer_Working_Group "Printer Working Group") defined an image format called **PWG Raster** specifically for this purpose. Other formats include [PDF](https://en.wikipedia.org/wiki/PDF "PDF") or [JPEG](https://en.wikipedia.org/wiki/JPEG "JPEG"), depending on the capabilities of the destination printer.[^22]

IPP uses the traditional client–server model, with clients sending IPP request messages with the [MIME](https://en.wikipedia.org/wiki/MIME "MIME") media type "application/ipp" in HTTP POST requests to an IPP printer. IPP request messages consist of key–value pairs using a custom binary encoding followed by an "end of attributes" tag and any document data required for the request (such as the document to be printed). The IPP response is sent back to the client in the HTTP POST response, again using the "application/ipp" MIME media type.

Among other things, IPP allows a client to:

- query a printer's capabilities (such as supported character sets, media types and document formats)
- submit print jobs to a printer
- query the status of a printer
- query the status of one or more print jobs
- cancel previously submitted jobs

IPP uses [TCP](https://en.wikipedia.org/wiki/Transmission_Control_Protocol "Transmission Control Protocol") with port 631 as its [well-known port](https://en.wikipedia.org/wiki/Well-known_port "Well-known port").

Products using the Internet Printing Protocol include Universal Print from Microsoft,[^23] [CUPS](https://en.wikipedia.org/wiki/CUPS "CUPS") (which is part of [Apple](https://en.wikipedia.org/wiki/Apple_Inc. "Apple Inc.") [macOS](https://en.wikipedia.org/wiki/Mac_OS_X "Mac OS X") and many [BSD](https://en.wikipedia.org/wiki/BSD "BSD") and [Linux](https://en.wikipedia.org/wiki/Linux "Linux") distributions and is the reference implementation for most versions of IPP [^24]), [Novell](https://en.wikipedia.org/wiki/Novell "Novell") [iPrint](https://en.wikipedia.org/wiki/IPrint "IPrint"), and [Microsoft Windows](https://en.wikipedia.org/wiki/Microsoft_Windows "Microsoft Windows") versions starting from [MS](https://en.wikipedia.org/wiki/Microsoft "Microsoft") [Windows 2000](https://en.wikipedia.org/wiki/Windows_2000 "Windows 2000").[^25] [Windows XP](https://en.wikipedia.org/wiki/Windows_XP "Windows XP") and [Windows Server 2003](https://en.wikipedia.org/wiki/Windows_Server_2003 "Windows Server 2003") offer IPP printing via [HTTPS](https://en.wikipedia.org/wiki/HTTPS "HTTPS"). [Windows Vista](https://en.wikipedia.org/wiki/Windows_Vista "Windows Vista"), [Windows 7](https://en.wikipedia.org/wiki/Windows_7 "Windows 7"),[^26] [Windows Server 2008](https://en.wikipedia.org/wiki/Windows_Server_2008 "Windows Server 2008") and [2008 R2](https://en.wikipedia.org/wiki/Windows_Server_2008_R2 "Windows Server 2008 R2") also support IPP printing over [RPC](https://en.wikipedia.org/wiki/Remote_procedure_call "Remote procedure call") in the "Medium-Low" [security zone](https://en.wikipedia.org/w/index.php?title=Security_zone&action=edit&redlink=1 "Security zone (page does not exist)").

## See also

- [CUPS](https://en.wikipedia.org/wiki/CUPS "CUPS")
- [Job Definition Format](https://en.wikipedia.org/wiki/Job_Definition_Format "Job Definition Format")
- [Line Printer Daemon protocol](https://en.wikipedia.org/wiki/Line_Printer_Daemon_protocol "Line Printer Daemon protocol")
- [T.37 (ITU-T recommendation)](https://en.wikipedia.org/wiki/T.37_\(ITU-T_recommendation\) "T.37 (ITU-T recommendation)")

## References

  

## Further reading

Standards

- [*Internet Printing Protocol/1.1*](https://www.rfc-editor.org/info/std92). June 2018. STD 92.
- [*Internet Printing Protocol/1.1: Encoding and Transport*](https://datatracker.ietf.org/doc/html/rfc8010). January 2017. [doi](https://en.wikipedia.org/wiki/Doi_\(identifier\) "Doi (identifier)"):[10.17487/RFC8010](https://doi.org/10.17487%2FRFC8010). [RFC](https://en.wikipedia.org/wiki/Request_for_Comments "Request for Comments") [8010](https://datatracker.ietf.org/doc/html/rfc8010).
- [*Internet Printing Protocol/1.1: Model and Semantics*](https://datatracker.ietf.org/doc/html/rfc8011). January 2017. [doi](https://en.wikipedia.org/wiki/Doi_\(identifier\) "Doi (identifier)"):[10.17487/RFC8011](https://doi.org/10.17487%2FRFC8011). [RFC](https://en.wikipedia.org/wiki/Request_for_Comments "Request for Comments") [8011](https://datatracker.ietf.org/doc/html/rfc8011).
- [*PWG 5100.12-2015: IPP Version 2.0, 2.1, and 2.2*](https://ftp.pwg.org/pub/pwg/standards/std-ipp20-20151030-5100.12.pdf) (PDF), PWG, October 2015.

Informational documents

- [*Design Goals for an Internet Printing Protocol*](https://datatracker.ietf.org/doc/html/rfc2567). April 1999. [doi](https://en.wikipedia.org/wiki/Doi_\(identifier\) "Doi (identifier)"):[10.17487/RFC2567](https://doi.org/10.17487%2FRFC2567). [RFC](https://en.wikipedia.org/wiki/Request_for_Comments "Request for Comments") [2567](https://datatracker.ietf.org/doc/html/rfc2567).
- [*Rationale for the Structure and Model and Protocol for the Internet Printing Protocol*](https://datatracker.ietf.org/doc/html/rfc2568). April 1999. [doi](https://en.wikipedia.org/wiki/Doi_\(identifier\) "Doi (identifier)"):[10.17487/RFC2568](https://doi.org/10.17487%2FRFC2568). [RFC](https://en.wikipedia.org/wiki/Request_for_Comments "Request for Comments") [2568](https://datatracker.ietf.org/doc/html/rfc2568).
- [*Mapping between LPD and IPP Protocols*](https://datatracker.ietf.org/doc/html/rfc2569). April 1999. [doi](https://en.wikipedia.org/wiki/Doi_\(identifier\) "Doi (identifier)"):[10.17487/RFC2569](https://doi.org/10.17487%2FRFC2569). [RFC](https://en.wikipedia.org/wiki/Request_for_Comments "Request for Comments") [2569](https://datatracker.ietf.org/doc/html/rfc2569).

## External links

- [*PWG IPP Workgroup*](https://www.pwg.org/ipp/), PWG.
- "Overview", [*Netware iPrint*](http://www.novell.com/products/netware/printing/quicklook.html), Novell.
- [*Technet | IPP in MS Windows*](https://technet.microsoft.com/en-us/library/cc731368.aspx#BKMK_How), Microsoft.
- [*CUPS Software*](https://www.cups.org/), Apple.
- "OpenPrinting", [*Workgroups*](https://web.archive.org/web/20111120174441/http://www.linuxfoundation.org/collaborate/workgroups/openprinting), Linux foundation, archived from [the original](http://www.linuxfoundation.org/collaborate/workgroups/openprinting) on 2011-11-20, retrieved 2011-11-24.

[^1]: ["IPP Everywhere"](https://www.pwg.org/ipp/everywhere.html). Retrieved April 2, 2019.

[^2]: Michael Sweet, Apple Inc. (May 15, 2018). ["CUPS Plenary, Joint PWG/Open Printing Meeting, Sunnyvale, California"](https://ftp.pwg.org/pub/pwg/liaison/openprinting/presentations/cups-plenary-may-18.pdf) (PDF). [Printer Working Group](https://en.wikipedia.org/wiki/Printer_Working_Group "Printer Working Group"). Retrieved April 2, 2019.

[^3]: "IPP", [*Working groups*](http://www.ietf.org/wg/concluded/ipp.html), IETF.

[^4]: [*Internet Printing Protocol/1.0: Encoding and Transport*](https://datatracker.ietf.org/doc/html/rfc2565). [doi](https://en.wikipedia.org/wiki/Doi_\(identifier\) "Doi (identifier)"):[10.17487/RFC2565](https://doi.org/10.17487%2FRFC2565). [RFC](https://en.wikipedia.org/wiki/Request_for_Comments "Request for Comments") [2565](https://datatracker.ietf.org/doc/html/rfc2565).

[^5]: [*Internet Printing Protocol/1.0: Model and Semantics*](https://datatracker.ietf.org/doc/html/rfc2566). [doi](https://en.wikipedia.org/wiki/Doi_\(identifier\) "Doi (identifier)"):[10.17487/RFC2566](https://doi.org/10.17487%2FRFC2566). [RFC](https://en.wikipedia.org/wiki/Request_for_Comments "Request for Comments") [2566](https://datatracker.ietf.org/doc/html/rfc2566).

[^6]: [*Design Goals for an Internet Printing Protocol*](https://datatracker.ietf.org/doc/html/rfc2567). [doi](https://en.wikipedia.org/wiki/Doi_\(identifier\) "Doi (identifier)"):[10.17487/RFC2567](https://doi.org/10.17487%2FRFC2567). [RFC](https://en.wikipedia.org/wiki/Request_for_Comments "Request for Comments") [2567](https://datatracker.ietf.org/doc/html/rfc2567).

[^7]: [*Rationale for the Structure of the Model and Protocol for the Internet Printing Protocol*](https://datatracker.ietf.org/doc/html/rfc2568). [doi](https://en.wikipedia.org/wiki/Doi_\(identifier\) "Doi (identifier)"):[10.17487/RFC2568](https://doi.org/10.17487%2FRFC2568). [RFC](https://en.wikipedia.org/wiki/Request_for_Comments "Request for Comments") [2568](https://datatracker.ietf.org/doc/html/rfc2568).

[^8]: [*Mapping between LPD and IPP Protocols*](https://datatracker.ietf.org/doc/html/rfc2569). [doi](https://en.wikipedia.org/wiki/Doi_\(identifier\) "Doi (identifier)"):[10.17487/RFC2569](https://doi.org/10.17487%2FRFC2569). [RFC](https://en.wikipedia.org/wiki/Request_for_Comments "Request for Comments") [2569](https://datatracker.ietf.org/doc/html/rfc2569).

[^9]: [*Internet Printing Protocol/1.0: Implementer's Guide*](https://datatracker.ietf.org/doc/html/rfc2639). [doi](https://en.wikipedia.org/wiki/Doi_\(identifier\) "Doi (identifier)"):[10.17487/RFC2639](https://doi.org/10.17487%2FRFC2639). [RFC](https://en.wikipedia.org/wiki/Request_for_Comments "Request for Comments") [2639](https://datatracker.ietf.org/doc/html/rfc2639).

[^10]: [*Internet Printing Protocol/1.1: Encoding and Transport*](https://datatracker.ietf.org/doc/html/rfc2910). [doi](https://en.wikipedia.org/wiki/Doi_\(identifier\) "Doi (identifier)"):[10.17487/RFC2910](https://doi.org/10.17487%2FRFC2910). [RFC](https://en.wikipedia.org/wiki/Request_for_Comments "Request for Comments") [2910](https://datatracker.ietf.org/doc/html/rfc2910).

[^11]: [*Internet Printing Protocol/1.1: Model and Semantics*](https://datatracker.ietf.org/doc/html/rfc2911). [doi](https://en.wikipedia.org/wiki/Doi_\(identifier\) "Doi (identifier)"):[10.17487/RFC2911](https://doi.org/10.17487%2FRFC2911). [RFC](https://en.wikipedia.org/wiki/Request_for_Comments "Request for Comments") [2911](https://datatracker.ietf.org/doc/html/rfc2911).

[^12]: [*Internet Printing Protocol/1.1: Implementor's Guide*](https://datatracker.ietf.org/doc/html/rfc3196). [doi](https://en.wikipedia.org/wiki/Doi_\(identifier\) "Doi (identifier)"):[10.17487/RFC3196](https://doi.org/10.17487%2FRFC3196). [RFC](https://en.wikipedia.org/wiki/Request_for_Comments "Request for Comments") [3196](https://datatracker.ietf.org/doc/html/rfc3196).

[^13]: [*Internet Printing Protocol/1.1: IPP URL Scheme*](https://datatracker.ietf.org/doc/html/rfc3510). [doi](https://en.wikipedia.org/wiki/Doi_\(identifier\) "Doi (identifier)"):[10.17487/RFC3510](https://doi.org/10.17487%2FRFC3510). [RFC](https://en.wikipedia.org/wiki/Request_for_Comments "Request for Comments") [3510](https://datatracker.ietf.org/doc/html/rfc3510).

[^14]: [*Internet Printing Protocol (IPP) over HTTPS Transport Binding and the 'ipps' URI Scheme*](https://datatracker.ietf.org/doc/html/rfc7472). [doi](https://en.wikipedia.org/wiki/Doi_\(identifier\) "Doi (identifier)"):[10.17487/RFC7472](https://doi.org/10.17487%2FRFC7472). [RFC](https://en.wikipedia.org/wiki/Request_for_Comments "Request for Comments") [7472](https://datatracker.ietf.org/doc/html/rfc7472).

[^15]: [*RFC 8010*](https://datatracker.ietf.org/doc/html/rfc8010). [doi](https://en.wikipedia.org/wiki/Doi_\(identifier\) "Doi (identifier)"):[10.17487/RFC8010](https://doi.org/10.17487%2FRFC8010).

[^16]: [*Internet Printing Protocol/1.1: Model and Semantics*](https://datatracker.ietf.org/doc/html/rfc8011). [doi](https://en.wikipedia.org/wiki/Doi_\(identifier\) "Doi (identifier)"):[10.17487/RFC8011](https://doi.org/10.17487%2FRFC8011). [RFC](https://en.wikipedia.org/wiki/Request_for_Comments "Request for Comments") [8011](https://datatracker.ietf.org/doc/html/rfc8011).

[^17]: [*Internet Printing Protocol/1.1*](https://www.rfc-editor.org/info/std92). STD 92.

[^18]: [*PWG 5100.10-2009*](https://ftp.pwg.org/pub/pwg/candidates/cs-ipp20-20090731-5100.10.pdf) (PDF), PWG.

[^19]: [*PWG 5100.12-2011*](https://ftp.pwg.org/pub/pwg/candidates/cs-ipp20-20110214-5100.12.pdf) (PDF), PWG.

[^20]: [*PWG 5100.12-2015*](https://ftp.pwg.org/pub/pwg/standards/std-ipp20-20151030-5100.12.pdf) (PDF), PWG.

[^21]: [*Upgrading to TLS Within HTTP/1.1*](http://tools.ietf.org/html/rfc2817), IETF, [RFC](https://en.wikipedia.org/wiki/RFC_\(identifier\) "RFC (identifier)") [2817](https://tools.ietf.org/html/rfc2817)

[^22]: ["CUPSDriverlessPrinting"](https://wiki.debian.org/CUPSDriverlessPrinting#PDLs_for_Driverless_Printing). *Debian Wiki*. [Archived](https://web.archive.org/web/20211031121709/https://wiki.debian.org/CUPSDriverlessPrinting#PDLs_for_Driverless_Printing) from the original on 2021-10-31. Retrieved 2021-12-13.

[^23]: ["Universal Print from Microsoft"](https://print.microsoft.com/). Microsoft. Retrieved 2023-05-18.

[^24]: ["Internet Printing Protocol"](http://www.pwg.org/ipp/). Printer Working Group. [Archived](https://web.archive.org/web/20100112042156/http://www.pwg.org/ipp) from the original on 2010-01-12. Retrieved 2013-11-20. The language "CUPS Software (IPP Reference Implementation)" appeared on this page since a point between 1 September 2009 and 12 January 2010, though no mention of a reference implementation is found in the published standard.

[^25]: ["Effectively Using IPP Printing"](http://www.microsoft.com/windowsserver2003/techinfo/overview/internetprint.mspx). Microsoft. April 8, 2003. Retrieved 2009-09-06.

[^26]: ["The Internet Printing Client (IPP) is not available in Windows 7 Starter Edition"](http://support.microsoft.com/kb/2462380). Microsoft. November 17, 2010. Retrieved 2012-10-02.