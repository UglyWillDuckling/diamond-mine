---
tags:
  - lesson
  - course-lesson
---
`note:note`
Stands for **keyword arguments**

By default, function arguments are positional. The first argument is associated to the first function argument, the second argument to the second function argument, and so on.

___

Python gives us a way to make our function calls more explicit: we can specify the arguments' names in the function call itself. When we label the arguments in this way, we can pass them in any order.

Note: this code example reuses elements (variables, etc.) defined in earlier examples.
>
cat_age(name="Keanu", age=2)
Result:
'Keanu is 2'
Note: this code example reuses elements (variables, etc.) defined in earlier examples.
>
cat_age(age=2, name="Keanu")
Result:
'Keanu is 2'
These are called keyword arguments, or "kwargs" for short, by contrast to the more common "positional arguments".

We can mix positional arguments and keyword arguments in the same function call.

Note: this code example reuses elements (variables, etc.) defined in earlier examples.
>
cat_age("Keanu", age=2)
Result:
'Keanu is 2'
There's an important restriction on kwarg syntax: kwargs must come after positional arguments. If we try to put kwargs before the positional arguments, that's a SyntaxError.

Note: this code example reuses elements (variables, etc.) defined in earlier examples.
>
cat_age(name="Keanu", 2)
Result:
SyntaxError: positional argument follows keyword argument (`<string>`, line 4)

Kwargs must match the argument names in the function's definition. If we change the name of the function argument, any function calls referencing the old name will cause a TypeError.

Note: this code example reuses elements (variables, etc.) defined in earlier examples.
>
cat_age(name="Keanu", age_in_years=2)
Result:
TypeError: cat_age() got an unexpected keyword argument 'age_in_years'

Good argument names are especially important when the arguments are passed as kwargs. There are two reasons for that.

First, we see the name every time we pass it as a kwarg, so that name appears in much more code. If it's a confusing name, that confusion can happen every time we pass it as a kwarg.

Second, arguments that are passed as kwargs are more difficult to rename. If we rename the age argument, existing positional calls like cat_age("Keanu", 2) will continue to work. But kwargs calls like cat_age("Keanu", age=3) will now fail because the argument is no longer named age. If we ever change the argument name in the function's definition, we'll have to update all of the calls that use kwargs. Using a good name up front makes future renames less likely.

Sometimes we want to force callers to pass arguments as keywords. In these cases, we can declare some arguments as keyword-only.

In the function argument list, a * means that all arguments following the * must be passed as keyword arguments. In the next example, the age argument is keyword-only. Trying to pass age as a positional argument is an error.

> def cat_age(name, *, age):
  return f"{name} is {age}"

cat_age("Keanu", 2)
Result:
TypeError: cat_age() takes 1 positional argument but 2 were given
Note that the * in the function's argument list looks like it might be another argument, but it's not. The function cat_age still has two arguments.

>
def cat_age(name, *, age):
  return f"{name} is {age}"

>
cat_age("Keanu", age=2)
Result:
'Keanu is 2'

The built-in .sort method on lists is a good example of kwargs in practice. It sorts list elements in increasing order.

>
my_list = [4, 2, 3]
my_list.sort()
my_list
Result:
[2, 3, 4]

We can sort in reverse order via the reverse kwarg.

>
my_list = [4, 2, 3]
my_list.sort(reverse=True)
my_list
Result:
[4, 3, 2]

But we can't pass the reverse argument positionally! Trying to do that is an error.

>
my_list = [4, 2, 3]
my_list.sort(True)
my_list
Result:
TypeError: sort() takes no positional arguments

Using keyword-only arguments is a tradeoff. It forces callers to write more explicit code, which usually makes that code easier to read. But specifying the argument names in each call is also more verbose. Keyword-only arguments make sense in some cases, but using them in every function definition would be a bad idea.

In the case of .sort's reverse argument, the keyword-only argument definitely helps to keep .sort calls readable. Imagine that you've never heard of the reverse argument, and you come across some_list.sort(True). What does that True mean? We'd have to look at the documentation to find out. But some_list.sort(reverse=True) is quite clear, even if you've never seen the reverse argument before.

