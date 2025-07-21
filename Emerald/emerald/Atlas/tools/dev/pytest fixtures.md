---
related:
  - "[[Testing Your Django App With Pytest]]"
part of:
  - "[[pytest]]"
---
#note/pytest

**notes on pytest fixtures.**
___
### lifetime ⏲

When using `function` fixtures, any model created using **factories** doesn't persists between test runs.

This would mean that each entity created in a `function` fixture is local to the currently running test and doesn't have any impact on other test runs.

Note 📔: this could be limited to [[django]]