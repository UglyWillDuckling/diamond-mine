---
source: https://en.wikipedia.org/wiki/Ethernet_frame
published: 2007-02-13
created: 2025-11-06
tags:
part of:
  - "[[Ethernet]]"
---
In [computer networking](https://en.wikipedia.org/wiki/Computer_network "Computer network"), an **Ethernet frame** is a [data link layer](https://en.wikipedia.org/wiki/Data_link_layer "Data link layer") [protocol data unit](https://en.wikipedia.org/wiki/Protocol_data_unit "Protocol data unit") and uses the underlying [Ethernet physical layer](https://en.wikipedia.org/wiki/Ethernet_physical_layer "Ethernet physical layer") transport mechanisms. In other words, a [data unit](https://en.wikipedia.org/wiki/Network_packet "Network packet") on an [Ethernet](https://en.wikipedia.org/wiki/Ethernet "Ethernet") link transports an Ethernet frame as its payload.[^10]

![[~/×/0562a883d1683b7fc878801e250d4d09_MD5.png]]
> Ethernet packet. The SFD (start frame delimiter) marks the end of the packet preamble. It is immediately followed by the Ethernet frame, which starts with the destination MAC address.

An Ethernet [frame](https://en.wikipedia.org/wiki/Frame_\(networking\) "Frame (networking)") is preceded by a [preamble](https://en.wikipedia.org/wiki/Preamble_\(communication\) "Preamble (communication)") and start frame delimiter (SFD), which are both part of the Ethernet packet at the [physical layer](https://en.wikipedia.org/wiki/Physical_layer "Physical layer"). Each Ethernet frame starts with an Ethernet header, which contains **destination and source** [MAC addresses](https://en.wikipedia.org/wiki/MAC_address "MAC address") as its first two fields. 
The middle section of the frame is payload data ==including any headers for other protocols== (for example, [Internet Protocol](https://en.wikipedia.org/wiki/Internet_Protocol "Internet Protocol")) carried in the frame. The frame ends with a [frame check sequence](https://en.wikipedia.org/wiki/Frame_check_sequence "Frame check sequence") (FCS), which is a 32-bit [cyclic redundancy check](https://en.wikipedia.org/wiki/Cyclic_redundancy_check "Cyclic redundancy check") used to detect any in-transit corruption of data.

A data packet on the wire and the frame as its payload consist of binary data. Ethernet transmits data with the most-significant [octet](https://en.wikipedia.org/wiki/Octet_\(computing\) "Octet (computing)") (byte) first; within each octet, however, the least-significant bit is transmitted first.[^1]

The internal structure of an Ethernet frame is specified in IEEE 802.3.[^10] The table below shows the complete Ethernet packet and the frame inside, as transmitted, for the payload size up to the [MTU](https://en.wikipedia.org/wiki/Maximum_transmission_unit "Maximum transmission unit") of 1500 octets.[^2] Some implementations of [Gigabit Ethernet](https://en.wikipedia.org/wiki/Gigabit_Ethernet "Gigabit Ethernet") and other higher-speed variants of Ethernet support larger frames, known as [jumbo frames](https://en.wikipedia.org/wiki/Jumbo_frame "Jumbo frame").

<table><caption>802.3 Ethernet packet and frame structure</caption><tbody><tr><th>Layer</th><th>Preamble</th><th>Start frame delimiter (SFD)</th><th>MAC destination</th><th>MAC source</th><th><a href="https://en.wikipedia.org/wiki/802.1Q">802.1Q</a> tag (optional)</th><th><a href="https://en.wikipedia.org/wiki/Ethertype">Ethertype</a> (<a href="https://en.wikipedia.org/wiki/Ethernet_II">Ethernet II</a>) or&nbsp;length (<a href="https://en.wikipedia.org/wiki/IEEE_802.3">IEEE 802.3</a>)</th><th>Payload</th><th><a href="https://en.wikipedia.org/wiki/Frame_check_sequence">Frame check sequence</a> (32‑bit <a href="https://en.wikipedia.org/wiki/Cyclic_redundancy_check">CRC</a>)</th><th><a href="https://en.wikipedia.org/wiki/Interpacket_gap">Interpacket gap (IPG)</a></th></tr><tr><td>Length (<a href="https://en.wikipedia.org/wiki/Octet_(computing)">octets</a>)</td><td>7</td><td>1</td><td>6</td><td>6</td><td>(4)</td><td>2</td><td>42–1500 <sup><a href="https://en.wikipedia.org/wiki/#fn:3">3</a></sup></td><td>4</td><td>12</td></tr><tr><td><a href="https://en.wikipedia.org/wiki/Layer_2">Layer 2</a> Ethernet frame</td><td colspan="2">(not part of the frame)</td><td colspan="6"><span>← 64–1522 octets →</span></td><td>(not part of the frame)</td></tr><tr><td><a href="https://en.wikipedia.org/wiki/Layer_1">Layer 1</a> Ethernet packet &amp; IPG</td><td colspan="8"><span>← 72–1530 octets →</span></td><td>← 12 octets →</td></tr></tbody></table>

The optional 802.1Q tag consumes additional space in the frame. Field sizes for this option are shown in brackets in the table above. [IEEE 802.1ad](https://en.wikipedia.org/wiki/IEEE_802.1ad "IEEE 802.1ad") (Q-in-Q) allows for multiple tags in each frame. This option is not illustrated here.

An Ethernet packet starts with a seven-octet (56-bit) [preamble](https://en.wikipedia.org/wiki/Preamble_\(communication\) "Preamble (communication)") and one-octet (8-bit) *start frame delimiter* (SFD).[^4] The preamble bit values alternate 1 and 0, allowing receivers to synchronize their clock at the bit-level with the transmitter. The preamble is followed by the SFD which ends with a 1 instead of 0, to break the bit pattern of the preamble and signal the start of the actual frame.[^9]<sup><span title="Page / location: section 4.2.5">: section 4.2.5 </span></sup> 

[Physical layer transceiver circuitry](https://en.wikipedia.org/wiki/PHY "PHY") (PHY for short) is required to connect the Ethernet MAC to the physical medium. The connection between a PHY and MAC is independent of the physical medium and uses a bus from the [media-independent interface](https://en.wikipedia.org/wiki/Media-independent_interface "Media-independent interface") (MII) family ([GMII](https://en.wikipedia.org/wiki/GMII "GMII"), [RGMII](https://en.wikipedia.org/wiki/RGMII "RGMII"), [SGMII](https://en.wikipedia.org/wiki/SGMII "SGMII"), [XGMII](https://en.wikipedia.org/wiki/XGMII "XGMII"), etc.). The preamble and SFD representation depends on the width of the bus:

<table><caption>Preamble and SFD representations as bits, decimal, bytes, and nibbles</caption><tbody><tr><th>Representation</th><th colspan="14"><b>56-bit (7-byte) Preamble</b></th><th colspan="2"><b>SFD byte</b></th></tr><tr><td>uncoded on-the-wire <b>bit pattern</b> transmitted from left to right (used by Ethernet variants transmitting serial bits instead of larger <a href="https://en.wikipedia.org/wiki/Symbol_(data)">symbols</a>) <sup><a href="https://en.wikipedia.org/wiki/#fn:9">9</a></sup><sup><span>: sections 4.2.5 and 3.2.2 </span></sup></td><td colspan="2">10101010</td><td colspan="2">10101010</td><td colspan="2">10101010</td><td colspan="2">10101010</td><td colspan="2">10101010</td><td colspan="2">10101010</td><td colspan="2">10101010</td><td colspan="2">10101011</td></tr><tr><td><b>decimal</b> in Ethernet <a href="https://en.wikipedia.org/wiki/Least_Significant_Bit">LSb</a> -first ordering <sup><a href="https://en.wikipedia.org/wiki/#fn:9">9</a></sup><sup><span>: sections 3.2.2, 3.3 and 4.2.6 </span></sup></td><td colspan="2">85</td><td colspan="2">85</td><td colspan="2">85</td><td colspan="2">85</td><td colspan="2">85</td><td colspan="2">85</td><td colspan="2">85</td><td colspan="2">213</td></tr><tr><td>hexadecimal LSb-first <b>bytes</b> for 8-bit wide busses<p>(<a href="https://en.wikipedia.org/wiki/GMII">GMII bus</a> for <a href="https://en.wikipedia.org/wiki/Gigabit_Ethernet">Gigabit Ethernet</a> transceivers)</p></td><td colspan="2">0x55</td><td colspan="2">0x55</td><td colspan="2">0x55</td><td colspan="2">0x55</td><td colspan="2">0x55</td><td colspan="2">0x55</td><td colspan="2">0x55</td><td colspan="2">0xD5</td></tr><tr><td>hexadecimal LSb-first <a href="https://en.wikipedia.org/wiki/Nibble"><b>nibbles</b></a> for 4-bit wide busses (<a href="https://en.wikipedia.org/wiki/Media-independent_interface">MII bus</a> for <a href="https://en.wikipedia.org/wiki/Fast_Ethernet">Fast Ethernet</a> or <a href="https://en.wikipedia.org/wiki/RGMII">RGMII</a> for gigabit transceivers)</td><td>0x5</td><td>0x5</td><td>0x5</td><td>0x5</td><td>0x5</td><td>0x5</td><td>0x5</td><td>0x5</td><td>0x5</td><td>0x5</td><td>0x5</td><td>0x5</td><td>0x5</td><td>0x5</td><td>0x5</td><td>0xD</td></tr></tbody></table>

The SFD is immediately followed by the destination [MAC address](https://en.wikipedia.org/wiki/MAC_address "MAC address"), which is the first field in an Ethernet frame.

The header features destination and source MAC addresses (each six octets in length), the [EtherType](https://en.wikipedia.org/wiki/EtherType "EtherType") field and, optionally, an [IEEE 802.1Q](https://en.wikipedia.org/wiki/IEEE_802.1Q "IEEE 802.1Q") tag or [IEEE 802.1ad](https://en.wikipedia.org/wiki/IEEE_802.1ad "IEEE 802.1ad") tag.

The EtherType field is two octets long and it can be used for two different purposes. Values of 1500 and below mean that it is used to indicate the size of the payload in octets, while values of 1536 and above indicate that it is used as an EtherType, to indicate which protocol is encapsulated in the payload of the frame. When used as EtherType, the length of the frame is determined by the location of the [interpacket gap](https://en.wikipedia.org/wiki/Interpacket_gap "Interpacket gap") and valid [frame check sequence](https://en.wikipedia.org/wiki/Frame_check_sequence "Frame check sequence") (FCS).

The [IEEE 802.1Q](https://en.wikipedia.org/wiki/IEEE_802.1Q "IEEE 802.1Q") tag or [IEEE 802.1ad](https://en.wikipedia.org/wiki/IEEE_802.1ad "IEEE 802.1ad") tag, if present, is a four-octet field that indicates [virtual LAN](https://en.wikipedia.org/wiki/Virtual_LAN "Virtual LAN") (VLAN) membership and [IEEE 802.1p](https://en.wikipedia.org/wiki/IEEE_802.1p "IEEE 802.1p") priority. The first two octets of the tag are called the **T** ag **P** rotocol **ID** entifier (TPID) and double as the EtherType field indicating that the frame is either 802.1Q or 802.1ad tagged. 802.1Q uses a TPID of 0x8100. 802.1ad uses a TPID of 0x88a8.

Payload is a variable-length field. Its minimum size is governed by a requirement for a minimum frame transmission of 64 octets (bytes).[^5] With header and FCS taken into account, the minimum payload is 42 octets when an 802.1Q tag is present [^6] and 46 octets when absent. When the actual payload is less than the minimum, padding octets are added accordingly. IEEE standards specify a maximum payload of 1500 octets. Non-standard [jumbo frames](https://en.wikipedia.org/wiki/Jumbo_frame "Jumbo frame") allow for larger payloads on networks built to support them.

The [frame check sequence](https://en.wikipedia.org/wiki/Frame_check_sequence "Frame check sequence") (FCS) is a four-octet [cyclic redundancy check](https://en.wikipedia.org/wiki/Cyclic_redundancy_check "Cyclic redundancy check") (CRC) that allows detection of corrupted data within the entire frame as received on the receiver side. According to the standard, the FCS value is computed as a function of the protected MAC frame fields: source and destination address, length/type field, MAC client data and padding (that is, all fields except the FCS).

Per the standard, this computation is done using the left shifting CRC-32 ([polynomial](https://en.wikipedia.org/wiki/Cyclic_redundancy_check#Introduction "Cyclic redundancy check") = 0x04C11DB7, initial CRC = 0xFFFFFFFF, CRC is post complemented, verify value = 0x38FB2284) algorithm. The standard states that data is transmitted least significant bit (bit 0) first, while the FCS is transmitted most significant bit (bit 31) first.[^9]<sup><span title="Page / location: section 3.2.9">: section 3.2.9 </span></sup>  An alternative is to calculate a CRC using the right shifting CRC-32 (polynomial = 0xEDB88320, initial CRC = 0xFFFFFFFF, CRC is post complemented, verify value = 0x2144DF1C), which will result in a CRC that is a bit reversal of the FCS, and transmit both data and the CRC least significant bit first, resulting in identical transmissions.

The standard states that the receiver should calculate a new FCS as data is received and then compare the received FCS with the FCS the receiver has calculated. An alternative is to calculate a CRC on both the received data and the FCS, which will result in a fixed non-zero *verify* value. (The result is non-zero because the CRC is post complemented during CRC generation). Since the data is received least significant bit first, and to avoid having to buffer octets of data, the receiver typically uses the right shifting CRC-32. This makes the *verify* value (sometimes called *magic check*) 0x2144DF1C.[^13]

However, hardware implementation of a logically right shifting CRC may use a left shifting [Linear Feedback Shift Register](https://en.wikipedia.org/wiki/Linear-feedback_shift_register#Galois_LFSRs "Linear-feedback shift register") as the basis for calculating the CRC, reversing the bits and resulting in a verify value of 0x38FB2284. Since the complementing of the CRC may be performed post calculation and during transmission, what remains in the hardware register is a non-complemented result, so the residue for a right shifting implementation would be the complement of 0x2144DF1C = 0xDEBB20E3, and for a left shifting implementation, the complement of 0x38FB2284 = 0xC704DD7B.

The *end of a frame* is usually indicated by the end-of-data-stream symbol at the physical layer or by loss of the carrier signal; an example is [10BASE-T](https://en.wikipedia.org/wiki/10BASE-T "10BASE-T"), where the receiving station detects the end of a transmitted frame by loss of the carrier. Later physical layers use an explicit *end of data* or *end of stream* symbol or sequence to avoid ambiguity, especially where the carrier is continually sent between frames; an example is Gigabit Ethernet with its [8b/10b](https://en.wikipedia.org/wiki/8b/10b "8b/10b") encoding scheme that uses special symbols which are transmitted before and after a frame is transmitted.[^14] [^15]

[Interpacket gap](https://en.wikipedia.org/wiki/Interpacket_gap "Interpacket gap") (IPG) is idle time between packets. After a packet has been sent, transmitters are required to transmit a minimum of 96 bits (12 octets) of idle line state before transmitting the next packet.

| Frame type | Ethertype or length | Payload start two bytes |
| --- | --- | --- |
| Ethernet II | ≥ 1536 | Any |
| Novell raw IEEE 802.3 | ≤ 1500 | 0xFFFF |
| IEEE 802.2 LLC | ≤ 1500 | Other |
| IEEE 802.2 SNAP | ≤ 1500 | 0xAAAA |

There are several types of Ethernet frames:

- Ethernet II frame, or Ethernet Version 2,[^7] or DIX frame is the most common type in use today, as it is often used directly by the Internet Protocol.
- [Novell](https://en.wikipedia.org/wiki/Novell "Novell") raw [IEEE 802.3](https://en.wikipedia.org/wiki/IEEE_802.3 "IEEE 802.3") non-standard variation frame
- [IEEE 802.2](https://en.wikipedia.org/wiki/IEEE_802.2 "IEEE 802.2") [Logical Link Control](https://en.wikipedia.org/wiki/Logical_Link_Control "Logical Link Control") (LLC) frame
- [IEEE 802.2](https://en.wikipedia.org/wiki/IEEE_802.2 "IEEE 802.2") [Subnetwork Access Protocol](https://en.wikipedia.org/wiki/Subnetwork_Access_Protocol "Subnetwork Access Protocol") (SNAP) frame

The different frame types have different formats and [MTU](https://en.wikipedia.org/wiki/Maximum_transmission_unit "Maximum transmission unit") values but can coexist on the same physical medium. Differentiation between frame types is possible based on the table on the right.

In addition, all four Ethernet frame types may optionally contain an IEEE 802.1Q tag to identify what VLAN it belongs to and its priority ([quality of service](https://en.wikipedia.org/wiki/Quality_of_service "Quality of service")). This encapsulation is defined in the [IEEE 802.3ac](https://en.wikipedia.org/wiki/IEEE_802.3ac "IEEE 802.3ac") specification and increases the maximum frame by 4 octets.

The IEEE 802.1Q tag, if present, is placed between the Source Address and the EtherType or Length fields. The first two octets of the tag are the Tag Protocol Identifier (TPID) value of 0x8100. This is located in the same place as the EtherType/Length field in untagged frames, so an EtherType value of 0x8100 means the frame is tagged, and the true EtherType/Length is located after the Q-tag. The TPID is followed by two octets containing the Tag Control Information (TCI) (the IEEE 802.1p priority ([quality of service](https://en.wikipedia.org/wiki/Quality_of_service "Quality of service")) and VLAN id). The Q-tag is followed by the rest of the frame, using one of the types described above.

**Ethernet II framing** (also known as **DIX Ethernet**, named after [DEC](https://en.wikipedia.org/wiki/Digital_Equipment_Corporation "Digital Equipment Corporation"), [Intel](https://en.wikipedia.org/wiki/Intel "Intel") and [Xerox](https://en.wikipedia.org/wiki/Xerox "Xerox"), the major participants in its design [^16]), defines the two-octet [EtherType](https://en.wikipedia.org/wiki/EtherType "EtherType") field in an Ethernet [frame](https://en.wikipedia.org/wiki/Frame_\(telecommunications\) "Frame (telecommunications)"), preceded by destination and source MAC addresses, that identifies an [upper layer protocol](https://en.wikipedia.org/wiki/Upper_layer_protocol "Upper layer protocol") [encapsulated](https://en.wikipedia.org/wiki/Encapsulation_\(networking\) "Encapsulation (networking)") by the frame data. Most notably, an EtherType value of 0x0800 indicates that the frame contains an [IPv4](https://en.wikipedia.org/wiki/IPv4 "IPv4") datagram, 0x0806 indicates an [ARP](https://en.wikipedia.org/wiki/Address_Resolution_Protocol "Address Resolution Protocol") datagram, and 0x86DD indicates an [IPv6](https://en.wikipedia.org/wiki/IPv6 "IPv6") datagram. See [EtherType § Values](https://en.wikipedia.org/wiki/EtherType#Values "EtherType") for more.

The most common Ethernet frame format, type II

As this industry-developed standard went through a formal [IEEE](https://en.wikipedia.org/wiki/IEEE "IEEE") standardization process, the EtherType field was changed to a (data) length field in the new 802.3 standard.[^8] Since the recipient still needs to know how to interpret the frame, the standard required an [IEEE 802.2](https://en.wikipedia.org/wiki/IEEE_802.2 "IEEE 802.2") header to follow the length and specify the type. Many years later, the 802.3x-1997 standard, and later versions of the 802.3 standard, formally approved of both types of framing. Ethernet II framing is the most common in Ethernet local area networks, due to its simplicity and lower overhead.

In order to allow some frames using Ethernet II framing and some using the original version of 802.3 framing to be used on the same Ethernet segment, EtherType values must be greater than or equal to 1536 (0x0600). That value was chosen because the maximum length of the payload field of an Ethernet 802.3 frame is 1500 octets (0x05DC). Thus if the field's value is greater than or equal to 1536, the frame must be an Ethernet II frame, with that field being a type field.[^17] If it's less than or equal to 1500, it must be an IEEE 802.3 frame, with that field being a length field. Values between 1500 and 1536, exclusive, are undefined.[^18] This convention allows software to determine whether a frame is an Ethernet II frame or an IEEE 802.3 frame, allowing the coexistence of both standards on the same physical medium.

Novell's raw 802.3 frame format was based on early IEEE 802.3 work. Novell used this as a starting point to create the first implementation of its own [IPX](https://en.wikipedia.org/wiki/IPX "IPX") Network Protocol over Ethernet. They did not use any LLC header but started the IPX packet directly after the length field. This does not conform to the IEEE 802.3 standard, but since IPX always has FF as the first two octets (while in IEEE 802.2 LLC that pattern is theoretically possible but extremely unlikely), in practice this usually coexists on the wire with other Ethernet implementations, with the notable exception of some early forms of [DECnet](https://en.wikipedia.org/wiki/DECnet "DECnet") which got confused by this.

[Novell NetWare](https://en.wikipedia.org/wiki/Novell_NetWare "Novell NetWare") used this frame type by default until the mid-nineties, and since NetWare was then very widespread, while IP was not, at some point in time most of the world's Ethernet traffic ran over raw 802.3 carrying IPX. Since NetWare 4.10, NetWare defaults to IEEE 802.2 with LLC (NetWare Frame Type Ethernet\_802.2) when using IPX.[^19]

Some protocols, such as those designed for the [OSI stack](https://en.wikipedia.org/wiki/OSI_stack "OSI stack"), operate directly on top of IEEE 802.2 LLC encapsulation, which provides both connection-oriented and connectionless network services.

IEEE 802.2 LLC encapsulation is not in widespread use on common networks currently, with the exception of large corporate [NetWare](https://en.wikipedia.org/wiki/NetWare "NetWare") installations that have not yet migrated to NetWare over [IP](https://en.wikipedia.org/wiki/Internet_Protocol "Internet Protocol"). In the past, many corporate networks used IEEE 802.2 to support transparent translating bridges between Ethernet and [Token Ring](https://en.wikipedia.org/wiki/Token_Ring "Token Ring") or [FDDI](https://en.wikipedia.org/wiki/FDDI "FDDI") networks.

There exists an [Internet standard](https://en.wikipedia.org/wiki/Internet_standard "Internet standard") for encapsulating IPv4 traffic in IEEE 802.2 LLC SAP/SNAP frames.[^20] It is almost never implemented on Ethernet, although it is used on FDDI, Token Ring, [IEEE 802.11](https://en.wikipedia.org/wiki/IEEE_802.11 "IEEE 802.11") (with the exception of the [5.9 GHz band](https://en.wikipedia.org/wiki/IEEE_802.11p "IEEE 802.11p"), where it uses EtherType) [^21] and other [IEEE 802](https://en.wikipedia.org/wiki/IEEE_802 "IEEE 802") LANs. IPv6 can also be transmitted over Ethernet using IEEE 802.2 LLC SAP/SNAP, but, again, that's almost never used.

By examining the 802.2 LLC header, it is possible to determine whether it is followed by a SNAP header. The LLC header includes two eight-bit address fields, called *service access points* (SAPs) in OSI terminology; when both source and destination SAP are set to the value 0xAA, the LLC header is followed by a SNAP header. The SNAP header allows EtherType values to be used with all IEEE 802 protocols, as well as supporting private protocol ID spaces.

In IEEE 802.3x-1997, the IEEE Ethernet standard was changed to explicitly allow the use of the 16-bit field after the MAC addresses to be used as a length field or a type field.

The [AppleTalk](https://en.wikipedia.org/wiki/AppleTalk "AppleTalk") v2 protocol suite on Ethernet (" [EtherTalk](https://en.wikipedia.org/wiki/AppleTalk#EtherTalk,_TokenTalk_and_AppleShare "AppleTalk") ") uses IEEE 802.2 LLC + SNAP encapsulation.

We may calculate the [protocol overhead](https://en.wikipedia.org/wiki/Protocol_overhead "Protocol overhead") for Ethernet as a percentage (packet size including IPG)

${\displaystyle {\text{Protocol overhead}}={\frac {{\text{Packet size}}-{\text{Payload size}}}{\text{Packet size}}}}$

We may calculate the *protocol efficiency* for Ethernet

${\displaystyle {\text{Protocol efficiency}}={\frac {\text{Payload size}}{\text{Packet size}}}}$

Maximum efficiency is achieved with largest allowed payload size and is:

${\displaystyle {\frac {1500}{1538}}=97.53\%}$

for untagged frames, since the packet size is maximum 1500 octet payload + 8 octet preamble + 14 octet header + 4 octet trailer + minimum interpacket gap corresponding to 12 octets = 1538 octets. The maximum efficiency is:

${\displaystyle {\frac {1500}{1542}}=97.28\%}$

when 802.1Q VLAN tagging is used.

The [throughput](https://en.wikipedia.org/wiki/Throughput "Throughput") may be calculated from the efficiency

${\displaystyle {\text{Throughput}}={\text{Efficiency}}\times {\text{Net bit rate}}\,\!}$ ,

where the physical layer [net bit rate](https://en.wikipedia.org/wiki/Net_bit_rate "Net bit rate") (the wire bit rate) depends on the [Ethernet physical layer](https://en.wikipedia.org/wiki/Ethernet_physical_layer "Ethernet physical layer") standard, and may be 10 Mbit/s, 100 Mbit/s, 1 Gbit/s or 10 Gbit/s. [Maximum throughput](https://en.wikipedia.org/wiki/Maximum_throughput "Maximum throughput") for 100BASE-TX Ethernet is consequently 97.53 Mbit/s without 802.1Q, and 97.28 Mbit/s with 802.1Q.

[Channel utilization](https://en.wikipedia.org/wiki/Channel_utilization "Channel utilization") is a concept often confused with protocol efficiency. It considers only the use of the channel, disregarding the nature of the data transmitted – either payload or overhead. At the physical layer, the link channel and equipment do not know the difference between data and control frames. We may calculate the [channel utilization](https://en.wikipedia.org/wiki/Channel_utilization "Channel utilization"):

${\displaystyle {\text{Channel utilization}}={\frac {\text{Time spent transmitting data}}{\text{Total time}}}}$

The total time considers the round-trip time along the channel, the processing time in the hosts and the time transmitting data and acknowledgements. The time spent transmitting data includes data and acknowledgements.

A runt frame is an Ethernet frame that is less than the IEEE 802.3's minimum length of 64 octets. Runt frames are most commonly caused by [collisions](https://en.wikipedia.org/wiki/Collision_\(telecommunications\) "Collision (telecommunications)"); other possible causes are a malfunctioning [network card](https://en.wikipedia.org/wiki/Network_card "Network card"), [buffer underrun](https://en.wikipedia.org/wiki/Buffer_underrun "Buffer underrun"), [duplex mismatch](https://en.wikipedia.org/wiki/Duplex_mismatch "Duplex mismatch") or software issues.[^22]

- Video which explains how to build an Ethernet Frame
- Minimum Frame Length in Ethernet explained

[^1]: [^11]

[^2]: The bit patterns in the preamble and start of frame delimiter are written as bit strings, with the first bit transmitted on the left (*not* as octet values, which in Ethernet are transmitted least significant bit(s) first). This notation matches the one used in the IEEE 802.3 standard.

[^3]: Payload can be 42 octets if an 802.1Q tag is present. Minimum is 46 octets without.

[^4]: Preamble and start frame delimiter are not displayed by [packet sniffing](https://en.wikipedia.org/wiki/Packet_sniffing "Packet sniffing") software because these bits are stripped away at OSI layer 1 by the [network interface controller](https://en.wikipedia.org/wiki/Network_interface_controller "Network interface controller") (NIC) before being passed on to the [OSI layer 2](https://en.wikipedia.org/wiki/OSI_layer_2 "OSI layer 2"), which is where packet sniffers collect their data. There are layer-2 sniffers that can capture and display the preamble and start frame delimiter, but they are expensive and mainly used to detect problems related to physical connectivity.

[^5]: Minimum payload size is dictated by the 512-bit slot time used for [collision detection](https://en.wikipedia.org/wiki/Carrier-sense_multiple_access_with_collision_detection "Carrier-sense multiple access with collision detection") in the Ethernet LAN architecture.

[^6]: [^12]

[^7]: A version 1 Ethernet frame was used for early Ethernet prototypes and featured 8-bit MAC addresses and was never commercially deployed.

[^8]: Original Ethernet frames define their length with the framing that surrounds it, rather than with an explicit length count.

[^9]: *802.3-2018 – IEEE Standard for Ethernet*. [IEEE](https://en.wikipedia.org/wiki/IEEE "IEEE"). 14 June 2018. [doi](https://en.wikipedia.org/wiki/Doi_\(identifier\) "Doi (identifier)"):[10.1109/IEEESTD.2018.8457469](https://doi.org/10.1109%2FIEEESTD.2018.8457469). [ISBN](https://en.wikipedia.org/wiki/ISBN_\(identifier\) "ISBN (identifier)") [978-1-5044-5090-4](https://en.wikipedia.org/wiki/Special:BookSources/978-1-5044-5090-4 "Special:BookSources/978-1-5044-5090-4").

[^10]: "3.1.1 Packet format". *802.3-2018 – IEEE Standard for Ethernet*. [IEEE](https://en.wikipedia.org/wiki/IEEE "IEEE"). 14 June 2018. [doi](https://en.wikipedia.org/wiki/Doi_\(identifier\) "Doi (identifier)"):[10.1109/IEEESTD.2018.8457469](https://doi.org/10.1109%2FIEEESTD.2018.8457469). [ISBN](https://en.wikipedia.org/wiki/ISBN_\(identifier\) "ISBN (identifier)") [978-1-5044-5090-4](https://en.wikipedia.org/wiki/Special:BookSources/978-1-5044-5090-4 "Special:BookSources/978-1-5044-5090-4").

[^11]: *802.3-2018 – IEEE Standard for Ethernet*. [IEEE](https://en.wikipedia.org/wiki/IEEE "IEEE"). 14 June 2018. Section 3.3 and annex 31A. [doi](https://en.wikipedia.org/wiki/Doi_\(identifier\) "Doi (identifier)"):[10.1109/IEEESTD.2018.8457469](https://doi.org/10.1109%2FIEEESTD.2018.8457469). [ISBN](https://en.wikipedia.org/wiki/ISBN_\(identifier\) "ISBN (identifier)") [978-1-5044-5090-4](https://en.wikipedia.org/wiki/Special:BookSources/978-1-5044-5090-4 "Special:BookSources/978-1-5044-5090-4"). Opcodes are transmitted high-order octet first. Within each octet, bits are transmitted least-significant bit first. \[...\] Each octet of the MAC frame, with the exception of the FCS, is transmitted least significant bit first.

[^12]: "Annex G". *IEEE Standard for Local and metropolitan area networks--Media Access Control (MAC) Bridges and Virtual Bridged Local Area Networks*. [doi](https://en.wikipedia.org/wiki/Doi_\(identifier\) "Doi (identifier)"):[10.1109/IEEESTD.2011.6009146](https://doi.org/10.1109%2FIEEESTD.2011.6009146). [ISBN](https://en.wikipedia.org/wiki/ISBN_\(identifier\) "ISBN (identifier)") [978-0-7381-6708-4](https://en.wikipedia.org/wiki/Special:BookSources/978-0-7381-6708-4 "Special:BookSources/978-0-7381-6708-4").

[^13]: ["Specification of CRC Routines V4.5.0 R4.1 Rev 3"](https://web.archive.org/web/20200611204430/https://www.autosar.org/fileadmin/user_upload/standards/classic/4-1/AUTOSAR_SWS_CRCLibrary.pdf#page=24) (PDF). [AUTOSAR](https://en.wikipedia.org/wiki/AUTOSAR "AUTOSAR"). p. 24. Archived from [the original](https://www.autosar.org/fileadmin/user_upload/standards/classic/4-1/AUTOSAR_SWS_CRCLibrary.pdf#page=24) (PDF) on 11 June 2020. Retrieved 30 January 2020.

[^14]: Charles E. Spurgeon (February 2000). [*Ethernet: The Definitive Guide*](https://archive.org/details/ethernetdefiniti0000spur). O'Reilly. pp. [41](https://archive.org/details/ethernetdefiniti0000spur/page/41), 47. [ISBN](https://en.wikipedia.org/wiki/ISBN_\(identifier\) "ISBN (identifier)") [9780596552824](https://en.wikipedia.org/wiki/Special:BookSources/9780596552824 "Special:BookSources/9780596552824"). Retrieved 30 June 2014.

[^15]: "40.1.3.1 Physical Coding Sublayer (PCS)". *802.3-2018 – IEEE Standard for Ethernet*. [IEEE](https://en.wikipedia.org/wiki/IEEE "IEEE"). 14 June 2018. [doi](https://en.wikipedia.org/wiki/Doi_\(identifier\) "Doi (identifier)"):[10.1109/IEEESTD.2018.8457469](https://doi.org/10.1109%2FIEEESTD.2018.8457469). [ISBN](https://en.wikipedia.org/wiki/ISBN_\(identifier\) "ISBN (identifier)") [978-1-5044-5090-4](https://en.wikipedia.org/wiki/Special:BookSources/978-1-5044-5090-4 "Special:BookSources/978-1-5044-5090-4").

[^16]: Drew Heywood; Zubair Ahmad (2001). *Drew Heywood's Windows 2000 Network Services*. Sams. p. 53. [ISBN](https://en.wikipedia.org/wiki/ISBN_\(identifier\) "ISBN (identifier)") [978-0-672-31741-5](https://en.wikipedia.org/wiki/Special:BookSources/978-0-672-31741-5 "Special:BookSources/978-0-672-31741-5").

[^17]: LAN MAN Standards Committee of the IEEE Computer Society (20 March 1997). *IEEE Std 802.3x-1997 and IEEE Std 802.3y-1997*. The Institute of Electrical and Electronics Engineers, Inc. pp. 28– 31.

[^18]: "3.2.6 Length/Type field". *802.3-2018 – IEEE Standard for Ethernet*. 14 June 2018. [doi](https://en.wikipedia.org/wiki/Doi_\(identifier\) "Doi (identifier)"):[10.1109/IEEESTD.2018.8457469](https://doi.org/10.1109%2FIEEESTD.2018.8457469). [ISBN](https://en.wikipedia.org/wiki/ISBN_\(identifier\) "ISBN (identifier)") [978-1-5044-5090-4](https://en.wikipedia.org/wiki/Special:BookSources/978-1-5044-5090-4 "Special:BookSources/978-1-5044-5090-4").

[^19]: Don Provan (17 September 1993). ["Ethernet Framing"](https://groups.google.com/group/bit.listserv.novell/browse_thread/thread/d00a24530625714c). [Newsgroup](https://en.wikipedia.org/wiki/Usenet_newsgroup "Usenet newsgroup"): [comp.sys.novell](https://en.wikipedia.org/wiki/). [Usenet:](https://en.wikipedia.org/wiki/Usenet_\(identifier\) "Usenet (identifier)")[1993Sep17.190654.13335@novell.com](https://en.wikipedia.org/wiki/). ([HTML-formatted version](http://www.ee.siue.edu/~bnoble/comp/networks/frametypes.html) [Archived](https://web.archive.org/web/20150418013816/http://www.ee.siue.edu/~bnoble/comp/networks/frametypes.html) 18 April 2015 at the [Wayback Machine](https://en.wikipedia.org/wiki/Wayback_Machine "Wayback Machine")) — a classic series of Usenet postings by Novell's Don Provan that have found their way into numerous FAQs and are widely considered the definitive answer to the Novell Frame Type usage.

[^20]: [*A Standard for the Transmission of IP Datagrams over IEEE 802 Networks*](https://www.rfc-editor.org/rfc/rfc1042). Network Working Group of the IETF. February 1988. [doi](https://en.wikipedia.org/wiki/Doi_\(identifier\) "Doi (identifier)"):[10.17487/RFC1042](https://doi.org/10.17487%2FRFC1042). [RFC](https://en.wikipedia.org/wiki/Request_for_Comments "Request for Comments") [1042](https://datatracker.ietf.org/doc/html/rfc1042).

[^21]: Computer Society, IEEE (2016). *IEEE Std 802.11-2016: Part 11: Wireless LAN Medium Access Control IEEE (MAC) and Physical Layer (PHY) Specifications*. New York, NY: IEEE. p. 249.

[^22]: ["Troubleshooting Ethernet"](http://www.cisco.com/en/US/docs/internetworking/troubleshooting/guide/tr1904.html). Cisco Systems. Retrieved 13 August 2016.