---
part of:
  - "[[execute program - python for programmers course]]"
covers:
  - "[[variadic functions in python]]"
studied_on:
  - "[[2025-07-01-Tue]]"
value: 8
interest: 7
---
#course-lesson 

Most functions take a fixed number of arguments, like def add(x, y). We can also define functions that take a variable number of arguments, called "variadic functions."

In a variadic function, extra arguments are collected in a tuple that we write as *args in the argument list.

```python
def my_sum(*args):
  total = 0
  for arg in args:
    total += arg
  return total
  
my_sum(1,2,3)
6
my_sum()
0
```

A function can take normal positional arguments along with variadic arguments. In the next example, **the function appends a value to many lists at once.** To do this, we pass in a value to append, followed by an arbitrary number of lists. (Remember, appending mutates lists.)

```python
def append_many(value, *lists):
  for l in lists:
    l.append(value)

list_1 = [1, 2]
list_2 = [3, 4]

append_many(5, list_1, list_2)

list_2
[3,4,5]
```

### kwargs

==Functions can also accept an arbitrary number of keyword arguments== ("variadic kwargs") using a ** instead of a single *.

The next function calculates the lengths of many lists. We pass the lists in as kwargs, then get a dictionary back that maps the kwargs' names to the lists' lengths.

```python
def list_lengths(**kwargs):
  return {key: len(values)
          for (key, values) in kwargs.items()}

list_lengths(a=[1, 2, 3], b=[4, 5])
{'a': 3, 'b': 2}

```


We can combine `*`args and `**`kwargs in one function. This gives us a function that can accept any set of arguments: positional, keyword, a mixture of both, or no arguments at all.

```python
def count_args(*args, **kwargs):
  return (len(args), len(kwargs))

count_args(1, 2, 3, name="Amir")
(3,1)
```

`!: order matters`As before, kwargs must still come after positional arguments. Otherwise, it's a SyntaxError.

What if a function takes *args but we pass no arguments? The args variable still exists inside the function body, but it's the empty tuple, ().

```
def return_args(*args):
  return args

return_args()
Result:
()
```

We get a similar result when a function takes `**`kwargs but we don't pass any: we get an empty dictionary, {}.

```python
def return_kwargs(**kwargs):
  return kwargs
return_kwargs()
{}
```

### lambdas

Lambdas can also take *args, **kwargs, neither, or both.

```python
count_args = lambda *args, **kwargs: (len(args), len(kwargs))
count_args(1, name="Amir", age=36)
(1,2)
```

___
Finally, a note on **terminology**. There are a few different terms for variadic functions, all of which are in common use.

"Variadic function" is the standard technical term, both in computer science and mathematics. Python documentation refers to this language feature as "argument packing". In casual conversations about Python, *args and `**`kwargs are also called "splat args". ("Splat" is a slang term for the * character, since it looks like a splat of paint or a splattered bug.)