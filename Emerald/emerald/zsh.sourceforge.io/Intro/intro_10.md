Go to the [first](intro_1.html), [previous](intro_9.html), [next](intro_11.html), [last](intro_21.html) section, [table of contents](intro_toc.html).

* * *

# [Command Line Editing](intro_toc.html\#SEC10)

zsh's command line editor, **ZLE**, is quite powerful. It is
designed to emulate either emacs or vi; the default is emacs. To set
the bindings for vi mode, type `bindkey -v`.

In addition to basic editing, the shell allows you to recall previous
lines in the history. In emacs mode, this is done with ^P
(control-P):

```
% ls ~
-           README      file        mail        pub         tmp
Mailboxes   bin         func        nicecolors  scr         zsh
News        etc         iris        notes       src
% echo foobar
foobar
% ^P
% echo foobar^P
% ls ~_

```

Pressing ^P once brings up the previous line ( `echo foobar`);
pressing it again brings up the line before that ( `ls ~`). The
cursor is left at the end of the line, allowing you to edit the line if
desired before executing it. In many cases, **ZLE** eliminates the
need for the `fc` command, since it is powerful enough to handle
even multiline commands:

```
% for i in a b c d e
> do
> echo $i
> done
a
b
c
d
e
% ^P
% for i in a b c d e
 do
 echo $i
 done_

```

Now you can just move up to the part you want to change...

```
% for i in a_ b c d e
 do
 echo $i
 done

```

change it, and execute the new command.

```
% for i in f g h i j
 do
 echo $i
 done
f
g
h
i
j

```

Also, you can search the history for a certain command using
`ESC-P`:

```
% set ESC-P
% setopt autolist ESC-P
% setopt nocorrect_

```

Another way is to do an incremental search, emacs-style:

```
% ^R
% _
i-search:

% l_s /usr/bin
i-search: l

% date > foofil_e.c
i-search: le

```

Another useful feature of the editor is command and filename completion.

```
% compTAB
% compress _

% ls /nicTAB
% ls /nicecolors _

% ls /usr/prTAB
% ls /usr/princeton/_

% ls -l =comTAB
% ls -l =compress _

```

If the completion is ambiguous, the editor will beep. You can list
possible completions by pressing ^D:

```
% ls /vmuTAB beep
% ls /vmunix_
% ls /vmunix^D
vmunix                    vmunix.old
vmunix.new.kernelmap.old  vmunix.org

```

Or, you could just set the `AUTOLIST` option:

```
% setopt autolist
% ls /vmuTAB beep
vmunix                    vmunix.old
vmunix.new.kernelmap.old  vmunix.org
% ls /vmunix_

```

Another option you could set is `RECEXACT`, which causes exact
matches to be accepted, even if there are other possible
completions:

```
% setopt recexact
% ls /vmuTAB beep
vmunix                    vmunix.old
vmunix.new.kernelmap.old  vmunix.org
% ls /vmunix_TAB
% ls /vmunix _

```

The `fignore` variable lists suffixes of files to ignore during
completion.

```
% ls fooTAB beep
foofile.c  foofile.o
% fignore=( .o \~ .bak .junk )
% ls fooTAB
% ls foofile.c _

```

Since `foofile.o` has a suffix that is in the `fignore` list,
it was not considered a possible completion of `foo`.

Username completion is also supported:

```
% ls ~pfalTAB
% ls ~pfalstad/_

```

and parameter name completion:

```
% echo $ORGTAB
% echo $ORGANIZATION _

```

and hostname completion, if you give the shell a list of hosts to
complete:

```
% hosts=( phoenix.princeton.edu uunet.uu.net nic.ddn.mil
> diskfarm.princeton.edu gnu.ai.mit.edu
> eniac.seas.upenn.edu )
% telnet diskTAB
% telnet diskfarm.princeton.edu _

% ftp uuTAB
% ftp uunet.uu.net _

% mail subbarao@phTAB
% mail subbarao@phoenix.princeton.edu _

```

and option completion:

```
% setopt noclTAB
% setopt noclobber _

```

and binding completion:

```
% bindkey '^X^X' puTAB
% bindkey '^X^X' push-line _

```

The `compctl` command is used to control how completion works. For
example, to specify that certain commands show take commands as
arguments, you use `compctl -c`:

```
% compctl -c man nohup
% man uptTAB
% man uptime _

```

To specify that a command should complete filenames, you should use
`compctl -f`. This is the default. It can be combined with
`-c`, as well.

```
% compctl -cf echo
% echo uptTAB
% echo uptime _

% echo foTAB
% echo foo.c

```

Similarly, use `-h` to specify hostnames, `-o` to specify
options, `-v` to specify variables, and `-b` to specify
bindings.

```
% compctl -h rlogin
% compctl -hfc rsh
% compctl -b bindkey

```

You can also use `-k` to specify a custom list of keywords to use
in completion.

