#course-item


We can define functions with the def keyword. Note the : after the argument list!

```python
def double(x):
  return 2 * x
```

When a function has no explicit return value, it returns None, which is Python's null value. Another lesson will cover None in more detail. To avoid this, remember to use the **return** keyword!

___

Python functions are "first-class values", which means that we can use them in the same way that we use any other value, like 4 or [1, 2, 3].

All Python values have attributes that we can inspect. Even functions have attributes, like .__name__ for example. By default, this is the same name we gave the function, so the function double has the name 'double'.

Because functions are first-class values, they can be passed as arguments. In the next few examples, we write an apply_twice function that takes any function f, then does f(f(x)).

```python
def apply_twice(f, value):
  return f(f(value))
```

```python
def add1(x):
  return x + 1

apply_twice(add1, 3)
# 5
```

```python
def append_s(some_string):
  return some_string + "s"

apply_twice(append_s, "happine")
# happiness
```

Finally, a note on terminology. Strictly speaking, functions accept "parameters", but we pass "arguments" when calling them. However, in Python, the word "argument" is normally used for both ideas: functions accept arguments, and we pass arguments to functions. **We'll follow that convention in this course, using the term "argument" for both ideas.**

next:: [[Assertions in Python]]