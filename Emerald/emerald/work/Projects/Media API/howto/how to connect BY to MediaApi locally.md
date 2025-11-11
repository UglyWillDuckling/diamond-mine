#howto/mediaapi #wip 

1. update docker compose so that both services are on the same network
2. update media api URL on BY

### BY docker-compose changes

```diff
diff --git a/MALegacy/docker-compose.yaml b/MALegacy/docker-compose.yaml
index 58a78b1158..152c8f5302 100644
--- a/MALegacy/docker-compose.yaml
+++ b/MALegacy/docker-compose.yaml
@@ -78,6 +78,9 @@ services:
       - ./xdebug-profile:/tmp/xdebug-profile
     env_file:
       - config.env
+    networks:
+      - ma-local-network
+      - default

   nginx:
     image: "eu.gcr.io/ma-backbone/nginx:1.0.1"
@@ -101,6 +104,8 @@ services:
       - 8025:8025

 networks:
+  ma-local-network:
+    external: true
   default:
     external: true
     name: "ma-default"

```