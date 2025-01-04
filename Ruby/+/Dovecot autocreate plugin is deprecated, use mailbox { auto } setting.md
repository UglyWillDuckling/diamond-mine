---
title: "Dovecot: autocreate plugin is deprecated, use mailbox { auto } setting"
source: https://serverfault.com/questions/763487/dovecot-autocreate-plugin-is-deprecated-use-mailbox-auto-setting
author:
  - "[[Server Fault]]"
published: 2016-03-13
created: 2025-01-02
description: Currently I am using this in my dovecot.conf:protocol imap {mail_plugins = "autocreate"}plugin {autocreate = Trashautocreate2 = Sentautosubscribe = Trashautosubscribe2 = Sent}My log sa...
tags:
  - clippings
  - error
  - dovecot
related:
  - "[[Dovecot]]"
  - "[[dovecot trial configs]]"
  - "[[setup mail server trial]]"
---
I just started experimenting with this myself, but I believe that in your case you need to replace these lines:

```bash
protocol imap {
  mail_plugins = "autocreate"
}

plugin {
  autocreate = Trash
  autocreate2 = Sent
  autosubscribe = Trash
  autosubscribe2 = Sent
}
```

With:
```
namespace inbox {
  inbox = yes

  mailbox Trash {
    auto = subscribe # autocreate and autosubscribe the Trash mailbox
    special_use = \Trash
  }
  mailbox Sent {
    auto = subscribe # autocreate and autosubscribe the Sent mailbox
    special_use = \Sent
  }
}
```

Used in [[setup mail server trial]]





