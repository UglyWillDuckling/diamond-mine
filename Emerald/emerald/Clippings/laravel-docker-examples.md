---
created: 2025-02-18
source: https://github.com/rw4lll/laravel-docker-examples/tree/main
tags:
---
> [!info]
> Set of docker compose examples for Laravel framework

**toc**
- [[#Overview|Overview]]
- [[#Project Structure|Project Structure]]
	- [[#Project Structure#Directory Structure|Directory Structure]]
	- [[#Project Structure#Production Environment|Production Environment]]
	- [[#Project Structure#Development Environment|Development Environment]]
- [[#Getting Started|Getting Started]]
	- [[#Getting Started#Prerequisites|Prerequisites]]
	- [[#Getting Started#Clone the Repository|Clone the Repository]]
	- [[#Getting Started#Setting Up the Development Environment|Setting Up the Development Environment]]
- [[#Usage|Usage]]
	- [[#Usage#Accessing the Workspace Container|Accessing the Workspace Container]]
	- [[#Usage#Run Artisan Commands:|Run Artisan Commands:]]
	- [[#Usage#Rebuild Containers:|Rebuild Containers:]]
	- [[#Usage#Stop Containers:|Stop Containers:]]
	- [[#Usage#View Logs:|View Logs:]]
- [[#Production Environment|Production Environment]]
	- [[#Production Environment#Deploying|Deploying]]
- [[#Technical Details|Technical Details]]
- [[#Contributing|Contributing]]
	- [[#Contributing#How to Contribute|How to Contribute]]
- [[#License|License]]

> Set of docker compose examples for Laravel framework

## Overview

The **Laravel Docker Examples Project** offers practical and modular examples for Laravel developers to create efficient Docker environments for development and production. This project demonstrates modern Docker best practices, including multi-stage builds, modular configurations, and environment-specific customization. It is designed to be educational, flexible, and extendable, providing a solid foundation for Dockerizing Laravel applications.

## Project Structure

The project is organized as a typical Laravel application, with the addition of a `docker` directory containing the Docker configurations and scripts. These are separated by environments and services. There are two main Docker Compose projects in the root directory:

- **compose.dev.yaml**: Orchestrates the `development` environment.
- **compose.prod.yaml**: Orchestrates the `production` environment.

### Directory Structure

```
project-root/ 
├── app/ # Laravel app folder
├── ...  # Other Laravel files and directories 
├── docker/ 
│   ├── common/ # Shared configurations
│   ├── development/ # Development-specific configurations 
│   ├── production/ # Production-specific configurations
├── compose.dev.yaml # Docker Compose for development 
├── compose.prod.yaml # Docker Compose for production 
└── .env.example # Example environment configuration
```

This modular structure ensures shared logic between environments while allowing environment-specific customizations.

### **Production** Environment

The production environment is configured using the `compose.prod.yaml` file.
It is optimized for performance and security, using multi-stage builds and **runtime-only dependencies**. It uses a shared PHP-FPM multi-stage build with the **target** `production`.

- **Optimized Images**: Multi-stage builds ensure minimal image size and enhanced security.
- **Pre-Built Assets**: Assets are compiled during the build process, ensuring the container is ready to serve content immediately upon deployment.
- **Health Checks**: Built-in health checks monitor service statuses and ensure smooth operation.
- **Security Best Practices**: Minimizes the attack surface by excluding unnecessary packages and users.
- **Docker Compose for Production**: Tailored for deploying Laravel applications with Nginx, PHP-FPM, Redis, and PostgreSQL.

This environment is designed for easy deployment to any Docker-compatible hosting platform.

### **Development** Environment

The development environment is configured using the `compose.dev.yaml` file and is built on top of the production version. This ensures the development environment is as close to production as possible while still supporting tools like Xdebug and writable permissions.

Key features include:

- **Close <mark style="background: #FFF3A3A6;">Parity</mark> with Production**: Mirrors the production environment to minimize deployment issues.
- **Development Tools**: Includes Xdebug for debugging and writable permissions for mounted volumes.
- **Hot Reloading**: Volume mounts enable real-time updates to the codebase without rebuilding containers.
- **Services**: PHP-FPM, Nginx, Redis, PostgreSQL, and Node.js (via NVM).
- **Custom Dockerfiles**: Extends shared configurations to include development-specific tools.

To set up the development environment, follow the steps in the **Getting Started** section.

## Getting Started

Follow these steps to set up and run the Laravel Docker Examples Project:

### Setting Up the Development Environment

1. Copy the .env.example file to .env and adjust any necessary environment variables:

Hint: adjust the `UID` and `GID` variables in the `.env` file to match your user ID and group ID. You can find these by running `id -u` and `id -g` in the terminal.

2. Start the Docker Compose Services:

```
docker compose -f compose.dev.yaml up -d
```

1. Install Laravel **Dependencies**:

```bash
docker compose -f compose.dev.yaml exec workspace bash
composer install
npm install
npm run dev
```

2. Run Migrations:

```bash
docker compose -f compose.dev.yaml exec workspace php artisan migrate
```

3. Access the Application:

Open your browser and navigate to [http://localhost](http://localhost/).

## Usage

Here are some common commands and tips for using the development environment:

### Accessing the Workspace Container

The workspace sidecar container includes Composer, Node.js, NPM, and other tools necessary for Laravel development (e.g. assets building).

```bash
docker compose -f compose.dev.yaml exec workspace bash
```

### Rebuild Containers:

```
docker compose -f compose.dev.yaml up -d --build
```

## Production Environment

The production environment is designed with security and efficiency in mind:

- **Optimized Docker Images**: Uses multi-stage builds to minimize the final image size, reducing the attack surface.
- **Environment Variables Management**: Sensitive data such as passwords and API keys are managed carefully to prevent exposure.
- **User Permissions**: Containers run under non-root users where possible to follow the principle of least privilege.
- **Health Checks**: Implemented to monitor the status of services and ensure they are functioning correctly.
- **HTTPS Setup**: While <mark style="background: #FFB8EBA6;">not included </mark>in this example, it's recommended to configure SSL certificates and use HTTPS in a production environment.

### Deploying

The production image can be deployed to any Docker-compatible hosting environment, such as AWS ECS, Kubernetes, or a **traditional VPS**.

## Technical Details

- **PHP**: Version **8.3 FPM** is used for optimal performance in both development and production environments.
- **[[Node.js]]**: Version **22.x** is used in the development environment for building frontend assets with Vite.
- **[[PostgreSQL]]**: Version **16** is used as the database in the examples, but you can adjust the configuration to use MySQL if preferred.
- **[[Redis]]**: Used for caching and session management, integrated into both development and production environments.
- **[[Nginx]]**: Used as the web server to serve the Laravel application and handle HTTP requests.
- **[[docker compose]]**: Orchestrates the services, simplifying the process of starting and stopping the environment.
- ~~**Health Checks**: Implemented in the Docker Compose configurations and Laravel application to ensure all services are operational.~~
