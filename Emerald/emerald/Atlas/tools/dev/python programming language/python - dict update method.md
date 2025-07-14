---
part of:
  - "[[python programming language]]"
related:
  - "[[Even More Dict Methods lesson]]"
  - "[[python - how to create dict from keys]]"
  - "[[python dicts items method]]"
about:
  - "[[python dicts]]"
value: 7
quality: 7
interest: 6
relat:
---
In Python, the  `update()`  method is used to update a dictionary with new key-value pairs or to modify existing ones.
___

## Syntax

The syntax for the  update()  method is:

    dict.update(other_dict)

  Where  `other_dict`  is another dictionary that contains the new key-value
  pairs to be added or updated in the original dictionary.

##  Example

    d = {'a': 1, 'b': 2}
    d.update({'b': 3, 'c': 4})
    print(d)  # Output: {'a': 1, 'b': 3, 'c': 4}

  In this example, the original dictionary  d  is updated with new values for
  key  'b'  and a new key-value pair for key  'c' .

  ** What happens when updating a dictionary **

  When you call  update()  on a dictionary, the following happens:

  1. If a key is present in both the original dictionary and the  other_dict ,
  the value from  other_dict  **will overwrite the value in the original**
  **dictionary.**
  2. If a key is present in  other_dict  but not in the original dictionary, a
  **new key-value pair will be added to the original dictionary.**
  3. If a key is present in the original dictionary but not in  other_dict ,
  **the key-value pair will remain unchanged in the original dictionary.**

##  Updating with keyword arguments

  ==In Python 3.9 and later, you can also use  update()  with keyword arguments==
  like this:

```python
d = {'a': 1, 'b': 2}
d.update(b=3, c=4)
print(d)  # Output: {'a': 1, 'b': 3, 'c': 4}
```

  This is equivalent to calling  update()  with a dictionary created from the
  keyword arguments.

  ** Return value **

  The  update()  method returns  None , as it modifies the original dictionary
  in place.