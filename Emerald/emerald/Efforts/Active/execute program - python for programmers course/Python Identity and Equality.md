---
part of:
  - "[[execute program - python for programmers course]]"
---
Python goes to great lengths to give us clear, intuitive equality behavior. For example, two lists are equal to each other if the values at each index are equal.

```python
[1] + [2] == [1, 2]
True
```

Dictionaries are equal when their keys and values match. We can compare them with ``==`, rather than iterating through their items and comparing them manually.

```python
{"name": "Amir"} == {"name": "Am" + "ir"}
True
```

Those examples show the most common kind of equality: value equality. But values can also be equal in a second sense: they can have the same identity. "Identical" means "two variables refer to the same value, located at the same place in memory". We use the is operator to decide whether two values are identical.

## identity

Here are three different cases to explore how identity works.

### Case 1: we build two different lists that happen to hold equal values. The lists are equal to each other, but they're not identical! They're two distinct lists.

```python
list_1 = [1, 2]
list_2 = [1, 2]

print(f"list == list :: {list_1 == list_2}")
print(f"list IS list :: {list_1 is list_2}")
```
