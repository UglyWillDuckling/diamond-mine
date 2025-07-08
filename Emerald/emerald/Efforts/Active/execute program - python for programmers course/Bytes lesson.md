---
tags:
  - course-lesson
next: "[[Extended Slices lesson]]"
value: 7
interest: 8
---
%% seems useful, especially for manipulating raw data and having direct access to it. Also allows for observing and studying low level operations in computers %%

- [x] remind me (@[[2025-07-04]])
- [ ] remind er [[Bytes lesson]] (@[[2025-08-01]])
___

When we first learn to program, we're often told that everything in a computer is made of bits: "just ones and zeros". 

We use those bits to build 8-bit bytes, then use the bytes to build strings, integers, floats, lists, etc. Python lets us ignore bits and bytes most of the time, but sometimes we need to work with them directly. **bytes objects** serve that purpose. 

## Bytes Objects

==They're sequences of plain bytes, 8 bits each, with possible values of **0 through 255.** (Each bit is 1 or 0, so 8 bits can represent `2**8`, or **256**, different values.)==

```python
data = bytes([104, 101, 108, 108, 111])
```

```python
data[4]
111
```

==Bytes are important when we communicate over networks or work with files==. **Network** **connections** transmit `raw bytes`, and files also store raw bytes. When data is written to a file or sent over a network connection, it must be converted into bytes somehow.

# encoding

==For strings, that means an "encoding", a bidirectional mapping between characters like "h" and byte values like 104.==[^1] 

Here's the `string` "hello" encoded using a few different encodings. We'll print the individual byte values as integers, like when we built the bytes object above.

```python
print(list("hello".encode("utf_8")))
print(list("hello".encode("utf_16")))
print(list("hello".encode("cp037")))
```

%%note: you can encode strings into bytes with `encode`  %%

```python
[104, 101, 108, 108, 111]
[255, 254, 104, 0, 101, 0, 108, 0, 108, 0, 111, 0]
[136, 133, 147, 147, 150]
```

In Python, there's only one string "hello". But to send the string "hello" over a network connection, the software on both ends of the connection must agree on an encoding. Is it UTF-8? UTF-16? IBM037 (the "cp037" above)? 
Each of the byte sequences above is a different encoding of the same string, "hello". 

**None of them is the "correct" or "real" encoding; they're all equally legitimate.**

## encoding comparisons

Here are some bytes encoded using UTF-8. But we decode them with ShiftJIS, an encoding sometimes used for Japanese text. We get lucky this time: these five characters encode to the same bytes in both UTF-8 and ShiftJIS.

```python
bytes([104, 101, 108, 108, 111]).decode("shift_jis")
'hello'
```

Here are the same bytes again, but decoded using the "cp037" encoding. This gives us nonsense, even though the bytes are identical.

```python
bytes([104, 101, 108, 108, 111]).decode("cp037")
'ÇÁ%%?'
```

Here are the same bytes yet again, but decoded using UTF-16, which is another Unicode encoding. This raises an exception, because these bytes aren't valid UTF-16 data.

```python
bytes([104, 101, 108, 108, 111]).decode("utf_16")
Error
```

> [!study] Different units
> Text encodings are like **measurement** **units**. 
> 
> An air temperature of 55 means very different things in Fahrenheit (you might want a light jacket) vs. Celsius (your life is in danger due to heatstroke) vs. Kelvin (you are ice). 
> 
> **And the bytes [104, 101, 108, 108, 111] mean very different things in UTF-8 vs. UTF-16 vs. IBM037.**

Python has distinct types for bytes (bytes) and strings (str) because bytes and strings are separate in practice. Having separate types ensures that the encoding and decoding steps are explicit, which reduces mistakes like the ones shown above.

___
## string syntax

So far, we've created bytes objects by calling bytes(...). We can also write them with a string-like syntax, but with a b prefix. This syntax allows ASCII characters, which are converted into their equivalent ASCII codes. (Roughly speaking, ASCII includes English letters, numbers, and punctuation.)

```
b"hello"
b'hello'
```

```python
list(b"hello")
Result:
[104, 101, 108, 108, 111]
```

### Hex

==We can use the `\x` escape code to specify any byte as a hexadecimal value==. 
(**Hexadecimal** is the base-16 number system. Hex digits have the values 0-15, written using the numbers 0-9 and letters a-f. For example, \x00 is 0, \x0f is 15, \xf0 is 240 (15 * 16), and \xff is the maximum byte, 255.)

```python
b"\x00\x01\xff"
```

```python
list(b"\x00\x01\xff")
[0, 1, 255]
```

## printing as ASCII

If some of our escaped bytes are **legal** **ASCII** **characters**, Python will print them in that way when we look at the bytes object. 

==This is a bit misleading, because it makes bytes look like strings.== **But it's important to remember that bytes are not strings**, even when they're rendered in a similar way!

```python
b"\x68ello\x00"
b'hello\x00' # \x68 is h
```

==Although bytes objects aren't strings, they do support some convenience methods and operators that are familiar from str.==

```python
b"TTP" in b"HTTP GET"
True
```

```python
b"Hello " + b"World"
b'Hello World'
```

# The end

The distinction between bytes and strings may not be the most exciting programming topic, but it's very important.

**Newer programming environments** usually draw a distinction between the two, like Python does. For example, modern versions of JavaScript have Uint8Array vs. regular JavaScript strings. (Uint8Array is JavaScript's equivalent of bytes.)

==Knowing the difference between bytes and strings will save you a lot of frustration when working with text!== 
Most programmers today will never encounter the IBM037 or ShiftJIS encodings that we saw above, but most of us do eventually work with more than one of UTF-8, UTF-16, and UTF-32.

[^1]: [[encoding]]