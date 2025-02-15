---
title: How to implement HTTPS in Local Networks Using Let's Encrypt
source: https://dev.to/ietxaniz/how-to-implement-https-in-local-networks-using-lets-encrypt-4eh
author:
  - "[[Iñigo Etxaniz]]"
published: 2024-03-25
created: 2024-12-19
description: Introduction   While browsing the internet, you may have noticed that URLs sometimes begin... Tagged with https, docker, webdev, security.
tags:
  - clippings
  - article
  - how-to-article
  - howto/article
related:
  - "[[SSL certificate]]"
---
[[SSL certificate]]
## Introduction

While browsing the internet, you may have noticed that URLs sometimes begin with "HTTPS" instead of "HTTP." This extra "S" signifies a secure connection, where your communication with the website is encrypted. This encryption ensures that only you and the website can decipher the exchanged information, protecting against "Man in the Middle" (MitM) attacks. Such attacks involve interceptors eavesdropping or altering messages without detection. HTTPS scrambles the data into an indecipherable format for anyone intercepting it.

The foundation of HTTPS is the certificate authority (CA) system. CAs act as trusted validators on the internet, verifying website identities and issuing digital certificates, much like ID cards for websites. This system hinges on global recognition and trust in CAs. When a website presents a certificate signed by a known CA, your browser accepts it as a signal that the website is secure.

Yet, when it comes to securing local networks—such as those in your home or office—using global CAs presents challenges. These authorities cannot directly verify ownership of servers within private networks, which is crucial for issuing trusted certificates. Setting up a Private CA is an alternative, but it introduces complexities, such as the need for manual trust setup on new devices and maintaining security against vulnerabilities.

Furthermore, the threat of MitM attacks isn't limited to the vast internet; it's arguably more prevalent within local networks. Shared networks, like those in offices or public Wi-Fi spots, are fertile ground for malicious users to intercept unencrypted traffic. This risk underscores the necessity of HTTPS, ensuring communications are confidential and integrity is maintained, even in internal networks.

