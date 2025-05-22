---
part of:
  - "[[execute program - python course]]"
next: "[[Python list basics]]"
---
#course-item

times we want to "assert" a fact at runtime: we want to ensure that it's true, and raise an exception if it's false. 
We can write a function to do that for us.

```python
def simple_assert(value):
  if not value:
    message = str(value) + " was False"
    raise AssertionError(message)
```

```python
simple_assert(3 == 4)

AssertionError: False was false
```

Fortunately, we don't have to write that function because Python has an assert statement that does the same thing. assert expr raises an **AssertionError** [^1] if the expression `expr` is false.

```python
x = 1
assert x > 2
x + 1

Assertion Error: Assertion Failed
```

___
Assertions are ubiquitous in **unit tests** and other kinds of automated tests. To test a function, we need to compare its actual output against what we expected, then raise an exception if it didn't match.

```python
def add(x, y):
  return x + y

assert add(1, 2) == 3
assert add(-4, 5) == 1
```

Assertions can also show up in production code to enforce "**invariants**" [^2]: things that must be true for a piece of code to work properly. For example, a function that requires a non-empty list might assert that the list is non-empty. That way, we find out immediately if we accidentally pass an empty list.

```python
def first(the_list):
  assert len(the_list) > 0
  return the_list[0]
```

```python
first([])
Assertion Error
```

Python allows a custom message in the assert statement, which can provide details that might help when debugging the error.

```python
def first(the_list):
  assert len(the_list) > 0, "Can't get first element of empty list"
  return the_list[0]
###
first([])
AssertionError: Can't get first element of empty list
```

___
next:: [[Python list basics]]

[^1]: [[Assertion Error - Python]]
[^2] [[invariant]]