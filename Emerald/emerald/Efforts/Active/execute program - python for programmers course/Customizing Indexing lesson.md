---
tags:
  - course-lesson
part of:
  - "[[execute program - python for programmers course]]"
previous: "[[Configurable Decorators lesson]]"
---
Sometimes we want our own classes to work with the indexing operators, like some_obj[some_key] = some_value. Python lets us customize indexing behavior via four dunder methods:

- When we access some_object[key], Python calls .`__getitem__`(key)
- When we set some_object[key] = value, Python calls .`__setitem__`(key, value)
- When we ask key in some_object, Python calls .`_contains__`(key)
- When we del some_object[key], Python calls .`__delitem__`(key)

In this lesson, we'll implement these four methods for our own dict-like data structure, SlowDict. To query or update a `SlowDict`, we'll need to scan through the entire list. That's very inefficient, which is why it's called `SlowDict`!

```python
class SlowDict:
  def __init__(self):
    self.items = []

  def __getitem__(self, key):
    for (existing_key, value) in self.items:
      if key == existing_key:
        return value

  def __setitem__(self, key, value):
    self.items.append((key, value))

  def __contains__(self, key):
    keys = [key for (key, value) in self.items]
    return key in keys

  def __delitem__(self, key):
    if key not in self:
      raise KeyError(key)
    self.items = [(k, v) for (k, v) in self.items if k != key]
```

SlowDict works in those simple cases. **However, the current version contains two subtle bugs. See if you can spot them before we continue.**
