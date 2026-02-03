---
title: "A-record and MX-record: how does it work? | Copernica"
source: https://www.copernica.com/en/news/post/a-record-and-mx-record-how-does-it-work
author:
  - "[[Copernica Marketing Software]]"
published: 2018-09-27
created: 2025-01-07
description: Always wanted to know the difference between an A-record and a MX-record? Discover the answer here at Copernica Marketing Software.
tags: 
favicon: https://www.copernica.com/favicon.ico
related:
  - "[[MX record]]"
  - "[[email]]"
  - "[[mail server]]"
  - "[[persona mail setup]]"
  - "[[A Record]]"
---
![icon](https://www.copernica.com/favicon.ico]

27 September 2018, by [Sander Hansen](https://www.copernica.com/en/news/author/26548)

An MX-record (Mail eXchange-record) is a type of resource record in the Domain Name System (DNS). This is the system that, among other indicates to what specific IP address emails need to be sent.

The MX-record contains the host name of the computer(s) that handle the emails for a domain and a prioritization code. Emails are routed through to the IP address which is set in the A-record of the host.

The A-record (or address-record) determines which IP address belongs to a domain name. This record 'translates' the domain name to an IP address.

### Example of an A-record:

- Domain: copernica.com
- Host name: mail
- IP-address: 11.22.33.222

The mail server is now called mail.copernica.com, this can be used in the MX-record.

### Example of an MX-record:

- Domain: copernica.com
- Mail exchanger: mail.copernica.com
- Priority: 10

All emails sent to recipient@copernica.com, willl be sent to the mail server mail.copernica.com with the IP address 11.22.33.222.

## The difference between CNAME and A-record

A CNAME (Canonical Name) record, is an alias for another DNS record. It refers to another full host name and not to an IP address. An A-record refers to the IP address.

CNAME is used to refer to domains and subdomains. For example, when refering www.copernica.com to copernica.com, making the website accessible in two different ways. This is easier to manage using CNAME-records instead of A-records.

When creating the following subdomains: www.copernica.com, ftp.copernica.com, mail.copernica.com, you would like all of these subdomains to copernica.com. You could create an A-record for each subdomain. But the A-record refers to the IP address. When you switch or change servers, you will receive a new IP address and all A-records will have to be altered. It is easier to create a CNAME-record. In this case, you will only have to change the A-record once when changing the server.