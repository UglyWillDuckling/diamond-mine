---
author:
  - "[[Stack Overflow]]"
published: 
created: 2025-03-17
source: https://stackoverflow.com/questions/15849119/why-does-sed-not-replace-all-occurrences
tags:
  - howto/sed
---
Asked 11 years, 11 months ago

Viewed 191k times

If I run this code in bash:

```bash
echo dog dog dos | sed -r 's:dog:log:'
```

it gives output:

```bash
log dog dos
```

How can I make it replace all occurrences of dog?

[

![Chris Seymour's user avatar](https://i.sstatic.net/qSp5N.jpg?s=64)

](https://stackoverflow.com/users/1066031/chris-seymour)

[Chris Seymour](https://stackoverflow.com/users/1066031/chris-seymour)

85.9k32 gold badges165 silver badges207 bronze badges

asked Apr 6, 2013 at 9:19

[

![Nishant George Agrwal's user avatar](https://www.gravatar.com/avatar/0f97272a09ee7a75b86fcb4222b6eead?s=64&d=identicon&r=PG)

](https://stackoverflow.com/users/1128667/nishant-george-agrwal)

1

You have to put a `g` at the end, it stands for "global":

```bash
echo dog dog dos | sed -r 's:dog:log:g'
                                     ^
```

answered Apr 6, 2013 at 9:22

[

![alestanis's user avatar](https://www.gravatar.com/avatar/75dc401a661844cf2217080b85aaeac0?s=64&d=identicon&r=PG)

](https://stackoverflow.com/users/1225541/alestanis)

2

Start asking to get answers

Find the answer to your question by asking.

[Ask question](https://stackoverflow.com/questions/ask)

Explore related questions

See similar questions with these tags.