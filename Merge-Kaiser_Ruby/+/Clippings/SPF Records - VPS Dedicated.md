---
title: SPF Records - VPS Dedicated
source: https://my.hostmonster.com/cgi/help/spf-vps-dedicated
author: 
published: 
created: 2025-01-04
description: Sender Policy Framework records, or SPF records are a type of DNS record used to identify which mail servers should be allowed to send email from a certain domain name.
tags:
  - clippings
  - article
  - email
related:
  - "[[What Is the SPF Record for Hostinger Email  Hostinger Help Center]]"
  - "[[+/SPF]]"
  - "[[email]]"
  - "[[setup mail server trial]]"
---
## HostMonster Web Hosting Help

Protect your email reputation and combat [email spoofing](https://my.hostmonster.com/hosting/help/spoofing) by setting up a Sender Policy Framework (SPF) record. It's a type of DNS record that notifies the recipient's mail host which mail servers are authorized to send email from your domain name, making it much more difficult for someone to spoof your email address trying to impersonate you.

This article outlines what you need to know about SPF records and how they can be implemented at HostMonster for VPS and Dedicated hosting. If you are using Shared hosting, check out [SPF for Shared](https://my.hostmonster.com/hosting/help/spf).

---

- [Using SPF with VPS and Dedicated Hosting](https://my.hostmonster.com/cgi/help/#vps-and-dedicated)
- [Customizing SPF Records](https://my.hostmonster.com/cgi/help/#customization)
- [How to add an SPF Record](https://my.hostmonster.com/cgi/help/#how-to-add)

---

## Using SPF Records with VPS and Dedicated Hosting

On our VPS and Dedicated hosting plans, email is sent out directly from the server. The default SPF record authorizes the IP address of the VPS or Dedicated server, so each one is different. Here is an example of what the default SPF record would be for a server at 198.51.100.123.

**v=spf1 +a +mx +ip4:198.51.100.123 ~all**

This record is composed of three parts:

1. **v=spf1** specifies that this is an SPF record.

2. **+a +mx +ip4:198.51.100.123** authorizes sending from the domain's A record, MX record, and ipv4 address 198.51.100.123

- This is the part of the record where you can add **IP addresses** and include SPF rules for other domains.
- Third-party email marketing tools often require that you update your **SPF** record to accommodate their servers.

4. **~all** specifies how hosts should regard servers that are not on the list. There are a few modifies you can use here:
- **\-all** "**Hard** Fail" means reject all mail that isn't on the allowed list.
- **~all** "**Soft** fail" means accept mail not on the allowed list, but treat it with more scrutiny.
- **?all** "**Neutral**" means accept all mail; there isn't a policy for servers not on the list.

## Customizing SPF Records

If you're using another host to send email for your domain, customize your SPF record by adding additional servers and IPs to the second part of the record. And if you want to make your record more strict to defend the domain from email spoofing, adjust the policy for "all."

For example, if your domain only used the address 198.51.100.123 for outgoing mail and you want to make the sending policy as strict as possible, you could use this SPF record:
```bash
v=spf1 ip4:198.51.100.123 -all
```
This record authorizes sending mail from 198.51.100.123 **only**; no other servers authorized.




