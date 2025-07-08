## notes 🗒

- `slicing` always creates a new list
- When replacing, the replacement **doesn't need to be the same size as the section**
## item

We often want just a part of a list, like "only the first 4 elements", or "only elements 7 through 11", or "only the last 6 elements". Python's list slicing operator lets us do all of those and more.

`some_list[2:]` gives us a list containing every element whose index is greater than or equal to 2.

```python
visitors = ["Amir", "Betty", "Cindy", "Dalili"]
visitors[2:]
Result:
['Cindy', 'Dalili']
```

If we put a number after the :, we get every element up to, but not including, that index. :2 gives us indexes 0 and 1.

```python
visitors = ["Amir", "Betty", "Cindy", "Dalili"]
visitors[:2]
Result:
['Amir', 'Betty']
```

We can also specify the start and end index together. some_list[1:3] starts at some_list[1] and goes to `some_list[3]`, but doesn't include `some_list[3]`. That is, it only includes indexes 1 and 2.

>
visitors = ["Amir", "Betty", "Cindy", "Dalili"]
visitors[1:3]
Result:
['Betty', 'Cindy']

Slicing is useful when combined with negative indexing. some_list[:-2] returns all list elements except for the last 2. We can think of it as "all elements up to, but not including, the last 2 elements".

>
winning_ids = [10, 5, 3, 2, 1]
winning_ids[:-2]
Result:
[10, 5, 3]

**If we slice outside of a list's bounds, we get an empty list.**

>
some_list = [1, 2, 3]
some_list[5:]
Result:
[]

**If the sliced range only partially overlaps with the actual list indexes, we get the part of the list that falls within the range.**

some_list[2:] gives us a list containing every element whose index is greater than or equal to 2.

___

If the sliced range only partially overlaps with the actual list indexes, we get the part of the list that falls within the range.

```python
some_list = [1, 2, 3]
some_list[2:20]
```

```python
some_list = [1, 2, 3]
some_list[2:20]
[3]
```

___

We often use slices to split lists into two parts. For example, imagine that we're writing a "worker process" that handles tasks stored in a list. A worker can handle up to 3 tasks at a time, so we want to remove up to 3 from our list at once. We need the list of those tasks, so we can assign them to the worker. But we also need to remove those tasks from the list of remaining tasks, since they're now assigned.

```python
remaining_task_ids = [10, 20, 30, 40, 50, 60]

# Take a bundle of tasks to be assigned to this worker.
task_capacity = 3
tasks_to_assign = remaining_task_ids[:task_capacity]

# Remove these tasks from the remaining_task_id list.
remaining_task_ids = remaining_task_ids[task_capacity:]
```

That example uses a common pattern for slicing a list into two parts at a certain index:

```python
some_list[:index] gives us everything before some_list[index].
some_list[index:] gives us everything starting at some_list[index].
```

```python
numbers = [0, 1, 2, 3, 4]
chunks = []
chunk_size = 2

while len(numbers) > 0:
  chunks.append(numbers[:chunk_size])
  numbers = numbers[chunk_size:]
chunks
[[0, 1], [2, 3], [4]]
```


**copy a list**

```python
original_list = [1, 2]
new_list = original_list[:]

new_list.append(3)
```


## slicing mutable elements

What if we slice a list that contains mutable elements, like lists or dictionaries? The elements themselves aren't copied. The original list and the new sliced list both reference the same element values, stored at the same places in memory.

```python
original_list = [{"name": "Amir"}, {"name": "Betty"}]
copy = original_list[:]

original_list[0]["age"] = 36
copy[0]
Result:
{'name': 'Amir', 'age': 36}
```

> [!tip] shallow copy
> slicing a list gives us a new list, independent from the original list. But it doesn't copy the individual list elements! In other words, slicing can make a "shallow copy" of the list, but it can't make a "deep copy" of the list and all of its elements.

## replacing values

When we assign to a slice, we replace part of a list with another list. some_list[1:3] = another_list replaces all values from some_list[1:3] with the values of another_list That is, it replaces indexes 1 and 2.

```python
some_list = [1, 2, 3, 4, 5]
some_list[1:3] = [6, 7]
some_list
```

> [!tip] replacement size
When replacing in this way, the replacement doesn't need to be the same size as the section that it's replacing. For example, we can replace a 2-element section of a list with 5 new elements. The resulting list will be 3 elements longer than the original.

```python
some_list = ["a", "b", "c", "d", "e"]
some_list[1:3] = ["x", "y", "z"]
some_list
['a', 'x', 'y', 'z', 'd', 'e']
```

### with empty slices

`light: works with empty slices too`

For example, some_list[2:2] = another_list inserts another_list into some_list starting at index 2. The slice 2:2 means "every index that is at least 2, but is also less than 2.

```python
some_list = [1, 2, 3, 4, 5]
some_list[2:2] = [600, 700]

[1, 2, 600, 700, 3, 4, 5]
```
