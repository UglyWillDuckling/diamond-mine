---
tags:
  - course-lesson
next: "[[Building New Dictionaries]]"
---

We've seen integers (int) and floating point numbers (float). These are sufficient for most of our needs, but both types have limitations.

Integers' limitation is that they're always whole numbers. Floats have two limitations. First, they have an upper limit. Second, as we saw in an earlier lesson, they're imprecise.

Fortunately, Python gives us an alternative that addresses floating point imprecision: the decimal module. Like floats, Decimal objects have a decimal point. But unlike floats, Decimals have unlimited precision and no maximum value.

___

We can build Decimals from strings or from numbers, like ints and floats. Then we can perform mathematical operations (like addition), which return more Decimals. When we need to see a decimal's value, we can call str(some_decimal) to turn it into a string.

```python
from decimal import Decimal
three_tenths = Decimal("0.1") + Decimal("0.2")
str(three_tenths)
'0.3'
```


> [!tip]
> Here's a simple rule: when precision matters, don't create Decimals from floats!


## Mixing

Fortunately, because mixing decimals and floats is unsafe, Python tries to help us prevent it. When using mathematical operators like *, mixing decimals and floats is an error.

```python
from decimal import Decimal
Decimal("20") * 0.1
# TypeError: unsupported operand type(s) for *: 'decimal.Decimal' and 'float'
```

What about **integers**? Because integers are precise, ==it's always safe to pass an integer to Decimal()==. For the same reason, it's also safe to mix decimals and integers.

```python
from decimal import Decimal

Decimal("2") * 2 == 4 == Decimal("4")
True
```

## trade offs

So far, decimals seem better in every way! But they do involve trade-offs. For example, sometimes decimals show more decimal places than we'd expect.

In the next example, we get a decimal value that's equal to 0.3. But when we convert it into a string, we get "0.30".

```python
from decimal import Decimal

result = Decimal("0.3") + Decimal("0.05") - Decimal("0.05")
str(result)
'0.30'
```

```python
from decimal import Decimal

str(Decimal("0.001") * 1000)
'1.000'
```


## rounding

While Decimals are "more precise" for a lot of common math, they do have limits. 

==If we do a calculation that has no exact decimal representation, Decimal objects are forced to round.==

For example, 1/3 is 0.3333333333..., which **can't be represented exactly** as a decimal.
```python
from decimal import Decimal

one_third = Decimal(1) / Decimal(3)
should_be_one = one_third * Decimal(3)
str(should_be_one)
'0.9999999999999999999999999999'
```

This should be the same, but isn't.
```python
from decimal import Decimal

one = Decimal(1)
(one / 3) * 3 == 1
False
```

> [!fire] Reason why we don't use decimals always
> Floats are around 10x faster
