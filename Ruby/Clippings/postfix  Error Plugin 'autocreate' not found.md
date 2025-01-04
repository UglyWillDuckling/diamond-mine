---
title: "[postfix]  Error: Plugin 'autocreate' not found from directory /usr/li / Installation / Arch Linux Forums"
source: https://bbs.archlinux.org/viewtopic.php?id=270517
published: 
created: 2025-01-02
description: Error report found online regarding Dovecot
tags:
  - clippings
  - error
related:
  - "[[Dovecot]]"
---
- [Index](https://bbs.archlinux.org/index.php)
- » [Installation](https://bbs.archlinux.org/viewforum.php?id=17)
- » **[\[postfix\] Error: Plugin 'autocreate' not found from directory /usr/li](https://bbs.archlinux.org/viewtopic.php?id=270517)**

## #1 [2021-10-18 10:06:55](https://bbs.archlinux.org/viewtopic.php?pid=1998319#p1998319)

Registered: 2010-11-10

Posts: 63

### \[postfix\] Error: Plugin 'autocreate' not found from directory /usr/li

Hello

i have upgraded postfix and i have this error

```
 Error: Plugin 'autocreate' not found from directory /usr/lib/dovecot/modules
```

so i remove this plugin from : nano ./conf.d/20-imap.conf

i don't understand why this plugin doesn't exist anymore

thanks for your help

*Last edited by freaks (2021-10-18 10:09:40)*

## #2 [2021-10-18 14:17:47](https://bbs.archlinux.org/viewtopic.php?pid=1998367#p1998367)

**mpan**

**Member**

![](https://bbs.archlinux.org/img/avatars/62478.png?m=1572193435)

Registered: 2012-08-01

Posts: 1,345

[Website](https://mpan.pl/)

### Re: \[postfix\] Error: Plugin 'autocreate' not found from directory /usr/li

Postfix or Dovecot? And when did that happen?

Dovecot has [removed the autocreate plugin in March](https://dovecot.org/pipermail/dovecot-news/2021-March/000455.html) after [a warning a year earlier](https://dovecot.org/pipermail/dovecot-news/2020-March/000436.html). It has been replaced by [auto](https://doc.dovecot.org/configuration_manual/namespace/#mailbox-settings) in namespace settings.
