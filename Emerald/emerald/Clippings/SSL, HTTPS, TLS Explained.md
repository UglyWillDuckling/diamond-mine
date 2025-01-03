---
title: SSL, HTTPS, TLS Explained
description: HTTPS is designed to render the data sent over the internet unreadable by anyone other than the sender and the receiver.
source: https://www.poodlescan.com/posts/ssl-https-tls-explained/
published: 2023-03-31
created: 2025-01-03
tags:
  - clippings
  - http
  - ssl
  - tls
  - article
---
What is so significant about [[HTTPS]] that most websites require it nowadays? How does HTTPS work? Let's dive right in.

Without HTTPS, the communication between the browser and the server is in plain text. This means that the credentials you type or the credit card number you submit over the internet can be seen by anybody who manages to intercept it. HTTPS is designed to tackle this problem, to render the data sent over the internet unreadable by anyone other than the sender and the receiver. HTTPS is an extension of the HTTP protocol.

With HTTPS, data is sent in an encrypted form using something referred to as TLS. TLS stands for Transport Layer Security. If the encrypted data gets intercepted by a hacker, all they could see is jumbled data. Let's take a look at how the TLS handshake works. There are several steps:

**Step 1**. Just like in the scenario with HTTPS, the browser establishes a TCP connection with the server.

**Step 2**. This is where the TLS handshake begins. The browser sends a kind “Hello” to the server. In this Hello message, the browser tells the server the following things.

**1**. What TLS version it can support. It could be TLS 1.2, TLS 1.3, etc.

**2**. What cipher suite it supports. A cipher suite is a set of encryption algorithms to use to encrypt data. After receiving the client Hello, the server gets to select the cipher suite and the TLS version to use, based on the options that the client sent. It submits those in a server Hello message back to the client.

Then the server sends the certificate to the client. The certificate includes a lot of different things. One of the fundamental things is the public key for the server. The client uses the public key in what’s called asymmetric encryption. With asymmetric encryption in use, a chunk of data that is encrypted by a public key can only be decrypted through the use of the private key. This concludes step 2, the Hello phase of the TLS handshake. At this point, the client has a server certificate and the client and server have agreed on the TLS version and the cipher suite to use.

**Step 3**. This is the step where the client and the server come up with a shared encryption key to apply to encrypt communication. And this is where the asymmetric encryption comes into the picture. Again, with asymmetric encryption, the data encrypted on the client side using the public key from the server can only be decrypted by the server. This is the way the client submits an encryption key securely to the server over the wide open internet. All this is performed in the client key exchange message. The exact detail varies depending on the cipher suite used. Here we use RSA as an example because its principle is the easiest to grasp. With RSA, the client generates an encryption key, or a session key as it’s also called, encrypts it using the server public key, and transmits an encrypted session key to the server over the internet. The server gets the encrypted session key and decrypts it with its private key. Now both sides hold the session key. And this is where they enter **step 4** of the TLS handshake, where they use the session key and agree upon the cipher suite to send encrypted data back and forth in a secure bi-directional channel.

Now you may ask, why don't we just use asymmetric encryption for everything? Why switch to symmetric encryption at all? The main reason is that asymmetric encryption is resource-intensive. It is not really suitable for bulk data transmission.

![HTTPS Illustrated](https://www.poodlescan.com/img/https-illustrated-big-1920w.jpg)

Before we close, there are two final points I would like to discuss. First, the handshake we talked about applied to TLS 1.2, while the latest version is TLS 1.3, and TLS 1.3 is supported on all major browsers. As we can see in our illustration, TLS 1.2 takes two network round trips to complete. This is one of the major enhancements TLS 1.3 has introduced. It optimizes the handshake to reduce the number of network round trips to one.

We decided to talk about TLS 1.2 because we reviewed TLS 1.3 as an optimization. As with many optimizations out there, it is a little more difficult to explain. That's why we chose TLS 1.2 instead. The determinative concepts in TLS 1.2 still apply to TLS 1.3.

The second final point we'd like to discuss is that, in the explanation above, we use RSA for asymmetric encryption to securely exchange the symmetric session key. Again, we chose RSA because it is easy to understand. However, asymmetric encryption is not the only method to share the session key between the client and the server. In fact, in TLS 1.3, RSA is no longer supported as a key exchange mechanism.

Diffie-Hellman is a more common way nowadays for exchanging session keys. Diffie-Hellman is complicated, but in a nutshell, it uses some advanced math involving large prime numbers to derive a shared session key without ever transmitting a public key over the network. This is it for HTTPS.