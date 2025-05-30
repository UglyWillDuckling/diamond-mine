---
part of:
  - "[[execute program - python for programmers course]]"
---

Python gives us fine-grained control over global and "nonlocal" variable access, which is unusual among programming languages. We'll briefly look at Python's sensible scoping rules, which match most languages. Then we'll see global and nonlocal, which let us control variable scope.

___

Local variables "shadow" global variables. If a local and global variable both have the name x, we can only access the local variable x. The global variable x is shadowed, and inaccessible, since we can only have one variable named x in a given scope.

```python
x = 5

def increment(initial_value):
  x = initial_value
  x = x + 1
  return x
incremented_x = increment(10)
print(x)
```

In the example above, x = initial_value creates a new local variable inside the function. This local x shadows the global x. Note that it doesn't modify the global x!

In Python, we can use the global statement to explicitly say "x in this function refers to the global x, not a local variable x". Here's the same code example again. The only difference is that we've added global. Now, calling increment modifies the global x. That global change is visible even after increment returns.

```python
x = 5

def increment(initial_value):
  global x
  x = initial_value
  x = x + 1
  return x
```

___

There's more to scope than just locals and globals. We might have multiple nested scopes, like when we define a function inside of another function.

The next example tries to create a stateful counter. When we do increment = create_counter(0), **we get a new function** stored in increment. When we later call that increment function, it increments its value, then returns that value to us.

```python
def create_counter(initial_value):
  x = initial_value

  def increment():
    x = x + 1
    return x

  return increment
```

> [!NOTE] Note the two different x variables: one in the outer function, and one in the inner function. That code would work in many languages, but it doesn't work in Python

`interest: quite incredible` 

```python
def create_counter(initial_value):
  x = initial_value

  def increment():
    nonlocal x # HERE
    x = x + 1
    return x

  return increment
increment = create_counter(0)
print(increment())
print(increment())
```

___
Why does Python have both global and nonlocal? Don't they mean the same thing?

They both refer to variables outside of the current local scope. But nonlocal won't let us access global variables. It only works for variables defined in another non-global scope, like the nested functions that we saw above. Trying to access a global with nonlocal causes an error.

