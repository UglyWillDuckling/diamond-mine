---
title: "How to Install WordPress using Composer: Step by Step Installation Guide - E2M Solutions"
source: "https://www.e2msolutions.com/blog/how-to-install-wordpress-using-composer-installation-guide/"
author:
  - "[[Vijay Suthar]]"
published: 2023-02-28
created: 2024-12-19
description: "Using Composer with git helps you install WordPress core files, themes, and plugins. Know how to Install WordPress with Composer for WP deployment and better management."
tags:
  - "clippings"
---
## Introduction: Why Composer base WordPress?

Like any other application, your WordPress site is most secure when you can ensure repeatable builds and committable updates for your code and its dependencies. Your infrastructure gets committed through a set of configuration files that specify which [version of PHP](https://www.e2msolutions.com/blog/upgrade-wordpress-website-to-php-7-2/) and MariaDB you want to use. This is the best way to ensure your project remains reproducible when developing new features.

WordPress core, plus its themes and plugins, should ideally work the same way, but often this isn’t the case. The WordPress administration panel provides one-click buttons to update all these components when they are out of date or otherwise expect to write access to the file system to make configuration changes at runtime. However, developing this way has its consequences.

First, you aren’t always going to have write access to the file system at runtime. So, depending on this mechanism for updates and configuration changes is totally restricted for many hosting solutions. On the other hand, if you do have write access at runtime where you are currently hosting, installing a new module or theme presents a nontrivial security risk (when the source is unknown).

But, perhaps most importantly, updating WordPress at runtime decouples the state of your site from the code in your repository. A colleague working on a new feature on their local clone of the project could very well be a full version behind the live site. As a result of this workflow, you could introduce bugs with unknown (and untested) consequences.

## Advantages of using Composer

Given the above facts, [managing your WordPress site](https://www.e2msolutions.com/white-label-wordpress-maintenance-and-support/) with the Composer has clear advantages. First, it allows you to explicitly define your dependencies in a committed file (composer.lock). This lock file is generated from a more descriptive list of dependency constraints (composer.json) when your dependencies get installed, and it becomes a part of your project’s commit history. From then on, any new branch will work from the identical collection of dependencies down to the exact commit hash. At that point, it doesn’t matter who contributes to the project or even where it gets deployed – its the same code for everyone everywhere.

The Composer also removes the need to commit lots of external code to your repository. In the case of WordPress, not using the Composer usually requires you to commit all of the code for a theme, and even for WordPress core and plugins itself, to your own project. Besides making the repository unnecessarily large and slow to clone, updating these copies becomes a juggling act that nobody needs to deal with.

With the Composer, you can add and update dependencies to your project and then lock their exact versions so that each new branch gets that same update. Had the update been performed on the deployed site at runtime, you would have to remember to git pull first.

## Installing WordPress core with Composer

In the same way, using Composer makes it unnecessary for you to commit all of WordPress to your repository since you can add it as a dependency. There are several ways to do this (like [Bedrock](https://github.com/platformsh-templates/wordpress-bedrock)), depending on how many assumptions you want to make for your configuration and project structure. The simplest one uses the [John Bloch Composer fork](https://github.com/johnpbloch/wordpress) to add an installer to your builds for WordPress:

```
$ composer require johnpbloch/wordpress-core-installer
$ composer require johnpbloch/wordpress-core
```

Above command will create a composer.json file and install WordPress core in WordPress directory. The composer.json will look like this

```
{
    "require": {
        "johnpbloch/wordpress-core-installer": "^2.0",
        "johnpbloch/wordpress-core": "^6.1"
    },
    "config": {
        "allow-plugins": {
            "johnpbloch/wordpress-core-installer": true
        }
    }
}
```

We have WordPress core in the WordPress folder. But we need to copy index.php outside of the WordPress directory so we can point the web server to the root directory.

To **manage WordPress with Composer fully**, we need to use a different directory for wp-content instead of the default one, WordPress/wp-content.

Let’s create a new directory in the project’s root called wp-content.

Once copy the index.php from the WordPress folder. We need to change the location of the wp-blog-header.php file where our WordPress directory is located.

After the change, the index.php will be looks like this

```
<?php 
define('WP_USE_THEMES', true);
require( dirname( __FILE__ ) . '/wordpress/wp-blog-header.php' );
```

We need to create a .htaccess file in the root directory with the following contents:

```
# BEGIN WordPress
<IfModule mod_rewrite.c>
RewriteEngine On
RewriteBase /
RewriteRule ^index.php$ - [L]
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule . /index.php [L]
</IfModule>
# END WordPress
```

Let’s go ahead and copy the sample wp-config.php file and then add the following code:

```
$domain = 'mydomain.com;
define('WP_SITEURL', "https://{$domain}/wordpress");
define('WP_HOME',"https://{$domain}");
$httpHost =  isset($_SERVER['HTTPS_HOST']) ? $_SERVER['HTTPS_HOST'] : $domain;
define( 'WP_CONTENT_DIR', dirname( __FILE__ ) . '/wp-content' );
define( 'WP_CONTENT_URL', 'https://' . $httpHost . '/wp-content' );
/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') ) {
    define('ABSPATH', dirname(__FILE__) . '/wordpress');
}
```

We have added WordPress in ABSPATH since the WordPress core is in /WordPress  
Since the wp-config.php file contains sensitive data; we will not commit it to our repository by creating a .gitignore file:

```
/wp-config.php
/wordpress/
/wp-content/
/vendor/
```

The WordPress, wp-content and vendor directories also need to be ignored so that we will add them to the .gitignore file as well.

Note: You need to change the wp-content directory in case you want to add a different naming convention for your wp-content.

Our project root directory should be looks like this

```
.git
.gitignore
composer.lock
composer.json
vendor
wp-config.php
index.php
wordpress
```

You need to create a database and change details in wp-config.php. Your WordPress website will be called at “mydomain.com” and the WordPress backend will be accessible by mydomain.com/wordpress/wp-admin

## Adding Plugins and Themes from the WordPress Repository

By default, Composer will only look at the packagist.org repository. But it doesn’t contain WordPress plugins and themes.

To be able to pull in WordPress plugins and themes, you need to point Composer at the wpackagist.org repository. You do this by adding this chunk of config into your composer.json file:

```
"repositories": [
  {
    "type": "composer",
    "url": "https://wpackagist.org",
    "only": [
      "wpackagist-plugin/*",
      "wpackagist-theme/*"
    ]
  }
],
```

We also need to tell Composer where to put plugins and themes. This involves adding a bit more configuration into composer.json:

```
"extra": {
        "installer-paths": {
            "wp-content/mu-plugins/{$name}/": [
                "type:wordpress-muplugin"
            ],
           "wp-content/plugins/{$name}/": [
                "type:wordpress-plugin"
            ],
           "wp-content/themes/{$name}/": [
                "type:wordpress-theme"
            ]
        }
    }
```

With that in place, you can now install any plugin or theme from the official repositories using the composer require command, as we did for installing WordPress.

\# To install a plugin, use this format:

```
composer require "wpackagist-plugin/:"
```

\# To install a theme, use this format:

```
composer require "wpackagist-theme/:"
```

[Version constraints](https://getcomposer.org/doc/articles/versions.md) are complicated, but probably the simplest form to remember is using a \* wildcard. To install the free version of our WP Migrate plugin, using version 2.x, you would run:

`composer require "wpackagist-plugin/wp-migrate-db:2.*"`

If you always wanted your updates to get you the latest version, you could use a \* as the version constraint:

`composer require "wpackagist-plugin/wp-migrate-db:*"`

The first time you run a command like this, you may be asked if you want to “trust “composer/installers” to execute code.” This is safe to do, but be aware that this does let Composer run code on your computer.

If all is well, you should get the plugin installed (but not activated). I would also recommend committing your changes to Git at this point.

## Adding Custom or Third-party Plugins and Themes

This is all fine if you want plugins and themes from the repository. But what if you want to add third-party plugins that arent on the wordpress.org repository, or your own custom code? The WordPress directory isnt in Git, so how do you version control your own things?

Some theme and plugin authors support custom repositories for their plugins.

And some themes and plugins are not allowed to use any repository for their plugins, for example, paid plugins.

But if that doesn’t apply, then the trick here is to selectively un-ignore specific directories using the .gitignore file and add those custom plugins and themes in composer.json.

We also can put those plugins in another directory to install them from composer.json.

As we are ignoring the plugins folder in .gitignore, we need to create another folder called dist,

In the dist, we can have paid and custom plugins and we can install them from the Composer.

- dist/
- plugins/
- themes/
- mu-plugins/

We need to copy our custom plugins and themes into the appropriate folder.

And we need to create composer.json for each plugin added in the dist/plugins.

Currently, we have advanced-custom-fields-pro, which is paid. We also want to add that plugin via composer for one-click installation and automate deployments.

We have to download that plugin from the author website portal and extract that plugin in the dist/plugins/advanced-custom-fields-pro folder. And create composer.json in the same folder with the following content,

```
{
   "name": "custom-plugins/acf-pro",
   "description": "Advanced Custom Fields PRO",
   "version": "5.12.2",
   "type": "wordpress-plugin",
   "require": {
       "composer/installers": "^1.0",
       "johnpbloch/wordpress-core": ">=5.4"
   }
}
```

We can add the version and name with custom prefixes here. And add some code in the root composer.json file to call this plugin while we do install.

In the “repositories”: section add the following code in the last,

```
"repositories": [
{
     "type": "path",
     "url": "dist/plugins/*",
     "options": {
       "symlink": false
     }
}]
```

You have other entries as well in the repositories section. To install this plugin, we have two ways, first to add the plugin name with version in the

```
"require": {
     "custom-plugins/acf-pro": ">=5.12.2"
}
```

Or run the command following, it will install the plugin and add the above entry in the composer.json.

```
$ composer require custom-plugins/acf-pro
```

In the same way, we can install themes and mu plugins.

For theme, we need to add the theme folder location,

```
"repositories": [
{
     "type": "path",
     "url": "dist/themes/*",
     "options": {
       "symlink": false
     }
}]
```

You must need to add composer.json in your custom theme with name and version details. Using that name, we can install the theme using composer require command.

## In Conclusion

Using Composer is the most effective approach for ensuring your WordPress remains secure, up-to-date, and reproducible. Composer allows developers to easily add and update dependencies in their projects and lock their exact versions to ensure each new branch works with the same code.

With these advantages, Composer is a great choice for managing WordPress projects, ensuring repeatable builds and committable updates.

We understand that getting started with Composer can be a bit overwhelming. If you have any questions, don’t hesitate to [reach out to us](https://www.e2msolutions.com/contact-us/). We’re here to help you get the most out of your WordPress experience.

**References:**

- - [https://docs.platform.sh/guides/wordpress/composer.html](https://docs.platform.sh/guides/wordpress/composer.html)
- [https://deliciousbrains.com/storing-wordpress-in-git/](https://deliciousbrains.com/storing-wordpress-in-git/)
- [https://time2hack.com/composer-wordpress-deployment/](https://time2hack.com/composer-wordpress-deployment/)