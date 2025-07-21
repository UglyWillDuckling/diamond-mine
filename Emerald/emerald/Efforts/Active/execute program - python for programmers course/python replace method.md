---
part of:
  - "[[python programming language]]"
related:
  - "[[More String Methods Lesson]]"
---
 In Python, you can replace a string using the  replace()  method. Here are a
  few examples:

  Simple replacement

    original_string = "hello world"
    new_string = original_string.replace("world", "universe")
    print(new_string)  # Output: "hello universe"

  Replace multiple occurrences

    original_string = "hello world world"
    new_string = original_string.replace("world", "universe")
    print(new_string)  # Output: "hello universe universe"

  Replace with a regex pattern

    import re
    original_string = "hello 123 world"
    new_string = re.sub(r'\d+', '', original_string)  # Replace one or more
  digits with an empty string
    print(new_string)  # Output: "hello  world"

  Replace with a string formatting

    original_string = "hello {name}"
    new_string = original_string.replace("{name}", "John")
    print(new_string)  # Output: "hello John"

  Note that the  replace()  method returns a new string and does not modify
  the original string.

  Also, you can use the  translate()  method to replace multiple strings at
  once:

    original_string = "hello world"
    translation_table = str.maketrans({"w": "u", "o": "e"})
    new_string = original_string.translate(translation_table)
    print(new_string)  # Output: "hello ueerd