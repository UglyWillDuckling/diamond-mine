---
part of:
  - "[[python programming language]]"
related:
  - "[[More String Methods Lesson]]"
  - "[[python replace method]]"
---
  In Python, you can use the  strip()  method to remove leading and trailing
  characters from a string. Here are some examples:

## Removing whitespace characters

    my_string = "   Hello World   "
    stripped_string = my_string.strip()
    print(stripped_string)  # Output: "Hello World"

  By default,  strip()  removes whitespace characters (spaces, tabs, newline
  characters, etc.) from both ends of the string.

## Removing specific characters

    my_string = "<<<Hello World>>>"
    stripped_string = my_string.strip("<>")
    print(stripped_string)  # Output: "Hello World"

  ==You can pass a string of characters to  strip()  to remove those specific characters from both ends of the string.==

```python
    my_string = "   Hello World   "
    stripped_string = my_string.lstrip()  # remove leading whitespace
    print(stripped_string)  # Output: "Hello World   "

    stripped_string = my_string.rstrip()  # remove trailing whitespace
    print(stripped_string)  # Output: "   Hello World"
```

📔**Note** that  strip()  and its variants **only remove characters from the ends of the string**, not from the middle. 
	If you need to remove characters from the middle of a string you'll need to use a different method, such as replace()  or `regular expressions`.
  
  [[python replace method]]
  