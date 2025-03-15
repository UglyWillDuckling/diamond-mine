- [x] #task [[setup Persona web]] ⏫ ✅ 2025-01-07
	- [x] #task add `index.html` file ✅ 2025-01-07
	- [x] #task configure [[Nginx]] ✅ 2025-01-07
	- [x] #task web page [[#^fixup]] ✅ 2025-01-07

---
### configure [[Nginx]]
- [x] use ssl cert
- [x] redirect from [[HTTP]] to [[HTTPS]]

`server/nginx.conf`

**final config**
```nginx
server {
    listen 80;
    server_name persona.hr www.persona.hr;

    location /.well-known/acme-challenge/ {
        root /var/www/certbot;
    }

    location / {
        return 301 https://$host$request_uri;
    }
}

server {
    listen 443 ssl;
    server_name persona.hr www.persona.hr;

    ssl_certificate /etc/letsencrypt/live/persona.hr/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/persona.hr/privkey.pem;

    location / {
	    root /var/www/html;
        # Your application configuration
    }
}
```

### fixup web page
^fixup

<mark style="background: #BBFABBA6;">done</mark>





