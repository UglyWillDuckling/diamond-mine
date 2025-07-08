Range objects are data types that represent a range of integers, like "0, 1, 2, 3". range(end) gives us all integers from 0 up to (but not including) end. In the next example, we convert a range into a list to see what it contains.

>
list(range(4))
Result:
[0, 1, 2, 3]
Sometimes we use range to generate a list of integers that we need. But often, we loop over a range to do something a certain number of times, without actually using the individual integers. For example, iterating over range(3) does something 3 times.

>
total = 0
for _ in range(3):
  total += 2
total
Result:
6
In that case, we could get the same effect by doing for _ in [0, 1, 2]. But that doesn't work when the number of iterations is controlled by a variable.

>
iterations = 5
total = 0
for _ in range(iterations):
  total += 2
total
Result:
10

## arguments

range takes two more optional arguments. First, we can provide a number to **start** at. range(start, end) gives us numbers from start to end - 1.

>
list(range(-2, 3))
Result:
[-2, -1, 0, 1, 2]
>
list(range(2, 5))
Result:
[2, 3, 4]

### step

Second, we can provide a **step** argument. By default, step is 1: each number is 1 more than the previous number. When we provide a step, each number in the range is separated by that amount.

>
list(range(1, 6, 2))
Result:
[1, 3, 5]
>
list(range(1, 8, 3))
Result:
[1, 4, 7]

Step arguments can be **negative**. In that case, the value decreases each time. Note that the range still doesn't include the end index.

>
list(range(5, 2, -1))
Result:
[5, 4, 3]
>
list(range(3, 2, -1))
Result:
[3]

The step can be `any integer`. For example, ==if step is -10 then the range subtracts 10 each time.==

>
list(range(50, 20, -10))
Result:
[50, 40, 30]
>
list(range(5, 2, -2))
Result:
[5, 3]

## operations

In many of these examples, we converted ranges into lists, since that's an easy way to see what's inside them. But ranges aren't lists; they're a different data type.

>
isinstance(range(4), list)
Result:
False

==Although ranges aren't lists, they do support some familiar list operations.== 

For example, range1 ` ==` range2 is true when both ranges have the same elements.

```python
range(3) == range(0, 3)
True
range(4) == range(1, 4)
False
```

We can get the number of elements in a range with `len(some_range)`

>
len(range(2, 5))
Result:
3

We can also use the **in** operator to decide whether a number is within a range.

>
2 in range(3)
Result:
True
>
5 in range(3)
Result:
False

## indexing 

We can use the regular **indexing** operator to index into ranges.

```python
range(3, 5)[1]
Result:
4
>
range(2, 9, 2)[2]
Result:
6
```

## slicing 

Finally, we can slice ranges to get a part of a range. For example, in a moment we'll slice range(-5, 5) with [2:5]. This can be tricky to think about, so we'll start by looking at the whole range, then do the slice.

```python
list(range(-5, 5))
Result:
[-5, -4, -3, -2, -1, 0, 1, 2, 3, 4]
```

Since we're slicing at [2:5], we need to know what values the range has at its indexes 2 and 5. We can see them in the list above.

>
[
  range(-5, 5)[2],
  range(-5, 5)[5],
]
Result:
[-3, 0]

Python will build a new range, using those values as the start and end arguments. The slice below is the equivalent of range(-3, 0).

```python
my_range = range(-5, 5)
sliced_range = my_range[2:5]
list(sliced_range)
Result:
[-3, -2, -1]
>
range(-5, 5)[2:5] == range(-3, 0)
True
```
