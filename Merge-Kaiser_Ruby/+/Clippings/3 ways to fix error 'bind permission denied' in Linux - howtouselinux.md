---
source: https://www.howtouselinux.com/post/bind-permission-denied-in-linux
author:
  - "[[David Cao]]"
published: 2023-11-16
created: 2025-01-26
tags:
  - error
  - issue
  - linux
  - ports
related: 
"":
---
![[~/×/ac5b1f21e3a6c8385178f85a2ed684d1_MD5.jpg|25]]

On a Linux system, TCP ports in a reserved range (typically less than 1024) can only be bound by processes with root privilege.

If we’re trying to bind a port in a Linux environment less 1024, we will receive a “Permission denied” error.

`Listen tcp :80: bind: permission denied`

So we should do either:

- Use a port number **bigger than 1024**
- *Run* the script as a **privileged** user

### Reason for bind: permission denied in Linux

Ports below 1024 are called Privileged Ports and in Linux (and most UNIX flavors and UNIX-like systems), they are not allowed to be opened by any non-root user.

This is a security feature originally implemented as a way to prevent a malicious user from setting up a malicious service on a well-known service port.

### How to fix bind: permission denied in Linux

we will cover 3 ways below. 

We can set up a file capability on the file executable, to give elevated privileges to allow opening privileged ports only, and no other superuser privileges:

`#sudo setcap cap_net_bind_service+ep /path/to/bin/file`

The command sudo setcap cap\_net\_bind\_service+ep /path/to/bin/file is used in Unix and Linux environments to modify the capabilities of a binary file, often for security purposes. Let’s break down this command to understand what each part does:

**sudo**: This is a program for Unix-like operating systems that allows users to run programs with the security privileges of another user, typically the superuser (root). It stands for “superuser do.”

**setcap**: This is a command used to set or view the capabilities of files (usually executables). Capabilities are a fine-grained alternative to the traditional Unix permissions model. They allow you to grant specific privileges to a program without giving it full root access.

**cap\_net\_bind\_service**: This is a specific capability in Linux. It allows the program to bind to network ports below 1024 without needing to be run as root. Normally, only the root user can bind to these ports because they are considered privileged, with ports like 80 (HTTP) and 443 (HTTPS) falling into this range.

**+ep**: This part of the command specifies how the capability is set. The ‘e’ means ‘effective’ – it’s the capability that is used by the kernel to check permissions. The ‘p’ means ‘permitted’ – it’s the capability that the program is allowed to use or to drop. The ‘+’ means that the capability is being added.

**/path/to/bin/file**: This is the path to the binary file to which you are applying this capability. You replace this part of the command with the actual path to the executable you want to modify.

Here is another way to fix this issue.

Set up a firewall on the server using iptables or an alternative, so that the lower port number is forwarded internally to a higher port number.

`$ sudo iptables -t nat -A PREROUTING -p tcp --dport 80 -j REDIRECT --to-port 3000`

This iptables command is used to redirect all incoming TCP traffic on port 80 (HTTP) to port 3000. This is a common configuration when you have a web server running on a non-standard port (like 3000) and you want to make it accessible via the standard HTTP port without running the server process as root. This approach is frequently used in development environments or with node.js applications that listen on higher-numbered ports.

The command  is related to configuring network traffic rules on a Linux system using iptables, a powerful tool for setting up, maintaining, and inspecting the tables of IP packet filter rules in the Linux kernel. Let’s break down the command:

**sudo**: This is used to run the command with superuser (root) privileges. iptables usually requires root access to modify the networking configuration.

**iptables**: The command-line interface to interact with the netfilter framework provided by the Linux kernel, used for modifying and managing the rulesets for packet filtering and NAT (Network Address Translation).

**\-t nat**: This option specifies the table to which the subsequent rule will be added. The ‘nat’ table is used for network address translation (e.g., port forwarding, redirection, etc.). There are other tables like ‘filter’, ‘mangle’, etc., used for different purposes.

**\-A PREROUTING**: This option adds a rule to the ‘PREROUTING’ chain of the ‘nat’ table. The ‘PREROUTING’ chain is used for altering packets as soon as they come in before routing them. -A stands for “append”.

**\-p tcp**: This specifies that the rule applies to TCP (Transmission Control Protocol) traffic. iptables can filter different types of traffic, but this rule is specifically for TCP.

**–dport 80**: This indicates the destination port of the packet. In this case, it’s port 80, which is typically used for HTTP traffic. The rule will apply to any TCP packets intended for port 80.

**\-j REDIRECT**: This is the action to be taken if a packet matches the rule. REDIRECT is used here to modify the destination port of the packet. -j stands for “jump”, which means jump to the specified target.

**–to-port 3000**: This part of the command specifies the new destination port for the redirected packets. In this case, packets originally intended for port 80 will be redirected to port 3000.

The third way is Install and configure Apache or nginx as a reverse proxy server, which can be started as root to open the port.