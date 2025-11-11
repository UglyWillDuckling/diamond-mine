---
source: https://www.valimail.com/resources/guides/email-security-best-practices/spf-record-syntax/
author:
  - "[[shanice]]"
published: 2022-04-09
created: 2025-08-14
about:
  - "[[Atlas/Knowledge/Science/Computer Science/Email/SPF|SPF]]"
related:
  - "[[Efforts/_Complete/Personal VPS/Docs/spf techdot.biz record|spf techdot.biz record]]"
tags:
  - howto/email/spf
  - article/email
---
New to Sender Policy Framework (SPF)? Below, we’ll outline everything you need to know about SPF record syntax and structure with real-world examples and checkers for validating your setup.

## What Is SPF?

SPF provides a method for domain owners to authorize the use of their domain in the “MAIL FROM” and “EHLO” portions of an email transaction by specific servers and networks. This authorization is done through publishing a DNS TXT record, and verification of this authorization by receiving domains can be an effective step in fighting fraudulent email.

SPF does not directly address forgery of the visible From address in an email message, but along with DKIM, it is one of the underpinnings of DMARC, a protocol that is designed to stop that kind of forgery.

In this article, we explain SPF record syntax and provide SPF record examples of common configurations. We also show how to set up an SPF record using the AWS Route 53 web service as an example provider.

However, this article is not otherwise AWS-specific, and the ideas presented should be useful in deploying SPF on any provider. Finally, we’ll wrap up with best practices for implementing SPF without breaking anything and discuss how to avoid common issues.

Before we begin, here’s a brief summary of the different elements of an SPF record to serve as a reference throughout the rest of the article. Some of these might seem intimidating right now, but fret not—the concepts will be explained more thoroughly as we work through the SPF syntax.

