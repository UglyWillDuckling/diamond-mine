---
title: "Very Simple (The GNU Awk User’s Guide)"
source: "https://www.gnu.org/software/gawk/manual/html_node/Very-Simple.html"
author:
published:
created: 2026-09-27
description: "Very Simple (The GNU Awk User’s Guide)"
tags:
  - "clippings"
---
---

### 1.3 Some Simple Examples ¶

The following command runs a simple `awk` program that searches the input file mail-list for the character string ‘ li ’ (a grouping of characters is usually called a *string*; the term *string* is based on similar usage in English, such as “a string of pearls” or “a string of cars in a train”):

```
awk '/li/ { print $0 }' mail-list
```

When lines containing ‘ li ’ are found, they are printed because ‘ print $0 ’ means print the current line. (Just ‘ print ’ by itself means the same thing, so we could have written that instead.)

You will notice that slashes (‘ / ’) surround the string ‘ li ’ in the `awk` program. The slashes indicate that ‘ li ’ is the pattern to search for. This type of pattern is called a *regular expression*, which is covered in more detail later (see [Regular Expressions](https://www.gnu.org/software/gawk/manual/html_node/Regexp.html)). The pattern is allowed to match parts of words. There are single quotes around the `awk` program so that the shell won’t interpret any of it as special shell characters.

Here is what this program prints:

```
$ awk '/li/ { print $0 }' mail-list
-| Amelia       555-5553     amelia.zodiacusque@gmail.com    F
-| Broderick    555-0542     broderick.aliquotiens@yahoo.com R
-| Julie        555-6699     julie.perscrutabor@skeeve.com   F
-| Samuel       555-3430     samuel.lanceolis@shu.edu        A
```

In an `awk` rule, either the pattern or the action can be omitted, but not both. If the pattern is omitted, then the action is performed for *every* input line. If the action is omitted, the default action is to print all lines that match the pattern.

Thus, we could leave out the action (the `print` statement and the braces) in the previous example and the result would be the same: `awk` prints all lines matching the pattern ‘ li ’. By comparison, omitting the `print` statement but retaining the braces makes an empty action that does nothing (i.e., no lines are printed).

Many practical `awk` programs are just a line or two long. Following is a collection of useful, short programs to get you started. Some of these programs contain constructs that haven’t been covered yet. (The description of the program will give you a good idea of what is going on, but you’ll need to read the rest of the Web page to become an `awk` expert!) Most of the examples use a data file named data. This is just a placeholder; if you use these programs yourself, substitute your own file names for data.

Some of the following examples use the output of ‘ ls -l ’ as input. `ls` is a system command that gives you a listing of the files in a directory. With the \-l option, this listing includes each file’s size and the date the file was last modified. Its output looks like this:

```
-rw-r--r--  1 arnold   user   1933 Nov  7 13:05 Makefile
-rw-r--r--  1 arnold   user  10809 Nov  7 13:03 awk.h
-rw-r--r--  1 arnold   user    983 Apr 13 12:14 awk.tab.h
-rw-r--r--  1 arnold   user  31869 Jun 15 12:20 awkgram.y
-rw-r--r--  1 arnold   user  22414 Nov  7 13:03 awk1.c
-rw-r--r--  1 arnold   user  37455 Nov  7 13:03 awk2.c
-rw-r--r--  1 arnold   user  27511 Dec  9 13:07 awk3.c
-rw-r--r--  1 arnold   user   7989 Nov  7 13:03 awk4.c
```

The first field contains read-write permissions, the second field contains the number of links to the file, and the third field identifies the file’s owner. The fourth field identifies the file’s group. The fifth field contains the file’s size in bytes. The sixth, seventh, and eighth fields contain the month, day, and time, respectively, that the file was last modified. Finally, the ninth field contains the file name.

For future reference, note that there is often more than one way to do things in `awk`. At some point, you may want to look back at these examples and see if you can come up with different ways to do the same things shown here:

- Print every line that is longer than 80 characters:
	```
	awk 'length($0) > 80' data
	```
	The sole rule has a relational expression as its pattern and has no action—so it uses the default action, printing the record.
- Print the length of the longest input line:
	```
	awk '{ if (length($0) > max) max = length($0) }
	     END { print max }' data
	```
	The code associated with `END` executes after all input has been read; it’s the other side of the coin to `BEGIN`.
- Print the length of the longest line in data:
	```
	expand data | awk '{ if (x < length($0)) x = length($0) }
	                   END { print "maximum line length is " x }'
	```
	This example differs slightly from the previous one: the input is processed by the `expand` utility to change TABs into spaces, so the widths compared are actually the right-margin columns, as opposed to the number of input characters on each line.
- Print every line that has at least one field:
	```
	awk 'NF > 0' data
	```
	This is an easy way to delete blank lines from a file (or rather, to create a new file similar to the old file but from which the blank lines have been removed).
- Print seven random numbers from 0 to 100, inclusive:
	```
	awk 'BEGIN { for (i = 1; i <= 7; i++)
	                 print int(101 * rand()) }'
	```
- Print the total number of bytes used by files:
	```
	ls -l files | awk '{ x += $5 }
	                   END { print "total bytes: " x }'
	```
- Print the total number of kilobytes used by files:
	```
	ls -l files | awk '{ x += $5 }
	   END { print "total K-bytes:", x / 1024 }'
	```
- Print a sorted list of the login names of all users:
	```
	awk -F: '{ print $1 }' /etc/passwd | sort
	```
- Count the lines in a file:
	```
	awk 'END { print NR }' data
	```
- Print the even-numbered lines in the data file:
	```
	awk 'NR % 2 == 0' data
	```
	If you used the expression ‘ NR % 2 == 1 ’ instead, the program would print the odd-numbered lines.