---
author: 
published: 
created: 2025-03-17
source: https://agill.xyz/vim/text-objects
tags:
  - article/vim
about:
  - "[[vim]]"
  - "[[nvim]]"
---
1. [Home](https://agill.xyz/)
2. [Vim](https://agill.xyz/vim)
3. [Text objects](https://agill.xyz/vim/text-objects)

## What's a text object?

Text objects are a remarkably useful feature of Vim. They allow you to perform a **command** **inside** or **around** the specified **object**, where an object is a piece of text with some kind of semantic structure, like a word, paragraph, quoted string, HTML tag, etc.

## Examples

1. `gqip` to reflow text (`gq`) **i**nside the current **p**aragraph (`ip`)
2. `gUiw` to convert **i**nside the current **w**ord (`iw`) to uppercase (`gU`)
3. `ci"` to change inside the current matching pair of double quotes
4. `da{` to delete inside and around the current matching pair of curly braces

## Default text objects

See [`:help text-objects`](https://vimdoc.sourceforge.net/htmldoc/motion.html#text-objects) for Vim's excellent built-in documentation on text objects.

- `(` or `)`, `[` or `]`, `{` or `}`, and `<` or `>` for matching pairs of braces
- parentheses and curly braces have `b` and `B` aliases respectively
- `"`, `'`, and `` ` `` for matching pairs of quotes
- `t` for a matching pair of HTML or XML tags
- `w` for a word (letters, digits, and underscores, separated by whitespace or a non-word character)
- `W` for a WORD (any characters, separated by whitespace)
- `s` and `p` for sentences and paragraphs respectively

## Plugins

There are various Vim plugins that define new kinds of text objects, or otherwise super-power text objects.

### vim-indent-object

[vim-indent-object](https://github.com/michaeljsmith/vim-indent-object) provides text objects for indented text.

- `ai` for the current indentation level, and the line above (useful for Python)
- `ii` inner indentation level, no surrounding lines
- `aI` current indentation level, and the surrounding upper/lower lines

### vim-textobj-comment

[vim-textobj-comment](https://github.com/glts/vim-textobj-comment) provides text objects for comments, defined by the `comments` and `commentstring` settings for the given filetype. It works for `/* paired */` and `// simple` comment delimiters.

- `ic` for the comment text
- `ac` for the comment text and the comment delimiters

### vim-surround

[vim-surround](https://github.com/tpope/vim-surround) doesn't provide text objects, but it does provide powerful utilities for surrounding text objects.

- `ds` - delete surrounding (and only the surrounding, the surrounded text is left alone)
- `ds<count>` - delete the `n`th surrounding
- Example: Given `<div><p><em>cursor here</em></p></div>` with the cursor inside the `<em>` tags, `ds3t` will delete the surrounding `<div>` tags
- `cs` - change surrounding
- Example: `cs'"` change surrounding single quotes to double quotes
- `ys` - add surrounding (mnemonic: **y**ou **s**urround)
- Example: `ysiw*` will surround the current word in `*`'s
- Example: `ysa"fprint` will surround a quoted string in a **f**unction call to `print()`
- Example: `ysiw<a href="foo">` will surround the current word in an HTML link to `foo`