GNU Make - Using Implicit Rules

Go to the [previous](make_9.md), [next](make_11.md) section.

[]{#IDX628} []{#IDX629}

# [Using Implicit Rules](make_toc.md#SEC86){#SEC86}

Certain standard ways of remaking target files are used very often. For
example, one customary way to make an object file is from a C source
file using the C compiler, `cc`.

[Implicit rules]{.dfn} tell `make` how to use customary techniques so
that you do not have to specify them in detail when you want to use
them. For example, there is an implicit rule for C compilation. File
names determine which implicit rules are run. For example, C compilation
typically takes a `` `.c' `` file and makes a `` `.o' `` file. So `make`
applies the implicit rule for C compilation when it sees this
combination of file name endings.

A chain of implicit rules can apply in sequence; for example, `make`
will remake a `` `.o' `` file from a `` `.y' `` file by way of a
`` `.c' `` file. See section [Chains of Implicit
Rules](make_10.md#SEC90).

The built-in implicit rules use several variables in their commands so
that, by changing the values of the variables, you can change the way
the implicit rule works. For example, the variable `CFLAGS` controls the
flags given to the C compiler by the implicit rule for C compilation.
See section [Variables Used by Implicit Rules](make_10.md#SEC89).

You can define your own implicit rules by writing [pattern rules]{.dfn}.
See section [Defining and Redefining Pattern Rules](make_10.md#SEC91).

[Suffix rules]{.dfn} are a more limited way to define implicit rules.
Pattern rules are more general and clearer, but suffix rules are
retained for compatibility. See section [Old-Fashioned Suffix
Rules](make_10.md#SEC99).

[]{#IDX630} []{#IDX631}

## [Using Implicit Rules](make_toc.md#SEC87){#SEC87}

To allow `make` to find a customary method for updating a target file,
all you have to do is refrain from specifying commands yourself. Either
write a rule with no command lines, or don\'t write a rule at all. Then
`make` will figure out which implicit rule to use based on which kind of
source file exists or can be made.

For example, suppose the makefile looks like this:

    foo : foo.o bar.o
            cc -o foo foo.o bar.o $(CFLAGS) $(LDFLAGS)

Because you mention `` `foo.o' `` but do not give a rule for it, `make`
will automatically look for an implicit rule that tells how to update
it. This happens whether or not the file `` `foo.o' `` currently exists.

If an implicit rule is found, it can supply both commands and one or
more dependencies (the source files). You would want to write a rule for
`` `foo.o' `` with no command lines if you need to specify additional
dependencies, such as header files, that the implicit rule cannot
supply.

Each implicit rule has a target pattern and dependency patterns. There
may be many implicit rules with the same target pattern. For example,
numerous rules make `` `.o' ``{.sample} files: one, from a
`` `.c' ``{.sample} file with the C compiler; another, from a
`` `.p' ``{.sample} file with the Pascal compiler; and so on. The rule
that actually applies is the one whose dependencies exist or can be
made. So, if you have a file `` `foo.c' ``, `make` will run the C
compiler; otherwise, if you have a file `` `foo.p' ``, `make` will run
the Pascal compiler; and so on.

Of course, when you write the makefile, you know which implicit rule you
want `make` to use, and you know it will choose that one because you
know which possible dependency files are supposed to exist. See section
[Catalogue of Implicit Rules](make_10.md#SEC88), for a catalogue of
all the predefined implicit rules.

Above, we said an implicit rule applies if the required dependencies
\"exist or can be made\". A file \"can be made\" if it is mentioned
explicitly in the makefile as a target or a dependency, or if an
implicit rule can be recursively found for how to make it. When an
implicit dependency is the result of another implicit rule, we say that
[chaining]{.dfn} is occurring. See section [Chains of Implicit
Rules](make_10.md#SEC90).

In general, `make` searches for an implicit rule for each target, and
for each double-colon rule, that has no commands. A file that is
mentioned only as a dependency is considered a target whose rule
specifies nothing, so implicit rule search happens for it. See section
[Implicit Rule Search Algorithm](make_10.md#SEC100), for the details
of how the search is done.

Note that explicit dependencies do not influence implicit rule search.
For example, consider this explicit rule:

    foo.o: foo.p

The dependency on `` `foo.p' `` does not necessarily mean that `make`
will remake `` `foo.o' `` according to the implicit rule to make an
object file, a `` `.o' `` file, from a Pascal source file, a `` `.p' ``
file. For example, if `` `foo.c' `` also exists, the implicit rule to
make an object file from a C source file is used instead, because it
appears before the Pascal rule in the list of predefined implicit rules
(see section [Catalogue of Implicit Rules](make_10.md#SEC88)).

If you do not want an implicit rule to be used for a target that has no
commands, you can give that target empty commands by writing a semicolon
(see section [Using Empty Commands](make_5.md#SEC54)).

[]{#IDX632} []{#IDX633}

## [Catalogue of Implicit Rules](make_toc.md#SEC88){#SEC88}

Here is a catalogue of predefined implicit rules which are always
available unless the makefile explicitly overrides or cancels them. See
section [Canceling Implicit Rules](make_10.md#SEC97), for information
on canceling or overriding an implicit rule. The `` `-r' ``{.sample} or
`` `--no-builtin-rules' ``{.sample} option cancels all predefined rules.

Not all of these rules will always be defined, even when the
`` `-r' ``{.sample} option is not given. Many of the predefined implicit
rules are implemented in `make` as suffix rules, so which ones will be
defined depends on the [suffix list]{.dfn} (the list of dependencies of
the special target `.SUFFIXES`). The default suffix list is: `.out`,
`.a`, `.ln`, `.o`, `.c`, `.cc`, `.C`, `.p`, `.f`, `.F`, `.r`, `.y`,
`.l`, `.s`, `.S`, `.mod`, `.sym`, `.def`, `.h`, `.info`, `.dvi`, `.tex`,
`.texinfo`, `.texi`, `.txinfo`, `.w`, `.ch` `.web`, `.sh`, `.elc`,
`.el`. All of the implicit rules described below whose dependencies have
one of these suffixes are actually suffix rules. If you modify the
suffix list, the only predefined suffix rules in effect will be those
named by one or two of the suffixes that are on the list you specify;
rules whose suffixes fail to be on the list are disabled. See section
[Old-Fashioned Suffix Rules](make_10.md#SEC99), for full details on
suffix rules.

Compiling C programs
:   `` ` ```n`{.variable}`.o'` is made automatically from
    `` ` ```n`{.variable}`.c'` with a command of the form
    `` `$(CC) -c $(CPPFLAGS) $(CFLAGS)' ``{.sample}.
    []{#IDX639} []{#IDX640} []{#IDX641} []{#IDX642}

Compiling C++ programs
:   `` ` ```n`{.variable}`.o'` is made automatically from
    `` ` ```n`{.variable}`.cc'` or `` ` ```n`{.variable}`.C'` with a
    command of the form
    `` `$(CXX) -c $(CPPFLAGS) $(CXXFLAGS)' ``{.sample}. We encourage you
    to use the suffix `` `.cc' ``{.sample} for C++ source files instead
    of `` `.C' ``{.sample}.
    []{#IDX643} []{#IDX644} []{#IDX645}

Compiling Pascal programs
:   `` ` ```n`{.variable}`.o'` is made automatically from
    `` ` ```n`{.variable}`.p'` with the command
    `` `$(PC) -c $(PFLAGS)' ``{.sample}.
    []{#IDX646} []{#IDX647} []{#IDX648} []{#IDX649} []{#IDX650}
    []{#IDX651}

Compiling Fortran and Ratfor programs

:   `` ` ```n`{.variable}`.o'` is made automatically from
    `` ` ```n`{.variable}`.r'`, `` ` ```n`{.variable}`.F'` or
    `` ` ```n`{.variable}`.f'` by running the Fortran compiler. The
    precise command used is as follows:

    `` `.f' ``{.sample}
    :   `` `$(FC) -c $(FFLAGS)' ``{.sample}.

    `` `.F' ``{.sample}
    :   `` `$(FC) -c $(FFLAGS) $(CPPFLAGS)' ``{.sample}.

    `` `.r' ``{.sample}
    :   `` `$(FC) -c $(FFLAGS) $(RFLAGS)' ``{.sample}.

    Preprocessing Fortran and Ratfor programs `` ` ```n`{.variable}`.f'`
    is made automatically from `` ` ```n`{.variable}`.r'` or
    `` ` ```n`{.variable}`.F'`. This rule runs just the preprocessor to
    convert a Ratfor or preprocessable Fortran program into a strict
    Fortran program. The precise command used is as follows:

    `` `.F' ``{.sample}
    :   `` `$(FC) -F $(CPPFLAGS) $(FFLAGS)' ``{.sample}.

    `` `.r' ``{.sample}
    :   `` `$(FC) -F $(FFLAGS) $(RFLAGS)' ``{.sample}.

    []{#IDX652} []{#IDX653} []{#IDX654} []{#IDX655} []{#IDX656}

    Compiling Modula-2 programs `` ` ```n`{.variable}`.sym'` is made
    from `` ` ```n`{.variable}`.def'` with a command of the form
    `` `$(M2C) $(M2FLAGS) $(DEFFLAGS)' ``{.sample}.
    `` ` ```n`{.variable}`.o'` is made from
    `` ` ```n`{.variable}`.mod'`; the form is:
    `` `$(M2C) $(M2FLAGS) $(MODFLAGS)' ``{.sample}.

    []{#IDX657} []{#IDX658} []{#IDX659}

    Assembling and preprocessing assembler programs
    `` ` ```n`{.variable}`.o'` is made automatically from
    `` ` ```n`{.variable}`.s'` by running the assembler, `as`. The
    precise command is `` `$(AS) $(ASFLAGS)' ``{.sample}.[]{#IDX660}

    `` ` ```n`{.variable}`.s'` is made automatically from
    `` ` ```n`{.variable}`.S'` by running the C preprocessor, `cpp`. The
    precise command is `` `$(CPP) $(CPPFLAGS)' ``{.sample}.

    []{#IDX661} []{#IDX662} []{#IDX663}

    Linking a single object file `` ` ```n`{.variable}`'` is made
    automatically from `` ` ```n`{.variable}`.o'` by running the linker
    (usually called `ld`) via the C compiler. The precise command used
    is
    `` `$(CC) $(LDFLAGS)  ``{.sample}`n`{.variable}`.o $(LOADLIBES)'`{.sample}.

    This rule does the right thing for a simple program with only one
    source file. It will also do the right thing if there are multiple
    object files (presumably coming from various other source files),
    one of which has a name matching that of the executable file. Thus,

        x: y.o z.o

    when `` `x.c' ``, `` `y.c' `` and `` `z.c' `` all exist will
    execute:

        cc -c x.c -o x.o
        cc -c y.c -o y.o
        cc -c z.c -o z.o
        cc x.o y.o z.o -o x
        rm -f x.o
        rm -f y.o
        rm -f z.o

    In more complicated cases, such as when there is no object file
    whose name derives from the executable file name, you must write an
    explicit command for linking.

    Each kind of file automatically made into `` `.o' ``{.sample} object
    files will be automatically linked by using the compiler
    (`` `$(CC)' ``{.sample}, `` `$(FC)' ``{.sample} or
    `` `$(PC)' ``{.sample}; the C compiler `` `$(CC)' ``{.sample} is
    used to assemble `` `.s' ``{.sample} files) without the
    `` `-c' ``{.sample} option. This could be done by using the
    `` `.o' ``{.sample} object files as intermediates, but it is faster
    to do the compiling and linking in one step, so that\'s how it\'s
    done.

    []{#IDX664} []{#IDX665} []{#IDX666}

    Yacc for C programs `` ` ```n`{.variable}`.c'` is made automatically
    from `` ` ```n`{.variable}`.y'` by running Yacc with the command
    `` `$(YACC) $(YFLAGS)' ``{.sample}.

    []{#IDX667} []{#IDX668} []{#IDX669}

    Lex for C programs `` ` ```n`{.variable}`.c'` is made automatically
    from `` ` ```n`{.variable}`.l'` by by running Lex. The actual
    command is `` `$(LEX) $(LFLAGS)' ``{.sample}.

    Lex for Ratfor programs `` ` ```n`{.variable}`.r'` is made
    automatically from `` ` ```n`{.variable}`.l'` by by running Lex. The
    actual command is `` `$(LEX) $(LFLAGS)' ``{.sample}.

    The convention of using the same suffix `` `.l' ``{.sample} for all
    Lex files regardless of whether they produce C code or Ratfor code
    makes it impossible for `make` to determine automatically which of
    the two languages you are using in any particular case. If `make` is
    called upon to remake an object file from a `` `.l' ``{.sample}
    file, it must guess which compiler to use. It will guess the C
    compiler, because that is more common. If you are using Ratfor, make
    sure `make` knows this by mentioning `` ` ```n`{.variable}`.r'` in
    the makefile. Or, if you are using Ratfor exclusively, with no C
    files, remove `` `.c' ``{.sample} from the list of implicit rule
    suffixes with:

        .SUFFIXES:
        .SUFFIXES: .o .r .f .l ...

    []{#IDX670} []{#IDX671} []{#IDX672}

    Making Lint Libraries from C, Yacc, or Lex programs
    `` ` ```n`{.variable}`.ln'` is made from `` ` ```n`{.variable}`.c'`
    by running `lint`. The precise command is
    `` `$(LINT) $(LINTFLAGS) $(CPPFLAGS) -i' ``{.sample}. The same
    command is used on the C code produced from
    `` ` ```n`{.variable}`.y'` or `` ` ```n`{.variable}`.l'`.

    []{#IDX673} []{#IDX674} []{#IDX675} []{#IDX676} []{#IDX677}
    []{#IDX678} []{#IDX679} []{#IDX680} []{#IDX681} []{#IDX682}
    []{#IDX683} []{#IDX684}

    TeX and Web `` ` ```n`{.variable}`.dvi'` is made from
    `` ` ```n`{.variable}`.tex'` with the command
    `` `$(TEX)' ``{.sample}. `` ` ```n`{.variable}`.tex'` is made from
    `` ` ```n`{.variable}`.web'` with `` `$(WEAVE)' ``{.sample}, or from
    `` ` ```n`{.variable}`.w'` (and from `` ` ```n`{.variable}`.ch'` if
    it exists or can be made) with `` `$(CWEAVE)' ``{.sample}.
    `` ` ```n`{.variable}`.p'` is made from `` ` ```n`{.variable}`.web'`
    with `` `$(TANGLE)' ``{.sample} and `` ` ```n`{.variable}`.c'` is
    made from `` ` ```n`{.variable}`.w'` (and from
    `` ` ```n`{.variable}`.ch'` if it exists or can be made) with
    `` `$(CTANGLE)' ``{.sample}.

    []{#IDX685} []{#IDX686} []{#IDX687} []{#IDX688} []{#IDX689}
    []{#IDX690} []{#IDX691} []{#IDX692}

    Texinfo and Info `` ` ```n`{.variable}`.dvi'` is made from
    `` ` ```n`{.variable}`.texinfo'`, `` ` ```n`{.variable}`.texi'`, or
    `` ` ```n`{.variable}`.txinfo'`, with the command
    `` `$(TEXI2DVI) $(TEXI2DVI_FLAGS)' ``{.sample}.
    `` ` ```n`{.variable}`.info'` is made from
    `` ` ```n`{.variable}`.texinfo'`, `` ` ```n`{.variable}`.texi'`, or
    `` ` ```n`{.variable}`.txinfo'`, with the command
    `` `$(MAKEINFO) $(MAKEINFO_FLAGS)' ``{.sample}.

    []{#IDX693} []{#IDX694} []{#IDX695}

    RCS Any file `` ` ```n`{.variable}`'` is extracted if necessary from
    an RCS file named either `` ` ```n`{.variable}`,v'` or
    `` `RCS/ ```n`{.variable}`,v'`. The precise command used is
    `` `$(CO) $(COFLAGS)' ``{.sample}. `` ` ```n`{.variable}`'` will not
    be extracted from RCS if it already exists, even if the RCS file is
    newer. The rules for RCS are terminal (see section [Match-Anything
    Pattern Rules](make_10.md#SEC96)), so RCS files cannot be
    generated from another source; they must actually exist.

    []{#IDX696} []{#IDX697} []{#IDX698}

    SCCS Any file `` ` ```n`{.variable}`'` is extracted if necessary
    from an SCCS file named either `` `s. ```n`{.variable}`'` or
    `` `SCCS/s. ```n`{.variable}`'`. The precise command used is
    `` `$(GET) $(GFLAGS)' ``{.sample}. The rules for SCCS are terminal
    (see section [Match-Anything Pattern Rules](make_10.md#SEC96)), so
    SCCS files cannot be generated from another source; they must
    actually exist.[]{#IDX699}

    For the benefit of SCCS, a file `` ` ```n`{.variable}`'` is copied
    from `` ` ```n`{.variable}`.sh'` and made executable (by everyone).
    This is for shell scripts that are checked into SCCS. Since RCS
    preserves the execution permission of a file, you do not need to use
    this feature with RCS.

    We recommend that you avoid using of SCCS. RCS is widely held to be
    superior, and is also free. By choosing free software in place of
    comparable (or inferior) proprietary software, you support the free
    software movement.

Usually, you want to change only the variables listed in the table
above, which are documented in the following section.

However, the commands in built-in implicit rules actually use variables
such as `COMPILE.c`, `LINK.p`, and `PREPROCESS.S`, whose values contain
the commands listed above.

`make` follows the convention that the rule to compile a
`` `. ```x`{.variable}`'` source file uses the variable
`COMPILE.``x`{.variable}. Similarly, the rule to produce an executable
from a `` `. ```x`{.variable}`'` file uses `LINK.``x`{.variable}; and
the rule to preprocess a `` `. ```x`{.variable}`'` file uses
`PREPROCESS.``x`{.variable}. []{#IDX700}

Every rule that produces an object file uses the variable
`OUTPUT_OPTION`. `make` defines this variable either to contain
`` `-o $@' ``{.sample}, or to be empty, depending on a compile-time
option. You need the `` `-o' ``{.sample} option to ensure that the
output goes into the right file when the source file is in a different
directory, as when using `VPATH` (see section [Searching Directories for
Dependencies](make_4.md#SEC25)). However, compilers on some systems do
not accept a `` `-o' ``{.sample} switch for object files. If you use
such a system, and use `VPATH`, some compilations will put their output
in the wrong place. A possible workaround for this problem is to give
`OUTPUT_OPTION` the value `` `; mv $*.o $@' ``{.sample}.

[]{#IDX701}

## [Variables Used by Implicit Rules](make_toc.md#SEC89){#SEC89}

The commands in built-in implicit rules make liberal use of certain
predefined variables. You can alter these variables in the makefile,
with arguments to `make`, or in the environment to alter how the
implicit rules work without redefining the rules themselves.

For example, the command used to compile a C source file actually says
`` `$(CC) -c $(CFLAGS) $(CPPFLAGS)' ``{.sample}. The default values of
the variables used are `` `cc' ``{.sample} and nothing, resulting in the
command `` `cc -c' ``{.sample}. By redefining `` `CC' ``{.sample} to
`` `ncc' ``{.sample}, you could cause `` `ncc' ``{.sample} to be used
for all C compilations performed by the implicit rule. By redefining
`` `CFLAGS' ``{.sample} to be `` `-g' ``{.sample}, you could pass the
`` `-g' ``{.sample} option to each compilation. *All* implicit rules
that do C compilation use `` `$(CC)' ``{.sample} to get the program name
for the compiler and *all* include `` `$(CFLAGS)' ``{.sample} among the
arguments given to the compiler.

The variables used in implicit rules fall into two classes: those that
are names of programs (like `CC`) and those that contain arguments for
the programs (like `CFLAGS`). (The \"name of a program\" may also
contain some command arguments, but it must start with an actual
executable program name.) If a variable value contains more than one
argument, separate them with spaces.

Here is a table of variables used as names of programs in built-in
rules:

`AR`
:   Archive-maintaining program; default `` `ar' ``{.sample}.
    []{#IDX703}
    []{#IDX704}

`AS`
:   Program for doing assembly; default `` `as' ``{.sample}. []{#IDX705}
    []{#IDX706}

`CC`
:   Program for compiling C programs; default `` `cc' ``{.sample}.
    []{#IDX707}
    []{#IDX708}

`CXX`
:   Program for compiling C++ programs; default `` `g++' ``{.sample}.
    []{#IDX709}
    []{#IDX710}

`CO`
:   Program for extracting a file from RCS; default `` `co' ``{.sample}.
    []{#IDX711}
    []{#IDX712}

`CPP`
:   Program for running the C preprocessor, with results to standard
    output; default `` `$(CC) -E' ``{.sample}.
    []{#IDX713}

`FC`
:   Program for compiling or preprocessing Fortran and Ratfor programs;
    default `` `f77' ``{.sample}. []{#IDX714}
    []{#IDX715}

`GET`
:   Program for extracting a file from SCCS; default
    `` `get' ``{.sample}. []{#IDX716}
    []{#IDX717}

`LEX`
:   Program to use to turn Lex grammars into C programs or Ratfor
    programs; default `` `lex' ``{.sample}. []{#IDX718}
    []{#IDX719}

`PC`
:   Program for compiling Pascal programs; default `` `pc' ``{.sample}.
    []{#IDX720}
    []{#IDX721}

`YACC`
:   Program to use to turn Yacc grammars into C programs; default
    `` `yacc' ``{.sample}. []{#IDX722}
    []{#IDX723}

`YACCR`
:   Program to use to turn Yacc grammars into Ratfor programs; default
    `` `yacc -r' ``{.sample}.
    []{#IDX724}

`MAKEINFO`
:   Program to convert a Texinfo source file into an Info file; default
    `` `makeinfo' ``{.sample}. []{#IDX725}
    []{#IDX726}

`TEX`
:   Program to make TeX DVI files from TeX source; default
    `` `tex' ``{.sample}. []{#IDX727}
    []{#IDX728}

`TEXI2DVI`
:   Program to make TeX DVI files from Texinfo source; default
    `` `texi2dvi' ``{.sample}. []{#IDX729}
    []{#IDX730}

`WEAVE`
:   Program to translate Web into TeX; default `` `weave' ``{.sample}.
    []{#IDX731}
    []{#IDX732}

`CWEAVE`
:   Program to translate C Web into TeX; default
    `` `cweave' ``{.sample}. []{#IDX733}
    []{#IDX734}

`TANGLE`
:   Program to translate Web into Pascal; default
    `` `tangle' ``{.sample}. []{#IDX735}
    []{#IDX736}

`CTANGLE`
:   Program to translate C Web into C; default `` `ctangle' ``{.sample}.
    []{#IDX737}
    []{#IDX738}

`RM`
:   Command to remove a file; default `` `rm -f' ``{.sample}.
    []{#IDX739}

Here is a table of variables whose values are additional arguments for
the programs above. The default values for all of these is the empty
string, unless otherwise noted.

`ARFLAGS`
:   Flags to give the archive-maintaining program; default
    `` `rv' ``{.sample}.
    []{#IDX741}

`ASFLAGS`
:   Extra flags to give to the assembler (when explicitly invoked on a
    `` `.s' ``{.sample} or `` `.S' ``{.sample} file).
    []{#IDX742}

`CFLAGS`
:   Extra flags to give to the C compiler.
    []{#IDX743}

`CXXFLAGS`
:   Extra flags to give to the C++ compiler.
    []{#IDX744}

`COFLAGS`
:   Extra flags to give to the RCS `co` program.
    []{#IDX745}

`CPPFLAGS`
:   Extra flags to give to the C preprocessor and programs that use it
    (the C and Fortran compilers).
    []{#IDX746}

`FFLAGS`
:   Extra flags to give to the Fortran compiler.
    []{#IDX747}

`GFLAGS`
:   Extra flags to give to the SCCS `get` program.
    []{#IDX748}

`LDFLAGS`
:   Extra flags to give to compilers when they are supposed to invoke
    the linker, `` `ld' ``{.sample}.
    []{#IDX749}

`LFLAGS`
:   Extra flags to give to Lex.
    []{#IDX750}

`PFLAGS`
:   Extra flags to give to the Pascal compiler.
    []{#IDX751}

`RFLAGS`
:   Extra flags to give to the Fortran compiler for Ratfor programs.
    []{#IDX752}

`YFLAGS`
:   Extra flags to give to Yacc.

## [Chains of Implicit Rules](make_toc.md#SEC90){#SEC90}

[]{#IDX753} []{#IDX754}

Sometimes a file can be made by a sequence of implicit rules. For
example, a file `` ` ```n`{.variable}`.o'` could be made from
`` ` ```n`{.variable}`.y'` by running first Yacc and then `cc`. Such a
sequence is called a [chain]{.dfn}.

If the file `` ` ```n`{.variable}`.c'` exists, or is mentioned in the
makefile, no special searching is required: `make` finds that the object
file can be made by C compilation from `` ` ```n`{.variable}`.c'`; later
on, when considering how to make `` ` ```n`{.variable}`.c'`, the rule
for running Yacc is used. Ultimately both `` ` ```n`{.variable}`.c'` and
`` ` ```n`{.variable}`.o'` are updated.[]{#IDX755} []{#IDX756}

However, even if `` ` ```n`{.variable}`.c'` does not exist and is not
mentioned, `make` knows how to envision it as the missing link between
`` ` ```n`{.variable}`.o'` and `` ` ```n`{.variable}`.y'`! In this case,
`` ` ```n`{.variable}`.c'` is called an [intermediate file]{.dfn}. Once
`make` has decided to use the intermediate file, it is entered in the
data base as if it had been mentioned in the makefile, along with the
implicit rule that says how to create it.

Intermediate files are remade using their rules just like all other
files. The difference is that the intermediate file is deleted when
`make` is finished. Therefore, the intermediate file which did not exist
before `make` also does not exist after `make`. The deletion is reported
to you by printing a `` `rm -f' ``{.sample} command that shows what
`make` is doing. (You can list the target pattern of an implicit rule
(such as `` `%.o' ``{.sample}) as a dependency of the special target
`.PRECIOUS` to preserve intermediate files made by implicit rules whose
target patterns match that file\'s name; see section [Interrupting or
Killing `make`](make_5.md#SEC47).)[]{#IDX758} []{#IDX759} []{#IDX760}
[]{#IDX757}

A chain can involve more than two implicit rules. For example, it is
possible to make a file `` `foo' `` from `` `RCS/foo.y,v' `` by running
RCS, Yacc and `cc`. Then both `` `foo.y' `` and `` `foo.c' `` are
intermediate files that are deleted at the end.

No single implicit rule can appear more than once in a chain. This means
that `make` will not even consider such a ridiculous thing as making
`` `foo' `` from `` `foo.o.o' `` by running the linker twice. This
constraint has the added benefit of preventing any infinite loop in the
search for an implicit rule chain.

There are some special implicit rules to optimize certain cases that
would otherwise be handled by rule chains. For example, making
`` `foo' `` from `` `foo.c' `` could be handled by compiling and linking
with separate chained rules, using `` `foo.o' `` as an intermediate
file. But what actually happens is that a special rule for this case
does the compilation and linking with a single `cc` command. The
optimized rule is used in preference to the step-by-step chain because
it comes earlier in the ordering of rules.

## [Defining and Redefining Pattern Rules](make_toc.md#SEC91){#SEC91}

You define an implicit rule by writing a [pattern rule]{.dfn}. A pattern
rule looks like an ordinary rule, except that its target contains the
character `` `%' ``{.sample} (exactly one of them). The target is
considered a pattern for matching file names; the `` `%' ``{.sample} can
match any nonempty substring, while other characters match only
themselves. The dependencies likewise use `` `%' ``{.sample} to show how
their names relate to the target name.

Thus, a pattern rule `` `%.o : %.c' ``{.sample} says how to make any
file `` ` ```stem`{.variable}`.o'` from another file
`` ` ```stem`{.variable}`.c'`.

Note that expansion using `` `%' ``{.sample} in pattern rules occurs
**after** any variable or function expansions, which take place when the
makefile is read. See section [How to Use Variables](make_6.md#SEC55),
and section [Functions for Transforming Text](make_8.md#SEC71).

[]{#IDX761} []{#IDX762}

### [Introduction to Pattern Rules](make_toc.md#SEC92){#SEC92}

A pattern rule contains the character `` `%' ``{.sample} (exactly one of
them) in the target; otherwise, it looks exactly like an ordinary rule.
The target is a pattern for matching file names; the `` `%' ``{.sample}
matches any nonempty substring, while other characters match only
themselves. []{#IDX764} []{#IDX763}

For example, `` `%.c' ``{.sample} as a pattern matches any file name
that ends in `` `.c' ``{.sample}. `` `s.%.c' ``{.sample} as a pattern
matches any file name that starts with `` `s.' ``{.sample}, ends in
`` `.c' ``{.sample} and is at least five characters long. (There must be
at least one character to match the `` `%' ``{.sample}.) The substring
that the `` `%' ``{.sample} matches is called the [stem]{.dfn}.

`` `%' ``{.sample} in a dependency of a pattern rule stands for the same
stem that was matched by the `` `%' ``{.sample} in the target. In order
for the pattern rule to apply, its target pattern must match the file
name under consideration, and its dependency patterns must name files
that exist or can be made. These files become dependencies of the
target. []{#IDX765}

Thus, a rule of the form

    %.o : %.c ; command...

specifies how to make a file `` ` ```n`{.variable}`.o'`, with another
file `` ` ```n`{.variable}`.c'` as its dependency, provided that
`` ` ```n`{.variable}`.c'` exists or can be made.

There may also be dependencies that do not use `` `%' ``{.sample}; such
a dependency attaches to every file made by this pattern rule. These
unvarying dependencies are useful occasionally.

A pattern rule need not have any dependencies that contain
`` `%' ``{.sample}, or in fact any dependencies at all. Such a rule is
effectively a general wildcard. It provides a way to make any file that
matches the target pattern. See section [Defining Last-Resort Default
Rules](make_10.md#SEC98).

Pattern rules may have more than one target. Unlike normal rules, this
does not act as many different rules with the same dependencies and
commands. If a pattern rule has multiple targets, `make` knows that the
rule\'s commands are responsible for making all of the targets. The
commands are executed only once to make all the targets. When searching
for a pattern rule to match a target, the target patterns of a rule
other than the one that matches the target in need of a rule are
incidental: `make` worries only about giving commands and dependencies
to the file presently in question. However, when this file\'s commands
are run, the other targets are marked as having been updated themselves.
[]{#IDX767} []{#IDX766}

The order in which pattern rules appear in the makefile is important
since this is the order in which they are considered. Of equally
applicable rules, only the first one found is used. The rules you write
take precedence over those that are built in. Note however, that a rule
whose dependencies actually exist or are mentioned always takes priority
over a rule with dependencies that must be made by chaining other
implicit rules. []{#IDX769} []{#IDX768}

### [Pattern Rule Examples](make_toc.md#SEC93){#SEC93}

Here are some examples of pattern rules actually predefined in `make`.
First, the rule that compiles `` `.c' ``{.sample} files into
`` `.o' ``{.sample} files:

    %.o : %.c
            $(CC) -c $(CFLAGS) $(CPPFLAGS) $< -o $@

defines a rule that can make any file `` ` ```x`{.variable}`.o'` from
`` ` ```x`{.variable}`.c'`. The command uses the automatic variables
`` `$@' ``{.sample} and `` `$<' ``{.sample} to substitute the names of
the target file and the source file in each case where the rule applies
(see section [Automatic Variables](make_10.md#SEC94)).

Here is a second built-in rule:

    % :: RCS/%,v
            $(CO) $(COFLAGS) $<

defines a rule that can make any file `` ` ```x`{.variable}`'`
whatsoever from a corresponding file `` ` ```x`{.variable}`,v'` in the
subdirectory `` `RCS' ``. Since the target is `` `%' ``{.sample}, this
rule will apply to any file whatever, provided the appropriate
dependency file exists. The double colon makes the rule
[terminal]{.dfn}, which means that its dependency may not be an
intermediate file (see section [Match-Anything Pattern
Rules](make_10.md#SEC96)).

This pattern rule has two targets:

    %.tab.c %.tab.h: %.y
            bison -d $<

This tells `make` that the command
`` `bison -d  ``{.sample}`x`{.variable}`.y'`{.sample} will make both
`` ` ```x`{.variable}`.tab.c'` and `` ` ```x`{.variable}`.tab.h'`. If
the file `` `foo' `` depends on the files `` `parse.tab.o' `` and
`` `scan.o' `` and the file `` `scan.o' `` depends on the file
`` `parse.tab.h' ``, when `` `parse.y' `` is changed, the command
`` `bison -d parse.y' ``{.sample} will be executed only once, and the
dependencies of both `` `parse.tab.o' `` and `` `scan.o' `` will be
satisfied. (Presumably the file `` `parse.tab.o' `` will be recompiled
from `` `parse.tab.c' `` and the file `` `scan.o' `` from
`` `scan.c' ``, while `` `foo' `` is linked from `` `parse.tab.o' ``,
`` `scan.o' ``, and its other dependencies, and it will execute happily
ever after.)

[]{#IDX770} []{#IDX771} []{#IDX772}

### [Automatic Variables](make_toc.md#SEC94){#SEC94}

Suppose you are writing a pattern rule to compile a `` `.c' ``{.sample}
file into a `` `.o' ``{.sample} file: how do you write the
`` `cc' ``{.sample} command so that it operates on the right source file
name? You cannot write the name in the command, because the name is
different each time the implicit rule is applied.

What you do is use a special feature of `make`, the [automatic
variables]{.dfn}. These variables have values computed afresh for each
rule that is executed, based on the target and dependencies of the rule.
In this example, you would use `` `$@' ``{.sample} for the object file
name and `` `$<' ``{.sample} for the source file name.

Here is a table of automatic variables:

[]{#IDX773} []{#IDX774}

`$@`
:   The file name of the target of the rule. If the target is an archive
    member, then `` `$@' ``{.sample} is the name of the archive file. In
    a pattern rule that has multiple targets (see section [Introduction
    to Pattern Rules](make_10.md#SEC92)), `` `$@' ``{.sample} is the
    name of whichever target caused the rule\'s commands to be run.
    []{#IDX775} []{#IDX776}

`$%`
:   The target member name, when the target is an archive member. See
    section [Using `make` to Update Archive Files](make_11.md#SEC101).
    For example, if the target is `` `foo.a(bar.o)' `` then
    `` `$%' ``{.sample} is `` `bar.o' `` and `` `$@' ``{.sample} is
    `` `foo.a' ``. `` `$%' ``{.sample} is empty when the target is not
    an archive member. []{#IDX777} []{#IDX778}

`$<`
:   The name of the first dependency. If the target got its commands
    from an implicit rule, this will be the first dependency added by
    the implicit rule (see section [Using Implicit
    Rules](make_10.md#SEC86)). []{#IDX779} []{#IDX780}

`$?`
:   The names of all the dependencies that are newer than the target,
    with spaces between them. For dependencies which are archive
    members, only the member named is used (see section [Using `make` to
    Update Archive Files](make_11.md#SEC101)). []{#IDX782} []{#IDX781}
    []{#IDX783} []{#IDX784}

`$^`
:   The names of all the dependencies, with spaces between them. For
    dependencies which are archive members, only the member named is
    used (see section [Using `make` to Update Archive
    Files](make_11.md#SEC101)). A target has only one dependency on
    each other file it depends on, no matter how many times each file is
    listed as a dependency. So if you list a dependency more than once
    for a target, the value of `$^` contains just one copy of the name.
    []{#IDX786} []{#IDX785} []{#IDX787} []{#IDX788}

`$+`
:   This is like `` `$^' ``{.sample}, but dependencies listed more than
    once are duplicated in the order they were listed in the makefile.
    This is primarily useful for use in linking commands where it is
    meaningful to repeat library file names in a particular order.
    []{#IDX789} []{#IDX790}

`$*`

:   The stem with which an implicit rule matches (see section [How
    Patterns Match](make_10.md#SEC95)). If the target is
    `` `dir/a.foo.b' `` and the target pattern is `` `a.%.b' `` then the
    stem is `` `dir/foo' ``. The stem is useful for constructing names
    of related files.[]{#IDX791}

    In a static pattern rule, the stem is part of the file name that
    matched the `` `%' ``{.sample} in the target pattern.

    In an explicit rule, there is no stem; so `` `$*' ``{.sample} cannot
    be determined in that way. Instead, if the target name ends with a
    recognized suffix (see section [Old-Fashioned Suffix
    Rules](make_10.md#SEC99)), `` `$*' ``{.sample} is set to the
    target name minus the suffix. For example, if the target name is
    `` `foo.c' ``{.sample}, then `` `$*' ``{.sample} is set to
    `` `foo' ``{.sample}, since `` `.c' ``{.sample} is a suffix. GNU
    `make` does this bizarre thing only for compatibility with other
    implementations of `make`. You should generally avoid using
    `` `$*' ``{.sample} except in implicit rules or static pattern
    rules.

    If the target name in an explicit rule does not end with a
    recognized suffix, `` `$*' ``{.sample} is set to the empty string
    for that rule.

`` `$?' ``{.sample} is useful even in explicit rules when you wish to
operate on only the dependencies that have changed. For example, suppose
that an archive named `` `lib' `` is supposed to contain copies of
several object files. This rule copies just the changed object files
into the archive:

    lib: foo.o bar.o lose.o win.o
            ar r lib $?

Of the variables listed above, four have values that are single file
names, and two have values that are lists of file names. These six have
variants that get just the file\'s directory name or just the file name
within the directory. The variant variables\' names are formed by
appending `` `D' ``{.sample} or `` `F' ``{.sample}, respectively. These
variants are semi-obsolete in GNU `make` since the functions `dir` and
`notdir` can be used to get a similar effect (see section [Functions for
File Names](make_8.md#SEC74)). Note, however, that the
`` `F' ``{.sample} variants all omit the trailing slash which always
appears in the output of the `dir` function. Here is a table of the
variants:

[]{#IDX792} []{#IDX793}

`` `$(@D)' ``{.sample}
:   The directory part of the file name of the target, with the trailing
    slash removed. If the value of `` `$@' ``{.sample} is
    `` `dir/foo.o' `` then `` `$(@D)' ``{.sample} is `` `dir' ``. This
    value is `` `.' `` if `` `$@' ``{.sample} does not contain a slash.
    []{#IDX794} []{#IDX795}

`` `$(@F)' ``{.sample}
:   The file-within-directory part of the file name of the target. If
    the value of `` `$@' ``{.sample} is `` `dir/foo.o' `` then
    `` `$(@F)' ``{.sample} is `` `foo.o' ``. `` `$(@F)' ``{.sample} is
    equivalent to `` `$(notdir $@)' ``{.sample}. []{#IDX796} []{#IDX797}
    []{#IDX798} []{#IDX799}

`` `$(*D)' ``{.sample}

:   

`` `$(*F)' ``{.sample}
:   The directory part and the file-within-directory part of the stem;
    `` `dir' `` and `` `foo' `` in this example. []{#IDX800} []{#IDX801}
    []{#IDX802} []{#IDX803}

`` `$(%D)' ``{.sample}

:   

`` `$(%F)' ``{.sample}
:   The directory part and the file-within-directory part of the target
    archive member name. This makes sense only for archive member
    targets of the form
    `` ` ```archive`{.variable}`(``member`{.variable}`)'` and is useful
    only when `member`{.variable} may contain a directory name. (See
    section [Archive Members as Targets](make_11.md#SEC102).)
    []{#IDX804} []{#IDX805}
    []{#IDX806} []{#IDX807}

`` `$(<D)' ``{.sample}

:   

`` `$(<F)' ``{.sample}
:   The directory part and the file-within-directory part of the first
    dependency. []{#IDX808} []{#IDX809}
    []{#IDX810} []{#IDX811}

`` `$(^D)' ``{.sample}

:   

`` `$(^F)' ``{.sample}
:   Lists of the directory parts and the file-within-directory parts of
    all dependencies. []{#IDX812} []{#IDX813}
    []{#IDX814} []{#IDX815}

`` `$(?D)' ``{.sample}

:   

`` `$(?F)' ``{.sample}
:   Lists of the directory parts and the file-within-directory parts of
    all dependencies that are newer than the target.

Note that we use a special stylistic convention when we talk about these
automatic variables; we write \"the value of `` `$<' ``{.sample}\",
rather than \"the variable `<`\" as we would write for ordinary
variables such as `objects` and `CFLAGS`. We think this convention looks
more natural in this special case. Please do not assume it has a deep
significance; `` `$<' ``{.sample} refers to the variable named `<` just
as `` `$(CFLAGS)' ``{.sample} refers to the variable named `CFLAGS`. You
could just as well use `` `$(<)' ``{.sample} in place of
`` `$<' ``{.sample}.

### [How Patterns Match](make_toc.md#SEC95){#SEC95}

[]{#IDX816}

A target pattern is composed of a `` `%' ``{.sample} between a prefix
and a suffix, either or both of which may be empty. The pattern matches
a file name only if the file name starts with the prefix and ends with
the suffix, without overlap. The text between the prefix and the suffix
is called the [stem]{.dfn}. Thus, when the pattern `` `%.o' ``{.sample}
matches the file name `` `test.o' ``, the stem is `` `test' ``{.sample}.
The pattern rule dependencies are turned into actual file names by
substituting the stem for the character `` `%' ``{.sample}. Thus, if in
the same example one of the dependencies is written as
`` `%.c' ``{.sample}, it expands to `` `test.c' ``{.sample}.

When the target pattern does not contain a slash (and it usually does
not), directory names in the file names are removed from the file name
before it is compared with the target prefix and suffix. After the
comparison of the file name to the target pattern, the directory names,
along with the slash that ends them, are added on to the dependency file
names generated from the pattern rule\'s dependency patterns and the
file name. The directories are ignored only for the purpose of finding
an implicit rule to use, not in the application of that rule. Thus,
`` `e%t' ``{.sample} matches the file name `` `src/eat' ``, with
`` `src/a' ``{.sample} as the stem. When dependencies are turned into
file names, the directories from the stem are added at the front, while
the rest of the stem is substituted for the `` `%' ``{.sample}. The stem
`` `src/a' ``{.sample} with a dependency pattern `` `c%r' ``{.sample}
gives the file name `` `src/car' ``.

### [Match-Anything Pattern Rules](make_toc.md#SEC96){#SEC96}

[]{#IDX817} []{#IDX818}

When a pattern rule\'s target is just `` `%' ``{.sample}, it matches any
file name whatever. We call these rules [match-anything]{.dfn} rules.
They are very useful, but it can take a lot of time for `make` to think
about them, because it must consider every such rule for each file name
listed either as a target or as a dependency.

Suppose the makefile mentions `` `foo.c' ``. For this target, `make`
would have to consider making it by linking an object file
`` `foo.c.o' ``, or by C compilation-and-linking in one step from
`` `foo.c.c' ``, or by Pascal compilation-and-linking from
`` `foo.c.p' ``, and many other possibilities.

We know these possibilities are ridiculous since `` `foo.c' `` is a C
source file, not an executable. If `make` did consider these
possibilities, it would ultimately reject them, because files such as
`` `foo.c.o' `` and `` `foo.c.p' `` would not exist. But these
possibilities are so numerous that `make` would run very slowly if it
had to consider them.

To gain speed, we have put various constraints on the way `make`
considers match-anything rules. There are two different constraints that
can be applied, and each time you define a match-anything rule you must
choose one or the other for that rule.

One choice is to mark the match-anything rule as [terminal]{.dfn} by
defining it with a double colon. When a rule is terminal, it does not
apply unless its dependencies actually exist. Dependencies that could be
made with other implicit rules are not good enough. In other words, no
further chaining is allowed beyond a terminal rule.

For example, the built-in implicit rules for extracting sources from RCS
and SCCS files are terminal; as a result, if the file `` `foo.c,v' ``
does not exist, `make` will not even consider trying to make it as an
intermediate file from `` `foo.c,v.o' `` or from
`` `RCS/SCCS/s.foo.c,v' ``. RCS and SCCS files are generally ultimate
source files, which should not be remade from any other files;
therefore, `make` can save time by not looking for ways to remake them.

If you do not mark the match-anything rule as terminal, then it is
nonterminal. A nonterminal match-anything rule cannot apply to a file
name that indicates a specific type of data. A file name indicates a
specific type of data if some non-match-anything implicit rule target
matches it.

For example, the file name `` `foo.c' `` matches the target for the
pattern rule `` `%.c : %.y' ``{.sample} (the rule to run Yacc).
Regardless of whether this rule is actually applicable (which happens
only if there is a file `` `foo.y' ``), the fact that its target matches
is enough to prevent consideration of any nonterminal match-anything
rules for the file `` `foo.c' ``. Thus, `make` will not even consider
trying to make `` `foo.c' `` as an executable file from `` `foo.c.o' ``,
`` `foo.c.c' ``, `` `foo.c.p' ``, etc.

The motivation for this constraint is that nonterminal match-anything
rules are used for making files containing specific types of data (such
as executable files) and a file name with a recognized suffix indicates
some other specific type of data (such as a C source file).

Special built-in dummy pattern rules are provided solely to recognize
certain file names so that nonterminal match-anything rules will not be
considered. These dummy rules have no dependencies and no commands, and
they are ignored for all other purposes. For example, the built-in
implicit rule

    %.p :

exists to make sure that Pascal source files such as `` `foo.p' `` match
a specific target pattern and thereby prevent time from being wasted
looking for `` `foo.p.o' `` or `` `foo.p.c' ``.

Dummy pattern rules such as the one for `` `%.p' ``{.sample} are made
for every suffix listed as valid for use in suffix rules (see section
[Old-Fashioned Suffix Rules](make_10.md#SEC99)).

### [Canceling Implicit Rules](make_toc.md#SEC97){#SEC97}

You can override a built-in implicit rule (or one you have defined
yourself) by defining a new pattern rule with the same target and
dependencies, but different commands. When the new rule is defined, the
built-in one is replaced. The new rule\'s position in the sequence of
implicit rules is determined by where you write the new rule.

You can cancel a built-in implicit rule by defining a pattern rule with
the same target and dependencies, but no commands. For example, the
following would cancel the rule that runs the assembler:

    %.o : %.s

[]{#IDX819} []{#IDX820}

## [Defining Last-Resort Default Rules](make_toc.md#SEC98){#SEC98}

You can define a last-resort implicit rule by writing a terminal
match-anything pattern rule with no dependencies (see section
[Match-Anything Pattern Rules](make_10.md#SEC96)). This is just like
any other pattern rule; the only thing special about it is that it will
match any target. So such a rule\'s commands are used for all targets
and dependencies that have no commands of their own and for which no
other implicit rule applies.

For example, when testing a makefile, you might not care if the source
files contain real data, only that they exist. Then you might do this:

    %::
            touch $@

to cause all the source files needed (as dependencies) to be created
automatically. []{#IDX821}

You can instead define commands to be used for targets for which there
are no rules at all, even ones which don\'t specify commands. You do
this by writing a rule for the target `.DEFAULT`. Such a rule\'s
commands are used for all dependencies which do not appear as targets in
any explicit rule, and for which no implicit rule applies. Naturally,
there is no `.DEFAULT` rule unless you write one.

If you use `.DEFAULT` with no commands or dependencies:

    .DEFAULT:

the commands previously stored for `.DEFAULT` are cleared. Then `make`
acts as if you had never defined `.DEFAULT` at all.

If you do not want a target to get the commands from a match-anything
pattern rule or `.DEFAULT`, but you also do not want any commands to be
run for the target, you can give it empty commands (see section [Using
Empty Commands](make_5.md#SEC54)).

You can use a last-resort rule to override part of another makefile. See
section [Overriding Part of Another Makefile](make_3.md#SEC18).

[]{#IDX822} []{#IDX823}

## [Old-Fashioned Suffix Rules](make_toc.md#SEC99){#SEC99}

[Suffix rules]{.dfn} are the old-fashioned way of defining implicit
rules for `make`. Suffix rules are obsolete because pattern rules are
more general and clearer. They are supported in GNU `make` for
compatibility with old makefiles. They come in two kinds:
[double-suffix]{.dfn} and [single-suffix]{.dfn}.

A double-suffix rule is defined by a pair of suffixes: the target suffix
and the source suffix. It matches any file whose name ends with the
target suffix. The corresponding implicit dependency is made by
replacing the target suffix with the source suffix in the file name. A
two-suffix rule whose target and source suffixes are `` `.o' ``{.sample}
and `` `.c' ``{.sample} is equivalent to the pattern rule
`` `%.o : %.c' ``{.sample}.

A single-suffix rule is defined by a single suffix, which is the source
suffix. It matches any file name, and the corresponding implicit
dependency name is made by appending the source suffix. A single-suffix
rule whose source suffix is `` `.c' ``{.sample} is equivalent to the
pattern rule `` `% : %.c' ``{.sample}.

Suffix rule definitions are recognized by comparing each rule\'s target
against a defined list of known suffixes. When `make` sees a rule whose
target is a known suffix, this rule is considered a single-suffix rule.
When `make` sees a rule whose target is two known suffixes concatenated,
this rule is taken as a double-suffix rule.

For example, `` `.c' ``{.sample} and `` `.o' ``{.sample} are both on the
default list of known suffixes. Therefore, if you define a rule whose
target is `` `.c.o' ``{.sample}, `make` takes it to be a double-suffix
rule with source suffix `` `.c' ``{.sample} and target suffix
`` `.o' ``{.sample}. Here is the old-fashioned way to define the rule
for compiling a C source file:

    .c.o:
            $(CC) -c $(CFLAGS) $(CPPFLAGS) -o $@ $<

Suffix rules cannot have any dependencies of their own. If they have
any, they are treated as normal files with funny names, not as suffix
rules. Thus, the rule:

    .c.o: foo.h
            $(CC) -c $(CFLAGS) $(CPPFLAGS) -o $@ $<

tells how to make the file `` `.c.o' `` from the dependency file
`` `foo.h' ``, and is not at all like the pattern rule:

    %.o: %.c foo.h
            $(CC) -c $(CFLAGS) $(CPPFLAGS) -o $@ $<

which tells how to make `` `.o' ``{.sample} files from
`` `.c' ``{.sample} files, and makes all `` `.o' ``{.sample} files using
this pattern rule also depend on `` `foo.h' ``.

Suffix rules with no commands are also meaningless. They do not remove
previous rules as do pattern rules with no commands (see section
[Canceling Implicit Rules](make_10.md#SEC97)). They simply enter the
suffix or pair of suffixes concatenated as a target in the data
base.[]{#IDX824}

The known suffixes are simply the names of the dependencies of the
special target `.SUFFIXES`. You can add your own suffixes by writing a
rule for `.SUFFIXES` that adds more dependencies, as in:

    .SUFFIXES: .hack .win

which adds `` `.hack' ``{.sample} and `` `.win' ``{.sample} to the end
of the list of suffixes.

If you wish to eliminate the default known suffixes instead of just
adding to them, write a rule for `.SUFFIXES` with no dependencies. By
special dispensation, this eliminates all existing dependencies of
`.SUFFIXES`. You can then write another rule to add the suffixes you
want. For example,

    .SUFFIXES:            # Delete the default suffixes
    .SUFFIXES: .c .o .h   # Define our suffix list

The `` `-r' ``{.sample} or `` `--no-builtin-rules' ``{.sample} flag
causes the default list of suffixes to be empty. []{#IDX825}

The variable `SUFFIXES` is defined to the default list of suffixes
before `make` reads any makefiles. You can change the list of suffixes
with a rule for the special target `.SUFFIXES`, but that does not alter
this variable.

[]{#IDX826} []{#IDX827}

## [Implicit Rule Search Algorithm](make_toc.md#SEC100){#SEC100}

Here is the procedure `make` uses for searching for an implicit rule for
a target `t`{.variable}. This procedure is followed for each
double-colon rule with no commands, for each target of ordinary rules
none of which have commands, and for each dependency that is not the
target of any rule. It is also followed recursively for dependencies
that come from implicit rules, in the search for a chain of rules.

Suffix rules are not mentioned in this algorithm because suffix rules
are converted to equivalent pattern rules once the makefiles have been
read in.

For an archive member target of the form
`` ` ``{.sample}`archive`{.variable}`(`{.sample}`member`{.variable}`)'`{.sample},
the following algorithm is run twice, first using the entire target name
`t`{.variable}, and second using
`` `( ``{.sample}`member`{.variable}`)'`{.sample} as the target
`t`{.variable} if the first run found no rule.

1.  Split `t`{.variable} into a directory part, called `d`{.variable},
    and the rest, called `n`{.variable}. For example, if `t`{.variable}
    is `` `src/foo.o' ``{.sample}, then `d`{.variable} is
    `` `src/' ``{.sample} and `n`{.variable} is `` `foo.o' ``{.sample}.
2.  Make a list of all the pattern rules one of whose targets matches
    `t`{.variable} or `n`{.variable}. If the target pattern contains a
    slash, it is matched against `t`{.variable}; otherwise, against
    `n`{.variable}.
3.  If any rule in that list is *not* a match-anything rule, then remove
    all nonterminal match-anything rules from the list.
4.  Remove from the list all rules with no commands.
5.  For each pattern rule in the list:
    1.  Find the stem `s`{.variable}, which is the nonempty part of
        `t`{.variable} or `n`{.variable} matched by the
        `` `%' ``{.sample} in the target pattern.

    2.  Compute the dependency names by substituting `s`{.variable} for
        `` `%' ``{.sample}; if the target pattern does not contain a
        slash, append `d`{.variable} to the front of each dependency
        name.

    3.  Test whether all the dependencies exist or ought to exist. (If a
        file name is mentioned in the makefile as a target or as an
        explicit dependency, then we say it ought to exist.)

        If all dependencies exist or ought to exist, or there are no
        dependencies, then this rule applies.
6.  If no pattern rule has been found so far, try harder. For each
    pattern rule in the list:
    1.  If the rule is terminal, ignore it and go on to the next rule.
    2.  Compute the dependency names as before.
    3.  Test whether all the dependencies exist or ought to exist.
    4.  For each dependency that does not exist, follow this algorithm
        recursively to see if the dependency can be made by an implicit
        rule.
    5.  If all dependencies exist, ought to exist, or can be made by
        implicit rules, then this rule applies.
7.  If no implicit rule applies, the rule for `.DEFAULT`, if any,
    applies. In that case, give `t`{.variable} the same commands that
    `.DEFAULT` has. Otherwise, there are no commands for `t`{.variable}.

Once a rule that applies has been found, for each target pattern of the
rule other than the one that matched `t`{.variable} or `n`{.variable},
the `` `%' ``{.sample} in the pattern is replaced with `s`{.variable}
and the resultant file name is stored until the commands to remake the
target file `t`{.variable} are executed. After these commands are
executed, each of these stored file names are entered into the data base
and marked as having been updated and having the same update status as
the file `t`{.variable}.

When the commands of a pattern rule are executed for `t`{.variable}, the
automatic variables are set corresponding to the target and
dependencies. See section [Automatic Variables](make_10.md#SEC94).

Go to the [previous](make_9.md), [next](make_11.md) section.
