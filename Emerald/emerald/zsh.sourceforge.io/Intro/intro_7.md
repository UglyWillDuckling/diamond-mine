Go to the [first](intro_1.html), [previous](intro_6.html), [next](intro_8.html), [last](intro_21.html) section, [table of contents](intro_toc.html).

* * *

# [Command/Process Substitution](intro_toc.html\#SEC7)

Command substitution in zsh can take two forms. In the traditional
form, a command enclosed in backquotes ( `` `...` ``) is replaced on the
command line with its output. This is the form used by the older
shells. Newer shells (like zsh) also provide another form,
`$(...)`. This form is much easier to nest.

```
% ls -l `echo /vmunix`
-rwxr-xr-x  1 root      1209702 May 14 19:04 /vmunix
% ls -l $(echo /vmunix)
-rwxr-xr-x  1 root      1209702 May 14 19:04 /vmunix
% who | grep mad
subbarao ttyt7   May 23 15:02   (mad55sx15.Prince)
pfalstad ttyu1   May 23 16:25   (mad55sx14.Prince)
subbarao ttyu6   May 23 15:04   (mad55sx15.Prince)
pfalstad ttyv3   May 23 16:25   (mad55sx14.Prince)
% who | grep mad | awk '{print $2}'
ttyt7
ttyu1
ttyu6
ttyv3
% cd /dev; ls -l $(who |
> grep $(echo mad) |
> awk '{ print $2 }')
crwx-w----  1 subbarao  20,  71 May 23 18:35 ttyt7
crw--w----  1 pfalstad  20,  81 May 23 18:42 ttyu1
crwx-w----  1 subbarao  20,  86 May 23 18:38 ttyu6
crw--w----  1 pfalstad  20,  99 May 23 18:41 ttyv3

```

Many common uses of command substitution, however, are superseded by
other mechanisms of zsh:

```
% ls -l `tty`
crw-rw-rw-  1 root      20,  28 May 23 18:35 /dev/ttyqc
% ls -l $TTY
crw-rw-rw-  1 root      20,  28 May 23 18:35 /dev/ttyqc
% ls -l `which rn`
-rwxr-xr-x  1 root       172032 Mar  6 18:40 /usr/princeton/bin/rn
% ls -l =rn
-rwxr-xr-x  1 root       172032 Mar  6 18:40 /usr/princeton/bin/rn

```

A command name with a `=` prepended is replaced with its full
pathname. This can be very convenient. If it's not convenient for you,
you can turn it off:

```
% ls
=foo    =bar
% ls =foo =bar
zsh: foo not found
% setopt noequals
% ls =foo =bar
=foo    =bar

```

Another nice feature is process substitution:

```
% who | fgrep -f =(print -l root lemke shgchan subbarao)
root     console May 19 10:41
lemke    ttyq0   May 22 10:05   (narnia:0.0)
lemke    ttyr7   May 22 10:05   (narnia:0.0)
lemke    ttyrd   May 22 10:05   (narnia:0.0)
shgchan  ttys1   May 23 16:52   (gaudi.Princeton.)
subbarao ttyt7   May 23 15:02   (mad55sx15.Prince)
subbarao ttyu6   May 23 15:04   (mad55sx15.Prince)
shgchan  ttyvb   May 23 16:51   (gaudi.Princeton.)

```

A command of the form `=(...)` is replaced with the name of a
_file_ containing its output. (A command substitution, on the
other hand, is replaced with the output itself.) `print -l` is
like `echo`, excepts that it prints its arguments one per line, the
way `fgrep` expects them:

```
% print -l foo bar
foo
bar

```

We could also have written:

```
% who | fgrep -f =(echo 'root
> lemke
> shgchan
> subbarao')

```

Using process substitution, you can edit the output of a command:

```
% ed =(who | fgrep -f ~/.friends)
355
g/lemke/d
w /tmp/filbar
226
q
% cat /tmp/filbar
root     console May 19 10:41
shgchan  ttys1   May 23 16:52   (gaudi.Princeton.)
subbarao ttyt7   May 23 15:02   (mad55sx15.Prince)
subbarao ttyu6   May 23 15:04   (mad55sx15.Prince)
shgchan  ttyvb   May 23 16:51   (gaudi.Princeton.)

```

or easily read archived mail:

```
% mail -f =(zcat ~/mail/oldzshmail.Z)
"/tmp/zsha06024": 84 messages, 0 new, 43 unread
>  1  U  TO: pfalstad, zsh (10)
   2  U  nytim!tim@uunet.uu.net, Re: Zsh on Sparc1 /SunOS 4.0.3
   3  U  JAM%TPN@utrcgw.utc.com, zsh fix (15)
   4  U  djm@eng.umd.edu, way to find out if running zsh? (25)
   5  U  djm@eng.umd.edu, Re: way to find out if running zsh? (17)
   6   r djm@eng.umd.edu, Meta . (18)
   7  U  jack@cs.glasgow.ac.uk, Re: problem building zsh (147)
   8  U  nytim!tim@uunet.uu.net, Re: Zsh on Sparc1 /SunOS 4.0.3
   9     ursa!jmd, Another fix... (61)
  10  U  pplacewa@bbn.com, Re: v18i084: Zsh 2.00 - A small complaint (36)
  11  U  lubkin@cs.rochester.edu, POSIX job control (34)
  12  U  yale!bronson!tan@uunet.UU.NET
  13  U  brett@rpi.edu, zsh (36)
  14  S  subbarao, zsh sucks!!!! (286)
  15  U  snibru!d241s008!d241s013!ala@relay.EU.net, zsh (165)
  16  U  nytim!tim@uunet.UU.NET, Re: Zsh on Sparc1 /SunOS 4.0.3
  17  U  subbarao, zsh is a junk shell (43)
  18  U  amaranth@vela.acs.oakland.edu, zsh (33)
43u/84 1: x
% ls -l /tmp/zsha06024
/tmp/zsha06024 not found

```

Note that the shell creates a temporary file, and deletes it when the
command is finished.

```
% diff =(ls) =(ls -F)
3c3
< fortune
---
> fortune*
10c10
< strfile
---
> strfile*

```

If you read zsh's man page, you may notice that `<(...)` is another
form of process substitution which is similar to `=(...)`. There
is an important difference between the two. In the `<(...)` case,
the shell creates a named pipe (FIFO) instead of a file. This is
better, since it does not fill up the file system; but it does not work
in all cases. In fact, if we had replaced `=(...)` with
`<(...)` in the examples above, all of them would have stopped
working except for `fgrep -f <(...)`. You can not edit a pipe, or
open it as a mail folder; `fgrep`, however, has no problem with
reading a list of words from a pipe. You may wonder why `diff
<(foo) bar` doesn't work, since `foo | diff - bar` works; this is
because `diff` creates a temporary file if it notices that one of
its arguments is `-`, and then copies its standard input to the
temporary file.

* * *

Go to the [first](intro_1.html), [previous](intro_6.html), [next](intro_8.html), [last](intro_21.html) section, [table of contents](intro_toc.html).

