---
source: https://dev.to/callstackengineers/a-comprehensive-guide-to-mock-service-worker-msw-1ng9
published: 2022-10-13
created: 2025-02-11
tags:
  - howto
  - tutorial/msw
  - article
---
about:: [[Mock Service Worker]]

by [Aleksandra Desmurs-Linczewska](https://www.callstack.com/team/aleksandra-desmurs-linczewska)

[Mock Service Worker](https://mswjs.io/) is an API mocking tool that lets you mock by intercepting requests on the network level. You can reuse the same mock definition for testing, development, and debugging.

MSW is delightful to adopt. Plus, it makes testing components with network requests a pleasure.

In this article, I’d like to share some best practices for working with MSW for basic and more advanced problems.

## When to use a Mock Service Worker?

Has this ever happened to you?

You’ve finally gotten the green light to spend some writing tests!

This sprint is calm, but you remembered all too clearly that disastrous release a few weeks ago. The entire team had to drop everything and fix bugs.

Your repo has around 20% test coverage, and everyone agrees that it’s too little, but there’s never enough time to write tests. You write your features, get an LGTM on the PR, and move on.

But this release will be different!

You have a dedicated task, a couple of story points, and a jug of coffee to get this done right. You know the feature you’re about to test very well; you wrote most of it. You set out to mock the component and pass some props.

The tests fail.

No worries, that was only the first try, my friend! You re-check what needs testing, add some missing mocks, and maybe throw a `jest.spyOn` in there. You’re so proud of your accomplishment!

`yarn test` – another fail.

You dig deeper and realize your component depends on a network request returning some data.

Ok, don’t panic.

Let’s see how other tests in the codebase manage this. You find tests mocking axios, other ones' mock fetch, and wait; there are also some global files mocking resolved values and network errors?

You sweat a little, add many lines of code to your test, and ponder briefly if all of them are necessary. You notice tests unrelated to your changes started failing! You start feeling like the people in the first half of any infomercial.

…and you probably think: there has to be a better way! That’s when **Mock Service Worker comes in handy**.

## The basic guide to Mock Service Worker (MSW)

Mock Service Worker intercepts real network requests that your tests make.

The components in your tests think they are talking with the real API, which means you can **test their *real* functionality** (as opposed to testing contained, mock functionality). If you don’t feel convinced about this approach just yet, I invite you to read Kent C. Dodd’s excellent blog post: [Stop Mocking Fetch](https://kentcdodds.com/blog/stop-mocking-fetch).

Let’s see this magical library in action. As with any new dependency, you need to **start by adding it to your project**: `npm install msw --save-dev or yarn add msw --dev`

Once the installation finishes, you will have to **define your request handlers**. [MSW documentation](https://mswjs.io/docs/getting-started/mocks) suggests creating them in a file called `mocks/handlers.js`. Depending on your project, you can create REST or GraphQL handlers. MSW request handlers aim to **hold instructions for specific API endpoints**.

Let’s take a look at an example REST request handler:  

```
// src/mocks/handlers.js
import { rest } from "msw";

export const handlers = [
  // Handles a POST request
  rest.post("https://fancy-app.com/postToThisEndpoint", (req, res, ctx) => {
    return res(
      // Respond with a 200 status code
      ctx.status(200)
    );
  }),

  // Handles a GET request
  rest.get("https://fancy-app.com/getSomeData", (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        data: "fancy data string",
      })
    );
  }),
];
```

<svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 24 24" class="highlight-action crayons-icon highlight-action--fullscreen-on"><title>Enter fullscreen mode</title> <path d="M16 3h6v6h-2V5h-4V3zM2 3h6v2H4v4H2V3zm18 16v-4h2v6h-6v-2h4zM4 19h4v2H2v-6h2v4z"></path></svg> <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 24 24" class="highlight-action crayons-icon highlight-action--fullscreen-off"><title>Exit fullscreen mode</title><path d="M18 7h4v2h-6V3h2v4zM8 9H2V7h4V3h2v6zm10 8v4h-2v-6h6v2h-4zM8 15v6H6v-4H2v-2h6z"></path></svg>

[msw.test.tsx](https://gist.github.com/marta-pinkowska/2441ce919c1053770e0d4cad48cc779a#file-msw-test-tsx) hosted with ❤ by GitHub

We start by importing the rest function from MSW, then create an array of API endpoints we want to handle.

We can add anything we would like to this array. We can mock an **error response**; we can mock **correct or faulty data objects**. Remember to use absolute request URLs since we will use those request handlers in a NodeJS environment.

The only caveat here is that if you add multiple handlers for one API endpoint, the last one in the array will be the only one that’s actually used. But more on that later.

Once you have a few handlers ready, it is time to let your test suite know about them. We will need to **set up a request mocking server and run it with our tests**. This may sound scary, but don’t worry; the server setup file is three lines long.

Let’s create a new file called `server.js`:  

```
// src/mocks/server.js
import { setupServer } from 'msw/node'
import { handlers } from './handlers'

// This configures a request mocking server with the given request handlers.
export const server = setupServer(...handlers)
```

<svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 24 24" class="highlight-action crayons-icon highlight-action--fullscreen-on"><title>Enter fullscreen mode</title> <path d="M16 3h6v6h-2V5h-4V3zM2 3h6v2H4v4H2V3zm18 16v-4h2v6h-6v-2h4zM4 19h4v2H2v-6h2v4z"></path></svg> <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 24 24" class="highlight-action crayons-icon highlight-action--fullscreen-off"><title>Exit fullscreen mode</title><path d="M18 7h4v2h-6V3h2v4zM8 9H2V7h4V3h2v6zm10 8v4h-2v-6h6v2h-4zM8 15v6H6v-4H2v-2h6z"></path></svg>

[msw.test.2.tsx](https://gist.github.com/marta-pinkowska/cdd96667b9f2071c4f18a6545c9537fe#file-msw-test-2-tsx) hosted with ❤ by GitHub

We have to import the `setupServer` function from `msw/node` and pass the previously created request handlers to that function.

I don’t know about you, but this is the simplest mock server setup I have ever seen!

The very last step is running the mock server when you run your tests.

This step depends heavily on your project setup. There are various ways to set up and configure Jest, and this blog post will not try to cover all of them.

Instead, I’ll talk about the setup I’ve seen the most often: using a dedicated `setupTests.js` file, which is called through Jest’s [setupFilesAfterEv](https://jestjs.io/docs/configuration).

If that’s the case in your project, congratulations! You only need to add the following lines:  

```
// src/setupTests.js
import { server } from './mocks/server.js'
// Establish API mocking before all tests.
beforeAll(() => server.listen())

// Reset any request handlers that we may add during the tests,
// so they don't affect other tests.
afterEach(() => server.resetHandlers())

// Clean up after the tests are finished.
afterAll(() => server.close())
```

<svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 24 24" class="highlight-action crayons-icon highlight-action--fullscreen-on"><title>Enter fullscreen mode</title> <path d="M16 3h6v6h-2V5h-4V3zM2 3h6v2H4v4H2V3zm18 16v-4h2v6h-6v-2h4zM4 19h4v2H2v-6h2v4z"></path></svg> <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 24 24" class="highlight-action crayons-icon highlight-action--fullscreen-off"><title>Exit fullscreen mode</title><path d="M18 7h4v2h-6V3h2v4zM8 9H2V7h4V3h2v6zm10 8v4h-2v-6h6v2h-4zM8 15v6H6v-4H2v-2h6z"></path></svg>

[msw.test.2.tsx](https://gist.github.com/marta-pinkowska/81673bda4122af5fe207230af46dd2ad#file-msw-test-2-tsx) hosted with ❤ by GitHub

If you prefer to test MSW quickly in a single test file, you can do so as well.

It is possible to [use the mock server directly](https://mswjs.io/docs/getting-started/integrate/node#direct-usage) anywhere you would like. This means you can skip all the steps above (except for the installation, let’s not get carried away!) and write something like this in your test file:  

```
// __tests__/FancyPage.test.js
import { setupServer } from "msw/node";
import { FancyComponentWithAPICall } from "../FancyComponentWithAPICall";

const server = setupServer(
  rest.get("https://fancy-app.com/getSomeData", (req, res, ctx) => {
    return res(ctx.json({ data: "return this string" }));
  })
);

describe("<FancyComponentWithAPICall />", () => {
  beforeAll(() => server.listen());
  afterAll(() => server.close());
  test("displays data from backend", async () => {
    // Render components, perform requests, receive mocked responses.
  });
});
```

<svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 24 24" class="highlight-action crayons-icon highlight-action--fullscreen-on"><title>Enter fullscreen mode</title> <path d="M16 3h6v6h-2V5h-4V3zM2 3h6v2H4v4H2V3zm18 16v-4h2v6h-6v-2h4zM4 19h4v2H2v-6h2v4z"></path></svg> <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 24 24" class="highlight-action crayons-icon highlight-action--fullscreen-off"><title>Exit fullscreen mode</title><path d="M18 7h4v2h-6V3h2v4zM8 9H2V7h4V3h2v6zm10 8v4h-2v-6h6v2h-4zM8 15v6H6v-4H2v-2h6z"></path></svg>

[msw.test.4.tsx](https://gist.github.com/marta-pinkowska/5c6abaeb422dc7b6dbd69004068a6aa2#file-msw-test-4-tsx) hosted with ❤ by GitHub

This has all been fun and games so far, don’t you think?

Going through the setup takes less than an hour. Honestly, going through the [official MSW documentation](https://mswjs.io/docs/getting-started/install) takes less than an hour!

If you’re working on a project that’s not too big, you can stop reading now, pat yourself on the back, and look at all those green check marks on your tests.

## The advanced guide to Mock Service Worker

If you are working on a big application, maybe a robust dashboard, or an e-commerce website, you realize the basic setup presented above won’t cut it.

The handlers array will soon become a 10-thousand line mess. People may add mock servers in random tests, making debugging errors difficult.

My team and I have faced those issues, and here’s how we decided to tackle them.

As stated above, the biggest issue in a big app using MSW is the **handlers' files becoming unreadable**. We tackled this issue by dividing the **handlers’ files into separate, feature-related files**.

Now, instead of a single, long `handlers.js`, we had something in the shape of the following structure:  

```
src
│
└───tools
|   └───jest
│   │   commonMswHandlers.js
│   │   server.js 
|   |   setupTests.js
│
└───featureA
│   │   FeatureA.js
|   |
|   └───__tests__
│       │   FeatureA.test.js
│   │
│   └───msw
│       │   mswHandlers.js
│   
└───featureB
│   │   FeatureB.js
|   |
|   └───__tests__
│       │   FeatureB.test.js
│   │
│   └───msw
│       │   mswHandlers.js
```

<svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 24 24" class="highlight-action crayons-icon highlight-action--fullscreen-on"><title>Enter fullscreen mode</title> <path d="M16 3h6v6h-2V5h-4V3zM2 3h6v2H4v4H2V3zm18 16v-4h2v6h-6v-2h4zM4 19h4v2H2v-6h2v4z"></path></svg> <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 24 24" class="highlight-action crayons-icon highlight-action--fullscreen-off"><title>Exit fullscreen mode</title><path d="M18 7h4v2h-6V3h2v4zM8 9H2V7h4V3h2v6zm10 8v4h-2v-6h6v2h-4zM8 15v6H6v-4H2v-2h6z"></path></svg>

[msw-test.5.tsx](https://gist.github.com/marta-pinkowska/749641d0b87b15cf6fdb994770ff6fee#file-msw-test-5-tsx) hosted with ❤ by GitHub

A few API endpoints which were commonly needed for the tests and did not clearly fit any feature were left in the `commonMswHandlers.js` file.

Once we’ve effectively sliced the `handlers` array, we started wondering how these specific request handlers should be consumed. As we saw above, we could let the test authors import `setupServer` with specific handlers directly in the test files.

However, this quickly became quite verbose. We decided to create helper functions in our `mswHandlers.js` files. An example file would look like this:  

```
// src/FancyHomepageFeature/msw/mswHandlers.js

import { rest } from 'msw';
// import the server created for the entire test suite
// this mock server includes commonMswHandlers
import { server } from '../tools/jest/server';

const homeHandlers = [
  rest.get('https://fancy-app.com/homepage-data', (req, res, ctx) => {
    return res(
      ctx.json({
        contents: [
          {
            banner: 'Fancy Banner'
          },
        ],
      })
    );
  }),
];

export const setupHomeHandlers = () => {
  server.use(...homeHandlers);
};
```

<svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 24 24" class="highlight-action crayons-icon highlight-action--fullscreen-on"><title>Enter fullscreen mode</title> <path d="M16 3h6v6h-2V5h-4V3zM2 3h6v2H4v4H2V3zm18 16v-4h2v6h-6v-2h4zM4 19h4v2H2v-6h2v4z"></path></svg> <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 24 24" class="highlight-action crayons-icon highlight-action--fullscreen-off"><title>Exit fullscreen mode</title><path d="M18 7h4v2h-6V3h2v4zM8 9H2V7h4V3h2v6zm10 8v4h-2v-6h6v2h-4zM8 15v6H6v-4H2v-2h6z"></path></svg>

[msw.test.6.tsx](https://gist.github.com/marta-pinkowska/f8bd761b4db21f1248423bdbfc60b4c0#file-msw-test-6-tsx) hosted with ❤ by GitHub

As you can see in the code above, we’re using the `server.use()` [function](https://mswjs.io/docs/api/setup-server/use). This function prepends request handlers to the current server instance. This means we are using everything that has been set up in the `tools/jest/server.js` file, and we’re adding a specific request handler for a specific URL.

Now, to use this helper function in a test, the test author would need to write something like this:  

```
// src/FancyHomepageFeature/__tests__/FancyHomePage.test.js
import { FancyHomePage } from "../FancyHomePage";
import { setupHomeHandlers } from "./msw/mswHandlers";

describe("<FancyHomePage />", () => {
  beforeEach(() => setupHomeHandlers());
  test("displays homepage data", async () => {
    // Render homepage with backend data
  });
});
```

<svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 24 24" class="highlight-action crayons-icon highlight-action--fullscreen-on"><title>Enter fullscreen mode</title> <path d="M16 3h6v6h-2V5h-4V3zM2 3h6v2H4v4H2V3zm18 16v-4h2v6h-6v-2h4zM4 19h4v2H2v-6h2v4z"></path></svg> <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 24 24" class="highlight-action crayons-icon highlight-action--fullscreen-off"><title>Exit fullscreen mode</title><path d="M18 7h4v2h-6V3h2v4zM8 9H2V7h4V3h2v6zm10 8v4h-2v-6h6v2h-4zM8 15v6H6v-4H2v-2h6z"></path></svg>

[msw.test.7.tsx](https://gist.github.com/marta-pinkowska/f3fbcb053710b376643a98215b7f31e0#file-msw-test-7-tsx) hosted with ❤ by GitHub

The test author must import the server helper and run it in a `beforeEach` block.

Tests in this particular test suite will now look into the `homeHandlers` array when the components need something from the *[https://fancy-app.com/homepage-data](https://fancy-app.com/homepage-data)* endpoint, while other test suites remain unaffected by this change.

## Testing errors

What if you would like to test that your website can handle network errors on specific endpoints?

Let’s add another helper function to the `FancyHomepageFeature/msw/mswHandlers.js file`:  

```
// src/FancyHomepageFeature/msw/mswHandlers.js

import { rest } from 'msw';
import { server } from '../tools/jest/server';

//...

export const setupFaultyHomeHandlers = () => {
  server.use(
    rest.get('https://fancy-app.com/homepage-data', (_req, res, ctx) => {
      return res(ctx.status(200), ctx.json({weirdDataType: 'something went wrong'}));
    }),
  );
};

export const setupFailedHomeHandlers = () => {
  server.use(
    rest.get('https://fancy-app.com/homepage-data', (_req, res) => {
      return res.networkError('Failed to connect');
    })
  );
};
```

<svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 24 24" class="highlight-action crayons-icon highlight-action--fullscreen-on"><title>Enter fullscreen mode</title> <path d="M16 3h6v6h-2V5h-4V3zM2 3h6v2H4v4H2V3zm18 16v-4h2v6h-6v-2h4zM4 19h4v2H2v-6h2v4z"></path></svg> <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 24 24" class="highlight-action crayons-icon highlight-action--fullscreen-off"><title>Exit fullscreen mode</title><path d="M18 7h4v2h-6V3h2v4zM8 9H2V7h4V3h2v6zm10 8v4h-2v-6h6v2h-4zM8 15v6H6v-4H2v-2h6z"></path></svg>

[msw.test.8.tsx](https://gist.github.com/marta-pinkowska/e0c347c0e8bc6b0baf101f799b15c37a#file-msw-test-8-tsx) hosted with ❤ by GitHub

We can add tests for the scenarios described above: **what should happen if the server returns a successful response, but the values are unexpected?** How should the website behave if there is a network error?

Let’s see those tests in action:  

```
// src/FancyHomepageFeature/__tests__/FancyHomePage.test.js
import { FancyHomePage } from "../FancyHomePage";
import {
  setupHomeHandlers,
  setupFaultyHomeHandlers,
  setupFailedHomeHandlers,
} from "./msw/mswHandlers";

describe("<FancyHomePage />", () => {
  beforeEach(() => setupHomeHandlers());
  test("displays homepage data", async () => {
    // Render homepage with backend data
  });
});

describe("<FancyHomePage /> - faulty data", () => {
  beforeEach(() => setupFaultyHomeHandlers());
  test("displays readable error when receiving unexpected data", async () => {
    // Render homepage with error information
  });
});

describe("<FancyHomePage /> - network error", () => {
  beforeEach(() => setupFailedHomeHandlers());
  test("displays network error", async () => {
    // Render homepage with network error information
  });
});
```

<svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 24 24" class="highlight-action crayons-icon highlight-action--fullscreen-on"><title>Enter fullscreen mode</title> <path d="M16 3h6v6h-2V5h-4V3zM2 3h6v2H4v4H2V3zm18 16v-4h2v6h-6v-2h4zM4 19h4v2H2v-6h2v4z"></path></svg> <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 24 24" class="highlight-action crayons-icon highlight-action--fullscreen-off"><title>Exit fullscreen mode</title><path d="M18 7h4v2h-6V3h2v4zM8 9H2V7h4V3h2v6zm10 8v4h-2v-6h6v2h-4zM8 15v6H6v-4H2v-2h6z"></path></svg>

[msw.test.8.tsx](https://gist.github.com/marta-pinkowska/3ec5f99e31331926859d0cb2661dc59b#file-msw-test-8-tsx) hosted with ❤ by GitHub

## Request handler overrides

If you read the MSW documentation carefully, you may be tempted to use the [one-time override](https://mswjs.io/docs/api/setup-server/use#one-time-override) (`res.once()`) for testing errors.

We have tried using this strategy in our codebase. We have found that using `res.once()` is `counter-intuitive to the test author`. If the test setup includes this one-time override, but the test suite has more than one test, only the first test will behave as expected.

It may take the test author quite some time and great detective work to figure out that all his tests were correct, but the MSW handlers were prepared to handle only one request. If I was ever to use `res.once()`, it would only be directly in a test file, where it’s easily visible, and never in setup files.

## Response object overrides

There is another type of override that I do recommend using - **response object overrides**.

Let’s say you would like to test your network request with different, successful responses. You could write separate functions using `server.use()`, but that’s a lot of repetitive work.

One of my colleagues, [Jan Jaworski](https://www.callstack.com/team/jan-jaworski), came up with a very elegant solution to this problem. He created a helper function that could **accept override data and use it in the response object thanks to the spread operator**.

The function looked roughly like this:  

```
export const setupSmartMswHelper = (override = {}) => {
  server.use(
    rest.get("https://fancy-app.com/return-some-data", (req, res, ctx) => {
      return res(
        ctx.status(200),
        ctx.json({
          fancyData: "Im so fancy!",
          moreData: "You already know",
          ...override,
        })
      );
    })
  );
};
```

<svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 24 24" class="highlight-action crayons-icon highlight-action--fullscreen-on"><title>Enter fullscreen mode</title> <path d="M16 3h6v6h-2V5h-4V3zM2 3h6v2H4v4H2V3zm18 16v-4h2v6h-6v-2h4zM4 19h4v2H2v-6h2v4z"></path></svg> <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 24 24" class="highlight-action crayons-icon highlight-action--fullscreen-off"><title>Exit fullscreen mode</title><path d="M18 7h4v2h-6V3h2v4zM8 9H2V7h4V3h2v6zm10 8v4h-2v-6h6v2h-4zM8 15v6H6v-4H2v-2h6z"></path></svg>

[msw.test.9.tsx](https://gist.github.com/marta-pinkowska/8d9e056ca1152fd3ec7d269063263822#file-msw-test-9-tsx) hosted with ❤ by GitHub

Here’s how this helper function would be used in a test:  

```
// src/FancyHomepageFeature/__tests__/FancyHomePage.test.js
//...
test("handles updated data", async () => {
  setupSmartMswHelper({
    moreData: "Cant you taste this gold?",
  });
  //...
});
```

<svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 24 24" class="highlight-action crayons-icon highlight-action--fullscreen-on"><title>Enter fullscreen mode</title> <path d="M16 3h6v6h-2V5h-4V3zM2 3h6v2H4v4H2V3zm18 16v-4h2v6h-6v-2h4zM4 19h4v2H2v-6h2v4z"></path></svg> <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 24 24" class="highlight-action crayons-icon highlight-action--fullscreen-off"><title>Exit fullscreen mode</title><path d="M18 7h4v2h-6V3h2v4zM8 9H2V7h4V3h2v6zm10 8v4h-2v-6h6v2h-4zM8 15v6H6v-4H2v-2h6z"></path></svg>

[msw.test.10.tsx](https://gist.github.com/marta-pinkowska/eeead2f44adf328dad24b91e5666671f#file-msw-test-10-tsx) hosted with ❤ by GitHub

This strategy is especially useful for **big data objects we don’t want to re-type multiple times**.

## Testing errors - bonus content

Since we started testing network errors, we discovered the terminal output got polluted with many `console.error` messages. These error messages were expected, and we didn’t want them hiding real (as in UNexpected) errors.

We decided to add a `console.error` override in the Jest setup file:  

```
// tools/jest/setupTests.js
const error = console.error;

console.error = (...args) =>
  // Suppress error messages regarding network error in tests
  /Error: Request failed with status code 500/m.test(
    args[0]
  )
    ? void 0
    : error(...args);
```

<svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 24 24" class="highlight-action crayons-icon highlight-action--fullscreen-on"><title>Enter fullscreen mode</title> <path d="M16 3h6v6h-2V5h-4V3zM2 3h6v2H4v4H2V3zm18 16v-4h2v6h-6v-2h4zM4 19h4v2H2v-6h2v4z"></path></svg> <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 24 24" class="highlight-action crayons-icon highlight-action--fullscreen-off"><title>Exit fullscreen mode</title><path d="M18 7h4v2h-6V3h2v4zM8 9H2V7h4V3h2v6zm10 8v4h-2v-6h6v2h-4zM8 15v6H6v-4H2v-2h6z"></path></svg>

[msw.test.11.tsx](https://gist.github.com/marta-pinkowska/4130ca8d7336d063e41f8cab25f83496#file-msw-test-11-tsx) hosted with ❤ by GitHub

Thanks to this little function, we hid only the specific console errors we were sure about.

## Summary

If you were to take away only one thing from this blog post, I sincerely hope it would be the notion that **MSW is a great tool worth trying, even in a big project**.

The solutions I described worked great in a real project. They may not be 100% ideal for your needs, but I hope you find some inspiration here to create **the best, most comfortable, and developer-friendly test setup possible**. At the end of the day, we all want to feel like the people at the end of infomercials, no?

*This article was originally published at [callstack.com](https://www.callstack.com/blog/guide-to-mock-service-worker-msw) on September 27, 2022.*