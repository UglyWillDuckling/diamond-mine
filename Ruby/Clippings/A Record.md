---
title: A Record
source: https://www.plesk.com/wiki/a-record/
author:
  - "[[Plesk]]"
published: 2019-10-25
created: 2024-12-22
description: A Record ( Address Mapping Record ) is a DNS record which maps a domain name to the IPv4 address of the server which hosts the domain
tags:
  - clippings
related:
  - "[[Setup hosting]]"
  - "[[DNS]]"
  - "[[domain]]"
---
## description
**A Record** ( Address Mapping Record ) is a DNS record which maps a  [[domain name]] to the [IPv4](https://www.plesk.com/wiki/ipv4/) address of the server which hosts the domain. An A record is used for discovering the [[IP]] address of the server connected to [[Internet]] from a given [[hostname]]. 
<mark style="background: #ABF7F7A6;">
You can associate same hostname with multiple IP addresses by adding another A Record</mark> with the same hostname although with a different value of IP address.

## How to check an A record
Most DNS tools let you check the A record for your website. In fact, most online tools will first show you the A record for the domain, and next show you the NS records. This checking process is calling a DNS lookup. If you have a UNIX machine you can use the “dig” command to do a DNS lookup.

# From [[mods]]
  In the context of Domain Name System (DNS), an A record (also known as a **host**
  **record** or **address record**) is a type of DNS record that <mark style="background: #ABF7F7A6;">maps a hostname to an IP address</mark>.

  Here's a breakdown of what that means:

  • A: The "A" stands for "**Address**" or "A-record".
  • Record: A DS record is an entry in a DNS database that contains information
  about a domain name.
  • Hostname: A hostname is a **human-readable** name assigned to a device on a
  network, such as a website (e.g., example.com)
  • IP address: An IP address (e.g., 192.0.2.1) is a <mark style="background: #FFF3A3A6;">numerical label</mark> assigned to
  each device connected to a network

  When you create an A record, you're telling the DNS system to associate a
  hostname with a specific IP address.

  Here's an example of an A record:
  
  Hostname: example.com IP address: 192.0.2.1

  In this example, when someone types example.com into their web browser, the DNS
  system looks up the A record and directs them to the server with the IP address
  192.0.2.1.

  A records are commonly used for:

  1. Website hosting: Mapping a domain name to a web server's IP address.
  2. Email hosting: Mapping a mail server's hostname to its IP address.
  3. Server hosting: Mapping a server's hostname to its IP address for remote
  access or other services.

  There are other types of DNS records, such as [[CNAME record|CNAME]] (Canonical Name), 
  [[MX (Mail Exchanger)]], and [[NS (Name Server)]] records, each serving a specific purpose in the
  DNS ecosystem.

