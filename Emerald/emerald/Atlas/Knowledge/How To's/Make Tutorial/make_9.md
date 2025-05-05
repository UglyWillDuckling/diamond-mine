GNU Make - How to Run \@code{make}

Go to the [previous](make_8.md), [next](make_10.md) section.

# [How to Run `make`](make_toc.md#SEC78){#SEC78}

A makefile that says how to recompile a program can be used in more than
one way. The simplest use is to recompile every file that is out of
date. Usually, makefiles are written so that if you run `make` with no
arguments, it does just that.

But you might want to update only some of the files; you might want to
use a different compiler or different compiler options; you might want
just to find out which files are out of date without changing them.

By giving arguments when you run `make`, you can do any of these things
and many others.

The exit status of `make` is always one of three values:

`0`
:   The exit status is zero if `make` is successful.

`2`
:   The exit status is two if `make` encounters any errors. It will
    print messages describing the particular errors.

`1`
:   The exit status is one if you use the `` `-q' ``{.sample} flag and
    `make` determines that some target is not already up to date. See
    section [Instead of Executing the Commands](make_9.md#SEC81).

[]{#IDX517} []{#IDX518} []{#IDX519}

## [Arguments to Specify the Makefile](make_toc.md#SEC79){#SEC79}

The way to specify the name of the makefile is with the
`` `-f' ``{.sample} or `` `--file' ``{.sample} option
(`` `--makefile' ``{.sample} also works). For example,
`` `-f altmake' ``{.sample} says to use the file `` `altmake' `` as the
makefile.

If you use the `` `-f' ``{.sample} flag several times and follow each
`` `-f' ``{.sample} with an argument, all the specified files are used
jointly as makefiles.

If you do not use the `` `-f' ``{.sample} or `` `--file' ``{.sample}
flag, the default is to try `` `GNUmakefile' ``, `` `makefile' ``, and
`` `Makefile' ``, in that order, and use the first of these three which
exists or can be made (see section [Writing
Makefiles](make_3.md#SEC12)).

[]{#IDX520}

## [Arguments to Specify the Goals](make_toc.md#SEC80){#SEC80}

The [goals]{.dfn} are the targets that `make` should strive ultimately
to update. Other targets are updated as well if they appear as
dependencies of goals, or dependencies of dependencies of goals, etc.

By default, the goal is the first target in the makefile (not counting
targets that start with a period). Therefore, makefiles are usually
written so that the first target is for compiling the entire program or
programs they describe. If the first rule in the makefile has several
targets, only the first target in the rule becomes the default goal, not
the whole list.

You can specify a different goal or goals with arguments to `make`. Use
the name of the goal as an argument. If you specify several goals,
`make` processes each of them in turn, in the order you name them.

Any target in the makefile may be specified as a goal (unless it starts
with `` `-' ``{.sample} or contains an `` `=' ``{.sample}, in which case
it will be parsed as a switch or variable definition, respectively).
Even targets not in the makefile may be specified, if `make` can find
implicit rules that say how to make them.

One use of specifying a goal is if you want to compile only a part of
the program, or only one of several programs. Specify as a goal each
file that you wish to remake. For example, consider a directory
containing several programs, with a makefile that starts like this:

    .PHONY: all
    all: size nm ld ar as

