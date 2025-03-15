---
tags:
  - howto
  - example
  - sql
related:
  - "[[Docker]]"
  - "[[Docker Compose]]"
  - "[[sql]]"
  - "[[mysql]]"
---
[[mariaDB]] + [[docker-compose]]

service: mariadb
```bash
docker compose exec db mariadb -u root -ppassword -D wordpress -e 'show create table wp_posts;'
```
==password== is password
table is wp_posts
db is wordpress
