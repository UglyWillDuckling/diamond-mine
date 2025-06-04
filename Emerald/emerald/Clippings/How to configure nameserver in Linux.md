---
author:
  - "[[Shrikant Lavhate]]"
created: 2025-06-03
published: 2017-09-26
source: https://kerneltalks.com/howto/how-to-configure-nameserver-in-linux/
tags:
  - article/domain
---

*Beginners guide on how to configure nameserver in Red Hat, CentOs, Fedora, Debian, Ubuntu or Suse Linux to resolve DNS queries.*

![img|250](https://z5.kerneltalks.com/wp-content/uploads/2020/06/configure-nameserver-in-linux.png)

Configure nameserver in Linux

Nameserver is the DNS server to which your machine query for name resolutions. This is pretty much important on servers facing the Internet or having an active internet connection or if your system is part of an organization where the internal domain name system is implemented for IT Infra. In this article, we will walk you through how to set up nameserver in [your Linux machine](https://kerneltalks.com/howto/install-ec2-linux-server-aws-with-screenshots/)

### What is nameserver?

Its server which response to the queries normally domain name resolution. It’s like a phone directory, where you query name and you get phone number. Nameserver receives [hostname](https://kerneltalks.com/linux/all-you-need-to-know-about-hostname-in-linux/) or domain name in the query and responds back with IP address.

### How to setup nameserver in Red Hat?

You need to open file `/etc/resolv.conf` in a text editor like `vi` or `nano` and add your name server IP in the below format.

```bash
nameserver X.X.X.X
```

For example:

```bash
root@kerneltalks 
nameserver 10.10.2.56
```

You can use the same above same method to configure nameserver in CentOS, Debian, Fedora.

### How to setup nameserver in Ubuntu?

Addition to `/etc/resolv.conf` file, in ubuntu, you can edit file `/etc/network/interfaces` with the same above said information. The format remains the same.

```bash
root@kerneltalks 
nameserver 10.10.2.56
```

### How to configure nameserver in Suse Linux?

If you have access to Suse desktop environment i.e. GUI then you can go to YaST network settings. Navigate to ‘ *Hostname/DNS* ‘. Like below:

![](https://z5.kerneltalks.com/wp-content/uploads/2020/06/SUSE-nameserver.png)

Here you will be able to add name servers and click Ok to save.

Alternatively, `/etc/resolv.conf` is way out from command line.