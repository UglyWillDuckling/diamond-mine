---
source: https://en.wikipedia.org/wiki/Transmission_Control_Protocol
published: 2001-09-29
created: 2025-11-07
category:
  - "[[Networking]]"
  - "[[Network Protocol]]"
tags:
---

The **Transmission Control Protocol** (**TCP**) is one of the main [protocols](https://en.wikipedia.org/wiki/Communications_protocol "Communications protocol") of the [Internet protocol suite](https://en.wikipedia.org/wiki/Internet_protocol_suite "Internet protocol suite"). It originated in the initial network implementation in which it complemented the [Internet Protocol](https://en.wikipedia.org/wiki/Internet_Protocol "Internet Protocol") (IP). Therefore, the entire suite is commonly referred to as [TCP/IP](https://en.wikipedia.org/wiki/TCP/IP "TCP/IP"). TCP provides [reliable](https://en.wikipedia.org/wiki/Reliability_\(computer_networking\) "Reliability (computer networking)"), ordered, and [error-checked](https://en.wikipedia.org/wiki/Error_detection_and_correction "Error detection and correction") delivery of a [stream](https://en.wikipedia.org/wiki/Reliable_byte_stream "Reliable byte stream") of [octets](https://en.wikipedia.org/wiki/Octet_\(computing\) "Octet (computing)") (bytes) between applications running on hosts communicating via an IP network. Major internet applications such as the [World Wide Web](https://en.wikipedia.org/wiki/World_Wide_Web "World Wide Web"), email, [remote administration](https://en.wikipedia.org/wiki/Remote_administration "Remote administration"), [file transfer](https://en.wikipedia.org/wiki/File_transfer "File transfer") and [streaming media](https://en.wikipedia.org/wiki/Streaming_media "Streaming media") rely on TCP, which is part of the [transport layer](https://en.wikipedia.org/wiki/Transport_layer "Transport layer") of the TCP/IP suite. [SSL/TLS](https://en.wikipedia.org/wiki/Transport_Layer_Security "Transport Layer Security") often runs on top of TCP. Today, TCP remains a core protocol for most Internet communication, ensuring reliable data transfer across diverse networks.[^6]

TCP is [connection-oriented](https://en.wikipedia.org/wiki/Connection-oriented_communication "Connection-oriented communication"), meaning that sender and receiver firstly need to establish a connection based on agreed parameters; they do this through a three-way [handshake](https://en.wikipedia.org/wiki/Handshake_\(computing\) "Handshake (computing)") procedure.[^7] The server must be listening (passive open) for connection requests from clients before a connection is established. Three-way handshake (active open), [retransmission](https://en.wikipedia.org/wiki/Retransmission_\(data_networks\) "Retransmission (data networks)"), and error detection adds to reliability but lengthens [latency](https://en.wikipedia.org/wiki/Network_latency "Network latency"). Applications that do not require reliable [data stream](https://en.wikipedia.org/wiki/Data_stream "Data stream") service may use the [User Datagram Protocol](https://en.wikipedia.org/wiki/User_Datagram_Protocol "User Datagram Protocol") (UDP) instead, which provides a [connectionless](https://en.wikipedia.org/wiki/Connectionless_communication "Connectionless communication") [datagram](https://en.wikipedia.org/wiki/Datagram "Datagram") service that prioritizes time over reliability. TCP employs [network congestion avoidance](https://en.wikipedia.org/wiki/TCP_congestion_control "TCP congestion control"). However, there are vulnerabilities in TCP, including [denial of service](https://en.wikipedia.org/wiki/Denial-of-service_attack "Denial-of-service attack"), [connection hijacking](https://en.wikipedia.org/wiki/TCP_sequence_prediction_attack "TCP sequence prediction attack"), TCP veto, and [reset attack](https://en.wikipedia.org/wiki/TCP_reset_attack "TCP reset attack").

In May 1974, [Vint Cerf](https://en.wikipedia.org/wiki/Vint_Cerf "Vint Cerf") and [Bob Kahn](https://en.wikipedia.org/wiki/Bob_Kahn "Bob Kahn") described an [internetworking](https://en.wikipedia.org/wiki/Internetworking "Internetworking") protocol for sharing resources using [packet switching](https://en.wikipedia.org/wiki/Packet_switching "Packet switching") among network nodes.[^8] The authors had been working with [Gérard Le Lann](https://en.wikipedia.org/wiki/G%C3%A9rard_Le_Lann "Gérard Le Lann") to incorporate concepts from the French [CYCLADES](https://en.wikipedia.org/wiki/CYCLADES "CYCLADES") project into the new network.[^9] The [specification](https://en.wikipedia.org/wiki/Specification_\(technical_standard\) "Specification (technical standard)") of the resulting protocol, [RFC 675](https://en.wikipedia.org/wiki/#CITEREFRFC_675) (*Specification of Internet Transmission Control Program*), was written by Vint Cerf, [Yogen Dalal](https://en.wikipedia.org/wiki/Yogen_Dalal "Yogen Dalal"), and Carl Sunshine, and published in December 1974.[^10] It contains the first attested use of the term *internet*, as a shorthand for *internetwork*.

The Transmission Control Program incorporated both connection-oriented links and datagram services between hosts. In version 4, the monolithic Transmission Control Program was divided into a modular architecture consisting of the *Transmission Control Protocol* and the *Internet Protocol*.[^11] [^12] This resulted in a networking model that became known informally as *TCP/IP*, although formally it was variously referred to as the *DoD internet architecture model* (*DoD model* for short) or *DARPA model*.[^13] [^14] [^15] Later, it became the part of, and synonymous with, the *Internet Protocol Suite*. TCP continues to evolve, with incremental updates and best practices formalized in RFCs such as RFC 9293 (2022).[^16]

  
The following [Internet Experiment Note](https://en.wikipedia.org/wiki/Internet_Experiment_Note "Internet Experiment Note") (IEN) documents describe the evolution of TCP into the modern version:[^17]

- [IEN #5](https://www.rfc-editor.org/ien/ien5.pdf) *Specification of Internet Transmission Control Program TCP Version 2* (March 1977)
- [IEN #21](https://www.rfc-editor.org/ien/ien21.pdf) *Specification of Internetwork Transmission Control Program TCP Version 3* (January 1978)
- [IEN #27](https://www.rfc-editor.org/ien/ien27.pdf) *A Proposal for TCP Version 3.1 Header Format* (February 1978)
- [IEN #40](https://www.rfc-editor.org/ien/ien40.pdf) *Transmission Control Protocol Draft Version 4* (June 1978)
- [IEN #44](https://www.rfc-editor.org/ien/ien44.pdf) *Latest Header Formats* (June 1978)
- [IEN #55](https://www.rfc-editor.org/ien/ien55.pdf) *Specification of Internetwork Transmission Control Protocol Version 4* (September 1978)
- [IEN #81](https://www.rfc-editor.org/ien/ien81.pdf) *Transmission Control Protocol Version 4* (February 1979)
- [IEN #112](https://www.rfc-editor.org/ien/ien112.txt) *Transmission Control Protocol* (August 1979)
- [IEN #124](https://www.rfc-editor.org/ien/ien124.txt) *DOD STANDARD TRANSMISSION CONTROL PROTOCOL* (December 1979)

TCP was standardized in January 1980 as RFC 761.

In 2004, [Vint Cerf](https://en.wikipedia.org/wiki/Vint_Cerf "Vint Cerf") and [Bob Kahn](https://en.wikipedia.org/wiki/Bob_Kahn "Bob Kahn") received the [Turing Award](https://en.wikipedia.org/wiki/Turing_Award "Turing Award") for their foundational work on TCP/IP.[^18] [^19]

The Transmission Control Protocol provides a communication service at an intermediate level between an application program and the Internet Protocol. It provides host-to-host connectivity at the [transport layer](https://en.wikipedia.org/wiki/Transport_layer "Transport layer") of the [Internet model](https://en.wikipedia.org/wiki/Internet_model "Internet model"). An application does not need to know the particular mechanisms for sending data via a link to another host, such as the required [IP fragmentation](https://en.wikipedia.org/wiki/IP_fragmentation "IP fragmentation") to accommodate the [maximum transmission unit](https://en.wikipedia.org/wiki/Maximum_transmission_unit "Maximum transmission unit") of the transmission medium. At the transport layer, TCP handles all handshaking and transmission details and presents an abstraction of the network connection to the application typically through a [network socket](https://en.wikipedia.org/wiki/Network_socket "Network socket") interface.

At the lower levels of the protocol stack, due to [network congestion](https://en.wikipedia.org/wiki/Network_congestion "Network congestion"), traffic [load balancing](https://en.wikipedia.org/wiki/Load_balancing_\(computing\) "Load balancing (computing)"), or unpredictable network behavior, IP packets may be [lost](https://en.wikipedia.org/wiki/Packet_loss "Packet loss"), duplicated, or [delivered out of order](https://en.wikipedia.org/wiki/Out-of-order_delivery "Out-of-order delivery"). TCP detects these problems, requests [re-transmission](https://en.wikipedia.org/wiki/Retransmission_\(data_networks\) "Retransmission (data networks)") of lost data, rearranges out-of-order data and even helps minimize network congestion to reduce the occurrence of the other problems. If the data still remains undelivered, the source is notified of this failure. Once the TCP receiver has reassembled the sequence of octets originally transmitted, it passes them to the receiving application. Thus, TCP [abstracts](https://en.wikipedia.org/wiki/Abstraction_\(computer_science\) "Abstraction (computer science)") the application's communication from the underlying networking details.

TCP is optimized for accurate delivery rather than timely delivery and can incur relatively long delays (on the order of seconds) while waiting for out-of-order messages or re-transmissions of lost messages. Therefore, it is not particularly suitable for real-time applications such as [voice over IP](https://en.wikipedia.org/wiki/Voice_over_IP "Voice over IP"). For such applications, protocols like the [Real-time Transport Protocol](https://en.wikipedia.org/wiki/Real-time_Transport_Protocol "Real-time Transport Protocol") (RTP) operating over the [User Datagram Protocol](https://en.wikipedia.org/wiki/User_Datagram_Protocol "User Datagram Protocol") (UDP) are usually recommended instead.[^20]

TCP is a [reliable byte stream](https://en.wikipedia.org/wiki/Reliable_byte_stream "Reliable byte stream") delivery service that guarantees that all bytes received will be identical and in the same order as those sent. Since packet transfer by many networks is not reliable, TCP achieves this using a technique known as *positive acknowledgment with re-transmission*. This requires the receiver to respond with an [acknowledgment](https://en.wikipedia.org/wiki/Acknowledgement_\(data_networks\) "Acknowledgement (data networks)") message as it receives the data. The sender keeps a record of each packet it sends and maintains a timer from when the packet was sent. The sender re-transmits a packet if the timer expires before receiving the acknowledgment. The timer is needed in case a packet gets lost or corrupted.[^20]i

While IP handles actual delivery of the data, TCP keeps track of *segments* – the individual units of data transmission that a message is divided into for efficient routing through the network. For example, when an HTML file is sent from a web server, the TCP software layer of that server divides the file into segments and forwards them individually to the [internet layer](https://en.wikipedia.org/wiki/Internet_layer "Internet layer") in the [network stack](https://en.wikipedia.org/wiki/Network_stack "Network stack"). The internet layer software encapsulates each TCP segment into an IP packet by adding a header that includes (among other data) the destination [IP address](https://en.wikipedia.org/wiki/IP_address "IP address"). When the client program on the destination computer receives them, the TCP software in the transport layer re-assembles the segments and ensures they are correctly ordered and error-free as it streams the file contents to the receiving application.

Transmission Control Protocol accepts data from a data stream, divides it into chunks, and adds a TCP header creating a TCP segment. The TCP segment is then [encapsulated](https://en.wikipedia.org/wiki/Encapsulation_\(networking\) "Encapsulation (networking)") into an Internet Protocol (IP) datagram, and exchanged with peers.[^21]

The term *TCP packet* appears in both informal and formal usage, whereas in more precise terminology *segment* refers to the TCP [protocol data unit](https://en.wikipedia.org/wiki/Protocol_data_unit "Protocol data unit") (PDU), *datagram* [^22] to the IP PDU, and *frame* to the [data link layer](https://en.wikipedia.org/wiki/Data_link_layer "Data link layer") PDU:

> Processes transmit data by calling on the TCP and passing buffers of data as arguments. The TCP packages the data from these buffers into segments and calls on the internet module \[e.g. IP\] to transmit each segment to the destination TCP.[^23]

A TCP segment consists of a segment *header* and a *data* section. The segment header contains 10 mandatory fields, and an optional extension field (*Options*, sand color background in table). The data section follows the header and is the payload data carried for the application.[^24] The length of the data section is not specified in the segment header; it can be calculated by subtracting the combined length of the segment header and IP header from the total IP datagram length specified in the IP header.

<table><caption>TCP header format <sup><a href="https://en.wikipedia.org/wiki/#fn:24">24</a></sup></caption><tbody><tr><th><i>Offset</i></th><th><a href="https://en.wikipedia.org/wiki/Octet_(computing)">Octet</a></th><th colspan="8">0</th><th colspan="8">1</th><th colspan="8">2</th><th colspan="8">3</th></tr><tr><th>Octet</th><th><a href="https://en.wikipedia.org/wiki/Bit">Bit</a></th><th>0</th><th>1</th><th>2</th><th>3</th><th>4</th><th>5</th><th>6</th><th>7</th><th>8</th><th>9</th><th>10</th><th>11</th><th>12</th><th>13</th><th>14</th><th>15</th><th>16</th><th>17</th><th>18</th><th>19</th><th>20</th><th>21</th><th>22</th><th>23</th><th>24</th><th>25</th><th>26</th><th>27</th><th>28</th><th>29</th><th>30</th><th>31</th></tr><tr><th>0</th><th>0</th><td colspan="16"><i>Source Port</i></td><td colspan="16"><i>Destination Port</i></td></tr><tr><th>4</th><th>32</th><td colspan="32"><i>Sequence Number</i></td></tr><tr><th>8</th><th>64</th><td colspan="32"><i>Acknowledgement Number (meaningful when ACK bit set)</i></td></tr><tr><th>12</th><th>96</th><td colspan="4"><i>Data Offset</i></td><td colspan="4"><i>Reserved</i></td><td><i><span>CWR</span></i></td><td><i><span>ECE</span></i></td><td><i><span>URG</span></i></td><td><i><span>ACK</span></i></td><td><i><span>PSH</span></i></td><td><i><span>RST</span></i></td><td><i><span>SYN</span></i></td><td><i><span>FIN</span></i></td><td colspan="16"><i>Window</i></td></tr><tr><th>16</th><th>128</th><td colspan="16"><i><a href="https://en.wikipedia.org/wiki/Internet_checksum">Checksum</a></i></td><td colspan="16"><i>Urgent Pointer (meaningful when URG bit set) <sup><a href="https://en.wikipedia.org/wiki/#fn:25">25</a></sup></i></td></tr><tr><th>20</th><th>160</th><td colspan="32" rowspan="3"><i>(Options) If present, Data Offset will be greater than 5.<br>Padded with zeroes to a multiple of 32 bits, since Data Offset counts words of 4 octets.</i></td></tr><tr><th>⋮</th><th>⋮</th></tr><tr><th>56</th><th>448</th></tr><tr><th>60</th><th>480</th><td colspan="32" rowspan="3"><i>Data</i></td></tr><tr><th>64</th><th>512</th></tr><tr><th>⋮</th><th>⋮</th></tr></tbody></table>

Source Port: 16 bits

Identifies the sending port.

Destination Port: 16 bits

Identifies the receiving port.

Sequence Number: 32 bits

Has a dual role:
- If the SYN flag is set (1), then this is the initial sequence number. The sequence number of the actual first data byte and the acknowledged number in the corresponding ACK are then this sequence number plus 1.
- If the SYN flag is unset (0), then this is the accumulated sequence number of the first data byte of this segment for the current session.

Acknowledgment Number: 32 bits

If the ACK flag is set then the value of this field is the next sequence number that the sender of the ACK is expecting. This acknowledges receipt of all prior bytes (if any).[^26] The first ACK sent by each end acknowledges the other end's initial sequence number itself, but no data.[^27]

Data Offset (DOffset): 4 bits

Specifies the size of the TCP header in 32-bit [words](https://en.wikipedia.org/wiki/Word_\(computer_architecture\) "Word (computer architecture)"). The minimum size header is 5 words and the maximum is 15 words thus giving the minimum size of 20 bytes and maximum of 60 bytes, allowing for up to 40 bytes of options in the header. This field gets its name from the fact that it is also the offset from the start of the TCP segment to the actual data.

Reserved(Rsrvd): 4 bits

For future use and should be set to zero; senders should not set these and receivers should ignore them if set, in the absence of further specification and implementation.

From 2003 to 2017, the last bit (bit 103 of the header) was defined as the NS (Nonce Sum) flag by the experimental [RFC 3540](https://en.wikipedia.org/wiki/#CITEREFRFC_3540), ECN-nonce. ECN-nonce never gained widespread use and the RFC was moved to Historic status.[^28]

A RFC draft [^29] proposes a new use for this bit. The bit is now used for negotiating the use of Accurate [ECN](https://en.wikipedia.org/wiki/Explicit_Congestion_Notification "Explicit Congestion Notification").

Flags: 8 bits

Contains 8 1-bit flags (control bits) as follows. When using [tcpdump](https://en.wikipedia.org/wiki/Tcpdump "Tcpdump"), a set flag is indicated with the character in parentheses.

CWR(W): 1 bit

Congestion window reduced (CWR) flag is set by the sending host to indicate that it received a TCP segment with the ECE flag set and had responded in congestion control mechanism.[^30] [^1]

ECE(E): 1 bit

ECN-Echo has a dual role, depending on the value of the SYN flag. It indicates:
- If the SYN flag is set (1), the TCP peer is [ECN](https://en.wikipedia.org/wiki/Explicit_Congestion_Notification "Explicit Congestion Notification") capable.[^31]
- If the SYN flag is unset (0), a packet with the Congestion Experienced flag set (ECN=11) in its IP header was received during normal transmission.[^1] This serves as an indication of network congestion (or impending congestion) to the TCP sender.[^32]

URG(U): 1 bit

Indicates that the Urgent pointer field is significant.

ACK(.): 1 bit

Indicates that the Acknowledgment field is significant. All packets after the initial SYN packet sent by the client should have this flag set.[^33]

PSH(P): 1 bit

Push function. Asks to push the buffered data to the receiving application.

RST(R): 1 bit

Reset the connection

SYN(S): 1 bit

Synchronize sequence numbers. Only the first packet sent from each end should have this flag set. Some other flags and fields change meaning based on this flag, and some are only valid when it is set, and others when it is clear.

FIN(F): 1 bit

Last packet from sender

Window: 16 bits

The size of the *receive window*, which specifies the number of window size units [^2] that the sender of this segment is currently willing to receive.[^3] (See [§ Flow control](https://en.wikipedia.org/wiki/#Flow_control) and [§ Window scaling](https://en.wikipedia.org/wiki/#Window_scaling).)

[Checksum](https://en.wikipedia.org/wiki/Internet_checksum "Internet checksum"): 16 bits

The 16-bit [checksum](https://en.wikipedia.org/wiki/Checksum "Checksum") field is used for error-checking of the TCP header, the payload and an IP pseudo-header. The pseudo-header consists of the [source IP address](https://en.wikipedia.org/wiki/IPv4#Source_address "IPv4"), the [destination IP address](https://en.wikipedia.org/wiki/IPv4#Destination_address "IPv4"), the [protocol number](https://en.wikipedia.org/wiki/List_of_IP_protocol_numbers "List of IP protocol numbers") for the TCP protocol (6) and the length of the TCP headers and payload (in bytes).

Urgent Pointer: 16 bits

If the URG flag is set, then this 16-bit field is an offset from the sequence number indicating the last urgent data byte.

Options(TCP Option): Variable 0–320 bits, in units of 32 bits; `size(Options) == (DOffset - 5) * 32`

The length of this field is determined by the *[Data Offset](https://en.wikipedia.org/wiki/#Data_Offset)* field. The TCP header padding is used to ensure that the TCP header ends, and data begins, on a 32-bit boundary. The padding is composed of zeros.[^23]

Options have up to three fields: Option-Kind (1 byte), Option-Length (1 byte), Option-Data (variable). The Option-Kind field indicates the type of option and is the only field that is not optional. Depending on Option-Kind value, the next two fields may be set. Option-Length indicates the total length of the option, and Option-Data contains data associated with the option, if applicable. For example, an Option-Kind byte of 1 indicates that this is a no operation option used only for padding, and does not have an Option-Length or Option-Data fields following it. An Option-Kind byte of 0 marks the end of options, and is also only one byte. An Option-Kind byte of 2 is used to indicate Maximum Segment Size option, and will be followed by an Option-Length byte specifying the length of the MSS field. Option-Length is the total length of the given options field, including Option-Kind and Option-Length fields. So while the MSS value is typically expressed in two bytes, Option-Length will be 4. As an example, an MSS option field with a value of 0x05B4 is coded as (0x02 0x04 0x05B4) in the TCP options section.

Some options may only be sent when SYN is set; they are indicated below as <sup><code>[SYN]</code></sup>. Option-Kind and standard lengths given as (Option-Kind, Option-Length).

| Option-Kind | Option-Length | Option-Data | Purpose | Notes |
| --- | --- | --- | --- | --- |
| 0 | — | — | End of options list |  |
| 1 | — | — | No operation | This may be used to align option fields on 32-bit boundaries for better performance. |
| 2 | 4 | SS | Maximum segment size | See [§ Maximum segment size](https://en.wikipedia.org/wiki/#Maximum_segment_size) for details. <sup xmlns="http://www.w3.org/1999/xhtml"><code>[SYN]</code></sup> |
| 3 | 3 | S | Window scale | See [§ Window scaling](https://en.wikipedia.org/wiki/#Window_scaling) for details.[^34] <sup xmlns="http://www.w3.org/1999/xhtml"><code>[SYN]</code></sup> |
| 4 | 2 | — | Selective Acknowledgement permitted | See [§ Selective acknowledgments](https://en.wikipedia.org/wiki/#Selective_acknowledgments) for details.[^35] <sup xmlns="http://www.w3.org/1999/xhtml"><code>[SYN]</code></sup> |
| 5 | N (10, 18, 26, or 34) | BBBB, EEEE,... | Selective ACKnowledgement (SACK) [^36] | These first two bytes are followed by a list of 1–4 blocks being selectively acknowledged, specified as 32-bit begin/end pointers. |
| 8 | 10 | TTTT, EEEE | Timestamp and echo of previous timestamp | See [§ TCP timestamps](https://en.wikipedia.org/wiki/#TCP_timestamps) for details.[^34] |
| 28 | 4 | — | User Timeout Option | See RFC [5482](https://www.rfc-editor.org/rfc/rfc5482). |
| 29 | N | — | TCP Authentication Option (TCP-AO) | For message authentication, replacing [MD5](https://en.wikipedia.org/wiki/MD5 "MD5") authentication (option 19) originally designed to protect [BGP](https://en.wikipedia.org/wiki/Border_Gateway_Protocol "Border Gateway Protocol") sessions.[^37] See RFC [5925](https://www.rfc-editor.org/rfc/rfc5925). |
| 30 | N | — | Multipath TCP (MPTCP) | See [Multipath TCP](https://en.wikipedia.org/wiki/Multipath_TCP "Multipath TCP") for details. |

The remaining Option-Kind values are historical, obsolete, experimental, not yet standardized, or unassigned. Option number assignments are maintained by the [Internet Assigned Numbers Authority](https://en.wikipedia.org/wiki/Internet_Assigned_Numbers_Authority "Internet Assigned Numbers Authority") (IANA).[^38]

Data: Variable

The payload of the TCP packet

A simplified TCP [state diagram](https://en.wikipedia.org/wiki/State_diagram "State diagram")

TCP protocol operations may be divided into three phases. *Connection establishment* is a multi-step handshake process that establishes a connection before entering the *data transfer* phase. After data transfer is completed, the *connection termination* closes the connection and releases all allocated resources.

A TCP connection is managed by an operating system through a resource that represents the local end-point for communications, the *[Internet socket](https://en.wikipedia.org/wiki/Internet_socket "Internet socket")*. During the lifetime of a TCP connection, the local end-point undergoes a series of [state](https://en.wikipedia.org/wiki/State_\(computer_science\) "State (computer science)") changes:[^39]

| State | Endpoint | Description |
| --- | --- | --- |
| LISTEN | Server | Waiting for a connection request from any remote TCP end-point. |
| SYN-SENT | Client | Waiting for a matching connection request after having sent a connection request. |
| SYN-RECEIVED | Server | Waiting for a confirming connection request acknowledgment after having both received and sent a connection request. |
| ESTABLISHED | Server and client | An open connection, data received can be delivered to the user. The normal state for the data transfer phase of the connection. |
| FIN-WAIT-1 | Server and client | Waiting for a connection termination request from the remote TCP, or an acknowledgment of the connection termination request previously sent. |
| FIN-WAIT-2 | Server and client | Waiting for a connection termination request from the remote TCP. |
| CLOSE-WAIT | Server and client | Waiting for a connection termination request from the local user. |
| CLOSING | Server and client | Waiting for a connection termination request acknowledgment from the remote TCP. |
| LAST-ACK | Server and client | Waiting for an acknowledgment of the connection termination request previously sent to the remote TCP (which includes an acknowledgment of its connection termination request). |
| TIME-WAIT | Server or client | Waiting for enough time to pass to be sure that all remaining packets on the connection have expired. |
| CLOSED | Server and client | No connection state at all. |

Before a client attempts to connect with a server, the server must first bind to and listen at a port to open it up for connections: this is called a passive open. Once the passive open is established, a client may establish a connection by initiating an active open using the three-way (or 3-step) handshake:

1. **SYN**: The active open is performed by the client sending a SYN to the server. The client sets the segment's sequence number to a random value A.
2. **SYN-ACK**: In response, the server replies with a SYN-ACK. The acknowledgment number is set to one more than the received sequence number i.e. A+1, and the sequence number that the server chooses for the packet is another random number, B.
3. **ACK**: Finally, the client sends an ACK back to the server. The sequence number is set to the received acknowledgment value i.e. A+1, and the acknowledgment number is set to one more than the received sequence number i.e. B+1.

Steps 1 and 2 establish and acknowledge the sequence number for one direction (client to server). Steps 2 and 3 establish and acknowledge the sequence number for the other direction (server to client). Following the completion of these steps, both the client and server have received acknowledgments and a full-duplex communication is established.

Connection termination

Detailed TCP close() sequence diagram

The connection termination phase uses a four-way handshake, with each side of the connection terminating independently. When an endpoint wishes to stop its half of the connection, it transmits a FIN packet, which the other end acknowledges with an ACK. Therefore, a typical tear-down requires a pair of FIN and ACK segments from each TCP endpoint. After the side that sent the first FIN has responded with the final ACK, it waits for a timeout before finally closing the connection, during which time the local port is unavailable for new connections; this state lets the TCP client resend the final acknowledgment to the server in case the ACK is lost in transit. The time duration is implementation-dependent, but some common values are 30 seconds, 1 minute, and 2 minutes. After the timeout, the client enters the CLOSED state and the local port becomes available for new connections.[^40]

It is also possible to terminate the connection by a 3-way handshake, when host A sends a FIN and host B replies with a FIN & ACK (combining two steps into one) and host A replies with an ACK.[^41]

Some operating systems, such as [Linux](https://en.wikipedia.org/wiki/Linux "Linux") [^42] implement a half-duplex close sequence. If the host actively closes a connection, while still having unread incoming data available, the host sends the signal RST (losing any received data) instead of FIN. This assures that a TCP application is aware there was a data loss.[^43]

A connection can be in a [half-open](https://en.wikipedia.org/wiki/TCP_half-open "TCP half-open") state, in which case one side has terminated the connection, but the other has not. The side that has terminated can no longer send any data into the connection, but the other side can. The terminating side should continue reading the data until the other side terminates as well.[^44] [^45]

Most implementations allocate an entry in a table that maps a session to a running operating system process. Because TCP packets do not include a session identifier, both endpoints identify the session using the client's address and port. Whenever a packet is received, the TCP implementation must perform a lookup on this table to find the destination process. Each entry in the table is known as a Transmission Control Block or TCB. It contains information about the endpoints (IP and port), status of the connection, running data about the packets that are being exchanged and buffers for sending and receiving data.

The number of sessions in the server side is limited only by memory and can grow as new connections arrive, but the client must allocate an [ephemeral port](https://en.wikipedia.org/wiki/Ephemeral_port "Ephemeral port") before sending the first SYN to the server. This port remains allocated during the whole conversation and effectively limits the number of outgoing connections from each of the client's IP addresses. If an application fails to properly close unrequired connections, a client can run out of resources and become unable to establish new TCP connections, even from other applications.

Both endpoints must also allocate space for unacknowledged packets and received (but unread) data.

The Transmission Control Protocol differs in several key features compared to the [User Datagram Protocol](https://en.wikipedia.org/wiki/User_Datagram_Protocol "User Datagram Protocol"):

- Ordered data transfer: the destination host rearranges segments according to a sequence number [^20]
- Retransmission of lost packets: any cumulative stream not acknowledged is retransmitted [^20]
- Error-free data transfer: corrupted packets are treated as lost and are retransmitted [^21]
- Flow control: limits the rate a sender transfers data to guarantee reliable delivery. The receiver continually hints the sender on how much data can be received. When the receiving host's buffer fills, the next acknowledgment suspends the transfer and allows the data in the buffer to be processed.[^20]
- Congestion control: lost packets (presumed due to congestion) trigger a reduction in data delivery rate [^20]

TCP uses a *sequence number* to identify each byte of data. The sequence number identifies the order of the bytes sent from each computer so that the data can be reconstructed in order, regardless of any [out-of-order delivery](https://en.wikipedia.org/wiki/Out-of-order_delivery "Out-of-order delivery") that may occur. The sequence number of the first byte is chosen by the transmitter for the first packet, which is flagged SYN. This number can be arbitrary, and should, in fact, be unpredictable to defend against [TCP sequence prediction attacks](https://en.wikipedia.org/wiki/TCP_sequence_prediction_attack "TCP sequence prediction attack").

Acknowledgments (ACKs) are sent with a sequence number by the receiver of data to tell the sender that data has been received to the specified byte. ACKs do not imply that the data has been delivered to the application, they merely signify that it is now the receiver's responsibility to deliver the data.

Reliability is achieved by the sender detecting lost data and retransmitting it. TCP uses two primary techniques to identify loss. Retransmission timeout (RTO) and duplicate cumulative acknowledgments (DupAcks).

When a TCP segment is retransmitted, it retains the same sequence number as the original delivery attempt. This conflation of delivery and logical data ordering means that, when acknowledgment is received after a retransmission, the sender cannot tell whether the original transmission or the retransmission is being acknowledged, the so-called *retransmission ambiguity*.[^46] TCP incurs complexity due to retransmission ambiguity.[^47]

If a single segment (say segment number 100) in a stream is lost, then the receiver cannot acknowledge packets above that segment number (100) because it uses cumulative ACKs. Hence the receiver acknowledges packet 99 again on the receipt of another data packet. This duplicate acknowledgement is used as a signal for packet loss. That is, if the sender receives three duplicate acknowledgments, it retransmits the last unacknowledged packet. A threshold of three is used because the network may reorder segments causing duplicate acknowledgements. This threshold has been demonstrated to avoid spurious retransmissions due to reordering.[^48] Some TCP implementations use [selective acknowledgements](https://en.wikipedia.org/wiki/Selective_acknowledgement "Selective acknowledgement") (SACKs) to provide explicit feedback about the segments that have been received. This greatly improves TCP's ability to retransmit the right segments.

Retransmission ambiguity can cause spurious fast retransmissions and congestion avoidance if there is reordering beyond the duplicate acknowledgment threshold.[^49] In the last two decades more packet reordering has been observed over the Internet [^50] which led TCP implementations, such as the one in the Linux Kernel to adopt heuristic methods to scale the duplicate acknowledgment threshold.[^51] Recently, there have been efforts to completely phase out duplicate-ACK-based fast-retransmissions and replace them with timer based ones.[^52] (Not to be confused with the classic RTO discussed below). The time based loss detection algorithm called Recent Acknowledgment (RACK) [^53] has been adopted as the default algorithm in Linux and Windows.[^54]

When a sender transmits a segment, it initializes a timer with a conservative estimate of the arrival time of the acknowledgment. The segment is retransmitted if the timer expires, with a new timeout threshold of twice the previous value, resulting in [exponential backoff](https://en.wikipedia.org/wiki/Exponential_backoff "Exponential backoff") behavior. Typically, the initial timer value is smoothed RTT + max(*G*, 4  ×  RTT variation), where G is the clock granularity.[^55] This guards against excessive transmission traffic due to faulty or malicious actors, such as [man-in-the-middle](https://en.wikipedia.org/wiki/Man-in-the-middle_attack "Man-in-the-middle attack") [denial of service attackers](https://en.wikipedia.org/wiki/Denial_of_service_attack "Denial of service attack").

Accurate RTT estimates are important for loss recovery, as it allows a sender to assume an unacknowledged packet to be lost after sufficient time elapses (i.e., determining the RTO time).[^56] Retransmission ambiguity can lead a sender's estimate of RTT to be imprecise.[^56] In an environment with variable RTTs, spurious timeouts can occur:[^57] if the RTT is under-estimated, then the RTO fires and triggers a needless retransmit and slow-start. After a spurious retransmission, when the acknowledgments for the original transmissions arrive, the sender may believe them to be acknowledging the retransmission and conclude, incorrectly, that segments sent between the original transmission and retransmission have been lost, causing further needless retransmissions to the extent that the link truly becomes congested;[^58] [^59] selective acknowledgement can reduce this effect.[^60] [RFC 6298](https://en.wikipedia.org/wiki/#CITEREFRFC_6298) specifies that implementations must not use retransmitted segments when estimating RTT.[^61] [Karn's algorithm](https://en.wikipedia.org/wiki/Karn%27s_algorithm "Karn's algorithm") ensures that a good RTT estimate will be produced—eventually—by waiting until there is an unambiguous acknowledgment before adjusting the RTO.[^62] After spurious retransmissions, however, it may take significant time before such an unambiguous acknowledgment arrives, degrading performance in the interim.[^63] TCP timestamps also resolve the retransmission ambiguity problem in setting the RTO,[^61] though they do not necessarily improve the RTT estimate.[^64]

Sequence numbers allow receivers to discard duplicate packets and properly sequence out-of-order packets. Acknowledgments allow senders to determine when to retransmit lost packets.

To assure correctness a checksum field is included; see [§ Checksum computation](https://en.wikipedia.org/wiki/#Checksum_computation) for details. The TCP checksum is a weak check by modern standards and is normally paired with a [CRC](https://en.wikipedia.org/wiki/Cyclic_redundancy_check "Cyclic redundancy check") integrity check at [layer 2](https://en.wikipedia.org/wiki/Layer_2 "Layer 2"), below both TCP and IP, such as is used in [PPP](https://en.wikipedia.org/wiki/Point-to-Point_Protocol "Point-to-Point Protocol") or the [Ethernet](https://en.wikipedia.org/wiki/Ethernet "Ethernet") frame. However, introduction of errors in packets between CRC-protected hops is common and the 16-bit TCP checksum catches most of these.[^65]

TCP uses an end-to-end [flow control](https://en.wikipedia.org/wiki/Flow_control_\(data\) "Flow control (data)") protocol to avoid having the sender send data too fast for the TCP receiver to receive and process it reliably. Having a mechanism for flow control is essential in an environment where machines of diverse network speeds communicate. For example, if a PC sends data to a smartphone that is slowly processing received data, the smartphone must be able to regulate the data flow so as not to be overwhelmed.[^20]

TCP uses a [sliding window](https://en.wikipedia.org/wiki/Sliding_window "Sliding window") flow control protocol. In each TCP segment, the receiver specifies in the *receive window* field the amount of additionally received data (in bytes) that it is willing to buffer for the connection. The sending host can send only up to that amount of data before it must wait for an acknowledgment and receive window update from the receiving host.

TCP sequence numbers and receive windows behave very much like a clock. The receive window shifts each time the receiver receives and acknowledges a new segment of data. Once it runs out of sequence numbers, the sequence number loops back to 0.

When a receiver advertises a window size of 0, the sender stops sending data and starts its *persist timer*. The persist timer is used to protect TCP from a [deadlock](https://en.wikipedia.org/wiki/Deadlock_\(computer_science\) "Deadlock (computer science)") situation that could arise if a subsequent window size update from the receiver is lost, and the sender cannot send more data until receiving a new window size update from the receiver. When the persist timer expires, the TCP sender attempts recovery by sending a small packet so that the receiver responds by sending another acknowledgment containing the new window size.

If a receiver is processing incoming data in small increments, it may repeatedly advertise a small receive window. This is referred to as the [silly window syndrome](https://en.wikipedia.org/wiki/Silly_window_syndrome "Silly window syndrome"), since it is inefficient to send only a few bytes of data in a TCP segment, given the relatively large overhead of the TCP header.

The final main aspect of TCP is [congestion control](https://en.wikipedia.org/wiki/Congestion_control "Congestion control"). TCP uses a number of mechanisms to achieve high performance and avoid [congestive collapse](https://en.wikipedia.org/wiki/Congestive_collapse "Congestive collapse"), a gridlock situation where network performance is severely degraded. These mechanisms control the rate of data entering the network, keeping the data flow below a rate that would trigger collapse. They also yield an approximately [max-min fair](https://en.wikipedia.org/wiki/Max-min_fair "Max-min fair") allocation between flows.

Acknowledgments for data sent, or the lack of acknowledgments, are used by senders to infer network conditions between the TCP sender and receiver. Coupled with timers, TCP senders and receivers can alter the behavior of the flow of data. This is more generally referred to as congestion control or congestion avoidance.

Modern implementations of TCP contain four intertwined algorithms: [slow start](https://en.wikipedia.org/wiki/TCP_congestion_control#Slow_start "TCP congestion control"), [congestion avoidance](https://en.wikipedia.org/wiki/TCP_congestion_avoidance_algorithm "TCP congestion avoidance algorithm"), [fast retransmit](https://en.wikipedia.org/wiki/Fast_retransmit "Fast retransmit"), and [fast recovery](https://en.wikipedia.org/wiki/Fast_recovery "Fast recovery").[^66]

In addition, senders employ a *retransmission timeout* (RTO) that is based on the estimated [round-trip time](https://en.wikipedia.org/wiki/Round-trip_time "Round-trip time") (RTT) between the sender and receiver, as well as the variance in this round-trip time.[^67] There are subtleties in the estimation of RTT. For example, senders must be careful when calculating RTT samples for retransmitted packets; typically they use [Karn's Algorithm](https://en.wikipedia.org/wiki/Karn%27s_Algorithm "Karn's Algorithm") or TCP timestamps.[^34] These individual RTT samples are then averaged over time to create a smoothed round trip time (SRTT) using [Jacobson's algorithm](https://en.wikipedia.org/w/index.php?title=Jacobson%27s_algorithm&action=edit&redlink=1 "Jacobson's algorithm (page does not exist)"). This SRTT value is what is used as the round-trip time estimate.

Enhancing TCP to reliably handle loss, minimize errors, manage congestion and go fast in very high-speed environments are ongoing areas of research and standards development. As a result, there are a number of [TCP congestion avoidance algorithm](https://en.wikipedia.org/wiki/TCP_congestion_avoidance_algorithm "TCP congestion avoidance algorithm") variations.

The [maximum segment size](https://en.wikipedia.org/wiki/Maximum_segment_size "Maximum segment size") (MSS) is the largest amount of data, specified in bytes, that TCP is willing to receive in a single segment. For best performance, the MSS should be set small enough to avoid [IP fragmentation](https://en.wikipedia.org/wiki/IP_fragmentation "IP fragmentation"), which can lead to packet loss and excessive retransmissions. To accomplish this, typically the MSS is announced by each side using the MSS option when the TCP connection is established. The option value is derived from the [maximum transmission unit](https://en.wikipedia.org/wiki/MTU_\(networking\) "MTU (networking)") (MTU) size of the data link layer of the networks to which the sender and receiver are directly attached. TCP senders can use [path MTU discovery](https://en.wikipedia.org/wiki/Path_MTU_discovery "Path MTU discovery") to infer the minimum MTU along the network path between the sender and receiver, and use this to dynamically adjust the MSS to avoid IP fragmentation within the network.

MSS announcement may also be called *MSS negotiation* but, strictly speaking, the MSS is not *negotiated*. Two completely independent values of MSS are permitted for the two directions of data flow in a TCP connection,[^68] [^23] so there is no need to agree on a common MSS configuration for a bidirectional connection.

Relying purely on the cumulative acknowledgment scheme employed by the original TCP can lead to inefficiencies when packets are lost. For example, suppose bytes with sequence number 1,000 to 10,999 are sent in 10 different TCP segments of equal size, and the second segment (sequence numbers 2,000 to 2,999) is lost during transmission. In a pure cumulative acknowledgment protocol, the receiver can only send a cumulative ACK value of 2,000 (the sequence number immediately following the last sequence number of the received data) and cannot say that it received bytes 3,000 to 10,999 successfully. Thus the sender may then have to resend all data starting with sequence number 2,000.

To alleviate this issue TCP employs the *selective acknowledgment (SACK)* option, defined in 1996 in [RFC 2018](https://en.wikipedia.org/wiki/#CITEREFRFC_2018), which allows the receiver to acknowledge discontinuous blocks of packets that were received correctly, in addition to the sequence number immediately following the last sequence number of the last contiguous byte received successively, as in the basic TCP acknowledgment. The acknowledgment can include a number of *SACK blocks*, where each SACK block is conveyed by the *Left Edge of Block* (the first sequence number of the block) and the *Right Edge of Block* (the sequence number immediately following the last sequence number of the block), with a *Block* being a contiguous range that the receiver correctly received. In the example above, the receiver would send an ACK segment with a cumulative ACK value of 2,000 and a SACK option header with sequence numbers 3,000 and 11,000. The sender would accordingly retransmit only the second segment with sequence numbers 2,000 to 2,999.

A TCP sender may interpret an out-of-order segment delivery as a lost segment. If it does so, the TCP sender will retransmit the segment previous to the out-of-order packet and slow its data delivery rate for that connection. The duplicate-SACK option, an extension to the SACK option that was defined in May 2000 in [RFC 2883](https://en.wikipedia.org/wiki/#CITEREFRFC_2883), solves this problem. Once the TCP receiver detects a second duplicate packet, it sends a D-ACK to indicate that no segments were lost, allowing the TCP sender to reinstate the higher transmission rate.

The SACK option is not mandatory and comes into operation only if both parties support it. This is negotiated when a connection is established. SACK uses a TCP header option (see [§ TCP segment structure](https://en.wikipedia.org/wiki/#TCP_segment_structure) for details). The use of SACK has become widespread—all popular TCP stacks support it. Selective acknowledgment is also used in [Stream Control Transmission Protocol](https://en.wikipedia.org/wiki/Stream_Control_Transmission_Protocol "Stream Control Transmission Protocol") (SCTP).

Selective acknowledgements can be 'reneged', where the receiver unilaterally discards the selectively acknowledged data. [RFC 2018](https://en.wikipedia.org/wiki/#CITEREFRFC_2018) discouraged such behavior, but did not prohibit it to allow receivers the option of reneging if they, for example, ran out of buffer space.[^69] The possibility of reneging leads to implementation complexity for both senders and receivers, and also imposes memory costs on the sender.[^70]

For more efficient use of high-bandwidth networks, a larger TCP window size may be used. A 16-bit TCP window size field controls the flow of data and its value is limited to 65,535 bytes. Since the size field cannot be expanded beyond this limit, a scaling factor is used. The [TCP window scale option](https://en.wikipedia.org/wiki/TCP_window_scale_option "TCP window scale option"), as defined in [RFC 1323](https://en.wikipedia.org/wiki/#CITEREFRFC_1323), is an option used to increase the maximum window size to 1 gigabyte. Scaling up to these larger window sizes is necessary for [TCP tuning](https://en.wikipedia.org/wiki/TCP_tuning "TCP tuning").

The window scale option is used only during the TCP 3-way handshake. The window scale value represents the number of bits to left-shift the 16-bit window size field when interpreting it. The window scale value can be set from 0 (no shift) to 14 for each direction independently. Both sides must send the option in their SYN segments to enable window scaling in either direction.

Some routers and packet firewalls rewrite the window scaling factor during a transmission. This causes sending and receiving sides to assume different TCP window sizes. The result is non-stable traffic that may be very slow. The problem is visible on some sites behind a defective router.[^71]

TCP timestamps, defined in [RFC 1323](https://en.wikipedia.org/wiki/#CITEREFRFC_1323) in 1992, can help TCP determine in which order packets were sent. TCP timestamps are not normally aligned to the system clock and start at some random value. Many operating systems will increment the timestamp for every elapsed millisecond; however, the RFC only states that the ticks should be proportional.

There are two timestamp fields:

- a 4-byte sender timestamp value (my timestamp)
- a 4-byte echo reply timestamp value (the most recent timestamp received from you).

TCP timestamps are used in an algorithm known as *Protection Against Wrapped Sequence* numbers, or *PAWS*. PAWS is used when the receive window crosses the sequence number wraparound boundary. In the case where a packet was potentially retransmitted, it answers the question: "Is this sequence number in the first 4 GB or the second?" And the timestamp is used to break the tie.

Also, the Eifel detection algorithm uses TCP timestamps to determine if retransmissions are occurring because packets are lost or simply out of order.[^72]

TCP timestamps are enabled by default in Linux,[^73] and disabled by default in Windows Server 2008, 2012 and 2016.[^74]

Recent Statistics show that the level of TCP timestamp adoption has stagnated, at ~40%, owing to Windows Server dropping support since Windows Server 2008.[^75]

It is possible to interrupt or abort the queued stream instead of waiting for the stream to finish. This is done by specifying the data as *urgent*. This marks the transmission as [out-of-band data](https://en.wikipedia.org/wiki/Out-of-band_data "Out-of-band data") (OOB) and tells the receiving program to process it immediately. When finished, TCP informs the application and resumes the stream queue. An example is when TCP is used for a remote login session where the user can send a keyboard sequence that interrupts or aborts the remotely running program without waiting for the program to finish its current transfer.[^20]

The *urgent* pointer only alters the processing on the remote host and doesn't expedite any processing on the network itself. The capability is implemented differently or poorly on different systems or may not be supported. Where it is available, it is prudent to assume only single bytes of OOB data will be reliably handled.[^76] [^77] Since the feature is not frequently used, it is not well tested on some platforms and has been associated with [vulnerabilities](https://en.wikipedia.org/wiki/Vulnerability_\(computing\) "Vulnerability (computing)"), [WinNuke](https://en.wikipedia.org/wiki/WinNuke "WinNuke") for instance.

Normally, TCP waits for 200 ms for a full packet of data to send ([Nagle's Algorithm](https://en.wikipedia.org/wiki/Nagle%27s_Algorithm "Nagle's Algorithm") tries to group small messages into a single packet). This wait creates small, but potentially serious delays if repeated constantly during a file transfer. For example, a typical send block would be 4 KB, a typical MSS is 1460, so 2 packets go out on a 10 Mbit/s Ethernet taking ~1.2 ms each followed by a third carrying the remaining 1176 after a 197 ms pause because TCP is waiting for a full buffer. In the case of telnet, each user keystroke is echoed back by the server before the user can see it on the screen. This delay would become very annoying.

Setting the [socket](https://en.wikipedia.org/wiki/Network_socket "Network socket") option `TCP_NODELAY` overrides the default 200 ms send delay. Application programs use this socket option to force output to be sent after writing a character or line of characters.

The [RFC 793](https://en.wikipedia.org/wiki/#CITEREFRFC_793) defines the `PSH` push bit as "a message to the receiving TCP stack to send this data immediately up to the receiving application".[^20] There is no way to indicate or control it in [user space](https://en.wikipedia.org/wiki/User_space "User space") using [Berkeley sockets](https://en.wikipedia.org/wiki/Berkeley_sockets "Berkeley sockets"); it is controlled by the [protocol stack](https://en.wikipedia.org/wiki/Protocol_stack "Protocol stack") only.[^78]

TCP may be attacked in a variety of ways. The results of a thorough security assessment of TCP, along with possible mitigations for the identified issues, were published in 2009,[^79] and was pursued within the [IETF](https://en.wikipedia.org/wiki/IETF "IETF") through 2012.[^80] Notable vulnerabilities include denial of service, connection hijacking, TCP veto and [TCP reset attack](https://en.wikipedia.org/wiki/TCP_reset_attack "TCP reset attack").

By using a [spoofed IP address](https://en.wikipedia.org/wiki/IP_address_spoofing "IP address spoofing") and repeatedly sending [purposely assembled](https://en.wikipedia.org/wiki/Mangled_packet "Mangled packet") SYN packets, followed by many ACK packets, attackers can cause the server to consume large amounts of resources keeping track of the bogus connections. This is known as a [SYN flood](https://en.wikipedia.org/wiki/SYN_flood "SYN flood") attack. Proposed solutions to this problem include [SYN cookies](https://en.wikipedia.org/wiki/SYN_cookies "SYN cookies") and cryptographic puzzles, though SYN cookies come with their own set of vulnerabilities.[^81] [Sockstress](https://en.wikipedia.org/wiki/Sockstress "Sockstress") is a similar attack, that might be mitigated with system resource management.[^82] An advanced DoS attack involving the exploitation of the TCP *persist timer* was analyzed in [Phrack](https://en.wikipedia.org/wiki/Phrack "Phrack") No. 66.[^83] [PUSH and ACK floods](https://en.wikipedia.org/wiki/PUSH_and_ACK_floods "PUSH and ACK floods") are other variants.[^84]

An attacker who is able to eavesdrop on a TCP session and redirect packets can hijack a TCP connection. To do so, the attacker learns the sequence number from the ongoing communication and forges a false segment that looks like the next segment in the stream. A simple hijack can result in one packet being erroneously accepted at one end. When the receiving host acknowledges the false segment, synchronization is lost.[^85] Hijacking may be combined with [ARP spoofing](https://en.wikipedia.org/wiki/ARP_spoofing "ARP spoofing") or other routing attacks that allow an attacker to take permanent control of the TCP connection.

Impersonating a different IP address was not difficult prior to [RFC 1948](https://en.wikipedia.org/wiki/#CITEREFRFC_1948) when the initial *sequence number* was easily guessable. The earlier implementations allowed an attacker to blindly send a sequence of packets that the receiver would believe came from a different IP address, without the need to intercept communication through ARP or routing attacks: it is enough to ensure that the legitimate host of the impersonated IP address is down, or bring it to that condition using [denial-of-service attacks](https://en.wikipedia.org/wiki/Denial-of-service_attack "Denial-of-service attack"). This is why the initial sequence number is now chosen at random.

An attacker who can eavesdrop and predict the size of the next packet to be sent can cause the receiver to accept a malicious payload without disrupting the existing connection. The attacker injects a malicious packet with the sequence number and a payload size of the next expected packet. When the legitimate packet is ultimately received, it is found to have the same sequence number and length as a packet already received and is silently dropped as a normal duplicate packet—the legitimate packet is *vetoed* by the malicious packet. Unlike in connection hijacking, the connection is never desynchronized and communication continues as normal after the malicious payload is accepted. TCP veto gives the attacker less control over the communication but makes the attack particularly resistant to detection. The only evidence to the receiver that something is amiss is a single duplicate packet, a normal occurrence in an IP network. The sender of the vetoed packet never sees any evidence of an attack.[^86]

A TCP connection is identified by a four- [tuple](https://en.wikipedia.org/wiki/Tuple "Tuple") of the source address, source [port](https://en.wikipedia.org/wiki/Port_\(computer_networking\) "Port (computer networking)"), destination address, and destination port.[^4] [^87] [^88] Port numbers are used to identify different services, and to allow multiple connections between hosts.[^21] TCP uses [16-bit](https://en.wikipedia.org/wiki/16-bit "16-bit") port numbers, providing 65,536 possible values for each of the source and destination ports.[^24] The dependency of connection identity on addresses means that TCP connections are bound to a single network path; TCP cannot use other routes that [multihomed hosts](https://en.wikipedia.org/wiki/Multihomed_host "Multihomed host") have available, and connections break if an endpoint's address changes.[^89]

Port numbers are categorized into three basic categories: well-known, registered, and dynamic or private. The well-known ports are assigned by the [Internet Assigned Numbers Authority](https://en.wikipedia.org/wiki/Internet_Assigned_Numbers_Authority "Internet Assigned Numbers Authority") (IANA) and are typically used by system-level processes. Well-known applications running as servers and passively listening for connections typically use these ports. Some examples include: [FTP](https://en.wikipedia.org/wiki/File_Transfer_Protocol "File Transfer Protocol") (20 and 21), [SSH](https://en.wikipedia.org/wiki/Secure_Shell "Secure Shell") (22), [TELNET](https://en.wikipedia.org/wiki/TELNET "TELNET") (23), [SMTP](https://en.wikipedia.org/wiki/SMTP "SMTP") (25), [HTTP over SSL/TLS](https://en.wikipedia.org/wiki/HTTPS "HTTPS") (443), and [HTTP](https://en.wikipedia.org/wiki/HTTP "HTTP") (80).[^5] Registered ports are typically used by end-user applications as [ephemeral](https://en.wikipedia.org/wiki/Ephemeral_port "Ephemeral port") source ports when contacting servers, but they can also identify named services that have been registered by a third party. Dynamic or private ports can also be used by end-user applications, however, these ports typically do not contain any meaning outside a particular TCP connection.

[Network Address Translation](https://en.wikipedia.org/wiki/Network_Address_Translation "Network Address Translation") (NAT), typically uses dynamic port numbers, on the public-facing side, to [disambiguate](https://en.wikipedia.org/wiki/Disambiguation "Disambiguation") the flow of traffic that is passing between a public network and a private [subnetwork](https://en.wikipedia.org/wiki/Subnetwork "Subnetwork"), thereby allowing many IP addresses (and their ports) on the subnet to be serviced by a single public-facing address.

TCP is a complex protocol. However, while significant enhancements have been made and proposed over the years, its most basic operation has not changed significantly since its first specification [RFC 675](https://en.wikipedia.org/wiki/#CITEREFRFC_675) in 1974, and the v4 specification [RFC 793](https://en.wikipedia.org/wiki/#CITEREFRFC_793), published in September 1981. [RFC 1122](https://en.wikipedia.org/wiki/#CITEREFRFC_1122), published in October 1989, clarified a number of TCP protocol implementation requirements. A list of the 8 required specifications and over 20 strongly encouraged enhancements is available in [RFC 7414](https://en.wikipedia.org/wiki/#CITEREFRFC_7414). Among this list is [RFC 2581](https://en.wikipedia.org/wiki/#CITEREFRFC_2581), TCP Congestion Control, one of the most important TCP-related RFCs in recent years, describes updated algorithms that avoid undue congestion. In 2001, [RFC 3168](https://en.wikipedia.org/wiki/#CITEREFRFC_3168) was written to describe [Explicit Congestion Notification](https://en.wikipedia.org/wiki/Explicit_Congestion_Notification "Explicit Congestion Notification") (ECN), a congestion avoidance signaling mechanism.

The original TCP congestion avoidance algorithm was known as *TCP Tahoe*, but many alternative algorithms have since been proposed (including [TCP Reno](https://en.wikipedia.org/wiki/TCP_Reno "TCP Reno"), [TCP Vegas](https://en.wikipedia.org/wiki/TCP_Vegas "TCP Vegas"), [FAST TCP](https://en.wikipedia.org/wiki/FAST_TCP "FAST TCP"), [TCP New Reno](https://en.wikipedia.org/wiki/TCP_New_Reno "TCP New Reno"), and [TCP Hybla](https://en.wikipedia.org/wiki/TCP_Hybla "TCP Hybla")).

[Multipath TCP](https://en.wikipedia.org/wiki/Multipath_TCP "Multipath TCP") (MPTCP) [^90] [^91] is an ongoing effort within the IETF that aims at allowing a TCP connection to use multiple paths to maximize resource usage and increase redundancy. The redundancy offered by Multipath TCP in the context of wireless networks enables the simultaneous use of different networks, which brings higher throughput and better handover capabilities. Multipath TCP also brings performance benefits in datacenter environments.[^92] The reference implementation [^93] of Multipath TCP was developed in the Linux kernel.[^94] Multipath TCP is used to support the Siri voice recognition application on iPhones, iPads and Macs.[^95]

[tcpcrypt](https://en.wikipedia.org/wiki/Tcpcrypt "Tcpcrypt") is an extension proposed in July 2010 to provide transport-level encryption directly in TCP itself. It is designed to work transparently and not require any configuration. Unlike [TLS](https://en.wikipedia.org/wiki/Transport_Layer_Security "Transport Layer Security") (SSL), tcpcrypt itself does not provide authentication, but provides simple primitives down to the application to do that. The tcpcrypt RFC was published by the IETF in May 2019.[^96]

[TCP Fast Open](https://en.wikipedia.org/wiki/TCP_Fast_Open "TCP Fast Open") is an extension to speed up the opening of successive TCP connections between two endpoints. It works by skipping the three-way handshake using a cryptographic *cookie*. It is similar to an earlier proposal called [T/TCP](https://en.wikipedia.org/wiki/T/TCP "T/TCP"), which was not widely adopted due to security issues.[^97] TCP Fast Open was published as [RFC 7413](https://en.wikipedia.org/wiki/#CITEREFRFC_7413) in 2014.[^98]

Proposed in May 2013, [Proportional Rate Reduction](https://en.wikipedia.org/w/index.php?title=Proportional_Rate_Reduction&action=edit&redlink=1 "Proportional Rate Reduction (page does not exist)") (PRR) is a TCP extension developed by Google engineers. PRR ensures that the TCP window size after recovery is as close to the [slow start](https://en.wikipedia.org/wiki/TCP_congestion_control#Slow_start "TCP congestion control") threshold as possible.[^99] The algorithm is designed to improve the speed of recovery and is the default congestion control algorithm in Linux 3.2+ kernels.[^100]

[TCP Cookie Transactions](https://en.wikipedia.org/wiki/TCP_Cookie_Transactions "TCP Cookie Transactions") (TCPCT) is an extension proposed in December 2009 [^101] to secure servers against denial-of-service attacks. Unlike SYN cookies, TCPCT does not conflict with other TCP extensions such as [window scaling](https://en.wikipedia.org/wiki/Window_scaling "Window scaling"). TCPCT was designed due to necessities of [DNSSEC](https://en.wikipedia.org/wiki/DNSSEC "DNSSEC"), where servers have to handle large numbers of short-lived TCP connections. In 2016, TCPCT was [deprecated](https://en.wikipedia.org/wiki/Deprecated "Deprecated") in favor of TCP Fast Open. The status of the original RFC was changed to *historic*.[^102]

One way to overcome the processing power requirements of TCP is to build hardware implementations of it, widely known as [TCP offload engines](https://en.wikipedia.org/wiki/TCP_offload_engine "TCP offload engine") (TOE). The main problem of TOEs is that they are hard to integrate into computing systems, requiring extensive changes in the operating system of the computer or device.

TCP low power (*TCPlp*) has been demonstrated to work in resource constrained environments where otherwise UDP-based [CoAP](https://en.wikipedia.org/wiki/CoAP "CoAP") is preferred.[^103] [^104]

The [wire data](https://en.wikipedia.org/wiki/Wire_data "Wire data") of TCP provides significant information-gathering and modification opportunities to on-path observers, as the protocol metadata is transmitted in [cleartext](https://en.wikipedia.org/wiki/Cleartext "Cleartext").[^105] [^106] While this transparency is useful to network operators [^107] and researchers,[^108] information gathered from protocol metadata may reduce the end-user's privacy.[^109] This visibility and malleability of metadata has led to TCP being difficult to extend—a case of [protocol ossification](https://en.wikipedia.org/wiki/Protocol_ossification "Protocol ossification") —as any intermediate node (a ' [middlebox](https://en.wikipedia.org/wiki/Middlebox "Middlebox") ') can make decisions based on that metadata or even modify it,[^110] breaking the [end-to-end principle](https://en.wikipedia.org/wiki/End-to-end_principle "End-to-end principle").[^111] One measurement found that a third of paths across the Internet encounter at least one intermediary that modifies TCP metadata, and 6.5% of paths encounter harmful ossifying effects from intermediaries.[^112] Avoiding extensibility hazards from intermediaries placed significant constraints on the design of [MPTCP](https://en.wikipedia.org/wiki/MPTCP "MPTCP"),[^113] [^114] and difficulties caused by intermediaries have hindered the deployment of TCP Fast Open in [web browsers](https://en.wikipedia.org/wiki/Web_browsers "Web browsers").[^115] Another source of ossification is the difficulty of modification of TCP functions at the endpoints, typically in the [operating system kernel](https://en.wikipedia.org/wiki/Operating_system_kernel "Operating system kernel") [^116] or in hardware with a [TCP offload engine](https://en.wikipedia.org/wiki/TCP_offload_engine "TCP offload engine").[^117]

As TCP provides applications with the abstraction of a [reliable byte stream](https://en.wikipedia.org/wiki/Reliable_byte_stream "Reliable byte stream"), it can suffer from [head-of-line blocking](https://en.wikipedia.org/wiki/Head-of-line_blocking "Head-of-line blocking"): if [packets are reordered](https://en.wikipedia.org/wiki/Packet_reordering "Packet reordering") or [lost](https://en.wikipedia.org/wiki/Packet_loss "Packet loss") and need to be retransmitted (and thus are reordered), data from sequentially later parts of the stream may be received before sequentially earlier parts of the stream; however, the later data cannot typically be used until the earlier data has been received, incurring [network latency](https://en.wikipedia.org/wiki/Network_latency "Network latency"). If multiple independent higher-level messages are [encapsulated](https://en.wikipedia.org/wiki/Encapsulation_\(networking\) "Encapsulation (networking)") and [multiplexed](https://en.wikipedia.org/wiki/Time-division_multiplexing "Time-division multiplexing") onto a single TCP connection, then head-of-line blocking can cause processing of a fully-received message that was sent later to wait for delivery of a message that was sent earlier.[^118] [Web browsers](https://en.wikipedia.org/wiki/Web_browsers "Web browsers") attempt to mitigate head-of-line blocking by opening multiple parallel connections. This incurs the cost of connection establishment repeatedly, as well as multiplying the resources needed to track those connections at the endpoints.[^119] Parallel connections also have congestion control operating independently of each other, rather than being able to pool information together and respond more promptly to observed network conditions;[^120] TCP's aggressive initial sending patterns can cause congestion if multiple parallel connections are opened; and the per-connection fairness model leads to a monopolization of resources by applications that take this approach.[^121]

Connection establishment is a major contributor to latency as experienced by web users.[^122] [^123] TCP's three-way handshake introduces one RTT of latency during connection establishment before data can be sent.[^123] For short flows, these delays are very significant.[^124] [Transport Layer Security](https://en.wikipedia.org/wiki/Transport_Layer_Security "Transport Layer Security") (TLS) requires a handshake of its own for [key exchange](https://en.wikipedia.org/wiki/Key_exchange "Key exchange") at connection establishment. Because of the layered design, the TCP handshake and the TLS handshake proceed serially; the TLS handshake cannot begin until the TCP handshake has concluded.[^125] Two RTTs are required for connection establishment with [TLS 1.2](https://en.wikipedia.org/wiki/TLS_1.2 "TLS 1.2") over TCP.[^126] [TLS 1.3](https://en.wikipedia.org/wiki/TLS_1.3 "TLS 1.3") allows for zero RTT connection resumption in some circumstances, but, when layered over TCP, one RTT is still required for the TCP handshake, and this cannot assist the initial connection; zero RTT handshakes also present cryptographic challenges, as efficient, [replay-safe](https://en.wikipedia.org/wiki/Replay-safe "Replay-safe") and [forward secure](https://en.wikipedia.org/wiki/Forward_secure "Forward secure") [non-interactive key exchange](https://en.wikipedia.org/wiki/Non-interactive_key_exchange "Non-interactive key exchange") is an open research topic.[^127] TCP Fast Open allows the transmission of data in the initial (i.e., SYN and SYN-ACK) packets, removing one RTT of latency during connection establishment.[^128] However, TCP Fast Open has been difficult to deploy due to protocol ossification; as of 2020, no [Web browsers](https://en.wikipedia.org/wiki/Web_browser "Web browser") used it by default.[^115]

TCP throughput is affected by [packet reordering](https://en.wikipedia.org/wiki/Packet_reordering "Packet reordering"). Reordered packets can cause duplicate acknowledgments to be sent, which, if they cross a threshold, will then trigger a spurious retransmission and congestion control. Transmission behavior can also become bursty, as large ranges are acknowledged all at once when a reordered packet at the range's start is received (in a manner similar to how head-of-line blocking affects applications).[^129] [Blanton & Allman (2002)](https://en.wikipedia.org/wiki/#CITEREFBlantonAllman2002) found that throughput was inversely related to the amount of reordering, up to a threshold where all reordering triggers spurious retransmission.[^130] Mitigating reordering depends on a sender's ability to determine that it has sent a spurious retransmission, and hence on resolving retransmission ambiguity.[^131] Reducing reordering-induced spurious retransmissions may slow recovery from genuine loss.[^132]

Selective acknowledgment can provide a significant benefit to throughput; [Bruyeron, Hemon & Zhang (1998)](https://en.wikipedia.org/wiki/#CITEREFBruyeronHemonZhang1998) measured gains of up to 45%.[^133] An important factor in the improvement is that selective acknowledgment can more often avoid going into slow start after a loss and can hence better use available bandwidth.[^134] However, TCP can only selectively acknowledge a maximum of three blocks of sequence numbers. This can limit the retransmission rate and hence loss recovery or cause needless retransmissions, especially in high-loss environments.[^135] [^136]

TCP was originally designed for wired networks where packet loss is considered to be the result of [network congestion](https://en.wikipedia.org/wiki/Network_congestion "Network congestion") and the congestion window size is reduced dramatically as a precaution. However, wireless links are known to experience sporadic and usually temporary losses due to [fading](https://en.wikipedia.org/wiki/Fading "Fading"), shadowing, hand off, [interference](https://en.wikipedia.org/wiki/Interference_\(communication\) "Interference (communication)"), and other radio effects, that are not strictly congestion. After the (erroneous) back-off of the congestion window size, due to wireless packet loss, there may be a congestion avoidance phase with a conservative decrease in window size. This causes the radio link to be underused. Extensive research on combating these harmful effects has been conducted. Suggested solutions can be categorized as end-to-end solutions, which require modifications at the client or server,[^137] link layer solutions, such as [Radio Link Protocol](https://en.wikipedia.org/wiki/Radio_Link_Protocol "Radio Link Protocol") in cellular networks, or proxy-based solutions which require some changes in the network without modifying end nodes.[^137] [^138] A number of alternative congestion control algorithms, such as [Vegas](https://en.wikipedia.org/wiki/TCP_Vegas "TCP Vegas"), [Westwood](https://en.wikipedia.org/wiki/TCP_Westwood "TCP Westwood"), Veno, and Santa Cruz, have been proposed to help solve the wireless problem.

The idea of a TCP accelerator is to terminate TCP connections inside the network processor and then relay the data to a second connection toward the end system. The data packets that originate from the sender are buffered at the accelerator node, which is responsible for performing local retransmissions in the event of packet loss. Thus, in case of losses, the feedback loop between the sender and the receiver is shortened to the one between the acceleration node and the receiver which guarantees a faster delivery of data to the receiver.[^139]

Since TCP is a rate-adaptive protocol, the rate at which the TCP sender injects packets into the network is directly proportional to the prevailing load condition within the network as well as the processing capacity of the receiver. The prevalent conditions within the network are judged by the sender on the basis of the acknowledgments received by it. The acceleration node splits the feedback loop between the sender and the receiver and thus guarantees a shorter round trip time (RTT) per packet. A shorter RTT is beneficial as it ensures a quicker response time to any changes in the network and a faster adaptation by the sender to combat these changes.

Disadvantages of the method include the fact that the TCP session has to be directed through the accelerator; this means that if routing changes so that the accelerator is no longer in the path, the connection will be broken. It also destroys the end-to-end property of the TCP ACK mechanism; when the ACK is received by the sender, the packet has been stored by the accelerator, not delivered to the receiver.

A [packet sniffer](https://en.wikipedia.org/wiki/Packet_sniffer "Packet sniffer"), which [taps](https://en.wikipedia.org/wiki/Network_tap "Network tap") TCP traffic on a network link, can be useful in debugging networks, network stacks, and applications that use TCP by showing an engineer what packets are passing through a link. Some networking stacks support the SO\_DEBUG socket option, which can be enabled on the socket using setsockopt. That option dumps all the packets, TCP states, and events on that socket, which is helpful in debugging. [Netstat](https://en.wikipedia.org/wiki/Netstat "Netstat") is another utility that can be used for debugging.

For many applications TCP is not appropriate. The application cannot normally access the packets coming after a lost packet until the retransmitted copy of the lost packet is received. This causes problems for real-time applications such as streaming media, real-time multiplayer games and [voice over IP](https://en.wikipedia.org/wiki/Voice_over_IP "Voice over IP") (VoIP) where it is generally more useful to get most of the data in a timely fashion than it is to get all of the data in order.

For historical and performance reasons, most [storage area networks](https://en.wikipedia.org/wiki/Storage_area_network "Storage area network") (SANs) use [Fibre Channel Protocol](https://en.wikipedia.org/wiki/Fibre_Channel_Protocol "Fibre Channel Protocol") (FCP) over [Fibre Channel](https://en.wikipedia.org/wiki/Fibre_Channel "Fibre Channel") connections. For [embedded systems](https://en.wikipedia.org/wiki/Embedded_system "Embedded system"), [network booting](https://en.wikipedia.org/wiki/Network_booting "Network booting"), and servers that serve simple requests from huge numbers of clients (e.g. [DNS](https://en.wikipedia.org/wiki/Domain_name_system "Domain name system") servers) the complexity of TCP can be a problem. Tricks such as transmitting data between two hosts that are both behind [NAT](https://en.wikipedia.org/wiki/Network_address_translation "Network address translation") (using [STUN](https://en.wikipedia.org/wiki/STUN "STUN") or similar systems) are far simpler without a relatively complex protocol like TCP in the way.

Generally, where TCP is unsuitable, the [User Datagram Protocol](https://en.wikipedia.org/wiki/User_Datagram_Protocol "User Datagram Protocol") (UDP) is used. This provides the same application [multiplexing](https://en.wikipedia.org/wiki/Multiplexing "Multiplexing") and checksums that TCP does, but does not handle streams or retransmission, giving the application developer the ability to code them in a way suitable for the situation, or to replace them with other methods such as [forward error correction](https://en.wikipedia.org/wiki/Forward_error_correction "Forward error correction") or [error concealment](https://en.wikipedia.org/wiki/Error_concealment "Error concealment").

[Stream Control Transmission Protocol](https://en.wikipedia.org/wiki/Stream_Control_Transmission_Protocol "Stream Control Transmission Protocol") (SCTP) is another protocol that provides reliable stream-oriented services similar to TCP. It is newer and considerably more complex than TCP, and has not yet seen widespread deployment. However, it is especially designed to be used in situations where reliability and near-real-time considerations are important.

Venturi Transport Protocol (VTP) is a patented [proprietary protocol](https://en.wikipedia.org/wiki/Proprietary_protocol "Proprietary protocol") that is designed to replace TCP transparently to overcome perceived inefficiencies related to wireless data transport.

The [TCP congestion avoidance algorithm](https://en.wikipedia.org/wiki/TCP_congestion_avoidance_algorithm "TCP congestion avoidance algorithm") works very well for ad-hoc environments where the data sender is not known in advance. If the environment is predictable, a timing-based protocol such as [Asynchronous Transfer Mode](https://en.wikipedia.org/wiki/Asynchronous_Transfer_Mode "Asynchronous Transfer Mode") (ATM) can avoid TCP's retransmission overhead.

[UDP-based Data Transfer Protocol](https://en.wikipedia.org/wiki/UDP-based_Data_Transfer_Protocol "UDP-based Data Transfer Protocol") (UDT) has better efficiency and fairness than TCP in networks that have high [bandwidth-delay product](https://en.wikipedia.org/wiki/Bandwidth-delay_product "Bandwidth-delay product").[^140]

[Multipurpose Transaction Protocol](https://en.wikipedia.org/wiki/Multipurpose_Transaction_Protocol "Multipurpose Transaction Protocol") (MTP/IP) is patented proprietary software that is designed to adaptively achieve high throughput and transaction performance in a wide variety of network conditions, particularly those where TCP is perceived to be inefficient.

When TCP runs over [IPv4](https://en.wikipedia.org/wiki/IPv4 "IPv4"), the method used to compute the checksum is defined as follows:[^23]

> *The checksum field is the 16-bit ones' complement of the ones' complement sum of all 16-bit words in the header and text. The checksum computation needs to ensure the 16-bit alignment of the data being summed. If a segment contains an odd number of header and text octets, alignment can be achieved by padding the last octet with zeros on its right to form a 16-bit word for checksum purposes. The pad is not transmitted as part of the segment. While computing the checksum, the checksum field itself is replaced with zeros.*

In other words, after appropriate padding, all 16-bit words are added using [ones' complement arithmetic](https://en.wikipedia.org/wiki/End-around_carry "End-around carry"). The sum is then bitwise complemented and inserted as the checksum field. A pseudo-header that mimics the IPv4 packet header used in the checksum computation is as follows:

<table><caption>TCP pseudo-header for checksum computation (IPv4)</caption><tbody><tr><th><i>Offset</i></th><th><a href="https://en.wikipedia.org/wiki/Octet_(computing)">Octet</a></th><th colspan="8">0</th><th colspan="8">1</th><th colspan="8">2</th><th colspan="8">3</th></tr><tr><th>Octet</th><th><a href="https://en.wikipedia.org/wiki/Bit">Bit</a></th><th>0</th><th>1</th><th>2</th><th>3</th><th>4</th><th>5</th><th>6</th><th>7</th><th>8</th><th>9</th><th>10</th><th>11</th><th>12</th><th>13</th><th>14</th><th>15</th><th>16</th><th>17</th><th>18</th><th>19</th><th>20</th><th>21</th><th>22</th><th>23</th><th>24</th><th>25</th><th>26</th><th>27</th><th>28</th><th>29</th><th>30</th><th>31</th></tr><tr><th>0</th><th>0</th><td colspan="32"><i>Source address</i></td></tr><tr><th>4</th><th>32</th><td colspan="32"><i>Destination address</i></td></tr><tr><th>8</th><th>64</th><td colspan="8"><i>Zeroes</i></td><td colspan="8"><i>Protocol(6)</i></td><td colspan="16"><i>TCP length</i></td></tr><tr><th>12</th><th>96</th><td colspan="16"><i>Source port</i></td><td colspan="16"><i>Destination port</i></td></tr><tr><th>16</th><th>128</th><td colspan="32"><i>Sequence number</i></td></tr><tr><th>20</th><th>160</th><td colspan="32"><i>Acknowledgement number</i></td></tr><tr><th>24</th><th>192</th><td colspan="4"><i>Data offset</i></td><td colspan="4"><i>Reserved</i></td><td colspan="8"><i>Flags</i></td><td colspan="16"><i>Window</i></td></tr><tr><th>28</th><th>224</th><td colspan="16"><i>Checksum</i></td><td colspan="16"><i>Urgent pointer</i></td></tr><tr><th>32</th><th>256</th><td colspan="32"><i>(Options)</i></td></tr><tr><th>36</th><th>288</th><td colspan="32" rowspan="3"><i>Data</i></td></tr><tr><th>40</th><th>320</th></tr><tr><th>⋮</th><th>⋮</th></tr></tbody></table>

The checksum is computed over the following fields:

Source address: 32 bits

The source address in the IPv4 header

Destination address: 32 bits

The destination address in the IPv4 header

Zeroes: 8 bits

All zeroes

Protocol: 8 bits

The protocol value for TCP: 6

TCP length: 16 bits

The length of the TCP header and data (measured in octets). For example, let's say we have IPv4 packet with Total Length of 200 bytes and IHL value of 5, which indicates a length of 5 bits × 32 bits = 160 bits = 20 bytes. We can compute the TCP length as (Total Length) − (IPv4 Header Length) i.e. 200 − 20, which results in 180 bytes.

When TCP runs over [IPv6](https://en.wikipedia.org/wiki/IPv6 "IPv6"), the method used to compute the checksum is changed:[^141]

> *Any transport or other upper-layer protocol that includes the addresses from the IP header in its checksum computation must be modified for use over IPv6, to include the 128-bit IPv6 addresses instead of 32-bit IPv4 addresses.*

A pseudo-header that mimics the IPv6 header for computation of the checksum is shown below.

<table><caption>TCP pseudo-header for checksum computation (IPv6)</caption><tbody><tr><th><i>Offset</i></th><th><a href="https://en.wikipedia.org/wiki/Octet_(computing)">Octet</a></th><th colspan="8">0</th><th colspan="8">1</th><th colspan="8">2</th><th colspan="8">3</th></tr><tr><th>Octet</th><th><a href="https://en.wikipedia.org/wiki/Bit">Bit</a></th><th>0</th><th>1</th><th>2</th><th>3</th><th>4</th><th>5</th><th>6</th><th>7</th><th>8</th><th>9</th><th>10</th><th>11</th><th>12</th><th>13</th><th>14</th><th>15</th><th>16</th><th>17</th><th>18</th><th>19</th><th>20</th><th>21</th><th>22</th><th>23</th><th>24</th><th>25</th><th>26</th><th>27</th><th>28</th><th>29</th><th>30</th><th>31</th></tr><tr><th>0</th><th>0</th><td colspan="32" rowspan="4"><i>Source address</i></td></tr><tr><th>4</th><th>32</th></tr><tr><th>8</th><th>64</th></tr><tr><th>12</th><th>96</th></tr><tr><th>16</th><th>128</th><td colspan="32" rowspan="4"><i>Destination address</i></td></tr><tr><th>20</th><th>160</th></tr><tr><th>24</th><th>192</th></tr><tr><th>28</th><th>224</th></tr><tr><th>32</th><th>256</th><td colspan="32"><i>TCP length</i></td></tr><tr><th>36</th><th>288</th><td colspan="24"><i>Zeroes</i></td><td colspan="8"><i>Next header(6)</i></td></tr><tr><th>40</th><th>320</th><td colspan="16"><i>Source port</i></td><td colspan="16"><i>Destination port</i></td></tr><tr><th>44</th><th>352</th><td colspan="32"><i>Sequence number</i></td></tr><tr><th>48</th><th>384</th><td colspan="32"><i>Acknowledgement number</i></td></tr><tr><th>52</th><th>416</th><td colspan="4"><i>Data offset</i></td><td colspan="4"><i>Reserved</i></td><td colspan="8"><i>Flags</i></td><td colspan="16"><i>Window</i></td></tr><tr><th>56</th><th>448</th><td colspan="16"><i>Checksum</i></td><td colspan="16"><i>Urgent pointer</i></td></tr><tr><th>60</th><th>480</th><td colspan="32"><i>(Options)</i></td></tr><tr><th>64</th><th>512</th><td colspan="32" rowspan="3"><i>Data</i></td></tr><tr><th>68</th><th>544</th></tr><tr><th>⋮</th><th>⋮</th></tr></tbody></table>

The checksum is computed over the following fields:

Source address: 128 bits

The address in the IPv6 header.

Destination address: 128 bits

The final destination; if the IPv6 packet doesn't contain a Routing header, TCP uses the destination address in the IPv6 header, otherwise, at the originating node, it uses the address in the last element of the Routing header, and, at the receiving node, it uses the destination address in the IPv6 header.

TCP length: 32 bits

The length of the TCP header and data (measured in octets).

Zeroes: 24 bits; `Zeroes == 0`

All zeroes.

Next header: 8 bits

The protocol value for TCP: 6.

Many TCP/IP software stack implementations provide options to use hardware assistance to automatically compute the checksum in the [network adapter](https://en.wikipedia.org/wiki/Network_adapter "Network adapter") prior to transmission onto the network or upon reception from the network for validation. This may reduce CPU load associated with calculating the checksum, potentially increasing overall network performance.

This feature may cause [packet analyzers](https://en.wikipedia.org/wiki/Packet_analyzer "Packet analyzer") that are unaware or uncertain about the use of checksum offload to report invalid checksums in outbound packets that have not yet reached the network adapter.[^142] This will only occur for packets that are intercepted before being transmitted by the network adapter; all packets transmitted by the network adaptor on the wire will have valid checksums.[^143] This issue can also occur when monitoring packets being transmitted between virtual machines on the same host, where a virtual device driver may omit the checksum calculation (as an optimization), knowing that the checksum will be calculated later by the VM host kernel or its physical hardware.

- [Cerf, Vint](https://en.wikipedia.org/wiki/Vint_Cerf "Vint Cerf"); [Dalal, Yogen](https://en.wikipedia.org/wiki/Yogen_Dalal "Yogen Dalal"); Sunshine, Carl (December 1974). [*Specification of Internet Transmission Control Program, December 1974 Version*](https://www.rfc-editor.org/rfc/rfc675). [doi](https://en.wikipedia.org/wiki/Doi_\(identifier\) "Doi (identifier)"):[10.17487/RFC0675](https://doi.org/10.17487%2FRFC0675). [RFC](https://en.wikipedia.org/wiki/Request_for_Comments "Request for Comments") [675](https://datatracker.ietf.org/doc/html/rfc675).
- [Postel, Jon](https://en.wikipedia.org/wiki/Jon_Postel "Jon Postel") (September 1981). [*Internet Protocol*](https://www.rfc-editor.org/rfc/rfc791). [doi](https://en.wikipedia.org/wiki/Doi_\(identifier\) "Doi (identifier)"):[10.17487/RFC0791](https://doi.org/10.17487%2FRFC0791). [RFC](https://en.wikipedia.org/wiki/Request_for_Comments "Request for Comments") [791](https://datatracker.ietf.org/doc/html/rfc791).
- [Postel, Jon](https://en.wikipedia.org/wiki/Jon_Postel "Jon Postel") (September 1981). [*Transmission Control Protocol*](https://www.rfc-editor.org/rfc/rfc793). [doi](https://en.wikipedia.org/wiki/Doi_\(identifier\) "Doi (identifier)"):[10.17487/RFC0793](https://doi.org/10.17487%2FRFC0793). [RFC](https://en.wikipedia.org/wiki/Request_for_Comments "Request for Comments") [793](https://datatracker.ietf.org/doc/html/rfc793).
- [Braden, Robert](https://en.wikipedia.org/wiki/Robert_Braden "Robert Braden"), ed. (October 1989). [*Requirements for Internet Hosts – Communication Layers*](https://www.rfc-editor.org/rfc/rfc1122). [doi](https://en.wikipedia.org/wiki/Doi_\(identifier\) "Doi (identifier)"):[10.17487/RFC1122](https://doi.org/10.17487%2FRFC1122). [RFC](https://en.wikipedia.org/wiki/Request_for_Comments "Request for Comments") [1122](https://datatracker.ietf.org/doc/html/rfc1122).
- [Jacobson, Van](https://en.wikipedia.org/wiki/Van_Jacobson "Van Jacobson"); [Braden, Bob](https://en.wikipedia.org/wiki/Robert_Braden "Robert Braden"); Borman, Dave (May 1992). [*TCP Extensions for High Performance*](https://www.rfc-editor.org/rfc/rfc1323). [doi](https://en.wikipedia.org/wiki/Doi_\(identifier\) "Doi (identifier)"):[10.17487/RFC1323](https://doi.org/10.17487%2FRFC1323). [RFC](https://en.wikipedia.org/wiki/Request_for_Comments "Request for Comments") [1323](https://datatracker.ietf.org/doc/html/rfc1323).
- [Bellovin, Steven M.](https://en.wikipedia.org/wiki/Steven_M._Bellovin "Steven M. Bellovin") (May 1996). [*Defending Against Sequence Number Attacks*](https://www.rfc-editor.org/rfc/rfc1948). [doi](https://en.wikipedia.org/wiki/Doi_\(identifier\) "Doi (identifier)"):[10.17487/RFC1948](https://doi.org/10.17487%2FRFC1948). [RFC](https://en.wikipedia.org/wiki/Request_for_Comments "Request for Comments") [1948](https://datatracker.ietf.org/doc/html/rfc1948).
- Mathis, Matt; Mahdavi, Jamshid; Floyd, Sally; Romanow, Allyn (October 1996). [*TCP Selective Acknowledgment Options*](https://www.rfc-editor.org/rfc/rfc2018). [doi](https://en.wikipedia.org/wiki/Doi_\(identifier\) "Doi (identifier)"):[10.17487/RFC2018](https://doi.org/10.17487%2FRFC2018). [RFC](https://en.wikipedia.org/wiki/Request_for_Comments "Request for Comments") [2018](https://datatracker.ietf.org/doc/html/rfc2018).
- Allman, Mark; [Paxson, Vern](https://en.wikipedia.org/wiki/Vern_Paxson "Vern Paxson"); [Stevens, W. Richard](https://en.wikipedia.org/wiki/W._Richard_Stevens "W. Richard Stevens") (April 1999). [*TCP Congestion Control*](https://www.rfc-editor.org/rfc/rfc2581). [doi](https://en.wikipedia.org/wiki/Doi_\(identifier\) "Doi (identifier)"):[10.17487/RFC2581](https://doi.org/10.17487%2FRFC2581). [RFC](https://en.wikipedia.org/wiki/Request_for_Comments "Request for Comments") [2581](https://datatracker.ietf.org/doc/html/rfc2581).
- [Floyd, Sally](https://en.wikipedia.org/wiki/Sally_Floyd "Sally Floyd"); Mahdavi, Jamshid; Mathis, Matt; Podolsky, Matthew (July 2000). [*An Extension to the Selective Acknowledgement (SACK) Option for TCP*](https://www.rfc-editor.org/rfc/rfc2883). [doi](https://en.wikipedia.org/wiki/Doi_\(identifier\) "Doi (identifier)"):[10.17487/RFC2883](https://doi.org/10.17487%2FRFC2883). [RFC](https://en.wikipedia.org/wiki/Request_for_Comments "Request for Comments") [2883](https://datatracker.ietf.org/doc/html/rfc2883).
- Ramakrishnan, K. K.; [Floyd, Sally](https://en.wikipedia.org/wiki/Sally_Floyd "Sally Floyd"); Black, David (September 2001). [*The Addition of Explicit Congestion Notification (ECN) to IP*](https://www.rfc-editor.org/rfc/rfc3168). [doi](https://en.wikipedia.org/wiki/Doi_\(identifier\) "Doi (identifier)"):[10.17487/RFC3168](https://doi.org/10.17487%2FRFC3168). [RFC](https://en.wikipedia.org/wiki/Request_for_Comments "Request for Comments") [3168](https://datatracker.ietf.org/doc/html/rfc3168).
- Ludwig, Reiner; Meyer, Michael (April 2003). [*The Eifel Detection Algorithm for TCP*](https://www.rfc-editor.org/rfc/rfc3522). [doi](https://en.wikipedia.org/wiki/Doi_\(identifier\) "Doi (identifier)"):[10.17487/RFC3522](https://doi.org/10.17487%2FRFC3522). [RFC](https://en.wikipedia.org/wiki/Request_for_Comments "Request for Comments") [3522](https://datatracker.ietf.org/doc/html/rfc3522).
- Spring, Neil; Weatherall, David; Ely, David (June 2003). [*Robust Explicit Congestion Notification (ECN) Signaling with Nonces*](https://www.rfc-editor.org/rfc/rfc3540). [doi](https://en.wikipedia.org/wiki/Doi_\(identifier\) "Doi (identifier)"):[10.17487/RFC3540](https://doi.org/10.17487%2FRFC3540). [RFC](https://en.wikipedia.org/wiki/Request_for_Comments "Request for Comments") [3540](https://datatracker.ietf.org/doc/html/rfc3540).
- Allman, Mark; [Paxson, Vern](https://en.wikipedia.org/wiki/Vern_Paxson "Vern Paxson"); Blanton, Ethan (September 2009). [*TCP Congestion Control*](https://www.rfc-editor.org/rfc/rfc5681). [doi](https://en.wikipedia.org/wiki/Doi_\(identifier\) "Doi (identifier)"):[10.17487/RFC5681](https://doi.org/10.17487%2FRFC5681). [RFC](https://en.wikipedia.org/wiki/Request_for_Comments "Request for Comments") [5681](https://datatracker.ietf.org/doc/html/rfc5681).
- Simpson, William Allen (January 2011). [*TCP Cookie Transactions (TCPCT)*](https://www.rfc-editor.org/rfc/rfc6013). [doi](https://en.wikipedia.org/wiki/Doi_\(identifier\) "Doi (identifier)"):[10.17487/RFC6013](https://doi.org/10.17487%2FRFC6013). [RFC](https://en.wikipedia.org/wiki/Request_for_Comments "Request for Comments") [6013](https://datatracker.ietf.org/doc/html/rfc6013).
- Ford, Alan; Raiciu, Costin; [Handley, Mark](https://en.wikipedia.org/wiki/Mark_Handley_\(computer_scientist\) "Mark Handley (computer scientist)"); Barre, Sebastien; Iyengar, Janardhan (March 2011). [*Architectural Guidelines for Multipath TCP Development*](https://www.rfc-editor.org/rfc/rfc6182). [doi](https://en.wikipedia.org/wiki/Doi_\(identifier\) "Doi (identifier)"):[10.17487/RFC6182](https://doi.org/10.17487%2FRFC6182). [RFC](https://en.wikipedia.org/wiki/Request_for_Comments "Request for Comments") [6182](https://datatracker.ietf.org/doc/html/rfc6182).
- [Paxson, Vern](https://en.wikipedia.org/wiki/Vern_Paxson "Vern Paxson"); Allman, Mark; Chu, H.K. Jerry; Sargent, Matt (June 2011). [*Computing TCP's Retransmission Timer*](https://www.rfc-editor.org/rfc/rfc6298). [doi](https://en.wikipedia.org/wiki/Doi_\(identifier\) "Doi (identifier)"):[10.17487/RFC6298](https://doi.org/10.17487%2FRFC6298). [RFC](https://en.wikipedia.org/wiki/Request_for_Comments "Request for Comments") [6298](https://datatracker.ietf.org/doc/html/rfc6298).
- Ford, Alan; Raiciu, Costin; [Handley, Mark](https://en.wikipedia.org/wiki/Mark_Handley_\(computer_scientist\) "Mark Handley (computer scientist)"); Bonaventure, Olivier (January 2013). [*TCP Extensions for Multipath Operation with Multiple Addresses*](https://www.rfc-editor.org/rfc/rfc6824). [doi](https://en.wikipedia.org/wiki/Doi_\(identifier\) "Doi (identifier)"):[10.17487/RFC6824](https://doi.org/10.17487%2FRFC6824). [RFC](https://en.wikipedia.org/wiki/Request_for_Comments "Request for Comments") [6824](https://datatracker.ietf.org/doc/html/rfc6824).
- Mathis, Matt; Dukkipati, Nandita; Cheng, Yuchung (May 2013). [*Proportional Rate Reduction for TCP*](https://www.rfc-editor.org/rfc/rfc6937). [doi](https://en.wikipedia.org/wiki/Doi_\(identifier\) "Doi (identifier)"):[10.17487/RFC6937](https://doi.org/10.17487%2FRFC6937). [RFC](https://en.wikipedia.org/wiki/Request_for_Comments "Request for Comments") [6937](https://datatracker.ietf.org/doc/html/rfc6937).
- Borman, David; [Braden, Bob](https://en.wikipedia.org/wiki/Bob_Braden "Bob Braden"); [Jacobson, Van](https://en.wikipedia.org/wiki/Van_Jacobson "Van Jacobson") (September 2014). Scheffenegger, Richard (ed.). [*TCP Extensions for High Performance*](https://www.rfc-editor.org/rfc/rfc7323). [doi](https://en.wikipedia.org/wiki/Doi_\(identifier\) "Doi (identifier)"):[10.17487/RFC7323](https://doi.org/10.17487%2FRFC7323). [RFC](https://en.wikipedia.org/wiki/Request_for_Comments "Request for Comments") [7323](https://datatracker.ietf.org/doc/html/rfc7323).
- Duke, Martin; [Braden, Robert](https://en.wikipedia.org/wiki/Robert_Braden "Robert Braden"); Eddy, Wesley M.; Blanton, Ethan; Zimmermann, Alexander (February 2015). [*A Roadmap for Transmission Control Protocol (TCP) Specification Documents*](https://www.rfc-editor.org/rfc/rfc7414). [doi](https://en.wikipedia.org/wiki/Doi_\(identifier\) "Doi (identifier)"):[10.17487/RFC7414](https://doi.org/10.17487%2FRFC7414). [RFC](https://en.wikipedia.org/wiki/Request_for_Comments "Request for Comments") [7414](https://datatracker.ietf.org/doc/html/rfc7414).
- Cheng, Yuchung; Chu, Jerry; Radhakrishnan, Sivasankar; Jain, Arvind (December 2014). [*TCP Fast Open*](https://www.rfc-editor.org/rfc/rfc7413). [doi](https://en.wikipedia.org/wiki/Doi_\(identifier\) "Doi (identifier)"):[10.17487/RFC7413](https://doi.org/10.17487%2FRFC7413). [RFC](https://en.wikipedia.org/wiki/Request_for_Comments "Request for Comments") [7413](https://datatracker.ietf.org/doc/html/rfc7413).
- Zimmermann, Alexander; Eddy, Wesley M.; Eggert, Lars (April 2016). [*Moving Outdated TCP Extensions and TCP-Related Documents to Historic or Informational Status*](https://www.rfc-editor.org/rfc/rfc7805). [doi](https://en.wikipedia.org/wiki/Doi_\(identifier\) "Doi (identifier)"):[10.17487/RFC7805](https://doi.org/10.17487%2FRFC7805). [RFC](https://en.wikipedia.org/wiki/Request_for_Comments "Request for Comments") [7805](https://datatracker.ietf.org/doc/html/rfc7805).
- Fairhurst, Gorry; Trammell, Brian; Kuehlewind, Mirja, eds. (March 2017). [*Services Provided by IETF Transport Protocols and Congestion Control Mechanisms*](https://www.rfc-editor.org/rfc/rfc8095). [doi](https://en.wikipedia.org/wiki/Doi_\(identifier\) "Doi (identifier)"):[10.17487/RFC8095](https://doi.org/10.17487%2FRFC8095). [RFC](https://en.wikipedia.org/wiki/Request_for_Comments "Request for Comments") [8095](https://datatracker.ietf.org/doc/html/rfc8095).
- Cheng, Yuchung; Cardwell, Neal; Dukkipati, Nandita; Jha, Priyaranjan, eds. (February 2021). [*The RACK-TLP Loss Detection Algorithm for TCP*](https://www.rfc-editor.org/rfc/rfc8985). [doi](https://en.wikipedia.org/wiki/Doi_\(identifier\) "Doi (identifier)"):[10.17487/RFC8985](https://doi.org/10.17487%2FRFC8985). [RFC](https://en.wikipedia.org/wiki/Request_for_Comments "Request for Comments") [8985](https://datatracker.ietf.org/doc/html/rfc8985).
- [Deering, Stephen E.](https://en.wikipedia.org/wiki/Stephen_Deering "Stephen Deering"); Hinden, Robert M. (July 2017). [*Internet Protocol, Version 6 (IPv6) Specification*](https://www.rfc-editor.org/rfc/rfc8200). [doi](https://en.wikipedia.org/wiki/Doi_\(identifier\) "Doi (identifier)"):[10.17487/RFC8200](https://doi.org/10.17487%2FRFC8200). [RFC](https://en.wikipedia.org/wiki/Request_for_Comments "Request for Comments") [8200](https://datatracker.ietf.org/doc/html/rfc8200).
- Trammell, Brian; Kuehlewind, Mirja (April 2019). [*The Wire Image of a Network Protocol*](https://www.rfc-editor.org/rfc/rfc8546). [doi](https://en.wikipedia.org/wiki/Doi_\(identifier\) "Doi (identifier)"):[10.17487/RFC8546](https://doi.org/10.17487%2FRFC8546). [RFC](https://en.wikipedia.org/wiki/Request_for_Comments "Request for Comments") [8546](https://datatracker.ietf.org/doc/html/rfc8546).
- Hardie, Ted, ed. (April 2019). [*Transport Protocol Path Signals*](https://www.rfc-editor.org/rfc/rfc8558). [doi](https://en.wikipedia.org/wiki/Doi_\(identifier\) "Doi (identifier)"):[10.17487/RFC8558](https://doi.org/10.17487%2FRFC8558). [RFC](https://en.wikipedia.org/wiki/Request_for_Comments "Request for Comments") [8558](https://datatracker.ietf.org/doc/html/rfc8558).
- Iyengar, Jana; Swett, Ian, eds. (May 2021). [*QUIC Loss Detection and Congestion Control*](https://www.rfc-editor.org/rfc/rfc9002). [doi](https://en.wikipedia.org/wiki/Doi_\(identifier\) "Doi (identifier)"):[10.17487/RFC9002](https://doi.org/10.17487%2FRFC9002). [RFC](https://en.wikipedia.org/wiki/Request_for_Comments "Request for Comments") [9002](https://datatracker.ietf.org/doc/html/rfc9002).
- Fairhurst, Gorry; Perkins, Colin (July 2021). [*Considerations around Transport Header Confidentiality, Network Operations, and the Evolution of Internet Transport Protocols*](https://www.rfc-editor.org/rfc/rfc9065). [doi](https://en.wikipedia.org/wiki/Doi_\(identifier\) "Doi (identifier)"):[10.17487/RFC9065](https://doi.org/10.17487%2FRFC9065). [RFC](https://en.wikipedia.org/wiki/Request_for_Comments "Request for Comments") [9065](https://datatracker.ietf.org/doc/html/rfc9065).
- Thomson, Martin; Pauly, Tommy (December 2021). [*Long-Term Viability of Protocol Extension Mechanisms*](https://www.rfc-editor.org/rfc/rfc9170). [doi](https://en.wikipedia.org/wiki/Doi_\(identifier\) "Doi (identifier)"):[10.17487/RFC9170](https://doi.org/10.17487%2FRFC9170). [RFC](https://en.wikipedia.org/wiki/Request_for_Comments "Request for Comments") [9170](https://datatracker.ietf.org/doc/html/rfc9170).
- Eddy, Wesley M., ed. (August 2022). [*Transmission Control Protocol (TCP)*](https://www.rfc-editor.org/rfc/rfc9293). [doi](https://en.wikipedia.org/wiki/Doi_\(identifier\) "Doi (identifier)"):[10.17487/RFC9293](https://doi.org/10.17487%2FRFC9293). [RFC](https://en.wikipedia.org/wiki/Request_for_Comments "Request for Comments") [9293](https://datatracker.ietf.org/doc/html/rfc9293).
- Allman, Mark; [Paxson, Vern](https://en.wikipedia.org/wiki/Vern_Paxson "Vern Paxson") (October 1999). ["On estimating end-to-end network path properties"](https://doi.org/10.1145%2F316194.316230). *ACM SIGCOMM Computer Communication Review*. **29** (4): 263– 274. [doi](https://en.wikipedia.org/wiki/Doi_\(identifier\) "Doi (identifier)"):[10.1145/316194.316230](https://doi.org/10.1145%2F316194.316230). [hdl](https://en.wikipedia.org/wiki/Hdl_\(identifier\) "Hdl (identifier)"):[2060/20000004338](https://hdl.handle.net/2060%2F20000004338).
- Bhat, Divyashri; Rizk, Amr; Zink, Michael (June 2017). "Not so QUIC: A Performance Study of DASH over QUIC". *NOSSDAV'17: Proceedings of the 27th Workshop on Network and Operating Systems Support for Digital Audio and Video*. pp. 13– 18. [doi](https://en.wikipedia.org/wiki/Doi_\(identifier\) "Doi (identifier)"):[10.1145/3083165.3083175](https://doi.org/10.1145%2F3083165.3083175). [S2CID](https://en.wikipedia.org/wiki/S2CID_\(identifier\) "S2CID (identifier)") [32671949](https://api.semanticscholar.org/CorpusID:32671949).
- Blanton, Ethan; Allman, Mark (January 2002). ["On making TCP more robust to packet reordering"](https://www.icir.org/mallman/pubs/BA02/BA02.pdf) (PDF). *ACM SIGCOMM Computer Communication Review*. **32**: 20– 30. [doi](https://en.wikipedia.org/wiki/Doi_\(identifier\) "Doi (identifier)"):[10.1145/510726.510728](https://doi.org/10.1145%2F510726.510728). [S2CID](https://en.wikipedia.org/wiki/S2CID_\(identifier\) "S2CID (identifier)") [15305731](https://api.semanticscholar.org/CorpusID:15305731).
- Briscoe, Bob; Brunstrom, Anna; Petlund, Andreas; Hayes, David; Ros, David; Tsang, Ing-Jyh; Gjessing, Stein; Fairhurst, Gorry; Griwodz, Carsten; Welzl, Michael (2016). "Reducing Internet Latency: A Survey of Techniques and Their Merits". *[IEEE Communications Surveys & Tutorials](https://en.wikipedia.org/wiki/IEEE_Communications_Surveys_%26_Tutorials "IEEE Communications Surveys & Tutorials")*. **18** (3): 2149– 2196. [doi](https://en.wikipedia.org/wiki/Doi_\(identifier\) "Doi (identifier)"):[10.1109/COMST.2014.2375213](https://doi.org/10.1109%2FCOMST.2014.2375213). [hdl](https://en.wikipedia.org/wiki/Hdl_\(identifier\) "Hdl (identifier)"):[2164/8018](https://hdl.handle.net/2164%2F8018). [S2CID](https://en.wikipedia.org/wiki/S2CID_\(identifier\) "S2CID (identifier)") [206576469](https://api.semanticscholar.org/CorpusID:206576469).
- Bruyeron, Renaud; Hemon, Bruno; Zhang, Lixa (April 1998). "Experimentations with TCP selective acknowledgment". *ACM SIGCOMM Computer Communication Review*. **28** (2): 54– 77. [doi](https://en.wikipedia.org/wiki/Doi_\(identifier\) "Doi (identifier)"):[10.1145/279345.279350](https://doi.org/10.1145%2F279345.279350). [S2CID](https://en.wikipedia.org/wiki/S2CID_\(identifier\) "S2CID (identifier)") [15954837](https://api.semanticscholar.org/CorpusID:15954837).
- Chen, Shan; Jero, Samuel; Jagielski, Matthew; Boldyreva, Alexandra; Nita-Rotaru, Cristina (2021). ["Secure Communication Channel Establishment: TLS 1.3 (Over TCP Fast Open) versus QUIC"](https://doi.org/10.1007%2Fs00145-021-09389-w). *[Journal of Cryptology](https://en.wikipedia.org/wiki/Journal_of_Cryptology "Journal of Cryptology")*. **34** (3) 26. [doi](https://en.wikipedia.org/wiki/Doi_\(identifier\) "Doi (identifier)"):[10.1007/s00145-021-09389-w](https://doi.org/10.1007%2Fs00145-021-09389-w). [S2CID](https://en.wikipedia.org/wiki/S2CID_\(identifier\) "S2CID (identifier)") [235174220](https://api.semanticscholar.org/CorpusID:235174220).
- Corbet, Jonathan (8 December 2015). ["Checksum offloads and protocol ossification"](https://lwn.net/Articles/667059/). *[LWN.net](https://en.wikipedia.org/wiki/LWN.net "LWN.net")*.
- Corbet, Jonathan (29 January 2018). ["QUIC as a solution to protocol ossification"](https://lwn.net/Articles/745590/). *[LWN.net](https://en.wikipedia.org/wiki/LWN.net "LWN.net")*.
- Edeline, Korian; Donnet, Benoit (2019). *A Bottom-Up Investigation of the Transport-Layer Ossification*. 2019 Network Traffic Measurement and Analysis Conference (TMA). [doi](https://en.wikipedia.org/wiki/Doi_\(identifier\) "Doi (identifier)"):[10.23919/TMA.2019.8784690](https://doi.org/10.23919%2FTMA.2019.8784690).
- Ghedini, Alessandro (26 July 2018). ["The Road to QUIC"](https://blog.cloudflare.com/the-road-to-quic/). *The Cloudflare Blog*. [Cloudflare](https://en.wikipedia.org/wiki/Cloudflare "Cloudflare").
- Gurtov, Andrei; [Floyd, Sally](https://en.wikipedia.org/wiki/Sally_Floyd "Sally Floyd") (February 2004). [*Resolving Acknowledgment Ambiguity in non-SACK TCP*](https://www.cs.helsinki.fi/u/gurtov/papers/heuristics.pdf) (PDF). Next Generation Teletraffic and Wired/Wireless Advanced Networking (NEW2AN'04).
- Gurtov, Andrei; Ludwig, Reiner (2003). [*Responding to Spurious Timeouts in TCP*](https://www.cs.helsinki.fi/u/gurtov/papers/infocom03.pdf) (PDF). IEEE INFOCOM 2003. Twenty-second Annual Joint Conference of the IEEE Computer and Communications Societies. [doi](https://en.wikipedia.org/wiki/Doi_\(identifier\) "Doi (identifier)"):[10.1109/INFCOM.2003.1209251](https://doi.org/10.1109%2FINFCOM.2003.1209251).
- Hesmans, Benjamin; Duchene, Fabien; Paasch, Christoph; Detal, Gregory; Bonaventure, Olivier (2013). *Are TCP extensions middlebox-proof?*. HotMiddlebox '13. [CiteSeerX](https://en.wikipedia.org/wiki/CiteSeerX_\(identifier\) "CiteSeerX (identifier)") [10.1.1.679.6364](https://citeseerx.ist.psu.edu/viewdoc/summary?doi=10.1.1.679.6364). [doi](https://en.wikipedia.org/wiki/Doi_\(identifier\) "Doi (identifier)"):[10.1145/2535828.2535830](https://doi.org/10.1145%2F2535828.2535830).
- IETF HTTP Working Group. ["HTTP/2 Frequently Asked Questions"](https://http2.github.io/faq/).
- [Karn, Phil](https://en.wikipedia.org/wiki/Phil_Karn "Phil Karn"); [Partridge, Craig](https://en.wikipedia.org/wiki/Craig_Partridge "Craig Partridge") (November 1991). ["Improving round-trip time estimates in reliable transport protocols"](https://doi.org/10.1145%2F118544.118549). *ACM Transactions on Computer Systems*. **9** (4): 364– 373. [doi](https://en.wikipedia.org/wiki/Doi_\(identifier\) "Doi (identifier)"):[10.1145/118544.118549](https://doi.org/10.1145%2F118544.118549).
- Ludwig, Reiner; [Katz, Randy Howard](https://en.wikipedia.org/wiki/Randy_Katz "Randy Katz") (January 2000). ["The Eifel algorithm: making TCP robust against spurious retransmissions"](https://doi.org/10.1145%2F505688.505692). *ACM SIGCOMM Computer Communication Review*. [doi](https://en.wikipedia.org/wiki/Doi_\(identifier\) "Doi (identifier)"):[10.1145/505688.505692](https://doi.org/10.1145%2F505688.505692).
- Marx, Robin (3 December 2020). ["Head-of-Line Blocking in QUIC and HTTP/3: The Details"](https://calendar.perfplanet.com/2020/head-of-line-blocking-in-quic-and-http-3-the-details/).
- Paasch, Christoph; Bonaventure, Olivier (1 April 2014). "Multipath TCP". *[Communications of the ACM](https://en.wikipedia.org/wiki/Communications_of_the_ACM "Communications of the ACM")*. **57** (4): 51– 57. [doi](https://en.wikipedia.org/wiki/Doi_\(identifier\) "Doi (identifier)"):[10.1145/2578901](https://doi.org/10.1145%2F2578901). [hdl](https://en.wikipedia.org/wiki/Hdl_\(identifier\) "Hdl (identifier)"):[2078.1/141195](https://hdl.handle.net/2078.1%2F141195). [S2CID](https://en.wikipedia.org/wiki/S2CID_\(identifier\) "S2CID (identifier)") [17581886](https://api.semanticscholar.org/CorpusID:17581886).
- Papastergiou, Giorgos; Fairhurst, Gorry; Ros, David; Brunstrom, Anna; Grinnemo, Karl-Johan; Hurtig, Per; Khademi, Naeem; Tüxen, Michael; Welzl, Michael; Damjanovic, Dragana; Mangiante, Simone (2017). "De-Ossifying the Internet Transport Layer: A Survey and Future Perspectives". *[IEEE Communications Surveys & Tutorials](https://en.wikipedia.org/wiki/IEEE_Communications_Surveys_%26_Tutorials "IEEE Communications Surveys & Tutorials")*. **19**: 619– 639. [doi](https://en.wikipedia.org/wiki/Doi_\(identifier\) "Doi (identifier)"):[10.1109/COMST.2016.2626780](https://doi.org/10.1109%2FCOMST.2016.2626780). [hdl](https://en.wikipedia.org/wiki/Hdl_\(identifier\) "Hdl (identifier)"):[2164/8317](https://hdl.handle.net/2164%2F8317). [S2CID](https://en.wikipedia.org/wiki/S2CID_\(identifier\) "S2CID (identifier)") [1846371](https://api.semanticscholar.org/CorpusID:1846371).
- Rybczyńska, Marta (13 March 2020). ["A QUIC look at HTTP/3"](https://lwn.net/Articles/814522/). *[LWN.net](https://en.wikipedia.org/wiki/LWN.net "LWN.net")*.
- Sy, Erik; Mueller, Tobias; Burkert, Christian; Federrath, Hannes; Fischer, Mathias (2020). ["Enhanced Performance and Privacy for TLS over TCP Fast Open"](https://doi.org/10.2478%2Fpopets-2020-0027). *Proceedings on Privacy Enhancing Technologies*. **2020** (2): 271– 287. [arXiv](https://en.wikipedia.org/wiki/ArXiv_\(identifier\) "ArXiv (identifier)"):[1905.03518](https://arxiv.org/abs/1905.03518). [doi](https://en.wikipedia.org/wiki/Doi_\(identifier\) "Doi (identifier)"):[10.2478/popets-2020-0027](https://doi.org/10.2478%2Fpopets-2020-0027).
- [Zhang, Lixia](https://en.wikipedia.org/wiki/Lixia_Zhang "Lixia Zhang") (5 August 1986). "Why TCP timers don't work well". *ACM SIGCOMM Computer Communication Review*. **16** (3): 397– 405. [doi](https://en.wikipedia.org/wiki/Doi_\(identifier\) "Doi (identifier)"):[10.1145/1013812.18216](https://doi.org/10.1145%2F1013812.18216).

- [Stevens, W. Richard](https://en.wikipedia.org/wiki/W._Richard_Stevens "W. Richard Stevens") (1994-01-10). [*TCP/IP Illustrated, Volume 1: The Protocols*](https://archive.org/details/tcpipillustrated00stev). Addison-Wesley Pub. Co. [ISBN](https://en.wikipedia.org/wiki/ISBN_\(identifier\) "ISBN (identifier)") [978-0-201-63346-7](https://en.wikipedia.org/wiki/Special:BookSources/978-0-201-63346-7 "Special:BookSources/978-0-201-63346-7").
- Stevens, W. Richard; Wright, Gary R (1994). [*TCP/IP Illustrated, Volume 2: The Implementation*](https://archive.org/details/tcpipillustrated00stev_1). Addison-Wesley. [ISBN](https://en.wikipedia.org/wiki/ISBN_\(identifier\) "ISBN (identifier)") [978-0-201-63354-2](https://en.wikipedia.org/wiki/Special:BookSources/978-0-201-63354-2 "Special:BookSources/978-0-201-63354-2").
- Stevens, W. Richard (1996). *TCP/IP Illustrated, Volume 3: TCP for Transactions, HTTP, NNTP, and the UNIX Domain Protocols*. Addison-Wesley. [ISBN](https://en.wikipedia.org/wiki/ISBN_\(identifier\) "ISBN (identifier)") [978-0-201-63495-2](https://en.wikipedia.org/wiki/Special:BookSources/978-0-201-63495-2 "Special:BookSources/978-0-201-63495-2").\*\*

- [Oral history interview with Robert E. Kahn](http://purl.umn.edu/107387)
- [IANA Port Assignments](https://www.iana.org/assignments/port-numbers)
- [IANA TCP Parameters](https://www.iana.org/assignments/tcp-parameters/tcp-parameters.xhtml)
- [Archived](https://web.archive.org/web/20210214185226/https://condor.depaul.edu/~jkristof/technotes/tcp.html) 2021-02-14 at the [Wayback Machine](https://en.wikipedia.org/wiki/Wayback_Machine "Wayback Machine")

[^1]: Added to header by [RFC 3168](https://en.wikipedia.org/wiki/#CITEREFRFC_3168)

[^2]: Windows size units are, by default, bytes.

[^3]: Window size is relative to the segment identified by the sequence number in the acknowledgment field.

[^4]: Equivalently, a pair of [network sockets](https://en.wikipedia.org/wiki/Network_sockets "Network sockets") for the source and destination, each of which is made up of an address and a port

[^5]: As of the latest standard, [HTTP/3](https://en.wikipedia.org/wiki/HTTP/3 "HTTP/3"), [QUIC](https://en.wikipedia.org/wiki/QUIC "QUIC") is used as a transport instead of TCP.

[^6]: Comer, D. E. (2021). Internetworking with TCP/IP (6th ed.). Pearson.

[^7]: Labrador, Miguel A.; Perez, Alfredo J.; Wightman, Pedro M. (2010). *Location-Based Information Systems Developing Real-Time Tracking Applications*. CRC Press. [ISBN](https://en.wikipedia.org/wiki/ISBN_\(identifier\) "ISBN (identifier)") [9781000556803](https://en.wikipedia.org/wiki/Special:BookSources/9781000556803 "Special:BookSources/9781000556803").

[^8]: Vinton G. Cerf; Robert E. Kahn (May 1974). ["A Protocol for Packet Network Intercommunication"](https://web.archive.org/web/20160304150203/http://ece.ut.ac.ir/Classpages/F84/PrincipleofNetworkDesign/Papers/CK74.pdf) (PDF). *IEEE Transactions on Communications*. **22** (5): 637– 648. [doi](https://en.wikipedia.org/wiki/Doi_\(identifier\) "Doi (identifier)"):[10.1109/tcom.1974.1092259](https://doi.org/10.1109%2Ftcom.1974.1092259). Archived from [the original](http://ece.ut.ac.ir/Classpages/F84/PrincipleofNetworkDesign/Papers/CK74.pdf) (PDF) on March 4, 2016.

[^9]: Bennett, Richard (September 2009). ["Designed for Change: End-to-End Arguments, Internet Innovation, and the Net Neutrality Debate"](https://www.itif.org/files/2009-designed-for-change.pdf) (PDF). Information Technology and Innovation Foundation. p. 11. [Archived](https://web.archive.org/web/20190829092926/http://www.itif.org/files/2009-designed-for-change.pdf) (PDF) from the original on 29 August 2019. Retrieved 11 September 2017.

[^10]: [RFC 675](https://en.wikipedia.org/wiki/#CITEREFRFC_675).

[^11]: Russell, Andrew Lawrence (2008). [*'Industrial Legislatures': Consensus Standardization in the Second and Third Industrial Revolutions*](http://jhir.library.jhu.edu/handle/1774.2/32576) (Thesis). "See Abbate, *Inventing the Internet*, 129–30; Vinton G. Cerf (October 1980). "Protocols for Interconnected Packet Networks". *ACM SIGCOMM Computer Communication Review*. **10** (4): 10– 11.; and [*RFC 760*](https://www.rfc-editor.org/rfc/rfc760). [doi](https://en.wikipedia.org/wiki/Doi_\(identifier\) "Doi (identifier)"):[10.17487/RFC0760](https://doi.org/10.17487%2FRFC0760)."

[^12]: [Postel, Jon](https://en.wikipedia.org/wiki/Jon_Postel "Jon Postel") (15 August 1977), [*Comments on Internet Protocol and TCP*](https://www.rfc-editor.org/ien/ien2.txt), IEN 2, [archived](https://web.archive.org/web/20190516055704/http://www.rfc-editor.org/ien/ien2.txt) from the original on May 16, 2019, retrieved June 11, 2016, We are screwing up in our design of internet protocols by violating the principle of layering. Specifically we are trying to use TCP to do two things: serve as a host level end to end protocol, and to serve as an internet packaging and routing protocol. These two things should be provided in a layered and modular way.

[^13]: Cerf, Vinton G. (1 April 1980). ["Final Report of the Stanford University TCP Project"](https://www.rfc-editor.org/ien/ien151.txt).

[^14]: Cerf, Vinton G; Cain, Edward (October 1983). "The DoD internet architecture model". *Computer Networks*. **7** (5): 307– 318. [doi](https://en.wikipedia.org/wiki/Doi_\(identifier\) "Doi (identifier)"):[10.1016/0376-5075(83)90042-9](https://doi.org/10.1016%2F0376-5075%2883%2990042-9).

[^15]: ["The TCP/IP Guide – TCP/IP Architecture and the TCP/IP Model"](http://www.tcpipguide.com/free/t_TCPIPArchitectureandtheTCPIPModel.htm). *www.tcpipguide.com*. Retrieved 2020-02-11.

[^16]: [https://datatracker.ietf.org/doc/html/rfc9293](https://datatracker.ietf.org/doc/html/rfc9293)

[^17]: ["Internet Experiment Note Index"](https://www.rfc-editor.org/ien/ien-index.html). *www.rfc-editor.org*. Retrieved 2024-01-21.

[^18]: ["Robert E Kahn – A.M. Turing Award Laureate"](https://amturing.acm.org/award_winners/kahn_4598637.cfm). *amturing.acm.org*. [Archived](https://web.archive.org/web/20190713004804/https://amturing.acm.org/award_winners/kahn_4598637.cfm) from the original on 2019-07-13. Retrieved 2019-07-13.

[^19]: ["Vinton Cerf – A.M. Turing Award Laureate"](https://amturing.acm.org/award_winners/cerf_1083211.cfm). *amturing.acm.org*. [Archived](https://web.archive.org/web/20211011080741/https://amturing.acm.org/award_winners/cerf_1083211.cfm) from the original on 2021-10-11. Retrieved 2019-07-13.

[^20]: [Comer, Douglas E.](https://en.wikipedia.org/wiki/Douglas_Comer "Douglas Comer") (2006). *Internetworking with TCP/IP: Principles, Protocols, and Architecture*. Vol. 1 (5th ed.). Prentice Hall. [ISBN](https://en.wikipedia.org/wiki/ISBN_\(identifier\) "ISBN (identifier)") [978-0-13-187671-2](https://en.wikipedia.org/wiki/Special:BookSources/978-0-13-187671-2 "Special:BookSources/978-0-13-187671-2").

[^21]: [RFC 9293](https://en.wikipedia.org/wiki/#CITEREFRFC_9293), 2.2. Key TCP Concepts.

[^22]: [RFC 791](https://en.wikipedia.org/wiki/#CITEREFRFC_791), pp. 5–6.

[^23]: [RFC 9293](https://en.wikipedia.org/wiki/#CITEREFRFC_9293).

[^24]: [RFC 9293](https://en.wikipedia.org/wiki/#CITEREFRFC_9293), 3.1. Header Format.

[^25]: [RFC 9293](https://en.wikipedia.org/wiki/#CITEREFRFC_9293), 3.8.5 The Communication of Urgent Information.

[^26]: [RFC 9293](https://en.wikipedia.org/wiki/#CITEREFRFC_9293), 3.4. Sequence Numbers.

[^27]: [RFC 9293](https://en.wikipedia.org/wiki/#CITEREFRFC_9293), 3.4.1. Initial Sequence Number Selection.

[^28]: ["Change RFC 3540 "Robust Explicit Congestion Notification (ECN) Signaling with Nonces" to Historic"](https://datatracker.ietf.org/doc/status-change-ecn-signaling-with-nonces-to-historic/). *datatracker.ietf.org*. Retrieved 2023-04-18.

[^29]: ["More Accurate Explicit Congestion Notification (AccECN) Feedback in TCP"](https://datatracker.ietf.org/doc/draft-ietf-tcpm-accurate-ecn/). *datatracker.ietf.org*. Retrieved 2025-10-24.

[^30]: [RFC 3168](https://en.wikipedia.org/wiki/#CITEREFRFC_3168), p. 13-14.

[^31]: [RFC 3168](https://en.wikipedia.org/wiki/#CITEREFRFC_3168), p. 15.

[^32]: [RFC 3168](https://en.wikipedia.org/wiki/#CITEREFRFC_3168), p. 18-19.

[^33]: [RFC 793](https://en.wikipedia.org/wiki/#CITEREFRFC_793).

[^34]: [RFC 7323](https://en.wikipedia.org/wiki/#CITEREFRFC_7323).

[^35]: [RFC 2018](https://en.wikipedia.org/wiki/#CITEREFRFC_2018), 2. Sack-Permitted Option.

[^36]: [RFC 2018](https://en.wikipedia.org/wiki/#CITEREFRFC_2018), 3. Sack Option Format.

[^37]: Heffernan, Andy (August 1998). ["Protection of BGP Sessions via the TCP MD5 Signature Option"](https://datatracker.ietf.org/doc/html/rfc2385). IETF. Retrieved 2023-12-30.

[^38]: ["Transmission Control Protocol (TCP) Parameters: TCP Option Kind Numbers"](https://www.iana.org/assignments/tcp-parameters/tcp-parameters.xhtml#tcp-parameters-1). IANA. [Archived](https://web.archive.org/web/20171002210157/http://www.iana.org/assignments/tcp-parameters/tcp-parameters.xhtml#tcp-parameters-1) from the original on 2017-10-02. Retrieved 2017-10-19.

[^39]: [RFC 9293](https://en.wikipedia.org/wiki/#CITEREFRFC_9293), 3.3.2. State Machine Overview.

[^40]: Kurose, James F. (2017). *Computer networking: a top-down approach*. Keith W. Ross (7th ed.). Harlow, England. p. 286. [ISBN](https://en.wikipedia.org/wiki/ISBN_\(identifier\) "ISBN (identifier)") [978-0-13-359414-0](https://en.wikipedia.org/wiki/Special:BookSources/978-0-13-359414-0 "Special:BookSources/978-0-13-359414-0"). [OCLC](https://en.wikipedia.org/wiki/OCLC_\(identifier\) "OCLC (identifier)") [936004518](https://search.worldcat.org/oclc/936004518).`{{[cite book](https://en.wikipedia.org/wiki/Template:Cite_book "Template:Cite book")}}`: CS1 maint: location missing publisher ([link](https://en.wikipedia.org/wiki/Category:CS1_maint:_location_missing_publisher "Category:CS1 maint: location missing publisher"))

[^41]: [Tanenbaum, Andrew S.](https://en.wikipedia.org/wiki/Andrew_S._Tanenbaum "Andrew S. Tanenbaum") (2003-03-17). [*Computer Networks*](https://archive.org/details/computernetworks00tane_2) (Fourth ed.). Prentice Hall. [ISBN](https://en.wikipedia.org/wiki/ISBN_\(identifier\) "ISBN (identifier)") [978-0-13-066102-9](https://en.wikipedia.org/wiki/Special:BookSources/978-0-13-066102-9 "Special:BookSources/978-0-13-066102-9").

[^42]: ["linux/net/ipv4/tcp\_minisocks.c at master · torvalds/linux"](https://github.com/torvalds/linux/blob/master/net/ipv4/tcp_minisocks.c). *GitHub*. Retrieved 2025-04-24.

[^43]: [RFC 1122](https://en.wikipedia.org/wiki/#CITEREFRFC_1122), 4.2.2.13. Closing a Connection.

[^44]: ["TCP (Transmission Control Protocol) – The transmission protocol explained"](https://www.ionos.com/digitalguide/server/know-how/introduction-to-tcp/). *IONOS Digital Guide*. 2020-03-02. Retrieved 2025-04-24.

[^45]: ["The TCP/IP Guide - TCP Connection Termination"](http://www.tcpipguide.com/free/t_TCPConnectionTermination-2.htm). *www.tcpipguide.com*. Retrieved 2025-04-24.

[^46]: [Karn & Partridge 1991](https://en.wikipedia.org/wiki/#CITEREFKarnPartridge1991), p. 364.

[^47]: [RFC 9002](https://en.wikipedia.org/wiki/#CITEREFRFC_9002), 4.2. Monotonically Increasing Packet Numbers.

[^48]: Mathis; Mathew; Semke; Mahdavi; Ott (1997). "The macroscopic behavior of the TCP congestion avoidance algorithm". *ACM SIGCOMM Computer Communication Review*. **27** (3): 67– 82. [CiteSeerX](https://en.wikipedia.org/wiki/CiteSeerX_\(identifier\) "CiteSeerX (identifier)") [10.1.1.40.7002](https://citeseerx.ist.psu.edu/viewdoc/summary?doi=10.1.1.40.7002). [doi](https://en.wikipedia.org/wiki/Doi_\(identifier\) "Doi (identifier)"):[10.1145/263932.264023](https://doi.org/10.1145%2F263932.264023). [S2CID](https://en.wikipedia.org/wiki/S2CID_\(identifier\) "S2CID (identifier)") [1894993](https://api.semanticscholar.org/CorpusID:1894993).

[^49]: [RFC 3522](https://en.wikipedia.org/wiki/#CITEREFRFC_3522), p. 4.

[^50]: Leung, Ka-cheong; Li, Victor O.k.; Yang, Daiqin (2007). "An Overview of Packet Reordering in Transmission Control Protocol (TCP): Problems, Solutions, and Challenges". *IEEE Transactions on Parallel and Distributed Systems*. **18** (4): 522– 535. [doi](https://en.wikipedia.org/wiki/Doi_\(identifier\) "Doi (identifier)"):[10.1109/TPDS.2007.1011](https://doi.org/10.1109%2FTPDS.2007.1011).

[^51]: Johannessen, Mads (2015). [*Investigate reordering in Linux TCP*](http://urn.nb.no/URN:NBN:no-51662) (MSc thesis). University of Oslo.

[^52]: Cheng, Yuchung (2015). [*RACK: a time-based fast loss detection for TCP draft-cheng-tcpm-rack-00*](https://www.ietf.org/proceedings/94/slides/slides-94-tcpm-6.pdf) (PDF). IETF94. Yokohama: IETF.

[^53]: [RFC 8985](https://en.wikipedia.org/wiki/#CITEREFRFC_8985).

[^54]: Cheng, Yuchung; Cardwell, Neal; Dukkipati, Nandita; Jha, Priyaranjan (2017). [*RACK: a time-based fast loss recovery draft-ietf-tcpm-rack-02*](https://datatracker.ietf.org/meeting/100/materials/slides-100-tcpm-draft-ietf-tcpm-rack-01.pdf) (PDF). IETF100. Yokohama: IETF.

[^55]: [RFC 6298](https://en.wikipedia.org/wiki/#CITEREFRFC_6298), p. 2.

[^56]: [Zhang 1986](https://en.wikipedia.org/wiki/#CITEREFZhang1986), p. 399.

[^57]: [Karn & Partridge 1991](https://en.wikipedia.org/wiki/#CITEREFKarnPartridge1991), p. 365.

[^58]: [Ludwig & Katz 2000](https://en.wikipedia.org/wiki/#CITEREFLudwigKatz2000), p. 31-33.

[^59]: [Gurtov & Ludwig 2003](https://en.wikipedia.org/wiki/#CITEREFGurtovLudwig2003), p. 2.

[^60]: [Gurtov & Floyd 2004](https://en.wikipedia.org/wiki/#CITEREFGurtovFloyd2004), p. 1.

[^61]: [RFC 6298](https://en.wikipedia.org/wiki/#CITEREFRFC_6298), p. 4.

[^62]: [Karn & Partridge 1991](https://en.wikipedia.org/wiki/#CITEREFKarnPartridge1991), p. 370-372.

[^63]: [Allman & Paxson 1999](https://en.wikipedia.org/wiki/#CITEREFAllmanPaxson1999), p. 268.

[^64]: [RFC 7323](https://en.wikipedia.org/wiki/#CITEREFRFC_7323), p. 7.

[^65]: Stone; Partridge (2000). ["When the CRC and TCP checksum disagree"](http://citeseer.ist.psu.edu/stone00when.html). *Proceedings of the conference on Applications, Technologies, Architectures, and Protocols for Computer Communication*. *ACM SIGCOMM Computer Communication Review*. pp. 309– 319. [CiteSeerX](https://en.wikipedia.org/wiki/CiteSeerX_\(identifier\) "CiteSeerX (identifier)") [10.1.1.27.7611](https://citeseerx.ist.psu.edu/viewdoc/summary?doi=10.1.1.27.7611). [doi](https://en.wikipedia.org/wiki/Doi_\(identifier\) "Doi (identifier)"):[10.1145/347059.347561](https://doi.org/10.1145%2F347059.347561). [ISBN](https://en.wikipedia.org/wiki/ISBN_\(identifier\) "ISBN (identifier)") [978-1581132236](https://en.wikipedia.org/wiki/Special:BookSources/978-1581132236 "Special:BookSources/978-1581132236"). [S2CID](https://en.wikipedia.org/wiki/S2CID_\(identifier\) "S2CID (identifier)") [9547018](https://api.semanticscholar.org/CorpusID:9547018). [Archived](https://web.archive.org/web/20080505024952/http://citeseer.ist.psu.edu/stone00when.html) from the original on 2008-05-05. Retrieved 2008-04-28.

[^66]: [RFC 5681](https://en.wikipedia.org/wiki/#CITEREFRFC_5681).

[^67]: [RFC 6298](https://en.wikipedia.org/wiki/#CITEREFRFC_6298).

[^68]: [RFC 1122](https://en.wikipedia.org/wiki/#CITEREFRFC_1122).

[^69]: [RFC 2018](https://en.wikipedia.org/wiki/#CITEREFRFC_2018), p. 10.

[^70]: [RFC 9002](https://en.wikipedia.org/wiki/#CITEREFRFC_9002), 4.4. No Reneging.

[^71]: ["TCP window scaling and broken routers"](https://lwn.net/Articles/92727/). *LWN.net*. [Archived](https://web.archive.org/web/20200331213612/https://lwn.net/Articles/92727/) from the original on 2020-03-31. Retrieved 2016-07-21.

[^72]: [RFC 3522](https://en.wikipedia.org/wiki/#CITEREFRFC_3522).

[^73]: ["IP sysctl"](https://www.kernel.org/doc/Documentation/networking/ip-sysctl.txt). *Linux Kernel Documentation*. [Archived](https://web.archive.org/web/20160305080444/https://www.kernel.org/doc/Documentation/networking/ip-sysctl.txt) from the original on 5 March 2016. Retrieved 15 December 2018.

[^74]: Wang, Eve. ["TCP timestamp is disabled"](https://web.archive.org/web/20181215225201/https://social.technet.microsoft.com/Forums/office/en-US/6b1e4653-320f-4dbf-8b1a-64d27d8464fc/tcp-timestamp-is-disabled). *Technet – Windows Server 2012 Essentials*. Microsoft. Archived from [the original](https://social.technet.microsoft.com/Forums/office/en-US/6b1e4653-320f-4dbf-8b1a-64d27d8464fc/tcp-timestamp-is-disabled) on 2018-12-15. Retrieved 2018-12-15.

[^75]: David Murray; Terry Koziniec; Sebastian Zander; Michael Dixon; Polychronis Koutsakis (2017). ["An Analysis of Changing Enterprise Network Traffic Characteristics"](http://profiles.murdoch.edu.au/myprofile/david-murray/files/2012/06/An_Analysis_of_Changing_Enterprise_Network_Traffic_Characteristics-22.pdf) (PDF). The 23rd Asia-Pacific Conference on Communications (APCC 2017). [Archived](https://web.archive.org/web/20171003124654/http://profiles.murdoch.edu.au/myprofile/david-murray/files/2012/06/An_Analysis_of_Changing_Enterprise_Network_Traffic_Characteristics-22.pdf) (PDF) from the original on 3 October 2017. Retrieved 3 October 2017.

[^76]: Gont, Fernando (November 2008). ["On the implementation of TCP urgent data"](http://www.gont.com.ar/talks/IETF73/ietf73-tcpm-urgent-data.ppt). 73rd IETF meeting. [Archived](https://web.archive.org/web/20190516181338/https://www.gont.com.ar/talks/IETF73/ietf73-tcpm-urgent-data.ppt) from the original on 2019-05-16. Retrieved 2009-01-04.

[^77]: Peterson, Larry (2003). [*Computer Networks*](https://archive.org/details/computernetworks00pete_974). Morgan Kaufmann. p. [401](https://archive.org/details/computernetworks00pete_974/page/n419). [ISBN](https://en.wikipedia.org/wiki/ISBN_\(identifier\) "ISBN (identifier)") [978-1-55860-832-0](https://en.wikipedia.org/wiki/Special:BookSources/978-1-55860-832-0 "Special:BookSources/978-1-55860-832-0").

[^78]: Richard W. Stevens (November 2011). [*TCP/IP Illustrated. Vol. 1, The protocols*](https://archive.org/details/tcpipillustrated00stev). Addison-Wesley. pp. Chapter 20. [ISBN](https://en.wikipedia.org/wiki/ISBN_\(identifier\) "ISBN (identifier)") [978-0-201-63346-7](https://en.wikipedia.org/wiki/Special:BookSources/978-0-201-63346-7 "Special:BookSources/978-0-201-63346-7").

[^79]: ["Security Assessment of the Transmission Control Protocol (TCP)"](https://web.archive.org/web/20090306052826/http://www.cpni.gov.uk/Docs/tn-03-09-security-assessment-TCP.pdf) (PDF). Archived from the original on March 6, 2009. Retrieved 2010-12-23.`{{[cite web](https://en.wikipedia.org/wiki/Template:Cite_web "Template:Cite web")}}`: CS1 maint: bot: original URL status unknown ([link](https://en.wikipedia.org/wiki/Category:CS1_maint:_bot:_original_URL_status_unknown "Category:CS1 maint: bot: original URL status unknown"))

[^80]: [Survey of Security Hardening Methods for Transmission Control Protocol (TCP) Implementations](https://tools.ietf.org/html/draft-ietf-tcpm-tcp-security)

[^81]: Jakob Lell (13 August 2013). ["Quick Blind TCP Connection Spoofing with SYN Cookies"](http://www.jakoblell.com/blog/2013/08/13/quick-blind-tcp-connection-spoofing-with-syn-cookies/). [Archived](https://web.archive.org/web/20140222101226/http://www.jakoblell.com/blog/2013/08/13/quick-blind-tcp-connection-spoofing-with-syn-cookies/) from the original on 2014-02-22. Retrieved 2014-02-05.

[^82]: ["Some insights about the recent TCP DoS (Denial of Service) vulnerabilities"](https://web.archive.org/web/20130618235445/http://www.gont.com.ar/talks/hacklu2009/fgont-hacklu2009-tcp-security.pdf) (PDF). Archived from [the original](http://www.gont.com.ar/talks/hacklu2009/fgont-hacklu2009-tcp-security.pdf) (PDF) on 2013-06-18. Retrieved 2010-12-23.

[^83]: ["Exploiting TCP and the Persist Timer Infiniteness"](http://phrack.org/issues.html?issue=66&id=9#article). [Archived](https://web.archive.org/web/20100122131412/http://www.phrack.org/issues.html?issue=66&id=9#article) from the original on 2010-01-22. Retrieved 2010-01-22.

[^84]: ["PUSH and ACK Flood"](https://f5.com/glossary/push-and-ack-flood). *f5.com*. [Archived](https://web.archive.org/web/20170928005428/https://f5.com/glossary/push-and-ack-flood) from the original on 2017-09-28. Retrieved 2017-09-27.

[^85]: Laurent Joncheray (1995). ["Simple Active Attack Against TCP"](https://www.usenix.org/legacy/publications/library/proceedings/security95/full_papers/joncheray.pdf) (PDF). Retrieved 2023-06-04.

[^86]: John T. Hagen; Barry E. Mullins (2013). "TCP veto: A novel network attack and its Application to SCADA protocols". *2013 IEEE PES Innovative Smart Grid Technologies Conference (ISGT)*. pp. 1– 6. [doi](https://en.wikipedia.org/wiki/Doi_\(identifier\) "Doi (identifier)"):[10.1109/ISGT.2013.6497785](https://doi.org/10.1109%2FISGT.2013.6497785). [ISBN](https://en.wikipedia.org/wiki/ISBN_\(identifier\) "ISBN (identifier)") [978-1-4673-4896-6](https://en.wikipedia.org/wiki/Special:BookSources/978-1-4673-4896-6 "Special:BookSources/978-1-4673-4896-6"). [S2CID](https://en.wikipedia.org/wiki/S2CID_\(identifier\) "S2CID (identifier)") [25353177](https://api.semanticscholar.org/CorpusID:25353177).

[^87]: [RFC 9293](https://en.wikipedia.org/wiki/#CITEREFRFC_9293), 4. Glossary.

[^88]: [RFC 8095](https://en.wikipedia.org/wiki/#CITEREFRFC_8095), p. 6.

[^89]: [Paasch & Bonaventure 2014](https://en.wikipedia.org/wiki/#CITEREFPaaschBonaventure2014), p. 51.

[^90]: [RFC 6182](https://en.wikipedia.org/wiki/#CITEREFRFC_6182).

[^91]: [RFC 6824](https://en.wikipedia.org/wiki/#CITEREFRFC_6824).

[^92]: Raiciu; Barre; Pluntke; Greenhalgh; Wischik; Handley (2011). ["Improving datacenter performance and robustness with multipath TCP"](https://web.archive.org/web/20200404105843/https://inl.info.ucl.ac.be/publications/improving-datacenter-performance-and-robustness-multipath-tcp). *ACM SIGCOMM Computer Communication Review*. **41** (4): 266. [CiteSeerX](https://en.wikipedia.org/wiki/CiteSeerX_\(identifier\) "CiteSeerX (identifier)") [10.1.1.306.3863](https://citeseerx.ist.psu.edu/viewdoc/summary?doi=10.1.1.306.3863). [doi](https://en.wikipedia.org/wiki/Doi_\(identifier\) "Doi (identifier)"):[10.1145/2043164.2018467](https://doi.org/10.1145%2F2043164.2018467). Archived from [the original](http://inl.info.ucl.ac.be/publications/improving-datacenter-performance-and-robustness-multipath-tcp) on 2020-04-04. Retrieved 2011-06-29.

[^93]: ["MultiPath TCP – Linux Kernel implementation"](http://www.multipath-tcp.org/). [Archived](https://web.archive.org/web/20130327041817/http://www.multipath-tcp.org/) from the original on 2013-03-27. Retrieved 2013-03-24.

[^94]: Raiciu; Paasch; Barre; Ford; Honda; Duchene; Bonaventure; Handley (2012). ["How Hard Can It Be? Designing and Implementing a Deployable Multipath TCP"](https://www.usenix.org/conference/nsdi12/how-hard-can-it-be-designing-and-implementing-deployable-multipath-tcp). *Usenix NSDI*: 399– 412. [Archived](https://web.archive.org/web/20130603045638/https://www.usenix.org/conference/nsdi12/how-hard-can-it-be-designing-and-implementing-deployable-multipath-tcp) from the original on 2013-06-03. Retrieved 2013-03-24.

[^95]: Bonaventure; Seo (2016). ["Multipath TCP Deployments"](https://www.ietfjournal.org/multipath-tcp-deployments/). *IETF Journal*. [Archived](https://web.archive.org/web/20200223070325/https://www.ietfjournal.org/multipath-tcp-deployments/) from the original on 2020-02-23. Retrieved 2017-01-03.

[^96]: [*Cryptographic Protection of TCP Streams (tcpcrypt)*](https://www.rfc-editor.org/rfc/rfc8548). May 2019. [doi](https://en.wikipedia.org/wiki/Doi_\(identifier\) "Doi (identifier)"):[10.17487/RFC8548](https://doi.org/10.17487%2FRFC8548). [RFC](https://en.wikipedia.org/wiki/Request_for_Comments "Request for Comments") [8548](https://datatracker.ietf.org/doc/html/rfc8548).

[^97]: Michael Kerrisk (2012-08-01). ["TCP Fast Open: expediting web services"](https://lwn.net/Articles/508865/). [LWN.net](https://en.wikipedia.org/wiki/LWN.net "LWN.net"). [Archived](https://web.archive.org/web/20140803234830/http://lwn.net/Articles/508865/) from the original on 2014-08-03. Retrieved 2014-07-21.

[^98]: [RFC 7413](https://en.wikipedia.org/wiki/#CITEREFRFC_7413).

[^99]: [RFC 6937](https://en.wikipedia.org/wiki/#CITEREFRFC_6937).

[^100]: Grigorik, Ilya (2013). *High-performance browser networking* (1. ed.). Beijing: O'Reilly. [ISBN](https://en.wikipedia.org/wiki/ISBN_\(identifier\) "ISBN (identifier)") [978-1449344764](https://en.wikipedia.org/wiki/Special:BookSources/978-1449344764 "Special:BookSources/978-1449344764").

[^101]: [RFC 6013](https://en.wikipedia.org/wiki/#CITEREFRFC_6013).

[^102]: [RFC 7805](https://en.wikipedia.org/wiki/#CITEREFRFC_7805).

[^103]: Kumar, Sam; P Andersen, Michael; Kim, Hyung-Sin; E. Culler, David (2020). ["Performant TCP for Low-Power Wireless Networks"](https://www.usenix.org/conference/nsdi20/presentation/kumar). *University of California, Berkeley*. USENIX.

[^104]: ["Rethinking System Design for Expressive Cryptography"](https://web.archive.org/web/20251013153533/https://www.samkumar.org/papers/samkumar_phd.pdf) (PDF). *samkumar.org*. University of California, Berkeley. 2023. Archived from [the original](https://www.samkumar.org/papers/samkumar_phd.pdf) (PDF) on 13 Oct 2025.

[^105]: [RFC 8546](https://en.wikipedia.org/wiki/#CITEREFRFC_8546), p. 6.

[^106]: [RFC 8558](https://en.wikipedia.org/wiki/#CITEREFRFC_8558), p. 3.

[^107]: [RFC 9065](https://en.wikipedia.org/wiki/#CITEREFRFC_9065), 2. Current Uses of Transport Headers within the Network.

[^108]: [RFC 9065](https://en.wikipedia.org/wiki/#CITEREFRFC_9065), 3. Research, Development, and Deployment.

[^109]: [RFC 8558](https://en.wikipedia.org/wiki/#CITEREFRFC_8558), p. 8.

[^110]: [RFC 9170](https://en.wikipedia.org/wiki/#CITEREFRFC_9170), A.5. TCP.

[^111]: [Papastergiou et al. 2017](https://en.wikipedia.org/wiki/#CITEREFPapastergiouFairhurstRosBrunstrom2017), p. 620.

[^112]: [Edeline & Donnet 2019](https://en.wikipedia.org/wiki/#CITEREFEdelineDonnet2019), p. 175-176.

[^113]: [Raiciu et al. 2012](https://en.wikipedia.org/wiki/#CITEREFRaiciuPaaschBarreFord2012), p. 1.

[^114]: [Hesmans et al. 2013](https://en.wikipedia.org/wiki/#CITEREFHesmansDuchenePaaschDetal2013), p. 1.

[^115]: [Rybczyńska 2020](https://en.wikipedia.org/wiki/#CITEREFRybczy%C5%84ska2020).

[^116]: [Papastergiou et al. 2017](https://en.wikipedia.org/wiki/#CITEREFPapastergiouFairhurstRosBrunstrom2017), p. 621.

[^117]: [Corbet 2015](https://en.wikipedia.org/wiki/#CITEREFCorbet2015).

[^118]: [Briscoe et al. 2016](https://en.wikipedia.org/wiki/#CITEREFBriscoeBrunstromPetlundHayes2016), pp. 29–30.

[^119]: [Marx 2020](https://en.wikipedia.org/wiki/#CITEREFMarx2020), HOL blocking in HTTP/1.1.

[^120]: [Marx 2020](https://en.wikipedia.org/wiki/#CITEREFMarx2020), Bonus: Transport Congestion Control.

[^121]: [IETF HTTP Working Group](https://en.wikipedia.org/wiki/#CITEREFIETF_HTTP_Working_Group), Why just one TCP connection?.

[^122]: [Corbet 2018](https://en.wikipedia.org/wiki/#CITEREFCorbet2018).

[^123]: [RFC 7413](https://en.wikipedia.org/wiki/#CITEREFRFC_7413), p. 3.

[^124]: [Sy et al. 2020](https://en.wikipedia.org/wiki/#CITEREFSyMuellerBurkertFederrath2020), p. 271.

[^125]: [Chen et al. 2021](https://en.wikipedia.org/wiki/#CITEREFChenJeroJagielskiBoldyreva2021), p. 8-9.

[^126]: [Ghedini 2018](https://en.wikipedia.org/wiki/#CITEREFGhedini2018).

[^127]: [Chen et al. 2021](https://en.wikipedia.org/wiki/#CITEREFChenJeroJagielskiBoldyreva2021), p. 3-4.

[^128]: [RFC 7413](https://en.wikipedia.org/wiki/#CITEREFRFC_7413), p. 1.

[^129]: [Blanton & Allman 2002](https://en.wikipedia.org/wiki/#CITEREFBlantonAllman2002), p. 1-2.

[^130]: [Blanton & Allman 2002](https://en.wikipedia.org/wiki/#CITEREFBlantonAllman2002), p. 4-5.

[^131]: [Blanton & Allman 2002](https://en.wikipedia.org/wiki/#CITEREFBlantonAllman2002), p. 3-4.

[^132]: [Blanton & Allman 2002](https://en.wikipedia.org/wiki/#CITEREFBlantonAllman2002), p. 6-8.

[^133]: [Bruyeron, Hemon & Zhang 1998](https://en.wikipedia.org/wiki/#CITEREFBruyeronHemonZhang1998), p. 67.

[^134]: [Bruyeron, Hemon & Zhang 1998](https://en.wikipedia.org/wiki/#CITEREFBruyeronHemonZhang1998), p. 72.

[^135]: [Bhat, Rizk & Zink 2017](https://en.wikipedia.org/wiki/#CITEREFBhatRizkZink2017), p. 14.

[^136]: [RFC 9002](https://en.wikipedia.org/wiki/#CITEREFRFC_9002), 4.5. More ACK Ranges.

[^137]: ["TCP performance over CDMA2000 RLP"](https://web.archive.org/web/20110503193100/http://academic.research.microsoft.com/Paper/3352358.aspx). Archived from [the original](http://academic.research.microsoft.com/Paper/3352358.aspx) on 2011-05-03. Retrieved 2010-08-30.

[^138]: Muhammad Adeel; Ahmad Ali Iqbal (2007). "TCP Congestion Window Optimization for CDMA2000 Packet Data Networks". *Fourth International Conference on Information Technology (ITNG'07)*. pp. 31– 35. [doi](https://en.wikipedia.org/wiki/Doi_\(identifier\) "Doi (identifier)"):[10.1109/ITNG.2007.190](https://doi.org/10.1109%2FITNG.2007.190). [ISBN](https://en.wikipedia.org/wiki/ISBN_\(identifier\) "ISBN (identifier)") [978-0-7695-2776-5](https://en.wikipedia.org/wiki/Special:BookSources/978-0-7695-2776-5 "Special:BookSources/978-0-7695-2776-5"). [S2CID](https://en.wikipedia.org/wiki/S2CID_\(identifier\) "S2CID (identifier)") [8717768](https://api.semanticscholar.org/CorpusID:8717768).

[^139]: ["TCP Acceleration"](https://web.archive.org/web/20240422182258/https://www.frame.ie/use-cases/understanding-tcp-and-the-need-for-tcp-acceleration/). Archived from [the original](https://www.frame.ie/use-cases/understanding-tcp-and-the-need-for-tcp-acceleration/) on 2024-04-22. Retrieved 2024-04-18.

[^140]: Yunhong Gu, Xinwei Hong, and Robert L. Grossman.["An Analysis of AIMD Algorithm with Decreasing Increases"](https://udt.sourceforge.net/doc/gridnet-v8.pdf) [Archived](https://web.archive.org/web/20160305003043/http://udt.sourceforge.net/doc/gridnet-v8.pdf) 2016-03-05 at the [Wayback Machine](https://en.wikipedia.org/wiki/Wayback_Machine "Wayback Machine"). 2004.

[^141]: [RFC 8200](https://en.wikipedia.org/wiki/#CITEREFRFC_8200).

[^142]: ["Wireshark: Offloading"](https://wiki.wireshark.org/CaptureSetup/Offloading). [Archived](https://web.archive.org/web/20170131220028/https://wiki.wireshark.org/CaptureSetup/Offloading/) from the original on 2017-01-31. Retrieved 2017-02-24. Wireshark captures packets before they are sent to the network adapter. It won't see the correct checksum because it has not been calculated yet. Even worse, most OSes don't bother initialize this data so you're probably seeing little chunks of memory that you shouldn't. New installations of Wireshark 1.2 and above disable IP, TCP, and UDP checksum validation by default. You can disable checksum validation in each of those dissectors by hand if needed.

[^143]: ["Wireshark: Checksums"](https://www.wireshark.org/docs/wsug_html_chunked/ChAdvChecksums.html). [Archived](https://web.archive.org/web/20161022133751/https://www.wireshark.org/docs/wsug_html_chunked/ChAdvChecksums.html) from the original on 2016-10-22. Retrieved 2017-02-24. Checksum offloading often causes confusion as the network packets to be transmitted are handed over to Wireshark before the checksums are actually calculated. Wireshark gets these "empty" checksums and displays them as invalid, even though the packets will contain valid checksums when they leave the network hardware later.