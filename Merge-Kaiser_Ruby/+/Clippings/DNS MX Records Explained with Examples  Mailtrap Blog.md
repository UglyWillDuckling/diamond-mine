---
title: DNS MX Records Explained [with Examples] | Mailtrap Blog
source: https://mailtrap.io/blog/dns-mx-records/
author:
  - "[[Denys Kontorskyy]]"
published: 2023-04-17
created: 2024-12-31
description: "Learn all about DNS MX records: what they are, why they are important, how they work, and see examples. Read more."
tags:
  - clippings
  - article
  - email
related:
  - "[[DNS]]"
  - "[[reverse DNS]]"
  - "[[DNS record]]"
  - "[[MX record]]"
  - "[[MX (Mail Exchanger)]]"
---
At the heart of email communication lies a crucial element responsible for routing email messages to the appropriate mail servers, known as MX records. In this article, we dive into the world of DNS MX records, exploring their importance, how they work, and how to maintain them to guarantee an efficient and uninterrupted email experience.

## What are MX records?

Mail Exchange records are an integral part of the Domain Name System (DNS) that plays a crucial role in routing email messages. Located in DNS zone files, which are simple text files bundling all records for a particular domain, MX records provide email clients with information about the domain under which a mail server can be accessed. Using the Simple Mail Transfer Protocol (SMTP), t**hey are responsible for directing emails to the correct mail server.**

Within a domain, there are usually multiple servers, including web, File Transfer Protocol (FTP), and one or more mail servers, each accessible via different subdomains managed by DNS records. 
Being a type of [[DNS record]], an [[MX record]] enables clients to request the name of the [[subdomain]] associated with the [[mail server]], which manages the sending and receiving of emails. This is where control panels, like [[cPanel]], come in handy, providing users with an interface to manage these DNS records.
## How do DNS MX records work?

