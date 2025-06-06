---
author:
  - "[[Atlas/tools/dev/github]]"
created: 2025-02-17
published:
source: https://github.com/RobDWaller/dusty
tags:
  - tool/wordpress
  - tool/php
---
## Dusty: A WordPress Composer Starter Repo

[![PHP Version Support](https://camo.githubusercontent.com/22fa102926848ab40c22e51101461481c942df45c3014b213d687cd80b1b22be/68747470733a2f2f696d672e736869656c64732e696f2f7061636b61676973742f7068702d762f726264776c6c722f6475737479)](https://camo.githubusercontent.com/22fa102926848ab40c22e51101461481c942df45c3014b213d687cd80b1b22be/68747470733a2f2f696d672e736869656c64732e696f2f7061636b61676973742f7068702d762f726264776c6c722f6475737479)dd

Dusty is an example WordPress starter repo based around [Composer](https://getcomposer.org/) and [Docker](https://www.docker.com/products/docker-desktop). It allows you to create WordPress repos without the need to store core WordPress files in your Git repository. This makes for far easier deployments and cleaner code. It also allows you to load in non-WordPress packages such as [PHPDotEnv](https://packagist.org/packages/vlucas/phpdotenv) via Composer.

## Setup

To make use of Dusty you will need to install both [Composer](https://getcomposer.org/) and [Docker](https://www.docker.com/products/docker-desktop) locally. Composer is a PHP package manager linked to [Packagist](https://packagist.org/) and Docker is a containerisation platform that allows you to easily generate development and production environments.

### Installation

Installation assumes you are working in a Linux or a Linux like environment.

Install using Composer:

```
composer create-project --no-dev --no-interaction --ignore-platform-reqs rbdwllr/dusty [project-name]
```

Build Docker:

```
docker-compose build
docker-compose up -d
```

Create .env file with WordPress salts:

```
docker-compose exec web composer make-environment
```

Once these steps have been completed go to [localhost:8080](http://localhost:8080/) to use WordPress and finish off the installation process.

## Package and Plugin Management

By default Composer can pull in packages from Packagist, and this is great if you wish to extend WordPress with more general PHP libraries and frameworks. This though does not help you easily manage plugins and themes. Dusty though integrates with a package manager called [WPackagist](https://wpackagist.org/) which is the WordPress equivalent of Packagist for plugins and themes.

You can add your plugins and themes to your composer.json file in exactly the same way as you add PHP packages. They will also be placed in the relevant WordPress directories, rather than the vendor folder.

```
// Example composer.json config, using WPackagist.
"repositories":[
    {
        "type":"composer",
        "url":"https://wpackagist.org"
    }
],
"require": {
    "wpackagist-plugin/wordpress-seo": "^11.0",
    "wpackagist-plugin/advanced-custom-fields": "^5.0",
    "wpackagist-theme/twentynineteen": "^1.0",
},
"extra": {
    "installer-paths": {
        "public/wp-content/mu-plugins/{$name}": ["type:wordpress-muplugin"],
        "public/wp-content/plugins/{$name}": ["type:wordpress-plugin"],
        "public/wp-content/themes/{$name}": ["type:wordpress-theme"]
    },
    "wordpress-install-dir": "public/wordpress"
}
```

## Use Private Repos

Sometimes you'll wish to keep some of your code private but still pull it in via Composer. For instance you may have a WordPress theme that contains branded material and custom code.

You can do this by adding a Version Control System repository to your Composer config:

```
"repositories":[
    {
        "type":"composer",
        "url":"https://wpackagist.org"
    },
    {
        "type": "vcs",
        "url":  "git@github.com:vendor/repo-name.git"
    }
],
```

**Note:** Your theme will require a composer.json file with config which defines it as a WordPress theme. You will need a similar setup if you are creating a private plugin, but you will set the type as `"type": "wordpress-plugin"`.

```
// Example composer.json for a WordPress theme.
{
    "name": "vendor/theme",
    "description": "My cool theme.",
    "type": "wordpress-theme",
    "license": "proprietary",
    "require": {}
}
```

### Repository SSH Keys

Usually if you are using a VCS repository, such as GitHub, it will be private and you will need to allow Composer to authenticate with the repository. The easiest way to do this is via SSH keys.

To give Docker access to these SSH keys you will need to copy them into the web container and amend the user privileges:

```
# Copy your local private key into the root/.ssh folder of the web container.
docker cp ~/.ssh/id_rsa wordpress_web:/root/.ssh

# Amend the privileges of the .ssh folder to 600 in the web container.
docker-compose exec web chmod 600 -R /root/.ssh
```

Once this is done you can run composer install with no interaction `docker-compose exec web composer install --no-dev --no-interaction`.

**Note:** The keys will be stored in a separate Docker volume so will persist even if you delete the container.

## Managing MySQL

On occasions you will need to interact with MySQL (MariaDB) directly and you can do this via a SQL GUI tool such as [SequelPro](https://www.sequelpro.com/) or [HeidiSQL](https://www.heidisql.com/). But you may also wish to interact with the database via the CLI which can be done easily via docker-compose.

```
# Access MySQL Database.
docker-compose exec data mysql
```

You may also wish to import data into the database via the CLI too, Dusty makes this easy. When you create Dusty via docker-compose a directory called data is created both locally and in the container. You can then drop SQL files into the local data directory and they will be available to the container. Then you can access the container and import the files.

```
docker-compose exec data bash

cd /var/www/html/data

mysql wordpress < example.sql
```

You can also dump data back out to the local data directory in a similar way.

```
docker-compose exec data bash

cd /var/www/html/data

mysqldump wordpress > my-dump.sql
```

## Useful Resources

- [Chris Sherry's](https://twitter.com/tweetingsherry) talk on [WordPress and Composer at PHP UK](https://www.youtube.com/embed/v57UWTXla3M).

## Cat Tax

This is Dusty, AKA Princess Dustle-Puff, Ruler of All Things Soft and Scratchable, I named this repo after her. She is sat in my code chair, I think she's trying to help...

[![](https://camo.githubusercontent.com/99b84ba549e7868058448f70bc6c990829539b9695e5e454d4d70f3652c859fe/68747470733a2f2f726272742e776c6c722e696e666f2f6173736574732f696d672f64757374792d736d616c6c2e6a7067)](https://camo.githubusercontent.com/99b84ba549e7868058448f70bc6c990829539b9695e5e454d4d70f3652c859fe/68747470733a2f2f726272742e776c6c722e696e666f2f6173736574732f696d672f64757374792d736d616c6c2e6a7067)