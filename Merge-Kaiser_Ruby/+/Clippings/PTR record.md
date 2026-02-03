---
title: The PTR record
source: https://www.nslookup.io/learning/dns-record-types/ptr/
author:
  - "[[Ruurtjan Pul]]"
  - "[[Jeff Westhead]]"
  - "[[Ruurtjan Pul]]"
  - "[[Jeff Westhead]]"
published: 2022-09-02
created: 2024-12-31
description: The PTR or "pointer" DNS record type maps an IP address to a domain name in the DNS. This is called a DNS reverse lookup.
tags:
  - clippings
  - dns
  - email-delivery
related:
  - "[[Domain Name System|DNS]]"
  - "[[reverse DNS]]"
  - "[[Reverse DNS lookup]]"
  - "[[forward lookup]]"
  - "[[email]]"
---
**The PTR or "pointer" DNS record type maps an IP address to a domain name in the DNS. This is called a DNS reverse lookup.**

Most DNS records types are used in "forward lookups". A[[ DNS forward lookup ]]maps a DNS name to an IP address or another piece of DNS data. PTR records do the opposite. A reverse lookup for a PTR record maps an IP address to a DNS name.

The PTR record type was introduced in the original DNS specifications ([RFC 1034](https://datatracker.ietf.org/doc/html/rfc1034) and [1035](https://datatracker.ietf.org/doc/html/rfc1035)) in 1987. Today, **<mark style="background: #FF5582A6;">PTR records are essential for email delivery.</mark>** 
> [!check] 
> **They are used as a layer of security to prove that a mail server is trustworthy.**


![[~/×/a67b51482bce3760673bc7fd8007df6d_MD5.jpg]]

Pointer records in the DNS. By NsLookup.io. Licensed under [CC By 4.0](https://creativecommons.org/licenses/by/4.0/ "Creative Commons By 4.0 licence").

## PTR record format

The PTR record format is straightforward but constructing PTR names requires a few steps. The data of each PTR record contains only one data field. This field gives the canonical name for the IP address. Like all other records in the DNS, each PTR record also has a Time-to-Live (TTL) value in seconds.

Here is an example of a PTR record that maps the IPv4 address `10.0.0.1` to the DNS name `mailserver.example.org`. This record has a TTL of one hour (3600 seconds).

```dns-zone-file
1.0.0.10.in-addr.arpa. 3600 PTR mailserver.example.org.
```

## PTR record names

The owner name of a PTR record always lies in the .arpa zone. The .arpa Top Level Domain was the first TLD created. It was proposed in 1983 by [RFC 881](https://datatracker.ietf.org/doc/html/rfc881). For [[+/IPv4 example]] addresses, the rightmost labels are always "in-addr.arpa". For IPv6 addresses, "ip6.arpa" is used.

Preceding "in-addr.arpa" or "ip6.arpa" are DNS labels that contain the IP address in a specific format. For IPv4, there are four labels for the address, one for each octet in the IPv4 address. For IPv6, there is one label for each hex digit in the IPv6 address. The address labels appear in reverse order. The least significant labels of the address come first.

IPv6 reverse lookup names are long! They contain 32 labels for the hex digits of the address plus two more labels for "ip6.arpa". So there are 34 labels in the owner name of every IPv6 PTR record versus six labels for IPv4 PTR records.

### IPv4 PTR record names

Formulate the name of a PTR record for an IPv4 address using these steps:

- Separate the IPv4 address into four labels. For `10.0.0.1` the labels are 10, 0, 0, and 1.
- Reverse the labels and join them with dots: `1.0.0.10`.
- Add "in-addr.arpa" to finish the lookup name: `1.0.0.10.in-addr.arpa`.

### IPv6 PTR record names

Use a similar process to construct the name for an IPv6 record. Let's consider the example IPv6 address `2001:1000::12ab`. As discussed in our article on [the AAAA record type](https://www.nslookup.io/learning/dns-record-types/aaaa/), the two consecutive colons are a shortcut for enough zeros to pad the address out to 128 bits.

- Expand the double colon if present. For `2001:1000::12ab` we get `2001:1000:0000:0000:0000:0000:0000:12ab`.
- Remove colons: `200110000000000000000000000012ab`
- Reverse the hex digits: `ba210000000000000000000000011002`
- Insert a dot between each hex digit: `b.a.2.1.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.1.1.0.0.2`
- Add "ip6.arpa" to finish the lookup name: `b.a.2.1.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.1.1.0.0.2.ip6.arpa`.

DNS lookup names are case insensitive. Upper-case or lower-case characters can be used for the hex digit labels. Both will give identical results.

The PTR record for this address would be:

```dns-zone-file
b.a.2.1.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.1.1.0.0.2.ip6.arpa. 3600 PTR mailserver.example.org.
```

While two consecutive colons are a shortcut for a long series of zeros in an IPv6 address, there is no similar shortcut for the PTR name. All IPv6 PTR record owner names contain 34 labels.

## Forward-confirmed reverse DNS

The complex-sounding term "forward-confirmed reverse DNS" (FCrDNS) means a pair of forward and reverse lookup records in the DNS that agree with one another.

The forward lookup record is of type A or AAAA. The reverse lookup record is of type PTR. The owner name of the A or AAAA record must match the canonical name in the PTR record data. And the address in the A or AAAA record must match the owner name of the PTR record.

These two example records form a forward-confirmed reverse DNS pair:

```dns-zone-file
; In the example.org zone:
mailserver.example.org. 3600 A 10.0.0.1

; In the reverse lookup zone 10.in-addr.arpa:
1.0.0.10.in-addr.arpa. 3600 PTR mailserver.example.org.
```

Forward-confirmed reverse DNS also applies to IPv6 using a AAAA record and a corresponding 34-label PTR record.

FCrDNS is a basic but effective security measure because the two records that comprise a FCrDNS pair are in different zones in the DNS. It is difficult for spammers using temporary mail servers to pass the FCrDNS test.

It's not required that every A or AAAA record on the Internet have a matching PTR record. Most DNS names do not have PTR records but in some contexts, such as email delivery, the existence of PTR records is critical.

## Who manages DNS records in the .arpa TLD?

**The .arpa TLD contains all of the PTR records for the Internet. The .arpa TLD is managed by the Internet Assigned Numbers Authority (IANA) with guidance from the Internet Architecture Board (IAB).**

The IANA and the IAB do not manage individual PTR records. Child zones are [delegated](https://www.nslookup.io/learning/zone-delegation/) below .arpa for blocks of IP addresses purchased by various agencies, ISPs, and corporations.

Walking down the zone tree from the .arpa TLD through delegations, you will arrive at a reverse lookup zone that contains PTR records. This zone will be managed by the agency, ISP, or corporation that purchased that block of IP addresses.

Cloud providers offering mail hosting services will create PTR records in their reverse lookup zones automatically or at the request of their customers. But PTR record creation is not usually offered by cloud providers for other services.

For typical home Internet scenarios, the router's public IP is from a block of IP addresses owned by the ISP. Consumer ISPs typically will not create PTR records for customers. Business ISPs may offer this service to customers who run their own mail servers. Contact your ISP support team to find out if PTR record creation is supported.

See the [IANA page on .arpa zone management](https://www.iana.org/domains/arpa) for more information on the .arpa TLD.

## Improving email delivery with PTR records

PTR records were intended for informational and inventory purposes but they have become a vital tool in the never-ending fight against email spam.

Virtually all email relays require that the sending server pass a FCrDNS check. A PTR record must exist with the same name and address information as the type A or AAAA record for the mail server name. Mail from the sending server will usually be treated as spam if the PTR record does not exist or does not match.

## Looking up PTR records for an IP address

The dig or nslookup command line tools can find the DNS name for an IP address. Dig has a special command line option "-x" that automatically uses the rules above to convert an IP address to a PTR lookup name. To find the PTR records for Cloudflare's public DNS resolver address:

```
dig -x 1.1.1.1
```

On operating systems that support nslookup, you can use the following:

```
nslookup -type=PTR 1.1.1.1
```

You can also explicitly look up the reverse lookup name using dig if you wish. Dig will perform the same DNS lookup as with the "-x" option above if you use:

```
dig ptr 1.1.1.1.in-addr.arpa
```

You can also check the PTR records for any domain name in our [PTR lookup](https://www.nslookup.io/ptr-lookup/) tool or by entering it here:

## Related questions

### What TTL should you use for PTR records?

### Can an IP have multiple PTR records?

### How do I set up a PTR record?

### Are matching PTR records always necessary?

### What does ARPA stand for?