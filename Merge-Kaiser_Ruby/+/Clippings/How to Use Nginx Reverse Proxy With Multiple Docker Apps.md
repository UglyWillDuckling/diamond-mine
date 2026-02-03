---
source: https://linuxhandbook.com/nginx-reverse-proxy-docker/
author:
  - "[[Linux Handbook]]"
published: 2020-09-07
created: 2025-04-27
tags:
  - howto/nginx
  - reverse-proxy
---
## What is reverse proxy? What are its advantages?

What is a reverse proxy? Reverse proxy is kind of a server that sits in the front of many other servers, and forwards the client requests to the appropriate servers. The response from the server is then also received and forwarded by the proxy server to the client.

![[~/×/4bf02c91fe24804f8cbb1a66ca8be7ba_MD5.webp]]

Reverse Proxy

Why would you use such a setup? There are several good reasons for that. This setup can be used to set up a load balancer, caching or for protection from attacks.

I am not going into the details here. Instead, I'll show you how you can utilize the concept of reverse proxy to set up multiple services on the same server.

Take the same image as the one you saw above. What you can do is to run an Ngnix server in a docker container in reverse proxy mode. Other web services can also be run in their own respective containers.

Nginx container will be configured in a way that it knows which web service is running in which container.

![[~/×/2f0609f71f4d86104314266125d609b1_MD5.webp]]

Deploying multiple web services with Nginx reverse proxy and Docker

This is a good way to save cost of hosting each service in a different server. You can have multiple services running in the same Linux server thanks to the reverse proxy server.

## Setting up Nginx as reverse proxy to deploy multiple services on the same server using Docker

Let me show you how to go about configuring the above mentioned setup.

With these steps, you can install multiple web-based application containers running under Nginx with each standalone container corresponding to its own respective domain or subdomain.

First, let's see what you need in order to follow this tutorial.

### Prerequisites

You'll be needing the following knowledge to get started with this tutorial easily. Althogh, you can get by without them as well.

