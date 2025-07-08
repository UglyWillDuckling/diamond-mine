---
tags:
  - course-lesson
related:
  - "[[List Slicing lesson]]"
---
In an earlier lesson, we saw list slicing, like some_list[1:3]. This basic slice syntax gives us a new list from the start index up to (but not including) the end index.

>
letters = ["a", "b", "c", "d", "e"]
letters[1:3]
Result:
['b', 'c']
Slices also support a third argument, the step amount. Python calls slices with a step "extended slices".

The step tells us how far to move between each slice element. For example, some_list[0:4:2] gives us the elements with even-numbered indexes between 0 and 4 (not including 4). In this case, that means indexes 0 and 2.

>
visitors = ["Amir", "Betty", "Cindy", "Dalili"]
visitors[0:4:2]
Result:
['Amir', 'Cindy']


All of the slice arguments are optional. In the example above, the start and end indexes covered the entire list. We can get the same result by omitting the start and end indexes.

>
visitors = ["Amir", "Betty", "Cindy", "Dalili"]
visitors[::2]
Result:
['Amir', 'Cindy']

The step argument is 2, so we get [visitors[0], visitors[2]]. If we start at 1 instead, we get [visitors[1], visitors[3]].

>
visitors = ["Amir", "Betty", "Cindy", "Dalili"]
visitors[1:4:2]
Result:
['Betty', 'Dalili']

The middle argument specifies the end of the slice. In this case, we can omit it without changing the result.

>
visitors = ["Amir", "Betty", "Cindy", "Dalili"]
visitors[1::2]
Result:
['Betty', 'Dalili']

Slices' step behavior mirrors ranges' step argument, which we saw in an earlier lesson. range(0, 4, 2) shows us the indexes we'll get with slice[0:4:2].

>
indexes = range(0, 4, 2)
list(indexes)
Result:
[0, 2]
>
visitors = ["Amir", "Betty", "Cindy", "Dalili"]
sliced = visitors[::2]

Use `range` to generate the indexes, manually recreating the slice.

```python
visitors = ["Amir", "Betty", "Cindy", "Dalili"]
sliced = visitors[::2]

manually_sliced = []
for i in range(0, 4, 2):
  manually_sliced.append(visitors[i])

sliced == manually_sliced
True
```

==If you ever find yourself unsure about what a slice does, try creating a range with the same arguments. Then you can see exactly which indexes are included.==

As with range objects, the step indexes can be negative. With a negative step, the slice moves backwards through the list.

**For example, numbers`[::-1]` reverses the entire list.**
```python
numbers = [1, 2, 3]
numbers[::-1]
Result:
[3, 2, 1]
```

**The negative step index doesn't have to be -1.** For example, we can ask for every other element, starting at the end of the list.

```python
numbers = [1, 2, 3, 4, 5]
numbers[::-2]
[5, 3, 1]
```

When using negative steps, **we still start at the start index**, then move toward the end index. Because the step is negative, we end up with a start index that's larger than the end index. 

For example, `letters[3:1:-1]` means **"every index from 3 down to, but not including, 1."**

```python
letters = ["a", "b", "c", "d", "e"]
letters[3:1:-1]
['d', 'b']
```

Extended slicing also works when assigning to the sliced indexes. When we assign to a slice, we replace the values at those indexes. Replacement respects the step argument. For example, we can use a step argument of 2 to replace only the values that have even indexes.

```python
letters = ["a", "b", "c", "d", "e"]
letters[::2] = ["x", "y", "z"] # every other index
letters
['x', 'b', 'y', 'd', 'z']
```

```python
letters = ["a", "b", "c", "d", "e"]
letters[::3] = ["x", "y"]
letters
['x', 'b', 'c', 'y', 'e']
```

When replacing a slice with a step other than 1, Python is strict about the number of elements. For example, if we're replacing a slice with 2 values, then the replacement also needs 2 values. 

`!:  warning` If we don't provide the correct number of elements, Python raises a **ValueError**.

```python
numbers = [1, 2, 3, 4, 5]
numbers[::2] = [1]
numbers
ValueError: attempt to assign sequence of size 1 to extended slice of size 3
```

___

```python
def alternating_elements(the_list, even_or_odd):
  start = 1 if even_or_odd == "odd" else 0
  return the_list[start::2]
```
