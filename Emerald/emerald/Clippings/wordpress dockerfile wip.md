part_of:: [[setup wordpress with Bedrock and Docker]]
___

```Dockerfile
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
```