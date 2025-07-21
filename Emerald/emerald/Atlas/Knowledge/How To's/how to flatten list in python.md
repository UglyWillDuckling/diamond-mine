---
about: "[[python programming language]]"
quality: 8
value: 7
interest: 7
tags:
  - howto/python/list
---
Using the Python In-build sum() method In this example, we are using a python In-build sum() method which will give us a flat list.

- & we need to provide the default value of `[]`

```python
lis = [[11, 22, 33, 44], [55, 66, 77], [88, 99]]
flatList = sum(lis, [])

print('New list', flatList)
New list [11, 22, 33, 44, 55, 66, 77, 88, 99]
```