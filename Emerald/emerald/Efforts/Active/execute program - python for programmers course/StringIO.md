---
tags:
  - course-lesson
part of:
  - "[[execute program - python for programmers course]]"
related:
---

Python has extensive support for working with files. The details match what we see in most programming languages: we can open files, call .read on them, .close them, etc.

In addition to regular files, **Python comes with in-memory objects that look and act like files, called StringIO**. 
Unlike regular files, a StringIO never interacts with the disk. Instead, a StringIO's data is stored entirely in memory.

To use StringIO, we need to import it from the io module. In the next example, we build an empty StringIO, .write some data to its internal buffer, then get that data with `.getvalue().`

```python
from io import StringIO

buffer = StringIO()
buffer.write("contents")
buffer.getvalue()
'contents'
```

Writing **appends** to the buffer.

```python
from io import StringIO

buffer = StringIO()
buffer.write("buffer ")
buffer.write("contents")
buffer.getvalue()
'buffer contents'
```

As its name implies, StringIO only works with strings. ==If we try to write any other type of data, StringIO raises a TypeError.==

## position

- starts at 0 index
- after write the position is moved to the `current index`  + `len of string`
- `tell` returns current position

When we read or write data in a StringIO, it remembers our position. You can think of the position **like the cursor** in a text editor: it's normally one character ahead of the last character index.

**The position starts at 0.** 
If we write 4 bytes, the position is now 4. If we write 4 more bytes, the position is now 8. We can get the current stream position by calling the .tell method

```python
from io import StringIO

buffer = StringIO()
buffer.write("Hello")
buffer.tell()
5 # fifth position
```

### seek

- moved the position
- doesn't change content
- allows us to overwrite content

We can set the stream's position with **.seek(n)**. 

Seeking **only moves the stream position**; it doesn't change the buffer's contents. 

Writes start from the stream position, ==so moving the position backward allows us to overwrite existing data in the buffer.==

```python
from io import StringIO

buffer = StringIO()
buffer.write("Hello Amir")
buffer.seek(6) # letter A
buffer.write("Betty")
buffer.getvalue()
'Hello Betty'
```

## default value

We can specify an initial value for the StringIO's buffer by passing it as a constructor argument.

```python
from io import StringIO

buffer = StringIO("Hello")
buffer.getvalue()
'Hello'
```

However, **the buffer's stream position always starts at 0.** 

==If we don't adjust the position, any writes to the buffer will overwrite the initial value==. In the next example, the .write call overwrites 4 out of the 6 characters in the buffer.

```python
from io import StringIO

buffer = StringIO("Hello ")
buffer.write("Amir")
buffer.getvalue()
'Amiro '
```

## read

- starts at the beginning
- increments the position while reading
- 

StringIOs have a .read method. Calling .read without any arguments returns everything from the current position to the end of the buffer. (Remember that the position starts at 0)

```python
from io import StringIO

buffer = StringIO("Hello Amir")
buffer.read()
'Hello Amir'
```

At first, .read looks like it does the same thing as `.getvalue.` 

==The difference is that .read starts at the current stream position and increments the position while reading==, whereas `.getvalue` returns everything in the buffer without changing the stream position. 

In the next example, the first .read call reads the entire buffer, so the second .read call gets an empty string.

```python
from io import StringIO

buffer = StringIO("Hello Amir")
first_read = buffer.read()
second_read = buffer.read()
(first_read, second_read)
('Hello Amir', '')
```

However, .getvalue always gives us the StringIO's full internal buffer, regardless of the current position.

### bytes to read

We can request a certain number of bytes from .read. 

For example, buffer.read(2) **reads up to 2 characters**, then returns that string. It also increments the stream position by 2.

```python
from io import StringIO

buffer = StringIO("abcd")
first_read = buffer.read(2)
second_read = buffer.read(2)
('ab', 'cd')
```

==If we ask for more bytes than are left in the string, .read gives us the rest of the string.==

```python
from io import StringIO

buffer = StringIO("Keanu")
buffer.read(9000)
'Keanu'
```

Passing `None` or a `negative number` to .read is like calling .read **without arguments.**

```python
from io import StringIO

buffer = StringIO("abcd")
buffer.read(-1)
'abcd'
```

## usage

Now let's step back and ask an important question: what's the use for in-memory file-like objects like StringIO? Why not just use regular strings?

==The answer is that StringIO excels in situations where some code requires a file, but we don't want to use an actual on-disk file.== 

For example, suppose that we're writing some automated tests for a function that reads from files. We could have the tests write an actual file to disk, then read from that file.

Unfortunately, that has many drawbacks. First, writing real files to disk is much slower than working with in-memory data. In a large test suite with thousands of tests, the slowdown can add up to significant delays. Second, files raise awkward questions like "what directory should the file be in?" and "will the file be deleted if the test runner terminates unexpectedly in the middle of a test?"

```python
from io import StringIO

# This is the function that we'll test.
def file_mentions_ms_fluff(the_file):
  return "Ms. Fluff" in the_file.read()

# Test the function.
assert file_mentions_ms_fluff(StringIO("This file is about Ms. Fluff."))
assert not file_mentions_ms_fluff(StringIO("This file is about Keanu."))
```

The asserts didn't raise any exceptions, so we know that our tiny suite of two tests passed. We didn't have to create any actual files to test our function, even though our function is designed to work with real files.

## regular files

Most of the StringIO methods discussed here also exist on r**egular files:** .read, .write, .tell, and .seek. That's why StringIO is such a good stand-in for real files: ==it has the same methods, and they behave in the same way!== 

**The exception is .getvalue, which is specific to StringIO.**