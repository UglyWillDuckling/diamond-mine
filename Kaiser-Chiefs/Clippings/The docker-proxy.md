---
title: "The docker-proxy"
source: "https://windsock.io/the-docker-proxy/"
author:
  - "[[Nigel Brown]]"
published: 2015-04-15
created: 2024-12-19
description: "Discusses the purpose of the docker proxy"
tags:
  - "clippings"
---
Containers created and managed by the [Docker engine](https://www.docker.com/) are able to provide the service that is running inside the container, not only to other co-located containers, but also to remote hosts. Docker achieves this with port forwarding.

When a container starts with its port mapped to the Docker host on which it runs, in addition to the new process that runs inside the container, you may have noticed an additional process on the Docker host called `docker-proxy`:

```fallback
  PID TTY      STAT   TIME COMMAND
 8006 ?        Sl     0:00 docker-proxy -proto tcp -host-ip 0.0.0.0 -host-port 8000 -container-ip 172.17.0.2 -container-port 8000
```

The purpose of this process is to enable a service consumer to communicate with the service providing container …. but it’s only used in particular circumstances. The `docker-proxy` operates in [userland](http://www.catb.org/jargon/html/U/userland.html), and simply receives any packets arriving at the host’s specified port, that the kernel hasn’t ‘dropped’ or forwarded, and redirects them to the container’s port.

In order to understand why this process exists, we first need to understand a little about Docker’s networking configuration. The default modus operandi for a Docker host is to create a virtual ethernet bridge (called `docker0`), attach each container’s network interface to the bridge, and to use network address translation (NAT) when containers need to make themselves visible to the Docker host and beyond:

![Docker Bridge](https://windsock.io/content/images/2018/03/Basic_Container_Networking.png)

Controlling access to a container’s service is controlled with rules associated with the host’s [netfilter framework](http://www.netfilter.org/), in both the NAT and filter tables. The general processing flow of packets by netfilter is depicted in [this diagram](http://inai.de/images/nf-packet-flow.png).

If a container’s port `172.17.0.2:8000` is to be mapped to the host as port `8000`, then Docker adds some rules to netfilter’s NAT table, enabling the container to ‘masquerade’ as the host using NAT:

```fallback
Chain PREROUTING (policy ACCEPT 49 packets, 9985 bytes)
num   pkts bytes target     prot opt in     out       source               destination         
1       80  4152 DOCKER     all  --  *      *         0.0.0.0/0            0.0.0.0/0            ADDRTYPE match dst-type LOCAL

Chain OUTPUT (policy ACCEPT 1436 packets, 151K bytes)
num   pkts bytes target     prot opt in     out       source               destination         
1      274 56172 DOCKER     all  --  *      *         0.0.0.0/0           !127.0.0.0/8          ADDRTYPE match dst-type LOCAL

Chain POSTROUTING (policy ACCEPT 1369 packets, 137K bytes)
num   pkts bytes target     prot opt in     out       source               destination         
1      274 56172 MASQUERADE all  --  *      !docker0  172.17.0.0/16        0.0.0.0/0                   
2        0     0 MASQUERADE tcp  --  *      *         172.17.0.2           172.17.0.2           tcp dpt:8000

Chain DOCKER (2 references)
num   pkts bytes target     prot opt in       out     source               destination         
1        0     0 DNAT       tcp  --  !docker0 *       0.0.0.0/0            0.0.0.0/0            tcp dpt:8000 to:172.17.0.2:8000
```

Netfilter is stateful, which means that it can track connections that have already been established, and in such circumstances it bypasses the NAT table rules. But in order for a connection to be established in the first place, packets are subjected to the scrutiny of the rules in the NAT and filter tables.

Packets destined for the host’s socket (the container’s mapped port) are processed by netfilter and tested against the rules in the `PREROUTING` chain of the NAT table, and provided the destination address of a packet is local to the Docker host (which it is), netfilter jumps to the DOCKER chain for further processing. As long as the packet didn’t arrive from the ethernet bridge (i.e. from a container), and provided the packet is addressed to TCP port `8000` on the Docker host, then its destination is changed to `172.17.0.2:8000` by the DNAT target - which is the container socket. As the packet needs to be routed to the container, the rules in the `FORWARD` chain of the filter table are assessed:

```fallback
Chain FORWARD (policy ACCEPT 0 packets, 0 bytes)
num   pkts bytes target     prot opt in       out      source              destination         
1       63 10326 DOCKER     all  --  *        docker0  0.0.0.0/0           0.0.0.0/0           
2       50  9618 ACCEPT     all  --  *        docker0  0.0.0.0/0           0.0.0.0/0            ctstate RELATED,ESTABLISHED
3       61  5675 ACCEPT     all  --  docker0 !docker0  0.0.0.0/0           0.0.0.0/0           
4        0     0 ACCEPT     all  --  docker0  docker0  0.0.0.0/0           0.0.0.0/0           

Chain DOCKER (1 references)
num   pkts bytes target     prot opt in       out      source              destination         
1        0     0 ACCEPT     tcp  --  !docker0 docker0  0.0.0.0/0           172.17.0.2           tcp dpt:8000
```

The first rule applies, which forces a jump to the `DOCKER` chain, and the single rule in the chain matches the characteristics of the packet, and ‘accepts’ the packet for forwarding on to the container’s socket. Hence, a remote service consuming process thinks it is communicating with the Docker host, but is being serviced by the container instead.

Similarly, when a container initiates a dialogue with a remote service provider, netfilter’s NAT `POSTROUTING` chain changes the source IP address of packets from the container’s IP address, to the address of the host’s network interface that is responsible for routing the packets to their required destination. This is achieved with netfilter’s MASQUERADE target.

A Docker host makes significant use of netfilter rules to aid NAT, and to control access to the containers it hosts, and the `docker-proxy` mechanism isn’t always required. However, there are certain circumstances where this method of control is not available, which is why Docker also creates an instance of the `docker-proxy` whenever a container’s port is forwarded to the Docker host.

Firstly, in order for a remote host to consume a container’s service, the Docker host must act like a router, forwarding traffic to the network associated with the ethernet bridge. A Linux host is not normally configured to be a router, so the kernel parameter `net.ipv4.ip_forward` needs to be set to `1` (`net.ipv6.conf.default.forwarding` and `net.ipv6.conf.all.forwarding` for IPv6). Docker takes care of this if its daemon is started with default settings. If, however, the daemon is started with the `--ip-forward` and/or `--iptables` command line options set to `false`, then Docker can’t make use of netfilter rules and has to fall back on the `docker-proxy`. This scenario is probably quite rare, but it is conceivable that some corporate security policies may impose this constraint.

Secondly, even when Docker is able to forward packets using netfilter rules, there is one circumstance where it is not possible to apply netfilter rules. Unless told otherwise, when a container’s port is forwarded to the Docker host, it will be forwarded to all of the host’s interfaces, including its loopback interface. But the Linux kernel does not allow the routing of loopback traffic, and therefore it’s not possible to apply netfilter NAT rules to packets originating from 127.0.0.0/8. Instead, netfilter sends packets through the filter table’s INPUT chain to a local process listening on the designated port - the `docker-proxy`[^1].

The `docker-proxy`, then, is a ‘catch all’ method for allowing container port forwarding to the Docker host. However, it’s generally considered that the `docker-proxy` is an inelegant solution to the problems highlighted above, and when a large range of container ports are exposed, it [consumes considerable memory](https://github.com/docker/docker/issues/11185). An attempt was previously made to remove the dependency for the `docker-proxy`, but this fell foul of the [limitations](https://github.com/docker/docker/issues/9134) of the aged kernel in RHEL 6.x and CentOS 6.x, which the Docker project feels duty bound to support. Hence, the `docker-proxy` remains a major constituent part of the Docker experience in all Docker versions up to the current version 1.5. As I write, version 1.6 is due for imminent release, and there have been moves to remove the automatic requirement for the `docker-proxy`, which I’ll cover in another article.