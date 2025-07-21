---
part of:
  - "[[execute program - python for programmers course]]"
---
#course-lesson 

Files and StringIOs have a .readlines method. It reads until the end of the file (or until the end of the StringIO's buffer), then returns a list of strings, one for each line of text. Note that every line ends in a line break, "\n".

>from io import StringIO

```python
buffer = StringIO("one\ntwo\nthree\n")
buffer.readlines()
Result:
['one\n', 'two\n', 'three\n']
```

In an earlier lesson, we saw the .split method for strings. At first, StringIO.readlines seems conceptually similar to some_string.split("\n"), but they differ in two important ways.

First, .split doesn't include the separator in the resulting list. For example, when we call some_string.split("\n"), the "\n"s don't show up in the individual strings.

>
"abcd\nefgh".split("\n")
Result:
['abcd', 'efgh']
Second, when we .split a string with a trailing separator, it dutifully splits on that final separator. That gives us an empty string at the end of the list. (In the next example, the list has three elements. The last element is "".)

>
"abcd\nefgh\n".split("\n")
Result:
['abcd', 'efgh', '']
The .readlines method differs on both of these details. First, it includes the newline character "\n" at the end of each string. Second, even when the file (or StringIO) ends with a newline character, .readlines doesn't include an empty string at the end of the list.

>
from io import StringIO

buffer = StringIO("abcd\nefgh\n")
buffer.readlines()
Result:
['abcd\n', 'efgh\n']
When the file doesn't end in a newline, the last string from .readlines doesn't have a \n character either.

>
from io import StringIO

buffer = StringIO("abcd\nefgh")
buffer.readlines()
Result:
['abcd\n', 'efgh']
These details may seem small, but they're very significant in practice. For example, if our code expects trailing \n characters but doesn't get them, it'll probably break. Similarly, if our code doesn't expect trailing \n characters but gets them, it'll also probably break.

.readlines modifies the stream position, like .read and .write do.

>
from io import StringIO

buffer = StringIO("abcd\nefgh\n")
buffer.seek(2)
buffer.readlines()
Result:
['cd\n', 'efgh\n']
Note: this code example reuses elements (variables, etc.) defined in earlier examples.
>

```python
buffer.tell()
Result:
10
```

___

There's one more thing to know about reading files and StringIO. We often think of files as sequences of characters. We can .read a file (or StringIO) then iterate over the returned string to see one character at a time.

```python
from io import StringIO

buffer = StringIO("cat")
chars = []
for char in buffer.read():
  chars.append(char)
chars
['c', 'a', 't']
```

```python
from io import StringIO

buffer = StringIO("1\n5\n10\n12\n")
total = 0
for line in buffer:
  total += int(line)
total
28
```

___

==The most important thing to remember about .readlines is its newline behavior. If a file contains "a\nb", then the lines are ["a\n", "b"]!==