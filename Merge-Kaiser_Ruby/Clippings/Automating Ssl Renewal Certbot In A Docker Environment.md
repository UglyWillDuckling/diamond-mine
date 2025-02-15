---
title: "Automating Ssl Certificate Renewal With Certbot In A Docker Environmen"
source: "https://peerdh.com/blogs/programming-insights/automating-ssl-certificate-renewal-with-certbot-in-a-docker-environment-1"
author:
  - "[[Author]]"
published: 2024-09-17
created: 2025-01-06
description: "In today's digital landscape, securing your web applications with SSL certificates is a must. However, managing these certificates can be a hassle, especially when it comes to renewal. Fortunately, Certbot makes this process easier, and when combined with Docker, it becomes even more efficient. This article will guide"
tags:
favicon: "//peerdh.com/cdn/shop/files/Asset_3_4x_0ca8864b-8916-43b9-9e00-6446f2de448e.png?crop=center&height=32&v=1735265450&width=32"
---
![icon](//peerdh.com/cdn/shop/files/Asset_3_4x_0ca8864b-8916-43b9-9e00-6446f2de448e.png?crop=center&height=32&v=1735265450&width=32]

September 17, 2024

In today's digital landscape, securing your web applications with SSL certificates is a must. However, managing these certificates can be a hassle, especially when it comes to renewal. Fortunately, Certbot makes this process easier, and when combined with Docker, it becomes even more efficient. This article will guide you through automating SSL certificate renewal using Certbot in a Docker environment.

## Understanding Certbot and Docker

Certbot is a free, open-source tool that automates the process of obtaining and renewing SSL certificates from Let's Encrypt. Docker, on the other hand, is a platform that allows you to develop, ship, and run applications in containers. By using Certbot within a Docker container, you can streamline the management of SSL certificates for your applications.

## Setting Up Your Docker Environment

Before we start automating SSL certificate renewal, you need to set up your Docker environment. If you haven't installed Docker yet, follow these steps:

1. **Create a Docker Network**: This will allow your containers to communicate with each other.
`bash    docker network create nginx-certbot`

## Creating the Docker Compose File

Using Docker Compose simplifies the process of managing multiple containers. Create a `docker-compose.yml` file in your project directory with the following content:

```yaml
version: '3'

services:
  nginx:
    image: nginx:latest
    container_name: nginx
    restart: always
    ports:
      - "80:80"
      - "443:443"
    volumes:
      - ./nginx.conf:/etc/nginx/nginx.conf
      - certs:/etc/letsencrypt
    networks:
      - nginx-certbot

  certbot:
    image: certbot/certbot
    container_name: certbot
    volumes:
      - certs:/etc/letsencrypt
    networks:
      - nginx-certbot

volumes:
  certs:
```

### Explanation of the Docker Compose File

- **nginx**: This service uses the latest Nginx image. It listens on ports 80 and 443 and mounts the Nginx configuration file and the certificate volume.
- **certbot**: This service uses the Certbot image and shares the same volume for certificates with the Nginx service.
- **volumes**: The `certs` volume is created to store the SSL certificates.

## Configuring Nginx

Create an `nginx.conf` file in the same directory as your `docker-compose.yml`. This file will configure Nginx to work with Certbot. Here’s a basic configuration:

```nginx
server {
    listen 80;
    server_name persona.hr www.persona.hr;

    location /.well-known/acme-challenge/ {
        root /var/www/certbot;
    }

    location / {
        return 301 https://$host$request_uri;
    }
}

server {
    listen 443 ssl;
    server_name persona.hr www.persona.hr;

    ssl_certificate /etc/letsencrypt/live/persona.hr/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/persona.hr/privkey.pem;

    location / {
	    root /var/www/html;
        # Your application configuration
    }
}
```
### Important Notes
- The first server block handles HTTP requests and redirects them to HTTPS.
- The second server block handles HTTPS requests and specifies the paths to the SSL certificate and key.

## Obtaining **SSL** Certificates

Now that you have your Docker environment set up, it's time to obtain your SSL certificates. Run the following command to start the Nginx and Certbot containers:

```bash
docker-compose up -d
```

Next, execute the Certbot command to obtain the certificates:

```bash
docker-compose run --rm certbot certonly --webroot --webroot-path=/var/www/certbot -d persona.hr
```

### Explanation of the Certbot Command

- `certonly`: This tells Certbot to obtain the certificate without installing it.
- `--webroot`: This option specifies that Certbot should use the webroot plugin.
- `--webroot-path`: This is the path where Certbot will place the challenge files.
- `-d`: This option specifies the domain names for which you want to obtain the certificate.

## Automating Certificate Renewal

Certbot certificates are valid for 90 days, so automating the renewal process is crucial. You can set up a cron job to handle this. First, create a script named `renew_certificates.sh` in your project directory:

```bash
#!/bin/bash

docker-compose run --rm certbot renew
docker-compose kill -s SIGHUP nginx
```

### Explanation of the Script

- The first line runs the Certbot renewal command.
- The second line sends a SIGHUP signal to the Nginx container, prompting it to reload the configuration and use the new certificates.

### Setting Up the Cron Job

To set up the cron job, open your crontab file:

```bash
crontab -e
```

Add the following line to run the renewal script daily:

```bash
0 0 * * * /path/to/your/project/renew_certificates.sh >> /var/log/certbot-renew.log 2>&1
```

### Explanation of the Cron Job

- `0 0 * * *`: This schedule runs the script every day at midnight.
- `/path/to/your/project/renew_certificates.sh`: Replace this with the actual path to your script.
- `>> /var/log/certbot-renew.log 2>&1`: This redirects the output and errors to a log file for monitoring.

## Testing the Renewal Process

To ensure everything is working correctly, you can manually run the renewal script:

```bash
bash renew_certificates.sh
```

Check the logs to confirm that the renewal process completed successfully. You can also verify that Nginx is using the new certificates by visiting your website.

## Conclusion

Automating SSL certificate renewal with Certbot in a Docker environment simplifies the management of your web application's security. By following the steps outlined in this article, you can ensure that your SSL certificates are always up to date, allowing you to focus on building and improving your applications without worrying about security lapses.
