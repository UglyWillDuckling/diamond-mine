---
type: course-lesson
about: "[[python functions]]"
part of:
  - "[[execute program - python for programmers course]]"
tags:
  - course-lesson
---

We've seen that Python functions are first-class values: we can assign them to variables and we can pass them as arguments. Functions can also return other functions.

In the next example, define_multiplier defines and returns a function that multiplies its argument by some number. For example, define_multiplier(1.05) returns a function that multiplies any number by 1.05.

```python
def define_multiplier(x):
  def multiplier(y):
    return x * y

  return multiplier
```

If we assign the returned function to a name, we can call it just like any other function.

```python
add_5_percent = define_multiplier(1.05)
add_5_percent(100)
Result:
105.0
: this code example reuses elements (variables, etc.) defined in earlier examples.
>
add_20_percent = define_multiplier(1.2)
(add_20_percent(100), add_20_percent(200))
Result:
(120.0, 240.0)
```

We can also call the returned function immediately, without assigning it to a variable.

Note: this code example reuses elements (variables, etc.) defined in earlier examples.

```python
define_multiplier(2.5)(200)
Result:
500.0
```

The `define_multiplier` function took a number and returned a function. But we can also write functions that take functions as arguments, then define and return new functions. This is called "wrapping a function".

Wrapping functions is useful because the wrapper can add new behavior. For example, we can wrap a function to cache its return values, or to count how many times it's called, or to validate its argument types.

Let's say we have an add1 function that expects an int argument.

```python
def add1(x):
  return x + 1
Note: this code example reuses elements (variables, etc.) defined in earlier examples.
>
add1(2)
Result:
3
```

Python doesn't let us add strings to numbers, so passing a string to add1 is an error.

Note: this code example reuses elements (variables, etc.) defined in earlier examples.

```python
add1("2")
Result:
TypeError: can only concatenate str (not "int") to str
```

Now we want add1 to work with strings, so add("2") returns 3. We could modify add1 to handle strings. But maybe we have dozens of functions that need that behavior: they all need to automatically convert string arguments into integers.

A better solution is to write a wrapper function `convert_arg_to_int`. It takes any function func, then wraps it in a new function wrapped. The new function converts its argument to an int, then calls the original function with that int.

```python
def convert_arg_to_int(func):
  def wrapped(x):
    x_as_int = int(x)
    return func(x_as_int)

  return wrapped
```

Now we can wrap `add1` with `convert_arg_to_int`. The next example assigns the returned function to add1, replacing the original function with the wrapped version. This is a bit awkward, but we'll see a way to improve it later.

```python
def add1(x):
  return x + 1

add1 = convert_arg_to_int(add1)
```

Now the add1 function works with any argument that it can convert into an integer, like "2".

```python
add1(2)
Result:
3
>
add1("2")
Result:
3
>
add1("3")
Result:
4
The int(x) call will still error if the string doesn't contain an integer.
```

```python
add1("not an integer")
Result:
ValueError: invalid literal for int() with base 10: 'not an integer'
```

We can use `convert_arg_to_int` to wrap any function. 
This can save a lot of code when we need to add the same functionality to many functions. 

For example, we can wrap double instead of add1.

```python
def convert_arg_to_int(func):
  def wrapped(x):
    x_as_int = int(x)
    return func(x_as_int)

  return wrapped

def double(x):
  return x * 2

double = convert_arg_to_int(double)

double(2)
4
```

>
double("3000")
Result:
6000
This approach lets the individual functions like add1 and double remain simple. They only need to handle integers; they don't need to worry about converting strings into integers.

Here's a code problem:

Define a `convert_arg_to_str` wrapper function. It takes a function, func, as an argument. That function only works on string arguments.

`convert_arg_to_str` returns a new function that takes any argument, calls str on it to convert it into a string, then passes that string to func.
%%note: it works with 1 arg only %%

```python
def convert_arg_to_str(func):
  def wrapped(x):
    return func(str(x))

  return wrapped
def add_s(string):
  return string + "s"

add_s = convert_arg_to_str(add_s)
assert add_s(4) = "4s"

def add_quotes(string):
  return f'"{string}"'

add_quotes = convert_arg_to_str(add_quotes)
assert add_quotes(11.2) == '"11.2"'
```

___
next [[Variadic Function Calls]]