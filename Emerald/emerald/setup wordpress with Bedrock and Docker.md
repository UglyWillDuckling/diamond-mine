#ticket/personal

target:: [[wordpress]]

related:: [[docker]], [[docker compose]], [[php]]
uses:: [[bedrock WordPress boilerplate]]
## resources
- [[Bedrock · Server Configuration doc]]
- [[How to Set Up WordPress with Composer and Docker]]
- [[setup wordpress with Bedrock and Docker]]
- [[Setting up PHP with Docker and Nginx A Guide]] ✔
## artifacts
- [[how bedrock works]] ✍
- [[wordpress dockerfile wip]]
## knowledge
- you have to use the `--build` **flag** to make `docker` use the correct `target`[^1] 
___
## work

- [/] #task [[wordrepress]] on **bedrock** and [[docker]] 🔼 ⏳ 2025-02-17 📅 2025-02-18 🆔 JU5wbL
	- [/] #task use **laravel** example `docker` to build a new setup 🆔 76K4jr ⏳ 2025-02-20 📅 2025-02-21
	- [x] make a basic installation with [[composer]]
	- [x] add docker compose configuration
	- [x] setup **bedbrock** with **Docker**
		- [x] add all th services
			- [x] mysql
			- [x] nginx
			- [x] php
		- [x] connect webserver(Nginx) with the PHP container
	- [x] update **PHP service** to use a [[dockerfile]] %% this enables us to configure the image as we need %%
		- [x] add PHP dependencies inside the dockerfile
		- [[wordpress dockerfile wip]]
		- [x] 'c **check** that [[composer]] is installed
	- [x] Install and **run** wordpress
	- [x] **Nginx** wordpress specific configuration
		- [x] test all the changes
			- [x] robots
			- [x] favicon
			- [x] deny dotfiles
			- [x] static files
	- [x] check Nginx for **security**
		- [x] **path traversal**, etc.
	- [x] **PHP** Config
		- [x] Add **composer** to PHP [[wordpress dockerfile wip]]
			- see [[Setting up PHP with Docker and Nginx A Guide]]
		- [x] Add PHP FPM config file
		- [x] Add PHP config file
			- [x] Fix settings: remove comments
	- [x] [[#**fix** access to PHP files]]
		- all traffic routed to `index.php`
		- [[Laravel Development Setup with Docker Compose]]
		- [[laravel-docker-examples]] 
	
	- [>] test out **[[xdebug]]**
	- [>] explore how to use [[wp-cli]]
	- [>] check ownership and permissions
___
### setup with laravel docker example
[[laravel-docker-examples]]

- [x] use the Dockerfile provided
- [x] check `xdebug` docker setup
- [x] start up the project
- [x] add `production` [[docker compose file | compose file]]
- [x] compare `docker compose` files
- [x] test out `prod compose`
- [/] **test** production `target` latest **changes**
- [x] 'a put this on **Github**
- [ ] ..
- [ ] see how to **configure** **PHP**
	- [ ] [[PHP FPM]]

#### fix production target not working
Was missing directory for project files

[^1]: [[Dockerfile Target]]