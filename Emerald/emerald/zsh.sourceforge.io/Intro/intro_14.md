Go to the [first](intro_1.html), [previous](intro_13.html), [next](intro_15.html), [last](intro_21.html) section, [table of contents](intro_toc.html).

* * *

# [Prompting](intro_toc.html\#SEC14)

The default prompt for zsh is:

```
phoenix% echo $PROMPT
%m%#

```

The `%m` stands for the short form of the current hostname, and the
`%#` stands for a `%` or a `#`, depending on whether the
shell is running as root or not. zsh supports many other control
sequences in the `PROMPT` variable.

```
% PROMPT='%/> '
/u/pfalstad/etc/TeX/zsh>

% PROMPT='%~> '
~/etc/TeX/zsh>

% PROMPT='%h %~> '
6 ~/etc/TeX/zsh>

```

`%h` represents the number of current history event.

```
% PROMPT='%h %~ %M> '
10 ~/etc/TeX/zsh apple-gunkies.gnu.ai.mit.edu>

% PROMPT='%h %~ %m> '
11 ~/etc/TeX/zsh apple-gunkies>

% PROMPT='%h %t> '
12 6:11am>

% PROMPT='%n %w tty%l>'
pfalstad Fri 24 ttyp0>

```

Also available is the `RPROMPT` parameter. If this is set, the
shell puts a prompt on the _right_ side of the screen.

```
% RPROMPT='%t'
%                                                      6:14am

% RPROMPT='%~'
%                                               ~/etc/TeX/zsh

% PROMPT='%l %T %m[%h] ' RPROMPT=' %~'
p0 6:15 phoenix[5]                              ~/etc/TeX/zsh

```

These special escape sequences can also be used with the `-P`
option to `print`:

```
% print -P %h tty%l
15 ttyp1

```

The `POSTEDIT` parameter is printed whenever the editor exits.
This can be useful for termcap tricks. To highlight the prompt and
command line while leaving command output unhighlighted, try
this:

```
% POSTEDIT=`echotc se`
% PROMPT='%S%% '

```

* * *

Go to the [first](intro_1.html), [previous](intro_13.html), [next](intro_15.html), [last](intro_21.html) section, [table of contents](intro_toc.html).

