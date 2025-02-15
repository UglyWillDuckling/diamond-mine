#ticket 

%% over time, this ticket could create a parent project that would encompass the entire [[deno]] exploration / study %%

about:: [[Deno]], [[Deno Web Server]]

- [x] #task Explore [[Deno Web Server]] ⏳ 2025-02-12 📅 2025-02-14 🆔 2ieFkV ✅ 2025-02-14
	- [ ]  look at [[oak framework|oak]]
___
## oak
[See the docs](https://jsr.io/@oak/oak/doc)
- [ ] check out [See the docs](https://jsr.io/@oak/oak/doc)
- [ ] see the [[GitHub]] **examples**
- [x] build a simpler server using [[oak framework]] |  ✅2025-02-14/21:27 

**path**: /home/vlado/dev/testbed/deno/oak
### notes
- very **easy** to **setup**
- works great with [[Deno]]
- easy to **understand**
- very **easy** to add routes
- **logging** with [[LGTM stack]] works immediately
- 
### examples

#### **basic**
```js
import { Application, Router } from "@oak/oak";

const router = new Router();

router.get("/", (ctx) => {
  ctx.response.body = "Hello world";
});

router.get("/user/create/:user", (ctx) => {
  console.log(`Trying to create a new user ${ctx.params.user}`);
  ctx.response.body = `Hello ${ctx.params.user}`;
});
``
const app = new Application();
app.use(router.routes());
app.use(router.allowedMethods());

await app.listen({ hostname: "127.0.0.1", port: 8001 });
```
- adds 2 routes
	- hello world
	- and a fake create user route
#### [[sse]]
- set's up an **event stream** that refreshes every 2 seconds #stream-events
- uses `javascript code` on FE to call the `route` and to use the `response`

```ts
// Importing some console colors
import { bold, cyan, green, yellow } from "jsr:@std/fmt@0.223/colors";

import {
  Application,
  type Context,
  isHttpError,
  Router,
  ServerSentEvent,
  Status,
} from "../mod.ts";

function notFound(ctx: Context) {
  ctx.response.status = Status.NotFound;
  ctx.response.body =
    `<html><body><h1>404 - Not Found</h1><p>Path <code>${ctx.request.url}</code> not found.`;
}

const router = new Router();
router
  .get("/", async (ctx) => {
    await ctx.send(
      {
        root: `${Deno.cwd()}/examples/resources`,
        path: "sseServer_index.html",
      },
    );
  })
  // for any clients that request the `/sse` endpoint, we will send a message
  // every 2 seconds.
  .get("/sse", async (ctx: Context) => {
    ctx.assert(
      ctx.request.accepts("text/event-stream"),
      Status.UnsupportedMediaType,
    );
    const connection = ctx.request.ip;
    const sse = await ctx.sendEvents();
    console.log(`${green("SSE connect")} ${cyan(connection)}`);
    let counter = 0;
    const id = setInterval(() => {
      const evt = new ServerSentEvent(
        "message",
        { data: { hello: "world" }, id: counter++ },
      );
      sse.dispatchEvent(evt);
      console.log("dispatched");
    }, 2000);
    sse.dispatchMessage({ hello: "world" });
    sse.addEventListener("close", () => {
      console.log(`${green("SSE disconnect")} ${cyan(connection)}`);
      clearInterval(id);
    });
  });

const app = new Application();

// Logger
app.use(async (context, next) => {
  await next();
  const rt = context.response.headers.get("X-Response-Time");
  console.log(
    `${green(context.request.method)} ${cyan(context.request.url.pathname)} - ${
      bold(
        String(rt),
      )
    }`,
  );
});

// Response Time
app.use(async (context, next) => {
  const start = Date.now();
  await next();
  const ms = Date.now() - start;
  context.response.headers.set("X-Response-Time", `${ms}ms`);
});

// Error handler
app.use(async (context, next) => {
  try {
    await next();
  } catch (err) {
    if (isHttpError(err)) {
      context.response.status = err.status;
      const { message, status, stack } = err;
      if (context.request.accepts("json")) {
        context.response.body = { message, status, stack };
        context.response.type = "json";
      } else {
        context.response.body = `${status} ${message}

${stack ?? ""}`;
        context.response.type = "text/plain";
      }
    } else {
      console.log(err);
      throw err;
    }
  }
});

// Use the router
app.use(router.routes());
app.use(router.allowedMethods());

// A basic 404 page
app.use(notFound);

app.addEventListener("listen", ({ hostname, port, serverType }) => {
  console.log(
    bold("Start listening on ") + yellow(`${hostname}:${port}`),
  );
  console.log(bold("  using HTTP server: " + yellow(serverType)));
});

await app.listen({ hostname: "127.0.0.1", port: 8000 });
```

**frontend**
```html
<!DOCTYPE html>
<html>
  <head></head>
  <body>
    <h1>Hello world!</h1>
    <ul id="events"></ul>
    <script>
      const sse = new EventSource("/sse");
      const ul = document.getElementById("events");
      sse.onmessage = (evt) => {
        const li = document.createElement("li");
        li.textContent = `message: ${evt.data}`;
        ul.appendChild(li);
      };
    </script>
  </body>
</html>
```

#### https server
> [!info]
> Requires [[SSL certificate]]s
