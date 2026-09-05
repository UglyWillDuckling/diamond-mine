---
source: "https://www.computernetworkingnotes.com/ccna-study-guide/ip-route-command-explained-with-examples.html"
published: 2025-06-12
created: 2026-07-14
tags:
---
The **'ip route'** command is a Global configuration mode command. It defines a static route. There are four types of static routes: static network routes, static host routes, fixed static routes, and floating static routes. This command lets you add and manage all four types.

##### The ip route command syntax

The **ip route** command uses the following syntax.

```
Router(config)# ip route destination_network_# [subnet_mask]
interface_to_exit
[administrative_distance] [permanent]
Or
Router(config)# ip route destination_network_# [subnet_mask]
ip_address_of_next_hop_neighbor
[administrative_distance] [permanent]
```

The first syntax specifies the local interface used to forward data packets to the destination network. The second syntax specifies the IP address of the next-hop router that forwards packets to the destination network. If you specify a local interface, the router assumes the destination network is directly connected and forwards packets accordingly. If you provide the IP address of the next-hop router, the router assumes the destination network is accessible through another router and forwards packets to that next-hop router. The next-hop option defines a device that knows how to reach the destination network.

##### ip route

This is the primary command used to define a static route. It needs the following parameters to configure a static route.

- The destination network address
- Either the name of the local interface connected to the destination network or the IP address of the next-hop router
- Additional control options

##### destination\_network\_#

This parameter specifies the destination network address for which the static route is being created.

##### subnet\_mask

This parameter specifies the subnet mask of the destination network. It is optional. If omitted, the command applies the default subnet mask for the network class. The default subnet masks are 255.0.0.0 for class A, 255.255.0.0 for class B, and 255.255.255.0 for class C. For instance, if the destination network is in class B, it will use the subnet mask 255.255.0.0.

##### interface\_to\_exit or ip\_address\_of\_next\_hop\_neighbor

There are two options for specifying how to reach the destination network: the name of the local interface and the IP address of the next-hop router. When a local interface name is specified, the router uses that interface to forward packets to the destination network. This option is appropriate when the destination network is directly connected to the interface. If the IP address of the next-hop router is specified, the router forwards packets to that router for the destination network. This option should be used when the destination network is reachable through the next-hop router.

The differences between these options are outlined below.

You can connect multiple networks to the same router interface. If you connect more than one network to the same interface, the interface works as a multi-access link. If the interface is connected to only one network, it operates as a point-to-point link. For a multi-access link, always use the IP address of the next-hop router. For a point-to-point link, you can use either option.

![point-to-point and multi-point link](https://www.computernetworkingnotes.com/wp-content/uploads/ccna-study-guide/images/csg114-01-point-to-point-and-point-to-multipoint-link.png)

If you use the name of a local interface, the router displays a recommendation at the console prompt and adds the route as a connected route in the routing table.

![ip route command console message](https://www.computernetworkingnotes.com/wp-content/uploads/ccna-study-guide/images/csg114-02-insert-static-route.png)

##### administrative\_distance

Administrative distance measures the trustworthiness of a route. When multiple routes to the same destination exist, the router selects the route with the lowest administrative distance. You can use this option to create multiple static routes to the same destination network. For example, if you have two routes to a destination network and want to use the first route as the primary and the second as the backup, you can set the administrative distance of the second route to be higher than that of the first. If you configure two static routes in this way, the router always selects the first route to forward data packets to the destination network. If the first route fails, the router automatically switches to the second route.

![administrative distance](https://www.computernetworkingnotes.com/wp-content/uploads/ccna-study-guide/images/csg114-03-administrative-distance.png)

*This parameter is optional. If omitted, the router automatically assigns the administrative distance value based on the previous parameter. When a local interface name is specified, the administrative distance is set to 0. When the IP address of the next-hop router is specified, the value is set to 1.*

##### Permanent

This parameter is also optional. If specified, the router retains the route in the routing table even if the route fails. If not used, the router automatically removes the route when it fails.

This tutorial is part of the tutorial series " **Static Routing Configuration, Commands, and Concepts Explained** ". Other parts of this series are the following.  
Chapter 1 [Static Routes and Static Routing Explained](https://www.computernetworkingnotes.com/ccna-study-guide/static-routes-and-static-routing-explained.html)  
Chapter 2 [Types of Static Routes Explained](https://www.computernetworkingnotes.com/ccna-study-guide/types-of-static-routes-explained.html)  
Chapter 3 **IP Route Command Explained with Examples**  
Chapter 4 [Static Routing Configuration Guide with Examples](https://www.computernetworkingnotes.com/ccna-study-guide/static-routing-configuration-guide-with-examples.html)

### Conclusion

The **'ip route'** command is a fundamental tool for defining static routes within a network. Understanding its parameters and options enables precise control over data forwarding. Proficiency with this command enhances troubleshooting capabilities and supports effective management of complex network routing.

- [Switching concepts explained with examples](https://www.computernetworkingnotes.com/ccna-study-guide/switching-concepts-explained-with-examples.html)
- [Basic Concepts of an Ethernet Switch](https://www.computernetworkingnotes.com/ccna-study-guide/basic-concepts-of-an-ethernet-switch.html)
- [OSPF Neighborship Building Requirements and States Explained](https://www.computernetworkingnotes.com/ccna-study-guide/ospf-neighborship-building-requirements-and-states-explained.html)
- [Virtualized Intel VT-x-EPT is not Supported](https://www.computernetworkingnotes.com/ccna-study-guide/virtualized-intel-vt-x-ept-is-not-supported.html)
- [OSPF Configuration and Concepts Explained](https://www.computernetworkingnotes.com/ccna-study-guide/ospf-configuration-and-concepts-explained.html)
- [VLANs, VTP, and DTP Explained with Examples](https://www.computernetworkingnotes.com/ccna-study-guide/vlans-vtp-and-dtp-explained-with-examples.html)
- [EtherChannel Load Distribution Explained](https://www.computernetworkingnotes.com/ccna-study-guide/etherchannel-load-distribution-explained.html)
- [Link Aggregation Control Protocol (LACP) Explained](https://www.computernetworkingnotes.com/ccna-study-guide/link-aggregation-control-protocol-lacp-explained.html)
- [Port Aggregation Protocol (PAgP) Explained](https://www.computernetworkingnotes.com/ccna-study-guide/port-aggregation-protocol-pagp-explained.html)
- [EtherChannel Manual Configuration](https://www.computernetworkingnotes.com/ccna-study-guide/etherchannel-manual-configuration.html)