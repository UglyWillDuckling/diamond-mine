---
tags:
  - howto/python
quality: 4
value: 5
interest: 4
---
 You want to create a Python dictionary from a list of keys. Here are a few
  ways to do it:

### Method 1: Using dictionary **comprehension** [^1] 

```python
    keys = ['a', 'b', 'c', 'd']
    dict_from_keys = {key: None for key in keys}
    print(dict_from_keys)  # Output: {'a': None, 'b': None, 'c': None, 'd': None}
```

### Method 3: Using dict.fromkeys() [^2]
[[Even More Dict Methods lesson#fromkeys]]

```python
keys = ['a', 'b', 'c', 'd']
    dict_from_keys = dict.fromkeys(keys)
    print(dict_from_keys)  # Output: {'a': None, 'b': None, 'c': None, 'd': None}
```
 
### Method 3: Using a list comprehension and zip()[^3] 

```python
    keys = ['a', 'b', 'c', 'd']
    values = [None] * len(keys)
    dict_from_keys = dict(zip(keys, values))
    print(dict_from_keys)  # Output: {'a': None, 'b': None, 'c': None, 'd':  None}
```

  In all cases, the resulting dictionary has the keys from the original list,
  with default values set to  None . If you want to specify a different
  default value, simply replace  None  with the desired value.

  For example, if you want to create a dictionary with default values of 0,
  you can use:

    keys = ['a', 'b', 'c', 'd']
    dict_from_keys = {key: 0 for key in keys}
    print(dict_from_keys)  # Output: {'a': 0, 'b': 0, 'c': 0, 'd': 0}

___
see also: [[unpacking in python]] and [[Unpacking lesson]]

[^1]: [[`comprehensions lession]]
[^2]: [[Even More Dict Methods lesson]]
[^3]: [[python - comprehensions]]