---
author:
  - "[[Ask Ubuntu]]"
created: 2025-04-01
published: 2012-08-15
source: https://askubuntu.com/questions/176121/dpkg-error-trying-to-overwrite-file-which-is-also-in
tags:
  - howto/ubuntu
  - howto/fix
---
For example:

```
$ sudo apt-get install curl
Reading package lists... Done
Building dependency tree
Reading state information... Done
You might want to run 'apt-get -f install' to correct these:
The following packages have unmet dependencies:
bsh : Depends: libjline-java but it is not going to be installed
groovy : Depends: libjline-java but it is not going to be installed
rhino : Depends: libjline-java but it is not going to be installed
E: Unmet dependencies. 

Try 'apt-get -f install' with no packages (or specify a solution).
```

I get the same or similar errors when I attempt to install clojure1.3, leiningen, and several other packages.

When I try the suggestion made in the error message, this is what happens:

```
$ sudo apt-get -f install 
Reading package lists... Done
Building dependency tree       
Reading state information... Done
Correcting dependencies... Done
The following packages were automatically installed and are no longer required:
  diffstat linux-headers-3.2.0-26-generic linux-headers-3.2.0-26 dh-apparmor dkms html2text libmail-sendmail-perl libsys-hostname-long-perl
Use 'apt-get autoremove' to remove them.
The following extra packages will be installed:
  libjline-java
Suggested packages:
  libjline-java-doc
The following NEW packages will be installed:
  libjline-java
0 upgraded, 1 newly installed, 0 to remove and 0 not upgraded.
23 not fully installed or removed.
Need to get 0 B/72.0 kB of archives.
After this operation, 129 kB of additional disk space will be used.
Do you want to continue [Y/n]? Y
(Reading database ... 226243 files and directories currently installed.)
Unpacking libjline-java (from .../libjline-java_1.0-1_all.deb) ...
dpkg: error processing /var/cache/apt/archives/libjline-java_1.0-1_all.deb (--unpack):
 trying to overwrite '/usr/share/java/jline.jar', which is also in package scala 2.9.2-400
Errors were encountered while processing:
 /var/cache/apt/archives/libjline-java_1.0-1_all.deb
E: Sub-process /usr/bin/dpkg returned an error code (1)

$ sudo apt-get upgrade
Reading package lists... Done
Building dependency tree       
Reading state information... Done
You might want to run 'apt-get -f install' to correct these.
The following packages have unmet dependencies:
 bsh : Depends: libjline-java but it is not installed
 groovy : Depends: libjline-java but it is not installed
 rhino : Depends: libjline-java but it is not installed
E: Unmet dependencies. Try using -f.
```

