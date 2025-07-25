---
tags:
  - course-lesson
part of:
  - "[[execute program - python for programmers course]]"
covers:
  - "[[python programming language]]"
---
In past lessons, we used ` ==` to check equality and the is operator to check identity. When we define a new class, equality checks with ` ==` behave exactly like identity checks with is. In other words, our objects are only equal to themselves.

```python
class Cat:
  def __init__(self, name):
    self.name = name
```

```python
cat1 = Cat("Keanu")
cat2 = Cat("Ms. Fluff")
(cat1 == cat2, cat1 is cat2)
(False, False)
```

This makes intuitive sense: every cat object is itself, and is equal to itself. But this rule also means that no two cat objects are ever equal to each other, even if they have the same attributes.
___
## customize

Often, we want two different objects to be equal when their attributes are the same, like the two Keanus above. To achieve that, we need to override the default equality behavior.

### `__eq__`

When we check point_a ` ==` point_b, Python actually calls point_a.__eq__(point_b). We can define our own .`__eq__` to customize how Points are compared for equality.

```python
class Point:
  def __init__(self, x, y):
    self.x = x
    self.y = y

  def __eq__(self, other):
    return self.x == other.x and self.y == other.y
```

```python
point_a = Point(5, 3)
point_b = Point(5, 3)
point_a == point_b
True
point_a is point_b
False
```

### type checking

```python
class Point:
  def __init__(self, x, y):
    self.x = x
    self.y = y

  def __eq__(self, other):
    if not isinstance(other, Point):
      return False
    return self.x == other.x and self.y == other.y
```

```python
Point(5, 3) == "Hello"
False
```

This works, but sometimes we do want to compare different classes. For example, we might have a Vector class with xComponent and yComponent attributes. A Point and a Vector should be equal if point.x ` ==` vector.xComponent and point.y ` ==` vector.yComponent.

Since these attributes have different names, Vector.`__eq__` needs to check other's type, **handling Points and Vectors separately.**

```python
class Point:
  def __init__(self, x, y):
    self.x = x
    self.y = y

  def __eq__(self, other):
    if not isinstance(other, Point):
      return False
    return self.x = = other.x and self.y = = other.y

class Vector:
  def __init__(self, x, y):
    self.xComponent = x
    self.yComponent = y

  def __eq__(self, other):
    if isinstance(other, Point):
      return self.xComponent = = other.x and self.yComponent = = other.y
    elif isinstance(other, Vector):
      return (
        self.xComponent = = other.xComponent
        and self.yComponent = = other.yComponent
      )
    else:
      return False
```

```python
point = Point(5, 3)
vector = Vector(5, 3)
True
point = = vector
False
```

That worked, but unfortunately there's a bug. If we compare in the other direction, we get the wrong answer.

Equality should be **symmetric**: if a == b is true then b == a should also be true. Unfortunately Python can't ensure symmetry for us; it's our job to ensure it.

The problem is that we customized both classes' .__eq__ methods. When we compare vector ` ==` point, we're calling vector.__eq__(point), which works correctly. When we compare point ` ==` vector, we're calling point.__eq__(vector), but point.__eq__ doesn't know about vectors.

### [[NotImplemented in python]]

Fortunately, Python has an elegant solution to this problem: `NotImplemented`. 

This is a special value that we return when .`__eq__` encounters a type that it doesn't support.

```python
class Point:
  def __init__(self, x, y):
    self.x = x
    self.y = y

  def __eq__(self, other):
    if not isinstance(other, Point):
      return NotImplemented # let somebody else do this
    return self.x == other.x and self.y == other.y

class Vector:
  def __init__(self, x, y):
    self.xComponent = x
    self.yComponent = y

  def __eq__(self, other):
    if isinstance(other, Point):
      return self.xComponent == other.x and self.yComponent == other.y
    elif isinstance(other, Vector):
      return (
        self.xComponent == other.xComponent
        and self.yComponent == other.yComponent
      )
    else:
      return NotImplemented

point == vector
True
```

When we compare point ` ==` vector, Python calls Point.`__eq__`(point, vector). That returns `NotImplemented` because other isn't a point.

`NotImplemented` tells Python that our dunder method isn't implemented for that type, and that Python should try the operation in a different way if possible. For the ` ==` operator, Python will try flipping the operands. Because point ` ==` vector is NotImplemented, Python tries vector ` ==` point. This calls Vector.`__eq__`(vector, point), which returns `True`.

There are several other comparison methods in addition to .`__eq__`. Each of these is customizable.

__ne__ is "not equal", !=.
__lt__ is "less than", <.
__le__ is "less than or equal to", <=.
__gt__ is "greater than", >.
__ge__ is "greater than or equal to", >=.

It's easy to look these up, so it's not important to memorize their names. Even if you don't memorize them, you may be able to guess them in the future by remembering that each comparison method's name contains exactly two letters.
___

==Customizing .`__eq__` is quite common in practice.== 

Often, we want to compare our instances by equality, rather than using the simplistic identity comparison that we get by default. In many cases, equality is more subtle than "all of the attributes are the same." For example, in the code problem above, our Owner objects only compared via IDs, ignoring email addresses.

Which attributes we compare depends on the system, and how we think of the identity of individual objects. Unfortunately, that means that Python can never do it for us. But on the bright side, .__eq__ and `NotImplemented` are robust tools for implementing equality.

%%note: this is very similiar to the way [[smalltalk]] did equality comparisons using [[double dispatch]] %%