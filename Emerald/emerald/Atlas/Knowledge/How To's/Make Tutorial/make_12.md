GNU Make - Features of GNU \@code{make}

Go to the [previous](make_11.md), [next](make_13.md) section.

[]{#IDX844} []{#IDX845} []{#IDX846}

# [Features of GNU `make`](make_toc.md#SEC107){#SEC107}

Here is a summary of the features of GNU `make`, for comparison with and
credit to other versions of `make`. We consider the features of `make`
in 4.2 BSD systems as a baseline. If you are concerned with writing
portable makefiles, you should use only the features of `make` *not*
listed here or in section [Incompatibilities and Missing
Features](make_13.md#SEC108).

Many features come from the version of `make` in System V.

-   The `VPATH` variable and its special meaning. See section [Searching
    Directories for Dependencies](make_4.md#SEC25). This feature
    exists in System V `make`, but is undocumented. It is documented in
    4.3 BSD `make` (which says it mimics System V\'s `VPATH` feature).
-   Included makefiles. See section [Including Other
    Makefiles](make_3.md#SEC15). Allowing multiple files to be
    included with a single directive is a GNU extension.
-   Variables are read from and communicated via the environment. See
    section [Variables from the Environment](make_6.md#SEC66).
-   Options passed through the variable `MAKEFLAGS` to recursive
    invocations of `make`. See section [Communicating Options to a
    Sub-`make`](make_5.md#SEC51).
-   The automatic variable `$%` is set to the member name in an archive
    reference. See section [Automatic Variables](make_10.md#SEC94).
-   The automatic variables `$@`, `$*`, `$<`, `$%`, and `$?` have
    corresponding forms like `$(@F)` and `$(@D)`. We have generalized
    this to `$^` as an obvious extension. See section [Automatic
    Variables](make_10.md#SEC94).
-   Substitution variable references. See section [Basics of Variable
    References](make_6.md#SEC56).
-   The command-line options `` `-b' ``{.sample} and
    `` `-m' ``{.sample}, accepted and ignored. In System V `make`, these
    options actually do something.
-   Execution of recursive commands to run `make` via the variable
    `MAKE` even if `` `-n' ``{.sample}, `` `-q' ``{.sample} or
    `` `-t' ``{.sample} is specified. See section [Recursive Use of
    `make`](make_5.md#SEC48).
-   Support for suffix `` `.a' ``{.sample} in suffix rules. See section
    [Suffix Rules for Archive Files](make_11.md#SEC106). This feature
    is obsolete in GNU `make`, because the general feature of rule
    chaining (see section [Chains of Implicit
    Rules](make_10.md#SEC90)) allows one pattern rule for installing
    members in an archive (see section [Implicit Rule for Archive Member
    Targets](make_11.md#SEC103)) to be sufficient.
-   The arrangement of lines and backslash-newline combinations in
    commands is retained when the commands are printed, so they appear
    as they do in the makefile, except for the stripping of initial
    whitespace.

The following features were inspired by various other versions of
`make`. In some cases it is unclear exactly which versions inspired
which others.

-   Pattern rules using `` `%' ``{.sample}. This has been implemented in
    several versions of `make`. We\'re not sure who invented it first,
    but it\'s been spread around a bit. See section [Defining and
    Redefining Pattern Rules](make_10.md#SEC91).
-   Rule chaining and implicit intermediate files. This was implemented
    by Stu Feldman in his version of `make` for AT&T Eighth Edition
    Research Unix, and later by Andrew Hume of AT&T Bell Labs in his
    `mk` program (where he terms it \"transitive closure\"). We do not
    really know if we got this from either of them or thought it up
    ourselves at the same time. See section [Chains of Implicit
    Rules](make_10.md#SEC90).
-   The automatic variable `$^` containing a list of all dependencies of
    the current target. We did not invent this, but we have no idea who
    did. See section [Automatic Variables](make_10.md#SEC94). The
    automatic variable `$+` is a simple extension of `$^`.
-   The \"what if\" flag (`` `-W' ``{.sample} in GNU `make`) was (as far
    as we know) invented by Andrew Hume in `mk`. See section [Instead of
    Executing the Commands](make_9.md#SEC81).
-   The concept of doing several things at once (parallelism) exists in
    many incarnations of `make` and similar programs, though not in the
    System V or BSD implementations. See section [Command
    Execution](make_5.md#SEC44).
-   Modified variable references using pattern substitution come from
    SunOS 4. See section [Basics of Variable
    References](make_6.md#SEC56). This functionality was provided in
    GNU `make` by the `patsubst` function before the alternate syntax
    was implemented for compatibility with SunOS 4. It is not altogether
    clear who inspired whom, since GNU `make` had `patsubst` before
    SunOS 4 was released.
-   The special significance of `` `+' ``{.sample} characters preceding
    command lines (see section [Instead of Executing the
    Commands](make_9.md#SEC81)) is mandated by IEEE Standard
    1003.2-1992 (POSIX.2).
-   The `` `+=' ``{.sample} syntax to append to the value of a variable
    comes from SunOS 4 `make`. See section [Appending More Text to
    Variables](make_6.md#SEC63).
-   The syntax
    `` ` ``{.sample}`archive`{.variable}`(`{.sample}`mem1`{.variable}` `{.sample}`mem2`{.variable}`...)'`{.sample}
    to list multiple members in a single archive file comes from SunOS 4
    `make`. See section [Archive Members as
    Targets](make_11.md#SEC102).
-   The `-include` directive to include makefiles with no error for a
    nonexistent file comes from SunOS 4 `make`. (But note that SunOS 4
    `make` does not allow multiple makefiles to be specified in one
    `-include` directive.)

The remaining features are inventions new in GNU `make`:

-   Use the `` `-v' ``{.sample} or `` `--version' ``{.sample} option to
    print version and copyright information.

-   Use the `` `-h' ``{.sample} or `` `--help' ``{.sample} option to
    summarize the options to `make`.

-   Simply-expanded variables. See section [The Two Flavors of
    Variables](make_6.md#SEC57).

-   Pass command-line variable assignments automatically through the
    variable `MAKE` to recursive `make` invocations. See section
    [Recursive Use of `make`](make_5.md#SEC48).

-   Use the `` `-C' ``{.sample} or `` `--directory' ``{.sample} command
    option to change directory. See section [Summary of
    Options](make_9.md#SEC85).

-   Make verbatim variable definitions with `define`. See section
    [Defining Variables Verbatim](make_6.md#SEC65).

-   Declare phony targets with the special target `.PHONY`.

    Andrew Hume of AT&T Bell Labs implemented a similar feature with a
    different syntax in his `mk` program. This seems to be a case of
    parallel discovery. See section [Phony Targets](make_4.md#SEC31).

-   Manipulate text by calling functions. See section [Functions for
    Transforming Text](make_8.md#SEC71).

-   Use the `` `-o' ``{.sample} or `` `--old-file' ``{.sample} option to
    pretend a file\'s modification-time is old. See section [Avoiding
    Recompilation of Some Files](make_9.md#SEC82).

-   Conditional execution.

    This feature has been implemented numerous times in various versions
    of `make`; it seems a natural extension derived from the features of
    the C preprocessor and similar macro languages and is not a
    revolutionary concept. See section [Conditional Parts of
    Makefiles](make_7.md#SEC67).

-   Specify a search path for included makefiles. See section [Including
    Other Makefiles](make_3.md#SEC15).

-   Specify extra makefiles to read with an environment variable. See
    section [The Variable `MAKEFILES`](make_3.md#SEC16).

-   Strip leading sequences of `` `./' ``{.sample} from file names, so
    that `` `./ ```file`{.variable}`'` and `` ` ```file`{.variable}`'`
    are considered to be the same file.

-   Use a special search method for library dependencies written in the
    form `` `-l ``{.sample}`name`{.variable}`'`{.sample}. See section
    [Directory Search for Link Libraries](make_4.md#SEC30).

-   Allow suffixes for suffix rules (see section [Old-Fashioned Suffix
    Rules](make_10.md#SEC99)) to contain any characters. In other
    versions of `make`, they must begin with `` `.' ``{.sample} and not
    contain any `` `/' ``{.sample} characters.

-   Keep track of the current level of `make` recursion using the
    variable `MAKELEVEL`. See section [Recursive Use of
    `make`](make_5.md#SEC48).

-   Specify static pattern rules. See section [Static Pattern
    Rules](make_4.md#SEC37).

-   Provide selective `vpath` search. See section [Searching Directories
    for Dependencies](make_4.md#SEC25).

-   Provide computed variable references. See section [Basics of
    Variable References](make_6.md#SEC56).

-   Update makefiles. See section [How Makefiles Are
    Remade](make_3.md#SEC17). System V `make` has a very, very limited
    form of this functionality in that it will check out SCCS files for
    makefiles.

-   Various new built-in implicit rules. See section [Catalogue of
    Implicit Rules](make_10.md#SEC88).

-   The built-in variable `` `MAKE_VERSION' ``{.sample} gives the
    version number of `make`.

Go to the [previous](make_11.md), [next](make_13.md) section.
