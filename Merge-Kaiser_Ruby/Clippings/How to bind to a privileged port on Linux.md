---
source: https://linuxconfig.org/how-to-bind-a-rootless-container-to-a-privileged-port-on-linux
author:
  - "[[LinuxConfig]]"
published: 2023-10-17
created: 2025-04-24
tags:
  - howto/linux
  - howto/ports
---
One of the main innovations introduced by Podman was the ability to run rootless containers. Security wise, this was a big improvement, since a potentially compromised container running as root represents a security threat for the host system. In order to obtain a similar behavior, recent versions of Docker support running the docker daemon in the user context. Running unprivileged containers, albeit more secure, has also its drawbacks, as the inability to bind to privileged host ports.

In this tutorial, we learn how to allow a rootless Docker/Podman container to bind to a privileged host port on Linux.

**In this tutorial you will learn:**

- How to redirect a privileged port to an unprivileged one by creating a firewall rule or by using redir
- How to allow an unprivileged container to bind to a privileged port by setting the CAP\_NET\_BIND\_SERVICE capability
- How to modify the range of privileged ports
![How to bind a rootless container to a privileged port on linux](https://linuxconfig.org/19855)

How to bind a rootless container to a privileged port on Linux

| System | Distribution agnostic |
| --- | --- |
| Software | iptables-nft/firewalld/nft/redir |
| Other | Root privileges |
| Conventions | \# – requires given [linux-commands](https://linuxconfig.org/linux-commands) to be executed with root privileges either directly as a root user or by use of `sudo` command $ – requires given [linux-commands](https://linuxconfig.org/linux-commands) to be executed as a regular non-privileged user |

## Introduction

Running rootless containers is good for security, but impose its limitations. Suppose we are using Docker (or Podman) in rootless mode, and we want to run a container which contains the Apache web server. In order to make the service “transparent” to the user, we want to map port `80` on the host, to the same port exposed by the container, therefore we run the container this way:
```
$ docker run -p 80:80 httpd:latest
```

---

---

Since we launched the command as an unprivileged user, we obtain the following error (the output is truncated for convenience):
```
error while calling PortManager.AddPort(): cannot expose privileged port 80
```
The command failed because it wasn’t possible to bind to port 80 on the host, since it is a **privileged port**. How to solve this problem? There are many approaches, let’s see some of them.

## Redirecting a privileged port to an unprivileged one using a firewall rule

The first possible solution consists into redirecting traffic from the privileged port we want to use, to an unprivileged port of our choice, which we will then proceed to map to the port exposed by the container.

To redirect one port to another, we can create a firewall rule. The exact command we need to run depends on the firewall manager we are using. The Linux kernel component which provides packet manipulation functionality is “netfilter”. In modern Linux distributions, to “talk” with this component from userspace, we use the “nftables” framework. Since creating nftables rules directly can be a tedious task, however, most of the time we interact with higher-level firewall configuration managers. One example of such utility is firewalld.

### Creating the rule using firewalld

If you read our [introductory article on firewalld](https://linuxconfig.org/introduction-to-firewalld-and-firewall-cmd-command-on-linux), you already know it is managed via the `firewall-cmd` utility which doesn’t have a native way to specify a port redirection rule. In order to do that, we have to “fallback” to a “direct” rule, which let us interact with the firewall at a lower level. To set a “direct” rule, we launch the utility with the `--direct` option. Supposing we want to redirect traffic from port 80 to port 8080 on localhost, we would run:

```
$ sudo firewall-cmd --direct --add-rule ipv4 nat OUTPUT 0 -p tcp --dport=80 -o lo -j REDIRECT --to-port=8080
```

---

---

Two things to notice: the first is that the above command adds the rule to the “default” firewalld zone, since we didn’t explicitly specify one (zones are firewalld-related abstractions. Again, take a look at our [firewalld tutorial](https://linuxconfig.org/introduction-to-firewalld-and-firewall-cmd-command-on-linux) if you want to know more about them). The second, is that the rule is not persistent and would not survive a reboot or a restart of the firewalld service. In order to make it permanent, we need to use the `--permanent` option, and restart the firewall by running:
```
$ sudo firewall-cmd --reload
```

### Creating the rule using the iptables or nft utilities

The syntax used to specify firewalld direct rules, as you can see above, resembles the one used by iptables. If you (like me), prefer it, it is possible to set a rule by using the iptables/ip6tables utilities directly. Since, in modern Linux distributions, nftables replaced the iptables framework, those utilities are now just links to iptables-nft, a wrapper which let us keep using the old syntax:

```
$ sudo iptables -t nat -A OUTPUT -o lo -p tcp --dport=80 -j REDIRECT --to-port=8080
```

Finally, to set the same redirection using the nftables native syntax we can use the `nft` utility, and run the following command:

```
$ sudo nft 'add rule ip nat OUTPUT oifname "lo" tcp dport 80 counter redirect to :8080'
```

Rules established with the lower-level iptables or nft utilities are not persistent, either. To re-enforce them at each boot, we need to dump the current ruleset, and use a tool which reloads them automatically. The precise strategy varies depending on the distribution we are running, and we will not explore it here.

## Redirecting a port using redir

An alternative to creating a firewall rule consists into using a dedicated tool like [redir](https://github.com/troglobit/redir), which is open source, and available in the default repositories of all the major Linux distributions. On Fedora, we can install it with the following command:

```
$ sudo dnf install redir
```

---

---

On Debian and Debian-based distributions, instead, we can use:
```
$ sudo apt install redir
```

Redir is able to redirect TCP connections coming on a local port to a specific `<address>:port` combination. The `<address>` part is optional: if it is omitted, the `0.0.0.0` (meta) address is used (it represents all IPv4 addresses on the machine). To redirect port 80 to port 8080 using redir, we would run:

```
$ sudo redir :80 127.0.0.1:8080
```

Redirections set with redir are not persistent; for them to be applied at each system boot, we need to create a service which launches the command with the `-n` and `-s` options. We use the former to run the application in the foreground, and the latter to redirect logs to syslog. Almost all Linux distributions, nowadays, use Systemd as init system and service manager. Here is a very minimal example of what a systemd service unit which launches redir at boot could look like:

```
[Unit]
Description=Redirect tcp port 80 to 8080 with redir

[Service]
ExecStart=/bin/redir -sn :80 127.0.0.1:8080

[Install]
WantedBy=multi-user.target
```

We can save the unit as `/etc/systemd/system/redir.service`. To start and enable the service at boot, we run:

```
$ sudo systemctl enable --now redir.service
```

### Mapping the unprivileged port to the container

Once we redirected the port traffic, we can finally run the container and bind it to the unprivileged port:

```
$ docker run --name test_httpd -p 8080:80 httpd:latest
```

## Setting the CAP\_NET\_BIND\_SERVICE capability

A docker-only alternative to redirecting the port traffic, consists into setting the `CAP_NET_BIND_SERVICE` capability to the `/usr/bin/rootlesskit` binary. [Capabilities](https://man7.org/linux/man-pages/man7/capabilities.7.html) are special permissions which can be assigned to processes on Linux. CAP\_NET\_BIND\_SERVICE is the one which interests us in this case, since it allows binding a socket to a privileged port. To assign the CAP\_NET\_BIND\_SERVICE capability to the rootlesskit binary, we run the following command:

```
$ sudo setcap cap_net_bind_service=ep /usr/bin/rootlesskit
```

To remove the capability, instead:

```
$ sudo setcap -r /usr/bin/rootlesskit
```

## Modifying the range of unprivileged port

The last strategy we will examine here consists in changing the range of privileged ports. To check what ports are considered privileged by the system, it is enough to read the `/proc/sys/net/ipv4/ip_unprivileged_port_start` file: it contains the **first unprivileged port** in the system (default is 1024). Sticking to the previous example, to make the system consider port `80` as unprivileged, we would write the appropriate value to the file:

```
$ echo 80 | sudo tee /proc/sys/net/ipv4/ip_unprivileged_port_start
```

---

---

To make this change persistent, we need to add the following line to a configuration file in the ` /etc/sysctl.d/` directory:
```
$ echo net.ipv4.ip_unprivileged_port_start = 80 | sudo tee /etc/sysctl.d/90-unprivileged_port_start.conf
```

Notice that by adopting this strategy, the system will consider all ports >= 80 as unprivileged!

## Conclusions

In this tutorial, we saw some methods we can use to let a rootless container bind to a privileged port. We saw how to redirect traffic from a privileged to an unprivileged port, how to set the CAP\_NET\_BIND\_SERVICE capability, and, finally, how to change the range of privileged ports.

---

---

**Comments and Discussions**  
![Linux Forum](https://linuxconfig.org/wp-content/uploads/2024/04/linuxconfig-forum-logo-1.webp)