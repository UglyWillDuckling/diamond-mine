---
author:
  - "[[Wayne Davison]]"
source: https://en.wikipedia.org/wiki/Rsync
published: 2002-11-12
created: 2025-02-15
tags:
  - tool/cli
  - tool/syncing
release date: 1996-06-19
---
From Wikipedia, the free encyclopedia

File synchronization protocol and software

<table><caption>rsync</caption><tbody><tr><td colspan="2"><span><a href="https://en.wikipedia.org/wiki/File:Newrsynclogo.png"><img src="https://upload.wikimedia.org/wikipedia/en/thumb/1/11/Newrsynclogo.png/220px-Newrsynclogo.png" width="220" height="107"></a></span></td></tr><tr><th scope="row"><a href="https://en.wikipedia.org/wiki/Programmer">Original author(s)</a></th><td><a href="https://en.wikipedia.org/wiki/Andrew_Tridgell">Andrew Tridgell</a>, <a href="https://en.wikipedia.org/w/index.php?title=Paul_Mackerras&amp;action=edit&amp;redlink=1">Paul Mackerras</a><sup><a href="https://en.wikipedia.org/wiki/#cite_note-rsyncrel-1"><span>[</span>1<span>]</span></a></sup></td></tr><tr><th scope="row"><a href="https://en.wikipedia.org/wiki/Programmer">Developer(s)</a></th><td>Wayne Davison<sup><a href="https://en.wikipedia.org/wiki/#cite_note-rsync-website-2"><span>[</span>2<span>]</span></a></sup></td></tr><tr><th scope="row">Initial release</th><td>June&nbsp;19, 1996<span>; 28 years ago</span><span>&nbsp;(<span>1996-06-19</span>)</span><sup><a href="https://en.wikipedia.org/wiki/#cite_note-rsyncrel-1"><span>[</span>1<span>]</span></a></sup></td></tr><tr><td colspan="2"></td></tr><tr><th scope="row"><a href="https://en.wikipedia.org/wiki/Software_release_life_cycle">Stable release</a></th><td><p>3.4.1<sup><a href="https://en.wikipedia.org/wiki/#cite_note-wikidata-31f5fb2f46c9c559a9538aff4eb88dbc83acd65a-v18-3"><span>[</span>3<span>]</span></a></sup>&nbsp;<span><a href="https://www.wikidata.org/wiki/Q283774?uselang=en#P348"><img src="https://upload.wikimedia.org/wikipedia/en/thumb/8/8a/OOjs_UI_icon_edit-ltr-progressive.svg/10px-OOjs_UI_icon_edit-ltr-progressive.svg.png" width="10" height="10"></a></span> / 15 January 2025<span>; 31 days ago</span><span>&nbsp;(<span>15 January 2025</span>)</span></p></td></tr><tr><td colspan="2"></td></tr><tr><th scope="row"><a href="https://en.wikipedia.org/wiki/Repository_(version_control)">Repository</a></th><td><div><ul><li><span><a href="https://github.com/RsyncProject/rsync">github<wbr>.com<wbr>/RsyncProject<wbr>/rsync</a></span> <span><a href="https://www.wikidata.org/wiki/Q283774#P1324"><img src="https://upload.wikimedia.org/wikipedia/en/thumb/8/8a/OOjs_UI_icon_edit-ltr-progressive.svg/10px-OOjs_UI_icon_edit-ltr-progressive.svg.png" width="10" height="10"></a></span></li></ul></div></td></tr><tr><th scope="row">Written in</th><td><a href="https://en.wikipedia.org/wiki/C_(programming_language)">C</a></td></tr><tr><th scope="row"><a href="https://en.wikipedia.org/wiki/Computing_platform">Platform</a></th><td><a href="https://en.wikipedia.org/wiki/Cross-platform_software">Cross-platform</a></td></tr><tr><th scope="row"><a href="https://en.wikipedia.org/wiki/Software_categories#Categorization_approaches">Type</a></th><td><a href="https://en.wikipedia.org/wiki/Data_transfer">Data transfer</a>, <a href="https://en.wikipedia.org/wiki/Differential_backup">differential backup</a></td></tr><tr><th scope="row"><a href="https://en.wikipedia.org/wiki/Software_license">License</a></th><td>2007: <a href="https://en.wikipedia.org/wiki/GNU_General_Public_License">GPL-3.0-or-later</a><sup><a href="https://en.wikipedia.org/wiki/#cite_note-4"><span>[</span>a<span>]</span></a></sup><sup><a href="https://en.wikipedia.org/wiki/#cite_note-NEWS-5"><span>[</span>4<span>]</span></a></sup><sup><a href="https://en.wikipedia.org/wiki/#cite_note-GPL-3.0-or-later-6"><span>[</span>5<span>]</span></a></sup><sup><a href="https://en.wikipedia.org/wiki/#cite_note-GPL.html-7"><span>[</span>6<span>]</span></a></sup><br>2007: <a href="https://en.wikipedia.org/wiki/GNU_General_Public_License">GPL-3.0-only</a><sup><a href="https://en.wikipedia.org/wiki/#cite_note-8"><span>[</span>b<span>]</span></a></sup><br>2007: <a href="https://en.wikipedia.org/wiki/GNU_General_Public_License">GPL-2.0-only</a><sup><a href="https://en.wikipedia.org/wiki/#cite_note-9"><span>[</span>c<span>]</span></a></sup><br>1996: <a href="https://en.wikipedia.org/wiki/GNU_General_Public_License">GPL-2.0-or-later</a><sup><a href="https://en.wikipedia.org/wiki/#cite_note-10"><span>[</span>d<span>]</span></a></sup><sup><a href="https://en.wikipedia.org/wiki/#cite_note-GPL2.html-11"><span>[</span>7<span>]</span></a></sup></td></tr><tr><th scope="row">Website</th><td><span><a href="https://rsync.samba.org/">rsync<wbr>.samba<wbr>.org</a></span>&nbsp;<span><span><a href="https://www.wikidata.org/wiki/Q283774?uselang=en#P856"><img src="https://upload.wikimedia.org/wikipedia/en/thumb/8/8a/OOjs_UI_icon_edit-ltr-progressive.svg/10px-OOjs_UI_icon_edit-ltr-progressive.svg.png" width="10" height="10"></a></span></span></td></tr></tbody></table>

