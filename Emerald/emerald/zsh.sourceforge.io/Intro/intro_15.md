Go to the [first](intro_1.html), [previous](intro_14.html), [next](intro_16.html), [last](intro_21.html) section, [table of contents](intro_toc.html).

* * *

# [Login/Logout Watching](intro_toc.html\#SEC15)

You can specify login or logout events to monitor by setting the
`watch` variable. Normally, this is done by specifying a list of
usernames.

```
% watch=( pfalstad subbarao sukthnkr egsirer )

```

The `log` command reports all people logged in that you are
watching for.

```
% log
pfalstad has logged on p0 from mickey.
pfalstad has logged on p5 from mickey.
% ...
subbarao has logged on p8 from phoenix.
% ...
subbarao has logged off p8 from phoenix.
% ...
sukthnkr has logged on p8 from dew.
% ...
sukthnkr has logged off p8 from dew.

```

If you specify hostnames with an `@` prepended, the shell will
watch for all users logging in from the specified host.

```
% watch=( @mickey @phoenix )
% log
djthongs has logged on q2 from phoenix.
pfalstad has logged on p0 from mickey.
pfalstad has logged on p5 from mickey.

```

If you give a tty name with a `%` prepended, the shell will watch
for all users logging in on that tty.

```
% watch=( %ttyp0 %console )
% log
root has logged on console from .
pfalstad has logged on p0 from mickey.

```

The format of the reports may also be changed.

```
% watch=( pfalstad gettes eps djthongs jcorr bdavis )
% log
jcorr has logged on tf from 128.112.176.3:0.
jcorr has logged on r0 from 128.112.176.3:0.
gettes has logged on p4 from yo:0.0.
djthongs has logged on pe from grumpy:0.0.
djthongs has logged on q2 from phoenix.
bdavis has logged on qd from BRUNO.
eps has logged on p3 from csx30:0.0.
pfalstad has logged on p0 from mickey.
pfalstad has logged on p5 from mickey.
% WATCHFMT='%n on tty%l from %M'
% log
jcorr on ttytf from 128.112.176.3:0.
jcorr on ttyr0 from 128.112.176.3:0.
gettes on ttyp4 from yo:0.0
djthongs on ttype from grumpy:0.0
djthongs on ttyq2 from phoenix.Princeto
bdavis on ttyqd from BRUNOpl.gov
eps on ttyp3 from csx30:0.0
pfalstad on ttyp0 from mickey.Princeton
pfalstad on ttyp5 from mickey.Princeton
% WATCHFMT='%n fm %m'
% log
jcorr fm 128.112.176.3:0
jcorr fm 128.112.176.3:0
gettes fm yo:0.0
djthongs fm grumpy:0.0
djthongs fm phoenix
bdavis fm BRUNO
eps fm csx30:0.0
pfalstad fm mickey
pfalstad fm mickey
% WATCHFMT='%n %a at %t %w.'
% log
jcorr logged on at 3:15pm Mon 20.
jcorr logged on at 3:16pm Wed 22.
gettes logged on at 6:54pm Wed 22.
djthongs logged on at 7:19am Thu 23.
djthongs logged on at 7:20am Thu 23.
bdavis logged on at 12:40pm Thu 23.
eps logged on at 4:19pm Thu 23.
pfalstad logged on at 3:39am Fri 24.
pfalstad logged on at 3:42am Fri 24.

```

If you have a `` `.friends'`` file in your home directory, a convenient
way to make zsh watch for all your friends is to do this:

```
% watch=( $(< ~/.friends) )
% echo $watch
subbarao maruchck root sukthnkr ...

```

If `watch` is set to `all`, then all users logging in or out
will be reported.

* * *

Go to the [first](intro_1.html), [previous](intro_14.html), [next](intro_16.html), [last](intro_21.html) section, [table of contents](intro_toc.html).

