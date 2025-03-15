---
source: https://en.wikipedia.org/wiki/OwnCloud
author: 
published: 
created: 2025-03-14
tags:
  - software/cloud
  - free
  - software/open-source
---
**ownCloud** is a [free and open-source software](https://en.wikipedia.org/wiki/Free_Software_Foundation "Free Software Foundation") project for content collaboration, file-sharing, and file-syncing. It's usable in distributed and [federated](https://en.wikipedia.org/wiki/Federation_\(information_technology\) "Federation (information technology)") enterprise scenarios.[^2]

ownCloud supports extensions including [Collabora](https://en.wikipedia.org/wiki/Collabora "Collabora"), [OnlyOffice](https://en.wikipedia.org/wiki/OnlyOffice "OnlyOffice"), [Microsoft 365](https://en.wikipedia.org/wiki/Microsoft_365 "Microsoft 365") and Microsoft Online Office, as well as synchronization of calendars and contacts. Most of ownCloud is published under AGPL and GPL licenses, except for some enterprise extensions.

As of late 2023, organizations using ownCloud include [CERN](https://en.wikipedia.org/wiki/CERN "CERN"),[^3] the European Science Cloud,[^4] the Bavarian school cloud,[^5] and the SCIEBO[^6] platform.

## History

The ownCloud project was launched in 2010 by [Frank Karlitschek](https://en.wikipedia.org/wiki/Frank_Karlitschek "Frank Karlitschek"),[^7][^8][^9] who shortly afterward founded the company of the same name together with Markus Rex and Holger Dyroff. In 2016, ownCloud CTO Karlitschek left the company[^10] and founded the fork [Nextcloud](https://en.wikipedia.org/wiki/Nextcloud "Nextcloud").[^11]

At the end of 2023, ownCloud merged with [Kiteworks](https://en.wikipedia.org/wiki/Kiteworks "Kiteworks"); however, ownCloud claims its code will remain open-source.[^12]

## Versions

ownCloud is available in two versions: ownCloud 10, which is built on [PHP](https://en.wikipedia.org/wiki/PHP "PHP"); and Infinite Scale, which is built on [Go](https://en.wikipedia.org/wiki/Go_\(programming_language\) "Go (programming language)").

### Releases of ownCloud 10

| Old version, still maintained: 10.0 | [April 27, 2017](https://owncloud.com/news/introducing-owncloud-x/) | File integrity checks, guest accounts, custom groups, multiple link sharing, new app marketplace |
| --- | --- | --- |
| Old version, still maintained: 10.1 | [February 7, 2019](https://owncloud.com/news/owncloud-server-10-1-release-a-big-step-forward-in-digital-collaboration/) | Microsoft Office Online Integration, File Locking, Semantic Versioning, OpenCloudMesh 1.0 compliance |
| Old version, still maintained: 10.2 |  | Advanced Sharing Permissions, SecureView, Improved Public Links, Storage Encryption with HSMs |
| Old version, still maintained: 10.3 | [October 15, 2019](https://owncloud.com/news/owncloud-server-10-3-its-all-about-performance/) | New Media Viewer, improved OAuth2 session handling, improved User/group sharing UI |
| Old version, still maintained: 10.4 | [March 5, 2020](https://owncloud.com/news/owncloud-server-10-4-makes-sharing-even-more-granular/) | Expiration dates for user and group shares, supports MariaDB up to 10.4, PostgreSQL up to 10, share indicator on webUI |
| Old version, still maintained: 10.5 | [August 3, 2020](https://owncloud.com/changelog/server/) | Official support for PHP 7.4, manual file locking in the web interface, improved background process for metadata of federated shares |
| Old version, still maintained: 10.6 | [December 16, 2020](https://owncloud.com/news/owncloud-10-6-bridge-to-the-future/) |  |
| Old version, still maintained: 10.7 | [March 26, 2021](https://owncloud.com/news/10-7-brings-integration-groundwork-and-interface-improvements/) | Preparations for upcoming workstream integrations, UI improvements, improved encryption efficiency |
| Old version, still maintained: 10.8 | [July 21, 2021](https://owncloud.com/news/server-10-8-release/) | New ownCloud Web browser frontend, new login UI, better caching for external storages like Windows Network Drives |
| Old version, still maintained: 10.9 | [December 23, 2021](https://owncloud.com/news/syncing-faster-owncloud-server-10-9-released/) | Initial sync faster, more detailed file locking, version control and public sharing |
| Old version, still maintained: 10.9.1 | [January 13, 2022](https://central.owncloud.org/t/owncloud-server-10-9-1-released/35908) | Prevent encrypted files from being corrupted when overwriting them, Marketplace not working after upgrade from 10.8 to 10.9, Fixes for the newly introduced feature to store the author of versions |
| Old version, still maintained: 10.10.0 | [May 14, 2022](https://doc.owncloud.com/docs/next/server_release_notes.html#changes-in-10-10-0) | Many bugfixes, improved management of migrations, session handling and storage. |
| Old version, still maintained: 10.11.0 | [September 20, 2022](https://owncloud.com/news/collaboration-server-10-11/) | Many bugfixes, edit permission for public links on single files, sharing with multiple users at once, inviting new guests to Custom Groups. |
| Old version, still maintained: 10.12.0 | [March 12, 2023](https://doc.owncloud.com/docs/next/server_release_notes.html#changes-in-10-12-0) | Dropped support for PHP 7.3, changed workflow for persistent major versions (added checkbox to select versions to keep), added support for login policies, extended trashbin, mounts, shares and checksum functions. |
| Old version, still maintained: 10.12.1 | [April 18, 2023](https://doc.owncloud.com/docs/next/server_release_notes.html#changes-in-10-12-1) | Fix Permission Bits when Enforcing Passwords on Public Links, Prevent 507 Insufficient Storage on 32-Bit Systems, Fix quota for 32-Bit Systems, Add RewriteBase to .htaccess, Updated text editor and metrics apps. |
| Old version, still maintained: 10.13.0 | [August 24, 2023](https://doc.owncloud.com/docs/next/server_release_notes.html#changes-in-10-13-0) | Kerberos authentication; enforceable 2-Factor-Authentication via Time-based One-Time Passwords (TOTP); iOS (version 12.0.3+) or Desktop client (version 4.0+) now allow to directly open a file in the Office Suite on the ownCloud server; update Symfony 4.4 -> 4-5; |
| Old version, still maintained: 10.13.1 | [September 06, 2023](https://doc.owncloud.com/docs/next/server_release_notes.html#changes-in-10-13-1) | Improvements to "Open in Web"; Avoid Loading 3rd-party Resources; Fix: disallow pre-signed url access if the signing key is not initialized; dismiss invalid settings of the redirection endpoint URI as seen in the OAuth2 protocol, according to RFC#7636; updated apps for Graph API, Guests, OAuth2; |
| Old version, still maintained: 10.13.2 | [October 10, 2023](https://doc.owncloud.com/docs/next/server_release_notes.html#changes-in-10-13-2) | Several bugfixes (e.g. Delete all files from object store when user is deleted), fixed view on users page for subadmins, updated PHP dependencies (phpseclib, symfony, ...), remove "Fill E-Tags" repair-step (a legacy step that took very long to run during an upgrade of a large system and didn't repair anything anymore), upgraded Microsoft Office Online app to version 1.8.1., Media Viewer now plays also HEIC and HEIF-files. |
| Old version, still maintained: 10.13.3 | [November 17, 2023](https://doc.owncloud.com/docs/next/server_release_notes.html#changes-in-10-13-3) | Fix potential issue with the PreviewCleanup job in postgresql. Reverting Pull request 41059 because of performance problems for large installations. Users can only delete their own external storage configurations, and comments in config.apps.sample.php describing the configuration variables related to kerberos and windows\_network\_drive are now updated and in sync with published online documentation. |
| Latest preview version: 10.13.4 | [December 13, 2023](https://doc.owncloud.com/docs/next/server_release_notes.html#changes-in-10-13-4) | A Bugfix to Check 2FA on controllers which are accessible publicly and authenticated, a new feature to prompt the admins of licensed instances to run the IoC-Scanner. The prompt appears in the admin menu and after an upgrade on the CLI. |
| Latest version: **10.14.0** | [February 26, 2024](https://doc.owncloud.com/server_release_notes.html#changes-in-10-14-0) | Fix issues where log conditions could break uploads, share expiration was wrong in the web UI, and previews were generated from last page instead of first. Release enables Files->Office menu to work with rich documents 4.1.0 and makes several enhancements to lDAP user and group handling related to external storages and deleting attributes. Performance also improved with version metadata handling. Finally, Google Chrome no longer auto-translates filenames. |

### Releases of ownCloud Infinite Scale

| Version[^13] | Date | New Features |
| --- | --- | --- |
| Old version, still maintained: Infinite Scale 2.0.0 | [November 30, 2022](https://github.com/owncloud/ocis/blob/master/CHANGELOG.md) | Complete overhaul of the backend, rewritten in Go and Vue.js, in cooperation with CERN. Spaces for file sharing. |
| Old version, still maintained: Infinite Scale 3.0.0 | [June 7, 2023](https://doc.owncloud.com/ocis_release_notes.html#infinite-scale-3-0-0) | File Firewall, Antivirus (ICAP), Accessibility (WCAP), Tags, Full text Search, Spaces Templates, Custom User Roles |
| Old version, still maintained: Infinite Scale 4.0.0 | [August 25, 2023](https://doc.owncloud.com/ocis_release_notes.html#infinite-scale-4-0-0) | Cloud Importer, Drag and Drop to breadcrumbs; Tags, Filter and Highlighting in Full text Search; Improved Link sharing; Copy and Paste for Upload from Keyboard |
| Latest version: **Infinite Scale 5.0.0** | [March 18, 2024](https://doc.owncloud.com/ocis_release_notes.html#infinite-scale-5-0-0) |  |

## Features

ownCloud files are stored in conventional directory structures and can be accessed via [WebDAV](https://en.wikipedia.org/wiki/WebDAV "WebDAV") if necessary. User files are encrypted both at rest and during transit. ownCloud can synchronize with local [clients](https://en.wikipedia.org/wiki/Client_\(computing\) "Client (computing)") running [Windows](https://en.wikipedia.org/wiki/Microsoft_Windows "Microsoft Windows"), [macOS](https://en.wikipedia.org/wiki/MacOS "MacOS") and various [Linux](https://en.wikipedia.org/wiki/Linux "Linux") distributions. ownCloud users can manage calendars ([CalDAV](https://en.wikipedia.org/wiki/CalDAV "CalDAV")), contacts ([CardDAV](https://en.wikipedia.org/wiki/CardDAV "CardDAV")), scheduled tasks and streaming media ([Ampache](https://en.wikipedia.org/wiki/Ampache "Ampache")) from within the platform. Online document editing is supported via [Collabora Online](https://en.wikipedia.org/wiki/Collabora_Online "Collabora Online"), [OnlyOffice](https://en.wikipedia.org/wiki/OnlyOffice "OnlyOffice"), [Microsoft 365](https://en.wikipedia.org/wiki/Microsoft_365 "Microsoft 365") and [Microsoft Office Online](https://en.wikipedia.org/wiki/Microsoft_Office "Microsoft Office").

ownCloud permits user and group administration, via [OpenID](https://en.wikipedia.org/wiki/OpenID "OpenID") or [LDAP](https://en.wikipedia.org/wiki/Lightweight_Directory_Access_Protocol "Lightweight Directory Access Protocol")) Content can be shared by granular read/write permissions between users or groups. Alternatively, ownCloud users can create public [URLs](https://en.wikipedia.org/wiki/URL "URL") for sharing files. Furthermore, users can interact with the browser-based [ODF](https://en.wikipedia.org/wiki/ODF "ODF")\-format [word processor](https://en.wikipedia.org/wiki/Word_processor "Word processor"),[^14] [bookmarking](https://en.wikipedia.org/wiki/Bookmark_\(World_Wide_Web\) "Bookmark (World Wide Web)") service, [URL shortening](https://en.wikipedia.org/wiki/URL_shortening "URL shortening") suite, gallery, [RSS](https://en.wikipedia.org/wiki/RSS "RSS") feed reader and document viewer tools from within ownCloud. ownCloud can be augmented with "one-click" applications and connection to Dropbox, [Google Drive](https://en.wikipedia.org/wiki/Google_Drive "Google Drive") and [Amazon S3](https://en.wikipedia.org/wiki/Amazon_S3 "Amazon S3").

Enterprise customers have access to apps with additional functionality, which are intended for organizations with more than 500 users. An Enterprise subscription includes support services. Commercial features include [end-to-end encryption](https://en.wikipedia.org/wiki/End-to-end_encryption "End-to-end encryption"), [ransomware](https://en.wikipedia.org/wiki/Ransomware "Ransomware") and antivirus protection, branding, document classification, and single sign-on via OpenID.

## See also

- [Comparison of file hosting services](https://en.wikipedia.org/wiki/Comparison_of_file_hosting_services "Comparison of file hosting services")
- [Comparison of file synchronization software](https://en.wikipedia.org/wiki/Comparison_of_file_synchronization_software "Comparison of file synchronization software")
- [Comparison of online backup services](https://en.wikipedia.org/wiki/Comparison_of_online_backup_services "Comparison of online backup services")

## References

## External links

- [Official website](https://owncloud.com/)
- [Forum for open source community and project](https://central.owncloud.org/)

[^1]: ["Maintenance and Release Schedule"](https://owncloud.com/changelog/server/). Retrieved 2021-12-23 – via [GitHub](https://en.wikipedia.org/wiki/GitHub "GitHub").

[^2]: ["Kiteworks Acquires ownCloud"](https://www.finsmes.com/2023/11/kiteworks-acquires-owncloud.html). 23 November 2023.

[^3]: ["CERNBox"](https://cernbox.cern.ch/s/cAmcdBQsWdR5q6V). *cernbox.cern.ch*. Retrieved 2024-02-07.

[^4]: ["The Commission announces winners of the EOSC Procurement | Shaping Europe's digital future"](https://digital-strategy.ec.europa.eu/en/news/commission-announces-winners-eosc-procurement). *digital-strategy.ec.europa.eu*. 2023-11-24. Retrieved 2024-01-24.

[^5]: ["Bayern Cloud Schule (BYCS)"](https://www.bycs.de/index.html). *ByCS - Bavarian Cloud for Schools* (in German). Retrieved 2023-12-20.

[^6]: *hochschulcloud.nrw* [https://hochschulcloud.nrw/en/index.html](https://hochschulcloud.nrw/en/index.html). Retrieved 2023-12-20. `{{[cite web](https://en.wikipedia.org/wiki/Template:Cite_web "Template:Cite web")}}`: Missing or empty `|title=` ([help](https://en.wikipedia.org/wiki/Help:CS1_errors#citation_missing_title "Help:CS1 errors"))

[^7]: [*Camp KDE 2010 - Keynote - Frank Karlitschek - KDE and the Cloud Part 2*](https://www.youtube.com/watch?v=APsDO3QO_Z4), March 2010, retrieved 2024-01-24

[^8]: ["commiting ownCloud 1.0 beta 1 · owncloud/core@16f3bd4"](https://github.com/owncloud/core/commit/16f3bd4e2334491152510598f861a1f6c1ecdae2). *GitHub*. Retrieved 2024-01-24.

[^9]: ["Camp KDE 2010 Continues with More Talks"](https://dot.kde.org/2010/01/21/camp-kde-2010-continues-more-talks). *KDE.news*. 2010-01-21. Retrieved 2024-01-24.

[^10]: ["Owncloud vs. Nextcloud: Wie ein Projekt-Fork zwei Firmen und ihre Produkte prägt"](https://www.linux-magazin.de/ausgaben/2018/07/einfuehrung-7/). *Linux-Magazin* (in German). Retrieved 2024-01-24.

[^11]: ["big changes: I am leaving ownCloud, Inc. today"](https://karlitschek.de/2016/04/big-changes-i-am-leaving-owncloud-inc-today/). *karlitschek.de*. Retrieved 2024-01-24.

[^12]: ["ownCloud becomes part of Kiteworks - ownCloud"](https://owncloud.com/news/owncloud-becomes-part-of-kiteworks/). *owncloud.com*. 2023-11-21. Retrieved 2024-01-24.

[^13]: ["Download Server Packages"](https://owncloud.com/download-server/). *ownCloud.com*. 5 January 2022. Retrieved 2022-02-02.

[^14]: Neil Bothwick (2014-02-27). ["OwnCloud: Work together online"](https://web.archive.org/web/20171123174058/http://www.apcmag.com/owncloud-work-together-online.htm/). [APC](https://en.wikipedia.org/wiki/APC_\(magazine\) "APC (magazine)"). Archived from [the original](http://apcmag.com/owncloud-work-together-online.htm/) on 2017-11-23. Retrieved 2022-02-02.