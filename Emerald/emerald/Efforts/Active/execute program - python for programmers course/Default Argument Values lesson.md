#course-lesson 

related_lessons:: [[kwargs lesson]]
____

Sometimes we want to make an argument optional. The next example makes excited optional, defaulting to False. Note the difference in the def line.

```python
def greet(name, excited=False):
  punctuation = ("!" if excited else ".")
  return f"Hello {name}{punctuation}"
```

Default arguments can seem simple at first, but there's one important catch, which has led to many subtle bugs in real-world systems. The question is: when does Python evaluate the default value? Try to guess what value we get in the next example.

>
default_value = 3

 When is the default value evaluated? Once, when the function is defined? Or
each time the function is called?

```python
def f(x=default_value):
  return x

default_value = 4
f()
3
```

There are two possible ways for that code to work, both of which make some sense:

- ✅ The default value expression is evaluated only once, when the function is defined. If default_value changes later, x's default value is still 3. This is how Python works.
- ❌ The default value expression is evaluated every time the function is called. If default_value changes, and we then call the function, x gets the new value of 4. This is how JavaScript and Ruby work.

