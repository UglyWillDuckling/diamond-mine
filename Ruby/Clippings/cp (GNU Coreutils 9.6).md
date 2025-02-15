---
source: "https://www.gnu.org/software/coreutils/manual/html_node/cp-invocation.html"
author:
published:
created: 2025-02-16
tags:
---
---

### 11.1 `cp`: Copy files and directories [¶](https://www.gnu.org/software/coreutils/manual/html_node/#cp_003a-Copy-files-and-directories)

`cp` copies files (or, optionally, directories). The copy is completely independent of the original. You can either copy one file to another, or copy arbitrarily many files to a destination directory. Synopses:

```
cp [option]... [-T] source dest
cp [option]... source... directory
cp [option]... -t directory source...
```

- If two file names are given, `cp` copies the first file to the second.
- If the \--target-directory (\-t) option is given, or failing that if the last file is a directory and the \--no-target-directory (\-T) option is not given, `cp` copies each source file to the specified directory, using the sources’ names.

Generally, files are written just as they are read. For exceptions, see the \--sparse option below.

By default, `cp` does not copy directories. However, the \-R, \-a, and \-r options cause `cp` to copy recursively by descending into source directories and copying files to corresponding destination directories.

When copying from a symbolic link, `cp` normally follows the link only when not copying recursively or when \--link (\-l) is used. This default can be overridden with the \--archive (\-a), \-d, \--dereference (\-L), \--no-dereference (\-P), and \-H options. If more than one of these options is specified, the last one silently overrides the others.

When copying to a symbolic link, `cp` follows the link only when it refers to an existing regular file. However, when copying to a dangling symbolic link, `cp` refuses by default, and fails with a diagnostic, since the operation is inherently dangerous. This behavior is contrary to historical practice and to POSIX. Set `POSIXLY_CORRECT` to make `cp` attempt to create the target of a dangling destination symlink, in spite of the possible risk. Also, when an option like \--backup or \--link acts to rename or remove the destination before copying, `cp` renames or removes the symbolic link rather than the file it points to.

By default, `cp` copies the contents of special files only when not copying recursively. This default can be overridden with the \--copy-contents option.

