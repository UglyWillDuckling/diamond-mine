Go to the [first](intro_1.html), [previous](intro_10.html), [next](intro_12.html), [last](intro_21.html) section, [table of contents](intro_toc.html).

* * *

# [Bindings](intro_toc.html\#SEC11)

Each of the above editor commands was actually a function bound by
default to a certain key. The real names of the commands are:

```
expand-or-complete   TAB
push-line            ESC-Q
run-help             ESC-H
accept-and-hold      ESC-A
quote-line           ESC-'

```

These bindings are arbitrary; you could change them if you want. For
example, to bind `accept-line` to ^Z:

```
% bindkey '^Z' accept-line

```

Another idea would be to bind the delete key to `delete-char`; this
might be convenient if you use ^H for backspace.

```
% bindkey '^?' delete-char

```

Or, you could bind ^X^H to `run-help`:

```
% bindkey '^X^H' run-help

```

Other examples:

```
% bindkey '^X^Z' universal-argument
% bindkey ' ' magic-space
% bindkey -s '^T' 'uptime
> '

```

`universal-argument` multiplies the next command by 4. Thus
^X^Z^W might delete the last four words on the line.
If you bind space to `magic-space`, then csh-style history
expansion is done on the line whenever you press the space bar.

The `-s` flag to `bindkey` specifies that you are binding the
key to a string, not a command. Thus `bindkey -s '^T' 'uptime\n'`
lets you VMS lovers get the load average whenever you press
^T.

If you have a NeXT keyboard, the one with the `|` and `\` keys
very inconveniently placed, the following bindings may come in
handy:

```
% bindkey -s '\/' '\\'
% bindkey -s '\=' '|'

```

Now you can type `ALT-/` to get a backslash, and `ALT-=`
to get a vertical bar. This only works inside zsh, of course;
`bindkey` has no effect on the key mappings inside `talk` or
`mail`, etc.

Another use of the editor is to edit the value of variables. For
example, an easy way to change your path is to use the `vared`
command:

```
% vared PATH
> /u/pfalstad/scr:/u/pfalstad/bin/sun4:/u/maruchck/scr:/u/subbarao/bin:/u/maruc
hck/bin:/u/subbarao/scripts:/usr/princeton/bin:/usr/ucb:/usr/bin:/bin:/usr/host
s:/usr/princeton/bin/X11:/./usr/lang:/./usr/etc:/./etc

```

You can now edit the path. When you press return, the contents of the
edit buffer will be assigned to `PATH`.

* * *

Go to the [first](intro_1.html), [previous](intro_10.html), [next](intro_12.html), [last](intro_21.html) section, [table of contents](intro_toc.html).

