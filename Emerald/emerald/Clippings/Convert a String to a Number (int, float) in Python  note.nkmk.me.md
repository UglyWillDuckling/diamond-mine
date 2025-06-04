---
author:
  - "[[nkmk]]"
created: 2025-06-04
published: 2020-10-19
source: https://note.nkmk.me/en/python-str-num-conversion/
about: "[[python programming language]]"
tags:
  - howto/python
---
In Python, you can convert a string (`str`) to a number using `int()` for an integer or `float()` for a floating-point number.

Use `str()` to convert a number to a string.

To format numbers or strings in various styles, such as zero-padded, binary, octal, hexadecimal, or scientific notation, use the `format()` function or the `format()` method on string objects.

- [Format strings and numbers with format() in Python](https://note.nkmk.me/en/python-format-zero-hex/)

You can also convert a list of strings to a list of numbers.

- [Convert a list of strings and a list of numbers to each other in Python](https://note.nkmk.me/en/python-list-str-num-conversion/)

## Convert a string to int: int()

`int()` converts a string to an integer (`int`).

- [Built-in Functions - int() — Python 3.13.3 documentation](https://docs.python.org/3/library/functions.html#int)

```python
print(int('100'))
print(type(int('100')))
# 100
# <class 'int'>

source: str_num_conversion.py
```

If the string contains a decimal point (`.`) or a comma (`,`), `int()` will raise an error.

```
# print(int('1.23'))
# ValueError: invalid literal for int() with base 10: '1.23'

# print(int('10,000'))
# ValueError: invalid literal for int() with base 10: '10,000'

source: str_num_conversion.py
```

To handle comma-separated strings, replace commas with an empty string (`''`) using `replace()`.

```
print(int('10,000'.replace(',', '')))
# 10000

source: str_num_conversion.py
```

For more on `replace()`, see the following article:

- [Replace strings in Python (replace, translate, re.sub, re.subn)](https://note.nkmk.me/en/python-str-replace-translate-re-sub/)

Starting with versions released after September 7, 2022 (Python 3.11, 3.10.7, 3.9.14, 3.8.14, 3.7.14, and later), integer string conversion is limited to 4300 digits by default. This will be explained in more detail later.

## Convert a string to float: float()

`float()` converts a string to a floating-point number (`float`).

- [Built-in Functions - float() — Python 3.13.3 documentation](https://docs.python.org/3/library/functions.html#float)
```
print(float('1.23'))
print(type(float('1.23')))
# 1.23
# <class 'float'>

source: str_num_conversion.py
```

Strings that contain only a fractional part or represent a whole number can also be converted using `float()`.

```
print(float('.23'))
# 0.23

print(float('100'))
print(type(float('100')))
# 100.0
# <class 'float'>

source: str_num_conversion.py
```

## Convert a binary, octal, or hexadecimal string to int

By specifying the base as the second argument to `int()`, you can convert strings in binary, octal, or hexadecimal notation to integers.

```
print(int('100', 2))
print(int('100', 8))
print(int('100', 16))
# 4
# 64
# 256

source: str_num_conversion.py
```

By default, the base is `10`, treating the string as a decimal number.

```
print(int('100', 10))
print(int('100'))
# 100
# 100

source: str_num_conversion.py
```

If you set the base to `0`, the function automatically detects the format based on the string’s prefix (`0b`, `0o`, `0x`, `0B`, `0O`, `0X`).

```
print(int('0b100', 0))
print(int('0o100', 0))
print(int('0x100', 0))
# 4
# 64
# 256

source: str_num_conversion.py
```

Prefixes and hexadecimal digits can be either uppercase or lowercase.

```
print(int('FF', 16))
print(int('ff', 16))
# 255
# 255

print(int('0xFF', 0))
print(int('0XFF', 0))
print(int('0xff', 0))
print(int('0Xff', 0))
# 255
# 255
# 255
# 255

source: str_num_conversion.py
```

For more about binary, octal, and hexadecimal conversions, see the following article:

- [Convert binary, octal, decimal, and hexadecimal in Python](https://note.nkmk.me/en/python-bin-oct-hex-int-format/)

## Convert a scientific notation string to float

Strings in scientific notation can be converted to floating-point numbers using `float()`.

```
print(float('1.23e-4'))
print(type(float('1.23e-4')))
# 0.000123
# <class 'float'>

print(float('1.23e4'))
print(type(float('1.23e4')))
# 12300.0
# <class 'float'>

source: str_num_conversion.py
```

Both lowercase `e` and uppercase `E` are accepted as the exponent indicator.

```
print(float('1.23E-4'))
# 0.000123

source: str_num_conversion.py
```

## Integer string conversion length limitation

Starting with versions released after September 7, 2022 (Python 3.11, 3.10.7, 3.9.14, 3.8.14, 3.7.14, and later), integer string conversion is limited to 4300 digits by default.

- [Integer string conversion length limitation — Python 3.13.3 documentation](https://docs.python.org/3/library/stdtypes.html#integer-string-conversion-length-limitation)

This limitation aims to prevent DoS attacks that exploit the `O(n^2)` complexity of integer string conversions.

- [CVE-2020-10735: Prevent DoS by large int<->str conversions · Issue #95778 · python/cpython](https://github.com/python/cpython/issues/95778)

If you attempt to convert a string that exceeds this limit using `int()` or `str()`, a `ValueError` is raised.

```
i = int('1' * 5)
print(i)
# 11111

i = int('1' * 4300)

# i = int('1' * 4301)
# ValueError: Exceeds the limit (4300 digits) for integer string conversion: value has 4301 digits; use sys.set_int_max_str_digits() to increase the limit

s = str(10**5)
print(s)
# 100000

s = str(10**4299)

# s = str(10**4300)
# ValueError: Exceeds the limit (4300 digits) for integer string conversion; use sys.set_int_max_str_digits() to increase the limit

source: int_str_conversion_limit.py
```

This also applies to internal string conversions in functions like `print()` and `repr()`.

```
i = 10**10000
# print(i)
# ValueError: Exceeds the limit (4300 digits) for integer string conversion; use sys.set_int_max_str_digits() to increase the limit

source: int_str_conversion_limit.py
```

As explained in the next section, conversions using bases that are powers of 2 (binary, octal, hexadecimal, etc.) are not subject to this limitation. For a full list of affected APIs, refer to the official documentation:

- [Integer string conversion length limitation - Affected APIs — Python 3.13.3 documentation](https://docs.python.org/3/library/stdtypes.html#affected-apis)

### Unlimited conversion for bases that are powers of 2

Conversions where the base is a power of 2, such as binary, octal, or hexadecimal, are not limited.

For example, conversions using `int(string, base)` with bases such as `2`, `4`, `8`, `16`, or `32`, as well as conversions from integers to strings using `bin()`, `oct()`, or `hex()`, will succeed even if the result exceeds 4300 digits.

```
i = int('1' * 10000, base=16)

s = hex(10**10000)

source: int_str_conversion_limit.py
```

### Set the limit

You can set the digit limit using `sys.set_int_max_str_digits()`. Setting it to `0` disables the limit.

```
import sys

sys.set_int_max_str_digits(1000)

# i = int('1' * 1001)
# ValueError: Exceeds the limit (1000 digits) for integer string conversion: value has 1001 digits; use sys.set_int_max_str_digits() to increase the limit

sys.set_int_max_str_digits(0)

i = int('1' * 100000)

source: int_str_conversion_limit.py
```

You can also set the limit via the environment variable `PYTHONINTMAXSTRDIGITS` or the command-line option `-X int_max_str_digits`. For details, see the official documentation:

- [Integer string conversion length limitation - Configuring the limit — Python 3.13.3 documentation](https://docs.python.org/3/library/stdtypes.html#configuring-the-limit)

As noted earlier, this limitation is a security measure and should be modified with caution, especially in applications that handle external input.