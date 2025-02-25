---
id: OpenSSH Config File Examples
aliases: []
tags:
  - config/ssh
  - docs/ssh
author:
  - "[[Gist]]"
created: "2025-02-11"
related:
  - "[[SSH]]"
source: https://gist.github.com/numberwhun/d986bb536af15c5fccdcd5dfa656e4a1
---
about:: [[ssh]]
___
- [x] remind me (@2025-02-25 22:12)

/etc/ssh/ssh\_config : This files set the default configuration for all users of OpenSSH clients on that desktop/laptop and it must be readable by all users on the system.

User-specific SSH client configuration files

~/.ssh/config or $HOME/.ssh/config : This is user’s own configuration file which, overrides the settings in the global client configuration file, /etc/ssh/ssh\_config.

~/.ssh/config file rules

The rules are as follows to create an ssh config file:

You need to edit ~/.ssh/config with a text editor such as vi.

One config parameter per line is allowed in the configuration file with the parameter name followed by its value or values. The syntax is:

config value

config1 value1 value2

You can use an equal sign (=) instead of whitespace between the parameter name and the values.

config=value

config1=value1 value2

All empty lines are ignored.

All lines starting with the hash (#) are ignored.

All values are case-sensitive, but parameter names are not.

Tip : If this is a brand new Linux, Apple OS X/Unix box, or if you have never used ssh before create the ~/.ssh/ directory first using the following syntax:

mkdir -p $HOME/.ssh

chmod 0700 $HOME/.ssh

## Examples

For demonstration purpose my sample setup is as follows:

Local desktop client – Apple OS X or Ubuntu Linux.

Remote Unix server – OpenBSD server running latest OpenSSH server.

Remote OpenSSH server ip/host: 75.126.153.206 (server1.cyberciti.biz)

Remote OpenSSH server user: nixcraft

Remote OpenSSH port: 4242

Local ssh private key file path : /nfs/shared/users/nixcraft/keys/server1/id\_rsa

Based upon the above information my ssh command is as follows:

$ ssh -i /nfs/shared/users/nixcraft/keys/server1/id\_rsa -p 4242 nixcraft@server1.cyberciti.biz



OR

$ ssh -i /nfs/shared/users/nixcraft/keys/server1/id\_rsa -p 4242 -l nixcraft server1.cyberciti.biz


You can avoid typing all of the ssh command parameters while logging into a remote machine and/or for executing commands on a remote machine. All you have to do is create an ssh config file. Open the Terminal application and create your config file by typing the following command:


vi ~/.ssh/config

OR


vi $HOME/.ssh/config

Add/Append the following config option for a shortcut to server1 as per our sample setup:

Host server1

HostName server1.cyberciti.biz

User nixcraft

Port 4242

IdentityFile /nfs/shared/users/nixcraft/keys/server1/id\_rsa

Save and close the file. To open your new SSH session to server1.cyberciti.biz by typing the following command:

  $ ssh server1


Adding another host

Append the following to your ~/.ssh/config file:

```bash
Host nas01
HostName 192.168.1.100
User root
IdentityFile ~/.ssh/nas01.key
```

You can simply type:
`ssh nas01`

Putting it all together

Here is my sample ~/.ssh/config file that explains and create, design, and evaluate different needs for remote access using ssh client:

### default for all

Host \*

ForwardAgent no

ForwardX11 no

ForwardX11Trusted yes

User nixcraft

Port 22

Protocol 2

ServerAliveInterval 60

ServerAliveCountMax 30



\## override as per host ##

Host server1

HostName server1.cyberciti.biz

User nixcraft

Port 4242

IdentityFile /nfs/shared/users/nixcraft/keys/server1/id\_rsa



\## Home nas server ##

Host nas01

HostName 192.168.1.100

User root

IdentityFile ~/.ssh/nas01.key


```bash
## Login AWS Cloud ##

Host aws.apache

HostName 1.2.3.4

User wwwdata

IdentityFile ~/.ssh/aws.apache.key
```

\## Login to internal lan server at 192.168.0.251 via our public uk office ssh based gateway using ##

\## $ ssh uk.gw.lan ##

Host uk.gw.lan uk.lan

HostName 192.168.0.251

User nixcraft

ProxyCommand ssh nixcraft@gateway.uk.cyberciti.biz nc %h %p 2> /dev/null



\## Our Us Proxy Server ##

\## Forward all local port 3128 traffic to port 3128 on the remote vps1.cyberciti.biz server ##

\## $ ssh -f -N proxyus ##

Host proxyus

HostName vps1.cyberciti.biz

User breakfree

IdentityFile ~/.ssh/vps1.cyberciti.biz.key

LocalForward 3128 127.0.0.1:3128

Understanding ~/.ssh/config entries



Host : Defines for which host or hosts the configuration section applies. The section ends with a new Host section or the end of the file. A single \* as a pattern can be used to provide global defaults for all hosts.

HostName : Specifies the real host name to log into. Numeric IP addresses are also permitted.

User : Defines the username for the SSH connection.

IdentityFile : Specifies a file from which the user’s DSA, ECDSA or DSA authentication identity is read. The default is ~/.ssh/identity for protocol version 1, and ~/.ssh/id\_dsa, ~/.ssh/id\_ecdsa and ~/.ssh/id\_rsa for protocol version 2.

ProxyCommand : Specifies the command to use to connect to the server. The command string extends to the end of the line, and is executed with the user’s shell. In the command string, any occurrence of %h will be substituted by the host name to connect, %p by the port, and %r by the remote user name. The command can be basically anything, and should read from its standard input and write to its standard output. This directive is useful in conjunction with nc(1) and its proxy support. For example, the following directive would connect via an HTTP proxy at 192.1.0.253:
ProxyCommand /usr/bin/nc -X connect -x 192.1.0.253:3128 %h %p

LocalForward : Specifies that a TCP port on the local machine be forwarded over the secure channel to the specified host and port from the remote machine. The first argument must be \[bind\_address:\]port and the second argument must be host:hostport.

Port : Specifies the port number to connect on the remote host.

Protocol : Specifies the protocol versions ssh(1) should support in order of preference. The possible values are 1 and 2.

ServerAliveInterval : Sets a timeout interval in seconds after which if no data has been received from the server, ssh(1) will send a message through the encrypted channel to request a response from the server. See blogpost “Open SSH Server connection drops out after few or N minutes of inactivity” for more information.

ServerAliveCountMax : Sets the number of server alive messages which may be sent without ssh(1) receiving any messages back from the server. If this threshold is reached while server alive messages are being sent, ssh will disconnect from the server, terminating the session.

A note about shell aliases (outdated method)



Warning examples may crash your computerWARNING! This bash shell aliased based setup may work out for you. However, I recommend that you use ~/.ssh/config file for better results in a long run. SSH config file is more advanced and elegant solutions. The alias command only used here for demo purpose and it is here due to historical reasons.

An alias is nothing but shortcut to commands and you can create the alias use the following syntax in your ~/.bashrc file:



alias server1="ssh -i /nfs/shared/users/nixcraft/keys/server1/id\_rsa -p 4242 nixcraft@server1.cyberciti.biz"

Then, to ssh into the server1, instead of typing full ssh -i /nfs/shared/users/nixcraft/keys/server1/id\_rsa -p 4242 nixcraft@server1.cyberciti.biz command, you would only have to type the command ‘server1’ and press the \[ENTER\] key:

$ server1

