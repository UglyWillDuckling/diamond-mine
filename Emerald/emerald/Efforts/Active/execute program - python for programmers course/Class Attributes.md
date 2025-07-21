---
tags:
  - course-lesson
part of:
  - "[[execute program - python for programmers course]]"
about:
  - "[[python programming language]]"
  - "[[python classes]]"
related_courses:
  - "[[Class Basics lesson]]"
---
We've seen attributes on instances, but classes can also have attributes.


```python
class Cat:
  favorite_food = "salmon"

  def __init__(self, name):
    self.name = name
```

```
Cat.favorite_food
'salmon'
```

==Class attributes are accessible via Cat.favorite_food, but they're also accessible via some_cat.favorite_food.== 
When we access an attribute, Python checks for an instance attribute first, and only then checks for a class attribute.

If we define Cat.favorite_food but also define keanu.favorite_food, those are separate attributes. The instance keanu has an attribute, and the class has an attribute with the same name. Python checks for instance attributes before checking for class attributes, so the instance attribute "wins".

In the next example, Keanu's favorite food is tuna. But all other instances of Cat still like salmon.

```python
class Cat:
  favorite_food = "salmon"

  def __init__(self, name):
    self.name = name

keanu = Cat("Keanu")
keanu.favorite_food = "tuna"
```

```python
keanu.favorite_food
'tuna'
```

___
We can define and manipulate class attributes like this because Python classes themselves are objects! Keanu is an **instance** of Cat:

next: [[Customizing Equality]]
