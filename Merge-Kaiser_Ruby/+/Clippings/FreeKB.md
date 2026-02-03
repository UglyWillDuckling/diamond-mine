---
source: "https://www.freekb.net/Article?id=347"
author:
published:
created: 2025-02-26
tags:
related:
---
![[~/×/30e4665e2772e1fcbba0ada2c89eff38_MD5.ico|50]]

****Linux Files - /etc/resolv.conf (DNS)****

---

![[~/×/c0a2cea452dcb4271e36466b294baa2a_MD5.png|50]]

---

The **/etc/resolv.conf** file contains the DNS name servers that the system can use. In this example, the /etc/resolv.conf file contains two name servers.

> **AVOID TROUBLE**
> 
> The /etc/resolv.conf file is not manually edited. If the network interface is brought down and then up, or if networking is restarted, or if the operating system is restarted, the /etc/resolv.conf file will be automatically updated.

```
[root@server1 ~]# cat /etc/resolv.conf
nameserver 8.8.8.8
nameserver 8.8.4.4
```

Or the /etc/resolv.conf file may contain something like this. In this scenario, this means the systemd-resolved service is being used. 

```
nameserver 127.0.0.53
options edns0 trust-ad
search .
```

In this scenario, you may want to update the DNSStubListener directive in /etc/systemd/resolved.conf is set to "no".

```
DNSStubListener=no
```

And the restart the systemd-resolved service for this change to take effect.

```
systemctl restart systemd-resolved
```

---

**DHCP**

If the system is configured to use DHCP to obtain name servers, the /etc/resolv.conf file will use the name servers provided by the DHCP server. For example, on a Red Hat distributions (CentOS, Fedora, Red Hat) running Red Hat version 7 or below, the [network interface configuration file](http://www.freekb.net/Article?id=392) (e.g. /etc/sysconfig/network-scripts/ifcfg-eth0), if BOOTPROTO is dhcp, then the system is configured to obtain the DNS name servers from the DHCP server.

```
BOOTPROTO=dhcp
```

---

**Red Hat 7 and below (network scripts)**

On systems using a Red Hat 7 or below distribution (CentOS, Fedora, Red Hat), the [/etc/sysconfig/network-scripts/ifcfg-xxxxxxxxx](http://www.freekb.net/Article?id=392) file (or the [/etc/network/interface](http://www.freekb.net/Article?id=392) file on a Debian distribution) is used to define the name servers the system will use.

```
PEERDNS=yes
DNS1=192.168.0.6
DNS2=8.8.8.8
```

---

**Red Hat 8 and above (Network Manager)**

The [nmcli connection show](http://www.freekb.net/Article?id=2483) (Network Manager CLI) command can be used to display the DNS servers being used.

```
~]# nmcli connection show ens192 | grep ipv4.dns
ipv4.dns:                               192.168.0.6,8.8.8.8
```

If needed, the [nmcli connection modify](http://www.freekb.net/Article?id=2482) command can be used to change the DNS servers being used. This change will be persistent, meaning the change will remain in place even if the system is rebooted.

```
nmcli connection modify eth0 ipv4.dns "10.124.141.51,10.112.42.10"
nmcli device reapply eth0
```

---

**resolvconf**

The resolvconf service is responsible for updating the /etc/resolv.conf file. The resolvconf file is located at /sbin/resolvconf. The resolvconf service is used when the network interface is brought up, or when the [dhclient](http://www.freekb.net/Article?id=1196) command is used.

---

**DHCP**

When dhclient leases IP confirmation information from a DHCP server, the information will be written to the dhclient.leases or dhclient6.leases files. These files are located in the /var/lib/dhclient or /var/lib/dhcp directory. These files can be viewed to ensure the IP address of the nameservers was successfully leased from the DHCP server.

```
[john.doe@client1 ~]# cat /var/lib/dhcp/dhclient.lease
lease {
  interface "eth0";
  option domain-name-servers 192.168.0.6;
}
```

---

### Did you find this article helpful?

If so, consider buying me a coffee over at [![[~/×/355c77e4e46d2d11b750e39b881c074f_MD5.png|50]]](https://www.buymeacoffee.com/jeremycanfield)

  

---