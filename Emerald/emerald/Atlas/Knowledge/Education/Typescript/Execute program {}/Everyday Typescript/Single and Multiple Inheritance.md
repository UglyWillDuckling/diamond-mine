In JavaScript and TypeScript, classes can only extend one other class. This is called "single inheritance", in contrast to the "multiple inheritance" allowed by some other languages. In **C++ or Python**, a class can extend many parent classes simultaneously. This makes those languages flexible, but it can also lead to confusing code.

---

- typescript **doesn't** support multiple inheritance
	- it does support multiple type implementation using the `implement` keyword and the `interface` construct
- the multiple [[interfaces]]'s need to have matching types
