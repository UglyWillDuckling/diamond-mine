---
author:
  - "[[Roots]]"
created: 2025-02-17
published: 2018-12-21
source: https://roots.io/bedrock/docs/server-configuration/
tags:
  - docs/official
  - docs/bedrock
---
Bedrock can run on any webserver that supports Composer and PHP >= 7.1. The document root for your site must be pointed to Bedrock's `web` folder.

## # Nginx configuration for Bedrock

If you aren't using a Nginx-based setup that already supports Bedrock, such as Valet or [Trellis](https://roots.io/trellis/), you'll need to configure Nginx with the following rules:

```nginx
server {
  listen 80;
  server_name example.com;

  root /srv/www/example.com/web;
  index index.php index.htm index.html;

  # Prevent PHP scripts from being executed inside the uploads folder.
  location ~* /app/uploads/.*.php$ {
    deny all;
  }

  location / {
    try_files $uri $uri/ /index.php?$args;
  }
}
```

### # Nginx multisite config

Multisite installations on Nginx need additional rewrites depending on the type of multisite install.

#### # Subdomain multisite rewrites
```nginx
rewrite ^/(wp-.*.php)$ /wp/$1 last;
rewrite ^/(wp-(content|admin|includes).*) /wp/$1 last;
```
#### # Subfolder multisite rewrites
```nginx
if (!-e $request_filename) {
  rewrite /wp-admin$ $scheme://$host$uri/ permanent;
  rewrite ^(/[^/]+)?(/wp-.*) /wp$2 last;
  rewrite ^(/[^/]+)?(/.*.php) /wp$2 last;
}
```