[Share](https://askubuntu.com/q/176121 "Short permalink to this question") [edited Mar 20, 2017 at 6:03](https://askubuntu.com/posts/176121/revisions "show all edits to this post") [Anwar](https://askubuntu.com/users/61218/anwar) 77.7k 35 35 gold badges 196 196 silver badges 316 316 bronze badges asked Aug 15, 2012 at 12:31 [missingfaktor](https://askubuntu.com/users/36554/missingfaktor) missingfaktor 2,669 4 4 gold badges 23 23 silver badges 24 24 bronze badges 4

## 6 Answers 6

[Reset to default](https://askubuntu.com/questions/176121/dpkg-error-trying-to-overwrite-file-which-is-also-in?answertab=scoredesc#tab-top) 189

### Warning: This answer is dangerous and may lead to a broken system (because this will effectively install the package but new problems may arise when both the packages try to use the same library/file/binary). Use Avinash Raj's answer instead. Also consider reporting a bug for both conflicting packages.

---

You have to force overwrite the files causing issues:

```
sudo dpkg -i --force-overwrite <file-path>
```

In your case it would be:

```
sudo dpkg -i --force-overwrite /var/cache/apt/archives/libjline-java_1.0-1_all.deb
```

Check that everything is fixed by running:

```
sudo apt-get --fix-broken install
```

If you still have problems, rerun the first step with any of the `dpkg: error processing (...)` remaining.

*Solution found on [webupd8](http://www.webupd8.org/2011/02/fix-dpkg-error-trying-to-overwrite-x.html)*

[Share](https://askubuntu.com/a/176132 "Short permalink to this answer") [edited Nov 2, 2022 at 12:58](https://askubuntu.com/posts/176132/revisions "show all edits to this post") [crxyz](https://askubuntu.com/users/1031101/crxyz) 159 1 1 silver badge 8 8 bronze badges answered Aug 15, 2012 at 13:01 [danjjl](https://askubuntu.com/users/22537/danjjl) danjjl 6,573 5 5 gold badges 32 32 silver badges 51 51 bronze badges 13 175

Please don't go for the [danjjl answer](https://askubuntu.com/a/176132/169736) directly, if you face this kind of "trying to overwrite" error, is likely that you have conflicting packages that need to be solved first.

The immediate fix for the issue is to remove the conflicting package that is undesirable, in this case `scala`,

```
sudo dpkg -P scala
```

Next it would be recommended to submit a bug report with the respective package maintainers. This normally imply adding a `Conflict: package` line in the control file.

Also see [this](https://askubuntu.com/a/430443/202806) answer for more detailed explanation about this error.

[Share](https://askubuntu.com/a/433510 "Short permalink to this answer") [edited Apr 13, 2017 at 12:24](https://askubuntu.com/posts/433510/revisions "show all edits to this post") [Community](https://askubuntu.com/users/-1/community) Bot 1 answered Mar 13, 2014 at 4:29 [Avinash Raj](https://askubuntu.com/users/202806/avinash-raj) Avinash Raj 80.1k 56 56 gold badges 219 219 silver badges 257 257 bronze badges 19 96

@danjjl's command works for `.deb` files. I found this command works with `apt` / `apt-get`:

```
sudo apt-get -o Dpkg::Options::="--force-overwrite" install <package-name>
```

[Share](https://askubuntu.com/a/491086 "Short permalink to this answer") [edited Aug 28, 2016 at 17:24](https://askubuntu.com/posts/491086/revisions "show all edits to this post") [Byte Commander](https://askubuntu.com/users/367990/byte-commander) ♦ 110k 51 51 gold badges 304 304 silver badges 440 440 bronze badges answered Jul 3, 2014 at 3:48 [David Xia](https://askubuntu.com/users/23430/david-xia) David Xia 1,187 1 1 gold badge 8 8 silver badges 10 10 bronze badges 4 4

So `dpkg --force-overwrite` is the hacky workaround that has been presented here in various forms. But [`dpkg-divert` (8)](https://linux.die.net/man/8/dpkg-divert) is the intended way to handle this situation.

[Share](https://askubuntu.com/a/1393389 "Short permalink to this answer") answered Feb 17, 2022 at 8:40 [Peter V. Mørch](https://askubuntu.com/users/34154/peter-v-m%c3%b8rch) Peter V. Mørch 5,777 4 4 gold badges 37 37 silver badges 41 41 bronze badges 3

Not sure that is a global fix as I had the same issue, but with a libglx-mesa file in the cache conflicting with Nvidia-390. I removed the file and issued an `apt install -f -y`, let that finished and then proceeded with the `apt update`, `upgrade` and `autoremove` in that sequence.

I got the error while executing an `apt dist-upgrade` on Ubuntu 18.04 and continued the process again, no more issues and that seemed to be "my" fix.

Commands:

```
sudo su -
mv /var/cache/apt/archives/libglx-mesa0_18.0.0~rc5-1ubuntu1_amd64.deb ~
apt install -f -y
apt update -y
apt upgrade -y
apt autoremove -y
apt dist-upgrade
```

PS: Forcing an overwrite was a bad idea that I tried and I got lucky. But it's better to find the root cause, and fix it. I still have to investigate but the error lead me to move the file out the way.

[Share](https://askubuntu.com/a/1045704 "Short permalink to this answer") [edited Jun 11, 2018 at 22:28](https://askubuntu.com/posts/1045704/revisions "show all edits to this post") [Stephen Rauch](https://askubuntu.com/users/681688/stephen-rauch) 1,156 6 6 gold badges 14 14 silver badges 21 21 bronze badges answered Jun 11, 2018 at 19:34 [user3091464](https://askubuntu.com/users/515441/user3091464) user3091464 31 1 1 bronze badge 3

For Debian, Ubuntu, etc., let `aptitude` handle it for you\`:

```bash
sudo apt update
sudo apt install aptitude

sudo aptitude install my_package_name
# Then choose the necessary options. Ex: for me I choose No, Yes, Yes,
# to choose to downgrade the troublesome package. Then it installs and
# works!
```

[Share](https://askubuntu.com/a/1439009 "Short permalink to this answer") answered Nov 4, 2022 at 6:06 [Gabriel Staples](https://askubuntu.com/users/327339/gabriel-staples) Gabriel Staples 11.1k 12 12 gold badges 96 96 silver badges 141 141 bronze badges 1

## This site is temporarily in read-only mode and not accepting new answers.

Start asking to get answers

Find the answer to your question by asking.

Explore related questions

See similar questions with these tags.