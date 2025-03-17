GNU Make - Using \@code{make} to Update Archive Files

Go to the [previous](make_10.md), [next](make_12.md) section.

[]{#IDX828}

# [Using `make` to Update Archive Files](make_toc.md#SEC101){#SEC101}

[Archive files]{.dfn} are files containing named subfiles called
[members]{.dfn}; they are maintained with the program `ar` and their
main use is as subroutine libraries for linking.

[]{#IDX829}

## [Archive Members as Targets](make_toc.md#SEC102){#SEC102}

An individual member of an archive file can be used as a target or
dependency in `make`. You specify the member named `member`{.variable}
in archive file `archive`{.variable} as follows:

    archive(member)

This construct is available only in targets and dependencies, not in
commands! Most programs that you might use in commands do not support
this syntax and cannot act directly on archive members. Only `ar` and
other programs specifically designed to operate on archives can do so.
Therefore, valid commands to update an archive member target probably
must use `ar`. For example, this rule says to create a member
`` `hack.o' `` in archive `` `foolib' `` by copying the file
`` `hack.o' ``:

    foolib(hack.o) : hack.o
            ar cr foolib hack.o

In fact, nearly all archive member targets are updated in just this way
and there is an implicit rule to do it for you. **Note:** The
`` `c' ``{.sample} flag to `ar` is required if the archive file does not
already exist.

To specify several members in the same archive, you can write all the
member names together between the parentheses. For example:

    foolib(hack.o kludge.o)

is equivalent to:

    foolib(hack.o) foolib(kludge.o)

[]{#IDX830}

You can also use shell-style wildcards in an archive member reference.
See section [Using Wildcard Characters in File
Names](make_4.md#SEC21). For example, `` `foolib(*.o)' ``{.sample}
expands to all existing members of the `` `foolib' `` archive whose
names end in `` `.o' ``{.sample}; perhaps
`` `foolib(hack.o) foolib(kludge.o)' ``{.sample}.

## [Implicit Rule for Archive Member Targets](make_toc.md#SEC103){#SEC103}

Recall that a target that looks like
`` ` ```a`{.variable}`(``m`{.variable}`)'` stands for the member named
`m`{.variable} in the archive file `a`{.variable}.

When `make` looks for an implicit rule for such a target, as a special
feature it considers implicit rules that match
`` `( ```m`{.variable}`)'`, as well as those that match the actual
target `` ` ```a`{.variable}`(``m`{.variable}`)'`.

This causes one special rule whose target is `` `(%)' `` to match. This
rule updates the target `` ` ```a`{.variable}`(``m`{.variable}`)'` by
copying the file `m`{.variable} into the archive. For example, it will
update the archive member target `` `foo.a(bar.o)' `` by copying the
*file* `` `bar.o' `` into the archive `` `foo.a' `` as a *member* named
`` `bar.o' ``.

When this rule is chained with others, the result is very powerful.
Thus, `` `make "foo.a(bar.o)"' ``{.sample} (the quotes are needed to
protect the `` `(' ``{.sample} and `` `)' ``{.sample} from being
interpreted specially by the shell) in the presence of a file
`` `bar.c' `` is enough to cause the following commands to be run, even
without a makefile:

    cc -c bar.c -o bar.o
    ar r foo.a bar.o
    rm -f bar.o

Here `make` has envisioned the file `` `bar.o' `` as an intermediate
file. See section [Chains of Implicit Rules](make_10.md#SEC90).

Implicit rules such as this one are written using the automatic variable
`` `$%' ``{.sample}. See section [Automatic
Variables](make_10.md#SEC94).

An archive member name in an archive cannot contain a directory name,
but it may be useful in a makefile to pretend that it does. If you write
an archive member target `` `foo.a(dir/file.o)' ``, `make` will perform
automatic updating with this command:

    ar r foo.a dir/file.o

which has the effect of copying the file `` `dir/file.o' `` into a
member named `` `file.o' ``. In connection with such usage, the
automatic variables `%D` and `%F` may be useful.

[]{#IDX831} []{#IDX832} []{#IDX833} []{#IDX834} []{#IDX835}

### [Updating Archive Symbol Directories](make_toc.md#SEC104){#SEC104}

An archive file that is used as a library usually contains a special
member named `` `__.SYMDEF' `` that contains a directory of the external
symbol names defined by all the other members. After you update any
other members, you need to update `` `__.SYMDEF' `` so that it will
summarize the other members properly. This is done by running the
`ranlib` program:

    ranlib archivefile

Normally you would put this command in the rule for the archive file,
and make all the members of the archive file dependencies of that rule.
For example,

    libfoo.a: libfoo.a(x.o) libfoo.a(y.o) ...
            ranlib libfoo.a

The effect of this is to update archive members `` `x.o' ``,
`` `y.o' ``, etc., and then update the symbol directory member
`` `__.SYMDEF' `` by running `ranlib`. The rules for updating the
members are not shown here; most likely you can omit them and use the
implicit rule which copies files into the archive, as described in the
preceding section.

This is not necessary when using the GNU `ar` program, which updates the
`` `__.SYMDEF' `` member automatically.

[]{#IDX836} []{#IDX837} []{#IDX838} []{#IDX839}

## [Dangers When Using Archives](make_toc.md#SEC105){#SEC105}

It is important to be careful when using parallel execution (the `-j`
switch; see section [Parallel Execution](make_5.md#SEC45)) and
archives. If multiple `ar` commands run at the same time on the same
archive file, they will not know about each other and can corrupt the
file.

Possibly a future version of `make` will provide a mechanism to
circumvent this problem by serializing all commands that operate on the
same archive file. But for the time being, you must either write your
makefiles to avoid this problem in some other way, or not use `-j`.

[]{#IDX840} []{#IDX841} []{#IDX842} []{#IDX843}

## [Suffix Rules for Archive Files](make_toc.md#SEC106){#SEC106}

You can write a special kind of suffix rule for dealing with archive
files. See section [Old-Fashioned Suffix Rules](make_10.md#SEC99), for
a full explanation of suffix rules. Archive suffix rules are obsolete in
GNU `make`, because pattern rules for archives are a more general
mechanism (see section [Implicit Rule for Archive Member
Targets](make_11.md#SEC103)). But they are retained for compatibility
with other `make`s.

To write a suffix rule for archives, you simply write a suffix rule
using the target suffix `` `.a' ``{.sample} (the usual suffix for
archive files). For example, here is the old-fashioned suffix rule to
update a library archive from C source files:

    .c.a:
            $(CC) $(CFLAGS) $(CPPFLAGS) -c $< -o $*.o
            $(AR) r $@ $*.o
            $(RM) $*.o

This works just as if you had written the pattern rule:

    (%.o): %.c
            $(CC) $(CFLAGS) $(CPPFLAGS) -c $< -o $*.o
            $(AR) r $@ $*.o
            $(RM) $*.o

In fact, this is just what `make` does when it sees a suffix rule with
`` `.a' ``{.sample} as the target suffix. Any double-suffix rule
`` `. ``{.sample}`x`{.variable}`.a'`{.sample} is converted to a pattern
rule with the target pattern `` `(%.o)' ``{.sample} and a dependency
pattern of `` `%. ``{.sample}`x`{.variable}`'`{.sample}.

Since you might want to use `` `.a' ``{.sample} as the suffix for some
other kind of file, `make` also converts archive suffix rules to pattern
rules in the normal way (see section [Old-Fashioned Suffix
Rules](make_10.md#SEC99)). Thus a double-suffix rule
`` `. ``{.sample}`x`{.variable}`.a'`{.sample} produces two pattern
rules: `` `(%.o): %. ``{.sample}`x`{.variable}`'`{.sample} and
`` `%.a: %. ``{.sample}`x`{.variable}`'`{.sample}.

Go to the [previous](make_10.md), [next](make_12.md) section.
