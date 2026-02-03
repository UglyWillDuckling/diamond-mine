---
title: "IPod 7th gen install fail"
source: "https://forums.rockbox.org/index.php?topic=54289.0"
author:
published:
created: 2025-01-08
description: "IPod 7th gen install fail"
tags:
favicon: "https://forums.rockbox.org/favicon.ico"
---
![icon](https://forums.rockbox.org/favicon.ico]

[![[~/×/952e50dcc9da6d2cf98865bbd1e3fd38_MD5.png]]](https://www.rockbox.org/)

### ![[~/×/abcc574f037005c2cb577418d28f1b10_MD5.gif]] Topic: IPod 7th gen install fail  (Read 3687 times)

Hi everyone!  
I bought a 160GB thin iPod classic recently. When I checked it out, I noticed it said 0kb available and 0kb used from the HDD space, and it completely reset after every restart, not seeing any files that were on the drive either (my Linux machine did see the songs through gtkpod though).  
After failing to get the original software to behave, I decided to go for Rockbox. The installer got to the DFU part, detected the DFU mode, but right after it said it could detect no DFU device. From what I could find on the forums this could be solved by root privileges, but the issue is that I can no longer turn the iPod on. I read that setting the hold switch to off and then holding MENU+ACTION should rebboot, but it doesn't seem to work.  
Could anyone tell me, if this is just already faulty hardware finally giving up, or if this has anything to do with Rockbox? Any ideas if this is salvageable?  
Thanks in advance!

![[~/×/8ac61eb352fd349833969bf3dab7c383_MD5.gif]] Logged

---

I would guess you have a dying hard drive. Time to replace it with iFlash and some microSD cards and expand the capacity.

![[~/×/8ac61eb352fd349833969bf3dab7c383_MD5.gif]] Logged

---

So it is sorted out now, but I'll leave the solution here for the future generations.  
The iPod was hard stuck in DFU mode for some reason, but I managed to restore it using a friends MacBook.  
The device seems fine now, all the earlier issues are now gone (my guess is it was a misformatted HDD).  
I'm gonna retry Rockbox install later today, but this specific issue is cleared up now.

![[~/×/8ac61eb352fd349833969bf3dab7c383_MD5.gif]] Logged

---

I'd still suspect philden might be correct.  Could be bad sectors on the drive and at some point - when you write to that part of the drive - it will go wrong again.

![[~/×/8ac61eb352fd349833969bf3dab7c383_MD5.gif]] Logged

---

I ran the built in HDD diagnostics, and it said there are no moved sectors. How reliable is that?

![[~/×/8ac61eb352fd349833969bf3dab7c383_MD5.gif]] Logged

---

If the diagnostics screen doesn't show any alarmingly large numbers maybe its OK.  Though I would have thought those numbers would be reset once you do a restore, so depends if they build up again. I'd assume any problem would only show up when it starts to fill up.  
  Is the disk full of content? If so and its still working OK than maybe it was just a weird random glitch.

![[~/×/8ac61eb352fd349833969bf3dab7c383_MD5.gif]] Logged

---

Didn't see anything out of the ordinary in the statistics. I'm also quite sure it wasn't reset, as it had a lot of data for just the small time I've been using it.  
Not a lot of content on the drive yet, I'm still in the process of filling it up. I've also been using it nearly constantly though, and things still seem fine. I guess I'll just have to wait and see. I really don't want to open it up, unless I really have to (it's not that I'm scared or don't know how to do it, I'd just like to preserve it as original as long as I can).  
Thanks for all the insight, I might still update this thread as things unfold later. (Especially since I still didn't get to the Rockbox part of things. 😀)

![[~/×/8ac61eb352fd349833969bf3dab7c383_MD5.gif]] Logged

---

Alright, time for the update I didn't want to make.  
After learning that Rockbox doesn't like HFS+, reformatting with a Windows laptop, and a few more install attempts, here's what I know.  
All attempts failed the same way the first one did, (as in "DFU mode detected" > "Release buttons" > "Transferring image" > "ERR DFU device not found"). I ran Rockbox utility with sudo, so root privilege shouldn't be an issue. Logs say it sees "Apple Computer, Inc. USB DFU Device" while searching for USB devices, but once it actually tries, "ipoddfu\_send() failed: \[ERR\] DFU device not found" is returned. One thing I noticed, is that lsusb calls the device "Apple, Inc. iPod Classic/Nano 3.Gen (DFU mode)", which is not the name mentioned by the utility. Don't know if that matters at all. That is there after the utility fails too, so the iPod really is in DFU mode and detected by the system, just not the Rockbox utility.

![[~/×/8ac61eb352fd349833969bf3dab7c383_MD5.gif]] Logged

---

I had the exact same issue with an iPod Classic 6g 120gb installing from Ubuntu

> "DFU mode detected" > "Release buttons" > "Transferring image" > "ERR DFU device not found"

I followed the same steps and got the same result.  I also saw the same item in the lsusb output, i.e. "Apple, Inc. iPod Classic/Nano 3.Gen (DFU mode)"

I don't know why but what worked for me was digging out an old Windows 8 machine.  Then it was able to successfully install.

![[~/×/8ac61eb352fd349833969bf3dab7c383_MD5.gif]] Logged

---

I'm also having this issue with an 80GB 6th gen Classic (MB147) on my Arch Linux machine with both the latest stable and latest daily releases as of June 4th, 2024. I'm beginning to think there's a bug somewhere preventing Linux users from installing ROCKbox.

![[~/×/8ac61eb352fd349833969bf3dab7c383_MD5.gif]] Logged

---

![[~/×/8ac61eb352fd349833969bf3dab7c383_MD5.gif]] Logged

---

Jump to: