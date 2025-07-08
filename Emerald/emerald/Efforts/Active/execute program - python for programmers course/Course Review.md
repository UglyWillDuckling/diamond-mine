---
course: "[[execute program - python for programmers course]]"
---
#course-review

%% contains course reviews ordered by date %%
___
## [[2025-06-27]]

[[More String Methods Lesson]]

`"!!!1000.!..".strip(".!")` -> `1000`

[[python strip method]]

## [[2025-06-30-Mon]]

### [[Ranges lesson]]

```python
len(range(2, 5))
3 # 5 - 2 = 3
```

### [[Default Argument Values lesson]]
- be careful about **mutable** `default params`

```python
def new_patient(name, allergies=None):
  if allergies is None:
    allergies = []
  return {
    "name": name,
    "allergies": allergies,
  }
```

## [[2025-07-01-Tue]]

[[any and all lesson]]
```python
result = all([
  -3 <= 4,
  7 <= 10,
  2 == 2.0,
])
True
```

[[2025-07-04-Fri]]

[[any and all lesson]]:
```python
all([])
True
```

[[Extended Slices lesson]]:
```python
numbers = [1, 2, 3]
numbers[::-1]
[3,2,1]
```

[[handling exceptions lesson]]
```python
trace = []

try:
  1000 / 2000
  trace.append("try finished")
except ZeroDivisionError:
  trace.append("caught zero division")
except KeyError:
  trace.append("caught key error")
else:
  trace.append("else")
finally:
  trace.append("finally")
trace
['try finished', 'else', 'finally']
```

[[`comprehensions lession]]:
```python
items = [("a", 1), ("b", 2)]
{key: value
 for key, value in items}
{"a":1, "b": 2}
```

[[naming conventions lesson]]:

```python
# A class that only remembers up to n values at a time. When we add more than n
# values, it drops the oldest ones to make room.
class FixedSizeBuffer:
  def __init__(self, max_size):
    self._max_size = max_size
    self.values = []

  def add(self, value):
    self.values.append(value)
    if len(self.values) > self._max_size:
      self.values = self.values[-self._max_size:]

buffer = FixedSizeBuffer(2)
buffer.add("Amir")
buffer.add("Betty")
buffer.add("Cindy")
buffer.values
['Betty', 'Cindy']
```

