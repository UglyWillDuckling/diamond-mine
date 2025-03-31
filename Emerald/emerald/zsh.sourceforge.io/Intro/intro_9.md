Go to the [first](intro_1.html), [previous](intro_8.html), [next](intro_10.html), [last](intro_21.html) section, [table of contents](intro_toc.html).

* * *

# [History](intro_toc.html\#SEC9)

There are several ways to manipulate history in zsh. One way is to use
csh-style `!` history:

```
% /usr/local/bin/!:0 !-2*:s/foo/bar/ >>!$

```

If you don't want to use this, you can turn it off by typing
`setopt nobanghist`.

Another way is to use the `fc` command. For example, if you type
an erroneous command:

```
% for i in `cat /etc/clients`
 do
 rpu $i
 done
zsh: command not found: rpu
zsh: command not found: rpu
zsh: command not found: rpu
...

```

typing `fc` will execute an editor on this command, allowing you to
fix it. (The default editor is `vi`, by the way, not
`ed`).

```
% fc
49
/rpu/s//rup/p
 rup $i
w
49
q
for i in `cat /etc/clients`
 do
 rup $i
 done
        beam    up  2 days, 10:17,    load average: 0.86, 0.80, 0.50
         bow    up  4 days,  8:41,    load average: 0.91, 0.80, 0.50
        burn    up          17:18,    load average: 0.91, 0.80, 0.50
       burst    up  9 days,  1:49,    load average: 0.95, 0.80, 0.50
         tan    up          11:14,    load average: 0.91, 0.80, 0.50
       bathe    up  3 days, 17:49,    load average: 1.84, 1.79, 1.50
        bird    up  1 day,   9:13,    load average: 1.95, 1.82, 1.51
      bonnet    up  2 days, 21:18,    load average: 0.93, 0.80, 0.50
...

```

A variant of the `fc` command is `r`, which redoes the last
command, with optional changes:

```
% echo foo
foo
% r
echo foo
foo

% echo foo
foo
% r foo=bar
echo bar
bar

```

* * *

Go to the [first](intro_1.html), [previous](intro_8.html), [next](intro_10.html), [last](intro_21.html) section, [table of contents](intro_toc.html).

