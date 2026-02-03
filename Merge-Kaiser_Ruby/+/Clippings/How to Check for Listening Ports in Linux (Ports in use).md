---
title: "How to Check for Listening Ports in Linux (Ports in use)"
source: "https://linuxize.com/post/check-listening-ports-linux/"
author:
  - "[[Linuxize]]"
published: 2019-08-14
created: 2024-12-19
description: "This article explains how to find out the ports in use and which services are listening on which ports using the netstat, ss and lsof commands. The instructions are applicable for all Linux and Unix-based operating systems like macOS."
tags:
  - "clippings"
---
![[~/×/fdda0aa0872f21a00e43e0da78b2a499_MD5.jpg]]

When troubleshooting network connectivity or application-specific issues, one of the first things to check should be what ports are actually in use on your system and which application is listening on a specific port.

This article explains how to use the `netstat`, `ss` and `lsof` commands to find out which services are listening on which ports. The instructions are applicable for all Linux and Unix-based operating systems like macOS.

## What is Listening Port

Network port is identified by its number, the associated IP address, and type of the communication protocol, such as TCP or UDP.

Listening port is a network port on which an application or process listens on, acting as a communication endpoint.

Each listening port can be open or closed (filtered) using a firewall. In general terms, an [open port](https://linuxize.com/post/check-open-ports-linux/) is a network port that accepts incoming packets from remote locations.

You can’t have two services listening to the same port on the same IP address.

For example, if you are running an Apache web server that listens on ports `80` and `443` and you try to [install Nginx](https://linuxize.com/post/how-to-install-nginx-on-ubuntu-18-04/) , the later will fail to start because the HTTP and HTTPS ports are already in use.

## Check Listening Ports with `netstat`

`netstat` is a command-line tool that can provide information about network connections.

To list all TCP or UDP ports that are being listened on, including the services using the ports and the socket status use the following command:

```
sudo netstat -tunlp
```

The options used in this command have the following meaning:

- `-t` - Show TCP ports.
- `-u` - Show UDP ports.
- `-n` - Show numerical addresses instead of resolving hosts.
- `-l` - Show only listening ports.
- `-p` - Show the PID and name of the listener’s process. This information is shown only if you run the command as root or [sudo](https://linuxize.com/post/sudo-command-in-linux/) user.

The output will look something like this:

```output
Proto Recv-Q Send-Q Local Address           Foreign Address         State       PID/Program name    
tcp        0      0 0.0.0.0:22              0.0.0.0:*               LISTEN      445/sshd            
tcp        0      0 0.0.0.0:25              0.0.0.0:*               LISTEN      929/master          
tcp6       0      0 :::3306                 :::*                    LISTEN      534/mysqld          
tcp6       0      0 :::80                   :::*                    LISTEN      515/apache2         
tcp6       0      0 :::22                   :::*                    LISTEN      445/sshd            
tcp6       0      0 :::25                   :::*                    LISTEN      929/master          
tcp6       0      0 :::33060                :::*                    LISTEN      534/mysqld          
udp        0      0 0.0.0.0:68              0.0.0.0:*                           966/dhclient  
```

The important columns in our case are:

- `Proto` - The protocol used by the socket.
- `Local Address` - The IP Address and port number on which the process listen to.
- `PID/Program name` - The PID and the name of the process.

If you want to filter the results, use the [`grep` command](https://linuxize.com/post/how-to-use-grep-command-to-search-files-in-linux/) . For example, to find what process listens on TCP port 22 you would type:

```
sudo netstat -tnlp | grep :22
```

The output shows that on this machine port 22 is used by the SSH server:

```output
tcp        0      0 0.0.0.0:22              0.0.0.0:*               LISTEN      445/sshd
tcp6       0      0 :::22                   :::*                    LISTEN      445/sshd
```

If the output is empty it means that nothing is listening on the port.

You can also filter the list based on criteria, for example, PID, protocol, state, and so on.

`netstat` is obsolete and replaced with `ss` and [`ip`](https://linuxize.com/post/linux-ip-command/) , but still it is of the most used commands to check network connections.

`ss` is the new `netstat`. It lacks some of the `netstat` features, but exposes more TCP states and it is slightly faster. The command options are mostly the same, so the transition from `netstat` to `ss` is not difficult.

To get a list of all listening ports with `ss` you would type:

```
sudo ss -tunlp
```

The output is almost the same as the one reported by `netstat`:

```output
State    Recv-Q   Send-Q     Local Address:Port      Peer Address:Port                                                                                        
LISTEN   0        128              0.0.0.0:22             0.0.0.0:*      users:(("sshd",pid=445,fd=3))                                                        
LISTEN   0        100              0.0.0.0:25             0.0.0.0:*      users:(("master",pid=929,fd=13))                                                     
LISTEN   0        128                    *:3306                 *:*      users:(("mysqld",pid=534,fd=30))                                                     
LISTEN   0        128                    *:80                   *:*      users:(("apache2",pid=765,fd=4),("apache2",pid=764,fd=4),("apache2",pid=515,fd=4))   
LISTEN   0        128                 [::]:22                [::]:*      users:(("sshd",pid=445,fd=4))                                                        
LISTEN   0        100                 [::]:25                [::]:*      users:(("master",pid=929,fd=14))                                                     
LISTEN   0        70                     *:33060                *:*      users:(("mysqld",pid=534,fd=33))
```

## Check Listening Ports with `lsof`

`lsof` is a powerful command-line utility that provides information about files opened by processes.

In Linux, everything is a file. You can think of a socket as a file that writes to the network.

To get a list of all listening TCP ports with `lsof` type:

```
sudo lsof -nP -iTCP -sTCP:LISTEN
```

The options used are as follows:

- `-n` - Do not convert port numbers to port names.
- `-p` - Do not resolve hostnames, show numerical addresses.
- `-iTCP -sTCP:LISTEN` - Show only network files with TCP state LISTEN.

```output
COMMAND   PID     USER   FD   TYPE DEVICE SIZE/OFF NODE NAME
sshd      445     root    3u  IPv4  16434      0t0  TCP *:22 (LISTEN)
sshd      445     root    4u  IPv6  16445      0t0  TCP *:22 (LISTEN)
apache2   515     root    4u  IPv6  16590      0t0  TCP *:80 (LISTEN)
mysqld    534    mysql   30u  IPv6  17636      0t0  TCP *:3306 (LISTEN)
mysqld    534    mysql   33u  IPv6  19973      0t0  TCP *:33060 (LISTEN)
apache2   764 www-data    4u  IPv6  16590      0t0  TCP *:80 (LISTEN)
apache2   765 www-data    4u  IPv6  16590      0t0  TCP *:80 (LISTEN)
master    929     root   13u  IPv4  19637      0t0  TCP *:25 (LISTEN)
master    929     root   14u  IPv6  19638      0t0  TCP *:25 (LISTEN)
```

Most of the output columns names are self-explanatory:

- `COMMAND`, `PID`, `USER` - The name, the pid and the user running the program associated with the port.
- `NAME` - The port number.

To find what process is listening on a particular port, for example, port `3306` you would use:

```
sudo lsof -nP -iTCP:3306 -sTCP:LISTEN
```

The output shows that MySQL server uses port `3306`:

```output
COMMAND PID  USER   FD   TYPE DEVICE SIZE/OFF NODE NAME
mysqld  534 mysql   30u  IPv6  17636      0t0  TCP *:3306 (LISTEN)
```

For more information, visit the [lsof man page](https://linux.die.net/man/8/lsof) and read about all other powerful options of this tool.

## Conclusion

We have shown you several commands that you can use to check what ports are in use on your system, and how to find what process listens on a specific port.

If you have any questions or remarks, please leave a comment below.

If you like our content, please consider buying us a coffee.  
Thank you for your support!

[Buy me a coffee](https://www.buymeacoffee.com/8swZOSU6I)

Sign up to our newsletter and get our latest tutorials and news straight to your mailbox.

## Related Articles

[Show comments (1)](https://linuxize.com/post/check-listening-ports-linux/#disqus_thread "Show comments for post")