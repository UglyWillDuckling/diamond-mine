---
author:
  - "[[Linuxize]]"
created: 2025-04-01
published: 2018-09-08
source: https://linuxize.com/post/how-to-create-and-extract-archives-using-the-tar-command-in-linux/
tags:
  - howto/tar
  - examples
about:
  - "[[tar command]]"
---
The `tar` command creates tar files by converting a group of files into an archive. It also can extract tar archives, display a list of the files included in the archive, add additional files to an existing archive, and various other kinds of operations.

Tar was originally designed for creating archives to store files on magnetic tape, which is why it has its name “ **T** ape **AR** chive”.

This article shows how to use the `tar` command to extract, list, and create tar archives through practical examples and detailed explanations of the most common tar options.

## tar Command Syntax

There are two versions of tar, [BSD tar](https://www.freebsd.org/cgi/man.cgi?query=bsdtar), and [GNU tar](https://www.gnu.org/software/tar/), with some functional differences. Most Linux systems come with GNU tar pre-installed by default.

The general syntax for the `tar` command is as follows:

```sh
tar [OPERATION_AND_OPTIONS] [ARCHIVE_NAME] [FILE_NAME(s)]
```
- `OPERATION` - Only one operation argument is allowed and required. The most frequently used operations are:
	- `--create` ( `-c` ) - Create a new tar archive.
	- `--extract` ( `-x` ) - Extract the entire archive or one or more files from an archive.
	- `--list` ( `-t` ) - Display a list of the files included in the archive
- [`OPTIONS`](https://linux.die.net/man/1/tar) - The most frequently used operations are:
	- `--verbose` ( `-v` ) - Show the files being processed by the tar command.
	- `--file=archive=name` ( `-f archive-name` ) - Specifies the archive file name.
- `ARCHIVE_NAME` - The name of the archive.
- `FILE_NAME(s)` - A space-separated list of filenames to be extracted from the archive. If not provided, the entire archive is extracted.

When executing tar commands, you can use the long or the short form of the `tar` operations and options. The long forms are more readable, while the short forms are faster to type. The long-form options are prefixed with a double dash ( `--` ). The short-form options are prefixed with a single dash ( `-` ), which can be omitted.

## Creating Tar Archive

Tar supports a vast range of compression programs such as `gzip`, `bzip2`, `lzip`, `lzma`, `lzop`, `xz` and `compress`. When creating compressed tar archives, it is an accepted convention to append the compressor suffix to the archive file name. For example, if an archive has been compressed with [`gzip`](https://linuxize.com/post/gzip-command-in-linux/), it should be named archive.tar.gz.

To create a tar archive, use the `-c` option followed by `-f` and the name of the archive.

For example, to create an archive named `archive.tar` from the files named `file1`, `file2`, `file3`, you would run the following command:

```markdown
tar -cf archive.tar file1 file2 file3
```

Here is the equivalent command using the long-form options:

```markdown
tar --create --file=archive.tar file1 file2 file3
```

You can create archives from the contents of one or more directories or files. By default, directories are archived recursively unless `--no-recursion` option is specified.

The following example will create an archive named `user_backup.tar` of the `/home/user` directory:

```markdown
tar -cf backup.tar /home/user
```

Use the `-v` option if you want to see the files that are being processed.

## Creating Tar Gz Archive

Gzip is the most popular algorithm for compressing tar files. When compressing tar archives with gzip, the archive name should end with either `tar.gz` or `tgz`.

The `-z` option tells tar to compress the archive using the `gzip` algorithm as it is created. For example, to [create a tar.gz](https://linuxize.com/post/how-to-create-tar-gz-file/) archive from given files, you would run the following command:

```markdown
tar -czf archive.tar.gz file1 file2
```

## Creating Tar Bz2 Archive

Another popular algorithm for compressing tar files is bzip2. When using bzip2, the archive name should end with either `tar.bz2` or `tbz`.

To compress the archive with the `bzip2` algorithm, invoke `tar` with the `-j` option. The following command creates a `tar.bz2` archive from the given files:

```markdown
tar -cjf archive.tar.bz2 file1 file2
```

## Listing Tar Archives

When used with the `--list` ( `-t` ) option, the `tar` command lists the content of a tar archive without extracting it.

The command below, will list the content of the `archive.tar` file:

```markdown
tar -tf archive.tar
```
```markdown
file1file2file3
```

To get more information such as the [file owner](https://linuxize.com/post/linux-chown-command/), file size, [timestamp](https://linuxize.com/post/linux-touch-command/) use the `--verbose` ( `-v` ) option:

```markdown
tar -tvf archive.tar
```
```markdown
-rw-r--r-- linuxize/users       0 2018-09-08 01:19 file1-rw-r--r-- linuxize/users       0 2018-09-08 01:19 file2-rw-r--r-- linuxize/users       0 2018-09-08 01:19 file3
```

## Extracting Tar Archive

Most of the archived files in Linux are archived and compressed using a tar or tar.gz format. Knowing how to extract these files from the command line is important.

To extract a tar archive, use the `--extract` ( `-x` ) option followed by the archive name:

```markdown
tar -xf archive.tar
```

It is also common to add the `-v` option to print the names of the files being extracted.

```markdown
tar -xvf archive.tar
```

## Extracting Tar Archive in a Different Directory

By default, tar will extract the archive contents in the [current working directory](https://linuxize.com/post/current-working-directory/). Use the `--directory` ( `-C` ) to extract archive files in a specific directory:

For example, to extract the archive contents to the `/opt/files` directory, you can use:

```markdown
tar -xf archive.tar -C /opt/files
```

## Extracting Tar Gz and Tar Bz2 Archives

When extracting compressed archives such as [`tar.gz`](https://linuxize.com/post/how-to-extract-unzip-tar-gz-file/) or [`tar.bz2`](https://linuxize.com/post/how-to-extract-unzip-tar-bz2-file/), you do not have to specify a decompression option. The command is the same as when extracting `tar` archive:

```markdown
tar -xf archive.tar.gz
```
```markdown
tar -xf archive.tar.bz2
```

## Extracting Specific Files from a Tar Archive

Sometimes instead of extracting the whole archive, you might need to extract only a few files from it.

To extract a specific file(s) from a tar archive, append a space-separated list of file names to be extracted after the archive name:

```markdown
tar -xf archive.tar file1 file2
```

When extracting files, you must provide their exact names, including the path, as printed by `--list` ( `-t` ).

Extracting one or more directories from an archive is the same as extracting files:

```markdown
tar -xf archive.tar dir1 dir2
```

If you try to extract a file that doesn’t exist, an error message similar to the following will be displayed:

```markdown
tar -xf archive.tar README
```
```output
tar: README: Not found in archive
tar: Exiting with failure status due to previous errors
```

## Extracting Files from a Tar Archive using Wildcard

To extract files from an archive based on a wildcard pattern, use the `--wildcards` switch and quote the pattern to prevent the shell from interpreting it.

For example, to extract files whose names end in `.js` (Javascript files), you can use:

```markdown
tar -xf archive.tar --wildcards '*.js'
```

## Adding Files to Existing Tar Archive

To add files or directories to an existing tar archive, use the `--append` ( `-r` ) operation.

For example, to add a file named `newfile` to archive.tar, you would run:

```markdown
tar -rvf archive.tar newfile
```

## Removing Files from a Tar Archive

Use the `--delete` operation to remove files from an archive.

The following example shows how to remove the file `file1` from archive.tar,:

```markdown
tar --delete -f archive.tar file1
```

## Conclusion

The most common uses of the `tar` command are to create and extract a tar archive. To extract an archive, use the `tar -xf` command followed by the archive name, and to create a new one use `tar -czf` followed by the archive name and the files and directories you want to add to the archive.

For more information about the tar command, consult the [Gnu tar documentation page](https://www.gnu.org/software/tar/).