---
source: https://askubuntu.com/questions/876249/cannot-start-epson-printer-utility
author:
  - "[[Ask Ubuntu]]"
published: 2017-01-25
created: 2025-04-07
tags:
  - howto/fix
---
5

I recently upgraded to Ubuntu 16.04 x64 from 14.04 with a clean install. I used epson-printer-utility on 14.04 with no problems. Now, when I try to launch it, I get the following message:

Communication daemon down, Error code = -1

I created a.desktop file and granted permissions according to this link:

[How to get "Epson Printer Utility" to start from Launcher in Ubuntu?](https://askubuntu.com/questions/752763/how-to-get-epson-printer-utility-to-start-from-launcher-in-ubuntu)

I had no problems in 14.04 with this program. Also, everything is working fine with my printer in 16.04 wrt printing. I am not sure to what communications deamon the message is referring. How can I resolve this issue?

[Share](https://askubuntu.com/q/876249 "Short permalink to this question") [Improve this question](https://askubuntu.com/posts/876249/edit) [edited Apr 13, 2017 at 12:25](https://askubuntu.com/posts/876249/revisions "show all edits to this post") [Community](https://askubuntu.com/users/-1/community) Bot 1 asked Jan 25, 2017 at 22:03 [Cecil Carpenter](https://askubuntu.com/users/646746/cecil-carpenter) Cecil Carpenter 53 1 1 silver badge 3 3 bronze badges 5

## 2 Answers 2

[Reset to default](https://askubuntu.com/questions/876249/cannot-start-epson-printer-utility?answertab=scoredesc#tab-top) 9

Just run this to start backend:

```
sudo systemctl start ecbd.service
```

[Share](https://askubuntu.com/a/881367 "Short permalink to this answer") [Improve this answer](https://askubuntu.com/posts/881367/edit) answered Feb 8, 2017 at 22:27 [Vladimir](https://askubuntu.com/users/652437/vladimir) Vladimir 106 1 1 bronze badge 1 2

After installing the Epson Printer Utility, and using the instructions found at [How to get "Epson Printer Utility" to start from Launcher in Ubuntu?](https://askubuntu.com/questions/752763/how-to-get-epson-printer-utility-to-start-from-launcher-in-ubuntu) to create a.desktop file, you just have to reboot the computer to get rid of the communication daemon error.

[Share](https://askubuntu.com/a/876332 "Short permalink to this answer") [Improve this answer](https://askubuntu.com/posts/876332/edit) [edited Apr 13, 2017 at 12:24](https://askubuntu.com/posts/876332/revisions "show all edits to this post") [Community](https://askubuntu.com/users/-1/community) Bot 1 answered Jan 26, 2017 at 3:49 [heynnema](https://askubuntu.com/users/4272/heynnema) heynnema 73.3k 18 18 gold badges 140 140 silver badges 195 195 bronze badges 0

## You must log in to answer this question.

Start asking to get answers

Find the answer to your question by asking.

Explore related questions

See similar questions with these tags.