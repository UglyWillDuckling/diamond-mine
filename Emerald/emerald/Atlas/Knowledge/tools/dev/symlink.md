---
aliases:
  - symbolic link
related:
  - "[[file]]"
  - "[[unix]]"
  - "[[Linux]]"
  - "[[MacOS]]"
  - "[[directory]]"
  - "[[alias]]"
  - "[[file system]]"
---
#concept #tool 
### Abstract

A **symlink**, or **symbolic link**, is a type of file that serves as a [[reference]] to
another [[file]] or [[directory]] in a file system. It is a special kind of file
that acts as a "**shortcut**" to the original file or directory, allowing users
to access it as if it were in a different location.

Symlinks are often used in [[Unix-like]] operating systems, including [[Linux]] and
[[MacOS]], to create **aliases** to files and directories, or to create a separate
reference to a file or directory that is located in a `different part` of the
file system. 

> [!bookmark] 
> They are particularly useful for organizing large and complex
> file systems, as they allow users to access files and directories from
> multiple locations ==without having to duplicate the files==.

### practical

  To create a symlink in a Unix-like operating system, you can use the  ln
  command with the  -s  option, followed by the path to the original file or
  directory and the path where you want to create the symlink. For example,
  the following command creates a symlink called "mylink" that points to the
  file "/home/user/myfile":

	   ln -s /home/user/myfile mylink

 You can then access the file "/home/user/myfile" by using the symlink
 "mylink", which can be located anywhere in the file system.

 **Symlinks can also be created for directories**, and they work in the same way
  as symlinks for files. To create a symlink for a directory, simply specify
  the path to the directory when creating the symlink.

### difference to [[Hard links]]

It is important to note that symlinks are not the same as hard links.
[[Hard links]] are separate references to the same file in the file system, whereas
symlinks are **separate files** that `reference the original` file or directory.
As a result, hard links can **only be created for files**, not directories,
whereas symlinks can be created for both files and directories.
