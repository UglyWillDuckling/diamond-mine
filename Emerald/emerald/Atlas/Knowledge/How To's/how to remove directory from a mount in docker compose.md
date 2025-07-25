---
created_during:
  - "[[BackYard Refactor - new app]]"
---
#howto/docker

You can simpy add `- /app/vendor` .

This will remove the mount if you have already made one.

```yml
  newapp:
    build:
      context: .
      target: frankenphp_dev
    volumes:
      - newapp/:/app
      - /app/vendor # THIS IS THE LINE
```


