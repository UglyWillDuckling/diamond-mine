GNU Make - Incompatibilities and Missing Features

Go to the [previous](make_12.md), [next](make_14.md) section.

[]{#IDX847} []{#IDX848} []{#IDX849}

# [Incompatibilities and Missing Features](make_toc.md#SEC108){#SEC108}

The `make` programs in various other systems support a few features that
are not implemented in GNU `make`. The POSIX.2 standard (IEEE Standard
1003.2-1992) which specifies `make` does not require any of these
features.

-   A target of the form
    `` ` ``{.sample}`file`{.variable}`((`{.sample}`entry`{.variable}`))'`{.sample}
    stands for a member of archive file `file`{.variable}. The member is
    chosen, not by name, but by being an object file which defines the
    linker symbol `entry`{.variable}.

    This feature was not put into GNU `make` because of the
    nonmodularity of putting knowledge into `make` of the internal
    format of archive file symbol tables. See section [Updating Archive
    Symbol Directories](make_11.md#SEC104).

-   Suffixes (used in suffix rules) that end with the character
    `` `~' ``{.sample} have a special meaning to System V `make`; they
    refer to the SCCS file that corresponds to the file one would get
    without the `` `~' ``{.sample}. For example, the suffix rule
    `` `.c~.o' ``{.sample} would make the file
    `` ` ```n`{.variable}`.o'` from the SCCS file
    `` `s. ```n`{.variable}`.c'`. For complete coverage, a whole series
    of such suffix rules is required. See section [Old-Fashioned Suffix
    Rules](make_10.md#SEC99).

    In GNU `make`, this entire series of cases is handled by two pattern
    rules for extraction from SCCS, in combination with the general
    feature of rule chaining. See section [Chains of Implicit
    Rules](make_10.md#SEC90).

-   In System V `make`, the string `` `$$@' ``{.sample} has the strange
    meaning that, in the dependencies of a rule with multiple targets,
    it stands for the particular target that is being processed.

    This is not defined in GNU `make` because `` `$$' ``{.sample} should
    always stand for an ordinary `` `$' ``{.sample}.

    It is possible to get this functionality through the use of static
    pattern rules (see section [Static Pattern
    Rules](make_4.md#SEC37)). The System V `make` rule:

        $(targets): $$@.o lib.a

    can be replaced with the GNU `make` static pattern rule:

        $(targets): %: %.o lib.a

-   In System V and 4.3 BSD `make`, files found by `VPATH` search (see
    section [Searching Directories for Dependencies](make_4.md#SEC25))
    have their names changed inside command strings. We feel it is much
    cleaner to always use automatic variables and thus make this feature
    obsolete.

-   In some Unix `make`s, the automatic variable `$*` appearing in the
    dependencies of a rule has the amazingly strange \"feature\" of
    expanding to the full name of the *target of that rule*. We cannot
    imagine what went on in the minds of Unix `make` developers to do
    this; it is utterly inconsistent with the normal definition of `$*`.
    []{#IDX850}

-   In some Unix `make`s, implicit rule search (see section [Using
    Implicit Rules](make_10.md#SEC86)) is apparently done for *all*
    targets, not just those without commands. This means you can do:

        foo.o:
                cc -c foo.c

    and Unix `make` will intuit that `` `foo.o' `` depends on
    `` `foo.c' ``.

    We feel that such usage is broken. The dependency properties of
    `make` are well-defined (for GNU `make`, at least), and doing such a
    thing simply does not fit the model.

-   GNU `make` does not include any built-in implicit rules for
    compiling or preprocessing EFL programs. If we hear of anyone who is
    using EFL, we will gladly add them.

-   It appears that in SVR4 `make`, a suffix rule can be specified with
    no commands, and it is treated as if it had empty commands (see
    section [Using Empty Commands](make_5.md#SEC54)). For example:

        .c.a:

    will override the built-in `` `.c.a' `` suffix rule.

    We feel that it is cleaner for a rule without commands to always
    simply add to the dependency list for the target. The above example
    can be easily rewritten to get the desired behavior in GNU `make`:

        .c.a: ;

-   Some versions of `make` invoke the shell with the
    `` `-e' ``{.sample} flag, except under `` `-k' ``{.sample} (see
    section [Testing the Compilation of a Program](make_9.md#SEC84)).
    The `` `-e' ``{.sample} flag tells the shell to exit as soon as any
    program it runs returns a nonzero status. We feel it is cleaner to
    write each shell command line to stand on its own and not require
    this special treatment.

Go to the [previous](make_12.md), [next](make_14.md) section.
