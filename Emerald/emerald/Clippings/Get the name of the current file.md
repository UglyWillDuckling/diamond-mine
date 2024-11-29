---
title: Get the name of the current file
source: https://vim.fandom.com/wiki/Get_the_name_of_the_current_file
author:
  - "[[Contributors to Vim Tips Wiki]]"
published: 
created: 2024-11-29
description: "Register % contains the name of the current file, and register # contains the name of the alternate file. These registers allow the name of the current or alternate files to be displayed or inserted. The name, or full path, or directory containing the file can be used. For example, in directory ..."
tags:
  - clippings
  - vim
  - howto
  - filepath
  - active
---
Register `%` contains the name of the current file, and register `#` contains the name of the alternate file. These registers allow the name of the current or alternate files to be displayed or inserted. The name, or full path, or directory containing the file can be used.

For example, in directory `/abc` the command `vim def/my.txt` would edit file `/abc/def/my.txt`. The following commands could be entered to display the information shown.

| `:echo @% ` | `def/my.txt` | directory/name of file (relative to the current working directory of `/abc`) |
| --- | --- | --- |
| `:echo expand('%:t') ` | `my.txt` | name of file ('tail') |
| `:echo expand('%:p') ` | `/abc/def/my.txt` | full path |
| `:echo expand('%:p:h')` | `/abc/def` | directory containing file ('head') |
| `:echo expand('%:p:h:t')` | `def` | First get the full path with `:p` (`/abc/def/my.txt`), then get the head of that with `:h` (`/abc/def`), then get the tail of that with `:t` (`def`) |
| `:echo expand('%:r') ` | `def/my` | name of file less one extension ('root') |
| `:echo expand('%:e') ` | `txt` | name of file's extension ('extension') |

For more info run `:help expand`

If all that is wanted is to display the name of the current file, type Ctrl-G (or press `1` then Ctrl-G for the full path).

When using `@%`, the name is displayed relative to the current directory.

In insert mode, type Ctrl-R then `%` to insert the name of the current file.

In command mode (after typing a colon), type Ctrl-R then `%` to insert the name of the current file. The inserted name can then be edited to create a similar name.

In normal mode, type `"%p` to put the name of the current file after the cursor (or `"%P` to insert the name before the cursor).

The following commands insert lines consisting of the full path of the current and alternate files into the buffer:

```
:put =expand('%:p')
:put =expand('#:p')
```

## See also

*Need to merge/clean.*

- [193 Insert current filename](https://vim.fandom.com/wiki/VimTip193 "VimTip193")
- [432 Putting the current file on the Windows clipboard](https://vim.fandom.com/wiki/VimTip432 "VimTip432")
- [600 Copy filename to clipboard](https://vim.fandom.com/wiki/VimTip600 "VimTip600")
- [891 Copy parts of filename to clipboard](https://vim.fandom.com/wiki/VimTip891 "VimTip891")

## References

- [:help registers](http://vimdoc.sourceforge.net/cgi-bin/help?tag=registers)
- [:help expand()](http://vimdoc.sourceforge.net/cgi-bin/help?tag=expand%28%29)
- [:help cmdline-special](http://vimdoc.sourceforge.net/cgi-bin/help?tag=cmdline-special)

## 

If you need to insert other file names (say the \*.h name in an #include), you can do C-X+C-F for filename completion.

---

Hey quick question, Ctrl-G worked but I'm wondering if there is a special way to examine the contents of the % register? According to [:help @](http://vimdoc.sourceforge.net/cgi-bin/help?tag=%40)

```
@{0-9a-z".=*}
Execute the contents of register {0-9a-z".=*} [count] times.
Note that register '%' (name of the current file) and
'#' (name of the alternate file) cannot be used.
```

Is there a special way to echo its contents?

I have edited the tip to clarify several points, including the above. That help is for *executing* registers and does not apply when a register is displayed or inserted. [JohnBeckett](https://vim.fandom.com/wiki/User:JohnBeckett "User:JohnBeckett") 03:06, November 11, 2011 (UTC)