---
source: https://oakserver.org/
created: 2025-02-12
tags:
  - tool/web
  - tool/deno
related:
  - "[[Deno]]"
---
github: https://github.com/oakserver/oak

![[~/×/40f153c05003aef10d5d981f0635c41a_MD5.svg]]

oak is a middleware framework for handling HTTP requests across [Deno](https://deno.com/), [Node.js](https://nodejs.org/), [Bun](https://bun.sh/) and [Cloudflare Workers](https://workers.cloudflare.com/).

```js
import { Application, Router } from "@oak/oak";

const router = new Router();

router.get("/", (ctx) => {
  ctx.response.body = "Hello world";
});

const app = new Application();
app.use(router.routes());
app.use(router.allowedMethods());

app.listen();
```

oak was inspired by[[Express.js]]and koa and originally written for the Deno runtime. This makes it easy to adapt existing approaches with out of the box cross platform support.

[See the docs](https://jsr.io/@oak/oak/doc)