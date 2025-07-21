---
tags:
  - course-lesson
part of:
  - "[[execute program - python for programmers course]]"
about:
  - "[[python exception handling]]"
related_courses:
  - "[[Custom Exceptions lesson]]"
value: 7
quality: 8
interest: 7
---
Python exceptions include a **traceback**, which shows the call stack at the time when the exception was raised. In other words, it shows the sequence of function calls that eventually led to the raise statement. (This is sometimes called a "backtrace" or a "stack trace" in other languages).

## traceback

We can see the **traceback** by using the standard library's traceback module. In the next example, we use traceback.print_exception to print the exception and its traceback. We pass in file=sys.stdout to print the results to standard output rather than the default, which is standard error.

```python
import traceback
import sys

def main_app():
  raise_exception()

def raise_exception():
  raise KeyError("foo")

try:
  main_app()
except Exception as exc:
  traceback.print_exception(exc, file=sys.stdout)
```

In that code, we caught the exception with except Exception as exc. The as clause puts the exception into a variable with the given name.

Python's Tracebacks are ordered from the outermost function to the innermost. The traceback above shows that the exception was raised inside of raise_exception, which was called by main_app, which was called from the top level of the module.

Most production systems include a top-level exception handler to catch exceptions, then send them to an error tracking service like Sentry, Rollbar, or BugSnag. Internally, those exception handlers use the traceback module to extract the traceback and other information from the exception.

Seeing an exception is often the first step in a debugging session. The more detail the exception includes, the easier it is to figure out what went wrong.

Here's an example: the code below prints from a list of user records. Unfortunately, due to a poor design decision made a long time ago, our system sometimes stores the users' ages as strings. We have a function to replace the ages with their integer values.

```python
import sys
import traceback

users = [
  {
    "name": "Amir",
    "age": "36"
  }, {
    "name": "Betty",
    "age": "41"
  }, {
    "name": "Cindy",
    "age": "30"
  }, {
    "name": "Dalili",
    "age": "3O"
  }
]

def age_to_int(user):
  user["age"] = int(user["age"])
  
22 ms  
Traceback (most recent call last):
23 ms  
  File "<string>", line 28, in <module>
23 ms  
  File "<string>", line 25, in main
23 ms  
  File "<string>", line 21, in age_to_int
23 ms  
ValueError: invalid literal for int() with base 10: '3O'
```

**The offending string contains the letter "O", not the number "0".**

___
## context 

The exception and its traceback give us some basic information about what happened. But a critical detail is missing: which user caused the problem? In this case, we can work it out manually, because only one user has an age of "3O".

In a real system with millions of users, that kind of manual inspection may be difficult. Worse, we might not have access to the problematic data at all, because it only existed at one point in a long data processing pipeline.

==To aid debugging, we need more context.== 

There are many ways to achieve that. **One easy way is to raise a new exception while handling the old one**, from inside of the except: block. Python handles that case very gracefully: it includes information from both exceptions!

```python
def main():
  for user in users:
    try:
      age_to_int(user)
    except Exception:
      raise ValueError(f"Error converting {user['name']}'s age")

try:
  main()
except Exception as exc:
  # Print the exception, including its traceback.
  traceback.print_exception(exc, file=sys.stdout)
####################################################
23 ms  Traceback (most recent call last):
24 ms  File "<string>", line 26, in main
24 ms  File "<string>", line 21, in age_to_int
25 ms  ValueError: invalid literal for int() with base 10: '3O'
25 ms During handling of the above exception, another exception occurred:
25 ms Traceback (most recent call last):
26 ms  File "<string>", line 31, in <module>
26 ms  File "<string>", line 28, in main
26 ms  ValueError: Error converting Dalili's age
```

