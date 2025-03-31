Go to the [first](intro_1.html), [previous](intro_4.html), [next](intro_6.html), [last](intro_21.html) section, [table of contents](intro_toc.html).

* * *

# [Directories](intro_toc.html\#SEC5)

One nice feature of zsh is the way it prints directories. For example,
if we set the prompt like this:

```
phoenix% PROMPT='%~> '
~> cd src
~/src>

```

the shell will print the current directory in the prompt, using the
`~` character. However, zsh is smarter than most other shells in
this respect:

```
~/src> cd ~subbarao
~subbarao> cd ~maruchck
~maruchck> cd lib
~maruchck/lib> cd fun
~maruchck/lib/fun> foo=/usr/princeton/common/src
~maruchck/lib/fun> cd ~foo
~foo> cd ..
/usr/princeton/common> cd src
~foo> cd news/nntp
~foo/news/nntp> cd inews
~foo/news/nntp/inews>

```

Note that zsh prints _other_ users' directories in the form
`~user`. Also note that you can set a parameter and use it as a
directory name; zsh will act as if `foo` is a user with the login
directory `/usr/princeton/common/src`. This is convenient,
especially if you're sick of seeing prompts like this:

```
phoenix:/usr/princeton/common/src/X.V11R4/contrib/clients/xv/docs>

```

If you get stuck in this position, you can give the current directory a
short name, like this:

```
/usr/princeton/common/src/news/nntp/inews> inews=$PWD
/usr/princeton/common/src/news/nntp/inews> echo ~inews
/usr/princeton/common/src/news/nntp/inews
~inews>

```

When you reference a directory in the form `~inews`, the shell
assumes that you want the directory displayed in this form; thus simply
typing `echo ~inews` or `cd ~inews` causes the prompt to be
shortened. You can define a shell function for this purpose:

```
~inews> namedir () { $1=$PWD ;  : ~$1 }
~inews> cd /usr/princeton/bin
/usr/princeton/bin> namedir pbin
~pbin> cd /var/spool/mail
/var/spool/mail> namedir spool
~spool> cd .msgs
~spool/.msgs>

```

You may want to add this one-line function to your `` `.zshrc'``.

zsh can also put the current directory in your title bar, if you are
using a windowing system. One way to do this is with the `chpwd`
function, which is automatically executed by the shell whenever you
change directory. If you are using xterm, this will work:

```
chpwd () { print -Pn '^[]2;%~^G' }

```

The `-P` option tells `print` to treat its arguments like a
prompt string; otherwise the `%~` would not be expanded. The
`-n` option suppresses the terminating newline, as with
`echo`.

If you are using an IRIS `wsh`, do this:

```
chpwd () { print -Pn '^[P1.y%~^[' }

```

The `print -D` command has other uses. For example, to print the
current directory to standard output in short form, you can do this:

```
% print -D $PWD
~subbarao/src

```

and to print each component of the path in short form:

```
% print -D $path
/bin /usr/bin ~locbin ~locbin/X11 ~/bin

```

* * *

Go to the [first](intro_1.html), [previous](intro_4.html), [next](intro_6.html), [last](intro_21.html) section, [table of contents](intro_toc.html).

