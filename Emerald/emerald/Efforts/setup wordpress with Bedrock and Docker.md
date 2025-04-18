#ticket/personal

target:: [[wordpress]]
related:: [[docker]], [[docker compose]], [[php]]
uses:: [[bedrock WordPress boilerplate]]
___
## resources
- [[Bedrock · Server Configuration doc]]
- [[How to Set Up WordPress with Composer and Docker]]
- [[setup wordpress with Bedrock and Docker]]
- [[Setting up PHP with Docker and Nginx A Guide]] ✔
## artifacts
- [[how bedrock works]] ✍
## knowledge
- you have to use the `--build` **flag** to make `docker` use the correct `target`[^1] 
- admin path: http://localhost/wp/wp-admin
___
## work

- [x] #task [[wordrepress]] on **bedrock** and [[docker]] 🆔 JU5wbL 🔼 ⏳ 2025-02-17 📅 2025-03-03 ✅ 2025-04-14
	- [x] #task use **laravel** example `docker` to build a new setup 🆔 76K4jr ⏳ 2025-02-20 📅 2025-02-23 ✅ 2025-02-26
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
	- [x] #task fix **admin** access 🆔 UNVO6B ✅ 2025-02-19
	
	 - [x] think 🤔 about using `extend` in docker compose
		 - [[docker compose extend]]
		 - https://docs.docker.com/compose/how-tos/multiple-compose-files/extends/
	
	- [x] test out **[[xdebug]]**
	- [x] explore how to use [[wp-cli]]
	
	 - [x] #task adjust ownership of files #security #big 🆔 zBsH8G ⏫ ✅ 2025-04-14
		- [x] **check** ownership and permissions
		`www-data` user, build process, `docker-compose`
	 - [x] #task add **mail** support 🆔 6gq6gY 🔼 ✅ 2025-04-14
		 - [ ] dev mail with tools like [[mailhog]]
		 - [ ] main mail support
	 - [x] #task add a **CLI tool** to control the project 🆔 MlPSxb ✅ 2025-02-26
		 - maybe [[bashly]]
	- [x] #task **explore** how **wordpress** is actually **installed** 🆔 CCQpiU ✅ 2025-04-14
___
### setup with laravel docker example
[[laravel-docker-examples]]

- [x] ~~use the `Dockerfile` provided~~
- [x] ~~check `xdebug` docker setup~~
- [x] add `production` [[docker compose file | compose file]]
- [x] 'a put this on **Github**
- [x] ~~**fix** `ignored` files in repo~~
- [x] ~~test out **prod** **target** again~~
- [/] see how to **configure** `PHP`
	- [x] general php config
	- [ ] [[php fpm]] configuration

### fix **ignored** files
used [[How to remove ignored files in the .gitignore but in the repository]]

### **PHP configuration**

-  file `mapping` for this
- One for **dev** and one for **prod**
- for prod can be `empty` and used only if needed

- [x] **Implemented** file mapping for the additional php configuration

#### [[php-fpm]] config


### CLI with [[bashly]]

- docker commands
- ? wp commands
- ..


[^1]: [[Dockerfile Target]]