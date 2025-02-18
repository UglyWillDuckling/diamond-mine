---
author:
  - "[[Rob Waller]]"
created: 2025-02-17
published: 2019-07-20
source: "https://rbrt.wllr.info/2019/07/20/wordpress-docker-composer.html"
tags:
---
[Home](https://rbrt.wllr.info/) > [Blogs](https://rbrt.wllr.info/blog.html) > How to Set Up WordPress with Composer and Docker By: Rob Waller, July 20, 2019 #php #wordpress #docker #composer #dusty

I’ve been doing PHP development for at least a decade and one thing which keeps rearing its ‘ugly head’ is WordPress. It seems if you are a PHP developer you cannot avoid WordPress, at some point you’ll have to work on a project powered by it and it may well be a nightmare. WordPress is a legacy project and lacks many of the tools, concepts, standards and features which make a developer’s life easier and result in reasonable outcomes.

This is not to say reasonable or good outcomes can’t be achieved with WordPress, just more thought has to be given to the subject. And undeniably WordPress is an amazing tool which helps millions of people easily build blogs, websites and online businesses. It is though a tool built for users and not developers, WordPress even allude to this in their [philosophy](https://wordpress.org/about/philosophy/).

As a developer there are four problems you will face when developing with WordPress:

- **Maintnenance / Deployments:** WordPress is built to be deployed once, and then automatically updated on the server. It is not built to be maintained and deployed through a more robust CI / CD pipeline or even just a manual testing pipeline.
- **Package Management:** WordPress does not use a package manager so it’s difficult to extend WordPress with useful functionality from the wider PHP ecosystem. Everything is custom to WordPress.
- **Environment Setup:** As soon as you stray away from standard WordPress development methodologies you have to build a custom development environment.
- **Testing:** WordPress does not integrate with a testing framework like PHP Unit and as a result code quality issues can be rife.

Two tools which can help alleviate some of these problems are [Composer](https://getcomposer.org/) and [Docker](https://www.docker.com/). I’ve been using WordPress with Composer for at least three years, and more recently added Docker to the mix. Composer has helped with extending WordPress and running more controlled deployments and updates. And Docker helps easily maintain a Composer friendly environment.

I’m not the only developer who has taken this approach to WordPress development. There is a growing community of developers who have been using WordPress with Composer. Individuals such as [John Bloc](https://github.com/johnpbloch/wordpress-core) have turned WordPress into a Composer package available via [Packagist](https://packagist.org/), and [WPackagist](https://wpackagist.org/) makes the majority of WordPress themes and plugins available via Composer. Progress is being made, even if it is ‘unofficial’ in nature.

And this is why I’ve created [Dusty](https://github.com/RobDWaller/dusty) which encapsulates many of my learnings over the last few years. Dusty is a WordPress starter repository, and it comes with a Composer and Docker integration out of the box. It is built to get going with Composer, Docker and WordPress as quickly as possible, hopefully in five minutes. And it aims to achieve three things:

- Integrate with Composer to make dependancy management easy and allow WordPress to be extended.
- Provide a development environment out of the box via Docker.
- Explain advanced WordPress / Composer concepts such as using private repositories as dependencies.

It should be noted [Dusty](https://github.com/RobDWaller/dusty) isn’t the only project attempting to extend WordPress with tools like Composer, both Timber and Bedrock do similar things. I hope though Dusty can become a nice addition to this growing ecosystem.

To begin using Dusty you will need to install [Composer](https://getcomposer.org/) and [Docker](https://www.docker.com/) locally. Once this is done you can create a new Dusty project with a single command:

```plaintext
composer create-project rbdwllr/dusty project-name
```

This will install Dusty and all its dependencies. You can then spin up the development environment via Docker:

```plaintext
docker-compose up -d --build
```

Dusty manages WordPress config settings via .env files and the PHP Dot Env package. You can create the initial .env file automatically via a docker command:

```plaintext
docker-compose exec web composer make-environment
```

This does two things, it generates the base .env file and then automatically generates and populates the WordPress salts via the [WordPress Salts Generator](https://github.com/RobDWaller/wordpress-salts-generator) package.

Once these three basic steps have been completed you can access your new WordPress site via http://localhost:8080 and finish the standard WordPress installation process.

Other features Dusty include:

- SSL Support so you can test those https requests.
- SSH Key support for access to private repos.
- MySQL integration which makes moving SQL databases between container and host easy.

My hope is [Dusty](https://github.com/RobDWaller/dusty) provides a platform from which to easily build out a WordPress website and gain all the benefits of the wider PHP ecosystem. There is a lot more work to do but I hope this is a reasonable start and I’d really appreciate your feedback.