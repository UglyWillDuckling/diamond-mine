#howto/bash #howto/posix

- [x] remind me (@[[2025-06-12]])
- [x] reminder [[how to show all vars in bash(posix)]] (@[[2025-06-27]])
___

Use [[set command|set]] to examine the current values:

```sh
set
DISPLAY=:0.0
HOME=/home/barnett
IFS=

LOGNAME=barnett
PATH=/home/barnett/bin:/usr/bin:/bin:/usr/local/bin
PS1=$
PS2=>
PWD=/home/barnett
SHELL=/bin/bash
TERM=xterm-256color
USER=barnett
```

Notice the **alphabetical** **order** of the variables, and the equals character between the variable and the value. 

The "set" command is one way to determine which shell you may be currently using (You can always execute a different shell). Also note the assortment of variables already defined. These are environment variables.

___
see [[POSIX Shell Tutorial]] for more