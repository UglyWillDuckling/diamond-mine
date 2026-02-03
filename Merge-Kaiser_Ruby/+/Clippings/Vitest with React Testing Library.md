---
source: https://www.robinwieruch.de/vitest-react-testing-library/
author:
  - "[[Robin Wieruch]]"
published: 2022-10-03
created: 2025-04-08
tags:
  - howto/react/test
  - howto/vitest
about:
  - "[[vitest]]"
---
A brief walkthrough on how to set up React Testing Library in Vitest when using Vite. The tutorial assumes that you have already created a React project with [Vite](https://vitejs.dev/) either in JavaScript or TypeScript. Next, install [Vitest](https://vitest.dev/) on the command line:

```
npm install vitest --save-dev
```

Then in your package.json file, add another script which will run the tests eventually:

```
{
  ...
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "test": "vitest",
    "preview": "vite preview"
  },
  ...
}
```

Create a test file somewhere in your project with the suffix *test*, e.g. *App.test.jsx*, and give it the following content:

```
import { describe, it, expect } from 'vitest';

describe('something truthy and falsy', () => {
  it('true to be true', () => {
    expect(true).toBe(true);
  });

  it('false to be false', () => {
    expect(false).toBe(false);
  });
});
```

You can see that Vitest comes with test suites (here: `describe` ), test cases (here: `it` ) and assertions (here: `expect().toBe()` ). If you have been using Jest before, you should be familiar with it, because Vitest acts as replacement for it.

You can already run your tests on the command line with `npm run test`. They should turn out green.

Since React Testing Library tests React components, we need to enable HTML in Vitest with a library like [jsdom](https://github.com/jsdom/jsdom). First, install the library on the command line:

```
npm install jsdom --save-dev
```

Second, include it to the Vite configuration file:

```
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',
  },
});
```

Third, install React Testing Library on the command line:

```
npm install @testing-library/react @testing-library/jest-dom --save-dev
```

Fourth, add a test setup file in *tests/setup.js* and give it the following implementation:

```
import { expect, afterEach } from 'vitest';
import { cleanup } from '@testing-library/react';
import * as matchers from "@testing-library/jest-dom/matchers";

expect.extend(matchers);

afterEach(() => {
  cleanup();
});
```

And last, include this new test setup file in Vite's configuration file. In addition, make all imports from Vitest global, so that you don't need to perform these imports (e.g. `expect` ) in each file manually anymore:

```
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './tests/setup.js',
  },
});
```

That's it. You can render React components in Vitest now:

```
import { render, screen } from '@testing-library/react';

import App from './App';

describe('App', () => {
  it('renders headline', () => {
    render(<App title="React" />);

    screen.debug();

    // check if App components renders headline
  });
});
```

Vitest is a great replacement for Jest, because it is faster, more modern, and gains lots of traction these days.