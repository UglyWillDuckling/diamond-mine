---
source: https://vi.stackexchange.com/questions/2001/how-do-i-jump-to-the-location-of-my-last-edit
---
#vim #note #active 

`gi`
Will take the cursor to the exact point last edited and put you in insert mode, ready to continue typing. (It's also quicker to type!)

`g;` 
will go to the previously edited line

`` `. ``
will bring you to your last change.
Goes to a mark, and is a "special" mark which is automatically set to the position where the last change was made. See :help `. for some more information.

See also: [[Vim Jump to Last Change - VimTricks]]
