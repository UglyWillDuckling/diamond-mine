---
author:
  - "[[Suraj N. Kurapati]]"
created: 2025-03-25
published: 2013-02-26
source: https://sunaku.github.io/vim-256color-bce.html
tags:
  - article/vim
  - article/terminals
---
---

## Summary

1. Run `:set t_ut=` to disable **Background Color Erase**.
2. Run `:redraw` or press `<C-L>` to repaint the background.
3. Use [terminalkeys](https://github.com/nacitar/terminalkeys.vim) and [fixkey](https://github.com/drmikehenry/vim-fixkey) to recognize modifier keys.

## Problem

This is what you would see if you applied the [Zenburn](http://slinky.imukuppi.org/zenburn/) color scheme to [Vim](http://www.vim.org/about.php) running under the `TERM=xterm-256color` environment inside [tmux](https://tmux.github.io/) or [GNU screen](https://www.gnu.org/software/screen/), which itself was attached to the [xterm-256color](http://www.frexx.de/xterm-256-notes/) terminal:

 ![Flaky background in TERM=xterm-256color](https://sunaku.github.io/vim-256color-bce-xterm.png "Flaky background in TERM=xterm-256color")

Here, the terminal’s background color *bleeds* into Vim’s and, depending on the contrast between those two colors, makes Vim use highly unpleasant.

Thankfully, you can fix this by running `:set term=screen-256color` inside Vim or by relaunching Vim under the `TERM=screen-256color` environment,[as some experts recommend](http://blog.sanctum.geek.nz/term-strings/):

 ![Solid background in TERM=screen-256color](https://sunaku.github.io/vim-256color-bce-screen.png "Solid background in TERM=screen-256color")

However, if you rely on Vim’s ability to sense modifier keys—such as Shift, Control, and Alt—because you use them to define custom keyboard shortcuts [like I do](https://github.com/sunaku/.vim), then you would soon discover that Vim [does not recognize](http://unix.stackexchange.com/q/29907) some of them inside the screen-256color terminal.

Thus you would be faced with a most *unnerving* dilemma:

1. Do you forfeit your custom keyboard shortcuts to gain a proper background color by running Vim inside the screen-256color terminal?
2. Do you suffer background color bleeding to retain your custom keyboard shortcuts by running Vim inside the xterm-256color terminal?

Alas, is it truly a *binary* choice? Must you really forgo your personal keyboard shortcuts in order to view your chosen Vim color scheme properly? No, I would not accept such a fate; there *has* to be a better way! `>:O`

## Approach

I knew about Vim’s ability to manipulate its host terminal through its `t_Co` setting, which lets you override how many colors Vim thinks its host terminal is capable of rendering. Thus, looking up `:help t_Co` in Vim revealed numerous terminal settings—which all happened to be listed in the [terminal-options](http://vimdoc.sourceforge.net/htmldoc/term.html#terminal-options) section of Vim’s help documentation—that could be overridden, hopefully in the same way, to perhaps solve this problem.

However, there were too many settings in the documentation to practically investigate by hand, so I narrowed down the possibilities to the following eleven settings by searching for the words “color” and then “clear”:

```
OUTPUT CODES
  option  meaning
  t_AB    set background color (ANSI)
  t_AF    set foreground color (ANSI)
  t_cd    clear to end of screen
  t_ce    clear to end of line
  t_cl    clear screen
  t_Co    number of colors
  t_me    Normal mode (undoes t_mr, t_mb, t_md and color)
  t_op    reset to original color pair
  t_Sb    set background color
  t_Sf    set foreground color
  t_ut    clearing uses the current background color
```

I then observed the values of these settings in both environments so that I could (1) compare them to discover what makes Vim render its background color correctly in the screen-256color terminal and then (2) replicate those values to achieve the same effect in the xterm-256color terminal.

screen-256color observations:

```
t_cd=^[[J
t_ce=^[[K
t_cl=^[[H^[[J
t_AB=^[[%?%p1%{8}%<%t4%p1%d%e%p1%{16}%<%t10%p1%{8}%-%d%e48;5;%p1%d%;m
t_AF=^[[%?%p1%{8}%<%t3%p1%d%e%p1%{16}%<%t9%p1%{8}%-%d%e38;5;%p1%d%;m
t_Co=256
t_me=^[[0m
t_op=^[[39;49m
t_Sb=
t_Sf=
t_ut=
```

xterm-256color observations:

```
t_cd=^[[J
t_ce=^[[K
t_cl=^[[H^[[2J
t_AB=^[[%?%p1%{8}%<%t4%p1%d%e%p1%{16}%<%t10%p1%{8}%-%d%e48;5;%p1%d%;m
t_AF=^[[%?%p1%{8}%<%t3%p1%d%e%p1%{16}%<%t9%p1%{8}%-%d%e38;5;%p1%d%;m
t_Co=256
t_me=^[[m
t_op=^[[39;49m
t_Sb=
t_Sf=
t_ut=y
```

Differences in observations:

```
--- screen-256color observations
+++ xterm-256color observations
@@ -1,11 +1,11 @@
 t_cd=^[[J
 t_ce=^[[K
-t_cl=^[[H^[[J
+t_cl=^[[H^[[2J
 t_AB=^[[%?%p1%{8}%<%t4%p1%d%e%p1%{16}%<%t10%p1%{8}%-%d%e48;5;%p1%d%;m
 t_AF=^[[%?%p1%{8}%<%t3%p1%d%e%p1%{16}%<%t9%p1%{8}%-%d%e38;5;%p1%d%;m
 t_Co=256
-t_me=^[[0m
+t_me=^[[m
 t_op=^[[39;49m
 t_Sb=
 t_Sf=
-t_ut=
+t_ut=y
```

Comparing these observations, I found that xterm-256color only differed from screen-256color in these three settings: `t_cl`, `t_me`, and `t_ut`.

## Solution

One by one, I applied the screen-256color value of each differing setting to a Vim session that was running inside my desired xterm-256color terminal and then pressed Control-L to make Vim redraw itself. Changing `t_cl` and `t_me` had no effect but, luckily, `t_ut` did the trick!:-)

This makes sense because, according to Vim documentation, not only does `t_ut` control whether Vim “uses the current background color” to clear the screen (also known as **Background Color Erase**, or **BCE** for short) but it also takes effect only when its value is a non-empty string.

In this case, Vim used BCE in xterm-256color because, under that terminal,`t_ut` had value `y`: a non-empty string. Conversely, Vim *did not* use BCE in screen-256color because under that terminal, `t_ut` had *no* value.

Therefore, the solution is to simply *clear* Vim’s `t_ut` value if Vim happens to be running inside any 256-color terminal. You can automate this by adding the following snippet to your Vim configuration file:

```
if &term =~ '256color'
  " disable Background Color Erase (BCE) so that color schemes
  " render properly when inside 256-color tmux and GNU screen.
  " see also http://snk.tuxfamily.org/log/vim-256color-bce.html
  set t_ut=
endif
```

---

---