---
source: https://wordpress.com/blog/2022/11/14/setting-up-your-local-development-environment-for-wordpress/
author:
  - "[[WordPress.com Staff]]"
published: 2022-11-14
created: 2025-01-18
tags:
  - docs
  - howto
related:
  - "[[Wordpress]]"
  - "[[docker]]"
---
As a software developer, you’re likely familiar with local development environments. They allow you to run your code, applications, and sites on your workstation, similarly to how they run on a production server. This gives you a safe environment to make changes, break and fix things, and watch your changes take place in real time, all without disrupting your users. In the case of [WordPress](https://wordpress.com/), local development environments are often used to assist in building new sites, testing changes to existing sites, and developing or trialing new plugins and themes.

In this article, you’ll learn about the different types of local development environments commonly used with WordPress and how to set up your own development environment with [Docker](https://www.docker.com/). Then you’ll make some changes to see it all in action.

## Running WordPress **Locally**

Before diving in and setting up a local development environment for WordPress, please note that there are multiple ways to do so, each with varying benefits and limitations.

Several components are at play in a normal user-facing WordPress site, such as the web server (often [Apache](https://httpd.apache.org/) or [Nginx](https://www.nginx.com/)), the [PHP-FPM runtime](https://www.php.net/manual/en/install.fpm.php), and the database. These can be hosted in any number of ways but will usually be locked down with restricted access for security purposes. Precisely mirroring this setup for local development would be unnecessarily cumbersome, and the limitations imposed for security would likely be detrimental to the developer experience.

Consider, for example, database access. In a production environment, you would likely want to lock down database access so that only connections from particular hosts are permitted. Imposing this same level of restriction in a development environment would be unnecessary and actively disruptive to your development efforts if you wanted to simply check some records in the database. Some of the solutions for local development environments tend to prioritize convenience and ease of use over security and production-readiness to circumvent these issues. This priority shift is fine as long as you keep this limitation in mind and don’t try to use a local development environment tool for your user-facing production site. Mostly, these tools are suitable for development, local testing, validation, and trialing or experimenting with plugins and themes. For production workloads, you should typically consider one of the many [WordPress hosting services available](https://wordpress.com/).

### Docker
[[docker]]

Docker is a **containerization platform** that allows you to create containers where you can run applications inside. These containers run on top of your operating system but are somewhat decoupled from it, making the applications portable and allowing you to run things like WordPress without having to install all the dependencies on your host machine, such as the PHP runtime and a compatible database.

Using Docker for your local development environment is a slightly more involved process. It’s not designed specifically for WordPress or PHP development and, thus, has more things that need to be configured.
## Getting Started with Docker for Your Local WordPress Development Environment

Create a new directory for this project, navigate to it, and create a file called `docker-compose.yml`. In that file, add the following content:

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

This configuration defines the **three containers** mentioned earlier and binds the `wordpress` container’s `/var/www/html/` directory to a `wordpress/` directory that Docker will create alongside your `docker-compose.yml` file. Save this file, and then run the following command in your terminal from the project directory you created:

This command will instruct `docker-compose` to create the three containers by downloading the base images from the Docker Hub before setting everything up and exposing your WordPress site on `localhost:8080` and phpMyAdmin on `localhost:8180`.

Once your terminal output settles, there’s one more change you need to make. Open a new terminal window, navigate to your project directory, and run the following command:

This command is necessary due to how Docker handles file permissions and how the `wordpress` Docker image is constructed. Without this change, you can’t easily edit the files of your WordPress site from outside the Docker container.

When finished, navigate to `localhost:8080` in your browser, and WordPress should greet you with its installation screen:

![](https://developer.files.wordpress.com/2022/11/image.png?w=1024)

Proceed through the installation, selecting a language and any other required information, such as site title, username, password, and email. Once you’ve provided these details, WordPress will take you to the login screen, where you can use those details to access the admin dashboard:

![](https://developer.files.wordpress.com/2022/11/image-1.png?w=1024)

With your development environment set up, you can start building WordPress sites, themes, and plugins. However, if you’re new to WordPress or Docker and want to see what sort of things you can do, follow along, and you can create your first WordPress plugin using your new local development environment.

For demonstrative purposes, you’ll create a simple, contrived plugin that registers a [shortcode](https://codex.wordpress.org/Shortcode_API) that will resolve to the name of the latest post published. This will give you some light exposure to [plugins](https://developer.wordpress.org/plugins/), [hooks](https://developer.wordpress.org/plugins/hooks/), and [transients](https://developer.wordpress.org/apis/transients/).
[[Wordpress Plugin]]
[[Wordpress Hook]]
[[Wordpress Transient]]

### Creating the **Plugin**

The first step in creating your plugin is creating the files to house the actual **plugin**. In your code editor, open the project directory, and you should see your `wordpress/` directory. Using either your editor or your terminal, navigate to `wordpress/wp-content/plugins` and create a new directory called `latest-post`. This directory will contain the files for your plugin. Within this directory, create a file named `index.php` and add the following content to that file:

```php
<?php
/**
* Plugin Name: Latest Post
* Plugin URI: https://www.your-plugins-site.com/
* Description: Show the latest published post.
* Version: 0.1
* Author: your-name
* Author URI: https://www.your-site.com/
**/
```

This comment sets the **metadata** WordPress shows in the interface when dealing with your plugin. If you go back to your browser and navigate to `localhost:8080/wp-admin/plugins.php`, you’ll see that your plugin has been added to the list (albeit inactive and with no functionality).

Next, add the following code to your `index.php` file:

```php
// register the shortcode
add_shortcode('latest_post', 'latest_post_shortcode');
 
// define the shortcode function
function latest_post_shortcode() {
 
    // check if the transient is set, and if not, get the latest post, and set the transient
    if ( false === ( $latest_post = get_transient( 'latest_post' ) ) ) {
        $latest_post = get_posts()[0];
        set_transient( 'latest_post', $latest_post, WEEK_IN_SECONDS );
    }
 
    // return the title of the latest post
    return $latest_post->post_title;
}
```

This code handles the core functionality of your plugin. It fetches the latest post and returns its title. To avoid making extra database calls, it leverages the [WordPress transient mechanism](https://developer.wordpress.org/apis/transients/) to **cache** the query result for up to a week.
If you publish a new post, you need to invalidate the cache and allow the query to run again.
%% **caching** mechanism %%

```php
// add action hook to remove transient on post save
add_action('save_post', 'latest_post_transient');
 
// define the function to remove transient
function latest_post_transient() {
    delete_transient('latest_post');
}
```
==This code registers an action hook that will remove the [[Wordpress Transient|transient]]’s current value when a post is saved.==


Refresh the page, and click the **Activate** button on your plugin’s entry:

![plugins|500](https://developer.files.wordpress.com/2022/11/image-2.png?w=1024)

With that, your [[shortcode]] is now ready for use. 
In the navigation menu, hover over **Appearance** and then select **Editor** in the flyout menu. This will take you to the block editor. From here, click the **Plus** button near the top left-hand corner, and search for “shortcode” in the menu that appears:

![shortcode|500](https://developer.files.wordpress.com/2022/11/image-3.png?w=1024)

Drag the shortcode block onto your page, and in the field that appears, type the **name** of your new shortcode, surrounded by square brackets (*ie* `[latest_post]`):

![name|400](https://developer.files.wordpress.com/2022/11/image-4.png?w=1024)

Save your changes, and then navigate to your site’s home page (`localhost:8080`),
and you should see that your shortcode has resolved to the name of the site’s default post, “Hello world!” To test that things are working as intended, hover over the **New** menu in the admin navigation at the top of the screen, and select **Post**. Give your new post a title from this page and publish it:

![post|500](https://developer.files.wordpress.com/2022/11/image-5.png?w=1024)

Now, *navigate* back to the **home pag**e, and you’ll see that the **shortcode now resolves to the latest post’s title**, as intended:
