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

![a cartoon squirrel holding an acorn](https://oakserver.org/oak_logo.svg?__frsh_c=6ccb8f389a5d8534f54e00d00f731f6c6dc69c61)

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