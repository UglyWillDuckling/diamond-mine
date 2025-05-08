---
author: 
created: 2025-05-06
published: 
source: https://bbs.archlinux.org/viewtopic.php?id=293137
tags:
  - issue/ssh
---
- [Index](https://bbs.archlinux.org/index.php)
- » [Applications & Desktop Environments](https://bbs.archlinux.org/viewforum.php?id=18)
- » **[SSH keys - GNOME Keyring and gcr \[SOLVED\]](https://bbs.archlinux.org/viewtopic.php?id=293137)**

Pages: **1**

## #1

**Rec100**

**Member**

Registered: 2022-03-12

Posts: 32

### SSH keys - GNOME Keyring and gcr \[SOLVED\]

I did a full update yesterday and rebooted. Today I realized, that I can't authenticate towards GitHub/GitLab. I'm getting an error like this:

```
$ git push
git@github.com: Permission denied (publickey).
fatal: Could not read from remote repository.

Please make sure you have the correct access rights
and the repository exists.
```

My keys are all in ~/.ssh/, also the config file is correct.  
So, I assumed it might have something to do with SSH and took a look at the forum. I found this - solved - thread [https://bbs.archlinux.org/viewtopic.php?id=292403](https://bbs.archlinux.org/viewtopic.php?id=292403). Unfortunately, the solutions are unclear to me. Some of the files do not exist and there are multiple solutions mentioned. Is a reboot required?

```
$ systemctl --user enable gcr-ssh-agent.socket
Failed to connect to bus: No medium found

$ systemctl start gcr-ssh-agent.socket
Failed to start gcr-ssh-agent.socket: Unit gcr-ssh-agent.socket not found.

$ less /etc/profile.d/ssh_auth_gcr.sh
/etc/profile.d/ssh_auth_gcr.sh: No such file or directory
```

So, instead of crazily creating files and configurations, which I do not fully understand, I wanted to first do the homework:

I use GNOME, have gcr-4-4.2.0-1, seahorse and GNOME keyring installed.  
The thread mentions [https://wiki.archlinux.org/title/GNOME/Keyring#SSH\_keys](https://wiki.archlinux.org/title/GNOME/Keyring#SSH_keys) and changes in GNOME keyring. There it says:

> The SSH functionality is disabled by default in gnome-keyring-daemon builds since version 1:46. It has been moved into /usr/lib/gcr-ssh-agent, which is part of the gcr-4 package. The plan is to completely remove the implementation in gnome-keyring-daemon.

```
$ gnome-keyring-daemon --version
gnome-keyring-daemon: 46.1
testing: enabled
```

The below section on set up says:

> Setup gcr
> 
> 1\. Enable the gcr-ssh-agent.socket systemd user unit.  
> 2\. Run SSH commands with the SSH\_AUTH\_SOCK environment variable set to $XDG\_RUNTIME\_DIR/gcr/ssh. There are many ways to set environment variables, and the one you use will depend on your specific setup and preferences.

Unfortunately enable the gcr-ssh-agent.socket systemd user unit does not work (see above).

Now I am a bit stuck and would like to get a suggestion how to proceed.

*Last edited by Rec100 (2024-02-23 16:48:37)*

Offline

## #2

**V1del**

**Forum Moderator**

Registered: 2012-10-16

Posts: 24,360

### Re: SSH keys - GNOME Keyring and gcr \[SOLVED\]

If that systemctl --user command doesn't work then your login session is broken. What are you using to login/starting your graphical environment. Output of

?

*Last edited by V1del (2024-02-23 14:40:22)*

Offline

## #3

**seth**

**Member**

Registered: 2012-09-03

Posts: 63,257

### Re: SSH keys - GNOME Keyring and gcr \[SOLVED\]

The system bus issues notwithstanding, you'll still have to add the profile.d drop in and export the environment there (until anyone figured a narrower context for this)

---

[How to upload text](http://wiki.archlinux.org/title/List_of_applications/Internet#Without_a_dedicated_client) · [How to boot w/o GUI](http://wiki.archlinux.org/title/Systemd#Change_default_target_to_boot_into) · [Disable Windows Fast-Start!](http://wiki.archlinux.org/title/Dual_boot_with_Windows#Fast_Startup_and_hibernation) · [Fix your xinitrc](http://wiki.archlinux.org/title/Xinit#xinitrc)

Offline

## #4

**Rec100**

**Member**

Registered: 2022-03-12

Posts: 32

### Re: SSH keys - GNOME Keyring and gcr \[SOLVED\]

seth wrote:

> The system bus issues notwithstanding, you'll still have to add the profile.d drop in and export the environment there (until anyone figured a narrower context for this)

I've added the file /etc/profile.d/ssh\_auth\_gcr.sh with 'export SSH\_AUTH\_SOCK=$XDG\_RUNTIME\_DIR/gcr/ssh'. This did the trick after a reboot. Thank you.

For the systemd issues, I might open another ticket, to keep things separated.

Offline

## #5

**hytew**

**Member**

Registered: 2011-01-20

Posts: 28

### Re: SSH keys - GNOME Keyring and gcr \[SOLVED\]

Rec100 wrote:

> seth wrote:
> 
> > The system bus issues notwithstanding, you'll still have to add the profile.d drop in and export the environment there (until anyone figured a narrower context for this)
> 
> I've added the file /etc/profile.d/ssh\_auth\_gcr.sh with 'export SSH\_AUTH\_SOCK=$XDG\_RUNTIME\_DIR/gcr/ssh'. This did the trick after a reboot. Thank you.
> 
> For the systemd issues, I might open another ticket, to keep things separated.

Same problem here after a system upgrade. Fixed thanks to your comment.

Offline

Pages: **1**

- [Index](https://bbs.archlinux.org/index.php)
- » [Applications & Desktop Environments](https://bbs.archlinux.org/viewforum.php?id=18)
- » **[SSH keys - GNOME Keyring and gcr \[SOLVED\]](https://bbs.archlinux.org/viewtopic.php?id=293137)**