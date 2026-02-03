---
source: https://www.claudiokuenzler.com/blog/1306/postfix-not-resolving-mx-host-domain-not-found-dns-server-change
author:
  - "[[Claudio Kuenzler]]"
published: 2023-04-18
created: 2025-02-26
tags:
  - fix/postfix/dns-resolve
part of:
  - "[[yet another tech-blog - made in Switzerland]]"
---
![[~/×/d5fcbf6904821837b4f49f68713f788e_MD5.png|50]]

---

After deploying new DNS resolvers across a large infrastructure, the mail queues of certain [Postfix mail servers](https://www.postfix.org/) (sending directly via Internet, not using a SMTP relay) suddenly started to increase.

![[~/×/ae038cbae308e4ac4d52cbd9ae0e8d1d_MD5.jpg|50]]

## Host or domain name not found

A quick look into the mail queue showed DNS lookup issues of the MX records of the recipient domains:

root@postfix:~# mailq  
\[...\]  
5CC4A10119D      486 Tue Apr 18 11:26:04  nagios@postfix.example.com  
**(delivery temporarily suspended: Host or domain name not found. Name service error for name=recipient.com type=MX: Host not found, try again)**  
                                         frank@recipient.com

56CBA1010D6      731 Mon Apr 17 07:57:06  nagios@postfix.example.com  
(delivery temporarily suspended: Host or domain name not found. Name service error for name=recpdomain.com type=MX: Host not found, try again)  
                                         daniel.lemale@recpdomain.com  
\[...\]  
\-- 113 Kbytes in 195 Requests.

Obviously the original domains are obfuscated, but they are real domains with valid MX DNS records.

The first verification check is obviously whether DNS works or not. And yes, DNS resolving works on this system; the MX records can be resolved (and point to O365 Exchange):

root@postfix:~# dig -t MX recipient.com  
\[...\]

**;; ANSWER SECTION:  
recipient.com.        289    IN    MX    0 recipient-com.mail.protection.outlook.com.**

;; Query time: 59 msec  
**;; SERVER: 10.10.1.53#53(10.10.1.53)**  
;; WHEN: Tue Apr 18 12:07:11 CEST 2023  
;; MSG SIZE  rcvd: 93

We can see, the MX record was resolved by using the system's primary DNS server (10.10.1.53). 

But why wouldn't it work for Postfix? Even after re-sending all the queued mails using postqueue -f the same errors showed up in mailq and in /var/log/mail.log.

## Postfix's chroot resolv.conf

One of the reasons, Postfix is considered a very stable and secure application, is because **Postfix is (in most Linux distributions) installed as a chrooted application - usually under the path /var/spool/postfix**. This means that system and other configuration files (e.g. /etc/passwd) cannot be read by the process. However this also means that **access to /etc/resolv.conf is prevented**.

Postfix solves this by copying certain system files into the chroot path:

root@postfix:~# ls -la /var/spool/postfix/etc/  
total 48  
drwxr-xr-x  3 root root  4096 Apr 02 12:10 .  
drwxr-xr-x 20 root root  4096 Sep 29  2021 ..  
\-rw-r--r--  1 root root    92 Apr 02 12:10 host.conf  
\-rw-r--r--  1 root root   416 Apr 02 12:10 hosts  
\-rw-r--r--  1 root root  1909 Apr 02 12:10 localtime  
\-rw-r--r--  1 root root   513 Apr 02 12:10 nsswitch.conf  
\-rw-r--r--  1 root root   111 Apr 02 12:10 resolv.conf  
\-rw-r--r--  1 root root 14464 Apr 02 12:10 services  
drwxr-xr-x  3 root root  4096 Apr 02  2018 ssl

Taking a closer look at this resolv.conf inside the Postfix chroot shows something interesting:

root@postfix:~# cat /var/spool/postfix/etc/resolv.conf  
search example.com  
nameserver 192.168.206.153  
nameserver 192.168.204.20  
nameserver 192.168.214.20

These are the old DNS resolvers! Comparing with the recently deployed /etc/resolv.conf:

root@postfix:~# cat /etc/resolv.conf  
search example.com  
nameserver 10.10.1.53  
nameserver 10.10.2.53  
nameserver 10.10.3.53

This perfectly explains why DNS resolving worked fine with dig but Postfix was still not able to resolve MX records.

## Postfix restart updates config files in chroot path  

How can the chrooted files be updated with the new resolv.conf? A Postfix restart triggers some helper scripts in the background which do the job for you:

root@postfix:~# systemctl restart postfix

Taking another look at the chrooted resolv.conf shows the new resolvers:

root@postfix:~# cat /var/spool/postfix/etc/resolv.conf  
search example.com  
nameserver 10.10.1.53  
nameserver 10.10.2.53  
nameserver 10.10.3.53

This looks better, doesn't it? Let's send out the queued mails, check the logs and the mail queue:

root@postfix:~# postqueue -f

root@postfix:~# tail -f /var/log/mail.log  
\[...\]  
Apr 18 12:08:30 postfix postfix/smtp\[2998492\]: 2411B101110: to=<jack@recipient.com>, relay=recipient-com.mail.protection.outlook.com\[104.47.22.74\]:25, conn\_use=3, delay=17277, delays=17273/2.5/0.01/1.1, dsn=2.6.0, status=sent (250 2.6.0 <20230418052034.2411B101110@postfix.example.com> \[InternalId=4118873647280, Hostname=ZR2P278MB1163.CHEP278.PROD.OUTLOOK.COM\] 8000 bytes in 0.875, 8.921 KB/sec Queued mail for delivery)  
Apr 18 12:08:30 postfix postfix/qmgr\[2996445\]: 2411B101110: removed  
Apr 18 12:08:30 postfix postfix/smtp\[2998401\]: 0BB651010DE: to=<frank@recipient.com>, relay=recipient-com.mail.protection.outlook.com\[104.47.22.10\]:25, conn\_use=3, delay=90683, delays=90679/2.7/0.02/0.89, dsn=2.6.0, status=sent (250 2.6.0 <20230417085708.0BB651010DE@postfix.example.com> \[InternalId=4118873647271, Hostname=GV0P278MB1157.CHEP278.PROD.OUTLOOK.COM\] 8006 bytes in 0.587, 13.307 KB/sec Queued mail for delivery)  
Apr 18 12:08:30 postfix postfix/qmgr\[2996445\]: 0BB651010DE: removed  
Apr 18 12:08:31 postfix postfix/smtp\[2998409\]: CBFB3100F3C: to=<trevor.smith@recipient.com>, relay=recipient-com.mail.protection.outlook.com\[104.47.22.74\]:25, delay=101486, delays=101482/2/0.04/2, dsn=2.6.0, status=sent (250 2.6.0 <20230417055705.CBFB3100F3C@postfix.example.com> \[InternalId=135574937675452, Hostname=ZRAP278MB0030.CHEP278.PROD.OUTLOOK.COM\] 7998 bytes in 0.856, 9.115 KB/sec Queued mail for delivery)  
Apr 18 12:08:31 postfix postfix/qmgr\[2996445\]: CBFB3100F3C: removed  
\[...\]

root@postfix:~# mailq  
Mail queue is empty

All MX records could now be resolved and therefore all e-mails were successfully sent to the MX servers.  

  

### Add a comment

Show form to leave a comment

### Comments (newest first)

No comments yet.