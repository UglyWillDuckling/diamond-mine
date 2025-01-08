---
title: "Nginx no-www to www and www to no-www"
source: "https://stackoverflow.com/questions/7947030/nginx-no-www-to-www-and-www-to-no-www"
author:
  - "[[Stack Overflow]]"
published: 2011-10-30
created: 2025-01-07
description: "I am using nginx on Rackspace cloud following a tutorial and having searched the net and so far can't get this sorted.I want www.mysite.example to go to mysite.example as normal in .htaccess for S..."
tags:
favicon: "https://cdn.sstatic.net/Sites/stackoverflow/Img/favicon.ico?v=ec617d715196"
---
![icon](https://cdn.sstatic.net/Sites/stackoverflow/Img/favicon.ico?v=ec617d715196]

1. ## Best Practice: separate `server` w/ hardcoded `server_name`

Best practice with nginx is to use a separate `server` for a redirect like this (not shared with the `server` of your main configuration), to hardcode everything, and not use regular expressions at all.

It may also be necessary to hardcode the domains if you're using HTTPS, because you have to know upfront which certificates you'll be providing.

```
server {
    server_name www.example.com;
    return  301 $scheme://example.com$request_uri;
}
server {
    server_name www.example.org;
    return  301 $scheme://example.org$request_uri;
}
server {
    server_name example.com example.org;
    # real configuration goes here
}
```

---

2. ## Using Regular Expressions within `server_name`

If you have a number of sites, and don't care for the most ultimate performance, but want every single one of them to have the same policy in regards to the `www.` prefix, then you can use regular expressions. The best practice of using a separate `server` would still stand.

Note that this solution gets tricky if you use https, as you must then have a single certificate to cover all of your domain names if you want this to work properly.

---

## non-`www` to `www` w/ regex in a dedicated single `server` for all sites:

```
server {
    server_name ~^(?!www\.)(?<domain>.+)$;
    return  301 $scheme://www.$domain$request_uri;
}
```

---

## `www` to non-`www` w/ regex in a dedicated single `server` for all sites:

```
server {
    server_name ~^www\.(?<domain>.+)$;
    return  301 $scheme://$domain$request_uri;
}
```

---

## `www` to non-`www` w/ regex in a dedicated `server` for some sites only:

It may be necessary to restrict the regex to cover only a couple of domains, then you can use something like this to only match `www.example.org`, `www.example.com` and `www.subdomain.example.net`:

```
server {
    server_name ~^www\.(?<domain>(?:example\.org|example\.com|subdomain\.example\.net))$;
    return  301 $scheme://$domain$request_uri;
}
```

---

## Testing Regular Expressions w/ nginx

You can test that the regex works as expected with [`pcretest`](http://ports.su/devel/pcre) on your system, which is the exact same [`pcre`](http://ports.su/devel/pcre) library that your nginx will be using for regular expressions:

```
% pcretest 
PCRE version 8.35 2014-04-04

  re> #^www\.(?<domain>(?:example\.org|example\.com|subdomain\.example\.net))$#
data> test
No match
data> www.example.org
 0: www.example.org
 1: example.org
data> www.test.example.org
No match
data> www.example.com
 0: www.example.com
 1: example.com
data> www.subdomain.example.net
 0: www.subdomain.example.net
 1: subdomain.example.net
data> subdomain.example.net
No match
data> www.subdomain.example.net.
No match
data> 
```

Note that you don't have to worry about trailing dots or case, as nginx already takes care of it, as per [nginx server name regex when "Host" header has a trailing dot](https://stackoverflow.com/questions/45363246/nginx-server-name-regex-when-host-header-has-a-trailing-dot).

---

3. ## Sprinkle `if` within existing `server` / HTTPS:

This final solution is generally not considered to be the best practice, however, it still works and does the job.

In fact, if you're using HTTPS, then this final solution may end up easier to maintain, as you wouldn't have to copy-paste a whole bunch of ssl directives between the different `server` definitions, and could instead place the snippets only into the needed servers, making it easier to debug and maintain your sites.

---

## non-`www` to `www`:

```
if ($host ~ ^(?!www\.)(?<domain>.+)$) {
    return  301 $scheme://www.$domain$request_uri;
}
```

---

## `www` to non-`www`:

```
if ($host ~ ^www\.(?<domain>.+)$) {
    return  301 $scheme://$domain$request_uri;
}
```

---

## hardcoding a single preferred domain

If you want a little bit more performance, as well as consistency between multiple domains a single `server` may use, it might still make sense to explicitly hardcode a single preferred domain:

```
if ($host != "example.com") {
    return  301 $scheme://example.com$request_uri;
}
```

---

## References:

- [http://nginx.org/r/server\_name](http://nginx.org/r/server_name)
- [http://nginx.org/r/return](http://nginx.org/r/return)
- [http://nginx.org/en/docs/http/server\_names.html](http://nginx.org/en/docs/http/server_names.html)