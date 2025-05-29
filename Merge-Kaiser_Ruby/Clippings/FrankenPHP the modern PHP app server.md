---
source: "https://frankenphp.dev/"
published:
created: 2025-05-29
tags:
---
- ![[~/×/b7ced6e51eac3338f26d5434787f6323_MD5.svg]]

## The Modern PHP App Server,written in Go

- [ ] #task explore [[FrankenPHP the modern PHP app server]]
	- [ ] try it out


[Get started](https://frankenphp.dev/docs/)

![[~/×/da23ccaacc421bdaad30e082ee1d21b8_MD5.svg]]

```sh
# Install FrankenPHP

curl https://frankenphp.dev/install.sh | sh

mv frankenphp /usr/local/bin/

# Serve the public/ directory

frankenphp php-server -r public/

# Run a command-line script

frankenphp php-cli script.php
```

One command to run them all

## Get started!

Make your PHP apps faster than ever!

## Worker mode

![[~/×/2963e70ef324d5a82ba8339643eb635d_MD5.svg|250]] 

## So easy to configure!

```yaml
{

    # Enable FrankenPHP

    frankenphp

}

localhost {

    # Enable compression (optional)

    encode zstd br gzip

    # Execute PHP files in the current directory and serve assets

    php_server

}
```

## FrankenPHP at a glance

![[~/×/9ed963c04300fd1f00932c075f5535e1_MD5.svg]]

### Extensible

Compatible with PHP 8.2+, most PHP extensions and all Caddy modules.

![[~/×/249fc2dcc6fa1e62d993beb4f5bcb1d6_MD5.svg|250]]

### Only one service

Designed with simplicity in mind: only one service, only one binary! FrankenPHP doesn’t need PHP-FPM, it uses its own SAPI specially handcrafted for Go web servers.

![[~/×/f10790098deaa57d2ae35ae66fe1ac39_MD5.svg]]

### Easy deploy

Cloud Native app shipped as [a Docker image](https://frankenphp.dev/docs/docker/). Compatible with Kubernetes, and all modern cloud platforms. It’s also possible to package your PHP app as [a standalone, self-executable static binary](https://frankenphp.dev/docs/embed/).

![[~/×/fdc11dbec9bdcd2217101164f1fbcaed_MD5.svg]]

### Worker mode

[Boot your application once](https://frankenphp.dev/docs/worker/) and keep it in memory! It is ready to handle incoming requests in a few milliseconds.

![[~/×/9084cbd985b078a5dd335004f910c43f_MD5.svg]]

### 103 Early Hints

[Early Hints](https://frankenphp.dev/docs/early-hints/) are a brand new feature of the web platform that can improve [website load times by 30%](https://blog.cloudflare.com/early-hints/). FrankenPHP is the only PHP SAPI with Early Hints support!

![[~/×/0a6a736d6c187cbac70974ba15950b51_MD5.svg]]

### Real-time

Built-in [Mercure](https://mercure.rocks/) hub. Send events from your PHP apps to all connected browsers, they instantly receive the payload as a JavaScript event!

![[~/×/dc7c3a8993b25cc6d8288486d648e743_MD5.svg]]

### Brotli, Zstandard and Gzip compression

Modern compression formats are supported out-of-the-box.

![[~/×/0faf84ac13734e863e5ae06ada0cca47_MD5.svg]]

### Structured logging

Bring a more defined format and details to your logging.

![[~/×/19ac64342c1a7326b9a3015aa2f085e8_MD5.svg]]

### Prometheus metrics and tracing

Built-in [Prometheus support](https://caddyserver.com/docs/metrics)!

![[~/×/e574226fe6e52ad28d83551daf0e474b_MD5.svg]]

### HTTP/2 & HTTP/3

Native support for HTTPS, HTTP/2 and **HTTP/3**.

![[~/×/86119943d3c025c66a2d7993ddafbc0d_MD5.svg]]

### HTTPS Automation

Automatic HTTPS certificate generation, renewal and revocation.

![[~/×/53eb58337cabdb991087ca29438fef0f_MD5.svg]]

### Graceful reload

Deploy your apps with zero downtime thanks to graceful reloads.