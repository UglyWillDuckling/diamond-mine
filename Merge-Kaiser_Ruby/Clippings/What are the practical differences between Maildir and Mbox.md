---
title: What are the practical differences between Maildir and Mbox?
source: https://serverfault.com/questions/564456/what-are-the-practical-differences-between-maildir-and-mbox
published: 2014-01-01
created: 2025-01-06
description: Although I understand the basics of the two storage formats (1 file per email under Maildir vs. 1 single file per mailbox under mbox), I am wondering what the practical implications are here -Is ...
tags: 
favicon: https://cdn.sstatic.net/Sites/serverfault/Img/favicon.ico?v=18e9cc4f2aea
related:
  - "[[email]]"
  - "[[mail server]]"
  - "[[mail formats]]"
  - "[[Mailbox Formats — Dovecot]]"
  - "[[mbox]]"
---
To address the specific questions:

> **Is one storage format more scalable than the other?**

[[mbox]] tends to become difficult to manage the bigger it gets. Since it stores everything in one big blob, it can be hard to backup incrementally, and such access will lock the mbox against writes while it happens. If there is some corruption, it's a lot harder to try to repair or recover - which you could say is a risk that increases as it stores more mail.

Maildir relies on the underlying filesystem for its scalability, as it will characteristically create many small files, one per message. If you have a lot of emails, Maildir is usually easier and faster to deal with.

> **Are there data integrity concerns / differences?**

Yes, the main one is that mbox requires read/write file locking on the whole archive, meaning reads must wait for writes, and each individual write must wait for all other accesses. If it were used in such a way that locking isn't possible, such as over an NFS share, the archive is subject to corruption. Any random corruption can affect the whole archive rather than a single message.

With Maildir, locking can be at the level of the individual message, for most operations, and corruption in any file will only affect that message. Any indexes into the messages can be rebuilt if needed from the messages themselves.

> **Are there clearly defined situations where you should use one format over the other?**

It's more the case that Maildir is starting to replace mbox as the universally preferred format, with no significant drawbacks.

Its main limitation is its creation of many, many small files, which had the ability to put a strain on some filesystems and/or be inefficient depending on filesystem cluster size. This is less of an issue with modern filesystems. It can also inform your backup strategy, but on the whole it does give more flexibility to your choice of backup strategy.

## other

Cristian's comment is correct: you need a trailing slash to make Postfix store incoming mail in Maildir format:

```bash
home_mailbox = Maildir/
```

If you leave it off, it stores the mail in an [mbox-style](http://en.wikipedia.org/wiki/Mbox) file of the same name.

That is to say, this is not a setting where you are providing the _name_ of a type of storage, you are providing the name of a file or directory, and [[Postfix]] infers mbox vs Maildir based on the trailing slash only. It will use any directory name you put here, not just `Maildir`.
