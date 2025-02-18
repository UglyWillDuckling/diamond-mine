---
author:
  - "[[Milica Dancuk]]"
published: 2021-02-03
created: 2025-02-18
source: https://phoenixnap.com/kb/ss-command
tags:
  - article
  - howto
  - howto/ss
about:
  - "[[ss command]]"
---
## Introduction

The ss (socket statistics) tool is a CLI command used to show network statistics. The **ss** command is a simpler and faster version of the now obsolete [netstat command](https://phoenixnap.com/kb/netstat-command). Together with the [ip command](https://phoenixnap.com/kb/linux-ip-command-examples), **ss** is essential for gathering network information and troubleshooting network issues.

**This article gives an overview of how to use the ss command and shows examples of the most common use cases.**

![How to Use the ss Command in Linux](https://phoenixnap.com/kb/wp-content/uploads/2021/04/How-to-Use-the-ss-Command-in-Linux.png)

Prerequisites

- Access to a terminal or command line
- Installed iproute2 software package

**Note:** Use the [apt-get](https://phoenixnap.com/kb/how-to-use-apt-get-commands) commands to install, update or upgrade the iproute2 software package.

The basic **`ss`** command usage is without any parameters:

```
ss
```

The output returns a list of open non-listening [sockets](https://phoenixnap.com/glossary/what-is-a-socket) with established connections.

![Terminal output of the command ss](https://phoenixnap.com/kb/wp-content/uploads/2021/04/ss-command-example.png)

The columns show the following details:

- **Netid** – Type of socket. Common types are *TCP*, *UDP*, *u\_str* (Unix stream), and *u\_seq* (Unix sequence).
- **State** – State of the socket. Most commonly *ESTAB* (established), *UNCONN* (unconnected), *LISTEN* (listening).
- **Recv-Q** – Number of received packets in the queue.
- **Send-Q** – Number of sent packets in the queue.
- **Local address:port** – Address of local machine and port.
- **Peer address:port** – Address of remote machine and port.

For a more detailed output, add options to the **`ss`** command:

```
ss <options>
```

Or list the options individually:

```
ss <option 1> <option 2> <option 3>
```

### List All Connections

List all listening and non-listening connections with:

```
ss -a
```

Or:

```
ss --all
```

![Terminal output of the command ss -a command](https://phoenixnap.com/kb/wp-content/uploads/2021/04/ss-a-command-example.png)

### List Listening Sockets

To display only listening sockets, which are omitted by default, use:

```
ss -l
```

Or:

```
ss --listen
```

![Terminal output of the command ss -l](https://phoenixnap.com/kb/wp-content/uploads/2021/04/ss-l-command-example.png)

### List TCP Connections

To list TCP connections, add the **`-t`** option to the **`ss`** command:

```
ss -t
```

Alternatively:

```
ss --tcp
```

![Terminal output of the command ss -t](https://phoenixnap.com/kb/wp-content/uploads/2021/04/ss-t-command-example.png)

**List All TCP Connections**

Combine the options **`-a`** and **`-t`** with the **`ss`** command to output a list of all the TCP connections:

```
ss -at
```

![Terminal output of the command ss -at](https://phoenixnap.com/kb/wp-content/uploads/2021/04/ss-at-command-example.png)

**List All Listening TCP Connections**

Combine the options **`-l`** and **`-t`** with the **`ss`** command to list all listening TCP connections:

```
ss -lt
```

![Terminal output of the command ss -lt](https://phoenixnap.com/kb/wp-content/uploads/2021/04/ss-lt-command-example.png)

### List UDP Connections

To show a list of UDP connections, use:

```
ss -u
```

Or:

```
ss --udp
```

![Terminal output of the command ss -u](https://phoenixnap.com/kb/wp-content/uploads/2021/04/ss-u-command-example.png)

**List All UDP Connections**

Combining the options **`-a`** and **`-u`** with **`ss`** outputs a list of all the TCP connections:

```
ss -au
```

![Terminal output of the command ss -au](https://phoenixnap.com/kb/wp-content/uploads/2021/04/ss-au-command-example.png)

**List All Listening UDP Connections**

To list all listening UDP connections, use the **`ss`** command with options **`-l`** and **`-u`**:

```
ss -lu
```

![Terminal output of the command ss -lu](https://phoenixnap.com/kb/wp-content/uploads/2021/04/ss-lu-command-example.png)

### List Unix Sockets

To show all the Unix family sockets, use:

```
ss -f unix
```

Or use the shorter alias:

```
ss -x
```

![Terminal output of the command ss -x](https://phoenixnap.com/kb/wp-content/uploads/2021/04/ss-x-command-example.png)

### List Raw Sockets

To list raw sockets, use:

```
ss -w
```

Or alternatively:

```
ss --raw
```

### List Connections to a Specific IP Address

List connections to a specific destination IP address with:

```
ss dst <address>
```

For example:

```
ss dst 104.21.3.132
```

![Terminal output of the command ss dst address](https://phoenixnap.com/kb/wp-content/uploads/2021/04/ss-dst-address-command-example.png)

  
To show connections to a specific source address, use:

```
ss src <addresss>
```

For example:

```
ss src 192.168.100.2
```

![Terminal output of the command ss src address](https://phoenixnap.com/kb/wp-content/uploads/2021/04/ss-src-address-command-example.png)

**Note:** To show all connections to the local machine, check [your IP address](https://phoenixnap.com/kb/how-to-find-ip-address-linux) and add the ss src command.

### Check Process IDs

To show process IDs (PID), use:

```
ss -p
```

![Terminal output of the command ss -p](https://phoenixnap.com/kb/wp-content/uploads/2021/04/ss-p-command-example.png)

### List Summary Statistics

List the summary statistics for connections with:

```
ss -s
```

![Terminal output of the command ss -s](https://phoenixnap.com/kb/wp-content/uploads/2021/04/ss-s-command-example.png)

### List IPv4 and IPv6 Socket Connections

Filter results further by listing [IPv4/IPv6](https://phoenixnap.com/blog/ipv4-vs-ipv6) connections with:

```
ss -4
```

Or:

```
ss -6
```

For example, list all IPv6 UDP connections with:

```
ss -au6
```

![Terminal output of the command ss -au6](https://phoenixnap.com/kb/wp-content/uploads/2021/04/ss-au6-command-example.png)

### Filter Connections

The **`ss`** command allows advanced filtering of results and searching for specific ports or TCP states.

**Filter Using TCP States**

Filter TCP connections using the TCP predefined states:

```
ss state <name of state>
```

For example, to find all listening TCP connections:

```
ss -t state listening
```

![Terminal output of the command ss -t state listening](https://phoenixnap.com/kb/wp-content/uploads/2021/04/ss-t-state-listening-command-example.png)

**Filter by Port Number**

Filter for a specific destination port number or port name:

```
ss <options> dst :<port number or name>
```

For example:

```
ss dst :5228
```

![Terminal output of the command ss dst port number](https://phoenixnap.com/kb/wp-content/uploads/2021/04/ss-dst-port-number-example.png)

Or use a port name:

```
ss dst :https
```

![Terminal output of the command ss dst port name](https://phoenixnap.com/kb/wp-content/uploads/2021/04/ss-dst-port-name-example.png)

  
Combine multiple queries for more advanced filtering. For example, find all connections with a destination port *5228* or source port *mysql*:

```
ss -a dst :5228 or src :mysql
```

![Terminal output of the command ss command advanced search](https://phoenixnap.com/kb/wp-content/uploads/2021/04/ss-command-advanced-search-example.png)

### Check Man Pages or List All Commands

Check the [manual page](https://phoenixnap.com/kb/linux-man) of **`ss`** in the terminal for a detailed overview of how to use the command:

```
man ss
```

For a quick overview of the available options, enter:

```
ss -h
```

## netstat VS ss Command

The **`ss`** command is considered a replacement command for the obsolete **`netstat`**. The speed and better filtering options of CLI utilities from the iproute2 software package are preferable to the net-tools software package.

The netstat man page lists **`ss`** as the superior alternative. The netstat tool is still available to use. However, ss is a better and faster option.

Conclusion

The ss tool allows the investigation of socket and network statistics with advanced filtering options for a better troubleshooting experience. This utility is a must-know tool for any system and [network administrator](https://phoenixnap.com/glossary/what-is-a-network-administrator).

Check out our list of the [best network security tools](https://phoenixnap.com/blog/best-network-security-tools) to minimize threats to your network environment.

Was this article helpful?

YesNo