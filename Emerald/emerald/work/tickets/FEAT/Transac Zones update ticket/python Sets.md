### add

In Python, you can add an element to a set using the `add()` method or the `update()` method.

**Using the `add()` method:**
```python
my_set = {1, 2, 3}
my_set.add(4)
print(my_set)  # {1, 2, 3, 4}
```
The `add()` method adds a single element to the set.

**Using the `update()` method:**
```python
my_set = {1, 2, 3}
my_set.update([4, 5, 6])
print(my_set)  # {1, 2, 3, 4, 5, 6}
```
The `update()` method adds multiple elements to the set. You can pass an iterable (like a list or another set) to the `update()` method.

Note that if you try to add a duplicate element to a set, it will be ignored, since sets only store unique elements.

### Removing Elements from a Set

In Python, you can remove an element from a set using the `remove()` method or the `discard()` method.

**Using the `remove()` method:**
```python
my_set = {1, 2, 3, 4}
my_set.remove(4)
print(my_set)  # {1, 2, 3}
```
The `remove()` method removes a single element from the set. If the element is not present in the set, it raises a `KeyError`.

**Using the `discard()` method:**
```python
my_set = {1, 2, 3, 4}
my_set.discard(4)
print(my_set)  # {1, 2, 3}
```

The `discard()` method also removes a single element from the set. However, if the element is not present in the set, it does not raise a `KeyError`.

**Using the `-=` operator:**
```python
my_set = {1, 2, 3, 4}
my_set -= {4}
print(my_set)  # {1, 2, 3}
```
The `-=` operator is used to remove multiple elements from the set. You can pass an iterable (like a list or another set) to the `-=` operator.
