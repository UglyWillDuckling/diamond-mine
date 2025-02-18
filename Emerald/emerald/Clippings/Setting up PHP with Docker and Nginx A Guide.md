---
author:
  - "[[Fado Code Camp]]"
created: 2025-02-17
published: 2024-10-22
source: https://www.fadocodecamp.com/posts/docker-php-nginx-complete-guide
tags:
  - howto/docker/php
---
## First, Some Basic Concepts

Before we dive into configs, let me explain few important things that took me ages to understand properly:

### Docker Images vs Containers

Think of Docker image as a template, like a PC installation DVD (if anyone remembers those 😅). Container is what you get when you run that image - like installed system. You can have many containers from same image, just like you can install same Windows DVD on different computers.

When we write `FROM php:8.3-fpm`, we're saying "use this template as starting point". And when we run `docker-compose up`, it creates containers from our images.

### Volumes and Networking

Docker containers are isolated - like virtual machines. But we need two things:

1. Way to get our code into container (volumes)
2. Way for containers to talk to each other (networks)

That's why we have these bits in docker-compose.yml. More on that later!

## The Complete Setup

Let's go through all files we need. I'll explain every single line that matters.

### Directory Structure

First, create this structure:

Directory structure

```bash
project/
├── docker/
│   ├── nginx/
│   │   └── default.conf
│   └── php/
│       ├── Dockerfile
│       └── php.ini
├── docker-compose.yml
└── src/
    └── public/
        └── index.php
```

### The PHP Dockerfile

PHP Dockerfile

```bash
# Start with PHP 8.3 FPM (FastCGI Process Manager)
FROM php:8.3-fpm

# Update package list and install dependencies
RUN apt-get update && apt-get install -y \
    git \                    # For Composer and version control
    curl \                   # For downloading stuff
    libpng-dev \            # Required for GD extension (images)
    libonig-dev \           # Required for mbstring
    libxml2-dev \           # Required for XML handling
    libzip-dev \            # Required for Zip handling
    libicu-dev \            # Required for intl extension
    zip \                   # For Composer
    unzip                   # Also for Composer

# Clean up to reduce image size
RUN apt-get clean && rm -rf /var/lib/apt/lists/*

# Install PHP extensions
# Each one serves specific purpose:
RUN docker-php-ext-install \
    pdo_mysql \            # Database connections
    mbstring \             # Better string handling
    exif \                 # Image metadata
    pcntl \                # Process control
    bcmath \               # Better math functions
    gd \                   # Image manipulation
    intl \                 # Internationalization
    zip \                  # ZIP archives
    opcache               # Code caching for performance

# Redis for caching/sessions
RUN pecl install redis && docker-php-ext-enable redis

# Xdebug for debugging - REMOVE IN PRODUCTION!
RUN pecl install xdebug && docker-php-ext-enable xdebug

# Get Composer (PHP package manager)
COPY --from=composer:latest /usr/bin/composer /usr/bin/composer

# Add our PHP config
COPY ./docker/php/php.ini /usr/local/etc/php/conf.d/custom.ini

# Set working directory
WORKDIR /var/www

# What command to run
CMD ["php-fpm"]

# Document that we use port 9000
EXPOSE 9000
```

### PHP Configuration (php.ini)

This goes in `docker/php/php.ini`:

**php.ini**
```php
[PHP]
# Memory and execution time limits
memory_limit = 256M                 # Maximum memory one script can use
max_execution_time = 60             # Maximum time script can run (seconds)
upload_max_filesize = 64M           # Maximum file upload size
post_max_size = 64M                 # Maximum POST request size

# Error handling
display_errors = On                 # Show errors (turn Off in production!)
display_startup_errors = On         # Show startup errors
log_errors = On                     # Write errors to log
error_reporting = E_ALL             # Report all errors

[Date]
date.timezone = UTC                 # Use UTC for consistent timestamps

[opcache]
# Code caching settings
opcache.enable = 1                  # Enable code caching
opcache.memory_consumption = 256    # Memory for cached code
opcache.interned_strings_buffer = 16
opcache.max_accelerated_files = 16229

[xdebug]
# Debugging settings
xdebug.mode = develop,debug         # Enable debugging features
xdebug.client_host = host.docker.internal  # Connect back to our IDE
xdebug.start_with_request = yes     # Start debugging automatically
xdebug.log = /tmp/xdebug.log       # Debug log location
```

