---
title: How to Install and Configure Postfix Mail Server in Linux
source: https://www.binaryte.com/blog/post/how-to-install-and-configure-postfix-mail-server-in-linux/
author: 
published: 2023-08-27
created: 2024-12-29
description: Learn how to install and configure the Postfix mail server in Linux with this comprehensive guide. Secure your email infrastructure and troubleshoot common issues effectively. Follow the steps now!
tags:
  - clippings
  - howto
  - how-to-article
  - article
related:
  - "[[SMTP]]"
  - "[[Postfix]]"
  - "[[email]]"
  - "[[mail server]]"
---
Postfix is a popular and widely used open-source mail transfer agent (MTA) that routes and delivers emails over the Internet. It is fast, secure, and easy to administer. Postfix can be used as a standalone mail server or as a relay agent for other mail servers. In this article, you will learn how to install and configure Postfix mail server in Linux. You will also learn how to test and troubleshoot your Postfix mail server.

This article is intended for anyone who is interested in learning about Linux, networking, or cyber security. You will need a Linux system with root access and a domain name to follow this tutorial. You will also need a basic understanding of how email works and some familiarity with Linux commands and text editors.

## **How to install Postfix on Linux**

The installation process of Postfix may vary depending on the Linux distribution you are using. In this section, we will show you how to install Postfix on Ubuntu and CentOS, two of the most popular Linux distributions. You can also refer to the official Postfix documentation for other Linux distributions.

### **Ubuntu**

To install Postfix on Ubuntu, you can use the apt package manager. First, update your system and install the dependencies:

```bash
sudo apt update
sudo apt install mailutils
```

The mailutils package provides some useful tools for working with email, such as mailx, which we will use later to test the Postfix mail server.

Next, install Postfix by running:

```bash
sudo apt install postfix
```

During the installation, you will be asked to choose the type of mail configuration. You can choose “Internet Site” if you want Postfix to operate as a standalone mail server. Alternatively, you can choose “Satellite System” if you want Postfix to relay emails through another SMTP server, such as Gmail. You can also choose “No configuration” if you want to configure Postfix manually later.

You will also be asked to enter the system mail name, which is the domain name that Postfix will use to identify itself. You can use your own domain name or the hostname of your Linux system.

## **How to configure Postfix mail server in Linux**

After installing Postfix, you need to configure it to suit your needs. The main configuration file of Postfix is located at /etc/postfix/main.cf. You can edit this file using your preferred text editor, such as nano or vi. In this section, we will show you some of the basic parameters that you need to set in the main.cf file.

### **Basic parameters**

The first thing you need to do is to set the hostname and the domain name of your Postfix mail server. These are the values that Postfix will use to identify itself and to construct the email addresses. You can use the following parameters in the main.cf file:

```plaintext
myhostname = mail.example.com
mydomain = example.com
```

Replace mail.example.com with your own hostname and example.com with your own domain name. You can also use the same value for both parameters if you want.

Next, you need to set the origin of the emails that Postfix will send. This is the value that will appear in the From header of the emails. You can use the following parameter in the main.cf file:

```plaintext
myorigin = $mydomain
```

