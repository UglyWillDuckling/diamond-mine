---
title: migrating emails from old server to new server
source: https://serverfault.com/questions/1019845/migrating-emails-from-old-server-to-new-server
author:
  - "[[Server Fault]]"
published: 2020-06-03
created: 2025-01-05
description: (Bear with me, the whole idea of email setup is new for me)I have a server configured with postfix, dovecot and roundcube, everything is set u correctly.On the old server (Also using postfix), ...
tags: 
favicon: https://cdn.sstatic.net/Sites/serverfault/Img/favicon.ico?v=18e9cc4f2aea
related:
  - "[[prepare for migration]]"
  - "[[Dovecot]]"
---
> First, let me clarify some basics for you.

- Mailbox format is the format you have on the old server. Its literally multiple message in one file
- Maildir format is the format you see in your home directory. These `cur` and other folders relates to this format.

If I guess correctly, you have a setup on the old server that tells to Dovecot to use mailbox format and read mailboxes from `/var/spool/mail/$user`, in the new server, the Dovecot is configured to use Maildir format and store them at `/home/$user/mail`. This can be configurable in the Dovecot config files, but I recommend you to do not touch it, since Maildir is better and Dovecot has a really good support for it.

All you have to do is install a `mb2md` utility on the new machine, convert all mailboxes to maildir format (before this, read its manual carefully) and transfer the resulting maildirs into the proper places.

I also recommend you to examine the Dovecot config files how it's configured currently and how can you potentially change the location of the maildir if/when you need it.
