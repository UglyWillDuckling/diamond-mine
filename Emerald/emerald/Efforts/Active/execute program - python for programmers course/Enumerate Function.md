---
part of:
  - "[[execute program - python for programmers course]]"
---
#course-lesson 
about:: [[enumerate - python]]
___

Python doesn't have the common C-style for loop: `for (i = 0; i < max; i++)`. 

Instead, it only has a "for-each" loop: for value in values. That's great, except when we need to know both the value and its index in the list.
___
**The enumerate built-in solves that problem.** 

It takes an iterable like ["a", "b"] and **returns a list of tuples with the indexes and values, like [(0, 'a'), (1, 'b')]**

```python
my_list = ["a", "b"]
list(enumerate(my_list))
[(0, 'a'), (1, 'b')]
```

In the next example, we use enumerate to find the index of 'a' in our list.

```python
data = ["c", "b", "a"]
found_index = None
for index, value in enumerate(data):
  if value == "a":
    found_index = index
found_index
2
```

## other data types

**enumerate works on any iterable, not just lists.** For example, we can use it with **strings**. Normally, indexing into a string gives us a one-character string containing the character at that index.

Using enumerate on a string gives us a **list of tuples** holding the index and the character, similar to what we saw above for lists.[^1] [^2] 

```python
list(enumerate("cat"))
[(0, 'c'), (1, 'a'), (2, 't')]
```

```python
list(enumerate("do"))
[(0, 'd'), (1, 'o')]
```

### treasure map

```python
treasure_map = [
  "........",
  "....#..#",
  "#....#..",
  "....X.#.",
  ".#......",
  "......#.",
  "#.......",
  "........",
]

for (row_coordinate, row) in enumerate(treasure_map):
  for (col_coordinate, c) in enumerate(row):
    # X marks the spot!
    if c == "X":
      location = (row_coordinate, col_coordinate)

location

(3, 4)
```

### dicts

We can also enumerate a dictionary's keys. That gives us the keys in their original insertion order. As usual, each one is packed into a tuple along with its index.

```python
cat_ages = {
  "Ms. Fluff": 4,
  "Keanu": 2,
}
list(enumerate(cat_ages))

[(0, 'Ms. Fluff'), (1, 'Keanu')]
```

## excercise

```python
users = [
  {"name": "Betty"},
  {"name": "Cindy"},
  {"name": "Amir"},
  {"name": "Gabriel"},
  {"name": "Hana"},
]

def user_index(users, name):
  for (i, user) in enumerate(users):
    if user['name'] == name:
      return i

  return None
```


next:: [[Dictionary Methods]]





[^1]: [[Python Tuples lesson]]
[^2]: [[tuple]]