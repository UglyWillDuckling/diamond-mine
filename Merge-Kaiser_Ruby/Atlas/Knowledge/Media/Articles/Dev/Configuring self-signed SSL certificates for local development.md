---
author:
  - "[[Ashley Connor]]"
published: 2021-06-10
created: 2024-12-19
source: https://dev.to/ashleyconnor/configuring-self-signed-ssl-certificates-for-local-development-35c5
tags:
  - clippings
  - active
  - article
  - howto
  - howto/article
---
tools:: [[mkcert]]

- [x] remind me (@2025-02-23 19:15)
- [x] monthly (@2025-04-05)
___

<mark style="background: #FFF3A3A6;">Sometimes</mark> it's preferible to keep your local development environment **as close to production as possible**.

In this post I'll cover how to configure self-signed SSL certificates using a project called [`mkcert`](https://github.com/FiloSottile/mkcert) which makes  
creating, installing and removing self-signed certificates easier than ever.

## Common

The first thing you will need is to install [mkcert](https://github.com/FiloSottile/mkcert) which can be done via [`homebrew`](https://brew.sh/) or [`homebrew` for Linux](https://docs.brew.sh/Homebrew-on-Linux).  
```bash
brew install mkcert
```

> [!INFO]- For Firefox 🦊
> ```
> $ brew install nss
> ```
If you intend to use Firefox, you should also install [`nss`](https://developer.mozilla.org/en-US/docs/Mozilla/Projects/NSS).  

Next run `mkcert` and pass in the the domain names and IPs you want the certificate to include:  

```bash
mkcert mywebsite.test localhost 127.0.0.1 ::1

Created a new certificate valid for the following names 📜
 - "mywebsite.test"
 - "localhost"
 - "127.0.0.1"
 - "::1"

The certificate is at "./mywebsite.test+3.pem" and the key at "./mywebsite.test+3-key.pem" ✅

It will expire on 7 September 2023[^1]
```

`mkcert` also accepts [[wildcard|wildcards]] but some browsers ([[Firefox]]) will not accept those certificates.
___

After the certificates are generated we can install the **local** [CA](https://en.wikipedia.org/wiki/Certificate_authority) by running `mkcert` with the install flag. This only needs to be done once as this CA will be used to sign all future certificates generated with `mkcert`.  

```shell
mkcert -install
```

If this is you first time installing certificates using `mkcert` you should see the following output:  

```bash
The local CA is now installed in the system trust store! ⚡️
# or...
The local CA is already installed in the system trust store! 👍
```

At this point your can use your generated certificates with your development server.
### Flask

```
flask run --cert=mywebsite.test+3.pem --key=mywebsite.test+3-key.pem
```

### Rails

```
rails s -b 'ssl://127.0.0.1:3000?key=mywebsite.test+3-key.pem&cert=mywebsite.test+3.pem'
```
