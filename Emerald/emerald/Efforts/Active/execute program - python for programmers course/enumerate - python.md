---
part of:
  - "[[python programming language]]"
related:
  - "[[Enumerate Function]]"
quality: 8
value: 7
interest: 6
tags:
  - function
---

    fruits = ['apple', 'banana', 'cherry']
    for i, fruit in enumerate(fruits):
        print(f"{i}: {fruit}")

  Output:

    0: apple
    1: banana
    2: cherry

  As you can see,  enumerate  returns an iterator that produces tuples, where
  the first element of the tuple is the index (starting from 0) and the second
  element is the value from the original sequence.

  Where  sequence  is the sequence you want to iterate over.

  Here's an example:

    fruits = ['apple', 'banana', 'cherry']
    for i, fruit in enumerate(fruits):
        print(f"{i}: {fruit}")

  Output:

    0: apple
    1: banana
    2: cherry

  As you can see,  enumerate  returns an iterator that produces tuples, where
  the first element of the tuple is the index (starting from 0) and the second
  element is the value from the original sequence.

  You can also specify a starting index using the  start  parameter:
                                                                                                                 Where  sequence  is the sequence you want to iterate over.

  Here's an example:

    fruits = ['apple', 'banana', 'cherry']
    for i, fruit in enumerate(fruits):
        print(f"{i}: {fruit}")

  Output:

    0: apple
    1: banana
    2: cherry

  As you can see,  enumerate  returns an iterator that produces tuples, where
  the first element of the tuple is the index (starting from 0) and the second
  element is the value from the original sequence.

  You can also specify a starting index using the  start  parameter:

    fruits = ['apple', 'banana', 'cherry']

  A fundamental concept in Python!

   enumerate  is a built-in Python function that allows you to loop over a
  sequence (such as a list, tuple, or string) and have an automatic
  counter/index along with the values.

  The basic syntax is:

    enumerate(sequence)

  Where  sequence  is the sequence you want to iterate over.

  Here's an example:

    fruits = ['apple', 'banana', 'cherry']
    for i, fruit in enumerate(fruits):
        print(f"{i}: {fruit}")

  Output:

    0: apple
    1: banana
    2: cherry

  As you can see,  enumerate  returns an iterator that produces tuples, where
  the first element of the tuple is the index (starting from 0) and the second
  element is the value from the original sequence.

  You can also specify a starting index using the  start  parameter:

```python
fruits = ['apple', 'banana', 'cherry']
for i, fruit in enumerate(fruits, start=2):
	print(f"{i}: {fruit}")
```

  Output:

    1: apple
    2: banana
    3: cherry

  Some **uses** of  enumerate  include:

  1. Iterating over a sequence with an index: When you need to perform an
  operation on each element of a sequence and also need to know the index of
  the element.
  2. Creating a dictionary with indices as keys: You can use  enumerate  to
  create a dictionary where the keys are the indices and the values are the
  corresponding elements from the sequence.
  3. Implementing algorithms that require indexing: Such as sorting,
  searching, or modifying elements in a sequence based on their indices.