This updated exception is a lot more helpful! It tells us the specific problem (we failed an int conversion), and it gives us the context where that problem happened (we were trying to convert Dalili's age). Note that we only had to raise a new exception within the except: block, and Python automatically combined that exception with the one that we were currently handling. This is very convenient, but few languages have this feature.

We might guess that Python combines the two tracebacks as strings, then includes that new combined string in the exception. In reality, Python tracks its own runtime information in a more fine-grained way.

Exceptions have a `.__context__` attribute, which stores the context that the exception occurred in. Normally, an exception's `.__context__` is `None`

```python
def divide_by_zero():
  return 12 / 0

exception_context = None
try:
  divide_by_zero()
except Exception as exc:
  exception_context = exc.__context__

exception_context
None
```

==When an exception is raised inside of an except: block, the `.__context__` dunder attribute stores the original exception.== 

The next example is similar to the previous one, but this time we print some exception details, including the context.

```python
def main():
  for user in users:
    try:
      age_to_int(user)
    except Exception:
      raise ValueError(f"Error converting {user['name']}'s age")

try:
  main()
except Exception as exc:
  print("Exception:", exc)
  print("Context:", exc.__context__)
  print("Context's context:", exc.__context__.__context__)
###############################
23 ms  Exception: Error converting Dalili's age
24 ms  Context: invalid literal for int() with base 10: '3O'
24 ms  Context's context: None
```

If we caught that exception and raised another from within the except:, exc.__context__.__context__ would have another value in place of None. And if we caught that one and raised yet another, we'd have another value in exc.__context__.__context__.__context__, and so on.

Note that the exception context is added automatically. But just because one exception contains another, it doesn't mean that one exception caused the other, or even that they're related.

For example, the code in the except: block might have its own bug, which is unrelated to the original exception. If that bug causes a new exception, it will still have the original exception as its .__context__. Here's an example.

```python
def main():
  for user in users:
    try:
      age_to_int(user)
    except Exception as exc:
      # Ignore the exception but print something.
      print(f"Error converting {user['nam']}'s age")

try:
  main()
except Exception as exc:
  # print out details about an error
  traceback.print_exception(exc, file=sys.stdout)

###################
16 ms  
Traceback (most recent call last):
17 ms  
  File "<string>", line 26, in main
18 ms  
  File "<string>", line 21, in age_to_int
18 ms  
ValueError: invalid literal for int() with base 10: '3O'
18 ms  
19 ms  
During handling of the above exception, another exception occurred:
19 ms  
19 ms  
Traceback (most recent call last):
19 ms  
  File "<string>", line 32, in <module>
20 ms  
  File "<string>", line 29, in main
20 ms  
KeyError: 'nam'
```

There are two bugs here, and both are shown in the exception's message. But they're unrelated: neither bug directly caused the other.

## cause

If we're confident that exception A did actually cause exception B, we can express that with raise some_exc from other_exc. This puts `other_exc` **inside of a different dunder attribute,** `some_exc.__cause__`.

While `.__context__` shows that an exception happened inside of another exception, .__cause__ tells us which other exception directly caused this one. The `.__cause__` is None by default unless we raise an exception from other_exc.

```python
def divide_by_zero():
  return 12 / 0

exception_cause = None
try:
  divide_by_zero()
except Exception as exc:
  exc.__cause__

exception_cause
None
```

In an earlier example, we wrote code to indicate which user caused the problem. 
This time, we raise a custom `InvalidAge` exception as the cause, and include the user's name in the message.

```python
import traceback

class InvalidAge(Exception):
  pass

def main():
  for user in users:
    try:
      age_to_int(user)
    except Exception as exc:
      raise InvalidAge(f"Error converting {user['name']}'s age") from exc

try:
  main()
except Exception as exc:
  print("Exception:", exc)
  print("Cause:", exc.__cause__)
  print("Cause's cause:", exc.__cause__.__cause__)
  print()
  traceback.print_exception(exc, file=sys.stdout)
  
###############
Exception: Error converting Dalili's age
Cause: invalid literal for int() with base 10: '3O'
Cause's cause: None

Traceback (most recent call last):
  File "<string>", line 31, in main
  File "<string>", line 21, in age_to_int

ValueError: invalid literal for int() with base 10: '3O'
The above exception was the direct cause of the following exception:

Traceback (most recent call last):
  File "<string>", line 36, in <module>
  File "<string>", line 33, in main
InvalidAge: Error converting Dalili's age
```

Both exceptions show up in the printed traceback, just as they did with `.__context__`. 
But note that the message for causes is slightly different. Instead of saying that the exception happened "during handling of the above exception", it says that one exception **"was the direct cause" of the other.**

==This solution gives us flexibility and provides a lot of debugging information.== 

It's flexible because code using this function can catch the custom `InvalidAge` exception only when the user's age is invalid (unlike a more generic ValueError). And, using a cause rather than context emphasizes that one exception caused the other; these aren't two unrelated exceptions that just happened to occur together. Both of these points help with debugging!

## guides 

For that reason, most Python style guides recommend including the cause whenever possible. 

**In practice, that means that most raises inside of an except exc: block should look like raise new_exc from exc.**

## trial

```python
import traceback
from datetime import datetime

users = [
  {
    "id": 1,
    "name": "Amir",
    "age": 36
  }, {
    "id": 2,
    "name": "Betty",
    "age": 41
  }, {
    "id": 3,
    "name": "Cindy",
  }, {
    "id": 4,
    "name": "Dalili",
    "age": 30
  }
]

current_year = datetime.now().year

def process_user(user):
  user["probable_birth_year"] = current_year - user["age"]
```

```python
def main():
  for user in users:
    try:
      process_user(user)
    except Exception as exc:
      raise ValueError(user["id"]) from exc

try:
  main()
except Exception as exc:
  # Note that we're directly comparing exceptions here. It works!
  assert exc.__cause__ == KeyError("age")
  assert exc = = ValueError(3) # watch the = = should be
else:
  raise Exception("No exception, but we expected one")
```

next:: [[Properties lesson]]