`cp` generally refuses to copy a file onto itself, with the following exception: if \--force --backup is specified with source and dest identical, and referring to a regular file, `cp` will make a backup file, either regular or numbered, as specified in the usual ways (see [Backup options](https://www.gnu.org/software/coreutils/manual/html_node/Backup-options.html)). This is useful when you simply want to make a backup of an existing file before changing it.

The program accepts the following options. Also see [Common options](https://www.gnu.org/software/coreutils/manual/html_node/Common-options.html).

‘\-a’ [¶](https://www.gnu.org/software/coreutils/manual/html_node/#index-_002da-7)

‘\--archive’

Preserve as much as possible of the structure and attributes of the original files in the copy (but do not attempt to preserve internal directory structure; i.e., ‘ls -U’ may list the entries in a copied directory in a different order). Try to preserve SELinux security context and extended attributes (xattr), but ignore any failure to do that and print no corresponding diagnostic. Equivalent to \-dR --preserve=all with the reduced diagnostics.

‘\--attributes-only’ [¶](https://www.gnu.org/software/coreutils/manual/html_node/#index-_002d_002dattributes_002donly)

Copy only the specified attributes of the source file to the destination. If the destination already exists, do not alter its contents. See the \--preserve option for controlling which attributes to copy.

‘\-b’ [¶](https://www.gnu.org/software/coreutils/manual/html_node/#index-_002db-14)

‘\--backup\[=method\]’

See [Backup options](https://www.gnu.org/software/coreutils/manual/html_node/Backup-options.html). Make a backup of each file that would otherwise be overwritten or removed. As a special case, `cp` makes a backup of source when the force and backup options are given and source and dest are the same name for an existing, regular file. One useful application of this combination of options is this tiny Bourne shell script:

```
#!/bin/sh
# Usage: backup FILE...
# Create a GNU-style backup of each listed FILE.
fail=0
for i; do
  cp --backup --force --preserve=all -- "$i" "$i" || fail=1
done
exit $fail
```

‘\--copy-contents’ [¶](https://www.gnu.org/software/coreutils/manual/html_node/#index-directories_002c-copying-recursively)

If copying recursively, copy the contents of any special files (e.g., FIFOs and device files) as if they were regular files. This means trying to read the data in each source file and writing it to the destination. It is usually a mistake to use this option, as it normally has undesirable effects on special files like FIFOs and the ones typically found in the /dev directory. In most cases, `cp -R --copy-contents` will hang indefinitely trying to read from FIFOs and special files like /dev/console, and it will fill up your destination file system if you use it to copy /dev/zero. This option has no effect unless copying recursively, and it does not affect the copying of symbolic links.

‘\-d’ [¶](https://www.gnu.org/software/coreutils/manual/html_node/#index-_002dd-11)

Copy symbolic links as symbolic links rather than copying the files that they point to, and preserve hard links between source files in the copies. Equivalent to \--no-dereference --preserve=links.

‘\--debug’ [¶](https://www.gnu.org/software/coreutils/manual/html_node/#index-_002d_002ddebug-1)

Print extra information to stdout, explaining how files are copied. This option implies the \--verbose option.

‘\-f’ [¶](https://www.gnu.org/software/coreutils/manual/html_node/#index-_002df-10)

‘\--force’

When copying without this option and an existing destination file cannot be opened for writing, the copy fails. However, with \--force, when a destination file cannot be opened, `cp` then tries to recreate the file by first removing it. The \--force option alone will not remove dangling symlinks. When this option is combined with \--link (\-l) or \--symbolic-link (\-s), the destination link is replaced, and unless \--backup (\-b) is also given there is no brief moment when the destination does not exist. Also see the description of \--remove-destination.

This option is independent of the \--interactive or \-i option: neither cancels the effect of the other.

This option is ignored when the \--no-clobber or \-n option is also used.

‘\-H’ [¶](https://www.gnu.org/software/coreutils/manual/html_node/#index-_002dH-2)

If a command line argument specifies a symbolic link, then copy the file it points to rather than the symbolic link itself. However, copy (preserving its nature) any symbolic link that is encountered via recursive traversal.

‘\-i’ [¶](https://www.gnu.org/software/coreutils/manual/html_node/#index-_002di-11)

‘\--interactive’

When copying a file other than a directory, prompt whether to overwrite an existing destination file, and fail if the response is not affirmative. The \-i option overrides a previous \-n option.

‘\-l’ [¶](https://www.gnu.org/software/coreutils/manual/html_node/#index-_002dl-8)

‘\--link’

Make hard links instead of copies of non-directories.

‘\-L’ [¶](https://www.gnu.org/software/coreutils/manual/html_node/#index-_002dL-3)

‘\--dereference’

Follow symbolic links when copying from them. With this option, `cp` cannot create a symbolic link. For example, a symlink (to regular file) in the source tree will be copied to a regular file in the destination tree.

‘\-n’ [¶](https://www.gnu.org/software/coreutils/manual/html_node/#index-_002dn-11)

‘\--no-clobber’

Do not overwrite an existing file; silently skip instead. This option overrides a previous \-i option. This option is mutually exclusive with \-b or \--backup option. This option is deprecated due to having a different exit status from other platforms. See also the \--update option which will give more control over how to deal with existing files in the destination, and over the exit status in particular.

‘\-P’ [¶](https://www.gnu.org/software/coreutils/manual/html_node/#index-_002dP-1)

‘\--no-dereference’

Copy symbolic links as symbolic links rather than copying the files that they point to. This option affects only symbolic links in the source; symbolic links in the destination are always followed if possible.

‘\-p’ [¶](https://www.gnu.org/software/coreutils/manual/html_node/#index-_002dp-3)

‘\--preserve\[=attribute\_list\]’

Preserve the specified attributes of the original files. If specified, the attribute\_list must be a comma-separated list of one or more of the following strings:

‘mode’ [¶](https://www.gnu.org/software/coreutils/manual/html_node/#index-access-control-lists-_0028ACLs_0029)

Preserve attributes relevant to access permissions, including file mode bits and (if possible) access control lists (ACLs). ACL preservation is system-dependent, and ACLs are not necessarily translated when the source and destination are on file systems with different ACL formats (e.g., NFSv4 versus POSIX formats).

‘ownership’

Preserve the owner and group. On most modern systems, only users with appropriate privileges may change the owner of a file, and ordinary users may preserve the group ownership of a file only if they happen to be a member of the desired group.

‘timestamps’

Preserve the times of last access and last modification, when possible. On older systems, it is not possible to preserve these attributes when the affected file is a symbolic link. However, many systems now provide the `utimensat` function, which makes it possible even for symbolic links.

‘links’

Preserve in the destination files any links between corresponding source files. With \-L or \-H, this option can convert symbolic links to hard links. For example,

```
$ mkdir c; : > a; ln -s a b; cp -aH a b c; ls -i1 c
74161745 a
74161745 b
```

Although b is a symlink to regular file a, the files in the destination directory c/ are hard-linked. Since \-a implies \--no-dereference it would copy the symlink, but the later \-H tells `cp` to dereference the command line arguments where it then sees two files with the same inode number. Then the \--preserve=links option also implied by \-a will preserve the perceived hard link.

Here is a similar example that exercises `cp`’s \-L option:

```
$ mkdir b c; (cd b; : > a; ln -s a b); cp -aL b c; ls -i1 c/b
74163295 a
74163295 b
```

‘context’

Preserve SELinux security context of the file, or fail with full diagnostics.

‘xattr’ [¶](https://www.gnu.org/software/coreutils/manual/html_node/#index-access-control-lists-_0028ACLs_0029-1)

Preserve extended attributes of the file, or fail with full diagnostics. If `cp` is built without xattr support, ignore this option. If SELinux context, ACLs or Capabilities are implemented using xattrs, they are preserved implicitly by this option as well, i.e., even without specifying \--preserve=mode or \--preserve=context.

‘all’

Preserve all file attributes. Equivalent to specifying all of the above, but with the difference that failure to preserve SELinux security context or extended attributes does not change `cp`’s exit status. In contrast to \-a, all but ‘Operation not supported’ warnings are output.

Using \--preserve with no attribute\_list is equivalent to \--preserve=mode,ownership,timestamps.

In the absence of this option, the permissions of existing destination files are unchanged. Each new file is created with the mode of the corresponding source file minus the set-user-ID, set-group-ID, and sticky bits as the create mode; the operating system then applies either the umask or a default ACL, possibly resulting in a more restrictive file mode. See [File permissions](https://www.gnu.org/software/coreutils/manual/html_node/File-permissions.html).

‘\--no-preserve=attribute\_list’ [¶](https://www.gnu.org/software/coreutils/manual/html_node/#index-file-information_002c-preserving)

Do not preserve the specified attributes. The attribute\_list has the same form as for \--preserve.

‘\--parents’ [¶](https://www.gnu.org/software/coreutils/manual/html_node/#index-_002d_002dparents)

Form the name of each destination file by appending to the target directory a slash and the specified name of the source file. The last argument given to `cp` must be the name of an existing directory. For example, the command:

```
cp --parents a/b/c existing_dir
```

copies the file a/b/c to existing\_dir/a/b/c, creating any missing intermediate directories.

‘\-R’ [¶](https://www.gnu.org/software/coreutils/manual/html_node/#index-_002dR-3)

‘\-r’

‘\--recursive’

Copy directories recursively. By default, do not follow symbolic links in the source unless used together with the \--link (\-l) option; see the \--archive (\-a), \-d, \--dereference (\-L), \--no-dereference (\-P), and \-H options. Special files are copied by creating a destination file of the same type as the source; see the \--copy-contents option. It is not portable to use \-r to copy symbolic links or special files. On some non-GNU systems, \-r implies the equivalent of \-L and \--copy-contents for historical reasons. Also, it is not portable to use \-R to copy symbolic links unless you also specify \-P, as POSIX allows implementations that dereference symbolic links by default.

‘\--reflink\[=when\]’ [¶](https://www.gnu.org/software/coreutils/manual/html_node/#index-_002d_002dreflink_005b_003dwhen_005d)

Perform a lightweight, copy-on-write (COW) copy, if supported by the file system. Once it has succeeded, beware that the source and destination files share the same data blocks as long as they remain unmodified. Thus, if an I/O error affects data blocks of one of the files, the other suffers the same fate.

The when value can be one of the following:

‘always’

If the copy-on-write operation is not supported then report the failure for each file and exit with a failure status. Plain \--reflink is equivalent to \--reflink=always.

‘auto’

If the copy-on-write operation is not supported then fall back to the standard copy behavior. This is the default if no \--reflink option is given.

‘never’

Disable copy-on-write operation and use the standard copy behavior.

This option is overridden by the \--link, \--symbolic-link and \--attributes-only options, thus allowing it to be used to configure the default data copying behavior for `cp`.

‘\--remove-destination’ [¶](https://www.gnu.org/software/coreutils/manual/html_node/#index-_002d_002dremove_002ddestination)

Remove each existing destination file before attempting to open it (contrast with \-f above).

‘\--sparse=when’ [¶](https://www.gnu.org/software/coreutils/manual/html_node/#index-_002d_002dsparse_003dwhen)

A *sparse file* contains *holes* – a sequence of zero bytes that does not occupy any file system blocks; the ‘read’ system call reads these as zeros. This can both save considerable space and increase speed, since many binary files contain lots of consecutive zero bytes. By default, `cp` detects holes in input source files via a crude heuristic and makes the corresponding output file sparse as well. Only regular files may be sparse.

The when value can be one of the following:

‘auto’

The default behavior: if the input file is sparse, attempt to make the output file sparse, too. However, if an output file exists but refers to a non-regular file, then do not attempt to make it sparse.

‘always’

For each sufficiently long sequence of zero bytes in the input file, attempt to create a corresponding hole in the output file, even if the input file does not appear to be sparse. This is useful when the input file resides on a file system that does not support sparse files (for example, ‘efs’ file systems in SGI IRIX 5.3 and earlier), but the output file is on a type of file system that does support them. Holes may be created only in regular files, so if the destination file is of some other type, `cp` does not even try to make it sparse.

‘never’

Never make the output file sparse. This is useful in creating a file for use with the `mkswap` command, since such a file must not have any holes.

For example, with the following alias, `cp` will use the minimum amount of space supported by the file system. (Older versions of `cp` can also benefit from \--reflink=auto here.)

```
alias cp='cp --sparse=always'
```

‘\--strip-trailing-slashes’ [¶](https://www.gnu.org/software/coreutils/manual/html_node/#index-_002d_002dstrip_002dtrailing_002dslashes)

Remove any trailing slashes from each source argument. See [Trailing slashes](https://www.gnu.org/software/coreutils/manual/html_node/Trailing-slashes.html).

‘\-s’ [¶](https://www.gnu.org/software/coreutils/manual/html_node/#index-_002ds-16)

‘\--symbolic-link’

Make symbolic links instead of copies of non-directories. All source file names must be absolute (starting with ‘/’) unless the destination files are in the current directory. This option merely results in an error message on systems that do not support symbolic links.

‘\-S suffix’ [¶](https://www.gnu.org/software/coreutils/manual/html_node/#index-_002dS-6)

‘\--suffix=suffix’

Append suffix to each backup file made with \-b. See [Backup options](https://www.gnu.org/software/coreutils/manual/html_node/Backup-options.html).

‘\-t directory’ [¶](https://www.gnu.org/software/coreutils/manual/html_node/#index-_002dt-11)

‘\--target-directory=directory’

Specify the destination directory. See [Target directory](https://www.gnu.org/software/coreutils/manual/html_node/Target-directory.html).

‘\-T’ [¶](https://www.gnu.org/software/coreutils/manual/html_node/#index-_002dT-5)

‘\--no-target-directory’

Do not treat the last operand specially when it is a directory or a symbolic link to a directory. See [Target directory](https://www.gnu.org/software/coreutils/manual/html_node/Target-directory.html).

‘\-u’ [¶](https://www.gnu.org/software/coreutils/manual/html_node/#index-_002du-6)

‘\--update\[=which\]’

Do not copy a non-directory that has an existing destination with the same or newer modification timestamp; instead, silently skip the file without failing. If timestamps are being preserved, the comparison is to the source timestamp truncated to the resolutions of the destination file system and of the system calls used to update timestamps; this avoids duplicate work if several ‘cp -pu’ commands are executed with the same source and destination. This option is ignored if the \-n or \--no-clobber option is also specified. Also, if \--preserve=links is also specified (like with ‘cp -au’ for example), that will take precedence; consequently, depending on the order that files are processed from the source, newer files in the destination may be replaced, to mirror hard links in the source.

which gives more control over which existing files in the destination are replaced, and its value can be one of the following:

‘all’

This is the default operation when an \--update option is not specified, and results in all existing files in the destination being replaced.

‘none’

This is like the deprecated \--no-clobber option, where no files in the destination are replaced, and also skipping a file does not induce a failure.

‘none-fail’

This is similar to ‘none’, in that no files in the destination are replaced, but any skipped files are diagnosed and induce a failure.

‘older’

This is the default operation when \--update is specified, and results in files being replaced if they’re older than the corresponding source file.

‘\-v’ [¶](https://www.gnu.org/software/coreutils/manual/html_node/#index-_002dv-7)

‘\--verbose’

Print the name of each file before copying it.

‘\-x’ [¶](https://www.gnu.org/software/coreutils/manual/html_node/#index-_002dx-3)

‘\--one-file-system’

Skip subdirectories that are on different file systems from the one that the copy started on. However, mount point directories *are* copied.

‘\-Z’ [¶](https://www.gnu.org/software/coreutils/manual/html_node/#index-_002dZ-1)

‘\--context\[=context\]’

Without a specified context, adjust the SELinux security context according to the system default type for destination files, similarly to the `restorecon` command. The long form of this option with a specific context specified, will set the context for newly created files only. With a specified context, if both SELinux and SMACK are disabled, a warning is issued. This option is mutually exclusive with the \--preserve=context option, and overrides the \--preserve=all and \-a options.

An exit status of zero indicates success, and a nonzero value indicates failure.