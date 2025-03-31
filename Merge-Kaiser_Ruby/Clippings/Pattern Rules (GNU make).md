---
source: https://www.gnu.org/software/make/manual/html_node/Pattern-Rules.html
author: 
published: 
created: 2025-03-16
tags:
  - doc/make
---
Next: [Defining Last-Resort Default Rules](https://www.gnu.org/software/make/manual/html_node/Last-Resort.html), Previous: [Chains of Implicit Rules](https://www.gnu.org/software/make/manual/html_node/Chained-Rules.html), Up: [Using Implicit Rules](https://www.gnu.org/software/make/manual/html_node/Implicit-Rules.html)   \[[Contents](https://www.gnu.org/software/make/manual/html_node/index.html#SEC_Contents "Table of contents")\]\[[Index](https://www.gnu.org/software/make/manual/html_node/Concept-Index.html "Index")\]

---

### 10.5 Defining and Redefining Pattern Rules

You define an implicit rule by writing a *pattern rule*. A pattern rule looks like an ordinary rule, except that its target contains the character ‘%’ (exactly one of them). The target is considered a pattern for matching file names; the ‘%’ can match any nonempty substring, while other characters match only themselves. The prerequisites likewise use ‘%’ to show how their names relate to the target name.

Thus, a pattern rule ‘%.o : %.c’ says how to make any file stem.o from another file stem.c.

Note that expansion using ‘%’ in pattern rules occurs **after** any variable or function expansions, which take place when the makefile is read. See [How to Use Variables](https://www.gnu.org/software/make/manual/html_node/Using-Variables.html), and [Functions for Transforming Text](https://www.gnu.org/software/make/manual/html_node/Functions.html).

- [Introduction to Pattern Rules](https://www.gnu.org/software/make/manual/html_node/Pattern-Intro.html)
- [Pattern Rule Examples](https://www.gnu.org/software/make/manual/html_node/Pattern-Examples.html)
- [Automatic Variables](https://www.gnu.org/software/make/manual/html_node/Automatic-Variables.html)
- [How Patterns Match](https://www.gnu.org/software/make/manual/html_node/Pattern-Match.html)
- [Match-Anything Pattern Rules](https://www.gnu.org/software/make/manual/html_node/Match_002dAnything-Rules.html)
- [Canceling Implicit Rules](https://www.gnu.org/software/make/manual/html_node/Canceling-Rules.html)