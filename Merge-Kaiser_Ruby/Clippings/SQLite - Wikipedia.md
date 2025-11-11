---
source: https://en.wikipedia.org/wiki/SQLite
author:
  - 
published: 2003-06-13
created: 2025-06-01
tags:
  - database
---
**SQLite** ([/ ˌ ɛ s ˌ k juː ˌ ɛ l ˈ aɪ t /](https://en.wikipedia.org/wiki/Help:IPA/English "Help:IPA/English") "S-Q-L-ite",[^3] [^4] [/ ˈ s iː k w ə ˌ l aɪ t /](https://en.wikipedia.org/wiki/Help:IPA/English "Help:IPA/English") "sequel-ite" [^5]) is a [free and open-source](https://en.wikipedia.org/wiki/Free_and_open-source_software "Free and open-source software") [relational](https://en.wikipedia.org/wiki/Relational_database "Relational database") [database engine](https://en.wikipedia.org/wiki/Database_engine "Database engine") written in the [C programming language](https://en.wikipedia.org/wiki/C_Language "C Language"). It is not a standalone app; rather, it is a [library](https://en.wikipedia.org/wiki/Library_\(computing\) "Library (computing)") that [software developers](https://en.wikipedia.org/wiki/Programmer "Programmer") embed in their [apps](https://en.wikipedia.org/wiki/Application_software "Application software"). As such, it belongs to the family of [embedded databases](https://en.wikipedia.org/wiki/Embedded_database "Embedded database"). It is the most widely deployed database engine, as it is used by several of the top [web browsers](https://en.wikipedia.org/wiki/Web_browser "Web browser"), [operating systems](https://en.wikipedia.org/wiki/Operating_system "Operating system"), [mobile phones](https://en.wikipedia.org/wiki/Mobile_phone "Mobile phone"), and other [embedded systems](https://en.wikipedia.org/wiki/Embedded_system "Embedded system").[^6]

Many [programming languages](https://en.wikipedia.org/wiki/Programming_language "Programming language") have [bindings](https://en.wikipedia.org/wiki/Language_binding "Language binding") to the SQLite library. It generally follows [PostgreSQL](https://en.wikipedia.org/wiki/PostgreSQL "PostgreSQL") syntax, but does not enforce [type checking](https://en.wikipedia.org/wiki/Type_checking "Type checking") by default.[^7] [^8] This means that one can, for example, insert a string into a [column](https://en.wikipedia.org/wiki/Column_\(database\) "Column (database)") defined as an integer. Although it is a lightweight embedded database, SQLite implements most of the [SQL](https://en.wikipedia.org/wiki/SQL "SQL") standard and the [relational model](https://en.wikipedia.org/wiki/Relational_model "Relational model"), including [transactions](https://en.wikipedia.org/wiki/Transaction_processing "Transaction processing") and [ACID](https://en.wikipedia.org/wiki/ACID "ACID") guarantees.[^9] However, it omits many features implemented by other databases, such as [materialized views](https://en.wikipedia.org/wiki/Materialized_view "Materialized view") and complete support for [triggers](https://en.wikipedia.org/wiki/Database_trigger "Database trigger") and [ALTER TABLE statements](https://en.wikipedia.org/wiki/SQL_syntax "SQL syntax").[^10]

## History

[D. Richard Hipp](https://en.wikipedia.org/wiki/D._Richard_Hipp "D. Richard Hipp") designed SQLite in the spring of 2000 while working for [General Dynamics](https://en.wikipedia.org/wiki/General_Dynamics "General Dynamics") on contract with the [United States Navy](https://en.wikipedia.org/wiki/United_States_Navy "United States Navy").[^11] Hipp was designing software used for a [damage-control](https://en.wikipedia.org/wiki/Damage_control_\(maritime\) "Damage control (maritime)") system aboard [guided-missile destroyers](https://en.wikipedia.org/wiki/Guided-missile_destroyer "Guided-missile destroyer"); the damage-control system originally used [HP-UX](https://en.wikipedia.org/wiki/HP-UX "HP-UX") with an [Informix](https://en.wikipedia.org/wiki/IBM_Informix "IBM Informix") [database](https://en.wikipedia.org/wiki/Database "Database") back-end. SQLite began as a [Tcl](https://en.wikipedia.org/wiki/Tcl "Tcl") extension.[^12]

In August 2000, version 1.0 of SQLite was released, with storage based on [gdbm](https://en.wikipedia.org/wiki/Gdbm "Gdbm") (GNU Database Manager). In September 2001, SQLite 2.0 replaced gdbm with a custom [B-tree](https://en.wikipedia.org/wiki/B-tree "B-tree") implementation, adding [transaction](https://en.wikipedia.org/wiki/Database_transaction "Database transaction") capability. In June 2004, SQLite 3.0 added [internationalization](https://en.wikipedia.org/wiki/Internationalization_and_localization "Internationalization and localization"), [manifest typing](https://en.wikipedia.org/wiki/Manifest_typing "Manifest typing"), and other major improvements, partially funded by [America Online](https://en.wikipedia.org/wiki/America_Online "America Online"). In 2011, Hipp announced his plans to add a [NoSQL](https://en.wikipedia.org/wiki/NoSQL "NoSQL") interface to SQLite, as well as announcing UnQL, a functional superset of [SQL](https://en.wikipedia.org/wiki/SQL "SQL") designed for [document-oriented databases](https://en.wikipedia.org/wiki/Document-oriented_databases "Document-oriented databases").[^13]

In 2018, SQLite adopted a [Code of Conduct](https://en.wikipedia.org/wiki/Code_of_conduct "Code of conduct") because some clients would not use the software without one.[^14] It was based on the [Rule of Saint Benedict](https://en.wikipedia.org/wiki/Rule_of_Saint_Benedict "Rule of Saint Benedict") and was controversial for its religious nature. The document was later renamed as a Code of Ethics.[^15]

SQLite is one of four formats recommended for long-term storage of [datasets](https://en.wikipedia.org/wiki/Data_set "Data set") approved for use by the [Library of Congress](https://en.wikipedia.org/wiki/Library_of_Congress "Library of Congress").[^16] [^17] [^18]

## Design

SQLite was designed to allow the program to be operated without installing a database management system or requiring a [database administrator](https://en.wikipedia.org/wiki/Database_administrator "Database administrator"). Unlike [client–server](https://en.wikipedia.org/wiki/Client%E2%80%93server_model "Client–server model") database management systems, the SQLite engine has no standalone [processes](https://en.wikipedia.org/wiki/Process_\(computing\) "Process (computing)") with which the application program communicates. Instead, a [linker](https://en.wikipedia.org/wiki/Linker_\(computing\) "Linker (computing)") integrates the SQLite library— [statically](https://en.wikipedia.org/wiki/Static_library "Static library") or [dynamically](https://en.wikipedia.org/wiki/Dynamic_linker "Dynamic linker") —into an application program which uses SQLite's functionality through simple [function calls](https://en.wikipedia.org/wiki/Subroutine "Subroutine"), reducing [latency](https://en.wikipedia.org/wiki/Latency_\(engineering\) "Latency (engineering)") in database operations; for simple queries with little concurrency, SQLite [performance](https://en.wikipedia.org/wiki/Computer_performance "Computer performance") profits from avoiding the overhead of [inter-process communication](https://en.wikipedia.org/wiki/Inter-process_communication "Inter-process communication").

Due to the serverless design, SQLite applications require less configuration than client–server databases. SQLite is called *zero-configuration* [^19] because configuration tasks such as service management, startup scripts, and password- or [GRANT](https://en.wikipedia.org/wiki/Data_control_language "Data control language") -based access control are unnecessary. [Access control](https://en.wikipedia.org/wiki/Access-control_list "Access-control list") is handled through the [file-system permissions](https://en.wikipedia.org/wiki/File-system_permissions "File-system permissions") of the database file.[^20] Databases in client–server systems use [file-system](https://en.wikipedia.org/wiki/File_system "File system") permissions that give access to the database files only to the [daemon](https://en.wikipedia.org/wiki/Daemon_\(computing\) "Daemon (computing)") process, which handles its locks internally, allowing [concurrent](https://en.wikipedia.org/wiki/Concurrency_\(computer_science\) "Concurrency (computer science)") writes from several processes.

SQLite stores the entire database, consisting of definitions, [tables](https://en.wikipedia.org/wiki/Table_\(database\) "Table (database)"), indices, and data, as a single [cross-platform](https://en.wikipedia.org/wiki/Cross-platform_software "Cross-platform software") file, allowing several processes or [threads](https://en.wikipedia.org/wiki/Thread_\(computer_science\) "Thread (computer science)") to access the same database concurrently. It implements this simple design by [locking](https://en.wikipedia.org/wiki/Lock_\(computer_science\) "Lock (computer science)") the database file during writing.[^20] Write access may fail with an [error code](https://en.wikipedia.org/wiki/Error_code "Error code"), or it can be retried until a configurable timeout expires. SQLite read operations can be [multitasked](https://en.wikipedia.org/wiki/Computer_multitasking "Computer multitasking"), though due to the serverless design, writes can only be performed sequentially. This concurrent access restriction does not apply to temporary tables, and it is relaxed in version 3.7 as [write-ahead logging](https://en.wikipedia.org/wiki/Write-ahead_logging "Write-ahead logging") (WAL) enables concurrent reads and writes.[^21] Since SQLite has to rely on file-system locks, it is not the preferred choice for write-intensive deployments.[^22]

SQLite uses [PostgreSQL](https://en.wikipedia.org/wiki/PostgreSQL "PostgreSQL") as a reference platform. "What would PostgreSQL do" is used to make sense of the SQL standard.[^23] [^24] One major deviation is that, with the exception of [primary keys](https://en.wikipedia.org/wiki/Primary_key "Primary key"), SQLite does not enforce [type checking](https://en.wikipedia.org/wiki/Type_checking "Type checking"); the type of a value is dynamic and not strictly constrained by the [schema](https://en.wikipedia.org/wiki/Database_schema "Database schema") (although the schema will trigger a conversion when storing, if such a conversion is potentially reversible). SQLite strives to follow [Postel's rule](https://en.wikipedia.org/wiki/Robustness_principle "Robustness principle").[^25]

## Features

SQLite implements most of the [SQL-92](https://en.wikipedia.org/wiki/SQL-92 "SQL-92") standard for SQL, but lacks some features. For example, it only partially provides [triggers](https://en.wikipedia.org/wiki/Database_trigger "Database trigger") and cannot write to [views](https://en.wikipedia.org/wiki/View_\(database\) "View (database)") (however, it provides INSTEAD OF triggers that provide this functionality). Its support of [ALTER TABLE](https://en.wikipedia.org/wiki/Data_definition_language#ALTER_statement "Data definition language") statements is limited.[^26]

SQLite uses an unusual [type system](https://en.wikipedia.org/wiki/Type_system "Type system") for an SQL-compatible DBMS: instead of assigning a [type](https://en.wikipedia.org/wiki/SQL_data_types "SQL data types") to a column as in most SQL database systems, types are assigned to individual values; in language terms it is *dynamically typed*. Moreover, it is *weakly typed* in some of the same ways that [Perl](https://en.wikipedia.org/wiki/Perl "Perl") is: one can insert a [string](https://en.wikipedia.org/wiki/String_\(computer_science\) "String (computer science)") into an [integer](https://en.wikipedia.org/wiki/Integer_\(computer_science\) "Integer (computer science)") column (although SQLite will try to convert the string to an integer first, if the column's preferred type is integer). This adds flexibility to columns, especially when bound to a dynamically typed scripting language. However, the technique is not portable to other SQL products. A common criticism is that SQLite's type system lacks the [data integrity](https://en.wikipedia.org/wiki/Data_integrity "Data integrity") mechanism provided by statically typed columns, although it can be emulated with constraints like `CHECK(typeof(x)='integer')`.[^11] In 2021, support for static typing was added through STRICT tables, which enforce datatype constraints for columns.[^27]

Tables normally include a hidden *rowid* index column, which provides faster access.[^28] If a table includes an INTEGER PRIMARY KEY column, SQLite will typically optimize it by treating it as an alias for the *rowid*, causing the contents to be stored as a [strictly typed](https://en.wikipedia.org/wiki/Strictly_typed "Strictly typed") 64-bit signed integer and changing its behavior to be somewhat like an auto-incrementing column. SQLite includes an option to create a table without a rowid column, which can save disk space and improve lookup speed. WITHOUT ROWID tables are required to have a primary key.[^29]

SQLite supports foreign key constraints,[^30] [^31] although they are disabled by default and must be manually enabled with a PRAGMA statement.[^32]

[Stored procedures](https://en.wikipedia.org/wiki/Stored_procedure "Stored procedure") are not supported; this is an explicit choice by the developers to favor simplicity, as the typical use case of SQLite is to be embedded inside a host application that can define its own procedures around the database.[^33]

SQLite does not have full [Unicode](https://en.wikipedia.org/wiki/Unicode "Unicode") support by default for backwards compatibility and due to the size of the Unicode tables, which are larger than the SQLite library.[^34] Full support for [Unicode](https://en.wikipedia.org/wiki/Unicode "Unicode") case-conversions can be enabled through an optional extension.[^35]

SQLite supports [full-text search](https://en.wikipedia.org/wiki/Full-text_search "Full-text search") through its FTS5 loadable extension, which allows users to efficiently search for a keyword in a large number of documents similar to how [search engines](https://en.wikipedia.org/wiki/Search_engine "Search engine") search webpages.[^36]

SQLite includes support for working with [JSON](https://en.wikipedia.org/wiki/JSON "JSON") through its *json1* extension, which is enabled by default since 2021. SQLite's JSON functions can handle JSON5 syntax since 2023. In 2024, SQLite added support for JSONB, a binary serialization of SQLite's internal representation of JSON. Using JSONB allows applications to avoid having to parse the JSON text each time it is processed and saves a small amount of disk space.[^37]

The maximum supported size for an SQLite database file is 281 terabytes.[^38]

SQLite's code is hosted with [Fossil](https://en.wikipedia.org/wiki/Fossil_\(software\) "Fossil (software)"), a [distributed version control system](https://en.wikipedia.org/wiki/Distributed_version_control_system "Distributed version control system") that uses SQLite as a local cache for its non-relational database format, and SQLite's SQL as an implementation language.[^39] [^40]

SQLite is [public domain](https://en.wikipedia.org/wiki/Public-domain_software "Public-domain software"), but not "open-contribution", with the website stating "the project does not accept patches from people who have not submitted an [affidavit](https://en.wikipedia.org/wiki/Affidavit "Affidavit") dedicating their contribution into the public domain." [^41] Instead of a [code of conduct](https://en.wikipedia.org/wiki/Code_of_conduct "Code of conduct"), the founders have adopted a [code of ethics](https://en.wikipedia.org/wiki/Ethical_code "Ethical code") based on the [Rule of St. Benedict](https://en.wikipedia.org/wiki/Rule_of_Saint_Benedict "Rule of Saint Benedict").[^42]

A standalone [command-line](https://en.wikipedia.org/wiki/Console_application "Console application") [shell](https://en.wikipedia.org/wiki/Shell_\(computing\) "Shell (computing)") program called *sqlite3* [^43] is provided in SQLite's distribution. It can be used to create a database, define tables, insert and change rows, run queries and manage an SQLite database file. It also serves as an example for writing applications that use the SQLite library.

SQLite uses automated [regression testing](https://en.wikipedia.org/wiki/Regression_testing "Regression testing") prior to each release. Over 2 million tests are run as part of a release's verification. The SQLite library has 156,000 lines of source code, while all the test suites combined add up to 92 million lines of test code. SQLite's tests simulate a number of exceptional scenarios, such as power loss and I/O errors, in addition to testing the library's functionality. Starting with the August 10, 2009 release of SQLite 3.6.17, SQLite releases have 100% branch test coverage, one of the components of [code coverage](https://en.wikipedia.org/wiki/Code_coverage "Code coverage"). SQLite has four different [test harnesses](https://en.wikipedia.org/wiki/Test_harness "Test harness"): the original public-domain TCL tests, the proprietary C-language TH3 test suite, the SQL Logic Tests, which check SQLite against other SQL databases, and the dbsqlfuzz proprietary [fuzzing](https://en.wikipedia.org/wiki/Fuzzing "Fuzzing") engine.[^44]

## Notable uses

### Operating systems

SQLite is included by default in:[^12]

- [Android](https://en.wikipedia.org/wiki/Android_\(operating_system\) "Android (operating system)")
- [BlackBerry 10](https://en.wikipedia.org/wiki/BlackBerry_10 "BlackBerry 10") OS
- [Fedora Linux](https://en.wikipedia.org/wiki/Fedora_Linux "Fedora Linux") where it is used by the [rpm](https://en.wikipedia.org/wiki/RPM_Package_Manager "RPM Package Manager") core package management system
- [FreeBSD](https://en.wikipedia.org/wiki/FreeBSD "FreeBSD") where starting with 10-RELEASE version in January 2014, it is used by the core package management system.
- [illumos](https://en.wikipedia.org/wiki/Illumos "Illumos")
- [iOS](https://en.wikipedia.org/wiki/IOS "IOS")
- [Mac OS X 10.4](https://en.wikipedia.org/wiki/Mac_OS_X_10.4 "Mac OS X 10.4") onwards (Apple adopted it as an option in [macOS](https://en.wikipedia.org/wiki/MacOS "MacOS") 's [Core Data](https://en.wikipedia.org/wiki/Core_Data "Core Data") API from the original implementation)
- [Maemo](https://en.wikipedia.org/wiki/Maemo "Maemo")
- [MeeGo](https://en.wikipedia.org/wiki/MeeGo "MeeGo")
- [MorphOS](https://en.wikipedia.org/wiki/MorphOS "MorphOS") 3.10 onwards
- [NetBSD](https://en.wikipedia.org/wiki/NetBSD "NetBSD")
- [NixOS](https://en.wikipedia.org/wiki/NixOS "NixOS") where it is used by the [Nix](https://en.wikipedia.org/wiki/Nix_\(package_manager\) "Nix (package manager)") core package management system
- [Red Hat Enterprise Linux](https://en.wikipedia.org/wiki/Red_Hat_Enterprise_Linux "Red Hat Enterprise Linux") where it is used in the same way as Fedora, from which Red Hat Enterprise Linux is derived
- [Solaris 10](https://en.wikipedia.org/wiki/Solaris_10 "Solaris 10") where the [Service Management Facility](https://en.wikipedia.org/wiki/Service_Management_Facility "Service Management Facility") database is serialized for booting.
- [Symbian OS](https://en.wikipedia.org/wiki/Symbian_OS "Symbian OS")
- [Tizen](https://en.wikipedia.org/wiki/Tizen "Tizen")
- [webOS](https://en.wikipedia.org/wiki/WebOS "WebOS")
- [Windows 10](https://en.wikipedia.org/wiki/Windows_10 "Windows 10") onwards [^45]

### Middleware

- [ADO.NET](https://en.wikipedia.org/wiki/ADO.NET "ADO.NET") adapter, initially developed by Robert Simpson, is maintained jointly with the SQLite developers since April 2010.[^46]
- [ODBC](https://en.wikipedia.org/wiki/ODBC "ODBC") driver has been developed and is maintained separately by Christian Werner.[^47] Werner's ODBC driver is the recommended connection method for accessing SQLite from [OpenOffice.org](https://en.wikipedia.org/wiki/OpenOffice.org "OpenOffice.org").[^48]
- [COM](https://en.wikipedia.org/wiki/Component_Object_Model "Component Object Model") ([ActiveX](https://en.wikipedia.org/wiki/ActiveX "ActiveX")) wrapper making SQLite accessible on Windows to scripted languages such as [JScript](https://en.wikipedia.org/wiki/JScript "JScript") and [VBScript](https://en.wikipedia.org/wiki/VBScript "VBScript"). This adds SQLite database capabilities to [HTML Applications](https://en.wikipedia.org/wiki/HTML_Application "HTML Application") (HTA).[^49]

### Web browsers

- The browsers [Google Chrome](https://en.wikipedia.org/wiki/Google_Chrome "Google Chrome"), [Opera](https://en.wikipedia.org/wiki/Opera_\(web_browser\) "Opera (web browser)"), [Safari](https://en.wikipedia.org/wiki/Safari_\(web_browser\) "Safari (web browser)") and the [Android Browser](https://en.wikipedia.org/wiki/Android_Browser "Android Browser") all allow for storing information in, and retrieving it from, an SQLite database within the browser, using the official SQLite Wasm ([WebAssembly](https://en.wikipedia.org/wiki/WebAssembly "WebAssembly")) build,[^50] or using the [Web SQL Database](https://en.wikipedia.org/wiki/Web_SQL_Database "Web SQL Database") technology, although the latter is becoming deprecated (namely superseded by SQLite Wasm or by [IndexedDB](https://en.wikipedia.org/wiki/IndexedDB "IndexedDB")). Internally, these [Chromium](https://en.wikipedia.org/wiki/Chromium_\(web_browser\) "Chromium (web browser)") based browsers use SQLite databases for storing configuration data like site visit history, cookies, download history etc.[^51]
- [Mozilla Firefox](https://en.wikipedia.org/wiki/Mozilla_Firefox "Mozilla Firefox") and [Mozilla Thunderbird](https://en.wikipedia.org/wiki/Mozilla_Thunderbird "Mozilla Thunderbird") store a variety of configuration data (bookmarks, cookies, contacts etc.) in internally managed SQLite databases. Until Firefox version 57 (["Firefox Quantum"](https://en.wikipedia.org/wiki/History_of_Firefox#Firefox_57 "History of Firefox")), there was a third-party add-on that used the API supporting this functionality to provide a user interface for managing arbitrary SQLite databases.[^52]
- Several third-party add-ons can make use of [JavaScript](https://en.wikipedia.org/wiki/JavaScript "JavaScript") APIs to manage SQLite databases.[^53] [^54]
- [Symfony](https://en.wikipedia.org/wiki/Symfony "Symfony")
- [Laravel](https://en.wikipedia.org/wiki/Laravel "Laravel")
- [Bugzilla](https://en.wikipedia.org/wiki/Bugzilla "Bugzilla")
- [Django](https://en.wikipedia.org/wiki/Django_\(web_framework\) "Django (web framework)") 's default database management system
- [Drupal](https://en.wikipedia.org/wiki/Drupal "Drupal")
- [Trac](https://en.wikipedia.org/wiki/Trac "Trac")
- [Ruby on Rails](https://en.wikipedia.org/wiki/Ruby_on_Rails "Ruby on Rails") 's default database management system
- [web2py](https://en.wikipedia.org/wiki/Web2py "Web2py")
- [Jam.py](https://en.wikipedia.org/wiki/Jam.py_\(web_framework\) "Jam.py (web framework)")

### Others

- [Adobe Systems](https://en.wikipedia.org/wiki/Adobe_Systems "Adobe Systems") uses SQLite as its file format in [Adobe Lightroom](https://en.wikipedia.org/wiki/Adobe_Lightroom "Adobe Lightroom"), a standard database in [Adobe AIR](https://en.wikipedia.org/wiki/Adobe_AIR "Adobe AIR"), and internally within [Adobe Reader](https://en.wikipedia.org/wiki/Adobe_Reader "Adobe Reader").[^12]
- [Apple Photos](https://en.wikipedia.org/wiki/Photos_\(Apple\) "Photos (Apple)") uses SQLite internally.[^55]
- [Audacity](https://en.wikipedia.org/wiki/Audacity_\(audio_editor\) "Audacity (audio editor)") uses SQLite as its file format, as of version 3.0.0.[^56]
- [Evernote](https://en.wikipedia.org/wiki/Evernote "Evernote") uses SQLite to store its local database repository in Windows.
- [Skype](https://en.wikipedia.org/wiki/Skype "Skype") [^57]
- The Service Management Facility, used for service management within the [Solaris](https://en.wikipedia.org/wiki/Solaris_\(operating_system\) "Solaris (operating system)") and [OpenSolaris](https://en.wikipedia.org/wiki/OpenSolaris "OpenSolaris") operating systems
- [Flame (malware)](https://en.wikipedia.org/wiki/Flame_\(malware\) "Flame (malware)")
- [BMW](https://en.wikipedia.org/wiki/BMW "BMW") [IDrive](https://en.wikipedia.org/wiki/IDrive "IDrive") Sat Nav system
- [TomTom](https://en.wikipedia.org/wiki/TomTom "TomTom") GPS systems, for the [NDS](https://en.wikipedia.org/wiki/Navigation_Data_Standard "Navigation Data Standard") map data
- [Proxmox VE](https://en.wikipedia.org/wiki/Proxmox_Virtual_Environment "Proxmox Virtual Environment") - *Proxmox Cluster File System* ([pmxcfs](https://pve.proxmox.com/wiki/Proxmox_Cluster_File_System_\(pmxcfs\)))
- [Bentley Systems](https://en.wikipedia.org/wiki/Bentley_Systems "Bentley Systems") MicroStation [^12]
- [Bosch](https://en.wikipedia.org/wiki/Bosch_\(company\) "Bosch (company)") car multimedia systems [^12]
- [Airbus A350](https://en.wikipedia.org/wiki/Airbus_A350 "Airbus A350") flight system [^12]

## See also

- [Comparison of relational database management systems](https://en.wikipedia.org/wiki/Comparison_of_relational_database_management_systems "Comparison of relational database management systems")
- [List of relational database management systems](https://en.wikipedia.org/wiki/List_of_relational_database_management_systems "List of relational database management systems")
- [MySQL](https://en.wikipedia.org/wiki/MySQL "MySQL")
- [SpatiaLite](https://en.wikipedia.org/wiki/SpatiaLite "SpatiaLite")

## References

### Citations

### Sources

## External links

- [Official website](https://sqlite.org/)
- ["The Untold Story of SQLite"](https://corecursive.com/066-sqlite-with-richard-hipp/). CoRecursive.

[^1]: ["SQLite Release 3.49.2 On 2025-05-07"](https://sqlite.org/releaselog/3_49_2.html). 7 May 2025. Retrieved 7 May 2025.

[^2]: ["SQLite database file format media type at IANA"](https://www.iana.org/assignments/media-types/application/vnd.sqlite3). *[Internet Assigned Numbers Authority](https://en.wikipedia.org/wiki/Internet_Assigned_Numbers_Authority "Internet Assigned Numbers Authority")*. [IANA](https://en.wikipedia.org/wiki/Internet_Assigned_Numbers_Authority "Internet Assigned Numbers Authority"). Retrieved 2019-03-08.

[^3]: ["Why SQLite succeeded as a database — Richard Hipp, creator of SQLite"](https://changelog.com/podcast/201). *The Changelog*. Episode 201. Event occurs at 00:16:00. [Archived](https://web.archive.org/web/20220707033506/https://changelog.com/podcast/201) from the original on 2022-07-07. Retrieved 2025-04-11. How do I pronounce the name of the product? I say S-Q-L-ite, like a mineral.

[^4]: [D. Richard Hipp](https://en.wikipedia.org/wiki/D._Richard_Hipp "D. Richard Hipp") (presenter) (May 31, 2006). [*An Introduction to SQLite*](https://www.youtube.com/watch?v=f428dSRkTs4#t=1m14s) (video). Google Inc. Event occurs at 00:01:14. Retrieved March 23, 2010. \[ˌɛsˌkjuˌwəlˈaɪt̚\]

[^5]: [D. Richard Hipp](https://en.wikipedia.org/wiki/D._Richard_Hipp "D. Richard Hipp") (presenter) (May 31, 2006). [*An Introduction to SQLite*](https://www.youtube.com/watch?v=f428dSRkTs4#t=48m15s). Google Inc. Event occurs at 00:48:15. Retrieved March 23, 2010. \[ˈsikwəˌlaɪt̚\]

[^6]: ["Most Widely Deployed SQL Database Estimates"](https://sqlite.org/mostdeployed.html). SQLite.org. Retrieved May 11, 2011.

[^7]: Owens, Michael (2006). ["Chapter 4: SQL"](https://books.google.com/books?id=VsZ5bUh0XAkC&pg=PA133). In Gilmore, Jason; [Thomas, Keir](https://en.wikipedia.org/wiki/Keir_Thomas "Keir Thomas") (eds.). *The Definitive Guide to SQLite*. [D. Richard Hipp](https://en.wikipedia.org/wiki/D._Richard_Hipp "D. Richard Hipp") (foreword), Preston Hagar (technical reviewer). [Apress](https://en.wikipedia.org/wiki/Apress "Apress"). p. 133. [ISBN](https://en.wikipedia.org/wiki/ISBN_\(identifier\) "ISBN (identifier)") [978-1-59059-673-9](https://en.wikipedia.org/wiki/Special:BookSources/978-1-59059-673-9 "Special:BookSources/978-1-59059-673-9"). [Archived](https://web.archive.org/web/20201124002058/https://books.google.com/books?id=VsZ5bUh0XAkC&pg=PA133) from the original on 24 November 2020. Retrieved 30 December 2014.

[^8]: ["STRICT Tables"](https://sqlite.org/stricttables.html). [Archived](https://web.archive.org/web/20220807204905/https://sqlite.org/stricttables.html) from the original on 2022-08-07. Retrieved 2022-08-11.

[^9]: ["Full-Featured SQL"](https://www.sqlite.org/fullsql.html). *SQLite*. Retrieved January 24, 2025.

[^10]: ["SQL Features That SQLite Does Not Implement"](https://www.sqlite.org/omitted.html). *SQLite*. Retrieved January 24, 2025.

[^11]: Owens, Michael (2006). "Introducing SQLite". *The Definitive Guide to SQLite*. [Apress](https://en.wikipedia.org/wiki/Apress "Apress"). [doi](https://en.wikipedia.org/wiki/Doi_\(identifier\) "Doi (identifier)"):[10.1007/978-1-4302-0172-4\_1](https://doi.org/10.1007%2F978-1-4302-0172-4_1). [ISBN](https://en.wikipedia.org/wiki/ISBN_\(identifier\) "ISBN (identifier)") [978-1-59059-673-9](https://en.wikipedia.org/wiki/Special:BookSources/978-1-59059-673-9 "Special:BookSources/978-1-59059-673-9").

[^12]: ["Well-Known Users Of SQLite"](https://sqlite.org/famous.html). SQLite. [Archived](https://web.archive.org/web/20150711135311/https://sqlite.org/famous.html) from the original on July 11, 2015. Retrieved August 5, 2015.

[^13]: ["Interview: Richard Hipp on UnQL, a New Query Language for Document Databases"](http://www.infoq.com/news/2011/08/UnQL). InfoQ. August 4, 2011. [Archived](https://web.archive.org/web/20140408215240/http://www.infoq.com/news/2011/08/UnQL) from the original on April 8, 2014. Retrieved October 5, 2011.

[^14]: Hipp, D. Richard. ["Code of Ethics"](https://sqlite.org/codeofethics.html). *SQLite*. Retrieved January 24, 2025.

[^15]: McCarthy, Kieren. ["SQLite creator crucified after code of conduct warns devs to love God, and not kill, commit adultery, steal, curse..."](https://www.theregister.com/2018/10/22/sqlite_code_of_conduct/) *www.theregister.com*. [Archived](https://web.archive.org/web/20221117120853/https://www.theregister.com/2018/10/22/sqlite_code_of_conduct/) from the original on 2022-11-17. Retrieved 2022-11-17.

[^16]: ["LoC Recommended Storage Format"](https://sqlite.org/locrsf.html). *sqlite.org*. [Archived](https://web.archive.org/web/20200423212849/https://sqlite.org/locrsf.html) from the original on 2020-04-23. Retrieved 2020-04-09.

[^17]: ["SQLite, Version 3"](https://www.loc.gov/preservation/digital/formats/fdd/fdd000461.shtml). *www.loc.gov*. 2017-03-28. [Archived](https://web.archive.org/web/20200511194518/https://www.loc.gov/preservation/digital/formats/fdd/fdd000461.shtml) from the original on 2020-05-11. Retrieved 2020-04-09.

[^18]: ["Recommended Formats Statement – datasets/databases"](https://www.loc.gov/preservation/resources/rfs/data.html). Library of Congress. [Archived](https://web.archive.org/web/20180822113435/https://www.loc.gov/preservation/resources/rfs/data.html) from the original on 2018-08-22. Retrieved 2020-04-09.

[^19]: ["SQLite Is A Zero-Configuration Database"](https://sqlite.org/zeroconf.html). SQLite.org. [Archived](https://web.archive.org/web/20240502210736/https://sqlite.org/zeroconf.html) from the original on May 2, 2024. Retrieved August 3, 2015.

[^20]: ["SQLite"](https://clickhouse.com/docs/en/engines/database-engines/sqlite). *ClickHouse Docs*. Retrieved January 25, 2025.

[^21]: ["Write Ahead Logging in SQLite 3.7"](https://sqlite.org/wal.html). SQLite.org. [Archived](https://web.archive.org/web/20240502210711/https://sqlite.org/wal.html) from the original on May 2, 2024. Retrieved September 3, 2011. WAL provides more concurrency as readers do not block writers and a writer does not block readers. Reading and writing can proceed concurrently.

[^22]: ["Appropriate Uses For SQLite"](https://sqlite.org/whentouse.html). SQLite.org. [Archived](https://web.archive.org/web/20240502210713/https://sqlite.org/whentouse.html) from the original on 2024-05-02. Retrieved 2015-09-03.

[^23]: ["PGCon 2014: Clustering and VODKA"](https://lwn.net/Articles/601144/). *Lwn.net*. [Archived](https://web.archive.org/web/20150629195442/https://lwn.net/Articles/601144/) from the original on 2015-06-29. Retrieved 2017-01-06.

[^24]: ["PGCon2014: SQLite: Protégé of PostgreSQL"](https://www.pgcon.org/2014/schedule/events/736.en.html). *Pgcon.org*. 20 September 2015. [Archived](https://web.archive.org/web/20141230193958/http://www.pgcon.org/2014/schedule/events/736.en.html) from the original on 2014-12-30. Retrieved 2017-01-06.

[^25]: ["SQLite: StrictMode"](https://sqlite.org/src/wiki?name=StrictMode). *Sqlite.org*. [Archived](https://web.archive.org/web/20160304115940/https://sqlite.org/src/wiki?name=StrictMode) from the original on March 4, 2016. Retrieved September 3, 2015.

[^26]: ["Release History of SQLite"](https://sqlite.org/changes.html). [Archived](https://web.archive.org/web/20210316043517/https://sqlite.org/changes.html) from the original on 2021-03-16. Retrieved 2021-03-22.

[^27]: ["STRICT Tables"](https://sqlite.org/stricttables.html). *SQLite*. Retrieved January 24, 2025.

[^28]: ["SQL As Understood By SQLite"](https://sqlite.org/lang_createtable.html#rowid). *SQLite*. [Archived](https://web.archive.org/web/20180521104530/https://sqlite.org/lang_createtable.html#rowid) from the original on 21 May 2018. Retrieved 21 May 2018. Searching for a record with a specific rowid, or for all records with rowids within a specified range is around twice as fast as a similar search made by specifying any other PRIMARY KEY or indexed value.

[^29]: ["Clustered Indexes and the WITHOUT ROWID Optimization"](https://sqlite.org/withoutrowid.html). *SQLite*. Retrieved January 24, 2025.

[^30]: Karwin, Bill (May 2010). Carter, Jacquelyn (ed.). *SQL Antipatterns: Avoiding the Pitfalls of Database Programming*. The Pragmatic Bookshelf. p. 70. [ISBN](https://en.wikipedia.org/wiki/ISBN_\(identifier\) "ISBN (identifier)") [978-1-934356-55-5](https://en.wikipedia.org/wiki/Special:BookSources/978-1-934356-55-5 "Special:BookSources/978-1-934356-55-5"). Sometimes you're forced to use a database brand that doesn't support foreign key constraints (for example MySQL's MyISAM storage engine or SQLite prior to version 3.6.19).

[^31]: ["SQLite Release 3.6.19 On 2009-10-14"](https://sqlite.org/releaselog/3_6_19.html). *sqlite.org*. [Archived](https://web.archive.org/web/20201029060401/http://sqlite.org/releaselog/3_6_19.html) from the original on 2020-10-29. Retrieved 2020-10-15.

[^32]: ["SQLite Foreign Key Support"](https://sqlite.org/foreignkeys.html). *SQLite*. Retrieved January 24, 2025.

[^33]: Source: developers' comments on [SQLite forum](https://sqlite.org/forum/info/78a60bdeec7c1ee9) [Archived](https://web.archive.org/web/20230401220416/https://sqlite.org/forum/info/78a60bdeec7c1ee9) 2023-04-01 at the [Wayback Machine](https://en.wikipedia.org/wiki/Wayback_Machine "Wayback Machine")

[^34]: ["Quirks, Caveats, and Gotchas In SQLite"](https://sqlite.org/quirks.html). *SQLite*. Retrieved January 24, 2025.

[^35]: ["Case-insensitive matching of Unicode characters does not work"](https://sqlite.org/faq.html#q18). *SQLite Frequently Asked Questions*. [Archived](https://web.archive.org/web/20150905054749/https://sqlite.org/faq.html#q18) from the original on 2015-09-05. Retrieved 2015-09-03.

[^36]: ["SQLite FTS5 Extension"](https://sqlite.org/fts5.html). *SQLite*. Retrieved January 24, 2025.

[^37]: ["JSON Functions And Operators"](https://sqlite.org/json1.html). *SQLite*. Retrieved January 24, 2025.

[^38]: ["Limits In SQLite"](https://sqlite.org/limits.html). *SQLite.org*. [Archived](https://web.archive.org/web/20211107064937/https://sqlite.org/limits.html) from the original on 2021-11-07. Retrieved 2022-09-19.

[^39]: ["Thoughts On The Design Of The Fossil DVCS"](https://www.fossil-scm.org/home/doc/trunk/www/theory1.wiki). Fossil-scm.org. July 12, 2017. [Archived](https://web.archive.org/web/20221013234319/https://www.fossil-scm.org/home/doc/trunk/www/theory1.wiki) from the original on October 13, 2022. Retrieved October 14, 2022.

[^40]: ["Fossil: Fossil Performance"](https://www.fossil-scm.org/index.html/doc/tip/www/stats.wiki). Fossil-scm.org. August 23, 2009. [Archived](https://web.archive.org/web/20091009054952/http://www.fossil-scm.org/index.html/doc/tip/www/stats.wiki) from the original on October 9, 2009. Retrieved September 12, 2009.

[^41]: ["SQLite Copyright"](https://sqlite.org/copyright.html). *sqlite.org*. [Archived](https://web.archive.org/web/20240315172355/https://sqlite.org/copyright.html) from the original on 2024-03-15. Retrieved 2024-03-06.

[^42]: ["Code Of Ethics"](https://sqlite.org/codeofethics.html). *sqlite.org*. [Archived](https://web.archive.org/web/20240219225117/https://sqlite.org/codeofethics.html) from the original on 2024-02-19. Retrieved 2024-03-06.

[^43]: ["Command Line Shell For SQLite"](https://sqlite.org/cli.html). Sqlite.org. [Archived](https://web.archive.org/web/20221006104551/https://sqlite.org/cli.html) from the original on October 6, 2022. Retrieved October 14, 2022.

[^44]: ["How SQLite Is Tested"](https://sqlite.org/testing.html). SQLite.org. [Archived](https://web.archive.org/web/20091006224147/https://sqlite.org/testing.html) from the original on October 6, 2009. Retrieved September 12, 2009.

[^45]: ["To use the version of SQLite that is installed with Windows"](https://docs.microsoft.com/en-us/windows/uwp/data-access/sqlite-databases#to-use-the-version-of-sqlite-that-is-installed-with-windows). 20 October 2022. [Archived](https://web.archive.org/web/20220331170828/https://docs.microsoft.com/en-us/windows/uwp/data-access/sqlite-databases#to-use-the-version-of-sqlite-that-is-installed-with-windows) from the original on 31 March 2022. Retrieved 31 March 2022.

[^46]: ["Home"](http://system.data.sqlite.org/index.html/doc/trunk/www/index.wiki). *System.Data.SQLite*. 2016-12-30. [Archived](https://web.archive.org/web/20140713080835/http://system.data.sqlite.org/index.html/doc/trunk/www/index.wiki) from the original on 2014-07-13. Retrieved 2017-01-06.

[^47]: ["SQLite ODBC Driver"](http://www.ch-werner.de/sqliteodbc/). *Ch-werner.de*. 2016-12-01. [Archived](https://web.archive.org/web/20140626165719/http://www.ch-werner.de/sqliteodbc/) from the original on 2014-06-26. Retrieved 2017-01-06.

[^48]: ["Using SQLite Database with OpenOffice.org: Version 2.0"](http://documentation.openoffice.org/HOW_TO/data_source/SQLite.pdf) (PDF). *Documentation.openoffice.org*. [Archived](https://web.archive.org/web/20110928073029/http://documentation.openoffice.org/HOW_TO/data_source/SQLite.pdf) (PDF) from the original on 2011-09-28. Retrieved 2017-01-06.

[^49]: ["sqlite — Sqlite Wrappers"](https://sqlite.org/cvstrac/wiki?p=SqliteWrappers). SQLite.org. February 7, 2009. [Archived](https://web.archive.org/web/20090205225756/http://sqlite.org/cvstrac/wiki?p=SqliteWrappers) from the original on February 5, 2009. Retrieved February 7, 2009.

[^50]: ["sqlite3 WebAssembly & JavaScript Documentation Index"](https://sqlite.org/wasm). *SQLite*. [Archived](https://web.archive.org/web/20240502210710/https://sqlite.org/wasm/doc/trunk/index.md) from the original on 2024-05-02. Retrieved 2023-05-08.

[^51]: ["Location of Google Chrome history"](https://www.foxtonforensics.com/browser-history-examiner/chrome-history-location). *www.foxtonforensics.com*. 2020-10-06. [Archived](https://web.archive.org/web/20230228184524/https://www.foxtonforensics.com/browser-history-examiner/chrome-history-location) from the original on 2023-02-28. Retrieved 2020-10-06.

[^52]: ["SQLite Manager:: Add-ons for Firefox"](https://web.archive.org/web/20170102010658/https://addons.mozilla.org/en-US/firefox/addon/sqlite-manager/). *Addons.mozilla.org*. 2015-02-28. Archived from [the original](https://addons.mozilla.org/en-US/firefox/addon/sqlite-manager/) on 2017-01-02. Retrieved 2017-01-06.

[^53]: ["SQLite Manager – Get this Extension for 🦊 Firefox (en-US)"](https://addons.mozilla.org/en-US/firefox/addon/sqlite-manager-webext/). *Addons.mozilla.org*. 2018-07-24. [Archived](https://web.archive.org/web/20181005112443/https://addons.mozilla.org/en-US/firefox/addon/sqlite-manager-webext/) from the original on 2018-10-05. Retrieved 2018-10-05.

[^54]: ["SQLite Reader – Get this Extension for 🦊 Firefox (en-US)"](https://addons.mozilla.org/en-US/firefox/addon/sql-reader/). *Addons.mozilla.org*. 2018-09-01. [Archived](https://web.archive.org/web/20181005112536/https://addons.mozilla.org/en-US/firefox/addon/sql-reader/) from the original on 2018-10-05. Retrieved 2018-10-05.

[^55]: ["Using SQL to find my best photo of a pelican according to Apple Photo"](https://simonwillison.net/2020/May/21/dogsheep-photos/). *Simon Willison’s Weblog*. [Archived](https://web.archive.org/web/20200522181550/https://simonwillison.net/2020/May/21/dogsheep-photos/) from the original on May 22, 2020. Retrieved May 23, 2020.

[^56]: ["Audacity 3.0.0 Released"](https://web.archive.org/web/20230814021313/https://www.audacityteam.org/audacity-3-0-0-released/). 17 March 2021. Archived from [the original](https://www.audacityteam.org/audacity-3-0-0-released/) on 14 August 2023. Retrieved March 17, 2021.

[^57]: Hinegardner, Jeremy (August 28, 2007). ["Skype client using SQLite?"](https://web.archive.org/web/20071117061133/https://www.mail-archive.com/sqlite-users%40sqlite.org/msg27326.html). *sqlite-users* (Mailing list). Archived from [the original](https://www.mail-archive.com/sqlite-users%40sqlite.org/msg27326.html) on 2007-11-17. Retrieved June 14, 2010.