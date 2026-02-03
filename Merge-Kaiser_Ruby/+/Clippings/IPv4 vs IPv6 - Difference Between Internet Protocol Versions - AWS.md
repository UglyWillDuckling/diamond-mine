---
source: https://aws.amazon.com/compare/the-difference-between-ipv4-and-ipv6/
author:
  - "[[Amazon Web Services]]"
created: 2025-02-24
tags:
  - article/internet/ip
---
# **What’s the difference between IPv4 and IPv6?**

IPv4 and IPv6 are two versions of the Internet Protocol (IP) addressing system. IP is a set of communication rules that provide data exchange over the internet. At its core, the internet is a collection of billions of devices that share data with each other through networking technologies. IP uses a numbering system to give every connected device a unique identification number or address. IPv4 uses a 32-bit address format and can accommodate more than 4 billion address spaces. With the expansion of the internet and Internet of Things (IoT) systems, IPv4 is proving to be insufficient in its addressing range. It is being phased out by IPv6, which uses a 128-bit address format and can accommodate more than 1x1036 addresses.

### What are the similarities between IPv4 and IPv6?

The main function of both IPv4 and IPv6 is to send and receive data across the internet, routed to the correct device, independent of the underlying networking infrastructure. The routing, or packet flow identification, is the primary technology behind all internet communication. The following sections describe some similarities.

### Designated naming system

Much like each country in the world has a unique name, IPv4 and IPv6 are designed to be a way to uniquely name—or identify—every device on the internet. This includes computers, mobile phones, and IoT network devices.

### Core protocol

Both IPv4 and IPv6 are part of the Transmission Control Protocol/Internet Protocol (TCP/IP) suite of protocols. These protocols govern the standard operating framework for the internet since the early 1980s. The TCP/IP suite also includes the User Datagram Protocol (UDP). Despite its IP version four name, IPv4 was the first internet protocol. Similarly, IPv6 was first specified in 1995—however, it was not published as an internet standard, or part of the TCP/IP suite, until 2017. 

### Connectionless data transmission

IPv4 and IPv6 are connectionless protocols that use multi-packet routing to break data into smaller blocks to send across the internet. IPv4 and IPv6 determine the path each of these packets take, meaning packets from the same piece of data may take different internet traffic routes across the internet. Packets are reassembled in the correct order on the receiving device. This is done by TCP or UDP at the Transport Layer in the OSI model.

Key differences: IPv4 compared with IPv6
IPv4 and IPv6 packets are composed differently, with IPv6 having different headers and a shorter header space overall. IPv6 also offers separate header packets as a feature to extend routing options. The following are three main differences from a user perspective.

### Address space

The full address space of IPv4 is 2³², or 4,294,967,296 IP addresses. IPv6 has a significantly higher address space of 2¹²⁸, or 3.403×10³⁸, or 340,282,366,920,938,000,000,000,000,000,000,000,000 unique IP addresses. That number, in English, translates to around 340 undecillion, 300 decillion.

Of the IPv4 internet addresses, there are around 588 million reserved IP addresses, with the rest publicly available. Due to the expansion of internet devices, unallocated IPv4 internet addresses became exhausted in 2011. While IPv6 solves this exhausted address space, the current fix is abstraction by layering other addressing systems—such as Network Address Translation (NAT) on top of IPv4.

IPv6 also has a large number of reserved IP addresses—however, with a much larger address space overall, this is not a significant number in comparison. Given current estimates, the address space is inexhaustible.

Naming
In IPv4, the address name is represented by a numeric address of four decimal numbers (in the range of 0-255), each representing eight bits, separated by three full stops:

197.0.0.1

In IPv6, the address name is represented by eight hexadecimal numbers made up of numbers (0-9) and letters (A-F), each representing four bits, separated by colons:

2600:1400:d:5a3::3bd4

Multiple zeros within a group can be compressed to an empty colon block.

### Communication types

To improve communication efficiency, both IPv4 and IPv6 support different addressing types so one device can communicate with several devices in a network simultaneously. IPv4 supports one-to-one (unicast), one-to-all (broadcast), and one-to-many (multicast) addressing with multi-packet routing. Alternately, IPv6 supports unicast, multicast, and anycast addressing with multi-packet routing. In anycast communication, data packets are sent from one sender to the nearest of multiple receivers that share the same anycast address. The "nearest is determined by routing protocols that calculate the shortest path or lowest cost to reach the destination.

### How does IPv6 improve on IPv4?

IPv6 **inherently** performs better than IPv4 because **IPv4 requires Network Address Translation (NAT) to operate as expected**. These translators are installed in networks to `artificially inflate` the address space of IPv4. This means packets can route to the correct device, even though the number of standalone IP addresses was exhausted long ago. With IPv6, NATs are no longer needed, removing the performance overheads of translation. The following are some other improvements of IPv6.

### Autoconfiguration

With IPv4, a [[Dynamic Host Configuration Protocol (DHCP)]] server is required to handle IP address assignment and identify machines connected to a network. In IPv6, Stateless Address Autoconfiguration (SLAAC) is used, where the device itself can autoconfigure its own address without an external party or protocol. By removing the need for DHCP, it also results in less overall traffic on the network.

### Routing

IPv6 offers features that make routing over the internet more efficient than IPv4. It includes the removal of NAT, simplification of routing headers, the Neighborhood Discovery Protocol (NDP), hierarchical addressing and subnetting, and route aggregation.

### Security

IPv6 builds more security into the protocol than IPv4. This includes[[ Internet Protocol Security (IPsec) ]]as standard, the ability to include privacy extensions, and further secure routing protocols such as [[OSPFv3]].

### When would you use IPv6 over IPv4?

Despite improvements of IPv6 over IPv4, most of the internet still runs on IPv4. Since legacy infrastructure runs IPv4, updating to IPv6 can be an expensive and complex migration. However, IPv6 is becoming standard in industries where state-of-the-art networking is beneficial—like with ISPs and mobile or IoT manufacturing.

For organizations looking to build modern network infrastructure, particularly with complex IoT and microservice requirements, building with IPv6 as the default is a wise architectural decision. Similarly, IPv6 can ensure future network sustainability for large global organizations already struggling with IPv4 overheads management and addressing exhaustion.



____
# mine

## important

- [[ipv4]] requires [[Network Address Translation(NAT))]]
- [[ipv6]] is more secure
- most of the [[Internet]] still runs on [[ipv4]]
- 