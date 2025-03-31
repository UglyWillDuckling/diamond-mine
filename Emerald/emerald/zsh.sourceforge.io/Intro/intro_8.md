Go to the [first](intro_1.html), [previous](intro_7.html), [next](intro_9.html), [last](intro_21.html) section, [table of contents](intro_toc.html).

* * *

# [Aliasing](intro_toc.html\#SEC8)

Often-used commands can be abbreviated with an alias:

```
% alias uc=uncompress
% ls
hanoi.Z
% uc hanoi
% ls
hanoi

```

or commands with certain desired options:

```
% alias fm='finger -m'
% fm root
Login name: root                        In real life: Operator
Directory: /                            Shell: /bin/csh
On since May 19 10:41:15 on console     3 days 5 hours Idle Time
No unread mail
No Plan.

% alias lock='lock -p -60000'
% lock
lock: /dev/ttyr4 on phoenix. timeout in 60000 minutes
time now is Fri May 24 04:23:18 EDT 1991
Key:

% alias l='ls -AF'
% l /
.bash_history              kadb*
.bashrc                    lib@
.cshrc                     licensed/
.exrc                      lost+found/
.login                     macsyma
...

```

Aliases can also be used to replace old commands:

```
% alias grep=egrep ps=sps make=gmake
% alias whoami='echo root'
% whoami
root

```

or to define new ones:

```
% cd /
% alias sz='ls -l | sort -n +3 | tail -10'
% sz
drwxr-sr-x  7 bin          3072 May 23 11:59 etc
drwxrwxrwx 26 root         5120 May 24 04:20 tmp
drwxr-xr-x  2 root         8192 Dec 26 19:34 lost+found
drwxr-sr-x  2 bin         14848 May 23 18:48 dev
-r--r--r--  1 root       140520 Dec 26 20:08 boot
-rwxr-xr-x  1 root       311172 Dec 26 20:08 kadb
-rwxr-xr-x  1 root      1209695 Apr 16 15:33 vmunix.old
-rwxr-xr-x  1 root      1209702 May 14 19:04 vmunix
-rwxr-xr-x  1 root      1209758 May 21 12:23 vmunix.new.kernelmap.old
-rwxr-xr-x  1 root      1711848 Dec 26 20:08 vmunix.org
% cd
% alias rable='ls -AFtrd *(R)' nrable='ls -AFtrd *(^R)'
% rable
README      func/       bin/        pub/        News/       src/
nicecolors  etc/        scr/        tmp/        iris/       zsh*
% nrable
Mailboxes/  mail/       notes

```

(The pattern `*(R)` matches all readable files in the current
directory, and `*(^R)` matches all unreadable files.)

Most other shells have aliases of this kind ( _command_ aliases).
However, zsh also has _global_ aliases, which are substituted
anywhere on a line. Global aliases can be used to abbreviate
frequently-typed usernames, hostnames, etc.

```
% alias -g me=pfalstad gun=egsirer mjm=maruchck
% who | grep me
pfalstad ttyp0   May 24 03:39   (mickey.Princeton)
pfalstad ttyp5   May 24 03:42   (mickey.Princeton)
% fm gun
Login name: egsirer                     In real life: Emin Gun Sirer
Directory: /u/egsirer                   Shell: /bin/sh
Last login Thu May 23 19:05 on ttyq3 from bow.Princeton.ED
New mail received Fri May 24 02:30:28 1991;
  unread since Fri May 24 02:30:27 1991
% alias -g phx=phoenix.princeton.edu warc=wuarchive.wustl.edu
% ftp warc
Connected to wuarchive.wustl.edu.

```

Here are some more interesting uses.

```
% alias -g M='| more' GF='| fgrep -f ~/.friends'
% who M    # pipes the output of who through more
% who GF   # see if your friends are on
% w GF     # see what your friends are doing

```

Another example makes use of zsh's process substitution. If you run
NIS, and you miss being able to do this:

```
% grep pfalstad /etc/passwd

```

you can define an alias that will seem more natural than `ypmatch
pfalstad passwd`:

```
% alias -g PASS='<(ypcat passwd)'
% grep pfalstad PASS
pfalstad:*:3564:35:Paul John Falstad:/u/pfalstad:/usr/princeton/bin/zsh

```

If you're really crazy, you can even call it `/etc/passwd`:

```
% alias -g /etc/passwd='<(ypcat passwd)'
% grep pfalstad /etc/passwd
pfalstad:*:3564:35:Paul John Falstad:/u/pfalstad:/usr/princeton/bin/zsh

```

The last example shows one of the perils of global aliases; they have a
lot of potential to cause confusion. For example, if you defined a
global alias called `|` (which is possible), zsh would begin to act
very strangely; every pipe symbol would be replaced with the text of
your alias. To some extent, global aliases are like macros in C;
discretion is advised in using them and in choosing names for them.
Using names in all caps is not a bad idea, especially for aliases which
introduce shell metasyntax (like `M` and `GF` above).

Note that zsh aliases are not like csh aliases. The syntax for defining
them is different, and they do not have arguments. All your favorite
csh aliases will probably not work under zsh. For example, if you try:

```
alias rm mv '\!* /tmp/wastebasket'

```

no aliases will be defined, but zsh will not report an error. In csh,
this line defines an alias that makes `rm` safe--files that are
`rm`'d will be moved to a temporary directory instead of instantly
destroyed. In zsh's syntax, however, this line asks the shell to print
any existing alias definitions for `rm`, `mv`, or `!*
/tmp/wastebasket`. Since there are none, most likely, the shell will
not print anything, although `alias` will return a nonzero exit
code. The proper syntax is this:

```
alias rm='mv \!* /tmp/wastebasket'

```

However, this won't work either:

```
% rm foo.dvi
zsh: no matches found: !*

```

While this makes `rm` safe, it is certainly not what the user
intended. In zsh, you must use a shell function for this:

```
% unalias rm
% rm () { mv $* /tmp/wastebasket }
% rm foo.dvi
% ls /tmp/wastebasket
foo.dvi

```

While this is much cleaner and easier to read (I hope you will agree),
it is not csh-compatible. Therefore, a script to convert csh aliases
and variables has been provided. You should only need to use it once,
to convert all your csh aliases and parameters to zsh format:

```
% csh
csh> alias
l       ls -AF
more    less
on      last -2 !:1 ; who | grep !:1
csh> exit
% c2z >neat_zsh_aliases
% cat neat_zsh_aliases
alias l='ls -AF'
alias more='less'
on () { last -2 $1 ; who | grep $1 }
...

```

The first two aliases were converted to regular zsh aliases, while the
third, since it needed to handle arguments, was converted to a function.
`c2z` can convert most aliases to zsh format without any problems.
However, if you're using some really arcane csh tricks, or if you have
an alias with a name like `do` (which is reserved in zsh), you may
have to fix some of the aliases by hand.

The `c2z` script checks your csh setup, and produces a list
of zsh commands which replicate your aliases and parameter settings
as closely as possible. You could include its output in your
startup file, `` `.zshrc'``.

* * *

Go to the [first](intro_1.html), [previous](intro_7.html), [next](intro_9.html), [last](intro_21.html) section, [table of contents](intro_toc.html).

