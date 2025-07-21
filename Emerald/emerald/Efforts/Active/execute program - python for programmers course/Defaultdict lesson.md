---
part of:
  - "[[execute program - python for programmers course]]"
covers:
  - "[[python dicts]]"
related:
  - "[[Even More Dict Methods lesson]]"
previous: "[[Consuming Iterators]]"
---
#course-lesson 

Suppose that we want to count how many times each word appears in a string. 

We might build a dictionary where the keys are words and the values are word counts.

```python
def word_count(s):
  counts = {}

  for word in s.split(" "):
    if word not in counts:
      counts[word] = 0
    counts[word] += 1

  return counts
```

**Dicts raise KeyError when we access keys that don't exist. That's why our code had to check if word not in counts.**

With Python's defaultdict, we can skip the if word not in counts check. It's a dictionary-like object that takes a default value function. When we access a key that doesn't exist, the defaultdict calls the function and gives us its return value.

```python
from collections import defaultdict

counts = defaultdict(lambda: 0)
counts["a key that doesn't exist"]
0
```

The word_count function below has a bug: it tries to modify dict keys that don't exist, which raises an exception. Fix the function by using a defaultdict instead of a regular dict. The default value should be 0.

```python
from collections import defaultdict

def word_count(s):
  counts = defaultdict(lambda: 0)
  for word in s.split(" "):
    counts[word] += 1
  return counts

dict(word_count("a cat is a cat"))
```

> [!question] what is happening?
After we access a key that doesn't exist, does that key now exist in the defaultdict? Or does it return the default value to us without actually adding the key to the dictionary? We can write some code to check.

```python
from collections import defaultdict

counts = defaultdict(lambda: 0)

counts["some key"]
"some key" in counts
True
```

==Merely reading a defaultdict key ensures that it exists, even if we never write to that key.==

___
## why lambda?

You might wonder why we provide the default value in the form of a function, like defaultdict(lambda: 0), rather than directly providing the value, like defaultdict(0).

One important reason is that we might want the default value to change over time. For example, imagine that we're tracking integer ID numbers for users. When we try to get a user's ID for the first time, we want to assign them a new, unique ID. Then, we should always get that same ID for that user

```python
from collections import defaultdict

next_id = 1

def get_next_id():
  global next_id
  id = next_id
  next_id += 1
  return id

user_ids = defaultdict(get_next_id)

first_amir_id = user_ids["Amir"]
betty_id = user_ids["Betty"]
second_amir_id = user_ids["Amir"]

(first_amir_id, betty_id, second_amir_id)
(1,2,1)
```

___
related: [[Lambda Expressions lesson]], [[lambda in python lesson]]