---
previous: "[[Variadic Function Calls]]"
part of:
  - "[[execute program - python for programmers course]]"
related:
  - "[[Wrapping Functions lesson]]"
tags:
  - course-lesson
---
In an earlier lesson, we wrote function wrappers that "wrap" existing functions to give them additional functionality. For example, we can use convert_arg_to_int to wrap add1. Then add1 will work with any argument that can be converted into an integer via int(...).

```python
def convert_arg_to_int(func):
  def wrapped(x):
    x_as_int = int(x)
    return func(x_as_int)

  return wrapped

def add1(x):
  return x + 1

add1 = convert_arg_to_int(add1)
```
___
However, reassigning functions in that way is quite awkward. The reassignment comes after the function definition, so it's easy to miss it. Fortunately, we can use Python's "function decorator" syntax.

==Decorators are functions== like convert_arg_to_int: they expect a function as an argument and return a new function. To use the convert_arg_to_int function as a decorator, **we add @convert_arg_to_int on the line before a function declaration.**

The @convert_arg_to_int syntax calls convert_arg_to_int on the function below it, then assigns the returned function to the original function's name. It has exactly the same effect as add1 = convert_arg_to_int(add1).

```python
def convert_arg_to_int(func):
  def wrapped(x):
    x_as_int = int(x)
    return func(x_as_int)

  return wrapped
```

```python
@convert_arg_to_int
def add1(x):
  return x + 1

add1("3")
:4
```

**Sometimes we want a decorator to work with any function, regardless of its arguments.** 

To achieve that, decorators often take `*a`rgs, `**`kwargs. 
Then they pass those same `**`args, kwargs into the wrapped function.

Here's an example: `silence_exceptions`(func) calls func(`*`args, `**`kwargs), which passes both its arguments and keyword arguments along. If func returns a value, the decorated function returns that value too. 
But if func raises an exception, the decorated function **returns None** instead, silencing the exception.

```python
def silence_exceptions(func):
  def wrapped(*args, **kwargs):
    try:
      return func(*args, **kwargs)
    except Exception:
      return None

  return wrapped
```

%%note: the decorator needs to return a new function, in this case **wrapped** %%

This `silence_exceptions` function is very **reusable**! It can wrap any function, no matter what arguments it takes.

Note: this code example reuses elements (variables, etc.) defined in earlier examples.
```python
@silence_exceptions
def divide(a, b):
  return a / b

divide(4, 2)
2.0
```

In the next example, we try to divide 3 by 0, which raises an **exception**. But our silence_exceptions decorator catches the exception and returns None.

Note: this code example reuses elements (variables, etc.) defined in earlier examples.
```python
@silence_exceptions
def divide(a, b):
  return a / b

divide(3, 0)
None
```

In this case, our `silence_exceptions` decorator is simple. But decorators can save us a lot of duplicated code by centralizing complex behavior like caching or error handling. 
`Error handling` is especially **high-stakes code**, where a mistake can cause huge problems in a production system. **We can reduce risk by writing error handling logic once as a decorator, testing that decorator heavily, and then applying it in many places.**

==The tradeoff is that defining decorator functions like silence_exceptions can be a bit awkward at first.==
%%note: I don't agree with this, they're quite nice %%

Python's `@some_decorator` syntax doesn't affect the function body itself, so the body of silence_exceptions will be awkward no matter what. 

___
Finally, a note on **terminology**. 

When we apply a function, that function is "decorated". For example, the divide function in the examples above is **decorated**.

==Functions like silence_exceptions are the decorators.== 

Even if we never call silence_exceptions, it's still a decorator because it takes a function, then returns a new function that extends the original's behavior. The term "decorator" can also refer to Python's special @some_decorator syntax.