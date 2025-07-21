---
tags:
  - course-lesson
  - lesson/python
part of:
  - "[[execute program - python for programmers course]]"
---

Mutable Default Arguments

Suppose that our default value is an **empty list**. Because the default value is only evaluated when the function is defined, only one list is ever created. Every call to the function might change the list's contents. But the same list is used in every call, so changes to the list during one function call are still visible during future calls!

```python
def add_one(my_list=[]):
  my_list.append(1)
  return my_list

list_1 = add_one()
list_2 = add_one()
list_2
```

`!: careful`This happens because they're the same list. Not just lists with the same contents, but exactly the same list at the same location in memory!

**This violates our mental model of how functions work**. If a function changes a global variable, or works with files, then we might expect one function call to affect the result of future calls. The functions in this lesson aren't doing anything like that; they're only using a default argument value. But because the default value is mutable, calling rename_user() gives different results depending on the history of how we've called the function in the past.

Using mutable values like lists as default arguments is almost always a bad idea. One workaround is to use None as a "sentinel value" instead.

(Sentinels are a general pattern in programming, not specific to Python. They're a kind of "placeholder" value: we use them to clearly mark that something is missing, or that there's not a normal value here. None is a common sentinel value, but we can use other values too.)

We can use a sentinel value to fix the previous example's function. Inside the function, we check for whether the argument is None, then create the default value we actually want: a distinct empty list. The critical difference is that this list is a regular local variable in the function, so different function calls can't affect each other.

```python
def add_one(my_list=None):
  if my_list is None:
    my_list = []
  my_list.append(1)
  return my_list
```

```python
list_1 = add_one()
list_2 = add_one()
list_1 is list_2
False
```

___ 

**One final question**: how big a problem is this in practice? Fortunately, we have a famous outage as an answer!

**Digg** version 4's launch in 2010 went very poorly. After they stabilized the initial launch, the servers still required manual restarts every four hours.

Those restarts were ultimately required because of a default argument value. A programmer at Digg thought that a list used as a default argument value would be re-initialized on each function call. As we saw in this lesson, every call actually gets the same list. In Digg's case, the list continued to grow after each function call, consuming more and more resources. "It took a month to track this bug down," at which point they could finally stop manually restarting the servers.
[[Digg's v4 launch an optimism born of necessity.]][^1] 

[^1]: [[Digg]]