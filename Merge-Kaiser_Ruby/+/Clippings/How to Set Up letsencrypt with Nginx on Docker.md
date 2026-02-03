---
title: How to Set Up letsencrypt with Nginx on Docker
source: https://phoenixnap.com/kb/letsencrypt-docker
author:
  - "[[Marko Aleksic]]"
published: 2023-09-21
created: 2024-12-23
description: Learn how to set up Let's Encrypt on a Nginx server running in Docker by following this easy tutorial. Secure your website with HTTPS today!
tags:
  - clippings
  - howto
  - article
  - howto/article
related:
  - "[[Let's Encrypt]]"
---
Let's Encrypt is a certificate authority that provides users with a simple way to obtain [SSL/TLS certificates](https://phoenixnap.com/kb/what-is-an-ssl-certificate) for their [domain](https://phoenixnap.com/glossary/what-is-a-domain) free of charge. Using Let's Encrypt to secure an Nginx installation in [Docker](https://phoenixnap.com/kb/what-is-docker) allows you to utilize the benefits of a containerized server deployment and simplify certificate management.

**This article shows how to use Certbot to set up Let's Encrypt on a Nginx server running in Docker.**

### Prerequisites

- Docker installed.
- [Docker Compose](https://phoenixnap.com/kb/docker-compose) installed.
- Administrative access to the system.

## Setting up Nginx Webserver with letsencrypt on Docker

Installation of Let's Encrypt certificates on a dockerized Nginx deployment involves:

- Creating a Docker Compose file.
- Adjusting the Nginx server configuration.
- Running the Certbot client.

The steps below describe the most straightforward method to obtain Let's Encrypt certificates.

### Step 1: Create Directory

Create a project directory in which to store the Docker Compose file. Use the [cd command](https://phoenixnap.com/kb/linux-cd-command) to navigate to the newly created directory. Execute both commands on a single line:
```
sudo mkdir letsencrypt && cd letsencrypt
```
### Step 2: Create Docker Compose File

Docker Compose is a tool for creating and running multi-container Docker applications. The *docker-compose.yml* file defines and configures the containers participating in the deployment.

Create the file with a [text editor](https://phoenixnap.com/kb/best-linux-text-editors-for-coding) such as [Nano](https://phoenixnap.com/kb/use-nano-text-editor-commands-linux):

```
nano docker-compose.yml
```

Next, paste the following code into the file:

```yaml
services:
  webserver:
    image: nginx:latest
    ports:
      - 80:80
      - 443:443
    restart: always
    volumes:
      - ./nginx/conf/:/etc/nginx/conf.d/:ro
      - ./certbot/www/:/var/www/certbot/:ro
  certbot:
    image: certbot/certbot:latest
    volumes:
      - ./certbot/www/:/var/www/certbot/:rw
      - ./certbot/conf/:/etc/letsencrypt/:rw
```

The code defines two containers (*webserver* and *certbot*) and connects them by mapping them to the */var/www/certbot/* directory. It also provides [read and write permissions](https://phoenixnap.com/kb/linux-file-permissions) for the [[Certbot]] container to allow [[Certbot]] to create certificates.

### Step 3: Create Configuration File

Before applying the Docker Compose file, configure the [[Nginx]] server to allow [[Certbot]] to access the files it needs. To achieve this, create a configuration file:

```bash
vim /etc/nginx/conf.d/app.conf
```

Copy and paste the code below, replacing **`[domain-name]`** with your actual domain name:

```nginx
server {
    listen 80;
    listen [::]:80;

    server_name [domain-name] www.[domain-name];
    server_tokens off;

    location /.well-known/acme-challenge/ {
        root /var/www/certbot;
    }

    location / {
        return 301 https://[domain-name]$request_uri;
    }
}
```

**Save the file** and exit.

The first **`location`** block serves the files necessary for [[Certbot]] to authenticate the server and create the certificate. The second **`location`** block sends the rest of the port **80** [HTTP traffic to HTTPS](https://phoenixnap.com/kb/redirect-http-to-https-nginx).

📔: The current setup would receive error **301** because [[HTTPS]] is not defined in Nginx. In a later step, this traffic will be redirected to port **443** ([[HTTPS]]).

### Step 4: Run [[Certbot]]

With the necessary configuration in place, apply the Docker Compose file with the **`docker-compose run`** command. Since Let's Encrypt limits the amount of available free certificates per month, test the command in a dry run first:

```bash
docker-compose run --rm certbot certonly --webroot --webroot-path /var/www/certbot/ --dry-run -d [domain-name]
```

When prompted, enter your email for notices from Let's Encrypt. This step is optional, and you can skip it by typing `c` and pressing **Enter**.

Agree to the **Terms of Service** by typing **`y`** and pressing **Enter**.

Wait for the procedure to finish. If Docker reports no errors, run the command without the **`--dry-run`** flag:
```
docker-compose run --rm certbot certonly --webroot --webroot-path /var/www/certbot/ -d [domain-name]
```

### Step 5: Add [[HTTPS]] to [[Nginx]] Configuration File

Once Certbot authenticates the server, add an HTTPS server block to the configuration file you created earlier. Follow the steps below to edit your Nginx deployment:

1\. Open the configuration file:

```
sudo nano /etc/nginx/conf.d/app.conf
```

2\. Add the following server block to the end of the file. Replace **`[domain-name]`** with your actual domain name.

```nginx
server {
    listen 443 default_server ssl http2;
    listen [::]:443 ssl http2;

    server_name [domain-name];

    ssl_certificate /etc/letsencrypt/ssl/live/[domain-name]/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/ssl/live/[domain-name]/privkey.pem;
    
    location / {
    	proxy_pass http://[domain-name];
    }
}
```

The entire file should look like in the example below.

3. Reload Nginx:
```bash
docker-compose restart
```

Alternatively, if you cannot afford the downtime the command above causes, execute the command below:

```bash
docker-compose exec webserver nginx -s reload
```

### Step 6: Renew Certificates

Let's Encrypt certificates last for three months, after which it is necessary to renew them. To renew certificates, execute the following command:

```bash
docker-compose run --rm certbot renew
```

Conclusion

After reading this article, you should know how to set up your dockerized Nginx server to get certified with free Let's Encrypt certificates. The certificates allow you to secure your website or app with an HTTPS connection.

For more tips on how to create a secure website, read our [Simple Guide to Website Security](https://phoenixnap.com/blog/how-to-secure-a-website).