The approach we're about to explore, inspired by Joshua's method in [securing web applications on private networks](https://dev.to/joshwizzy/how-to-secure-a-web-application-running-on-a-private-network-el2), involves using Certbot and Let's Encrypt for a streamlined solution. This method sidesteps direct server connection requirements by using DNS verification, making it suitable for internal networks. We begin by securing a domain name, setting up Certbot within Docker for certificate issuance, and finally configuring an Nginx web server to utilize the SSL/TLS certificate. This process, detailed further in the article, not only secures our network but does so in a cost-effective and accessible manner.

To facilitate the implementation of the HTTPS setup described in this article, I've prepared a comprehensive repository containing all the scripts. You can find everything you need to get started at [https://github.com/ietxaniz/https-setup-local-networks](https://github.com/ietxaniz/https-setup-local-networks).

## Understanding HTTPS and Its Importance

HTTPS is crucial for internet security, transforming HTTP into a secure channel using SSL/TLS protocols. These protocols encrypt data in transit, ensuring confidentiality and integrity. The process relies on asymmetric encryption, using a public key for encryption and a private key for decryption. Even if data is intercepted, it remains unreadable without the private key.

Security extends beyond encryption. An SSL/TLS certificate acts as proof that you're communicating with the intended server. Issued by trusted Certificate Authorities (CAs) after rigorous verification, it’s akin to verifying the authenticity of an ID card before granting access. This protects users from potential frauds and attacks.

At the beginning of each secure session, a handshake process lays the groundwork for a secure connection. This process includes server authentication, key exchange, and secure communication using symmetric encryption. The handshake ensures that the communication channel is private, authenticated, and untampered with, marking the transition from the computational rigor of asymmetric encryption to the efficiency of symmetric encryption.

HTTPS signifies trustworthiness, indicated by the padlock icon in the browser's address bar. This trust is crucial for websites handling sensitive information, as it assures users that their data is safe. Periodic renewal of SSL/TLS certificates acts as a continual check, ensuring encryption standards evolve to meet new security challenges and technological advances.

In the broader digital landscape, HTTPS is not just a technical specification; it is a foundational element of online security, privacy, and trust. Its role in safeguarding data integrity, authenticating website identities, and ensuring confidentiality is paramount. Understanding these principles is essential for implementing robust security measures that protect against digital vulnerabilities.

## The Role of Certificate Authorities (CAs)

[[Certificate Authorities]] (CAs) are crucial to the [[HTTPS]] ecosystem, ensuring secure and trustworthy communications between browsers and websites. These trusted entities issue digital certificates, essential for establishing encrypted connections in the[[ SSL/TLS]] protocol.

Digital certificates serve as electronic "passports" for websites, proving their identity to visitors. When you access a secure website, your browser checks the site's digital certificate, verifying it was issued by a CA that the browser trusts. This verification process prevents attackers from masquerading as legitimate websites, a common tactic in phishing attacks.

Understanding the distinction between global CAs and private CAs is essential. Global CAs, such as Let's Encrypt, VeriSign, and Comodo, are widely recognized and trusted, issuing certificates automatically trusted by most web browsers and operating systems. However, their use in local networks can present challenges, as they cannot directly validate servers within private networks.

Private CAs, in contrast, are internal to an organization and not automatically trusted by external systems. They issue certificates for internal servers and applications, where external validation is not feasible or necessary. While private CAs offer flexibility in securing internal communications, they require manual trust management and secure handling of the CA’s private key to prevent unauthorized certificate issuance.

In conclusion, using global Certificate Authorities for private networks simplifies the certification process and enhances security without compromising trustworthiness or administrative overhead. This approach combines the reliability of global CAs with the control of internal network management, eliminating the disadvantages traditionally associated with private CAs.

## [[Let's Encrypt]] and [[Certbot]]

Let's Encrypt offers an automated, open service for obtaining digital certificates, simplifying web security. Founded on the principle of accessible privacy and security, it streamlines the process of certificate renewal. This initiative benefits both small and large organizations by securing local networks without significant costs or administrative burdens.

Certbot, a free, open-source software tool, automates obtaining, installing, and renewing certificates from Let's Encrypt. Designed to work with various web servers and operating systems, Certbot ensures that secure HTTPS is attainable regardless of the technical environment.

In this tutorial, we use the Docker version of Certbot, leveraging Docker's ability to simplify infrastructure management. Using Docker, we avoid complex installations, utilizing containers for a clean and easily replicable setup. We extend the base Certbot image to include `curl`, enabling more sophisticated scripts and interactions during the certificate setup process.

First, create a Dockerfile instructing Docker on how to build our customized Certbot image:  

```Dockerfile
FROM certbot/certbot:latest
RUN apk add --update --no-cache jq curl
```

<svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 24 24" class="highlight-action crayons-icon highlight-action--fullscreen-on"><title>Enter fullscreen mode</title> <path d="M16 3h6v6h-2V5h-4V3zM2 3h6v2H4v4H2V3zm18 16v-4h2v6h-6v-2h4zM4 19h4v2H2v-6h2v4z"></path></svg> <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 24 24" class="highlight-action crayons-icon highlight-action--fullscreen-off"><title>Exit fullscreen mode</title><path d="M18 7h4v2h-6V3h2v4zM8 9H2V7h4V3h2v6zm10 8v4h-2v-6h6v2h-4zM8 15v6H6v-4H2v-2h6z"></path></svg>

Accompany this Dockerfile with a build script, `build.sh`, automating the image creation process:  

```
#!/bin/bash
docker build -t certbot-with-curl .
```

<svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 24 24" class="highlight-action crayons-icon highlight-action--fullscreen-on"><title>Enter fullscreen mode</title> <path d="M16 3h6v6h-2V5h-4V3zM2 3h6v2H4v4H2V3zm18 16v-4h2v6h-6v-2h4zM4 19h4v2H2v-6h2v4z"></path></svg> <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 24 24" class="highlight-action crayons-icon highlight-action--fullscreen-off"><title>Exit fullscreen mode</title><path d="M18 7h4v2h-6V3h2v4zM8 9H2V7h4V3h2v6zm10 8v4h-2v-6h6v2h-4zM8 15v6H6v-4H2v-2h6z"></path></svg>

Save these files in a dedicated directory. Ensure you grant execution permissions to the build script by running `chmod +x build.sh` in your terminal. Execute the build script by navigating to the directory containing `build.sh` and running `./build.sh`. This command builds a new Docker image named `certbot-with-curl`, including all necessary tools for certificate management tasks.

With these preparations complete, we proceed to the certificate generation process, ensuring a versatile and robust environment for HTTPS configuration tasks.

## DNS Management

Securing your web application with HTTPS requires proving ownership of your domain, making DNS management essential. This step is particularly critical in environments with dynamic IP addresses or private networks. While various DNS providers are available, this guide focuses on using DuckDNS, a user-friendly, cost-effective option for linking your domain name to your server's IP address.

First, create an account on DuckDNS, which supports OAuth for quick sign-up using existing social media accounts. After creating your account, set up your domain. For this guide, "inner-private" is the example domain name. Follow these steps to configure your domain:

Log into DuckDNS and navigate to the domain management page. Enter your chosen domain name in the designated field and add the domain. Manually change the automatically detected public IP address to your specific private IP address. Save the changes.

To verify domain ownership, Let's Encrypt performs a DNS challenge, requiring a specific TXT record in your domain's DNS settings. The `add_duckdns_txt_record.sh` script automates updating your domain's TXT record via DuckDNS's API:  

```
#!/bin/sh
DUCKDNS_TOKEN="YOUR_TOKEN"
DOMAIN="inner-private"
VALIDATION_STRING="$CERTBOT_VALIDATION"
curl "https://www.duckdns.org/update?domains=_acme-challenge.$DOMAIN&token=$DUCKDNS_TOKEN&txt=$VALIDATION_STRING"
sleep 90
```

<svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 24 24" class="highlight-action crayons-icon highlight-action--fullscreen-on"><title>Enter fullscreen mode</title> <path d="M16 3h6v6h-2V5h-4V3zM2 3h6v2H4v4H2V3zm18 16v-4h2v6h-6v-2h4zM4 19h4v2H2v-6h2v4z"></path></svg> <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 24 24" class="highlight-action crayons-icon highlight-action--fullscreen-off"><title>Exit fullscreen mode</title><path d="M18 7h4v2h-6V3h2v4zM8 9H2V7h4V3h2v6zm10 8v4h-2v-6h6v2h-4zM8 15v6H6v-4H2v-2h6z"></path></svg>

Prepare and test the script by replacing `"YOUR_TOKEN"` with your actual DuckDNS token, making it executable, and verifying the TXT record update. This setup simplifies securing your web application with HTTPS by automating the DNS challenge process.

## Creating and Storing the Certificates

Storing SSL/TLS certificates in Docker volumes offers a convenient and secure way to manage these sensitive files. For this setup, use two Docker volumes: `https_keys` for storing keys and `https_challenge` for temporary files used by Certbot. Follow these steps to generate and renew your certificates:

Create the necessary Docker volumes using the `create_volumes.sh` script:  

```
#!/bin/bash
docker volume rm https_keys https_challenge
docker volume create https_keys
docker volume create https_challenge
```

<svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 24 24" class="highlight-action crayons-icon highlight-action--fullscreen-on"><title>Enter fullscreen mode</title> <path d="M16 3h6v6h-2V5h-4V3zM2 3h6v2H4v4H2V3zm18 16v-4h2v6h-6v-2h4zM4 19h4v2H2v-6h2v4z"></path></svg> <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 24 24" class="highlight-action crayons-icon highlight-action--fullscreen-off"><title>Exit fullscreen mode</title><path d="M18 7h4v2h-6V3h2v4zM8 9H2V7h4V3h2v6zm10 8v4h-2v-6h6v2h-4zM8 15v6H6v-4H2v-2h6z"></path></svg>

Generate a certificate using a customized Certbot Docker container. The `create_certificates.sh` script initiates the certificate generation process, including hooks for DNS challenges required for domain verification:  

```
#!/bin/bash
DOMAIN="inner-private.duckdns.org"
docker run -it --rm \
    -v https_keys:/etc/letsencrypt \
    -v https_challenge:/var/lib/letsencrypt \
    -v "$(pwd)/scripts:/scripts" \
    --env CERTBOT_DOMAIN="$DOMAIN" \
    certbot-with-curl \
    certonly \
    --staging \
    --verbose \
    --manual \
    --preferred-challenges dns \
    --manual-auth-hook "/scripts/add_duckdns_txt_record.sh $DOMAIN" \
    --manual-cleanup-hook "/scripts/remove_duckdns_txt_record.sh $DOMAIN" \
    -d "$DOMAIN" \
    --non-interactive \
    --agree-tos \
    --email me@inner-private.duckdns.org
```

<svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 24 24" class="highlight-action crayons-icon highlight-action--fullscreen-on"><title>Enter fullscreen mode</title> <path d="M16 3h6v6h-2V5h-4V3zM2 3h6v2H4v4H2V3zm18 16v-4h2v6h-6v-2h4zM4 19h4v2H2v-6h2v4z"></path></svg> <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 24 24" class="highlight-action crayons-icon highlight-action--fullscreen-off"><title>Exit fullscreen mode</title><path d="M18 7h4v2h-6V3h2v4zM8 9H2V7h4V3h2v6zm10 8v4h-2v-6h6v2h-4zM8 15v6H6v-4H2v-2h6z"></path></svg>

After verifying your setup in the staging environment, remove the `--staging` flag from the script and re-run it to obtain a production certificate. Certificates from Let's Encrypt are valid for 90 days, so set up a cron job to automate renewal by periodically re-executing this script.

This approach to certificate management with Docker and Certbot simplifies securing applications. By automating certificate issuance and renewal, you ensure continuous protection for your domains with minimal overhead. Always test changes in the staging environment before applying them to production to avoid disruptions and ensure a smooth deployment.

## Testing with Nginx

After setting up HTTPS using Certbot and Let’s Encrypt, deploy a web server to serve your content securely over HTTPS. This section provides an example of hosting a simple web server within an internal network using an Nginx container and a Let's Encrypt signed certificate.

First, create a directory named after your domain (e.g., `inner-private.duckdns.org`) and inside it, create an `index.html` file with the following content:  

```
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Internal</title>
</head>
<body>
  <h1>Internal web service with HTTPS.</h1>
</body>
</html>
```

<svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 24 24" class="highlight-action crayons-icon highlight-action--fullscreen-on"><title>Enter fullscreen mode</title> <path d="M16 3h6v6h-2V5h-4V3zM2 3h6v2H4v4H2V3zm18 16v-4h2v6h-6v-2h4zM4 19h4v2H2v-6h2v4z"></path></svg> <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 24 24" class="highlight-action crayons-icon highlight-action--fullscreen-off"><title>Exit fullscreen mode</title><path d="M18 7h4v2h-6V3h2v4zM8 9H2V7h4V3h2v6zm10 8v4h-2v-6h6v2h-4zM8 15v6H6v-4H2v-2h6z"></path></svg>

Next, configure Nginx to serve your website securely and redirect HTTP traffic to HTTPS. Create an Nginx configuration file named `inner-private.duckdns.org.conf` with the following content:  

```
server {
  listen 80;
  server_name inner-private.duckdns.org;
  location / {
    return 301 https://$host$request_uri;
  }
}

server {
  listen 443 ssl;
  server_name inner-private.duckdns.org;

  ssl_certificate /etc/letsencrypt/live/inner-private.duckdns.org/fullchain.pem;
  ssl_certificate_key /etc/letsencrypt/live/inner-private.duckdns.org/privkey.pem;

  location / {
    root /var/www/inner-private.duckdns.org;
    index index.html index.htm;
  }

  ssl_protocols TLSv1.2 TLSv1.3;
  ssl_prefer_server_ciphers on;
  ssl_ciphers "ECDHE-ECDSA-AES128-GCM-SHA256:ECDHE-RSA-AES128-GCM-SHA256:ECDHE-ECDSA-AES256-GCM-SHA384:ECDHE-RSA-AES256-GCM-SHA384:DHE-RSA-AES128-GCM-SHA256:DHE-RSA-AES256-GCM-SHA384";
  ssl_session_cache shared:SSL:1m;
  ssl_session_timeout 10m;
}
```

<svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 24 24" class="highlight-action crayons-icon highlight-action--fullscreen-on"><title>Enter fullscreen mode</title> <path d="M16 3h6v6h-2V5h-4V3zM2 3h6v2H4v4H2V3zm18 16v-4h2v6h-6v-2h4zM4 19h4v2H2v-6h2v4z"></path></svg> <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 24 24" class="highlight-action crayons-icon highlight-action--fullscreen-off"><title>Exit fullscreen mode</title><path d="M18 7h4v2h-6V3h2v4zM8 9H2V7h4V3h2v6zm10 8v4h-2v-6h6v2h-4zM8 15v6H6v-4H2v-2h6z"></path></svg>

Finally, use Docker to run Nginx and serve your site. The script below sets up and starts the Nginx server in a container, mounting the necessary volumes for the SSL certificates, website content, and Nginx configuration:  

```
#!/bin/bash
docker run \
  --name rev-proxy \
  -p 80:80 \
  -p 443:443 \
  -v https_keys:/etc/letsencrypt \
  -v https_challenge:/var/lib/letsencrypt \
  -v $(pwd)/nginx:/etc/nginx/conf.d \
  -v $(pwd)/inner-private.duckdns.org:/var/www/inner-private.duckdns.org \
  nginx:1.25.1-alpine3.17-slim
```

<svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 24 24" class="highlight-action crayons-icon highlight-action--fullscreen-on"><title>Enter fullscreen mode</title> <path d="M16 3h6v6h-2V5h-4V3zM2 3h6v2H4v4H2V3zm18 16v-4h2v6h-6v-2h4zM4 19h4v2H2v-6h2v4z"></path></svg> <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 24 24" class="highlight-action crayons-icon highlight-action--fullscreen-off"><title>Exit fullscreen mode</title><path d="M18 7h4v2h-6V3h2v4zM8 9H2V7h4V3h2v6zm10 8v4h-2v-6h6v2h-4zM8 15v6H6v-4H2v-2h6z"></path></svg>

This script starts an Nginx container with the necessary configurations, making your site accessible over HTTPS.

## Conclusion

This article demonstrates how to combine Certbot, Let's Encrypt, and Docker with an Nginx setup to secure web applications on private networks. By highlighting the importance of HTTPS and providing a step-by-step guide, it equips readers to enhance network security. Leveraging automation and trusted global CAs, this approach makes advanced security measures accessible and manageable.

Given the dynamic nature of cybersecurity, continuous improvement and community feedback are essential. If any inaccuracies are noticed or if there are suggestions for enhancing the security aspects discussed, the community's input would be greatly appreciated.