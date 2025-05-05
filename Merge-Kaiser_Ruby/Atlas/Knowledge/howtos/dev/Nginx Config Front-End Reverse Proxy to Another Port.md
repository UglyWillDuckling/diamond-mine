---
source: https://serverfault.com/questions/171678/nginx-config-front-end-reverse-proxy-to-another-port
published: 2010-08-18
created: 2025-04-18
tags:
  - howto/nginx/redirect
---
Modified [14 years, 8 months ago](https://serverfault.com/questions/171678/?lastactivity "2010-08-18 03:01:27Z")
___


I have a small web server that serves requests on port 5010 rather than 80.

**I would like to use nginx as a front end proxy to receive requests on port 80 and then let those requests be handle by port 5010**.

I have installed nginx successfully and it runs smoothly on Ubuntu Karmic.
___
## 2 Answers

I'm assuming that nginx is not the server listening on port 5010 as well as 80, correct? 

Something else is listening on 5010 and you wish to have nginx proxy to that server?

If that's the case, here's a nice sample config I've used in the past with success:

```nginx
server {
        listen       80;
        server_name  <YOUR_HOSTNAME>;
        location / {
            proxy_pass         http://127.0.0.1:5010/;
            proxy_redirect     off;

            proxy_set_header   Host             $host;
            proxy_set_header   X-Real-IP        $remote_addr;
            proxy_set_header   X-Forwarded-For  $proxy_add_x_forwarded_for;

            client_max_body_size       10m;
            client_body_buffer_size    128k;

            proxy_connect_timeout      90;
            proxy_send_timeout         90;
            proxy_read_timeout         90;

            proxy_buffer_size          4k;
            proxy_buffers              4 32k;
            proxy_busy_buffers_size    64k;
            proxy_temp_file_write_size 64k;
        }
}
```

I believe that should accomplish what you're seeking. Good luck!

**Pretty minimalist** -- I've left the proxy settings as default, though you may want to look in to it to adjust to your needs.

```nginx  
# NGINX configuration

# System configuration ##################
worker_processes  3;
events {
    worker_connections  1024;
}
user nobody;

# Web configuration #####################
http {
    server {
        listen 80 default;
        location / {
            proxy_set_header   X-Real-IP        $remote_addr;
            proxy_set_header   X-Forwarded-For  $proxy_add_x_forwarded_for;
            proxy_set_header   Host             $host;

            proxy_pass http://127.0.0.1:5010/;
        }
    }
}
```