To understand how MX records work, it is essential to [know the role of Message Transfer Agents](https://mailtrap.io/blog/mail-transfer-agent/) (MTAs) and DNS servers in the email delivery process. MTAs `query` MX records when a user sends an email, while DNS servers store and provide the necessary MX records for routing email messages.

When an email is sent, the sender’s MTA initiates a DNS query to identify the recipient’s mail servers by looking up the appropriate MX records. This query is directed to the recipient’s DNS server, which responds with the necessary MX records, including their priority values. The sender’s MTA establishes an SMTP connection with the recipient’s mail servers, beginning with the one with the higher priority, and moves down the priority list if needed until the email is successfully delivered.

Here is an example of an MX record configuration:

![[~/×/6b4db8dec1fcc106df09552b8f28fdf0_MD5.png]]

In this table representing MX records for “dummyserver.com”, we see two records with different priority values and mail hosts. The “priority” numbers in these MX records signify preference, with lower values being more preferred.

The server would try “mailhost1.dummyserver.com” first due to its lower priority value of 10, before defaulting to “mailhost2.dummyserver.com” with a priority value of 20 in case of a message send failure.

Additionally, the “@” symbol under the “Record type” column indicates that the MX record is associated with the root domain (dummyserver.com) itself.

Lastly, the TTL (Time To Live) value of 45000 seconds specifies the duration that DNS resolvers will cache the MX record before a new request is made to the authoritative DNS server to refresh the information. This helps to reduce the load on the DNS infrastructure and improve performance.

## DNS MX records examples

To better understand MX records, let’s examine more examples of how they appear in DNS zone files and the various parameters and values that can be set.

**Example 1:**

Suppose we have an **A-record** for a domain, `mailtrap.io`, with the following information:
```
Domain: mailtrap.io
Mail exchanger: mail.mailtrap.io
Priority: 10
```

The mail server for this domain is now called **mail.mailtrap.io**. We can use this information to create an MX record:

With this configuration, all emails sent to **recipient@mailtrap.io** will be directed to the mail server **mail.mailtrap.io** with the IP address 11.22.00.333.

**Example 2:**

In this example, we have a primary SMTP server (**mail1.mailtrap.io**) and a backup SMTP server (**mail2.mailtrap.io**) for the domain mailtrap.io:

Messages addressed to **recipient@mailtrap.io** are routed first to **mail1.mailtrap.io** due to a lower preference value (5). If **mail1.mailtrap.io** is unavailable, the mail is routed to **mail2.mailtrap.io**.

**Example 3:**

In this scenario, we have two mail servers with **equal preference** values for the domain **mailtrap.io**, allowing for load balancing:

With equal preference values (both 5), DNS randomly selects a server to [balance the load](https://mailtrap.io/blog/actionmailer-balancer/) of incoming mail.

It’s worth noting that in addition to A records, in the above examples, there are other types of DNS records called AAAA records. AAAA records are used to map a domain name to an IPv6 address, while A records are used to map a domain name to an IPv4 address. Since IPv6 is gradually replacing IPv4 as the primary protocol, it’s becoming increasingly important to have AAAA records configured correctly.

In summary, by configuring the values of MX records in DNS zone files, such as the domain, mail exchanger, priority values, and backup MX, you can set up multiple email servers, create backup SMTP servers, and balance the load between them to ensure efficient and reliable email delivery. With properly configured MX and DNS records, incoming email traffic can be efficiently distributed between multiple servers, providing a seamless email experience for all parties involved.

## How to check your MX record?

Some of the most common methods of checking your domain’s MX records are using online tools. Some of these are [MXToolbox.com](http://mxtoolbox.com/) or [Google’s G Suite Toolbox](http://toolbox.googleapps.com/apps/dig), allowing you to look up other types of DNS records (TXT, [PTR](https://mailtrap.io/blog/ptr-records/), TLSA, CNAME records, etc.) 

These tools allow you to enter your domain name and perform an MX lookup to display the current MX records associated with your domain. By examining the results, you can verify that your mail servers are correctly configured and prioritized to ensure proper email delivery.

Keep in mind that these tools rely on the use of authoritative name servers to perform DNS lookups and retrieve MX record information. Suppose your domain uses custom or private name servers. In that case, you may need to provide additional information or configure your DNS settings to allow these tools to access your MX record information.

Regularly reviewing your domain’s MX records and addressing potential issues affecting email delivery helps maintain an efficient and reliable email system for your domain. Some common problems include:  

- **Missing MX records**: If your domain does not have any MX records, email delivery will likely be disrupted, as senders’ MTAs will need to know where to route messages.

- **Incorrect mail server information**: If your MX records point to the wrong mail server, email delivery may fail or be delayed.

- **Improper priority values**: If your MX records have conflicting or confusing priority values, email delivery may be less efficient or less reliable due to misdirected messages or ineffective load balancing.

## Wrapping up

To sum up, DNS MX records are essential in ensuring smooth and efficient email routing and delivery. By accurately configuring MX records, you can optimize email server performance, create backups, and distribute incoming email traffic. Regularly checking and updating your domain’s MX records not only helps maintain a dependable email system but also contributes to a better overall communication experience. 

We hope you found this article helpful If you want to learn more about DNS records and the role they play in email deliverability, check out: 

- [How to Set Up DMARC Records | Mailtrap Blog](https://mailtrap.io/blog/dmarc-setup/)
- [DKIM Signature: Why You Need It and How to Set Up | Mailtrap Blog](https://mailtrap.io/blog/dkim/)
- [What is SPF and How to Setup SPF Record | Mailtrap Blog](https://mailtrap.io/blog/spf-records-explained/)
- [BIMI Records: Yes, You Should Set This One Too | Mailtrap Blog](https://mailtrap.io/blog/bimi-email/)
- [Verify Email Address Without Sending an Email | Mailtrap Blog](https://mailtrap.io/blog/verify-email-address-without-sending/)