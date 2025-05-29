---
part of:
  - "[[execute program - python for programmers course]]"
tags:
  - course-item
---
	We saw lists in an earlier lesson. They're ordered collections of values, with integer indexes starting at 0. They can contain mixed types (for example, both strings and numbers).

Python also supports tuples. Like lists, they're ordered collections, start at index 0, and can contain mixed types. In this lesson, we'll explore how tuples work, then discuss why Python supports both lists and tuples.

Literal tuples are defined with (parens) instead of [square brackets].

```python
hand_equipment = ("sword", "shield")
hand_equipment[0]
```

We normally put parentheses around the tuple for clarity, but in some situations the parentheses are optional. However, the commas are mandatory: the comma is what makes it a tuple!

```python
x = 3
y = 2
z = 4
treasure_coordinates = x, y, z
treasure_coordinates[1]
```

Like lists, tuples support the in operator, which returns True if the tuple contains the value.

```python
my_data = (1, 10, 100)
100 in my_data
True
```

___

> [!warning] Tuples are immutable

**Unlike lists, tuples are immutable.** We can change lists after they're created, but we can't change a tuple. If we try to reassign an element of a tuple, like my_tuple[1] = new_value, we'll get a TypeError.


Because tuples are immutable, they don't have equivalents of the list methods that modify values, like .pop or .append. Trying to call those methods raises an exception, just like any other situation where we try to call a method that doesn't exist.

```python
visitors = ("Cindy", "Dalili")
visitors.append("Amir")
visitors
Result:
AttributeError: 'tuple' object has no attribute 'append'
```

Take a look at the specific error message there. It may be surprising: why is it an `AttributeError` instead of something like `NoMethodError`? The answer is that, at a deep level, Python methods are the same thing as attributes (which are called "instance variables" or "properties" in other languages).

Although we can't modify tuples, **we can build new tuples** out of existing ones. tuple_1 + tuple_2 returns a new tuple with all elements of tuple_1 followed by all elements of tuple_2.

```python
(1, 2) + (3, 4)
Result:
(1, 2, 3, 4)
```

⚠ If we try to add a tuple and a list, we get a TypeError exception.

```python
(1, 2) + [3, 4]
TypeError: can only concatenate tuple (not "list") to tuple
```

If we really want to combine a tuple with a list, we can convert the tuple into a list, or convert the list into a tuple. Either way works, depending on what data type we want at the end.

```python
some_list = [3, 4]
(1, 2) + tuple(some_list)
Result:
(1, 2, 3, 4)
```

___

😕 **There's one important syntax oddity to note for tuples.** While a trailing comma is optional for multi-element tuples, a single-element tuple must have a trailing comma.

```python
tiny_tuple = (12, )
len(tiny_tuple)
Result: 1
```

The comma is necessary because the expression (12) evaluates to the number 12!