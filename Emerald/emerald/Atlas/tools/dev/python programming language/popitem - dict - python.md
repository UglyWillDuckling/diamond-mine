---
related:
  - "[[Dictionary Methods]]"
  - "[[python dicts items method]]"
  - "[[splat with dicts ** in python]]"
  - "[[Even More Dict Methods lesson]]"
part of:
  - "[[python programming language]]"
covered_in:
  - "[[Even More Dict Methods lesson]]"
value: 5
quality: 6
interest: 5
---
#tool/python 

   **popitem**()  is a method in Python that removes and returns the last inserted item
  from a dictionary (also known as a hash map or associative array). 
  It's a part of the  dict  class, which means you can call it on any dictionary object.

  Here's the syntax:

    my_dict.popitem()

  Where  `my_dict`  is the dictionary **from which you want to remove an item.**

  Here's an example:

    my_dict = {'a': 1, 'b': 2, 'c': 3}
    removed_item = my_dict.popitem()
    print(removed_item) # ('a', 1)

  ==Also, if the dictionary is empty, calling  popitem()  will raise a  KeyError==.
  
   
from [[Even More Dict Methods lesson]]:
![[Even More Dict Methods lesson#popitem]]