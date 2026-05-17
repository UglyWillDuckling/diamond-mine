---
source: https://en.wikipedia.org/wiki/IPv4#Protocol
published: 2001-12-04
created: 2026-03-05
tags:
  - protocol/network
related:
  - "[[UDP]]"
  - "[[IP]]"
---
**Internet Protocol version 4** (**IPv4**) is the first version of the [Internet Protocol](https://en.wikipedia.org/wiki/Internet_Protocol "Internet Protocol") (IP) as a standalone specification. It is one of the core protocols of standards-based [internetworking](https://en.wikipedia.org/wiki/Internetworking "Internetworking") methods in the [Internet](https://en.wikipedia.org/wiki/Internet "Internet") and other [packet-switched](https://en.wikipedia.org/wiki/Packet-switched "Packet-switched") networks. IPv4 was the first version deployed for production on [SATNET](https://en.wikipedia.org/wiki/SATNET "SATNET") in 1982 and on the [ARPANET](https://en.wikipedia.org/wiki/ARPANET "ARPANET") in January 1983. It is still used to route most [Internet traffic](https://en.wikipedia.org/wiki/Internet_traffic "Internet traffic") today,[^3] even with the ongoing deployment of [Internet Protocol version 6](https://en.wikipedia.org/wiki/Internet_Protocol_version_6 "Internet Protocol version 6") (IPv6),[^4] its successor.

IPv4 uses a [32-bit](https://en.wikipedia.org/wiki/32-bit "32-bit") address space which provides 4,294,967,296 (2 <sup>32</sup>) unique addresses, but large blocks are reserved for special networking purposes.[^5] [^6] This quantity of unique addresses is not large enough to meet the needs of the global Internet, which has caused a significant issue known as [IPv4 address exhaustion](https://en.wikipedia.org/wiki/IPv4_address_exhaustion "IPv4 address exhaustion") during the ongoing transition to IPv6.

The Internet Protocol ("IP") is the protocol that defines and enables [internetworking](https://en.wikipedia.org/wiki/Internetwork "Internetwork") at the [internet layer](https://en.wikipedia.org/wiki/Internet_layer "Internet layer") of the [Internet Protocol Suite](https://en.wikipedia.org/wiki/Internet_Protocol_Suite "Internet Protocol Suite"). It gives the Internet a global-scale logical addressing system which allows the [routing](https://en.wikipedia.org/wiki/Routing "Routing") of IP [data packets](https://en.wikipedia.org/wiki/Data_packet "Data packet") from a source host to the next router that is one [hop](https://en.wikipedia.org/wiki/Hop_\(networking\) "Hop (networking)") closer to the intended destination host on another network.

IPv4 is a [connectionless](https://en.wikipedia.org/wiki/Connectionless "Connectionless") protocol, and operates on a [best-effort delivery](https://en.wikipedia.org/wiki/Best-effort_delivery "Best-effort delivery") model, in that it does not guarantee delivery, nor does it assure proper sequencing or avoidance of duplicate delivery. These aspects may be addressed by [upper layer](https://en.wikipedia.org/wiki/Upper_layer_protocol "Upper layer protocol") transport protocols, such as the [Transmission Control Protocol](https://en.wikipedia.org/wiki/Transmission_Control_Protocol "Transmission Control Protocol") (TCP) or the [QUIC](https://en.wikipedia.org/wiki/QUIC "QUIC") protocol.

Earlier versions of TCP/IP were a combined specification through TCP/IPv3. With IPv4, the Internet Protocol became a separate specification.[^7]

Internet Protocol version 4 is described in [IETF](https://en.wikipedia.org/wiki/IETF "IETF") publication RFC 791 (September 1981), replacing an earlier definition of January 1980 (RFC 760). In March 1982, the US Department of Defense decided on the [Internet Protocol Suite](https://en.wikipedia.org/wiki/Internet_Protocol_Suite "Internet Protocol Suite") (TCP/IP) as the standard for all military [computer networking](https://en.wikipedia.org/wiki/Computer_network "Computer network").[^8]

IPv4 address exhaustion timeline

In the late 1980s, it became apparent that the pool of available IPv4 addresses was depleting at a rate that was not initially anticipated in the original design of the network.[^9] The main market forces that accelerated address depletion beginning in the 1990s included the rapidly growing number of Internet users, who increasingly used mobile computing devices, such as [laptop computers](https://en.wikipedia.org/wiki/Laptop_computers "Laptop computers"), and [personal digital assistants](https://en.wikipedia.org/wiki/Personal_digital_assistant "Personal digital assistant") (PDAs), and [smart phones](https://en.wikipedia.org/wiki/Smart_phone "Smart phone") with IP data services. In addition, high-speed Internet access was based on always-on devices. The threat of exhaustion motivated the introduction of a number of remedial technologies, such as:

- [Classless Inter-Domain Routing](https://en.wikipedia.org/wiki/Classless_Inter-Domain_Routing "Classless Inter-Domain Routing") (CIDR), for smaller ISP allocations
- [Unnumbered interfaces](https://en.wikipedia.org/wiki/#Unnumbered_interface) removed the need for addresses on transit links.
- [Network address translation](https://en.wikipedia.org/wiki/Network_address_translation "Network address translation") (NAT) removed the need for the [end-to-end principle](https://en.wikipedia.org/wiki/End-to-end_principle "End-to-end principle").

By the mid-1990s, NAT was used pervasively in network access provider systems, along with strict usage-based allocation policies at the regional and local Internet registries.

The primary address pool of the Internet, maintained by IANA, was exhausted on 3 February 2011, when the last five blocks were allocated to the five [RIRs](https://en.wikipedia.org/wiki/Regional_Internet_registry "Regional Internet registry").[^10] [^11] [APNIC](https://en.wikipedia.org/wiki/APNIC "APNIC") was the first RIR to exhaust its regional pool on 15 April 2011, except for a small amount of address space reserved for the transition technologies to IPv6, which is to be allocated under a restricted policy.[^12]

The long-term solution to address exhaustion was the 1998 specification of a new version of the Internet Protocol, [IPv6](https://en.wikipedia.org/wiki/IPv6 "IPv6").[^13] It provides a vastly increased address space, but also allows improved route aggregation across the Internet, and offers large subnetwork allocations of a minimum of 2 <sup>64</sup> host addresses to end users. However, IPv4 is not directly interoperable with IPv6, so IPv4-only hosts cannot directly communicate with IPv6-only hosts. With the phase-out of the [6bone](https://en.wikipedia.org/wiki/6bone "6bone") experimental network starting in 2004, permanent formal deployment of IPv6 commenced in 2006.[^14] Completion of [IPv6 deployment](https://en.wikipedia.org/wiki/IPv6_deployment "IPv6 deployment") is expected to take considerable time,[^15] so that intermediate [transition technologies](https://en.wikipedia.org/wiki/IPv6_transition_mechanism "IPv6 transition mechanism") are necessary to permit hosts to participate in the Internet using both versions of the protocol.

Decomposition of the quad-dotted IPv4 address representation to its [binary](https://en.wikipedia.org/wiki/Binary_numeral_system "Binary numeral system") value

IPv4 uses 32-bit addresses which limits the [address space](https://en.wikipedia.org/wiki/Address_space "Address space") to 4 294 967 296 (2 <sup>32</sup>) addresses.

IPv4 reserves special address blocks for [private networks](https://en.wikipedia.org/wiki/Private_network "Private network") (2 <sup>24</sup>  + 2 <sup>20</sup>  + 2 <sup>16</sup>  ≈ 18 million addresses) and [multicast](https://en.wikipedia.org/wiki/Multicast "Multicast") addresses (2 <sup>28</sup> ≈ 268 million addresses).

IPv4 addresses may be represented in any notation expressing a 32-bit integer value. They are most often written in [dot-decimal notation](https://en.wikipedia.org/wiki/Dot-decimal_notation "Dot-decimal notation"), which consists of four [octets](https://en.wikipedia.org/wiki/Octet_\(computing\) "Octet (computing)") of the address expressed individually in [decimal](https://en.wikipedia.org/wiki/Decimal "Decimal") numbers (without any extra leading zeros) and separated by [periods](https://en.wikipedia.org/wiki/Full_stop "Full stop").

For example, the quad-dotted IP address in the illustration (*172.16.254.1*) represents the 32-bit [decimal](https://en.wikipedia.org/wiki/Decimal "Decimal") number 2886794753, which in [hexadecimal](https://en.wikipedia.org/wiki/Hexadecimal "Hexadecimal") format is 0xAC10FE01.

[CIDR notation](https://en.wikipedia.org/wiki/CIDR_notation "CIDR notation") combines the address with its routing prefix in a compact format, in which the address is followed by a slash character (/) and the count of leading consecutive *1* bits in the routing prefix (subnet mask).

Other address representations were in common use when [classful networking](https://en.wikipedia.org/wiki/Classful_network "Classful network") was practiced. For example, the [loopback](https://en.wikipedia.org/wiki/Loopback "Loopback") address *127.0.0.1* was commonly written as *127.1*, given that it belongs to a class-A network with eight bits for the network mask and 24 bits for the host number. When fewer than four numbers were specified in the address in dotted notation, the last value was treated as an integer of as many bytes as are required to fill out the address to four octets. Thus, the address *127.65530* is equivalent to *127.0.255.250*.

In the original design of IPv4, an IP address was divided into two parts: the network identifier was the most significant octet of the address, and the host identifier was the rest of the address. The latter was also called the *rest field*. This structure permitted a maximum of 256 network identifiers, which was quickly found to be inadequate.

To overcome this limit, the most-significant address octet was redefined in 1981 to create *network classes*, in a system which later became known as *classful* networking. The revised system defined five classes. Classes A, B, and C had different bit lengths for network identification. The rest of the address was used as previously to identify a host within a network. Because of the different sizes of fields in different classes, each network class had a different capacity for addressing hosts. In addition to the three classes for addressing hosts, Class D was defined for [multicast](https://en.wikipedia.org/wiki/Multicast "Multicast") addressing, and Class E was reserved for future applications.

Dividing existing classful networks into subnets began in 1985 with the publication of [RFC](https://en.wikipedia.org/wiki/RFC_\(identifier\) "RFC (identifier)") [950](https://www.rfc-editor.org/rfc/rfc950). This division was made more flexible with the introduction of variable-length subnet masks (VLSM) in [RFC](https://en.wikipedia.org/wiki/RFC_\(identifier\) "RFC (identifier)") [1109](https://www.rfc-editor.org/rfc/rfc1109) in 1987. In 1993, based on this work, [RFC](https://en.wikipedia.org/wiki/RFC_\(identifier\) "RFC (identifier)") [1517](https://www.rfc-editor.org/rfc/rfc1517) introduced [Classless Inter-Domain Routing](https://en.wikipedia.org/wiki/Classless_Inter-Domain_Routing "Classless Inter-Domain Routing") (CIDR),[^16] which expressed the number of bits (from the [most significant](https://en.wikipedia.org/wiki/Most_significant_bit "Most significant bit")) as, for instance, */24*, and the class-based scheme was dubbed *classful*, by contrast. CIDR was designed to permit repartitioning of any address space so that smaller or larger blocks of addresses could be allocated to users. The hierarchical structure created by CIDR is managed by the [Internet Assigned Numbers Authority](https://en.wikipedia.org/wiki/Internet_Assigned_Numbers_Authority "Internet Assigned Numbers Authority") (IANA) and the [regional Internet registries](https://en.wikipedia.org/wiki/Regional_Internet_registries "Regional Internet registries") (RIRs). Each RIR maintains a publicly searchable [WHOIS](https://en.wikipedia.org/wiki/WHOIS "WHOIS") database that provides information about IP address assignments.

The [Internet Engineering Task Force](https://en.wikipedia.org/wiki/Internet_Engineering_Task_Force "Internet Engineering Task Force") (IETF) and IANA have restricted from general use various [reserved IP addresses](https://en.wikipedia.org/wiki/Reserved_IP_addresses "Reserved IP addresses") for special purposes.[^6] Notably these addresses are used for [multicast](https://en.wikipedia.org/wiki/Multicast "Multicast") traffic and to provide addressing space for unrestricted uses on private networks.

| Address block ([CIDR](https://en.wikipedia.org/wiki/CIDR "CIDR")) | Address range | Number of addresses | Scope | Description |
| --- | --- | --- | --- | --- |
| 0.0.0.0/8 | 0.0.0.0–0.255.255.255 | 16 777 216 | Software | Current (local, "this") network [^6] |
| 10.0.0.0/8 | 10.0.0.0–10.255.255.255 | 16 777 216 | Private network | Used for local communications within a private network [^17] |
| 100.64.0.0/10 | 100.64.0.0–100.127.255.255 | 4 194 304 | Private network | [Shared address space](https://en.wikipedia.org/wiki/IPv4_shared_address_space "IPv4 shared address space") [^18] for communications between a service provider and its subscribers when using a [carrier-grade NAT](https://en.wikipedia.org/wiki/Carrier-grade_NAT "Carrier-grade NAT") |
| 127.0.0.0/8 | 127.0.0.0–127.255.255.255 | 16 777 216 | Host | Used for [loopback addresses](https://en.wikipedia.org/wiki/Loopback_address "Loopback address") to the [localhost](https://en.wikipedia.org/wiki/Localhost "Localhost") [^6] |
| 169.254.0.0/16 | 169.254.0.0–169.254.255.255 | 65 536 | Subnet | Used for [link-local addresses](https://en.wikipedia.org/wiki/Link-local_address "Link-local address") [^19] between two hosts on a single link when no IP address is otherwise specified, such as would have normally been retrieved from a [DHCP](https://en.wikipedia.org/wiki/DHCP "DHCP") server |
| 172.16.0.0/12 | 172.16.0.0–172.31.255.255 | 1 048 576 | Private network | Used for local communications within a private network [^17] |
| 192.0.0.0/24 | 192.0.0.0–192.0.0.255 | 256 | Private network | IETF Protocol Assignments, [DS-Lite](https://en.wikipedia.org/wiki/DS-Lite "DS-Lite") (/29) [^6] |
| 192.0.2.0/24 | 192.0.2.0–192.0.2.255 | 256 | Documentation | Assigned as TEST-NET-1, documentation and examples [^20] |
| 192.88.99.0/24 | 192.88.99.0–192.88.99.255 | 256 | Internet | Reserved.[^21] Formerly used for [IPv6 to IPv4](https://en.wikipedia.org/wiki/6to4 "6to4") relay [^22] (included [IPv6](https://en.wikipedia.org/wiki/IPv6 "IPv6") address block [2002::/16](https://en.wikipedia.org/wiki/IPv6_address#Special_addresses "IPv6 address")). |
| 192.168.0.0/16 | 192.168.0.0–192.168.255.255 | 65 536 | Private network | Used for local communications within a private network [^17] |
| 198.18.0.0/15 | 198.18.0.0–198.19.255.255 | 131 072 | Private network | Used for benchmark testing of inter-network communications between two separate subnets [^23] |
| 198.51.100.0/24 | 198.51.100.0–198.51.100.255 | 256 | Documentation | Assigned as TEST-NET-2, documentation and examples [^20] |
| 203.0.113.0/24 | 203.0.113.0–203.0.113.255 | 256 | Documentation | Assigned as TEST-NET-3, documentation and examples [^20] |
| 224.0.0.0/4 | 224.0.0.0–239.255.255.255 | 268 435 456 | Internet | In use for [multicast](https://en.wikipedia.org/wiki/IP_multicast "IP multicast") [^24] (former Class D network) |
| 233.252.0.0/24 | 233.252.0.0–233.252.0.255 | 256 | Documentation | Assigned as MCAST-TEST-NET, documentation and examples (This is part of the above multicast space.) [^24] [^25] |
| 240.0.0.0/4 | 240.0.0.0–255.255.255.254 | 268 435 455 | Internet | Reserved for future use [^26] (former Class E network) |
| 255.255.255.255/32 | 255.255.255.255 | 1 | Subnet | Reserved for the "limited [broadcast](https://en.wikipedia.org/wiki/Broadcast_address "Broadcast address") " destination address [^6] |

Of the approximately four billion addresses defined in IPv4, about 18 million addresses from three ranges are reserved for use in private networks as outlined by [RFC 1918](https://datatracker.ietf.org/doc/html/rfc1918 "rfc:1918"). Packets with addresses in these ranges are not routable in the public Internet; they are ignored by all public routers. Therefore, private hosts cannot directly communicate with public networks, but require [network address translation](https://en.wikipedia.org/wiki/Network_address_translation "Network address translation") at a routing gateway for this purpose.

| Name | [CIDR](https://en.wikipedia.org/wiki/CIDR "CIDR") block | Address range | Number of   addresses | *[Classful](https://en.wikipedia.org/wiki/Classful "Classful")* description |
| --- | --- | --- | --- | --- |
| 24-bit block | 10.0.0.0/8 | 10.0.0.0 – 10.255.255.255 | 16 777 216 | Single Class A |
| 20-bit block | 172.16.0.0/12 | 172.16.0.0 – 172.31.255.255 | 1 048 576 | Contiguous range of 16 Class B blocks |
| 16-bit block | 192.168.0.0/16 | 192.168.0.0 – 192.168.255.255 | 65 536 | Contiguous range of 256 Class C blocks |

Since two private networks, e.g., two branch offices, cannot directly interoperate via the public Internet, the two networks must be bridged across the Internet via a [virtual private network](https://en.wikipedia.org/wiki/Virtual_private_network "Virtual private network") (VPN) or an [IP tunnel](https://en.wikipedia.org/wiki/IP_tunnel "IP tunnel"), which [encapsulates](https://en.wikipedia.org/wiki/Encapsulation_\(networking\) "Encapsulation (networking)") packets, including their headers containing the private addresses, in a protocol layer during transmission across the public network. Additionally, encapsulated packets may be encrypted for transmission across public networks to secure the data.

RFC 3927 defines the special address block 169.254.0.0/16 for link-local addressing. These addresses are only valid on the link (such as a local network segment or point-to-point connection) directly connected to a host that uses them. These addresses are not routable. Like private addresses, these addresses cannot be the source or destination of packets traversing the Internet. These addresses are primarily used for address autoconfiguration ([Zeroconf](https://en.wikipedia.org/wiki/Zeroconf "Zeroconf")) when a host cannot obtain an IP address from a DHCP server or other internal configuration methods.

When the address block was reserved, no standards existed for address autoconfiguration. [Microsoft](https://en.wikipedia.org/wiki/Microsoft "Microsoft") created an implementation called [Automatic Private IP Addressing](https://en.wikipedia.org/wiki/Automatic_Private_IP_Addressing "Automatic Private IP Addressing") (APIPA), which was deployed on millions of machines and became a [de facto standard](https://en.wikipedia.org/wiki/De_facto_standard "De facto standard"). Many years later, in May 2005, the [IETF](https://en.wikipedia.org/wiki/IETF "IETF") defined a formal standard in RFC 3927, entitled *Dynamic Configuration of IPv4 Link-Local Addresses*.

The class A network *127.0.0.0* (classless network *127.0.0.0 / 8*) is reserved for [loopback](https://en.wikipedia.org/wiki/Loopback "Loopback"). IP packets whose source addresses belong to this network should never appear outside a host. Packets received on a non-loopback interface with a loopback source or destination address must be dropped.

In every subnet, both the all-zeros and all-ones host addresses are reserved.[^27] [^28] The all-zeros host address is used to identify a given subnet. The highest address of every subnet, with all host bits set to *1*, is the local [broadcast address](https://en.wikipedia.org/wiki/Broadcast_address "Broadcast address") for sending messages to all devices on the subnet simultaneously. For networks of size */ 24* or larger, the broadcast address in dot-decimal notation always ends in *255*.

For example, in the subnet *192.168.5.0 / 24* (subnet mask *255.255.255.0*) the identifier *192.168.5.0* is used to refer to the entire subnet. The broadcast address of the network is *192.168.5.255*.

<table><tbody><tr><th>Type</th><th>Binary form</th><th>Dot-decimal notation</th></tr><tr><td>Network space</td><td><code>11000000.10101000.00000101.<span>00000000</span></code></td><td>192.168.5.0</td></tr><tr><td>Broadcast address</td><td><code>11000000.10101000.00000101.<span>11111111</span></code></td><td>192.168.5.255</td></tr><tr><td colspan="3"><small>In red is shown the host part of the IP address; the other part is the network prefix. The host gets inverted (logical NOT), but the network prefix remains intact.</small></td></tr></tbody></table>

However, this does not mean that every address ending in 0 or 255 cannot be used as a host address. For example, in the */ 16* subnet *192.168.0.0 / 255.255.0.0*, which is equivalent to the address range *192.168.0.0* – *192.168.255.255*, the broadcast address is *192.168.255.255*. One can use the following addresses for hosts, even though they end with 255: *192.168.1.255*, *192.168.2.255*, etc. Also, *192.168.0.0* is the network identifier and must not be assigned to an interface.[^29]<sup><span title="Page: 31">: 31 </span></sup>  The addresses *192.168.1.0*, *192.168.2.0*, etc., may be assigned, despite ending with 0.

In the past, conflict between network addresses and broadcast addresses arose because some software used non-standard broadcast addresses with zeros instead of ones.[^29]<sup><span title="Page: 66">: 66 </span></sup> 

In networks smaller than */ 24*, broadcast addresses do not necessarily end with 255. For example, a CIDR subnet *203.0.113.16 / 28* has the broadcast address *203.0.113.31*.

<table><tbody><tr><th>Type</th><th>Binary form</th><th>Dot-decimal notation</th></tr><tr><td>Network space</td><td><code>11001011.00000000.01110001.0001<span>0000</span></code></td><td>203.0.113.16</td></tr><tr><td>Broadcast address</td><td><code>11001011.00000000.01110001.0001<span>1111</span></code></td><td>203.0.113.31</td></tr><tr><td colspan="3"><small>In red, is shown the host part of the IP address; the other part is the network prefix. The host gets inverted (logical NOT), but the network prefix remains intact.</small></td></tr></tbody></table>

As a special case, a */ 31* network has capacity for just two hosts. These networks are typically used for point-to-point connections. There is no network identifier or broadcast address for these networks.[^30]

Hosts on the [Internet](https://en.wikipedia.org/wiki/Internet "Internet") are usually known by names, e.g., www.example.com, not primarily by their IP address, which is used for routing and network interface identification. The use of domain names requires translating, called *resolving*, them to addresses and vice versa. This is analogous to looking up a phone number in a phone book using the recipient's name.

The translation between addresses and domain names is performed by the [Domain Name System](https://en.wikipedia.org/wiki/Domain_Name_System "Domain Name System") (DNS), a hierarchical, distributed naming system that allows for the subdelegation of [namespaces](https://en.wikipedia.org/wiki/Namespace "Namespace") to other DNS servers.

An unnumbered [point-to-point](https://en.wikipedia.org/wiki/Point-to-point_\(telecommunications\) "Point-to-point (telecommunications)") (PtP) link, also called a transit link, is a link that does not have an IP network or subnet number associated with it, but still has an IP address. First introduced in 1993,[^31] [^32] [^33] [^34] Phil Karn from Qualcomm is credited as the original designer.

The purpose of a transit link is to [route](https://en.wikipedia.org/wiki/Router_\(computing\) "Router (computing)") [datagrams](https://en.wikipedia.org/wiki/Datagram "Datagram"). They are used to free IP addresses from a scarce IP address space or to reduce the management of assigning IP and configuration of interfaces. Previously, every link needed to dedicate a */ 31* or */ 30* subnet using 2 or 4 IP addresses per point-to-point link. When a link is unnumbered, a *router-id* is used, a single IP address borrowed from a defined (normally a [loopback](https://en.wikipedia.org/wiki/Loopback "Loopback")) interface. The same *router-id* can be used on multiple interfaces.

One of the disadvantages of unnumbered interfaces is that it is harder to do remote testing and management.

An IP [packet](https://en.wikipedia.org/wiki/Packet_\(information_technology\) "Packet (information technology)") consists of a header section and a data section. An IP packet has no data checksum or any other footer after the data section. Typically, the [link layer](https://en.wikipedia.org/wiki/Link_layer "Link layer") encapsulates IP packets in frames with a CRC footer that detects most errors. Many [transport-layer protocols](https://en.wikipedia.org/wiki/Transport_layer "Transport layer") carried by IP also have their own error checking.[^35]<sup><span title="Location: §6.2">: §6.2 </span></sup> 

The IPv4 packet header consists of 14 fields, of which 13 are required. The 14th field is optional and aptly named: options. The fields in the header are packed with the most significant byte first ([network byte order](https://en.wikipedia.org/wiki/Network_byte_order "Network byte order")), and for the diagram and discussion, the most significant bits are considered to come first ([MSB 0 bit numbering](https://en.wikipedia.org/wiki/MSB0 "MSB0")). The most significant bit is numbered 0, so the version field is actually found in the four most significant bits of the first byte, for example.

<table><caption>IPv4 header format</caption><tbody><tr><th><i>Offset</i></th><th><a href="https://en.wikipedia.org/wiki/Octet_(computing)">Octet</a></th><th colspan="8">0</th><th colspan="8">1</th><th colspan="8">2</th><th colspan="8">3</th></tr><tr><th>Octet</th><th><a href="https://en.wikipedia.org/wiki/Bit">Bit</a></th><th>0</th><th>1</th><th>2</th><th>3</th><th>4</th><th>5</th><th>6</th><th>7</th><th>8</th><th>9</th><th>10</th><th>11</th><th>12</th><th>13</th><th>14</th><th>15</th><th>16</th><th>17</th><th>18</th><th>19</th><th>20</th><th>21</th><th>22</th><th>23</th><th>24</th><th>25</th><th>26</th><th>27</th><th>28</th><th>29</th><th>30</th><th>31</th></tr><tr><th>0</th><th>0</th><td colspan="4"><i><a href="https://en.wikipedia.org/wiki/#Version">Version</a> (4)</i></td><td colspan="4"><i><a href="https://en.wikipedia.org/wiki/#IHL">IHL</a></i></td><td colspan="6"><i><a href="https://en.wikipedia.org/wiki/#DSCP">DSCP</a></i></td><td colspan="2"><i><a href="https://en.wikipedia.org/wiki/#ECN">ECN</a></i></td><td colspan="16"><i><a href="https://en.wikipedia.org/wiki/#Total_Length">Total Length</a></i></td></tr><tr><th>4</th><th>32</th><td colspan="16"><i><a href="https://en.wikipedia.org/wiki/#Identification">Identification</a></i></td><td colspan="3"><i><a href="https://en.wikipedia.org/wiki/#Flags">Flags</a></i></td><td colspan="13"><i><a href="https://en.wikipedia.org/wiki/#Fragment_Offset">Fragment Offset</a></i></td></tr><tr><th>8</th><th>64</th><td colspan="8"><i><a href="https://en.wikipedia.org/wiki/#TTL">Time to Live</a></i></td><td colspan="8"><i><a href="https://en.wikipedia.org/wiki/#Protocol">Protocol</a></i></td><td colspan="16"><i><a href="https://en.wikipedia.org/wiki/#Header_Checksum">Header Checksum</a></i></td></tr><tr><th>12</th><th>96</th><td colspan="32"><i><a href="https://en.wikipedia.org/wiki/#Source_address">Source address</a></i></td></tr><tr><th>16</th><th>128</th><td colspan="32"><i><a href="https://en.wikipedia.org/wiki/#Destination_address">Destination address</a></i></td></tr><tr><th>20</th><th>160</th><td colspan="32" rowspan="3"><i>(<a href="https://en.wikipedia.org/wiki/#Options">Options</a>) (if IHL &gt; 5)</i></td></tr><tr><th>⋮</th><th>⋮</th></tr><tr><th>56</th><th>448</th></tr></tbody></table>

Version: 4 bits

The first header field in an IP [packet](https://en.wikipedia.org/wiki/Packet_\(information_technology\) "Packet (information technology)") is the *Version* field. For IPv4, this is always equal to 4.

Internet Header Length (IHL): 4 bits

The IPv4 header is variable in size due to the optional 14th field (*Options*). The IHL field contains the size of the IPv4 header; it has 4 bits that specify the number of 32-bit words in the header. The minimum value for this field is 5,[^36] which indicates a length of 5 × 32 bits = 160 bits = 20 bytes. As a 4-bit field, the maximum value is 15; this means that the maximum size of the IPv4 header is 15 × 32 bits = 480 bits = 60 bytes.

[Differentiated Services Code Point](https://en.wikipedia.org/wiki/Differentiated_Services_Code_Point "Differentiated Services Code Point") (DSCP): 6 bits

Originally defined as the [type of service](https://en.wikipedia.org/wiki/Type_of_service "Type of service") (ToS), this field specifies [differentiated services](https://en.wikipedia.org/wiki/Differentiated_services "Differentiated services") (DiffServ).[^37] Real-time data streaming makes use of the DSCP field. An example is [Voice over IP](https://en.wikipedia.org/wiki/Voice_over_IP "Voice over IP") (VoIP), which is used for interactive voice services.

[Explicit Congestion Notification](https://en.wikipedia.org/wiki/Explicit_Congestion_Notification "Explicit Congestion Notification") (ECN): 2 bits

This field allows end-to-end notification of [network congestion](https://en.wikipedia.org/wiki/Network_congestion "Network congestion") without [dropping packets](https://en.wikipedia.org/wiki/Packet_loss "Packet loss").[^38] ECN is an optional feature available when both endpoints support it and effective when also supported by the underlying network.

Total Length: 16 bits

This [16-bit](https://en.wikipedia.org/wiki/16-bit "16-bit") field defines the entire packet size in bytes, including header and data. The minimum size is 20 bytes (header without data) and the maximum is 65,535 bytes. All hosts are required to be able to reassemble datagrams of size up to 576 bytes, but most modern hosts handle much larger packets. Links may impose further restrictions on the packet size, in which case datagrams must be [fragmented](https://en.wikipedia.org/wiki/IP_fragmentation "IP fragmentation"). Fragmentation in IPv4 is performed in either the sending host or in routers. Reassembly is performed at the receiving host.

Identification: 16 bits

This field is an identification field and is primarily used for uniquely identifying the group of fragments of a single IP datagram. Some experimental work has suggested using the ID field for other purposes, such as for adding packet-tracing information to help trace datagrams with spoofed source addresses,[^39] but any such use is now prohibited.[^40]

Flags: 3 bits

There are three flags defined within this field.

Reserved(R): 1 bit

Reserved. Should be set to 0.[^1]

Don't Fragment(DF): 1 bit

This field specifies whether the datagram can be fragmented or not. This can be used when sending packets to a host that does not have resources to perform reassembly of fragments. It can also be used for [path MTU discovery](https://en.wikipedia.org/wiki/Path_MTU_discovery "Path MTU discovery"), either automatically by the host IP software, or manually using diagnostic tools such as [ping](https://en.wikipedia.org/wiki/Ping_\(networking_utility\) "Ping (networking utility)") or [traceroute](https://en.wikipedia.org/wiki/Traceroute "Traceroute"). If the DF flag is set, and fragmentation is required to route the packet, then the packet is dropped.

More Fragments(MF): 1 bit

For unfragmented packets, the MF flag is cleared. For fragmented packets, all fragments except the last have the MF flag set. The last fragment has a non-zero *Fragment Offset* field, so it can still be differentiated from an unfragmented packet.

Fragment Offset: 13 bits

This field specifies the offset of a particular fragment relative to the beginning of the original unfragmented IP datagram. Fragments are specified in units of 8 bytes, which is why fragment lengths are always a multiple of 8; except the last, which may be smaller.[^42]  
The fragmentation offset value for the first fragment is always 0. The field is 13 bits wide, so the offset value ranges from 0 to 8191 (from (2 <sup>0</sup> – 1) to (2 <sup>13</sup>  – 1)). Therefore, it allows a maximum fragment offset of (2 <sup>13</sup> – 1) × 8 = 65,528 bytes, with the header length included (65,528 + 20 = 65,548 bytes), supporting fragmentation of packets exceeding the maximum IP length of 65,535 bytes.

Time to live(TTL): 8 bits

The [time to live](https://en.wikipedia.org/wiki/Time_to_live "Time to live") field limits a datagram's lifetime to prevent network failure in the event of a [routing loop](https://en.wikipedia.org/wiki/Routing_loop "Routing loop"). It is specified in seconds, but time intervals less than 1 second are rounded up to 1. In practice, the field is used as a [hop count](https://en.wikipedia.org/wiki/Hop_count "Hop count") —when the datagram arrives at a [router](https://en.wikipedia.org/wiki/Router_\(computing\) "Router (computing)"), the router decrements the TTL field by one. When the TTL field hits zero, the router discards the packet and typically sends an [ICMP time exceeded](https://en.wikipedia.org/wiki/ICMP_time_exceeded "ICMP time exceeded") message to the sender.

The program *traceroute* sends messages with adjusted TTL values and uses these ICMP time exceeded messages to identify the routers traversed by packets from the source to the destination.

### Protocol: 8 bits

This field defines the [transport layer](https://en.wikipedia.org/wiki/Transport_layer "Transport layer") protocol used in the data portion of the IP datagram. The [list of IP protocol numbers](https://en.wikipedia.org/wiki/List_of_IP_protocol_numbers "List of IP protocol numbers") is maintained by [Internet Assigned Numbers Authority](https://en.wikipedia.org/wiki/Internet_Assigned_Numbers_Authority "Internet Assigned Numbers Authority") (IANA).[^26]

Some of the **common** payload protocols include:

| Protocol Number | Protocol Name | Abbreviation |
| --- | --- | --- |
| 1 | [Internet Control Message Protocol](https://en.wikipedia.org/wiki/Internet_Control_Message_Protocol "Internet Control Message Protocol") | ICMP |
| 2 | [Internet Group Management Protocol](https://en.wikipedia.org/wiki/Internet_Group_Management_Protocol "Internet Group Management Protocol") | IGMP |
| 6 | [Transmission Control Protocol](https://en.wikipedia.org/wiki/Transmission_Control_Protocol "Transmission Control Protocol") | TCP |
| 17 | [User Datagram Protocol](https://en.wikipedia.org/wiki/User_Datagram_Protocol "User Datagram Protocol") | UDP |
| 41 | [IPv6 encapsulation](https://en.wikipedia.org/wiki/IPv6#Tunneling "IPv6") | ENCAP |
| 89 | [Open Shortest Path First](https://en.wikipedia.org/wiki/Open_Shortest_Path_First "Open Shortest Path First") | OSPF |
| 132 | [Stream Control Transmission Protocol](https://en.wikipedia.org/wiki/Stream_Control_Transmission_Protocol "Stream Control Transmission Protocol") | SCTP |

### Header Checksum: 16 bits

The [IPv4 header checksum](https://en.wikipedia.org/wiki/IPv4_header_checksum "IPv4 header checksum") field is used for error checking of the header. Before sending a packet, the checksum is computed as the 16-bit [ones' complement](https://en.wikipedia.org/wiki/Ones%27_complement "Ones' complement") of the ones' complement sum of all 16-bit words in the header. This includes the *Header Checksum* field itself, which is set to zero during computation. The packet is sent with *Header Checksum* containing the resulting value. When a packet arrives at a router or its destination, the network device recalculates the checksum value of the header, now including the *Header Checksum* field. The result should be zero; if a different result is obtained, the device discards the packet.

When a packet arrives at a router, the router decreases the *TTL* field in the header. Consequently, the router must calculate a new header checksum before sending it out again.

Errors in the data portion of the packet are handled separately by the encapsulated protocol. Both [UDP](https://en.wikipedia.org/wiki/User_Datagram_Protocol "User Datagram Protocol") and [TCP](https://en.wikipedia.org/wiki/Transmission_Control_Protocol "Transmission Control Protocol") have separate checksums that apply to their data.

### Source address: 32 bits

This field contains the [IPv4 address](https://en.wikipedia.org/wiki/IPv4_address "IPv4 address") of the sender of the packet. It may be changed in transit by [network address translation](https://en.wikipedia.org/wiki/Network_address_translation "Network address translation") (NAT).

### Destination address: 32 bits

This field contains the [IPv4 address](https://en.wikipedia.org/wiki/IPv4_address "IPv4 address") of the intended receiver of the packet. It may also be affected by NAT.

If the destination can be [reached directly](https://en.wikipedia.org/wiki/Broadcast_domain "Broadcast domain") the packet will be delivered by the underlying [link layer](https://en.wikipedia.org/wiki/Link_layer "Link layer"), with the help of [ARP](https://en.wikipedia.org/wiki/Address_Resolution_Protocol "Address Resolution Protocol"). If not, the packet needs [routing](https://en.wikipedia.org/wiki/Routing "Routing") and will be delivered to [gateway address](https://en.wikipedia.org/wiki/Gateway_address "Gateway address") instead.

### Options: 0 - 320 bits, padded to multiples of 32 bits

The *Options* field is not often used. Packets containing [some options may be considered as dangerous](https://en.wikipedia.org/wiki/Internet_Protocol_Options_Considerations "Internet Protocol Options Considerations") by some routers and be blocked.[^43] The value in the *IHL* field must include sufficient extra 32-bit words to hold all options and any padding needed to ensure that the header contains an integral number of 32-bit words. If *IHL* is greater than 5 (i.e., it is from 6 to 15) it means that the options field is present and must be considered. The list of options may be terminated with the option EOOL (End of Options List, 0x00); this is only necessary if the end of the options would not otherwise coincide with the end of the header.

Since most of the IP options include specifications on how many or which intermediate devices the packet should pass, the IP options are not used for communication over the Internet and IP packets including some of the IP options must be dropped,[^44]<sup><span title="Location: §3.13">: §3.13 </span></sup>  since they can expose the network topology or network details.

The Internet Protocol enables traffic between networks. The design accommodates networks of diverse physical nature; it is independent of the underlying transmission technology used in the link layer. Networks with different hardware usually vary not only in transmission speed, but also in the [maximum transmission unit](https://en.wikipedia.org/wiki/Maximum_transmission_unit "Maximum transmission unit") (MTU). When one network wants to transmit datagrams to a network with a smaller MTU, it may [fragment](https://en.wikipedia.org/wiki/IP_fragmentation "IP fragmentation") its datagrams. In IPv4, this function was placed at the [Internet Layer](https://en.wikipedia.org/wiki/Internet_Layer "Internet Layer") and is performed in IPv4 routers, limiting exposure to these issues by hosts.

In contrast, [IPv6](https://en.wikipedia.org/wiki/IPv6 "IPv6"), the next generation of the Internet Protocol, does not allow routers to perform fragmentation; hosts must perform [Path MTU Discovery](https://en.wikipedia.org/wiki/Path_MTU_Discovery "Path MTU Discovery") before sending datagrams.

When a router receives a packet, it examines the destination address and determines the outgoing interface to use and that interface's MTU. If the packet size is bigger than the MTU, and the Do not Fragment (DF) bit in the packet's header is set to 0, then the router may fragment the packet.

The router divides the packet into fragments. The maximum size of each fragment is the outgoing MTU minus the IP header size (20 bytes minimum; 60 bytes maximum). The router puts each fragment into its own packet, each fragment packet having the following changes:

- The *total length* field is the fragment size.
- The *more fragments* (MF) flag is set for all fragments except the last one, which is set to 0.
- The *fragment offset* field is set, based on the offset of the fragment in the original data payload. This is measured in units of 8-byte blocks.
- The *header checksum* field is recomputed.

For example, for an MTU of 1,500 bytes and a header size of 20 bytes, the fragment offsets would be multiples of $ {\\frac {1{,}500-20}{8}}=185 $ (0, 185, 370, 555, 740, etc.).

It is possible that a packet is fragmented at one router and that the fragments are further fragmented at another router. For example, a packet of 4,520 bytes, including a 20-byte IP header, is fragmented to two packets on a link with an MTU of 2,500 bytes:

| Fragment | Size   (bytes) | Header size   (bytes) | Data size   (bytes) | Flag   *More fragments* | Fragment offset   (8-byte blocks) |
| --- | --- | --- | --- | --- | --- |
| 1 | 2,500 | 20 | 2,480 | 1 | 0 |
| 2 | 2,040 | 20 | 2,020 | 0 | 310 |

The total data size is preserved: 2,480 bytes + 2,020 bytes = 4,500 bytes. The offsets are $ 0 $ and $ {\\frac {0+2{,}480}{8}}=310 $.

When forwarded to a link with an MTU of 1,500 bytes, each fragment is fragmented into two fragments:

| Fragment | Size   (bytes) | Header size   (bytes) | Data size   (bytes) | Flag   *More fragments* | Fragment offset   (8-byte blocks) |
| --- | --- | --- | --- | --- | --- |
| 1 | 1,500 | 20 | 1,480 | 1 | 0 |
| 2 | 1,020 | 20 | 1,000 | 1 | 185 |
| 3 | 1,500 | 20 | 1,480 | 1 | 310 |
| 4 | 560 | 20 | 540 | 0 | 495 |

Again, the data size is preserved: 1,480 + 1,000 = 2,480, and 1,480 + 540 = 2,020.

Also in this case, the *More Fragments* bit remains 1 for all the fragments that came with 1 in them, and for the last fragment that arrives, it works as usual, that is, the MF bit is set to 0 only in the last one. And of course, the Identification field continues to have the same value in all re-fragmented fragments. This way, even if fragments are re-fragmented, the receiver knows they have initially all started from the same packet.

The last offset and last data size are used to calculate the total data size: $ 495\\times 8+540=3{,}960+540=4{,}500 $.

A receiver knows that a packet is a fragment if at least one of the following conditions is true:

- The flag *more fragments* is set, which is true for all fragments except the last.
- The field *fragment offset* is nonzero, which is true for all fragments except the first.

The receiver identifies matching fragments using the source and destination addresses, the protocol ID, and the identification field. The receiver reassembles the data from fragments with the same ID using both the fragment offset and the more fragments flag. When the receiver receives the last fragment, which has the *more fragments* flag set to 0, it can calculate the size of the original data payload by multiplying the last fragment's offset by eight and adding the last fragment's data size. In the given example, this calculation was $ 495\\times 8+540=4{,}500 $ bytes. When the receiver has all fragments, they can be reassembled in the correct sequence according to the offsets to form the original datagram.

IP addresses are not tied in any permanent manner to networking hardware and, indeed, in modern [operating systems](https://en.wikipedia.org/wiki/Operating_system "Operating system"), a network interface can have multiple IP addresses. In order to properly deliver an IP packet to the destination host on a link, hosts and routers need additional mechanisms to make an association between the hardware address [^2] of network interfaces and IP addresses. The [Address Resolution Protocol](https://en.wikipedia.org/wiki/Address_Resolution_Protocol "Address Resolution Protocol") (ARP) performs this IP-address-to-hardware-address translation for IPv4. In addition, the reverse correlation is often necessary. For example, unless an address is preconfigured by an administrator, when an IP host is booted or connected to a network, it needs to determine its IP address. Protocols for such reverse correlations include [Dynamic Host Configuration Protocol](https://en.wikipedia.org/wiki/Dynamic_Host_Configuration_Protocol "Dynamic Host Configuration Protocol") (DHCP), [Bootstrap Protocol](https://en.wikipedia.org/wiki/Bootstrap_Protocol "Bootstrap Protocol") (BOOTP) and, infrequently, [reverse ARP](https://en.wikipedia.org/wiki/Reverse_ARP "Reverse ARP").

- [History of the Internet](https://en.wikipedia.org/wiki/History_of_the_Internet "History of the Internet")
- [List of assigned /8 IPv4 address blocks](https://en.wikipedia.org/wiki/List_of_assigned_/8_IPv4_address_blocks "List of assigned /8 IPv4 address blocks")

This article was adapted from the following source under a [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/) license ([2022](https://en.wikipedia.org/w/index.php?title=IPv4&action=history&date-range-to=2022-03-07)): Michel Bakni; Sandra Hanbo (2022). ["A Survey on Internet Protocol version 4 (IPv4)"](https://upload.wikimedia.org/wikiversity/en/d/db/A_Survey_on_Internet_Protocol_version_4_%28IPv4%29.pdf) (PDF). *WikiJournal of Science*. [doi](https://en.wikipedia.org/wiki/Doi_\(identifier\) "Doi (identifier)"):[10.15347/WJS/2022.002](https://doi.org/10.15347%2FWJS%2F2022.002). [ISSN](https://en.wikipedia.org/wiki/ISSN_\(identifier\) "ISSN (identifier)") [2470-6345](https://search.worldcat.org/issn/2470-6345). [OCLC](https://en.wikipedia.org/wiki/OCLC_\(identifier\) "OCLC (identifier)") [9708517136](https://search.worldcat.org/oclc/9708517136). [S2CID](https://en.wikipedia.org/wiki/S2CID_\(identifier\) "S2CID (identifier)") [254665961](https://api.semanticscholar.org/CorpusID:254665961). [Wikidata](https://en.wikipedia.org/wiki/WDQ_\(identifier\) "WDQ (identifier)") [Q104661268](https://www.wikidata.org/wiki/Q104661268 "d:Q104661268").

- [Internet Assigned Numbers Authority](https://www.iana.org/) (IANA)
- [IP, Internet Protocol](http://www.networksorcery.com/enp/protocol/ip.htm) [Archived](https://web.archive.org/web/20110514231900/http://www.networksorcery.com/enp/protocol/ip.htm) 2011-05-14 at the [Wayback Machine](https://en.wikipedia.org/wiki/Wayback_Machine "Wayback Machine") — IP Header Breakdown, including specific options
- C. Perkins, ed. (November 2010). [*IP Mobility Support for IPv4, Revised*](https://www.rfc-editor.org/rfc/rfc5944). [Internet Engineering Task Force](https://en.wikipedia.org/wiki/Internet_Engineering_Task_Force "Internet Engineering Task Force"). [doi](https://en.wikipedia.org/wiki/Doi_\(identifier\) "Doi (identifier)"):[10.17487/RFC5944](https://doi.org/10.17487%2FRFC5944). [ISSN](https://en.wikipedia.org/wiki/ISSN_\(identifier\) "ISSN (identifier)") [2070-1721](https://search.worldcat.org/issn/2070-1721). [RFC](https://en.wikipedia.org/wiki/Request_for_Comments "Request for Comments") [5944](https://datatracker.ietf.org/doc/html/rfc5944).*Proposed Standard.* Obsoletes RFC [3344](https://www.rfc-editor.org/rfc/rfc3344).
- [Official current state of IPv4/8 allocations, as maintained by IANA](https://www.iana.org/assignments/ipv4-address-space)

[^1]: [^41]

[^2]: For [IEEE 802](https://en.wikipedia.org/wiki/IEEE_802 "IEEE 802") networking technologies, including [Ethernet](https://en.wikipedia.org/wiki/Ethernet "Ethernet"), the hardware address is a [MAC address](https://en.wikipedia.org/wiki/MAC_address "MAC address").

[^3]: ["BGP Analysis Reports"](http://bgp.potaroo.net/index-bgp.html). *BGP Reports*. Retrieved 2013-01-09.

[^4]: ["IPv6 – Google"](https://www.google.com/intl/en/ipv6/statistics.html). *www.google.com*. Retrieved 2022-01-28.

[^5]: ["IANA IPv4 Special-Purpose Address Registry"](https://www.iana.org/assignments/iana-ipv4-special-registry/iana-ipv4-special-registry.xhtml). *www.iana.org*. Retrieved 2022-01-28.

[^6]: M. Cotton; L. Vegoda; B. Haberman (April 2013). R. Bonica (ed.). [*Special-Purpose IP Address Registries*](https://www.rfc-editor.org/rfc/rfc6890). [Internet Engineering Task Force](https://en.wikipedia.org/wiki/Internet_Engineering_Task_Force "Internet Engineering Task Force"). [doi](https://en.wikipedia.org/wiki/Doi_\(identifier\) "Doi (identifier)"):[10.17487/RFC6890](https://doi.org/10.17487%2FRFC6890). [ISSN](https://en.wikipedia.org/wiki/ISSN_\(identifier\) "ISSN (identifier)") [2070-1721](https://search.worldcat.org/issn/2070-1721). BCP 153. [RFC](https://en.wikipedia.org/wiki/Request_for_Comments "Request for Comments") [6890](https://datatracker.ietf.org/doc/html/rfc6890).*Best Current Practice 153.* Obsoletes RFC [4773](https://www.rfc-editor.org/rfc/rfc4773), [5156](https://www.rfc-editor.org/rfc/rfc5156), [5735](https://www.rfc-editor.org/rfc/rfc5735) and [5736](https://www.rfc-editor.org/rfc/rfc5736). Updated by RFC [8190](https://www.rfc-editor.org/rfc/rfc8190).

[^7]: Davis, Lidija (February 21, 2009). ["Vint Cerf - We Still Have 80 Per Cent of the World to Connect"](https://archive.nytimes.com/www.nytimes.com/external/readwriteweb/2009/02/21/21readwriteweb-vint_cerf_we_still_have_80_per.html). *[The New York Times](https://en.wikipedia.org/wiki/The_New_York_Times "The New York Times")*. Retrieved 2024-05-10.

[^8]: ["A Brief History of IPv4"](https://ipv4marketgroup.com/a-brief-history-of-ipv4/). *IPv4 Market Group*. Retrieved 2020-08-19.

[^9]: ["World 'running out of Internet addresses'"](https://web.archive.org/web/20110125195711/http://technology.inquirer.net/infotech/infotech/view/20110121-315808/World-running-out-of-Internet-addresses). Archived from [the original](http://technology.inquirer.net/infotech/infotech/view/20110121-315808/World-running-out-of-Internet-addresses) on 2011-01-25. Retrieved 2011-01-23.

[^10]: Smith, Lucie; Lipner, Ian (3 February 2011). ["Free Pool of IPv4 Address Space Depleted"](http://www.nro.net/news/ipv4-free-pool-depleted). [Number Resource Organization](https://en.wikipedia.org/wiki/Number_Resource_Organization "Number Resource Organization"). Retrieved 3 February 2011.

[^11]: ICANN, nanog mailing list. ["Five /8s allocated to RIRs – no unallocated IPv4 unicast /8s remain"](http://mailman.nanog.org/pipermail/nanog/2011-February/032107.html).

[^12]: Asia-Pacific Network Information Centre (15 April 2011). ["APNIC IPv4 Address Pool Reaches Final /8"](https://web.archive.org/web/20110807162057/http://www.apnic.net/publications/news/2011/final-8). Archived from [the original](http://www.apnic.net/publications/news/2011/final-8) on 7 August 2011. Retrieved 15 April 2011.

[^13]: [S. Deering](https://en.wikipedia.org/wiki/Steve_Deering "Steve Deering"); R. Hinden (December 1998). [*Internet Protocol, Version 6 (IPv6) Specification*](https://www.rfc-editor.org/rfc/rfc2460). Network Working Group. [doi](https://en.wikipedia.org/wiki/Doi_\(identifier\) "Doi (identifier)"):[10.17487/RFC2460](https://doi.org/10.17487%2FRFC2460). [RFC](https://en.wikipedia.org/wiki/Request_for_Comments "Request for Comments") [2460](https://datatracker.ietf.org/doc/html/rfc2460).*Obsolete.* Obsoleted by RFC [8200](https://www.rfc-editor.org/rfc/rfc8200). Obsoletes RFC [1883](https://www.rfc-editor.org/rfc/rfc1883). Updated by RFC [5095](https://www.rfc-editor.org/rfc/rfc5095), [5722](https://www.rfc-editor.org/rfc/rfc5722), [5871](https://www.rfc-editor.org/rfc/rfc5871), [6437](https://www.rfc-editor.org/rfc/rfc6437), [6564](https://www.rfc-editor.org/rfc/rfc6564), [6935](https://www.rfc-editor.org/rfc/rfc6935), [6946](https://www.rfc-editor.org/rfc/rfc6946), [7045](https://www.rfc-editor.org/rfc/rfc7045) and [7112](https://www.rfc-editor.org/rfc/rfc7112).

[^14]: R. Fink; R. Hinden (March 2004). [*6bone (IPv6 Testing Address Allocation) Phaseout*](https://www.rfc-editor.org/rfc/rfc3701). Network Working Group. [doi](https://en.wikipedia.org/wiki/Doi_\(identifier\) "Doi (identifier)"):[10.17487/RFC3701](https://doi.org/10.17487%2FRFC3701). [RFC](https://en.wikipedia.org/wiki/Request_for_Comments "Request for Comments") [3701](https://datatracker.ietf.org/doc/html/rfc3701).*Informational.* Obsoletes RFC [2471](https://www.rfc-editor.org/rfc/rfc2471).

[^15]: *2016 IEEE International Conference on Emerging Technologies and Innovative Business Practices for the Transformation of Societies (EmergiTech)*. Piscataway, NJ: University of Technology, Mauritius, Institute of Electrical and Electronics Engineers. August 2016. [ISBN](https://en.wikipedia.org/wiki/ISBN_\(identifier\) "ISBN (identifier)") [9781509007066](https://en.wikipedia.org/wiki/Special:BookSources/9781509007066 "Special:BookSources/9781509007066"). [OCLC](https://en.wikipedia.org/wiki/OCLC_\(identifier\) "OCLC (identifier)") [972636788](https://search.worldcat.org/oclc/972636788).

[^16]: ["Understanding IP Addressing: Everything You Ever Wanted To Know"](https://web.archive.org/web/20010616012053/http://www.3com.com/other/pdfs/infra/corpinfo/en_US/501302.pdf) (PDF). 3Com. Archived from [the original](http://www.3com.com/other/pdfs/infra/corpinfo/en_US/501302.pdf) (PDF) on June 16, 2001.

[^17]: [Y. Rekhter](https://en.wikipedia.org/wiki/Yakov_Rekhter "Yakov Rekhter"); B. Moskowitz; D. Karrenberg; G. J. de Groot; E. Lear (February 1996). [*Address Allocation for Private Internets*](https://www.rfc-editor.org/rfc/rfc1918). Network Working Group. [doi](https://en.wikipedia.org/wiki/Doi_\(identifier\) "Doi (identifier)"):[10.17487/RFC1918](https://doi.org/10.17487%2FRFC1918). BCP 5. [RFC](https://en.wikipedia.org/wiki/Request_for_Comments "Request for Comments") [1918](https://datatracker.ietf.org/doc/html/rfc1918).*Best Current Practice 5.* Obsoletes RFC [1627](https://www.rfc-editor.org/rfc/rfc1627) and [1597](https://www.rfc-editor.org/rfc/rfc1597). Updated by RFC [6761](https://www.rfc-editor.org/rfc/rfc6761).

[^18]: J. Weil; V. Kuarsingh; C. Donley; C. Liljenstolpe; M. Azinger (April 2012). [*IANA-Reserved IPv4 Prefix for Shared Address Space*](https://www.rfc-editor.org/rfc/rfc6598). [Internet Engineering Task Force](https://en.wikipedia.org/wiki/Internet_Engineering_Task_Force "Internet Engineering Task Force"). [doi](https://en.wikipedia.org/wiki/Doi_\(identifier\) "Doi (identifier)"):[10.17487/RFC6598](https://doi.org/10.17487%2FRFC6598). [ISSN](https://en.wikipedia.org/wiki/ISSN_\(identifier\) "ISSN (identifier)") [2070-1721](https://search.worldcat.org/issn/2070-1721). BCP 153. [RFC](https://en.wikipedia.org/wiki/Request_for_Comments "Request for Comments") [6598](https://datatracker.ietf.org/doc/html/rfc6598).*Best Current Practice 153.* Updates RFC [5735](https://www.rfc-editor.org/rfc/rfc5735).

[^19]: [S. Cheshire](https://en.wikipedia.org/wiki/Stuart_Cheshire "Stuart Cheshire"); B. Aboba; E. Guttman (May 2005). [*Dynamic Configuration of IPv4 Link-Local Addresses*](https://www.rfc-editor.org/rfc/rfc3927). Network Working Group. [doi](https://en.wikipedia.org/wiki/Doi_\(identifier\) "Doi (identifier)"):[10.17487/RFC3927](https://doi.org/10.17487%2FRFC3927). [RFC](https://en.wikipedia.org/wiki/Request_for_Comments "Request for Comments") [3927](https://datatracker.ietf.org/doc/html/rfc3927).*Proposed Standard.*

[^20]: J. Arkko; M. Cotton; L. Vegoda (January 2010). [*IPv4 Address Blocks Reserved for Documentation*](https://www.rfc-editor.org/rfc/rfc5737). [Internet Engineering Task Force](https://en.wikipedia.org/wiki/Internet_Engineering_Task_Force "Internet Engineering Task Force"). [doi](https://en.wikipedia.org/wiki/Doi_\(identifier\) "Doi (identifier)"):[10.17487/RFC5737](https://doi.org/10.17487%2FRFC5737). [ISSN](https://en.wikipedia.org/wiki/ISSN_\(identifier\) "ISSN (identifier)") [2070-1721](https://search.worldcat.org/issn/2070-1721). [RFC](https://en.wikipedia.org/wiki/Request_for_Comments "Request for Comments") [5737](https://datatracker.ietf.org/doc/html/rfc5737).*Informational.* Updates RFC [1166](https://www.rfc-editor.org/rfc/rfc1166).

[^21]: O. Troan (May 2015). [B. Carpenter](https://en.wikipedia.org/wiki/Brian_Carpenter_\(engineer\) "Brian Carpenter (engineer)") (ed.). [*Deprecating the Anycast Prefix for 6to4 Relay Routers*](https://www.rfc-editor.org/rfc/rfc7526). [Internet Engineering Task Force](https://en.wikipedia.org/wiki/Internet_Engineering_Task_Force "Internet Engineering Task Force"). [doi](https://en.wikipedia.org/wiki/Doi_\(identifier\) "Doi (identifier)"):[10.17487/RFC7526](https://doi.org/10.17487%2FRFC7526). BCP 196. [RFC](https://en.wikipedia.org/wiki/Request_for_Comments "Request for Comments") [7526](https://datatracker.ietf.org/doc/html/rfc7526).*Best Current Practice 196.* Obsoletes RFC [3068](https://www.rfc-editor.org/rfc/rfc3068) and [6732](https://www.rfc-editor.org/rfc/rfc6732).

[^22]: [C. Huitema](https://en.wikipedia.org/wiki/Christian_Huitema "Christian Huitema") (June 2001). [*An Anycast Prefix for 6to4 Relay Routers*](https://www.rfc-editor.org/rfc/rfc3068). Network Working Group. [doi](https://en.wikipedia.org/wiki/Doi_\(identifier\) "Doi (identifier)"):[10.17487/RFC3068](https://doi.org/10.17487%2FRFC3068). [RFC](https://en.wikipedia.org/wiki/Request_for_Comments "Request for Comments") [3068](https://datatracker.ietf.org/doc/html/rfc3068).*Informational.* Obsoleted by RFC [7526](https://www.rfc-editor.org/rfc/rfc7526).

[^23]: S. Bradner; J. McQuaid (March 1999). [*Benchmarking Methodology for Network Interconnect Devices*](https://www.rfc-editor.org/rfc/rfc2544). Network Working Group. [doi](https://en.wikipedia.org/wiki/Doi_\(identifier\) "Doi (identifier)"):[10.17487/RFC2544](https://doi.org/10.17487%2FRFC2544). [RFC](https://en.wikipedia.org/wiki/Request_for_Comments "Request for Comments") [2544](https://datatracker.ietf.org/doc/html/rfc2544).*Informational.* Updated by: RFC [6201](https://www.rfc-editor.org/rfc/rfc6201) and RFC [6815](https://www.rfc-editor.org/rfc/rfc6815).

[^24]: M. Cotton; L. Vegoda; D. Meyer (March 2010). [*IANA Guidelines for IPv4 Multicast Address Assignments*](https://www.rfc-editor.org/rfc/rfc5771). [IETF](https://en.wikipedia.org/wiki/IETF "IETF"). [doi](https://en.wikipedia.org/wiki/Doi_\(identifier\) "Doi (identifier)"):[10.17487/RFC5771](https://doi.org/10.17487%2FRFC5771). [ISSN](https://en.wikipedia.org/wiki/ISSN_\(identifier\) "ISSN (identifier)") [2070-1721](https://search.worldcat.org/issn/2070-1721). BCP 51. [RFC](https://en.wikipedia.org/wiki/Request_for_Comments "Request for Comments") [5771](https://datatracker.ietf.org/doc/html/rfc5771).*Best Current Practice 51.* Obsoletes RFC [3138](https://www.rfc-editor.org/rfc/rfc3138) and [3171](https://www.rfc-editor.org/rfc/rfc3171). Updates RFC [2780](https://www.rfc-editor.org/rfc/rfc2780).

[^25]: S. Venaas; R. Parekh; G. Van de Velde; T. Chown; M. Eubanks (August 2012). [*Multicast Addresses for Documentation*](https://www.rfc-editor.org/rfc/rfc6676). [Internet Engineering Task Force](https://en.wikipedia.org/wiki/Internet_Engineering_Task_Force "Internet Engineering Task Force"). [doi](https://en.wikipedia.org/wiki/Doi_\(identifier\) "Doi (identifier)"):[10.17487/RFC6676](https://doi.org/10.17487%2FRFC6676). [ISSN](https://en.wikipedia.org/wiki/ISSN_\(identifier\) "ISSN (identifier)") [2070-1721](https://search.worldcat.org/issn/2070-1721). [RFC](https://en.wikipedia.org/wiki/Request_for_Comments "Request for Comments") [6676](https://datatracker.ietf.org/doc/html/rfc6676).*Informational.*

[^26]: [J. Reynolds](https://en.wikipedia.org/wiki/Joyce_K._Reynolds "Joyce K. Reynolds"), ed. (January 2002). [*Assigned Numbers: RFC 1700 is Replaced by an On-line Database*](https://www.rfc-editor.org/rfc/rfc3232). Network Working Group. [doi](https://en.wikipedia.org/wiki/Doi_\(identifier\) "Doi (identifier)"):[10.17487/RFC3232](https://doi.org/10.17487%2FRFC3232). [RFC](https://en.wikipedia.org/wiki/Request_for_Comments "Request for Comments") [3232](https://datatracker.ietf.org/doc/html/rfc3232).*Informational.* Obsoletes RFC [1700](https://www.rfc-editor.org/rfc/rfc1700).

[^27]: [R. Braden](https://en.wikipedia.org/wiki/Bob_Braden "Bob Braden"), ed. (October 1989). [*Requirements for Internet Hosts -- Communication Layers*](https://www.rfc-editor.org/rfc/rfc1122). Network Working Group. [doi](https://en.wikipedia.org/wiki/Doi_\(identifier\) "Doi (identifier)"):[10.17487/RFC1122](https://doi.org/10.17487%2FRFC1122). STD 3. [RFC](https://en.wikipedia.org/wiki/Request_for_Comments "Request for Comments") [1122](https://datatracker.ietf.org/doc/html/rfc1122).*Internet Standard 3.* Updated by RFC [1349](https://www.rfc-editor.org/rfc/rfc1349), [4379](https://www.rfc-editor.org/rfc/rfc4379), [5884](https://www.rfc-editor.org/rfc/rfc5884), [6093](https://www.rfc-editor.org/rfc/rfc6093), [6298](https://www.rfc-editor.org/rfc/rfc6298), [6633](https://www.rfc-editor.org/rfc/rfc6633), [6864](https://www.rfc-editor.org/rfc/rfc6864), [8029](https://www.rfc-editor.org/rfc/rfc8029) and [9293](https://www.rfc-editor.org/rfc/rfc9293). IP addresses are not permitted to have the value 0 or -1 for any of the <Host-number>, <Network-number>, or <Subnet-number> fields (except in \[special cases\]).

[^28]: [J. Reynolds](https://en.wikipedia.org/wiki/Joyce_K._Reynolds "Joyce K. Reynolds"); [J. Postel](https://en.wikipedia.org/wiki/Jon_Postel "Jon Postel") (October 1984). [*ASSIGNED NUMBERS*](https://www.rfc-editor.org/rfc/rfc923). Network Working Group. [doi](https://en.wikipedia.org/wiki/Doi_\(identifier\) "Doi (identifier)"):[10.17487/RFC0923](https://doi.org/10.17487%2FRFC0923). [RFC](https://en.wikipedia.org/wiki/Request_for_Comments "Request for Comments") [923](https://datatracker.ietf.org/doc/html/rfc923).*Obsolete.* Obsoleted by RFC [943](https://www.rfc-editor.org/rfc/rfc943). Obsoletes RFC [900](https://www.rfc-editor.org/rfc/rfc900). Special Addresses: In certain contexts, it is useful to have fixed addresses with functional significance rather than as identifiers of specific hosts. When such usage is called for, the address zero is to be interpreted as meaning "this", as in "this network".

[^29]: [R. Braden](https://en.wikipedia.org/wiki/Bob_Braden "Bob Braden"), ed. (October 1989). [*Requirements for Internet Hosts -- Communication Layers*](https://www.rfc-editor.org/rfc/rfc1122). Network Working Group. [doi](https://en.wikipedia.org/wiki/Doi_\(identifier\) "Doi (identifier)"):[10.17487/RFC1122](https://doi.org/10.17487%2FRFC1122). STD 3. [RFC](https://en.wikipedia.org/wiki/Request_for_Comments "Request for Comments") [1122](https://datatracker.ietf.org/doc/html/rfc1122).*Internet Standard 3.* Updated by RFC [1349](https://www.rfc-editor.org/rfc/rfc1349), [4379](https://www.rfc-editor.org/rfc/rfc4379), [5884](https://www.rfc-editor.org/rfc/rfc5884), [6093](https://www.rfc-editor.org/rfc/rfc6093), [6298](https://www.rfc-editor.org/rfc/rfc6298), [6633](https://www.rfc-editor.org/rfc/rfc6633), [6864](https://www.rfc-editor.org/rfc/rfc6864), [8029](https://www.rfc-editor.org/rfc/rfc8029) and [9293](https://www.rfc-editor.org/rfc/rfc9293).

[^30]: A. Retana; R. White; V. Fuller; D. McPherson (December 2000). [*Using 31-Bit Prefixes on IPv4 Point-to-Point Links*](https://www.rfc-editor.org/rfc/rfc3021). Network Working Group. [doi](https://en.wikipedia.org/wiki/Doi_\(identifier\) "Doi (identifier)"):[10.17487/RFC3021](https://doi.org/10.17487%2FRFC3021). [RFC](https://en.wikipedia.org/wiki/Request_for_Comments "Request for Comments") [3021](https://datatracker.ietf.org/doc/html/rfc3021).*Proposed Standard.*

[^31]: Almquist, Philip; Kastenholz, Frank (December 1993). ["Towards Requirements for IP Routers"](https://datatracker.ietf.org/doc/draft-ietf-rreq-iprouters-require/00). *Internet Engineering Task Force*.

[^32]: P. Almquist (November 1994). F. Kastenholz (ed.). [*Towards Requirements for IP Routers*](https://www.rfc-editor.org/rfc/rfc1716). Network Working Group. [doi](https://en.wikipedia.org/wiki/Doi_\(identifier\) "Doi (identifier)"):[10.17487/RFC1716](https://doi.org/10.17487%2FRFC1716). [RFC](https://en.wikipedia.org/wiki/Request_for_Comments "Request for Comments") [1716](https://datatracker.ietf.org/doc/html/rfc1716).*Obsolete.* Obsoleted by RFC [1812](https://www.rfc-editor.org/rfc/rfc1812).

[^33]: [F. Baker](https://en.wikipedia.org/wiki/Fred_Baker_\(IETF_chair\) "Fred Baker (IETF chair)"), ed. (June 1995). [*Requirements for IP Version 4 Routers*](https://www.rfc-editor.org/rfc/rfc1812). Network Working Group. [doi](https://en.wikipedia.org/wiki/Doi_\(identifier\) "Doi (identifier)"):[10.17487/RFC1812](https://doi.org/10.17487%2FRFC1812). [RFC](https://en.wikipedia.org/wiki/Request_for_Comments "Request for Comments") [1812](https://datatracker.ietf.org/doc/html/rfc1812).*Proposed Standard.* Obsoletes RFC [1716](https://www.rfc-editor.org/rfc/rfc1716) and [1009](https://www.rfc-editor.org/rfc/rfc1009). Updated by RFC [2644](https://www.rfc-editor.org/rfc/rfc2644) and [6633](https://www.rfc-editor.org/rfc/rfc6633).

[^34]: ["Understanding and Configuring the ip unnumbered Command"](https://www.cisco.com/c/en/us/support/docs/ip/hot-standby-router-protocol-hsrp/13786-20.html). *Cisco*. Retrieved 2021-11-25.

[^35]: C. Partridge; F. Kastenholz (December 1994). [*Technical Criteria for Choosing IP The Next Generation (IPng)*](https://www.rfc-editor.org/rfc/rfc1726). Network Working Group. [doi](https://en.wikipedia.org/wiki/Doi_\(identifier\) "Doi (identifier)"):[10.17487/RFC1726](https://doi.org/10.17487%2FRFC1726). [RFC](https://en.wikipedia.org/wiki/Request_for_Comments "Request for Comments") [1726](https://datatracker.ietf.org/doc/html/rfc1726).*Informational.*

[^36]: [J. Postel](https://en.wikipedia.org/wiki/Jon_Postel "Jon Postel"), ed. (September 1981). [*INTERNET PROTOCOL - DARPA INTERNET PROGRAM PROTOCOL SPECIFICATION*](https://www.rfc-editor.org/rfc/rfc791). [IETF](https://en.wikipedia.org/wiki/IETF "IETF"). [doi](https://en.wikipedia.org/wiki/Doi_\(identifier\) "Doi (identifier)"):[10.17487/RFC0791](https://doi.org/10.17487%2FRFC0791). STD 5. [RFC](https://en.wikipedia.org/wiki/Request_for_Comments "Request for Comments") [791](https://datatracker.ietf.org/doc/html/rfc791). IEN 128, 123, 111, 80, 54, 44, 41, 28, 26.*Internet Standard 5.* Obsoletes RFC [760](https://www.rfc-editor.org/rfc/rfc760). Updated by RFC [1349](https://www.rfc-editor.org/rfc/rfc1349), [2474](https://www.rfc-editor.org/rfc/rfc2474) and [6864](https://www.rfc-editor.org/rfc/rfc6864).

[^37]: K. Nichols; S. Blake; [F. Baker](https://en.wikipedia.org/wiki/Fred_Baker_\(IETF_chair\) "Fred Baker (IETF chair)"); D. Black (December 1998). [*Definition of the Differentiated Services Field (DS Field) in the IPv4 and IPv6 Headers*](https://www.rfc-editor.org/rfc/rfc2474). Network Working Group. [doi](https://en.wikipedia.org/wiki/Doi_\(identifier\) "Doi (identifier)"):[10.17487/RFC2474](https://doi.org/10.17487%2FRFC2474). [RFC](https://en.wikipedia.org/wiki/Request_for_Comments "Request for Comments") [2474](https://datatracker.ietf.org/doc/html/rfc2474).*Proposed Standard.* Obsoletes RFC [1455](https://www.rfc-editor.org/rfc/rfc1455) and [1349](https://www.rfc-editor.org/rfc/rfc1349). Updated by RFC [3168](https://www.rfc-editor.org/rfc/rfc3168), [3260](https://www.rfc-editor.org/rfc/rfc3260) and [8436](https://www.rfc-editor.org/rfc/rfc8436).

[^38]: K. Ramakrishnan; S. Floyd; D. Black (September 2001). [*The Addition of Explicit Congestion Notification (ECN) to IP*](https://www.rfc-editor.org/rfc/rfc3168). Network Working Group. [doi](https://en.wikipedia.org/wiki/Doi_\(identifier\) "Doi (identifier)"):[10.17487/RFC3168](https://doi.org/10.17487%2FRFC3168). [RFC](https://en.wikipedia.org/wiki/Request_for_Comments "Request for Comments") [3168](https://datatracker.ietf.org/doc/html/rfc3168).*Proposed Standard.* Obsoletes RFC [2481](https://www.rfc-editor.org/rfc/rfc2481). Updates RFC [2474](https://www.rfc-editor.org/rfc/rfc2474), [2401](https://www.rfc-editor.org/rfc/rfc2401) and [793](https://www.rfc-editor.org/rfc/rfc793). Updated by RFC [4301](https://www.rfc-editor.org/rfc/rfc4301), [6040](https://www.rfc-editor.org/rfc/rfc6040) and [8311](https://www.rfc-editor.org/rfc/rfc8311).

[^39]: Savage, Stefan (2000). ["Practical network support for IP traceback"](https://doi.org/10.1145%2F347057.347560). *ACM SIGCOMM Computer Communication Review*. **30** (4): 295– 306. [doi](https://en.wikipedia.org/wiki/Doi_\(identifier\) "Doi (identifier)"):[10.1145/347057.347560](https://doi.org/10.1145%2F347057.347560).

[^40]: J. Touch (February 2013). [*Updated Specification of the IPv4 ID Field*](https://www.rfc-editor.org/rfc/rfc6864). [Internet Engineering Task Force](https://en.wikipedia.org/wiki/Internet_Engineering_Task_Force "Internet Engineering Task Force"). [doi](https://en.wikipedia.org/wiki/Doi_\(identifier\) "Doi (identifier)"):[10.17487/RFC6864](https://doi.org/10.17487%2FRFC6864). [ISSN](https://en.wikipedia.org/wiki/ISSN_\(identifier\) "ISSN (identifier)") [2070-1721](https://search.worldcat.org/issn/2070-1721). [RFC](https://en.wikipedia.org/wiki/Request_for_Comments "Request for Comments") [6864](https://datatracker.ietf.org/doc/html/rfc6864).*Proposed Standard.* Updates RFC [791](https://www.rfc-editor.org/rfc/rfc791), [1122](https://www.rfc-editor.org/rfc/rfc1122) and [2003](https://www.rfc-editor.org/rfc/rfc2003).

[^41]: [S. Bellovin](https://en.wikipedia.org/wiki/Steven_M._Bellovin "Steven M. Bellovin") (1 April 2003). [*The Security Flag in the IPv4 Header*](https://www.rfc-editor.org/rfc/rfc3514). Network Working Group. [doi](https://en.wikipedia.org/wiki/Doi_\(identifier\) "Doi (identifier)"):[10.17487/RFC3514](https://doi.org/10.17487%2FRFC3514). [RFC](https://en.wikipedia.org/wiki/Request_for_Comments "Request for Comments") [3514](https://datatracker.ietf.org/doc/html/rfc3514).*Informational.* This is an [April Fools' Day Request for Comments](https://en.wikipedia.org/wiki/April_Fools%27_Day_Request_for_Comments "April Fools' Day Request for Comments").

[^42]: Bhardwaj, Rashmi (2020-06-04). ["Fragment Offset - IP With Ease"](https://ipwithease.com/fragmentation-offset/). *ipwithease.com*. Retrieved 2022-11-21.

[^43]: ["Cisco unofficial FAQ"](http://www.faqs.org/faqs/cisco-networking-faq/section-23.html). Retrieved 2012-05-10.

[^44]: F. Gont (July 2011). [*Security Assessment of the Internet Protocol Version 4*](https://www.rfc-editor.org/rfc/rfc6274). [Internet Engineering Task Force](https://en.wikipedia.org/wiki/Internet_Engineering_Task_Force "Internet Engineering Task Force"). [doi](https://en.wikipedia.org/wiki/Doi_\(identifier\) "Doi (identifier)"):[10.17487/RFC6274](https://doi.org/10.17487%2FRFC6274). [ISSN](https://en.wikipedia.org/wiki/ISSN_\(identifier\) "ISSN (identifier)") [2070-1721](https://search.worldcat.org/issn/2070-1721). [RFC](https://en.wikipedia.org/wiki/Request_for_Comments "Request for Comments") [6274](https://datatracker.ietf.org/doc/html/rfc6274).*Informational.*