---
source: https://www.cyberciti.biz/faq/delete-remove-orphaned-unused-packages-arch-linux-pacman-command/
author:
  - "[[Vivek Gite]]"
published: 2023-03-29
created: 2026-02-11
tags:
  - article/arch
  - howto/arch
---
A rch Linux uses pacman command to add or remove packages. It is a package management utility that tracks installed packages on Arch. So when you uninstall or remove packages, some dependencies are left behind, taking up disk space. In this quick tutorial, I will explain how to remove ALL orphaned packages installed as a dependency and no longer required by any package on Arch Linux.  
  

<table><thead><tr><th colspan="2">Tutorial details</th></tr></thead><tbody><tr><td width="25%"><span>Difficulty level</span></td><td width="75%"></td></tr><tr><td><span>Root privileges</span></td><td><a href="https://www.cyberciti.biz/faq/how-can-i-log-in-as-root/">Yes</a></td></tr><tr><td><span>Requirements</span></td><td>Linux terminal</td></tr><tr><td><span>Category</span></td><td><a href="https://www.cyberciti.biz/faq/delete-remove-orphaned-unused-packages-arch-linux-pacman-command/#Package_Manager">Package Manager</a></td></tr><tr><td><span>OS compatibility</span></td><td><span>•</span></td></tr></tbody><tbody><tr><td><span>Est. reading time</span></td><td>3 minutes</td></tr></tbody></table>

## Removing orphaned unused packages in Arch Linux

The procedure is as follow for deleting unused packages (orphans):

1. Open the terminal application.
2. Log into the remote Arch Linux server using the ssh command.
3. To list all orphaned or unneeded packages, type the following pacman command:  
	`# pacman -Qqtd   ## OR ##   # pacman -Qqd | pacman -Rsu --print -   # Save it to the file    # pacman -Qqd | pacman -Rsu --print - > pkg.lists.txt`  
	Here is what I get:
	```
	cython
	db
	elfutils
	libcroco
	python-appdirs
	python-importlib-metadata
	python-nspektr
	python-pyparsing
	```
4. Note down and [check free disk space on Linux](https://www.cyberciti.biz/faq/linux-check-disk-space-command/ "Linux Check Disk Space Command To View System Disk Usage") using the [df command](https://www.cyberciti.biz/faq/df-command-examples-in-linux-unix/ "How to use df command in Linux / Unix {with examples}") or du command. For example:  
	`# df -H`
5. Finally, remove those orphaned packages in Arch Linux as the root user:  
	`# pacman -Qtdq | pacman -Rns -   ## OR use the sudo command ##   $ pacman -Qtdq | sudo pacman -Rns -   ## OR ##   # pacman -Qqd | pacman -Rsu -`

[![How to remove orphaned unused packages in Arch Linux](https://www.cyberciti.biz/media/new/faq/2023/03/How-to-remove-orphaned-unused-packages-in-Arch-Linux-599x588.png)](https://www.cyberciti.biz/media/new/faq/2023/03/How-to-remove-orphaned-unused-packages-in-Arch-Linux.png)

Click to enlarge

## Understanding the pacman option used to remove orphaned unused packages

The options are:  

| Option | Description |
| --- | --- |
| \-Q | Query packages. |
| \-d | List packages installed as dependencies \[filter\]. |
| \-q | Show less information for query and search. |
| \-t | List packages not (optionally) required by any. |
| \-R | Remove packages. |
| \-s | Remove unnecessary dependencies. |
| \-u | Remove unneeded packages. |
| \-n | Remove configuration file(s) too. |
| \--print | Print the targets instead of performing the operation   (simuate what pacman will do) |
| \- | Read package list from standard input/pipe. In this case read   output of query command (pacman -Qqd) and remove them using   the pacman -Rns - command. |

## Summing up

That is all. Now you know how to get a list of orphaned unused packages in Arch Linux and delete them to free disk space on your machine. For more information, consult the pacman command manual [page online](https://archlinux.org/pacman/pacman.8.html) or offline using the [man command](https://bash.cyberciti.biz/guide/Man_command "Man command - Linux Bash Shell Scripting Tutorial Wiki") or [\-h option to the pacman command](https://bash.cyberciti.biz/guide/Help_command "help command - Linux Bash Shell Scripting Tutorial Wiki"):  
`$ man pacman   $ pacman -h   $ pacman -Q -h | [grep](https://www.cyberciti.biz/faq/howto-use-grep-command-in-linux-unix/ "How to use grep command In Linux / UNIX with examples") -E -w -- '-(Q|q|t|d)'`  
The last command is used to read short options summary at the CLI. I filter out information using the [egrep command](https://www.cyberciti.biz/faq/grep-regular-expressions/ "Regular expressions in grep ( regex ) with examples"), and the option \-- (double dash) means “end of command line flags.” It tells grep command not to try to parse what comes after command line options. See [What Does ‐‐ (double dash) Mean In SSH Shell Command?](https://www.cyberciti.biz/faq/what-does-double-dash-mean-in-ssh-command/ "What Does ‐‐ (double dash) Mean In SSH Shell Command?") for more info.

### See also

- [Remove Unwanted/Unused Dependencies in FreeBSD package](https://www.cyberciti.biz/faq/how-to-remove-unwantedunused-dependencies-in-freebsd-pkg-command/)

🥺

```
Was this helpful?
```
Please add [a comment to show your appreciation or feedback](https://www.cyberciti.biz/faq/delete-remove-orphaned-unused-packages-arch-linux-pacman-command/#respond "Please add your comment below ↓ to show your appreciation or feedback to the author").