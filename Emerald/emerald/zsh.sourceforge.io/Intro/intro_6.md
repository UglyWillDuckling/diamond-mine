Go to the [first](intro_1.html), [previous](intro_5.html), [next](intro_7.html), [last](intro_21.html) section, [table of contents](intro_toc.html).

* * *

# [Directory Stacks](intro_toc.html\#SEC6)

If you use csh, you may know about directory stacks. The `pushd`
command puts the current directory on the stack, and changes to a new
directory; the `popd` command pops a directory off the stack and
changes to it.

```
phoenix% cd
phoenix% PROMPT='Z %~> '
Z ~> pushd /tmp
/tmp ~
Z /tmp> pushd /usr/etc
/usr/etc /tmp ~
Z /usr/etc> pushd /usr/bin
/usr/bin /usr/etc /tmp ~
Z /usr/bin> popd
/usr/etc /tmp ~
Z /usr/etc> popd
/tmp ~
Z /tmp> pushd /etc
/etc /tmp ~
Z /etc> popd
/tmp ~

```

zsh's directory stack commands work similarly. One difference is the
way `pushd` is handled if no arguments are given. As in csh, this
exchanges the top two elements of the directory stack:

```
Z /tmp> dirs
/tmp ~
Z /tmp> pushd
~ /tmp

```

unless the stack only has one entry:

```
Z ~> popd
/tmp
Z /tmp> dirs
/tmp
Z /tmp> pushd
~ /tmp

```

or unless the `PUSHDTOHOME` option is set:

```
Z ~> setopt pushdtohome
Z ~> pushd
~ ~ /tmp

```

As an alternative to using directory stacks in this manner, we can get
something like a _directory history_ by setting a few more options
and parameters:

```
~> DIRSTACKSIZE=8
~> setopt autopushd pushdminus pushdsilent pushdtohome
~> alias dh='dirs -v'
~> cd /tmp
/tmp> cd /usr
/usr> cd bin
/usr/bin> cd ../pub
/usr/pub> dh
0       /usr/pub
1       /usr/bin
2       /usr
3       /tmp
4       ~
/usr/pub> cd -3
/tmp> dh
0       /tmp
1       /usr/pub
2       /usr/bin
3       /usr
4       ~
/tmp> ls =2/df
/usr/bin/df
/tmp> cd -4
~>

```

Note that `=2` expanded to the second directory in the history
list, and that `cd -3` recalled the third directory in the
list.

You may be wondering what all those options do. `AUTOPUSHD` made
`cd` act like `pushd`. ( `alias cd=pushd` is not
sufficient, for various reasons.) `PUSHDMINUS` swapped the meaning
of `cd +1` and `cd -1`; we want them to mean the opposite of
what they mean in csh, because it makes more sense in this scheme, and
it's easier to type:

```
~> dh
0       ~
1       /tmp
2       /usr/pub
3       /usr/bin
4       /usr
~> unsetopt pushdminus
~> cd +1
/tmp> dh
0       /tmp
1       ~
2       /usr/pub
3       /usr/bin
4       /usr
/tmp> cd +2
/usr/pub>

```

`PUSHDSILENT` keeps the shell from printing the directory stack
each time we do a `cd`, and `PUSHDTOHOME` we mentioned
earlier:

```
/usr/pub> unsetopt pushdsilent
/usr/pub> cd /etc
/etc /usr/pub /tmp ~ /usr/bin /usr
/etc> cd
~ /etc /usr/pub /tmp ~ /usr/bin /usr
~> unsetopt pushdtohome
~> cd
/etc ~ /usr/pub /tmp ~ /usr/bin /usr
/etc>

```

`DIRSTACKSIZE` keeps the directory stack from getting too large,
much like `HISTSIZE`:

```
/etc> setopt pushdsilent
/etc> cd /
/> cd /
/> cd /
/> cd /
/> cd /
/> cd /
/> cd /
/> cd /
/> dh
0       /
1       /
2       /
3       /
4       /
5       /
6       /
7       /

```

* * *

Go to the [first](intro_1.html), [previous](intro_5.html), [next](intro_7.html), [last](intro_21.html) section, [table of contents](intro_toc.html).

