---
part of:
  - "[[execute program - python course]]"
---
#course-item 

Python's lists are what other languages call "arrays": they're mutable sequences of values, with integer indexes starting at zero.

### hello

Lists can contain mixed types. For example, we can mix numbers and strings.

```python
user_ids = [18, "72fa", 99]
user_ids
[18, '72fa', 99]
```

In a previous lesson, we saw that `len`(some_string) gives us the length of a string. That same len function also works on lists, as well as most other types that have lengths.

```python
len(["a", "b", "c", "d"])
4
```

___

Lists are `mutable`, which means that we can change them after they're created.

```python
user_ids = [18, 37, 99]
user_ids[1] = "72fa"
###
user_ids: [18, '72fa', 99]
```


**However, we can only assign to indexes that already exist. If we assign to an index that's not in the list, that's an IndexError.**

```python
visitor_log = ["Amir", "Betty", "Cindy"]
visitor_log[3] = "Dalili"
#
visitor_log
IndexError: list assignment index out of range
```

Python's indexing strictness also applies to accessing elements: when we access an index that doesn't exist, Python raises an exception.

```python
["gasoline", "kerosene", "coal"][3]
#
IndexError: list index out of range
```

___

We can join two lists together with +, like we did with strings in an earlier lesson.

```python
my_list = ["A", "B"]
my_list + [1, 2]
#
['A', 'B', 1, 2]
```


```python
alphabet_mnemonic = [
  "apple",
  "ball",
  "cat",
  "dog",
  "elephant"
]
#
len(alphabet_mnemonic): 5
```

next:: [[List Methods]]