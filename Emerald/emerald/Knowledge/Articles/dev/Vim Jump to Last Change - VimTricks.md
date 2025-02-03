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

### **How do I jump to the next change in Vim?**

If you have moved backwards through the changelist in Vim with `g;` you can move forward again with `g,`

### **How can I see a list of changes in Vim?**

Vim has a concept called the changelist, which is a list of all the changes you made in the current session. Vim stores the last 100 changes and you can see them all with `:changes`

### **Is the Vim change list different from the jump list?**

Yes! Vim's changelist is not the same as its jumplist. The jump list stores many more locations as you navigate around files. Any movement such as a search or a jump to the next line, paragraph, or method, will all store locations in the jump list. But Vim's change list stores only the places where an edit was made.

### What are the Vim docs for the changelist?

The Vim `:changes` documentation is:

Print the change list. A `>` character indicates the current position. Just after a change it is below the newest entry, indicating that `g;` takes you to the newest entry position. The first column indicates the count needed to take you to this position.
