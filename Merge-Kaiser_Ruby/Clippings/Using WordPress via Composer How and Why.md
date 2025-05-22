---
title: "Using WordPress via Composer: How and Why?"
source: "https://jackwhitworth.com/blog/using-wordpress-via-composer/"
author:
  - "[[Jack Whitworth]]"
published: 2024-01-12
created: 2024-12-19
description: "Table of Contents For my website, jackwhitworth.com, I’ve embraced Composer. The main reason for this choice is the ease of managing custom code."
tags:
  - "clippings"
---
![[~/×/292f95c44fe08d42361b4066d9520c9f_MD5.webp]]

Written by: **Jack Whitworth**

Published: **January 11, 2024**

Last updated: **July 5, 2024**

Table of Contents

- [Introduction](https://jackwhitworth.com/blog/using-wordpress-via-composer/#htoc-introduction)
- [What is Composer?](https://jackwhitworth.com/blog/using-wordpress-via-composer/#htoc-what-is-composer)
- [Using Composer with WordPress](https://jackwhitworth.com/blog/using-wordpress-via-composer/#htoc-using-composer-with-wordpress)
- [Pros of Using Composer with WordPress](https://jackwhitworth.com/blog/using-wordpress-via-composer/#htoc-pros-of-using-composer-with-wordpress)
- [Cons of Using Composer with WordPress](https://jackwhitworth.com/blog/using-wordpress-via-composer/#htoc-cons-of-using-composer-with-wordpress)
- [WordPress Composer GitHub Template Repository](https://jackwhitworth.com/blog/using-wordpress-via-composer/#htoc-wordpress-composer-github-template-repository)
- [Getting Started with the Repository](https://jackwhitworth.com/blog/using-wordpress-via-composer/#htoc-getting-started-with-the-repository)
- [What does the Repository include?](https://jackwhitworth.com/blog/using-wordpress-via-composer/#htoc-what-does-the-repository-include)
- [Conclusion](https://jackwhitworth.com/blog/using-wordpress-via-composer/#htoc-conclusion)

## Introduction

For my website, [jackwhitworth.com](https://jackwhitworth.com/), I’ve embraced Composer. The main reason for this choice is the ease of managing custom code. By using Composer, I can easily integrate version control and pull in other packages I’ve written from custom Composer repositories. This approach ensures that the site remains efficient, secure, and easily updatable. In a ‘typical’ WordPress environment, version control isn’t always utilised, and it can be tricky to write code and manage multiple copies, such as local or staging versions of the site, in parallel.

## What is Composer?

Composer is a tool for dependency management in PHP. It allows you to declare the libraries your project depends on and it manages (installs/updates) them for you. This tool is essential for modern PHP development, ensuring that you have all the required libraries and their specific versions needed for your project.

To install Composer you can download the binary from [Composer’s website](https://getcomposer.org/doc/00-intro.md#installation-linux-unix-macos). Using the instructions on that page. You can then either use Composer by running the binary directly every time, or you can install it on your system.

> **Note**: You must have PHP installed on your system first before Composer can be ran.

Composer pulls its files from repositories. The main repository is [Packagist](https://packagist.org/). When you start with a new project, this is the default repository that Composer will try to fetch packages from without having to explicitly declare the repository in your `composer.json` file. The repository you’re likely to be most interested in as a WordPress developer is [wpackagist](https://wpackagist.org/). To add this to your project, add the following to your `composer.json` file under the `Repositories` section:

Under the `Extra` section of your `composer.json` file, you’ll also want to set the installation paths for plugins and themes. This tells Composer which directories to place the files in so that you can ensure WordPress has access to them:

> **Note**: If any of the above isn’t clear, see the full `composer.json` example on [wpackagist’s](https://wpackagist.org/) homepage.

## Using Composer with WordPress

WordPress can be seamlessly integrated with Composer. This integration offers a more structured approach to managing the core WordPress software and its plugins or themes as dependencies. To set yourself up for Composer-orientated WordPress development, follow the instructions above to set up wpackagist.

### Pros of Using Composer with WordPress

- **Streamlined Updates:** Composer makes updating WordPress and its plugins a breeze. A simple `composer update` command can keep your site up-to-date.
- **Better Dependency Management:** You gain more control over the versions of plugins and themes, reducing the risk of incompatibility issues.
- **Version Control Integration:** It aligns perfectly with version control systems like Git, allowing for better tracking of changes and easier collaboration.

### Cons of Using Composer with WordPress

- **Learning Curve:** For those unfamiliar with Composer, there’s a learning curve involved in understanding how to use it effectively.
- **Overhead Management:** Setting up and maintaining Composer with WordPress requires some initial configuration and ongoing management.

## WordPress Composer GitHub Template Repository

![[~/×/aef1d52af3225869cb23488c55d30180_MD5.webp]]

The social share image for the jmwhitworth/wordpress-composer repository.

For those interested in exploring this approach, I recommend checking out my WordPress Composer GitHub template repository: [wordpress-composer](https://github.com/jmwhitworth/wordpress-composer). This repository provides a basic template to kickstart your WordPress project with Composer. It’s pre-configured to manage WordPress core, plugins, and themes as dependencies.

### Getting Started with the Repository

To get started, simply [clone the repository](https://github.com/jmwhitworth/wordpress-composer) and customise the `composer.json` file to include your desired plugins and themes. The repository is structured to give you a head start, ensuring that you can focus on building your site rather than configuring the setup.

You must copy the `.env.sample` file and rename it `.env`, then fill out the various variables that it requires. The very minimum here is to provide the variables for the SQL database connection, and the URL of the website. You will also need to have an Apache or Nginx server ready as well as the SQL database.

Installing your first packages is as simple as running:

### What does the Repository include?

I’d recommend checking out the [readme file](https://github.com/jmwhitworth/wordpress-composer/blob/main/README.md) before diving in, but as a quick overview, the repository ships with very minimal packages. These are hand-selected to give you a bare-bones experience with what I would consider to be essentials for WordPress development.

- WordPress
- WP-CLI – Allows for interacting with WordPress via the command line
- Redis Object Cache – Optimises database querying when connected to a Redis server
- Advanced Custom Fields (free) – Easily extend WordPress’ core functionality by adding custom fields and post types
- S3-Uploads – Offload media to storage buckets instead of needing to commit them to your Git repositories
- Twenty Twenty-Four – The most recent first-party theme supplied by WordPress

Additionally, there is an `mu-plugin` that ships with the repo. I wrote this myself and it just adds some tweaks to make Composer-based WordPress a little bit nicer:

- It disables any health-check warnings that are expected and do not apply to Composer environments, such as warnings about background updated being disabled (as Composer handles this instead of WordPress).
- It disables update nags from showing on admin pages.
- It fixes some file permission errors with Redis.
- It enables s3-uploads to work with Cloudflare R2.
- It enabled PHP’s SMTP mailer to work with the details you can supply within the `.env` file.

As an `mu-plugin`, this is always active while it exists within the files. You’re welcome to remove it, but I’d suggest leaving it in place as it’s a tiny file which adds no bloat in exchange for some very useful functionality.

## Conclusion

Using WordPress via Composer offers a robust, efficient way to manage your website’s underlying structure and dependencies. While it might require some upfront learning and setup, the long-term benefits in terms of site management and development efficiency are undeniable. Embracing Composer can be a game-changer for your WordPress development workflow.

By using my [composer-wordpress](https://github.com/jmwhitworth/wordpress-composer) template repository, you can get started in minutes with a new, clean project.