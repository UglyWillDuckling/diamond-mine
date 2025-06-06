---
part of:
  - "[[execute program - python for programmers course]]"
status:
  - In Progress
reviewed:
related:
  - "[[Convert a String to a Number (int, float) in Python  note.nkmk.me]]"
---

Strings behave like lists in some ways. For example, we can index into them using the familiar indexing syntax.

Unlike some programming languages, Python doesn't have a dedicated character data type. 
When we index into a string, we get another string containing only that character..

This has one strange side effect. We can index into a string, giving us a single-character string. Then we can index into that single-character string at index 0, giving us the same single-character string again. Each time we index into the string, we get a string of length 1.

```python
"cat"[2][0][0][0][0][0][0]
't'
```

## slicing

Slicing out of bounds gives us an empty string. This matches what we already saw for lists, where slicing out of bounds gives us an empty list.

```python
data = "abc"
data[10:15]
""
```

## contains

string1 in string2 tells us whether a string contains another string.

```python
friends = "Betty, Cindy, Dalili"
"Betty" in friends
True
```

next: [[Importing and the Standard Library]]