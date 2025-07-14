---
part of:
  - "[[execute program - python for programmers course]]"
studied_on:
  - "[[2025-07-01-Tue]]"
covers:
  - "[[python dicts]]"
value: 6
rating: 8
---
#course-lesson 

### popitem

The .popitem method removes **the most recently inserted item**, **returning it as a (key, value) tuple.** As with the list .pop method, this mutates (changes) the original dictionary.

```python
food_order_totals = {
  "Amir": 500,
  "Betty": 400,
  "Cindy": 600
}
food_order_totals["Dalili"] = 1000

food_order_totals.popitem()

len(food_order_totals)
3
```

We often say that .popitem() returns the value in **LIFO** [^1] (Last In, First Out) order. This means that our dictionary can be used like a stack. **We continually pop the most recent item** from the dictionary, process it, and then continue on to the next item.

```python
food_order_totals = {
  "Amir":  500,
  "Betty": 400,
  "Cindy": 600
}

total = 0
while len(food_order_totals) > 0:
  name, individual_total = food_order_totals.popitem() # dict
  # Don't include Amir's spending.
  if name == "Amir":
    continue
  total += individual_total
  
total
1000
food_order_totals
{}
```

When we only need a stack, using a list with .pop and .append is more clear and more idiomatic. ==But when we need to access the data in both the dictionary's keys and values, treating it as a stack can be useful.==

### fromkeys

The .`fromkeys` method creates a dictionary where many keys map to the same value. It takes a list of keys as the first argument and a value as the second argument.

```python
team_names = ["red", "blue"]
team_scores = dict.fromkeys(team_names, 0)
team_scores
Result: {'red': 0, 'blue': 0}
```

The dictionary value in the example above is 0, which is immutable. It's important to only use this method with **immutable** values like strings, ints, floats, and booleans. Using a mutable value can cause subtle bugs because every key will correspond to exactly the same value, at the same place in memory.

Here's an example showing the problem. This time, our value is a list. When we change that list via one dictionary key, the list in the other keys also changes. That's because it's the same list!

```python
team_names = ["red", "blue"]
# Each key here references the same list as its value!
team_members = dict.fromkeys(team_names, [])

# The dictionary has two keys, but both point to the same list. If we modify
# the list via one key, our changes will also show up via the other key.
team_members["red"].append("Amir")
team_members["blue"]

```

`!: be careful`**That's a bug**: adding Amir to the red team shouldn't also add him to the blue team.

There are many ways to work around this. One way is to build our dict with a dictionary comprehension.

The next example adds a dictionary item for every team name in team_names. The key is set to the team name, and the value is set to a new empty list, `[]`.

```python
team_names = ["red", "blue"]
team_members = {team_name: [] for team_name in team_names}
team_members["red"].append("Amir")
team_members["blue"]
[]
```

In that example, **the comprehension iterates twice, once per team name**. 
During each iteration, Python evaluates the `[]` expression, **giving us a new empty list.** Our dict now has two different lists as its values, so updating one doesn't affect the other.

[^1]: [[LIFO - last in first out]]