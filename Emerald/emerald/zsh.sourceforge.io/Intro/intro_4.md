Go to the [first](intro_1.html), [previous](intro_3.html), [next](intro_5.html), [last](intro_21.html) section, [table of contents](intro_toc.html).

* * *

# [Shell Functions](intro_toc.html\#SEC4)

zsh also allows you to create your own commands by defining shell
functions. For example:

```
% yp () {
>       ypmatch $1 passwd.byname
> }
% yp pfalstad
pfalstad:*:3564:35:Paul John Falstad:/u/pfalstad:/usr/princeton/bin/zsh

```

This function looks up a user in the NIS password map. The `$1`
expands to the first argument to `yp`. The function could have
been equivalently defined in one of the following ways:

```
% function yp {
>       ypmatch $1 passwd.byname
> }
% function yp () {
>       ypmatch $1 passwd.byname
> }
% function yp () ypmatch $1 passwd.byname

```

Note that aliases are expanded when the function definition is parsed,
not when the function is executed. For example:

```
% alias ypmatch=echo
% yp pfalstad
pfalstad:*:3564:35:Paul John Falstad:/u/pfalstad:/usr/princeton/bin/zsh

```

Since the alias was defined after the function was parsed, it has no
effect on the function's execution. However, if we define the function
again with the alias in place:

```
% function yp () { ypmatch $1 passwd.byname }
% yp pfalstad
pfalstad passwd.byname

```

it is parsed with the new alias definition in place. Therefore, in
general you must define aliases before functions.

We can make the function take multiple arguments:

```
% unalias ypmatch
% yp () {
>       for i
>       do ypmatch $i passwd.byname
>       done
> }
% yp pfalstad subbarao sukthnkr
pfalstad:*:3564:35:Paul John Falstad:/u/pfalstad:/usr/princeton/bin/zsh
subbarao:*:3338:35:Kartik Subbarao:/u/subbarao:/usr/princeton/bin/zsh
sukthnkr:*:1267:35:Rahul Sukthankar:/u/sukthnkr:/usr/princeton/bin/tcsh

```

The `for i` loops through each of the function's arguments, setting
`i` equal to each of them in turn. We can also make the function
do something sensible if no arguments are given:

```
% yp () {
>       if (( $# == 0 ))
>       then echo usage: yp name ...; fi
>       for i; do ypmatch $i passwd.byname; done
> }
% yp
usage: yp name ...
% yp pfalstad sukthnkr
pfalstad:*:3564:35:Paul John Falstad:/u/pfalstad:/usr/princeton/bin/zsh
sukthnkr:*:1267:35:Rahul Sukthankar:/u/sukthnkr:/usr/princeton/bin/tcsh

```

`$#` is the number of arguments supplied to the function. If it is
equal to zero, we print a usage message; otherwise, we loop through the
arguments, and `ypmatch` all of them.

Here's a function that selects a random line from a file:

```
% randline () {
>       integer z=$(wc -l <$1)
>       sed -n $[RANDOM % z + 1]p $1
> }
% randline /etc/motd
PHOENIX WILL BE DOWN briefly Friday morning, 5/24/91 from 8 AM to
% randline /etc/motd
SunOS Release 4.1.1 (PHOENIX) #19: Tue May 14 19:03:15 EDT 1991
% randline /etc/motd
| Please use the "msgs" command to read announcements.  Refer to the   |
% echo $z

%

```

`randline` has a local variable, `z`, that holds the number of
lines in the file. `$[RANDOM % z + 1]` expands to a random number
between 1 and `z`. An expression of the form `$[...]` expands
to the value of the arithmetic expression within the brackets, and the
`RANDOM` variable returns a random number each time it is
referenced. `%` is the modulus operator, as in C. Therefore,
`sed -n $[RANDOM%z+1]p` picks a random line from its input, from 1
to `z`.

Function definitions can be viewed with the `functions` builtin:

```
% functions randline
randline () {
        integer z=$(wc -l <$1)
        sed -n $[RANDOM % z + 1]p $1

}
% functions
yp () {
        if let $# == 0

        then
                echo usage: yp name ...

        fi
        for i
        do
                ypmatch $i passwd.byname

                done

}
randline () {
        integer z=$(wc -l <$1)
        sed -n $[RANDOM % z + 1]p $1

}

```

Here's another one:

```
% cx () { chmod +x $* }
% ls -l foo bar
-rw-r--r--  1 pfalstad       29 May 24 04:38 bar
-rw-r--r--  1 pfalstad       29 May 24 04:38 foo
% cx foo bar
% ls -l foo bar
-rwxr-xr-x  1 pfalstad       29 May 24 04:38 bar
-rwxr-xr-x  1 pfalstad       29 May 24 04:38 foo

```

Note that this could also have been implemented as an alias:

```
% chmod 644 foo bar
% alias cx='chmod +x'
% cx foo bar
% ls -l foo bar
-rwxr-xr-x  1 pfalstad       29 May 24 04:38 bar
-rwxr-xr-x  1 pfalstad       29 May 24 04:38 foo

```

Instead of defining a lot of functions in your `` `.zshrc'``, all of
which you may not use, it is often better to use the `autoload`
builtin. The idea is, you create a directory where function definitions
are stored, declare the names in your `` `.zshrc'``, and tell the shell
where to look for them. Whenever you reference a function, the shell
will automatically load it into memory.

```
% mkdir /tmp/funs
% cat >/tmp/funs/yp
ypmatch $1 passwd.byname
^D
% cat >/tmp/funs/cx
chmod +x $*
^D
% FPATH=/tmp/funs
% autoload cx yp
% functions cx yp
undefined cx ()
undefined yp ()
% chmod 755 /tmp/funs/{cx,yp}
% yp egsirer
egsirer:*:3214:35:Emin Gun Sirer:/u/egsirer:/bin/sh
% functions yp
yp () {
        ypmatch $1 passwd.byname
}

```

This idea has other benefits. By adding a `#!` header to the
files, you can make them double as shell scripts. (Although it is
faster to use them as functions, since a separate process is not
created.)

```
% ed /tmp/funs/yp
25
i
#! /usr/local/bin/zsh
.
w
42
q
% </tmp/funs/yp
#! /usr/local/bin/zsh
ypmatch $1 passwd.byname
% /tmp/funs/yp sukthnkr
sukthnkr:*:1267:35:Rahul Sukthankar:/u/sukthnkr:/usr/princeton/bin/tcsh

```

Now other people, who may not use zsh, or who don't want to copy all of
your `` `.zshrc'``, may use these functions as shell scripts.

* * *

Go to the [first](intro_1.html), [previous](intro_3.html), [next](intro_5.html), [last](intro_21.html) section, [table of contents](intro_toc.html).

