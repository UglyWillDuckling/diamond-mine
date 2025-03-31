Go to the [first](intro_1.html), [previous](intro_11.html), [next](intro_13.html), [last](intro_21.html) section, [table of contents](intro_toc.html).

* * *

# [Parameter Substitution](intro_toc.html\#SEC12)

In zsh, parameters are set like this:

```
% foo=bar
% echo $foo
bar

```

Spaces before or after the `=` are frowned upon:

```
% foo = bar
zsh: command not found: foo

```

Also, `set` doesn't work for setting parameters:

```
% set foo=bar
% set foo = bar
% echo $foo

%

```

Note that no error message was printed. This is because both of these
commands were perfectly valid; the `set` builtin assigns its
arguments to the _positional parameters_ ( `$1`, `$2`,
etc.).

```
% set foo=bar
% echo $1
foo=bar
% set foo = bar
% echo $3 $2
bar =

```

If you're really intent on using the csh syntax, define a function like
this:

```
% set () {
>    eval "$1$2$3"
> }
% set foo = bar
% set fuu=brrr
% echo $foo $fuu
bar brrr

```

But then, of course you can't use the form of `set` with options,
like `set -F` (which turns off filename generation). Also, the
`set` command by itself won't list all the parameters like it
should. To get around that you need a `case` statement:

```
% set () {
>    case $1 in
>    -*|+*|") builtin set $* ;;
>    *) eval "$1$2$3" ;;
>    esac
> }

```

For the most part, this should make csh users happy.

The following sh-style operators are supported in zsh:

```
% unset null
% echo ${foo-xxx}
bar
% echo ${null-xxx}
xxx
% unset null
% echo ${null=xxx}
xxx
% echo $null
xxx
% echo ${foo=xxx}
bar
% echo $foo
bar
% unset null
% echo ${null+set}

% echo ${foo+set}
set

```

Also, csh-style `:` modifiers may be appended to a parameter

substitution.

```
% echo $PWD
/home/learning/pf/zsh/zsh2.00/src
% echo $PWD:h
/home/learning/pf/zsh/zsh2.00
% echo $PWD:h:h
/home/learning/pf/zsh
% echo $PWD:t
src
% name=foo.c
% echo $name
foo.c
% echo $name:r
foo
% echo $name:e
c

```

The equivalent constructs in ksh (which are also supported in zsh) are a
bit more general and easier to remember. When the shell expands
`${foo#pat}`, it checks to see if pat matches a
substring at the beginning of the value of `foo`. If so, it
removes that portion of `foo`, using the shortest possible match.
With `${foo##pat}`, the longest possible match is removed.
`${foo%pat}` and `${foo%%pat}` remove the
match from the end. Here are the ksh equivalents of the `:`
modifiers:

```
% echo ${PWD%/*}
/home/learning/pf/zsh/zsh2.00
% echo ${PWD%/*/*}
/home/learning/pf/zsh
% echo ${PWD##*/}
src
% echo ${name%.*}
foo
% echo ${name#*.}
c

```

zsh also has upper/lowercase modifiers:

```
% xx=Test
% echo $xx:u
TEST
% echo $xx:l
test

```

and a substitution modifier:

```
% echo $name:s/foo/bar/
bar.c
% ls
foo.c    foo.h    foo.o    foo.pro
% for i in foo.*; mv $i $i:s/foo/bar/
% ls
bar.c    bar.h    bar.o    bar.pro

```

One possible source of confusion is the fact that in zsh, the result of
parameter substitution is _not_ split into words. Thus, this will
not work:

```
% srcs='glob.c exec.c init.c'
% ls $srcs
glob.c exec.c init.c not found

```

This is considered a feature, not a bug. If splitting were done by
default, as it is in most other shells, functions like this would not
work properly:

```
$ ll () { ls -F $* }
$ ll 'fuu bar'
fuu not found
bar not found

% ll 'fuu bar'
fuu bar not found

```

Of course, a hackish workaround is available in sh (and zsh):

```
% setopt shwordsplit
% ll () { ls -F "$@" }
% ll 'fuu bar'
fuu bar not found

```

If you like the sh behaviour, zsh can accomodate you:

```
% ls ${=srcs}
exec.c  glob.c  init.c
% setopt shwordsplit
% ls $srcs
exec.c  glob.c  init.c

```

Another way to get the `$srcs` trick to work is to use an array:

```
% unset srcs
% srcs=( glob.c exec.c init.c )
% ls $srcs
exec.c  glob.c  init.c

```

or an alias:

```
% alias -g SRCS='exec.c glob.c init.c'
% ls SRCS
exec.c  glob.c  init.c

```

Another option that modifies parameter expansion is `RCEXPANDPARAM`:

```
% echo foo/$srcs
foo/glob.c exec.c init.c
% setopt rcexpandparam
% echo foo/$srcs
foo/glob.c foo/exec.c foo/init.c
% echo foo/${^srcs}
foo/glob.c foo/exec.c foo/init.c
% echo foo/$^srcs
foo/glob.c foo/exec.c foo/init.c

```

* * *

Go to the [first](intro_1.html), [previous](intro_11.html), [next](intro_13.html), [last](intro_21.html) section, [table of contents](intro_toc.html).

