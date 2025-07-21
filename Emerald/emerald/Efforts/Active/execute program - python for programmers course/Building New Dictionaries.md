---
tags:
  - course-lesson
part of:
  - "[[execute program - python for programmers course]]"
---
course:: [[execute program - python for programmers course]]
___

We can create new dicts with the literal syntax, {...}, but there are also many other ways. This lesson covers four other ways to build dictionaries.

First, we can call the dict built-in as a function. The simplest way is to pass in an existing dictionary, which copies it. Changing the copy doesn't affect the original (and vice-versa).

___

```python
original_data = {
  "a": 1,
  "b": 2
}
other_data = dict(original_data)
other_data["c"] = 3
```


**Calling dict(...) copies over the key-value pairs, but it doesn't copy the keys and values themselves.** For example, if one of the dict values is a list, then the new dict references that same list. When we mutate the list, that change is visible from both dictionaries.Calling dict(...) copies over the key-value pairs, but it doesn't copy the keys and values themselves. For example, if one of the dict values is a list, then the new dict references that same list. When we mutate the list, that change is visible from both dictionaries.

The term for this is "shallow copy": we only copied the dict itself, not its contents. It would be a "deep copy" if the new dict contained new copies of any lists/dicts/tuples inside the original dict, and those contained new copies of any data inside of them. All of the techniques shown in this lesson make shallow copies.

The second way to build a dictionary is to call dict with a list of key-value pairs stored as tuples. (This works with any iterable, not just lists, but iterables are covered elsewhere in the course.)

___

The **third** way is to combine two existing dicts with `dict1 | dict2`. This merges their items.

```python
name_info = {
  "name": "Amir"
}
age_info = {
  "age": 36
}
person = name_info | age_info
person
{'name': 'Amir', 'age': 36}
```

The entries are ==merged== from left to right. **When both dictionaries have the same key, the right dictionary "wins".**[^1] 

```python
user_data = {
  "name": "Betty",
  "mailing_list": True
}
updates = {
  "mailing_list": False
}
user_data = user_data | updates
user_data["mailing_list"]
False
```


## including other dicts

Finally, the fourth way to create a new dict is by using the ** operator in a literal. Inside of a dict literal, **other_dict means "include all the items of other_dict when creating this dict". This is sometimes called "expanding a dict into a dict literal".

```python
amir_age = {
  "Amir": 36
}
user_ages = {
  **amir_age,
  "Betty": 41,
}
user_ages
{'Amir': 36, 'Betty': 41}
```

### with an expression

```python
def build_user(name, age=None):
  return {
    "name": name,
    **({} if age is None else {"age": age}),
  }
```

## conclusion

All of these ways are "non-destructive": they build new dictionaries, but they don't modify any existing dictionaries. That makes code easier to think about. We don't have to worry about whether dict1 | dict2 modified either of the original dicts.

[^1]: [[merging dicts - python]]