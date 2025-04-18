---
source: https://vi.stackexchange.com/questions/2001/how-do-i-jump-to-the-location-of-my-last-edit
related:
  - "[[Vim Jump to Last Change - VimTricks]]"
  - "[[vim - jump to last insert with `.]]"
about:
  - "[[vim]]"
tags:
  - howto
  - howto/git
---
- [x] remind me (@[[2025-01-24]] 10:05)
- [x] 1 week remind me (@[[2025-02-03]] 12:42)
- [x] monthly (@[[2025-02-25]] 17:04)
- [x] second month (@[[2025-03-24]])
- [ ] final reminder (@[[2025-04-29]])

`gi`
Will take the cursor to the **exact point last edited** and put you in **insert mode**, ready to continue typing. (It's also quicker to type!)

`g;` 
will go to the **previously edited line**
%% It actually jumps through the change list, this is done with g, and g;  see [[vim - jump through the change list]]%%

`` `.
will bring you to your last change.
Goes to a mark, and is a "special" mark which is automatically set to the position where the last change was made. See :help `. for some more information.

___
See also: [[Vim Jump to Last Change - VimTricks]]