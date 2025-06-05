---
tags:
  - course-item
type: course-item
part of:
  - "[[execute program - python for programmers course]]"
---

So far, we've seen strings in 'single quotes' and "double quotes". Python also supports triple-quoted strings, like """hello""". These have two benefits. First, they can include both single quote and double quote characters without escaping them like \' and \".

```python
print("""we can use both " and '""")
# we can use both " and '
```

The second benefit is that triple-quoted strings can contain newline characters, which let us write multi-line strings easily. In the next example, the escape code \n in the output indicates a newline character.

```python
s = """a
multi-line
string"""
s
# 'a\nmulti-line\nstring'
```


## docstrings

The examples above show some good uses for triple-quoted strings. But their most common use is in "docstrings", a type of documentation in Python. In Python, we commonly document functions, classes, and modules by putting a string at the top of them.

There's a good reason for this: putting the documentation inside of a string makes it available at runtime. When the first expression inside of a Python function is a string, that string is available in the function's .__doc__ attribute. (And likewise for classes and modules.)

```python
import math

def hypotenuse(side1, side2):
  """
  Calculate the length of a triangle's hypotenuse.
  Works with ints or floats.
  """
  return math.sqrt(side1**2 + side2**2)

hypotenuse.__doc__
# "\n  Calculate the length of a triangle's hypotenuse.\n  Works with ints or floats.\n  "
```


When we're at a REPL (a Python shell or console), we can call help on any value. That shows us the value's docstring.

```python
help(len)
Help on built-in function len in module builtins:

len(obj, /)
    Return the number of items in a container.
```

___

```python
def balanced_list(the_list):
  return len(the_list) == 0 or the_list[0] == the_list[-1]
```

next: [[Chained Inequalities]]