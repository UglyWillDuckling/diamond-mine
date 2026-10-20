---
tags:
  - project
status: Finished
---
## :LiTarget: Cilj

Fully setup email on [[techdot.io domain]].

### ⏭ next actions

- [x] send mail to [[Mirna 💕💕💕]] 📧

### Current situation

Everything is working
I have admin and user access 
Sending :LiSend: works as expected
Admin access limited to [[wireguard]]

### :LiScale: decisions

- use [[mailcow dockerized - 🐮 + 🐋]] — it's has a good track record. Offers allot of features.
- restrict 🚏 admin access to [[wireguard]] addresses only

___

### ☑ tasks

- [x] check if possible to rename `admin` route
- [x] create different admin user

## 🗒 notes

- [[mailcow dockerized - 🐮 + 🐋]]
- [[certbot-deploy.sh script]]
- limited admin access to `10.10.0.x` range ([[wireguard]])

**user**:
vlado
61,tiCtOx,;

**admin**:
admin3r_kor
hKhxzoK-cL1K24y0

## questions?

1. Why 172.17.0.1 rather than 127.0.0.1: your nginx is in a container, so 127.0.0.1 inside it points to itself, not the host. Binding to the docker0 gateway makes Mailcow reachable from containers without being exposed publicly. (Verify yours with ip addr show docker0.)

2. Don’t bind to 0.0.0.0: Docker bypasses UFW, so port 8080/8443 would be open to the internet.

3. `extra_hosts`

4.  `Then recreate it: docker compose up -d webserver`
