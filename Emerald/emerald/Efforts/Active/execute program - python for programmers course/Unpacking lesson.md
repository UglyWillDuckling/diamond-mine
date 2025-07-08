#course-lesson 

We often want to pull list and tuple elements out into their own variables. One way to do that is to assign them one by one, but that's verbose.


```python
triangle_edges = (2, 3)
x = triangle_edges[0]
y = triangle_edges[1]
hypotenuse_squared = x**2 + y**2
hypotenuse_squared
```

Python offers unpacking syntax to simplify this process. We can "unpack" the elements of tuples, lists, and many other data types into their own variables on one line. x, y = my_tuple assigns my_tuple's first two values to the variables x and y.

(This is called "destructuring" in some other languages.)

```python
triangle_edges = (2, 3)
x, y = triangle_edges
hypotenuse_squared = x**2 + y**2
hypotenuse_squared
```

```python
coordinates = [2, 3, 4]
x, y, z = coordinates
z
```

### unused values 

Sometimes we only need some of the elements. The community convention is to unpack unneeded elements into a variable named `_`. Using _ clearly communicates that we don't care about that value right now.

```python
coordinates = (2, 3, 4)
x, _, z = coordinates
x + z
6
```

> [!NOTE] convention
> The `_` variable is a regular variable, and it does get a value. This is purely a convention: we all agree that we'll only use the `_` variable to store values that we don't actually use.

___

Unpacking leads to a common shortcut for assigning multiple variables. It works by combining unpacking with a feature we saw in another lesson: we can create a tuple by separating values with commas, without parentheses.

By combining these two features, we can write statements like x, y = 1, 2. This is the same as x = 1 followed by y = 2.

```python
x, y = 2 + 1, 3 * 3
x, y
3, 9
```

### starring

We can unpack many values at once by "starring" a variable name, like *rest. In first, *rest = [1, 2, 3], first gets the first value, and rest gets all remaining values. Variables receiving multiple values like *rest pack the values into a list.

```python
first, *rest = ["a", "b", "c"]
rest
['b', 'c']
```

```python
first, second, *rest = [1, 2, 3, 4]
rest
[3, 4]
```

#### middle values

```python
first, *middle, last = ["a", "b", "c", "d"]
middle
['b', 'c']
```

#### error

`!: careful`There can only be one starred name in the variable list. Trying to use multiple raises a SyntaxError.

#### ignoring the rest

We can combine starred expressions with _ to ignore the rest of the iterable.

```python
first, second, *_ = [6, 3, 2, 1, 4]
first + second
9
```

## ==swapping== values

- [x] remind me [[Unpacking lesson#swapping values]] (@[[2025-06-30]])
___

At runtime, Python evaluates the right side of an assignment statement first. Then it does the assignments on the left side. This lets us do tricks like swapping out values in the same expression, without the intermediary step required in many other languages.

```python
x = 1
y = 2

temp = x
x = y
y = temp

x, y
```

**in python**
```python
x = 1
y = 2

# In Python, we can swap with a single unpacking assignment statement
x, y = y, x

x, y
```

## other iters

So far we've unpacked lists and tuples. We can also unpack any other iterable. For example, we can unpack dictionaries. ==Iterating over dictionaries gives us the keys, so unpacking also gives us the keys.==

📔(Python remembers dictionary keys' insertion order, so the keys in the next example will come out in the order they were defined.)

> [!bookmark]+ 🗝 Key order
> Python remembers dictionary keys' insertion order, so the keys in the next example will come out in the order they were defined.

```python
some_dict = {
  "a": 1,
  "b": 2,
}
x, y = some_dict
(x, y)
('a', 'b')
```

### for loops

Unpacking syntax also works in for loops. It often shows up when iterating over lists that contain tuples.

```python
coordinates = [(2, 3), (5, 2)]
total = 0
for x, y in coordinates: #unpack here
  total += x * y
total
16
```


next: [[More String Methods Lesson]]