---
author:
  - "[[nkmk]]"
created: 2025-06-04
published: 2020-08-24
source: https://note.nkmk.me/en/python-for-usage/#pythons-for-is-similar-to-foreach-in-other-programming-languages
tags:
  - howto/python
---
## Python for Loop (With range, enumerate, zip)

Modified: | Tags: [Python](https://note.nkmk.me/en/python/)

This article provides an overview of `for` loops in Python, including basic syntax and examples of using functions like `range()`, `enumerate()`, `zip()`, and more within `for` loops.

Python also has a `while` statement that repeats the process as long as the condition is `True`.

- [Python while loop (infinite loop, break, continue, and more)](https://note.nkmk.me/en/python-while-usage/)

## Basic syntax of for loops in Python: for... in...:

In many programming languages like C, the `for` loop uses a counter variable and a continuation condition:

```
for (int i = 0; i < 10; i++) {
    ...
}
```

In Python, the `for` loop doesn't require a counter variable, and you can use any name for the loop variable:

```
for variable in iterable_object:
    ...
```

This is similar to the `foreach` loop in other languages, where elements of iterable objects, such as lists, are assigned to variables in sequence.

- [Foreach loop - Wikipedia](https://en.wikipedia.org/wiki/Foreach_loop)

Here is an example:

```
l = ['Alice', 'Bob', 'Charlie']

for name in l:
    print(name)
# Alice
# Bob
# Charlie

source: for_usage.py
```

Note that blocks are expressed with indentation (usually four spaces) rather than brackets in Python.

- [Python indentation rules](https://note.nkmk.me/en/python-indentation-usage/)

### Break a for loop: break

You can break a `for` loop using `break`.

```
l = ['Alice', 'Bob', 'Charlie']

for name in l:
    if name == 'Bob':
        print('!!BREAK!!')
        break
    print(name)
# Alice
# !!BREAK!!

source: for_usage.py
```

Use an `if` statement for conditional branching.

- [Python if statements (if, elif, else)](https://note.nkmk.me/en/python-if-elif-else/)

You can skip the current iteration and proceed to the next one using `continue`.

While `break` terminates the entire `for` loop, `continue` skips the remaining code in the current iteration and moves on to the next.

```
l = ['Alice', 'Bob', 'Charlie']

for name in l:
    if name == 'Bob':
        print('!!SKIP!!')
        continue
    print(name)
# Alice
# !!SKIP!!
# Charlie

source: for_usage.py
```

### Execute code after normal termination: else

The `else` clause can be used to execute code after the `for` loop completes its normal execution.

```
l = ['Alice', 'Bob', 'Charlie']

for name in l:
    print(name)
else:
    print('!!FINISH!!')
# Alice
# Bob
# Charlie
# !!FINISH!!

source: for_usage.py
```

If the `for` loop is terminated by `break`, the code in the `else` clause is not executed.

```
for name in l:
    if name == 'Bob':
        print('!!BREAK!!')
        break
    print(name)
else:
    print('!!FINISH!!')
# Alice
# !!BREAK!!

source: for_usage.py
```

When using `continue`, the `for` loop completes normally, so the code in the `else` clause is executed.

```
for name in l:
    if name == 'Bob':
        print('!!SKIP!!')
        continue
    print(name)
else:
    print('!!FINISH!!')
# Alice
# !!SKIP!!
# Charlie
# !!FINISH!!

source: for_usage.py
```

By using `else` and `continue`, you can break out of nested loops. See the following article for details.

- [Break out of nested loops in Python](https://note.nkmk.me/en/python-break-nested-loops/)

## Extract specific elements: slicing

To extract specific elements, use slicing with the syntax `[start:stop]`, where `start` and `stop` are indices starting at `0`. Note that the `stop` index is excluded.

```
l = ['A', 'B', 'C', 'D', 'E', 'F', 'G']

for c in l[2:5]:
    print(c)
# C
# D
# E

source: for_usage.py
```

You can omit `start` and `stop`, or use `[start:stop:step]` to extract elements at every `step`. Here are examples of extracting only odd-numbered and even-numbered elements.

```
for c in l[::2]:
    print(c)
# A
# C
# E
# G

for c in l[1::2]:
    print(c)
# B
# D
# F

source: for_usage.py
```

For more details on slicing, see the following article.

- [How to slice a list, string, tuple in Python](https://note.nkmk.me/en/python-slice-usage/)

## Counter (index): range()

You can use the `range()` function to create a counter (index) for a `for` loop.

```
for i in range(3):
    print(i)
# 0
# 1
# 2

source: for_range.py
```

In Python 3, `range()` creates a `range` object, and its content is not displayed when printed with `print()`. For explanation purposes, the following example uses `list()` to convert the `range` object to a list. You don't need to convert it to a list in a `for` loop.

The range() function accepts different numbers of arguments:

- `range(stop)`: consecutive numbers `0 <= i < stop`
- `range(start, stop)`: consecutive numbers `start <= i < stop`
- `range(start, stop, step)`: integer values at every `step` in the range `start <= i < stop`
	- Specifying a negative value for `step` will result in a reverse order
```
print(list(range(6)))
# [0, 1, 2, 3, 4, 5]

print(list(range(10, 13)))
# [10, 11, 12]

print(list(range(0, 10, 3)))
# [0, 3, 6, 9]

print(list(range(10, 0, -3)))
# [10, 7, 4, 1]

source: for_range.py
```

When used in a `for` loop, it looks like the following:

```
for i in range(10, 0, -3):
    print(i)
# 10
# 7
# 4
# 1

source: for_range.py
```

See the following article for details of `range()`.

- [How to use range() in Python](https://note.nkmk.me/en/python-range-usage/)

## Elements and their indices: enumerate()

To simultaneously retrieve elements and their respective indices from an iterable object, such as a list, within a `for` loop, use the `enumerate()` function.

- [How to start enumerate() at 1 in Python](https://note.nkmk.me/en/python-enumerate-start/)
```
l = ['Alice', 'Bob', 'Charlie']

for name in l:
    print(name)
# Alice
# Bob
# Charlie

for i, name in enumerate(l):
    print(i, name)
# 0 Alice
# 1 Bob
# 2 Charlie

source: enumerate_start.py
```

You can specify a starting value for the second argument of `enumerate()`, allowing you to start from an arbitrary integer value instead of `0`.

```
for i, name in enumerate(l, 1):
    print(i, name)
# 1 Alice
# 2 Bob
# 3 Charlie

for i, name in enumerate(l, 42):
    print(i, name)
# 42 Alice
# 43 Bob
# 44 Charlie

source: enumerate_start.py
```

Unlike `range()`, `enumerate()` does not have an argument for specifying a `step` value. However, you can achieve the same effect as follows.

```
step = 3
for i, name in enumerate(l):
    print(i * step, name)
# 0 Alice
# 3 Bob
# 6 Charlie

source: enumerate_start.py
```

## Multiple lists: zip()

To retrieve elements from multiple iterable objects, such as lists, and assign them to multiple variables within a `for` loop, use the `zip()` function.

```
names = ['Alice', 'Bob', 'Charlie']
ages = [24, 50, 18]

for name, age in zip(names, ages):
    print(name, age)
# Alice 24
# Bob 50
# Charlie 18

source: zip_example.py
```

You can also combine three or more iterable objects.

```
points = [100, 85, 90]

for name, age, point in zip(names, ages, points):
    print(name, age, point)
# Alice 24 100
# Bob 50 85
# Charlie 18 90

source: zip_example.py
```

For details on how it behaves when the number of elements is different, as well as additional information, see the following article.

- [zip() in Python: Get elements from multiple lists](https://note.nkmk.me/en/python-zip-usage-for/)

As demonstrated in the example above, `zip()` allows you to retrieve elements from multiple iterable objects in sequence. If you want to obtain all possible combinations of elements from multiple iterable objects, you can use the `itertools.product()` function, which will be described later.

## Multiple lists with indices: enumerate(), zip()

To iterate through multiple lists with their indices, you can combine the `enumerate()` and `zip()` functions. When doing so, make sure to enclose the variable names for the `zip()` part in parentheses `()`.

- [Use enumerate() and zip() together in Python](https://note.nkmk.me/en/python-for-enumerate-zip/)
```
names = ['Alice', 'Bob', 'Charlie']
ages = [24, 50, 18]

for i, (name, age) in enumerate(zip(names, ages)):
    print(i, name, age)
# 0 Alice 24
# 1 Bob 50
# 2 Charlie 18

source: for_enumerate_zip.py
```

## Reverse order: reversed()

Use the `reversed()` function to iterate through elements of an iterable object, such as a list, in reverse order.

- [Reverse a list, string, tuple in Python (reverse, reversed)](https://note.nkmk.me/en/python-reverse-reversed/)
```
l = ['Alice', 'Bob', 'Charlie']

for name in reversed(l):
    print(name)
# Charlie
# Bob
# Alice

source: for_reversed.py
```

`range` objects can be reversed by either using the `reversed()` function or by specifying a negative value for `step`.

```
for i in reversed(range(3)):
    print(i)
# 2
# 1
# 0

for i in range(2, -1, -1):
    print(i)
# 2
# 1
# 0

source: for_reversed.py
```

`enumerate` objects cannot be reversed directly; you need to convert them to lists using `list()`. If you want to reverse only the iterable and not the indices, you can use `reversed()` within `enumerate()`.

```
# for i, name in reversed(enumerate(l)):
#     print(i, name)
# TypeError: 'enumerate' object is not reversible

for i, name in reversed(list(enumerate(l))):
    print(i, name)
# 2 Charlie
# 1 Bob
# 0 Alice

for i, name in enumerate(reversed(l)):
    print(i, name)
# 0 Charlie
# 1 Bob
# 2 Alice

source: for_reversed.py
```

`zip` objects cannot be reversed either. You need to convert them to lists with `list()`.

```
l2 = [24, 50, 18]

# for name, age in reversed(zip(l, l2)):
#     print(name, age)
# TypeError: 'zip' object is not reversible

for name, age in reversed(list(zip(l, l2))):
    print(name, age)
# Charlie 18
# Bob 50
# Alice 24

source: for_reversed.py
```

## Nested loops: itertools.product()

In Python, nested loops are created by adding more indentation levels to represent nested code blocks.

```
l1 = [1, 2, 3]
l2 = [10, 20, 30]

for i in l1:
    for j in l2:
        print(i, j)
# 1 10
# 1 20
# 1 30
# 2 10
# 2 20
# 2 30
# 3 10
# 3 20
# 3 30

source: break_nested_loops.py
```

You can get the same result using `itertools.product()`.

```
import itertools

l1 = [1, 2, 3]
l2 = [10, 20, 30]

for i, j in itertools.product(l1, l2):
    print(i, j)
# 1 10
# 1 20
# 1 30
# 2 10
# 2 20
# 2 30
# 3 10
# 3 20
# 3 30

source: break_nested_loops_itertools_product.py
```

It is also possible to pass three or more iterables as arguments to `itertools.product()`. See the following article for details.

- [Cartesian product of lists in Python (itertools.product)](https://note.nkmk.me/en/python-itertools-product/)

If you want to break out of a loop inside nested loops using `break`, consider using `itertools.product()` to simplify the process.

- [Break out of nested loops in Python](https://note.nkmk.me/en/python-break-nested-loops/)

## dict objects in for loop

When using a `for` loop to iterate over a `dict` object, you can access the dictionary keys.

```
d = {'key1': 1, 'key2': 2, 'key3': 3}

for k in d:
    print(k)
# key1
# key2
# key3

source: dict_keys_values_items.py
```

If you want to get values or key-value pairs, use the `values()` or `items()` methods.

```
for v in d.values():
    print(v)
# 1
# 2
# 3

source: dict_keys_values_items.py
```
```
for k, v in d.items():
    print(k, v)
# key1 1
# key2 2
# key3 3

source: dict_keys_values_items.py
```

See the following article for details.

- [Iterate through dictionary keys and values in Python](https://note.nkmk.me/en/python-dict-keys-values-items/)

## List comprehensions

List comprehensions provide a simpler way to create a new list by processing the elements of iterable objects, compared to using a `for` loop.

List comprehensions are written as follows.

```
[expression for variable_name in iterable]
```

Here are some examples along with equivalent `for` loops.

```
squares = [i**2 for i in range(5)]
print(squares)
# [0, 1, 4, 9, 16]

squares = []
for i in range(5):
    squares.append(i**2)

print(squares)
# [0, 1, 4, 9, 16]

source: list_comprehension.py
```

See the following article for details on list comprehensions.

- [List comprehensions in Python](https://note.nkmk.me/en/python-list-comprehension/)