---
related:
  - "[[Docker]]"
  - "[[Docker Compose]]"
tags:
  - howto
---
```bash
parallel 'docker pull' ::: $(cat docker-compose.yml | grep image | awk '{print $2}')
```

uses:: [[parallel command]], [[grep]] , [[awk]]
