Go to the [first](intro_1.html), [previous](intro_1.html), [next](intro_3.html), [last](intro_21.html) section, [table of contents](intro_toc.html).

* * *

# [Filename Generation](intro_toc.html\#SEC2)

Otherwise known as _globbing_, filename generation is quite
extensive in zsh. Of course, it has all the basics:

```
% ls
Makefile   file.pro   foo.o      main.o     q.c        run234     stuff
bar.o      foo        link       morestuff  run123     run240     sub
file.h     foo.c      main.h     pipe       run2       run303
% ls *.c
foo.c  q.c
% ls *.[co]
bar.o   foo.c   foo.o   main.o  q.c
% ls foo.?
foo.c  foo.o
% ls *.[^c]
bar.o   file.h  foo.o   main.h  main.o
% ls *.[^oh]
foo.c  q.c

```

Also, if the `EXTENDEDGLOB` option is set, some new features are
activated. For example, the `^` character negates the pattern
following it:

```
% setopt extendedglob
% ls -d ^*.c
Makefile   file.pro   link       morestuff  run2       run303
bar.o      foo        main.h     pipe       run234     stuff
file.h     foo.o      main.o     run123     run240     sub
% ls -d ^*.*
Makefile   link       pipe       run2       run240     stuff
foo        morestuff  run123     run234     run303     sub
% ls -d ^Makefile
bar.o      foo        link       morestuff  run123     run240     sub
file.h     foo.c      main.h     pipe       run2       run303
file.pro   foo.o      main.o     q.c        run234     stuff
% ls -d *.^c
.rhosts   bar.o     file.h    file.pro  foo.o     main.h    main.o

```

An expression of the form `<x-y>` matches a range of integers:

```
% ls run<200-300>
run234  run240
% ls run<300-400>
run303
% ls run<-200>
run123  run2
% ls run<300->
run303
% ls run<>
run123  run2    run234  run240  run303

```

Grouping is possible:

```
% ls (foo|bar).*
bar.o  foo.c  foo.o
% ls *.(c|o|pro)
bar.o     file.pro  foo.c     foo.o     main.o    q.c

```

Also, the string `**/` forces a recursive search of subdirectories:

```
% ls -R
Makefile   file.pro   foo.o      main.o     q.c        run234     stuff
bar.o      foo        link       morestuff  run123     run240     sub
file.h     foo.c      main.h     pipe       run2       run303

morestuff:

stuff:
file  xxx   yyy

stuff/xxx:
foobar

stuff/yyy:
frobar
% ls **/*bar
stuff/xxx/foobar  stuff/yyy/frobar
% ls **/f*
file.h            foo               foo.o             stuff/xxx/foobar
file.pro          foo.c             stuff/file        stuff/yyy/frobar
% ls *bar*
bar.o
% ls **/*bar*
bar.o             stuff/xxx/foobar  stuff/yyy/frobar
% ls stuff/**/*bar*
stuff/xxx/foobar  stuff/yyy/frobar

```

It is possible to exclude certain files from the patterns using the
`~` character. A pattern of the form `*.c~bar.c` lists all
files matching `*.c`, except for the file `` `bar.c'``.

```
% ls *.c
foo.c    foob.c    bar.c
% ls *.c~bar.c
foo.c    foob.c
% ls *.c~f*
bar.c

```

One can add a number of _qualifiers_ to the end of any of these
patterns, to restrict matches to certain file types. A qualified
pattern is of the form

pattern(...)

with single-letter qualifiers inside the parentheses.

```
% alias l='ls -dF'
% l *
Makefile    foo*        main.h      q.c         run240
bar.o       foo.c       main.o      run123      run303
file.h      foo.o       morestuff/  run2        stuff/
file.pro    link@       pipe        run234      sub
% l *(/)
morestuff/  stuff/
% l *(@)
link@
% l *(*)
foo*        link@       morestuff/  stuff/
% l *(x)
foo*        link@       morestuff/  stuff/
% l *(X)
foo*        link@       morestuff/  stuff/
% l *(R)
bar.o       foo*        link@       morestuff/  run123      run240
file.h      foo.c       main.h      pipe        run2        run303
file.pro    foo.o       main.o      q.c         run234      stuff/

```

Note that `*(x)` and `*(*)` both match executables.
`*(X)` matches files executable by others, as opposed to
`*(x)`, which matches files executable by the owner.
`*(R)` and `*(r)` match readable files;
`*(W)` and `*(w)`, which checks for writable files.
`*(W)` is especially important, since it checks for world-writable
files:

```
% l *(w)
bar.o       foo*        link@       morestuff/  run123      run240
file.h      foo.c       main.h      pipe        run2        run303
file.pro    foo.o       main.o      q.c         run234      stuff/
% l *(W)
link@   run240
% l -l link run240
lrwxrwxrwx  1 pfalstad       10 May 23 18:12 link -> /bin/false*
-rw-rw-rw-  1 pfalstad        0 May 23 18:12 run240

```

You can filter out the symbolic links with the `^` character:

```
% l *(W^@)
run240
% l *(x)
foo*        link@       morestuff/  stuff/
% l *(x^@/)
foo*

```

To find all plain files, you can use `.`:

```
% l *(.)
Makefile  file.h    foo*      foo.o     main.o    run123    run234    run303
bar.o     file.pro  foo.c     main.h    q.c       run2      run240    sub
% l *(^.)
link@       morestuff/  pipe        stuff/
% l s*(.)
stuff/   sub
% l *(p)
pipe
% l -l *(p)
prw-r--r--  1 pfalstad        0 May 23 18:12 pipe

```

`*(U)` matches all files owned by you. To search for all files not
owned by you, use `*(^U)`:

```
% l -l *(^U)
-rw-------  1 subbarao       29 May 23 18:13 sub

```

This searches for setuid files:

```
% l -l *(s)
-rwsr-xr-x  1 pfalstad       16 May 23 18:12 foo*

```

This checks for a certain user's files:

```
% ypmatch subbarao passwd
subbarao:*:3338:35:Kartik Subbarao:/u/subbarao:/usr/princeton/bin/zsh
% l -l *(u3338)
-rw-------  1 subbarao       29 May 23 18:13 sub

```

* * *

Go to the [first](intro_1.html), [previous](intro_1.html), [next](intro_3.html), [last](intro_21.html) section, [table of contents](intro_toc.html).

