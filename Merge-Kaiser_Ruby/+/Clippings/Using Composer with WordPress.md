---
title: "Using Composer with WordPress"
source: "https://roots.io/using-composer-with-wordpress/#integrating-composer-with-wordpress"
author:
  - "[[Scott Walkinshaw]]"
published: 2013-08-19
created: 2024-12-19
description: "An introduction to Composer and how to manage WordPress core, plugins, and even themes with it. Composer is a dependency manager for PHP."
tags:
  - "clippings"
---
on 2013-08-18

This post was last updated 2023-02-20

This post will give you an introduction to Composer and how to manage WordPress core, plugins, and even themes with it. If you already know what Composer is and how to use it and just want to see how to integrate it with WordPress, you can skip straight to the *The Solution* section below.

Bedrock, our **[WordPress boilerplate](https://roots.io/bedrock/)**, uses Composer for dependency management.

[Composer](http://getcomposer.org/) is a dependency manager for PHP that has been gaining steam lately. Your first question is most likely *“what is a dependency manager and why do I need one?”*. Almost any code you write probably ends up depending on 3rd party libraries. All of these libraries (projects, frameworks, files, etc) become *dependencies* of your project. Composer lets you declare the dependencies for a project and it will install and manage them.

If you’ve used [npm](http://npmjs.org/) for node.js, [Bundler](http://bundler.io/) for Ruby, or [pip](http://www.pip-installer.org/en/latest/) for Python, then you’ve already used a dependency manager.

All these tools deal with *packages*. Every dependency is also a package. What constitutes a package? It can be a local file, local folder, remote zip, local Git repository, remote Git repository, GitHub repository, etc. Most dependency managers also include a global registry of available packages. For Composer, this is [Packagist](https://packagist.org/). To get an idea of what kind of packages are available, just browse through Packagist.

I’ll do my best to explain some Composer concepts throughout this post, but the official Composer [docs](http://getcomposer.org/doc/05-repositories.md#concepts) are quite accessible as well. It’s recommended to read them to get a full understanding of Composer.

### Installation

Installing Composer is pretty simple with one caveat: **It requires PHP 7.2.5**. Follow the [installation instructions](https://getcomposer.org/doc/00-intro.md#installation-linux-unix-macos) to get started. I suggest installing Composer globally and then you can just use the `composer` command from anywhere.

### Usage

Seeing Composer in action usually solves most of the confusion you might have after reading about dependencies and packages. Let’s go through the most basic example of installing a single dependency to an empty project.

In this case our project is just an empty folder to start with:

```
$ mkdir composer-example
$ cd composer-example
```

For Composer, you declare your dependencies in a `composer.json` file. Create one with the following JSON:

```
{
  "require": {
    "guzzlehttp/guzzle": "^7.0"
  }
}
```

For this example we’re only declaring one dependency: [Guzzle](https://docs.guzzlephp.org/en/stable/index.html), the popular PHP HTTP client. Note that every package name includes its vendor name as well for namespacing purposes. In this case they’re both the same.

The next thing to notice is that we also declare what version of the Guzzle package we want. We’re using the latest `^7.0` which can be found at [https://packagist.org/packages/guzzlehttp/guzzle](https://packagist.org/packages/guzzlehttp/guzzle).

Only thing left to do is to actually install our dependencies:

```
$ composer install
```

And you’ll get the following output:

```
Loading composer repositories with package information
Installing dependencies (including require-dev)
  - Installing guzzlehttp/guzzle (7.5.0): Extracting archive

Writing lock file
Generating autoload files
```

Let’s list out some folders to see what actually happened:

```
$ ls
composer.json composer.lock vendor
```
```
$ ls vendor
autoload.php composer twig
```

We can see that Composer created a `vendor/` directory that contains the `twig` package.

You might be wondering about the new `composer.lock` file that was generated. The official Composer docs explain it nicely:

> After installing the dependencies, Composer writes the list of the exact versions it installed into a `composer.lock` file. This locks the project to those specific versions.

You might still be wondering what’s the point in using Composer and going through all the work above. Composer (and any dependency manager for that matter) has many advantages:

- your dependencies are explicitly declared in a single place
- installing and updating is handled by the tool
- your project is locked onto specific versions
- you don’t need to include the actual 3rd party code in your version control repository

The last one is huge. Without a dependency manager, you’re stuck doing one of two things:

- adding the entirety of a 3rd party library into your VCS repo
- using something like Git submodules

This means that when you’re using Composer, you check the following files into your repository:

- `composer.json`
- `composer.lock`

That’s it. Add `vendor/` to your `.gitignore` and let Composer handle it. Now whenever wants to setup your project, they just run the standard `git clone` followed by `composer install`.

Finally we’re ready to talk about how you use Composer with WordPress. When you think about a typical WP site, the easiest example of dependencies are plugins. But there’s something more fundamental to realize: **WordPress itself is a dependency**.

If you think about it, you’re creating a site, or application, that *depends* on WordPress. The WordPress core is a 3rd party library that is required for your application to work. This is difficult to understand at first due to how WordPress sites are usually structured:

```
index.php
license.txt
readme.html
wp-activate.php
wp-admin
wp-blog-header.php
wp-comments-post.php
wp-config-sample.php
wp-content
wp-cron.php
wp-includes
wp-links-opml.php
wp-load.php
wp-login.php
wp-mail.php
wp-settings.php
wp-signup.php
wp-trackback.php
xmlrpc.php
```

You’re probably familiar with the above folder structure. The WordPress core files are in your project’s root directory. `wp-content/` actually contains all your application specific code like your theme and plugins.

Thankfully most people realized this wasn’t a good idea and putting WordPress in [its own subdirectory](http://codex.wordpress.org/Giving_WordPress_Its_Own_Directory) has become a common practice. It might look like this:

```
wp-content
index.php
wp
wp-config.php
```

A further improvement was including WordPress as a Git submodule. [WordPress-Skeleton](https://github.com/markjaquith/WordPress-Skeleton) is a popular example of this. Your folder structure looks the same as above, but at least your `wp/` folder isn’t part of your main repository since it’s a separate submodule.

Since you’re reading an article about Composer, you’ve probably realized that [Git submodules aren’t the proper way to deal with dependencies either](http://somethingsinistral.net/blog/git-submodules-are-probably-not-the-answer/).

The good thing about the above structure becoming popular is that it’s not much different with Composer. In fact, your WP folder structure can be *identical*. It’s just a matter of using Composer to install WordPress to `wp/` rather than using a Git submodule.

### How To

There’s a few issues to deal with in order to get Composer to install WordPress to `wp/` and achieve the structure we had above.

As you saw in our simple Guzzle example, Composer installs all dependencies to `vendor/`. Unfortunately, this won’t work for WordPress since it needs to be our root directory (WP will only look for `wp-config.php` in its own directory or one directory up limiting its location).

A regular Composer package can *only* be installed in `vendor/`. You can’t pick and choose where you want each package installed to in your project.

Of course there’s a workaround otherwise this post wouldn’t exist. Composer by default doesn’t let you override a package’s install path, but Composer has plugin packages that can define their own install paths which is exactly what we need.

Here’s a [WordPress Core Installer package](https://github.com/johnpbloch/wordpress-core-installer) which would let us configure the install path like this:

```
"extra": {
  "wordpress-install-dir": "wp"
}
```

Problem solved right? We can just implement the `wordpress-core-installer` package and we’re good? Unfortunately the biggest issue remains:

**WordPress itself doesn’t have a `composer.json` file so it’s not a Composer package yet.**

There’s been a very long [discussion](http://core.trac.wordpress.org/ticket/23912) about adding a `composer.json` file to WordPress but it hasn’t happened yet and isn’t likely to anytime soon.

### The Solution

The best solution right now is to use a “fork” of WordPress with `composer.json` already added. [https://github.com/roots/wordpress](https://github.com/roots/wordpress) is our [Composer package with WordPress](https://roots.io/announcing-the-roots-wordpress-composer-package/).

Now we can finally get to the working `composer.json` file that we need:

```
{
  "require": {
    "php": ">=8.0",
    "roots/wordpress": "6.1.1"
  },
  "extra": {
    "wordpress-install-dir": "wp"
  }
}
```

That’s it. We just require `roots/wordpress` with the version of WordPress that we want and then tell Composer we want WordPress installed to `wp`.

### Installing WordPress with Composer

Now that we have our working `composer.json` file, let’s actually install WordPress. Once again, run `composer install`. Here’s what you should see:

```
Loading composer repositories with package information
Installing dependencies (including require-dev)
  - Installing roots/wordpress-core-installer (1.100.0): Extracting archive
  - Installing roots/wordpress-no-content (6.1.1): Extracting archive
  - Installing roots/wordpress (6.1.1)

Writing lock file
Generating autoload files
```

And our resulting directory looks like:

```
$ ls
composer.json composer.lock vendor wp
```

At this point, we need to follow the instructions about giving WP its own subdirectory found [here](http://codex.wordpress.org/Giving_WordPress_Its_Own_Directory). Once that’s done, our project should look like this:

```
wp-content
index.php
wp
wp-config.php
```

And we’re back to what we originally wanted. Only 1600 words later.

I said earlier that all packages are installed to `vendor/` unless they use another plugin package to allow overriding. Before we used one specifically for WordPress core, but there’s another more general one which defines more package types and install paths: [composer-installers](https://github.com/composer/installers).

`composer-installers` lets a package specify its type and a custom install location. They have a few types already included that we care about:

- `wordpress-plugin` => `wp-content/plugins/{$name}/`
- `wordpress-theme` => `wp-content/themes/{$name}/`
- `wordpress-muplugin` => `wp-content/mu-plugins/{$name}/`

So any package with a type of `wordpress-plugin` will get installed to `wp-content/plugins/{$name}/` by default.

So we’ve got WordPress installed and now we want to add some plugins. Thanks to `composer-installers` we can install them in the proper location right?

Yes, but we’re limited to plugins that have a `composer.json`, require `composer-installers` AND have their package type set correctly. Obviously there aren’t many plugins that actually do this yet.

### WordPress Packagist

Fortunately, the awesome people at [Outlandish](http://outlandishideas.co.uk/) have created a repository of WordPress plugins called [WordPress Packagist](https://wpackagist.org/).

> This site provides a mirror of the WordPress plugin directory as a Composer repository.

Basically, they mirror every WordPress plugin and add a `composer.json` file that requires `composer-installers` and sets their package type to `wordpress-plugin`.

Their instructions are simple too:

1. Add the repository to your `composer.json`
2. Add the desired plugins and themes to your requirements using `wpackagist-plugin` or `wpackagist-theme` as the vendor name.
3. Run `$ composer update`
4. Plugins are installed to `wp-content/plugins/` or `wp-content/themes/`

Our `composer.json` will look like this now after adding some plugins:

```
{
  "repositories": [
    {
      "type": "composer",
      "url": "http://wpackagist.org"
    }
  ],
  "require": {
    "php": ">=8.0",
    "roots/wordpress": "6.1.1",
    "wpackagist-plugin/akismet": "5.0.2",
    "wpackagist-plugin/turn-comments-off": "1.2.0"
  },
  "extra": {
    "wordpress-install-dir": "wp"
  }
}
```

It took a lot of work to get here, but if you look at the `composer.json` above, it’s actually pretty simple and self explanatory.

Take a look at [Bedrock](https://roots.io/bedrock/) for a stable starting point for WordPress projects with Composer.