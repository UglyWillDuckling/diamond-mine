---
title: What Is the SPF Record for Hostinger Email? | Hostinger Help Center
source: https://support.hostinger.com/en/articles/1583673-what-is-the-spf-record-for-hostinger-email
author: 
published: 
created: 2025-01-04
description: Learn what is the SPF record for Hostinger Email and how to add it to your domain
tags:
  - clippings
  - article
  - hostinger
related:
  - "[[hostinger]]"
  - "[[setup mail server trial]]"
---
**SPF** stands for **Sender Policy Framework**. SPF records are DNS records of **[TXT type](https://support.hostinger.com/en/articles/1583664-how-to-add-txt-records-to-dns-zone)** that specify which mail servers can send emails on behalf of a specific domain.

When an email is received, the recipient's mail server checks the SPF record of the sender's domain to verify if the sending server is permitted to send emails for that domain. This improves the **[deliverability of your messages](https://support.hostinger.com/en/articles/5240869-how-to-improve-my-email-deliverability)** and helps prevent them from being marked as spam.

If you use **[Hostinger Email](https://support.hostinger.com/en/articles/5832752-how-to-check-the-email-service-included-on-your-hosting-account)** with your **domain**, the default SPF record is the following:

For **subdomains**, instead of the **@** in the host field, enter the name of your subdomain; e.g. an SPF record for the subdomain **shop.domain.tld**, will look similar to this:

You can also find the values **Hostinger Email MX records** on the **[Emails](https://hpanel.hostinger.com/emails/)** section of your hPanel:

To add this record to your domain, follow the steps depending on where your domain is pointing:

## Merging Multiple SPF Records

To avoid delivery issues, you must have only **one SPF record** on your domain. However, there may be the case that you require more than one value if, in addition to Hostinger Email, you are using an email marketing service requiring SPF validation. To solve this, you can combine them **in a single line**, as follows:

Take Hostinger Email SPF record:

And your other marketing email provider record, for example:

Using a **text editor** such as Notepad, create the single record, following this format:

And enter this as the **TXT value** for your SPF record.

---

Related Articles

[

What DNS Record Types are Supported at Hostinger?

](https://support.hostinger.com/en/articles/1583250-what-dns-record-types-are-supported-at-hostinger)[

Hostinger Email MX records

](https://support.hostinger.com/en/articles/4407237-hostinger-email-mx-records)[

What Are the DKIM Records for Hostinger Email?

](https://support.hostinger.com/en/articles/4456413-what-are-the-dkim-records-for-hostinger-email)[

How to Set up a Domain for cPanel Email

](https://support.hostinger.com/en/articles/5670904-how-to-set-up-a-domain-for-cpanel-email)[

Set Up a Domain for Hostinger Email Manually

](https://support.hostinger.com/en/articles/8671319-set-up-a-domain-for-hostinger-email-manually)