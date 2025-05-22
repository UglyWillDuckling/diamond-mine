---
source: https://unix.stackexchange.com/questions/783146/how-to-restore-etc-x11-folder
author:
  - "[[Unix & Linux Stack Exchange]]"
published: 2024-09-06
created: 2025-03-31
tags:
  - howto/arch
  - howto/xorg
  - howto/fix
---
- [x] #task fix [[xorg]] not working after longer wait ⏫ ⏳ 2025-03-31 📅 2025-03-30 ✅ 2025-05-18
___
Asked Modified [6 months ago](https://unix.stackexchange.com/questions/783146/?lastactivity "2024-09-07 07:45:07Z") Viewed 189 times

Accidentally, I removed the entire `X11` folder while setting up my Wayland configuration, which is why Sway won't start.

How can I restore the folder?

P.S.: `pacman -R xorg && pacman -Sy xorg` doesn't work

[Share](https://unix.stackexchange.com/q/783146 "Short permalink to this question") [Improve this question](https://unix.stackexchange.com/posts/783146/edit) [edited Sep 7, 2024 at 7:45](https://unix.stackexchange.com/posts/783146/revisions "show all edits to this post") [ReflectYourCharacter](https://unix.stackexchange.com/users/342980/reflectyourcharacter) 5,322 6 6 gold badges 32 32 silver badges 65 65 bronze badges asked Sep 6, 2024 at 18:29 [RegreTTO](https://unix.stackexchange.com/users/597837/regretto) RegreTTO 13 3 3 bronze badges 4

## 2 Answers 2

[Reset to default](https://unix.stackexchange.com/questions/783146/how-to-restore-etc-x11-folder?answertab=scoredesc#tab-top) 1

As i wrote in the comments, try to reinstall `xorg-xinit`.

Try:

```
sudo pacman -S --needed --overwrite="*" xorg-server xorg-xinit
```

or  
`xorg` and other **related xorg packages**.

```
sudo pacman -S xorg-xinit xorg-server xorg-xrdb xorg-xrandr xorg-xauth xorg-xsetroot
```

Check this:

[how to re-install X from terminal](https://www.antixforum.com/forums/topic/how-to-re-install-x-from-terminal/)

*What @Ljm Dullaart wrote in the answer:*

If reinstall not work try to copy with `rsync` or `cp` all files and folders from a new installation.

[pacman](https://pacman.archlinux.page/pacman.8.html#_options)

[Xorg Arch Wiki](https://wiki.archlinux.org/title/Xorg)

[Share](https://unix.stackexchange.com/a/783150 "Short permalink to this answer") [Improve this answer](https://unix.stackexchange.com/posts/783150/edit) [edited Sep 7, 2024 at 7:42](https://unix.stackexchange.com/posts/783150/revisions "show all edits to this post") answered Sep 6, 2024 at 21:09 [ReflectYourCharacter](https://unix.stackexchange.com/users/342980/reflectyourcharacter) ReflectYourCharacter 5,322 6 6 gold badges 32 32 silver badges 65 65 bronze badges 1

Without backup there is no restore. Sorry.

The best you can do is to try to copy the files from a fresh install (install the same distribution on a USB stick and copy from that USB stick) or try to re-install the X11 packages.

[Share](https://unix.stackexchange.com/a/783148 "Short permalink to this answer") [Improve this answer](https://unix.stackexchange.com/posts/783148/edit) answered Sep 6, 2024 at 20:46 [Ljm Dullaart](https://unix.stackexchange.com/users/237080/ljm-dullaart) Ljm Dullaart 4,933 12 12 silver badges 27 27 bronze badges

## You must log in to answer this question.

Start asking to get answers

Find the answer to your question by asking.

Explore related questions

See similar questions with these tags.