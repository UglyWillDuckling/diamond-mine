---
title: What are DMARC, DKIM, and SPF?
source: https://www.cloudflare.com/learning/email-security/dmarc-dkim-spf/
author: 
published: 
created: 2025-01-04
description: SPF, DKIM, and DMARC help prevent spam and authenticate email senders by verifying where emails come from. Learn how SPF, DKIM, and DMARC work.
tags:
  - clippings
  - email
  - validation
related:
  - "[[DKIM]]"
  - "[[DMARC]]"
  - "[[SPF]]"
  - "[[setup mail server trial]]"
---
## What are DMARC, DKIM, and SPF?

DMARC, DKIM, and SPF are three email [authentication](https://www.cloudflare.com/learning/access-management/what-is-authentication/) methods. Together, they help prevent spammers, [phishers](https://www.cloudflare.com/learning/access-management/phishing-attack/), and other unauthorized parties from sending [emails](https://www.cloudflare.com/learning/email-security/what-is-email/) on behalf of a [domain](https://www.cloudflare.com/learning/dns/glossary/what-is-a-domain-name/)\* they do not own.

DKIM and SPF can be compared to a business license or a doctor's medical degree displayed on the wall of an office — they help demonstrate legitimacy.

Meanwhile, DMARC tells mail servers what to do when DKIM or SPF fail, whether that is marking the failing emails as "[spam](https://www.cloudflare.com/learning/email-security/how-to-stop-spam-emails/)," delivering the emails anyway, or dropping the emails altogether.

Domains that have not set up SPF, DKIM, and DMARC correctly may find that their emails get quarantined as spam, or are not delivered to their recipients. They are also in danger of having spammers impersonate them.

\**A domain, roughly speaking, is a website address like "example.com". Domains form the second half of an email address: alice@example.com, for instance.*

Report

2023 Phishing Threats Report

  

Report

Read the Q4 2023 DDoS Threat Landscape Report

## How does SPF work?

Sender Policy Framework (SPF) is a way for a domain to list all the servers they send emails from. Think of it like a publicly available employee directory that helps someone to confirm if an employee works for an organization.

[SPF records](https://www.cloudflare.com/learning/dns/dns-records/dns-spf-record/) list all the [IP addresses](https://www.cloudflare.com/learning/dns/glossary/what-is-my-ip-address/) of all the servers that are allowed to send emails from the domain, just as an employee directory lists the names of all employees for an organization. Mail servers that receive an email message can check it against the [[SPF]] record before passing it on to the recipient's inbox.

## How does DKIM work?

DomainKeys Identified Mail (DKIM) enables domain owners to automatically "sign" emails from their domain, just as the signature on a check helps confirm who wrote the check. The DKIM "signature" is a digital signature that uses cryptography to mathematically verify that the email came from the domain.

Specifically, DKIM uses [public key cryptography](https://www.cloudflare.com/learning/ssl/how-does-public-key-encryption-work/):

- A [DKIM record](https://www.cloudflare.com/learning/dns/dns-records/dns-dkim-record/) stores the domain's *public key*, and mail servers receiving emails from the domain can check this record to obtain the public [key](https://www.cloudflare.com/learning/ssl/what-is-a-cryptographic-key/)
- The *private key* is kept secret by the sender, who signs the email's header with this key
- Mail servers receiving the email can verify that the sender's private key was used by applying the public key

## How does DMARC work?

Domain-based Message Authentication Reporting and Conformance (DMARC) tells a receiving email server what to do given the results after checking SPF and DKIM.
A domain's DMARC policy can be set in a variety of ways — it can instruct mail servers to quarantine emails that fail SPF or DKIM (or both), to reject such emails, or to deliver them.

DMARC **policies** are stored in [DMARC records](https://www.cloudflare.com/learning/dns/dns-records/dns-dmarc-record/). A DMARC record can also contain instructions to send reports to domain administrators about which emails are passing and failing these checks. 
DMARC **reports** give administrators the information they need to decide how to adjust their DMARC policies (for example, what to do if legitimate emails are erroneously getting marked as spam).

## Where are SPF, DKIM, and DMARC records stored?

SPF, DKIM, and DMARC records are stored in the [Domain Name System (DNS)](https://www.cloudflare.com/learning/dns/what-is-dns/), which is publicly available. The DNS's main use is matching web addresses to IP addresses, so that computers can find the correct servers for loading content over the Internet without human users having to memorize long alphanumeric addresses. The DNS can also store a variety of [records](https://www.cloudflare.com/learning/dns/dns-records/) associated with a domain, including alternate names for that domain ([CNAME records](https://www.cloudflare.com/learning/dns/dns-records/dns-cname-record/)), IPv6 addresses ([AAAA records](https://www.cloudflare.com/learning/dns/dns-records/dns-aaaa-record/)), and reverse DNS records for domain lookups ([PTR records](https://www.cloudflare.com/learning/dns/dns-records/dns-ptr-record/)).

DKIM, SPF, and DMARC records are all stored as [DNS TXT records](https://www.cloudflare.com/learning/dns/dns-records/dns-txt-record/). A DNS TXT record stores text that a domain owner wants to associate with the domain. 
## How to check if an [[email]] has passed
<mark style="background: #FF5582A6;">important</mark>

Most email clients provide an option labeled "Show details" or "Show original" that displays the full version of an email, including its header. 
The **header** — typically a long block of text above the body of the email — is where mail servers append the results of SPF, DKIM, and DMARC.

Reading through the dense header can be tricky. Users viewing it on a browser can click "Ctrl+F" or "Command+F" and type "spf," "dkim," or "dmarc" to find these results.

The relevant text might look like:
```
arc=pass (i=1 spf=pass spfdomain=example.com dkim=pass
dkdomain=example.com dmarc=pass fromdomain=example.com);
```

The appearance of the word "**pass**" in the text above indicates that the email has passed an authentication check. "spf=pass," for example, means the email did not fail SPF;
it came from an authorized server with an IP address that is listed in the **domain's SPF record**.

In this example, the email passed all three of SPF, DKIM, and DMARC, and the mail server was able to confirm it really came from example.com and not an impostor.

It is also important to note that domain owners need to configure their SPF, DKIM, and DMARC records properly themselves — both in order to prevent spam from their domain, and to make sure that legitimate emails from their domain are not marked as spam. 
## How to set up DMARC, DKIM, and SPF for a domain

DMARC, DKIM, and SPF have to be set up in the domain's DNS settings. Administrators can contact their DNS provider — or, their web hosting platform may provide a tool that enables them to upload and edit DNS records. For more details on how these records work, see our articles about them:

- [SPF DNS records](https://www.cloudflare.com/learning/dns/dns-records/dns-spf-record/)
- [DKIM DNS records](https://www.cloudflare.com/learning/dns/dns-records/dns-dkim-record/)
- [DMARC DNS records](https://www.cloudflare.com/learning/dns/dns-records/dns-dmarc-record/)
