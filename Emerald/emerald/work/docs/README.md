# Applications

* **Backyard**: internal backoffice
* **WWW**: main website (deprecated, to be replaced by apps/www)
* **Extranet**: realtor extranet (deprecated, to be replaced by apps/mypro)
* MyTileCache: Tileserver proxy cache
* ImageProxy: Generic reverse-proxy cache and image management
* ~~Async jobs (deprecated, to be replaced by Celery)~~

# Configuration

## Environment variables

### Global configuration

* **MA\_ENV**: Environment type [dev, prod, test]
* **MA\_INSTANCE**: Instance name [developer name, www (prod), preview, ...]

### Databases

* **PGDATABASE**: Main Postgres database name (others: PGHOST, PGPORT, PGUSER)
* **SECONDARY\_DATABASE**: Postgres secondary replica (others: SECONDARY\_HOST, SECONDARY\_PORT, SECONDARY\_USER)

### Memory stores

* **MEMCACHE\_HOSTS**: comma-separated list of Memcached IP addresses
* **REDIS\_HOST**: Redis servr IP address

### Async tasks

* **CELERY\_DEFAULT\_QUEUE**: Celery queue name (default: celery)
* **CELERY\_DEFAULT\_VHOST**: Redis database to use (default: 0)
* **CELERY\_MEDIAAPI\_QUEUE**: Celery queue name (default: celery)
* **CELERY\_MEDIAAPI\_VHOST**: Redis database to use (default: 0)

### External services

* **PBX\_DSN**: SQLServer Hermes database (others: PBX\_PWD, PBX\_UID)

## Installation

Change your `/etc/hosts` to redirect `localhost.meilleursagents.tech` to `localhost` (to handle properly cookies)

```bash
# Generate config & secrets
make generate-config

# Init & update git submodule then build docker image
make init

# Create docker network to allow talking to containers of other applications
make docker-network

# Starts nginx and php containers through Docker
make run
```

Backyard is accessible through <http://localhost.meilleursagents.tech:8001> (beta-integration)

Extranet is accessible through `http://localhost.meilleursagents.tech:8001/extranet/`. Do not forget the trailing slash (it is a pre-pre-pre-alpha integration).

There is no "home" page for extranet.  Thus, if you visit the URL `http://localhost.meilleursagents.tech:8001/extranet/`, you will only get a blank page. Try to visit `http://localhost.meilleursagents.tech:8001/extranet/projects` instead once you are authenticated.

WWW (aka wwwold) is accessible through <http://localhost.meilleursagents.tech:8001/www> (pre-pre-pre-alpha integration)

### Extranet authentication

WWW is a Python application (Flask) whereas Extranet is a PHP application. But once you're authenticated on WWW you should be able to access to restricted areas of Extranet.

There is a kind of "bridge" written in PHP to "steal" the current logged in user from Python.

To properly works you must inspect secret value of `SECRET_KEY` variable in `apps/www/secrets.env` (file generated when you run `make generate-secrets` in `apps/www`).

Copy the value of the secret and then manually edit `MALegacy/config/config.local.inc` to update value of `APP_FLASK_SECRET_KEY` :

```php
define('APP_FLASK_SECRET_KEY',      '<theHiddenValueNoOneShouldSeeExceptByInspectingTheGitLog>');
```

**Important:** Do **NOT** commit this file (seriously, don't do it).

Since folders containing php code is "mounted" through volume in Docker you should not need to restart the container, simply refresh (or access to) the website.

## Running tests

see [how to run tests locally](tests/README.md)

## Code Formatting

Code formatting is done using [Code Standard](https://github.com/symplify/coding-standard?tab=readme-ov-file) library, which implements [PHP CS Fixer](https://github.com/PHP-CS-Fixer/PHP-CS-Fixer) with some additional features.
The main reason why Code Standard is used on top of PHP CS Fixer, is because it implements fixers for breaking arrays into multiple lines and html formatting, which will be broken if you use only PHP CS Fixer.

Code Standard configuration can be found in `MALegacy/ecs.php`.

You can format your code by running:

```bash
vendor/bin/ecs --fix
```

If you want to run the fixer on specific files or folders, you need to change the following function call in the `MALegacy/ecs.php` file to contain only your desired paths:

```php
$ecsConfig->paths([
    __DIR__ . '/api',
    __DIR__ . '/backyard',
    __DIR__ . '/config',
    __DIR__ . '/framework',
    __DIR__ . '/share',
    __DIR__ . '/tests',
]);
```

Take note that if the format command is run before each merge, you will not need to do this since the only files with possible fixes will be the files you changed recently.
If you end up limiting the fixer to specific paths, don't forget to revert the configuration file to it's initial settings.

To check which changes would be executed on the fix command (dry run), you can simply run:

```bash
vendor/bin/ecs
```

To clear fixer cache, run:

```bash
vendor/bin/ecs --clear-cache
```
