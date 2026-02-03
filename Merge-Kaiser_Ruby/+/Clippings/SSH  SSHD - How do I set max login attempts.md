---
title: "SSH / SSHD - How do I set max login attempts?"
source: "https://serverfault.com/questions/275669/ssh-sshd-how-do-i-set-max-login-attempts"
author:
  - "[[Server Fault]]"
published: 2011-05-31
created: 2025-01-06
description: "What is the easiest way to setup max login attempts in a LAMP environment (sshd installed via yum)? Is there a package or simple firewall rule?"
tags:
favicon: "https://cdn.sstatic.net/Sites/serverfault/Img/favicon.ico?v=18e9cc4f2aea"
---
![icon](https://cdn.sstatic.net/Sites/serverfault/Img/favicon.ico?v=18e9cc4f2aea]

I don't like to use any third party tools. Hence I used a combination of ssh configuration and firewall settings. With the following solution an attacker is allowed to produce exactly 3 fault logins in 2 minutes, or he will be blocked for 120 seconds.

**1) Add the following line to `/etc/ssh/sshd_config`**

```
MaxAuthTries 1
```

This will allow only 1 login attempt per connection. Restart the ssh server.

**2) Add the following firewall rules**

*Create a new chain*

```
iptables -N SSHATTACK
iptables -A SSHATTACK -j LOG --log-prefix "Possible SSH attack! " --log-level 7
iptables -A SSHATTACK -j DROP
```

*Block each IP address for 120 seconds which establishes more than three connections within 120 seconds. In case of the fourth connection attempt, the request gets delegated to the `SSHATTACK` chain, which is responsible for logging the possible ssh attack and finally drops the request.*

```
iptables -A INPUT -i eth0 -p tcp -m state --dport 22 --state NEW -m recent --set
iptables -A INPUT -i eth0 -p tcp -m state --dport 22 --state NEW -m recent --update --seconds 120 --hitcount 4 -j SSHATTACK
```

**3) See log entries of possible ssh attacks in `/var/log/syslog`**

```
Dec 27 18:01:58 ubuntu kernel: [  510.007570] Possible SSH attack! IN=eth0 OUT= MAC=01:2c:18:47:43:2d:10:c0:31:4d:11:ac:f8:01 SRC=192.168.203.129 DST=192.168.203.128 LEN=60 TOS=0x00 PREC=0x00 TTL=64 ID=30948 DF PROTO=TCP SPT=53272 DPT=1785 WINDOW=14600 RES=0x00 SYN URGP=0
```