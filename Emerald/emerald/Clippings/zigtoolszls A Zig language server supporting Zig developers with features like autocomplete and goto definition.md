---
author:
  - "[[GitHub]]"
created: 2025-03-28
published: 
source: https://github.com/zigtools/zls
tags:
  - tools/lsp
---
[![ZLS Logo](https://raw.githubusercontent.com/zigtools/zls/master/.github/assets/zls-opt.svg)](https://raw.githubusercontent.com/zigtools/zls/master/.github/assets/zls-opt.svg)

**Need support? Wanna help out? Join our [Discord server](https://discord.gg/5m5U3qpUhk)!**

ZLS is a non-official implementation of the [Language Server Protocol](https://microsoft.github.io/language-server-protocol/) for [Zig](https://ziglang.org/) in Zig. It provides developers with IDE [features](https://github.com/zigtools/#features) in their editor.

## Installation

### See the Installation Guide for editor and binary installation instructions.

### From Source

Building ZLS requires [a build of Zig master](https://ziglang.org/download/).

```
git clone https://github.com/zigtools/zls
cd zls
zig build -Doptimize=ReleaseSafe
```

## Features

ZLS supports most language features, including simple type function support, using namespace, payload capture type resolution, custom packages, cImport and others. Support for comptime and semantic analysis is Work-in-Progress.

The following LSP features are supported:

- Completions
- Hover
- Goto definition/declaration
- Document symbols
- Find references
- Rename symbol
- Formatting using `zig fmt`
- Semantic token highlighting
- Inlay hints
- Code actions
- Selection ranges
- Folding regions

## Related Projects

- [`sublime-zig-language` by @prime31](https://github.com/prime31/sublime-zig-language)
	- Supports basic language features
	- Uses data provided by `src/data` to perform builtin autocompletion
- [`zig-lsp` by @xackus](https://github.com/xackus/zig-lsp)
	- Inspiration for ZLS
- [`known-folders` by @ziglibs](https://github.com/ziglibs/known-folders)
	- Provides API to access known folders on Linux, Windows and Mac OS
- [`zls` by @zigtools](https://github.com/zigtools/zls)
	- Used by many ZLS developers to more efficiently work on ZLS

## Quick Thanks:)

We'd like to take a second to thank all our awesome [contributors](https://github.com/zigtools/zls/graphs/contributors) and donators/backers/sponsors; if you have time or money to spare, consider partaking in either of these options - they help keep ZLS awesome for everyone!

[![OpenCollective Backers](https://camo.githubusercontent.com/fc30078fdc0a38210710169f58a6a501c0a4c51876f573822c7cca68990b738b/68747470733a2f2f6f70656e636f6c6c6563746976652e636f6d2f7a6967746f6f6c732f6261636b6572732e7376673f77696474683d383930266c696d69743d31303030)](https://opencollective.com/zigtools#category-CONTRIBUTE)