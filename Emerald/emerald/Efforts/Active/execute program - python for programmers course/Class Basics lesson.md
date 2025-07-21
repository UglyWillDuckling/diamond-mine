---
part of:
  - "[[execute program - python for programmers course]]"
about: "[[python programming language]]"
tags:
  - course-lesson
---
Python lets us define classes, which combine functions and data to create custom data types.

In the next example, we create an empty User class. Python's indentation-based syntax requires us to put something inside of the class, so we use pass. pass is a placeholder keyword intended for exactly this type of situation.

```python
class User:
  pass
```

Once we have a User class, we can "instantiate" it, which gives us an object representing an individual user. In Python, instantiation looks like a function call: User().

```python
user = User()
```

> [!INFO]+ Naming
By convention, Python class names are always **UpperCamelCased**. Function and variable names are **lower_snake_cased**. UserDatabase is a class, but user_database is a function or variable.[^1] 
****


___

Classes can have methods, which are a kind of function. The most important method is `__init__`, called the "constructor" or "initializer".

Python **automatically** calls `__init__` for us when we instantiate a class.
```python
class User:
  def __init__(self, name):
    self.name = name

amir = User("Amir")
amir.name
"Amir"
```

All methods, including `__init__`, get the instance as their first argument. We name that argument **self**. It lets us interact with the instance from inside the method, like the self.name = name line above.

==Unlike many programming languages, Python has no built-in this or self keyword. The self argument above is just a regular function argument!==
%%note: python doesn't have any keywords that reference the current object, instead, it passes a reference to it as the first argument %%


## mutability

Instances are `mutable`[^2], so we can modify existing attributes after the instance is instantiated.

```python
class Cat:
  def __init__(self, name, age):
    self.name = name
    self.age = age

  def is_kitten(self):
    return self.age <= 2

keanu = Cat("Keanu", 2)
is_kitten_this_year = keanu.is_kitten()
keanu.age += 1
is_kitten_next_year = keanu.is_kitten()

[is_kitten_this_year, is_kitten_next_year]
[True, False]
```

### example code

```python
class Cat:
  def __init__(self, name):
    self.name = name

  def name_ends_in_y(self):
    return self.name.endswith("y")
```

## isinstance

In an earlier lesson [^3], we used isinstance to check a value against a type.

```python
point1 = Point(3, 2)
isinstance(point1, Point)
True
```







[^1]: [[naming conventions]]
[^2]: [[mutability - programming]]
[^3]: [[isinstance in python]]