| **Mechanisms** | **Determine when a directive should go into effect**                                                                                                                                                                                                    |
| -------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| all            | SPF record all means an SPF directive should always be applied                                                                                                                                                                                          |
| ip4            | The directive goes into effect, but only when the IP of sender matches a specific IPv4 address or subnet.                                                                                                                                               |
| ip6            | Same as above, but for IPv6 addresses.                                                                                                                                                                                                                  |
| a              | Only apply the directive if the A or AAAA record of the queried or specified domain contains the sender’s IP.                                                                                                                                           |
| mx             | Only apply the directive if the MX record of the queried or specified domain contains the sender’s IP.                                                                                                                                                  |
| ptr            | Only apply the directive if the MX record of the queried or specified domain contains a PTR record containing the sender’s IP. (Note: [RFC 7208](https://datatracker.ietf.org/doc/html/rfc7208#section-5.5) recommends against using the ptr mechanism) |
| exists         | Applies the directive if *any* A record is found on the provided domain.                                                                                                                                                                                |
| include        | Look up the SPF record of the specified domain. If that policy passes, then so does this one. Otherwise, processing continues.                                                                                                                          |
| **Modifiers**  | **Optional extensions to the original SPF framework**                                                                                                                                                                                                   |
| redirect       | Defer entirely to the policy of another domain                                                                                                                                                                                                          |
| exp            | A domain featuring an explanation that will be provided to the sender for why a message failed.                                                                                                                                                         |
| **Qualifiers** | **Determine the behavior when a mechanism is matched**                                                                                                                                                                                                  |
| +              | PASS. This qualifier is optional, thus +mx and mx are the same.                                                                                                                                                                                         |
| –              | FAIL. The mail should be rejected.                                                                                                                                                                                                                      |
| ~              | SOFTFAIL. The mail is not rejected, but “tagged”; often results in mail appearing in a spam folder.                                                                                                                                                     |
| ?              | NEUTRAL. Neither PASS nor FAIL. Equivalent to having no SPF policy.                                                                                                                                                                                     |

## SPF Record Syntax

An SPF record starts with a version identifier (always v=spf1) and then includes a variable number of mechanisms. Each mechanism has a qualifier: If there is no explicit qualifier, then + (PASS) is assumed.

Optionally, modifiers may appear, but each modifier can only appear once. For example, let’s say we want to authorize Google Workspace to send mail on our behalf and SOFTFAIL anyone else. We would use the “include” modifier to include Google’s SPF content and reject others:

```
v=spf1 include
:_spf.google.com ~all
```

Or maybe you don’t even have mail setup for your domain and thus wish to fail anyone attempting to send from your domain:

```
v=spf1 -all
```

Mail that is rejected with FAIL (i.e., -all) can be returned to sender with a 550 SMTP error. The exact phrasing of the error message will vary by Mail Exchange provider, but they usually look fairly similar—Figure 1 shows an example rejection of an email sent via an unauthorized Gmail account being rejected by Microsoft Exchange for violating the sending domain’s SPF policy:

![[~/×/12a85fee0dbffdcc9abdc2666be59219_MD5.jpg]]

Figure 1: Example SPF rejection message.

However, an important caveat is that DMARC can pass a message that fails SPF if it passes DKIM. Because DMARC only requires a pass with either SPF or DKIM, the current email best practice is to not reject messages solely for an SPF fail unless the SPF record is v=spf1 -all. This article is focused on SPF, but in production, it’s of paramount importance that administrators pay attention to DMARC (and consequently, DKIM) when evaluating what will happen to a message after passing or failing SPF.

Armed with an elementary idea of how an SPF record is laid out, let’s cement that understanding by looking at example SPF records that solve common problems.

## Common SPF Record Examples


### 1\. SOFTFAIL mail from IPs outside allowed subnet

Let’s say your mail servers are all in the same subnet, but you are not too confident and want mail sent from exchanges outside that subject to still arrive. You could use a **SOFTFAIL** so that the mail will be marked as suspicious in the inbox of the recipient but will still show up (

==However, be aware that if DMARC is in place and an incoming email passes DKIM, it’s possible that a SOFTFAIL from SPF can still result in delivery to the inbox without being marked as suspicious.==

Such a setup is as simple as the following:

```
v=spf1 ip4:192.168.0.0
/16
 ~all
```

We can include as many IP addresses, both IPv4 and IPv6, or even subnet ranges as we wish. For example, we could amend the previous record like so:

```python
v=spf1 ipv4:219.0.188.54 ipv6:2001:0db8:85a3:0000:0000:8a2e:0370:7334 ip4:192.168.0.0/16 ~all
```

### 2\. Redirect to a policy hosted on another domain

```
v=spf1 redirect
=domain_b.com
```

This is a common setup for organizations with many domains that prefer to have a *single source of truth* for SPF hosted on a single domain instead of scattering varied SPF policies across many domains.

### 3\. FAIL if sender IP doesn’t match SPF record MX

```
v=spf1 mx -all
```

Imagine our domain has some MX records that point to our mailservers. We expect that legitimate mail from our domain should only ever be sent from the IPs of those servers. 
**This policy means that in order to pass SPF, one of the domain’s MX records should have an A record containing the IP of the sender. In other words, we will fail the sender if their IP doesn’t match a mailserver in the domain’s MX records.**

### 4\. SPF record all: Reject all mail

```
v=spf1 -all
 exp=
yourdomain.com
```

This SPF record does **two** things. 
First, it rejects any mail sent from the queried domain. Second, including the optional “exp” modifier will perform a TXT lookup on the queried domain and send it along with the rejection; that way, the sender can see why the message was rejected. **Be aware, however, that this modifier is not commonly used, and you are unlikely to encounter it in any production environment.**

A policy like this also covers domains that don’t have email set up, in which case it’s safe to assume that *any* mail received from that domain is fraudulent.

## Setting Up SPF with AWS Route 53

Learning how to set up SPF on a live cloud deployment can make the concepts feel more solid. Below we’ll provide a visual guide to setting up SPF on a specific provider, but be warned that the specific UI details are liable to change in time.

If you find that the AWS console no longer resembles the instructions below, we encourage you to consult with the providers’ documentation directly. Here are some links to do just that for various popular providers:

- [Creating records by using the Amazon Route 53 console](https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/resource-record-sets-creating.html)
- [Add DNS records to connect your domain (Office 365)](https://docs.microsoft.com/en-us/microsoft-365/admin/get-help-with-domains/create-dns-records-at-any-dns-hosting-provider?view=o365-worldwide)
- [Google Cloud DNS | Manage Records](https://cloud.google.com/dns/docs/records)

---

For our SPF record example, let’s use AWS’s Route 53 DNS provider to implement a live SPF record and verify that the record appears using the Unix networking tool dig. Although we’ll use AWS, the syntax of SPF is the same regardless of which DNS provider you choose.

First, access the Route 53 panel via the AWS web console and either create a record set or create a record within a set you’ve already created.

![creating dns record via AWS route 53](https://www.valimail.com/wp-content/uploads/2022/07/jpg2-1024x591-1.jpg)

Figure 2: Creating DNS record via AWS Route 53 ( source )

Create a TXT record containing the SPF record you want to implement. Your provider *might* offer a record defined as type SPF. Don’t use this—modern SPF records are hosted within TXT records. (See the following section on Best Practices and Common Mistakes for additional information on why this is.)

As an example TXT record just for testing, let’s demonstrate a record that will fail senders whose IPs don’t show up in the queried domain’s A, PTR, or MX records.

![adding spf record for your domain in DNS manager](https://www.valimail.com/wp-content/uploads/2022/07/jpg3.jpg)

Figure 3: Adding an SPF record for your domain in DNS manager ( source )

Apply the changes and wait about 60 seconds for the records to propagate. There’s no fixed amount of time you should wait, but it shouldn’t take more than a few minutes. After that, we can verify that the record is live by querying DNS. Let’s do exactly that using the nslookup command line tool:

```
$ nslookup -type=TXT domain.com
Server:        127.0.0.53
Address:    127.0.0.53#53

Non-authoritative answer:
domain.com    text = "v=spf1 ip4:38.113.1.0/24 ip4:38.113.20.0/24 ip4:12.45.243.128/26 ip4:65.254.224.0/19 include:_spf.google.com include:_spf.qualtrics.com -all"
```

This result verifies that the record has been propagated sufficiently throughout the global network of DNS nameservers and should be considered in effect. That is, mail violating this policy *may* be rejected.

## Commons Issues with SPF Records

### Too many lookups

![spf permanent error message](https://www.valimail.com/wp-content/uploads/2022/07/jpg4.jpg)

spf permanent error message

This error is the most common headache that frustrates sysadmins trying to implement SPF. Many SPF mechanisms, as well as the redirect modifier, trigger additional DNS requests to determine whether a given sender is authorized. Imagine if a domain referred to another domain, which referred to another, and so on.

This could lead to a denial of service attack in which mail exchanges were stuck performing many DNS lookups to authorize each email’s SPF record. T

o mitigate against such a scenario, the defining standards document for SPF explicitly limits the number of DNS lookups that a single record can trigger to just 10.

If your DNS records refer to other domains, be sure that those domains don’t, in turn, refer to too many others. If over 10 DNS lookups are triggered, you will receive an error saying “SPF PermError: Too Many DNS Lookups” or equivalent, the exact text varying by mail provider (source: [RFC 7208 Section 4.6.4](https://datatracker.ietf.org/doc/html/rfc7208#section-4.6.4))
