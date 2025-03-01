---
related:
  - "[[Setting Up Your Local Development Environment for WordPress|Setting Up Your Local Development Environment for WordPress]]"
status: In Progress
---
#artifact

**based on **: [[Setting Up Your Local Development Environment for WordPress]]**
### quick facts
- uses [[docker-compose]]
- setup for [[Efforts/Active/Wordpress/Wordpress]]
- ..
---

`docker-compose`

```yaml
version: "3.6"
services:
 wordpress:
   image: wordpress:latest
   container_name: wordpress
   volumes:
     - ./wordpress:/var/www/html
   environment:
     - WORDPRESS_DB_NAME=wordpress
     - WORDPRESS_TABLE_PREFIX=wp_
     - WORDPRESS_DB_HOST=db
     - WORDPRESS_DB_USER=root
     - WORDPRESS_DB_PASSWORD=password
   depends_on:
     - db
     - phpmyadmin
   restart: always
   ports:
     - 8080:80
 
 db:
   image: mariadb:latest
   container_name: db
   volumes:
     - db_data:/var/lib/mysql
   environment:
     - MYSQL_ROOT_PASSWORD=password
     - MYSQL_USER=root
     - MYSQL_PASSWORD=password
     - MYSQL_DATABASE=wordpress
   restart: always
 
 phpmyadmin:
   depends_on:
     - db
   image: phpmyadmin/phpmyadmin:latest
   container_name: phpmyadmin
   restart: always
   ports:
     - 8180:80
   environment:
     PMA_HOST: db
     MYSQL_ROOT_PASSWORD: password
 
volumes:
 db_data:
```

- ! **important notes**
 uses `wordpress` image
	- port 8080:80 
	- [[mariaDB]] is used
	- [[phpmyadmin]] is installed, port 8180
	- uses volume: `db_data`
	- local volume is used: `./wordpress:/var/www/html`

**code path**: `/home/vlado/dev/projects/local-wordpress`

*db details*
- MYSQL_USER=root
- MYSQL_PASSWORD=password
- MYSQL_DATABASE=wordpress

**wordpress site**
pass: $DjBV7z4rVEB(z2I$0

[[wordpress - db tables default]]
