[[Persona VPS]]

> [Hostinger Panel](https://hpanel.hostinger.com/vps/676285/operating-system)
- [x] #task create new [[VPS]] on [[hostinger]] ✅ 2025-01-07
	- [x] #task add [[ssh key]] ✅ 2025-01-05
	- [x] #task **configure** Persona VPS on hostinger ✅ 2025-01-07
		- [x] update host name
		- [ ] add [[PTR record]]
- [x] #task install some programs ✅ 2025-01-05
	- [x] [[Docker]], [[Docker Compose]]
	- [x] [[Postfix]], [[Dovecot]]
- [x] #task [[#create users]] ✅ 2025-01-05
### docker
> [[How to Install Docker on Ubuntu 24.04]]
**GPG key**
```bash
	curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /etc/apt/keyrings/docker.gpg
```

**stable repository**
```bash
	echo "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.gpg] https://download.docker.com/linux/ubuntu $(. /etc/os-release && echo "$VERSION_CODENAME") stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
```

**install**
```bash
	sudo apt install docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin
```

- [x] #task ! test to see if you can start a [[web server]] ✅ 2025-01-05

### mail
- [x] install [[Postfix]]
- [x] install [[Dovecot]]
### create users
- vlado
- senka@techdot.biz
