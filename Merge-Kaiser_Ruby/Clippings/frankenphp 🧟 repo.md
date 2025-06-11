---
source: https://github.com/dunglas/frankenphp
author: []
created: 2025-06-01
tags:
  - repo/php
---
**[frankenphp](https://github.com/dunglas/frankenphp)** Public
🧟 The modern PHP app server
___

FrankenPHP is a modern application server for PHP built on top of the [Caddy](https://caddyserver.com/) web server.

FrankenPHP gives superpowers to your PHP apps thanks to its stunning features: [*Early Hints*](https://frankenphp.dev/docs/early-hints/), [worker mode](https://frankenphp.dev/docs/worker/), [real-time capabilities](https://frankenphp.dev/docs/mercure/), automatic HTTPS, HTTP/2, and HTTP/3 support...

FrankenPHP works with any PHP app and makes your Laravel and Symfony projects faster than ever thanks to their official integrations with the worker mode.

FrankenPHP can also be used as a standalone Go library to embed PHP in any app using `net/http`.

[**Learn more** on *frankenphp.dev*](https://frankenphp.dev/) and in this slide deck:

> [!NOTE]
> ![[~/×/03e026844eaacbfa786fbafee930163a_MD5.png|250]]

## Getting Started

### Standalone Binary

We provide static FrankenPHP binaries for Linux and macOS containing [PHP 8.4](https://www.php.net/releases/8.4/en.php) and most popular PHP extensions.

On Windows, use [WSL](https://learn.microsoft.com/windows/wsl/) to run FrankenPHP.

[Download FrankenPHP](https://github.com/dunglas/frankenphp/releases) or copy this line into your terminal to automatically install the version appropriate for your platform:

```
curl https://frankenphp.dev/install.sh | sh
mv frankenphp /usr/local/bin/
```

To serve the content of the current directory, run:

```
frankenphp php-server
```

You can also run command-line scripts with:

```
frankenphp php-cli /path/to/your/script.php
```

### Docker

Alternatively, [Docker images](https://frankenphp.dev/docs/docker/) are available:

```
docker run -v .:/app/public \
    -p 80:80 -p 443:443 -p 443:443/udp \
    dunglas/frankenphp
```

Go to `https://localhost`, and enjoy!

### Homebrew

FrankenPHP is also available as a [Homebrew](https://brew.sh/) package for macOS and Linux.

To install it:

```
brew install dunglas/frankenphp/frankenphp
```

To serve the content of the current directory, run:

```
frankenphp php-server
```

## Docs

- [Classic mode](https://frankenphp.dev/docs/classic/)
- [Worker mode](https://frankenphp.dev/docs/worker/)
- [Early Hints support (103 HTTP status code)](https://frankenphp.dev/docs/early-hints/)
- [Real-time](https://frankenphp.dev/docs/mercure/)
- [Efficiently Serving Large Static Files](https://frankenphp.dev/docs/x-sendfile/)
- [Configuration](https://frankenphp.dev/docs/config/)
- [Docker images](https://frankenphp.dev/docs/docker/)
- [Deploy in production](https://frankenphp.dev/docs/production/)
- [Performance optimization](https://frankenphp.dev/docs/performance/)
- [Create **standalone**, self-executable PHP apps](https://frankenphp.dev/docs/embed/)
- [Create static binaries](https://frankenphp.dev/docs/static/)
- [Compile from sources](https://frankenphp.dev/docs/compile/)
- [Monitoring FrankenPHP](https://frankenphp.dev/docs/metrics/)
- [Laravel integration](https://frankenphp.dev/docs/laravel/)
- [Known issues](https://frankenphp.dev/docs/known-issues/)
- [Demo app (Symfony) and benchmarks](https://github.com/dunglas/frankenphp-demo)
- [Go library documentation](https://pkg.go.dev/github.com/dunglas/frankenphp)
- [Contributing and debugging](https://frankenphp.dev/docs/contributing/)
- [Symfony](https://github.com/dunglas/symfony-docker)
- [API Platform](https://api-platform.com/docs/symfony)
- [Laravel](https://frankenphp.dev/docs/laravel/)
- [Sulu](https://sulu.io/blog/running-sulu-with-frankenphp)
- [WordPress](https://github.com/StephenMiracle/frankenwp)
- [Drupal](https://github.com/dunglas/frankenphp-drupal)
- [Joomla](https://github.com/alexandreelise/frankenphp-joomla)
- [TYPO3](https://github.com/ochorocho/franken-typo3)
- [Magento2](https://github.com/ekino/frankenphp-magento2)

## Releases 36

[\+ 35 releases](https://github.com/dunglas/frankenphp/releases)

## Sponsor this project

[**dunglas** Kévin Dunglas](https://github.com/dunglas)

[Sponsor](https://github.com/sponsors/dunglas)

[Learn more about GitHub Sponsors](https://github.com/sponsors)