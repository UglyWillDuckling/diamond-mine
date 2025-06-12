---
title: Find Command in Linux (Find Files and Directories)
source: https://linuxize.com/post/how-to-find-files-in-linux-using-the-command-line/
published: 2018-06-13
created: 2025-01-20
description: The find command searches for files and directories based on a user given expression.
tags:
  - tool/unix
  - command/unix
related:
  - "[[Explanation of % directives in find -printf]]"
  - "[[grep]]"
  - "[[sed]]"
  - "[[unix]]"
  - "[[fd|fdfind]]"
---
The `find` command is one of the most powerful tools in the Linux system administrators arsenal. It searches for files and directories in a directory hierarchy based on a user given expression and can perform user-specified action on each matched file.

You can use the `find` command to search for files and directories based on their permissions, type, date, ownership, size, and more. It can also be combined with other tools such as [`grep`](https://linuxize.com/post/how-to-use-grep-command-to-search-files-in-linux/) or [`sed`](https://linuxize.com/post/how-to-use-sed-to-find-and-replace-string-in-files/) .

## `find` Command Syntax

The general syntax for the `find` command is as follows:

```sh
find [options] [path...] [expression]
```

- The `options` attribute controls the treatment of the symbolic links, debugging options, and optimization method.
- The `path...` attribute defines the starting directory or directories where find will search the files.
- The `expression` attribute is made up of options, search patterns, and actions separated by operators.

To search for files in a directory, the user invoking the `find` command needs to have read permissions on that directory.

Let’s take a look at the following example:

```
find -L /var/www -name "*.js"
```

- The option `-L` (options) tells the `find` command to follow symbolic links.
- The `/var/www` (path…) specifies the directory that will be searched.
- The (expression) `-name "*.js` tells `find` to search files ending with `.js` (JavaScript files).

## Find Files by Name

Finding files by name is probably the most common use of the `find` command. To find a file by its name, use the `-name` option followed by the name of the file you are searching for.

For example, to search for a file named `document.pdf` in the `/home/linuxize` directory, you would use the following command:

```
find /home/linuxize -type f -name document.pdf
```

To run a case-insensitive search, change the `-name` option with `-iname`:

```
find /home/linuxize -type f -iname document.pdf
```

The command above will match “Document.pdf”, “DOCUMENT.pdf” ..etc.

## Find Files by Extension

Searching for files by extension is the same as searching for files by name. For example, to find all files ending with `.log.gz` inside the `/var/log/nginx` directory, you would type:

```
find /var/log/nginx -type f -name '*.log.gz'
```

It is important to mention that you must either quote the pattern or escape the asterisk `*` symbol with backslash `\` so that it doesn’t get interpreted by the shell when you use the wildcard character.

To find all files that don’t match the regex `*.log.gz` you can use the `-not` option. For example, to find all files that don’t end in `*.log.gz` you would use:

```
find /var/log/nginx -type f -not -name '*.log.gz'
```

## Find Files by Type

Sometimes you might need to search for specific file types such as regular files, directories, or symlinks. In Linux, everything is a file.

To search for files based on their type, use the `-type` option and one of the following descriptors to specify the file type:

- `f`: a regular file
- `d`: directory
- `l`: [symbolic link](https://linuxize.com/post/how-to-create-symbolic-links-in-linux-using-the-ln-command/)
- `c`: character devices
- `b`: block devices
- `p`: named pipe (FIFO)
- `s`: socket

For instance, to find all directories in the [current working directory](https://linuxize.com/post/current-working-directory/) , you would use:

```
find . -type d
```

The common example would be to recursively change the website file permissions to `644` and directory permissions to `755` using the [`chmod`](https://linuxize.com/post/chmod-command-in-linux/) command:

```
find /var/www/my_website -type d -exec chmod 0755 {} \;
```

## Find Files by Size

To find files based on the file size, pass the `-size` parameter along with the size criteria. You can use the following suffixes to specify the file size:

- `b`: 512-byte blocks (default)
- `c`: bytes
- `w`: two-byte words
- `k`: Kilobytes
- `M`: Megabytes
- `G`: Gigabytes

The following command will find all files of exactly `1024` bytes inside the `/tmp` directory:

```
find /tmp -type f -size 1024c
```

The `find` command also allows you to search for [files that are greater](https://linuxize.com/post/find-large-files-in-linux/) or less than a specified size.

In the following example, we search for all files less than `1MB` inside the current working directory. Notice the minus `-` symbol before the size value:

```
find . -type f -size -1M
```

If you want to search for files with a size greater than `1MB`, then you need to use the plus `+` symbol:

```
find . -type f -size +1M
```

You can even search for files within a size range. The following command will find all files between `1` and `2MB`:

```
find . -type f -size +1M -size 21M
```

## Find Files by Modification Date

The `find` command can also search for files based on their last modification, access, or change time.

Same as when searching by size, use the plus and minus symbols for “greater than” or “less than”.

Let’s say that a few days ago, you modified one of the dovecot configuration files, but you forgot which one. You can easily filter all files under the `/etc/dovecot/conf.d` directory that ends with `.conf` and has been modified in the last five days:

```
find /etc/dovecot/conf.d -name "*.conf" -mtime 5
```

Here is another example of filtering files based on the modification date using the `-daystart` option. The command below will list all files in the `/home` directory that were modified `30` or more days ago:

```
find /home -mtime +30 -daystart
```

## Find Files by Permissions

The `-perm` option allows you to search for files based on the file permissions.

For example, to find all files with permissions of exactly `775` inside the `/var/www/html` directory, you would use:

```
find /var/www/html -perm 644
```

You can prefix the numeric mode with minus `-` or slash `/`.

When slash `/` is used as the prefix, then at least one category (user, group, or others) must have at least the respective bits set for a file to match.

Consider the following example command:

```
find . -perm /444
```

The above command will match all the files with read permissions set for either user, group, or others.

If minus `-` is used as the prefix, then for the file to match, at least the specified bits must be set. The following command will search for files that have read and write permission for the owner and group and are readable by other users:

```
find . -perm -664
```

## Find Files by Owner

To find files [owned](https://linuxize.com/post/linux-chown-command/) by a particular user or group, use the `-user` and `-group` options.

For example, to search for all files and directories owned by the user `linuxize`, you would run:

```
find / -user linuxize
```

Here is a real-world example. Let’s say you want to find all files owned by the user `www-data` and change the ownership of the matched files from `www-data` to `nginx`:

```
find / -user www-data -type f  -exec chown nginx {} \;
```

## Find and Delete Files

To delete all matching files, append the `-delete` option to the end of the match expression.

Ensure you are using this option only when you are confident that the result matches the files you want to delete. It is always a good idea to print the matched files before using the `-delete` option.

For example, to delete all files ending with `.temp` from the `/var/log/`, you would use:

```
find /var/log/ -name \`*.temp\` -delete
```

Use the `-delete` option with extreme caution. The `find` command is evaluated as an expression and if you add the `-delete` option first, the command will delete everything below the starting points you specified.

When it comes to directories, `find` can delete only empty directories, same as [`rmdir`](https://linuxize.com/post/remove-directory-linux/) .

## printf option 

**example**
```bash
find /tmp -printf '%s %p\n' |sort -n -r | head
```


> **%s** File's size in bytes.
> 
> **%p** File's name.

> **%n** Number of hard links to file.
> 
> **%p** File's name.
> 
> **%P** File's name with the name of the starting-point under which it was found removed.
> 
> **%s** File's size in bytes.
> 
> **%t** File's last modification time in the format returned by the C \`ctime' function.
