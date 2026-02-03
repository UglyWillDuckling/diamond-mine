---
related-concepts:
  - "[[packet switching]]"
  - "[[computer networks]]"
category:
  - "[[Networking]]"
related-actions:
  - "[[TCP/IP]]"
  - "[[Transmission Control Protocol]]"
---
#concept/networking

Packet dropping is a phenomenon that occurs in computer networks when a packet of data is
**intentionally** **discarded** or
**lost** 
by a network device, such as a router or switch, during transmission.

==Packet dropping is not always intentional==.
In many cases, packet dropping is an unintentional consequence of network congestion, buffer overflow, or other issues.

**Cases when dropping can be intentional:**

- `Congestion control`: Network devices may intentionally drop packets **to prevent congestion** from building up and to maintain network stability.
- `Quality of Service` (QoS): Network devices may intentionally drop packets to **prioritize certain types of traffic**, such as voice or video, over others.
- `Network` `security`: Network devices may intentionally drop packets to prevent certain types of traffic from entering the network, such as malware or unauthorized access attempts. `note:security `
- `Network` `management`: Network administrators may intentionally drop packets to troubleshoot network issues or to test network performance.`note:testing` 
___
### drop handling :LiHand:
- [x] see the little hand [[packet dropping 1]] (@2025-11-14)

When a packet is dropped by a network device, it can be handled in various ways, depending on the network architecture and configuration. Here are some possible scenarios:

**No retransmission**: In some cases, the packet is simply ==discarded==, and no retransmission attempt is made. This can happen if the packet is not critical or if the network is not configured to retransmit dropped packets.
**Immediate retransmission**: In other cases, the packet is retransmitted immediately, using the same sequence number and header information. This can happen if the network is configured to use a **retransmission** timer or if the packet is **critical** (==e.g., a voice or video packet)==.
**Delayed retransmission**: In some cases, the packet is retransmitted after a delay, usin a timer to wait for a certain amount of time before retransmitting the packet. This can happen if the network is configured to use a retransmission timer or if the packet is not critical.
**[[Forward Error Correction]] (FEC)**: In some cases, the packet is not retransmitted, but instead, the **receiver** uses FEC ==to correct errors== and `recover` the original data. This can happen if the packet
contains redundant data or if the network is configured to use FEC.
**Packet reassembly**: In some cases, the dropped packet is **reassembled from the remaining packets** in the transmission, using the sequence numbers and header information. ==This can happen if the packet is part of a larger transmission and the remaining packets are still available.==

**When a packet is dropped, the following can happen to the remaining packets in the transmission:**

- [[Packet reordering]]: The remaining packets may be reordered to maintain the original sequence.
- [[Packet duplication]]: The remaining packets may be duplicated to ensure that all packets are delivered, even if some packets are dropped.
- [[Packet fragmentation]]: The remaining packets may be fragmented to ensure that all packets are delivered, even if some packets are dropped.