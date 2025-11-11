---
about: "[[python programming language]]"
part of:
  - "[[python programming language]]"
related:
  - "[[Unpacking lesson]]"
status:
  - wip
value: 7
quality: 7
---
==In Python, unpacking refers to the process of extracting elements from an iterable (such as a list, tuple, or string) and assigning them to multiple variables==. 

This is a powerful feature that allows you to concisely and elegantly manipulate data structures.
___
### Simple Unpacking

```python
    numbers = [1, 2, 3]
    a, b, c = numbers
    print(a, b, c)  # Output: 1 2 3
```

### Unpacking with Multiple Values

```python
fruits = ['apple', 'banana', 'orange', 'grape']
a, *b, c = fruits
print(a, b, c)  # Output: apple ['banana', 'orange'] grape
```

  ==In this example, the  *b  syntax is used to capture multiple values from the list and assign them to a single variable  b== .

### Unpacking with Dictionary

```python
person = {'name': 'John', 'age': 30, 'city': 'New York'}
name, age, city = person.values()
print(name, age, city)  # John 30 New York
```

- ! be carefule as the iteration is based on the elements **order**

### Unpacking with Nested Iterables

```python
matrix = [[1, 2], [3, 4], [5, 6]]
for x, y in matrix:
	print(x, y)
# Output:
# 1 2
# 3 4
# 5 6
```

###  Unpacking with the `zip` Function

```python
    names = ['John', 'Mary', 'David']
    ages = [25, 31, 42]
    for name, age in zip(names, ages):
        print(f"{name} is {age} years old.")
    # Output:
    # John is 25 years old.
    # Mary is 31 years old.
    # David is 42 years old.
```

see [[zip function - python]]
### Extended Unpacking (Python 3.8+)

```python
numbers = [1, 2, 3, 4, 5]
*a, b, c = numbers
print(a, b, c)  # Output: [1, 2, 3] 4 5
```

  ==In Python 3.8 and later, you can use the  *  syntax to capture multiple values before the last two variables.==
  
see [[extended unpacking - python]]