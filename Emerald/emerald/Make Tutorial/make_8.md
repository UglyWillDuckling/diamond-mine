GNU Make - Functions for Transforming Text

Go to the [previous](make_7.md), [next](make_9.md) section.

[]{#IDX444}

# [Functions for Transforming Text](make_toc.md#SEC71){#SEC71}

[Functions]{.dfn} allow you to do text processing in the makefile to
compute the files to operate on or the commands to use. You use a
function in a [function call]{.dfn}, where you give the name of the
function and some text (the [arguments]{.dfn}) for the function to
operate on. The result of the function\'s processing is substituted into
the makefile at the point of the call, just as a variable might be
substituted.

[]{#IDX445} []{#IDX446} []{#IDX447} []{#IDX448}

## [Function Call Syntax](make_toc.md#SEC72){#SEC72}

A function call resembles a variable reference. It looks like this:

    $(function arguments)

or like this:

    ${function arguments}

Here `function`{.variable} is a function name; one of a short list of
names that are part of `make`. There is no provision for defining new
functions.

The `arguments`{.variable} are the arguments of the function. They are
separated from the function name by one or more spaces or tabs, and if
there is more than one argument, then they are separated by commas. Such
whitespace and commas are not part of an argument\'s value. The
delimiters which you use to surround the function call, whether
parentheses or braces, can appear in an argument only in matching pairs;
the other kind of delimiters may appear singly. If the arguments
themselves contain other function calls or variable references, it is
wisest to use the same kind of delimiters for all the references; write
`` `$(subst a,b,$(x))' ``{.sample}, not
`` `$(subst a,b,${x})' ``{.sample}. This is because it is clearer, and
because only one type of delimiter is matched to find the end of the
reference.

The text written for each argument is processed by substitution of
variables and function calls to produce the argument value, which is the
text on which the function acts. The substitution is done in the order
in which the arguments appear.

Commas and unmatched parentheses or braces cannot appear in the text of
an argument as written; leading spaces cannot appear in the text of the
first argument as written. These characters can be put into the argument
value by variable substitution. First define variables `comma` and
`space` whose values are isolated comma and space characters, then
substitute these variables where such characters are wanted, like this:

    comma:= ,
    empty:=
    space:= $(empty) $(empty)
    foo:= a b c
    bar:= $(subst $(space),$(comma),$(foo))
    # bar is now `a,b,c'.

Here the `subst` function replaces each space with a comma, through the
value of `foo`, and substitutes the result.

[]{#IDX449}

## [Functions for String Substitution and Analysis](make_toc.md#SEC73){#SEC73}

Here are some functions that operate on strings:

`$(subst ``from`{.variable}`,``to`{.variable}`,``text`{.variable}`)`

:   Performs a textual replacement on the text `text`{.variable}: each
    occurrence of `from`{.variable} is replaced by `to`{.variable}. The
    result is substituted for the function call. For example,

        $(subst ee,EE,feet on the street)

    substitutes the string `` `fEEt on the strEEt' ``{.sample}.

    []{#IDX451}

`$(patsubst ``pattern`{.variable}`,``replacement`{.variable}`,``text`{.variable}`)`

:   Finds whitespace-separated words in `text`{.variable} that match
    `pattern`{.variable} and replaces them with
    `replacement`{.variable}. Here `pattern`{.variable} may contain a
    `` `%' ``{.sample} which acts as a wildcard, matching any number of
    any characters within a word. If `replacement`{.variable} also
    contains a `` `%' ``{.sample}, the `` `%' ``{.sample} is replaced by
    the text that matched the `` `%' ``{.sample} in
    `pattern`{.variable}.[]{#IDX452} []{#IDX453} []{#IDX454} []{#IDX455}
    []{#IDX456}

    `` `%' ``{.sample} characters in `patsubst` function invocations can
    be quoted with preceding backslashes (`` `\' ``{.sample}).
    Backslashes that would otherwise quote `` `%' ``{.sample} characters
    can be quoted with more backslashes. Backslashes that quote
    `` `%' ``{.sample} characters or other backslashes are removed from
    the pattern before it is compared file names or has a stem
    substituted into it. Backslashes that are not in danger of quoting
    `` `%' ``{.sample} characters go unmolested. For example, the
    pattern `` `the\%weird\\%pattern\\' `` has
    `` `the%weird\' ``{.sample} preceding the operative
    `` `%' ``{.sample} character, and `` `pattern\\' ``{.sample}
    following it. The final two backslashes are left alone because they
    cannot affect any `` `%' ``{.sample} character.

    Whitespace between words is folded into single space characters;
    leading and trailing whitespace is discarded.

    For example,

        $(patsubst %.c,%.o,x.c.c bar.c)

    produces the value `` `x.c.o bar.o' ``{.sample}.

    Substitution references (see section [Substitution
    References](make_6.md#SEC59)) are a simpler way to get the effect
    of the `patsubst` function:

        $(var:pattern=replacement)  

    is equivalent to

        $(patsubst pattern,replacement,$(var))

    The second shorthand simplifies one of the most common uses of
    `patsubst`: replacing the suffix at the end of file names.

        $(var:suffix=replacement) 

    is equivalent to

        $(patsubst %suffix,%replacement,$(var))

    For example, you might have a list of object files:

        objects = foo.o bar.o baz.o

    To get the list of corresponding source files, you could simply
    write:

        $(objects:.o=.c)

    instead of using the general form:

        $(patsubst %.o,%.c,$(objects))

    []{#IDX457} []{#IDX458} []{#IDX459} []{#IDX460}

`$(strip ``string`{.variable}`)`

:   Removes leading and trailing whitespace from `string`{.variable} and
    replaces each internal sequence of one or more whitespace characters
    with a single space. Thus, `` `$(strip a b c )' ``{.sample} results
    in `` `a b c' ``{.sample}.

    The function `strip` can be very useful when used in conjunction
    with conditionals. When comparing something with the empty string
    `` `' ``{.sample} using `ifeq` or `ifneq`, you usually want a string
    of just whitespace to match the empty string (see section
    [Conditional Parts of Makefiles](make_7.md#SEC67)).

    Thus, the following may fail to have the desired results:

        .PHONY: all
        ifneq   "$(needs_made)" ""
        all: $(needs_made)
        else
        all:;@echo 'Nothing to make!'
        endif

    Replacing the variable reference `` `$(needs_made)' ``{.sample} with
    the function call `` `$(strip $(needs_made))' ``{.sample} in the
    `ifneq` directive would make it more robust.

    []{#IDX461} []{#IDX462} []{#IDX463} []{#IDX464}

`$(findstring ``find`{.variable}`,``in`{.variable}`)`

:   Searches `in`{.variable} for an occurrence of `find`{.variable}. If
    it occurs, the value is `find`{.variable}; otherwise, the value is
    empty. You can use this function in a conditional to test for the
    presence of a specific substring in a given string. Thus, the two
    examples,

        $(findstring a,a b c)
        $(findstring a,b c)

    produce the values `` `a' ``{.sample} and `` `' ``{.sample} (the
    empty string), respectively. See section [Conditionals that Test
    Flags](make_7.md#SEC70), for a practical application of
    `findstring`.[]{#IDX465} []{#IDX466} []{#IDX467}

`$(filter ``pattern`{.variable}`...,``text`{.variable}`)`

:   Removes all whitespace-separated words in `text`{.variable} that do
    *not* match any of the `pattern`{.variable} words, returning only
    matching words. The patterns are written using `` `%' ``{.sample},
    just like the patterns used in the `patsubst` function above.

    The `filter` function can be used to separate out different types of
    strings (such as file names) in a variable. For example:

        sources := foo.c bar.c baz.s ugh.h
        foo: $(sources)
                cc $(filter %.c %.s,$(sources)) -o foo

    says that `` `foo' `` depends of `` `foo.c' ``, `` `bar.c' ``,
    `` `baz.s' `` and `` `ugh.h' `` but only `` `foo.c' ``,
    `` `bar.c' `` and `` `baz.s' `` should be specified in the command
    to the compiler.

    []{#IDX468} []{#IDX469} []{#IDX470}

`$(filter-out ``pattern`{.variable}`...,``text`{.variable}`)`

:   Removes all whitespace-separated words in `text`{.variable} that
    *do* match the `pattern`{.variable} words, returning only the words
    that *do not* match. This is the exact opposite of the `filter`
    function.

    For example, given:

        objects=main1.o foo.o main2.o bar.o
        mains=main1.o main2.o

    the following generates a list which contains all the object files
    not in `` `mains' ``{.sample}:

        $(filter-out $(mains),$(objects))

    []{#IDX471} []{#IDX472}

`$(sort ``list`{.variable}`)`

:   Sorts the words of `list`{.variable} in lexical order, removing
    duplicate words. The output is a list of words separated by single
    spaces. Thus,

        $(sort foo bar lose)

    returns the value `` `bar foo lose' ``{.sample}. []{#IDX473}
    []{#IDX474} []{#IDX475}

    Incidentally, since `sort` removes duplicate words, you can use it
    for this purpose even if you don\'t care about the sort order.

Here is a realistic example of the use of `subst` and `patsubst`.
Suppose that a makefile uses the `VPATH` variable to specify a list of
directories that `make` should search for dependency files (see section
[`VPATH`: Search Path for All Dependencies](make_4.md#SEC26)). This
example shows how to tell the C compiler to search for header files in
the same list of directories.

The value of `VPATH` is a list of directories separated by colons, such
as `` `src:../headers' ``{.sample}. First, the `subst` function is used
to change the colons to spaces:

    $(subst :, ,$(VPATH))

This produces `` `src ../headers' ``{.sample}. Then `patsubst` is used
to turn each directory name into a `` `-I' ``{.sample} flag. These can
be added to the value of the variable `CFLAGS`, which is passed
automatically to the C compiler, like this:

    override CFLAGS += $(patsubst %,-I%,$(subst :, ,$(VPATH)))

The effect is to append the text `` `-Isrc -I../headers' ``{.sample} to
the previously given value of `CFLAGS`. The `override` directive is used
so that the new value is assigned even if the previous value of `CFLAGS`
was specified with a command argument (see section [The `override`
Directive](make_6.md#SEC64) Directive}).

[]{#IDX476} []{#IDX477}

## [Functions for File Names](make_toc.md#SEC74){#SEC74}

Several of the built-in expansion functions relate specifically to
taking apart file names or lists of file names.

Each of the following functions performs a specific transformation on a
file name. The argument of the function is regarded as a series of file
names, separated by whitespace. (Leading and trailing whitespace is
ignored.) Each file name in the series is transformed in the same way
and the results are concatenated with single spaces between them.

`$(dir ``names`{.variable}`...)`

:   Extracts the directory-part of each file name in `names`{.variable}.
    The directory-part of the file name is everything up through (and
    including) the last slash in it. If the file name contains no slash,
    the directory part is the string `` `./' ``{.sample}. For example,

        $(dir src/foo.c hacks)

    produces the result `` `src/ ./' ``{.sample}.

    []{#IDX481} []{#IDX482} []{#IDX483}

`$(notdir ``names`{.variable}`...)`

:   Extracts all but the directory-part of each file name in
    `names`{.variable}. If the file name contains no slash, it is left
    unchanged. Otherwise, everything through the last slash is removed
    from it.

    A file name that ends with a slash becomes an empty string. This is
    unfortunate, because it means that the result does not always have
    the same number of whitespace-separated file names as the argument
    had; but we do not see any other valid alternative.

    For example,

        $(notdir src/foo.c hacks)

    produces the result `` `foo.c hacks' ``{.sample}.

    []{#IDX484} []{#IDX485} []{#IDX486}

`$(suffix ``names`{.variable}`...)`

:   Extracts the suffix of each file name in `names`{.variable}. If the
    file name contains a period, the suffix is everything starting with
    the last period. Otherwise, the suffix is the empty string. This
    frequently means that the result will be empty when
    `names`{.variable} is not, and if `names`{.variable} contains
    multiple file names, the result may contain fewer file names.

    For example,

        $(suffix src/foo.c hacks)

    produces the result `` `.c' ``{.sample}.

    []{#IDX487} []{#IDX488} []{#IDX489}

`$(basename ``names`{.variable}`...)`

:   Extracts all but the suffix of each file name in `names`{.variable}.
    If the file name contains a period, the basename is everything
    starting up to (and not including) the last period. Otherwise, the
    basename is the entire file name. For example,

        $(basename src/foo.c hacks)

    produces the result `` `src/foo hacks' ``{.sample}.

    []{#IDX490} []{#IDX491} []{#IDX492}

`$(addsuffix ``suffix`{.variable}`,``names`{.variable}`...)`

:   The argument `names`{.variable} is regarded as a series of names,
    separated by whitespace; `suffix`{.variable} is used as a unit. The
    value of `suffix`{.variable} is appended to the end of each
    individual name and the resulting larger names are concatenated with
    single spaces between them. For example,

        $(addsuffix .c,foo bar)

    produces the result `` `foo.c bar.c' ``{.sample}.

    []{#IDX493} []{#IDX494} []{#IDX495}

`$(addprefix ``prefix`{.variable}`,``names`{.variable}`...)`

:   The argument `names`{.variable} is regarded as a series of names,
    separated by whitespace; `prefix`{.variable} is used as a unit. The
    value of `prefix`{.variable} is prepended to the front of each
    individual name and the resulting larger names are concatenated with
    single spaces between them. For example,

        $(addprefix src/,foo bar)

    produces the result `` `src/foo src/bar' ``{.sample}.

    []{#IDX496} []{#IDX497} []{#IDX498}

`$(join ``list1`{.variable}`,``list2`{.variable}`)`

:   Concatenates the two arguments word by word: the two first words
    (one from each argument) concatenated form the first word of the
    result, the two second words form the second word of the result, and
    so on. So the `n`{.variable}th word of the result comes from the
    `n`{.variable}th word of each argument. If one argument has more
    words that the other, the extra words are copied unchanged into the
    result.

    For example, `` `$(join a b,.c .o)' ``{.sample} produces
    `` `a.c b.o' ``{.sample}.

    Whitespace between the words in the lists is not preserved; it is
    replaced with a single space.

    This function can merge the results of the `dir` and `notdir`
    functions, to produce the original list of files which was given to
    those two functions.

    []{#IDX499} []{#IDX500} []{#IDX501}

`$(word ``n`{.variable}`,``text`{.variable}`)`

:   Returns the `n`{.variable}th word of `text`{.variable}. The
    legitimate values of `n`{.variable} start from 1. If `n`{.variable}
    is bigger than the number of words in `text`{.variable}, the value
    is empty. For example,

        $(word 2, foo bar baz)

    returns `` `bar' ``{.sample}.

    []{#IDX502} []{#IDX503}

`$(words ``text`{.variable}`)`
:   Returns the number of words in `text`{.variable}. Thus, the last
    word of `text`{.variable} is
    `$(word $(words ``text`{.variable}`),``text`{.variable}`)`.
    []{#IDX504} []{#IDX505}

`$(firstword ``names`{.variable}`...)`

:   The argument `names`{.variable} is regarded as a series of names,
    separated by whitespace. The value is the first name in the series.
    The rest of the names are ignored.

    For example,

        $(firstword foo bar)

    produces the result `` `foo' ``{.sample}. Although
    `$(firstword ``text`{.variable}`)` is the same as
    `$(word 1,``text`{.variable}`)`, the `firstword` function is
    retained for its simplicity.

    []{#IDX506} []{#IDX507}

`$(wildcard ``pattern`{.variable}`)`
:   The argument `pattern`{.variable} is a file name pattern, typically
    containing wildcard characters (as in shell file name patterns). The
    result of `wildcard` is a space-separated list of the names of
    existing files that match the pattern. See section [Using Wildcard
    Characters in File Names](make_4.md#SEC21).

[]{#IDX508} []{#IDX509}

## [The `foreach` Function](make_toc.md#SEC75){#SEC75}

The `foreach` function is very different from other functions. It causes
one piece of text to be used repeatedly, each time with a different
substitution performed on it. It resembles the `for` command in the
shell `sh` and the `foreach` command in the C-shell `csh`.

The syntax of the `foreach` function is:

    $(foreach var,list,text)

The first two arguments, `var`{.variable} and `list`{.variable}, are
expanded before anything else is done; note that the last argument,
`text`{.variable}, is **not** expanded at the same time. Then for each
word of the expanded value of `list`{.variable}, the variable named by
the expanded value of `var`{.variable} is set to that word, and
`text`{.variable} is expanded. Presumably `text`{.variable} contains
references to that variable, so its expansion will be different each
time.

The result is that `text`{.variable} is expanded as many times as there
are whitespace-separated words in `list`{.variable}. The multiple
expansions of `text`{.variable} are concatenated, with spaces between
them, to make the result of `foreach`.

This simple example sets the variable `` `files' ``{.sample} to the list
of all files in the directories in the list `` `dirs' ``{.sample}:

    dirs := a b c d
    files := $(foreach dir,$(dirs),$(wildcard $(dir)/*))

Here `text`{.variable} is `` `$(wildcard $(dir)/*)' ``{.sample}. The
first repetition finds the value `` `a' ``{.sample} for `dir`, so it
produces the same result as `` `$(wildcard a/*)' ``{.sample}; the second
repetition produces the result of `` `$(wildcard b/*)' ``{.sample}; and
the third, that of `` `$(wildcard c/*)' ``{.sample}.

This example has the same result (except for setting
`` `dirs' ``{.sample}) as the following example:

    files := $(wildcard a/* b/* c/* d/*)

When `text`{.variable} is complicated, you can improve readability by
giving it a name, with an additional variable:

    find_files = $(wildcard $(dir)/*)
    dirs := a b c d
    files := $(foreach dir,$(dirs),$(find_files))

Here we use the variable `find_files` this way. We use plain
`` `=' ``{.sample} to define a recursively-expanding variable, so that
its value contains an actual function call to be reexpanded under the
control of `foreach`; a simply-expanded variable would not do, since
`wildcard` would be called only once at the time of defining
`find_files`.

The `foreach` function has no permanent effect on the variable
`var`{.variable}; its value and flavor after the `foreach` function call
are the same as they were beforehand. The other values which are taken
from `list`{.variable} are in effect only temporarily, during the
execution of `foreach`. The variable `var`{.variable} is a
simply-expanded variable during the execution of `foreach`. If
`var`{.variable} was undefined before the `foreach` function call, it is
undefined after the call. See section [The Two Flavors of
Variables](make_6.md#SEC57).

You must take care when using complex variable expressions that result
in variable names because many strange things are valid variable names,
but are probably not what you intended. For example,

    files := $(foreach Es escrito en espanol!,b c ch,$(find_files))

might be useful if the value of `find_files` references the variable
whose name is `` `Es escrito en espanol!' ``{.sample} (es un nombre
bastante largo, no?), but it is more likely to be a mistake.

[]{#IDX510} []{#IDX511} []{#IDX512}

## [The `origin` Function](make_toc.md#SEC76){#SEC76}

The `origin` function is unlike most other functions in that it does not
operate on the values of variables; it tells you something *about* a
variable. Specifically, it tells you where it came from.

The syntax of the `origin` function is:

    $(origin variable)

Note that `variable`{.variable} is the *name* of a variable to inquire
about; not a *reference* to that variable. Therefore you would not
normally use a `` `$' ``{.sample} or parentheses when writing it. (You
can, however, use a variable reference in the name if you want the name
not to be a constant.)

The result of this function is a string telling you how the variable
`variable`{.variable} was defined:

`` `undefined' ``{.sample}

:   if `variable`{.variable} was never defined.

`` `default' ``{.sample}

:   if `variable`{.variable} has a default definition, as is usual with
    `CC` and so on. See section [Variables Used by Implicit
    Rules](make_10.md#SEC89). Note that if you have redefined a
    default variable, the `origin` function will return the origin of
    the later definition.

`` `environment' ``{.sample}

:   if `variable`{.variable} was defined as an environment variable and
    the `` `-e' ``{.sample} option is *not* turned on (see section
    [Summary of Options](make_9.md#SEC85)).

`` `environment override' ``{.sample}

:   if `variable`{.variable} was defined as an environment variable and
    the `` `-e' ``{.sample} option *is* turned on (see section [Summary
    of Options](make_9.md#SEC85)).

`` `file' ``{.sample}

:   if `variable`{.variable} was defined in a makefile.

`` `command line' ``{.sample}

:   if `variable`{.variable} was defined on the command line.

`` `override' ``{.sample}

:   if `variable`{.variable} was defined with an `override` directive in
    a makefile (see section [The `override`
    Directive](make_6.md#SEC64)).

`` `automatic' ``{.sample}

:   if `variable`{.variable} is an automatic variable defined for the
    execution of the commands for each rule (see section [Automatic
    Variables](make_10.md#SEC94)).

This information is primarily useful (other than for your curiosity) to
determine if you want to believe the value of a variable. For example,
suppose you have a makefile `` `foo' `` that includes another makefile
`` `bar' ``. You want a variable `bletch` to be defined in `` `bar' ``
if you run the command `` `make -f bar' ``{.sample}, even if the
environment contains a definition of `bletch`. However, if `` `foo' ``
defined `bletch` before including `` `bar' ``, you do not want to
override that definition. This could be done by using an `override`
directive in `` `foo' ``, giving that definition precedence over the
later definition in `` `bar' ``; unfortunately, the `override` directive
would also override any command line definitions. So, `` `bar' `` could
include:

    ifdef bletch
    ifeq "$(origin bletch)" "environment"
    bletch = barf, gag, etc.
    endif
    endif

If `bletch` has been defined from the environment, this will redefine
it.

If you want to override a previous definition of `bletch` if it came
from the environment, even under `` `-e' ``{.sample}, you could instead
write:

    ifneq "$(findstring environment,$(origin bletch))" ""
    bletch = barf, gag, etc.
    endif

Here the redefinition takes place if `` `$(origin bletch)' ``{.sample}
returns either `` `environment' ``{.sample} or
`` `environment override' ``{.sample}. See section [Functions for String
Substitution and Analysis](make_8.md#SEC73).

[]{#IDX513} []{#IDX514} []{#IDX515} []{#IDX516}

## [The `shell` Function](make_toc.md#SEC77){#SEC77}

The `shell` function is unlike any other function except the `wildcard`
function (see section [The Function `wildcard`](make_4.md#SEC24)) in
that it communicates with the world outside of `make`.

The `shell` function performs the same function that backquotes
(``` ``' ```{.sample}) perform in most shells: it does [command
expansion]{.dfn}. This means that it takes an argument that is a shell
command and returns the output of the command. The only processing
`make` does on the result, before substituting it into the surrounding
text, is to convert newlines to spaces.

The commands run by calls to the `shell` function are run when the
function calls are expanded. In most cases, this is when the makefile is
read in. The exception is that function calls in the commands of the
rules are expanded when the commands are run, and this applies to
`shell` function calls like all others.

Here are some examples of the use of the `shell` function:

    contents := $(shell cat foo)

sets `contents` to the contents of the file `` `foo' ``, with a space
(rather than a newline) separating each line.

    files := $(shell echo *.c)

sets `files` to the expansion of `` `*.c' ``{.sample}. Unless `make` is
using a very strange shell, this has the same result as
`` `$(wildcard *.c)' ``{.sample}.

Go to the [previous](make_7.md), [next](make_9.md) section.
