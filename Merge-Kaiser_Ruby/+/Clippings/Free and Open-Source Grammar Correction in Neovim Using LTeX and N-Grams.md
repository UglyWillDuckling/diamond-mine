---
source: https://medium.com/@Erik_Krieg/free-and-open-source-grammar-correction-in-neovim-using-ltex-and-n-grams-dea9d10bc964
author:
  - "[[Erik Krieg]]"
published: 2024-01-14
created: 2025-11-09
tags:
  - howto/nvim/ltex
---

![[~/×/a2b3458600760801fa3f9f95f4ba98ca_MD5.webp]]

After having devoted so much time learning and configuring Neovim, I take psychic damage each time I find myself writing more than a few sentences outside my terminal. When I’ve written outside Neovim, it’s generally been because I’m writing docs, notes, or blogging and had neglected to configure tooling to make this nice in my editor. Maybe you can relate; if so, I hope that after this you too never need to `:q`.

More specifically, we’re going to make writing markup documents, like Markdown, LaTex, and more, better by enabling grammar correction with LTeX Language Server using Neovim’s LSP. We’ll download a dataset of N-Grams to make LTeX more effective. What we’ll end up with is an open-source solution for grammar correction that works entirely offline.

I’ll also spend some time at the end to demystify LTeX and N-Grams a bit.

## Configure LTeX Language Server

Besides [Neovim](https://github.com/neovim/neovim), the requirements for this are:

\- [nvim-lspconfig](https://github.com/neovim/nvim-lspconfig/tree/master#install)  
\- [LTeX Language Server](https://valentjn.github.io/ltex/installation-usage.html) (`ltex-ls`)  
\- [N-Gram data](https://languagetool.org/download/ngram-data/)

Getting started with `nvim-lspconfig` is out of scope, but if you need guidance, I’ve found [this tutorial that covers the basics](https://medium.com/gitconnected/neovim-lsp-basics-b0ade96fe96d), but this is just one of many excellent tutorials you might find on the matter.

For `ltex-ls` you’ll be installing a binary that will eventually be executed by `nvim-lspconfig` once we have it set up. Install `ltex-ls` using your preferred package management tool. For me, that is [Nix](https://nix.dev/), but for Neovim packages in particular, [mason.nvim](https://github.com/williamboman/mason.nvim) is a popular option.

Once these are installed, [a basic setup](https://github.com/neovim/nvim-lspconfig/blob/master/doc/server_configurations.md#ltex) could be as simple as:

```c
require(“lspconfig”).ltex.setup()
```

But I want to include a few settings for `ltex-ls` that improve grammar error detection. I also want to make sure some of my LSP customizations are used.

```c
require("lspconfig").ltex.setup(config({
  settings = {
    ltex = {
      language = "en",
      additionalRules = {
        languageModel = "~/models/ngrams/",
      },
    },
  },
}))
```

Here’s what’s going on:

- `config` function mutates the table and [sets some shared LSP configurations that I like](https://github.com/erikkrieg/envim/blob/fbe5a6a7aa6145c7ec636991eb643b4d5d37972a/nvim/lua/plugins/lsp/servers/config.lua). You don’t really need to do this.
- I set [language to English](https://valentjn.github.io/ltex/settings.html#ltexlanguage); pretty self-explanatory, I think.
- Set additional rules for [using an N-Grams dataset](https://valentjn.github.io/ltex/settings.html#ltexadditionalruleslanguagemodel) by providing a path to where we’ll download the data to.

Even if the N-Grams model has not been downloaded yet, this configuration should still work. If we open up a new Markdown file and start writing there shouldn’t be any LSP errors, we just won’t have the full-fledged experience yet.

Luckily it’s not hard to change that, but it might take a few minutes. We’ll want to download the [N-Gram data](https://languagetool.org/download/ngram-data/) for the languages we expect to work with and unzip it to `~/models/ngrams`. We could put this anywhere, but this is the path that I ended up using. Just a heads-up, the English model is about 8G zipped and 14G unzipped.

The resulting folder structure looks like this:

```c
models
└── ngrams
   └── en
      ├── 1grams
      ├── 2grams
      └── 3grams
```

Okay, it *should* be doing its thing now. Try doing some writing or opening up an existing Markdown file you have on hand. Get a feel for it and check out the other [available settings for ltex-ls](https://valentjn.github.io/ltex/settings.html) and find the right config for you!

Here are a couple examples of how it’s looking in my Neovim configuration.

**Inlay code hint**

![[~/×/2136b6bfd670edd94e5de7beaead4487_MD5.webp]]

**Code action preview**

![[~/×/9a0485c277fa999ceeafd8545ff63b1a_MD5.webp]]

This will of course vary depending on your theme, LSP configuration and additional UI plugins. *For the previews I’m using* [*actions-preview.nvim*](https://github.com/aznhe21/actions-preview.nvim)*.*

## How does this work?

When I first set LTeX LS up with N-Grams I was glad that it was so easy, but I also found it pretty mysterious. How does this work? What tools are involved?

Going through LTeX’s docs I learned that:

- LTeX comes with a built-in version of another tool called [LangaugeTool](https://dev.languagetool.org/) (LT).
- LTeX primarily acts as an interface for LT so that it can fulfill the LSP requirements.
- LTeX can be [configured to instead use a remote LT server](https://valentjn.github.io/ltex/settings.html#ltexlanguagetoolhttpserveruri) ([languagetool.org offers a premium SaaS](https://languagetool.org/)).
- LT can be enhanced with [additional rules, of which N-Grams is but one](https://valentjn.github.io/ltex/settings.html#ltexadditionalruleslanguagemodel).

This satisfied most of my immediate curiosity about LTeX LS, but what about N-Grams? What are they, and how do they help discover grammar mistakes?

### What are N-Grams?

N-Grams are a continuous sequence of `n` tokens, where tokens could be words or syllables (or other subdivisions of text). Here are a few examples derived from *What are N-Grams*:

- 1-gram or *unigram*: `What`, `are`, `N-Grams`
- 2-gram or *bigram*: `What are`, `are N-Grams`
- 3-gram or *trigram*: `What are N-Grams`
- etc…

There are models created from large collections of N-Grams that include the frequency at which distinct N-Grams occur within some corpus. With this, you might be able to determine whether `What are N-Grams?` or `That are N-Grams?` is more likely. If something is very unlikely, perhaps it is not grammatically correct. This is how I’m understanding how N-Grams could be used, at least.

Further digging revealed some LanguageTool docs that explain how LT [uses N-Gram models to improve the tool’s ability to identify errors](https://dev.languagetool.org/finding-errors-using-n-gram-data.html).

## How effective is LTeX & N-Grams?

This is what I’m left thinking about. This article is the first writing I’ve done using these tools. I can attest that they do find grammar mistakes, and I really like that it uses open-sourced parts and works completely offline (I actually wrote part of this article during a power outage without the Internet).

But how good of a job does this do compared to other services, like Grammarly? Or even the premium LanguageTools offering? How much more effective can I make LTeX LS with additional rules or models?

I don’t know yet, but I intend to continue iterating on my configuration as well as explore the competitors.

If you do have much experience with any of these solutions, or something else, I’d genuinely like to know about them; leave a comment!