---
source: https://codeyarns.com/tech/2010-11-26-how-to-view-variables-in-vim.html#gsc.tab=0
author:
  - "[[Ashwin Nanjappa]]"
created: 2025-07-13
tags:
  - howto/vim
---
To view the list of all **variables** and their values in **Vim**:

```
:let
```

Note that this does not list environment variables, [this post](https://codeyarns.com/tech/2012/06/26/how-to-view-environment-variables-in-vim/) shows how to view those.

If you find it hard to wade through the long list, you can [redirect the output of this command](http://stackoverflow.com/questions/2573021) to a buffer for further analysis. For example, to load the output of `:let` into a buffer:

```
:redir @a
:let
:redir END
"ap
```

There are many types of variables in Vim and each has a special name or prefix:

```
g:  global variables
b:  local buffer variables
w:  local window variables
t:  local tab page variables
s:  script-local variables
l:  local function variables
v:  Vim variables.
```

To list the variables of a particular type, for example **global variables**, just use its prefix:

```
:let g:
```