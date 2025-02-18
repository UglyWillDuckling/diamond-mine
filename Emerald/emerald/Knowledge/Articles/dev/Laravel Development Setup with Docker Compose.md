---
author:
  - "[[Docker Documentation]]"
created: 2025-02-18
published: 2024-10-29
source: https://docs.docker.com/guides/frameworks/laravel/development-setup/
tags:
  - article/guide
  - article/laravel/docker
---
This guide demonstrates how to configure a **development** environment for a Laravel application using Docker and Docker Compose. It builds **on top of** the production image for PHP-FPM and then adds developer-focused features—like Xdebug—to streamline debugging. By basing the development container on a known production image, you keep both environments closely aligned.

This setup includes PHP-FPM, Nginx, and PostgreSQL services (although you can easily swap PostgreSQL for another database, like MySQL or MariaDB). Everything runs in containers, so you can develop in isolation without altering your host system.

> **Note**
> 
> To experiment with a ready-to-run configuration, download the [Laravel Docker Examples](https://github.com/dockersamples/laravel-docker-examples) repository. It contains pre-configured setups for both development and production.

This layout represents a typical Laravel project, with Docker configurations stored in a unified `docker` directory. You’ll find **two** Compose files — `compose.dev.yaml` (for development) and `compose.prod.yaml` (for production) — to keep your environments separate and manageable.

The environment includes a `workspace` service, a sidecar container for tasks like building front-end assets, running Artisan commands, and other CLI tools your project may require. While this extra container may seem unusual, it’s a familiar pattern in solutions like **Laravel Sail** and **Laradock**. It also includes **Xdebug** to aid in debugging.

This Dockerfile **extends** the production image by installing Xdebug and adjusting user permissions to ease local development. That way, your development environment stays consistent with production while still offering extra debug features and improved file mounting.

A workspace container provides a dedicated shell for asset compilation, Artisan/Composer commands, and other CLI tasks. This approach follows patterns from Laravel Sail and Laradock, consolidating all development tools into one container for convenience.

> **Note**
> 
> If you prefer a **one-service-per-container** approach, simply omit the workspace container and run separate containers for each task. For example, you could use a dedicated `php-cli` container for your PHP scripts, and a `node` container to handle the asset building.

Here's the `compose.yaml` file to set up the development environment:

> **Note**
> 
> Ensure you have an `.env` file at the root of your Laravel project with the necessary configurations. You can use the `.env.example` file as a template.

To start the development environment, use:

Run this command to build and start the development environment in detached mode. When the containers finish initializing, visit [http://localhost/](http://localhost/) to see your Laravel app in action.

By building on top of the production image and adding debug tools like Xdebug, you create a Laravel development workflow that closely mirrors production. The optional workspace container simplifies tasks like asset building and running Artisan commands. If you prefer a separate container for every service (e.g., a dedicated `php-cli` and `node` container), you can skip the workspace approach. Either way, Docker Compose provides an efficient, consistent way to develop your Laravel project.