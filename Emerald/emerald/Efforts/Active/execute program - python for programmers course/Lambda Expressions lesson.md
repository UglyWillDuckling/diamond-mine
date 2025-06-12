---
tags:
  - course-lesson
---
Some languages, most notably JavaScript, have function definitions that are also expressions. That lets us assign function definitions to variables. Here's some JavaScript code that defines a variable with const double and assigns a function to it:

```js
// This is JavaScript, not Python!
const double = function (x) {
  return x * 2
};
double(3);
6
```

We can't do that with Python's def **because it's a statement, not an expression**. 
The difference is that expressions have values, but statements don't. 1 + 1, f(x), and (name, email) are all expressions. if, for, and def are all statements. We can't say x = if ..., or x = def double(x):[^1]

Trying to assign a def to a variable is a syntax error.

>
double = def double(x): return x * 2
double(3)
Result:
SyntaxError: invalid syntax (`<string>`, line 1)

However, expression syntax for function definitions is useful, so Python has a way to do it: the **lambda keyword**[^2] . Lambdas allow us to define small, inline functions and assign them to variables.
___

```python
add = lambda x, y: x + y
add(2, 3)
```

- ! you can't use **parentheses**  when defining a lambda

Also unlike def, lambdas don't need a return. That's because a lambda's body always contains exactly one expression: never two expressions, and never a statement. Because there's only one expression, **Python knows that we must want to return it.**

Because lambdas can only contain expressions, we can't use if, while, for, def, or assignments with =. All of those are statements. Trying to use any statement inside of a lambda function is a syntax error.

____

Here's a more common, real-world example of how lambdas are used. Lists have a .sort method that we saw briefly in another lesson. It sorts numbers from smallest to largest, and it sorts strings alphanumerically (first from "0" to "9", then from "a" to "z".)

The .sort method takes an optional key argument for exactly this purpose. It calls the key function on each list element, then sorts the list elements according to those sort keys. This is a perfect use case for a lambda!

```python
strings = ["cat", "apple", "boat"]
strings.sort(key=lambda string: len(string))
['cat', 'boat', 'apple']
```

The key function can be any function, whether it was defined with def or lambda. However, key functions are often short, making lambda a good choice.

___

In the 1930s, Alonzo Church used the Greek letter λ (lambda) in what we now call "the lambda calculus", a formal system critical to the early history of computing. For example, the "identity function", a function that returns its argument, is written as λx. x.

The Python lambda syntax is directly descended from Alonzo Church's work, even though a century has passed: lambda x: x. The xs are the same, the λ becomes the word lambda written out, and the . becomes a :. And note that λx. x doesn't have a name, just like lambda x: x doesn't have a name.


[^1]: [[expressions vs statements]]
[^2]: [[lamba in python]]