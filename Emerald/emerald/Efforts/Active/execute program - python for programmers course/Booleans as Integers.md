#course-lesson 

part_of:: [[execute program - python for programmers course]]
___
==Internally, Python represents booleans as integers==. True is represented by 1, and False by 0. Calling int on a boolean converts it to the corresponding integer.

```python
True + True + False
2
```

Sometimes you'll see this used (some would say abused) in real-world code. For example, we might have a list of dictionaries, and want to count how many dictionaries are not empty.

Remember, an empty dictionary is falsey. Converting it into an bool gives us False, and converting that bool into an int gives us 0.

```python
users = [
  {
    "name": "Amir"
  },
  {
    "name": "Betty"
  },
  {},
]
sum([bool(user) for user in users])
2
```

**less clever solution**
```python
len([user for user in users if user])
2
```

**or**
```python
len([user for user in users if len(user) > 0])
```