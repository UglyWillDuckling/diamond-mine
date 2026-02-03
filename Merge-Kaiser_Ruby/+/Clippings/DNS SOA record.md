---
title: What is a DNS SOA record?
source: https://www.cloudflare.com/learning/dns/dns-records/dns-soa-record/
author: 
published: 
created: 2024-12-31
description: A DNS SOA record indicates who is responsible for that domain. Learn what goes in an SOA record and the purpose of zone serial numbers.
tags:
  - clippings
  - dns
  - email
aliases:
  - DNS Start of authority
related:
  - "[[email]]"
  - "[[DNS]]"
  - "[[DNS record]]"
  - "[[domain]]"
---
## What is a DNS SOA record?

The [DNS](https://www.cloudflare.com/learning/dns/what-is-dns/) ‘start of authority’ (SOA) record stores important information about a [domain](https://www.cloudflare.com/learning/dns/glossary/what-is-a-domain-name/) or [zone](https://www.cloudflare.com/learning/dns/glossary/dns-zone/) such as the [[email address]] of the administrator, when the domain was last updated, and how long the server should wait between refreshes.

All DNS zones need an SOA record in order to conform to IETF standards. SOA records are also important for zone transfers.

Example of an SOA record:

| name | example.com |
| --- | --- |
| record type | SOA |
| MNAME | ns.primaryserver.com |
| RNAME | admin.example.com |
| SERIAL | 1111111111 |
| REFRESH | 86400 |
| RETRY | 7200 |
| EXPIRE | 4000000 |
| TTL | 11200 |

The 'RNAME' value here represents the administrator's email address, which can be confusing because it is missing the ‘@’ sign, but in an SOA record admin.example.com is the equivalent of admin@example.com.

## What is a zone serial number?

In the DNS, a 'zone' is an area of control over namespace. A zone can include a single domain name, one domain and many subdomains, or many domain names. In some cases, 'zone' is essentially equivalent with 'domain,' but this is not always true.

A zone serial number is a version number for the SOA record. In the example above, the serial number is listed next to 'SERIAL.' When the serial number changes in a zone file, this alerts secondary nameservers that they should update their copies of the zone file via a zone transfer.

## What are the other parts of an SOA record?

- MNAME: This is the name of the primary nameserver for the zone. Secondary servers that maintain duplicates of the zone's [DNS records](https://www.cloudflare.com/learning/dns/dns-records/) receive updates to the zone from this primary server.
- REFRESH: The length of time (in seconds) secondary servers should wait before asking primary servers for the SOA record to see if it has been updated.
- RETRY: The length of time a server should wait for asking an unresponsive primary nameserver for an update again.
- EXPIRE: If a secondary server does not get a response from the primary server for this amount of time, it should stop responding to queries for the zone.

## What is a zone transfer?

A DNS zone transfer is the process of sending DNS record data from a [primary](https://www.cloudflare.com/learning/dns/glossary/primary-secondary-dns/) nameserver to a secondary nameserver. The SOA record is transferred first. The serial number tells the secondary server if its version needs to be updated. Zone transfers take place over the [TCP protocol](https://www.cloudflare.com/learning/ddos/glossary/tcp-ip/).

Learn more about various [DNS records](https://www.cloudflare.com/learning/dns/dns-records/).