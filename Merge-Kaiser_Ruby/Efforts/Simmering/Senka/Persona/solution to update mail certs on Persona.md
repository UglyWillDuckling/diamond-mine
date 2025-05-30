---
related:
  - "[[Upute za mail konfiguraciju]]"
---
- need to use the **existing** certs from the web application
___

certs location: `/root/letsencrypt/certbot/letsencrypt/live/persona.hr`

### final **`commands`** to use

```sh
cp /root/letsencrypt/certbot/letsencrypt/live/persona.hr/privkey.pem /etc/ssl/private/mail.key
cp /root/letsencrypt/certbot/letsencrypt/live/persona.hr/fullchain.pem /etc/ssl/certs/mailcert.pem
```

### script

```bash
#!/usr/bin/env bash

set -eu

echo "Updating certificate files..."

cp /root/letsencrypt/certbot/letsencrypt/live/persona.hr/privkey.pem /etc/ssl/private/mail.key
cp /root/letsencrypt/certbot/letsencrypt/live/persona.hr/fullchain.pem /etc/ssl/certs/mailcert.pem

echo "Restarting services..."

systemctl restart postfix
systemctl restart dovecot
```