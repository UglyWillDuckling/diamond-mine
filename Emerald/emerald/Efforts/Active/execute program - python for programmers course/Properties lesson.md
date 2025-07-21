---
tags:
  - course-lesson
part of:
  - "[[execute program - python for programmers course]]"
about:
  - "[[python class properties]]"
  - "[[python programming language]]"
quality: 9
value: 8
rating: 8
---
Suppose that we have a User class with two fields: .name and .email. The email address always matches the user's name: `<name>`@example.com. We want the email address to update automatically when the user's name changes.

We have several options for how to expose that email address. One solution is to define a .email() method on the class. That works, but calling betty.email() feels a bit awkward. We expect .email to be an attribute holding some data, rather than a method.

Another solution is to assign a .email attribute in the constructor.

```python
class User:
  def __init__(self, name):
    self.name = name
    self.email = f"{self.name.lower()}@example.com"

user = User("Betty")
(user.name, user.email)
('Betty', 'betty@example.com')
```

But now the .email attribute won't update if the user's name changes.
___
T**he problem is that our class above doesn't properly express the relationship between name and email.** 

Our code says: "the email is derived from the name that existed when the user was created." What we want is: "the email is derived from the user's current name."

Fortunately, Python gives us the best of both worlds: 
==we can define a method, then use the built-in property decorator to access it like an attribute.== 

In the next example, every time we access .`email`, Python calls .`get_email`. This example is written without the decorator syntax, so we can see what's happening.

```python
class User:
  def __init__(self, name):
    self.name = name

  def get_email(self):
    return f"{self.name.lower()}@example.com"

  email = property(get_email)
```

```python
user = User("Betty")
user.name = "Cindy"
user.email
'cindy@example.com'
```

That solves the problem: now the email address looks like an attribute, but it automatically stays in sync with the name.

## decorator

==We can use the decorator syntax, @property, to apply property directly to .get_email.== 

We'll rename the method to .`email`, keeping the class's public interface consistent with what we saw above.

```python
class User:
  def __init__(self, name):
    self.name = name

  @property
  def email(self):
    return f"{self.name.lower()}@example.com"
```
`@: @property is key`

%%think: the decorator basically allows for any variation on the concept of a dynamic field, so that any method can be used as an attribute without the client ever knowing and thus any property can internally be dynamic.
This is very much in the style of OOP where there is very little difference between object properties and it's return methods. I.e. the implemention is fully hidden.  %%

```python
user = User("Betty")
user.email
'betty@example.com'
```

Python "properties" look like attributes from the outside, but they actually call functions when accessed. 

If you're familiar with JavaScript, this may be confusing, because JavaScript uses the term "property" for what Python calls an "attribute". ==But remember, in Python, attributes and properties are different things!==

We can set attributes with `some_object.some_attribute = some_value`, **but we can't do that with properties like the one shown above**. 

If we try to assign a value to the property, we get an `AttributeError`.

```python
user = User("Betty")
user.email = 'amir@example.com'
user.email

AttributeError: property 'email' of 'User' object has no setter
```

Depending on your background, the word "setter" in that error message might look familiar. The function that we passed to property is called a "getter", since it's called when we "get" the property's value.

==To update the value, we need to provide a "setter" function as the second argument to property.== When we assign a new value to a property, Python automatically calls the setter function with the new value as an argument.[^1] 

%%think: so setters aren't dynamic. This then allows for immutable properties %%

In the next example, users can have a favorite color, via what looks like a simple .favorite_color attribute. But internally, .favorite_color is a property with a getter and setter method. Together, they manage a log of the user's past favorite colors.

When we access .favorite_color, the getter returns the last item in the list, `self.favorite_color_log[-1].` When we set a new value, the setter appends it to the list.

We'll begin by creating the property manually, not using decorator syntax.

