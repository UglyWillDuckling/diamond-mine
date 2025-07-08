---
part of:
  - "[[python programming language]]"
quality: 6
value: 5
interest: 7
related:
  - "[[popitem - dict - python]]"
covered_in:
  - "[[Defaultdict lesson]]"
---
#tool/python
 
 In Python,  **defaultdict**  is a useful data structure that allows you to
  create a dictionary with a default value for keys that are not present in
  the dictionary. It's a part of the  collections  module.

  What is a defaultdict?

  ==A  defaultdict  is a subclass of the built-in  dict  type in Python.== 
  
  It's a dictionary that, when you try to access a key that doesn't exist, returns a
  default value instead of raising a  KeyError .

  How to create a defaultdict?

  To create a  defaultdict , you need to import the  defaultdict  class from
  the  collections  module and specify the default value as an argument:

    from collections import defaultdict

    d = defaultdict(int)  # default value is 0

  In this example, we create a  defaultdict  with a default value of  0 . This
  means that if we try to access a key that doesn't exist, the dictionary will
  return  0  instead of raising a  KeyError .

  Using a defaultdict

  Here's an example of how you can use a  defaultdict :

    d = defaultdict(int)

    d['a'] = 1
    print(d['a'])  # prints 1
    print(d['b'])  # prints 0, because 'b' is not present in the dictionary
    d['c'] += 1
    print(d['c'])  # prints 1

  As you can see, when we access a key that doesn't exist, the dictionary
  returns the default value (0  in this case). 
  
  ==We can also use the defaultdict  as a regular dictionary, and it will behave as expected.==

### Benefits of using a defaultdict

  Using a  defaultdict  can simplify your code in several ways:

  1. Avoiding **KeyErrors**: With a  defaultdict , you don't need to worry about
  KeyError s when accessing keys that might not exist.
  2. **Simplifying** code: You can write more concise code by avoiding the need
  for  if  statements to check if a key exists before accessing it.
  3. Reducing boilerplate code: A  defaultdict  can reduce the amount of code
  you need to write to handle default values.

### Common use cases for defaultdict

  1. **Counting** elements: You can use a  defaultdict  to count the frequency of
  elements in a list or other iterable
  2. **Initializing** variables: You can use a  defaultdict  to initialize variables with a **default value**
  3. **Building graphs**: A  defaultdict  can be useful when building graphs, where you need to keep track of nodes and edges