### Nginx Configuration

This goes in `docker/nginx/default.conf`:

Nginx config

```nginx
server {
    # Listen on port 80
    listen 80;
    server_name localhost;

    # Root directory and index files
    root /var/www/public;
    index index.php index.html;

    # Logging
    error_log  /var/log/nginx/error.log;
    access_log /var/log/nginx/access.log;

    # Try files or directories, fallback to PHP
    location / {
        try_files $uri $uri/ /index.php?$query_string;
    }

    # Handle PHP files
    location ~ \.php$ {
        # Pass to PHP container
        fastcgi_pass php:9000;
        fastcgi_index index.php;
        
        # Important! This tells PHP what file to process
        fastcgi_param SCRIPT_FILENAME $document_root$fastcgi_script_name;
        
        # Include standard FastCGI parameters
        include fastcgi_params;

        # Some extra settings for better performance
        fastcgi_buffer_size 128k;
        fastcgi_buffers 4 256k;
        fastcgi_busy_buffers_size 256k;
    }

    # Deny access to hidden files
    location ~ /\. {
        deny all;
    }
}
```

### Docker Compose File

This is our main configuration that ties everything together (`docker-compose.yml`):

docker-compose.yml

```yaml
version: '3.8'

services:
  # PHP Service
  php:
    build:
      context: .              # Build context is current directory
      dockerfile: docker/php/Dockerfile
    container_name: php83_app # Name our container
    volumes:
      - ./src:/var/www/public   # Mount our source code
    networks:
      - app-network          # Connect to our network
    environment:
      PHP_IDE_CONFIG: serverName=Docker # For Xdebug
    # Make container restart unless stopped manually
    restart: unless-stopped

  # Nginx Service
  nginx:
    image: nginx:latest      # Use official Nginx image
    container_name: nginx_app
    ports:
      - "8080:80"           # Map port 8080 on our PC to 80 in container
    volumes:
      - ./src:/var/www/public  # Mount same source code
      - ./docker/nginx/default.conf:/etc/nginx/conf.d/default.conf
    depends_on:
      - php                 # Wait for PHP container
    networks:
      - app-network
    restart: unless-stopped

networks:
  app-network:
    driver: bridge          # Standard Docker network type
```

## How Everything Works Together

Let's break down how all this works:

1. When you run `docker-compose up`:

- Docker builds PHP image using our Dockerfile
- Downloads official Nginx image
- Creates network for containers
- Creates containers and starts them
2. When request comes to `localhost:8080`:

- It hits Nginx container (because of port mapping)
- Nginx looks at URL
- If PHP file requested, Nginx sends it to PHP container
- PHP processes file and sends result back
- Nginx sends final result to browser
3. When you change files in `src` directory:

- Changes appear in containers because of volumes
- PHP/Nginx see new version immediately

## Getting It Running

1. Create all files mentioned above with exactly same structure
2. Create simple `index.php` in `src/public`:

src/index.php

```php
<?php
phpinfo();
```

3. Open terminal in project directory and run:

```bash
# Start everything
docker-compose up -d

# Check if containers running
docker-compose ps

# See logs if something wrong
docker-compose logs

# To go inside PHP container (useful for Composer etc)
docker-compose exec php bash
```

## Common Problems and Solutions

1. **Can't connect to PHP container**

- Check if both containers in same network
- Check if `php` hostname matches service name
- Try `docker-compose down && docker-compose up -d`
2. **Files not updating**

- Check volume paths in docker-compose.yml
- Make sure you're editing right files
- Try clearing opcache: `docker-compose exec php bash -c 'kill -USR2 1'`
3. **Xdebug not working**

- Verify `xdebug.client_host`
- Check IDE debug port (usually 9003)
- Make sure IDE listening for connections
4. **Permission problems** Add this to Dockerfile if needed:
```dockerfile
RUN usermod -u 1000 www-data
RUN groupmod -g 1000 www-data
```

## Production Notes

1. Remove Xdebug
2. Set proper PHP memory limits
3. Configure proper access logs
4. Add **SSL/TLS**