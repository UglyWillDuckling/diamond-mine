---
related:
  - "[[Nginx]]"
  - "[[Setup hosting]]"
tags:
  - howto
  - instructions
---
#### nginx setup steps
1. add mapping for the config directory in the [[docker-compose]] file
2. add `nginx.conf` file
3. add a `server section`
4. add `listen` on ports `80` and `443`
5. add `server_name`
	- ~ should be your [[domain]]
6. add valid [[SSL certificate]]s
