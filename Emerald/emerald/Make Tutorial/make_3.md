GNU Make - Writing Makefiles

Go to the [previous](make_2.md), [next](make_4.md) section.

# [Writing Makefiles](make_toc.md#SEC12){#SEC12}

The information that tells `make` how to recompile a system comes from
reading a data base called the [makefile]{.dfn}.

## [What Makefiles Contain](make_toc.md#SEC13)

Makefiles contain five kinds of things: 
- [explicit rules]{.dfn},
- [implicit rules]{.dfn},
- [variable definitions]{.dfn},
- [directives]{.dfn},``
- [comments]{.dfn}. 

Rules, variables, and
directives are described at length in later chapters.

[]{#IDX49} []{#IDX50}

-   An [explicit rule]{.dfn} says when and how to remake one or more
    files, called the rule\'s targets. It lists the other files that the
    targets [depend on]{.dfn}, and may also give commands to use to
    create or update the targets. See section [Writing
    Rules](make_4.md#SEC19). []{#IDX51} []{#IDX52}
-   An [implicit rule]{.dfn} says when and how to remake a class of
    files based on their names. It describes how a target may depend on
    a file with a name similar to the target and gives commands to
    create or update such a target. See section [Using Implicit
    Rules](make_10.md#SEC86). []{#IDX53}
-   A [variable definition]{.dfn} is a line that specifies a text string
    value for a variable that can be substituted into the text later.
    The simple makefile example shows a variable definition for
    `objects` as a list of all object files (see section [Variables Make
    Makefiles Simpler](make_2.md#SEC8)). []{#IDX54}
-   A [directive]{.dfn} is a command for `make` to do something special
    while reading the makefile. These include:
    -   Reading another makefile (see section [Including Other
        Makefiles](make_3.md#SEC15)).
    -   Deciding (based on the values of variables) whether to use or
        ignore a part of the makefile (see section [Conditional Parts of
        Makefiles](make_7.md#SEC67)).
    -   Defining a variable from a verbatim string containing multiple
        lines (see section [Defining Variables
        Verbatim](make_6.md#SEC65)).

    []{#IDX55} []{#IDX56}
-   `` `#' ``{.sample} in a line of a makefile starts a [comment]{.dfn}.
    It and the rest of the line are ignored, except that a trailing
    backslash not escaped by another backslash will continue the comment
    across multiple lines. Comments may appear on any of the lines in
    the makefile, except within a `define` directive, and perhaps within
    commands (where the shell decides what is a comment). A line
    containing just a comment (with perhaps spaces before it) is
    effectively blank, and is ignored.

[]{#IDX57} []{#IDX58} []{#IDX59} []{#IDX60}

## [What Name to Give Your Makefile](make_toc.md#SEC14)

By default, when `make` looks for the makefile, it tries the following
names, in order: `` `GNUmakefile' ``, `` `makefile' `` and
`` `Makefile' ``.[]{#IDX62} []{#IDX63} []{#IDX61} []{#IDX64}

Normally you should call your makefile either `` `makefile' `` or
`` `Makefile' ``. (We recommend `` `Makefile' `` because it appears
prominently near the beginning of a directory listing, right near other
important files such as `` `README' ``.) The first name checked,
`` `GNUmakefile' ``, is not recommended for most makefiles. You should
use this name if you have a makefile that is specific to GNU `make`, and
will not be understood by other versions of `make`. Other `make`
programs look for `` `makefile' `` and `` `Makefile' ``, but not
`` `GNUmakefile' ``.

If `make` finds none of these names, it does not use any makefile. Then
you must specify a goal with a command argument, and `make` will attempt
to figure out how to remake it using only its built-in implicit rules.
See section [Using Implicit Rules](make_10.md#SEC86). []{#IDX65}
[]{#IDX66} []{#IDX67}

If you want to use a nonstandard name for your makefile, you can specify
the makefile name with the `` `-f' ``{.sample} or
`` `--file' ``{.sample} option. The arguments
`` `-f  ``{.sample}`name`{.variable}`'`{.sample} or
`` `--file= ``{.sample}`name`{.variable}`'`{.sample} tell `make` to read
the file `name`{.variable} as the makefile. If you use more than one
`` `-f' ``{.sample} or `` `--file' ``{.sample} option, you can specify
several makefiles. All the makefiles are effectively concatenated in the
order specified. The default makefile names `` `GNUmakefile' ``,
`` `makefile' `` and `` `Makefile' `` are not checked automatically if
you specify `` `-f' ``{.sample} or `` `--file' ``{.sample}.[]{#IDX69}

## [Including Other Makefiles](make_toc.md#SEC15){#SEC15}

[]{#IDX74}

The `include` directive tells `make` to suspend reading the current
makefile and read one or more other makefiles before continuing. The
directive is a line in the makefile that looks like this:

    include filenames...

`filenames`{.variable} can contain shell file name patterns. []{#IDX76}
[]{#IDX77} []{#IDX75}

Extra spaces are allowed and ignored at the beginning of the line, but a
tab is not allowed. (If the line begins with a tab, it will be
considered a command line.) Whitespace is required between `include` and
the file names, and between file names; extra whitespace is ignored
there and at the end of the directive. A comment starting with
`` `#' ``{.sample} is allowed at the end of the line. If the file names
contain any variable or function references, they are expanded. See
section [How to Use Variables](make_6.md#SEC55).

For example, if you have three `` `.mk' `` files, `` `a.mk' ``,
`` `b.mk' ``, and `` `c.mk' ``, and `$(bar)` expands to `bish bash`,
then the following expression

    include foo *.mk $(bar)

is equivalent to

    include foo a.mk b.mk c.mk bish bash

When `make` processes an `include` directive, it suspends reading of the
containing makefile and reads from each listed file in turn. When that
is finished, `make` resumes reading the makefile in which the directive
appears.

One occasion for using `include` directives is when several programs,
handled by individual makefiles in various directories, need to use a
common set of variable definitions (see section [Setting
Variables](make_6.md#SEC62)) or pattern rules (see section [Defining
and Redefining Pattern Rules](make_10.md#SEC91)).

Another such occasion is when you want to generate dependencies from
source files automatically; the dependencies can be put in a file that
is included by the main makefile. This practice is generally cleaner
than that of somehow appending the dependencies to the end of the main
makefile as has been traditionally done with other versions of `make`.
See section [Generating Dependencies Automatically](make_4.md#SEC41).

If the specified name does not start with a slash, and the file is not
found in the current directory, several other directories are searched.
First, any directories you have specified with the `` `-I' ``{.sample}
or `` `--include-dir' ``{.sample} option are searched (see section
[Summary of Options](make_9.md#SEC85)). Then the following directories
(if they exist) are searched, in this order:
`` ` ```prefix`{.variable}`/include'` (normally
`` `/usr/local/include' ``) `` `/usr/gnu/include' ``,
`` `/usr/local/include' ``, `` `/usr/include' ``.

If an included makefile cannot be found in any of these directories, a
warning message is generated, but it is not an immediately fatal error;
processing of the makefile containing the `include` continues. Once it
has finished reading makefiles, `make` will try to remake any that are
out of date or don\'t exist. See section [How Makefiles Are
Remade](make_3.md#SEC17). Only after it has tried to find a way to
remake a makefile and failed, will `make` diagnose the missing makefile
as a fatal error.

If you want `make` to simply ignore a makefile which does not exist and
cannot be remade, with no error message, use the `-include` directive
instead of `include`, like this:

    -include filenames...

This is acts like `include` in every way except that there is no error
(not even a warning) if any of the `filenames`{.variable} do not exist.

## [The Variable `MAKEFILES`](make_toc.md#SEC16){#SEC16}

If the environment variable `MAKEFILES` is defined, `make` considers its
value as a list of names (separated by whitespace) of additional
makefiles to be read before the others. This works much like the
`include` directive: various directories are searched for those files
(see section [Including Other Makefiles](make_3.md#SEC15)). In
addition, the default goal is never taken from one of these makefiles
and it is not an error if the files listed in `MAKEFILES` are not
found.[]{#IDX89}

The main use of `MAKEFILES` is in communication between recursive
invocations of `make` (see section [Recursive Use of
`make`](make_5.md#SEC48)}). It usually is not desirable to set the
environment variable before a top-level invocation of `make`, because it
is usually better not to mess with a makefile from outside. However, if
you are running `make` without a specific makefile, a makefile in
`MAKEFILES` can do useful things to help the built-in implicit rules
work better, such as defining search paths (see section [Searching
Directories for Dependencies](make_4.md#SEC25)).

Some users are tempted to set `MAKEFILES` in the environment
automatically on login, and program makefiles to expect this to be done.
This is a very bad idea, because such makefiles will fail to work if run
by anyone else. It is much better to write explicit `include` directives
in the makefiles. See section [Including Other
Makefiles](make_3.md#SEC15).

## [How Makefiles Are Remade](make_toc.md#SEC17)

Sometimes makefiles can be remade from other files, such as RCS or SCCS
files. If a makefile can be remade from other files, you probably want
`make` to get an up-to-date version of the makefile to read in.

To this end, after reading in all makefiles, `make` will consider each
as a goal target and attempt to update it. If a makefile has a rule
which says how to update it (found either in that very makefile or in
another one) or if an implicit rule applies to it (see section [Using
Implicit Rules](make_10.md#SEC86)), it will be updated if necessary.
After all makefiles have been checked, if any have actually been
changed, `make` starts with a clean slate and reads all the makefiles
over again. (It will also attempt to update each of them over again, but
normally this will not change them again, since they are already up to
date.)

If the makefiles specify a double-colon rule to remake a file with
commands but no dependencies, that file will always be remade (see
section [Double-Colon Rules](make_4.md#SEC40)). In the case of
makefiles, a makefile that has a double-colon rule with commands but no
dependencies will be remade every time `make` is run, and then again
after `make` starts over and reads the makefiles in again. This would
cause an infinite loop: `make` would constantly remake the makefile, and
never do anything else. So, to avoid this, `make` will **not** attempt
to remake makefiles which are specified as double-colon targets but have
no dependencies.

If you do not specify any makefiles to be read with `` `-f' ``{.sample}
or `` `--file' ``{.sample} options, `make` will try the default makefile
names; see section [What Name to Give Your Makefile](make_3.md#SEC14).
Unlike makefiles explicitly requested with `` `-f' ``{.sample} or
`` `--file' ``{.sample} options, `make` is not certain that these
makefiles should exist. However, if a default makefile does not exist
but can be created by running `make` rules, you probably want the rules
to be run so that the makefile can be used.

Therefore, if none of the default makefiles exists, `make` will try to
make each of them in the same order in which they are searched for (see
section [What Name to Give Your Makefile](make_3.md#SEC14)) until it
succeeds in making one, or it runs out of names to try. Note that it is
not an error if `make` cannot find or make any makefile; a makefile is
not always necessary.

When you use the `` `-t' ``{.sample} or `` `--touch' ``{.sample} option
(see section [Instead of Executing the Commands](make_9.md#SEC81)),
you would not want to use an out-of-date makefile to decide which
targets to touch. So the `` `-t' ``{.sample} option has no effect on
updating makefiles; they are really updated even if `` `-t' ``{.sample}
is specified. Likewise, `` `-q' ``{.sample} (or
`` `--question' ``{.sample}) and `` `-n' ``{.sample} (or
`` `--just-print' ``{.sample}) do not prevent updating of makefiles,
because an out-of-date makefile would result in the wrong output for
other targets. Thus, `` `make -f mfile -n foo' ``{.sample} will update
`` `mfile' ``, read it in, and then print the commands to update
`` `foo' `` and its dependencies without running them. The commands
printed for `` `foo' `` will be those specified in the updated contents
of `` `mfile' ``.

However, on occasion you might actually wish to prevent updating of even
the makefiles. You can do this by specifying the makefiles as goals in
the command line as well as specifying them as makefiles. When the
makefile name is specified explicitly as a goal, the options
`` `-t' ``{.sample} and so on do apply to them.

Thus, `` `make -f mfile -n mfile foo' ``{.sample} would read the
makefile `` `mfile' ``, print the commands needed to update it without
actually running them, and then print the commands needed to update
`` `foo' `` without running them. The commands for `` `foo' `` will be
those specified by the existing contents of `` `mfile' ``.

## [Overriding Part of Another Makefile](make_toc.md#SEC18){#SEC18}

Sometimes it is useful to have a makefile that is mostly just like
another makefile. You can often use the `` `include' ``{.sample}
directive to include one in the other, and add more targets or variable
definitions. However, if the two makefiles give different commands for
the same target, `make` will not let you just do this. But there is
another way. []{#IDX95}

In the containing makefile (the one that wants to include the other),
you can use a match-anything pattern rule to say that to remake any
target that cannot be made from the information in the containing
makefile, `make` should look in another makefile. See section [Defining
and Redefining Pattern Rules](make_10.md#SEC91), for more information
on pattern rules.

For example, if you have a makefile called `` `Makefile' `` that says
how to make the target `` `foo' ``{.sample} (and other targets), you can
write a makefile called `` `GNUmakefile' `` that contains:

    foo:
            frobnicate > foo

    %: force
            @$(MAKE) -f Makefile $@
    force: ;

If you say `` `make foo' ``{.sample}, `make` will find
`` `GNUmakefile' ``, read it, and see that to make `` `foo' ``, it needs
to run the command `` `frobnicate > foo' ``{.sample}. If you say
`` `make bar' ``{.sample}, `make` will find no way to make `` `bar' ``
in `` `GNUmakefile' ``, so it will use the commands from the pattern
rule: `` `make -f Makefile bar' ``{.sample}. If `` `Makefile' ``
provides a rule for updating `` `bar' ``, `make` will apply the rule.
And likewise for any other target that `` `GNUmakefile' `` does not say
how to make.

The way this works is that the pattern rule has a pattern of just
`` `%' ``{.sample}, so it matches any target whatever. The rule
specifies a dependency `` `force' ``, to guarantee that the commands
will be run even if the target file already exists. We give
`` `force' `` target empty commands to prevent `make` from searching for
an implicit rule to build it\--otherwise it would apply the same
match-anything rule to `` `force' `` itself and create a dependency
loop!

Go to the [previous](make_2.md), [next](make_4.md) section.
