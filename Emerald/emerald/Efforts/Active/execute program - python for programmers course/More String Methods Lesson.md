---
part of:
  - "[[execute program - python for programmers course]]"
previous: "[[Unpacking lesson]]"
---
#course-lesson 

## split

```python
"a,b,c".split(",")
['a','b','c']
```

## splitlines

.splitlines splits multi-line text into a list of lines, but we don't need to provide a separator. It handles newlines (\n), carriage returns (\r), and Windows-style line terminators (\r\n). This makes .splitlines work across different operating systems. Getting the same effect with .split would take a lot more work.

```python
"Amir\nBetty\r\nCindy".splitlines()
['Amir','Betty','Cindy']
```

## join

```python
cat_names = ["Keanu", "Ms. Fluff", "Wilford"]
", ".join(cat_names)
'Keanu, Ms. Fluff, Wilford'
```

%%note: the , string is doing the actual join %%

## strip

.strip removes **leading and trailing** whitespace. That includes spaces, newlines (\n), line feeds (\r), tabs (\t), and some other less-common whitespace characters.

```python
"    Hello, Amir\n".strip()
'Hello Amir'
```

Without an argument, .strip removes whitespace, as shown above. But we can also provide a **chars** `argument`, which is the **set of characters to remove**. .`strip` will remove any of the characters we provide from 
**the beginning and end of the string.**

```python
"!!!1000.!..".strip(".!")
"1000"
```

```python
"!10!00.".strip(".!")
'10!00'
```
*only removes leading and trailing chars*

## replace

```python
"Hello, NAME".replace("NAME", "Amir")
'Hello Amir'
```

## exercise


- split by ,
- add up the values
- the values are integer values

```python
# s = "1,2,3"
def sum_string(s):
  total = 0
  for n in s.split(','):
     total += int(n)
  return total
```
