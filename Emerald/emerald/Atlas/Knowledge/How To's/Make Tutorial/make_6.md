GNU Make - How to Use Variables

Go to the [previous](make_5.md), [next](make_7.md) section.

[]{#IDX378} []{#IDX379} []{#IDX380} []{#IDX381}

# [How to Use Variables](make_toc.md#SEC55){#SEC55}

A [variable]{.dfn} is a name defined in a makefile to represent a string
of text, called the variable\'s [value]{.dfn}. These values are
substituted by explicit request into targets, dependencies, commands,
and other parts of the makefile. (In some other versions of `make`,
variables are called [macros]{.dfn}.) []{#IDX382}

Variables and functions in all parts of a makefile are expanded when
read, except for the shell commands in rules, the right-hand sides of
variable definitions using `` `=' ``{.sample}, and the bodies of
variable definitions using the `define` directive.

Variables can represent lists of file names, options to pass to
compilers, programs to run, directories to look in for source files,
directories to write output in, or anything else you can imagine.

A variable name may be any sequence of characters not containing
`` `:' ``{.sample}, `` `#' ``{.sample}, `` `=' ``{.sample}, or leading
or trailing whitespace. However, variable names containing characters
other than letters, numbers, and underscores should be avoided, as they
may be given special meanings in the future, and with some shells they
cannot be passed through the environment to a sub-`make` (see section
[Communicating Variables to a Sub-`make`](make_5.md#SEC50)).

Variable names are case-sensitive. The names `` `foo' ``{.sample},
`` `FOO' ``{.sample}, and `` `Foo' ``{.sample} all refer to different
variables.

It is traditional to use upper case letters in variable names, but we
recommend using lower case letters for variable names that serve
internal purposes in the makefile, and reserving upper case for
parameters that control implicit rules or for parameters that the user
should override with command options (see section [Overriding
Variables](make_9.md#SEC83)).

A few variables have names that are a single punctuation character or
just a few characters. These are the [automatic variables]{.dfn}, and
they have particular specialized uses. See section [Automatic
Variables](make_10.md#SEC94).

[]{#IDX383} []{#IDX384} []{#IDX385} []{#IDX386}

## [Basics of Variable References](make_toc.md#SEC56){#SEC56}

To substitute a variable\'s value, write a dollar sign followed by the
name of the variable in parentheses or braces: either
`` `$(foo)' ``{.sample} or `` `${foo}' ``{.sample} is a valid reference
to the variable `foo`. This special significance of `` `$' ``{.sample}
is why you must write `` `$$' ``{.sample} to have the effect of a single
dollar sign in a file name or command.

Variable references can be used in any context: targets, dependencies,
commands, most directives, and new variable values. Here is an example
of a common case, where a variable holds the names of all the object
files in a program:

    objects = program.o foo.o utils.o
    program : $(objects)
            cc -o program $(objects)

    $(objects) : defs.h

Variable references work by strict textual substitution. Thus, the rule

    foo = c
    prog.o : prog.$(foo)
            $(foo)$(foo) -$(foo) prog.$(foo)

could be used to compile a C program `` `prog.c' ``. Since spaces before
the variable value are ignored in variable assignments, the value of
`foo` is precisely `` `c' ``{.sample}. (Don\'t actually write your
makefiles this way!)

A dollar sign followed by a character other than a dollar sign,
open-parenthesis or open-brace treats that single character as the
variable name. Thus, you could reference the variable `x` with
`` `$x' ``{.sample}. However, this practice is strongly discouraged,
except in the case of the automatic variables (see section [Automatic
Variables](make_10.md#SEC94)).

[]{#IDX387} []{#IDX388} []{#IDX389} []{#IDX390} []{#IDX391}

## [The Two Flavors of Variables](make_toc.md#SEC57){#SEC57}

There are two ways that a variable in GNU `make` can have a value; we
call them the two [flavors]{.dfn} of variables. The two flavors are
distinguished in how they are defined and in what they do when expanded.
[]{#IDX392}

The first flavor of variable is a [recursively expanded]{.dfn} variable.
Variables of this sort are defined by lines using `` `=' ``{.sample}
(see section [Setting Variables](make_6.md#SEC62)) or by the `define`
directive (see section [Defining Variables
Verbatim](make_6.md#SEC65)). The value you specify is installed
verbatim; if it contains references to other variables, these references
are expanded whenever this variable is substituted (in the course of
expanding some other string). When this happens, it is called [recursive
expansion]{.dfn}.

For example,

    foo = $(bar)
    bar = $(ugh)
    ugh = Huh?

    all:;echo $(foo)

will echo `` `Huh?' ``{.sample}: `` `$(foo)' ``{.sample} expands to
`` `$(bar)' ``{.sample} which expands to `` `$(ugh)' ``{.sample} which
finally expands to `` `Huh?' ``{.sample}.

This flavor of variable is the only sort supported by other versions of
`make`. It has its advantages and its disadvantages. An advantage (most
would say) is that:

    CFLAGS = $(include_dirs) -O
    include_dirs = -Ifoo -Ibar

will do what was intended: when `` `CFLAGS' ``{.sample} is expanded in a
command, it will expand to `` `-Ifoo -Ibar -O' ``{.sample}. A major
disadvantage is that you cannot append something on the end of a
variable, as in

    CFLAGS = $(CFLAGS) -O

because it will cause an infinite loop in the variable expansion.
(Actually `make` detects the infinite loop and reports an error.)
[]{#IDX394} []{#IDX393}

Another disadvantage is that any functions (see section [Functions for
Transforming Text](make_8.md#SEC71)) referenced in the definition will
be executed every time the variable is expanded. This makes `make` run
slower; worse, it causes the `wildcard` and `shell` functions to give
unpredictable results because you cannot easily control when they are
called, or even how many times.

To avoid all the problems and inconveniences of recursively expanded
variables, there is another flavor: simply expanded variables.
[]{#IDX395} []{#IDX396} []{#IDX397}

[Simply expanded variables]{.dfn} are defined by lines using
`` `:=' ``{.sample} (see section [Setting
Variables](make_6.md#SEC62)). The value of a simply expanded variable
is scanned once and for all, expanding any references to other variables
and functions, when the variable is defined. The actual value of the
simply expanded variable is the result of expanding the text that you
write. It does not contain any references to other variables; it
contains their values *as of the time this variable was defined*.
Therefore,

    x := foo
    y := $(x) bar
    x := later

is equivalent to

    y := foo bar
    x := later

When a simply expanded variable is referenced, its value is substituted
verbatim.

Here is a somewhat more complicated example, illustrating the use of
`` `:=' ``{.sample} in conjunction with the `shell` function. (See
section [The `shell` Function](make_8.md#SEC77).) This example also
shows use of the variable `MAKELEVEL`, which is changed when it is
passed down from level to level. (See section [Communicating Variables
to a Sub-`make`](make_5.md#SEC50)}, for information about
`MAKELEVEL`.) []{#IDX398} []{#IDX399}

    ifeq (0,${MAKELEVEL})
    cur-dir   := $(shell pwd)
    whoami    := $(shell whoami)
    host-type := $(shell arch)
    MAKE := ${MAKE} host-type=${host-type} whoami=${whoami}
    endif

An advantage of this use of `` `:=' ``{.sample} is that a typical
\`descend into a directory\' command then looks like this:

    ${subdirs}:
          ${MAKE} cur-dir=${cur-dir}/$@ -C $@ all

Simply expanded variables generally make complicated makefile
programming more predictable because they work like variables in most
programming languages. They allow you to redefine a variable using its
own value (or its value processed in some way by one of the expansion
functions) and to use the expansion functions much more efficiently (see
section [Functions for Transforming Text](make_8.md#SEC71)).
[]{#IDX400} []{#IDX401} []{#IDX402}

You can also use them to introduce controlled leading whitespace into
variable values. Leading whitespace characters are discarded from your
input before substitution of variable references and function calls;
this means you can include leading spaces in a variable value by
protecting them with variable references, like this:

    nullstring :=
    space := $(nullstring) # end of the line

Here the value of the variable `space` is precisely one space. The
comment `` `# end of the line' ``{.sample} is included here just for
clarity. Since trailing space characters are *not* stripped from
variable values, just a space at the end of the line would have the same
effect (but be rather hard to read). If you put whitespace at the end of
a variable value, it is a good idea to put a comment like that at the
end of the line to make your intent clear. Conversely, if you do *not*
want any whitespace characters at the end of your variable value, you
must remember not to put a random comment on the end of the line after
some whitespace, such as this:

    dir := /foo/bar    # directory to put the frobs in

Here the value of the variable `dir` is `` `/foo/bar ' ``{.sample} (with
four trailing spaces), which was probably not the intention. (Imagine
something like `` `$(dir)/file' ``{.sample} with this definition!)

[]{#IDX403}

## [Advanced Features for Reference to Variables](make_toc.md#SEC58){#SEC58}

This section describes some advanced features you can use to reference
variables in more flexible ways.

[]{#IDX404} []{#IDX405} []{#IDX406} []{#IDX407}

### [Substitution References](make_toc.md#SEC59){#SEC59}

[]{#IDX408} []{#IDX409}

A [substitution reference]{.dfn} substitutes the value of a variable
with alterations that you specify. It has the form
`` `$( ``{.sample}`var`{.variable}`:`{.sample}`a`{.variable}`=`{.sample}`b`{.variable}`)'`{.sample}
(or
`` `${ ``{.sample}`var`{.variable}`:`{.sample}`a`{.variable}`=`{.sample}`b`{.variable}`}'`{.sample})
and its meaning is to take the value of the variable `var`{.variable},
replace every `a`{.variable} at the end of a word with `b`{.variable} in
that value, and substitute the resulting string.

When we say \"at the end of a word\", we mean that `a`{.variable} must
appear either followed by whitespace or at the end of the value in order
to be replaced; other occurrences of `a`{.variable} in the value are
unaltered. For example:

    foo := a.o b.o c.o
    bar := $(foo:.o=.c)

sets `` `bar' ``{.sample} to `` `a.c b.c c.c' ``{.sample}. See section
[Setting Variables](make_6.md#SEC62).

A substitution reference is actually an abbreviation for use of the
`patsubst` expansion function (see section [Functions for String
Substitution and Analysis](make_8.md#SEC73)). We provide substitution
references as well as `patsubst` for compatibility with other
implementations of `make`. []{#IDX410}

Another type of substitution reference lets you use the full power of
the `patsubst` function. It has the same form
`` `$( ``{.sample}`var`{.variable}`:`{.sample}`a`{.variable}`=`{.sample}`b`{.variable}`)'`{.sample}
described above, except that now `a`{.variable} must contain a single
`` `%' ``{.sample} character. This case is equivalent to
`` `$(patsubst  ``{.sample}`a`{.variable}`,`{.sample}`b`{.variable}`,$(`{.sample}`var`{.variable}`))'`{.sample}.
See section [Functions for String Substitution and
Analysis](make_8.md#SEC73), for a description of the `patsubst`
function.

    For example:

    foo := a.o b.o c.o
    bar := $(foo:%.o=%.c)

sets `` `bar' ``{.sample} to `` `a.c b.c c.c' ``{.sample}.

[]{#IDX411} []{#IDX412} []{#IDX413} []{#IDX414} []{#IDX415} []{#IDX416}
[]{#IDX417}

### [Computed Variable Names](make_toc.md#SEC60){#SEC60}

Computed variable names are a complicated concept needed only for
sophisticated makefile programming. For most purposes you need not
consider them, except to know that making a variable with a dollar sign
in its name might have strange results. However, if you are the type
that wants to understand everything, or you are actually interested in
what they do, read on.

Variables may be referenced inside the name of a variable. This is
called a [computed variable name]{.dfn} or a [nested variable
reference]{.dfn}. For example,

    x = y
    y = z
    a := $($(x))

defines `a` as `` `z' ``{.sample}: the `` `$(x)' ``{.sample} inside
`` `$($(x))' ``{.sample} expands to `` `y' ``{.sample}, so
`` `$($(x))' ``{.sample} expands to `` `$(y)' ``{.sample} which in turn
expands to `` `z' ``{.sample}. Here the name of the variable to
reference is not stated explicitly; it is computed by expansion of
`` `$(x)' ``{.sample}. The reference `` `$(x)' ``{.sample} here is
nested within the outer variable reference.

The previous example shows two levels of nesting, but any number of
levels is possible. For example, here are three levels:

    x = y
    y = z
    z = u
    a := $($($(x)))

Here the innermost `` `$(x)' ``{.sample} expands to `` `y' ``{.sample},
so `` `$($(x))' ``{.sample} expands to `` `$(y)' ``{.sample} which in
turn expands to `` `z' ``{.sample}; now we have `` `$(z)' ``{.sample},
which becomes `` `u' ``{.sample}.

References to recursively-expanded variables within a variable name are
reexpanded in the usual fashion. For example:

    x = $(y)
    y = z
    z = Hello
    a := $($(x))

defines `a` as `` `Hello' ``{.sample}: `` `$($(x))' ``{.sample} becomes
`` `$($(y))' ``{.sample} which becomes `` `$(z)' ``{.sample} which
becomes `` `Hello' ``{.sample}.

Nested variable references can also contain modified references and
function invocations (see section [Functions for Transforming
Text](make_8.md#SEC71)), just like any other reference. For example,
using the `subst` function (see section [Functions for String
Substitution and Analysis](make_8.md#SEC73)):

    x = variable1
    variable2 := Hello
    y = $(subst 1,2,$(x))
    z = y
    a := $($($(z)))

eventually defines `a` as `` `Hello' ``{.sample}. It is doubtful that
anyone would ever want to write a nested reference as convoluted as this
one, but it works: `` `$($($(z)))' ``{.sample} expands to
`` `$($(y))' ``{.sample} which becomes
`` `$($(subst 1,2,$(x)))' ``{.sample}. This gets the value
`` `variable1' ``{.sample} from `x` and changes it by substitution to
`` `variable2' ``{.sample}, so that the entire string becomes
`` `$(variable2)' ``{.sample}, a simple variable reference whose value
is `` `Hello' ``{.sample}.

A computed variable name need not consist entirely of a single variable
reference. It can contain several variable references, as well as some
invariant text. For example,

    a_dirs := dira dirb
    1_dirs := dir1 dir2

    a_files := filea fileb
    1_files := file1 file2

    ifeq "$(use_a)" "yes"
    a1 := a
    else
    a1 := 1
    endif

    ifeq "$(use_dirs)" "yes"
    df := dirs
    else
    df := files
    endif

    dirs := $($(a1)_$(df))

will give `dirs` the same value as `a_dirs`, `1_dirs`, `a_files` or
`1_files` depending on the settings of `use_a` and `use_dirs`.

Computed variable names can also be used in substitution references:

    a_objects := a.o b.o c.o
    1_objects := 1.o 2.o 3.o

    sources := $($(a1)_objects:.o=.c)

defines `sources` as either `` `a.c b.c c.c' ``{.sample} or
`` `1.c 2.c 3.c' ``{.sample}, depending on the value of `a1`.

The only restriction on this sort of use of nested variable references
is that they cannot specify part of the name of a function to be called.
This is because the test for a recognized function name is done before
the expansion of nested references. For example,

    ifdef do_sort
    func := sort
    else
    func := strip
    endif

    bar := a d b g q c

    foo := $($(func) $(bar))

attempts to give `` `foo' ``{.sample} the value of the variable
`` `sort a d b g q c' ``{.sample} or `` `strip a d b g q c' ``{.sample},
rather than giving `` `a d b g q c' ``{.sample} as the argument to
either the `sort` or the `strip` function. This restriction could be
removed in the future if that change is shown to be a good idea.

You can also use computed variable names in the left-hand side of a
variable assignment, or in a `define` directive, as in:

    dir = foo
    $(dir)_sources := $(wildcard $(dir)/*.c)
    define $(dir)_print
    lpr $($(dir)_sources)
    endef

This example defines the variables `` `dir' ``{.sample},
`` `foo_sources' ``{.sample}, and `` `foo_print' ``{.sample}.

Note that [nested variable references]{.dfn} are quite different from
[recursively expanded variables]{.dfn} (see section [The Two Flavors of
Variables](make_6.md#SEC57)), though both are used together in complex
ways when doing makefile programming.

[]{#IDX418} []{#IDX419}

## [How Variables Get Their Values](make_toc.md#SEC61){#SEC61}

Variables can get values in several different ways:

-   You can specify an overriding value when you run `make`. See section
    [Overriding Variables](make_9.md#SEC83).
-   You can specify a value in the makefile, either with an assignment
    (see section [Setting Variables](make_6.md#SEC62)) or with a
    verbatim definition (see section [Defining Variables
    Verbatim](make_6.md#SEC65)).
-   Variables in the environment become `make` variables. See section
    [Variables from the Environment](make_6.md#SEC66).
-   Several [automatic]{.dfn} variables are given new values for each
    rule. Each of these has a single conventional use. See section
    [Automatic Variables](make_10.md#SEC94).
-   Several variables have constant initial values. See section
    [Variables Used by Implicit Rules](make_10.md#SEC89).

[]{#IDX420} []{#IDX421} []{#IDX422} []{#IDX423}

## [Setting Variables](make_toc.md#SEC62){#SEC62}

To set a variable from the makefile, write a line starting with the
variable name followed by `` `=' ``{.sample} or `` `:=' ``{.sample}.
Whatever follows the `` `=' ``{.sample} or `` `:=' ``{.sample} on the
line becomes the value. For example,

    objects = main.o foo.o bar.o utils.o

defines a variable named `objects`. Whitespace around the variable name
and immediately after the `` `=' ``{.sample} is ignored.

Variables defined with `` `=' ``{.sample} are [recursively
expanded]{.dfn} variables. Variables defined with `` `:=' ``{.sample}
are [simply expanded]{.dfn} variables; these definitions can contain
variable references which will be expanded before the definition is
made. See section [The Two Flavors of Variables](make_6.md#SEC57).

The variable name may contain function and variable references, which
are expanded when the line is read to find the actual variable name to
use.

There is no limit on the length of the value of a variable except the
amount of swapping space on the computer. When a variable definition is
long, it is a good idea to break it into several lines by inserting
backslash-newline at convenient places in the definition. This will not
affect the functioning of `make`, but it will make the makefile easier
to read.

Most variable names are considered to have the empty string as a value
if you have never set them. Several variables have built-in initial
values that are not empty, but you can set them in the usual ways (see
section [Variables Used by Implicit Rules](make_10.md#SEC89)). Several
special variables are set automatically to a new value for each rule;
these are called the [automatic]{.dfn} variables (see section [Automatic
Variables](make_10.md#SEC94)).

[]{#IDX424} []{#IDX425} []{#IDX426}

## [Appending More Text to Variables](make_toc.md#SEC63){#SEC63}

Often it is useful to add more text to the value of a variable already
defined. You do this with a line containing `` `+=' ``{.sample}, like
this:

    objects += another.o

This takes the value of the variable `objects`, and adds the text
`` `another.o' ``{.sample} to it (preceded by a single space). Thus:

    objects = main.o foo.o bar.o utils.o
    objects += another.o

sets `objects` to `` `main.o foo.o bar.o utils.o another.o' ``{.sample}.

Using `` `+=' ``{.sample} is similar to:

    objects = main.o foo.o bar.o utils.o
    objects := $(objects) another.o

but differs in ways that become important when you use more complex
values.

When the variable in question has not been defined before,
`` `+=' ``{.sample} acts just like normal `` `=' ``{.sample}: it defines
a recursively-expanded variable. However, when there *is* a previous
definition, exactly what `` `+=' ``{.sample} does depends on what flavor
of variable you defined originally. See section [The Two Flavors of
Variables](make_6.md#SEC57), for an explanation of the two flavors of
variables.

When you add to a variable\'s value with `` `+=' ``{.sample}, `make`
acts essentially as if you had included the extra text in the initial
definition of the variable. If you defined it first with
`` `:=' ``{.sample}, making it a simply-expanded variable,
`` `+=' ``{.sample} adds to that simply-expanded definition, and expands
the new text before appending it to the old value just as
`` `:=' ``{.sample} does (see section [Setting
Variables](make_6.md#SEC62), for a full explanation of
`` `:=' ``{.sample}). In fact,

    variable := value
    variable += more

is exactly equivalent to:

    variable := value
    variable := $(variable) more

On the other hand, when you use `` `+=' ``{.sample} with a variable that
you defined first to be recursively-expanded using plain
`` `=' ``{.sample}, `make` does something a bit different. Recall that
when you define a recursively-expanded variable, `make` does not expand
the value you set for variable and function references immediately.
Instead it stores the text verbatim, and saves these variable and
function references to be expanded later, when you refer to the new
variable (see section [The Two Flavors of
Variables](make_6.md#SEC57)). When you use `` `+=' ``{.sample} on a
recursively-expanded variable, it is this unexpanded text to which
`make` appends the new text you specify.

    variable = value
    variable += more

is roughly equivalent to:

    temp = value
    variable = $(temp) more

except that of course it never defines a variable called `temp`. The
importance of this comes when the variable\'s old value contains
variable references. Take this common example:

    CFLAGS = $(includes) -O
    ...
    CFLAGS += -pg # enable profiling

The first line defines the `CFLAGS` variable with a reference to another
variable, `includes`. (`CFLAGS` is used by the rules for C compilation;
see section [Catalogue of Implicit Rules](make_10.md#SEC88).) Using
`` `=' ``{.sample} for the definition makes `CFLAGS` a
recursively-expanded variable, meaning `` `$(includes) -O' ``{.sample}
is *not* expanded when `make` processes the definition of `CFLAGS`.
Thus, `includes` need not be defined yet for its value to take effect.
It only has to be defined before any reference to `CFLAGS`. If we tried
to append to the value of `CFLAGS` without using `` `+=' ``{.sample}, we
might do it like this:

    CFLAGS := $(CFLAGS) -pg # enable profiling

This is pretty close, but not quite what we want. Using
`` `:=' ``{.sample} redefines `CFLAGS` as a simply-expanded variable;
this means `make` expands the text `` `$(CFLAGS) -pg' ``{.sample} before
setting the variable. If `includes` is not yet defined, we get
`` ` -O -pg' ``{.sample}, and a later definition of `includes` will have
no effect. Conversely, by using `` `+=' ``{.sample} we set `CFLAGS` to
the *unexpanded* value `` `$(includes) -O -pg' ``{.sample}. Thus we
preserve the reference to `includes`, so if that variable gets defined
at any later point, a reference like `` `$(CFLAGS)' ``{.sample} still
uses its value.

[]{#IDX427} []{#IDX428} []{#IDX429}

## [The `override` Directive](make_toc.md#SEC64){#SEC64}

If a variable has been set with a command argument (see section
[Overriding Variables](make_9.md#SEC83)), then ordinary assignments in
the makefile are ignored. If you want to set the variable in the
makefile even though it was set with a command argument, you can use an
`override` directive, which is a line that looks like this:

    override variable = value

or

    override variable := value

To append more text to a variable defined on the command line, use:

    override variable += more text

See section [Appending More Text to Variables](make_6.md#SEC63).

The `override` directive was not invented for escalation in the war
between makefiles and command arguments. It was invented so you can
alter and add to values that the user specifies with command arguments.

For example, suppose you always want the `` `-g' ``{.sample} switch when
you run the C compiler, but you would like to allow the user to specify
the other switches with a command argument just as usual. You could use
this `override` directive:

    override CFLAGS += -g

You can also use `override` directives with `define` directives. This is
done as you might expect:

    override define foo
    bar
    endef

See the next section for information about `define`.

[]{#IDX430} []{#IDX431} []{#IDX432} []{#IDX433} []{#IDX434}

## [Defining Variables Verbatim](make_toc.md#SEC65){#SEC65}

Another way to set the value of a variable is to use the `define`
directive. This directive has an unusual syntax which allows newline
characters to be included in the value, which is convenient for defining
canned sequences of commands (see section [Defining Canned Command
Sequences](make_5.md#SEC53)).

The `define` directive is followed on the same line by the name of the
variable and nothing more. The value to give the variable appears on the
following lines. The end of the value is marked by a line containing
just the word `endef`. Aside from this difference in syntax, `define`
works just like `` `=' ``{.sample}: it creates a recursively-expanded
variable (see section [The Two Flavors of
Variables](make_6.md#SEC57)). The variable name may contain function
and variable references, which are expanded when the directive is read
to find the actual variable name to use.

    define two-lines
    echo foo
    echo $(bar)
    endef

The value in an ordinary assignment cannot contain a newline; but the
newlines that separate the lines of the value in a `define` become part
of the variable\'s value (except for the final newline which precedes
the `endef` and is not considered part of the value).

The previous example is functionally equivalent to this:

    two-lines = echo foo; echo $(bar)

since two commands separated by semicolon behave much like two separate
shell commands. However, note that using two separate lines means `make`
will invoke the shell twice, running an independent subshell for each
line. See section [Command Execution](make_5.md#SEC44).

If you want variable definitions made with `define` to take precedence
over command-line variable definitions, you can use the `override`
directive together with `define`:

    override define two-lines
    foo
    $(bar)
    endef

See section [The `override` Directive](make_6.md#SEC64).

## [Variables from the Environment](make_toc.md#SEC66){#SEC66}

[]{#IDX435} []{#IDX436}

Variables in `make` can come from the environment in which `make` is
run. Every environment variable that `make` sees when it starts up is
transformed into a `make` variable with the same name and value. But an
explicit assignment in the makefile, or with a command argument,
overrides the environment. (If the `` `-e' ``{.sample} flag is
specified, then values from the environment override assignments in the
makefile. See section [Summary of Options](make_9.md#SEC85). But this
is not recommended practice.)

Thus, by setting the variable `CFLAGS` in your environment, you can
cause all C compilations in most makefiles to use the compiler switches
you prefer. This is safe for variables with standard or conventional
meanings because you know that no makefile will use them for other
things. (But this is not totally reliable; some makefiles set `CFLAGS`
explicitly and therefore are not affected by the value in the
environment.)

When `make` is invoked recursively, variables defined in the outer
invocation can be passed to inner invocations through the environment
(see section [Recursive Use of `make`](make_5.md#SEC48)). By default,
only variables that came from the environment or the command line are
passed to recursive invocations. You can use the `export` directive to
pass other variables. See section [Communicating Variables to a
Sub-`make`](make_5.md#SEC50)}, for full details.

Other use of variables from the environment is not recommended. It is
not wise for makefiles to depend for their functioning on environment
variables set up outside their control, since this would cause different
users to get different results from the same makefile. This is against
the whole purpose of most makefiles.

Such problems would be especially likely with the variable `SHELL`,
which is normally present in the environment to specify the user\'s
choice of interactive shell. It would be very undesirable for this
choice to affect `make`. So `make` ignores the environment value of
`SHELL`.

Go to the [previous](make_5.md), [next](make_7.md) section.
