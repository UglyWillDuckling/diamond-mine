---
author:
  - "[[Ask Ubuntu]]"
created: 2025-03-01
published: 2017-03-22
source: "https://askubuntu.com/questions/895492/kernel-panic-vfs-cannot-open-root-device-or-unknown-block-error-6"
tags:
---
Note that this is Kubuntu (KDE Ubuntu)

I've been having a problem for a while where if I turn on the computer, it just takes me to a black screen. It sticks there with no output and no hint of what's going on except that the Caps Lock indicator light on my keyboard flashes on and off (weird, right?)
a
If I then turn off the computer (by holding down the power button for a few seconds), and turn it back on, I get a boot menu where I can choose 'Advanced options for Ubuntu', and that lists different versions, recovery modes, some of which work just fine.

That's what I've bee doing for the two weeks or so I've had this problem, and it worked until just now. The alternative options only booted me into the command line. I was able to fix this with [this solution](https://superuser.com/questions/377594/how-to-start-plasma-desktop-from-ssh-console-on-desktop-session), so now I'm typing this from my desktop.

I'm reluctant to turn off the computer in case it happens again, and I'd like to just tear out the root of the problem.

Screenshot of error: [![enter image description here](https://i.sstatic.net/OjKfz.jpg)](https://i.sstatic.net/OjKfz.jpg)