---
part of:
  - "[[execute program - python for programmers course]]"
about: "[[python dicts]]"
---
#course-lesson 

Dictionaries show up everywhere in Python. Many dictionary methods are shorthands for common patterns, so it's good to know them.

The next example loops over a list of words. It builds a dictionary mapping the words to the list index where we first saw them. When a value occurs multiple times, we only store the first index that contained the value.

```python
first_indexes = {}
words = ["apple", "banana", "apple"]

for index, word in enumerate(words):
  if word not in first_indexes:
    first_indexes[word] = index

first_indexes
Result:
{'apple': 0, 'banana': 1}
```

## setdefault

That solution works, but we can use dictionaries' `.setdefault(key, default)` method to avoid the if entirely. 

==It sets a dictionary key, but only if the key doesn't already exist.==
```python
firstIndexes = {}
words = ["apple", "banana", "apple"]

for index, word in enumerate(words):
  firstIndexes.setdefault(word, index)

firstIndexes
{'apple': 0, 'banana': 1}
```

`.setdefault` is often used when dealing with configuration data. Instead of calling .get with a default, some codebases call .setdefault with the default. This lets us set up the entire configuration dictionary in one place.

```python
coffee_config = {
  "cream": True,
}
coffee_config.setdefault("cream", False)
coffee_config.setdefault("sugar", False)
coffee_config.setdefault("temperature", 93) # Celsius
coffee_config
{'cream': True, 'sugar': False, 'temperature': 93}
```

## pop

```python
cat_ages = {
  "Ms. Fluff": 4,
  "Keanu": 2
}
cat_ages.pop("Ms. Fluff")
4
```

```python
cat_ages = {
  "Ms. Fluff": 4,
  "Keanu": 2
}
cat_ages.pop("Ms. Fluff")
cat_ages
{'Keanu': 2}
```

==The .pop method takes a default value as its optional second argument.== If the key doesn't exist, it returns the default value. The dictionary isn't changed, since the key never existed.

```python
cat_ages = {
  "Ms. Fluff": 4,
  "Keanu": 2
}

age1 = cat_ages.pop("Ms. Fluff", 0)
age2 = cat_ages.pop("Keanu", 0)
age3 = cat_ages.pop("Wilford", 0)

age1 + age2 + age3
6
cat_ages
{}
```

## update
Finally, dict_1.update(dict_2) modifies dict_1 by adding all of dict_2's entries. But it doesn't modify dict_2.

We can think of this as doing dict_1[key] = dict_2[key] for all keys in dict_2. When both dicts have a key, the value from dict_2 "wins".

```python
dict_1 = {
  "a": 1,
  "b": 2,
}
dict_2 = {
  "b": 3,
  "c": 4,
}
dict_1.update(dict_2)
dict_1
{'a': 1, 'b': 3, 'c': 4}
```

We previously saw dictionary merging, for example with dict_1 = dict_1 | dict_2. Using .update is different in a couple of ways. Both stem from the fact that dict_1 | dict_2 builds an entirely new dictionary, whereas .update modifies an existing dictionary.

==First, this means that dict_1 | dict_2 is generally slower==, since it has to build an entire dictionary from scratch. This is especially true when dict_1 is large, since all of those entries have to be copied into the new dict.

Second, it's possible that many parts of the system hold a reference to dict_1. ==If we call dict_1.update(...), all of those references will see the change, since they all refer to the same dictionary object in memory. B==ut if we do dict_1 = dict_1 | dict_2, we're only replacing the local variable dict_1. 
**Other parts of the system may still have references to the old dict_1.**

```python
amir = {
  "name": "Amir",
  "coffee_config": {
    "cream": True,
  },
}

# We destructively update Amir's coffee_config with a new key.
amir["coffee_config"].update({
  "cream": False,
})

amir["coffee_config"]
Result:
{'cream': False}
```
- the original **amir** dict was changed

Write a function, update_default, that takes two dictionaries as arguments. It updates the first dictionary with items from the second dictionary. However, when a key already exists in the first dictionary, update_default shouldn't change it.

```python
def update_default(dict_1, dict_2):
  for key, value in dict_2.items():
    dict_1.setdefault(key, value)
```
