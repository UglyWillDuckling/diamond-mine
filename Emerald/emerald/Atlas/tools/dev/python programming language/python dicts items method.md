---
part of:
  - "[[python programming language]]"
  - "[[python dicts]]"
covered_in:
  - "[[execute program - python for programmers course]]"
  - "[[Even More Dict Methods lesson]]"
tags:
  - tool/python
  - python/dict/method
---
  The  items()  function returns a view object that displays a list of a dictionary's key-value tuples. 
  
  ==This view object is an iterator that provides a dynamic view of the dictionary's items, which means it reflects any==
  ==changes made to the dictionary.==

```python
    d = {'a': 1, 'b': 2, 'c': 3}
    print(d.items())  # Output: dict_items([('a', 1), ('b', 2), ('c', 3)])
```

  ==The  items()  function is useful when you need to iterate over a dictionary's key-value pairs.==
   
   You can use it in a  **for**  loop
```python
    d = {'a': 1, 'b': 2, 'c': 3}
    for key, value in d.items():
        print(f"{key}: {value}")
    # Output:
    # a: 1
    # b: 2
    # c: 3
```

> [!warning] Undefined when modifying
 if you modify the dictionary while iterating over its items, the behavior is undefined. 
 **This is because the  items()  view is dynamic, and changes to the dictionary can affect the iteration.**
