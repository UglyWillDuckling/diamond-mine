---
about: "[[python programming language]]"
part of:
  - "[[python programming language]]"
quality:
value:
interest:
tags:
  - howto/python
---
  In Python, the  *  operator is used to unpack iterables, such as lists,  tuples, or strings, into separate arguments. 
  This is often referred to as the "splat" operator.
___


  Here are some examples of using the  *  operator with lists:

  Unpacking a list into function arguments

```python
    def my_function(a, b, c):
        print(a, b, c)

    my_list = [1, 2, 3]
    my_function(*my_list)  # Output: 1 2 3
```

  In this example, the  *  operator is used to unpack the  my_list  list into **separate arguments** for the  my_function  function.

## Merging lists

    list1 = [1, 2, 3]
    list2 = [4, 5, 6]
    merged_list = [*list1, *list2]
    print(merged_list)  # Output: [1, 2, 3, 4, 5, 6]

  Here, the  *  operator is used to merge two lists into a single list.

##  Creating a new list with repeated values

    my_list = [1, 2, 3]
    new_list = [*my_list, *my_list]
    print(new_list)  # Output: [1, 2, 3, 1, 2, 3]

  In this example, the  *  operator is used to create a new list with repeated values from the original list.
