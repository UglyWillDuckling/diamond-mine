---
title: "Errno 24: Too many open files. But I am not opening files?"
source: https://stackoverflow.com/questions/39537731/errno-24-too-many-open-files-but-i-am-not-opening-files
published: 2016-09-16
created: 2025-02-04
tags:
  - error
  - fix
  - stack-overflow
related:
  - "[[Too many open files error stackoverflow]]"
  - "[[uname command]]"
  - "[[unix]]"
---
I am using treq ([https://github.com/twisted/treq](https://github.com/twisted/treq)) to query some other api from my web service. Today when I was doing stress testing of my own services, It shows an error

`twisted.internet.error.DNSLookupError: DNS lookup failed: address 'api.abc.com' not found: [Errno 24] Too many open files.`

But the problem is, my entire code I didn't open any file. I suspect it could be caused by the api I query goes down or blocked me (the api.abc.com) since my stress testing could be like a ddos to that end point. Still, in that case shouldn't that be something like refuse connection? I don't know why it will have that `Too many open files` error. Or is that caused by creating too much thread query?

asked Sep 16, 2016 at 18:13

[

![JLTChiu's user avatar](https://www.gravatar.com/avatar/86f3c49bcdab97efcc8893a9eec26973?s=64&d=identicon&r=PG)

](https://stackoverflow.com/users/1294529/jltchiu)

1

"Files" include network sockets, which are a type of file on Unix-based systems. The maximum number of open files is configurable with `ulimit -n`, and the limit is inherited by child processes:

```
# Check current limit
$ ulimit -n
256

# Raise limit to 2048
# Only affects processes started from this shell
$ ulimit -n 2048

$ ulimit -n
2048
```

It is not surprising to run out of file handles and have to raise the limit. But if the limit is already high, you may be leaking file handles (not closing them quickly enough). In garbage-collected languages like Python, the finalizer does not always close files fast enough, which is why you should be careful to use `with` blocks or other systems to close the files as soon as you are done with them.

answered Sep 16, 2016 at 18:27

[

![Dietrich Epp's user avatar](https://www.gravatar.com/avatar/5c5f910416e2b92bb73fa59c56fe695d?s=64&d=identicon&r=PG)

](https://stackoverflow.com/users/82294/dietrich-epp)

[Dietrich Epp](https://stackoverflow.com/users/82294/dietrich-epp)Dietrich Epp

213k38 gold badges360 silver badges422 bronze badges

1

I wanted to build on @Dietrich Epp answer. Setting ulimit -n will change the current limit for that terminal only. If you would like to change this limit so it exists across all terminal sessions (such as on EC2), you need to edit:

`vim /etc/security/limits.conf`

and add soft and hard limits for the number of open descriptors per user. As an example, you can paste this snippet in the file above:

```py
*         hard    nofile      500000
*         soft    nofile      500000
root      hard    nofile      500000
root      soft    nofile      500000
```

This will set the limit to 500000 with every new terminal session. After editing, sign out and then back in, (or reboot if you are able and that's preferable). Afterwards, you can run `ulimit -n` to confirm that it's been set properly.

answered Dec 7, 2018 at 0:45

[

![dave4jr's user avatar](https://www.gravatar.com/avatar/e66056126a0d8a44af13a398d8c6f8f5?s=64&d=identicon&r=PG)

](https://stackoverflow.com/users/2569090/dave4jr)

[dave4jr](https://stackoverflow.com/users/2569090/dave4jr)dave4jr

1,4441 gold badge16 silver badges21 bronze badges

2