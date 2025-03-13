---
author:
  - "[[GitHub]]"
created: 2025-03-12
source: https://github.com/jestjs/jest
tags:
  - testing-framework/javascript
  - js
---
- [[#🃏 Delightful JavaScript Testing|🃏 Delightful JavaScript Testing]]
- [[#Table of Contents|Table of Contents]]
- [[#Getting Started|Getting Started]]
- [[#Running from command line|Running from command line]]
- [[#Additional Configuration|Additional Configuration]]
	- [[#Additional Configuration#Generate a basic configuration file|Generate a basic configuration file]]
	- [[#Additional Configuration#Using Babel|Using Babel]]
	- [[#Additional Configuration#Using webpack|Using webpack]]
	- [[#Additional Configuration#Using Vite|Using Vite]]
	- [[#Additional Configuration#Using Parcel|Using Parcel]]
	- [[#Additional Configuration#Using TypeScript|Using TypeScript]]
- [[#Documentation|Documentation]]
- [[#Badge|Badge]]
- [[#Contributing|Contributing]]
	- [[#Contributing#[Code of Conduct](https://code.facebook.com/codeofconduct)|[Code of Conduct](https://code.facebook.com/codeofconduct)]]
	- [[#Contributing#[Contributing Guide](https://github.com/jestjs/jest/blob/main/CONTRIBUTING.md)|[Contributing Guide](https://github.com/jestjs/jest/blob/main/CONTRIBUTING.md)]]
	- [[#Contributing#[Good First Issues](https://github.com/jestjs/jest/labels/good%20first%20issue)|[Good First Issues](https://github.com/jestjs/jest/labels/good%20first%20issue)]]
- [[#Credits|Credits]]
	- [[#Credits#[Backers](https://opencollective.com/jest#backer)|[Backers](https://opencollective.com/jest#backer)]]
	- [[#Credits#[Sponsors](https://opencollective.com/jest#sponsor)|[Sponsors](https://opencollective.com/jest#sponsor)]]
- [[#License|License]]
- [[#Copyright|Copyright]]

## 🃏 Delightful JavaScript Testing

**👩🏻‍💻 Developer Ready**: A comprehensive JavaScript testing solution. Works out of the box for most JavaScript projects.

**🏃🏽 Instant Feedback**: Fast, interactive watch mode only runs test files related to changed files.

**📸 Snapshot Testing**: Capture snapshots of large objects to simplify testing and to analyze how they change over time.

*See more on [jestjs.io](https://jestjs.io/)*
## Getting Started

Install Jest using [`yarn`](https://yarnpkg.com/en/package/jest):

```
yarn add --dev jest
```

Or [`npm`](https://www.npmjs.com/package/jest):

```
npm install --save-dev jest
```

Note: Jest documentation uses `yarn` commands, but `npm` will also work. You can compare `yarn` and `npm` commands in the [yarn docs, here](https://yarnpkg.com/en/docs/migrating-from-npm#toc-cli-commands-comparison).

Let's get started by writing a test for a hypothetical function that adds two numbers. First, create a `sum.js` file:

```
function sum(a, b) {
  return a + b;
}
module.exports = sum;
```

Then, create a file named `sum.test.js`. This will contain our actual test:

```
const sum = require('./sum');

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});
```

Add the following section to your `package.json`:

```
{
  "scripts": {
    "test": "jest"
  }
}
```

Finally, run `yarn test` or `npm test` and Jest will print this message:

```
PASS  ./sum.test.js
✓ adds 1 + 2 to equal 3 (5ms)
```

**You just successfully wrote your first test using Jest!**

This test used `expect` and `toBe` to test that two values were exactly identical. To learn about the other things that Jest can test, see [Using Matchers](https://jestjs.io/docs/using-matchers).

## Running from command line

You can run Jest directly from the CLI (if it's globally available in your `PATH`, e.g. by `yarn global add jest` or `npm install jest --global`) with a variety of useful options.

Here's how to run Jest on files matching `my-test`, using `config.json` as a configuration file and display a native OS notification after the run:

```
jest my-test --notify --config=config.json
```

If you'd like to learn more about running `jest` through the command line, take a look at the [Jest CLI Options](https://jestjs.io/docs/cli) page.

## Additional Configuration

### Generate a basic configuration file

Based on your project, Jest will ask you a few questions and will create a basic configuration file with a short description for each option:

```
yarn create jest
```

### Using Babel

To use [Babel](https://babeljs.io/), install required dependencies via `yarn`:

```
yarn add --dev babel-jest @babel/core @babel/preset-env
```

Configure Babel to target your current version of Node by creating a `babel.config.js` file in the root of your project:

```
// babel.config.js
module.exports = {
  presets: [['@babel/preset-env', {targets: {node: 'current'}}]],
};
```

The ideal configuration for Babel will depend on your project. See [Babel's docs](https://babeljs.io/docs/en/) for more details.

**Making your Babel config jest-aware**

Jest will set `process.env.NODE_ENV` to `'test'` if it's not set to something else. You can use that in your configuration to conditionally setup only the compilation needed for Jest, e.g.

```
// babel.config.js
module.exports = api => {
  const isTest = api.env('test');
  // You can use isTest to determine what presets and plugins to use.

  return {
    // ...
  };
};
```

> Note: `babel-jest` is automatically installed when installing Jest and will automatically transform files if a babel configuration exists in your project. To avoid this behavior, you can explicitly reset the `transform` configuration option:

```
// jest.config.js
module.exports = {
  transform: {},
};
```

### Using webpack

Jest can be used in projects that use [webpack](https://webpack.js.org/) to manage assets, styles, and compilation. webpack does offer some unique challenges over other tools. Refer to the [webpack guide](https://jestjs.io/docs/webpack) to get started.

### Using Vite

Jest can be used in projects that use [vite](https://vitejs.dev/) to serves source code over native ESM to provide some frontend tooling, vite is an opinionated tool and does offer some out-of-the box workflows. Jest is not fully supported by vite due to how the [plugin system](https://github.com/vitejs/vite/issues/1955#issuecomment-776009094) from vite works, but there is some working examples for first-class jest integration using the `vite-jest`, since this is not fully supported, you might as well read the [limitation of the `vite-jest`](https://github.com/sodatea/vite-jest/tree/main/packages/vite-jest#limitations-and-differences-with-commonjs-tests). Refer to the [vite guide](https://vitejs.dev/guide/) to get started.

### Using Parcel

Jest can be used in projects that use [parcel-bundler](https://parceljs.org/) to manage assets, styles, and compilation similar to webpack. Parcel requires zero configuration. Refer to the official [docs](https://parceljs.org/docs/) to get started.

### Using TypeScript

Jest supports TypeScript, via Babel. First, make sure you followed the instructions on [using Babel](https://github.com/jestjs/#using-babel) above. Next, install the `@babel/preset-typescript` via `yarn`:

```
yarn add --dev @babel/preset-typescript
```

Then add `@babel/preset-typescript` to the list of presets in your `babel.config.js`.

```
// babel.config.js
module.exports = {
  presets: [
    ['@babel/preset-env', {targets: {node: 'current'}}],
+    '@babel/preset-typescript',
  ],
};
```

However, there are some [caveats](https://babeljs.io/docs/en/babel-plugin-transform-typescript#caveats) to using TypeScript with Babel. Because TypeScript support in Babel is purely transpilation, Jest will not type-check your tests as they are run. If you want that, you can use [ts-jest](https://github.com/kulshekhar/ts-jest) instead, or just run the TypeScript compiler [tsc](https://www.typescriptlang.org/docs/handbook/compiler-options.html) separately (or as part of your build process).

## Documentation

Learn more about using [Jest on the official site!](https://jestjs.io/)

- [Getting Started](https://jestjs.io/docs/getting-started)
- [Guides](https://jestjs.io/docs/snapshot-testing)
- [API Reference](https://jestjs.io/docs/api)
- [Configuring Jest](https://jestjs.io/docs/configuration)

## Badge

Show the world you're using *Jest* `→`

```
[![tested with jest](https://img.shields.io/badge/tested_with-jest-99424f.svg?logo=jest)](https://github.com/jestjs/jest)
[![jest tested](https://img.shields.io/badge/Jest-tested-eee.svg?logo=jest&labelColor=99424f)](https://github.com/jestjs/jest)
[![jest](https://jestjs.io/img/jest-badge.svg)](https://github.com/jestjs/jest)
```

## Contributing

Development of Jest happens in the open on GitHub, and we are grateful to the community for contributing bugfixes and improvements. Read below to learn how you can take part in improving Jest.

### [Code of Conduct](https://code.facebook.com/codeofconduct)

Facebook has adopted a Code of Conduct that we expect project participants to adhere to. Please read [the full text](https://code.facebook.com/codeofconduct) so that you can understand what actions will and will not be tolerated.

### [Contributing Guide](https://github.com/jestjs/jest/blob/main/CONTRIBUTING.md)

Read our [contributing guide](https://github.com/jestjs/jest/blob/main/CONTRIBUTING.md) to learn about our development process, how to propose bugfixes and improvements, and how to build and test your changes to Jest.

### [Good First Issues](https://github.com/jestjs/jest/labels/good%20first%20issue)

To help you get your feet wet and get you familiar with our contribution process, we have a list of [good first issues](https://github.com/jestjs/jest/labels/good%20first%20issue) that contain bugs which have a relatively limited scope. This is a great place to get started.

## Credits

This project exists thanks to all the people who [contribute](https://github.com/jestjs/jest/blob/main/CONTRIBUTING.md).

[![](https://camo.githubusercontent.com/b41666a8a64d0a4ad19f6a93f03413cc38b051ecc06fe38b9b96aaad3fa0352d/68747470733a2f2f6f70656e636f6c6c6563746976652e636f6d2f6a6573742f636f6e7472696275746f72732e7376673f77696474683d38393026627574746f6e3d66616c7365)](https://github.com/jestjs/jest/graphs/contributors)

### [Backers](https://opencollective.com/jest#backer)

Thank you to all our backers! 🙏

[![](https://camo.githubusercontent.com/12cd938f0f50aec4c65688e4d07e649ca34bcd5dad0393166ec4c2ff90fbb171/68747470733a2f2f6f70656e636f6c6c6563746976652e636f6d2f6a6573742f6261636b6572732e7376673f77696474683d383930)](https://opencollective.com/jest#backers)

### [Sponsors](https://opencollective.com/jest#sponsor)

Support this project by becoming a sponsor. Your logo will show up here with a link to your website.

[![](https://camo.githubusercontent.com/b505eb0925e8ae7a85a104c56a3dfc4ef50df52bcf874ed7ae71c0098aae7685/68747470733a2f2f6f70656e636f6c6c6563746976652e636f6d2f6a6573742f73706f6e736f722f302f6176617461722e737667)](https://opencollective.com/jest/sponsor/0/website) [![](https://camo.githubusercontent.com/a800347c9790002b54f793e71358e4296520783593cf5dc2882499acb68f166e/68747470733a2f2f6f70656e636f6c6c6563746976652e636f6d2f6a6573742f73706f6e736f722f312f6176617461722e737667)](https://opencollective.com/jest/sponsor/1/website) [![](https://camo.githubusercontent.com/aeba7fc76df1ba3a04a90c71504a008fc8bf1cf16c980b99435541f7d534b7dd/68747470733a2f2f6f70656e636f6c6c6563746976652e636f6d2f6a6573742f73706f6e736f722f322f6176617461722e737667)](https://opencollective.com/jest/sponsor/2/website) [![](https://camo.githubusercontent.com/f0cf906cbb6536fa6d095976dc596d1d220eb05a3f61cae6c92896f05a4116c3/68747470733a2f2f6f70656e636f6c6c6563746976652e636f6d2f6a6573742f73706f6e736f722f332f6176617461722e737667)](https://opencollective.com/jest/sponsor/3/website) [![](https://camo.githubusercontent.com/ce057d33b499d791f97e55b51e3c5d3b457efd4b0c386e2d6ff911f438b6fce2/68747470733a2f2f6f70656e636f6c6c6563746976652e636f6d2f6a6573742f73706f6e736f722f342f6176617461722e737667)](https://opencollective.com/jest/sponsor/4/website) [![](https://camo.githubusercontent.com/4de95e30658da14bff1116dfcde107d82ddd5beaa9db998be4d28fcfaac6f6a6/68747470733a2f2f6f70656e636f6c6c6563746976652e636f6d2f6a6573742f73706f6e736f722f352f6176617461722e737667)](https://opencollective.com/jest/sponsor/5/website) [![](https://camo.githubusercontent.com/c333b73b8b0527324d1dd320060c9e24b1cc81b7116ddd3f1eab5aca89d3b0bb/68747470733a2f2f6f70656e636f6c6c6563746976652e636f6d2f6a6573742f73706f6e736f722f362f6176617461722e737667)](https://opencollective.com/jest/sponsor/6/website) [![](https://camo.githubusercontent.com/1b3ad8635ea4093dd7ad2ae705b4e4c77126f8a76827ae058235cad35842ef42/68747470733a2f2f6f70656e636f6c6c6563746976652e636f6d2f6a6573742f73706f6e736f722f372f6176617461722e737667)](https://opencollective.com/jest/sponsor/7/website) [![](https://camo.githubusercontent.com/024e99b30afab444a276a233004a009135c280b624a885f37def685edbb7b69e/68747470733a2f2f6f70656e636f6c6c6563746976652e636f6d2f6a6573742f73706f6e736f722f382f6176617461722e737667)](https://opencollective.com/jest/sponsor/8/website) [![](https://camo.githubusercontent.com/5450b78c18df99f23ae4d7c7dfe75d48140b898f54dfd15187ed68db3c263462/68747470733a2f2f6f70656e636f6c6c6563746976652e636f6d2f6a6573742f73706f6e736f722f392f6176617461722e737667)](https://opencollective.com/jest/sponsor/9/website)

## License

Jest is [MIT licensed](https://github.com/jestjs/jest/blob/main/LICENSE).

## Copyright

Copyright Contributors to the Jest project.