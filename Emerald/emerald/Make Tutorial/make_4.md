GNU Make - Writing Rules

Go to the [previous](make_3.md), [next](make_5.md) section.

- [ ] #task master [[Makefile]] 🆔 vR2KT4
___

# [Writing Rules](make_toc.md#SEC19)

A [rule]{.dfn} appears in the makefile and says when and how to remake
certain files, called the rule\'s [targets]{.dfn} (most often only one
per rule). It lists the other files that are the [dependencies]{.dfn} of
the target, and [commands]{.dfn} to use to create or update the target.
[]{#IDX100} []{#IDX101}

The order of rules is not significant, except for determining the
[default goal]{.dfn}: the target for `make` to consider, if you do not
otherwise specify one. The default goal is the target of the first rule
in the first makefile. If the first rule has multiple targets, only the
first target is taken as the default. There are two exceptions: a target
starting with a period is not a default unless it contains one or more
slashes, `` `/' ``{.sample}, as well; and, a target that defines a
pattern rule has no effect on the default goal. (See section [Defining
and Redefining Pattern Rules](make_10.md#SEC91).)

Therefore, we usually write the makefile so that the first rule is the
one for compiling the entire program or all the programs described by
the makefile (often with a target called `` `all' ``{.sample}). See
section [Arguments to Specify the Goals](make_9.md#SEC80).

## [Rule Syntax](make_toc.md#SEC20)

In general, a rule looks like this:

    targets : dependencies
            command
            ...

or like this:

    targets : dependencies ; command
            command
            ...

The `targets`{.variable} are file names, separated by spaces. Wildcard
characters may be used (see section [Using Wildcard Characters in File
Names](make_4.md#SEC21)) and a name of the form
`` ` ```a'(`{.variable}`m`{.variable}`)`{.variable}` represents member ``m`{.variable}` in archive file ``a`{.variable}` (see section `[`Archive Members as Targets`](make_11.md#SEC102)`). Usually there is only one target per rule, but occasionally there is a reason to have more (see section `[`Multiple Targets in a Rule`](make_4.md#SEC35)`).`[]{#IDX106}` `[]{#IDX107}` `

The `command`{.variable} lines start with a tab character. The first
command may appear on the line after the dependencies, with a tab
character, or may appear on the same line, with a semicolon. Either way,
the effect is the same. See section [Writing the Commands in Rules](make_5.md#SEC42). 

Because dollar signs are used to start variable references, if you
really want a dollar sign in a rule you must write two of them,
`` `$$' ``{.sample} (see section [How to Use
Variables](make_6.md#SEC55)). You may split a long line by inserting a
backslash followed by a newline, but this is not required, as `make`
places no limit on the length of a line in a makefile.

A rule tells `make` two things: when the targets are out of date, and
how to update them when necessary. 

### **outdated**

The criterion for being **out of date** is specified in terms of the
`dependencies`{.variable}, which consist of file names separated by
spaces.
(Wildcards and archive members (see section [Using `make` to
Update Archive Files](make_11.md#SEC101)) are allowed here too.) 

> [!tip]
> A target is out of date **if it does not exist or if it is older than** any of
> the dependencies (by comparison of last-modification times).
> 

The idea is that the contents of the target file are computed based on information
in the dependencies, so **if any of the dependencies changes, the contents**
**of the existing target file are no longer necessarily valid.**

How to update is specified by `commands`{.variable}. These are lines to
be executed by the shell (normally `` `sh' ``{.sample}), but with some
extra features (see section [Writing the Commands in
Rules](make_5.md#SEC42)).

## [Using Wildcard Characters in File Names](make_toc.md#SEC21){#SEC21}

A single file name can specify many files using [wildcard
characters]{.dfn}. The wildcard characters in `make` are
`` `*' ``{.sample}, `` `?' ``{.sample} and `` `[...]' ``{.sample}, the
same as in the Bourne shell. For example, `` `*.c' `` specifies a list
of all the files (in the working directory) whose names end in
`` `.c' ``{.sample}.[]{#IDX119} []{#IDX120} []{#IDX121}

The character `` `~' ``{.sample} at the beginning of a file name also
has special significance. If alone, or followed by a slash, it
represents your home directory. For example `` `~/bin' `` expands to
`` `/home/you/bin' ``. If the `` `~' ``{.sample} is followed by a word,
the string represents the home directory of the user named by that word.
For example `` `~john/bin' `` expands to `` `/home/john/bin' ``.

Wildcard expansion happens automatically in targets, in dependencies,
and in commands (where the shell does the expansion). In other contexts,
wildcard expansion happens only if you request it explicitly with the
`wildcard` function.

The special significance of a wildcard character can be turned off by
preceding it with a backslash. Thus, `` `foo\*bar' `` would refer to a
specific file whose name consists of `` `foo' ``{.sample}, an asterisk,
and `` `bar' ``{.sample}.

### [Wildcard Examples](make_toc.md#SEC22){#SEC22}

Wildcards can be used in the commands of a rule, where they are expanded
by the shell. For example, here is a rule to delete all the object
files:

    clean:
            rm -f *.o

Wildcards are also useful in the dependencies of a rule. With the
following rule in the makefile, `` `make print' ``{.sample} will print
all the `` `.c' ``{.sample} files that have changed since the last time
you printed them:

    print: *.c
            lpr -p $?
            touch print

[]{#IDX123} []{#IDX124} []{#IDX125}

This rule uses `` `print' `` as an empty target file; see section [Empty
Target Files to Record Events](make_4.md#SEC33). (The automatic
variable `` `$?' ``{.sample} is used to print only those files that have
changed; see section [Automatic Variables](make_10.md#SEC94).)

Wildcard expansion does not happen when you define a variable. Thus, if
you write this:

    objects = *.o

then the value of the variable `objects` is the actual string
`` `*.o' ``{.sample}. However, if you use the value of `objects` in a
target, dependency or command, wildcard expansion will take place at
that time. To set `objects` to the expansion, instead use:

    objects := $(wildcard *.o)

See section [The Function `wildcard`](make_4.md#SEC24).

[]{#IDX126} []{#IDX127} []{#IDX128} []{#IDX129} []{#IDX130}

### [Pitfalls of Using Wildcards](make_toc.md#SEC23){#SEC23}

Now here is an example of a naive way of using wildcard expansion, that
does not do what you would intend. Suppose you would like to say that
the executable file `` `foo' `` is made from all the object files in the
directory, and you write this:

    objects = *.o

    foo : $(objects)
            cc -o foo $(CFLAGS) $(objects)

The value of `objects` is the actual string `` `*.o' ``{.sample}.
Wildcard expansion happens in the rule for `` `foo' ``, so that each
*existing* `` `.o' ``{.sample} file becomes a dependency of `` `foo' ``
and will be recompiled if necessary.

But what if you delete all the `` `.o' ``{.sample} files? When a
wildcard matches no files, it is left as it is, so then `` `foo' `` will
depend on the oddly-named file `` `*.o' ``. Since no such file is likely
to exist, `make` will give you an error saying it cannot figure out how
to make `` `*.o' ``. This is not what you want!

Actually it is possible to obtain the desired result with wildcard
expansion, but you need more sophisticated techniques, including the
`wildcard` function and string substitution. These are described in the
following section.

[]{#IDX131}

### [The Function `wildcard`](make_toc.md#SEC24){#SEC24}

Wildcard expansion happens automatically in rules. But wildcard
expansion does not normally take place when a variable is set, or inside
the arguments of a function. If you want to do wildcard expansion in
such places, you need to use the `wildcard` function, like this:

    $(wildcard pattern...)

This string, used anywhere in a makefile, is replaced by a
space-separated list of names of existing files that match one of the
given file name patterns. If no existing file name matches a pattern,
then that pattern is omitted from the output of the `wildcard` function.
Note that this is different from how unmatched wildcards behave in
rules, where they are used verbatim rather than ignored (see section
[Pitfalls of Using Wildcards](make_4.md#SEC23)).

One use of the `wildcard` function is to get a list of all the C source
files in a directory, like this:

    $(wildcard *.c)

We can change the list of C source files into a list of object files by
replacing the `` `.o' ``{.sample} suffix with `` `.c' ``{.sample} in the
result, like this:

    $(patsubst %.c,%.o,$(wildcard *.c))

(Here we have used another function, `patsubst`. See section [Functions
for String Substitution and Analysis](make_8.md#SEC73).)

Thus, a makefile to compile all C source files in the directory and then
link them together could be written as follows:

    objects := $(patsubst %.c,%.o,$(wildcard *.c))

    foo : $(objects)
            cc -o foo $(objects)

(This takes advantage of the implicit rule for compiling C programs, so
there is no need to write explicit rules for compiling the files. See
section [The Two Flavors of Variables](make_6.md#SEC57), for an
explanation of `` `:=' ``{.sample}, which is a variant of
`` `=' ``{.sample}.)

[]{#IDX132} []{#IDX133} []{#IDX134} []{#IDX135} []{#IDX136}

## [Searching Directories for Dependencies](make_toc.md#SEC25){#SEC25}

For large systems, it is often desirable to put sources in a separate
directory from the binaries. The [directory search]{.dfn} features of
`make` facilitate this by searching several directories automatically to
find a dependency. When you redistribute the files among directories,
you do not need to change the individual rules, just the search paths.

[]{#IDX137}

### [`VPATH`: Search Path for All Dependencies](make_toc.md#SEC26){#SEC26}

The value of the `make` variable `VPATH` specifies a list of directories
that `make` should search. Most often, the directories are expected to
contain dependency files that are not in the current directory; however,
`VPATH` specifies a search list that `make` applies for all files,
including files which are targets of rules.

Thus, if a file that is listed as a target or dependency does not exist
in the current directory, `make` searches the directories listed in
`VPATH` for a file with that name. If a file is found in one of them,
that file becomes the dependency. Rules may then specify the names of
source files in the dependencies as if they all existed in the current
directory. See section [Writing Shell Commands with Directory
Search](make_4.md#SEC28).

In the `VPATH` variable, directory names are separated by colons or
blanks. The order in which directories are listed is the order followed
by `make` in its search.

For example,

    VPATH = src:../headers

specifies a path containing two directories, `` `src' `` and
`` `../headers' ``, which `make` searches in that order.

With this value of `VPATH`, the following rule,

    foo.o : foo.c

is interpreted as if it were written like this:

    foo.o : src/foo.c

assuming the file `` `foo.c' `` does not exist in the current directory
but is found in the directory `` `src' ``.

[]{#IDX138}

### [The `vpath` Directive](make_toc.md#SEC27){#SEC27}

Similar to the `VPATH` variable but more selective is the `vpath`
directive (note lower case), which allows you to specify a search path
for a particular class of file names, those that match a particular
pattern. Thus you can supply certain search directories for one class of
file names and other directories (or none) for other file names.

There are three forms of the `vpath` directive:

`vpath ``pattern`{.variable}` ``directories`{.variable}

:   Specify the search path `directories`{.variable} for file names that
    match `pattern`{.variable}.

    The search path, `directories`{.variable}, is a list of directories
    to be searched, separated by colons or blanks, just like the search
    path used in the `VPATH` variable.

`vpath ``pattern`{.variable}
:   Clear out the search path associated with `pattern`{.variable}.

`vpath`

:   Clear all search paths previously specified with `vpath` directives.

A `vpath` pattern is a string containing a `` `%' ``{.sample} character.
The string must match the file name of a dependency that is being
searched for, the `` `%' ``{.sample} character matching any sequence of
zero or more characters (as in pattern rules; see section [Defining and
Redefining Pattern Rules](make_10.md#SEC91)). For example, `%.h`
matches files that end in `.h`. (If there is no `` `%' ``{.sample}, the
pattern must match the dependency exactly, which is not useful very
often.) []{#IDX139} []{#IDX140} []{#IDX141} []{#IDX142} []{#IDX143}

`` `%' ``{.sample} characters in a `vpath` directive\'s pattern can be
quoted with preceding backslashes (`` `\' ``{.sample}). Backslashes that
would otherwise quote `` `%' ``{.sample} characters can be quoted with
more backslashes. Backslashes that quote `` `%' ``{.sample} characters
or other backslashes are removed from the pattern before it is compared
to file names. Backslashes that are not in danger of quoting
`` `%' ``{.sample} characters go unmolested.

When a dependency fails to exist in the current directory, if the
`pattern`{.variable} in a `vpath` directive matches the name of the
dependency file, then the `directories`{.variable} in that directive are
searched just like (and before) the directories in the `VPATH` variable.

For example,

    vpath %.h ../headers

tells `make` to look for any dependency whose name ends in `` `.h' `` in
the directory `` `../headers' `` if the file is not found in the current
directory.

If several `vpath` patterns match the dependency file\'s name, then
`make` processes each matching `vpath` directive one by one, searching
all the directories mentioned in each directive. `make` handles multiple
`vpath` directives in the order in which they appear in the makefile;
multiple directives with the same pattern are independent of each other.

Thus,

    vpath %.c foo
    vpath %   blish
    vpath %.c bar

will look for a file ending in `` `.c' ``{.sample} in `` `foo' ``, then
`` `blish' ``, then `` `bar' ``, while

    vpath %.c foo:bar
    vpath %   blish

will look for a file ending in `` `.c' ``{.sample} in `` `foo' ``, then
`` `bar' ``, then `` `blish' ``.

[]{#IDX144} []{#IDX145}

### [Writing Shell Commands with Directory Search](make_toc.md#SEC28){#SEC28}

When a dependency is found in another directory through directory
search, this cannot change the commands of the rule; they will execute
as written. Therefore, you must write the commands with care so that
they will look for the dependency in the directory where `make` finds
it.

This is done with the [automatic variables]{.dfn} such as
`` `$^' ``{.sample} (see section [Automatic
Variables](make_10.md#SEC94)). For instance, the value of
`` `$^' ``{.sample} is a list of all the dependencies of the rule,
including the names of the directories in which they were found, and the
value of `` `$@' ``{.sample} is the target. Thus:

    foo.o : foo.c
            cc -c $(CFLAGS) $^ -o $@

(The variable `CFLAGS` exists so you can specify flags for C compilation
by implicit rules; we use it here for consistency so it will affect all
C compilations uniformly; see section [Variables Used by Implicit
Rules](make_10.md#SEC89).)

Often the dependencies include header files as well, which you do not
want to mention in the commands. The automatic variable
`` `$<' ``{.sample} is just the first dependency:

    VPATH = src:../headers
    foo.o : foo.c defs.h hack.h
            cc -c $(CFLAGS) $< -o $@

[]{#IDX146} []{#IDX147} []{#IDX148} []{#IDX149} []{#IDX150} []{#IDX151}
[]{#IDX152}

### [Directory Search and Implicit Rules](make_toc.md#SEC29){#SEC29}

The search through the directories specified in `VPATH` or with `vpath`
also happens during consideration of implicit rules (see section [Using
Implicit Rules](make_10.md#SEC86)).

For example, when a file `` `foo.o' `` has no explicit rule, `make`
considers implicit rules, such as the built-in rule to compile
`` `foo.c' `` if that file exists. If such a file is lacking in the
current directory, the appropriate directories are searched for it. If
`` `foo.c' `` exists (or is mentioned in the makefile) in any of the
directories, the implicit rule for C compilation is applied.

The commands of implicit rules normally use automatic variables as a
matter of necessity; consequently they will use the file names found by
directory search with no extra effort.

[]{#IDX153} []{#IDX154} []{#IDX155} []{#IDX156} []{#IDX157} []{#IDX158}

### [Directory Search for Link Libraries](make_toc.md#SEC30){#SEC30}

Directory search applies in a special way to libraries used with the
linker. This special feature comes into play when you write a dependency
whose name is of the form
`` `-l ``{.sample}`name`{.variable}`'`{.sample}. (You can tell something
strange is going on here because the dependency is normally the name of
a file, and the *file name* of the library looks like
`` `lib ```name`{.variable}`.a'`, not like
`` `-l ``{.sample}`name`{.variable}`'`{.sample}.)

When a dependency\'s name has the form
`` `-l ``{.sample}`name`{.variable}`'`{.sample}, `make` handles it
specially by searching for the file `` `lib ```name`{.variable}`.a'` in
the current directory, in directories specified by matching `vpath`
search paths and the `VPATH` search path, and then in the directories
`` `/lib' ``, `` `/usr/lib' ``, and `` ` ```prefix`{.variable}`/lib'`
(normally `` `/usr/local/lib' ``).

For example,

    foo : foo.c -lcurses
            cc $^ -o $@

would cause the command
`` `cc foo.c /usr/lib/libcurses.a -o foo' ``{.sample} to be executed
when `` `foo' `` is older than `` `foo.c' `` or than
`` `/usr/lib/libcurses.a' ``.

[]{#IDX159} []{#IDX160} []{#IDX161}

## [Phony Targets](make_toc.md#SEC31){#SEC31}

A phony target is one that is not really the name of a file. It is just
a name for some commands to be executed when you make an explicit
request. There are two reasons to use a phony target: to avoid a
conflict with a file of the same name, and to improve performance.

If you write a rule whose commands will not create the target file, the
commands will be executed every time the target comes up for remaking.
Here is an example:

    clean:
            rm *.o temp

Because the `rm` command does not create a file named `` `clean' ``,
probably no such file will ever exist. Therefore, the `rm` command will
be executed every time you say `` `make clean' ``{.sample}. []{#IDX162}
[]{#IDX163}

The phony target will cease to work if anything ever does create a file
named `` `clean' `` in this directory. Since it has no dependencies, the
file `` `clean' `` would inevitably be considered up to date, and its
commands would not be executed. To avoid this problem, you can
explicitly declare the target to be phony, using the special target
`.PHONY` (see section [Special Built-in Target
Names](make_4.md#SEC34)) as follows:

    .PHONY : clean

Once this is done, `` `make clean' ``{.sample} will run the commands
regardless of whether there is a file named `` `clean' ``.

Since it knows that phony targets do not name actual files that could be
remade from other files, `make` skips the implicit rule search for phony
targets (see section [Using Implicit Rules](make_10.md#SEC86)). This
is why declaring a target phony is good for performance, even if you are
not worried about the actual file existing.

Thus, you first write the line that states that `clean` is a phony
target, then you write the rule, like this:

    .PHONY: clean
    clean:
            rm *.o temp

A phony target should not be a dependency of a real target file; if it
is, its commands are run every time `make` goes to update that file. As
long as a phony target is never a dependency of a real target, the phony
target commands will be executed only when the phony target is a
specified goal (see section [Arguments to Specify the
Goals](make_9.md#SEC80)).

Phony targets can have dependencies. When one directory contains
multiple programs, it is most convenient to describe all of the programs
in one makefile `` `./Makefile' ``. Since the target remade by default
will be the first one in the makefile, it is common to make this a phony
target named `` `all' ``{.sample} and give it, as dependencies, all the
individual programs. For example:

    all : prog1 prog2 prog3
    .PHONY : all

    prog1 : prog1.o utils.o
            cc -o prog1 prog1.o utils.o

    prog2 : prog2.o
            cc -o prog2 prog2.o

    prog3 : prog3.o sort.o utils.o
            cc -o prog3 prog3.o sort.o utils.o

Now you can say just `` `make' ``{.sample} to remake all three programs,
or specify as arguments the ones to remake (as in
`` `make prog1 prog3' ``{.sample}).

When one phony target is a dependency of another, it serves as a
subroutine of the other. For example, here
`` `make cleanall' ``{.sample} will delete the object files, the
difference files, and the file `` `program' ``:

    .PHONY: cleanall cleanobj cleandiff

    cleanall : cleanobj cleandiff
            rm program

    cleanobj :
            rm *.o

    cleandiff :
            rm *.diff

[]{#IDX164} []{#IDX165} []{#IDX166} []{#IDX167}

## [Rules without Commands or Dependencies](make_toc.md#SEC32){#SEC32}

If a rule has no dependencies or commands, and the target of the rule is
a nonexistent file, then `make` imagines this target to have been
updated whenever its rule is run. This implies that all targets
depending on this one will always have their commands run.

An example will illustrate this:

    clean: FORCE
            rm $(objects)
    FORCE:

Here the target `` `FORCE' ``{.sample} satisfies the special conditions,
so the target `` `clean' `` that depends on it is forced to run its
commands. There is nothing special about the name
`` `FORCE' ``{.sample}, but that is one name commonly used this way.

As you can see, using `` `FORCE' ``{.sample} this way has the same
results as using `` `.PHONY: clean' ``{.sample}.

Using `` `.PHONY' ``{.sample} is more explicit and more efficient.
However, other versions of `make` do not support
`` `.PHONY' ``{.sample}; thus `` `FORCE' ``{.sample} appears in many
makefiles. See section [Phony Targets](make_4.md#SEC31).

[]{#IDX168} []{#IDX169} []{#IDX170}

## [Empty Target Files to Record Events](make_toc.md#SEC33){#SEC33}

The [empty target]{.dfn} is a variant of the phony target; it is used to
hold commands for an action that you request explicitly from time to
time. Unlike a phony target, this target file can really exist; but the
file\'s contents do not matter, and usually are empty.

The purpose of the empty target file is to record, with its
last-modification time, when the rule\'s commands were last executed. It
does so because one of the commands is a `touch` command to update the
target file.

The empty target file must have some dependencies. When you ask to
remake the empty target, the commands are executed if any dependency is
more recent than the target; in other words, if a dependency has changed
since the last time you remade the target. Here is an example:

    print: foo.c bar.c
            lpr -p $?
            touch print

With this rule, `` `make print' ``{.sample} will execute the `lpr`
command if either source file has changed since the last
`` `make print' ``{.sample}. The automatic variable `` `$?' ``{.sample}
is used to print only those files that have changed (see section
[Automatic Variables](make_10.md#SEC94)).

[]{#IDX174} []{#IDX175} []{#IDX176}

## [Special Built-in Target Names](make_toc.md#SEC34){#SEC34}

Certain names have special meanings if they appear as targets.

[]{#IDX177}

`.PHONY`

:   The dependencies of the special target `.PHONY` are considered to be
    phony targets. When it is time to consider such a target, `make`
    will run its commands unconditionally, regardless of whether a file
    with that name exists or what its last-modification time is. See
    section [Phony Targets](make_4.md#SEC31). []{#IDX178}

`.SUFFIXES`

:   The dependencies of the special target `.SUFFIXES` are the list of
    suffixes to be used in checking for suffix rules. See section
    [Old-Fashioned Suffix Rules](make_10.md#SEC99). []{#IDX179}

`.DEFAULT`

:   The commands specified for `.DEFAULT` are used for any target for
    which no rules are found (either explicit rules or implicit rules).
    See section [Defining Last-Resort Default
    Rules](make_10.md#SEC98). If `.DEFAULT` commands are specified,
    every file mentioned as a dependency, but not as a target in a rule,
    will have these commands executed on its behalf. See section
    [Implicit Rule Search Algorithm](make_10.md#SEC100). []{#IDX180}

    []{#IDX181} []{#IDX182}

`.PRECIOUS`

:   The targets which `.PRECIOUS` depends on are given the following
    special treatment: if `make` is killed or interrupted during the
    execution of their commands, the target is not deleted. See section
    [Interrupting or Killing `make`](make_5.md#SEC47). Also, if the
    target is an intermediate file, it will not be deleted after it is
    no longer needed, as is normally done. See section [Chains of
    Implicit Rules](make_10.md#SEC90).

    You can also list the target pattern of an implicit rule (such as
    `` `%.o' ``{.sample}) as a dependency file of the special target
    `.PRECIOUS` to preserve intermediate files created by rules whose
    target patterns match that file\'s name. []{#IDX183}

`.IGNORE`

:   If you specify dependencies for `.IGNORE`, then `make` will ignore
    errors in execution of the commands run for those particular files.
    The commands for `.IGNORE` are not meaningful.

    If mentioned as a target with no dependencies, `.IGNORE` says to
    ignore errors in execution of commands for all files. This usage of
    `` `.IGNORE' ``{.sample} is supported only for historical
    compatibility. Since this affects every command in the makefile, it
    is not very useful; we recommend you use the more selective ways to
    ignore errors in specific commands. See section [Errors in
    Commands](make_5.md#SEC46). []{#IDX184}

`.SILENT`

:   If you specify dependencies for `.SILENT`, then `make` will not the
    print commands to remake those particular files before executing
    them. The commands for `.SILENT` are not meaningful.

    If mentioned as a target with no dependencies, `.SILENT` says not to
    print any commands before executing them. This usage of
    `` `.SILENT' ``{.sample} is supported only for historical
    compatibility. We recommend you use the more selective ways to
    silence specific commands. See section [Command
    Echoing](make_5.md#SEC43). If you want to silence all commands for
    a particular run of `make`, use the `` `-s' ``{.sample} or
    `` `--silent' ``{.sample} option (see section [Summary of
    Options](make_9.md#SEC85)). []{#IDX185}

`.EXPORT_ALL_VARIABLES`

:   Simply by being mentioned as a target, this tells `make` to export
    all variables to child processes by default. See section
    [Communicating Variables to a Sub-`make`](make_5.md#SEC50)}.

Any defined implicit rule suffix also counts as a special target if it
appears as a target, and so does the concatenation of two suffixes, such
as `` `.c.o' ``{.sample}. These targets are suffix rules, an obsolete
way of defining implicit rules (but a way still widely used). In
principle, any target name could be special in this way if you break it
in two and add both pieces to the suffix list. In practice, suffixes
normally begin with `` `.' ``{.sample}, so these special target names
also begin with `` `.' ``{.sample}. See section [Old-Fashioned Suffix
Rules](make_10.md#SEC99).

[]{#IDX186} []{#IDX187} []{#IDX188} []{#IDX189}

## [Multiple Targets in a Rule](make_toc.md#SEC35){#SEC35}

A rule with multiple targets is equivalent to writing many rules, each
with one target, and all identical aside from that. The same commands
apply to all the targets, but their effects may vary because you can
substitute the actual target name into the command using
`` `$@' ``{.sample}. The rule contributes the same dependencies to all
the targets also.

This is useful in two cases.

-   You want just dependencies, no commands. For example:

        kbd.o command.o files.o: command.h

    gives an additional dependency to each of the three object files
    mentioned.

-   Similar commands work for all the targets. The commands do not need
    to be absolutely identical, since the automatic variable
    `` `$@' ``{.sample} can be used to substitute the particular target
    to be remade into the commands (see section [Automatic
    Variables](make_10.md#SEC94)). For example:

        bigoutput littleoutput : text.g
                generate text.g -$(subst output,,$@) > $@

    is equivalent to

        bigoutput : text.g
                generate text.g -big > bigoutput
        littleoutput : text.g
                generate text.g -little > littleoutput

    Here we assume the hypothetical program `generate` makes two types
    of output, one if given `` `-big' ``{.sample} and one if given
    `` `-little' ``{.sample}. See section [Functions for String
    Substitution and Analysis](make_8.md#SEC73), for an explanation of
    the `subst` function.

Suppose you would like to vary the dependencies according to the target,
much as the variable `` `$@' ``{.sample} allows you to vary the
commands. You cannot do this with multiple targets in an ordinary rule,
but you can do it with a [static pattern rule]{.dfn}. See section
[Static Pattern Rules](make_4.md#SEC37).

[]{#IDX191} []{#IDX192} []{#IDX193} []{#IDX194}

## [Multiple Rules for One Target](make_toc.md#SEC36){#SEC36}

One file can be the target of several rules. All the dependencies
mentioned in all the rules are merged into one list of dependencies for
the target. If the target is older than any dependency from any rule,
the commands are executed.

There can only be one set of commands to be executed for a file. If more
than one rule gives commands for the same file, `make` uses the last set
given and prints an error message. (As a special case, if the file\'s
name begins with a dot, no error message is printed. This odd behavior
is only for compatibility with other implementations of `make`.) There
is no reason to write your makefiles this way; that is why `make` gives
you an error message.

An extra rule with just dependencies can be used to give a few extra
dependencies to many files at once. For example, one usually has a
variable named `objects` containing a list of all the compiler output
files in the system being made. An easy way to say that all of them must
be recompiled if `` `config.h' `` changes is to write the following:

    objects = foo.o bar.o
    foo.o : defs.h
    bar.o : defs.h test.h
    $(objects) : config.h

This could be inserted or taken out without changing the rules that
really specify how to make the object files, making it a convenient form
to use if you wish to add the additional dependency intermittently.

Another wrinkle is that the additional dependencies could be specified
with a variable that you set with a command argument to `make` (see
section [Overriding Variables](make_9.md#SEC83)). For example,

    extradeps=
    $(objects) : $(extradeps)

means that the command `` `make extradeps=foo.h' ``{.sample} will
consider `` `foo.h' `` as a dependency of each object file, but plain
`` `make' ``{.sample} will not.

If none of the explicit rules for a target has commands, then `make`
searches for an applicable implicit rule to find some commands see
section [Using Implicit Rules](make_10.md#SEC86)).

[]{#IDX195} []{#IDX196} []{#IDX197} []{#IDX198} []{#IDX199}

## [Static Pattern Rules](make_toc.md#SEC37){#SEC37}

[Static pattern rules]{.dfn} are rules which specify multiple targets
and construct the dependency names for each target based on the target
name. They are more general than ordinary rules with multiple targets
because the targets do not have to have identical dependencies. Their
dependencies must be *analogous*, but not necessarily *identical*.

[]{#IDX200} []{#IDX201}

### [Syntax of Static Pattern Rules](make_toc.md#SEC38){#SEC38}

Here is the syntax of a static pattern rule:

    targets ...: target-pattern: dep-patterns ...
            commands
            ...

The `targets`{.variable} list specifies the targets that the rule
applies to. The targets can contain wildcard characters, just like the
targets of ordinary rules (see section [Using Wildcard Characters in
File Names](make_4.md#SEC21)). []{#IDX202} []{#IDX203}

The `target-pattern`{.variable} and `dep-patterns`{.variable} say how to
compute the dependencies of each target. Each target is matched against
the `target-pattern`{.variable} to extract a part of the target name,
called the [stem]{.dfn}. This stem is substituted into each of the
`dep-patterns`{.variable} to make the dependency names (one from each
`dep-pattern`{.variable}).

Each pattern normally contains the character `` `%' ``{.sample} just
once. When the `target-pattern`{.variable} matches a target, the
`` `%' ``{.sample} can match any part of the target name; this part is
called the [stem]{.dfn}. The rest of the pattern must match exactly. For
example, the target `` `foo.o' `` matches the pattern
`` `%.o' ``{.sample}, with `` `foo' ``{.sample} as the stem. The targets
`` `foo.c' `` and `` `foo.out' `` do not match that pattern.[]{#IDX204}

The dependency names for each target are made by substituting the stem
for the `` `%' ``{.sample} in each dependency pattern. For example, if
one dependency pattern is `` `%.c' ``, then substitution of the stem
`` `foo' ``{.sample} gives the dependency name `` `foo.c' ``. It is
legitimate to write a dependency pattern that does not contain
`` `%' ``{.sample}; then this dependency is the same for all targets.
[]{#IDX205} []{#IDX206} []{#IDX207} []{#IDX208} []{#IDX209}

`` `%' ``{.sample} characters in pattern rules can be quoted with
preceding backslashes (`` `\' ``{.sample}). Backslashes that would
otherwise quote `` `%' ``{.sample} characters can be quoted with more
backslashes. Backslashes that quote `` `%' ``{.sample} characters or
other backslashes are removed from the pattern before it is compared to
file names or has a stem substituted into it. Backslashes that are not
in danger of quoting `` `%' ``{.sample} characters go unmolested. For
example, the pattern `` `the\%weird\\%pattern\\' `` has
`` `the%weird\' ``{.sample} preceding the operative `` `%' ``{.sample}
character, and `` `pattern\\' ``{.sample} following it. The final two
backslashes are left alone because they cannot affect any
`` `%' ``{.sample} character.

Here is an example, which compiles each of `` `foo.o' `` and
`` `bar.o' `` from the corresponding `` `.c' `` file:

    objects = foo.o bar.o

    $(objects): %.o: %.c
            $(CC) -c $(CFLAGS) $< -o $@

Here `` `$<' ``{.sample} is the automatic variable that holds the name
of the dependency and `` `$@' ``{.sample} is the automatic variable that
holds the name of the target; see section [Automatic
Variables](make_10.md#SEC94).

Each target specified must match the target pattern; a warning is issued
for each target that does not. If you have a list of files, only some of
which will match the pattern, you can use the `filter` function to
remove nonmatching file names (see section [Functions for String
Substitution and Analysis](make_8.md#SEC73)):

    files = foo.elc bar.o lose.o

    $(filter %.o,$(files)): %.o: %.c
            $(CC) -c $(CFLAGS) $< -o $@
    $(filter %.elc,$(files)): %.elc: %.el
            emacs -f batch-byte-compile $<

In this example the result of `` `$(filter %.o,$(files))' ``{.sample} is
`` `bar.o lose.o' ``, and the first static pattern rule causes each of
these object files to be updated by compiling the corresponding C source
file. The result of `` `$(filter %.elc,$(files))' ``{.sample} is
`` `foo.elc' ``, so that file is made from `` `foo.el' ``.

Another example shows how to use `$*` in static pattern rules:
[]{#IDX210}

    bigoutput littleoutput : %output : text.g
            generate text.g -$* > $@

When the `generate` command is run, `$*` will expand to the stem, either
`` `big' ``{.sample} or `` `little' ``{.sample}.

[]{#IDX211} []{#IDX212}

### [Static Pattern Rules versus Implicit Rules](make_toc.md#SEC39){#SEC39}

A static pattern rule has much in common with an implicit rule defined
as a pattern rule (see section [Defining and Redefining Pattern
Rules](make_10.md#SEC91)). Both have a pattern for the target and
patterns for constructing the names of dependencies. The difference is
in how `make` decides *when* the rule applies.

An implicit rule *can* apply to any target that matches its pattern, but
it *does* apply only when the target has no commands otherwise
specified, and only when the dependencies can be found. If more than one
implicit rule appears applicable, only one applies; the choice depends
on the order of rules.

By contrast, a static pattern rule applies to the precise list of
targets that you specify in the rule. It cannot apply to any other
target and it invariably does apply to each of the targets specified. If
two conflicting rules apply, and both have commands, that\'s an error.

The static pattern rule can be better than an implicit rule for these
reasons:

-   You may wish to override the usual implicit rule for a few files
    whose names cannot be categorized syntactically but can be given in
    an explicit list.
-   If you cannot be sure of the precise contents of the directories you
    are using, you may not be sure which other irrelevant files might
    lead `make` to use the wrong implicit rule. The choice might depend
    on the order in which the implicit rule search is done. With static
    pattern rules, there is no uncertainty: each rule applies to
    precisely the targets specified.

[]{#IDX213} []{#IDX214} []{#IDX215} []{#IDX216}

## [Double-Colon Rules](make_toc.md#SEC40){#SEC40}

[Double-colon]{.dfn} rules are rules written with `` `::' ``{.sample}
instead of `` `:' ``{.sample} after the target names. They are handled
differently from ordinary rules when the same target appears in more
than one rule.

When a target appears in multiple rules, all the rules must be the same
type: all ordinary, or all double-colon. If they are double-colon, each
of them is independent of the others. Each double-colon rule\'s commands
are executed if the target is older than any dependencies of that rule.
This can result in executing none, any, or all of the double-colon
rules.

Double-colon rules with the same target are in fact completely separate
from one another. Each double-colon rule is processed individually, just
as rules with different targets are processed.

The double-colon rules for a target are executed in the order they
appear in the makefile. However, the cases where double-colon rules
really make sense are those where the order of executing the commands
would not matter.

Double-colon rules are somewhat obscure and not often very useful; they
provide a mechanism for cases in which the method used to update a
target differs depending on which dependency files caused the update,
and such cases are rare.

Each double-colon rule should specify commands; if it does not, an
implicit rule will be used if one applies. See section [Using Implicit
Rules](make_10.md#SEC86).

[]{#IDX217} []{#IDX218} []{#IDX219}

## [Generating Dependencies Automatically](make_toc.md#SEC41){#SEC41}

In the makefile for a program, many of the rules you need to write often
say only that some object file depends on some header file. For example,
if `` `main.c' `` uses `` `defs.h' `` via an `#include`, you would
write:

    main.o: defs.h

You need this rule so that `make` knows that it must remake
`` `main.o' `` whenever `` `defs.h' `` changes. You can see that for a
large program you would have to write dozens of such rules in your
makefile. And, you must always be very careful to update the makefile
every time you add or remove an `#include`. []{#IDX220} []{#IDX221}

To avoid this hassle, most modern C compilers can write these rules for
you, by looking at the `#include` lines in the source files. Usually
this is done with the `` `-M' ``{.sample} option to the compiler. For
example, the command:

    cc -M main.c

generates the output:

    main.o : main.c defs.h

Thus you no longer have to write all those rules yourself. The compiler
will do it for you.

Note that such a dependency constitutes mentioning `` `main.o' `` in a
makefile, so it can never be considered an intermediate file by implicit
rule search. This means that `make` won\'t ever remove the file after
using it; see section [Chains of Implicit Rules](make_10.md#SEC90).
[]{#IDX222}

With old `make` programs, it was traditional practice to use this
compiler feature to generate dependencies on demand with a command like
`` `make depend' ``{.sample}. That command would create a file
`` `depend' `` containing all the automatically-generated dependencies;
then the makefile could use `include` to read them in (see section
[Including Other Makefiles](make_3.md#SEC15)).

In GNU `make`, the feature of remaking makefiles makes this practice
obsolete\--you need never tell `make` explicitly to regenerate the
dependencies, because it always regenerates any makefile that is out of
date. See section [How Makefiles Are Remade](make_3.md#SEC17).

The practice we recommend for automatic dependency generation is to have
one makefile corresponding to each source file. For each source file
`` ` ```name`{.variable}`.c'` there is a makefile
`` ` ```name`{.variable}`.d'` which lists what files the object file
`` ` ```name`{.variable}`.o'` depends on. That way only the source files
that have changed need to be rescanned to produce the new dependencies.

Here is the pattern rule to generate a file of dependencies (i.e., a
makefile) called `` ` ```name`{.variable}`.d'` from a C source file
called `` ` ```name`{.variable}`.c'`:

    %.d: %.c
            $(SHELL) -ec '$(CC) -M $(CPPFLAGS) $< \
                          | sed '\"s/$*\\.o[ :]*/& $@/g'\" > $@'

See section [Defining and Redefining Pattern Rules](make_10.md#SEC91),
for information on defining pattern rules. The `` `-e' ``{.sample} flag
to the shell makes it exit immediately if the `$(CC)` command fails
(exits with a nonzero status). Normally the shell exits with the status
of the last command in the pipeline (`sed` in this case), so `make`
would not notice a nonzero status from the compiler. []{#IDX223}
[]{#IDX224}

With the GNU C compiler, you may wish to use the `` `-MM' ``{.sample}
flag instead of `` `-M' ``{.sample}. This omits dependencies on system
header files. See section \`Options Controlling the Preprocessor\' in
Using GNU CC, for details. []{#IDX225}

The purpose of the `sed` command is to translate (for example):

    main.o : main.c defs.h

into:

    main.o main.d : main.c defs.h

[]{#IDX226} This makes each `` `.d' ``{.sample} file depend on all the
source and header files that the corresponding `` `.o' ``{.sample} file
depends on. `make` then knows it must regenerate the dependencies
whenever any of the source or header files changes.

Once you\'ve defined the rule to remake the `` `.d' ``{.sample} files,
you then use the `include` directive to read them all in. See section
[Including Other Makefiles](make_3.md#SEC15). For example:

    sources = foo.c bar.c

    include $(sources:.c=.d)

(This example uses a substitution variable reference to translate the
list of source files `` `foo.c bar.c' ``{.sample} into a list of
dependency makefiles, `` `foo.d bar.d' ``{.sample}. See section
[Substitution References](make_6.md#SEC59), for full information on
substitution references.) Since the `` `.d' ``{.sample} files are
makefiles like any others, `make` will remake them as necessary with no
further work from you. See section [How Makefiles Are
Remade](make_3.md#SEC17).

Go to the [previous](make_3.md), [next](make_5.md) section.
