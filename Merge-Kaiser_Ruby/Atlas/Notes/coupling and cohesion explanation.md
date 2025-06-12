---
about:
  - "[[Coupling]]"
  - "[[cohesion]]"
---
from:: [[Growing object-oriented software guided by tests (2010)]]
___

[[Coupling]] and [[cohesion]] are metrics that (roughly) describe how easy it will be to change the behavior of some code. They were described by [[Larry Constantine]] in [Yourdon79].

Elements are **coupled** if a change in one forces a change in the other. For example, if two classes inherit from a common parent, then a change in one class might require a change in the other. Think of a combo audio system: It’s tightly coupled because if we want to change from analog to digital radio, we must rebuild the whole system. If we assemble a system from separate parts, it would have **low coupling** and we could just swap out the receiver. “Loosely” coupled features (i.e., those with low coupling) are easier to maintain.

An element’s **cohesion** is a measure of whether its responsibilities form a meaningful unit. For example, a class that parses both dates and URLs is not coherent, because they’re unrelated concepts. Think of a machine that washes both clothes and dishes—it’s unlikely to do both well.
At the other extreme, a class that parses only the punctuation in a URL is unlikely to be coherent, because it doesn’t represent a whole concept. To get anything done, the programmer will have to find other parsers for protocol, host, resource, and so on. Features with “high” coherence are easier to maintain.