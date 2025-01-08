---
~
---
### [[2025-01-04]]

```bash
	disable_plaintext_auth = no
	mail_privileged_group = mail
	mail_location = mbox:~/mail:INBOX=/var/mail/%u
	userdb {
	  driver = passwd
	}
	passdb {
	  args = %s
	  driver = pam
	}
	protocols = " imap"
	
	service auth {
	  unix_listener /var/spool/postfix/private/auth {
	    group = postfix
	    mode = 0660
	    user = postfix
	  }
	}
	
	ssl=required
	ssl_cert = </etc/ssl/certs/mailcert.pem
	ssl_key = </etc/ssl/private/mail.key
	
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
	
	  mailbox Drafts {
	    auto = create
	    special_use = \Drafts
	  }
	
	  mailbox Spam {
	    auto = create
	    special_use = \Junk
	  }
	
	  mailbox virtual/All {
	    auto = create
	    special_use = \All
	  }
	}
```
