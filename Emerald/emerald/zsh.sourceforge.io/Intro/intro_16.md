Go to the [first](intro_1.html), [previous](intro_15.html), [next](intro_17.html), [last](intro_21.html) section, [table of contents](intro_toc.html).

* * *

# [Options](intro_toc.html\#SEC16)

Some options have already been mentioned; here are a few more:

```
% cd /
% setopt autocd
% bin
% pwd
/bin
% ../etc
% pwd
/etc

```

Using the `AUTOCD` option, you can simply type the name of a
directory, and it will become the current directory.

```
% setopt cdablevars
% foo=/tmp
% cd foo
/tmp

```

With `CDABLEVARS`, if the argument to `cd` is the name of a
parameter whose value is a valid directory, it will become the current
directory.

`CORRECT` turns on spelling correction for commands, and the
`CORRECTALL` option turns on spelling correction for all arguments.

```
% setopt correct
% sl
zsh: correct `sl' to `ls' [nyae]? y
% setopt correctall
% ls x.v11r4
zsh: correct `x.v11r4' to `X.V11R4' [nyae]? n
/usr/princton/src/x.v11r4 not found
% ls /etc/paswd
zsh: correct to `/etc/paswd' to `/etc/passwd' [nyae]? y
/etc/passwd

```

If you press `y` when the shell asks you if you want to correct a
word, it will be corrected. If you press `n`, it will be left
alone. Pressing `a` aborts the command, and pressing `e` brings
the line up for editing again, in case you agree the word is spelled
wrong but you don't like the correction.

Normally, a quoted expression may contain a newline:

```
% echo '
> foo
> '

foo

%

```

With `CSHJUNKIEQUOTES` set, this is illegal, as it is in csh.

```
% setopt cshjunkiequotes
% ls 'foo
zsh: unmatched '

```

`GLOBDOTS` lets files beginning with a `.` be matched without
explicitly specifying the dot.

```
% ls -d *x*
Mailboxes
% setopt globdots
% ls -d *x*
.exrc         .pnewsexpert  .xserverrc
.mushexpert   .xinitrc      Mailboxes

```

`HISTIGNOREDUPS` prevents the current line from being saved in the
history if it is the same as the previous one; `HISTIGNORESPACE`
prevents the current line from being saved if it begins with a space.

```
% PROMPT='%h> '
39> setopt histignoredups
40> echo foo
foo
41> echo foo
foo
41> echo foo
foo
41> echo bar
bar
42> setopt histignorespace
43>  echo foo
foo
43>  echo fubar
fubar
43>  echo fubar
fubar

```

`IGNOREBRACES` turns off csh-style brace expansion.

```
% echo x{y{z,a},{b,c}d}e
xyze xyae xbde xcde
% setopt ignorebraces
% echo x{y{z,a},{b,c}d}e
x{y{z,a},{b,c}d}e

```

`IGNOREEOF` forces the user to type `exit` or `logout`,
instead of just pressing ^D.

```
% setopt ignoreeof
% ^D
zsh: use 'exit' to exit.

```

`INTERACTIVECOMMENTS` turns on interactive comments; comments begin
with a `#`.

```
% setopt interactivecomments
% date # this is a comment
Fri May 24 06:54:14 EDT 1991

```

`NOCLOBBER` prevents you from accidentally overwriting an existing
file.

```
% setopt noclobber
% cat /dev/null >~/.zshrc
zsh: file exists: /u/pfalstad/.zshrc

```

If you really do want to clobber a file, you can use the `>!`
operator. To make things easier in this case, the `>` is stored in
the history list as a `>!`:

```
% cat /dev/null >! ~/.zshrc
% cat /etc/motd > ~/.zshrc
zsh: file exists: /u/pfalstad/.zshrc
% !!
cat /etc/motd >! ~/.zshrc
% ...

```

`RCQUOTES` lets you use a more elegant method for including single
quotes in a singly quoted string:

```
% echo '"don'\"t do that."'
"don't do that."
% echo '"don"t do that."'
"dont do that."
% setopt rcquotes
% echo '"don"t do that."'
"don't do that."

```

Finally, `SUNKEYBOARDHACK` wins the award for the strangest option.
If a line ends with `` ` ``, and there are an odd number of them on the
line, the shell will ignore the trailing `` ` ``. This is provided for
keyboards whose RETURN key is too small, and too close to the `` ` ``
key.

```
% setopt sunkeyboardhack
% date`
Fri May 24 06:55:38 EDT 1991

```

* * *

Go to the [first](intro_1.html), [previous](intro_15.html), [next](intro_17.html), [last](intro_21.html) section, [table of contents](intro_toc.html).

