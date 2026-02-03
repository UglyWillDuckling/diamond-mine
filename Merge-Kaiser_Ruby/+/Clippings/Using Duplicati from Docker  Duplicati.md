---
source: "https://docs.duplicati.com/detailed-descriptions/using-duplicati-from-docker"
author:
published: 2025-02-28
created: 2025-03-03
tags:
---
services: myapp: image: duplicati/duplicati:latest volumes: \- ./data:/data environment: DUPLICATI\_PRELOAD\_SETTINGS: /run/secrets/preloadsettings secrets: \- preloadsettings secrets: preloadsettings: file: ./preload.json