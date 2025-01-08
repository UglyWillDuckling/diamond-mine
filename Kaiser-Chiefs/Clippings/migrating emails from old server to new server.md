---
title: "migrating emails from old server to new server"
source: "https://serverfault.com/questions/1019845/migrating-emails-from-old-server-to-new-server"
author:
  - "[[Server Fault]]"
published: 2020-06-03
created: 2025-01-05
description: "(Bear with me, the whole idea of email setup is new for me)I have a server configured with postfix, dovecot and roundcube, everything is set u correctly.On the old server (Also using postfix), ..."
tags:
favicon: "https://cdn.sstatic.net/Sites/serverfault/Img/favicon.ico?v=18e9cc4f2aea"
---
(Bear with me, the whole idea of email setup is new for me)

I have a server configured with postfix, dovecot and roundcube, everything is set u correctly.

On the old server (Also using postfix), all the mails are in one file, I tried to migrate them to the new server(i.e copy the file to the new path of /var/spool/mail/$user and /var/mail/$user).

If I use from the terminal the command `mail` I can see the mails on the new server.

But when I try to access from roundcube, i get "Mailbox is empty"

I can see my sent mails in the folder /home/$user/mail/.Sent/cur/....

But each mail is a single file

Is there anything I'm missing, is the issue with dovecot because it uses another structure for the mails or something ?