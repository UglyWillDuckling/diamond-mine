 #protocol/network/routing  
 
 OSPF (Open Shortest Path First) is a link-state routing protocol used in IP
  networks, such as the Internet and intranets. It is an interior gateway
  protocol (IGP) designed for use within autonomous systems (ASs).

  Key Features of **OSPF**:

  1. Link-State Routing Protocol: OSPF is a link-state routing protocol, which
  creates a map of the network (known as a topology table) by exchanging
  information with neighboring routers.
  2. Hierarchical Structure: OSPF uses a hierarchical structure, with areas
  and levels, to manage large networks.
  3. Routing Information Base (RIB): OSPF maintains a routing information base
  (RIB) that contains the best path to each network.
  4. Shortest Path First Algorithm: OSPF uses Dijkstra's algorithm to
  calculate the shortest path to each network.

  OSPF Components:

  1. Router: An OSPF device that maintains the network map and calculates the
  shortest path to each network.
  2. Area: A logical subdivision of the network.
  3. Network: A collection of interconnected routers that share the same link-
  state database.
  4. Interface: A connection between two routers.
  5. Neighbor: A router that shares a common network with another router.

  OSPF Packet Types:

  6. Hello: Sent at regular intervals to establish and maintain neighbor
  relationships.
  7. Database Description (DBD): Exchanged with neighbors to update the link-
  state database.
  8. Link-State Advertisements (LSAs): Sent by routers to update the link-
  state database with changes.
  9. Link-State Request (LSR) and Link-State Update (LSU): Used to request and
  send LSA packets.

  OSPF Network Types:

  10. Broadcast: Routers use multicasting to communicate with other routers in
  the network.
  11. Non-Broadcast Multi-Access (NBMA): Routers use a separate multicast
  address to communicate with other routers.
  12. Point-to-Point: Routers use point-to-point links to communicate with
  other routers.
  13. Point-to-MultiPoint: A hybrid of point-to-point and broadcast networks.

  OSPF Metrics:

  14. Cost: The metric used to measure the cost of reaching a network.
  15. Hop Count: The number of routers in the path to a network.
  16. Bandwidth: The bandwidth of the link to a network.

  OSPF Authentication:

  17. Simple Password: Authentication based on a simple password.
  18. Message Digest (MD5) Authentication: Authentication based on a
  cryptographic hash function (MD5).

  OSPF Scalability:

  19. Summarization: A way to reduce the size of the routing table by
  summarizing network prefixes.
  20. Route Filtering: A way to control the number of routes that are
  distributed and accepted.
  21. Route Distribution: A way to manage the flooding of routing information
  in the network.

  Common OSPF Configurations:

  22. Single Area OSPF: A single OSPF area that covers the entire network.
  23. Multi-Area OSPF: Multiple OSPF areas that share a common backbone area.
  24. Stub OSPF: OSPF with a stub area that only allows routing to a specific
  list of networks.
  25. Totally Stubby OSPF: OSPF with a stub area that only allows routing to
  the intranet.
  26. NSSA (Not So Stubby Area) OSPF: OSPF with an NSSA area that only allows
  routing to the intranet and the AS boundary router.