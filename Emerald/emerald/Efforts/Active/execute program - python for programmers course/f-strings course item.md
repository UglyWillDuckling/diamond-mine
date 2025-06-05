---
tags:
  - course-item
type: course-item
part of:
  - "[[execute program - python for programmers course]]"
---
Like many programming languages, Python lets us build up strings with the + operator.

>
country = "France"
name = "Amir"
"Hello from " + country + ", " + name + "!"
Result:
'Hello from France, Amir!'
That works, but it's often awkward. For example, it's easy to miss the space characters at the end of "Hello from " and ", ". There's also a lot of punctuation, which adds clutter to the expression.

Python has a nicer syntax for building strings like this one. Formatted string literals ("f-strings" for short) let us reference variables from within the string. Here's what the string above looks like as an f-string.

>
country = "France"
name = "Amir"
f"Hello from {country}, {name}!"
Result:
'Hello from France, Amir!'
The f before the string makes it an f-string, where curly braces indicate {variables} to include in the string.

Combining strings and non-strings with + is an error. F-strings are more flexible: they automatically convert each expression into a str.

>
weeks = 12
f"{weeks} weeks remaining"
Result:
'12 weeks remaining'
>
weeks = 12
weeks + " weeks remaining"
Result:
TypeError: unsupported operand type(s) for +: 'int' and 'str'
We can put any expression inside of an f-string's {braces}. That includes operators, function calls, accessing attributes, etc.

>
value = 5
f"Doubling {value} makes {2 * value}"
Result:
'Doubling 5 makes 10'
Inside f-strings, we use {curly braces} to mark expressions. But what if we actually want a { character in the string?

Inside of an f-string, {{ becomes a single { in the output. Likewise, }} becomes }. When we do this, {{ and }} no longer have their usual "include an expression" meaning. They only result in literal { and } characters!

>
name = "Amir"
message = f"Hello, {{name}}"
message
Result:
'Hello, {name}'

At first, f-strings seem similar to string interpolation in other languages, since they allow us to include variables and other expressions in strings. But f-strings can do much more than that. For example, they can add left and right padding to strings, customize the sign and number of digits for numbers, convert numbers to other bases like hexadecimal, control separators in numbers (1,000 vs. 1000), and much more. Rather than listing out the many options here, we recommend waiting until you actually need fine-grained control of string generation, especially for formatting numbers. When you need it, look up the "Format Specification Mini-Language" (i.e., f-string language) syntax.

Fortunately, the basic {curly brace} syntax is relatively simple. It's also very common: most modern Python codebases use it, and we recommend using it often!


## code problem

```python
def welcome_message(name, credit_count):
  """
  Returns a string welcoming the user, and telling them how many free credits
  they have.
  """
  return f"Welcome, {name}! Please enjoy {credit_count} free credits."
```

[[kwargs lesson]]