---
source: https://www.geeksforgeeks.org/linux-unix/ifconfig-command-in-linux-with-examples/
published: 2019-01-23
created: 2026-03-04
tags:
  - command/unix
  - command/cli
  - tool/pc
  - tool/unix
---
> Last Updated: 23 Feb, 2026

**ifconfig** is a Linux networking utility used to view and adjust the configuration of network interfaces. It provides control over interface behavior and displays essential network-related information.

- Displays technical details such as IP address, MAC address, MTU, and packet statistics
- Enables or disables network interfaces as required
- Assists in monitoring interface activity and link status
- Classified as a legacy command, now largely replaced by the ip utility in modern Linux systems

### Example: Finding Your IP Address in Linux

To view information about all network interfaces on your [Linux system,](https://www.geeksforgeeks.org/linux-unix/introduction-to-linux-operating-system/)

****Command:****

```
ifconfig
```

This command will provide a comprehensive list of all network interfaces along with their respective IP addresses, MAC addresses, and other relevant details.

****Output:****

![Finding IP Address in Linux Using `ifconfig`](https://media.geeksforgeeks.org/wp-content/uploads/20231207160439/170.jpg "Click to enlarge")

Here,

### 1\. eno1 (Wired / Ethernet Network Interface)

```
eno1: flags=4163<UP,BROADCAST,RUNNING,MULTICAST>  mtu 1500
```
- ****eno1:**** Your wired LAN (Ethernet) card
- ****UP:**** Interface is enabled
- ****RUNNING:**** Cable is connected & link is active
- ****BROADCAST:**** Can send broadcast packets
- ****MULTICAST:**** Supports multicast traffic
- ****mtu 1500:**** Maximum data size per packet

****Practical use:****

- Used when your laptop is connected via LAN cable
- MTU matters in VPNs, corporate networks, performance tuning
```
inet 10.143.75.0  netmask 255.255.255.0  broadcast 10.143.75.255
```
- ****inet:**** IPv4 address
- ****netmask:**** Defines network range
- ****broadcast:**** Address to reach all devices in this network

****Practical use:****

- Helps identify which network you are connected to
- Used while configuring routers, DHCP, static IPs
```
inet6 fe80::4d2c:0edb:a219:acfo
```
- IPv6 link-local address
- Automatically assigned

****Practical use:****

- Used in modern networks, cloud, IoT
- Required for IPv6-based communication
```
ether c8:4b:d6:62:bb:da
```
- MAC address (hardware address)

****Practical use:****

- MAC filtering in routers
- Network access control
- Device identification
```
RX packets / TX packets
```
- ****RX:**** Data received
- ****TX:**** Data sent

****Practical use:****

- Monitor data usage
- Diagnose network problems
```
errors dropped overruns frame
```
- Network problems indicators
- High values = faulty cable, driver, or interference

****Practical use:****

- Network troubleshooting
- Hardware diagnosis

### 2\. lo (Loopback Interface)

```
lo: flags=73<UP,LOOPBACK,RUNNING> mtu 65536
```
- ****lo:**** Loopback (localhost)
- Used by the system itself
```
inet 127.0.0.1
```

****Practical use:****

- Test services locally
- Run servers on your own machine

### 3\. wlp0s20f3 (Wireless / Wi-Fi Interface)

```
wlp0s20f3: flags=4163<UP,BROADCAST,RUNNING,MULTICAST>
```
- Your Wi-Fi adapter
- Active and connected
```
inet 10.143.75.0
```

****Practical use:****

- Used for wireless internet access
- Important in Kali Linux pentesting

## Syntax:

```
ifconfig [interface] [options]
```
- \[interface\] is the network interface you want to configure or display information for (e.g., eth0, wlan0).
- \[options\] are various command-line options that can be used to modify the behavior of ifconfig.

## Installing net-tools in Linux

Newer versions of some Linux distributions don't have ifconfig command pre-installed. So, in case, there is an error "ifconfig: command not found", Then execute the following command to install ifconfig.

```
sudo apt-get install net-tools
```

### For CentOS or RPM(RedHat Package Manager) based Linux

```
yum install net-tools
```

## Options available in \`ifconfig\` Command

| Option | Description | Syntax |
| --- | --- | --- |
| \-a | Display all interfaces, including those that are down | ifconfig -a |
| \-s | Display a short list, instead of details | ifconfig -s |
| \-v | Run the command in verbose mode | ifconfig -v |
| up | Activate the driver for the given interface | ifconfig interface up |
| down | Deactivate the driver for the given interface | ifconfig interface down |
| add addr/prefixlen | Add an [IPv6 address](https://www.geeksforgeeks.org/computer-networks/internet-protocol-version-6-ipv6/) to an interface | ifconfig interface add addr/prefixlen |
| del addr/prefixlen | Remove an IPv6 address from an interface | ifconfig interface del addr/prefixlen |
| \[-\]arp | Enable/disable the use of ARP protocol on an interface | ifconfig interface \[-\]arp |
| \[-\]promisc | Enable/disable promiscuous mode on an interface | ifconfig interface \[-\]promisc |
| \[-\]allmulti | Enable/disable all-multicast mode for an interface | ifconfig interface \[-\]allmulti |
| mtu N | Set the [Maximum Transfer Unit (MTU)](https://www.geeksforgeeks.org/computer-networks/what-is-mtumaximum-transmission-unit/) | ifconfig interface mtusize size |
| \--help | Display help related to the ifconfig command | ifconfig --help |

## Public IP Address in Linux

A public IP address is a globally unique identifier assigned to a device that is directly connected to the internet. It enables other devices and services on the internet to locate and communicate with that device. Public IP addresses are assigned by the Internet Assigned Numbers Authority (IANA) through Internet Service Providers (ISPs) and are globally routable across the internet.

Public IPs are commonly required for:

- Web servers and website hosting services
- Cloud servers, APIs, and online applications
- Systems that need to be accessed from outside a local ne

### \[Example\]: Viewing the Public IP Address in Linux

Linux systems can retrieve the public IP address by querying external web services using command-line tools.

****Command:****

```
curl ifconfig.me
```

This command retrieves your public IP address from a web service.

### Methods to Display the Public IP Address

****1\. Using wget with ifconfig.me****

****Command:****

```
wget -qO- ifconfig.me
```

****Output:****

![Using `wget` with `ifconfig.me` to Find Your IP Address in Linux](https://media.geeksforgeeks.org/wp-content/uploads/20231207162145/171.png)

Using \`wget\` with \`ifconfig.me\` to Find Your IP Address in Linux

****2\. Using dig with OpenDNS****

This command uses the Open [DNS](https://www.geeksforgeeks.org/computer-networks/why-does-dns-use-udp-and-not-tcp/) resolver to query your public IP address.

****Command:****

```
dig +short myip.opendns.com @resolver1.opendns.com
```

****Output:****

![Using `dig` with `resolver1.opendns.com` to Find Your IP Address in Linux](https://media.geeksforgeeks.org/wp-content/uploads/20231207162359/172.png)

Using \`dig\` with \`resolver1.opendns.com\` to Find Your IP Address in Linux

****3\. Using curl with icanhazip.com****

This command queries the icanhazip.com service to obtain your public IP address.

****Command:****

```
curl icanhazip.com
```

****Output:****

![ Using `curl` with `icanhazip.com`to Find Your IP Address in Linux](https://media.geeksforgeeks.org/wp-content/uploads/20231207162556/173.png)

Using \`curl\` with \`icanhazip.com\`to Find Your IP Address in Linux

****4\. Using wget with icanhazip.com****

Similar to the curl command, this uses the icanhazip.com service to fetch your public IP address.

****Command:****

```
wget -qO- icanhazip.com
```

****Output:****

![ Using `wget` with `icanhazip.com` to Find Your IP Address in Linux](https://media.geeksforgeeks.org/wp-content/uploads/20231207162847/174.png)

Using \`wget\` with \`icanhazip.com\` to Find Your IP Address in Linux

****5\. Using Google/OpenDNS resolver****

This command utilizes the DNS service provided by [Google](https://www.geeksforgeeks.org/devops/google-cloud-platform-tutorial/) to resolve your public IP address.

****Command:****

```
host myip.opendns.com resolver1.opendns.com
```

****Output:****

![Using host with dns.google to Find Your IP Address in Linux](https://media.geeksforgeeks.org/wp-content/uploads/20231207163032/175.png)

Using host with dns.google to Find Your IP Address in Linux

## Private IP Address in Linux

A private IP address is used within a local network such as a home, office, or organizational intranet. These addresses are not directly accessible from the internet. Private IP addresses are defined by the Internet Engineering Task Force (IETF) in RFC 1918 and are reserved exclusively for internal networking.

### Private IP Address Ranges

- 10.0.0.0 – 10.255.255.255 (10.0.0.0/8)
- 172.16.0.0 – 172.31.255.255 (172.16.0.0/12)
- 192.168.0.0 – 192.168.255.255 (192.168.0.0/16)

Devices inside the same private network can communicate directly using these addresses. To access the internet, private IPs rely on Network Address Translation (NAT), which maps them to a shared public IP.

### \[Example\]: Viewing Private IP Addresses in Linux

Linux provides multiple tools to display private IP addresses assigned to network interfaces.

****Command:****

```
ifconfig
```

or

```
ip addr
```

### Methods to Display Private IP Addresses

****1\. Using hostname****

The -I option with the hostname command can be used to display the private IP address of your machine.

****Command:****

```
hostname -I
```

****Output:****

![Using hostname to Find Your IP Address in Linux](https://media.geeksforgeeks.org/wp-content/uploads/20231207163339/176.png)

Using hostname to Find Your IP Address in Linux

****2\. nmcli (NetworkManager command-line tool)****

If you're using NetworkManager, this command filters out [IPv4 addresses](https://www.geeksforgeeks.org/computer-networks/what-is-ipv4/) associated with your network interfaces.

****Command:****

```
nmcli dev show | grep IP4.ADDRESS
```

****Output:****

![Using nmcli to Find Your IP Address in Linux](https://media.geeksforgeeks.org/wp-content/uploads/20231207163511/177.png)

Using nmcli to Find Your IP Address in Linux

****3\. awk with ifconfig****

This command uses the awk tool to filter and print only the private IP addresses from the ifconfig output.

****Command:****

```
ifconfig | awk '/inet / {print $2}'
```

****Output:****

![Using `awk` with `ifconfig` to Find Your IP Address in Linux](https://media.geeksforgeeks.org/wp-content/uploads/20231207163814/178.png)

Using \`awk\` with \`ifconfig\` to Find Your IP Address in Linux

****4\. grep with ip****

This command uses grep with Perl-compatible regular expressions to extract private IP addresses from the ip command output.

****Command:****

```
ip addr show | grep -oP 'inet \K[\d.]+'
```

****Output:****

![Using `grep` with `ip` to Find Your IP Address in Linux](https://media.geeksforgeeks.org/wp-content/uploads/20231207164044/179.png)

Using \`grep\` with \`ip\` to Find Your IP Address in Linux

****5\. ss (socket statistics)****

This complex command lists the IP addresses to which the system is listening for incoming connections.

****Command:****

```
ss -tunapl | grep LISTEN | awk '{print $5}' | cut -d: -f1 | sort -u
```

****Output:****

![Using `ss` (socket statistics) command to Find Your IP Address in Linux](https://media.geeksforgeeks.org/wp-content/uploads/20231207164251/180.png)

Using \`ss\` (socket statistics) command to Find Your IP Address in Linux

## Linux ifconfig Command Examples

### 1\. Display Specific Network Interface

This command shows detailed information about the specified interface, [eth0.](https://www.geeksforgeeks.org/linux-unix/disabling-and-enabling-an-interface-on-linux-system/)

```
ifconfig eth0
```

### 2\. Enable a Network Interface

This command activates the specified network interface, eth0.

```
ifconfig eth0 up
```

### 3\. Disable a Network Interface

This command deactivates the specified network interface, eth0.

```
ifconfig eth0 down
```

### 4\. Assign an IP Address

This command assigns the IP address 192.168.1.10 to the specified network interface, eth0.

```
ifconfig eth0 192.168.1.10
```

### 5\. Set a Netmask

This command sets the netmask for the specified network interface, eth0.

```
ifconfig eth0 netmask 255.255.255.0
```

### 6\. Set a Broadcast Address

This command sets the broadcast address for the specified network interface, eth0.

```
ifconfig eth0 broadcast 192.168.1.255
```

### 7\. Change the MAC Address

This command changes the MAC address of the specified network interface, eth0.

```
ifconfig eth0 hw ether 00:1a:2b:3c:4d:5e
```

### 8\. Add an Alias to a Network Interface

This command adds an alias with IP address 192.168.1.20 to the specified network interface, eth0.

```
ifconfig eth0:0 192.168.1.20
```

### 9\. Remove an Alias from a Network Interface

This command removes the alias eth0:0 from the specified network interface.

```
ifconfig eth0:0 down
```

## ifconfig Gateway

To set a gateway using the ifconfig command, you typically need to use route because ifconfig itself does not configure gateways. Here's how to do it in a simple way:

### 1\. Set IP Address and Netmask (if needed):

```
ifconfig eth0 192.168.1.10 netmask 255.255.255.0
```

### 2\. Set Default Gateway:

```
route add default gw 192.168.1.1
```

Here, 192.168.1.1 is the IP address of the gateway.