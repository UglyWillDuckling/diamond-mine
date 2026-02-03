---
title: Install and use imapsync on Ubuntu 16.04
source: https://www.jverdeyen.be/ubuntu/imapsync-on-ubuntu-16.04/
author:
  - "[[Joeri Verdeyen]]"
published: 2016-10-10
created: 2025-01-05
description: Migrate imap servers with imapsync on Ubuntu 16.04
tags: 
favicon: https://www.jverdeyen.be/favicon.ico
related:
  - "[[imapsync migration tool]]"
---
## What is imapsync?

The purpose of imapsync is to migrate IMAP accounts or to backup IMAP accounts. IMAP is one of the three current standard protocols to access mailboxes, the two other are POP3 and HTTP with webmails (often tied to an IMAP server).

## Install dependencies

```bash
sudo apt-get install makepasswd rcs perl-doc libio-tee-perl git libmail-imapclient-perl libdigest-md5-file-perl libterm-readkey-perl libfile-copy-recursive-perl build-essential make automake libunicode-string-perl libauthen-ntlm-perl libcrypt-ssleay-perl libdigest-hmac-perl libfile-copy-recursive-perl libio-compress-perl libio-socket-inet6-perl libio-socket-ssl-perl libio-tee-perl libmodule-scandeps-perl libnet-ssleay-perl libpar-packer-perl libreadonly-perl libterm-readkey-perl libtest-pod-perl libtest-simple-perl libunicode-string-perl liburi-perl cpanminus
```

## Install modules from CPAN

```sh
sudo cpanm JSON::WebToken Test::MockObject Unicode::String Data::Uniqid
```

## Clone git repository

```sh
git clone git://github.com/imapsync/imapsync.git
```

## Build and install

```sh
cd imapsync
mkdir dist
sudo make install
```

When everything above went ok, you should see something like this when `imapsync -v`

```sh
imapsync -v
1.727
```

## Start syncing

An example syntax on how to sync from server1 on to server2, both using ssl.

```sh
imapsync --host1 server1 -user1 user@server1 --password1 user1password --ssl1  --host2 server2 --user2 user@server2 --password2 user2password --ssl2
```

More information can be found on the [official imapsync website](http://imapsync.lamiral.info/).

## Thanks for reading

Feel free to leave a comment if you have remarks or like this post

---