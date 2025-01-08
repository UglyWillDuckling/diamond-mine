---
related:
  - "[[computer network]]"
  - "[[DNS]]"
  - "[[IP]]"
  - "[[domain]]"
parent:
  - "[[Domain Name System|DNS]]"
---
[wiki](https://en.wikipedia.org/wiki/Reverse_DNS_lookup)

In computer networks, a reverse DNS lookup or reverse DNS resolution (rDNS) is the querying technique of the Domain Name System (DNS) to determine the domain name associated with an IP address – the reverse of the usual "forward" DNS lookup of an IP address from a domain name.[1] The process of reverse resolving of an IP address uses PTR records. rDNS involves searching domain name registry and registrar tables. The reverse DNS database of the Internet is rooted in the .arpa top-level domain.

Although the informational [[RFC 1912]] (Section 2.1) recommends that "every Internet-reachable host should have a name" and that "for every IP address, there should be a matching PTR record," it is not an Internet Standard requirement, and not all IP addresses have a reverse entry.

## Implementation details

### IPv4 reverse resolution
Reverse DNS lookups for IPv4 addresses use the special domain in-addr.arpa. In this domain, an IPv4 address is represented as a concatenated sequence of four decimal numbers, separated by dots, to which is appended the second level domain suffix .in-addr.arpa. The four decimal numbers are obtained by splitting the 32-bit IPv4 address into four octets and converting each octet into a decimal number. These decimal numbers are then concatenated in the order: least significant octet first (leftmost), to most significant octet last (rightmost). It is important to note that this is the reverse order to the usual dotted-decimal convention for writing IPv4 addresses in textual form.

For example, to do a reverse lookup of the IP address 8.8.4.4 the PTR record for the domain name 4.4.8.8.in-addr.arpa would be looked up, and found to point to dns.google.

If the A record for dns.google in turn pointed back to 8.8.4.4 then it would be said to be forward-confirmed.

#### Classless reverse DNS method
Historically, Internet registries and Internet service providers allocated IP addresses in blocks of 256 (for Class C) or larger octet-based blocks for classes B and A. By definition, each block fell upon an octet boundary. The structure of the reverse DNS domain was based on this definition. However, with the introduction of Classless Inter-Domain Routing, IP addresses were allocated in much smaller blocks, and hence the original design of pointer records was impractical, since autonomy of administration of smaller blocks could not be granted. RFC 2317 devised a methodology to address this problem by using CNAME records.

#### Multiple pointer records
While most rDNS entries only have one PTR record, DNS does not restrict the number. Multiple PTR records are used, for example, when a web server supports many [[virtual host]]s— i.e. <mark style="background: #FFB86CA6;">multiple hostnames then resolve to a single address</mark>, and multiple hostnames will be returned for a PTR lookup for that shared address. 
