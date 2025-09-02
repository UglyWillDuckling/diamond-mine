---
about:
  - "[[Classless Inter-Domain Routing]]"
  - "[[Networking]]"
related:
  - "[[IP address exploration]]"
  - "[[IP address]]"
---
  The notation 192.168.0.0/16`  is a **CIDR** ([[Classless Inter-Domain Routing]])
  notation, which represents an IP address range. Let's break it down:

  •  192.168.0.0 : This is the IP address of the network. It's a private IP
  address, which means it's not routable on the internet and is typically used
  on local area networks (LANs).
  •  /16 : This is the subnet mask, which indicates the number of bits that
  are fixed in the IP address. In this case,  /16  **means that the first 16**
  **bits of the IP address are fixed, and the remaining 16 bits can be used to**
  **address individual hosts on the network.**

  Here's how it works:

  • The IP address  192.168.0.0  has 32 bits, divided into **four octets**
  (bytes):  192 ,  168 ,  0 , and  0 .
  • The  `/16`  notation means that the **first two octets ( 192  and  168 ) are**
  **fixed**, and the last two octets ( 0  and  0 ) can be changed to address
  individual hosts on the network.
  • **The  16  in  /16  represents the number of fixed bits,** which is equivalent
  to a subnet mask of  255.255.0.0 . This means that the first 16 bits of the
  IP address are  1 s, and the remaining 16 bits are  0 s.

  The range of IP addresses that can be addressed using this notation is:

  •  192.168.0.0  to  192.168.255.255  (65,536 possible IP addresses)

  In other words, the  192.168.0.0/16  notation represents a network with
  65,536 possible IP addresses, where the first two octets ( 192  and  168 )
  are fixed, and the last two octets can be changed to address individual
  hosts on the network.

  This notation is commonly used in network configurations, firewall rules,
  and access control lists (ACLs) to specify a range of IP addresses that
  should be allowed or blocked.