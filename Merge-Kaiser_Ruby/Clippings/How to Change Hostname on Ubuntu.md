---
source: "https://phoenixnap.com/kb/ubuntu-20-04-change-hostname"
author:
  - "[[Sara Zivanov]]"
published: 2024-07-25
created: 2025-02-15
tags:
---
## Introduction

A hostname is a user-generated custom name that identifies a computer system in a network. In Ubuntu, users assign a hostname to the machine during the [operating system (OS)](https://phoenixnap.com/glossary/operating-system) setup.

**In this tutorial, you will learn how to change a hostname on Ubuntu using the Linux** [command line or GUI](https://phoenixnap.com/kb/cli-vs-gui).

## How to Check Current Hostname on Ubuntu

To check the current hostname of your Ubuntu system, use one of the two available commands: **`hostname`** or **`hostnamectl`**.

To print only the hostname, run the [hostname command](https://phoenixnap.com/kb/linux-hostname-command):

```
hostname
```

![hostname terminal output](https://phoenixnap.com/kb/wp-content/uploads/2024/07/hostname-terminal-output.png)

To display both the hostname and additional information about your system, run **`hostnamectl`**:

```c
hostnamectl
```

![hostnamectl terminal output](https://phoenixnap.com/kb/wp-content/uploads/2024/07/hostnamectl-terminal-output.png)

The **`Static hostname`** line displays your machine's hostname.

**Note:** Valid hostnames are between 2 and 64 characters in length. They can contain only letters, numbers, periods, and hyphens, but must begin and end with letters and numbers only.

## Change Hostname on Ubuntu via CLI (No Reboot)

If you wish to permanently change the hostname without [rebooting](https://phoenixnap.com/kb/restart-linux-using-command-prompt) your computer, use the **`hostnamectl`** command.

### Step 1: Use set-hostname to Change the Hostname

Type the following command to change your hostname:

```
hostnamectl set-hostname new-hostname
```

For example, to change the hostname to **`test-pnap`**, run the following:

```
hostnamectl set-hostname test-pnap
```

### Step 2: Confirm the Change

If successful, **`hostnamectl set-hostname`** does not produce any output. Therefore, use **`hostname`** or **`hostnamectl`** to check the result.

```
hostname
```

![terminal output for hostname](https://phoenixnap.com/kb/wp-content/uploads/2024/07/terminal-output-for-hostname.png)

### Step 3: Change the Pretty Hostname (Optional)

A ["pretty" hostname](https://phoenixnap.com/kb/pretty-hostname) is the hostname presented to the user, not to other computers on a network. A computer system identifies another computer only by its static hostname.

**Note:** The pretty hostname does not have the naming limitations of its static counterpart, any UTF-8 value is permitted.

To change a machine's pretty hostname, use the same **`hostnamectl`** command with the **`--pretty`** option:

```
hostnamectl set-hostname new-hostname --pretty
```

For example, set your machine's pretty hostname to **`pnap-test`** with:

```
hostnamectl set-hostname pnap-test --pretty
```

Since the command has no output, check the result with **`hostnamectl`**:

```
hostnamectl
```

![terminal output for hostnamectl including a pretty hostname](https://phoenixnap.com/kb/wp-content/uploads/2024/07/terminal-output-for-hostnamectl.png)

The output prints an additional line, listing the computer's pretty hostname.

**Note:** Make sure the static and "pretty" hostname are not the same. Having the same value for both might cause some issues with systemd.

## Change Hostname on Ubuntu via CLI (Reboot Required)

Another way to permanently change the hostname is by editing two [configuration files](https://phoenixnap.com/glossary/config-file): */etc/hostname* and [/etc/hosts](https://phoenixnap.com/kb/linux-hosts-file).

The changes take effect immediately after the system reboots.

### Step 1: Open /etc/hostname and Change the Hostname

Edit the [file](https://phoenixnap.com/glossary/what-is-a-file) with a [text editor](https://phoenixnap.com/kb/best-linux-text-editors-for-coding) of your choice. In this example, we use the [Vim](https://phoenixnap.com/kb/vim-commands-cheat-sheet) editor. Take the following steps:

1\. Access the */etc/hostname* file:

```
sudo vim /etc/hostname
```

![sudo vim /etc/hostname terminal output](https://phoenixnap.com/kb/wp-content/uploads/2024/07/sudo-vim-etc-hostname-terminal-output.png)

The */etc/hostname* file contains only the current hostname.

2\. Replace the current hostname with your new choice. For example, **`test`**.

![change Ubuntu hostname by editing the /etc/hostname file](https://phoenixnap.com/kb/wp-content/uploads/2024/07/edit-etc-hostname-terminal-output.png)

3\. [Save the file and exit](https://phoenixnap.com/kb/how-to-vim-save-quit-exit).

### Step 2: Open /etc/hosts and Change the Hostname

[Edit the /etc/hosts file](https://phoenixnap.com/kb/linux-hosts-file) in the same way. Take the following steps:

1\. Access the file in Vim or a different text editor:

```
sudo vim/etc/hosts
```

![terminal output for sudo vim /etc/hosts](https://phoenixnap.com/kb/wp-content/uploads/2024/07/terminal-output-for-sudo-vim-etc-host.png)

The file */etc/hosts* maps hostnames to [IP addresses](https://phoenixnap.com/glossary/what-is-an-ip-address).

2\. Look for the hostname you wish to change and replace it with your new choice, for example, with **`test`**.

![change Ubuntu hostname in /etc/hosts file](https://phoenixnap.com/kb/wp-content/uploads/2024/07/edit-etc-hosts-terminal-output.png)

3\. Save the edits and exit.

![Editing the /etc/hosts file](https://phoenixnap.com/kb/wp-content/uploads/2021/04/editing-etc-hosts.png)

### Step 3: Reboot the System

Reboot your computer to apply the changes:

```
sudo systemctl reboot
```

**Note:** If you use the [Cloud-Init](https://phoenixnap.com/kb/what-is-cloud-init) package (**`cloud-init`**) to run a cloud instance of Ubuntu, you need to perform another step before rebooting. Go to */etc/cloud/cloud.cfg* file and make sure the line **`preserve_hostname`** is set to **`TRUE`**.

## Change Hostname on Ubuntu via GUI

The [Ubuntu GUI](https://phoenixnap.com/kb/how-to-install-a-gui-on-ubuntu) also provides a way to edit the system hostname. Take the following steps:

1\. Access **Settings**.

![Ubuntu settings](https://phoenixnap.com/kb/wp-content/uploads/2024/07/ubuntu-settings.png)

2\. Navigate to the **About** section.

![Ubuntu settings about section](https://phoenixnap.com/kb/wp-content/uploads/2024/07/about-section.png)

3\. Locate the **Device Name** field.

![Device name](https://phoenixnap.com/kb/wp-content/uploads/2024/07/device-name.png)

Click the **Device Name** field to open the **Rename Device** dialogue box.

4\. In the **Rename Device** dialogue box, replace the current hostname with a new one and confirm your choice by clicking the **Rename** button. For example, set the new hostname as **pnap**.

![Permanently change hostname on Ubuntu via settings](https://phoenixnap.com/kb/wp-content/uploads/2024/07/set-new-hostname.png)

This action permanently changes the hostname.

## Temporarily Change Hostname on Ubuntu

Use the **`hostname`** command to change your computer's hostname temporarily. The syntax is:

```
sudo hostname new-hostname
```

For example, to temporarily change the hostname to **`test-pnap`**, run:

```
sudo hostname test-pnap
```

If successful, this step does not provide any output. To confirm the result, check the current system hostname:

![temporarily change hostname on ubuntu using the hostname command](https://phoenixnap.com/kb/wp-content/uploads/2024/07/hostname-command-terminal-output.png)

Conclusion

This article presented different methods for changing the hostname on your Ubuntu machine using the command line or [GUI](https://phoenixnap.com/glossary/what-is-gui). It also showed you how to change your hostname temporarily.

Next, learn how to [change a hostname on Debian](https://phoenixnap.com/kb/debian-change-hostname).

Was this article helpful?

YesNo