If you are working on the program `size`, you might want to say
`` `make size' ``{.sample} so that only the files of that program are
recompiled.

Another use of specifying a goal is to make files that are not normally
made. For example, there may be a file of debugging output, or a version
of the program that is compiled specially for testing, which has a rule
in the makefile but is not a dependency of the default goal.

Another use of specifying a goal is to run the commands associated with
a phony target (see section [Phony Targets](make_4.md#SEC31)) or empty
target (see section [Empty Target Files to Record
Events](make_4.md#SEC33)). Many makefiles contain a phony target named
`` `clean' `` which deletes everything except source files. Naturally,
this is done only if you request it explicitly with
`` `make clean' ``{.sample}. Following is a list of typical phony and
empty target names. See section [Standard Targets for
Users](make_14.md#SEC112), for a detailed list of all the standard
target names which GNU software packages use.

`` `all' ``
:   Make all the top-level targets the makefile knows about.
    []{#IDX522}

`` `clean' ``
:   Delete all files that are normally created by running `make`.
    []{#IDX523}

`` `mostlyclean' ``
:   Like `` `clean' ``{.sample}, but may refrain from deleting a few
    files that people normally don\'t want to recompile. For example,
    the `` `mostlyclean' ``{.sample} target for GCC does not delete
    `` `libgcc.a' ``, because recompiling it is rarely necessary and
    takes a lot of time.
    []{#IDX524}

`` `distclean' ``
:   []{#IDX525}

`` `realclean' ``
:   []{#IDX526}

`` `clobber' ``
:   Any of these targets might be defined to delete *more* files than
    `` `clean' ``{.sample} does. For example, this would delete
    configuration files or links that you would normally create as
    preparation for compilation, even if the makefile itself cannot
    create these files.
    []{#IDX527}

`` `install' ``
:   Copy the executable file into a directory that users typically
    search for commands; copy any auxiliary files that the executable
    uses into the directories where it will look for them.
    []{#IDX528}

`` `print' ``
:   Print listings of the source files that have changed.
    []{#IDX529}

`` `tar' ``
:   Create a tar file of the source files.
    []{#IDX530}

`` `shar' ``
:   Create a shell archive (shar file) of the source files.
    []{#IDX531}

`` `dist' ``
:   Create a distribution file of the source files. This might be a tar
    file, or a shar file, or a compressed version of one of the above,
    or even more than one of the above.
    []{#IDX532}

`` `TAGS' ``
:   Update a tags table for this program.
    []{#IDX533}

`` `check' ``
:   []{#IDX534}

`` `test' ``
:   Perform self tests on the program this makefile builds.

[]{#IDX535} []{#IDX536}

## [Instead of Executing the Commands](make_toc.md#SEC81){#SEC81}

The makefile tells `make` how to tell whether a target is up to date,
and how to update each target. But updating the targets is not always
what you want. Certain options specify other activities for `make`.

`` `-n' ``{.sample}

:   

`` `--just-print' ``{.sample}

:   

`` `--dry-run' ``{.sample}
:   []{#IDX537} []{#IDX538} []{#IDX539} []{#IDX540}

`` `--recon' ``{.sample}

:   \"No-op\". The activity is to print what commands would be used to
    make the targets up to date, but not actually execute them.

`` `-t' ``{.sample}
:   []{#IDX541} []{#IDX542} []{#IDX543} []{#IDX544}

`` `--touch' ``{.sample}

:   \"Touch\". The activity is to mark the targets as up to date without
    actually changing them. In other words, `make` pretends to compile
    the targets but does not really change their contents.

`` `-q' ``{.sample}
:   []{#IDX545} []{#IDX546} []{#IDX547}

`` `--question' ``{.sample}

:   \"Question\". The activity is to find out silently whether the
    targets are up to date already; but execute no commands in either
    case. In other words, neither compilation nor output will occur.

`` `-W  ``{.sample}`file`{.variable}`'`{.sample}

:   

`` `--what-if= ``{.sample}`file`{.variable}`'`{.sample}

:   

`` `--assume-new= ``{.sample}`file`{.variable}`'`{.sample}
:   []{#IDX548} []{#IDX549} []{#IDX550} []{#IDX551} []{#IDX552}
    []{#IDX553}

`` `--new-file= ``{.sample}`file`{.variable}`'`{.sample}

:   \"What if\". Each `` `-W' ``{.sample} flag is followed by a file
    name. The given files\' modification times are recorded by `make` as
    being the present time, although the actual modification times
    remain the same. You can use the `` `-W' ``{.sample} flag in
    conjunction with the `` `-n' ``{.sample} flag to see what would
    happen if you were to modify specific files.

With the `` `-n' ``{.sample} flag, `make` prints the commands that it
would normally execute but does not execute them.

With the `` `-t' ``{.sample} flag, `make` ignores the commands in the
rules and uses (in effect) the command `touch` for each target that
needs to be remade. The `touch` command is also printed, unless
`` `-s' ``{.sample} or `.SILENT` is used. For speed, `make` does not
actually invoke the program `touch`. It does the work directly.

With the `` `-q' ``{.sample} flag, `make` prints nothing and executes no
commands, but the exit status code it returns is zero if and only if the
targets to be considered are already up to date. If the exit status is
one, then some updating needs to be done. If `make` encounters an error,
the exit status is two, so you can distinguish an error from a target
that is not up to date.

It is an error to use more than one of these three flags in the same
invocation of `make`.

The `` `-n' ``{.sample}, `` `-t' ``{.sample}, and `` `-q' ``{.sample}
options do not affect command lines that begin with `` `+' ``{.sample}
characters or contain the strings `` `$(MAKE)' ``{.sample} or
`` `${MAKE}' ``{.sample}. Note that only the line containing the
`` `+' ``{.sample} character or the strings `` `$(MAKE)' ``{.sample} or
`` `${MAKE}' ``{.sample} is run regardless of these options. Other lines
in the same rule are not run unless they too begin with
`` `+' ``{.sample} or contain `` `$(MAKE)' ``{.sample} or
`` `${MAKE}' ``{.sample} (See section [How the `MAKE` Variable
Works](make_5.md#SEC49).)

The `` `-W' ``{.sample} flag provides two features:

-   If you also use the `` `-n' ``{.sample} or `` `-q' ``{.sample} flag,
    you can see what `make` would do if you were to modify some files.
-   Without the `` `-n' ``{.sample} or `` `-q' ``{.sample} flag, when
    `make` is actually executing commands, the `` `-W' ``{.sample} flag
    can direct `make` to act as if some files had been modified, without
    actually modifying the files.

Note that the options `` `-p' ``{.sample} and `` `-v' ``{.sample} allow
you to obtain other information about `make` or about the makefiles in
use (see section [Summary of Options](make_9.md#SEC85)).

[]{#IDX554} []{#IDX555} []{#IDX556} []{#IDX557} []{#IDX558} []{#IDX559}

## [Avoiding Recompilation of Some Files](make_toc.md#SEC82){#SEC82}

Sometimes you may have changed a source file but you do not want to
recompile all the files that depend on it. For example, suppose you add
a macro or a declaration to a header file that many other files depend
on. Being conservative, `make` assumes that any change in the header
file requires recompilation of all dependent files, but you know that
they do not need to be recompiled and you would rather not waste the
time waiting for them to compile.

If you anticipate the problem before changing the header file, you can
use the `` `-t' ``{.sample} flag. This flag tells `make` not to run the
commands in the rules, but rather to mark the target up to date by
changing its last-modification date. You would follow this procedure:

1.  Use the command `` `make' ``{.sample} to recompile the source files
    that really need recompilation.
2.  Make the changes in the header files.
3.  Use the command `` `make -t' ``{.sample} to mark all the object
    files as up to date. The next time you run `make`, the changes in
    the header files will not cause any recompilation.

If you have already changed the header file at a time when some files do
need recompilation, it is too late to do this. Instead, you can use the
`` `-o  ``{.sample}`file`{.variable}`'`{.sample} flag, which marks a
specified file as \"old\" (see section [Summary of
Options](make_9.md#SEC85)). This means that the file itself will not
be remade, and nothing else will be remade on its account. Follow this
procedure:

1.  Recompile the source files that need compilation for reasons
    independent of the particular header file, with
    `` `make -o  ``{.sample}`headerfile`{.variable}`'`{.sample}. If
    several header files are involved, use a separate
    `` `-o' ``{.sample} option for each header file.
2.  Touch all the object files with `` `make -t' ``{.sample}.

[]{#IDX560} []{#IDX561} []{#IDX562} []{#IDX563}

## [Overriding Variables](make_toc.md#SEC83){#SEC83}

An argument that contains `` `=' ``{.sample} specifies the value of a
variable:
`` ` ``{.sample}`v`{.variable}`=`{.sample}`x`{.variable}`'`{.sample}
sets the value of the variable `v`{.variable} to `x`{.variable}. If you
specify a value in this way, all ordinary assignments of the same
variable in the makefile are ignored; we say they have been
[overridden]{.dfn} by the command line argument.

The most common way to use this facility is to pass extra flags to
compilers. For example, in a properly written makefile, the variable
`CFLAGS` is included in each command that runs the C compiler, so a file
`` `foo.c' `` would be compiled something like this:

    cc -c $(CFLAGS) foo.c

Thus, whatever value you set for `CFLAGS` affects each compilation that
occurs. The makefile probably specifies the usual value for `CFLAGS`,
like this:

    CFLAGS=-g

Each time you run `make`, you can override this value if you wish. For
example, if you say `` `make CFLAGS='-g -O'' ``{.sample}, each C
compilation will be done with `` `cc -c -g -O' ``{.sample}. (This
illustrates how you can use quoting in the shell to enclose spaces and
other special characters in the value of a variable when you override
it.)

The variable `CFLAGS` is only one of many standard variables that exist
just so that you can change them this way. See section [Variables Used
by Implicit Rules](make_10.md#SEC89), for a complete list.

You can also program the makefile to look at additional variables of
your own, giving the user the ability to control other aspects of how
the makefile works by changing the variables.

When you override a variable with a command argument, you can define
either a recursively-expanded variable or a simply-expanded variable.
The examples shown above make a recursively-expanded variable; to make a
simply-expanded variable, write `` `:=' ``{.sample} instead of
`` `=' ``{.sample}. But, unless you want to include a variable reference
or function call in the *value* that you specify, it makes no difference
which kind of variable you create.

There is one way that the makefile can change a variable that you have
overridden. This is to use the `override` directive, which is a line
that looks like this:
`` `override  ``{.sample}`variable`{.variable}` = `{.sample}`value`{.variable}`'`{.sample}
(see section [The `override` Directive](make_6.md#SEC64)).

[]{#IDX564} []{#IDX565}

## [Testing the Compilation of a Program](make_toc.md#SEC84){#SEC84}

Normally, when an error happens in executing a shell command, `make`
gives up immediately, returning a nonzero status. No further commands
are executed for any target. The error implies that the goal cannot be
correctly remade, and `make` reports this as soon as it knows.

When you are compiling a program that you have just changed, this is not
what you want. Instead, you would rather that `make` try compiling every
file that can be tried, to show you as many compilation errors as
possible. []{#IDX566} []{#IDX567}

On these occasions, you should use the `` `-k' ``{.sample} or
`` `--keep-going' ``{.sample} flag. This tells `make` to continue to
consider the other dependencies of the pending targets, remaking them if
necessary, before it gives up and returns nonzero status. For example,
after an error in compiling one object file, `` `make -k' ``{.sample}
will continue compiling other object files even though it already knows
that linking them will be impossible. In addition to continuing after
failed shell commands, `` `make -k' ``{.sample} will continue as much as
possible after discovering that it does not know how to make a target or
dependency file. This will always cause an error message, but without
`` `-k' ``{.sample}, it is a fatal error (see section [Summary of
Options](make_9.md#SEC85)).

The usual behavior of `make` assumes that your purpose is to get the
goals up to date; once `make` learns that this is impossible, it might
as well report the failure immediately. The `` `-k' ``{.sample} flag
says that the real purpose is to test as much as possible of the changes
made in the program, perhaps to find several independent problems so
that you can correct them all before the next attempt to compile. This
is why Emacs\' [M-x compile]{.kbd} command passes the
`` `-k' ``{.sample} flag by default.

[]{#IDX568} []{#IDX569} []{#IDX570}

## [Summary of Options](make_toc.md#SEC85){#SEC85}

Here is a table of all the options `make` understands:

`` `-b' ``{.sample}
:   []{#IDX572}

`` `-m' ``{.sample}
:   These options are ignored for compatibility with other versions of
    `make`.
    []{#IDX573}

`` `-C  ``{.sample}`dir`{.variable}`'`{.sample}
:   []{#IDX574}

`` `--directory= ``{.sample}`dir`{.variable}`'`{.sample}
:   Change to directory `dir`{.variable} before reading the makefiles.
    If multiple `` `-C' ``{.sample} options are specified, each is
    interpreted relative to the previous one:
    `` `-C / -C etc' ``{.sample} is equivalent to
    `` `-C /etc' ``{.sample}. This is typically used with recursive
    invocations of `make` (see section [Recursive Use of
    `make`](make_5.md#SEC48)).
    []{#IDX575}

`` `-d' ``{.sample}
:   []{#IDX576}

`` `--debug' ``{.sample}

:   Print debugging information in addition to normal processing. The
    debugging information says which files are being considered for
    remaking, which file-times are being compared and with what results,
    which files actually need to be remade, which implicit rules are
    considered and which are applied\--everything interesting about how
    `make` decides what to do.

    []{#IDX577}

`` `-e' ``{.sample}
:   []{#IDX578}

`` `--environment-overrides' ``{.sample}
:   Give variables taken from the environment precedence over variables
    from makefiles. See section [Variables from the
    Environment](make_6.md#SEC66).
    []{#IDX579}

`` `-f  ``{.sample}`file`{.variable}`'`{.sample}
:   []{#IDX580}

`` `--file= ``{.sample}`file`{.variable}`'`{.sample}
:   []{#IDX581}

`` `--makefile= ``{.sample}`file`{.variable}`'`{.sample}
:   Read the file named `file`{.variable} as a makefile. See section
    [Writing Makefiles](make_3.md#SEC12).
    []{#IDX582}

`` `-h' ``{.sample}
:   []{#IDX583}

`` `--help' ``{.sample}

:   Remind you of the options that `make` understands and then exit.

    []{#IDX584}

`` `-i' ``{.sample}
:   []{#IDX585}

`` `--ignore-errors' ``{.sample}
:   Ignore all errors in commands executed to remake files. See section
    [Errors in Commands](make_5.md#SEC46).
    []{#IDX586}

`` `-I  ``{.sample}`dir`{.variable}`'`{.sample}
:   []{#IDX587}

`` `--include-dir= ``{.sample}`dir`{.variable}`'`{.sample}
:   Specifies a directory `dir`{.variable} to search for included
    makefiles. See section [Including Other
    Makefiles](make_3.md#SEC15). If several `` `-I' ``{.sample}
    options are used to specify several directories, the directories are
    searched in the order specified.
    []{#IDX588}

`` `-j [ ``{.sample}`jobs`{.variable}`]'`{.sample}
:   []{#IDX589}

`` `--jobs=[ ``{.sample}`jobs`{.variable}`]'`{.sample}
:   Specifies the number of jobs (commands) to run simultaneously. With
    no argument, `make` runs as many jobs simultaneously as possible. If
    there is more than one `` `-j' ``{.sample} option, the last one is
    effective. See section [Parallel Execution](make_5.md#SEC45), for
    more information on how commands are run.
    []{#IDX590}

`` `-k' ``{.sample}
:   []{#IDX591}

`` `--keep-going' ``{.sample}
:   Continue as much as possible after an error. While the target that
    failed, and those that depend on it, cannot be remade, the other
    dependencies of these targets can be processed all the same. See
    section [Testing the Compilation of a Program](make_9.md#SEC84).
    []{#IDX592}

`` `-l [ ``{.sample}`load`{.variable}`]'`{.sample}
:   []{#IDX593}

`` `--load-average[= ``{.sample}`load`{.variable}`]'`{.sample}
:   []{#IDX594}

`` `--max-load[= ``{.sample}`load`{.variable}`]'`{.sample}
:   Specifies that no new jobs (commands) should be started if there are
    other jobs running and the load average is at least
    `load`{.variable} (a floating-point number). With no argument,
    removes a previous load limit. See section [Parallel
    Execution](make_5.md#SEC45).
    []{#IDX595}

`` `-n' ``{.sample}
:   []{#IDX596}

`` `--just-print' ``{.sample}
:   []{#IDX597}

`` `--dry-run' ``{.sample}
:   []{#IDX598}

`` `--recon' ``{.sample}

:   Print the commands that would be executed, but do not execute them.
    See section [Instead of Executing the Commands](make_9.md#SEC81).

    []{#IDX599}

`` `-o  ``{.sample}`file`{.variable}`'`{.sample}
:   []{#IDX600}

`` `--old-file= ``{.sample}`file`{.variable}`'`{.sample}
:   []{#IDX601}

`` `--assume-old= ``{.sample}`file`{.variable}`'`{.sample}
:   Do not remake the file `file`{.variable} even if it is older than
    its dependencies, and do not remake anything on account of changes
    in `file`{.variable}. Essentially the file is treated as very old
    and its rules are ignored. See section [Avoiding Recompilation of
    Some Files](make_9.md#SEC82).
    []{#IDX602}

`` `-p' ``{.sample}
:   []{#IDX603}

`` `--print-data-base' ``{.sample}
:   Print the data base (rules and variable values) that results from
    reading the makefiles; then execute as usual or as otherwise
    specified. This also prints the version information given by the
    `` `-v' ``{.sample} switch (see below). To print the data base
    without trying to remake any files, use
    `` `make -p -f /dev/null' ``{.sample}.
    []{#IDX604}

`` `-q' ``{.sample}
:   []{#IDX605}

`` `--question' ``{.sample}
:   \"Question mode\". Do not run any commands, or print anything; just
    return an exit status that is zero if the specified targets are
    already up to date, one if any remaking is required, or two if an
    error is encountered. See section [Instead of Executing the
    Commands](make_9.md#SEC81).
    []{#IDX606}

`` `-r' ``{.sample}
:   []{#IDX607}

`` `--no-builtin-rules' ``{.sample}
:   Eliminate use of the built-in implicit rules (see section [Using
    Implicit Rules](make_10.md#SEC86)). You can still define your own
    by writing pattern rules (see section [Defining and Redefining
    Pattern Rules](make_10.md#SEC91)). The `` `-r' ``{.sample} option
    also clears out the default list of suffixes for suffix rules (see
    section [Old-Fashioned Suffix Rules](make_10.md#SEC99)). But you
    can still define your own suffixes with a rule for `.SUFFIXES`, and
    then define your own suffix rules.
    []{#IDX608}

`` `-s' ``{.sample}
:   []{#IDX609}

`` `--silent' ``{.sample}
:   []{#IDX610}

`` `--quiet' ``{.sample}

:   Silent operation; do not print the commands as they are executed.
    See section [Command Echoing](make_5.md#SEC43).

    []{#IDX611}

`` `-S' ``{.sample}
:   []{#IDX612}

`` `--no-keep-going' ``{.sample}
:   []{#IDX613}

`` `--stop' ``{.sample}

:   Cancel the effect of the `` `-k' ``{.sample} option. This is never
    necessary except in a recursive `make` where `` `-k' ``{.sample}
    might be inherited from the top-level `make` via `MAKEFLAGS` (see
    section [Recursive Use of `make`](make_5.md#SEC48)) or if you set
    `` `-k' ``{.sample} in `MAKEFLAGS` in your environment.

    []{#IDX614}

`` `-t' ``{.sample}
:   []{#IDX615}

`` `--touch' ``{.sample}

:   Touch files (mark them up to date without really changing them)
    instead of running their commands. This is used to pretend that the
    commands were done, in order to fool future invocations of `make`.
    See section [Instead of Executing the Commands](make_9.md#SEC81).

    []{#IDX616}

`` `-v' ``{.sample}
:   []{#IDX617}

`` `--version' ``{.sample}
:   Print the version of the `make` program plus a copyright, a list of
    authors, and a notice that there is no warranty; then exit.
    []{#IDX618}

`` `-w' ``{.sample}
:   []{#IDX619}

`` `--print-directory' ``{.sample}
:   Print a message containing the working directory both before and
    after executing the makefile. This may be useful for tracking down
    errors from complicated nests of recursive `make` commands. See
    section [Recursive Use of `make`](make_5.md#SEC48). (In practice,
    you rarely need to specify this option since `` `make' ``{.sample}
    does it for you; see section [The `` `--print-directory' ``{.sample}
    Option](make_5.md#SEC52).)
    []{#IDX620}

`` `--no-print-directory' ``{.sample}
:   Disable printing of the working directory under `-w`. This option is
    useful when `-w` is turned on automatically, but you do not want to
    see the extra messages. See section [The
    `` `--print-directory' ``{.sample} Option](make_5.md#SEC52).
    []{#IDX621}

`` `-W  ``{.sample}`file`{.variable}`'`{.sample}
:   []{#IDX622}

`` `--what-if= ``{.sample}`file`{.variable}`'`{.sample}
:   []{#IDX623}

`` `--new-file= ``{.sample}`file`{.variable}`'`{.sample}
:   []{#IDX624}

`` `--assume-new= ``{.sample}`file`{.variable}`'`{.sample}
:   Pretend that the target `file`{.variable} has just been modified.
    When used with the `` `-n' ``{.sample} flag, this shows you what
    would happen if you were to modify that file. Without
    `` `-n' ``{.sample}, it is almost the same as running a `touch`
    command on the given file before running `make`, except that the
    modification time is changed only in the imagination of `make`. See
    section [Instead of Executing the Commands](make_9.md#SEC81).
    []{#IDX625} []{#IDX626} []{#IDX627}

`` `--warn-undefined-variables' ``{.sample}
:   Issue a warning message whenever `make` sees a reference to an
    undefined variable. This can be helpful when you are trying to debug
    makefiles which use variables in complex ways.

Go to the [previous](make_8.md), [next](make_10.md) section.
