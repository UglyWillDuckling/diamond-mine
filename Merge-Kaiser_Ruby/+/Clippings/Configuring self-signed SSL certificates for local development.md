---
title: Configuring self-signed SSL certificates for local development
source: https://dev.to/ashleyconnor/configuring-self-signed-ssl-certificates-for-local-development-35c5
author:
  - "[[Ashley Connor]]"
published: 2021-06-10
created: 2024-12-19
description: How to create and install self-signed SSL certificates for local development using mkcert. Tagged with webdev, tutorial, security.
tags:
  - clippings
  - active
  - article
  - howto
  - howto/article
---
<mark style="background: #FFF3A3A6;">Sometimes</mark> it's preferible to keep your local development environment as close to production as possible.

In this post I'll cover how to configure self-signed SSL certificates using a project called [`mkcert`](https://github.com/FiloSottile/mkcert) which makes  
creating, installing and removing self-signed certificates easier than ever.

The instructions are slightly different depending on your local environment:

- [Common](https://dev.to/ashleyconnor/#common)
- [WSL2](https://dev.to/ashleyconnor/#wsl2)
- [Firefox on Windows](https://dev.to/ashleyconnor/#firefox-on-windows)

## Common

The first thing you will need is to install [mkcert](https://github.com/FiloSottile/mkcert) which can be done via [`homebrew`](https://brew.sh/) or [`homebrew` for Linux](https://docs.brew.sh/Homebrew-on-Linux).  
```bash
brew install mkcert
```

> [!NOTE]- For Firefox 🦊
> ```
> $ brew install nss
> ```


If you intend to use Firefox, you should also install [`nss`](https://developer.mozilla.org/en-US/docs/Mozilla/Projects/NSS).  

Next run `mkcert` and pass in the the domain names and IPs you want the certificate to include:  
```bash
$ mkcert mywebsite.test localhost 127.0.0.1 ::1

Created a new certificate valid for the following names 📜
 - "mywebsite.test"
 - "localhost"
 - "127.0.0.1"
 - "::1"

The certificate is at "./mywebsite.test+3.pem" and the key at "./mywebsite.test+3-key.pem" ✅

It will expire on 7 September 2023
```

<svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 24 24" class="highlight-action crayons-icon highlight-action--fullscreen-on"><title>Enter fullscreen mode</title> <path d="M16 3h6v6h-2V5h-4V3zM2 3h6v2H4v4H2V3zm18 16v-4h2v6h-6v-2h4zM4 19h4v2H2v-6h2v4z"></path></svg> <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 24 24" class="highlight-action crayons-icon highlight-action--fullscreen-off"><title>Exit fullscreen mode</title><path d="M18 7h4v2h-6V3h2v4zM8 9H2V7h4V3h2v6zm10 8v4h-2v-6h6v2h-4zM8 15v6H6v-4H2v-2h6z"></path></svg>

`mkcert` also accepts wildcards but some browsers (Firefox) will not accept those certificates.

---

After the certificates are generated we can install the local [CA](https://en.wikipedia.org/wiki/Certificate_authority) by running `mkcert` with the install flag. This only needs to be done once as this CA will be used to sign all future certificates generated with `mkcert`.  

```
$ mkcert -install
```

<svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 24 24" class="highlight-action crayons-icon highlight-action--fullscreen-on"><title>Enter fullscreen mode</title> <path d="M16 3h6v6h-2V5h-4V3zM2 3h6v2H4v4H2V3zm18 16v-4h2v6h-6v-2h4zM4 19h4v2H2v-6h2v4z"></path></svg> <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 24 24" class="highlight-action crayons-icon highlight-action--fullscreen-off"><title>Exit fullscreen mode</title><path d="M18 7h4v2h-6V3h2v4zM8 9H2V7h4V3h2v6zm10 8v4h-2v-6h6v2h-4zM8 15v6H6v-4H2v-2h6z"></path></svg>

If this is you first time installing certificates using `mkcert` you should see the following output:  

```
The local CA is now installed in the system trust store! ⚡️
# or...
The local CA is already installed in the system trust store! 👍
```

<svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 24 24" class="highlight-action crayons-icon highlight-action--fullscreen-on"><title>Enter fullscreen mode</title> <path d="M16 3h6v6h-2V5h-4V3zM2 3h6v2H4v4H2V3zm18 16v-4h2v6h-6v-2h4zM4 19h4v2H2v-6h2v4z"></path></svg> <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 24 24" class="highlight-action crayons-icon highlight-action--fullscreen-off"><title>Exit fullscreen mode</title><path d="M18 7h4v2h-6V3h2v4zM8 9H2V7h4V3h2v6zm10 8v4h-2v-6h6v2h-4zM8 15v6H6v-4H2v-2h6z"></path></svg>

At this point your can use your generated certificates with your development server.

### Flask

```
$ flask run --cert=mywebsite.test+3.pem --key=mywebsite.test+3-key.pem
```

<svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 24 24" class="highlight-action crayons-icon highlight-action--fullscreen-on"><title>Enter fullscreen mode</title> <path d="M16 3h6v6h-2V5h-4V3zM2 3h6v2H4v4H2V3zm18 16v-4h2v6h-6v-2h4zM4 19h4v2H2v-6h2v4z"></path></svg> <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 24 24" class="highlight-action crayons-icon highlight-action--fullscreen-off"><title>Exit fullscreen mode</title><path d="M18 7h4v2h-6V3h2v4zM8 9H2V7h4V3h2v6zm10 8v4h-2v-6h6v2h-4zM8 15v6H6v-4H2v-2h6z"></path></svg>

### Rails

```
$ rails s -b 'ssl://127.0.0.1:3000?key=mywebsite.test+3-key.pem&cert=mywebsite.test+3.pem'
```

<svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 24 24" class="highlight-action crayons-icon highlight-action--fullscreen-on"><title>Enter fullscreen mode</title> <path d="M16 3h6v6h-2V5h-4V3zM2 3h6v2H4v4H2V3zm18 16v-4h2v6h-6v-2h4zM4 19h4v2H2v-6h2v4z"></path></svg> <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 24 24" class="highlight-action crayons-icon highlight-action--fullscreen-off"><title>Exit fullscreen mode</title><path d="M18 7h4v2h-6V3h2v4zM8 9H2V7h4V3h2v6zm10 8v4h-2v-6h6v2h-4zM8 15v6H6v-4H2v-2h6z"></path></svg>

## WSL2

If you're running the [WSL2](https://docs.microsoft.com/en-us/windows/wsl/install-win10) then there are few extra steps in order to get the Windows 10 host to accept the validity of the certificates.

First we want to install `mkcert` on Windows which we can do using [`chocolatey`](https://chocolatey.org/).

Open a Powershell terminal using the [administrator user](https://adamtheautomator.com/wp-content/uploads/2020/11/FromSearch-1.png) and run:  

```
$ choco install mkcert
```

<svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 24 24" class="highlight-action crayons-icon highlight-action--fullscreen-on"><title>Enter fullscreen mode</title> <path d="M16 3h6v6h-2V5h-4V3zM2 3h6v2H4v4H2V3zm18 16v-4h2v6h-6v-2h4zM4 19h4v2H2v-6h2v4z"></path></svg> <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 24 24" class="highlight-action crayons-icon highlight-action--fullscreen-off"><title>Exit fullscreen mode</title><path d="M18 7h4v2h-6V3h2v4zM8 9H2V7h4V3h2v6zm10 8v4h-2v-6h6v2h-4zM8 15v6H6v-4H2v-2h6z"></path></svg>

Then run `mkcert` with the install flag like we did before:  

```
# first set the CAROOT path to point to the root CA we generated on WSL2
# you can get this directory by running mkcert -CAROOT from a WSL2 terminal
# if we don't do this it will install a different root CA and we will get warnings
$CAROOT="\\wsl$\Ubuntu\home\ashley\.local\share\mkcert\"
$ mkcert -install
The local CA is now installed in the system trust store! ⚡️
Note: Firefox support is not available on your platform. ℹ️
```

<svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 24 24" class="highlight-action crayons-icon highlight-action--fullscreen-on"><title>Enter fullscreen mode</title> <path d="M16 3h6v6h-2V5h-4V3zM2 3h6v2H4v4H2V3zm18 16v-4h2v6h-6v-2h4zM4 19h4v2H2v-6h2v4z"></path></svg> <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 24 24" class="highlight-action crayons-icon highlight-action--fullscreen-off"><title>Exit fullscreen mode</title><path d="M18 7h4v2h-6V3h2v4zM8 9H2V7h4V3h2v6zm10 8v4h-2v-6h6v2h-4zM8 15v6H6v-4H2v-2h6z"></path></svg>

You should see a popup like the one below. Click "Yes" to install the CA on the Windows 10 host.

[![[~/×/95aef4d2d1cf4c70922e6f00c6cfa173_MD5.png]]](https://media2.dev.to/dynamic/image/width=800%2Cheight=%2Cfit=scale-down%2Cgravity=auto%2Cformat=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fv2hz8zfah5yyada0315a.png)

## Firefox on Windows

After that's installed let's fix Firefox so it doesn't complain that our certs are invalid.

To do that open the Firefox browser and navigate to the settings and search for certificates:

[![[~/×/e0c59dd367b7cedcdc0e745e11366bcf_MD5.png]]](https://media2.dev.to/dynamic/image/width=800%2Cheight=%2Cfit=scale-down%2Cgravity=auto%2Cformat=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2F0xazor0f4x4le2ig307x.png)

Click on "View Certificates"

[![[~/×/0fdfd13d7f00f2c21a8438316af30a91_MD5.png]]](https://media2.dev.to/dynamic/image/width=800%2Cheight=%2Cfit=scale-down%2Cgravity=auto%2Cformat=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fp0hlgkrdhfk80fyhsulu.png)

Next click on "Import". We want to locate the root CA from our Linux instance. Mine was located here but yours will be different depending on your WSL2 linux distro:  

```
\\wsl$\Ubuntu\home\ashley\.local\share\mkcert\rootCA.pem
```

<svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 24 24" class="highlight-action crayons-icon highlight-action--fullscreen-on"><title>Enter fullscreen mode</title> <path d="M16 3h6v6h-2V5h-4V3zM2 3h6v2H4v4H2V3zm18 16v-4h2v6h-6v-2h4zM4 19h4v2H2v-6h2v4z"></path></svg> <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 24 24" class="highlight-action crayons-icon highlight-action--fullscreen-off"><title>Exit fullscreen mode</title><path d="M18 7h4v2h-6V3h2v4zM8 9H2V7h4V3h2v6zm10 8v4h-2v-6h6v2h-4zM8 15v6H6v-4H2v-2h6z"></path></svg>

Once installed you will see your local CA in the list of Authorities:

[![[~/×/e030c4a82f180839e171e676dc292277_MD5.png]]](https://media2.dev.to/dynamic/image/width=800%2Cheight=%2Cfit=scale-down%2Cgravity=auto%2Cformat=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fy6lct97yq808lzngm08k.png)

Now if we visit our local development server in Firefox on our Windows host we should see the page load without any warnings.

### Firefox

[![[~/×/1bf8dcd8b6a63067fc16d7b8eb02f9b9_MD5.png]]](https://media2.dev.to/dynamic/image/width=800%2Cheight=%2Cfit=scale-down%2Cgravity=auto%2Cformat=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2F3vm22ysnuuscbhw09o5m.png)

### Edge

[![[~/×/292834aad60684d6de1d1b2484b9eea5_MD5.png]]](https://media2.dev.to/dynamic/image/width=800%2Cheight=%2Cfit=scale-down%2Cgravity=auto%2Cformat=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fh599gtlytiui4abn615w.png)

### Chrome

[![[~/×/fcd72863323a7e6ab0bce4d4f321f5da_MD5.png]]](https://media2.dev.to/dynamic/image/width=800%2Cheight=%2Cfit=scale-down%2Cgravity=auto%2Cformat=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fajt668c0qgm2sp4frsnn.png)