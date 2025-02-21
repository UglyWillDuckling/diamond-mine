---
aliases:
  - FQDN
related:
  - "[[DNS]]"
  - "[[domain]]"
  - "[[DNS record]]"
  - "[[Atlas/Knowledge/Knowledge/concepts/hierarchy]]"
---
Type of Internet domain name

A **fully qualified domain name** (**FQDN**), sometimes also called an **absolute domain name**,[[1]](#cite_note-RFC1035-1) is a [domain name](/wiki/Domain_name "Domain name") that specifies its exact location in the tree hierarchy of the [[Domain Name System]](DNS). <mark style="background: #FFF3A3A6;">It specifies all domain levels</mark>, including the [top-level domain](/wiki/Top-level_domain "Top-level domain") and the [root zone](/wiki/DNS_root_zone "DNS root zone").[[2]](#cite_note-2) A fully qualified domain name is distinguished by its lack of ambiguity in terms of DNS zone location in the hierarchy of DNS labels: it can be interpreted only in one way.

## Definition
The <mark style="background: #FFB86CA6;">hierarchy</mark> of labels in a fully qualified domain name.

A fully qualified domain name is conventionally written as a list of domain labels separated using the [full stop](/wiki/Full_stop "Full stop") "`.`" character (_dot_ or _period_). The top of the hierarchy in an FQDN begins with the rightmost label. For instance, in the FQDN `somehost.example.com`, `com` is a label directly under the [root zone](/wiki/DNS_root_zone "DNS root zone"), `example` is nested under `com`, and finally `somehost` is nested under `example.com`.[[3]](#cite_note-rfc2181-3)

The topmost layer of every domain name is the [DNS root zone](/wiki/DNS_root_zone "DNS root zone"), which is expressed as an empty label and can be represented in an FQDN with a trailing dot, such as `somehost.example.com.`. A trailing dot is generally implied and often omitted by most applications. Trailing dots are required by the standard format for DNS [zone files](/wiki/Zone_file "Zone file"), as well as to disambiguate cases where an FQDN does not contain any other label separators, such as the FQDNs for the root zone itself and any [top-level domain](/wiki/Top-level_domain "Top-level domain").[[4]](#cite_note-4)

The length of each label must be between 1 and 63 [octets](/wiki/Octet_(computing) "Octet (computing)"), and the full domain name is limited to 255 octets, full stops included.

## Relative domain names
A **relative domain name** is a domain name which does not include all labels.[[5]](#cite_note-5) It may also be referred to as a [[partially-qualified domain name]], or PQDN.[[6]](#cite_note-6) [Hostnames](/wiki/Hostname "Hostname") can be used as relative domain names.

## Usage
<mark style="background: #FFB8EBA6;">Dot-separated</mark> fully qualified domain names are the primarily used form for [[human-readable]] representations of a domain name. Dot-separated domain names are not used in the internal representation of labels in a DNS message[[7]](#cite_note-7) but are used to reference domains in some [TXT records](/wiki/TXT_record "TXT record") and can appear in [resolver](/wiki/Resolver_(DNS) "Resolver (DNS)") configurations, system [hosts files](/wiki/Hosts_(file) "Hosts (file)"), and [URLs](/wiki/URLs "URLs").

Web addresses typically use **FQDNs** to represent the host, as it ensures the address will be interpreted identically on any network. 
Relative hostnames are allowed by some protocols, including [[HTTP]], but disallowed by others, such as the [[Simple Mail Transfer Protocol]] (SMTP).
