---
author:
  - "[[Hiks Gerganov]]"
  - "[[Michal Aibin]]"
created: 2025-05-23
published: 2022-04-03
source: https://www.baeldung.com/linux/rc-files
tags:
  - article/dev
---
## 1. Introduction

Data is what usually makes a system unique. **One of the main types of data consists of configuration (or config) files**. While users can have any type of content, much of a Linux system’s config is based on standards.

In this tutorial, we’ll discuss what *rc* files and directories are and how we use them. First, we explain what configuration files do. Next, we briefly go over the Linux config structure. Finally, we delve into the *rc* affix and work with some example files.

We tested the code in this tutorial on Debian 11 (Bullseye) with GNU Bash 5.1.4. It should work in most POSIX-compliant environments.

## 2. Configuration Files

Generally, systems require at least some custom setup. In practice, **a configuration can be thought of as the glue between a system and its context**, including:

- users
- machines
- network
- location

So-called “sane defaults” are rarely meant to work in every case. Furthermore, basic time or storage settings, for instance, can have a huge impact on many components. So, we should make sure all of them are properly handled.

Does this mean we need to mount by hand on each machine reboot? Of course not – that’s why we have [volatile and non-volatile memory](https://www.baeldung.com/cs/cache-memory#1-the-memory-hierarchy-levels). The latter allows us to store settings.

Actually, preserving and applying config files is convenient and essential for the operation of many systems, including Linux.

## 3\. Linux Configuration

In any Linux flavor, **there are config files with many functions**:

- setting up the graphical interface
- holding user and security data
- enabling and configuring networking
- holding preferences of different packages and applications
- shell configuration

Indeed, we’ve [already seen](https://www.baeldung.com/linux/config-files) the location, name, and purpose of many often used config files. Moreover, we’ve noted that many of them are colocated, especially when serving a similar aim.

A notable example is the */etc* directory. It holds all kinds of config files, which are much easier to sort through when knowing how to look.

Importantly, there are certain config files and directories with a common affix. They also usually denote files of a similar purpose. For example, the */etc/ssh* often contains files prefixed with *ssh\_*:

```shell
$ ls -1 /etc/ssh
moduli
ssh_config
ssh_config.d
ssh_config.dpkg-dist
sshd_config
sshd_config.d
ssh_host_ecdsa_key
ssh_host_ecdsa_key.pub
ssh_host_ed25519_key
ssh_host_ed25519_key.pub
ssh_host_rsa_key
ssh_host_rsa_key.pub
```

Then there is the *rc* affix, which can be added to the file name or extension of many different files.

## 4\. rc Configuration Files

Names including *rc* often signify files or directories of files with code. Specifically, this **code consists of commands that are meant to run when a program is executed**. Indeed, that program can be an application, but it can also be a whole operating system.

Because of this, **the original *rc* affix and extension both meant “run commands”**. In particular, a widely accepted source of the term is the Compatible Time-Sharing System (CTSS). Louis Pouzin, part of the CTSS project, created the *RUNCOM* command, which ran instructions from a file – a *RUNCOM file*. Let’s see a classic example – the */etc/rc* file*:*

```shell
hostname toaster
ifconfig e0 \`hostname\`-0
ifconfig e1 \`hostname\`-1
ifconfig f0 \`hostname\`-f0
ifconfig a5 \`hostname\`-a5
route add default MyRouterBox
routed on
savecore
```

On the other hand, as is common in the field of technology, *rc* has evolved since its inception. In fact, configurations now come in many formats, not only a series of instructions. Consequently, **the meaning of *rc* mutated**:

- run control
- run configuration
- runtime configuration

Let’s continue with several classic RUNCOM files, as well as some newer derivatives.

## 5\. Examples of rc Files

The famous [vi](https://www.baeldung.com/linux/vi-editor) editor employs a *vimrc* config file. Notably, it can set interface options but also aids in setting up [command mappings](https://www.baeldung.com/linux/text-objects-in-vim#1-command-mappings)[.](https://www.baeldung.com/linux/vi-editor)

Of course, **a very common config file is *.bashrc***. It contains instructions, which run before each Bash session. For example, we might use [*alias*](https://www.baeldung.com/linux/create-alias) to have easy shortcuts for common operations or preset variables.

Even so, *.bashrc* is usually called from *.profile*, which, despite its name, also functions like a RUNCOM. It even covers shells beyond Bash itself.

Although not very accurate, here’s a fairly easy way to see some famous *rc* files:

```shell
$ find /etc -name 'rc*' -or -name '*rc'
/etc/inputrc
/etc/rcS.d
/etc/rc5.d
/etc/rc4.d
/etc/rc6.d
/etc/nanorc
/etc/wgetrc
/etc/rc0.d
/etc/vim/vimrc
/etc/libreoffice/sofficerc
/etc/X11/Xsession.d/40x11-common_xsessionrc
/etc/bash.bashrc
/etc/skel/.bashrc
/etc/xdg/termit/rc.lua
/etc/rc3.d
/etc/rc1.d
/etc/rc2.d
/etc/alternatives/rcp
/etc/alternatives/rcp.1.gz
```

Note that **some of these items are directories**, e.g., *rcS.d* and its numbered cohabitors with similar names. Namely, they contain daemon control scripts, which also function like RUNCOM files.