---
tags:
  - tool/python
  - language-feature
status:
  - created
---
In the Python for Programmers course, we saw that len works on different types, like lists, dicts, and strings. But that's not because len has special knowledge of lists, dicts, or strings. Instead, when we call len(some_value), Python actually calls some_value.__len__().

```python
len(["a", "b", "c"])
3
["a", "b", "c", "d"].__len__()
4
```

That might seem unnecessarily complex at first, but it has an important purpose. By defining our own .__len__ methods, we can customize how len works with our objects.