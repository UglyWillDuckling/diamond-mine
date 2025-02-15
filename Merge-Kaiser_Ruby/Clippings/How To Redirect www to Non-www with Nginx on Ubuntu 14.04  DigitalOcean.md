---
title: How To Redirect www to Non-www with Nginx on Ubuntu 14.04 | DigitalOcean
source: https://www.digitalocean.com/community/tutorials/how-to-redirect-www-to-non-www-with-nginx-on-ubuntu-14-04
author:
  - "[[Mitchell Anicas and Kent Shultz]]"
published: 2001-12-17
created: 2025-01-07
description: This tutorial will show you how to redirect a www URL to non-www, e.g. www.example.com to example.com , with Nginx on Ubuntu 14.04. We will also show you how …
tags: 
favicon: https://www.digitalocean.com/_next/static/media/android-chrome-192x192.f09059d8.png
related:
  - "[[A Record]]"
  - "[[www record]]"
  - "[[Domain Name System|DNS]]"
  - "[[Nginx]]"
  - "[[http redirect]]"
  - "[[setup Persona web]]"
---
![icon|100](https://www.digitalocean.com/_next/static/media/android-chrome-192x192.f09059d8.png)

### Introduction

Many web developers need to allow their users to access their website or application via both the www subdomain and the root (non-www) domain. That is, users should have the same experience when visiting `www.my-website.com` and `my-website.com`. While there are many ways to set this up, the most SEO-friendly solution is to choose which domain you prefer—the subdomain or the root domain—and have the web server redirect users who visit the other one to the preferred domain.

There are many kinds of HTTP redirects, but in this scenario, it’s best to use a 301 redirect, which tells clients, “The website you have requested has permanently moved to another URL. Go there instead.” Once the browser receives the HTTP 301 response code from the server, it sends a second request to the new URL given by the server and the user is presented with the website, probably never noticing they were redirected.

Why not configure your web server to just serve the same website for requests to both domain names? That may seem easier, but it does not confer the SEO advantages of the 301 redirect. A permanent redirect tells search engine crawlers that there is one canonical location for your website, and this improves the search rankings of that one URL.

In this tutorial, you will configure a 301 redirect using Nginx on Ubuntu 14.04. If you are running Apache instead of Nginx, see this tutorial instead: [How To Redirect www to Non-www with Apache on Ubuntu 14.04](https://www.digitalocean.com/community/tutorials/how-to-redirect-www-to-non-www-with-apache-on-ubuntu-14-04) .

## Prerequisites

To complete this tutorial, you first need:

- Superuser privileges (a user in the `sudo` group) on the server that is running Nginx. If you don’t already have that set up, follow this tutorial: [Initial Server Setup with Ubuntu 14.04](https://www.digitalocean.com/community/tutorials/initial-server-setup-with-ubuntu-14-04).
- Nginx installed and configured to serve your website. Follow this tutorial to do that: [How to Install Nginx on Ubuntu 14.04](https://www.digitalocean.com/community/tutorials/how-to-install-nginx-on-ubuntu-14-04-lts). Also read: [How To Set Up Nginx Server Blocks (Virtual Hosts) On Ubuntu 14.04 LTS](https://www.digitalocean.com/community/tutorials/how-to-set-up-nginx-server-blocks-virtual-hosts-on-ubuntu-14-04-lts).
- A registered domain name. If you don’t have one yet, you can get a free one from [Freenom](https://www.freenom.com/). You may use whatever DNS provider you like (including your registrar) to host your domain’s records—just make sure to point your registrar to your provider’s nameservers. If you opt to use DigitalOcean DNS, [this article from our documentation](https://docs.digitalocean.com/tutorials/dns-registrars/) shows how to do that.

Let’s get started by configuring your DNS records.

## Step 1 — Configuring DNS Records

First, **you need to point both** `www.my-website.com` and `my-website.com` to your server running [[Nginx]]. (The rest of the tutorial assumes your domain is `my-website.com`. Replace that with your own domain wherever you see it below.) You will do this by creating a DNS A record for each name that points to your Nginx server’s IP address.

Open your DNS provider’s web console. This tutorial uses [DigitalOcean DNS](https://cloud.digitalocean.com/networking/domains).

In the **Add a domain** form, enter your registered domain name in the text field and click **Add Domain**. This will bring up the new domain’s page, where you can view, add, and delete records for the domain.

Under **Create new record**, type “@” in the **HOSTNAME** text field. This is a special character that indicates you are adding a record for the root domain name, a record for just plain `my-website.com`. In the **WILL DIRECT TO** text field, enter the public IPv4 address of your server, and click **Create Record**. (No need to change the TTL.)

For your second DNS record, you could use a CNAME record instead of an A record. A CNAME record is an alias that points to another name instead of an IP address. You could create a CNAME that directs `www.my-website.com` to `my-website.com`, and any HTTP request for the www subdomain would find its way to your server since you just created the A record for the root domain. But to keep things simple, just create another A record like the first one, entering “www” in the **HOSTNAME** field and the server’s public IP address in the **WILL DIRECT TO** field.

When you have created both records, it should look something like this:

![Required A records](https://deved-images.nyc3.cdn.digitaloceanspaces.com/CTM-731/my-website-recs.png)

With the two records in place, web requests for both `my-website.com` and `www.my-website.com` should reach your Nginx server. Now let’s configure the server.

## Step 2 — Configuring the Redirect in Nginx

As stated in the Prerequisites, you should already have your website configured in Nginx. It does not matter whether the site’s `server` block appears in the main `/etc/nginx/sites-enabled/default` file or in its own file. The important thing is that you have some `server` block configured with the `server_name` directive set to `my-website.com` and/or `www.my-website.com`. Whether your `server_name` contains one or both names, now is the time to decide which name you would like to be the one and only name to host the site.

Open the file that contains your website configuration (e.g., `/etc/nginx/sites-available/my-website.com.conf`) in `nano` or your favorite editor and find the `server_name` directive:

/etc/nginx/sites-available/my-website.com.conf

```
server {
    . . .
    server_name my-website.com www.my-website.com
    . . .
}
```

If you want to redirect `www.my-website.com` to `my-website.com`, remove `www.my-website.com` from the `server_name` line, and save and exit the file. (If you want to redirect `my-website.com` to `www.my-website.com`, remove `my-website.com` instead.)

Then, create a new Nginx configuration file called `/etc/nginx/sites-available/www.my-website.com.conf` (or `/etc/nginx/sites-available/my-website.com.conf`, if that is the name you are redirecting). Name the file whatever you like, but as with all Nginx configuration files, the file name must end in `.conf`:

Add the following `server` block to the file, replacing `my-website.com` with your own domain name:

/etc/nginx/sites-available/www.my-website.com.conf

```
server {
    server_name www.my-website.com;
    return 301 $scheme://my-website.com$request_uri;
}
```

If you are redirecting `my-website.com` to the www subdomain instead, put `my-website.com` only in the `server_name`, and `www.my-website.com` in the URL on the next line.

Save and exit when you are finished. Then make a symlink in `/etc/nginx/sites-enabled` to this new file so Nginx will pick it up after restarting:

This configures Nginx to send a 301 redirect back to any clients requesting `www.my-website.com`, and directs them to visit `my-website.com` instead. The redirect preserves the request URI, so that a request to `http://www.my-website.com/login.php` will be redirected to `http://my-website.com/login.php`.

**Note:** The `server` block above does not contain the `listen` directive. This is OK, because as mentioned in [this tutorial](https://www.digitalocean.com/community/tutorials/understanding-nginx-server-and-location-block-selection-algorithms#how-nginx-decides-which-server-block-will-handle-a-request), any `server` block without a `listen` directive will listen on 0.0.0.0:80 (port 80 on all interfaces). But if your Nginx server is home to multiple IP addresses, or if your site listens on a port other than 80, you may need to add a `listen` directive to spell out the specific IP address and port. Use the same value for `listen` that your site’s main `server` block uses.

Before applying the changes, check that your Nginx configuration is error free:

Unless you made a syntax error (e.g., you forgot a semicolon), the configuration should be OK.

```
Outputnginx: the configuration file /etc/nginx/nginx.conf syntax is ok
nginx: configuration file /etc/nginx/nginx.conf test is successful
```

Now restart Nginx to apply the new redirect rule:

Before visiting `www.my-website.com` in your browser, make a request using `curl` on either your server or your local machine (if `curl` is installed locally):

The `-I` flag tells `curl` to show only the headers from the server response. The `-L` flag tells `curl` to obey any redirects from the server by automatically making a second request, this time to the URL given in the `Location` header (just as a web browser would do). Since you have configured the 301 redirect, `curl` should make two requests, and you should see just the headers of the two responses:

```bash
OutputHTTP/1.1 301 Moved Permanently
Server: nginx/1.20.1
Date: Thu, 08 Dec 2022 19:24:44 GMT
Content-Type: text/html
Content-Length: 169
Connection: keep-alive
Location: http://my-website.com

HTTP/1.1 200 OK
Server: nginx/1.20.1
Date: Thu, 08 Dec 2022 19:24:44 GMT
Content-Type: text/html
Content-Length: 57
Last-Modified: Thu, 01 Dec 2022 22:10:57 GMT
Connection: keep-alive
ETag: "63892671-39"
Accept-Ranges: bytes
```

In the [[301]] (Moved Permanently) response to the original request to `http://www.my-website.com`, notice the last header: `Location: http://my-website.com`. The second response is from `curl`’s followup request to `http://my-website.com`, and if your website is healthy, the server should have responded with 200 (OK).

Finally, visit `http://www.my-website.com` in your web browser. Blink, and you’ll miss the redirect. Your website should appear as usual, but look again in your address bar and notice that the “www” is missing from the URL. Most users will never notice this, and so they will have the same experience as if they had requested `http://my-website.com`.

## Conclusion

In this tutorial, you added two DNS records for your website and configured Nginx to redirect a secondary domain to your preferred domain. Now your website is reachable via both domains. Maybe it already was before you read this tutorial; perhaps you were serving it directly from both domain names. But with just four more lines of Nginx configuration, you have improved your website’s standing in the eyes of the search engines—and thereby exposed it to more users across the internet.

Want some further reading on how Nginx decides which `server` block will handle a given request? Check out this guide: [Understanding Nginx Server and Location Block Selection Algorithms](https://www.digitalocean.com/community/tutorials/understanding-nginx-server-and-location-block-selection-algorithms).