GNU Make - Conditional Parts of Makefiles

Go to the [previous](make_6.md), [next](make_8.md) section.

# [Conditional Parts of Makefiles](make_toc.md#SEC67){#SEC67}

[]{#IDX437}

A [conditional]{.dfn} causes part of a makefile to be obeyed or ignored
depending on the values of variables. Conditionals can compare the value
of one variable to another, or the value of a variable to a constant
string. Conditionals control what `make` actually \"sees\" in the
makefile, so they *cannot* be used to control shell commands at the time
of execution.

## [Example of a Conditional](make_toc.md#SEC68){#SEC68}

The following example of a conditional tells `make` to use one set of
libraries if the `CC` variable is `` `gcc' ``{.sample}, and a different
set of libraries otherwise. It works by controlling which of two command
lines will be used as the command for a rule. The result is that
`` `CC=gcc' ``{.sample} as an argument to `make` changes not only which
compiler is used but also which libraries are linked.

    libs_for_gcc = -lgnu
    normal_libs =

    foo: $(objects)
    ifeq ($(CC),gcc)
            $(CC) -o foo $(objects) $(libs_for_gcc)
    else
            $(CC) -o foo $(objects) $(normal_libs)
    endif

This conditional uses three directives: one `ifeq`, one `else` and one
`endif`.

The `ifeq` directive begins the conditional, and specifies the
condition. It contains two arguments, separated by a comma and
surrounded by parentheses. Variable substitution is performed on both
arguments and then they are compared. The lines of the makefile
following the `ifeq` are obeyed if the two arguments match; otherwise
they are ignored.

The `else` directive causes the following lines to be obeyed if the
previous conditional failed. In the example above, this means that the
second alternative linking command is used whenever the first
alternative is not used. It is optional to have an `else` in a
conditional.

The `endif` directive ends the conditional. Every conditional must end
with an `endif`. Unconditional makefile text follows.

As this example illustrates, conditionals work at the textual level: the
lines of the conditional are treated as part of the makefile, or
ignored, according to the condition. This is why the larger syntactic
units of the makefile, such as rules, may cross the beginning or the end
of the conditional.

When the variable `CC` has the value `` `gcc' ``{.sample}, the above
example has this effect:

    foo: $(objects)
            $(CC) -o foo $(objects) $(libs_for_gcc)

When the variable `CC` has any other value, the effect is this:

    foo: $(objects)
            $(CC) -o foo $(objects) $(normal_libs)

Equivalent results can be obtained in another way by conditionalizing a
variable assignment and then using the variable unconditionally:

    libs_for_gcc = -lgnu
    normal_libs =

    ifeq ($(CC),gcc)
      libs=$(libs_for_gcc)
    else
      libs=$(normal_libs)
    endif

    foo: $(objects)
            $(CC) -o foo $(objects) $(libs)

[]{#IDX438} []{#IDX439} []{#IDX440} []{#IDX441} []{#IDX442} []{#IDX443}

## [Syntax of Conditionals](make_toc.md#SEC69){#SEC69}

The syntax of a simple conditional with no `else` is as follows:

    conditional-directive
    text-if-true
    endif

The `text-if-true`{.variable} may be any lines of text, to be considered
as part of the makefile if the condition is true. If the condition is
false, no text is used instead.

The syntax of a complex conditional is as follows:

    conditional-directive
    text-if-true
    else
    text-if-false
    endif

If the condition is true, `text-if-true`{.variable} is used; otherwise,
`text-if-false`{.variable} is used instead. The
`text-if-false`{.variable} can be any number of lines of text.

The syntax of the `conditional-directive`{.variable} is the same whether
the conditional is simple or complex. There are four different
directives that test different conditions. Here is a table of them:

`ifeq (``arg1`{.variable}`, ``arg2`{.variable}`)`

:   

`ifeq '``arg1`{.variable}`' '``arg2`{.variable}`'`

:   

`ifeq "``arg1`{.variable}`" "``arg2`{.variable}`"`

:   

`ifeq "``arg1`{.variable}`" '``arg2`{.variable}`'`

:   

`ifeq '``arg1`{.variable}`' "``arg2`{.variable}`"`

:   Expand all variable references in `arg1`{.variable} and
    `arg2`{.variable} and compare them. If they are identical, the
    `text-if-true`{.variable} is effective; otherwise, the
    `text-if-false`{.variable}, if any, is effective.

    Often you want to test if a variable has a non-empty value. When the
    value results from complex expansions of variables and functions,
    expansions you would consider empty may actually contain whitespace
    characters and thus are not seen as empty. However, you can use the
    `strip` function (see section [Functions for String Substitution and
    Analysis](make_8.md#SEC73)) to avoid interpreting whitespace as a
    non-empty value. For example:

        ifeq ($(strip $(foo)),)
        text-if-empty
        endif

    will evaluate `text-if-empty`{.variable} even if the expansion of
    `$(foo)` contains whitespace characters.

`ifneq (``arg1`{.variable}`, ``arg2`{.variable}`)`

:   

`ifneq '``arg1`{.variable}`' '``arg2`{.variable}`'`

:   

`ifneq "``arg1`{.variable}`" "``arg2`{.variable}`"`

:   

`ifneq "``arg1`{.variable}`" '``arg2`{.variable}`'`

:   

`ifneq '``arg1`{.variable}`' "``arg2`{.variable}`"`
:   Expand all variable references in `arg1`{.variable} and
    `arg2`{.variable} and compare them. If they are different, the
    `text-if-true`{.variable} is effective; otherwise, the
    `text-if-false`{.variable}, if any, is effective.

`ifdef ``variable-name`{.variable}

:   If the variable `variable-name`{.variable} has a non-empty value,
    the `text-if-true`{.variable} is effective; otherwise, the
    `text-if-false`{.variable}, if any, is effective. Variables that
    have never been defined have an empty value.

    Note that `ifdef` only tests whether a variable has a value. It does
    not expand the variable to see if that value is nonempty.
    Consequently, tests using `ifdef` return true for all definitions
    except those like `foo =`. To test for an empty value, use
    `ifeq ($(foo),)`. For example,

        bar =
        foo = $(bar)
        ifdef foo
        frobozz = yes
        else
        frobozz = no
        endif

    sets `` `frobozz' ``{.sample} to `` `yes' ``{.sample}, while:

        foo =
        ifdef foo
        frobozz = yes
        else
        frobozz = no
        endif

    sets `` `frobozz' ``{.sample} to `` `no' ``{.sample}.

`ifndef ``variable-name`{.variable}
:   If the variable `variable-name`{.variable} has an empty value, the
    `text-if-true`{.variable} is effective; otherwise, the
    `text-if-false`{.variable}, if any, is effective.

Extra spaces are allowed and ignored at the beginning of the conditional
directive line, but a tab is not allowed. (If the line begins with a
tab, it will be considered a command for a rule.) Aside from this, extra
spaces or tabs may be inserted with no effect anywhere except within the
directive name or within an argument. A comment starting with
`` `#' ``{.sample} may appear at the end of the line.

The other two directives that play a part in a conditional are `else`
and `endif`. Each of these directives is written as one word, with no
arguments. Extra spaces are allowed and ignored at the beginning of the
line, and spaces or tabs at the end. A comment starting with
`` `#' ``{.sample} may appear at the end of the line.

Conditionals affect which lines of the makefile `make` uses. If the
condition is true, `make` reads the lines of the
`text-if-true`{.variable} as part of the makefile; if the condition is
false, `make` ignores those lines completely. It follows that syntactic
units of the makefile, such as rules, may safely be split across the
beginning or the end of the conditional.

`make` evaluates conditionals when it reads a makefile. Consequently,
you cannot use automatic variables in the tests of conditionals because
they are not defined until commands are run (see section [Automatic
Variables](make_10.md#SEC94)).

To prevent intolerable confusion, it is not permitted to start a
conditional in one makefile and end it in another. However, you may
write an `include` directive within a conditional, provided you do not
attempt to terminate the conditional inside the included file.

## [Conditionals that Test Flags](make_toc.md#SEC70){#SEC70}

You can write a conditional that tests `make` command flags such as
`` `-t' ``{.sample} by using the variable `MAKEFLAGS` together with the
`findstring` function (see section [Functions for String Substitution
and Analysis](make_8.md#SEC73)). This is useful when `touch` is not
enough to make a file appear up to date.

The `findstring` function determines whether one string appears as a
substring of another. If you want to test for the `` `-t' ``{.sample}
flag, use `` `t' ``{.sample} as the first string and the value of
`MAKEFLAGS` as the other.

For example, here is how to arrange to use `` `ranlib -t' ``{.sample} to
finish marking an archive file up to date:

    archive.a: ...
    ifneq (,$(findstring t,$(MAKEFLAGS)))
            +touch archive.a
            +ranlib -t archive.a
    else
            ranlib archive.a
    endif

The `` `+' ``{.sample} prefix marks those command lines as \"recursive\"
so that they will be executed despite use of the `` `-t' ``{.sample}
flag. See section [Recursive Use of `make`](make_5.md#SEC48).

Go to the [previous](make_6.md), [next](make_8.md) section.