- A Linux system/server. You can easily deploy a Linux server in minutes using [Linode cloud service](https://www.linode.com/?r=19db9d1ce8c1c91023c7afef87a28ce8c8c067bd).
- Familiarity with Linux commands and terminal.
- Basic knowledge of Docker.
- You should have Docker and Docker Compose installed on your Linux server. Please read our guide on [installing Docker](https://linuxhandbook.com/install-docker-centos/) and [Docker Compose on CentOS](https://linuxhandbook.com/install-docker-compose-centos/).
- You should also own a domain (so that you can set up services on sub-domains).

I have used domain.com as an example domain name in the tutorial. Please make sure you change it according to your own domains or subdomains.

Other than the above, please also make sure of the following things:

**Change your domain’s DNS records**

In your domain name provider’s A/AAAA or CNAME record panel, make sure that both the domain and subdomains (including www) point to your server’s IP address.

This is an example for your reference:

| Hostname | IP Address | TTL |
| --- | --- | --- |
| domain.com | 172.105.50.178 | Default |
| \* | 172.105.50.178 | Default |
| sub0.domain.com | 172.105.50.178 | Default |
| sub1.domain.com | 172.105.50.178 | Default |

**Swap space**

To make sure all your container apps are at ease and never run out of memory after you deploy them, you must have the necessary swap space on your system.

You can always [adjust swap](https://linuxhandbook.com/increase-swap-ubuntu/) according to the available RAM on your system. You can decide the swap space based on the bundle of app containers on the single server and estimating their cumulative RAM usage.

### Step 1: Set up Nginx reverse proxy container

Start with setting up your nginx reverse proxy. Create a directory named "reverse-proxy" and switch to it:

```
mkdir reverse-proxy && cd reverse-proxy
```

Create a file named `docker-compose.yml`, open it in your favourite terminal-based text editor like [Vim](https://linuxhandbook.com/basic-vim-commands/) or [Nano](https://www.nano-editor.org/).

For the nginx reverse proxy, I'll be using [jwilder/nginx-proxy](https://hub.docker.com/r/jwilder/nginx-proxy) image. Copy and paste the following in the docker-compose.yml file:

```
version: "3.7"

services:

    reverse-proxy:
        image: "jwilder/nginx-proxy:latest"
        container_name: "reverse-proxy"
        volumes:
            - "html:/usr/share/nginx/html"
            - "dhparam:/etc/nginx/dhparam"
            - "vhost:/etc/nginx/vhost.d"
            - "certs:/etc/nginx/certs"
            - "/run/docker.sock:/tmp/docker.sock:ro"
        restart: "always"
        networks: 
            - "net"
        ports:
            - "80:80"
            - "443:443"
```

Now let's go through the important parts of the compose file:

- You have declared four volumes, html, dhparam, vhost and certs. They're persistent data that you'd definitely want to keep even after the container's been down. The `html` & `vhost` volumes will be very important in the next [Let's Encrypt](https://letsencrypt.org/) container deployment. They're designed to work together.
- The docker socker is mounted read-only inside the container. This one's necessary for the reverse proxy container to generate nginx's configuration files, detect other containers with a specific environment variable.
- [Docker restart policy](https://linuxhandbook.com/docker-restart-policy/) is set to `always`. Other options include `on-failure` and `unless-stopped`. In this case, always seemed more appropriate.
- The ports 80 and 443 are bound to the host for http and https respectively.
- Finally, it uses a different network, not the default bridge network.

> Using a user defined network is very important. This will help in isolating all the containers that are to be proxied, along with enabling the reverse proxy container to forward the clients to their desired/intended containers and also let the containers communicate with each other (Which is not possible with the default bridge network unless `icc` is set to `true` for the daemon).

Keep in mind that YML is very finicky about tabs and indention.

### Step 2: Set up a container for automatic SSL certificate generation

For this, you can using [jrcs/letsencrypt-nginx-proxy-companion](https://hub.docker.com/r/jrcs/letsencrypt-nginx-proxy-companion) container image.

On the same `docker-compose.yml` file that you used before, add the following lines:

```
letsencrypt:
        image: "jrcs/letsencrypt-nginx-proxy-companion:latest"
        container_name: "letsencrypt-helper"
        volumes:
            - "html:/usr/share/nginx/html"
            - "dhparam:/etc/nginx/dhparam"
            - "vhost:/etc/nginx/vhost.d"
            - "certs:/etc/nginx/certs"
            - "/run/docker.sock:/var/run/docker.sock:ro"
        environment:
            NGINX_PROXY_CONTAINER: "reverse-proxy"
            DEFAULT_EMAIL: "user@domain.com"
        restart: "always"
        depends_on:
            - "reverse-proxy"
        networks: 
            - "net"
```

In this service definition:

- You're using the same exact volumes as you used for the reverse-proxy container. The `html` and `vhost` volumes sharing are necessary for the [ACME Challenge of letsencrypt](https://letsencrypt.org/docs/challenge-types/) to be successful. This container will generate the certificates inside `/etc/nginx/certs`, in the container. This is why you are sharing this volume with your reverse proxy container. The `dhparam` volume will contain the dhparam file. The socket is mounted to detect other containers with a specific environment variable.
- Here you have defined two environment variables. The `NGINX_PROXY_CONTAINER` variable points to the reverse proxy container. Set it to the name of the container. The `DEFAULT_EMAIL` is the email that'll be used while generating the certificates for each domain/subdomain.
- The `depends_on` option is set so that this service waits for the reverse proxy to start first, then and only then, this'll start.
- Finally, this container also shares the same network. This is necessary for the two containers to communicate.

### Step 3: Finalize the docker compose file

Once the service definitions are done, complete the docker-compose file with the following lines:

```
volumes:
  certs:
  html:
  vhost:
  dhparam:

networks:
  net:
    external: true
```

The network `net` is set to external because the proxied containers will also have to use this network. And if we leave the network to get created by `docker-comspose`, the network name will depend on the current directory. This will create a weirdly named network.

Other than that, other containers will have to set that network to be external anyway, otherwise those compose files will also have to reside in this same directory, none of which is ideal.

Therefore, create the network using

```
docker network create net
```

The following is the whole content of the `docker-compose.yml` file.

```
version: "3.7"

services:

    reverse-proxy:
        image: "jwilder/nginx-proxy:latest"
        container_name: "reverse-proxy"
        volumes:
            - "html:/usr/share/nginx/html"
            - "dhparam:/etc/nginx/dhparam"
            - "vhost:/etc/nginx/vhost.d"
            - "certs:/etc/nginx/certs"
            - "/run/docker.sock:/tmp/docker.sock:ro"
        restart: "always"
        networks: 
            - "net"
        ports:
            - "80:80"
            - "443:443"
    letsencrypt:
        image: "jrcs/letsencrypt-nginx-proxy-companion:latest"
        container_name: "letsencrypt-helper"
        volumes:
            - "html:/usr/share/nginx/html"
            - "dhparam:/etc/nginx/dhparam"
            - "vhost:/etc/nginx/vhost.d"
            - "certs:/etc/nginx/certs"
            - "/run/docker.sock:/var/run/docker.sock:ro"
        environment:
            NGINX_PROXY_CONTAINER: "reverse-proxy"
            DEFAULT_EMAIL: "user@domain.com"
        restart: "always"
        depends_on:
            - "reverse-proxy"
        networks: 
            - "net"
volumes:
  certs:
  html:
  vhost:
  dhparam:

networks:
  net:
    external: true
```

Finally, you can deploy these two containers (Ngnix and Let's Encrypt) using the following command:

```
docker-compose up -d
```

### Step 4: Verify that Ngnix reverse proxy is working

The container that'll serve the frontend will need to define two environment variables.

`VIRTUAL_HOST`: for generating the reverse proxy config

`LETSENCRYPT_HOST`: for generating the necessary certificates

Make sure that you have correct values for these two variables. You can run nginx-dummy image with reverse proxy like this:

```
docker run --rm --name nginx-dummy -e VIRTUAL_HOST=sub.domain.com -e LETSENCRYPT_HOST=sub.domain.com -e VIRTUAL_PORT=80 --network net -d nginx:latest
```

Now if you go to your sub-domain used in the previous command, you should see a message from Ngnix server.

![[~/×/4b19cb4f011ae82939eb1ae0c3b2ff3c_MD5.webp]]

Ngnix reverse proxy

Once you have successfully tested it, you can [stop the running docker container](https://linuxhandbook.com/docker-stop-container/):

```
docker stop nginx-dummy
```

You may also stop the Ngnix reverse proxy if you are not going to use it:

```
docker-compose down
```

### Step 5: Run other service containers with reverse proxy

The process of setting up other containers so that they can be proxied is VERY simple.

I'll show it with two instances of [Nextcloud](https://nextcloud.com/) deployment in a moment. Let me first tell you what you are doing here.

#### Do not bind to any port

The container can leave out the port that serves the frontend. The reverse proxy container will automatically detect that.

#### (OPTIONAL) Define VIRTUAL\_PORT

If the reverse proxy container fails to detect the port, you can define another environment variable named `VIRTUAL_PORT` with the port serving the frontend or whichever service you want to get proxied, like "80" or "7765".

#### Set Let's Encrypt email specific to a container

You can override the `DEFAULT_EMAIL` variable and set a specific email address for a specific container/web service's domain/subdomain certificate(s), by setting the email id to the environment variable `LETSENCRYPT_EMAIL`. This works on a per-container basis.

Now that you know all those stuff, let me show you the command that deploys a Nextcloud instance that'll be proxied using the nginx proxy container, and will have TLS(SSL/HTTPS) enabled.

> This is NOT AN IDEAL deployment. The following command is used for demonstrative purpose only.

```
docker run --name nextcloud --network net -e VIRTUAL_HOST="sub0.domain.com" -e LETSENCRYPT_HOST="sub0.domain.com" -d nextcloud:19.0.2
```

In the example, you used the same network as the reverse proxy containers, defined the two environment variables, with the appropriate subdomains (Set yours accordingly). After a couple of minutes, you should see Nextcloud running on sub0.domain.com. Open it in a browser to verify.

You can deploy another Nextcloud instance just like this one, on a different subdomain, like the following:

```
docker run --name anothernextcloud --network net -e VIRTUAL_HOST="sub1.domain.com" -e LETSENCRYPT_HOST="sub1.domain.com" -d nextcloud:19.0.2
```

Now you should see a different Nextcloud instance running on a different subdomain on the same server.

With this method, you can deploy different web apps on the same server served under different subdomains, which is pretty handy.

## Follow along

Now that you have this set up, you can go ahead and use this in actual deployments with the following examples:

- [Install Matrix Synapse Homeserver Using Docker](https://linuxhandbook.com/install-matrix-synapse-docker/)
- [Install Multiple Discourse Containers on the Same Server](https://linuxhandbook.com/multiple-discourse-install/)

For more articles like these, subscribe to our newsletter, or consider becoming a member. For any queries, don't hesitate to comment down below.

I'm me.

[@imdebdut](https://twitter.com/imdebdut "X (Twitter)") kolkata