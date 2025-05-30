---
author:
  - "[[Steve Losh]]"
created: 2025-04-16
published: 
source: https://learnvimscriptthehardway.stevelosh.com/chapters/32.html#the-search-term
tags:
  - howto/vim
---
## Case Study: Grep Operator, Part One

In this chapter and the next we're going to walk through creating a fairly complicated piece of Vimscript. We'll talk about several things we haven't seen before, as well as how some of the things we've studied fit together in practice.

As you work through this case study make sure to look up anything unfamiliar with `:help`. If you coast through without fully understanding everything, you won't learn much.

## Grep

If you've never used `:grep` you should take a minute to read `:help :grep` and`:help :make` now. Read `:help quickfix-window` if you've never used the quickfix window before.

In a nutshell: `:grep ...` will run an external grep program with any arguments you give, parse the result, and fill the quickfix list so you can jump to results inside Vim.

Our example is going to make `:grep` easier to invoke by adding a "grep operator" you can use with any of Vim's built-in (or custom!) motions to select the text you want to search for.

## Usage

The first thing you should think about when creating any non-trivial piece of Vimscript is: "how will this functionality be used?". Try to come up with a smooth, easy, intuitive way to invoke it.

In this case I'll do that step for you:

- We're going to create a "grep operator" and bind it to `<leader>g`.
- It will act like any other Vim operator and take a motion (like `w` or `i{`).
- It will perform the search immediately and open the quickfix window to show the results.
- It will *not* jump to the first result, because that can be jarring if the first result isn't what you're expecting.

Some examples of how you might end up using it:

- `<leader>giw`: Grep for the word under the cursor.
- `<leader>giW`: Grep for the WORD under the cursor.
- `<leader>gi'`: Grep for the contents of the single-quoted string you're currently in.
- `viwe<leader>g`: Visually select a word, extend the selection to the end of the word after it, then grep for the selected text.

There are many, *many* other ways to use this. It may seem like it will take a lot of coding, but actually all we need to do is implement the "operator" functionality and Vim will handle the rest.

## A Preliminary Sketch

One thing that's sometimes helpful when writing tricky bits of Vimscript is to simplify your goal and implement *that* to get an idea of the "shape" your final solution will take.

Let's simplify our goal to: "create a mapping to search for the word under the cursor". This is useful but should be easier, so we can get something running much faster. We'll map this to `<leader>g` for now.

We'll start with a skeleton of the mapping and fill it in as we go. Run this command:

```
:nnoremap <leader>g :grep -R something .<cr>
```

If you've read `:help grep` this should be pretty easy to understand. We've looked at lots of mappings before, and there's nothing new here.

Obviously we're not done yet, so let's refine this mapping until it meets our simplified goal.

First we need to search for the word under the cursor, not the string `something`. Run the following command:

```
:nnoremap <leader>g :grep -R <cword> .<cr>
```

Now try it out. `<cword>` is a special bit of text you can use in Vim's command-line mode, and Vim will replace it with "the word under the cursor" before running the command.

You can use `<cWORD>` to get a WORD instead of a word. Run this command:

```
:nnoremap <leader>g :grep -R <cWORD> .<cr>
```

Now try the mapping when your cursor is over something like `foo-bar`. Vim will grep for `foo-bar` instead of just part of the word.

There's still a problem with our search term: if there are any special shell characters in it Vim will happily pass them along to the external grep command, which will explode (or worse: do something terrible).

Go ahead and try this to make sure it breaks. Type `foo;ls` into a file and run the mapping while your cursor is over it. The grep command will fail, and Vim will actually run an `ls` command as well! Clearly this could be bad if the word contained a command more dangerous than `ls`.

To try to fix this we'll quote the argument in the grep call. Run this command:

```
:nnoremap <leader>g :grep -R '<cWORD>' .<cr>
```

Most shells treat single-quoted text as (almost) literal, so our mapping is much more robust now.

## Escaping Shell Command Arguments

