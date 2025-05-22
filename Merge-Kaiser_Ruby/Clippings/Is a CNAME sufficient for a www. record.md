---
title: Is a CNAME sufficient for a www. record?
source: https://serverfault.com/questions/692565/is-a-cname-sufficient-for-a-www-record
author: []
published: 2015-05-17
created: 2025-01-07
description: I have been doing a server migration, and checking that everything related to DNS is configured correctly by using IntoDNS. After doing this though, it flags up a error saying that there is no A re...
tags:
  - www
favicon: https://cdn.sstatic.net/Sites/serverfault/Img/favicon.ico?v=18e9cc4f2aea
related:
  - "[[Domain Name System|DNS]]"
  - "[[DNS record]]"
  - "[[CNAME record|CNAME]]"
  - "[[A Record]]"
  - "[[www record]]"
---
![[~/×/4d08bd0854926f79ff184d21edd4a628_MD5.ico]]

The reason the error is being flagged is because A records resolve quicker than CNAMEs since they only require a single lookup. So it is generally considered best practices to use A records for both your naked domain as well as the www subdomain (especially if the www subdomain is canonical).

There are of course exceptions to this rule, those exceptions being if you have a specific circumstance in which a CNAME would work better (for instance, routing your traffic through a CDN such as Akamai -- which reduces network load and speeds things up overall anyway, in which it would actually make more sense to point to their CNAME.)

If any of your subdomains point to third parties that tend to rotate IPs from a pool, then it would always be smarter to use a CNAME than an A record whenever the third party IP rolls so that you don't have to update your DNS every time they update theirs.

In your case, it really doesn't matter. But personally, I would go with the A record.

**Edit a few years later:**

Many DNS services such as AWS Route 53, Cloudflare, and others, now offer CNAME flattening options -- if you use a CNAME, it will automatically be flattened on the backend upon DNS resolution to where it will actually resolve to the actual IP of the domain it points to, so that it will essentially function exactly like an A record from the DNS client's perspective.
