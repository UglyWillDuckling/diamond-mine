---
source: https://vimtricks.com/p/vim-jump-to-last-change/
related: "[[vim]]"
---
#article #dev #vim 
# Vim Jump to Last Change

Have you heard of the Vim Change List? Vim tracks all of the changes you make during an editing session. You can undo changes with `u` and you can redo changes with `<ctrl-r>`. You can even [navigate through time in Vim](https://vimtricks.com/p/vimtrick-time-travel-in-vim) like a time traveller. But Vim has another useful change tracking feature: the changelist (see `:help changelist`). And Vim can jump to the last change with `g;`.

Vim keeps track of the position of every undo-able change and makes the last 100 available to you when you call `:changes`. You can navigate backwards and forwards to these positions in your file _without undoing the change_ by using `g;` and `g,`. Here’s a cheatsheet:

- `:changes` – Show position of last 100 changes
- `g;` – Vim jumps to the last change you made
- `g,` – Vim jumps forward through the change list

When you view the change list with `:changes` , Vim will show a column with the change number. This number can be prepended to `g;` to jump to that specific change. For example, `3g;` will jump back 3 changes. Just use the number beside the change you want to jump to:

```
change line  col text
    3     9    8 bla bla bla
    2    11   57 foo is a bar
    1    14   54 the latest changed line
```

If you’re working across multiple files and navigating quickly, the changelist can be a real time saver. Just pop open `:changes` and call `g;` and Vim will jump to the last change. Or prepend with a number to have Vim jump to a previous change.

Here’s a short screencast showing this in practice. There’s a [brief demo of change jumping in Vim](https://youtu.be/QkRnOMYStyM) on our YouTube channel.

![](https://vimtricks.com/wp-content/uploads/2022/08/jump-between-changes.gif)

### How do I jump to the last change in Vim?

Press `g;` in Vim to jump to the last change. This will use Vim's changelist to go to the last place you made any change.

### How do I jump to the next change in Vim?

If you have moved backwards through the changelist in Vim with `g;` you can move forward again with `g,`.

### How can I see a list of changes in Vim?

Vim has a concept called the changelist, which is a list of all the changes you made in the current session. Vim stores the last 100 changes and you can see them all with `:changes`.

### Is the Vim change list different from the jump list?

Yes! Vim's changelist is not the same as its jumplist. The jump list stores many more locations as you navigate around files. Any movement such as a search or a jump to the next line, paragraph, or method, will all store locations in the jump list. But Vim's change list stores only the places where an edit was made.

### What are the Vim docs for the changelist?

The Vim `:changes` documentation is:

Print the change list. A `>` character indicates the current position. Just after a change it is below the newest entry, indicating that `g;` takes you to the newest entry position. The first column indicates the count needed to take you to this position.

How useful was this tip?

Submit Rating

Average rating 3.8 / 5. Vote count: 457

No votes so far! Be the first to rate this tip.

We are sorry that this post was not useful for you!

Let us improve this post!

Tell us how we can improve this post?

Submit Feedback

Tags:[changelist](https://vimtricks.com/p/tag/changelist/), [changes](https://vimtricks.com/p/tag/changes/), [jumplist](https://vimtricks.com/p/tag/jumplist/), [jumps](https://vimtricks.com/p/tag/jumps/)

## Post navigation

[Previous postRepeat the last substitution](https://vimtricks.com/p/vimtrick-repeat-the-last-substitution/)

[Next postSearch project for current word](https://vimtricks.com/p/vimtrick-search-project-for-current/)

## Written by

[![Andy Libby](https://secure.gravatar.com/avatar/644a0b83c008560259d41cb11999c5df?s=144&d=mm&r=g)

](https://vimtricks.com/p/author/alibby/ "Posts by Andy Libby")

### [Andy Libby](https://vimtricks.com/p/author/alibby/ "Posts by Andy Libby") 36 Posts

Rider of bicycles. Writer of code. User of Vim.

[View all posts](https://vimtricks.com/p/author/alibby/)

Please enable JavaScript in your browser to complete this form.

Email *

Submit![Loading](https://vimtricks.com/wp-content/plugins/wpforms-lite/assets/images/submit-spin.svg)

### Search the Archives

### Our Books

- ![Git Better with Vim](https://vimtricks.com/wp-content/uploads/2020/11/Copy-of-Copy-of-Git-Better-with-Vim-Twitter-Sized-939x474.png)
    
    #### [Git Better with Vim](https://vimtricks.com/p/git-better-with-vim/)
    

### Recent Vim Tips

- #### [Inspect Character Under Cursor in Vim](https://vimtricks.com/p/inspect-character-under-cursor-in-vim/)
    
- #### [Vim Calculator](https://vimtricks.com/p/vim-calculator/)
    
- #### [Vim split to a specific size](https://vimtricks.com/p/splitting-to-a-specific-size/)
    
- #### [Vim Command Line Window](https://vimtricks.com/p/vim-command-line-window/)
    

## Widgets

### Top Rated Vim Tips

5 (3)

[VimTricks: The Vim Newsletter](https://vimtricks.com/p/vimtricks-the-vim-newsletter/)

4 (1109)

[Get the current file path](https://vimtricks.com/p/get-the-current-file-path/)

4.3 (826)

[Equalize your splits](https://vimtricks.com/p/vimtrick-equalize-your-splits/)

4.2 (806)

[Vim Spell Check](https://vimtricks.com/p/vim-spell-check/)

4 (589)

[Vim Search Visual Selection](https://vimtricks.com/p/vim-search-visual-selection/)

### Vim Tips by Tag

[alignment](https://vimtricks.com/p/tag/alignment/) [args](https://vimtricks.com/p/tag/args/) [autocmd](https://vimtricks.com/p/tag/autocmd/) [autocomplete](https://vimtricks.com/p/tag/autocomplete/) [books](https://vimtricks.com/p/tag/books/) [buffers](https://vimtricks.com/p/tag/buffers/) [case](https://vimtricks.com/p/tag/case/) [checkbox](https://vimtricks.com/p/tag/checkbox/) [checkboxes](https://vimtricks.com/p/tag/checkboxes/) [commands](https://vimtricks.com/p/tag/commands/) [config](https://vimtricks.com/p/tag/config/) [courses](https://vimtricks.com/p/tag/courses/) [csv](https://vimtricks.com/p/tag/csv/) [ebooks](https://vimtricks.com/p/tag/ebooks/) [filter](https://vimtricks.com/p/tag/filter/) [folding](https://vimtricks.com/p/tag/folding/) [fugitive](https://vimtricks.com/p/tag/fugitive/) [git](https://vimtricks.com/p/tag/git/) [indenting](https://vimtricks.com/p/tag/indenting/) [insert](https://vimtricks.com/p/tag/insert/) [interface](https://vimtricks.com/p/tag/interface/) [mappings](https://vimtricks.com/p/tag/mappings/) [markdown](https://vimtricks.com/p/tag/markdown/) [motions](https://vimtricks.com/p/tag/motions/) [native](https://vimtricks.com/p/tag/native/) [navigation](https://vimtricks.com/p/tag/navigation/) [netrw](https://vimtricks.com/p/tag/netrw/) [notes](https://vimtricks.com/p/tag/notes/) [patterns](https://vimtricks.com/p/tag/patterns/) [plugin](https://vimtricks.com/p/tag/plugin/) [plugins](https://vimtricks.com/p/tag/plugins/) [quickfix](https://vimtricks.com/p/tag/quickfix/) [regex](https://vimtricks.com/p/tag/regex/) [registers](https://vimtricks.com/p/tag/registers/) [replace](https://vimtricks.com/p/tag/replace/) [search](https://vimtricks.com/p/tag/search/) [shell](https://vimtricks.com/p/tag/shell/) [splits](https://vimtricks.com/p/tag/splits/) [substitution](https://vimtricks.com/p/tag/substitution/) [text-objects](https://vimtricks.com/p/tag/text-objects/) [unimpaired](https://vimtricks.com/p/tag/unimpaired/) [vim](https://vimtricks.com/p/tag/vim/) [vimrc](https://vimtricks.com/p/tag/vimrc/) [visual](https://vimtricks.com/p/tag/visual/) [whitespace](https://vimtricks.com/p/tag/whitespace/)

### About VimTricks

![Colin and Andy](https://new.vimtricks.com/wp-content/uploads/2020/11/dual-300x186.png)VimTricks is published by Colin Bartlett and Andy Libby, two Vim enthusiasts and software developers with more than 40 years combined experience with Vim.

Have a Vim tip? Email us! [hi@vimtricks.com](mailto:hi@vimtricks.com)

### Links

- [](https://vimtricks.com/feed/)
- [](https://twitter.com/vim_tricks)
- [](https://www.youtube.com/channel/UCDPNU10nfHfPgEAqK9SmuTQ)
- [](https://vim.town/@vimtricks)

Copyright © 2022 [Nimble Industries, Inc.](https://nimbleindustries.io)

[![SSL Certificate Monitoring by TrackSSL](https://trackssl.com/badges/33519/vimtricks.com)](https://trackssl.com/badges/details/33519/vimtricks.com)

Click to Copy

    [](#)