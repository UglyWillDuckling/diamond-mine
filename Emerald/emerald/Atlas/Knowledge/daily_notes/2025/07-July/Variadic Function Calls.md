---
tags:
  - course-lesson
---
We've seen variadic functions, which take an arbitrary number of arguments. We can also call functions with arbitrary numbers of arguments. When we call some_function(`*`some_list), each value in some_list becomes a separate argument to the function. It's like calling f`(some_list[0], some_list[1], ...)`.

```python
def add(x, y):
  return x + y

numbers = [1, 2]
add(*numbers)
3
```

That example works because the function takes two arguments, and our numbers list has two elements. The two list elements become two separate arguments to the function. If we try to pass too many arguments or too few, Python raises an exception.

```python
def add(x, y):
  return x + y

numbers = [1, 2, 3]
add(*numbers)
:TypeError: add() takes 2 positional arguments but 3 were given
```


___

Variadic function calls are often used with variadic functions. The function takes an arbitrary number of arguments, and we pass it an arbitrary number of arguments.

```python
def product(*args):
  result = 1
  for arg in args:
    result *= arg
  return result
```

```python
args = [2, 4]
product(*args)
:8
```

```python
args = []
product(*args)
:1
```

## with dicts
[[python dicts]]

==We can also make variadic function calls with dictionaries. Each item in the dictionary becomes a kwarg.==

**The dictionary's keys are the arguments' names, and the dictionary's values are the arguments' values.**

`note: Note`that the function below is a regular, non-variadic function. 
But we're calling it variadically! We use `**` rather than `*` since we're passing kwargs.

```python
def product(a, b):
  return a * b

args = {
  "a": 2,
  "b": 4,
}

# This is identical to `product(a=2, b=4)`.
product(**args)
:8
```

## first class

In an earlier lesson, we saw that functions are first-class values. We'll use that fact in the next example.

The function below accepts another function as a regular positional argument, along with some *args and `**`kwargs. Then it calls the function, passing the *args and `**`kwargs along.

```python
def double_result(f, *args, **kwargs):
  return 2 * f(*args, **kwargs)
  
def product(a, b):
  return a * b

double_result(product, 2, 3)  
:12
```

```python
def add_four_numbers(a, b, c, d):
  return a + b + c + d

double_result(add_four_numbers, 1, 2, 3, 4)
:20
```

## other iters

So far we've only used lists for the variadic arguments, but we can use any iterable (that is, any data structure that we can loop over). This is a great example of how powerful and universal Python's iterable system is![^1] 

For example, we've seen that list(some_dict) gives us the dictionary's keys. We can also call a function with `*`some_dict, which turns each key into a separate positional argument. The function call doesn't care whether `*`some_iterable is a list, a tuple, a dict, or a special iterable object defined by a third-party library. They all work in the same way.

```python
def add(x, y):
  return x + y

numbers = {
  1: "one",
  2: "two",
}

add(*numbers)
:3
```

Although that does work, we don't recommend actually passing a dict in this way. If we want to pass the dict's keys as `*`args, it would be better to explicitly call .keys().
That's 7 more characters, but it makes our intent very clear, whereas add(`*`some_dict) looks like a mistake at first.

```python
def add(x, y):
  return x + y

numbers = {
  1: "one",
  2: "two",
}

add(*numbers.keys())
:3
```

We've now seen the main features of Python's function arguments. There are more nuances in Python than in many other languages, but they're there for good reasons.


Python's flexibility allows us to:

Pass positional arguments, like all other languages: f(1, 2).
Name our arguments, even when those arguments were declared as positional: make_cat("Keanu", age=2).
Pass arguments out of order when naming them: make_cat(age=4, name="Ms.Fluff").
Pass (and accept) variable numbers of arguments: sum(`*`args).
Pass (and accept) variable numbers of kwargs: return_kwargs(`**`kwargs).

```python
def pipeline(x, *funcs):
  for func in funcs:
    x = func(x) # update x on each iteration
  return x
```


[^1]: [[iterable in python]]