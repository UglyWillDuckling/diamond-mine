---
source: https://github.com/moetelo/twiggy
author:
  - "[[moetelo]]"
published:
created: 2025-06-01
tags:
  - lsp
---
[Skip to content](https://github.com/moetelo/#start-of-content)

**[twiggy](https://github.com/moetelo/twiggy)** Public

- [Fork 6 Fork your own copy of moetelo/twiggy](https://github.com/moetelo/twiggy/fork)

Twig language support for VS Code and Neovim.

[marketplace.visualstudio.com/items?itemName=moetelo.twiggy](https://marketplace.visualstudio.com/items?itemName=moetelo.twiggy "https://marketplace.visualstudio.com/items?itemName=moetelo.twiggy")

### License

[MPL-2.0 license](https://github.com/moetelo/twiggy/blob/master/LICENSE)

[Open in github.dev](https://github.dev/) [Open in a new github.dev tab](https://github.dev/) [Open in codespace](https://github.com/codespaces/new/moetelo/twiggy?resume=1)

## moetelo/twiggy

## Add file

## Twiggy

VSCode Marketplace: [Twiggy](https://marketplace.visualstudio.com/items?itemName=moetelo.twiggy)

This is a fork of [kaermorchen/twig-language-server (Modern Twig)](https://github.com/kaermorchen/twig-language-server).

## Definition

[![[~/×/23f1c371f185e8ef96a934788e6b8ea1_MD5.gif]]](https://private-user-images.githubusercontent.com/17011936/273576583-e24c1d26-1606-4354-a5b4-9d28976c983b.gif?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NDg3NzU3NzgsIm5iZiI6MTc0ODc3NTQ3OCwicGF0aCI6Ii8xNzAxMTkzNi8yNzM1NzY1ODMtZTI0YzFkMjYtMTYwNi00MzU0LWE1YjQtOWQyODk3NmM5ODNiLmdpZj9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNTA2MDElMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjUwNjAxVDEwNTc1OFomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTM0NzA1NmU4YmIzN2ExZDRkNGNlMGUwZjk5Y2E3YjRhMDM0ZTcxYTkxMmU5MWEwNTFjNjcxMTA4ODUxMjdkODgmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0In0.qf-EJSZM5UmrQ-gkfENKLWBlE06o1JkVnRYAmJwnoNc) [![[~/×/dcb3aeb0561b592f69d5bef9c99516db_MD5.gif]]](https://private-user-images.githubusercontent.com/17011936/273576577-d192a359-d2c1-471b-bd08-79c847cfeb9e.gif?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NDg3NzU3NzgsIm5iZiI6MTc0ODc3NTQ3OCwicGF0aCI6Ii8xNzAxMTkzNi8yNzM1NzY1NzctZDE5MmEzNTktZDJjMS00NzFiLWJkMDgtNzljODQ3Y2ZlYjllLmdpZj9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNTA2MDElMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjUwNjAxVDEwNTc1OFomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPWFkMmVhMTYxNzJmMDJlYjI1NjZhY2Q0NjVmZGIxOGJiNjhhYmE1YTg5M2RmYjgxZTc2ZGFhZGZjMDQyYWQ5ZjgmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0In0.93Smt8_07Sz99jHQ3yzt4NcQ1nEgyrFQ6Ix4N7aVUnI)

## Completion

[![[~/×/676afa7c8a163c4be8fedeb9ced87474_MD5.gif]]](https://private-user-images.githubusercontent.com/17011936/273576588-b5a7b411-b7c3-4411-b4bb-c3a244dc71f6.gif?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NDg3NzU3NzgsIm5iZiI6MTc0ODc3NTQ3OCwicGF0aCI6Ii8xNzAxMTkzNi8yNzM1NzY1ODgtYjVhN2I0MTEtYjdjMy00NDExLWI0YmItYzNhMjQ0ZGM3MWY2LmdpZj9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNTA2MDElMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjUwNjAxVDEwNTc1OFomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTI1YWMwYzc0NDE0Yjc1ZTRlZTE5OGZiNjRkMDE2NTM0OWU0OWFjZGFjNzIzNjk0MGNmNjg1NmFkYzdjMTIyMzcmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0In0.ONF6ntTRphDfPF-qi1afb4cRAoXq6nom68IErGr0LHw)

Tip

For better completion in Symfony or Craft CMS, configure `twiggy.framework` and follow the extension output (`Twiggy Language Server`).

## Inlay hints

[![[~/×/cb188d6db87c0e4380799a6e27eb2494_MD5.png]]](https://private-user-images.githubusercontent.com/17011936/274150756-ae833425-06e9-4c55-84d2-47b152bae51a.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NDg3NzU3NzgsIm5iZiI6MTc0ODc3NTQ3OCwicGF0aCI6Ii8xNzAxMTkzNi8yNzQxNTA3NTYtYWU4MzM0MjUtMDZlOS00YzU1LTg0ZDItNDdiMTUyYmFlNTFhLnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNTA2MDElMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjUwNjAxVDEwNTc1OFomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPThiMDE5NWMzNTliZmQ4ZjA5MGE1MzI4NTg4MjliODRhM2QwYWRhZDZkYjYxMWNiMmZmMjFmMjRmYTYyZDdjNDcmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0In0.ueSny80ml6lcKUEwCz-QJ85mW4iEYcrFhNIFyPbYqOM)

## Setup

## VS Code

1. Open Command Palette (`Ctrl+P`), type `ext install moetelo.twiggy` and press `Enter`.
2. For Symfony project, set `twiggy.phpExecutable` and `twiggy.symfonyConsolePath` in the VS Code settings.
3. Check the extension output (`Twiggy Language Server`) for errors.

[Submit new issue](https://github.com/moetelo/twiggy/issues/new) if you have any problems or the feature you want is missing.

## Neovim

Please refer to [this reply](https://github.com/moetelo/twiggy/issues/12#issuecomment-2044309054) and [the instructions from neovim/nvim-lspconfig](https://github.com/neovim/nvim-lspconfig/blob/master/doc/configs.md#twiggy_language_server).

## Sublime Text

Follow [instructions](https://github.com/sublimelsp/LSP-twiggy) ready-to-use client implementation maintained by the community.

## Development

1. Install [pnpm](https://pnpm.io/installation).
2. `pnpm install` in the project dir.
3. Press F5 in VS Code to start debugging.

#### Monorepo

- [Twiggy Language Server](https://github.com/moetelo/twiggy/blob/master/packages/language-server)
- [VSCode Twig extension](https://github.com/moetelo/twiggy/blob/master/packages/vscode)
- [tree-sitter-twig](https://github.com/moetelo/twiggy/blob/master/packages/tree-sitter-twig)

## Languages

- [TypeScript 87.0%](https://github.com/moetelo/twiggy/search?l=typescript)
- [JavaScript 8.2%](https://github.com/moetelo/twiggy/search?l=javascript)
- [PHP 4.3%](https://github.com/moetelo/twiggy/search?l=php)
- Other 0.5%