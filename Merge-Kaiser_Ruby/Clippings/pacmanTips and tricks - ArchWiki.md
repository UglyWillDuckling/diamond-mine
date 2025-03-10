---
created: 2025-02-24
source: https://wiki.archlinux.org/title/Pacman/Tips_and_tricks
tags:
  - doc/pacman
---
For general methods to improve the flexibility of the provided tips or *pacman* itself, see [Core utilities](https://wiki.archlinux.org/title/Core_utilities "Core utilities") and [Bash](https://wiki.archlinux.org/title/Bash "Bash").

## **Maintenance**

**Note:** Instead of using *comm* (which requires sorted input with *sort*) in the sections below, you may also use `grep -Fxf` or `grep -Fxvf`.

See also [System maintenance](https://wiki.archlinux.org/title/System_maintenance "System maintenance").

### Listing packages

#### In unused repositories

By default, repositories listed in `pacman.conf` are used for syncing, searching, installing and upgrading from them. This can be changed for more versatility, for example by using some repositories only for searching in them[\[1\]](http://allanmcrae.com/2014/12/pacman-4-2-released/):

/etc/pacman.conf
```
...
[multilib]
Usage = Sync Search
...
```

See [pacman.conf(5) § REPOSITORY SECTIONS](https://man.archlinux.org/man/pacman.conf.5#REPOSITORY_SECTIONS).

#### With version

You may want to get the list of installed packages with their version, which is useful when reporting bugs or discussing installed packages.

- List all explicitly installed packages: `pacman -Qe`.
- List all packages in the [package group](https://wiki.archlinux.org/title/Package_group "Package group") named `*group*`: `pacman -Sg *group*`
- List all foreign packages (typically manually downloaded and installed or packages removed from the repositories): `pacman -Qm`.
- List all native packages (installed from the sync database): `pacman -Qn`.
- List all explicitly installed native packages (i.e. present in the sync database) that are not direct or optional dependencies: `pacman -Qent`.
- List packages by regex: `pacman -Qs *regex*`.
- List packages by regex with custom output format (needs [expac](https://archlinux.org/packages/?name=expac)): `expac -s "%-30n %v" *regex*`.

#### With size

Figuring out which packages are largest can be useful when trying to free space on your hard drive. There are two options here: get the size of individual packages, or get the size of packages and their dependencies.

##### Individual packages

The following command will list all installed packages and their individual sizes:

```
$ LC_ALL=C.UTF-8 pacman -Qi | awk '/^Name/{name=$3} /^Installed Size/{print $4$5, name}' | LC_ALL=C.UTF-8 sort -h
```

##### Packages and dependencies

To list package sizes with their dependencies,

> - Install [expac](https://archlinux.org/packages/?name=expac) and run `expac -H M '%m\t%n' | sort -h`.
- Run [pacgraph](https://aur.archlinux.org/packages/pacgraph/)<sup><small>AUR</small></sup> with the `-c` option.

To list the download size of several packages (leave `*packages*` blank to list all packages):

```sh
expac -S -H M '%k\t%n' packages
```

To list explicitly installed packages not in the [meta package](https://wiki.archlinux.org/title/Meta_package "Meta package") [base](https://archlinux.org/packages/?name=base) nor [package group](https://wiki.archlinux.org/title/Package_group "Package group") [xorg](https://archlinux.org/groups/x86_64/xorg/) with size and description:

```
$ expac -H M "%011m\t%-20n\t%10d" $(comm -23 <(pacman -Qqen | sort) <({ pacman -Qqg xorg; expac -l '\n' '%E' base; } | sort -u)) | sort -n
```

To list the packages marked for upgrade with their download size:

```
$ expac -S -H M '%k\t%n' $(pacman -Qqu) | sort -sh
```

To list optional dependencies only:

```
$ expac -S "%o" package
```

#### By date

To list the 20 last installed packages with [expac](https://archlinux.org/packages/?name=expac), run:

```
$ expac --timefmt='%Y-%m-%d %T' '%l\t%n' | sort | tail -n 20
```

or, with seconds since the epoch (1970-01-01 UTC):

```
$ expac --timefmt=%s '%l\t%n' | sort -n | tail -n 20
```

#### Not in a specified group, repository or meta package

**Note:** To get a list of packages installed as dependencies but no longer required by any installed package, see [#Removing unused packages (orphans)](https://wiki.archlinux.org/title/Pacman/#Removing_unused_packages_\(orphans\)).

List explicitly installed packages not in the [base](https://archlinux.org/packages/?name=base) [meta package](https://wiki.archlinux.org/title/Meta_package "Meta package"):

```
$ comm -23 <(pacman -Qqe | sort) <(expac -l '\n' '%E' base | sort)
```

List explicitly installed packages not in the [base](https://archlinux.org/packages/?name=base) meta package or [xorg](https://archlinux.org/groups/x86_64/xorg/) [package group](https://wiki.archlinux.org/title/Package_group "Package group"):

```
$ comm -23 <(pacman -Qqe | sort) <({ pacman -Qqg xorg; expac -l '\n' '%E' base; } | sort -u)
```

List all installed packages unrequired by other packages, and which are not in the [base](https://archlinux.org/packages/?name=base) meta package or [xorg](https://archlinux.org/groups/x86_64/xorg/) package group:

```
$ comm -23 <(pacman -Qqt | sort) <({ pacman -Qqg xorg; echo base; } | sort -u)
```

As above, but with descriptions:

```
$ expac -H M '%-20n\t%10d' $(comm -23 <(pacman -Qqt | sort) <({ pacman -Qqg xorg; echo base; } | sort -u))
```

List all installed packages that are *not* in the specified repository *repo\_name* (multiple repositories can be checked at once):

```
$ comm -23 <(pacman -Qq | sort) <(pacman -Sql repo_name | sort)
```

List all installed packages that are in the *repo\_name* repository (multiple repositories can be checked at once):

```
$ comm -12 <(pacman -Qq | sort) <(pacman -Sql repo_name | sort)
```

List all packages on the Arch Linux ISO that are not in the [base](https://archlinux.org/packages/?name=base) meta package:

```
$ comm -23 <(curl https://gitlab.archlinux.org/archlinux/archiso/-/raw/master/configs/releng/packages.x86_64) <(expac -l '\n' '%E' base | sort)
```

**Tip:** Alternatively, use `combine` (instead of `comm`) from the [moreutils](https://archlinux.org/packages/?name=moreutils) package which has a syntax that is easier to remember. See [combine(1)](https://man.archlinux.org/man/combine.1).

#### Development packages

To list all development/unstable packages, run:

```
$ pacman -Qq | grep -Ee '-(bzr|cvs|darcs|git|hg|svn)$'
```

#### Dependencies of a package

To obtain the list of the dependencies of a package, the simplest solution is reading the output of:

```sh
pacman -Qi package
```

For automation, instead of the error-prone method of parsing pacman output, use [expac](https://archlinux.org/packages/?name=expac):

```sh
expac -S '%D' package
```

#### With optional dependencies

To list explicitly-installed packages with their optional dependencies, run:

```
$ LC_ALL=C.UTF-8 pacman -Qei | sed '/^[^NO ]/d;/None$/d' | awk 'BEGIN{RS=ORS="\n\n";FS=OFS="\n\\S"} /Optional Deps/ {print $1"\nO"$2}'
```

Alternatively, with [expac](https://archlinux.org/packages/?name=expac):

```
$ expac -d '\n\n' -l '\n\t' -Q '%n\n\t%O' $(pacman -Qeq)
```

To list them while omitting optional dependencies you have already installed, run:

```
$ LC_ALL=C.UTF-8 pacman -Qei | sed '/^[^NO ]/d;/None$/d' | awk 'BEGIN{RS=ORS="\n\n";FS=OFS="\n\\S"} /Optional Deps/ {print $1"\nO"$2}' | sed 's/^Optional Deps   ://;/\[installed\]$/d;s/\s\+/ /'
```

### Browsing packages

To browse all **installed** packages with an instant preview of each package:

```sh
pacman -Qq | fzf --preview 'pacman -Qil {}' --layout=reverse --bind 'enter:execute(pacman -Qil {} | less)'
```

This uses [fzf](https://wiki.archlinux.org/title/Fzf "Fzf") to present a two-pane view listing all packages with package info shown on the right.

Enter letters to filter the list of packages; use arrow keys (or `Ctrl-j`/`Ctrl-k`) to navigate; press `Enter` to see package info under *less*.

To browse all packages currently known to *pacman* (**both installed and not yet installed)** in a similar way, use:

```sh
 pacman -Slq | fzf --preview 'pacman -Si {}' --layout=reverse
```

### Listing files owned by a package with size

This one might come in handy if you have found that a specific package uses a huge amount of space and you want to find out which files make up the most of that.

```
$ pacman -Qlq package | grep -v '/$' | xargs -r du -h | sort -h
```

### Identify files not owned by any package

If your system has stray files not owned by any package (a common case if you do not [use the package manager to install software](https://wiki.archlinux.org/title/Enhance_system_stability#Use_the_package_manager_to_install_software "Enhance system stability")), you may want to find such files in order to clean them up.

One method is to list all files of interest and check them against *pacman*:

```
# (export LC_ALL=C.UTF-8; comm -13 <(pacman -Qlq | sed 's,/$,,' | sort) <(find /etc /usr /opt -path /usr/lib/modules -prune -o -print | sort))
```

**Tip:** The [lostfiles](https://archlinux.org/packages/?name=lostfiles) script performs similar steps, but also includes an extensive blacklist to remove common false positives from the output.

### Tracking unowned files created by packages

Most systems will slowly collect several [ghost](http://ftp.rpm.org/max-rpm/s1-rpm-inside-files-list-directives.html#S3-RPM-INSIDE-FLIST-GHOST-DIRECTIVE) files such as state files, logs, indexes, etc. through the course of usual operation.

`pacreport` from [pacutils](https://archlinux.org/packages/?name=pacutils) can be used to track these files and their associations via `/etc/pacreport.conf` (see [pacreport(1) § FILES](https://man.archlinux.org/man/pacreport.1#FILES)).

An example may look something like this (abridged):

```
/etc/pacreport.conf
```
```
[Options]
IgnoreUnowned = usr/share/applications/mimeinfo.cache

[PkgIgnoreUnowned]
alsa-utils = var/lib/alsa/asound.state
bluez = var/lib/bluetooth
ca-certificates = etc/ca-certificates/trust-source/*
dbus = var/lib/dbus/machine-id
glibc = etc/ld.so.cache
grub = boot/grub/*
linux = boot/initramfs-linux.img
pacman = var/lib/pacman/local
update-mime-database = usr/share/mime/magic
```

Then, when using `pacreport --unowned-files` as the root user, any unowned files will be listed if the associated package is no longer installed (or if any new files have been created).

Additionally, [aconfmgr](https://github.com/CyberShadow/aconfmgr) ([aconfmgr-git](https://aur.archlinux.org/packages/aconfmgr-git/)<sup><small>AUR</small></sup>) allows tracking modified and orphaned files using a configuration script.

### Removing unused packages **(orphans)**

**Orphans** are packages that `were` *installed* as a dependency and are no longer required by any package.

They can accumulate on your system over time either due to uninstalling packages using `pacman -R *package*` instead of `pacman -Rs *package*`, installing packages as [makedepends](https://wiki.archlinux.org/title/Makedepends "Makedepends"), or packages removing dependencies in newer versions.

For **recursively** removing orphans and their configuration files:

- [x] remind me Pacman orphans (@2025-03-10)
```sh
pacman -Qdtq | pacman -Rns -
```

If no orphans were found, the output is `error: argument '-' specified with empty stdin`. This is expected as no arguments were passed to `pacman -Rns`. The error can be avoided by prefixing the second command with [ifne(1)](https://man.archlinux.org/man/ifne.1) from the [moreutils](https://archlinux.org/packages/?name=moreutils) package.

If there is a package listed that you do not want to remove, it can be excluded from the list of orphans by marking it as explicitly installed:

```sh
pacman -D --asexplicit package
```

:LiNotebook: **Note:** The arguments `-Qt` list only true orphans. To include packages which are *optionally* required by another package, pass the `-t` flag twice (*i.e.*, `-Qtt`).

**Tip:** Add the `pacman -Qdt` command to a *pacman* post-transaction [hook](https://wiki.archlinux.org/title/Pacman#Hooks "Pacman") to be notified if a transaction orphaned a package. This can be useful for being notified when a package has been dropped from a repository, since any dropped package will also be orphaned on a local installation (unless it was explicitly installed). To avoid any "failed to execute command" errors when no orphans are found, use the following command for `Exec` in your hook: `/usr/bin/bash -c "/usr/bin/pacman -Qdt || /usr/bin/echo '=> None found.'"` The package [pacman-log-orphans-hook](https://aur.archlinux.org/packages/pacman-log-orphans-hook/)<sup><small>AUR</small></sup> provides such hook with a more verbose instructions.

### Detecting more unneeded packages

In some cases the method above will not detect all possible unneeded packages. E.g. dependency cycles (also known as "circular dependencies"), excessive dependencies (fulfilled more than once), some non-explicit optionals etc.

To detect such packages:

```sh
pacman -Qqd | pacman -Rsu --print -
```

If you want to remove all packages in the list at once, run the command without `--print` argument.

### Removing everything but essential packages

If it is ever necessary to remove all packages except the essentials packages, one method is to set the installation reason of the non-essential ones as dependency and then remove all unnecessary dependencies.

First, for all the packages "explicitly installed", change their installation reason to "installed as a dependency":

```
# pacman -D --asdeps $(pacman -Qqe)
```

Then, change the installation reason to "explicitly installed" of only the essential packages, those you **do not** want to remove, in order to avoid targeting them:

```
# pacman -D --asexplicit base linux linux-firmware
```

**Note:**

- Additional packages can be added to the above command in order to avoid being removed. See [Installation guide#Install essential packages](https://wiki.archlinux.org/title/Installation_guide#Install_essential_packages "Installation guide") for more info on other packages that may be necessary for a fully functional base system.
- This will also select the bootloader's package for removal. The system should still be bootable, but the boot parameters might not be changeable without it.

Finally, follow the instructions in [#Removing unused packages (orphans)](https://wiki.archlinux.org/title/Pacman/#Removing_unused_packages_\(orphans\)) to remove all packages that are "installed as a dependency".

### Getting the dependencies list of several packages

Dependencies are alphabetically sorted and doubles are removed.

**Note:** To only show the tree of local installed packages, use `pacman -Qi`.

```sh
LC_ALL=C.UTF-8 pacman -Si packages | awk -F'[:<=>]' '/^Depends/ {print $2}' | xargs -n1 | sort -u
```

Alternatively, with [expac](https://archlinux.org/packages/?name=expac):

```
$ expac -l '\n' %E -S packages | sort -u
```

### Listing changed backup files

To list configuration files tracked by *pacman* as [susceptible of containing user changes](https://wiki.archlinux.org/title/Pacnew_and_Pacsave_files#Package_backup_files "Pacnew and Pacsave files") (i.e. files listed in the [PKGBUILD backup array](https://wiki.archlinux.org/title/PKGBUILD#backup "PKGBUILD")) and having received user modifications, use the following command:

```
# pacman -Qii | awk '/\[modified\]/ {print $(NF - 1)}'
```

Running this command with root permissions will ensure that files readable only by root (such as `/etc/sudoers`) are included in the output.

This can be used when doing a selective system backup or when trying to replicate a system configuration from one machine to another.

**Tip:**

- See [#Listing all changed files from packages](https://wiki.archlinux.org/title/Pacman/#Listing_all_changed_files_from_packages) to list all changed files *pacman* knows about, not only backup files.
- See [#Identify files not owned by any package](https://wiki.archlinux.org/title/Pacman/#Identify_files_not_owned_by_any_package) to list all files in the system that are not tracked by *pacman*.

### Back up the pacman database

The following command can be used to back up the local *pacman* database:

```
$ tar -cjf pacman_database.tar.bz2 /var/lib/pacman/local
```

Store the backup *pacman* database file on one or more offline media, such as a USB stick, external hard drive, or CD-R.

The database can be restored by moving the `pacman_database.tar.bz2` file into the `/` directory and executing the following command:

```
# tar -xjvf pacman_database.tar.bz2
```

**Note:** If the *pacman* database files are corrupted, and there is no backup file available, there exists some hope of rebuilding the *pacman* database. Consult [#Restore pacman's local database](https://wiki.archlinux.org/title/Pacman/#Restore_pacman's_local_database).

**Tip:** The [pakbak-git](https://aur.archlinux.org/packages/pakbak-git/)<sup><small>AUR</small></sup> package provides a script and a [systemd](https://wiki.archlinux.org/title/Systemd "Systemd") service to automate the task. Configuration is possible in `/etc/pakbak.conf`.

### Check changelogs easily

When maintainers update packages, commits are often commented in a useful fashion. Users can quickly check these from the command line by installing [pacolog](https://aur.archlinux.org/packages/pacolog/)<sup><small>AUR</small></sup>. This utility lists recent commit messages for packages from the official repositories or the AUR, by using `pacolog *package*`.

## Installation and recovery

Alternative ways of getting and restoring packages.

### Installing packages from a CD/DVD or USB stick

![](https://wiki.archlinux.org/images/7/77/Merge-arrows-2.svg)**This article or section is a candidate for merging with [#Custom local repository](https://wiki.archlinux.org/title/Pacman/#Custom_local_repository).**

To download packages, or groups of packages:

```
# cd ~/Packages
# pacman -Syw --cachedir . base base-devel grub-bios xorg gimp
# repo-add ./custom.db.tar.zst ./*.pkg.tar.zst
```

Pacman, which will reference the host installation by default, will not properly resolve and download existing dependencies. In cases where all packages and dependencies are wanted, it is recommended to create a temporary blank DB and reference it with `--dbpath`:

```
# mkdir /tmp/blankdb
# pacman -Syw --cachedir . --dbpath /tmp/blankdb base base-devel grub-bios xorg gimp
# repo-add ./custom.db.tar.zst ./*.pkg.tar.zst
```

Then you can burn the "Packages" directory to an optical disc (e.g. CD, DVD) or transfer it to a USB flash drive, external HDD, etc.

To install:

**1.** Mount the media:

For an optical disc drive:

```
# mount --mkdir /dev/sr0 /mnt/repo
```

For a USB flash drive, hard disk drive, etc.:

```
# mount --mkdir /dev/sdxY /mnt/repo
```

**2.** Edit `pacman.conf` and add this repository *before* the other ones (e.g. extra, core, etc.). This is important. Do not just uncomment the one on the bottom. This way it ensures that the files from the CD/DVD/USB take precedence over those in the standard repositories:

```
/etc/pacman.conf
```
```
[custom]
SigLevel = PackageRequired
Server = file:///mnt/repo/Packages
```

**3.** Finally, synchronize the *pacman* database to be able to use the new repository:

```
# pacman -Syu
```

### Custom local repository

Use the *repo-add* script included with *pacman* to generate a database for a personal repository. Use `repo-add --help` for more details on its usage. A package database is a tar file, optionally compressed. Valid extensions are *.db* or *.files* followed by an archive extension of *.tar*, *.tar.gz*, *.tar.bz2*, *.tar.xz*, *.tar.zst*, or *.tar.Z*. The file does not need to exist, but all parent directories must exist.

To add a new package to the database, or to replace the old version of an existing package in the database, run:

```
$ repo-add /path/to/repo.db.tar.zst /path/to/package-1.0-1-x86_64.pkg.tar.zst
```

The database and the packages do not need to be in the same directory when using *repo-add*, but keep in mind that when using *pacman* with that database, they should be together. Storing all the built packages to be included in the repository in one directory also allows to use shell glob expansion to add or update multiple packages at once:

```
$ repo-add /path/to/repo.db.tar.zst /path/to/*.pkg.tar.zst
```

**Warning:** *repo-add* adds the entries into the database in the same order as passed on the command line. If multiple versions of the same package are involved, care must be taken to ensure that the correct version is added last. In particular, note that lexical order used by the shell depends on the locale and differs from the [vercmp(8)](https://man.archlinux.org/man/vercmp.8) ordering used by *pacman*.

If you are looking to support multiple architectures then precautions should be taken to prevent errors from occurring. Each architecture should have its own directory tree:

```
$ tree ~/customrepo/ | sed "s/$(uname -m)/arch/g"
```
```
/home/archie/customrepo/
└── arch
    ├── customrepo.db -> customrepo.db.tar.zst
    ├── customrepo.db.tar.zst
    ├── customrepo.files -> customrepo.files.tar.zst
    ├── customrepo.files.tar.zst
    └── personal-website-git-b99cce0-1-arch.pkg.tar.zst

1 directory, 5 files
```

The *repo-add* executable checks if the package is appropriate. If this is not the case you will be running into error messages similar to this:

```
==> ERROR: '/home/archie/customrepo/arch/foo-arch.pkg.tar.zst' does not have a valid database archive extension.
```

*repo-remove* is used to remove packages from the package database, except that only package names are specified on the command line.

```
$ repo-remove /path/to/repo.db.tar.zst pkgname
```

Once the local repository database has been created, add the repository to `pacman.conf` for each system that is to use the repository. An example of a custom repository is in `pacman.conf`. The repository's name is the database filename with the file extension omitted. In the case of the example above the repository's name would simply be *repo*. Reference the repository's location using a `file://` URL, or via HTTP using `http://localhost/path/to/directory`.

If willing, add the custom repository to the [list of unofficial user repositories](https://wiki.archlinux.org/title/Unofficial_user_repositories "Unofficial user repositories"), so that the community can benefit from it.

### Network shared pacman cache

If you happen to run several Arch boxes on your LAN, you can share packages so that you can greatly decrease your download times. Keep in mind you should not share between different architectures (i.e. i686 and x86\_64) or you will run into problems.

#### Read-only cache

Pacman 6.1.0 supports cache servers directly. Cache servers will be tried before any non-cache servers, will not be removed from the server pool because of HTTP 404 download errors, and will not be used for database files.

If you are looking for a quick solution, you can simply run a [basic temporary webserver](https://gist.github.com/willurd/5720255) which other computers can use as their cache server.

Start serving this directory. For example, with [Python](https://wiki.archlinux.org/title/Python "Python") [http.server](https://docs.python.org/3/library/http.server.html#http-server-cli) module:

```
$ python -m http.server -d /var/cache/pacman/pkg/
```

**Tip:** By default, Python `http.server` listens on port `8000` of any interface. To use another port, or bind only to specific address, simply add a parameter and an argument:

```
$ python -m http.server -d /var/cache/pacman/pkg/ --bind 127.0.0.1 8080
```

Then [edit](https://wiki.archlinux.org/title/Textedit "Textedit") `/etc/pacman.d/mirrorlist` on each client machine to add this server:

```
/etc/pacman.d/mirrorlist
```
```
CacheServer = http://server-ip:port
```

**Warning:** Do **not** append `/repos/$repo/os/$arch` to this custom server like for other entries, as this hierarchy does not exist and therefore queries will fail.

If looking for a more standalone solution, [darkhttpd](https://archlinux.org/packages/?name=darkhttpd) offers a very minimal webserver. Replace the previous `python` command with e.g.:

```
[http]$ darkhttpd /var/cache/pacman/pkg --no-server-id
```

You could also run darkhttpd as a *systemd* service for convenience: see [Systemd#Writing unit files](https://wiki.archlinux.org/title/Systemd#Writing_unit_files "Systemd").

[miniserve](https://archlinux.org/packages/?name=miniserve), a small web server written in Rust, can also be used:

```
$ miniserve /var/cache/pacman/pkg
```

Then edit `/etc/pacman.d/mirrorlist` as above with the first url miniserve is available at.

If you are already running a web server for some other purpose, you might wish to reuse that as your local repository server instead. For example, if you already serve a site with [nginx](https://wiki.archlinux.org/title/Nginx "Nginx"), you can add an *nginx* server block listening on port 8080:

```
/etc/nginx/nginx.conf
```
```
server {
    listen 8080;
    root /var/cache/pacman/pkg;
    server_name myarchrepo.localdomain;
    try_files $uri $uri/;
}
```

Remember to [restart](https://wiki.archlinux.org/title/Restart "Restart") `nginx.service` after making this change.

**Tip:** Whichever web server you use, make sure the firewall configuration (if any) allows the configured port to be reached by the desired traffic, and disallows any undesired traffic. See [Security#Network and firewalls](https://wiki.archlinux.org/title/Security#Network_and_firewalls "Security").

#### Overlay mount of read-only cache

It is possible to use one machine on a local network as a read-only package cache by [overlay mounting](https://wiki.archlinux.org/title/Overlay_filesystem "Overlay filesystem") its `/var/cache/pacman/pkg` directory. Such a configuration is advantageous if this server has installed on it a reasonably comprehensive selection of up-to-date packages which are also used by other boxes. This is useful for maintaining a number of machines at the end of a low bandwidth upstream connection.

As an example, to use this method:

```
# mkdir /tmp/remote_pkg /mnt/workdir_pkg /tmp/pacman_pkg
# sshfs remote_username@remote_pkgcache_addr:/var/cache/pacman/pkg /tmp/remote_pkg -C
# mount -t overlay overlay -o lowerdir=/tmp/remote_pkg,upperdir=/var/cache/pacman/pkg,workdir=/mnt/workdir_pkg /tmp/pacman_pkg
```

**Note:** The working directory must be an empty directory on the same mounted device as the upper directory. See [Overlay filesystem#Usage](https://wiki.archlinux.org/title/Overlay_filesystem#Usage "Overlay filesystem").

**Tip:** If listing the `/tmp/pacman_pkg` overlay directory gives errors, e.g., "Stale file handle", try overlay mounting with options `-o redirect_dir=off -o index=off`.

After this, run *pacman* using the option `--cachedir /tmp/pacman_pkg`, e.g.:

```
# pacman -Syu --cachedir /tmp/pacman_pkg
```

#### Distributed read-only cache

There are Arch-specific tools for automatically discovering other computers on your network offering a package cache. Try [pacredir](https://archlinux.org/packages/?name=pacredir), [pacserve](https://wiki.archlinux.org/title/Pacserve "Pacserve"), [pkgdistcache](https://aur.archlinux.org/packages/pkgdistcache/)<sup><small>AUR</small></sup>, or [paclan](https://aur.archlinux.org/packages/paclan/)<sup><small>AUR</small></sup>. pkgdistcache uses Avahi instead of plain UDP which may work better in certain home networks that route instead of bridge between Wi-Fi and Ethernet.

Historically, there was [PkgD](https://bbs.archlinux.org/viewtopic.php?id=64391) and [multipkg](https://github.com/toofishes/multipkg), but they are no longer maintained.

#### Read-write cache

In order to share packages between multiple computers, simply share `/var/cache/pacman/` using any network-based mount protocol. This section shows how to use [SSHFS](https://wiki.archlinux.org/title/SSHFS "SSHFS") to share a package cache plus the related library-directories between multiple computers on the same local network. Keep in mind that a network shared cache can be slow depending on the file-system choice, among other factors.

First, install any network-supporting filesystem packages: [sshfs](https://archlinux.org/packages/?name=sshfs), [curlftpfs](https://archlinux.org/packages/?name=curlftpfs), [samba](https://archlinux.org/packages/?name=samba) or [nfs-utils](https://archlinux.org/packages/?name=nfs-utils).

**Tip:**

- To use *sshfs*, consider reading [Using SSH Keys](https://wiki.archlinux.org/title/Using_SSH_Keys "Using SSH Keys").
- By default, *smbfs* does not serve filenames that contain colons, which results in the client downloading the offending package afresh. To prevent this, use the `mapchars` mount option on the client.

Then, to share the actual packages, mount `/var/cache/pacman/pkg` from the server to `/var/cache/pacman/pkg` on every client machine.

**Warning:** Do not make `/var/cache/pacman/pkg` or any of its ancestors (e.g., `/var`) a symlink. Pacman expects these to be directories. When *pacman* re-installs or upgrades itself, it will remove the symlinks and create empty directories instead. However during the transaction *pacman* relies on some files residing there, hence breaking the update process. Refer to [FS#50298](https://bugs.archlinux.org/task/50298) for further details.

#### Two-way with rsync or FTP

Another approach in a local environment is [rsync](https://wiki.archlinux.org/title/Rsync "Rsync"). Choose a server for caching and enable the [rsync daemon](https://wiki.archlinux.org/title/Rsync#As_a_daemon "Rsync"). On clients synchronize two-way with this share via the rsync protocol. Filenames that contain colons are no problem for the rsync protocol.

Draft example for a client, using `uname -m` within the share name ensures an architecture-dependent sync:

```
# rsync ... rsync://server/share_$(uname -m)/ /var/cache/pacman/pkg/ 
# pacman -Syu
# paccache --remove --keep 3
# rsync --delete ... /var/cache/pacman/pkg/ rsync://server/share_$(uname -m)/
```

Instead of relying on unencrypted [rsync daemon](https://wiki.archlinux.org/title/Rsync#As_a_daemon "Rsync") a more secure security option is rsync over ssh, [Rsync#Automated backup with SSH](https://wiki.archlinux.org/title/Rsync#Automated_backup_with_SSH "Rsync") gives an overview.

In case rsync is not available in your local environment, a simple ftp service is suitable for the two-way sync as well. [lftp](https://archlinux.org/packages/?name=lftp) provides a `--mirror` and a `--delete` option to sync a local with a remote storage.

#### Dynamic reverse proxy cache using nginx

[nginx](https://wiki.archlinux.org/title/Nginx "Nginx") can be used to proxy package requests to official upstream mirrors and cache the results to the local disk. All subsequent requests for that package will be served directly from the local cache, minimizing the amount of internet traffic needed to update a large number of computers.

In this example, the cache server will run at `http://cache.domain.example:8080/` and store the packages in `/srv/http/pacman-cache/`.

Install [nginx](https://wiki.archlinux.org/title/Nginx "Nginx") on the computer that is going to host the cache. Create the directory for the cache and adjust the permissions so nginx can write files to it:

```
# mkdir /srv/http/pacman-cache
# chown http:http /srv/http/pacman-cache
```

Use the [nginx pacman cache config](https://github.com/nastasie-octavian/nginx_pacman_cache_config/blob/c54eca4776ff162ab492117b80be4df95880d0e2/nginx.conf) as a starting point for `/etc/nginx/nginx.conf`. Check that the `resolver` directive works for your needs. In the upstream server blocks, configure the `proxy_pass` directives with addresses of official mirrors, see examples in the configuration file about the expected format. Once you are satisfied with the configuration file [start and enable nginx](https://wiki.archlinux.org/title/Nginx#Running "Nginx").

In order to use the cache each Arch Linux computer (including the one hosting the cache) must have the following line at the top of the `mirrorlist` file:

```
/etc/pacman.d/mirrorlist
```
```
Server = http://cache.domain.example:8080/$repo/os/$arch
...
```

**Note:** You will need to create a method to clear old packages, as the cache directory will continue to grow over time. `paccache` (which is provided by [pacman-contrib](https://archlinux.org/packages/?name=pacman-contrib)) can be used to automate this using retention criteria of your choosing. For example, `find /srv/http/pacman-cache/ -type d -exec paccache -v -r -k 2 -c {} \;` will keep the last 2 versions of packages in your cache directory.

#### Pacoloco proxy cache server

[Pacoloco](https://github.com/anatol/pacoloco) is an easy-to-use proxy cache server for *pacman* repositories. It also allows [automatic prefetching](https://github.com/anatol/pacoloco/commit/048b09956b0d8ef71c0ed1f804fd332d9ab5e3c8) of the cached packages.

It can be installed as [pacoloco](https://archlinux.org/packages/?name=pacoloco). Open the configuration file and add *pacman* mirrors:

```
/etc/pacoloco.yaml
```
```
port: 9129
repos:
  mycopy:
    urls:
      - http://mirror.lty.me/archlinux
      - http://mirrors.kernel.org/archlinux
```

[Restart](https://wiki.archlinux.org/title/Restart "Restart") `pacoloco.service` and the proxy repository will be available at `http://*myserver*:9129/repo/mycopy`.

#### Flexo proxy cache server

[Flexo](https://github.com/nroi/flexo) is yet another proxy cache server for *pacman* repositories. Flexo is available as [flexo-git](https://aur.archlinux.org/packages/flexo-git/)<sup><small>AUR</small></sup>. Once installed, [start](https://wiki.archlinux.org/title/Start "Start") the `flexo.service` unit.

Flexo runs on port `7878` by default. Enter `Server = http://*myserver*:7878/$repo/os/$arch` to the top of your `/etc/pacman.d/mirrorlist` so that *pacman* downloads packages via Flexo.

#### Synchronize pacman package cache using synchronization programs

Use [Syncthing](https://wiki.archlinux.org/title/Syncthing "Syncthing") or [Resilio Sync](https://wiki.archlinux.org/title/Resilio_Sync "Resilio Sync") to synchronize the *pacman* cache directories (i.e. `/var/cache/pacman/pkg`).

#### Preventing unwanted cache purges

By default, `pacman -Sc` removes package tarballs from the cache that correspond to packages that are not installed on the machine the command was issued on. Because *pacman* cannot predict what packages are installed on all machines that share the cache, it will end up deleting files that should not be.

To clean up the cache so that only *outdated* tarballs are deleted:

```
/etc/pacman.conf
```
```
[options]
CleanMethod = KeepCurrent
```

### Recreate a package from the file system

To recreate a package from the file system, use [fakepkg](https://aur.archlinux.org/packages/fakepkg/)<sup><small>AUR</small></sup>. Files from the system are taken as they are, hence any modifications will be present in the assembled package. Distributing the recreated package is therefore discouraged; see [ABS](https://wiki.archlinux.org/title/ABS "ABS") and [Arch Linux Archive](https://wiki.archlinux.org/title/Arch_Linux_Archive "Arch Linux Archive") for alternatives.

### List of installed packages

Keeping a list of all explicitly installed packages can be useful to backup a system or quicken the installation of a new one:

```
$ pacman -Qqe > pkglist.txt
```

**Note:**

- With option `-t`, the packages already required by other explicitly installed packages are not mentioned. If reinstalling from this list they will be installed but as dependencies only.
- With option `-n`, foreign packages (e.g. from [AUR](https://wiki.archlinux.org/title/AUR "AUR")) would be omitted from the list.
- Use `comm -13 <(pacman -Qqdt | sort) <(pacman -Qqdtt | sort) > optdeplist.txt` to also create a list of the installed optional dependencies which can be reinstalled with `--asdeps`.
- Use `pacman -Qqem > foreignpkglist.txt` to create the list of AUR and other foreign packages that have been explicitly installed.

To keep an up-to-date list of explicitly installed packages (e.g. in combination with a versioned `/etc/`), you can set up a [hook](https://wiki.archlinux.org/title/Pacman#Hooks "Pacman"). Example:

```
[Trigger]
Operation = Install
Operation = Remove
Type = Package
Target = *

[Action]
When = PostTransaction
Exec = /bin/sh -c '/usr/bin/pacman -Qqe > /etc/pkglist.txt'
```

### Install packages from a list

To install packages from a previously saved list of packages, while not reinstalling previously installed packages that are already up-to-date, run:

```
# pacman -S --needed - < pkglist.txt
```

However, it is likely foreign packages such as from the AUR or installed locally are present in the list. To filter out from the list the foreign packages, the previous command line can be enriched as follows:

```
# pacman -S --needed $(comm -12 <(pacman -Slq | sort) <(sort pkglist.txt))
```

Eventually, to make sure the installed packages of your system match the list and remove all the packages that are not mentioned in it:

```
# pacman -Rsu $(comm -23 <(pacman -Qq | sort) <(sort pkglist.txt))
```

**Tip:** These tasks can be automated. See [bacpac](https://aur.archlinux.org/packages/bacpac/)<sup><small>AUR</small></sup>, [packup](https://aur.archlinux.org/packages/packup/)<sup><small>AUR</small></sup>, [pacmanity](https://aur.archlinux.org/packages/pacmanity/)<sup><small>AUR</small></sup>, and [pug](https://aur.archlinux.org/packages/pug/)<sup><small>AUR</small></sup> for examples.

### Listing all changed files from packages

If you are suspecting file corruption (e.g. by software/hardware failure), but are unsure if files were corrupted, you might want to compare with the hash sums in the packages. This can be done with [pacutils](https://archlinux.org/packages/?name=pacutils):

```
# paccheck --sha256sum --quiet
```

For recovery of the database see [#Restore pacman's local database](https://wiki.archlinux.org/title/Pacman/#Restore_pacman's_local_database). The `mtree` files can also be [extracted as `.MTREE` from the respective package files](https://wiki.archlinux.org/title/Pacman/#Viewing_a_single_file_inside_a_.pkg_file).

**Note:** This should **not** be used as is when suspecting malicious changes! In this case security precautions such as using a live medium and an independent source for the hash sums are advised.

### Reinstalling all packages

To reinstall all native packages, use:

```
# pacman -Qqn | pacman -S -
```

Foreign (AUR) packages must be reinstalled separately; you can list them with `pacman -Qqm`.

Pacman preserves the [installation reason](https://wiki.archlinux.org/title/Installation_reason "Installation reason") by default.

### Restore pacman's local database

See [pacman/Restore local database](https://wiki.archlinux.org/title/Pacman/Restore_local_database "Pacman/Restore local database").

### Recovering a USB key from existing install

If you have Arch installed on a USB key and manage to mess it up (e.g. removing it while it is still being written to), then it is possible to re-install all the packages and hopefully get it back up and working again (assuming USB key is mounted in `/newarch`)

```
# pacman -S $(pacman -Qq --dbpath /newarch/var/lib/pacman) --root /newarch --dbpath /newarch/var/lib/pacman
```

### Viewing a single file inside a .pkg file

For example, if you want to see the contents of `/etc/systemd/logind.conf` supplied within the [systemd](https://archlinux.org/packages/?name=systemd) package:

```
$ bsdtar -xOf /var/cache/pacman/pkg/systemd-250.4-2-x86_64.pkg.tar.zst etc/systemd/logind.conf
```

Or you can use [vim](https://archlinux.org/packages/?name=vim) to browse the archive:

```
$ vim /var/cache/pacman/pkg/systemd-250.4-2-x86_64.pkg.tar.zst
```

### Find applications that use libraries from older packages

Already running processes do not automatically notice changes caused by updates. Instead, they continue using old library versions. That may be undesirable, due to potential issues related to security vulnerabilities or other bugs, and version incompatibility.

Processes depending on updated libraries may be found using either [htop](https://archlinux.org/packages/?name=htop), which highlights the names of the affected programs, or with a snippet based on [lsof](https://archlinux.org/packages/?name=lsof), which also prints the names of the libraries:

```
# lsof +c 0 | grep -w DEL | awk '1 { print $1 ": " $NF }' | sort -u
```

This solution will only detect files, that are normally kept opened by running processes, which basically limits it to shared libraries (`.so` files). It may miss some dependencies, like those of Java or Python applications.

### Installing only content in required languages

Many packages install documentation and translations in several languages. Some programs are designed to remove such unnecessary files, such as [localepurge](https://aur.archlinux.org/packages/localepurge/)<sup><small>AUR</small></sup>, which runs after a package is installed to delete the unneeded locale files. A more preemptive approach is provided through the `NoExtract` directive in `/etc/pacman.conf`, which prevent these files from ever being installed.

To prevent the installation of all translations for help files, except for the C locale, add:

```
NoExtract = usr/share/help/* !usr/share/help/C/*
```

To prevent the installation of all the HTML documentation, add:

```
NoExtract = usr/share/gtk-doc/html/*
NoExtract = usr/share/doc/HTML/*
```

**Warning:** Some users noted that removing **all** locales has resulted in unintended consequences with [dmenu](https://wiki.archlinux.org/title/Special:PermanentLink/460285#Dangerous_NoExtract_example "Special:PermanentLink/460285"), [Steam](https://wiki.archlinux.org/title/Special:PermanentLink/767628#Languages:_NoExtract_usr/share/X11/locale/* "Special:PermanentLink/767628"), even under [Xorg](https://bbs.archlinux.org/viewtopic.php?id=250846). The following example is adjusted to avoid such issues, by installing only English (US) files and the required C locales.

To prevent the installation of the various [locales](https://wiki.archlinux.org/title/Locale "Locale"), except the required ones, add:

```
NoExtract = usr/share/locale/* usr/share/X11/locale/*/* usr/share/i18n/locales/* opt/google/chrome/locales/* !usr/share/X11/locale/C/*
NoExtract = !usr/share/X11/locale/compose.dir !usr/share/X11/locale/iso8859-1/*
NoExtract = !*locale*/en*/* !usr/share/*locale*/locale.*
NoExtract = !usr/share/*locales/en_?? !usr/share/*locales/i18n* !usr/share/*locales/iso*
NoExtract = usr/share/i18n/charmaps/* !usr/share/i18n/charmaps/UTF-8.gz !usr/share/i18n/charmaps/ANSI_X3.4-1968.gz
NoExtract = !usr/share/*locales/trans*
NoExtract = !usr/share/*locales/C !usr/share/*locales/POSIX
```

To prevent the installation of the translated [man pages](https://wiki.archlinux.org/title/Man_page "Man page"), add:

```
NoExtract = usr/share/man/* !usr/share/man/man*
```

To prevent the installation of the language files in [vim-runtime](https://archlinux.org/packages/?name=vim-runtime), add:

```
NoExtract = usr/share/vim/vim*/lang/*
```

To prevent the installation of all but English content in [Qt](https://wiki.archlinux.org/title/Qt "Qt") applications, add:

```
NoExtract = usr/share/*/translations/*.qm usr/share/*/nls/*.qm usr/share/qt/phrasebooks/*.qph usr/share/qt/translations/*.pak !*/en-US.pak
```

To prevent the installation of all but English content in [Electron](https://wiki.archlinux.org/title/Electron "Electron") applications, add:

```
NoExtract = usr/share/*/locales/*.pak opt/*/locales/*.pak usr/lib/*/locales/*.pak !*/en-US.pak
```

To prevent the installation of English help files in [LibreOffice](https://wiki.archlinux.org/title/LibreOffice "LibreOffice"), add:

```
NoExtract = usr/lib/libreoffice/help/en-US/*
```

To prevent the installation of all but English content from [OnlyOffice](https://wiki.archlinux.org/title/List_of_applications/Documents#Office_suites "List of applications/Documents"), add:

```
NoExtract = opt/onlyoffice/desktopeditors/dictionaries/* !opt/onlyoffice/desktopeditors/dictionaries/en_US/*
NoExtract = opt/onlyoffice/desktopeditors/editors/web-apps/apps/*/main/locale/* !*/en.json
NoExtract = opt/onlyoffice/desktopeditors/editors/web-apps/apps/*/main/resources/help/*/* !*/help/en/*
NoExtract = opt/onlyoffice/desktopeditors/editors/web-apps/apps/*/main/resources/symboltable/* !*/en.json
NoExtract = opt/onlyoffice/desktopeditors/editors/web-apps/apps/documenteditor/forms/locale/* !*/en.json
NoExtract = opt/onlyoffice/desktopeditors/editors/web-apps/apps/spreadsheeteditor/main/resources/formula-lang/* !*/en.json !*/en_desc.json
NoExtract = opt/onlyoffice/desktopeditors/converter/empty/*/* !opt/onlyoffice/desktopeditors/converter/empty/en-US/*
NoExtract = opt/onlyoffice/desktopeditors/converter/templates/*/* !opt/onlyoffice/desktopeditors/converter/templates/EN/*
```

To prevent the installation of all but the English [iBus](https://wiki.archlinux.org/title/IBus "IBus") dictionary for emojis, add:

```
NoExtract = usr/share/ibus/dicts/emoji-*.dict !usr/share/ibus/dicts/emoji-en.dict
```

### Installing packages on bad connection

When trying to install a package from a bad connection (e.g. a train using a cell phone), use the `--disable-download-timeout` option to lessen the chance of receiving errors such as:

```
error: failed retrieving file […] Operation too slow. Less than 1 bytes/sec transferred the last 10 seconds
```

or

```
error: failed retrieving file […] Operation timed out after 10014 milliseconds with 0 out of 0 bytes received
```

## Performance

### Download speeds

When downloading packages *pacman* uses the mirrors in the order they are in `/etc/pacman.d/mirrorlist`. The mirror which is at the top of the list by default however may not be the fastest for you. To select a faster mirror, see [Mirrors](https://wiki.archlinux.org/title/Mirrors "Mirrors").

Pacman's speed in downloading packages can also be improved by [enabling parallel downloads](https://wiki.archlinux.org/title/Pacman#Enabling_parallel_downloads "Pacman"), a major feature request ([FS#20056](https://bugs.archlinux.org/task/20056)) added with [pacman 6.0.0](https://gitlab.archlinux.org/pacman/pacman/-/blob/master/NEWS#L80).

Instead of *pacman*'s built-in file downloader, a separate application can also be used to download packages.

In all cases, make sure you have the latest *pacman* before doing any modifications.

```
# pacman -Syu
```

#### Powerpill

[Powerpill](https://wiki.archlinux.org/title/Powerpill "Powerpill") is a *pacman* wrapper that uses parallel and segmented downloading to try to speed up downloads for *pacman*.

#### wget

This is also very handy if you need more powerful proxy settings than *pacman*'s built-in capabilities.

To use `wget`, first [install](https://wiki.archlinux.org/title/Install "Install") the [wget](https://archlinux.org/packages/?name=wget) package then modify `/etc/pacman.conf` by uncommenting the following line in the `[options]` section:

```
XferCommand = /usr/bin/wget --passive-ftp --show-progress -c -q -N %u
```

Instead of uncommenting the `wget` parameters in `/etc/pacman.conf`, you can also modify the `wget` configuration file directly (the system-wide file is `/etc/wgetrc`, per user files are `$HOME/.wgetrc`).

#### aria2

[aria2](https://wiki.archlinux.org/title/Aria2 "Aria2") is a lightweight download utility with support for resumable and segmented HTTP/HTTPS and FTP downloads. aria2 allows for multiple and simultaneous HTTP/HTTPS and FTP connections to an Arch mirror, which should result in an increase in download speeds for both file and package retrieval.

**Note:** Using aria2c in *pacman*'s XferCommand will **not** result in parallel downloads of multiple packages. Pacman invokes the XferCommand with a single package at a time and waits for it to complete before invoking the next. To download multiple packages in parallel, see [Powerpill](https://wiki.archlinux.org/title/Powerpill "Powerpill").

Install [aria2](https://archlinux.org/packages/?name=aria2), then edit `/etc/pacman.conf` by adding the following line to the `[options]` section:

```
XferCommand = /usr/bin/aria2c --allow-overwrite=true --continue=true --file-allocation=none --log-level=error --max-tries=2 --max-connection-per-server=2 --max-file-not-found=5 --min-split-size=5M --no-conf --remote-time=true --summary-interval=60 --timeout=5 --dir=/ --out %o %u
```

See [aria2c(1) § OPTIONS](https://man.archlinux.org/man/aria2c.1#OPTIONS) for used aria2c options.

- `-d, --dir`: The directory to store the downloaded file(s) as specified by *pacman*.
- `-o, --out`: The output file name(s) of the downloaded file(s).
- `%o`: Variable which represents the local filename(s) as specified by *pacman*.
- `%u`: Variable which represents the download URL as specified by *pacman*.

#### Other applications

There are other downloading applications that you can use with *pacman*. Here they are, and their associated XferCommand settings:

- `snarf`: `XferCommand = /usr/bin/snarf -N %u`
- `lftp`: `XferCommand = /usr/bin/lftp -c pget %u`
- `axel`: `XferCommand = /usr/bin/axel -n 2 -v -a -o %o %u`
- `hget`: `XferCommand = /usr/bin/hget %u -n 2 -skip-tls false` (please read the [documentation on the Github project page](https://github.com/huydx/hget) for more info)
- `saldl`: `XferCommand = /usr/bin/saldl -c6 -l4 -s2m -o %o %u` (please read the [documentation on the project page](https://saldl.github.io/) for more info)

## Utilities

- **isfree** — A Bash script to list non-free packages. Based on Parabola's blacklist.

[https://github.com/leo-arch/isfree](https://github.com/leo-arch/isfree) || [isfree](https://aur.archlinux.org/packages/isfree/)<sup><small>AUR</small></sup>

- **Lostfiles** — Script that identifies files not owned by any package.

[https://github.com/graysky2/lostfiles](https://github.com/graysky2/lostfiles) || [lostfiles](https://archlinux.org/packages/?name=lostfiles)

- **pacutils** — Helper library for libalpm based programs.

[https://github.com/andrewgregory/pacutils](https://github.com/andrewgregory/pacutils) || [pacutils](https://archlinux.org/packages/?name=pacutils)

- **[pkgfile](https://wiki.archlinux.org/title/Pkgfile "Pkgfile")** — Tool that finds what package owns a file.

[https://github.com/falconindy/pkgfile](https://github.com/falconindy/pkgfile) || [pkgfile](https://archlinux.org/packages/?name=pkgfile)

- **pkgtop** — Interactive package manager and resource monitor designed for the GNU/Linux.

[https://github.com/orhun/pkgtop](https://github.com/orhun/pkgtop) || [pkgtop-git](https://aur.archlinux.org/packages/pkgtop-git/)<sup><small>AUR</small></sup>

- **[Powerpill](https://wiki.archlinux.org/title/Powerpill "Powerpill")** — Uses parallel and segmented downloading through [aria2](https://wiki.archlinux.org/title/Aria2 "Aria2") and [Reflector](https://wiki.archlinux.org/title/Reflector "Reflector") to try to speed up downloads for *pacman*.

[https://xyne.dev/projects/powerpill/](https://xyne.dev/projects/powerpill/) || [powerpill](https://aur.archlinux.org/packages/powerpill/)<sup><small>AUR</small></sup>

- **repoctl** — Tool to help manage local repositories.

[https://github.com/cassava/repoctl](https://github.com/cassava/repoctl) || [repoctl](https://aur.archlinux.org/packages/repoctl/)<sup><small>AUR</small></sup>

- **repose** — An Arch Linux repository building tool.

[https://github.com/vodik/repose](https://github.com/vodik/repose) || [repose](https://archlinux.org/packages/?name=repose)

- **[snap-pac](https://wiki.archlinux.org/title/Snapper#Wrapping_pacman_transactions_in_snapshots "Snapper")** — Make *pacman* automatically use snapper to create pre/post snapshots like openSUSE's YaST.

[https://github.com/wesbarnett/snap-pac](https://github.com/wesbarnett/snap-pac) || [snap-pac](https://archlinux.org/packages/?name=snap-pac)

- **vrms-arch** — A virtual Richard M. Stallman to tell you which non-free packages are installed.

[https://github.com/orospakr/vrms-arch](https://github.com/orospakr/vrms-arch) || [vrms-arch-git](https://aur.archlinux.org/packages/vrms-arch-git/)<sup><small>AUR</small></sup>

### Graphical

**Warning:** PackageKit opens up system permissions by default, and is otherwise [not recommended](https://github.com/archlinux/archinstall/issues/1321#issuecomment-1151343223) for general usage. See [FS#50459](https://bugs.archlinux.org/task/50459) and [FS#57943](https://bugs.archlinux.org/task/57943).

- **Deepin App Store** — Third party app store for DDE built with DTK, using PackageKit. Supports [AppStream metadata](https://www.freedesktop.org/wiki/Distributions/AppStream/).

[https://github.com/dekzi/dde-store](https://github.com/dekzi/dde-store) || [deepin-store](https://archlinux.org/packages/?name=deepin-store)

- **Discover** — Qt 5 application manager using PackageKit written in C++/QML. Supports [AppStream metadata](https://www.freedesktop.org/wiki/Distributions/AppStream/), [Flatpak](https://wiki.archlinux.org/title/Flatpak "Flatpak") and [firmware updates](https://wiki.archlinux.org/title/Fwupd "Fwupd"). Part of [plasma](https://archlinux.org/groups/x86_64/plasma/).

[https://apps.kde.org/discover/](https://apps.kde.org/discover/) || [discover](https://archlinux.org/packages/?name=discover)

- **GNOME PackageKit** — GTK 3 package manager using PackageKit written in C.

[https://freedesktop.org/software/PackageKit/](https://freedesktop.org/software/PackageKit/) || [gnome-packagekit](https://archlinux.org/packages/?name=gnome-packagekit)

- **pcurses** — Curses TUI *pacman* wrapper written in C++.

[https://github.com/schuay/pcurses](https://github.com/schuay/pcurses) || [pcurses](https://aur.archlinux.org/packages/pcurses/)<sup><small>AUR</small></sup>

- **tkPacman** — Tk pacman wrapper written in Tcl.

[https://sourceforge.net/projects/tkpacman](https://sourceforge.net/projects/tkpacman) || [tkpacman](https://aur.archlinux.org/packages/tkpacman/)<sup><small>AUR</small></sup>