---
author:
  - "[[Stack Overflow]]"
created: 2025-03-04
published: 2013-02-06
source: https://stackoverflow.com/questions/14737429/how-to-disable-the-timeout-on-the-vim-leader-key
tags:
  - howto/vim/leader
about:
  - "[[vim]]"
  - "[[ttimeout]]"
---
From `:help ttimeout`:

```
'timeout', 'to', 'notimeout', 'noto'
boolean (default on)
global
                               
'ttimeout', 'nottimeout'                                               
boolean (default off)
global
{not in Vi}
```

These two options together determine the behavior when part of a mapped key sequence or keyboard code has been received:

| timeout | ttimeout | action |
| --- | --- | --- |
| off | off | do not time out |
| on | on or off | time out on :mappings and key codes |
| off | on | time out on key codes |

If both options are off, Vim will wait until either the complete mapping or key sequence has been received, or it is clear that there is no mapping or key sequence for the received characters. For example: if you have mapped "vl" and Vim has received 'v', the next character is needed to see if the 'v' is followed by an 'l'. When one of the options is on, Vim will wait for about 1 second for the next character to arrive. After that the already received characters are interpreted as single characters. The waiting time can be changed with the 'timeoutlen' option.

On slow terminals or very busy systems timing out may cause malfunctioning cursor keys. If both options are off, Vim waits forever after an entered if there are key codes that start with . You will have to type twice. If you do not have problems with key codes, but would like to have :mapped key sequences not timing out in 1 second, set the 'ttimeout' option and reset the 'timeout' option.

NOTE: 'ttimeout' is reset when 'compatible' is set.

From the comments:

> Basically, ESC is a "leader" for arrows and other control sequences, so you might have to press ESC twice instead of once. – @Anton Kovalenko
> 
> Running `set notimeout` and `set ttimeout` solved my problems. – @nightcracker