---
title: CNAME record - Wikipedia
source: https://en.wikipedia.org/wiki/CNAME_record
author:
  - "[[Contributors to Wikimedia projects]]"
published: 2004-05-05
created: 2024-12-22
description: 
tags:
  - clippings
aliases:
  - CNAME
---
From Wikipedia, the free encyclopedia

Type of resource record in the Domain Name System (DNS)

A **Canonical Name** (**CNAME**) **record** is a type of [resource record](https://en.wikipedia.org/wiki/Resource_record "Resource record") in the [Domain Name System](https://en.wikipedia.org/wiki/Domain_Name_System "Domain Name System") (DNS) that maps one domain name (an alias) to another (the **[canonical](https://en.wikipedia.org/wiki/Canonical_form "Canonical form") name**).[^1]

This can prove convenient when running multiple services (like an [FTP server](https://en.wikipedia.org/wiki/File_Transfer_Protocol "File Transfer Protocol") *and* a [web server](https://en.wikipedia.org/wiki/Web_server "Web server"), each running on different ports) from a single [IP address](https://en.wikipedia.org/wiki/IP_address "IP address"). One can, for example, use CNAME records to point *ftp.example.com* and *www.example.com* to the DNS entry for *example.com*, which in turn has an [A record](https://en.wikipedia.org/wiki/A_record "A record") which points to the IP address. Then, if the IP address ever changes, one only has to record the change in one place within the network: in the DNS A record for *example.com*.

CNAME records must always point to another domain name, never directly to an IP address.

DNS CNAME records are specified in [RFC](https://en.wikipedia.org/wiki/RFC_\(identifier\) "RFC (identifier)") [1034](https://datatracker.ietf.org/doc/html/rfc1034) and clarified in Section 10 of [RFC](https://en.wikipedia.org/wiki/RFC_\(identifier\) "RFC (identifier)") [2181](https://datatracker.ietf.org/doc/html/rfc2181).

CNAME records are handled specially in the domain name system and have several restrictions on their use. When a [DNS resolver](https://en.wikipedia.org/wiki/DNS_resolver "DNS resolver") encounters a CNAME record while looking for a regular resource record, it will restart the query using the canonical name instead of the original name. However, if the resolver is specifically told to look for CNAME records, the canonical name (right-hand side) is returned, rather than restarting the query. The canonical name that a CNAME record points to can be anywhere in the DNS, whether local or on a remote server in a different [DNS zone](https://en.wikipedia.org/wiki/DNS_zone "DNS zone").

For example, consider a DNS zone as follows:

```
NAME                    TYPE   VALUE
--------------------------------------------------
bar.example.com.        CNAME  foo.example.com.
foo.example.com.        A      192.0.2.23
```

When an [A record](https://en.wikipedia.org/wiki/A_record "A record") lookup for *bar.[example.com](https://en.wikipedia.org/wiki/Example.com "Example.com")* is carried out, the resolver will see a CNAME record and restart the lookup for *foo.example.com* and will then return 192.0.2.23.

With a CNAME record, one can point a name such as "*bar.example.com*" to "*foo.example.com*". Because of this, during casual discussion, the "*bar.example.com.*" (left-hand) side of a DNS entry can be incorrectly identified as "the CNAME" or "a CNAME". However, this is inaccurate. The canonical (true) name of "*bar.example.com*" is "*foo.example.com*". Because CNAME stands for Canonical Name, the right-hand side is the *actual* "CNAME"; on the same side as the address "A".

This confusion is specifically mentioned in RFC 2181, "Clarifications to the DNS Specification". The left-hand label is an alias for the right-hand side (the RDATA portion), which *is* (or should be) a canonical name.[^2] In other words, consider the following CNAME record:

```
bar.example.com.        CNAME  foo.example.com.
```

This may be read as saying that "*bar.example.com*" is an alias for the canonical name (CNAME) "*foo.example.com*". A client will request "*bar.example.com*" and the answer will be "*foo.example.com*".

- CNAME records must always be pointed to another domain name, never to an IP address.
- If a CNAME record is present at a node, no other data should be present; this ensures that the data for a canonical name and its aliases cannot be different. (RFC 1034 section 3.6.2, RFC 1912 section 2.4) The exception is when [DNSSEC](https://en.wikipedia.org/wiki/DNSSEC "DNSSEC") is being used, in which case there can be DNSSEC related records such as RRSIG, NSEC, etc. (RFC 2181 section 10.1)
- CNAME records that point to other CNAME records should be avoided due to their lack of efficiency, but are not an error.[^rfc1034-3] It is possible, then, to create unresolvable loops with CNAME records, as in:

```
foo.example.com.  CNAME  bar.example.com.
bar.example.com.  CNAME  foo.example.com.
```
- A CNAME record cannot be present at the zone apex. RFC 1034 section 4.2.1[^4] demands a [SOA record](https://en.wikipedia.org/wiki/SOA_record "SOA record") at the zone apex and RFC 1034 section 3.6.2[^5] demands that are no other records be present if a CNAME record is present. Therefore a CNAME record cannot appear at the zone apex.
- CNAME records that are served by DNAME records may cause recursive loops in older resolvers.<sup class="noprint Inline-Template">[<i><a href="https://en.wikipedia.org/wiki/Wikipedia:Please_clarify" title="Wikipedia:Please clarify"><span title="needs an example and a citation; this issue may also be irrelevant for WP. (November 2017)">clarification needed</span></a></i>]</sup>
- [MX](https://en.wikipedia.org/wiki/MX_record "MX record") and [NS records](https://en.wikipedia.org/wiki/NS_record "NS record") must never point to a CNAME alias (RFC 2181 section 10.3). So, for example, a zone must **not** contain constructs such as:

```
example.com.      MX     0   foo.example.com.
foo.example.com.  CNAME  host.example.com.
host.example.com. A      192.0.2.1
```
- Domains that are used in the [SMTP](https://en.wikipedia.org/wiki/SMTP "SMTP") MAIL and RCPT commands may not have a CNAME record.[^rfc1123-6] In practice this may work, but can have different behavior with different mail servers, and can have undesired effects.[^djb_cname-7]

A **DNAME record** or **Delegation Name record** is defined by [RFC](https://en.wikipedia.org/wiki/RFC_\(identifier\) "RFC (identifier)") [6672](https://datatracker.ietf.org/doc/html/rfc6672) (original RFC 2672 is now obsolete). The DNAME record provides redirection (alias) for a subtree of the domain name tree in the DNS. That is, all names that end with a particular suffix are redirected to another part of the DNS. In contrast, the CNAME record creates an alias for a single name and not its subdomains. Like the CNAME record, the DNS lookup will continue by retrying the lookup with the new name. The name server synthesizes a CNAME record to actually apply the DNAME record to the requested name—CNAMEs for every node on a subtree have the same effect as a DNAME for the entire subtree.

For example, if there is a DNS zone as follows:

```
foo.example.com.        DNAME  bar.example.com.
bar.example.com.        A      192.0.2.23
xyzzy.bar.example.com.  A      192.0.2.24
*.bar.example.com.      A      192.0.2.25
```

An **A** record lookup for *foo.example.com* will return no data because a DNAME is not a CNAME and there is no A record directly at *foo*.

However, a lookup for *xyzzy.**foo**.example.com* will be DNAME mapped and return the **A** record for *xyzzy.**bar**.example.com*, which is 192.0.2.24; if the DNAME record had been a CNAME record, this request would have returned name not found.

Lastly, a request for *foobar.foo.example.com* would be DNAME mapped and return 192.0.2.25.

Several managed DNS platforms implement a non-standard ALIAS[^8] or ANAME[^9] record type. These pseudo records are managed by DNS administrators like CNAME records, but are published and resolved by (some) DNS clients like A records. ANAME records are typically configured to point to another domain, but when queried by a client, answer with an IP address. While ANAME record types were submitted for standardization,[^ietf-aname-10] there are other non-conforming implementations, so they can do whatever the owner of the DNS platform chooses, including existing at the apex of a zone and existing for domains that receive mail.

The main advantage of ANAME records over CNAME records is that they can be used on a [zone apex](https://en.wikipedia.org/w/index.php?title=Zone_apex&action=edit&redlink=1 "Zone apex (page does not exist)"), while a standards-following resolver will not treat domain names with CNAME records as a zone apex.[^11] Also, while a DNS client requires at least two queries to resolve a CNAME to an A record to an IP address, an ANAME will shift the second and subsequent query to the server. If the DNS server can resolve the A record and cache the requested IP address more efficiently and with less latency than its DNS clients can, then the DNS client can resolve the query faster.

The ANAME record type was submitted as a draft standard to IETF. However, the latest draft document expired in January 2020[^ietf-aname-10] and has been superseded by a series of proposals, the most recent of which is the one for the SVCB and HTTPS record types.[^12]

- [List of DNS record types](https://en.wikipedia.org/wiki/List_of_DNS_record_types "List of DNS record types")
- [Internet Assigned Numbers Authority](https://en.wikipedia.org/wiki/Internet_Assigned_Numbers_Authority "Internet Assigned Numbers Authority")
- [ICANN](https://en.wikipedia.org/wiki/ICANN "ICANN")