```
% ftphosts=(ftp.uu.net wuarchive.wustl.edu)
% compctl -k ftphosts ftp
% ftp wuTAB
% ftp wuarchive.wustl.edu _

% friends=(cpirazzi subbarao sukthnkr)
% compctl -k friends mail finger su
% finger cpTAB
% finger cpirazzi _

```

In addition to completion, `TAB` performs expansion if possible.

```
% ls *.cTAB
% ls foofile.c fortune.c rnd.c strfile.c unstr.c_

```

For example, suppose you have a bunch of weird files in an important
directory:

```
% ls
  * * *       ; & % $??foo  dspfok        foo.c
  !"foo"!       ` \ `         foo           rrr

```

You want to remove them, but you don't want to damage `foo.c`.
Here is one way to do this:

```
% rm *TAB
% rm \ \ \*\ \*\ \*\ \ \  \!\"foo\"\! \;\ \&\ %\ \$'
'foo \`\ \\\ \` dspfok foo foo.c rrr_

```

When you expand `*`, zsh inserts the names of all the files into the
editing buffer, with proper shell quoting. Now, just move back and
remove `foo.c` from the buffer:

```
% rm \ \ \*\ \*\ \*\ \ \  \!\"foo\"\! \;\ \&\ %\ \$'
'foo \`\ \\\ \` dspfok foo \kxr\l'|\nxu\(ul'rr

```

and press return. Everything except `foo.c` will be deleted from
the directory.

Here's another trick; let's say you have typed this command in:

```
% gcc -o x.out foob.c -g -Wpointer-arith -Wtrigraphs_

```

and you forget which library you want. You need to escape out for a
minute and check by typing `ls /usr/lib`, or some other such
command; but you don't want to retype the whole command again, and you
can't press return now because the current command is incomplete. In
zsh, you can put the line on the _buffer stack_, using `ESC-Q`,

and type some other commands. The next time a prompt is printed, the
`gcc` line will be popped off the stack and put in the editing
buffer automatically; you can then enter the proper library name and
press return (or, `ESC-Q` again and look for some other
libraries whose names you forgot).

A similar situation: what if you forget the option to gcc that finds
bugs using AI techniques? You could either use `ESC-Q` again,
and type `man gcc`, or you could press `ESC-H`, which

essentially does the same thing; it puts the current line on the buffer
stack, and executes the command `run-help gcc`, where
`run-help` is an alias for `man`.

Another interesting command is `ESC-A`. This executes the
current line, but retains it in the buffer, so that it appears again
when the next prompt is printed. Also, the cursor stays in the same
place. This is useful for executing a series of similar
commands:

```
% cc grok.c -g -lc -lgl -lsun -lmalloc -Bstatic -o b.out
% cc fubar.c -g -lc -lgl -lsun -lmalloc -Bstatic -o b.out
% cc fooble.c -g -lc -lgl -lsun -lmalloc -Bstatic -o b.out

```

The `ESC-'` command is useful for managing the shell's quoting

conventions. Let's say you want to print this string:

```
don't do that; type 'rm -rf \*', with a \ before the *.

```

All that is necessary is to type it into the editing buffer:

```
% don't do that; type 'rm -rf \*', with a \ before the *.

```

press `ESC-'` (escape-quote):

```
% 'don'\"t do that; type '\"rm -rf \*'\", with a \ before the *.'

```

then move to the beginning and add the `echo` command.

```
% echo 'don'\"t do that; type '\"rm -rf \*'\", with a \ before the *.'
don't do that; type 'rm -rf \*', with a \ before the *.

```

Let's say you want to create an alias to do this `echo` command.
This can be done by recalling the line with ^P and pressing
`ESC-'` again:

```
% 'echo '\"don'\"\'\"'\"t do that; type '\"\'\"'\"rm -rf
\*'\"\'\"'\", with a \ before the *.'\"'

```

and then move to the beginning and add the command to create an alias.

```
% alias zoof='echo '\"don'\"\'\"'\"t do that; type '\"\'\"'\"
rm -rf \*'\"\'\"'\", with a \ before the *.'\"'
% zoof
don't do that; type 'rm -rf \*', with a \ before the *.

```

Another interesting option is `MENUCOMPLETE`. This affects the way
`TAB` works. Let's look at the `/vmunix` example again:

```
% setopt menucomplete
% ls /vmuTAB
% ls /vmunixTAB
% ls /vmunix.new.kernelmap.oldTAB
% ls /vmunix.old_

```

Each time you press `TAB`, it displays the next possible completion.
In this way, you can cycle through the possible completions until you
find the one you want.

The `AUTOMENU` option makes a nice compromise between this method
of completion and the regular method. If you set this option, pressing
the `TAB` key repeatedly after an ambiguous completion will cycle
through the possible completions.

* * *

Go to the [first](intro_1.html), [previous](intro_9.html), [next](intro_11.html), [last](intro_21.html) section, [table of contents](intro_toc.html).

