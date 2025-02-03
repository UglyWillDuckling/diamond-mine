---
title: How do i send notifications with buttons from bash script?
source: https://askubuntu.com/questions/1378731/how-do-i-send-notifications-with-buttons-from-bash-script
author:
  - "[[Ask Ubuntu]]"
published: 2021-12-02
created: 2025-01-30
description: I want a script to send a notification that asks something and i want the notification to have a button.notify-send doesn't seem to support this or i can't see the function.I'm using Plasma.
tags:
  - howto
  - notify
  - dialog
  - dialog-ui
---
I want a script to send a notification that asks something and i want the notification to have a button. `notify-send` doesn't seem to support this or i can't see the function. I'm using Plasma.

asked Dec 2, 2021 at 1:02

[

![Azarilh's user avatar](https://i.sstatic.net/UEjpe.png?s=64)

](https://askubuntu.com/users/849952/azarilh)

2

Something like in a bash file?...

```bash
#! /bin/sh
kdialog --msgbox 'Test Message' Details
```

Take a look at [https://develop.kde.org/deploy/kdialog/](https://develop.kde.org/deploy/kdialog/) for more options and examples.

answered Dec 2, 2021 at 4:32

[

![Caleb McKay's user avatar](https://www.gravatar.com/avatar/d2233ea98aa2c6b1a8697455578d3d99?s=64&d=identicon&r=PG&f=y&so-version=2)

](https://askubuntu.com/users/964708/caleb-mckay)

[Caleb McKay](https://askubuntu.com/users/964708/caleb-mckay)Caleb McKay

7045 silver badges7 bronze badges

3

It looks like [`dunstify`](https://linuxcommandlibrary.com/man/dunstify), part of the [dunst notification daemon](https://github.com/dunst-project/dunst), may do what you want:

```bash
dunstify -A yes.ACCEPT -A no,DECLINE "A message"
```

Dunst is [available on Ubuntu](https://manpages.ubuntu.com/manpages/xenial/en/man1/dunst.1.html), but apparently doesn't integrate very well [with Plasma on KDE](https://www.reddit.com/r/kde/comments/hgs41s/changing_the_notification_deamon/) or [Unity](https://askubuntu.com/questions/1092323/how-do-i-disable-dunst-and-go-back-to-notify-osd/1092324#1092324). You should still be able to use it though if it integrates well enough for your needs and you manage to install it.

*I came acrosss `dunstify` on the [Arch Wiki](https://bbs.archlinux.org/viewtopic.php?id=172965) when searching for an answer to a similar problem but haven't managed to get it working. You might have more luck.*

answered Feb 16, 2023 at 10:37

[

![Mehmet Karatay's user avatar](https://i.sstatic.net/c4iyq.jpg?s=64)

](https://askubuntu.com/users/247862/mehmet-karatay)

In my system(ubuntu 20.04 gnome shell 3.36.9) following works.

```bash
#/usr/bin/env bash
gdialog --msgbox 'Hi'
```

gdialog is wrapper of zenity in gnome shell environment. For detailed use, run zenity --help

`zenity --info --text='Hi'` equals above gdialog command

Please refer [https://help.gnome.org/users/zenity/3.32/](https://help.gnome.org/users/zenity/3.32/)

answered Dec 2, 2021 at 4:54

[

![simryang's user avatar](https://graph.facebook.com/100006856770608/picture?type=large)

](https://askubuntu.com/users/333486/simryang)

3

## You must [log in](https://askubuntu.com/users/login?ssrc=question_page&returnurl=https%3a%2f%2faskubuntu.com%2fquestions%2f1378731) to answer this question.

## 

Not the answer you're looking for? Browse other questions tagged

.