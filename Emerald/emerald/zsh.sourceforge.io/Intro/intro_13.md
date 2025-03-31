Go to the [first](intro_1.html), [previous](intro_12.html), [next](intro_14.html), [last](intro_21.html) section, [table of contents](intro_toc.html).

* * *

# [Shell Parameters](intro_toc.html\#SEC13)

The shell has many predefined parameters that may be accessed. Here are
some examples:

```
% sleep 10 &
[1] 3820
% echo $!
3820
% set a b c
% echo $#
3
% echo $ARGC
3
% ( exit 20 ) ; echo $?
20
% false; echo $status
1

```

( `$?` and `$status` are equivalent.)

```
% echo $HOST $HOSTTYPE
dendrite sun4
% echo $UID $GID
701 60
% cd /tmp
% cd /home
% echo $PWD $OLDPWD
/home /tmp
% ls $OLDPWD/.getwd
/tmp/.getwd

```

`~+` and `~-` are short for `$PWD` and `$OLDPWD`,
respectively.

```
% ls ~-/.getwd
/tmp/.getwd
% ls -d ~+/learning
/home/learning
% echo $RANDOM
4880
% echo $RANDOM
11785
% echo $RANDOM
2062
% echo $TTY
/dev/ttyp4
% echo $VERSION
zsh v2.00.03
% echo $USERNAME
pf

```

The `cdpath` variable sets the search path for the `cd`
command. If you do not specify `.` somewhere in the path, it is
assumed to be the first component.

```
% cdpath=( /usr ~ ~/zsh )
% ls /usr
5bin         dict         lang         net          sccs         sys
5include     etc          lector       nserve       services     tmp
5lib         export       lib          oed          share        ucb
adm          games        local        old          skel         ucbinclude
bin          geac         lost+found   openwin      spool        ucblib
boot         hosts        macsyma_417  pat          src          xpg2bin
demo         include      man          princeton    stand        xpg2include
diag         kvm          mdec         pub          swap         xpg2lib
% cd spool
/usr/spool
% cd bin
/usr/bin
% cd func
~/func
% cd
% cd pub
% pwd
/u/pfalstad/pub
% ls -d /usr/pub
/usr/pub

```

`PATH` and `path` both set the search path for commands.
These two variables are equivalent, except that one is a string and one
is an array. If the user modifies `PATH`, the shell changes
`path` as well, and vice versa.

```
% PATH=/bin:/usr/bin:/tmp:.
% echo $path
/bin /usr/bin /tmp .
% path=( /usr/bin . /usr/local/bin /usr/ucb )
% echo $PATH
/usr/bin:.:/usr/local/bin:/usr/ucb

```

The same is true of `CDPATH` and `cdpath`:

```
% echo $CDPATH
/usr:/u/pfalstad:/u/pfalstad/zsh
% CDPATH=/u/subbarao:/usr/src:/tmp
% echo $cdpath
/u/subbarao /usr/src /tmp

```

In general, parameters with names in all lowercase are arrays;
assignments to them take the form:

```
name=(elem ...)

```

Parameters with names in all uppercase are strings. If there is both an
array and a string version of the same parameter, the string version is
a colon-separated list, like `PATH`.

`HISTFILE` is the name of the history file, where the history is
saved when a shell exits.

```
% zsh
phoenix% HISTFILE=/tmp/history
phoenix% SAVEHIST=20
phoenix% echo foo
foo
phoenix% date
Fri May 24 05:39:35 EDT 1991
phoenix% uptime
  5:39am  up 4 days, 20:02,  40 users,  load average: 2.30, 2.20, 2.00
phoenix% exit
% cat /tmp/history
HISTFILE=/tmp/history
SAVEHIST=20
echo foo
date
uptime
exit
% HISTSIZE=3
% history
   28  rm /tmp/history
   29  HISTSIZE=3
   30  history

```

In zsh, if you say

```
% >file

```

the command `cat` is normally assumed:

```
% >file
foo!
^D
% cat file
foo!

```

Thus, you can view a file simply by typing:

```
% <file
foo!

```

However, this is not csh or sh compatible. To correct this, change the
value of the parameter `NULLCMD`, which is `cat` by default.

```
% NULLCMD=:
% >file
% ls -l file
-rw-r--r--  1 pfalstad        0 May 24 05:41 file

```

If `NULLCMD` is unset, the shell reports an error if no command is
specified (like csh).

```
% unset NULLCMD
% >file
zsh: redirection with no command

```

Actually, `READNULLCMD` is used whenever you have a null command
reading input from a single file. Thus, you can set `READNULLCMD`
to `more` or `less` rather than `cat`. Also, if you set
`NULLCMD` to `:` for sh compatibility, you can still read files
with `< file` if you leave `READNULLCMD` set to `more`.

* * *

Go to the [first](intro_1.html), [previous](intro_12.html), [next](intro_14.html), [last](intro_21.html) section, [table of contents](intro_toc.html).

