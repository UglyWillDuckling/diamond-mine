---
title: Free HTTPS Certificates with Let’s Encrypt and Certbot with Docker
source: https://medium.com/@luca.milan/free-https-certificates-with-lets-encrypt-and-certbot-with-docker-1f44e7b103c6
author:
  - "[[Luca Milan]]"
published: 2024-01-01
created: 2025-01-06
description: Securing your website with HTTPS is crucial for ensuring the privacy and security of your users’ data. Let’s Encrypt, a free and open Certificate Authority, provides a simple way to obtain SSL/TLS…
tags: 
favicon: https://miro.medium.com/v2/5d8de952517e8160e40ef9841c781cdc14a5db313057fa3c3de41c6f5b494b19
related:
  - "[[persona ssl setup]]"
  - "[[Certbot]]"
  - "[[Atlas/Knowledge/Knowledge/concepts/SSL certificate]]"
---
![icon](https://miro.medium.com/v2/5d8de952517e8160e40ef9841c781cdc14a5db313057fa3c3de41c6f5b494b19]

## Step 1 — Domain & Email

When obtaining a Let’s Encrypt certificate, you need to prove **that you own the domain**. This involves a validation process that traditionally requires adding a specific TXT record to the domain’s root for verification through DNS queries. If you set up this information correctly, Let’s Encrypt will consider you the legitimate domain owner. Successful validation allows Let’s Encrypt to generate the SSL/TLS certificate requested for your domain. Additionally, you must provide a **valid email address** to complete the process.

## **Step 2 — Install Docker and OpenSSL**

If you haven’t installed Docker on your server, you can follow the official installation guide for your operating system: [https://docs.docker.com/get-docker/](https://docs.docker.com/get-docker/). If you need to install [**openssl**](https://www.openssl.org/), you can do it with a package manager like [**Chocolatey**](https://chocolatey.org/) on Windows systems.

## Step 3 — Pull the Certbot Docker Image

Run the following command to pull the Certbot Docker image:

```
docker pull certbot/certbot
```

## Step 4 — Obtain SSL/TLS Certificates with Certbot

To accomplish this step I've created three PowerShell files:

1. new-dns-challenge.ps1
2. create-pfx.ps1
3. re-encrypt-pfx.ps1

Let's give explanations for each PowerShell script.

## 1\. new-dns-challenge.ps1

```
$domain = "my.domain.eu"$email = "info@domain.eu"docker run -it --rm --name certbot \`    -v "${PWD}/etc-letsencrypt:/etc/letsencrypt" \`    -v "${PWD}/var-lib-letsencrypt:/var/lib/letsencrypt" \`    certbot/certbot certonly \`    --manual \`    --preferred-challenges dns \`    --email "$email" \`    --agree-tos \`    --domain "$domain" \`    --rsa-key-size 2048
```

**Explanation**:

- This script initiates the process of obtaining an SSL certificate from Let’s Encrypt using Certbot.
- It sets the domain and email variables for certificate issuance.
- Runs Certbot in a Docker container, specifying DNS challenge for domain validation.
- Certbot ***will interactively prompt you to create a DNS TXT record for domain verification***. (follow the required steps!)

After the process is completed, here is the output:

![[~/×/d96a81eed57e6e0983251a8f3ba05c4d_MD5.png]]

[https://eff-certbot.readthedocs.io/en/latest/using.html#where-are-my-certificates](https://eff-certbot.readthedocs.io/en/latest/using.html#where-are-my-certificates)

## 2\. create-pfx.ps1

Depending on system needs we can [convert the PEM files](https://www.digicert.com/kb/ssl-support/openssl-quick-reference-guide.htm#ConvertingCertificateFormats) to other formats (such as DER or PFX Personal Information Exchange) by using [OpenSSL](https://www.openssl.org/). Converting \*pem in PFX is a mandatory requirement for Azure.

```
$domain = "my.domain.eu"openssl pkcs12 \`    -in "${PWD}\etc-letsencrypt\live\$domain\fullchain.pem" \`    -inkey "${PWD}\etc-letsencrypt\live\$domain\privkey.pem" \`    -certfile "${PWD}\etc-letsencrypt\live\$domain\cert.pem" \`    -export -out "$domain.pfx" \`    -passin pass:root -passout pass:root
```

Explanation:

- This script uses OpenSSL to create a PFX file from the Let’s Encrypt certificate files obtained by Certbot.
- It reads the full chain, private key, and certificate files from the Certbot directory.
- The resulting PFX file is secured with the password ‘root’ both for input and output.

## 2\. re-encrypt-pfx.ps1

My initial goal was to use this certificate on **Azure App Service**, but when I tried to upload my brand new pfx, I got this error:

![[~/×/25cdcab678930a02a513f9ef1c7183c9_MD5.png]]

So, an additional step is needed (**re-encrypt the pfx in Windows**) to allow Azure to validate it.

```
 $domain = "my.domain.eu"$result = Import-PfxCertificate -FilePath "$domain.pfx" -CertStoreLocation Cert:\LocalMachine\My -Password (ConvertTo-SecureString -String 'root' -AsPlainText -Force) -Exportable$thumbprint = $result.Thumbprint.Trim()Export-PfxCertificate -Cert "Cert:\LocalMachine\My\$thumbprint" -FilePath "$domain.final.pfx" -Password (ConvertTo-SecureString -String 'root' -AsPlainText -Force)
```

**Explanation**:

- This script imports the previously created PFX file into the Local Machine Personal certificate store.
- It extracts the Thumbprint of the imported certificate.
- The Thumbprint is then used to export the certificate to a new PFX file for Azure import.
- After that, it can safely be uploaded to Azure App Service Certificates storage

![[~/×/5f23c1571f5cd894936730d202c80fb6_MD5.png]]

Add the new cert on Azure Certificates storage