There's still one more problem with the search term. Try the mapping on the word `that's`. It won't work, because the single quote inside the word interferes with the quotes in the grep command!

To get around this we can use Vim's `shellescape` function. Read `:help escape()` and `:help shellescape()` to see how it works (it's pretty simple).

Because `shellescape()` works on Vim strings, we'll need to dynamically build the command with `execute`. First run the following command to transform the`:grep` mapping into `:execute "..."` form:

```
:nnoremap <leader>g :execute "grep -R '<cWORD>' ."<cr>
```

Try it out and make sure it still works. If not, find any typos and fix them. Then run the following command, which uses `shellescape` to fix the search term:

```
:nnoremap <leader>g :execute "grep -R " . shellescape("<cWORD>") . " ."<cr>
```

Try it out by running it on a normal word like `foo`. It will work properly. Now try it out on a word with a quote in it, like `that's`. It still doesn't work! What happened?

The problem is that Vim performed the `shellescape()` call *before* it expanded out special strings like `<cWORD>` in the command line. So Vim shell-escaped the literal string `"<cWORD>"` (which did nothing but add single quotes to it) and then concatenated it with the strings of our `grep` command.

You can see this by running the following command:

```
:echom shellescape("<cWORD>")
```

Vim will output `'<cWORD>'`. Note that those quotes are actually part of the string. Vim has prepared it for use as a shell command argument.

To fix this we'll use the `expand()` function to force the expansion of `<cWORD>` into the actual string *before* it gets passed to `shellescape`.

Let's break this apart and see how it works, in steps. Put your cursor over a word with a quote, like `that's`, and run the following command:

```
:echom expand("<cWORD>")
```

Vim outputs `that's` because `expand("<cWORD>")` will return the current word under the cursor as a Vim string. Now let's add `shellescape` back in:

```
:echom shellescape(expand("<cWORD>"))
```

This time Vim outputs `'that'\''s'`. If this looks a little funny, you probably haven't had the pleasure of wrapping your brain around shell-quoting in all its insane glory. For now, don't worry about it. Just trust the Vim has taken the string from `expand` and escaped it properly.

Now that we know how to get a fully-escaped version of the word under the cursor, it's time to concatenate it into our mapping! Run the following command:

```
:nnoremap <leader>g :exe "grep -R " . shellescape(expand("<cWORD>")) . " ."<cr>
```

Try it out. This mapping won't break if the word we're searching for happens to contain strange characters.

The process of starting with a trivial bit of Vimscript and transforming it little-by-little into something closer to your goal is one you'll find yourself using often.

## Cleanup

There are still a couple of small things to take care of before our mapping is finished. First, we said that we don't want to go to the first result automatically, and we can use `grep!` instead of plain `grep` to do that. Run this command:

```
:nnoremap <leader>g :execute "grep! -R " . shellescape(expand("<cWORD>")) . " ."<cr>
```

Try it out again and nothing will seem to happen. Vim has filled the quickfix window with the results, but we haven't opened it yet. Run the following command:

```
:nnoremap <leader>g :execute "grep! -R " . shellescape(expand("<cWORD>")) . " ."<cr>:copen<cr>
```

Now try the mapping and you'll see that Vim automatically opens the quickfix window with the search results. All we did was tack `:copen<cr>` onto the end of our mapping.

As the finishing touch we'll remove all the grep output Vim displays while searching. Run the following command:

```
:nnoremap <leader>g :silent execute "grep! -R " . shellescape(expand("<cWORD>")) . " ."<cr>:copen<cr>
```

We're done, so try it out and admire your hard work! The `silent` command just runs the command that follows it while hiding any messages it would normally display.

## Exercises

Add the mapping we just created to your `~/.vimrc` file.

Read `:help :grep` if you didn't read it before.

Read `:help cword`.

Read `:help cnext` and `:help cprevious`. Try them out after using your new grep mapping.

Set up mappings for `:cnext` and `:cprevious` to make it easier to quickly run through matches.

Read `:help expand`.

Read `:help copen`.

Add a height to the `:copen` command in the mapping we created to make sure the quickfix window is opened to whatever height you prefer.

Read `:help silent`.