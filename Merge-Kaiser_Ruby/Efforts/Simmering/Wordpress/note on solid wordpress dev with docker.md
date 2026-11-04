#article-note 

**about**:: [[Build a solid WordPress dev environment with Docker]]
repo:: [docker-compose-wordpress](https://github.com/aschmelyun/docker-compose-wordpress/blob/main/nginx/default.conf)

path on system:: `/home/vlado/dev/testbed/wordpress/with_docker`

mentions: [[Docker]], [[docker volume|docker volumes]], [[docker port mapping|port mapping]], [[docker image]], [[nginx]]

Set's up **3** services:
- **nginx**
- **mysql**
- **php**

```yaml
services:
	nginx: 
		image: nginx:stable-alpine
	mysql:
		image: mysql:latest
		environment:
			MYSQL_DATABASE: wp
			MYSQL_USER: wp
			MYSQL_PASSWORD: secret
			MYSQL_ROOT_PASSWORD: secret
	php:
		image: php:7.4-fpm-alpine
```

### starting `nginx` config

```nginx
upstream php {
    server unix:/tmp/php-cgi.socket;
    server php:9000;
}

server {
    listen 80;
    server_name wordpress-docker.test;

    root /var/www/html;

    index index.php;

    location / {
        try_files $uri $uri/ /index.php?$args;
    }

    location ~ \.php$ {
        include fastcgi.conf;
        fastcgi_intercept_errors on;
        fastcgi_pass php;
    }

    location ~* \.(js|css|png|jpg|jpeg|gif|ico)$ {
        expires max;
        log_not_found off;
    }
}
```

> [!error] hosts file
> You **always** have to add the new host to `etc/hosts`


### Dockerfile for PHP
[[Dockerfile]]

```dockerfile
FROM php:8.2-fpm-alpine

RUN touch /var/log/error_log

# ADD ./php/www.conf /usr/local/etc/php-fpm.d/www.conf

RUN addgroup -g 1000 wp && adduser -G wp -g wp -s /bin/sh -D wp

RUN mkdir -p /var/www/html

RUN chown wp:wp /var/www/html

WORKDIR /var/www/html

RUN docker-php-ext-install mysqli pdo pdo_mysql && docker-php-ext-enable pdo_mysql

RUN curl -O https://raw.githubusercontent.com/wp-cli/builds/gh-pages/phar/wp-cli.phar

RUN chmod +x wp-cli.phar && mv wp-cli.phar /usr/local/bin/wp
```

### ssl setup
[[mkcert]]

```bash
mkcert wordpress-docker.test
```

now we update the **nginx** configuration to use the certificates

```nginx
ssl_certificate /etc/nginx/certs/self-signed/wordpress-docker.test.pem;
ssl_certificate_key /etc/nginx/certs/self-signed/wordpress-docker.test.key;
```

We also need to map the certificate files from the host into the container. This is *skipped*.

And finally add the `443` port mapping for the **nginx** service


### mysql persistancy
We just add a **new** [[docker volume|volume]].

```yaml
  mysql:
    image: mysql:latest
    environment:
      MYSQL_DATABASE: wp
      MYSQL_USER: wp
      MYSQL_PASSWORD: secret
      MYSQL_ROOT_PASSWORD: secret
    volumes:
      - ./mysql:/var/lib/mysql # new volume
```

### [[WP-CLI]]
A **new** [[docker service|service]](container) is coming...

```yaml
  wp: # new service
    build:
      context: .
      dockerfile: Dockerfile
    volumes:
      - ./wordpress:/var/www/html
    entrypoint: ["wp", "--allow-root"]
```

We also need to update the `Dockerfile` to pull in the [[WP-CLI]]

```dockerfile
RUN docker-php-ext-install mysqli pdo pdo_mysql && docker-php-ext-enable pdo_mysql

RUN curl -O https://raw.githubusercontent.com/wp-cli/builds/gh-pages/phar/wp-cli.phar

RUN chmod +x wp-cli.phar && mv wp-cli.phar /usr/local/bin/wp
```
