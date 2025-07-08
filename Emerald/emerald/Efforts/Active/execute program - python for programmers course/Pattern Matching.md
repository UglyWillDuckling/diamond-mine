---
type: course-lesson
part of:
  - "[[execute program - python for programmers course]]"
previous: "[[StringIO]]"
tags:
  - course-lesson
---
Python has a match / case construct similar to switch / case in JavaScript, C, and many other languages. When we match some_value, Python runs the case that corresponds to the value.

```python
def speak(animal):
  match animal:
    case "dog":
      return "woof!"
    case "cat":
      return "meow"
    case "cow":
      return "moo"
speak('dog')
'woof!'
```

If no case matches, the match returns None.

```python
speak("bear")
None
```


```python
def identify(data):
  match data:
    case [1, 2]:
      return "list"
    case 23:
      return "number"
    case False:
      return "boolean"
identify([1, 2])
'list'
```

At first, match / case seems identical to the switch / case syntax in other languages. However, there's a lot more to Python's match! For example, match can unpack elements from a list, tuple, or another iterable.

```python
some_list = [6, 3, 2, 1, 4]
_first, second, *_ = some_list

second
3
```

==We can use that same syntax to unpack the second element inside of a match.==

```python
def second_element(my_list):
  match my_list:
    case [_first, second, *_]:
      return second
second_element([6, 3, 2, 1, 4])
3
```

Let's add a second case to handle lists with no second element. This is like writing an else: clause on a conditional: we want it to happen whenever our main case doesn't match. By convention, Python programmers write that as case `_`:. That's a pattern that matches any value, which we then store in the _ variable.

```python
def second_element(my_list):
  match my_list:
    case [_first, second, *_]:
      return second
    case _:
      return "nothing"

second_element([6])
'nothing'
```


___

==We can build on this to match only lists and tuples with a certain constant value in a specific place.==

```python
def amir_is_first(my_list):
  match my_list:
    case ["Amir", *_]:
      return True
    case [*_]:
      return False
amir_is_first(["Amir", "Betty", "Cindy"])
True
amir_is_first(["Betty", "Cindy", "Amir"])
False
```


___

Python's match is powerful and works with many data types. The next example decides which actions a user can take based on their "role" attribute. There are three roles with increasing access: "user", "manager", and "admin".

In the next example, we match dicts like case {"role": "admin"}. That doesn't mean "only match dicts with only that key and that value." Instead, it means "match any dict where "role" is "admin", even if there are other keys present."

```python
def allowed_actions(user):
  match user:
    case {"role": "admin"}:
      return ("log-in", "view-other-users", "delete-users")
    case {"role": "manager"}:
      return ("log-in", "view-other-users")
    case _:
      return ("log-in",)

def action_is_allowed(user, action):
  return action in allowed_actions(user)

amirUser = {"name": "Amir", "role": "user"}
bettyManager = {"name": "Betty", "role": "manager"}
cindyAdmin = {"name": "Cindy", "role": "admin"}
```

```python
action_is_allowed(amirUser, "log-in")
True
```

```python
action_is_allowed(amirUser, "view-other-users")
False
```

___
==A case can also match on the value's type (its class) and its attributes. It can even extract specific attributes to store in variables.==

The next example does both of those things. We have two cases that select cats where vaccinated is True or False. ==Both cases extract the cats' name attributes.==

```python
class Cat:
  def __init__(self, name, vaccinated):
    self.name = name
    self.vaccinated = vaccinated

def vaccination_status(cat):
  match cat:
    case Cat(name=name, vaccinated=True):
      return f"{name} is vaccinated"
    case Cat(name=name, vaccinated=False):
      return f"{name} is not vaccinated"
    case _:
      return "That's not a cat!"
```

```python
keanu = Cat("Keanu", True)
vaccination_status(keanu)
True
```

___

==cases can match multiple conditions at once. We do that with |, which often means "or" in programming languages.==

```python
def is_list_or_tuple(value):
  match value:
    case [*_] | (*_, ):
      return True
    case _:
      return False
```

That case expression contains a lot of punctuation, so let's break it down:

- [*_] matches any list with any number of elements.
- (*_, ) matches any tuple with any number of elements. Remember, the , makes it a tuple!
- | means "match when either one of these two patterns matches".

```python
is_list_or_tuple([1, 2, 3])
True
```
