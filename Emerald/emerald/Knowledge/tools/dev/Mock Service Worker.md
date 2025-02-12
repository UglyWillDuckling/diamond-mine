---
title: Mock Service Worker
source: https://mswjs.io/
author: 
published: 
created: 2025-01-07
description: API mocking library for browser and Node.js
tags:
  - clippings
  - tool
  - javascript
  - mocking
related:
  - "[[mocking]]"
  - "[[javascript]]"
aliases:
  - msw
---
## Industry standard API mocking for JavaScript.

Mock Service Worker is an API mocking library that allows you to write client-agnostic mocks and reuse them across any frameworks, tools, and environments.

## Control the network

Focus on describing how the network should behave instead of thinking how to mock your request client.

```js
import { http, HttpResponse } from 'msw'import { setupWorker } from 'msw/browser' // Describe the network.const handlers = [  http.get('https://acme.com/product/:id', ({ params }) => {    return HttpResponse.json({      id: params.id,      title: 'Porcelain Mug',      price: 9.99,    })  }),] // Enable API mocking anywhere.const worker = setupWorker(...handlers)await worker.start()
```

- ### Omit implementation details

Intercept both [REST](https://mswjs.io/docs/network-behavior/rest) and [GraphQL API](https://mswjs.io/docs/network-behavior/graphql) requests regardless of how they were made. Use request clients that suit your product, not your API mocking tool of choice.
- ### Use the platform

Handle requests and responses using the standard Fetch API. Respect the web standards and invest your time into learning the platform, not the tools.
- ### Reuse like never before

No configurations, adapters, or plugins. Reuse the same mocks across environments and tools, be it an integration test with Vitest, an automated browser test with Playwright, a demo showcase in Storybook, or a React Native app. **Or all of them at once**.

> I found MSW and was thrilled that not only could I still see the mocked responses in my DevTools, but that the mocks didn't have to be written in a Service Worker and could instead live alongside the rest of my app. This made it *silly easy to adopt*. The fact that I can use it for testing as well makes MSW a *huge productivity booster*.
> 
> ![Kent C. Dodds](https://mswjs.io/_astro/kent-c-dodds.AIry2fgd.jpg)
> 
> Kent C. Dodds
> 
> Software Engineer and Educator

## Integrate anywhere

A single source of truth for your network across the entire stack.

Local development

Create, change, and debug fast by augmenting existing APIs—both third-party and local—or designing them as you go.

![Mock Service Worker logo](https://mswjs.io/_astro/msw.ChZQPzKa.svg)

$ vitest

❯ components/ProductDetail.test.ts

✓ displays product name

✓ displays net price

✓ handles network errors

Tests 3 passed (3)

Duration 100ms

Integration tests

Test happy paths and override network behavior on a per-test basis to test even the most trickest of edge cases.

End-to-end tests

Take any HTTP call out of your test's equation and focus on the user experience, mocking local or external APIs.

Storybook showcase

Emulate the precise network state to share how your components handle it with the entire team.

> Mock Service Worker has become a *fundamental part of my development and testing workflow*. With MSW I don't have to worry about endpoints or databases being down or slow. And I can forget about brittle tests due to changing data. I configure mocks that are 100% reliable and predictable. The result? *Faster development and rock-solid automated UI tests*.
> 
> ![Cory House](https://mswjs.io/_astro/cory-house.BRvlN5EY.jpg)
> 
> Cory House
> 
> Software Architect

Community

## Feedback

What developers are saying.

![Alffrey Chemmannoor](https://mswjs.io/_astro/no-avatar.CN8o2x6Q.jpg)

![Alffrey Chemmannoor](https://mswjs.io/_astro/no-avatar.CN8o2x6Q.jpg)

Alffrey Chemmannoor

Software Engineer

![Michael Haglund](https://mswjs.io/_astro/michael-haglund.KDILsO9W.jpg)

![Michael Haglund](https://mswjs.io/_astro/michael-haglund.KDILsO9W.jpg)

Michael Haglund

Engineering Manager

![Brady Pascoe](https://mswjs.io/_astro/brady-pascoe.D86iD9Jw.jpg)

![Brady Pascoe](https://mswjs.io/_astro/brady-pascoe.D86iD9Jw.jpg)

Brady Pascoe

Maintainer of React Bootstrap

![Tobias Pickel](https://mswjs.io/_astro/no-avatar.CN8o2x6Q.jpg)

![Tobias Pickel](https://mswjs.io/_astro/no-avatar.CN8o2x6Q.jpg)

Tobias Pickel

Software Engineer

![Konna Buraun](https://mswjs.io/_astro/konna-buraun.Co2KrQ4o.jpg)

![Konna Buraun](https://mswjs.io/_astro/konna-buraun.Co2KrQ4o.jpg)

Konna Buraun

Software Engineer

![Derek DeHart](https://mswjs.io/_astro/derek-de-hart.DWpa3R8G.jpg)

![Derek DeHart](https://mswjs.io/_astro/derek-de-hart.DWpa3R8G.jpg)

Derek DeHart

Software Engineer

![Rafal Rudol](https://mswjs.io/_astro/no-avatar.CN8o2x6Q.jpg)

![Rafal Rudol](https://mswjs.io/_astro/no-avatar.CN8o2x6Q.jpg)

Rafal Rudol

Senior Frontend Developer

![Heitor Lessa](https://mswjs.io/_astro/heitor-lessa.BEjkHPz5.jpg)

![Heitor Lessa](https://mswjs.io/_astro/heitor-lessa.BEjkHPz5.jpg)

Heitor Lessa

AWS EMEA

![Matan Borenkraout](https://mswjs.io/_astro/matan-borenkraout.DHl327A_.jpg)

![Matan Borenkraout](https://mswjs.io/_astro/matan-borenkraout.DHl327A_.jpg)

Matan Borenkraout

Frontend Engineer

![Mock Service Worker logo](https://mswjs.io/_astro/msw.ChZQPzKa.svg)

## Ship Better Products Today

Mock Service Worker is the best way to integrate API mocking across your entire stack. Test, prototype, and debug withouth sacrificing your application's integrity. Give it a try, it's open-source and free!

[Get started in 3 steps](https://mswjs.io/docs/getting-started)