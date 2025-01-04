---
title: "System Design: Gmail (How do Emails flow across Internet)!"
source: https://medium.com/@surfd1001/how-does-emails-flow-across-internet-4975ad927747
author:
  - "[[umang goel]]"
published: 2022-05-23
created: 2025-01-03
description: Emails(Electronic Mails) are the most common way of communication which is fast, cheap and easily accessible. In this article we will discuss on how the email communication flow works and what all…
tags:
  - clippings
  - email
  - article
related:
  - "[[email]]"
  - "[[internet]]"
---
Before starting the email flows lets first understand some of the standard protocols that are used for email flows.

## Standard Protocols

## SMTP (**Simple Mail Transfer Protocol**)

> SMTP is the standard protocol for sending or forwarding the email messages from one email server to the other. Whenever a email client wants to send the emails it used the SMTP servers behind the scenes to send out the messages.

SMTP is used for sending/forwarding emoail. Here the email client submits the message to be sent to the email server by using the SMTP protocol on TCP port 587. SMTP doesn’t deal with the message content but only the message envelope. An *SMTP transaction* consists of three command/reply sequences:

1. **MAIL** command, to establish the return address.
2. **RCPT** command, to establish a recipient of the message.
3. **DATA** to signal the beginning of the *message text*; the content of the message, as opposed to its envelope. It consists of a *message header* and a *message body* separated by an empty line.

## IMAP (**Internet Message Access Protocol**)

> IMAP is a protocol for accessing the email messages from a mail server. Its used by the email clients to communicate with the email servers and perform the manipulation on the email messages stored on the IMAP servers.

IMAP is the application layer protocol to support the email retrieval. Once the receiving email server receives the message the email clients can manage those messages using various protocols which can be vendor or application specific as well. But most of the modern clients support IMAP along with POP3 as standard protocols. IMAP server keeps the message in store until it is explicitly deleted by the client thus giving the flexibility to use the emails across various devices.

IMAP supports various other functionalities like message search without downloading the messages, server push notifications in case there are any changes in the mailbox state, tracking of the message state like read, replied etc.

## POP3(**Post Office Protocol 3**)

> POP3 is also used for receiving the messages from the email server. But in this case the messages is downloaded on the single client and is deleted from the email server

Most of the popular email clients/program support the POP3 Protocol. In order to use POP3 the email program needs to configure the email server address and also authenticate itself to receive the email. POP3 works by initiating the TCP connection with the email server (standard port:110) and once the authentication is done the connection is established. Client and server then exchange commands with each other and communicate.

POP3 is usually preferred when the user wants to access emails offline or use single device to download and access emails. It is also useful for sending the emails in bulk messages. POP3 like IMAP doesn’t allow to manipulate the messages.

Below is the diagram to illustrate how SMTP and IMAP/POP3 complement each other.

![](https://miro.medium.com/v2/resize:fit:700/1*yBEeeTCGYoutVdAl1q-rmg.png)

NOTE: IMAP protocol is used for retrieving/receiving messages from the mail server and cannot be used for sending the emails. Also IMAP allows email messages to be synchronised across multiple devices whereas POP3 allows to sync message to a single client.

![](https://miro.medium.com/v2/resize:fit:700/1*9GHdb2FaCGS5aLlVyQUWyw.png)

Flow of message from the sender to receiver MUA

## Components Description:

## **Mail User Agent (MUA)**

This refers to the client software from where the users manage the email messages. It can include both sending the messages or manipulation (read, delete etc) of the messages.

## **Mail Submission Agent (MSA)**

It is the software program that receives the email from the MUA and transfers it to the MTA to ensure the delivery of the message. Many MTAs perform the function of MSA as well but separating MSA from MTA has some benefits like

1. MSA can validate the message and respond to the author immediately after receiving the request.
2. MSA is usually within the domain of the MUA and the user can send email only after proper authentication. Thus when the message is sent through MTA it is possible to track the origin of the message effectively which otherwise would be difficult.
3. When the mails are sent from one domain to other its very difficult to establish trust between the domains and its difficult for the MTA to decide whether a mail is spam or not. But with the separate MSA in place the origin of the message is known and based on the reputation it becomes easier for the MTA to mark the email as spam with much more confidence.

## **Mail Transfer Agent (MTA)**

MTA is responsible for transfer of the mails using SMTP. MTA first identifies the receiver MTA by connecting to the recipient domains MX server. After it receives the information of the receiver MTA it connects to the recipient MTA to complete the mail exchange over SMTP.

These servers also keep mailboxes for email which are accessed by the users using the MUA. Many a times the recipient domain may maintain the mailbox at some other MTA so in such cases the recipient MTA relays the message to other MTAs over SMTP or LSMTP as per the configurations.

Also MTA adds the received message header each time it receives the message thus allowing to trace the flow of the message from one MTA to the other.

## **Mail Exchanger Record (MX)**

This is the record that specifies the address of the receiving MTA based on the domain of the recipient. This is a record in the DNS and one domain can be mapped to multiple hosts in order to load balance the delivery.

```
Domain			TTL   Class    Type  Priority      Hostexample.com		1936	IN	MX	10         one.comexample.com		1936	IN	MX	10         two.com
```

## **Mail Delivery Agent (MDA)**

MDA is the software that is responsible to deliver the message in the recipient local mailbox. It modifies the message in the format which is accessible by the email clients.