**rsync** (remote sync) is a utility for [transferring](https://en.wikipedia.org/wiki/File_transfer "File transfer") and [synchronizing](https://en.wikipedia.org/wiki/File_synchronization "File synchronization") [files](https://en.wikipedia.org/wiki/Computer_file "Computer file") between a computer and a storage drive and across [networked](https://en.wikipedia.org/wiki/Computer_network "Computer network") [computers](https://en.wikipedia.org/wiki/Computer "Computer") by comparing the [modification times](https://en.wikipedia.org/wiki/Timestamping_\(computing\) "Timestamping (computing)") and sizes of files.[^man_page-12] It is commonly found on [Unix-like](https://en.wikipedia.org/wiki/Unix-like "Unix-like") [operating systems](https://en.wikipedia.org/wiki/Operating_system "Operating system") and is under the [GPL-3.0-or-later](https://en.wikipedia.org/wiki/GNU_General_Public_License "GNU General Public License") license.[^news-5][^gpl-3.0-or-later-6][^sayood-13][^14][^15][^16]

rsync is written in [C](https://en.wikipedia.org/wiki/C_\(programming_language\) "C (programming language)") as a single-[threaded](https://en.wikipedia.org/wiki/Thread_\(computing\) "Thread (computing)") application.[^17] The rsync algorithm is a type of [delta encoding](https://en.wikipedia.org/wiki/Delta_encoding "Delta encoding"), and is used for minimizing network usage. [Zstandard](https://en.wikipedia.org/wiki/Zstd "Zstd"), [LZ4](https://en.wikipedia.org/wiki/LZ4_\(compression_algorithm\) "LZ4 (compression algorithm)"), or [Zlib](https://en.wikipedia.org/wiki/Zlib "Zlib") may be used for additional [data compression](https://en.wikipedia.org/wiki/Data_compression "Data compression"),[^man_page-12] and [SSH](https://en.wikipedia.org/wiki/Secure_Shell "Secure Shell") or [stunnel](https://en.wikipedia.org/wiki/Stunnel "Stunnel") can be used for security.

rsync is typically used for synchronizing files and directories between two different systems. For example, if the command `rsync local-file user@remote-host:remote-file` is run, rsync will use SSH to connect as `user` to `remote-host`.[^18] Once connected, it will invoke the remote host's rsync and then the two programs will determine what parts of the local file need to be transferred so that the remote file matches the local one. One application of rsync is the synchronization of [software repositories](https://en.wikipedia.org/wiki/Software_repository "Software repository") on [mirror sites](https://en.wikipedia.org/wiki/Mirror_site "Mirror site") used by [package management systems](https://en.wikipedia.org/wiki/Package_manager "Package manager").[^19][^20]

rsync can also operate in a [daemon](https://en.wikipedia.org/wiki/Daemon_\(computing\) "Daemon (computing)") mode (rsyncd), serving and receiving files in the native rsync protocol (using the `rsync://` syntax).

[Andrew Tridgell](https://en.wikipedia.org/wiki/Andrew_Tridgell "Andrew Tridgell") and Paul Mackerras wrote the original rsync, which was first announced on 19 June 1996.[^rsyncrel-1] It is similar in function and invocation to **rdist** (`rdist -c`), created by Ralph Campbell in 1983 and released as part of [4.3BSD](https://en.wikipedia.org/wiki/4.3BSD "4.3BSD").[^rdistrel-21] Tridgell discusses the design, implementation, and performance of rsync in chapters 3 through 5 of his 1999 [Ph.D.](https://en.wikipedia.org/wiki/Doctor_of_Philosophy "Doctor of Philosophy") thesis.[^22] As of 2023<sup class="plainlinks noexcerpt noprint asof-tag ref"><a rel="nofollow" class="external text" href="https://rsync.samba.org/">[ref]</a></sup>, it is maintained by Wayne Davison.[^rsync-website-2]

> [!info]
> Because of its flexibility, speed, and scriptability, `rsync` has become a standard Linux utility, included in all popular Linux distributions.<sup class="noprint Inline-Template Template-Fact">[<i><a href="https://en.wikipedia.org/wiki/Wikipedia:Citation_needed" title="Wikipedia:Citation needed"><span title="This claim needs references to reliable sources. (February 2022)">citation needed</span></a></i>]</sup> It has been ported to Windows (via [Cygwin](https://en.wikipedia.org/wiki/Cygwin "Cygwin"), [Grsync](https://en.wikipedia.org/wiki/Grsync "Grsync"), or [SFU](https://en.wikipedia.org/wiki/Windows_Services_for_UNIX "Windows Services for UNIX")[^23]), [FreeBSD](https://en.wikipedia.org/wiki/FreeBSD "FreeBSD"),[^24] [NetBSD](https://en.wikipedia.org/wiki/NetBSD "NetBSD"),[^25] [OpenBSD](https://en.wikipedia.org/wiki/OpenBSD "OpenBSD"),[^26] and [macOS](https://en.wikipedia.org/wiki/MacOS "MacOS").

Similar to **[`cp`](https://en.wikipedia.org/wiki/Cp_\(Unix\) "Cp (Unix)")**, **[`rcp`](https://en.wikipedia.org/wiki/Rcp_\(Unix\) "Rcp (Unix)")** and **[`scp`](https://en.wikipedia.org/wiki/Secure_copy "Secure copy")**, **`rsync`** requires the specification of a source and a destination, of which **at least one must be local**.[^27]

Generic syntax:

```
rsync [OPTION] … SRC … [USER@]HOST:DEST
rsync [OPTION] … [USER@]HOST:SRC [DEST]
```

where SRC is the file or directory (or a list of multiple files and directories) to copy from, DEST is the file or directory to copy to, and square brackets indicate optional parameters.

`rsync` can synchronize Unix clients to a central Unix server using `rsync`/`ssh` and standard Unix accounts. It can be used in desktop environments, for example to efficiently synchronize files with a backup copy on an external hard drive. A scheduling utility such as `[cron](https://en.wikipedia.org/wiki/Cron "Cron")` can carry out tasks such as automated encrypted `rsync`\-based mirroring between multiple hosts and a central server.

A command line to mirror [FreeBSD](https://en.wikipedia.org/wiki/FreeBSD "FreeBSD") might look like:[^28]

```
$ rsync -avz --delete ftp4.de.FreeBSD.org::FreeBSD/ /pub/FreeBSD/
```

The [Apache HTTP Server](https://en.wikipedia.org/wiki/Apache_HTTP_Server "Apache HTTP Server") supports rsync only for updating mirrors.[^29]

```
$ rsync -avz --delete --safe-links rsync.apache.org::apache-dist /path/to/mirror
```

The preferred (and simplest) way to mirror a [PuTTY](https://en.wikipedia.org/wiki/PuTTY "PuTTY") website to the current directory is to use rsync.[^30]

```
$ rsync -auH rsync://rsync.chiark.greenend.org.uk/ftp/users/sgtatham/putty-website-mirror/ .
```

A way to mimic the capabilities of [Time Machine (macOS)](https://en.wikipedia.org/wiki/Time_Machine_\(macOS\) "Time Machine (macOS)");[^31]

```
$ date=$(date "+%FT%H-%M-%S") # rsync interprets ":" as separator between host and port (i.e. host:port), so we cannot use %T or %H:%M:%S here, so we use %H-%M-%S
$ rsync -aP --link-dest=$HOME/Backups/current /path/to/important_files $HOME/Backups/back-$date
$ ln -nfs $HOME/Backups/back-$date $HOME/Backups/current
```

Make a full backup of system root directory:[^32]

```
$ rsync -avAXHS --progress --exclude={"/dev/*","/proc/*","/sys/*","/tmp/*","/run/*","/mnt/*","/media/*","/lost+found"} / /path/to/backup/folder
```

Delete all files and directories, within a directory, extremely fast:

```
# Make an empty directory somewhere, which is the first path, and the second path is the directory you want to empty.
$ rsync -a --delete /path/to/empty/dir /path/to/dir/to/empty
```

An rsync process operates by communicating with another rsync process, a sender and a receiver. At startup, an rsync client connects to a peer process. If the transfer is local (that is, between file systems mounted on the same host) the peer can be created with fork, after setting up suitable pipes for the connection. If a remote host is involved, rsync starts a process to handle the connection, typically [Secure Shell](https://en.wikipedia.org/wiki/Secure_Shell "Secure Shell"). Upon connection, a command is issued to start an rsync process on the remote host, which uses the connection thus established. As an alternative, if the remote host runs an rsync daemon, rsync clients can connect by opening a socket on TCP port 873, possibly using a proxy.[^33]

Rsync has numerous command line options and configuration files to specify alternative shells, options, commands, possibly with full path, and port numbers. Besides using remote shells, tunnelling can be used to have remote ports appear as local on the server where an rsync daemon runs. Those possibilities allow adjusting security levels to the state of the art, while a naive rsync daemon can be enough for a local network.

One solution is the `[--dry-run](https://en.wikipedia.org/wiki/Dry_run_\(testing\) "Dry run (testing)")` option, which allows users to validate their [command-line arguments](https://en.wikipedia.org/wiki/Command-line_argument "Command-line argument") and to simulate what would happen when copying the data without actually making any changes or transferring any data.

### Determining which files to send

By default, rsync determines which files differ between the sending and receiving systems by checking the modification time and size of each file. If time or size is different between the systems, it transfers the file from the sending to the receiving system. As this only requires reading file directory information, it is quick, but it will miss unusual modifications which change neither.[^man_page-12]

Rsync performs a slower but comprehensive check if invoked with `--checksum`. This forces a full checksum comparison on every file present on both systems. Barring rare [checksum collisions](https://en.wikipedia.org/wiki/Hash_collision "Hash collision"), this avoids the risk of missing changed files at the cost of reading every file present on both systems.

### Determining which parts of a file have changed

The rsync utility uses an [algorithm](https://en.wikipedia.org/wiki/Algorithm "Algorithm") invented by Australian computer programmer [Andrew Tridgell](https://en.wikipedia.org/wiki/Andrew_Tridgell "Andrew Tridgell") for efficiently transmitting a structure (such as a file) across a communications link when the receiving computer already has a similar, but not identical, version of the same structure.[^34]

The recipient splits its copy of the file into chunks and computes two [checksums](https://en.wikipedia.org/wiki/Checksum "Checksum") for each chunk: the [MD5](https://en.wikipedia.org/wiki/MD5 "MD5") [hash](https://en.wikipedia.org/wiki/Hash_function "Hash function"), and a weaker but easier to compute '[rolling checksum](https://en.wikipedia.org/wiki/Rolling_hash "Rolling hash")'.[^35] It sends these checksums to the sender.

The sender computes the checksum for each rolling section in its version of the file having the same size as the chunks used by the recipient's. While the recipient calculates the checksum only for chunks starting at full multiples of the chunk size, the sender calculates the checksum for all sections starting at any address. If any such rolling checksum calculated by the sender matches a checksum calculated by the recipient, then this section is a candidate for not transmitting the content of the section, but only the location in the recipient's file instead. In this case, the sender uses the more computationally expensive MD5 hash to verify that the sender's section and recipient's chunk are equal. Note that the section in the sender may not be at the same start address as the chunk at the recipient. This allows efficient transmission of files which differ by insertions and deletions.[^36] The sender then sends the recipient those parts of its file that did not match, along with information on where to merge existing blocks into the recipient's version. This makes the copies identical.

The [rolling checksum](https://en.wikipedia.org/wiki/Rolling_hash "Rolling hash") used in rsync is based on Mark Adler's [adler-32](https://en.wikipedia.org/wiki/Adler-32 "Adler-32") checksum, which is used in [zlib](https://en.wikipedia.org/wiki/Zlib "Zlib"), and is itself based on [Fletcher's checksum](https://en.wikipedia.org/wiki/Fletcher%27s_checksum "Fletcher's checksum").

If the sender's and recipient's versions of the file have many sections in common, the utility needs to transfer relatively little data to synchronize the files. If typical [data compression](https://en.wikipedia.org/wiki/Data_compression "Data compression") algorithms are used, files that are similar when uncompressed may be very different when compressed, and thus the entire file will need to be transferred. Some compression programs, such as [gzip](https://en.wikipedia.org/wiki/Gzip "Gzip"), provide a special "rsyncable" mode which allows these files to be efficiently rsynced, by ensuring that local changes in the uncompressed file yield only local changes in the compressed file.

Rsync supports other key features that aid significantly in data transfers or backup. They include compression and decompression of data block by block using [Zstandard](https://en.wikipedia.org/wiki/Zstd "Zstd"), [LZ4](https://en.wikipedia.org/wiki/LZ4_\(compression_algorithm\) "LZ4 (compression algorithm)"), or [zlib](https://en.wikipedia.org/wiki/Zlib "Zlib"), and support for protocols such as [ssh](https://en.wikipedia.org/wiki/Secure_Shell "Secure Shell") and [stunnel](https://en.wikipedia.org/wiki/Stunnel "Stunnel").

The **rdiff** utility uses the rsync algorithm to generate [delta files](https://en.wikipedia.org/wiki/Delta_encoding "Delta encoding") with the difference from file A to file B (like the utility [diff](https://en.wikipedia.org/wiki/Diff "Diff"), but in a different delta format). The delta file can then be applied to file A, turning it into file B (similar to the [patch](https://en.wikipedia.org/wiki/Patch_\(Unix\) "Patch (Unix)") utility). rdiff works well with [binary files](https://en.wikipedia.org/wiki/Binary_file "Binary file").

The **[rdiff-backup](https://en.wikipedia.org/wiki/Rdiff-backup "Rdiff-backup")** script maintains a [backup](https://en.wikipedia.org/wiki/Backup "Backup") mirror of a file or directory either locally or remotely over the network on another server. rdiff-backup stores incremental rdiff deltas with the backup, with which it is possible to recreate any backup point.[^37]

The **librsync** library used by rdiff is an independent implementation of the rsync algorithm. It does not use the rsync network protocol and does not share any code with the rsync application.[^pool-38] It is used by [Dropbox](https://en.wikipedia.org/wiki/Dropbox_\(service\) "Dropbox (service)"), rdiff-backup, [duplicity](https://en.wikipedia.org/wiki/Duplicity_\(software\) "Duplicity (software)"), and other utilities.[^pool-38]

The **acrosync** library is an independent, cross-platform implementation of the rsync network protocol.[^39] Unlike librsync, it is wire-compatible with rsync (protocol version 29 or 30). It is released under the [Reciprocal Public License](https://en.wikipedia.org/wiki/Reciprocal_Public_License "Reciprocal Public License") and used by the commercial rsync software **Acrosync**.[^40]

The **[duplicity](https://en.wikipedia.org/wiki/Duplicity_\(software\) "Duplicity (software)")** backup software written in **[python](https://en.wikipedia.org/wiki/Python_\(programming_language\) "Python (programming language)")** allows for incremental backups with simple storage backend services like local file system, [sftp](https://en.wikipedia.org/wiki/SSH_File_Transfer_Protocol "SSH File Transfer Protocol"), [Amazon S3](https://en.wikipedia.org/wiki/Amazon_S3 "Amazon S3") and many others. It utilizes librsync to generate delta data against signatures of the previous file versions, encrypting them using [gpg](https://en.wikipedia.org/wiki/GNU_Privacy_Guard "GNU Privacy Guard"), and storing them on the backend. For performance reasons a local archive-dir is used to cache backup chain signatures, but can be re-downloaded from the backend if needed.

As of macOS 10.5 and later, there is a special `-E` or `--extended-attributes` switch which allows retaining much of the [HFS+](https://en.wikipedia.org/wiki/HFS_Plus "HFS Plus") file metadata when syncing between two machines supporting this feature. This is achieved by transmitting the [Resource Fork](https://en.wikipedia.org/wiki/Resource_Fork "Resource Fork") along with the Data Fork.[^41]

**zsync** is an rsync-like tool optimized for many downloads per file version. zsync is used by Linux distributions such as [Ubuntu](https://en.wikipedia.org/wiki/Ubuntu_\(operating_system\) "Ubuntu (operating system)")[^42] for distributing fast changing beta [ISO image](https://en.wikipedia.org/wiki/ISO_image "ISO image") files. zsync uses the HTTP protocol and .zsync files with pre-calculated rolling hash to minimize server load yet permit diff transfer for network optimization.[^43]

**[Rclone](https://en.wikipedia.org/wiki/Rclone "Rclone")** is an open-source tool inspired by rsync that focuses on cloud and other high latency storage. It supports more than 50 different providers and provides an rsync-like interface for cloud storage.[^44] However, Rclone does not support rolling checksums for partial file syncing (binary diffs) because cloud storage providers do not usually offer the feature and Rclone avoids storing additional metadata.[^45]

<table><thead><tr><th rowspan="2">Program</th><th colspan="3">Operating system</th><th rowspan="2"><span><a href="https://en.wikipedia.org/wiki/Free_software">Free software</a></span></th><th rowspan="2">Description</th></tr><tr><th>Linux</th><th>macOS</th><th>Windows</th></tr></thead><tbody><tr><td><a href="https://en.wikipedia.org/wiki/Back_in_Time_(Linux_software)">Back In Time</a></td><td>Yes</td><td>No</td><td>No</td><td>Yes</td><td></td></tr><tr><td><a href="https://en.wikipedia.org/wiki/BackupAssist">BackupAssist</a></td><td>No</td><td>No</td><td>Yes</td><td>No</td><td>Direct mirror or with history, VSS.</td></tr><tr><td><a href="https://en.wikipedia.org/wiki/CwRsync">cwRsync</a></td><td>No</td><td>No</td><td>Yes</td><td>No</td><td>Based on <a href="https://en.wikipedia.org/wiki/Cygwin">Cygwin</a>.</td></tr><tr><td><a href="https://en.wikipedia.org/wiki/Grsync">Grsync</a></td><td>Yes</td><td>Yes</td><td>Yes<sup><a href="https://en.wikipedia.org/wiki/#cite_note-46"><span>[</span>42<span>]</span></a></sup></td><td>Yes</td><td>Graphical Interface for rsync.</td></tr><tr><td><a href="https://en.wikipedia.org/wiki/LuckyBackup">LuckyBackup</a></td><td>Yes</td><td>Yes</td><td>Yes</td><td>Yes</td><td></td></tr><tr><td><a href="https://en.wikipedia.org/wiki/Rclone">rclone</a></td><td>Yes</td><td>Yes</td><td>Yes</td><td>Yes</td><td>Inspired by rsync and supports more than 50 cloud storage providers and other high latency storage services. Does not actually use rsync or support rolling checksums and partial file synchronization.</td></tr><tr><td><a href="http://dragoman.org/tym">tym</a></td><td>Yes</td><td>Yes</td><td>Yes</td><td>Yes</td><td>Time rsYnc Machine – backup à la <a href="https://en.wikipedia.org/wiki/Time_Machine_(macOS)">Time Machine</a> – <a href="https://en.wikipedia.org/wiki/Bash_(Unix_shell)">Bash</a> script</td></tr><tr><td><a href="https://en.wikipedia.org/wiki/Unison_(software)">Unison</a></td><td>Yes</td><td>Yes</td><td>Yes</td><td>Yes</td><td></td></tr></tbody><tfoot></tfoot></table>

- [casync](https://en.wikipedia.org/wiki/Casync "Casync")
- [Remote Differential Compression](https://en.wikipedia.org/wiki/Remote_Differential_Compression "Remote Differential Compression")
- [List of TCP and UDP port numbers](https://en.wikipedia.org/wiki/List_of_TCP_and_UDP_port_numbers "List of TCP and UDP port numbers")
- [Grsync](https://en.wikipedia.org/wiki/Grsync "Grsync") – App based on RSync but with graphical user interface
- [Comparison of file synchronization software](https://en.wikipedia.org/wiki/Comparison_of_file_synchronization_software "Comparison of file synchronization software")

[^4]: GPL-3.0-or-later since 2007-07-10, pre-release 3.0.0pre1 on 2007-10-05, stable 3.0.0 on 2008-03-01.

[^8]: GPL-3.0-only from 2007-07-07 until 2007-07-09.

[^9]: GPL-2.0-only from 2007-02-04 until 2007-07-07.

[^10]: GPL-2.0-or-later from 1996-06-16 until 2007-01-31, versions 0.1 to 2.6.9.

[^rsyncrel-1]: Tridgell, Andrew (19 June 1996). ["First release of rsync – rcp replacement"](https://groups.google.com/group/comp.os.linux.announce/msg/3bb93f6484065f20). [Newsgroup](https://en.wikipedia.org/wiki/Usenet_newsgroup "Usenet newsgroup"): [comp.os.linux.announce](https://en.wikipedia.org/wiki/). [Usenet:](https://en.wikipedia.org/wiki/Usenet_\(identifier\) "Usenet (identifier)") [cola-liw-835153950-21793-0@liw.clinet.fi](https://en.wikipedia.org/wiki/). [Archived](https://web.archive.org/web/20111108064132/http://groups.google.com/group/comp.os.linux.announce/msg/3bb93f6484065f20) from the original on 8 November 2011. Retrieved 19 July 2007.

[^rsync-website-2]: ["rsync"](https://rsync.samba.org/). [Archived](https://web.archive.org/web/20141127111140/http://rsync.samba.org/) from the original on 27 November 2014. Retrieved 28 November 2014.

[^wikidata-31f5fb2f46c9c559a9538aff4eb88dbc83acd65a-v18-3]: ["\[rsync-announce\] rsync 3.4.1 released"](https://lists.samba.org/archive/rsync-announce/2025/000121.html). 15 January 2025. Retrieved 15 January 2025.

[^news-5]: ["News"](https://download.samba.org/pub/rsync/NEWS#3.0.0).

[^gpl-3.0-or-later-6]: ["tweaking the license text a bit more"](https://git.samba.org/rsync.git/?p=rsync.git;a=commitdiff;h=8e41b68e8f975c02a5d9281be780ba5d1a385107).

[^gpl.html-7]: ["rsync's license"](https://rsync.samba.org/GPL.html).

[^gpl2.html-11]: ["rsync's license"](https://rsync.samba.org/GPL2.html).

[^man_page-12]: ["rsync(1) – Linux man page"](https://linux.die.net/man/1/rsync). *linux.die.net*. [Archived](https://web.archive.org/web/20170101060106/https://linux.die.net/man/1/rsync) from the original on 1 January 2017. Retrieved 2 February 2017.

[^sayood-13]: Sayood, Khalid (18 December 2002). [*Lossless compression handbook*](https://books.google.com/books?id=Duz1wQEBkb8C&q=rsync+widely+used&pg=PA280). Elsevier. [ISBN](https://en.wikipedia.org/wiki/ISBN_\(identifier\) "ISBN (identifier)") [9780080510491](https://en.wikipedia.org/wiki/Special:BookSources/9780080510491 "Special:BookSources/9780080510491"). Retrieved 18 August 2014.

[^14]: [*Web content caching and distribution: proceedings of the 8th International Workshop*](https://archive.org/details/springer_10.1007-1-4020-2258-1). Springer Science & Business Media. 2004. p. [316](https://archive.org/details/springer_10.1007-1-4020-2258-1/page/n323). [ISBN](https://en.wikipedia.org/wiki/ISBN_\(identifier\) "ISBN (identifier)") [9781402022579](https://en.wikipedia.org/wiki/Special:BookSources/9781402022579 "Special:BookSources/9781402022579"). Retrieved 18 August 2014 – via [Internet Archive](https://en.wikipedia.org/wiki/Internet_Archive "Internet Archive"). rsync widely used.

[^15]: Rasch, David; Burns, Randal; [*In-Place Rsync: File Synchronization for Mobile and Wireless Devices*](http://hssl.cs.jhu.edu/ip-rsync/ip-rsync.pdf) [Archived](https://web.archive.org/web/20160413200016/http://hssl.cs.jhu.edu/ip-rsync/ip-rsync.pdf) 13 April 2016 at the [Wayback Machine](https://en.wikipedia.org/wiki/Wayback_Machine "Wayback Machine"), Department of Computer Science, Johns Hopkins University

[^16]: Dempsey, Bert J.; Weiss, Debra (30 April 1999). "Towards an Efficient, Scalable Replication Mechanism for the I2-DSI Project". *Technical Report TR-1999-01*. [CiteSeerX](https://en.wikipedia.org/wiki/CiteSeerX_\(identifier\) "CiteSeerX (identifier)") [10.1.1.95.5042](https://citeseerx.ist.psu.edu/viewdoc/summary?doi=10.1.1.95.5042).

[^17]: ["Bash - Speed up rsync with Simultaneous/Concurrent File Transfers? - Stack Overflow"](https://stackoverflow.com/questions/24058544/speed-up-rsync-with-simultaneous-concurrent-file-transfers). [Archived](https://web.archive.org/web/20190806235906/https://stackoverflow.com/questions/24058544/speed-up-rsync-with-simultaneous-concurrent-file-transfers) from the original on 6 August 2019. Retrieved 18 December 2019.

[^18]: ["Using Rsync and SSH"](https://troy.jdmz.net/rsync/index.html). Troy.jdmz.net. Retrieved 18 August 2014.

[^19]: ["Using and running mirrors"](https://www.gnu.org/server/mirror.html). GNU Project. [Archived](https://web.archive.org/web/20200416235132/https://www.gnu.org/server/mirror.html) from the original on 16 April 2020. Retrieved 15 April 2020.

[^20]: ["How to create public mirrors for CentOS"](https://wiki.centos.org/HowTos/CreatePublicMirrors). CentOS wiki. [Archived](https://web.archive.org/web/20200401031641/https://wiki.centos.org/HowTos/CreatePublicMirrors) from the original on 1 April 2020. Retrieved 15 April 2020.

[^rdistrel-21]: ["rdist(1)"](https://man.freebsd.org/cgi/man.cgi?query=rdist&apropos=0&sektion=0&manpath=FreeBSD+1.0-RELEASE&arch=default&format=html).

[^22]: Tridgell, Andrew; [*Efficient Algorithms for Sorting and Synchronization*](https://rsync.samba.org/~tridge/phd_thesis.pdf), February 1999, retrieved 29 September 2009

[^23]: ["Tool Warehouse"](https://web.archive.org/web/20130406032657/http://www.suacommunity.com/tool_warehouse.aspx). *SUA Community*. Archived from the original on 6 April 2013.

[^24]: ["FreeBSD Ports"](https://svnweb.freebsd.org/ports/head/net/rsync/pkg-descr?view=markup). Retrieved 24 October 2016.

[^25]: ["NetBSD Ports"](http://ftp.netbsd.org/pub/pkgsrc/current/pkgsrc/net/rsync/README.html). [Archived](https://web.archive.org/web/20161025110838/http://ftp.netbsd.org/pub/pkgsrc/current/pkgsrc/net/rsync/README.html) from the original on 25 October 2016. Retrieved 24 October 2016.

[^26]: ["OpenBSD Ports"](http://cvsweb.openbsd.org/cgi-bin/cvsweb/ports/net/rsync/). Retrieved 24 October 2016.

[^27]: See the [README file](https://rsync.samba.org/ftp/rsync/README) [Archived](https://web.archive.org/web/20071210003559/http://rsync.samba.org/ftp/rsync/README) 10 December 2007 at the [Wayback Machine](https://en.wikipedia.org/wiki/Wayback_Machine "Wayback Machine")

[^28]: ["How to Mirror FreeBSD (With rsync)"](http://www.freebsd.org/doc/en/articles/hubs/mirror-howto.html). Freebsd.org. Retrieved 18 August 2014.

[^29]: ["How to become a mirror for the Apache Software Foundation"](https://www.apache.org/info/how-to-mirror.html). Apache.org. [Archived](https://web.archive.org/web/20140821040343/http://www.apache.org/info/how-to-mirror.html) from the original on 21 August 2014. Retrieved 18 August 2014.

[^30]: ["PuTTY Web Site Mirrors: Mirroring guidelines"](http://www.chiark.greenend.org.uk/~sgtatham/putty/mirrors.html#guidelines). Chiark.greenend.org.uk. 20 December 2007. [Archived](https://web.archive.org/web/20140819090430/http://www.chiark.greenend.org.uk/~sgtatham/putty/mirrors.html#guidelines) from the original on 19 August 2014. Retrieved 18 August 2014.

[^31]: ["Rsync set up to run like Time Machine"](http://blog.interlinked.org/tutorials/rsync_time_machine.html). Blog.interlinked.org. [Archived](https://web.archive.org/web/20071115224128/http://blog.interlinked.org/tutorials/rsync_time_machine.html) from the original on 15 November 2007. Retrieved 18 August 2014.

[^32]: ["Full system backup with rsync"](https://wiki.archlinux.org/index.php/Full_system_backup_with_rsync). wiki.archlinux.org. [Archived](https://web.archive.org/web/20150211163817/https://wiki.archlinux.org/index.php/Full_System_Backup_with_rsync) from the original on 11 February 2015. Retrieved 15 December 2014.

[^33]: ["How Rsync Works"](https://rsync.samba.org/how-rsync-works.html). [Archived](https://web.archive.org/web/20161216173537/http://rsync.samba.org/how-rsync-works.html) from the original on 16 December 2016. Retrieved 24 January 2017.

[^34]: ["RSync – Overview"](http://tutorials.jenkov.com/rsync/overview.html). [Archived](https://web.archive.org/web/20170410213853/http://tutorials.jenkov.com/rsync/overview.html) from the original on 10 April 2017. Retrieved 9 April 2017.

[^35]: ["News for rsync 3.0.0"](https://web.archive.org/web/20080320001756/http://rsync.samba.org/ftp/rsync/src/rsync-3.0.0-NEWS). 1 March 2008. Archived from [the original](https://rsync.samba.org/ftp/rsync/src/rsync-3.0.0-NEWS) on 20 March 2008.

[^36]: Norman Ramsey. ["The Rsync Algorithm"](https://www.cs.tufts.edu/~nr/rsync.html).

[^37]: [rdiff-backup](http://rdiff-backup.net/)

[^pool-38]: Pool, Martin; ["librsync"](http://librsync.sourcefrog.net/) [Archived](https://web.archive.org/web/20131209003912/http://librsync.sourcefrog.net/) 9 December 2013 at the [Wayback Machine](https://en.wikipedia.org/wiki/Wayback_Machine "Wayback Machine")

[^39]: Chen, Gilbert. ["acrosync-library"](https://github.com/gilbertchen/acrosync-library). github.com. [Archived](https://web.archive.org/web/20170210051004/https://github.com/gilbertchen/acrosync-library) from the original on 10 February 2017. Retrieved 22 June 2016.

[^40]: ["acrosync.com"](https://acrosync.com/). [Archived](https://web.archive.org/web/20191220113527/http://acrosync.com/) from the original on 20 December 2019. Retrieved 29 July 2020.

[^41]: ["Mac Developer Library"](https://web.archive.org/web/20120926232217/http://developer.apple.com/library/mac/#documentation/Darwin/Reference/ManPages/man1/rsync.1.html). Developer.apple.com. Archived from [the original](https://developer.apple.com/library/mac/#documentation/Darwin/Reference/ManPages/man1/rsync.1.html) on 26 September 2012. Retrieved 18 August 2014.

[^42]: ["Zsync Cd Image"](https://help.ubuntu.com/community/ZsyncCdImage). *ubuntu.com*. Retrieved 6 January 2015.

[^43]: [zsync web site](http://zsync.moria.org.uk/)

[^44]: Craig-Wood, Nick. ["Overview of cloud storage systems"](https://rclone.org/overview/). *rclone.org*. [Archived](https://web.archive.org/web/20171004030724/https://rclone.org/overview/) from the original on 4 October 2017. Retrieved 10 July 2017.

[^45]: Craig-Wood, Nick. ["Rclone Frequently Asked Questions"](https://rclone.org/faq/#why-doesn-t-rclone-support-partial-transfers-binary-diffs-like-rsync). *rclone.org*. [Archived](https://web.archive.org/web/20220510195418/https://rclone.org/faq/) from the original on 10 May 2022. Retrieved 13 May 2022.

[^46]: ["Grsync for Windows"](https://sourceforge.net/projects/grsync-win/). *SourceForge*. 12 July 2016. [Archived](https://web.archive.org/web/20190324193643/https://sourceforge.net/projects/grsync-win/) from the original on 24 March 2019. Retrieved 24 March 2019.

- [Official website](https://rsync.samba.org/) [![[~/×/46a5f281259955b3cfc92a415ea2f3e8_MD5.png]]](https://www.wikidata.org/wiki/Q283774#P856 "Edit this at Wikidata")
- [Rsync algorithm](https://rsync.samba.org/tech_report/) – 1998-11-09
- [Doctoral thesis introducing the Rsync algorithm](https://www.samba.org/~tridge/phd_thesis.pdf)
- [Rsync examples in Linux (How to use rsync)](https://linuxconfig.org/rsync-command-examples/)