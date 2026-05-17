---
source: https://linuxize.com/post/how-to-create-users-in-linux-using-the-useradd-command/
author:
  - "[[Dejan Panovski]]"
published: 2018-12-11
created: 2026-04-06
tags:
  - howto/linux/user
---
![Create Users in Linux Using the useradd Command](https://linuxize.com/post/how-to-create-users-in-linux-using-the-useradd-command/featured_hu_da7ed0676e1dffcd.webp)

Create Users in Linux Using the useradd Command

Linux is a multi-user operating system, so each person or service should have its own account.

The `useradd` command creates new user accounts in Linux and lets you control home directories, login shells, group membership, UIDs, and account expiry settings.

This article explains how to create users in Linux with `useradd`, set passwords, and customize the account during creation.

## Understanding User Types in Linux

In Linux, there are two main types of users:

- **Regular Users**: Created by the administrator, these are individual accounts for standard operations.
- **System Users**: These are created automatically by the system or applications to run specific services.

Based on their permission levels, regular users can be further classified as:

- **Standard Users**: Limited access rights, typically used for everyday tasks.
- **Administrative Users**: Have elevated permissions and should be trusted individuals, as granting administrative rights should be done only when absolutely necessary.

As a system administrator, you are responsible for managing the system’s users and groups by creating and [removing users](https://linuxize.com/post/how-to-delete-users-in-linux-using-the-userdel-command/) and assigning them to appropriate [groups](https://linuxize.com/post/how-to-add-user-to-group-in-linux/).

In this article, we will explain how to create new user accounts using the `useradd` command.

## Quick Reference

| Command                                 | Description                                  |
| --------------------------------------- | -------------------------------------------- |
| `sudo useradd username`                 | Create a user with default settings          |
| `sudo useradd -m username`              | Create a user and home directory             |
| `sudo useradd -m -s /bin/bash username` | Create a user with a specific login shell    |
| `sudo useradd -m -G sudo username`      | Create a user and add to supplementary group |
| `sudo passwd username`                  | Set or reset the user password               |
| `sudo useradd -D`                       | Show default `useradd` settings              |
| `id username`                           | Verify UID, GID, and groups                  |
| `sudo userdel -r username`              | Remove a user and home directory             |

See [[useradd]]

## [[useradd]] Command

`useradd` is a command-line utility for creating new user accounts on Linux and Unix systems.

The syntax of the `useradd` command is:

```txt
useradd [OPTIONS] USERNAME
```

Only root or users with [sudo](https://linuxize.com/post/sudo-command-in-linux/) privileges can create new user accounts with this command.

When executed, `useradd` creates a new user account based on the options specified on the command line and the default values found in the `/etc/default/useradd` file.

The variables defined in this file differ from distribution to distribution, which causes the `useradd` command to produce different results on different systems.

`useradd` also reads the contents of the [`/etc/login.defs`](https://man7.org/linux/man-pages/man5/login.defs.5.html) file. This file contains configuration for the shadow password suite, such as password expiration policy, ranges of user IDs used when creating the system and regular users, and more.

## Creating a New User

To create a new account, run the `useradd` command followed by the user’s name.

For instance, to create a new user named `leah`, you would run the following:

```bash
sudo useradd leah
```

The account is created immediately, but the user cannot log in until you set a password with `passwd`.

Info

When executed without any options, `useradd` creates a new user account using the default settings specified in the `/etc/default/useradd` file.

The command adds an entry to the `/etc/passwd`, [`/etc/shadow`](https://linuxize.com/post/etc-shadow-file/), `/etc/group`, and `/etc/gshadow` files.

You can verify the account was created and view the user’s details by running the `id` command:

```bash
sudo id leah
```

```output
uid=1005(leah) gid=1005(leah) groups=1005(leah)
```

### Setting User Passwords

To allow a new user to log in, you need to set the user’s password. You can do that by executing the [`passwd`](https://linuxize.com/post/how-to-change-user-password-in-linux/) command followed by the username:

```bash
sudo passwd leah
```

The command prompts you to enter and confirm a new password. Make sure you use a strong password.

```output
Changing password for user leah.
New password:
Retype new password:
passwd: all authentication tokens updated successfully.
```

## Creating a User with a Home Directory

A home directory is a directory in a multi-user operating system that contains the user’s files. It is also known as the login directory.

On many Linux distributions, the home directory is not automatically created when a user account is created.

To create a home directory, use the `-m` (`--create-home`) option:

```bash
sudo useradd -m leah
```

The command above creates the new user’s home directory at `/home/<username>`, along with default initialization files copied from `/etc/skel`.

If you [list the files](https://linuxize.com/post/how-to-list-files-in-linux-using-the-ls-command/) in the `/home/leah` directory, you will see the files:

```bash
ls -la /home/leah/
```

```output
total 20
drwxr-x--- 2 leah leah 4096 Dec 20 17:58 .
drwxr-xr-x 4 root root 4096 Dec 20 17:58 ..
-rw-r--r-- 1 leah leah  220 Jan  6  2025 .bash_logout
-rw-r--r-- 1 leah leah 3771 Jan  6  2025 .bashrc
-rw-r--r-- 1 leah leah  807 Jan  6  2025 .profile
```

The user can write, edit, and delete files and directories in the home directory.

### Creating a User with a Specific Home Directory

To create a user with a designated home directory, use the `-d` (`--home`) option.

Here is an example of how to create a new user named `leah` with the home directory `/opt/leah`:

```bash
sudo useradd -m -d /opt/leah leah
```

## Creating a User with a Specific User ID

In Linux and Unix-like operating systems, users are identified by a unique UID and a username.

A user identifier (UID) is a unique positive integer assigned by the Linux system to each user. The UID and other access control policies determine the actions a user can perform on system resources.

By default, when a new user is created, the system assigns the next available UID from the range of user IDs specified in the `login.defs` file.

Invoke the `useradd` command with the `-u` (`--uid`) option to create a user with a specific UID.

For instance, to create a new user named `leah` with a UID of `1500`, you would type:

```bash
sudo useradd -u 1500 leah
```

To verify the user’s UID, use the [`id`](https://linuxize.com/post/id-command-in-linux/) command:

```bash
id -u leah
```

```output
1500
```

## Creating a User with a Specific Group ID

Linux groups are organizational units used to manage user accounts. The primary purpose of groups is to define a set of privileges, such as read, write, or execute permissions, for a given resource that can be shared among the users in the group.

When creating a new user, the default behavior of the `useradd` command is to create a group with the same name as the username and the same GID as the UID.

The `-g` (`--gid`) option allows you to create a user with a specific initial login group. You can specify either the group name or the GID number. The group name or GID must already exist.

The following example shows how to create a new user named `leah` and set the login group to `users`:

```bash
sudo useradd -g users leah
```

To verify the user’s GID, use the `id` command:

```bash
id -gn leah
```

```output
users
```

## Creating a User and Assigning Multiple Groups

There are two types of groups in Linux operating systems: Primary and Secondary (or supplementary) groups. Each user can belong to exactly one primary group and zero or more secondary groups.

You can use the `-G` (`--groups`) option to specify a list of additional (supplementary) groups for the user.

The following command creates a new user named `zoe` with primary group `users` and secondary groups `wheel` and `docker`.

```bash
sudo useradd -g users -G wheel,docker zoe
```

You can check the user groups by typing:

```bash
id zoe
```

```output
uid=1002(zoe) gid=100(users) groups=100(users),10(wheel),993(docker)
```

## Creating a User with a Specific Login Shell

When a new user is created, its login shell is set to the one specified in the `/etc/default/useradd` file. In some distributions, the default shell is set to `/bin/sh`, while in others, it is set to `/bin/bash`.

The `-s` (`--shell`) option allows you to specify the new user’s login shell.

Here is an example showing how to create a new user named `zoe` with `/usr/bin/zsh` as a login shell:

```bash
sudo useradd -s /usr/bin/zsh zoe
```

Check the user entry in the [`/etc/passwd`](https://linuxize.com/post/etc-passwd-file/) file to verify the user’s login shell:

```bash
grep zoe /etc/passwd
```

```output
zoe:x:1001:1001::/home/zoe:/usr/bin/zsh
```

The user’s full name or contact information can be added as a comment.

To add a short description for the new user, use the `-c` (`--comment`) option.

In the following example, we are creating a new user named `zoe` with the text string “Test User Account” as a comment:

```bash
sudo useradd -c "Test User Account" zoe
```

The comment is saved in the `/etc/passwd` file:

```bash
grep zoe /etc/passwd
```

```output
zoe:x:1001:1001:Test User Account:/home/zoe:/bin/sh
```

The comment field is also known as `GECOS`.

## Creating a User with an Expiry Date

To define a time at which the new user accounts will expire, use the `-e` (`--expiredate`) option. This is useful for creating temporary accounts.

The date must be specified using the `YYYY-MM-DD` format.

For example, to create a new user account named `zoe` with an expiry time set to January 22, 2027, you would run the following:

```bash
sudo useradd -e 2027-01-22 zoe
```

Use the `chage` command to verify the user account expiry date:

```bash
sudo chage -l zoe
```

The output will look something like this:

```output
Last password change                : Dec 11, 2023
Password expires                : never
Password inactive                : never
Account expires                    : Jan 22, 2027
Minimum number of days between password change    : 0
Maximum number of days between password change    : 99999
Number of days of warning before password expires    : 7
```

## Creating a System User

System users are typically created during OS and package installations, and there is no real technical difference between them and regular users.

Use the `-r` (`--system`) option to create a system user account. For example, to create a new system user named `zoe` you would type:

```bash
sudo useradd -r zoe
```

System users are created with no expiry date. Their UIDs are chosen from the range of system user IDs specified in the `login.defs` file, which differs from the range used for regular users.

## Configuring Default Values for User Accounts

The default useradd options can be viewed and changed using the `-D`, `--defaults` option or by manually editing the `/etc/default/useradd` file.

To view the current default options, type:

```bash
useradd -D
```

The output will look something like this:

```output
GROUP=100
HOME=/home
INACTIVE=-1
EXPIRE=
SHELL=/bin/sh
SKEL=/etc/skel
CREATE_MAIL_SPOOL=no
```

Let us say you want to change the default login shell from `/bin/sh` to `/bin/bash`. To do that, specify the new shell as shown below:

```bash
sudo useradd -D -s /bin/bash
```

You can verify that the default shell is changed by running the following command:

```bash
sudo useradd -D | grep -i shell
```

```output
SHELL=/bin/bash
```

## Troubleshooting

**“useradd: user ‘username’ already exists”**  
The username is already taken. Choose a different name, or use `id username` to inspect the existing account. To modify an existing user, use `usermod` instead.

**“useradd: Permission denied”**  
Creating users requires root privileges. Prefix the command with `sudo`, or switch to the root user first.

**Home directory was not created**  
By default, `useradd` does not create a home directory on all distributions. Always pass the `-m` flag to ensure the home directory is created: `sudo useradd -m username`.

**User cannot log in after creation**  
A newly created user has no password set by default and will be locked. Run `sudo passwd username` to set a password before the user can log in.

**“specified group does not exist”**  
When using `-g` or `-G`, the group must already exist. Create the group first with `sudo groupadd groupname`, then retry the `useradd` command.

## FAQ

**What is the difference between `useradd` and `adduser`?**  
`useradd` is a low-level binary available on all Linux distributions. `adduser` is a higher-level, interactive script available on Debian-based systems (Ubuntu, Debian) that calls `useradd` internally and automatically sets a password, creates the home directory, and prompts for user details.

**How do I create a user with a home directory in Linux?**  
Use the `-m` flag: `sudo useradd -m username`. This creates the home directory at `/home/username` and copies default files from `/etc/skel`.

**How do I create a user and add them to a group at the same time?**  
Use the `-G` flag to specify supplementary groups: `sudo useradd -m -G sudo,docker username`. The user will be a member of all listed groups in addition to their primary group.

**How do I verify that a user was created successfully?**  
Run `id username` to check the user’s UID, GID, and group memberships. You can also check the entry in `/etc/passwd` with `grep username /etc/passwd`.

**How do I delete a user in Linux?**  
Use the `userdel` command. To also remove the home directory, add the `-r` flag: `sudo userdel -r username`. See the [userdel guide](https://linuxize.com/post/how-to-delete-users-in-linux-using-the-userdel-command/) for details.

## Conclusion

The `useradd` command covers everything from basic account creation to custom UIDs, group assignments, login shells, and expiry dates. On Debian-based systems, [adduser](https://linuxize.com/post/how-to-add-and-delete-users-on-ubuntu-20-04/) provides a friendlier interactive alternative that handles the most common options automatically.

## Tags

A quick weekly roundup of new tutorials, news, and tips.

## About the authors

Dejan Panovski

Dejan Panovski is the founder of Linuxize, an RHCSA-certified Linux system administrator and DevOps engineer based in Skopje, Macedonia. Author of 800+ Linux tutorials with 20+ years of experience turning complex Linux tasks into clear, reliable guides.

[View author page](https://linuxize.com/authors/dejan-panovski/)