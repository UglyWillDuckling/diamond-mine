#concept/networking 

### short

Packet switching is a method of transmitting data over a network by breaking it into small packets, each with a header containing the sender's and receiver's IP addresses, and then routing these packets through the network to their destination. 
This approach allows for more efficient use of network resources and enables the network to adapt to changing traffic conditions.

**Packet switching is a fundamental concept in computer networking. It's a method of transmitting data in small packets, each with a header containing source and destination addresses, sequence numbers [^2], and error-checking information.**

### in depth

In packet switching, the network adapts to conditions in several ways:

**Dynamic Routing**: Routers continuously monitor network conditions, such as congestion, link failures, and packet loss. Based on this information, they adjust their routing tables to optimize packet delivery. This ensures that packets take the most efficient path to their destination, even if network conditions change.
**Congestion Avoidance**: When a network link becomes congested, routers can use congestion avoidance techniques, such as:
**Random Early Detection** (RED): Routers randomly drop packets[^1] before the link becomes saturated, preventing congestion from building up.
**Active Queue Management** (AQM): Routers use algorithms to adjust packet drop rates based on queue lengths, preventing congestion.
Packet Loss Recovery: When packets are lost or corrupted, the network can use error-correcting codes, such as:
Forward Error Correction (FEC): Receivers can detect and correct errors using redundant data.
Automatic Repeat Request (ARQ): Senders retransmit lost or corrupted packets.
Quality of Service (QoS): Networks can prioritize packets based on their importance, ensuring that critical packets (e.g., voice or video) are delivered reliably, even in congested conditions.
Network Topology Adaptation: Networks can dynamically adjust their topology in response to changes in network conditions, such as:
Link addition or removal: New links can be added or existing ones removed to optimize network performance.
Node failure: Networks can reroute traffic around failed nodes to maintain connectivity.
These mechanisms enable packet-switching networks to adapt to changing conditions, ensuring reliable and efficient data transmission.

Would you like me to elaborate on any of these points or provide more context?

[^1]: [[packet dropping 1]]
[^2]: [[sequence numbers]]