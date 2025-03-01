---
title: "The attribute metadata driver cannot be enabled on PHP 7. Please upgrade to PHP 8 or choose a different metadata driver. · doctrine/orm · Discussion #10961"
source: https://github.com/doctrine/orm/discussions/10961
author:
  - "[[github]]"
published: 
created: 2024-11-28
description: The attribute metadata driver cannot be enabled on PHP 7. Please upgrade to PHP 8 or choose a different metadata driver.
tags:
  - clippings
---
Hi,

I have an issue with doctrine ORM and Symfony. This error appears :  
The attribute metadata driver cannot be enabled on PHP 7. Please upgrade to PHP 8 or choose a different metadata driver.

[![image](https://private-user-images.githubusercontent.com/113057/272868283-af772314-ed54-403c-8bb3-013f4ab66a4b.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MzI4MjI0ODIsIm5iZiI6MTczMjgyMjE4MiwicGF0aCI6Ii8xMTMwNTcvMjcyODY4MjgzLWFmNzcyMzE0LWVkNTQtNDAzYy04YmIzLTAxM2Y0YWI2NmE0Yi5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjQxMTI4JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI0MTEyOFQxOTI5NDJaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT0zMmRjZjJhZDZjODc1YzlkZmQ5MTU1YzY1NGNkYTM0NWViMGY0OTgzYWEyYjBiNWY4ZDJmMDY1ZDU0YTExOWZiJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.lq-qnEqdH47cYrv1ElUGTS_CnK-lDCfVXyQxQZl7TvQ)](https://private-user-images.githubusercontent.com/113057/272868283-af772314-ed54-403c-8bb3-013f4ab66a4b.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MzI4MjI0ODIsIm5iZiI6MTczMjgyMjE4MiwicGF0aCI6Ii8xMTMwNTcvMjcyODY4MjgzLWFmNzcyMzE0LWVkNTQtNDAzYy04YmIzLTAxM2Y0YWI2NmE0Yi5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjQxMTI4JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI0MTEyOFQxOTI5NDJaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT0zMmRjZjJhZDZjODc1YzlkZmQ5MTU1YzY1NGNkYTM0NWViMGY0OTgzYWEyYjBiNWY4ZDJmMDY1ZDU0YTExOWZiJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.lq-qnEqdH47cYrv1ElUGTS_CnK-lDCfVXyQxQZl7TvQ)

I use PHP 7.4.

Here my composer.json require section :

```
"require": {
        "php": "~7.2.5",
        "ext-ctype": "*",
        "ext-iconv": "*",
        "doctrine/annotations": "^2.0",
        "doctrine/doctrine-bundle": "^2.8",
        "doctrine/doctrine-migrations-bundle": "^3.2",
        "doctrine/orm": "^2.14",
        "phpdocumentor/reflection-docblock": "^5.3",
        "phpstan/phpdoc-parser": "^1.16",
        "sensio/framework-extra-bundle": "^6.1",
        "symfony/apache-pack": "^1.0",
        "symfony/asset": "5.4.*",
        "symfony/console": "5.4.*",
        "symfony/doctrine-messenger": "5.4.*",
        "symfony/dotenv": "5.4.*",
        "symfony/expression-language": "5.4.*",
        "symfony/flex": "^1.17|^2",
        "symfony/form": "5.4.*",
        "symfony/framework-bundle": "5.4.*",
        "symfony/http-client": "5.4.*",
        "symfony/http-kernel": "5.4.*",
        "symfony/intl": "5.4.*",
        "symfony/mailer": "5.4.*",
        "symfony/mime": "5.4.*",
        "symfony/monolog-bundle": "^3.0",
        "symfony/notifier": "5.4.*",
        "symfony/process": "5.4.*",
        "symfony/property-access": "5.4.*",
        "symfony/property-info": "5.4.*",
        "symfony/runtime": "5.4.*",
        "symfony/security-bundle": "5.4.*",
        "symfony/serializer": "5.4.*",
        "symfony/string": "5.4.*",
        "symfony/translation": "5.4.*",
        "symfony/twig-bundle": "5.4.*",
        "symfony/validator": "5.4.*",
        "symfony/web-link": "5.4.*",
        "symfony/webpack-encore-bundle": "^1.16",
        "symfony/yaml": "5.4.*",
        "twig/extra-bundle": "^2.12|^3.0",
        "twig/twig": "^2.12|^3.0"
    }
```

I don't understand why i have this error...

Can you help me please ?

Thanks