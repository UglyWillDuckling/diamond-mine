---
type: course-lesson
part of:
  - "[[execute program - python for programmers course]]"
tags:
  - course-lesson
---

### sum

```python
sum([1, 2, 3], start=4)
10
sum([], 6)
6
```

**summing arrays**

```python
sum([[1, 2], [3, 4], [5, 6]], start=[])
```

> [!error] you can't sum strings

```python
sum(["a", "b"], "")
Result:
TypeError: sum() can't sum strings [use ''.join(seq) instead]
```

## min / max

```python
data = [3, 5, 9, 7, 2]
(min(data), max(data))
(2,9)
```

min and max are both flexible with their arguments. We can pass a single iterable, as shown above. Or we can pass individual values as separate arguments. In that case, we get the smallest (or largest) of the argumen

```python
# Passing individual arguments to `min` and `max`.
(min(5, 2, 7), max(3, 8, 10))
(2,10)
```

==works with strings==
### working with strings
- lexicographic order

```python
min("sword", "shield", "potion")
"potion"
```

## sorted

The `sorted` built-in takes any iterable, sorts it, and returns the sorted values as a list. Unlike .sort, **sorted doesn't change the original iterable.**

```python
data = [3, 2, 1, 4]
sorted_data = sorted(data)
(data[0], sorted_data[0])
(3,1)
```

**Strings** are iterable, so we can pass them to sorted. We get back a list of letters sorted from a to z. sorted always returns a list, regardless of the iterable we pass it.

```python
my_word = "cat"
sorted_letters = sorted(my_word)
sorted_letters
Result:
['a', 'c', 't']
```

Like .sort, sorted takes an optional **reverse** keyword argument. This flips the usual sorting order. For example, numbers are normally sorted from smallest to largest.

```python
data = [2, 1, 3]
sorted_data = sorted(data, reverse=True)
sorted_data
[3,2,1]
```

### key argument

sorted also takes an optional key argument. ==The key must be a function==, which sorted calls on each iterable value. Then it sorts the values according to the function's return values. 

```python
cats = [
  {
    "name": "Wilford",
    "age": 17
  }, {
    "name": "Keanu",
    "age": 2
  }, {
    "name": "Ms. Fluff",
    "age": 4
  }
]
sorted_by_age = sorted(cats, key=lambda cat: cat["age"])
sorted_by_age[0]["name"]
"Keanu"
```

