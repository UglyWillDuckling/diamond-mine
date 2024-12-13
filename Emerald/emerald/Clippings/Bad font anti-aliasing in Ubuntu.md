---
title: "Bad font anti-aliasing in Ubuntu"
source: "https://superuser.com/questions/8824/bad-font-anti-aliasing-in-ubuntu"
author:
  - "[[Super User]]"
published: 2009-07-19
created: 2024-12-12
description: "I'm switching from Fedora 8 to Ubuntu 9.04, and I can't seem to get it to get a good font anti-aliasing to work. It seems that Ubuntu's fontconfig tries to keep characters in integral pixel widths...."
tags:
  - "clippings"
---
I'm switching from Fedora 8 to Ubuntu 9.04, and I can't seem to get it to get a good font anti-aliasing to work. It seems that Ubuntu's fontconfig tries to keep characters in integral pixel widths. This makes text more difficult to read, when 1 pixel is too thin and 2 pixels is too thick.

Check the image below. In Fedora, when fontconfig anti-aliasing is enabled, fonts have their thickness proportional to the font size. Below, the thickness is different for 8, 9 and 10pt sizes. In Ubuntu, on the other hand, even when anti-aliasing is enabled, all 8, 9 and 10pt sizes have 1 pixel thickness. This makes reading larges amount of text difficult.

![Comparing Fedora 8 and Ubuntu 9.04 font anti-aliasing.](https://i.sstatic.net/kZiTn.png)

I'm using the very same home directory, and I already checked that X resources are the same in both systems:

```
~% xrdb -query | grep Xft
Xft.antialias:  1
Xft.dpi:        96
Xft.hinting:    1
Xft.hintstyle:  hintfull
Xft.rgba:       none
```

GNOME settings:

```
~% gconftool-2 -a /desktop/gnome/font_rendering
 antialiasing = grayscale
 hinting = full
 dpi = 96
 rgba_order = rgb
```

So, the question is: What should I change in the new box (Ubuntu) in order to get anti-aliasing like in the old box (Fedora)?

---

### answer
There is an old trick to make fonts smoother on Ubuntu (and pretty much every distro running Gnome):

Open up .fonts.conf under your home directory (~/.fonts.conf) and paste this in:

<?xml version="1.0" ?>
<!DOCTYPE fontconfig SYSTEM "fonts.dtd">
   <fontconfig>
      <match target="font">
         <edit name="autohint" mode="assign">
            <bool>true</bool>
         </edit>
      </match>
</fontconfig>
