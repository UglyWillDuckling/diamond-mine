GNU Make - Makefile Conventions

Go to the [previous](make_13.md), [next](make_15.md) section.

[]{#IDX851} []{#IDX852} []{#IDX853}

# [Makefile Conventions](make_toc.md#SEC109){#SEC109}

This chapter describes conventions for writing the Makefiles for GNU
programs.

## [General Conventions for Makefiles](make_toc.md#SEC110){#SEC110}

Every Makefile should contain this line:

    SHELL = /bin/sh

to avoid trouble on systems where the `SHELL` variable might be
inherited from the environment. (This is never a problem with GNU
`make`.)

Different `make` programs have incompatible suffix lists and implicit
rules, and this sometimes creates confusion or misbehavior. So it is a
good idea to set the suffix list explicitly using only the suffixes you
need in the particular Makefile, like this:

    .SUFFIXES:
    .SUFFIXES: .c .o

The first line clears out the suffix list, the second introduces all
suffixes which may be subject to implicit rules in this Makefile.

Don\'t assume that `` `.' `` is in the path for command execution. When
you need to run programs that are a part of your package during the
make, please make sure that it uses `` `./' `` if the program is built
as part of the make or `` `$(srcdir)/' `` if the file is an unchanging
part of the source code. Without one of these prefixes, the current
search path is used.

The distinction between `` `./' `` and `` `$(srcdir)/' `` is important
when using the `` `--srcdir' ``{.sample} option to `` `configure' ``. A
rule of the form:

    foo.1 : foo.man sedscript
            sed -e sedscript foo.man > foo.1

will fail when the current directory is not the source directory,
because `` `foo.man' `` and `` `sedscript' `` are not in the current
directory.

When using GNU `make`, relying on `` `VPATH' ``{.sample} to find the
source file will work in the case where there is a single dependency
file, since the `` `make' `` automatic variable `` `$<' ``{.sample} will
represent the source file wherever it is. (Many versions of `make` set
`` `$<' ``{.sample} only in implicit rules.) A makefile target like

    foo.o : bar.c
            $(CC) -I. -I$(srcdir) $(CFLAGS) -c bar.c -o foo.o

should instead be written as

    foo.o : bar.c
            $(CC) -I. -I$(srcdir) $(CFLAGS) -c $< -o $@

in order to allow `` `VPATH' ``{.sample} to work correctly. When the
target has multiple dependencies, using an explicit
`` `$(srcdir)' ``{.sample} is the easiest way to make the rule work
well. For example, the target above for `` `foo.1' `` is best written
as:

    foo.1 : foo.man sedscript
            sed -e $(srcdir)/sedscript $(srcdir)/foo.man > $@

## [Utilities in Makefiles](make_toc.md#SEC111){#SEC111}

Write the Makefile commands (and any shell scripts, such as `configure`)
to run in `sh`, not in `csh`. Don\'t use any special features of `ksh`
or `bash`.

The `configure` script and the Makefile rules for building and
installation should not use any utilities directly except these:

    cat cmp cp echo egrep expr grep
    ln mkdir mv pwd rm rmdir sed test touch

Stick to the generally supported options for these programs. For
example, don\'t use `` `mkdir -p' ``{.sample}, convenient as it may be,
because most systems don\'t support it.

The Makefile rules for building and installation can also use compilers
and related programs, but should do so via `make` variables so that the
user can substitute alternatives. Here are some of the programs we mean:

    ar bison cc flex install ld lex
    make makeinfo ranlib texi2dvi yacc

Use the following `make` variables:

    $(AR) $(BISON) $(CC) $(FLEX) $(INSTALL) $(LD) $(LEX)
    $(MAKE) $(MAKEINFO) $(RANLIB) $(TEXI2DVI) $(YACC)

When you use `ranlib`, you should make sure nothing bad happens if the
system does not have `ranlib`. Arrange to ignore an error from that
command, and print a message before the command to tell the user that
failure of the `ranlib` command does not mean a problem.

If you use symbolic links, you should implement a fallback for systems
that don\'t have symbolic links.

It is ok to use other utilities in Makefile portions (or scripts)
intended only for particular systems where you know those utilities to
exist.

## [Standard Targets for Users](make_toc.md#SEC112){#SEC112}

All GNU programs should have the following targets in their Makefiles:

`` `all' ``{.sample}
:   Compile the entire program. This should be the default target. This
    target need not rebuild any documentation files; Info files should
    normally be included in the distribution, and DVI files should be
    made only when explicitly asked for.

`` `install' ``{.sample}

:   Compile the program and copy the executables, libraries, and so on
    to the file names where they should reside for actual use. If there
    is a simple test to verify that a program is properly installed,
    this target should run that test.

    The commands should create all the directories in which files are to
    be installed, if they don\'t already exist. This includes the
    directories specified as the values of the variables `prefix` and
    `exec_prefix`, as well as all subdirectories that are needed. One
    way to do this is by means of an `installdirs` target as described
    below.

    Use `` `-' ``{.sample} before any command for installing a man page,
    so that `make` will ignore any errors. This is in case there are
    systems that don\'t have the Unix man page documentation system
    installed.

    The way to install Info files is to copy them into
    `` `$(infodir)' `` with `$(INSTALL_DATA)` (see section [Variables
    for Specifying Commands](make_14.md#SEC113)), and then run the
    `install-info` program if it is present. `install-info` is a script
    that edits the Info `` `dir' `` file to add or update the menu entry
    for the given Info file; it will be part of the Texinfo package.
    Here is a sample rule to install an Info file:

        $(infodir)/foo.info: foo.info
        # There may be a newer info file in . than in srcdir.
                -if test -f foo.info; then d=.; \
                 else d=$(srcdir); fi; \
                $(INSTALL_DATA) $$d/foo.info $@; \
        # Run install-info only if it exists.
        # Use `if' instead of just prepending `-' to the
        # line so we notice real errors from install-info.
        # We use `$(SHELL) -c' because some shells do not
        # fail gracefully when there is an unknown command.
                if $(SHELL) -c 'install-info --version' \
                   >/dev/null 2>&1; then \
                  install-info --infodir=$(infodir) $$d/foo.info; \
                else true; fi

`` `uninstall' ``{.sample}
:   Delete all the installed files that the `` `install' ``{.sample}
    target would create (but not the noninstalled files such as
    `` `make all' ``{.sample} would create).

`` `clean' ``{.sample}

:   Delete all files from the current directory that are normally
    created by building the program. Don\'t delete the files that record
    the configuration. Also preserve files that could be made by
    building, but normally aren\'t because the distribution comes with
    them.

    Delete `` `.dvi' `` files here if they are not part of the
    distribution.

`` `distclean' ``{.sample}
:   Delete all files from the current directory that are created by
    configuring or building the program. If you have unpacked the source
    and built the program without creating any other files,
    `` `make distclean' ``{.sample} should leave only the files that
    were in the distribution.

`` `mostlyclean' ``{.sample}
:   Like `` `clean' ``{.sample}, but may refrain from deleting a few
    files that people normally don\'t want to recompile. For example,
    the `` `mostlyclean' ``{.sample} target for GCC does not delete
    `` `libgcc.a' ``, because recompiling it is rarely necessary and
    takes a lot of time.

`` `realclean' ``{.sample}

:   Delete everything from the current directory that can be
    reconstructed with this Makefile. This typically includes everything
    deleted by `distclean`, plus more: C source files produced by Bison,
    tags tables, Info files, and so on.

    One exception, however: `` `make realclean' ``{.sample} should not
    delete `` `configure' `` even if `` `configure' `` can be remade
    using a rule in the Makefile. More generally,
    `` `make realclean' ``{.sample} should not delete anything that
    needs to exist in order to run `` `configure' `` and then begin to
    build the program.

`` `TAGS' ``{.sample}
:   Update a tags table for this program.

`` `info' ``{.sample}

:   Generate any Info files needed. The best way to write the rules is
    as follows:

        info: foo.info

        foo.info: foo.texi chap1.texi chap2.texi
                $(MAKEINFO) $(srcdir)/foo.texi

    You must define the variable `MAKEINFO` in the Makefile. It should
    run the `makeinfo` program, which is part of the Texinfo
    distribution.

`` `dvi' ``{.sample}

:   Generate DVI files for all TeXinfo documentation. For example:

        dvi: foo.dvi

        foo.dvi: foo.texi chap1.texi chap2.texi
                $(TEXI2DVI) $(srcdir)/foo.texi

    You must define the variable `TEXI2DVI` in the Makefile. It should
    run the program `texi2dvi`, which is part of the Texinfo
    distribution. Alternatively, write just the dependencies, and allow
    GNU Make to provide the command.

`` `dist' ``{.sample}

:   Create a distribution tar file for this program. The tar file should
    be set up so that the file names in the tar file start with a
    subdirectory name which is the name of the package it is a
    distribution for. This name can include the version number.

    For example, the distribution tar file of GCC version 1.40 unpacks
    into a subdirectory named `` `gcc-1.40' ``.

    The easiest way to do this is to create a subdirectory appropriately
    named, use `ln` or `cp` to install the proper files in it, and then
    `tar` that subdirectory.

    The `dist` target should explicitly depend on all non-source files
    that are in the distribution, to make sure they are up to date in
    the distribution. See section \`Making Releases\' in GNU Coding
    Standards.

`` `check' ``{.sample}
:   Perform self-tests (if any). The user must build the program before
    running the tests, but need not install the program; you should
    write the self-tests so that they work when the program is built but
    not installed.

The following targets are suggested as conventional names, for programs
in which they are useful.

`installcheck`
:   Perform installation tests (if any). The user must build and install
    the program before running the tests. You should not assume that
    `` `$(bindir)' `` is in the search path.

`installdirs`

:   It\'s useful to add a target named `` `installdirs' ``{.sample} to
    create the directories where files are installed, and their parent
    directories. There is a script called `` `mkinstalldirs' `` which is
    convenient for this; find it in the Texinfo package. You can use a
    rule like this:

        # Make sure all installation directories (e.g. $(bindir))
        # actually exist by making them if necessary.
        installdirs: mkinstalldirs
                $(srcdir)/mkinstalldirs $(bindir) $(datadir) \
                                        $(libdir) $(infodir) \
                                        $(mandir)

## [Variables for Specifying Commands](make_toc.md#SEC113){#SEC113}

Makefiles should provide variables for overriding certain commands,
options, and so on.

In particular, you should run most utility programs via variables. Thus,
if you use Bison, have a variable named `BISON` whose default value is
set with `` `BISON = bison' ``{.sample}, and refer to it with `$(BISON)`
whenever you need to use Bison.

File management utilities such as `ln`, `rm`, `mv`, and so on, need not
be referred to through variables in this way, since users don\'t need to
replace them with other programs.

Each program-name variable should come with an options variable that is
used to supply options to the program. Append `` `FLAGS' ``{.sample} to
the program-name variable name to get the options variable name\--for
example, `BISONFLAGS`. (The name `CFLAGS` is an exception to this rule,
but we keep it because it is standard.) Use `CPPFLAGS` in any
compilation command that runs the preprocessor, and use `LDFLAGS` in any
compilation command that does linking as well as in any direct use of
`ld`.

If there are C compiler options that *must* be used for proper
compilation of certain files, do not include them in `CFLAGS`. Users
expect to be able to specify `CFLAGS` freely themselves. Instead,
arrange to pass the necessary options to the C compiler independently of
`CFLAGS`, by writing them explicitly in the compilation commands or by
defining an implicit rule, like this:

    CFLAGS = -g
    ALL_CFLAGS = -I. $(CFLAGS)
    .c.o:
            $(CC) -c $(CPPFLAGS) $(ALL_CFLAGS) $<

Do include the `` `-g' ``{.sample} option in `CFLAGS`, because that is
not *required* for proper compilation. You can consider it a default
that is only recommended. If the package is set up so that it is
compiled with GCC by default, then you might as well include
`` `-O' ``{.sample} in the default value of `CFLAGS` as well.

Put `CFLAGS` last in the compilation command, after other variables
containing compiler options, so the user can use `CFLAGS` to override
the others.

Every Makefile should define the variable `INSTALL`, which is the basic
command for installing a file into the system.

Every Makefile should also define the variables `INSTALL_PROGRAM` and
`INSTALL_DATA`. (The default for each of these should be `$(INSTALL)`.)
Then it should use those variables as the commands for actual
installation, for executables and nonexecutables respectively. Use these
variables as follows:

    $(INSTALL_PROGRAM) foo $(bindir)/foo
    $(INSTALL_DATA) libfoo.a $(libdir)/libfoo.a

Always use a file name, not a directory name, as the second argument of
the installation commands. Use a separate command for each file to be
installed.

## [Variables for Installation Directories](make_toc.md#SEC114){#SEC114}

Installation directories should always be named by variables, so it is
easy to install in a nonstandard place. The standard names for these
variables are as follows.

These two variables set the root for the installation. All the other
installation directories should be subdirectories of one of these two,
and nothing should be directly installed into these two directories.

`` `prefix' ``{.sample}
:   A prefix used in constructing the default values of the variables
    listed below. The default value of `prefix` should be
    `` `/usr/local' `` (at least for now).

`` `exec_prefix' ``{.sample}

:   A prefix used in constructing the default values of some of the
    variables listed below. The default value of `exec_prefix` should be
    `$(prefix)`.

    Generally, `$(exec_prefix)` is used for directories that contain
    machine-specific files (such as executables and subroutine
    libraries), while `$(prefix)` is used directly for other
    directories.

Executable programs are installed in one of the following directories.

`` `bindir' ``{.sample}
:   The directory for installing executable programs that users can run.
    This should normally be `` `/usr/local/bin' ``, but write it as
    `` `$(exec_prefix)/bin' ``.

`` `sbindir' ``{.sample}
:   The directory for installing executable programs that can be run
    from the shell, but are only generally useful to system
    administrators. This should normally be `` `/usr/local/sbin' ``, but
    write it as `` `$(exec_prefix)/sbin' ``.

`` `libexecdir' ``{.sample}
:   The directory for installing executable programs to be run by other
    programs rather than by users. This directory should normally be
    `` `/usr/local/libexec' ``, but write it as
    `` `$(exec_prefix)/libexec' ``.

Data files used by the program during its execution are divided into
categories in two ways.

-   Some files are normally modified by programs; others are never
    normally modified (though users may edit some of these).
-   Some files are architecture-independent and can be shared by all
    machines at a site; some are architecture-dependent and can be
    shared only by machines of the same kind and operating system;
    others may never be shared between two machines.

This makes for six different possibilities. However, we want to
discourage the use of architecture-dependent files, aside from of object
files and libraries. It is much cleaner to make other data files
architecture-independent, and it is generally not hard.

Therefore, here are the variables makefiles should use to specify
directories:

`` `datadir' ``{.sample}
:   The directory for installing read-only architecture independent data
    files. This should normally be `` `/usr/local/share' ``, but write
    it as `` `$(prefix)/share' ``. As a special exception, see
    `` `$(infodir)' `` and `` `$(includedir)' `` below.

`` `sysconfdir' ``{.sample}

:   The directory for installing read-only data files that pertain to a
    single machine\--that is to say, files for configuring a host.
    Mailer and network configuration files, `` `/etc/passwd' ``, and so
    forth belong here. All the files in this directory should be
    ordinary ASCII text files. This directory should normally be
    `` `/usr/local/etc' ``, but write it as `` `$(prefix)/etc' ``.

    Do not install executables in this directory (they probably belong
    in `` `$(libexecdir)' `` or `` `$(sbindir))' ``. Also do not install
    files that are modified in the normal course of their use (programs
    whose purpose is to change the configuration of the system
    excluded). Those probably belong in `` `$(localstatedir)' ``.

`` `sharedstatedir' ``{.sample}
:   The directory for installing architecture-independent data files
    which the programs modify while they run. This should normally be
    `` `/usr/local/com' ``, but write it as `` `$(prefix)/com' ``.

`` `localstatedir' ``{.sample}
:   The directory for installing data files which the programs modify
    while they run, and that pertain to one specific machine. Users
    should never need to modify files in this directory to configure the
    package\'s operation; put such configuration information in separate
    files that go in `` `datadir' `` or `` `$(sysconfdir)' ``.
    `` `$(localstatedir)' `` should normally be `` `/usr/local/var' ``,
    but write it as `` `$(prefix)/var' ``.

`` `libdir' ``{.sample}
:   The directory for object files and libraries of object code. Do not
    install executables here, they probably belong in
    `` `$(libexecdir)' `` instead. The value of `libdir` should normally
    be `` `/usr/local/lib' ``, but write it as
    `` `$(exec_prefix)/lib' ``.

`` `infodir' ``{.sample}
:   The directory for installing the Info files for this package. By
    default, it should be `` `/usr/local/info' ``, but it should be
    written as `` `$(prefix)/info' ``.

`` `includedir' ``{.sample}

:   The directory for installing header files to be included by user
    programs with the C `` `#include' ``{.sample} preprocessor
    directive. This should normally be `` `/usr/local/include' ``, but
    write it as `` `$(prefix)/include' ``.

    Most compilers other than GCC do not look for header files in
    `` `/usr/local/include' ``. So installing the header files this way
    is only useful with GCC. Sometimes this is not a problem because
    some libraries are only really intended to work with GCC. But some
    libraries are intended to work with other compilers. They should
    install their header files in two places, one specified by
    `includedir` and one specified by `oldincludedir`.

`` `oldincludedir' ``{.sample}

:   The directory for installing `` `#include' ``{.sample} header files
    for use with compilers other than GCC. This should normally be
    `` `/usr/include' ``.

    The Makefile commands should check whether the value of
    `oldincludedir` is empty. If it is, they should not try to use it;
    they should cancel the second installation of the header files.

    A package should not replace an existing header in this directory
    unless the header came from the same package. Thus, if your Foo
    package provides a header file `` `foo.h' ``, then it should install
    the header file in the `oldincludedir` directory if either (1) there
    is no `` `foo.h' `` there or (2) the `` `foo.h' `` that exists came
    from the Foo package.

    To tell whether `` `foo.h' `` came from the Foo package, put a magic
    string in the file\--part of a comment\--and grep for that string.

Unix-style man pages are installed in one of the following:

`` `mandir' ``{.sample}
:   The directory for installing the man pages (if any) for this
    package. It should include the suffix for the proper section of the
    manual\--usually `` `1' ``{.sample} for a utility. It will normally
    be `` `/usr/local/man/man1' ``, but you should write it as
    `` `$(prefix)/man/man1' ``.

`` `man1dir' ``{.sample}
:   The directory for installing section 1 man pages.

`` `man2dir' ``{.sample}
:   The directory for installing section 2 man pages.

`` `...' ``{.sample}

:   Use these names instead of `` `mandir' ``{.sample} if the package
    needs to install man pages in more than one section of the manual.

    **Don\'t make the primary documentation for any GNU software be a
    man page. Write a manual in Texinfo instead. Man pages are just for
    the sake of people running GNU software on Unix, which is a
    secondary application only.**

`` `manext' ``{.sample}
:   The file name extension for the installed man page. This should
    contain a period followed by the appropriate digit; it should
    normally be `` `.1' ``{.sample}.

`` `man1ext' ``{.sample}
:   The file name extension for installed section 1 man pages.

`` `man2ext' ``{.sample}
:   The file name extension for installed section 2 man pages.

`` `...' ``{.sample}
:   Use these names instead of `` `manext' ``{.sample} if the package
    needs to install man pages in more than one section of the manual.

And finally, you should set the following variable:

`` `srcdir' ``{.sample}
:   The directory for the sources being compiled. The value of this
    variable is normally inserted by the `configure` shell script.

For example:

    # Common prefix for installation directories.
    # NOTE: This directory must exist when you start the install.
    prefix = /usr/local
    exec_prefix = $(prefix)
    # Where to put the executable for the command `gcc'.
    bindir = $(exec_prefix)/bin
    # Where to put the directories used by the compiler.
    libexecdir = $(exec_prefix)/libexec
    # Where to put the Info files.
    infodir = $(prefix)/info

If your program installs a large number of files into one of the
standard user-specified directories, it might be useful to group them
into a subdirectory particular to that program. If you do this, you
should write the `install` rule to create these subdirectories.

Do not expect the user to include the subdirectory name in the value of
any of the variables listed above. The idea of having a uniform set of
variable names for installation directories is to enable the user to
specify the exact same values for several different GNU packages. In
order for this to be useful, all the packages must be designed so that
they will work sensibly when the user does so.

Go to the [previous](make_13.md), [next](make_15.md) section.
