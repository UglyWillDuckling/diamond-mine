---
title: Postfix + Gmail. Certificate verification failed
source: https://askubuntu.com/questions/73865/postfix-gmail-certificate-verification-failed
published: 2011-10-30
created: 2025-01-04
description: I have setup my system to send emails via Gmail.The system works in so far as I can send emails, however I'm getting anerror regarding the secure certificate.This is an example entry in the ma...
tags:
  - postfix
  - email
  - gmail
  - error
  - fix
  - article
related:
  - "[[Postfix]]"
  - "[[Gmail]]"
  - "[[setup mail server trial]]"
---
Found during [[setup mail server trial]]

I have setup my system to send emails via Gmail.

The system works in so far as I can send emails, however I'm getting an error regarding the secure certificate.

This is an example entry in the mail.log:

```
    Oct 29 12:17:27 durban postfix/smtp[20742]: setting up TLS connection
    to smtp.gmail.com[209.85.143.108]:587

    Oct 29 12:17:27 durban postfix/smtp[20742]: certificate verification
    failed for smtp.gmail.com[209.85.143.108]:587: untrusted issuer
    /C=US/O=Equifax/OU=Equifax Secure Certificate Authority

    Oct 29 12:17:27 durban postfix/smtp[20742]: Untrusted TLS connection
    established to smtp.gmail.com[209.85.143.108]:587: TLSv1 with cipher
    RC4-SHA (128/128 bits)

    Oct 29 12:17:29 durban postfix/smtp[20742]: BA4852A1BFA:
    to=<some@email.com>, relay=smtp.gmail.com[209.85.143.108]:587,
    delay=2.9, delays=0.1/0.1/1.3/1.4, dsn=2.0.0, status=sent (250 2.0.0
    OK 1319887049 l20sm20686943wbo.6)
```

I googled this issue and have found others with the problem who were able to solve it by updating a file called cacert.pem in the /etc/postfix directory.

In my main.cf I have the following line (amongst others):

```
smtpd_tls_CAfile=/etc/postfix/cacert.pem
```

I have this file:

```
-rw-r--r-- 1 root root 2298 2011-10-29 12:16 cacert.pem
```

I populated this file with the commands:

```
# cat /usr/lib/ssl/certs/Equifax_Secure_CA.pem >> /etc/postfix/cacert.pem
# cat /usr/lib/ssl/certs/Thawte_Premium_Server_CA.pem >>
      /etc/postfix/cacert.pem
```
