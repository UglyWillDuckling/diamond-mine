---
source: https://freshman.tech/vim-quickfix-and-location-list/
author:
  - "[[Ayooluwa Isaiah]]"
published: 2020-06-18
created: 2025-02-04
tags:
  - article
  - howto
  - vim
related:
  - "[[vim - quickfix list]]"
  - "[[vim]]"
---
Updated on January 20, 2021

The quickfix and location lists are essential navigation components in Vim. This article will consider the similarities and differences between the two lists and provide examples for when each one is typically used.

The quickfix and location lists provide a powerful way to navigate in Vim especially in the context of searching a file or project, and when inspecting errors. Essentially, they are lists of file locations with a built-in set of commands for navigating between them, and they can be populated in a variety of ways.

## [[vim - quickfix list|quickfix list]]

The quickfix list is useful for navigating to different locations in a project such as when reviewing linting warnings, compilation errors, or when conducting a project-wide search.

Many built-in commands (such as `:vimgrep` or `:make`) and third-party plugins leverage this list for displaying the results of an operation so that it may be quickly traversed using a set of quickfix [commands](http://vimdoc.sourceforge.net/htmldoc/quickfix.html#quickfix-window).

For example, let’s say you wanted to find all instances of `window` in your JavaScript project. You may use the built-in `:grep` command as follows:

Behind the scenes, Vim will run the `grep` command in the shell and print the output. But that’s not all, the results are also placed in the quickfix list so that you can quickly jump to all matching positions in each file. See the demo below.

While there are several commands for navigating the quickfix list, these are the most common ones that you need to be aware of:

- `:copen` - Open the quickfix list window.
- `:ccl` or `:cclose` - Close the quickfix list window.
- `:cnext` or `:cn` - Go to the next item on the list.
- `:cprev` or `:cp` - Go to the previous item on the list.
- `:cfirst` - Go to the first item on the list.
- `:clast` - Go to the last item on the list.
- `:cc <n>` - Go to the *n<sup>th</sup>* item.

The quickfix window behaves like a regular Vim window for the most part, so the standard navigation and movement bindings can also be used to switch to and jump between items on the list. For example, when the window is focused, you can use j or k to highlight the next or previous item, and Enter to move the cursor to the highlighted file and position.

## The location list

The location list behaves just like the quickfix list except that it is local to the current window instead of being global to the Vim session. So if you have five open windows, you can have up to five location lists, but only one quickfix list.

Populating the location list is done in the exact same way as the quickfix list, except that the built-in commands are prefixed with `l`. For example: `:lvimgrep`, `:lmake`, `:lgrep` e.t.c. Some third-party plugins also place their output in the location list by default, although it’s usually configurable in case you prefer the quickfix list.

Some of the commands for navigating the location list are as follows:

- `:lopen` - Open the location list window.
- `:lcl` or `:lclose` - Close the location list window.
- `:lnext` - Go to the next item on the list.
- `:lprev` - Go to the previous item on the list.
- `:lfirst` - Go to the first item on the list.
- `:llast` - Go to the last item on the list.
- `:ll <n>` - Go to the *n<sup>th</sup>* item.

As you can see, the location commands are nearly identical to their quickfix counterparts, except that `c` is replaced with `l`.

## Navigating older lists

Vim retains up to ten quickfix lists per session and ten location lists per window. If an operation creates a new list, the previous one is retained in the background until the limit is reached. This makes it possible to refer to an earlier list using the commands below:

- `:colder` or `:col` - Go to the previous quickfix list.
- `:cnewer` or `:cnew` - Go to the next quickfix list.
- `:lolder` or `:lol` - Go to the previous location list.
- `:lnewer` or `:lnew` - Go to the next location list.

Although a status message will be printed on the screen each time you switch between lists, it’s better to keep the quickfix or location list window open so that you can easily see the updated list.

## :cdo and friends

The `:cdo` command allows you to execute an arbitrary command of your choice for each entry on the quickfix list. This is a powerful feature and provides the basis for the closest thing to a native project-wide search and replace in Vim.

For example, if you want to replace all instances of `foo` with `bar` in your project, you may conduct your search using `:grep` as follows:

Then you can use the `:cdo` command to execute the substitute command for each item in the quickfix list as shown below. The `update` part causes the buffer to be written to disk after each modification.

While `:cdo` is doing its work, several files may be opened in Vim buffers. To close each one, use the `:cfdo` command to execute `:bd`. Instead of iterating over each entry in the list, `:cfdo` iterates over each referenced file in the list.

The location list equivalents for `:cdo` and `:cfdo` are — you guessed it — `:ldo` and `:lfdo`.

## Helpful plugins

While the default configuration provides everything you need to work with both the quickfix and location lists, it’s possible to add some customisation by virtue of third-party plugins. Here are two of the most helpful ones I’ve discovered:

- [vim-qf](https://github.com/romainl/vim-qf): This plugin provides a handful of settings and mappings for both the quickfix and location list and is quite customisable to suit your workflow.
- [vim-unimpaired](https://github.com/tpope/vim-unimpaired): This plugin provides a number of useful mappings for common tasks among which are the following for both the quickfix and location lists: `[q` and `]q` navigates to the previous and next item in the list respectively, while `[Q` and `]Q` go to the beginning and end of the list respectively.

## Conclusion

The quickfix and location lists are helpful mechanisms for loading and navigating compilation errors and warnings, or when searching in a project.

Although the quickfix list is traditionally devoted to errors, there’s nothing stopping you from using it for other tasks. The location list on the other hand is handy for running multiple search queries, with results for each one in a self-contained window of its own.

For more information on the quickfix and location lists, see `:help quickfix` and `:help location-list` respectively. Thanks for reading, and happy coding!

- [#vim](https://freshman.tech/tags/vim/)