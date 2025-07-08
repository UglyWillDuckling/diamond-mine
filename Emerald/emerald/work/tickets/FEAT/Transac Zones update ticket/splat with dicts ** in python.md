---
about: "[[python programming language]]"
part of:
  - "[[python programming language]]"
value: 7
interest: 7
quality: 5
tags:
  - howto/python
---
  In Python, the  **  operator is used to unpack dictionaries or keyword arguments in function calls. Here are some examples:

## Unpacking dictionaries

    dict_1 = {'a': 1, 'b': 2}
    dict_2 = {'c': 3, 'd': 4}

    merge_dict = {**dict_1, **dict_2}
    print(merge_dict)  # Output: {'a': 1, 'b': 2, 'c': 3, 'd': 4}

##  Unpacking keyword arguments

    def my_function(a, b, c):
        return a + b + c

    kwargs = {'a': 1, 'b': 2, 'c': 3}
    result = my_function(**kwargs)  You're referring to the "splat" operator ( * ) in Python, specifically when
  used with lists!

  In Python, the  *  operator is used to unpack iterables, such as lists,
  tuples, or strings, into separate arguments. This is often referred to as
  the "splat" operator.

  Here are some examples of using the  *  operator with lists:

  Unpacking a list into function arguments

    def my_function(a, b, c):
        print(a, b, c)

    my_list = [1, 2, 3]
    my_function(*my_list)  # Output: 1 2 3

  In this example, the  *  operator is used to unpack the  my_list  list into
  separate arguments for the  my_function  function.

  Merging lists

    list1 = [1, 2, 3]
    list2 = [4, 5, 6]
    merged_list = [*list1, *list2]
    print(merged_list)  # Output: [1, 2, 3, 4, 5, 6]

  Here, the  *  operator is used to merge two lists into a single list.

  Creating a new list with repeated values

    my_list = [1, 2, 3]
    new_list = [*my_list, *my_list]
    print(new_list)  # Output: [1, 2, 3, 1, 2, 3]

  In this example, the  *  operator is used to create a new list with repeated
  values from the original list.

  These are just a few examples of how the  *  operator can be used with lists
  in Python. I hope this helps!
    print(result)  # Output: 6

  The  **  operator is also used to define **variable-length keyword arguments** in function definitions.
  
    def my_function(**kwargs):
        print(kwargs)

    my_function(a=1, b=2, c=3)  # Output: {'a': 1, 'b': 2, 'c': 3}
