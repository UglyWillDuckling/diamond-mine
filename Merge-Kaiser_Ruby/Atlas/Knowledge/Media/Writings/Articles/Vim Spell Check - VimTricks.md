---
source: https://vimtricks.com/p/vim-spell-check/
author:
  - "[[Colin Bartlett]]"
published: 2020-07-20
created: 2025-07-13
about:
  - "[[vim]]"
  - "[[nvim]]"
tags:
  - article/vim
  - howto/vim
  - howto/nvim
---
- [x] reminder [[Vim Spell Check - VimTricks]] (@2025-07-25)
___
I recently came across an embarrassing typo on my own website. Buried deep in a paragraph of HTML inside a Rails HAML template, there was a glaring spelling mistake. I quickly raced back to Vim and opened the template and spell checked the whole file. How? With `:set spell`, Vim spell check.

Many novice Vim users are unaware that spell checking is built in and as easy as enabling with `:set spell`. As a veteran Vim user, I was aware of spell checking and how to turn it on, but I frequently forget the full complement of commands. So for anyone that needs reminding, here are the basics for getting the most out of Vim’s spell checker:

- `:set spell` – Turn on spell checking
- `:set nospell` – Turn off spell checking
- `]s` – Jump to the next misspelled word
- `[s` – Jump to the previous misspelled word
- `z=` – Bring up the suggested replacements
- `zg` – **G** ood word: Add the word under the cursor to the dictionary
- `zw` – **W** oops! Undo and remove the word from the dictionary

In the screencast below, I’ve demonstrated a few of these. With the file open, `:set spell` has already been enabled. I find the first misspelled word with `]s`. It’s actually correctly spelled, it’s the name of our status page and monitoring service, [StatusGator](https://statusgator.com/). So I add the word to the dictionary with `zg`. Then I find the next misspelling with `]s` and press `z=` to pull up the suggestion list. Finally, I press `2` to choose the replacement.

![[~/×/8c57d6133a73166665b517049f03b03d_MD5.gif]]

Vim Spell Checking demo screencast

### How do I turn on Vim spell check?

Use `:set spell` to enable spell check in Vim.

### How do I turn off Vim spell check?

You can disable spell checking in Vim with `:set nospell`.

### How do I find misspelled words in Vim?

### How do I see spelling suggestions in Vim?

With `:set spell` enabled in Vim, put your cursor on a misspelled word and press `z=` to see a list of suggestions for the misspelled word.

### How do I add a word to the Vim dictionary?

To add a word to Vim spell check dictionary, first enable spell check with `:set spell` then put your cursor on a misspelled word. Press `zg` (think of it as "g" for "good") and Vim will add it to the local dictionary.

### How do I remove a word from the Vim dictionary?

You can remove a word from the Vim dictionary by putting your cursor on a misspelled word and pressing `zw`.