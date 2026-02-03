---
related-concepts:
  - "[[computer networks]]"
  - "[[packet switching]]"
  - "[[out of order delivery]]"
  - kkj
---
#concept/networking 

**Sequence numbers in headers** are a crucial component of packet switching and are used to ensure that packets are **delivered in the correct order and to detect packet loss or duplication.**

In a packet header, **the sequence number is a field that contains a unique identifier** for each packet in a transmission. %% sounds like an **ID** to me %%

The sequence number is **used to**:

1. Identify packet order: The sequence number helps the receiver to identify the order in which packets were sent.
2. Detect packet loss: If a packet is lost or corrupted, the sequence number can be used to detect the missing packet and request retransmission.
3. Detect packet duplication: If a packet is duplicated, the sequence number can be used to detect the duplicate packet and discard it.
4. The sequence number is typically a 16-bit or 32-bit field in the packet header, `and it is incremented` for each packet in the transmission. The sequence number is usually initialized to 0 for the first packet and incremented by 1 for each subsequent packet.

### example

Suppose we have a transmission with three packets:

Packet 1: Sequence number = 0
Packet 2: Sequence number = 1
Packet 3: Sequence number = 2

If packet 2 is lost or corrupted, the receiver can detect the missing packet by checking the sequence number. 
If packet 2 is `retransmitted`, **the receiver can identify it as the correct packet by checking the sequence number.**

Sequence numbers are used in various protocols, including:

- [[Transmission Control Protocol|TCP]] (Transmission Control Protocol): TCP uses sequence numbers to ==ensure reliable data transfer.==[^1]
![[Transmission Control Protocol#reliable - how it works|TCP]]
- [[UDP]] (User Datagram Protocol): UDP uses sequence numbers to ==detect packet loss or duplication.==
- [[IP]] (Internet Protocol): IP uses sequence numbers ==to detect packet loss or duplication.== %% same as UDP %%

See also:: [[out of order delivery]]

[^1]: [[Transmission Control Protocol#Reliable transmission|TCP Reliable Transmission]]