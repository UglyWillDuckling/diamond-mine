---
tags:
  - course-item
type: course-item
part of:
  - "[[execute program - python for programmers course]]"
---
In mathematics, we'd say that 3 < 4 < 5 is true. However, that expression is false in most programming languages.

`interest:weird `
In Python, **3 < 4 < 5** is equivalent to (3 < 4) and (4 < 5). This is very unusual among programming languages!
`interest:weird `

This works for all infix comparison operators, not just <. (Infix operators are operators that go between two values.) We can also chain <=, >, >=, `'==,` and != in the same way.

```python
# (1 != 2) and (2 == 2.0)
1 != 2 == 2.0
True
```


## code problem

We want to move into an apartment with a very specific size. The apartment_size_ok function decides whether an apartment's size meets our criteria. The criteria are:

The size must be at least "the ideal size minus 5 square meters".
The size must be at most "the ideal size plus 10 square meters".
You don't need to use and here! This problem can be solved with a single chained inequality expression.

```python
def apartment_size_ok(ideal_size, size):
  """
  """
  return ideal_size - 5 <= size <= ideal_size + 10

assert apartment_size_ok(50, 70) == False
assert apartment_size_ok(50, 60) == True
assert apartment_size_ok(60, 50) == False
assert apartment_size_ok(60, 55) == True
```


next: [[f-strings course item]]