```python
class User:
  def __init__(self, favorite_color):
    self.favorite_color_log = []
    # Note that this assignment uses the property setter, even though we're
    # inside of the constructor.
    self.favorite_color = favorite_color

  def get_favorite_color(self):
    return self.favorite_color_log[-1]

  def set_favorite_color(self, new_value):
    self.favorite_color_log.append(new_value)

  favorite_color = property(get_favorite_color, set_favorite_color)
```

```python
indecisive_user = User("red")
indecisive_user.favorite_color = "yellow"
indecisive_user.favorite_color = "blue"
indecisive_user.favorite_color
Result:
'blue'
```

**We can also use the decorator syntax,** which is generally considered more readable. This is a situation we haven't seen before: the property involves two different functions, a getter and a setter, but a decorator only applies to one function at a time.

We initially define the getter in the familiar way, by wrapping the `.favorite_color` method with `@property`. Then we define a setter by wrapping the setter method in `@favorite_color.setter.`



```python
class User:
  def __init__(self, favorite_color):
    self.favorite_color_log = []
    # Note that this assignment uses the property setter, even though we're
    # inside of the constructor.
    self.favorite_color = favorite_color

  @property
  def favorite_color(self):
    return self.favorite_color_log[-1]

  @favorite_color.setter
  def favorite_color(self, new_value):
    self.favorite_color_log.append(new_value)
```


```python
indecisive = User("red")
indecisive.favorite_color = "yellow"
indecisive.favorite_color = "blue"
indecisive.favorite_color_log
['red', 'yellow', 'blue']
```

That might look very strange at first: it looks like we're defining two methods named .favorite_color. 

But remember that the decorated functions like def `favorite_color` are only used as arguments to the decorator. 

==The @property decorator creates the property, which only has a getter at that point. Then the @favorite_color.setter property replaces it with a new property that has both a getter and a setter.==

Properties are helpful in several real-world situations. One important use case is in refactoring.

Imagine that we need to rename an object attribute from .id to .name. But other teams use this code, and rely on the existing .id attribute. We can't delete it right now, because that would break their code.

```python
class User:
  def __init__(self, name):
    self.name = name

  @property
  def id(self):
    # name used to be called id
    return self.name

  @id.setter
  def id(self, value):
    self.name = value
```

%%think: not the best of examples I have to say. %%

> [!tip] 
> Often, we'll add a property like this, but also have it print a deprecation warning to the console. The deprecation warning tells other teams that they need to update their code, because we'll remove the old .id attribute eventually.

## code problem

We're working with a `BookObject` class that keeps track of changes to book titles over time. It uses Java-style getters and setters, like some_book.get_title() and some_book.set_title(new_title).

We want to wrap `BookObject` with a new class, Book, using Python properties. That way, we can get the latest title with some_book.title and update it with some_book.title = new_title.

Finish implementing the Book class by defining a .`title` getter and setter using @property. You'll need to define a getter and a setter that each call the existing methods on self._inner, the BookObject instance.

```python
class BookObject:
  def __init__(self, id):
    self.id = id

  book_db = {
    1: {
      "title_revisions": ["Pretty Powerful Poetry", "Powerful Poetry"]
    },
    2: {
      "title_revisions": ["Badgers In Paradise"]
    },
    3: {
      "title_revisions": ["Many Melodies"]
    },
  }

  def get_title(self):
    # The current title is the last entry in the title revisions.
    return self.book_db[self.id]["title_revisions"][-1]

  def set_title(self, new_title):
    self.book_db[self.id]["title_revisions"].append(new_title)

class Book:
  def __init__(self, id):
    self._inner = BookObject(id)

  @property
  def title(self):
    return self._inner.get_title()

  @title.setter
  def title(self, t):
    self._inner.set_title(t)


```

One final note about properties. Python calls the underlying function whenever we access the property. This is good, because it lets the property stay up to date as the object's data changes. We saw an example of that early in this lesson, where .email was computed from .name.

However, properties can cause performance issues for the same reason. If the function is slow and we access the property a lot, we can spend a lot of CPU time re-computing the same value over and over again. It's important to keep this in mind whenever you use properties. In almost all cases, a property's functions should do very little work.





[^1]: [[immutable properties]]