GNU Make - Writing the Commands in Rules

Go to the [previous](make_4.md), [next](make_6.md) section.

[]{#IDX227} []{#IDX228} []{#IDX229}

# [Writing the Commands in Rules](make_toc.md#SEC42){#SEC42}

The commands of a rule consist of shell command lines to be executed one
by one. Each command line must start with a tab, except that the first
command line may be attached to the target-and-dependencies line with a
semicolon in between. Blank lines and lines of just comments may appear
among the command lines; they are ignored. (But beware, an apparently
\"blank\" line that begins with a tab is *not* blank! It is an empty
command; see section [Using Empty Commands](make_5.md#SEC54).)

Users use many different shell programs, but commands in makefiles are
always interpreted by `` `/bin/sh' `` unless the makefile specifies
otherwise. See section [Command Execution](make_5.md#SEC44).
[]{#IDX230} []{#IDX231} []{#IDX232}

The shell that is in use determines whether comments can be written on
command lines, and what syntax they use. When the shell is
`` `/bin/sh' ``, a `` `#' ``{.sample} starts a comment that extends to
the end of the line. The `` `#' ``{.sample} does not have to be at the
beginning of a line. Text on a line before a `` `#' ``{.sample} is not
part of the comment.

[]{#IDX233} []{#IDX234} []{#IDX235} []{#IDX236} []{#IDX237}

## [Command Echoing](make_toc.md#SEC43){#SEC43}

Normally `make` prints each command line before it is executed. We call
this [echoing]{.dfn} because it gives the appearance that you are typing
the commands yourself.

When a line starts with `` `@' ``{.sample}, the echoing of that line is
suppressed. The `` `@' ``{.sample} is discarded before the command is
passed to the shell. Typically you would use this for a command whose
only effect is to print something, such as an `echo` command to indicate
progress through the makefile:

    @echo About to make distribution files

[]{#IDX238} []{#IDX239} []{#IDX240} []{#IDX241}

When `make` is given the flag `` `-n' ``{.sample} or
`` `--just-print' ``{.sample}, echoing is all that happens, no
execution. See section [Summary of Options](make_9.md#SEC85). In this
case and only this case, even the commands starting with
`` `@' ``{.sample} are printed. This flag is useful for finding out
which commands `make` thinks are necessary without actually doing them.
[]{#IDX242} []{#IDX243} []{#IDX244} []{#IDX245}

The `` `-s' ``{.sample} or `` `--silent' ``{.sample} flag to `make`
prevents all echoing, as if all commands started with
`` `@' ``{.sample}. A rule in the makefile for the special target
`.SILENT` without dependencies has the same effect (see section [Special
Built-in Target Names](make_4.md#SEC34)). `.SILENT` is essentially
obsolete since `` `@' ``{.sample} is more flexible.

[]{#IDX246} []{#IDX247} []{#IDX248} []{#IDX249}

## [Command Execution](make_toc.md#SEC44){#SEC44}

When it is time to execute commands to update a target, they are
executed by making a new subshell for each line. (In practice, `make`
may take shortcuts that do not affect the results.) []{#IDX250}

**Please note:** this implies that shell commands such as `cd` that set
variables local to each process will not affect the following command
lines. If you want to use `cd` to affect the next command, put the two
on a single line with a semicolon between them. Then `make` will
consider them a single command and pass them, together, to a shell which
will execute them in sequence. For example:

    foo : bar/lose
            cd bar; gobble lose > ../foo

[]{#IDX251} []{#IDX252} []{#IDX253} []{#IDX254} []{#IDX255} []{#IDX256}

If you would like to split a single shell command into multiple lines of
text, you must use a backslash at the end of all but the last subline.
Such a sequence of lines is combined into a single line, by deleting the
backslash-newline sequences, before passing it to the shell. Thus, the
following is equivalent to the preceding example:

    foo : bar/lose
            cd bar;  \
            gobble lose > ../foo

[]{#IDX257}

The program used as the shell is taken from the variable `SHELL`. By
default, the program `` `/bin/sh' `` is used. []{#IDX258}

Unlike most variables, the variable `SHELL` is never set from the
environment. This is because the `SHELL` environment variable is used to
specify your personal choice of shell program for interactive use. It
would be very bad for personal choices like this to affect the
functioning of makefiles. See section [Variables from the
Environment](make_6.md#SEC66).

[]{#IDX259} []{#IDX260} []{#IDX261} []{#IDX262} []{#IDX263} []{#IDX264}

## [Parallel Execution](make_toc.md#SEC45){#SEC45}

GNU `make` knows how to execute several commands at once. Normally,
`make` will execute only one command at a time, waiting for it to finish
before executing the next. However, the `` `-j' ``{.sample} or
`` `--jobs' ``{.sample} option tells `make` to execute many commands
simultaneously.

If the `` `-j' ``{.sample} option is followed by an integer, this is the
number of commands to execute at once; this is called the number of [job
slots]{.dfn}. If there is nothing looking like an integer after the
`` `-j' ``{.sample} option, there is no limit on the number of job
slots. The default number of job slots is one, which means serial
execution (one thing at a time).

One unpleasant consequence of running several commands simultaneously is
that output from all of the commands comes when the commands send it, so
messages from different commands may be interspersed.

Another problem is that two processes cannot both take input from the
same device; so to make sure that only one command tries to take input
from the terminal at once, `make` will invalidate the standard input
streams of all but one running command. This means that attempting to
read from standard input will usually be a fatal error (a
`` `Broken pipe' ``{.sample} signal) for most child processes if there
are several. []{#IDX266} []{#IDX265}

It is unpredictable which command will have a valid standard input
stream (which will come from the terminal, or wherever you redirect the
standard input of `make`). The first command run will always get it
first, and the first command started after that one finishes will get it
next, and so on.

We will change how this aspect of `make` works if we find a better
alternative. In the mean time, you should not rely on any command using
standard input at all if you are using the parallel execution feature;
but if you are not using this feature, then standard input works
normally in all commands.

If a command fails (is killed by a signal or exits with a nonzero
status), and errors are not ignored for that command (see section
[Errors in Commands](make_5.md#SEC46)), the remaining command lines to
remake the same target will not be run. If a command fails and the
`` `-k' ``{.sample} or `` `--keep-going' ``{.sample} option was not
given (see section [Summary of Options](make_9.md#SEC85)), `make`
aborts execution. If make terminates for any reason (including a signal)
with child processes running, it waits for them to finish before
actually exiting.[]{#IDX267} []{#IDX268} []{#IDX269} []{#IDX270}
[]{#IDX271} []{#IDX272}

When the system is heavily loaded, you will probably want to run fewer
jobs than when it is lightly loaded. You can use the `` `-l' ``{.sample}
option to tell `make` to limit the number of jobs to run at once, based
on the load average. The `` `-l' ``{.sample} or
`` `--max-load' ``{.sample} option is followed by a floating-point
number. For example,

    -l 2.5

will not let `make` start more than one job if the load average is above
2.5. The `` `-l' ``{.sample} option with no following number removes the
load limit, if one was given with a previous `` `-l' ``{.sample} option.

More precisely, when `make` goes to start up a job, and it already has
at least one job running, it checks the current load average; if it is
not lower than the limit given with `` `-l' ``{.sample}, `make` waits
until the load average goes below that limit, or until all the other
jobs finish.

By default, there is no load limit.

[]{#IDX273} []{#IDX274} []{#IDX275}

## [Errors in Commands](make_toc.md#SEC46){#SEC46}

After each shell command returns, `make` looks at its exit status. If
the command completed successfully, the next command line is executed in
a new shell; after the last command line is finished, the rule is
finished.

If there is an error (the exit status is nonzero), `make` gives up on
the current rule, and perhaps on all rules.

Sometimes the failure of a certain command does not indicate a problem.
For example, you may use the `mkdir` command to ensure that a directory
exists. If the directory already exists, `mkdir` will report an error,
but you probably want `make` to continue regardless. []{#IDX276}

To ignore errors in a command line, write a `` `-' ``{.sample} at the
beginning of the line\'s text (after the initial tab). The
`` `-' ``{.sample} is discarded before the command is passed to the
shell for execution.

For example,

    clean:
            -rm -f *.o

This causes `rm` to continue even if it is unable to remove a file.
[]{#IDX278} []{#IDX279} []{#IDX280}

When you run `make` with the `` `-i' ``{.sample} or
`` `--ignore-errors' ``{.sample} flag, errors are ignored in all
commands of all rules. A rule in the makefile for the special target
`.IGNORE` has the same effect, if there are no dependencies. These ways
of ignoring errors are obsolete because `` `-' ``{.sample} is more
flexible.

When errors are to be ignored, because of either a `` `-' ``{.sample} or
the `` `-i' ``{.sample} flag, `make` treats an error return just like
success, except that it prints out a message that tells you the status
code the command exited with, and says that the error has been ignored.

When an error happens that `make` has not been told to ignore, it
implies that the current target cannot be correctly remade, and neither
can any other that depends on it either directly or indirectly. No
further commands will be executed for these targets, since their
preconditions have not been achieved.

[]{#IDX281} []{#IDX282}

Normally `make` gives up immediately in this circumstance, returning a
nonzero status. However, if the `` `-k' ``{.sample} or
`` `--keep-going' ``{.sample} flag is specified, `make` continues to
consider the other dependencies of the pending targets, remaking them if
necessary, before it gives up and returns nonzero status. For example,
after an error in compiling one object file, `` `make -k' ``{.sample}
will continue compiling other object files even though it already knows
that linking them will be impossible. See section [Summary of
Options](make_9.md#SEC85).

The usual behavior assumes that your purpose is to get the specified
targets up to date; once `make` learns that this is impossible, it might
as well report the failure immediately. The `` `-k' ``{.sample} option
says that the real purpose is to test as many of the changes made in the
program as possible, perhaps to find several independent problems so
that you can correct them all before the next attempt to compile. This
is why Emacs\' `compile` command passes the `` `-k' ``{.sample} flag by
default. []{#IDX283} []{#IDX284} []{#IDX285} []{#IDX286} []{#IDX287}

Usually when a command fails, if it has changed the target file at all,
the file is corrupted and cannot be used\--or at least it is not
completely updated. Yet the file\'s timestamp says that it is now up to
date, so the next time `make` runs, it will not try to update that file.
The situation is just the same as when the command is killed by a
signal; see section [Interrupting or Killing `make`](make_5.md#SEC47).
So generally the right thing to do is to delete the target file if the
command fails after beginning to change the file. `make` will do this if
`.DELETE_ON_ERROR` appears as a target. This is almost always what you
want `make` to do, but it is not historical practice; so for
compatibility, you must explicitly request it.

[]{#IDX288} []{#IDX289} []{#IDX290} []{#IDX291} []{#IDX292} []{#IDX293}

## [Interrupting or Killing `make`](make_toc.md#SEC47){#SEC47}

If `make` gets a fatal signal while a command is executing, it may
delete the target file that the command was supposed to update. This is
done if the target file\'s last-modification time has changed since
`make` first checked it.

The purpose of deleting the target is to make sure that it is remade
from scratch when `make` is next run. Why is this? Suppose you type
[Ctrl-c]{.kbd} while a compiler is running, and it has begun to write an
object file `` `foo.o' ``. The [Ctrl-c]{.kbd} kills the compiler,
resulting in an incomplete file whose last-modification time is newer
than the source file `` `foo.c' ``. But `make` also receives the
[Ctrl-c]{.kbd} signal and deletes this incomplete file. If `make` did
not do this, the next invocation of `make` would think that
`` `foo.o' `` did not require updating\--resulting in a strange error
message from the linker when it tries to link an object file half of
which is missing. []{#IDX294}

You can prevent the deletion of a target file in this way by making the
special target `.PRECIOUS` depend on it. Before remaking a target,
`make` checks to see whether it appears on the dependencies of
`.PRECIOUS`, and thereby decides whether the target should be deleted if
a signal happens. Some reasons why you might do this are that the target
is updated in some atomic fashion, or exists only to record a
modification-time (its contents do not matter), or must exist at all
times to prevent other sorts of trouble.

[]{#IDX295} []{#IDX296}

## [Recursive Use of `make`](make_toc.md#SEC48){#SEC48}

Recursive use of `make` means using `make` as a command in a makefile.
This technique is useful when you want separate makefiles for various
subsystems that compose a larger system. For example, suppose you have a
subdirectory `` `subdir' `` which has its own makefile, and you would
like the containing directory\'s makefile to run `make` on the
subdirectory. You can do it by writing this:

    subsystem:
            cd subdir; $(MAKE)

or, equivalently, this (see section [Summary of
Options](make_9.md#SEC85)):

    subsystem:
            $(MAKE) -C subdir

You can write recursive `make` commands just by copying this example,
but there are many things to know about how they work and why, and about
how the sub-`make` relates to the top-level `make`.

[]{#IDX299} []{#IDX300}

### [How the `MAKE` Variable Works](make_toc.md#SEC49){#SEC49}

Recursive `make` commands should always use the variable `MAKE`, not the
explicit command name `` `make' ``{.sample}, as shown here:

    subsystem:
            cd subdir; $(MAKE)

The value of this variable is the file name with which `make` was
invoked. If this file name was `` `/bin/make' ``, then the command
executed is `` `cd subdir; /bin/make' ``{.sample}. If you use a special
version of `make` to run the top-level makefile, the same special
version will be executed for recursive invocations. []{#IDX301}

As a special feature, using the variable `MAKE` in the commands of a
rule alters the effects of the `` `-t' ``{.sample}
(`` `--touch' ``{.sample}), `` `-n' ``{.sample}
(`` `--just-print' ``{.sample}), or `` `-q' ``{.sample}
(`` `--question' ``{.sample}) option. Using the `MAKE` variable has the
same effect as using a `` `+' ``{.sample} character at the beginning of
the command line. See section [Instead of Executing the
Commands](make_9.md#SEC81).

Consider the command `` `make -t' ``{.sample} in the above example. (The
`` `-t' ``{.sample} option marks targets as up to date without actually
running any commands; see section [Instead of Executing the
Commands](make_9.md#SEC81).) Following the usual definition of
`` `-t' ``{.sample}, a `` `make -t' ``{.sample} command in the example
would create a file named `` `subsystem' `` and do nothing else. What
you really want it to do is run `` `cd subdir; make -t' ``{.sample}; but
that would require executing the command, and `` `-t' ``{.sample} says
not to execute commands.[]{#IDX303} []{#IDX304} []{#IDX302}

The special feature makes this do what you want: whenever a command line
of a rule contains the variable `MAKE`, the flags `` `-t' ``{.sample},
`` `-n' ``{.sample} and `` `-q' ``{.sample} do not apply to that line.
Command lines containing `MAKE` are executed normally despite the
presence of a flag that causes most commands not to be run. The usual
`MAKEFLAGS` mechanism passes the flags to the sub-`make` (see section
[Communicating Options to a Sub-`make`](make_5.md#SEC51)}), so your
request to touch the files, or print the commands, is propagated to the
subsystem.

[]{#IDX305} []{#IDX306} []{#IDX307} []{#IDX308} []{#IDX309} []{#IDX310}
[]{#IDX311}

### [Communicating Variables to a Sub-`make`](make_toc.md#SEC50){#SEC50}

Variable values of the top-level `make` can be passed to the sub-`make`
through the environment by explicit request. These variables are defined
in the sub-`make` as defaults, but do not override what is specified in
the makefile used by the sub-`make` makefile unless you use the
`` `-e' ``{.sample} switch (see section [Summary of
Options](make_9.md#SEC85)).

To pass down, or [export]{.dfn}, a variable, `make` adds the variable
and its value to the environment for running each command. The
sub-`make`, in turn, uses the environment to initialize its table of
variable values. See section [Variables from the
Environment](make_6.md#SEC66).

Except by explicit request, `make` exports a variable only if it is
either defined in the environment initially or set on the command line,
and if its name consists only of letters, numbers, and underscores. Some
shells cannot cope with environment variable names consisting of
characters other than letters, numbers, and underscores.

The special variables `SHELL` and `MAKEFLAGS` are always exported
(unless you unexport them). `MAKEFILES` is exported if you set it to
anything.

`make` automatically passes down variable values that were defined on
the command line, by putting them in the `MAKEFLAGS` variable. See the
next section.

Variables are *not* normally passed down if they were created by default
by `make` (see section [Variables Used by Implicit
Rules](make_10.md#SEC89)). The sub-`make` will define these for
itself.[]{#IDX312}

If you want to export specific variables to a sub-`make`, use the
`export` directive, like this:

    export variable ...

[]{#IDX313} If you want to *prevent* a variable from being exported, use
the `unexport` directive, like this:

    unexport variable ...

As a convenience, you can define a variable and export it at the same
time by doing:

    export variable = value

has the same result as:

    variable = value
    export variable

and

    export variable := value

has the same result as:

    variable := value
    export variable

Likewise,

    export variable += value

is just like:

    variable += value
    export variable

See section [Appending More Text to Variables](make_6.md#SEC63).

You may notice that the `export` and `unexport` directives work in
`make` in the same way they work in the shell, `sh`.

If you want all variables to be exported by default, you can use
`export` by itself:

    export

This tells `make` that variables which are not explicitly mentioned in
an `export` or `unexport` directive should be exported. Any variable
given in an `unexport` directive will still *not* be exported. If you
use `export` by itself to export variables by default, variables whose
names contain characters other than alphanumerics and underscores will
not be exported unless specifically mentioned in an `export`
directive.[]{#IDX314}

The behavior elicited by an `export` directive by itself was the default
in older versions of GNU `make`. If your makefiles depend on this
behavior and you want to be compatible with old versions of `make`, you
can write a rule for the special target `.EXPORT_ALL_VARIABLES` instead
of using the `export` directive. This will be ignored by old `make`s,
while the `export` directive will cause a syntax error.[]{#IDX315}

Likewise, you can use `unexport` by itself to tell `make` *not* to
export variables by default. Since this is the default behavior, you
would only need to do this if `export` had been used by itself earlier
(in an included makefile, perhaps). You **cannot** use `export` and
`unexport` by themselves to have variables exported for some commands
and not for others. The last `export` or `unexport` directive that
appears by itself determines the behavior for the entire run of
`make`.[]{#IDX316} []{#IDX317}

As a special feature, the variable `MAKELEVEL` is changed when it is
passed down from level to level. This variable\'s value is a string
which is the depth of the level as a decimal number. The value is
`` `0' ``{.sample} for the top-level `make`; `` `1' ``{.sample} for a
sub-`make`, `` `2' ``{.sample} for a sub-sub-`make`, and so on. The
incrementation happens when `make` sets up the environment for a
command.

The main use of `MAKELEVEL` is to test it in a conditional directive
(see section [Conditional Parts of Makefiles](make_7.md#SEC67)); this
way you can write a makefile that behaves one way if run recursively and
another way if run directly by you.[]{#IDX318}

You can use the variable `MAKEFILES` to cause all sub-`make` commands to
use additional makefiles. The value of `MAKEFILES` is a
whitespace-separated list of file names. This variable, if defined in
the outer-level makefile, is passed down through the environment; then
it serves as a list of extra makefiles for the sub-`make` to read before
the usual or specified ones. See section [The Variable
`MAKEFILES`](make_3.md#SEC16)}.

[]{#IDX319} []{#IDX320}

### [Communicating Options to a Sub-`make`](make_toc.md#SEC51){#SEC51}

[]{#IDX321}

Flags such as `` `-s' ``{.sample} and `` `-k' ``{.sample} are passed
automatically to the sub-`make` through the variable `MAKEFLAGS`. This
variable is set up automatically by `make` to contain the flag letters
that `make` received. Thus, if you do `` `make -ks' ``{.sample} then
`MAKEFLAGS` gets the value `` `ks' ``{.sample}.

As a consequence, every sub-`make` gets a value for `MAKEFLAGS` in its
environment. In response, it takes the flags from that value and
processes them as if they had been given as arguments. See section
[Summary of Options](make_9.md#SEC85). []{#IDX322} []{#IDX323}
[]{#IDX324}

Likewise variables defined on the command line are passed to the
sub-`make` through `MAKEFLAGS`. Words in the value of `MAKEFLAGS` that
contain `` `=' ``{.sample}, `make` treats as variable definitions just
as if they appeared on the command line. See section [Overriding
Variables](make_9.md#SEC83). []{#IDX325} []{#IDX326} []{#IDX327}
[]{#IDX328} []{#IDX329} []{#IDX330} []{#IDX331} []{#IDX332} []{#IDX333}
[]{#IDX334} []{#IDX335} []{#IDX336} []{#IDX337} []{#IDX338} []{#IDX339}
[]{#IDX340} []{#IDX341}

The options `` `-C' ``{.sample}, `` `-f' ``{.sample},
`` `-I' ``{.sample}, `` `-o' ``{.sample}, and `` `-W' ``{.sample} are
not put into `MAKEFLAGS`; these options are not passed down.[]{#IDX342}
[]{#IDX343} []{#IDX344} []{#IDX345}

The `` `-j' ``{.sample} option is a special case (see section [Parallel
Execution](make_5.md#SEC45)). If you set it to some numeric value,
`` `-j 1' ``{.sample} is always put into `MAKEFLAGS` instead of the
value you specified. This is because if the `` `-j' ``{.sample} option
were passed down to sub-`make`s, you would get many more jobs running in
parallel than you asked for. If you give `` `-j' ``{.sample} with no
numeric argument, meaning to run as many jobs as possible in parallel,
this is passed down, since multiple infinities are no more than one.

If you do not want to pass the other flags down, you must change the
value of `MAKEFLAGS`, like this:

    MAKEFLAGS=
    subsystem:
            cd subdir; $(MAKE)

or like this:

    subsystem:
            cd subdir; $(MAKE) MAKEFLAGS=

[]{#IDX346}

The command line variable definitions really appear in the variable
`MAKEOVERRIDES`, and `MAKEFLAGS` contains a reference to this variable.
If you do want to pass flags down normally, but don\'t want to pass down
the command line variable definitions, you can reset `MAKEOVERRIDES` to
empty, like this:

    MAKEOVERRIDES =

[]{#IDX348} []{#IDX347} This is not usually useful to do. However, some
systems have a small fixed limit on the size of the environment, and
putting so much information in into the value of `MAKEFLAGS` can exceed
it. If you see the error message `` `Arg list too long' ``{.sample},
this may be the problem. []{#IDX350} []{#IDX349} (For strict compliance
with POSIX.2, changing `MAKEOVERRIDES` does not affect `MAKEFLAGS` if
the special target `` `.POSIX' ``{.sample} appears in the makefile. You
probably do not care about this.) []{#IDX351}

A similar variable `MFLAGS` exists also, for historical compatibility.
It has the same value as `MAKEFLAGS` except that it does not contain the
command line variable definitions, and it always begins with a hyphen
unless it is empty (`MAKEFLAGS` begins with a hyphen only when it begins
with an option that has no single-letter version, such as
`` `--warn-undefined-variables' ``{.sample}). `MFLAGS` was traditionally
used explicitly in the recursive `make` command, like this:

    subsystem:
            cd subdir; $(MAKE) $(MFLAGS)

but now `MAKEFLAGS` makes this usage redundant. If you want your
makefiles to be compatible with old `make` programs, use this technique;
it will work fine with more modern `make` versions too. []{#IDX352}
[]{#IDX353} []{#IDX354} []{#IDX355}

The `MAKEFLAGS` variable can also be useful if you want to have certain
options, such as `` `-k' ``{.sample} (see section [Summary of
Options](make_9.md#SEC85)), set each time you run `make`. You simply
put a value for `MAKEFLAGS` in your environment. You can also set
`MAKEFLAGS` in a makefile, to specify additional flags that should also
be in effect for that makefile. (Note that you cannot use `MFLAGS` this
way. That variable is set only for compatibility; `make` does not
interpret a value you set for it in any way.)

When `make` interprets the value of `MAKEFLAGS` (either from the
environment or from a makefile), it first prepends a hyphen if the value
does not already begin with one. Then it chops the value into words
separated by blanks, and parses these words as if they were options
given on the command line (except that `` `-C' ``{.sample},
`` `-f' ``{.sample}, `` `-h' ``{.sample}, `` `-o' ``{.sample},
`` `-W' ``{.sample}, and their long-named versions are ignored; and
there is no error for an invalid option).

If you do put `MAKEFLAGS` in your environment, you should be sure not to
include any options that will drastically affect the actions of `make`
and undermine the purpose of makefiles and of `make` itself. For
instance, the `` `-t' ``{.sample}, `` `-n' ``{.sample}, and
`` `-q' ``{.sample} options, if put in one of these variables, could
have disastrous consequences and would certainly have at least
surprising and probably annoying effects.

[]{#IDX356} []{#IDX357} []{#IDX358}

### [The `` `--print-directory' ``{.sample} Option](make_toc.md#SEC52){#SEC52}

If you use several levels of recursive `make` invocations, the
`` `-w' ``{.sample} or `` `--print-directory' ``{.sample} option can
make the output a lot easier to understand by showing each directory as
`make` starts processing it and as `make` finishes processing it. For
example, if `` `make -w' ``{.sample} is run in the directory
`` `/u/gnu/make' ``, `make` will print a line of the form:

    make: Entering directory `/u/gnu/make'.

before doing anything else, and a line of the form:

    make: Leaving directory `/u/gnu/make'.

when processing is completed. []{#IDX359} []{#IDX360} []{#IDX361}
[]{#IDX362} []{#IDX363} []{#IDX364} []{#IDX365} []{#IDX366} []{#IDX367}
[]{#IDX368}

Normally, you do not need to specify this option because
`` `make' ``{.sample} does it for you: `` `-w' ``{.sample} is turned on
automatically when you use the `` `-C' ``{.sample} option, and in
sub-`make`s. `make` will not automatically turn on `` `-w' ``{.sample}
if you also use `` `-s' ``{.sample}, which says to be silent, or if you
use `` `--no-print-directory' ``{.sample} to explicitly disable it.

[]{#IDX369} []{#IDX370}

## [Defining Canned Command Sequences](make_toc.md#SEC53){#SEC53}

When the same sequence of commands is useful in making various targets,
you can define it as a canned sequence with the `define` directive, and
refer to the canned sequence from the rules for those targets. The
canned sequence is actually a variable, so the name must not conflict
with other variable names.

Here is an example of defining a canned sequence of commands:

    define run-yacc
    yacc $(firstword $^)
    mv y.tab.c $@
    endef

Here `run-yacc` is the name of the variable being defined; `endef` marks
the end of the definition; the lines in between are the commands. The
`define` directive does not expand variable references and function
calls in the canned sequence; the `` `$' ``{.sample} characters,
parentheses, variable names, and so on, all become part of the value of
the variable you are defining. See section [Defining Variables
Verbatim](make_6.md#SEC65), for a complete explanation of `define`.

The first command in this example runs Yacc on the first dependency of
whichever rule uses the canned sequence. The output file from Yacc is
always named `` `y.tab.c' ``. The second command moves the output to the
rule\'s target file name.

To use the canned sequence, substitute the variable into the commands of
a rule. You can substitute it like any other variable (see section
[Basics of Variable References](make_6.md#SEC56)). Because variables
defined by `define` are recursively expanded variables, all the variable
references you wrote inside the `define` are expanded now. For example:

    foo.c : foo.y
            $(run-yacc)

`` `foo.y' ``{.sample} will be substituted for the variable
`` `$^' ``{.sample} when it occurs in `run-yacc`\'s value, and
`` `foo.c' ``{.sample} for `` `$@' ``{.sample}.

This is a realistic example, but this particular one is not needed in
practice because `make` has an implicit rule to figure out these
commands based on the file names involved (see section [Using Implicit
Rules](make_10.md#SEC86)). []{#IDX372} []{#IDX373} []{#IDX374}

In command execution, each line of a canned sequence is treated just as
if the line appeared on its own in the rule, preceded by a tab. In
particular, `make` invokes a separate subshell for each line. You can
use the special prefix characters that affect command lines
(`` `@' ``{.sample}, `` `-' ``{.sample}, and `` `+' ``{.sample}) on each
line of a canned sequence. See section [Writing the Commands in
Rules](make_5.md#SEC42). For example, using this canned sequence:

    define frobnicate
    @echo "frobnicating target $@"
    frob-step-1 $< -o $@-step-1
    frob-step-2 $@-step-1 -o $@
    endef

`make` will not echo the first line, the `echo` command. But it *will*
echo the following two command lines.

On the other hand, prefix characters on the command line that refers to
a canned sequence apply to every line in the sequence. So the rule:

    frob.out: frob.in
        @$(frobnicate)

does not echo *any* commands. (See section [Command
Echoing](make_5.md#SEC43), for a full explanation of
`` `@' ``{.sample}.)

[]{#IDX375} []{#IDX376}

## [Using Empty Commands](make_toc.md#SEC54){#SEC54}

It is sometimes useful to define commands which do nothing. This is done
simply by giving a command that consists of nothing but whitespace. For
example:

    target: ;

defines an empty command string for `` `target' ``. You could also use a
line beginning with a tab character to define an empty command string,
but this would be confusing because such a line looks empty. []{#IDX377}

You may be wondering why you would want to define a command string that
does nothing. The only reason this is useful is to prevent a target from
getting implicit commands (from implicit rules or the `.DEFAULT` special
target; see section [Using Implicit Rules](make_10.md#SEC86) and see
section [Defining Last-Resort Default Rules](make_10.md#SEC98)).

You may be inclined to define empty command strings for targets that are
not actual files, but only exist so that their dependencies can be
remade. However, this is not the best way to do that, because the
dependencies may not be remade properly if the target file actually does
exist. See section [Phony Targets](make_4.md#SEC31), for a better way
to do this.

Go to the [previous](make_4.md), [next](make_6.md) section.
