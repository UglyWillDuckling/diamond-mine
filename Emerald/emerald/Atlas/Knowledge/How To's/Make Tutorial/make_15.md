GNU Make - Quick Reference

Go to the [previous](make_14.md), [next](make_16.md) section.

# [Quick Reference](make_toc.md#SEC115){#SEC115}

This appendix summarizes the directives, text manipulation functions,
and special variables which GNU `make` understands. See section [Special
Built-in Target Names](make_4.md#SEC34), section [Catalogue of
Implicit Rules](make_10.md#SEC88), and section [Summary of
Options](make_9.md#SEC85), for other summaries.

Here is a summary of the directives GNU `make` recognizes:

`define ``variable`{.variable}

:   

`endef`

:   Define a multi-line, recursively-expanded variable.\
    See section [Defining Canned Command Sequences](make_5.md#SEC53).

`ifdef ``variable`{.variable}

:   

`ifndef ``variable`{.variable}

:   

`ifeq (``a`{.variable}`,``b`{.variable}`)`

:   

`ifeq "``a`{.variable}`" "``b`{.variable}`"`

:   

`ifeq '``a`{.variable}`' '``b`{.variable}`'`

:   

`ifneq (``a`{.variable}`,``b`{.variable}`)`

:   

`ifneq "``a`{.variable}`" "``b`{.variable}`"`

:   

`ifneq '``a`{.variable}`' '``b`{.variable}`'`

:   

`else`

:   

`endif`

:   Conditionally evaluate part of the makefile.\
    See section [Conditional Parts of Makefiles](make_7.md#SEC67).

`include ``file`{.variable}

:   Include another makefile.\
    See section [Including Other Makefiles](make_3.md#SEC15).

`override ``variable`{.variable}` = ``value`{.variable}

:   

`override ``variable`{.variable}` := ``value`{.variable}

:   

`override ``variable`{.variable}` += ``value`{.variable}

:   

`override define ``variable`{.variable}

:   

`endef`

:   Define a variable, overriding any previous definition, even one from
    the command line.\
    See section [The `override` Directive](make_6.md#SEC64).

`export`

:   Tell `make` to export all variables to child processes by default.\
    See section [Communicating Variables to a
    Sub-`make`](make_5.md#SEC50).

`export ``variable`{.variable}

:   

`export ``variable`{.variable}` = ``value`{.variable}

:   

`export ``variable`{.variable}` := ``value`{.variable}

:   

`export ``variable`{.variable}` += ``value`{.variable}

:   

`unexport ``variable`{.variable}
:   Tell `make` whether or not to export a particular variable to child
    processes.\
    See section [Communicating Variables to a
    Sub-`make`](make_5.md#SEC50).

`vpath ``pattern`{.variable}` ``path`{.variable}
:   Specify a search path for files matching a `` `%' ``{.sample}
    pattern.\
    See section [The `vpath` Directive](make_4.md#SEC27).

`vpath ``pattern`{.variable}
:   Remove all search paths previously specified for
    `pattern`{.variable}.

`vpath`
:   Remove all search paths previously specified in any `vpath`
    directive.

Here is a summary of the text manipulation functions (see section
[Functions for Transforming Text](make_8.md#SEC71)):

`$(subst ``from`{.variable}`,``to`{.variable}`,``text`{.variable}`)`
:   Replace `from`{.variable} with `to`{.variable} in
    `text`{.variable}.\
    See section [Functions for String Substitution and
    Analysis](make_8.md#SEC73).

`$(patsubst ``pattern`{.variable}`,``replacement`{.variable}`,``text`{.variable}`)`
:   Replace words matching `pattern`{.variable} with
    `replacement`{.variable} in `text`{.variable}.\
    See section [Functions for String Substitution and
    Analysis](make_8.md#SEC73).

`$(strip ``string`{.variable}`)`
:   Remove excess whitespace characters from `string`{.variable}.\
    See section [Functions for String Substitution and
    Analysis](make_8.md#SEC73).

`$(findstring ``find`{.variable}`,``text`{.variable}`)`
:   Locate `find`{.variable} in `text`{.variable}.\
    See section [Functions for String Substitution and
    Analysis](make_8.md#SEC73).

`$(filter ``pattern`{.variable}`...,``text`{.variable}`)`
:   Select words in `text`{.variable} that match one of the
    `pattern`{.variable} words.\
    See section [Functions for String Substitution and
    Analysis](make_8.md#SEC73).

`$(filter-out ``pattern`{.variable}`...,``text`{.variable}`)`
:   Select words in `text`{.variable} that *do not* match any of the
    `pattern`{.variable} words.\
    See section [Functions for String Substitution and
    Analysis](make_8.md#SEC73).

`$(sort ``list`{.variable}`)`
:   Sort the words in `list`{.variable} lexicographically, removing
    duplicates.\
    See section [Functions for String Substitution and
    Analysis](make_8.md#SEC73).

`$(dir ``names`{.variable}`...)`
:   Extract the directory part of each file name.\
    See section [Functions for File Names](make_8.md#SEC74).

`$(notdir ``names`{.variable}`...)`
:   Extract the non-directory part of each file name.\
    See section [Functions for File Names](make_8.md#SEC74).

`$(suffix ``names`{.variable}`...)`
:   Extract the suffix (the last `` `.' ``{.sample} and following
    characters) of each file name.\
    See section [Functions for File Names](make_8.md#SEC74).

`$(basename ``names`{.variable}`...)`
:   Extract the base name (name without suffix) of each file name.\
    See section [Functions for File Names](make_8.md#SEC74).

`$(addsuffix ``suffix`{.variable}`,``names`{.variable}`...)`
:   Append `suffix`{.variable} to each word in `names`{.variable}.\
    See section [Functions for File Names](make_8.md#SEC74).

`$(addprefix ``prefix`{.variable}`,``names`{.variable}`...)`
:   Prepend `prefix`{.variable} to each word in `names`{.variable}.\
    See section [Functions for File Names](make_8.md#SEC74).

`$(join ``list1`{.variable}`,``list2`{.variable}`)`
:   Join two parallel lists of words.\
    See section [Functions for File Names](make_8.md#SEC74).

`$(word ``n`{.variable}`,``text`{.variable}`)`
:   Extract the `n`{.variable}th word (one-origin) of
    `text`{.variable}.\
    See section [Functions for File Names](make_8.md#SEC74).

`$(words ``text`{.variable}`)`
:   Count the number of words in `text`{.variable}.\
    See section [Functions for File Names](make_8.md#SEC74).

`$(firstword ``names`{.variable}`...)`
:   Extract the first word of `names`{.variable}.\
    See section [Functions for File Names](make_8.md#SEC74).

`$(wildcard ``pattern`{.variable}`...)`
:   Find file names matching a shell file name pattern (*not* a
    `` `%' ``{.sample} pattern).\
    See section [The Function `wildcard`](make_4.md#SEC24).

`$(shell ``command`{.variable}`)`

:   Execute a shell command and return its output.\
    See section [The `shell` Function](make_8.md#SEC77).

`$(origin ``variable`{.variable}`)`

:   Return a string describing how the `make` variable
    `variable`{.variable} was defined.\
    See section [The `origin` Function](make_8.md#SEC76).

`$(foreach ``var`{.variable}`,``words`{.variable}`,``text`{.variable}`)`

:   Evaluate `text`{.variable} with `var`{.variable} bound to each word
    in `words`{.variable}, and concatenate the results.\
    See section [The `foreach` Function](make_8.md#SEC75).

Here is a summary of the automatic variables. See section [Automatic
Variables](make_10.md#SEC94), for full information.

`$@`
:   The file name of the target.

`$%`
:   The target member name, when the target is an archive member.

`$<`
:   The name of the first dependency.

`$?`
:   The names of all the dependencies that are newer than the target,
    with spaces between them. For dependencies which are archive
    members, only the member named is used (see section [Using `make` to
    Update Archive Files](make_11.md#SEC101)).

`$^`

:   

`$+`
:   The names of all the dependencies, with spaces between them. For
    dependencies which are archive members, only the member named is
    used (see section [Using `make` to Update Archive
    Files](make_11.md#SEC101)). The value of `$^` omits duplicate
    dependencies, while `$+` retains them and preserves their order.

`$*`
:   The stem with which an implicit rule matches (see section [How
    Patterns Match](make_10.md#SEC95)).

`$(@D)`

:   

`$(@F)`
:   The directory part and the file-within-directory part of `$@`.

`$(*D)`

:   

`$(*F)`
:   The directory part and the file-within-directory part of `$*`.

`$(%D)`

:   

`$(%F)`
:   The directory part and the file-within-directory part of `$%`.

`$(<D)`

:   

`$(<F)`
:   The directory part and the file-within-directory part of `$<`.

`$(^D)`

:   

`$(^F)`
:   The directory part and the file-within-directory part of `$^`.

`$(+D)`

:   

`$(+F)`
:   The directory part and the file-within-directory part of `$+`.

`$(?D)`

:   

`$(?F)`
:   The directory part and the file-within-directory part of `$?`.

These variables are used specially by GNU `make`:

`MAKEFILES`

:   Makefiles to be read on every invocation of `make`.\
    See section [The Variable `MAKEFILES`](make_3.md#SEC16).

`VPATH`

:   Directory search path for files not found in the current directory.\
    See section [`VPATH`: Search Path for All
    Dependencies](make_4.md#SEC26).

`SHELL`

:   The name of the system default command interpreter, usually
    `` `/bin/sh' ``. You can set `SHELL` in the makefile to change the
    shell used to run commands. See section [Command
    Execution](make_5.md#SEC44).

`MAKE`

:   The name with which `make` was invoked. Using this variable in
    commands has special meaning. See section [How the `MAKE` Variable
    Works](make_5.md#SEC49).

`MAKELEVEL`

:   The number of levels of recursion (sub-`make`s).\
    See section [Communicating Variables to a
    Sub-`make`](make_5.md#SEC50).

`MAKEFLAGS`

:   The flags given to `make`. You can set this in the environment or a
    makefile to set flags.\
    See section [Communicating Options to a
    Sub-`make`](make_5.md#SEC51).

`SUFFIXES`

:   The default list of suffixes before `make` reads any makefiles.

Go to the [previous](make_14.md), [next](make_16.md) section.
