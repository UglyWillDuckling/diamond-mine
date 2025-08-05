---
source: "https://en.wikipedia.org/wiki/Bit_numbering#Most_significant_byte"
author:
  - 
published: 2007-05-19
created: 2025-06-19
tags:
---
In [computing](https://en.wikipedia.org/wiki/Computing "Computing"), **bit numbering** is the convention used to identify the [bit](https://en.wikipedia.org/wiki/Bit "Bit") positions in a [binary number](https://en.wikipedia.org/wiki/Binary_numeral_system "Binary numeral system").

| **150 <sub>dec</sub>** | MSb |  |  |  |  |  |  | LSb |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Bit Content | 1 | 0 | 0 | 1 | 0 | 1 | 1 | 0 |

In [computing](https://en.wikipedia.org/wiki/Computing "Computing"), the **least significant bit** (**LSb**) is the [bit](https://en.wikipedia.org/wiki/Bit "Bit") position in a [binary](https://en.wikipedia.org/wiki/Binary_numeral_system "Binary numeral system") [integer](https://en.wikipedia.org/wiki/Integer_\(computer_science\) "Integer (computer science)") representing the lowest-order place of the integer. Similarly, the **most significant bit** (**MSb**) represents the highest-order place of the binary integer. The LSb is sometimes referred to as the *low-order bit*. Due to the convention in [positional notation](https://en.wikipedia.org/wiki/Positional_notation "Positional notation") of writing less significant digits further to the right, the LSb also might be referred to as the *right-most bit*. The MSb is similarly referred to as the *high-order bit* or *left-most bit*. In both cases, the LSb and MSb correlate directly to the least significant [digit](https://en.wikipedia.org/wiki/Numerical_digit "Numerical digit") and most significant digit of a [decimal](https://en.wikipedia.org/wiki/Decimal "Decimal") integer.

Bit indexing correlates to the positional notation of the value in base 2. For this reason, bit index is not affected by how the value is stored on the device, such as the value's [byte order](https://en.wikipedia.org/wiki/Endianness "Endianness"). Rather, it is a property of the numeric value in binary itself. This is often utilized in programming via [bit shifting](https://en.wikipedia.org/wiki/Bitwise_operation#Bit_shifts "Bitwise operation"): A value of `1 << *n*` corresponds to the *n* <sup>th</sup> bit of a binary integer (with a value of `2<sup>n</sup>`).

In digital [steganography](https://en.wikipedia.org/wiki/Steganography "Steganography"), sensitive messages may be concealed by manipulating and storing information in the least significant bits of an image or a sound file. The user may later recover this information by extracting the least significant bits of the manipulated pixels to recover the original message. This allows the storage or transfer of digital information to remain concealed.

![[~/×/c8dace95c6dd275b87953fba648eebb3_MD5.jpg]]

A diagram showing how manipulating the least significant bits of a color can have a very subtle and generally unnoticeable effect on the color. In this diagram, green is represented by its [RGB](https://en.wikipedia.org/wiki/RGB "RGB") value, both in decimal and in binary. The red box surrounding the last two bits illustrates the least significant bits changed in the binary representation.

  

This table illustrates an example of decimal value of 149 and the location of LSb. In this particular example, the position of unit value (decimal 1 or 0) is located in bit position 0 (n = 0). MSb stands for *most significant bit*, while LSb stands for *least significant bit*.

| **149 <sub>dec</sub> in LSb <sub>0</sub>** | MSb |  |  |  |  |  |  | LSb |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Bit Weight | ${\displaystyle 2^{7}}$   128 | ${\displaystyle 2^{6}}$   64 | ${\displaystyle 2^{5}}$   32 | ${\displaystyle 2^{4}}$   16 | ${\displaystyle 2^{3}}$   8 | ${\displaystyle 2^{2}}$   4 | ${\displaystyle 2^{1}}$   2 | ${\displaystyle 2^{0}}$   1 |
| Bit Content | 1 | 0 | 0 | 1 | 0 | 1 | 0 | 1 |

This table illustrates an example of an 8 bit signed decimal value using the [two's complement](https://en.wikipedia.org/wiki/Two%27s_complement "Two's complement") method. The MSb *most significant bit* has a negative weight in signed integers, in this case −2 <sup>7</sup> = −128. The other bits have positive weights. The lsb (*least significant bit*) has weight 1. The signed value is in this case −128+2 = −126.

| **\-126 <sub>dec</sub> in LSb <sub>0</sub>** | MSb |  |  |  |  |  |  | LSb |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Bit Weight | ${\displaystyle -2^{7}}$   −128 | ${\displaystyle 2^{6}}$   64 | ${\displaystyle 2^{5}}$   32 | ${\displaystyle 2^{4}}$   16 | ${\displaystyle 2^{3}}$   8 | ${\displaystyle 2^{2}}$   4 | ${\displaystyle 2^{1}}$   2 | ${\displaystyle 2^{0}}$   1 |
| Bit Content | 1 | 0 | 0 | 0 | 0 | 0 | 1 | 0 |

The expressions *most significant bit first* and *least significant bit at first* are indications on the ordering of the sequence of the bits in the bytes sent over a wire in a [serial transmission](https://en.wikipedia.org/wiki/Serial_transmission "Serial transmission") protocol or in a stream (e.g. an audio stream).

*Most significant bit first* means that the most significant bit will arrive first: hence e.g. the hexadecimal number `0x12`, `00010010` in binary representation, will arrive as the sequence `0 0 0 1 0 0 1 0`.

*Least significant bit first* means that the least significant bit will arrive first: hence e.g. the same hexadecimal number `0x12`, again `00010010` in binary representation, will arrive as the (reversed) sequence `0 1 0 0 1 0 0 0`.

| **150 <sub>dec</sub> in LSb <sub>0</sub>** | MSb |  |  |  |  |  |  | LSb |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Bit Number | 7 |  |  |  |  |  |  | 0 |
| Bit Weight | ${\displaystyle 2^{7}}$   128 | ${\displaystyle 2^{6}}$   64 | ${\displaystyle 2^{5}}$   32 | ${\displaystyle 2^{4}}$   16 | ${\displaystyle 2^{3}}$   8 | ${\displaystyle 2^{2}}$   4 | ${\displaystyle 2^{1}}$   2 | ${\displaystyle 2^{0}}$   1 |
| Bit Content | 1 | 0 | 0 | 1 | 0 | 1 | 1 | 0 |

When the bit numbering starts at zero for the least significant bit (LSb) the numbering scheme is called *LSb 0*.[^1] This bit numbering method has the advantage that for any [unsigned number](https://en.wikipedia.org/wiki/Unsigned_number "Unsigned number") the value of the number can be calculated by using [exponentiation](https://en.wikipedia.org/wiki/Positional_notation#Exponentiation "Positional notation") with the bit number and a [base](https://en.wikipedia.org/wiki/Radix "Radix") of 2.[^2] The value of an unsigned binary [integer](https://en.wikipedia.org/wiki/Integer_\(computer_science\) "Integer (computer science)") is therefore

${\displaystyle \sum _{i=0}^{N-1}b_{i}\cdot 2^{i}}$

where *b <sub>i</sub>* denotes the value of the bit with number *i*, and *N* denotes the number of bits in total.

| **150 <sub>dev</sub> in MSb <sub>0</sub>** | MSb |  |  |  |  |  |  | LSb |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Bit Number | 0 |  |  |  |  |  |  | 7 |
| Bit Weight | ${\displaystyle 2^{7-0}}$   128 | ${\displaystyle 2^{7-1}}$   64 | ${\displaystyle 2^{7-2}}$   32 | ${\displaystyle 2^{7-3}}$   16 | ${\displaystyle 2^{7-4}}$   8 | ${\displaystyle 2^{7-5}}$   4 | ${\displaystyle 2^{7-6}}$   2 | ${\displaystyle 2^{7-7}}$   1 |
| Bit Content | 1 | 0 | 0 | 1 | 0 | 1 | 1 | 0 |

When the bit numbering starts at zero for the most significant bit (MSb) the numbering scheme is called *MSb 0*.

The value of an unsigned binary integer is therefore

${\displaystyle \sum _{i=0}^{N-1}b_{i}\cdot 2^{N-1-i}}$

## LSb calculation

LSb of a number can be calculated with time complexity of ${\displaystyle O(n)}$ with formula `a & (~ a+1)`, where `&` means [binary AND](https://en.wikipedia.org/wiki/Binary_AND "Binary AND") and `~` means [binary NOT](https://en.wikipedia.org/wiki/Binary_NOT "Binary NOT").

## Other

For MSb 1 numbering, the value of an unsigned binary integer is

${\displaystyle \sum _{i=1}^{N}b_{i}\cdot 2^{N-i}}$

[PL/I](https://en.wikipedia.org/wiki/PL/I "PL/I") numbers BIT strings starting with 1 for the leftmost bit.

The [Fortran](https://en.wikipedia.org/wiki/Fortran "Fortran") BTEST function uses LSb 0 numbering.

## See also

- [ARINC 429](https://en.wikipedia.org/wiki/ARINC_429 "ARINC 429")
- [Binary numeral system](https://en.wikipedia.org/wiki/Binary_numeral_system "Binary numeral system")
- [Signed number representations](https://en.wikipedia.org/wiki/Signed_number_representations "Signed number representations")
- [Two's complement](https://en.wikipedia.org/wiki/Two%27s_complement "Two's complement")
- [Endianness](https://en.wikipedia.org/wiki/Endianness "Endianness")
- [Binary logarithm](https://en.wikipedia.org/wiki/Binary_logarithm "Binary logarithm")
- [Unit in the last place](https://en.wikipedia.org/wiki/Unit_in_the_last_place "Unit in the last place") (ULP)
- [Find first set](https://en.wikipedia.org/wiki/Find_first_set "Find first set")
- [MAC address: Bit-reversed notation](https://en.wikipedia.org/wiki/MAC_address#Bit-reversed_notation "MAC address")

## References

[^1]: Langdon, Glen G. (1982). [*Computer Design*](https://archive.org/details/computerdesign00lang/page/52). Computeach Press Inc. p. [52](https://archive.org/details/computerdesign00lang/page/52). [ISBN](https://en.wikipedia.org/wiki/ISBN_\(identifier\) "ISBN (identifier)") [0-9607864-0-6](https://en.wikipedia.org/wiki/Special:BookSources/0-9607864-0-6 "Special:BookSources/0-9607864-0-6").

[^2]: ["Bit Numbers"](http://www.xcprod.com/titan/XCSB-DOC/bit_numbers.html). Retrieved 2021-03-30.