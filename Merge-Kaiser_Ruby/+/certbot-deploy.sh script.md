
```sh
#!/bin/bash

# Always reload your own nginx
/usr/bin/docker compose -f /root/dev/server/docker-compose.yml exec -T webserver nginx -s reload

# Only touch Mailcow when the mail cert was renewed
# (RENEWED_LINEAGE is set by certbot, e.g. /etc/letsencrypt/live/mail.example.com)
if [[ "$RENEWED_LINEAGE" == *"/mail.example.com" ]]; then
  MAILCOW=/opt/mailcow-dockerized
  cp "$RENEWED_LINEAGE/fullchain.pem" $MAILCOW/data/assets/ssl/cert.pem
  cp "$RENEWED_LINEAGE/privkey.pem"   $MAILCOW/data/assets/ssl/key.pem
  cd $MAILCOW && docker compose restart postfix-mailcow dovecot-mailcow
fi
```
