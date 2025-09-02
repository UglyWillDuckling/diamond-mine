---
related:
  - "[[Atlas/Knowledge/Science/Computer Science/Email/SPF]]"
  - "[[SMTP]]"
aliases:
  - DKIM
---
#email/auth-method

DomainKeys Identified Mail (DKIM) is an `email authentication method` designed to detect forged sender addresses in email ([[email spoofing]]), a technique often used in phishing and email spam.

**DKIM** allows the **receiver** to check that an email that claimed to have come from a specific domain was indeed authorized by the owner of that domain. It achieves this by affixing a **digital signature**, **linked to a domain name**, to each outgoing email message. 
The recipient system can verify this by looking up the sender's public key published in the [[DNS]]. 
A valid signature also guarantees that some parts of the email (possibly including attachments) have not been modified since the signature was affixed.
Usually, DKIM signatures are not visible to end-users, and are affixed or verified by the **infrastructure** rather than the message's authors and recipients.

DKIM is an Internet Standard. It is defined in RFC 6376, dated September 2011, with updates in RFC 8301 and RFC 8463.