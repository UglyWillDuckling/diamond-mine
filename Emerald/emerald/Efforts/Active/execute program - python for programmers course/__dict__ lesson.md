---
part of:
  - "[[execute program - python for programmers course]]"
tags:
  - course-lesson
value: 7
quality: 9
interest: 5
---
Python is **flexible** when working with object attributes. 

We can access attributes with some_obj.some_attr, or via the hasattr and getattr built-in functions. We can also set attributes directly on the instance with some_obj.some_attr = value, or with setattr.

**This flexibility is powered by dictionaries**, which may be a surprise at first! 

For regular classes like the ones that we've defined so far, attributes are stored in some_obj.__dict__. The dictionary's keys are the attribute names, and its values are the attribute values. Functions like setattr manipulate that dictionary, but we can also manipulate it directly when needed.

```python
class User:
  def __init__(self, id, admin):
    self.id = id
    self.admin = admin

amir = User(1, False)
amir.__dict__
Result:
{'id': 1, 'admin': False}
```

The `.__dict__` dictionary is not merely another way to look at attributes; it's where the attributes are actually stored! Modifying it changes the object's attributes. In the next example, we manipulate `.__dict__` to change cat.name.

```python
class Cat:
  def __init__(self, name):
    self.name = name

keanu = Cat("Keanu")
keanu.__dict__["name"] = "Ms. Fluff"
keanu.name
'Ms. Fluff'
```

Because .__dict__ is a regular dictionary, all of the usual dictionary operations work. For example, we can list its keys.

```python
class Cat:
  def __init__(self, name):
    self.name = name

keanu = Cat("Keanu")
keanu.vaccinated = True

# Note that the instance's two attribute keys will come out in the order
# they were defined.
list(keanu.__dict__.keys())
Result:
['name', 'vaccinated']
```


## methods

==The attribute dictionary stores attributes assigned to the instance==. 
It doesn't include methods, which are associated with the class rather than a specific instance.

**Classes** themselves are objects, so they also have a .__dict__! That's where the methods live.

```python
class Cat:
  family = "felidae"

  def __init__(self, name):
    self.name = name

  def vaccinated(self):
    return False
```

```python
"vaccinated" in Cat.__dict__
True
```

==We can even call methods directly from .__dict__.==


```python
class Cat:
  def __init__(self, name):
    self.name = name

  def vaccinated(self):
    return False

keanu = Cat("Keanu")
vaccinated_method = Cat.__dict__["vaccinated"]
vaccinated_method(keanu)
False
```

Most values in Python have a .__dict__, but there are exceptions. One notable exception is dictionaries themselves.

	a_dict = {}
	hasattr(a_dict, "__dict__")
	Result:
	False

Why don't dictionaries have a .__dict__? There are many reasons, but one simple one is performance. For performance reasons, we can't change built-in types like dicts in the same way that we can modify custom classes like Cat. Integers, floats, strings, lists, and tuples also lack a .__dict__ for the same reason.

```python
hasattr([], "__dict__")
False
```

____

Write a setattr_via_dict function. It tries to set an attribute by modifying the target object's .__dict__. However, not all Python values have a .__dict__.

If the object has a .__dict__ attribute, set the attribute value and return True. Otherwise return False
.

```python
def setattr_via_dict(obj, attr, value):
  if hasattr(obj, "__dict__"):
    obj.__dict__[attr] = value
    return True
  else:
    return False
```

___
next:: [[Custom Exceptions lesson]]