---
tags:
  - course-lesson
---
```python
def silence_exceptions(func):
  def wrapped(*args, **kwargs):
    try:
      return func(*args, **kwargs)
    except Exception:
      return None

  return wrapped

@silence_exceptions
def divide(a, b):
  return a / b

divide(3, 0)
```

We've seen that decorators can wrap functions to produce new functions. For example, we can decorate a function with silence_exceptions so it returns None instead of raising an exception.


In that code, silence_exceptions always uses None as the "fallback value". But what if we want to customize the fallback value? For example, in some cases we might want it to return 0 or "" rather than None. We need a way to pass this custom value into the decorator.

Simple decorators like silence_exceptions take a function as an argument, then return a new, wrapped function. When we use them like @silence_exceptions, Python actually calls silence_exceptions(some_function). That doesn't give us a way to pass a custom fallback value like 0 or "".

There is a solution, though: we wrap the decorator in yet another function. The new outer function takes the fallback value like None, 0, or "". Then it defines and returns a normal decorator function.

```python
def silence_exceptions(fallback=None):
  def wrapper(func):
    def wrapped(*args, **kwargs):
      try:
        return func(*args, **kwargs)
      except Exception:
        return fallback

    return wrapped

  return wrapper
```

Let's say we expect to encounter a `ZeroDivisionError`. In that case, we might want a fallback value of 0.0.

```python
@silence_exceptions(fallback=0.0)
def divide(a, b):
  return a / b

divide(4, 2)
```

```python
@silence_exceptions(fallback=0.0)
def divide(a, b):
  return a / b

divide(3, 0)
0.0
```

___

In the example from the beginning of this lesson, our decorator applications looked like @silence_exceptions. In the examples above, there's an additional function call. We have to call silence_exceptions, a regular function, to get the decorator: silence_exceptions(fallback=0.0).

Like before, silence_exceptions works with any exception. For example, we can use it when indexing into a dict, like some_dict `[some_key]`, which might raise a KeyError. In that case, we'll choose a fallback value depending on the data type that we expected to get back. The examples below expect a string, so we use the empty string, "", as our fallback.

```python
@silence_exceptions(fallback="")
def dict_name(some_dict):
  return some_dict["name"]

dict_name({
  "name": "Amir"
})
```

```python
@silence_exceptions(fallback="")
def dict_name(d):
  return d["name"]

dict_name({})
""
```

___

==Until this lesson, all of our decorators were functions that returned functions.==  That's quite abstract.

**Now we're adding yet another level of indirection**: the new `silence_exceptions` returns a decorator, which is a function; and that decorator returns yet another a function.
There are three functions in total:

- `silence_exceptions` accepts the fallback value (like `None`, 0, or "") and returns a decorator. This function gives us a way to pass data to the decorator, like we did with `fallback`.
- `wrapper` wraps the existing function, decorating it. It takes the original function f as its only argument, then returns a wrapped version of `f`
- `wrapped` is the new function that we build and return. It behaves like the original function `f`, but also adds some additional behavior. In our case, it `silences` any exceptions

==If this feels awkward or confusing, that's normal and expected.== It takes practice for this to feel natural. Even with practice, decorator code often seems messy, **and requires us to slow down and carefully track what's happening.**

___

Let's see another example where decorators are very helpful. Our program has access levels, denoted by integers. Some functions are runnable by any user, others require access level 2 ("manager"), and some require access level 3 ("admin").

For example, a function decorated with `@requires_access(2)` is only callable by users with level 2 ("manager") or 3 ("admin") access. If the user has one of those access levels, we call the wrapped function and return its result. 
If they only have access level 1 ("normal user"), **we raise an exception**, and we don't call the wrapped function.

```python
class User:
  def __init__(self, name, access_level):
    self.name = name
    self.access_level = access_level

def requires_access(level):
  def wrapper(f):
    def wrapped(user, *args, **kwargs):
      if user.access_level < level:
        raise ValueError("Permission Denied")
      return f(user, *args, **kwargs)

    return wrapped

  return wrapper

normal_user = User("Amir", 1)
manager = User("Betty", 2)
admin = User("Cindy", 3)
users = [normal_user, manager, admin]
```

Now we'll try requires_access with some functions that require increasing levels of permissions. Anyone can log in. Only managers and admins can check the user count. Only admins can create new users.

```python
@requires_access(level=1)
def log_in(user):
  # For brevity, we don't actually implement the login logic.
  return "logged in"

log_in(normal_user)
"logged in"

@requires_access(level=2)
def check_user_count(user):
  return len(users)

check_user_count(manager)
:ValueError Permission Denied

@requires_access(level=2)
def check_user_count(user):
  return len(users)

check_user_count(manager)
3
```

```python
@requires_access(level=3)
def create_new_user(user):
  # For brevity, we don't actually create a new user.
  return "user created"

create_new_user(manager)
Error

@requires_access(level=3)
def create_new_user(user):
  # For brevity, we don't actually create a new user.
  return "user created"

create_new_user(admin)
"user created"
```

> [!warning] Trade Off
> 
==Decorators like these represent an extreme trade-off.==
>
The decorator itself is very abstract, and can be difficult to understand. But when using the decorator, we can express powerful ideas with little code, like @requires_access(level=3).

==Decorators make it easy to share a certain behavior across many functions==. 
They also **visually emphasize** this additional behavior, since the `@requires_access` call appears right above the function definition itself. It's important to carefully weigh the trade-off whenever you create a decorator. 
Sometimes they're overkill, but sometimes they express ideas very clearly!

next: [[Customizing Indexing lesson]]