This will use the domain name as the origin of the emails. Alternatively, you can use a specific email address, such as [admin@example.com](https://www.binaryte.com/blog/post/how-to-install-and-configure-postfix-mail-server-in-linux/), as the origin.

You also need to set the destination of the emails that Postfix will receive. This is the list of domains that Postfix will consider as local and deliver the emails to the local users. You can use the following parameter in the main.cf file:

```plaintext
mydestination = $myhostname, localhost.$mydomain, localhost, $mydomain
```

This will include the hostname, the localhost, and the domain name as the local destinations. You can also add other domains or subdomains that you want Postfix to accept emails for.

Finally, you need to set the relay domains of the emails that Postfix will forward to another SMTP server. This is the list of domains that Postfix will consider as remote and relay the emails to the specified SMTP server. You can use the following parameter in the main.cf file:

```plaintext
relay_domains = $mydestination
```

This will include the same domains as the local destinations as the relay domains. You can also add other domains or subdomains that you want Postfix to relay emails for.

### **SMTP, POP3, and IMAP protocols**

To send and receive emails, you need to configure Postfix to use the SMTP, POP3, and IMAP protocols. 
[[SMTP]] stands for Simple Mail Transfer Protocol, which is the standard protocol for sending emails over the Internet. POP3 stands for Post Office Protocol version 3, which is a protocol for retrieving emails from a mail server. 
[[IMAP]] stands for Internet Message Access Protocol, which is another protocol for retrieving emails from a mail server, but with more features than POP3.

By default, [[Postfix]] uses [[SMTP]] to send and receive emails. However, you need to install and configure additional software to enable POP3 and IMAP functionality. 
In this tutorial, we will use [[Dovecot]], which is a popular and widely used open-source mail server that supports both [[POP3]] and [[IMAP]] protocols.

After installing Dovecot, you need to edit the /etc/dovecot/conf.d/10-mail.conf file and set the mail location parameter to:

```bash
mail_location = mbox:~/mail:INBOX=/var/mail/%u
```

This will tell [[Dovecot]] to store the emails in the mbox format in the **user’s home** directory and the INBOX folder in the /var/mail directory.

You also need to edit the `/etc/dovecot/conf.d/10-auth.conf` file and set the auth\_mechanisms parameter to:

```bash
auth_mechanisms = plain login
```

This will tell Dovecot to use the plain and login authentication mechanisms for the POP3 and IMAP clients.

You also need to edit the `/etc/dovecot/conf.d/10-master.conf` file and uncomment the following lines:

```bash
unix_listener /var/spool/postfix/private/auth {
mode = 0660
user = postfix
group = postfix
}
```

This will enable the communication between Postfix and Dovecot using a Unix socket.

Finally, you need to restart Dovecot to apply the changes:

```plaintext
sudo systemctl restart dovecot
```

You can also check the status of Dovecot by running:

```plaintext
sudo systemctl status dovecot
```

### **SSL/TLS encryption and authentication**

To secure the communication between [[Postfix]] and the email clients, you need to configure Postfix to use **SSL/TLS** encryption and authentication. 
[[SSL]] stands for Secure Sockets Layer, which is a protocol for encrypting and authenticating data over a network. [[TLS]] stands for Transport Layer Security, which is an updated version of SSL.

To enable TLS in Postfix, you need to obtain a valid certificate and a private key from a trusted certificate authority (CA). You can use a self-signed certificate, but this may cause some warnings or errors in the email clients.

#### **Configuring authentication**
To secure your mail server, configure Postfix to use authentication for both sending and receiving emails. Update the `main.cf` file with the following parameters:

```bash
smtpd_tls_security_level = may
smtpd_sasl_auth_enable = yes
smtpd_sasl_type = dovecot
smtpd_sasl_path = private/auth
smtpd_sasl_authenticated_header = yes
broken_sasl_auth_clients = yes
smtpd_recipient_restrictions = permit_sasl_authenticated, permit_mynetworks, reject_unauth_destination
```

These settings enable TLS, configure Dovecot as the SASL authentication type, and specify the path for authentication. The recipient restrictions ensure that only authenticated users can send emails through your server.

### **How to test Postfix mail server in Linux**

Once you’ve installed and configured Postfix, it’s essential to test its functionality. Use command-line tools like mailx and telnet to verify sending and receiving emails.

#### **Sending a test email**

```plaintext
echo "This is a test email" | mail -s "Test Email" user@example.com
```

Replace [user@example.com](https://www.binaryte.com/blog/post/how-to-install-and-configure-postfix-mail-server-in-linux/) with a valid email address. Check the recipient’s inbox to ensure the email was successfully delivered.

#### **Verifying open ports**

Use telnet to verify that your mail server’s ports are open:

```plaintext
telnet mail.example.com 25     # For SMTP
telnet mail.example.com 110    # For POP3
telnet mail.example.com 143    # For IMAP
```

Replace mail.example.com with your mail server’s domain. A successful connection indicates that the respective port is open and ready to accept connections.

#### **Troubleshooting common issues**

If you encounter any issues during the testing phase, refer to the mail logs for detailed information:

```plaintext
tail -f /var/log/mail.log
```

Look for any error messages or warnings and use them as a guide to troubleshoot and resolve the problems.
