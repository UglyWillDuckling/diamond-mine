You are not logged in.

- Topics: [Active](https://bbs.archlinux.org/search.php?action=show_recent "Find topics with recent posts.") | [Unanswered](https://bbs.archlinux.org/search.php?action=show_unanswered "Find topics with no replies.")

- [Index](https://bbs.archlinux.org/index.php)
- » [Newbie Corner](https://bbs.archlinux.org/viewforum.php?id=23)
- » **[\[solved\]is the a command to show which video driver is loaded?](https://bbs.archlinux.org/viewtopic.php?id=136535)**

Pages: **1**

## #1 [2012-02-25 22:53:27](https://bbs.archlinux.org/viewtopic.php?pid=1063374#p1063374)

**ninjaprawn**

**Member**

From: Manchester, UKsudo lshw -C display


Registered: 2008-01-26

Posts: 485

### \[solved\]is the a command to show which video driver is loaded?

really quick one, is the a command to show which video driver is loaded?

*Last edited by ninjaprawn (2012-02-26 19:44:05)*

---

2007 - Started using Arch Linux as my only/main OS  
\- Samsung Series 3, Intel(R) Core(TM) i5-3210M CPU @ 2.50GHz - 8Gb DDR3 ram - 700Gb HDD  
On board intel Graphics & Sound

Offline

## #2 [2012-02-25 23:18:45](https://bbs.archlinux.org/viewtopic.php?pid=1063382#p1063382)

**falconindy**

**Developer**

From: New York, USA

Registered: 2009-10-22

Posts: 4,111

[Website](http://blog.falconindy.com/)

### Re: \[solved\]is the a command to show which video driver is loaded?

Presumably you mean, "what driver is X using?", so I'll point you to /var/log/Xorg.0.log. I suggest reading it backwards, from the bottom up.

---

[blog](http://blog.falconindy.com/) | [±github](http://www.github.com/falconindy/)

Offline

## #3 [2012-02-26 02:03:12](https://bbs.archlinux.org/viewtopic.php?pid=1063432#p1063432)

**Pres**

**Member**

Registered: 2011-09-12

Posts: 423

### Re: \[solved\]is the a command to show which video driver is loaded?

You could use "lspci -v" and look at what driver is in use under your VGA controller.

Offline

## #4 [2012-02-26 19:43:16](https://bbs.archlinux.org/viewtopic.php?pid=1063822#p1063822)

**ninjaprawn**

**Member**

From: Manchester, UK

Registered: 2008-01-26

Posts: 485

### Re: \[solved\]is the a command to show which video driver is loaded?

Pres wrote:

> You could use "lspci -v" and look at what driver is in use under your VGA controller.

that did the trick... thanks

---

2007 - Started using Arch Linux as my only/main OS  
\- Samsung Series 3, Intel(R) Core(TM) i5-3210M CPU @ 2.50GHz - 8Gb DDR3 ram - 700Gb HDD  
On board intel Graphics & Sound

Offline

Pages: **1**

- [Index](https://bbs.archlinux.org/index.php)
- » [Newbie Corner](https://bbs.archlinux.org/viewforum.php?id=23)
- » **[\[solved\]is the a command to show which video driver is loaded?](https://bbs.archlinux.org/viewtopic.php?id=136535)**