---
source: https://github.com/evanw/esbuild
author: 
created: 2025-04-08
tags:
  - tool/javascript
  - tool/web
  - git-repo
---
![esbuild: An extremely fast JavaScript bundler](https://github.com/evanw/esbuild/raw/main/images/wordmark-light.svg)  
[Website](https://esbuild.github.io/) | [Getting started](https://esbuild.github.io/getting-started/) | [Documentation](https://esbuild.github.io/api/) | [Plugins](https://esbuild.github.io/plugins/) | [FAQ](https://esbuild.github.io/faq/)

## Why?

Our current build tools for the web are 10-100x slower than they could be:

  ![Bar chart with benchmark results](https://github.com/evanw/esbuild/raw/main/images/benchmark-light.svg)

The main goal of the esbuild bundler project is to bring about a new era of build tool performance, and create an easy-to-use modern bundler along the way.

Major features:

- Extreme speed without needing a cache
- [JavaScript](https://esbuild.github.io/content-types/#javascript), [CSS](https://esbuild.github.io/content-types/#css), [TypeScript](https://esbuild.github.io/content-types/#typescript), and [JSX](https://esbuild.github.io/content-types/#jsx) built-in
- A straightforward [API](https://esbuild.github.io/api/) for CLI, JS, and Go
- Bundles ESM and CommonJS modules
- Bundles CSS including [CSS modules](https://github.com/css-modules/css-modules)
- Tree shaking, [minification](https://esbuild.github.io/api/#minify), and [source maps](https://esbuild.github.io/api/#sourcemap)
- [Local server](https://esbuild.github.io/api/#serve), [watch mode](https://esbuild.github.io/api/#watch), and [plugins](https://esbuild.github.io/plugins/)

Check out the [getting started](https://esbuild.github.io/getting-started/) instructions if you want to give esbuild a try.