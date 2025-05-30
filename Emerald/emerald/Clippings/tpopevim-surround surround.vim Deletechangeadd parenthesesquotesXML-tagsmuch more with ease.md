---
author:
  - "[[Atlas/tools/dev/github]]"
published:
created: 2025-03-14
source: https://github.com/tpope/vim-surround
tags:
---
## surround.vim

Surround.vim is all about "surroundings": parentheses, brackets, quotes, XML tags, and more. The plugin provides mappings to easily delete, change and add such surroundings in pairs.

It's easiest to explain with examples. Press `cs"'` inside

to change it to

Now press `cs'<q>` to change it to

To go full circle, press `cst"` to get

To remove the delimiters entirely, press `ds"`.

Now with the cursor on "Hello", press `ysiw]` (`iw` is a text object).

Let's make that braces and add some space (use `}` instead of `{` for no space): `cs]{`

Now wrap the entire line in parentheses with `yssb` or `yss)`.

Revert to the original text: `ds{ds)`

Emphasize hello: `ysiw<em>`

Finally, let's try out visual mode. Press a capital V (for linewise visual mode) followed by `S<p class="important">`.

```
<p class="important">
  <em>Hello</em> world!
</p>
```

This plugin is very powerful for HTML and XML editing, a niche which currently seems underfilled in Vim land. (As opposed to HTML/XML *inserting*, for which many plugins are available). Adding, changing, and removing pairs of tags simultaneously is a breeze.

The `.` command will work with `ds`, `cs`, and `yss` if you install [repeat.vim](https://github.com/tpope/vim-repeat).

## Installation

Install using your favorite package manager, or use Vim's built-in package support:

```
mkdir -p ~/.vim/pack/tpope/start
cd ~/.vim/pack/tpope/start
git clone https://tpope.io/vim/surround.git
vim -u NONE -c "helptags surround/doc" -c q
```

## FAQ

> How do I surround without adding a space?

Only the opening brackets—`[`, `{`, and `(`—add a space. Use a closing bracket, or the `b` (`(`) and `B` (`{`) aliases.

## Contributing

See the contribution guidelines for [pathogen.vim](https://github.com/tpope/vim-pathogen#readme).

## Self-Promotion

Like surround.vim? Star the repository on [GitHub](https://github.com/tpope/vim-surround) and vote for it on [vim.org](https://www.vim.org/scripts/script.php?script_id=1697).

Love surround.vim? Follow [tpope](http://tpo.pe/) on [GitHub](https://github.com/tpope) and [Twitter](http://twitter.com/tpope).

## License

Copyright (c) Tim Pope. Distributed under the same terms as Vim itself. See `:help license`.