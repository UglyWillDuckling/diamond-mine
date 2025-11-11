---
source: https://en.wikipedia.org/wiki/IEEE_754
author:
  - 
published: 2003-12-17
created: 2025-06-18
tags:
  - standard/technical
---
The **IEEE Standard for Floating-Point Arithmetic** (**IEEE 754**) is a [technical standard](https://en.wikipedia.org/wiki/Technical_standard "Technical standard") for [floating-point arithmetic](https://en.wikipedia.org/wiki/Floating-point_arithmetic "Floating-point arithmetic") originally established in 1985 by the [Institute of Electrical and Electronics Engineers](https://en.wikipedia.org/wiki/Institute_of_Electrical_and_Electronics_Engineers "Institute of Electrical and Electronics Engineers") (IEEE). The standard [addressed many problems](https://en.wikipedia.org/wiki/#Design_rationale) found in the diverse floating-point implementations that made them difficult to use reliably and [portably](https://en.wikipedia.org/wiki/Software_portability "Software portability"). Many hardware [floating-point units](https://en.wikipedia.org/wiki/Floating-point_unit "Floating-point unit") use the IEEE 754 standard.

The standard defines:

- *arithmetic formats:* sets of [binary](https://en.wikipedia.org/wiki/Binary_code "Binary code") and [decimal](https://en.wikipedia.org/wiki/Decimal "Decimal") floating-point data, which consist of finite numbers (including [signed zeros](https://en.wikipedia.org/wiki/Signed_zero "Signed zero") and [subnormal numbers](https://en.wikipedia.org/wiki/Subnormal_number "Subnormal number")), [infinities](https://en.wikipedia.org/wiki/Infinity "Infinity"), and special "not a number" values ([NaNs](https://en.wikipedia.org/wiki/NaN "NaN"))
- *interchange formats:* encodings (bit strings) that may be used to exchange floating-point data in an efficient and compact form
- *rounding rules:* properties to be satisfied when rounding numbers during arithmetic and conversions
- *operations:* arithmetic and other operations (such as [trigonometric functions](https://en.wikipedia.org/wiki/Trigonometric_functions "Trigonometric functions")) on arithmetic formats
- *exception handling:* indications of exceptional conditions (such as [division by zero](https://en.wikipedia.org/wiki/Division_by_zero "Division by zero"), overflow, etc.)

[IEEE 754-2008](https://en.wikipedia.org/wiki/IEEE_754-2008_revision "IEEE 754-2008 revision"), published in August 2008, includes nearly all of the original [IEEE 754-1985](https://en.wikipedia.org/wiki/IEEE_754-1985 "IEEE 754-1985") standard, plus the [IEEE 854-1987](https://en.wikipedia.org/wiki/IEEE_854-1987 "IEEE 854-1987") (Radix-Independent Floating-Point Arithmetic) standard. The current version, IEEE 754-2019, was published in July 2019.[^10] It is a minor revision of the previous version, incorporating mainly clarifications, defect fixes and new recommended operations.

## History

| Year | Official Standard       |
| ---- | ----------------------- |
| 1982 | IEC 559:1982            |
| 1985 | IEEE 754-1985           |
| 1987 | IEEE 854-1987           |
| 1989 | IEC 559:1989            |
| 2008 | IEEE 754-2008           |
| 2011 | ISO/IEC/IEEE 60559:2011 |
| 2019 | IEEE 754-2019           |
| 2020 | ISO/IEC 60559:2020      |
| 2029 | TBA                     |

The need for a floating-point standard arose from chaos in the business and scientific computing industry in the 1960s and 1970s. IBM used a [hexadecimal floating-point format](https://en.wikipedia.org/wiki/IBM_hexadecimal_floating-point "IBM hexadecimal floating-point") with a longer significand and a shorter exponent. [CDC](https://en.wikipedia.org/wiki/Control_Data_Corporation "Control Data Corporation") and [Cray](https://en.wikipedia.org/wiki/Cray "Cray") computers used [ones' complement](https://en.wikipedia.org/wiki/Ones%27_complement "Ones' complement") representation, which admits a value of +0 and −0. CDC 60-bit computers did not have full 60-bit adders, so integer arithmetic was limited to 48 bits of precision from the floating-point unit. Exception processing from divide-by-zero was different on different computers. Moving data between systems and even repeating the same calculations on different systems was often difficult.

The first IEEE standard for floating-point arithmetic, [IEEE 754-1985](https://en.wikipedia.org/wiki/IEEE_754-1985 "IEEE 754-1985"), was published in 1985. It covered only binary floating-point arithmetic.

A new version, [IEEE 754-2008](https://en.wikipedia.org/wiki/IEEE_754-2008_revision "IEEE 754-2008 revision"), was published in August 2008, following a seven-year revision process, chaired by Dan Zuras and edited by [Mike Cowlishaw](https://en.wikipedia.org/wiki/Mike_Cowlishaw "Mike Cowlishaw"). It replaced both IEEE 754-1985 (Binary Floating-Point Arithmetic) and [IEEE 854-1987](https://en.wikipedia.org/wiki/IEEE_854-1987 "IEEE 854-1987") (Radix-Independent Floating-Point Arithmetic) standards. The binary formats in the original standard are included in this new standard along with three new basic formats, one binary and two decimal. To conform to the current standard, an implementation must implement at least one of the basic formats as both an arithmetic format and an interchange format.

The international standard **ISO/IEC/IEEE 60559:2011** (with content identical to IEEE 754-2008) has been approved for adoption through [ISO](https://en.wikipedia.org/wiki/International_Organization_for_Standardization "International Organization for Standardization") / [IEC](https://en.wikipedia.org/wiki/International_Electrotechnical_Commission "International Electrotechnical Commission") [JTC 1](https://en.wikipedia.org/wiki/ISO/IEC_JTC_1 "ISO/IEC JTC 1") /SC 25 under the ISO/IEEE PSDO Agreement [^11] [^12] and published.[^13]

The current version, IEEE 754-2019 published in July 2019, is derived from and replaces IEEE 754-2008, following a revision process started in September 2015, chaired by David G. Hough and edited by Mike Cowlishaw. It incorporates mainly clarifications (e.g. *totalOrder*) and defect fixes (e.g. *minNum*), but also includes some new recommended operations (e.g. *augmentedAddition*).[^14] [^15]

The international standard **ISO/IEC 60559:2020** (with content identical to IEEE 754-2019) has been approved for adoption through ISO/IEC [JTC 1](https://en.wikipedia.org/wiki/ISO/IEC_JTC_1 "ISO/IEC JTC 1") /SC 25 and published.[^16]

The next projected revision of the standard is in 2029.[^17]

## Formats

An IEEE 754 *format* is a "set of representations of numerical values and symbols". A format may also include how the set is encoded.[^18]

A floating-point format is specified by

- a base (also called *radix*) *b*, which is either 2 (binary) or 10 (decimal) in IEEE 754;
- a precision *p*;
- an exponent range from *emin* to *emax*, with *emin* = 1 − *emax*, or equivalently *emin* = − (*emax* − 1), for all IEEE 754 formats.

A format comprises

- Finite numbers, which can be described by three integers: *s*  = a *sign* (zero or one), *c*  = a *[significand](https://en.wikipedia.org/wiki/Significand "Significand")* (also called a *coefficient* or *mantissa*) having no more than *p* digits when written in base *b* (i.e., an integer in the range through 0 to *b* <sup><i>p</i></sup>  − 1), and *q*  = an *exponent* such that *emin* ≤ *q*  +  *p*  − 1 ≤ *emax*. The numerical value of such a finite number is (−1) <sup><i>s</i></sup> × *c* × *b* <sup><i>q</i></sup>.[^1] Moreover, there are two zero values, called [signed zeros](https://en.wikipedia.org/wiki/Signed_zero "Signed zero"): the sign bit specifies whether a zero is +0 (positive zero) or −0 (negative zero).
- Two infinities: +∞ and −∞.
- Two kinds of [NaN](https://en.wikipedia.org/wiki/NaN "NaN") (not-a-number): a quiet NaN (qNaN) and a signaling NaN (sNaN).

For example, if *b* = 10, *p* = 7, and *emax* = 96, then *emin* = −95, the significand satisfies 0 ≤ *c* ≤ 9 999 999, and the exponent satisfies −101 ≤ *q* ≤ 90. Consequently, the smallest non-zero positive number that can be represented is 1×10 <sup>−101</sup>, and the largest is 9999999×10 <sup>90</sup> (9.999999×10 <sup>96</sup>), so the full range of numbers is −9.999999×10 <sup>96</sup> through 9.999999×10 <sup>96</sup>. The numbers − *b* <sup>1− <i>emax</i></sup> and *b* <sup>1− <i>emax</i></sup> (here, −1×10 <sup>−95</sup> and 1×10 <sup>−95</sup>) are the smallest (in magnitude) *normal numbers*; non-zero numbers between these smallest numbers are called [subnormal numbers](https://en.wikipedia.org/wiki/Subnormal_number "Subnormal number").

Some numbers may have several possible floating-point representations. For instance, if *b*  = 10, and *p* = 7, then −12.345 can be represented by −12345×10 <sup>−3</sup>, −123450×10 <sup>−4</sup>, and −1234500×10 <sup>−5</sup>. However, for most operations, such as arithmetic operations, the result (value) does not depend on the representation of the inputs.

For the decimal formats, any representation is valid, and the set of these representations is called a *cohort*. When a result can have several representations, the standard specifies which member of the cohort is chosen.

For the binary formats, the representation is made unique by choosing the smallest representable exponent allowing the value to be represented exactly. Further, the exponent is not represented directly, but a [bias](https://en.wikipedia.org/wiki/Exponent_bias "Exponent bias") is added so that the smallest representable exponent is represented as 1, with 0 used for subnormal numbers. For numbers with an exponent in the normal range (the exponent field being neither all ones nor all zeros), the leading bit of the significand will always be 1. Consequently, a leading 1 can be implied rather than explicitly present in the memory encoding, and under the standard the explicitly represented part of the significand will lie between 0 and 1. This rule is called *leading bit convention*, *implicit bit convention*, or *hidden bit convention*. This rule allows the binary format to have an extra bit of precision. The leading bit convention cannot be used for the subnormal numbers as they have an exponent outside the normal exponent range and scale by the smallest represented exponent as used for the smallest normal numbers.

Due to the possibility of multiple encodings (at least in formats called *interchange formats*), a NaN may carry other information: a sign bit (which has no meaning, but may be used by some operations) and a *payload*, which is intended for diagnostic information indicating the source of the NaN (but the payload may have other uses, such as *NaN-boxing* [^19] [^20] [^21]).

The standard defines five basic formats that are named for their numeric base and the number of bits used in their interchange encoding. There are three binary floating-point basic formats (encoded with 32, 64 or 128 bits) and two decimal floating-point basic formats (encoded with 64 or 128 bits). The [binary32](https://en.wikipedia.org/wiki/Binary32 "Binary32") and [binary64](https://en.wikipedia.org/wiki/Binary64 "Binary64") formats are the *single* and *double* formats of [IEEE 754-1985](https://en.wikipedia.org/wiki/IEEE_754-1985 "IEEE 754-1985") respectively. A conforming implementation must fully implement at least one of the basic formats.

The standard also defines *[interchange formats](https://en.wikipedia.org/wiki/#Interchange_formats)*, which generalize these basic formats.[^22] For the binary formats, the leading bit convention is required. The following table summarizes some of the possible interchange formats (including the basic formats).

<table><tbody><tr><th colspan="3"></th><th colspan="2">Significand</th><th colspan="2">Exponent</th><th colspan="4">Properties <sup><a href="https://en.wikipedia.org/wiki/#fn:2">2</a></sup></th><th colspan="1"></th></tr><tr><th>Name</th><th>Common name</th><th></th><th><div>Digits <sup><a href="https://en.wikipedia.org/wiki/#fn:3">3</a></sup></div></th><th><div>Decimal<br>digits <sup><a href="https://en.wikipedia.org/wiki/#fn:4">4</a></sup></div></th><th>Min</th><th>Max</th><th><i>MAXVAL</i></th><th>log <sub>10</sub> <i>MAXVAL</i></th><th><i>MINVAL</i> &gt;0<br>(normal)</th><th><i>MINVAL</i> &gt;0<br>(subnormal)</th><th>Notes</th></tr><tr><td><a href="https://en.wikipedia.org/wiki/Half-precision_floating-point_format">binary16</a></td><td>Half precision</td><td>2</td><td>11</td><td>3.31</td><td>−14</td><td>15</td><td>65504</td><td>4.816</td><td>6.10 <span>×</span> 10 <sup>−5</sup></td><td>5.96 <span>×</span> 10 <sup>−8</sup></td><td>Interchange</td></tr><tr><td><a href="https://en.wikipedia.org/wiki/Single-precision_floating-point_format">binary32</a></td><td>Single precision</td><td>2</td><td>24</td><td>7.22</td><td>−126</td><td>127</td><td>3.40 <span>×</span> 10 <sup><span>38</span></sup></td><td>38.532</td><td>1.18 <span>×</span> 10 <sup>−38</sup></td><td>1.40 <span>×</span> 10 <sup>−45</sup></td><td>Basic</td></tr><tr><td><a href="https://en.wikipedia.org/wiki/Double-precision_floating-point_format">binary64</a></td><td>Double precision</td><td>2</td><td>53</td><td>15.95</td><td>−1022</td><td>1023</td><td>1.80 <span>×</span> 10 <sup><span>308</span></sup></td><td>308.255</td><td>2.23 <span>×</span> 10 <sup>−308</sup></td><td>4.94 <span>×</span> 10 <sup>−324</sup></td><td>Basic</td></tr><tr><td><a href="https://en.wikipedia.org/wiki/Quadruple-precision_floating-point_format">binary128</a></td><td>Quadruple precision</td><td>2</td><td>113</td><td>34.02</td><td>−16382</td><td>16383</td><td>1.19 <span>×</span> 10 <sup><span>4932</span></sup></td><td>4932.075</td><td>3.36 <span>×</span> 10 <sup>−4932</sup></td><td>6.48 <span>×</span> 10 <sup>−4966</sup></td><td>Basic</td></tr><tr><td><a href="https://en.wikipedia.org/wiki/Octuple-precision_floating-point_format">binary256</a></td><td>Octuple precision</td><td>2</td><td>237</td><td>71.34</td><td>−262142</td><td>262143</td><td>1.61 <span>×</span> 10 <sup><span>78 <span>913</span></span></sup></td><td>78913.207</td><td>2.48 <span>×</span> 10 <sup>−78913</sup></td><td>2.25 <span>×</span> 10 <sup>−78984</sup></td><td>Interchange</td></tr><tr><td><a href="https://en.wikipedia.org/wiki/Decimal32_floating-point_format">decimal32</a></td><td></td><td>10</td><td>7</td><td>7</td><td>−95</td><td>96</td><td>1.0 <span>×</span> 10 <sup><span>97</span></sup></td><td>97 − 4.34 <span>×</span> 10 <sup>−8</sup></td><td>1 <span>×</span> 10 <sup>−95</sup></td><td>1 <span>×</span> 10 <sup>−101</sup></td><td>Interchange</td></tr><tr><td><a href="https://en.wikipedia.org/wiki/Decimal64_floating-point_format">decimal64</a></td><td></td><td>10</td><td>16</td><td>16</td><td>−383</td><td>384</td><td>1.0 <span>×</span> 10 <sup><span>385</span></sup></td><td>385 − 4.34 <span>×</span> 10 <sup>−17</sup></td><td>1 <span>×</span> 10 <sup>−383</sup></td><td>1 <span>×</span> 10 <sup>−398</sup></td><td>Basic</td></tr><tr><td><a href="https://en.wikipedia.org/wiki/Decimal128_floating-point_format">decimal128</a></td><td></td><td>10</td><td>34</td><td>34</td><td>−6143</td><td>6144</td><td>1.0 <span>×</span> 10 <sup><span>6145</span></sup></td><td><span>6145 − 4.34 <span>×</span> 10 <sup>−35</sup></span></td><td>1 <span>×</span> 10 <sup>−6143</sup></td><td>1 <span>×</span> 10 <sup>−6176</sup></td><td>Basic</td></tr></tbody></table>

In the table above, integer values are exact, whereas values in decimal notation (e.g. 1.0) are rounded values. The minimum exponents listed are for normal numbers; the special [subnormal number](https://en.wikipedia.org/wiki/Subnormal_number "Subnormal number") representation allows even smaller (in magnitude) numbers to be represented with some loss of precision. For example, the smallest positive number that can be represented in binary64 is 2 <sup>−1074</sup>; contributions to the −1074 figure include the *emin* value −1022 and all but one of the 53 significand bits (2 <sup>−1022 − (53 − 1)</sup> = 2 <sup>−1074</sup>).

Decimal digits is the precision of the format expressed in terms of an equivalent number of decimal digits. It is computed as *digits* × log <sub>10</sub> *base*. E.g. binary128 has approximately the same precision as a 34 digit decimal number.

log <sub>10</sub> *MAXVAL* is a measure of the range of the encoding. Its integer part is the largest exponent shown on the output of a value in scientific notation with one leading digit in the significand before the decimal point (e.g. 1.698 × 10 <sup><span>38</span></sup> is near the largest value in binary32, 9.999999 × 10 <sup><span>96</span></sup> is the largest value in decimal32).

The binary32 (single) and binary64 (double) formats are two of the most common formats used today. The figure below shows the absolute precision for both formats over a range of values. This figure can be used to select an appropriate format given the expected value of a number and the required precision.

![[~/×/7f7d404d7d54f9834a6f04433623d294_MD5.png]]

Precision of binary32 and binary64 in the range 10 −12 to 10 12

An example of a layout for [32-bit floating point](https://en.wikipedia.org/wiki/Single-precision_floating-point_format "Single-precision floating-point format") is

![[~/×/d8ed15591c54ac59e61db1f9134f8762_MD5.png]]

and the [64 bit layout](https://en.wikipedia.org/wiki/Double-precision_floating-point_format "Double-precision floating-point format") is similar.

The standard specifies optional [extended](https://en.wikipedia.org/wiki/Extended_precision "Extended precision") and extendable precision formats, which provide greater precision than the basic formats.[^23] An extended precision format extends a basic format by using more precision and more exponent range. An extendable precision format allows the user to specify the precision and exponent range. An implementation may use whatever internal representation it chooses for such formats; all that needs to be defined are its parameters (*b*, *p*, and *emax*). These parameters uniquely describe the set of finite numbers (combinations of sign, significand, and exponent for the given radix) that it can represent.

The standard recommends that language standards provide a method of specifying *p* and *emax* for each supported base *b*.[^24] The standard recommends that language standards and implementations support an extended format which has a greater precision than the largest basic format supported for each radix *b*.[^25] For an extended format with a precision between two basic formats the exponent range must be as great as that of the next wider basic format. So for instance a 64-bit extended precision binary number must have an 'emax' of at least 16383. The [x87](https://en.wikipedia.org/wiki/X87 "X87") [80-bit extended format](https://en.wikipedia.org/wiki/Extended_precision#x86_extended-precision_format "Extended precision") meets this requirement.

The original [IEEE 754-1985](https://en.wikipedia.org/wiki/IEEE_754-1985 "IEEE 754-1985") standard also had the concept of *extended formats*, but without any mandatory relation between *emin* and *emax*. For example, the [Motorola 68881](https://en.wikipedia.org/wiki/Motorola_68881 "Motorola 68881") 80-bit format,[^26] where *emin* = − *emax*, was a conforming extended format, but it became non-conforming in the 2008 revision.

### Interchange formats

Interchange formats are intended for the exchange of floating-point data using a bit string of fixed length for a given format.

#### Binary

For the exchange of binary floating-point numbers, interchange formats of length 16 bits, 32 bits, 64 bits, and any multiple of 32 bits ≥ 128 [^5] are defined. The 16-bit format is intended for the exchange or storage of small numbers (e.g., for graphics).

The encoding scheme for these binary interchange formats is the same as that of IEEE 754-1985: a sign bit, followed by *w* exponent bits that describe the exponent offset by a *[bias](https://en.wikipedia.org/wiki/Exponent_bias "Exponent bias")*, and *p*  − 1 bits that describe the significand. The width of the exponent field for a *k* -bit format is computed as *w*  = round(4 log <sub>2</sub> (*k*)) − 13. The existing 64- and 128-bit formats follow this rule, but the 16- and 32-bit formats have more exponent bits (5 and 8 respectively) than this formula would provide (3 and 7 respectively).

As with IEEE 754-1985, the biased-exponent field is filled with all 1 bits to indicate either infinity (trailing significand field = 0) or a NaN (trailing significand field ≠ 0). For NaNs, quiet NaNs and signaling NaNs are distinguished by using the most significant bit of the trailing significand field exclusively,[^6] and the payload is carried in the remaining bits.

#### Decimal

For the exchange of decimal floating-point numbers, interchange formats of any multiple of 32 bits are defined. As with binary interchange, the encoding scheme for the decimal interchange formats encodes the sign, exponent, and significand. Two different bit-level encodings are defined, and interchange is complicated by the fact that some external indicator of the encoding in use may be required.

The two options allow the significand to be encoded as a compressed sequence of decimal digits using [densely packed decimal](https://en.wikipedia.org/wiki/Densely_packed_decimal "Densely packed decimal") or, alternatively, as a [binary integer](https://en.wikipedia.org/wiki/Binary_integer_decimal "Binary integer decimal"). The former is more convenient for direct hardware implementation of the standard, while the latter is more suited to software emulation on a binary computer. In either case, the set of numbers (combinations of sign, significand, and exponent) that may be encoded is identical, and [special values](https://en.wikipedia.org/wiki/Floating_point#Special_values "Floating point") (±zero with the minimum exponent, ±infinity, quiet NaNs, and signaling NaNs) have identical encodings.

## Rounding rules

The standard defines five rounding rules. The first two rules round to a nearest value; the others are called *[directed roundings](https://en.wikipedia.org/wiki/Directed_rounding "Directed rounding")*:

- **[Round to nearest, ties to even](https://en.wikipedia.org/wiki/Rounding#Rounding_half_to_even "Rounding")** – rounds to the nearest value; if the number falls midway, it is rounded to the nearest value with an even least significant digit.
- **[Round to nearest, ties away from zero](https://en.wikipedia.org/wiki/Rounding#Rounding_half_away_from_zero "Rounding")** (or **ties to away**) – rounds to the nearest value; if the number falls midway, it is rounded to the nearest value above (for positive numbers) or below (for negative numbers).

At the extremes, a value with a magnitude strictly less than ${\displaystyle k=b^{\text{emax}}\left(b-{\tfrac {1}{2}}b^{1-p}\right)}$ will be rounded to the minimum or maximum finite number (depending on the value's sign). Any numbers with exactly this magnitude are considered ties; this choice of tie may be conceptualized as the midpoint between ${\displaystyle \pm b^{\text{emax}}(b-b^{1-p})}$ and ${\displaystyle \pm b^{{\text{emax}}+1}}$ , which, were the exponent not limited, would be the next representable floating-point numbers larger in magnitude. Numbers with a magnitude strictly larger than k are rounded to the corresponding infinity.[^27]

"Round to nearest, ties to even" is the default for binary floating point and the recommended default for decimal. "Round to nearest, ties to away" is only required for decimal implementations.[^28]

### Directed roundings

- **Round toward 0**  – directed rounding towards zero (also known as *truncation*).
- **Round toward +∞** – directed rounding towards positive infinity (also known as *rounding up* or *ceiling*).
- **Round toward −∞** – directed rounding towards negative infinity (also known as *rounding down* or *floor*).

<table><caption>Example of rounding to integers using the IEEE 754 rules</caption><tbody><tr><th rowspan="2">Mode</th><th colspan="4">Example value</th></tr><tr><th>+11.5</th><th>+12.5</th><th>−11.5</th><th>−12.5</th></tr><tr><td>to nearest, ties to even</td><td>+12.0</td><td>+12.0</td><td>−12.0</td><td>−12.0</td></tr><tr><td>to nearest, ties away from zero</td><td>+12.0</td><td>+13.0</td><td>−12.0</td><td>−13.0</td></tr><tr><td>toward 0</td><td>+11.0</td><td>+12.0</td><td>−11.0</td><td>−12.0</td></tr><tr><td>toward +∞</td><td>+12.0</td><td>+13.0</td><td>−11.0</td><td>−12.0</td></tr><tr><td>toward −∞</td><td>+11.0</td><td>+12.0</td><td>−12.0</td><td>−13.0</td></tr></tbody></table>

Unless specified otherwise, the floating-point result of an operation is determined by applying the rounding function on the infinitely precise (mathematical) result. Such an operation is said to be *correctly rounded*. This requirement is called *correct rounding*.[^29]

## Required operations

Required operations for a supported arithmetic format (including the basic formats) include:

- Conversions to and from integer [^30] [^31]
- Previous and next consecutive values [^30]
- Arithmetic operations (add, subtract, multiply, divide, square root, [fused multiply–add](https://en.wikipedia.org/wiki/Multiply%E2%80%93accumulate_operation "Multiply–accumulate operation"), remainder, minimum, maximum) [^30] [^31]
- Conversions (between formats, to and from strings, etc.) [^32] [^33]
- Scaling and (for decimal) quantizing [^34] [^35]
- Copying and manipulating the sign (abs, negate, etc.) [^36]
- Comparisons and total ordering [^37] [^38]
- Classification of numbers (subnormal, finite, etc.) and testing for NaNs [^39]
- Testing and setting status flags [^40]

### Comparison predicates

The standard provides comparison predicates to compare one floating-point datum to another in the supported arithmetic format.[^41] Any comparison with a NaN is treated as unordered. −0 and +0 compare as equal.

### Total-ordering predicate

The standard provides a predicate *totalOrder*, which defines a [total ordering](https://en.wikipedia.org/wiki/Total_order "Total order") on canonical members of the supported arithmetic format.[^42] The predicate agrees with the comparison predicates (see section [§ Comparison predicates](https://en.wikipedia.org/wiki/#Comparison_predicates)) when one floating-point number is less than the other. The main differences are:[^43]

- NaN is sortable.
	- NaN is treated as if it had a larger absolute value than Infinity (or any other floating-point numbers). (−NaN < −Infinity; +Infinity < +NaN.)
	- qNaN and sNaN are treated as if qNaN had a larger absolute value than sNaN. (−qNaN < −sNaN; +sNaN < +qNaN.)
	- NaN is then sorted according to the payload. In IEEE 754-2008, a NaN with a lesser payload is treated as having a lesser absolute value. In IEEE 754-2019, any implementation-defined ordering is acceptable.
- Negative zero is treated as smaller than positive zero.
- If both sides of the comparison refer to the same floating-point datum, the one with the lesser exponent is treated as having a lesser absolute value.[^42]

The *totalOrder* predicate does not impose a total ordering on all encodings in a format. In particular, it does not distinguish among different encodings of the same floating-point representation, as when one or both encodings are non-canonical.[^42] IEEE 754-2019 incorporates clarifications of *totalOrder*.

For the binary interchange formats whose encoding follows the IEEE 754-2008 recommendation on [placement of the NaN signaling bit](https://en.wikipedia.org/wiki/NaN#Encoding "NaN"), the comparison is identical to one that [type puns](https://en.wikipedia.org/wiki/Type_punning "Type punning") the floating-point numbers to a sign–magnitude integer (assuming a payload ordering consistent with this comparison), an old trick for FP comparison without an FPU.[^44]

## Exception handling

The standard defines five exceptions, each of which returns a default value and has a corresponding status flag that is raised when the exception occurs.[^7] No other exception handling is required, but additional non-default alternatives are recommended (see [§ Alternate exception handling](https://en.wikipedia.org/wiki/#Alternate_exception_handling)).

The five possible exceptions are

- Invalid operation: mathematically undefined, e.g., the square root of a negative number. By default, returns qNaN.
- Division by zero: an operation on finite operands gives an exact infinite result, e.g., 1/0 or log(0). By default, returns ±infinity.
- Overflow: a finite result is too large to be represented accurately (i.e., its exponent with an unbounded exponent range would be larger than *emax*). By default, returns ±infinity for the round-to-nearest modes (and follows the rounding rules for the directed rounding modes).
- Underflow: a result is very small (outside the normal range). By default, returns a number less than or equal to the minimum positive normal number in magnitude (following the rounding rules); a [subnormal number](https://en.wikipedia.org/wiki/Subnormal_number "Subnormal number") always implies an underflow exception, but by default, if it is exact, no flag is raised.
- Inexact: the exact (i.e., unrounded) result is not representable exactly. By default, returns the correctly rounded result.

These are the same five exceptions as were defined in IEEE 754-1985, but the *division by zero* exception has been extended to operations other than the division.

Some decimal floating-point implementations define additional exceptions,[^45] [^46] which are not part of IEEE 754:

- Clamped: a result's exponent is too large for the destination format. By default, trailing zeros will be added to the coefficient to reduce the exponent to the largest usable value. If this is not possible (because this would cause the number of digits needed to be more than the destination format) then an overflow exception occurs.
- Rounded: a result's coefficient requires more digits than the destination format provides. An inexact exception is signaled if any non-zero digits are discarded.

Additionally, operations like quantize when either operand is infinite, or when the result does not fit the destination format, will also signal invalid operation exception.[^47]

## Special values

### Signed zero

In the IEEE 754 standard, zero is signed, meaning that there exist both a "positive zero" (+0) and a "negative zero" (−0). In most [run-time environments](https://en.wikipedia.org/wiki/Run-time_environment "Run-time environment"), positive zero is usually printed as " `0` " and the negative zero as " `-0` ". The two values behave as equal in numerical comparisons, but some operations return different results for +0 and −0. For instance, 1/(−0) returns negative infinity, while 1/(+0) returns positive infinity (so that the identity 1/(1/±∞) = ±∞ is maintained). Other common [functions with a discontinuity](https://en.wikipedia.org/wiki/Discontinuous_function "Discontinuous function") at *x* = 0 which might treat +0 and −0 differently include [Γ(*x*)](https://en.wikipedia.org/wiki/Gamma_function "Gamma function") and the [principal square root](https://en.wikipedia.org/wiki/Square_root#Principal_square_root_of_a_complex_number "Square root") of *y* + *xi* for any negative number *y*. As with any approximation scheme, operations involving "negative zero" can occasionally cause confusion. For example, in IEEE 754, *x* = *y* does not always imply 1/ *x* = 1/ *y*, as 0 = −0 but 1/0 ≠ 1/(−0).[^48] Moreover, the reciprocal square root [^8] of ±0 is ±∞ while the mathematical function ${\displaystyle 1/{\sqrt {x}}}$ over the real numbers does not have any negative value.

### Subnormal numbers

Subnormal values fill the [underflow](https://en.wikipedia.org/wiki/Arithmetic_underflow "Arithmetic underflow") gap with values where the absolute distance between them is the same as for adjacent values just outside the underflow gap. This is an improvement over the older practice to just have zero in the underflow gap, and where underflowing results were replaced by zero (flush to zero).[^49]

Modern floating-point hardware usually handles subnormal values (as well as normal values), and does not require software emulation for subnormals.

### Infinities

The infinities of the [extended real number line](https://en.wikipedia.org/wiki/Extended_real_number_line "Extended real number line") can be represented in IEEE floating-point datatypes, just like ordinary floating-point values like 1, 1.5, etc. They are not error values in any way, though they are often (depends on the rounding) used as replacement values when there is an overflow. Upon a divide-by-zero exception, a positive or negative infinity is returned as an exact result. An infinity can also be introduced as a numeral (like C's "INFINITY" macro, or " ∞ " if the programming language allows that syntax).

IEEE 754 requires infinities to be handled in a reasonable way, such as

- (+∞) + (+7) = (+∞)
- (+∞) × (−2) = (−∞)
- (+∞) × 0 = NaN – there is no meaningful thing to do

### NaNs

IEEE 754 specifies a special value called "Not a Number" (NaN) to be returned as the result of certain "invalid" operations, such as 0/0, ∞×0, or sqrt(−1). In general, NaNs will be propagated, i.e. most operations involving a NaN will result in a NaN, although functions that would give some defined result for any given floating-point value will do so for NaNs as well, e.g. NaN ^ 0 = 1. There are two kinds of NaNs: the default *quiet* NaNs and, optionally, *signaling* NaNs. A signaling NaN in any arithmetic operation (including numerical comparisons) will cause an "invalid operation" [exception](https://en.wikipedia.org/wiki/#Exception_handling) to be signaled.

The representation of NaNs specified by the standard has some unspecified bits that could be used to encode the type or source of error; but there is no standard for that encoding. In theory, signaling NaNs could be used by a [runtime system](https://en.wikipedia.org/wiki/Runtime_system "Runtime system") to flag uninitialized variables, or extend the floating-point numbers with other special values without slowing down the computations with ordinary values, although such extensions are not common.

## Design rationale

![[~/×/480797872ab154503aabd869db325e14_MD5.jpg]]

William Kahan. A primary architect of the Intel 80x87 floating-point coprocessor and IEEE 754 floating-point standard.

It is a common misconception that the more esoteric features of the IEEE 754 standard discussed here, such as extended formats, NaN, infinities, subnormals etc., are only of interest to [numerical analysts](https://en.wikipedia.org/wiki/Numerical_analyst "Numerical analyst"), or for advanced numerical applications. In fact the opposite is true: these features are designed to give safe robust defaults for numerically unsophisticated programmers, in addition to supporting sophisticated numerical libraries by experts. The key designer of IEEE 754, [William Kahan](https://en.wikipedia.org/wiki/William_Kahan "William Kahan") notes that it is incorrect to "... \[deem\] features of IEEE Standard 754 for Binary Floating-Point Arithmetic that...\[are\] not appreciated to be features usable by none but numerical experts. The facts are quite the opposite. In 1977 those features were designed into the Intel 8087 to serve the widest possible market... Error-analysis tells us how to design floating-point arithmetic, like IEEE Standard 754, moderately tolerant of well-meaning ignorance among programmers".[^50]

- The special values such as infinity and NaN ensure that the floating-point arithmetic is algebraically complete: every floating-point operation produces a well-defined result and will not—by default—throw a machine interrupt or trap. Moreover, the choices of special values returned in exceptional cases were designed to give the correct answer in many cases. For instance, under IEEE 754 arithmetic, continued fractions such as `R(z) := 7 − 3/[z − 2 − 1/(z − 7 + 10/[z − 2 − 2/(z − 3)])]` will give the correct answer on all inputs, as the potential divide by zero, e.g. for z = 3, is correctly handled by giving +infinity, and so such exceptions can be safely ignored.[^51] As noted by Kahan, the unhandled trap consecutive to a floating-point to 16-bit integer conversion overflow that caused the [loss of an Ariane 5](https://en.wikipedia.org/wiki/Ariane_flight_V88 "Ariane flight V88") rocket would not have happened under the default IEEE 754 floating-point policy.[^50]
- Subnormal numbers ensure that for *finite* floating-point numbers x and y, x − y = 0 if and only if x = y, as expected, but which did not hold under earlier floating-point representations.[^52]
- On the design rationale of the x87 [80-bit format](https://en.wikipedia.org/wiki/Extended_precision "Extended precision"), Kahan notes: "This Extended format is designed to be used, with negligible loss of speed, for all but the simplest arithmetic with float and double operands. For example, it should be used for scratch variables in loops that implement recurrences like polynomial evaluation, scalar products, partial and continued fractions. It often averts premature Over/Underflow or severe local cancellation that can spoil simple algorithms".[^53] Computing intermediate results in an extended format with high precision and extended exponent has precedents in the historical practice of scientific [calculation](https://en.wikipedia.org/wiki/Significant_figures#Arithmetic "Significant figures") and in the design of [scientific calculators](https://en.wikipedia.org/wiki/Scientific_calculator "Scientific calculator") e.g. [Hewlett-Packard](https://en.wikipedia.org/wiki/Hewlett-Packard "Hewlett-Packard") 's [financial calculators](https://en.wikipedia.org/wiki/Financial_calculator "Financial calculator") performed arithmetic and financial functions to three more significant decimals than they stored or displayed.[^53] The implementation of extended precision enabled standard elementary function libraries to be readily developed that normally gave double precision results within one [unit in the last place](https://en.wikipedia.org/wiki/Unit_in_the_last_place "Unit in the last place") (ULP) at high speed.
- Correct rounding of values to the nearest representable value avoids systematic biases in calculations and slows the growth of errors. Rounding ties to even removes the statistical bias that can occur in adding similar figures.
- Directed rounding was intended as an aid with checking error bounds, for instance in [interval arithmetic](https://en.wikipedia.org/wiki/Interval_arithmetic "Interval arithmetic"). It is also used in the implementation of some functions.
- The mathematical basis of the operations, in particular correct rounding, allows one to prove mathematical properties and design floating-point algorithms such as [2Sum, Fast2Sum](https://en.wikipedia.org/wiki/2Sum "2Sum") and [Kahan summation algorithm](https://en.wikipedia.org/wiki/Kahan_summation_algorithm "Kahan summation algorithm"), e.g. to improve accuracy or implement multiple-precision arithmetic subroutines relatively easily.

A property of the single- and double-precision formats is that their encoding allows one to easily sort them without using floating-point hardware, as if the bits represented [sign-magnitude](https://en.wikipedia.org/wiki/Sign-magnitude "Sign-magnitude") integers, although it is unclear whether this was a design consideration (it seems noteworthy that the earlier [IBM hexadecimal floating-point](https://en.wikipedia.org/wiki/IBM_hexadecimal_floating-point "IBM hexadecimal floating-point") representation also had this property for normalized numbers). With the prevalent [two's-complement](https://en.wikipedia.org/wiki/Two%27s-complement "Two's-complement") representation, [interpreting](https://en.wikipedia.org/wiki/Type_punning "Type punning") the bits as signed integers sorts the positives correctly, but with the negatives reversed; as one possible correction for that, with an [xor](https://en.wikipedia.org/wiki/Exclusive_or "Exclusive or") to flip the sign bit for positive values and all bits for negative values, all the values become sortable as unsigned integers (with −0 < +0).[^44]

The standard recommends optional exception handling in various forms, including presubstitution of user-defined default values, and traps (exceptions that change the flow of control in some way) and other exception handling models that interrupt the flow, such as try/catch. The traps and other exception mechanisms remain optional, as they were in IEEE 754-1985.

Clause 9 in the standard recommends additional mathematical operations [^54] that language standards should define.[^55] None are required in order to conform to the standard.

The following are recommended arithmetic operations, which must round correctly:[^56]

- [${\displaystyle e^{x}}$](https://en.wikipedia.org/wiki/Exp\(x\) "Exp(x)"), ${\displaystyle 2^{x}}$ , ${\displaystyle 10^{x}}$
- [${\displaystyle e^{x}-1}$](https://en.wikipedia.org/wiki/Exp\(x\)%E2%88%921 "Exp(x)−1"), ${\displaystyle 2^{x}-1}$ , ${\displaystyle 10^{x}-1}$
- [${\displaystyle \ln x}$](https://en.wikipedia.org/wiki/Natural_logarithm "Natural logarithm"), [${\displaystyle \log _{2}x}$](https://en.wikipedia.org/wiki/Binary_logarithm "Binary logarithm"), [${\displaystyle \log _{10}x}$](https://en.wikipedia.org/wiki/Common_logarithm "Common logarithm")
- [${\displaystyle \ln(1+x)}$](https://en.wikipedia.org/wiki/Ln\(1%2Bx\) "Ln(1+x)"), ${\displaystyle \log _{2}(1+x)}$ , ${\displaystyle \log _{10}(1+x)}$
- [${\textstyle {\sqrt {x^{2}+y^{2}}}}$](https://en.wikipedia.org/wiki/Hypot "Hypot")
- [${\displaystyle 1{\big /}{\sqrt {x{\vphantom {t}}}}}$](https://en.wikipedia.org/wiki/Reciprocal_square_root "Reciprocal square root")
- ${\displaystyle (1+x)^{n}}$ for ${\displaystyle x\geq -1}$ (named *compound* and used to compute an [exponential growth](https://en.wikipedia.org/wiki/Exponential_growth "Exponential growth"), whose rate cannot be less than −1) [^57]
- [${\displaystyle x^{\frac {1}{n}}}$](https://en.wikipedia.org/wiki/Nth_root "Nth root")
- [${\displaystyle x^{n}}$](https://en.wikipedia.org/wiki/Exponentiation#Integer_exponents "Exponentiation"), [${\displaystyle x^{y}}$](https://en.wikipedia.org/wiki/Exponentiation "Exponentiation")
- [${\displaystyle \sin x}$](https://en.wikipedia.org/wiki/Sin_\(trigonometry\) "Sin (trigonometry)"), [${\displaystyle \cos x}$](https://en.wikipedia.org/wiki/Cos_\(trigonometry\) "Cos (trigonometry)"), [${\displaystyle \tan x}$](https://en.wikipedia.org/wiki/Tan_\(trigonometry\) "Tan (trigonometry)")
- [${\displaystyle \arcsin x}$](https://en.wikipedia.org/wiki/Arcsin_\(trigonometry\) "Arcsin (trigonometry)"), [${\displaystyle \arccos x}$](https://en.wikipedia.org/wiki/Arccos_\(trigonometry\) "Arccos (trigonometry)"), [${\displaystyle \arctan x}$](https://en.wikipedia.org/wiki/Arctan_\(trigonometry\) "Arctan (trigonometry)"), [${\displaystyle \operatorname {atan2} (y,x)}$](https://en.wikipedia.org/wiki/Atan2 "Atan2")
- ${\displaystyle \operatorname {sinPi} x=\sin \pi x}$ , ${\displaystyle \operatorname {cosPi} x=\cos \pi x}$ , ${\displaystyle \operatorname {tanPi} x=\tan \pi x}$ (see also: [Multiples of π](https://en.wikipedia.org/wiki/Multiples_of_%CF%80 "Multiples of π"))
- ${\displaystyle \operatorname {asinPi} x={\tfrac {1}{\pi }}\arcsin x}$ , ${\displaystyle \operatorname {acosPi} x={\tfrac {1}{\pi }}\arccos x}$ , ${\displaystyle \operatorname {atanPi} x={\tfrac {1}{\pi }}\arctan x}$ , ${\displaystyle \operatorname {atan2Pi} (y,x)={\tfrac {1}{\pi }}\operatorname {atan2} (y,x)}$ (see also: [Multiples of π](https://en.wikipedia.org/wiki/Multiples_of_%CF%80 "Multiples of π"))
- [${\displaystyle \sinh x}$](https://en.wikipedia.org/wiki/Sinh_\(mathematical_function\) "Sinh (mathematical function)"), [${\displaystyle \cosh x}$](https://en.wikipedia.org/wiki/Cosh_\(mathematical_function\) "Cosh (mathematical function)"), [${\displaystyle \tanh x}$](https://en.wikipedia.org/wiki/Tanh_\(mathematical_function\) "Tanh (mathematical function)")
- [${\displaystyle \operatorname {arsinh} x}$](https://en.wikipedia.org/wiki/Arsinh "Arsinh"), [${\displaystyle \operatorname {arcosh} x}$](https://en.wikipedia.org/wiki/Arcosh "Arcosh"), [${\displaystyle \operatorname {artanh} x}$](https://en.wikipedia.org/wiki/Artanh "Artanh")

The ${\displaystyle \operatorname {asinPi} }$ , ${\displaystyle \operatorname {acosPi} }$ and ${\displaystyle \operatorname {tanPi} }$ functions were not part of the IEEE 754-2008 standard because they were deemed less necessary.[^58] ${\displaystyle \operatorname {asinPi} }$ and ${\displaystyle \operatorname {acosPi} }$ were mentioned, but this was regarded as an error.[^14] All three were added in the 2019 revision.

The recommended operations also include setting and accessing dynamic mode rounding direction,[^59] and implementation-defined vector reduction operations such as sum, scaled product, and [dot product](https://en.wikipedia.org/wiki/Dot_product "Dot product"), whose accuracy is unspecified by the standard.[^60]

As of 2019, *augmented arithmetic operations* [^61] for the binary formats are also recommended. These operations, specified for addition, subtraction and multiplication, produce a pair of values consisting of a result correctly rounded to nearest in the format and the error term, which is representable exactly in the format. At the time of publication of the standard, no hardware implementations are known, but very similar operations were already implemented in software using well-known algorithms. The history and motivation for their standardization are explained in a background document.[^62] [^63]

As of 2019, the formerly required *minNum*, *maxNum*, *minNumMag*, and *maxNumMag* in IEEE 754-2008 are now [deprecated](https://en.wikipedia.org/wiki/Deprecation "Deprecation") due to their [non-associativity](https://en.wikipedia.org/wiki/Associative_property "Associative property"). Instead, two sets of new minimum and maximum operations are recommended.[^64] The first set contains *minimum*, *minimumNumber*, *maximum* and *maximumNumber*. The second set contains *minimumMagnitude*, *minimumMagnitudeNumber*, *maximumMagnitude* and *maximumMagnitudeNumber*. The history and motivation for this change are explained in a background document.[^65]

### Expression evaluation

The standard recommends how language standards should specify the semantics of sequences of operations, and points out the subtleties of literal meanings and optimizations that change the value of a result. By contrast, the previous [1985](https://en.wikipedia.org/wiki/IEEE_754-1985 "IEEE 754-1985") version of the standard left aspects of the language interface unspecified, which led to inconsistent behavior between compilers, or different optimization levels in an [optimizing compiler](https://en.wikipedia.org/wiki/Optimizing_compiler "Optimizing compiler").

Programming languages should allow a user to specify a minimum precision for intermediate calculations of expressions for each radix. This is referred to as *preferredWidth* in the standard, and it should be possible to set this on a per-block basis. Intermediate calculations within expressions should be calculated, and any temporaries saved, using the maximum of the width of the operands and the preferred width if set. Thus, for instance, a compiler targeting [x87](https://en.wikipedia.org/wiki/X87 "X87") floating-point hardware should have a means of specifying that intermediate calculations must use the [double-extended format](https://en.wikipedia.org/wiki/Extended_precision#IEEE_754_extended_precision_formats "Extended precision"). The stored value of a variable must always be used when evaluating subsequent expressions, rather than any precursor from before rounding and assigning to the variable.

### Reproducibility

The IEEE 754-1985 version of the standard allowed many variations in implementations (such as the encoding of some values and the detection of certain exceptions). IEEE 754-2008 has reduced these allowances, but a few variations still remain (especially for binary formats). The reproducibility clause recommends that language standards should provide a means to write reproducible programs (i.e., programs that will produce the same result in all implementations of a language) and describes what needs to be done to achieve reproducible results.

Concrete examples of potentially non-reproducible behavior can be found in C and [C++](https://en.wikipedia.org/wiki/C%2B%2B "C++"), which allow the use of higher precision for results of floating-point operations and contraction of floating-point expressions, such as regular multiply-and-add into [FMA](https://en.wikipedia.org/wiki/Multiply%E2%80%93accumulate_operation "Multiply–accumulate operation") and `1.0/sqrt(x)` into a reciprocal square root as a single instruction.[^66] C/C++ Compilers such as [GCC](https://en.wikipedia.org/wiki/GNU_Compiler_Collection "GNU Compiler Collection") and [cl.exe](https://en.wikipedia.org/wiki/Cl.exe "Cl.exe") generally default to allowing both unless specifically asked not to, as these changes can generate faster code without obvious loss of accuracy. Compilers also offer more overtly non-compliant "fast" optimizations.[^67] [^68] [C mathematical functions](https://en.wikipedia.org/wiki/C_mathematical_functions "C mathematical functions") are usually not implemented to be "correctly rounded" and add to the problem.[^69] The floating-point environment may also be unexpectedly changed by third-party code.

## Character representation

The standard requires operations to convert between basic formats and *external character sequence* formats.[^70] Conversions to and from a decimal character format are required for all formats. Conversion to an external character sequence must be such that conversion back using round to nearest, ties to even will recover the original number. There is no requirement to preserve the payload of a quiet NaN or signaling NaN, and conversion from the external character sequence may turn a signaling NaN into a quiet NaN.

The original binary value will be preserved by converting to decimal and back again using:[^71]

- 5 decimal digits for binary16,
- 9 decimal digits for binary32,
- 17 decimal digits for binary64,
- 36 decimal digits for binary128.

For other binary formats, the required number of decimal digits is [^9]

${\displaystyle 1+\lceil p\log _{10}(2)\rceil ,}$

where *p* is the number of significant bits in the binary format, e.g. 237 bits for binary256.

When using a decimal floating-point format, the decimal representation will be preserved using:

- 7 decimal digits for decimal32,
- 16 decimal digits for decimal64,
- 34 decimal digits for decimal128.

Algorithms, with code, for correctly rounded conversion from binary to decimal and decimal to binary are discussed by Gay,[^72] and for testing – by Paxson and Kahan.[^73]

### Hexadecimal literals

The standard recommends providing conversions to and from *external hexadecimal-significand character sequences*, based on [C99](https://en.wikipedia.org/wiki/C99 "C99") 's hexadecimal floating point literals. Such a literal consists of an optional sign (`+` or `-`), the indicator "0x", a hexadecimal number with or without a period, an exponent indicator "p", and a decimal exponent with optional sign. The syntax is not case-sensitive.[^74] The decimal exponent scales by powers of 2. For example, `0x0.1p0` is 1/16 and `0x0.1p-4` is 1/256.[^75]

## See also

- [bfloat16 floating-point format](https://en.wikipedia.org/wiki/Bfloat16_floating-point_format "Bfloat16 floating-point format")
- [Binade](https://en.wikipedia.org/wiki/Binade "Binade")
- [Coprocessor](https://en.wikipedia.org/wiki/Coprocessor "Coprocessor")
- [C99](https://en.wikipedia.org/wiki/C99#IEEE_754_floating-point_support "C99") for code examples demonstrating access and use of IEEE 754 features
- [Floating-point arithmetic](https://en.wikipedia.org/wiki/Floating-point_arithmetic#IEEE_754:_floating_point_in_modern_computers "Floating-point arithmetic"), for history, design rationale and example usage of IEEE 754 features
- [Fixed-point arithmetic](https://en.wikipedia.org/wiki/Fixed-point_arithmetic "Fixed-point arithmetic"), for an alternative approach at computation with rational numbers (especially beneficial when the exponent range is known, fixed, or bound at compile time)
- [IBM System z9](https://en.wikipedia.org/wiki/IBM_System_z9 "IBM System z9"), the first CPU to implement IEEE 754-2008 decimal arithmetic (using hardware microcode)
- [IBM z10](https://en.wikipedia.org/wiki/IBM_z10 "IBM z10"), [IBM z196](https://en.wikipedia.org/wiki/IBM_z196 "IBM z196"), [IBM zEC12](https://en.wikipedia.org/wiki/IBM_zEC12_\(microprocessor\) "IBM zEC12 (microprocessor)"), and [IBM z13](https://en.wikipedia.org/wiki/IBM_z13_\(microprocessor\) "IBM z13 (microprocessor)"), CPUs that implement IEEE 754-2008 decimal arithmetic fully in hardware
- [ISO/IEC 10967](https://en.wikipedia.org/wiki/ISO/IEC_10967 "ISO/IEC 10967"), language-independent arithmetic (LIA)
- [Minifloat](https://en.wikipedia.org/wiki/Minifloat "Minifloat"), low-precision binary floating-point formats following IEEE 754 principles
- [POWER6](https://en.wikipedia.org/wiki/POWER6 "POWER6"), [POWER7](https://en.wikipedia.org/wiki/POWER7 "POWER7"), and [POWER8](https://en.wikipedia.org/wiki/POWER8 "POWER8") CPUs that implement IEEE 754-2008 decimal arithmetic fully in hardware
- [strictfp](https://en.wikipedia.org/wiki/Strictfp "Strictfp"), an obsolete keyword in the [Java programming language](https://en.wikipedia.org/wiki/Java_\(programming_language\) "Java (programming language)") that previously restricted arithmetic to IEEE 754 single and double precision to ensure reproducibility across common hardware platforms (as of Java 17, this behavior is required)
- [Table-maker's dilemma](https://en.wikipedia.org/wiki/Table-maker%27s_dilemma "Table-maker's dilemma") for more about the correct rounding of functions
- [Standard Apple Numerics Environment](https://en.wikipedia.org/wiki/Standard_Apple_Numerics_Environment "Standard Apple Numerics Environment")
- [Tapered floating point](https://en.wikipedia.org/wiki/Tapered_floating_point "Tapered floating point")
- [Posit](https://en.wikipedia.org/wiki/Unum_\(number_format\)#Posit_\(Type_III_Unum\) "Unum (number format)"), an alternative number format

## Notes

## References

### Standards

- *IEEE Standard for Binary Floating-Point Arithmetic*. ANSI/IEEE STD 754-1985. IEEE. 1985-10-12. pp. 1– 20. [doi](https://en.wikipedia.org/wiki/Doi_\(identifier\) "Doi (identifier)"):[10.1109/IEEESTD.1985.82928](https://doi.org/10.1109%2FIEEESTD.1985.82928). [ISBN](https://en.wikipedia.org/wiki/ISBN_\(identifier\) "ISBN (identifier)") [0-7381-1165-1](https://en.wikipedia.org/wiki/Special:BookSources/0-7381-1165-1 "Special:BookSources/0-7381-1165-1").
- IEEE Computer Society (2008-08-29). *IEEE Standard for Floating-Point Arithmetic*. IEEE STD 754-2008. IEEE. pp. 1– 70. [doi](https://en.wikipedia.org/wiki/Doi_\(identifier\) "Doi (identifier)"):[10.1109/IEEESTD.2008.4610935](https://doi.org/10.1109%2FIEEESTD.2008.4610935). [ISBN](https://en.wikipedia.org/wiki/ISBN_\(identifier\) "ISBN (identifier)") [978-0-7381-5753-5](https://en.wikipedia.org/wiki/Special:BookSources/978-0-7381-5753-5 "Special:BookSources/978-0-7381-5753-5"). IEEE Std 754-2008.
- IEEE Computer Society (2019-07-22). *IEEE Standard for Floating-Point Arithmetic*. IEEE STD 754-2019. IEEE. pp. 1– 84. [doi](https://en.wikipedia.org/wiki/Doi_\(identifier\) "Doi (identifier)"):[10.1109/IEEESTD.2019.8766229](https://doi.org/10.1109%2FIEEESTD.2019.8766229). [ISBN](https://en.wikipedia.org/wiki/ISBN_\(identifier\) "ISBN (identifier)") [978-1-5044-5924-2](https://en.wikipedia.org/wiki/Special:BookSources/978-1-5044-5924-2 "Special:BookSources/978-1-5044-5924-2"). IEEE Std 754-2019.
- ISO/IEC JTC 1/SC 25 (June 2011). [*ISO/IEC/IEEE 60559:2011 — Information technology — Microprocessor Systems — Floating-Point arithmetic*](https://www.iso.org/standard/57469.html). ISO. pp. 1– 58.`{{[cite book](https://en.wikipedia.org/wiki/Template:Cite_book "Template:Cite book")}}`: CS1 maint: numeric names: authors list ()
- ISO/IEC JTC 1/SC 25 (May 2020). [*ISO/IEC 60559:2020 — Information technology — Microprocessor Systems — Floating-Point arithmetic*](https://www.iso.org/standard/80985.html). ISO. pp. 1– 74.`{{[cite book](https://en.wikipedia.org/wiki/Template:Cite_book "Template:Cite book")}}`: CS1 maint: numeric names: authors list ()

### Secondary references

- [Decimal floating-point](http://speleotrove.com/decimal) arithmetic, FAQs, bibliography, and links
- [Comparing binary floats](http://www.cygnus-software.com/papers/comparingfloats/comparingfloats.htm)
- [IEEE 754 Reference Material](https://web.archive.org/web/20111201211023/http://babbage.cs.qc.cuny.edu/IEEE-754.old/References.xhtml)
- [IEEE 854-1987](http://speleotrove.com/decimal/854mins.html) – History and minutes
- [Supplementary readings for IEEE 754](https://web.archive.org/web/20171230124220/http://grouper.ieee.org/groups/754/reading.html). Includes historical perspectives.

## Further reading

- Goldberg, David (March 1991). ["What Every Computer Scientist Should Know About Floating-Point Arithmetic"](https://doi.org/10.1145%2F103162.103163). *[ACM Computing Surveys](https://en.wikipedia.org/wiki/ACM_Computing_Surveys "ACM Computing Surveys")*. **23** (1): 5– 48. [doi](https://en.wikipedia.org/wiki/Doi_\(identifier\) "Doi (identifier)"):[10.1145/103162.103163](https://doi.org/10.1145%2F103162.103163). (With the addendum "Differences Among IEEE 754 Implementations": [\[1\]](https://web.archive.org/web/20171011072644/http://www.cse.msu.edu/~cse320/Documents/FloatingPoint.pdf), [\[2\]](https://docs.oracle.com/cd/E19957-01/806-3568/ncg_goldberg.html))
- [Hecker, Chris](https://en.wikipedia.org/wiki/Chris_Hecker "Chris Hecker") (February 1996). ["Let's Get To The (Floating) Point"](http://chrishecker.com/images/f/fb/Gdmfp.pdf) (PDF). *[Game Developer](https://en.wikipedia.org/wiki/Game_Developer_\(magazine\) "Game Developer (magazine)")*: 19– 24.
- Severance, Charles (March 1998). ["IEEE 754: An Interview with William Kahan"](http://www.dr-chuck.com/dr-chuck/papers/columns/r3114.pdf) (PDF). *[IEEE Computer](https://en.wikipedia.org/wiki/IEEE_Computer "IEEE Computer")*. **31** (3): 114– 115. [doi](https://en.wikipedia.org/wiki/Doi_\(identifier\) "Doi (identifier)"):[10.1109/MC.1998.660194](https://doi.org/10.1109%2FMC.1998.660194). Retrieved 2019-03-08.
- [Cowlishaw, Mike](https://en.wikipedia.org/wiki/Mike_Cowlishaw "Mike Cowlishaw") (June 2003). ["Decimal floating-point: Algorism for computers"](http://speleotrove.com/decimal/IEEE-cowlishaw-arith16.pdf) (PDF). *16th IEEE Symposium on Computer Arithmetic, 2003. Proceedings*. Los Alamitos, Calif.: IEEE Computer Society. pp. 104– 111. [doi](https://en.wikipedia.org/wiki/Doi_\(identifier\) "Doi (identifier)"):[10.1109/ARITH.2003.1207666](https://doi.org/10.1109%2FARITH.2003.1207666). [ISBN](https://en.wikipedia.org/wiki/ISBN_\(identifier\) "ISBN (identifier)") [978-0-7695-1894-7](https://en.wikipedia.org/wiki/Special:BookSources/978-0-7695-1894-7 "Special:BookSources/978-0-7695-1894-7"). Retrieved 2014-11-14..
- Monniaux, David (May 2008). ["The pitfalls of verifying floating-point computations"](https://hal.science/hal-00128124/en/). *[ACM Transactions on Programming Languages and Systems](https://en.wikipedia.org/wiki/ACM_Transactions_on_Programming_Languages_and_Systems "ACM Transactions on Programming Languages and Systems")*. **30** (3): 1– 41. [arXiv](https://en.wikipedia.org/wiki/ArXiv_\(identifier\) "ArXiv (identifier)"):[cs/0701192](https://arxiv.org/abs/cs/0701192). [doi](https://en.wikipedia.org/wiki/Doi_\(identifier\) "Doi (identifier)"):[10.1145/1353445.1353446](https://doi.org/10.1145%2F1353445.1353446).: A compendium of non-intuitive behaviours of floating-point on popular architectures, with implications for program verification and testing.
- Muller, Jean-Michel; Brunie, Nicolas; de Dinechin, Florent; Jeannerod, Claude-Pierre; Joldes, Mioara; Lefèvre, Vincent; Melquiond, Guillaume; [Revol, Nathalie](https://en.wikipedia.org/wiki/Nathalie_Revol "Nathalie Revol"); Torres, Serge (2018) \[2010\]. [*Handbook of Floating-Point Arithmetic*](https://cds.cern.ch/record/1315760) (2 ed.). [Birkhäuser](https://en.wikipedia.org/wiki/Birkh%C3%A4user "Birkhäuser"). [doi](https://en.wikipedia.org/wiki/Doi_\(identifier\) "Doi (identifier)"):[10.1007/978-3-319-76526-6](https://doi.org/10.1007%2F978-3-319-76526-6). [ISBN](https://en.wikipedia.org/wiki/ISBN_\(identifier\) "ISBN (identifier)") [978-3-319-76525-9](https://en.wikipedia.org/wiki/Special:BookSources/978-3-319-76525-9 "Special:BookSources/978-3-319-76525-9").
- Overton, Michael L. (2001). Written at [Courant Institute of Mathematical Sciences](https://en.wikipedia.org/wiki/Courant_Institute_of_Mathematical_Sciences "Courant Institute of Mathematical Sciences"), [New York University](https://en.wikipedia.org/wiki/New_York_University "New York University"), New York, US. *Numerical Computing with IEEE Floating Point Arithmetic* (1 ed.). Philadelphia, US: [SIAM](https://en.wikipedia.org/wiki/Society_for_Industrial_and_Applied_Mathematics "Society for Industrial and Applied Mathematics"). [doi](https://en.wikipedia.org/wiki/Doi_\(identifier\) "Doi (identifier)"):[10.1137/1.9780898718072](https://doi.org/10.1137%2F1.9780898718072). [ISBN](https://en.wikipedia.org/wiki/ISBN_\(identifier\) "ISBN (identifier)") [978-0-89871-482-1](https://en.wikipedia.org/wiki/Special:BookSources/978-0-89871-482-1 "Special:BookSources/978-0-89871-482-1"). 978-0-89871-571-2, 0-89871-571-7. 2nd edition, 2025. SIAM. [ISBN](https://en.wikipedia.org/wiki/ISBN_\(identifier\) "ISBN (identifier)") [978-1-61197-840-7](https://en.wikipedia.org/wiki/Special:BookSources/978-1-61197-840-7 "Special:BookSources/978-1-61197-840-7").
- [Cleve Moler on Floating Point numbers](http://blogs.mathworks.com/cleve/2014/07/07/floating-point-numbers/)
- Beebe, Nelson H. F. (2017-08-22). *The Mathematical-Function Computation Handbook - Programming Using the MathCW Portable Software Library* (1 ed.). Salt Lake City, UT, US: [Springer International Publishing AG](https://en.wikipedia.org/wiki/Springer_International_Publishing_AG "Springer International Publishing AG"). [doi](https://en.wikipedia.org/wiki/Doi_\(identifier\) "Doi (identifier)"):[10.1007/978-3-319-64110-2](https://doi.org/10.1007%2F978-3-319-64110-2). [ISBN](https://en.wikipedia.org/wiki/ISBN_\(identifier\) "ISBN (identifier)") [978-3-319-64109-6](https://en.wikipedia.org/wiki/Special:BookSources/978-3-319-64109-6 "Special:BookSources/978-3-319-64109-6").
- Hough, David G. (December 2019). ["The IEEE Standard 754: One for the History Books"](https://www.computer.org/csdl/magazine/co/2019/12/08909942/1f8KFWxbTCU). *Computer*. **52** (12). [IEEE](https://en.wikipedia.org/wiki/IEEE "IEEE"): 109– 112. [doi](https://en.wikipedia.org/wiki/Doi_\(identifier\) "Doi (identifier)"):[10.1109/MC.2019.2926614](https://doi.org/10.1109%2FMC.2019.2926614).

## External links

- [ANSI/IEEE Std 754-2019](https://grouper.ieee.org/groups/msc/ANSI_IEEE-Std-754-2019/)
- [*Kahan on creating IEEE Standard Floating Point*](https://www.youtube.com/watch?v=ATCpecsyPE8). *Turing Awardee Clips*. 2020-11-16. [Archived](https://ghostarchive.org/varchive/youtube/20211108/ATCpecsyPE8) from the original on 2021-11-08.

[^1]: For example, if the base is 10, the sign is 1 (indicating negative), the significand is 12345, and the exponent is −3, then the value of the number is (−1) × 12345 × 10 <sup>−3</sup> = −1 × 12345 × 0.001 = −12.345.

[^2]: Approximative values. For exact values see each format's individual Wikipedia entry

[^3]: Number of digits in the radix used, including any implicit digit, but not counting the sign bit.

[^4]: Corresponding number of decimal digits, see text for more details.

[^5]: Contrary to decimal, there is no binary interchange format of 96-bit length. Such a format is still allowed as a non-interchange format, though.

[^6]: The standard recommends 0 for signaling NaNs, 1 for quiet NaNs, so that a signaling NaNs can be quieted by changing only this bit to 1, while the reverse could yield the encoding of an infinity.

[^7]: No flag is raised in certain cases of underflow.

[^8]: See [Fast inverse square root](https://en.wikipedia.org/wiki/Fast_inverse_square_root "Fast inverse square root") and [Methods of computing square roots#Iterative methods for reciprocal square roots](https://en.wikipedia.org/wiki/Methods_of_computing_square_roots#Iterative_methods_for_reciprocal_square_roots "Methods of computing square roots")

[^9]: As an implementation limit, correct rounding is only guaranteed for the number of decimal digits required plus 3 for the largest supported binary format. For instance, if binary32 is the largest supported binary format, then a conversion from a decimal external sequence with 12 decimal digits is guaranteed to be correctly rounded when converted to binary32; but conversion of a sequence of 13 decimal digits is not; however, the standard recommends that implementations impose no such limit.

[^10]: [IEEE 754 2019](https://en.wikipedia.org/wiki/#CITEREFIEEE_7542019)

[^11]: Haasz, Jodi. ["FW: ISO/IEC/IEEE 60559 (IEEE Std 754-2008)"](https://web.archive.org/web/20171027190846/http://grouper.ieee.org/groups/754/email/msg04167.html). *[IEEE](https://en.wikipedia.org/wiki/IEEE "IEEE")*. Archived from [the original](http://grouper.ieee.org/groups/754/email/msg04167.html) on 2017-10-27. Retrieved 2018-04-04.

[^12]: ["ISO/IEEE Partner Standards Development Organization (PSDO) Cooperation Agreement"](https://grouper.ieee.org/groups/802/minutes/jul2008/opening_reports/psdo1.pdf) (PDF). ISO. 2007-12-19. Retrieved 2021-12-27.

[^13]: [ISO/IEC JTC 1/SC 25 2011](https://en.wikipedia.org/wiki/#CITEREFISO/IEC_JTC_1/SC_252011).

[^14]: Cowlishaw, Mike (2013-11-13). ["IEEE 754-2008 errata"](https://speleotrove.com/misc/IEEE754-errata.html). *speleotrove.com*. Retrieved 2020-01-24.

[^15]: ["ANSI/IEEE Std 754-2019"](https://754r.ucbtest.org/). *ucbtest.org*. Retrieved 2024-01-16.

[^16]: [ISO/IEC JTC 1/SC 25 2020](https://en.wikipedia.org/wiki/#CITEREFISO/IEC_JTC_1/SC_252020).

[^17]: ["Issues for the next revision of 754"](https://grouper.ieee.org/groups/msc/ANSI_IEEE-Std-754-2019/background/future.txt). *[IEEE](https://en.wikipedia.org/wiki/IEEE "IEEE")*. Retrieved 2024-08-12.

[^18]: [IEEE 754 2008](https://en.wikipedia.org/wiki/#CITEREFIEEE_7542008), §2.1.27.

[^19]: ["SpiderMonkey Internals"](https://udn.realityripple.com/docs/Mozilla/Projects/SpiderMonkey/Internals). *udn.realityripple.com*. Retrieved 2018-03-11.

[^20]: Klemens, Ben (September 2014). [*21st Century C: C Tips from the New School*](https://books.google.com/books?id=ASuiBAAAQBAJ). O'Reilly Media, Incorporated. p. 160. [ISBN](https://en.wikipedia.org/wiki/ISBN_\(identifier\) "ISBN (identifier)") [9781491904442](https://en.wikipedia.org/wiki/Special:BookSources/9781491904442 "Special:BookSources/9781491904442"). Retrieved 2018-03-11.

[^21]: ["zuiderkwast/nanbox: NaN-boxing in C"](https://github.com/zuiderkwast/nanbox). *[GitHub](https://en.wikipedia.org/wiki/GitHub "GitHub")*. Retrieved 2018-03-11.

[^22]: [IEEE 754 2008](https://en.wikipedia.org/wiki/#CITEREFIEEE_7542008), §3.6.

[^23]: [IEEE 754 2008](https://en.wikipedia.org/wiki/#CITEREFIEEE_7542008), §3.7.

[^24]: [IEEE 754 2008](https://en.wikipedia.org/wiki/#CITEREFIEEE_7542008), §3.7 states: "Language standards should define mechanisms supporting extendable precision for each supported radix."

[^25]: [IEEE 754 2008](https://en.wikipedia.org/wiki/#CITEREFIEEE_7542008), §3.7 states: "Language standards or implementations should support an extended precision format that extends the widest basic format that is supported in that radix."

[^26]: [*Motorola MC68000 Family*](https://www.nxp.com/docs/en/reference-manual/M68000PRM.pdf) (PDF). Programmer's Reference Manual. NXP Semiconductors. 1992. pp. 1– 16, 1– 18, 1– 23.

[^27]: [IEEE 754 2008](https://en.wikipedia.org/wiki/#CITEREFIEEE_7542008), §4.3.1. "In the following two rounding-direction attributes, an infinitely precise result with magnitude at least ${\displaystyle b^{\text{emax}}(b-{\tfrac {1}{2}}b^{1-p})}$ shall round to ${\displaystyle \infty }$ with no change in sign."

[^28]: [IEEE 754 2008](https://en.wikipedia.org/wiki/#CITEREFIEEE_7542008), §4.3.3

[^29]: [IEEE 754 2019](https://en.wikipedia.org/wiki/#CITEREFIEEE_7542019), §2.1

[^30]: [IEEE 754 2008](https://en.wikipedia.org/wiki/#CITEREFIEEE_7542008), §5.3.1

[^31]: [IEEE 754 2008](https://en.wikipedia.org/wiki/#CITEREFIEEE_7542008), §5.4.1

[^32]: [IEEE 754 2008](https://en.wikipedia.org/wiki/#CITEREFIEEE_7542008), §5.4.2

[^33]: [IEEE 754 2008](https://en.wikipedia.org/wiki/#CITEREFIEEE_7542008), §5.4.3

[^34]: [IEEE 754 2008](https://en.wikipedia.org/wiki/#CITEREFIEEE_7542008), §5.3.2

[^35]: [IEEE 754 2008](https://en.wikipedia.org/wiki/#CITEREFIEEE_7542008), §5.3.3

[^36]: [IEEE 754 2008](https://en.wikipedia.org/wiki/#CITEREFIEEE_7542008), §5.5.1

[^37]: [IEEE 754 2008](https://en.wikipedia.org/wiki/#CITEREFIEEE_7542008), §5.10

[^38]: [IEEE 754 2008](https://en.wikipedia.org/wiki/#CITEREFIEEE_7542008), §5.11

[^39]: [IEEE 754 2008](https://en.wikipedia.org/wiki/#CITEREFIEEE_7542008), §5.7.2

[^40]: [IEEE 754 2008](https://en.wikipedia.org/wiki/#CITEREFIEEE_7542008), §5.7.4

[^41]: [IEEE 754 2019](https://en.wikipedia.org/wiki/#CITEREFIEEE_7542019), §5.11

[^42]: [IEEE 754 2019](https://en.wikipedia.org/wiki/#CITEREFIEEE_7542019), §5.10

[^43]: ["Implement total\_cmp for f32, f64 by golddranks · Pull Request #72568 · rust-lang/rust"](https://github.com/rust-lang/rust/pull/72568). *GitHub*. – contains relevant quotations from IEEE 754-2008 and -2019. Contains a type-pun implementation and explanation.

[^44]: Herf, Michael (December 2001). ["radix tricks"](http://stereopsis.com/radix.html). *stereopsis: graphics*.

[^45]: ["9.4. decimal — Decimal fixed point and floating point arithmetic — Python 3.6.5 documentation"](https://docs.python.org/library/decimal.html#signals). *docs.python.org*. Retrieved 2018-04-04.

[^46]: ["Decimal Arithmetic - Exceptional conditions"](http://speleotrove.com/decimal/daexcep.html). *speleotrove.com*. Retrieved 2018-04-04.

[^47]: [IEEE 754 2008](https://en.wikipedia.org/wiki/#CITEREFIEEE_7542008), §7.2(h)

[^48]: [Goldberg 1991](https://en.wikipedia.org/wiki/#CITEREFGoldberg1991).

[^49]: Muller, Jean-Michel; Brisebarre, Nicolas; de Dinechin, Florent; Jeannerod, Claude-Pierre; Lefèvre, Vincent; Melquiond, Guillaume; [Revol, Nathalie](https://en.wikipedia.org/wiki/Nathalie_Revol "Nathalie Revol"); Stehlé, Damien; Torres, Serge (2010). [*Handbook of Floating-Point Arithmetic*](https://books.google.com/books?id=baFvrIOPvncC&pg=PA16) (1 ed.). [Birkhäuser](https://en.wikipedia.org/wiki/Birkh%C3%A4user "Birkhäuser"). [doi](https://en.wikipedia.org/wiki/Doi_\(identifier\) "Doi (identifier)"):[10.1007/978-0-8176-4705-6](https://doi.org/10.1007%2F978-0-8176-4705-6). [ISBN](https://en.wikipedia.org/wiki/ISBN_\(identifier\) "ISBN (identifier)") [978-0-8176-4704-9](https://en.wikipedia.org/wiki/Special:BookSources/978-0-8176-4704-9 "Special:BookSources/978-0-8176-4704-9").

[^50]: [Kahan, William Morton](https://en.wikipedia.org/wiki/William_Morton_Kahan "William Morton Kahan"); Darcy, Joseph (2001) \[1998-03-01\]. ["How Java's floating-point hurts everyone everywhere"](http://www.cs.berkeley.edu/~wkahan/JAVAhurt.pdf) (PDF). [Archived](https://web.archive.org/web/20000816043653/http://www.cs.berkeley.edu/~wkahan/JAVAhurt.pdf) (PDF) from the original on 2000-08-16. Retrieved 2003-09-05.

[^51]: [Kahan, William Morton](https://en.wikipedia.org/wiki/William_Morton_Kahan "William Morton Kahan") (1981-02-12). ["Why do we need a floating-point arithmetic standard?"](http://www.cs.berkeley.edu/~wkahan/ieee754status/why-ieee.pdf) (PDF). p. 26. [Archived](https://web.archive.org/web/20041204070746/http://www.cs.berkeley.edu/~wkahan/ieee754status/why-ieee.pdf) (PDF) from the original on 2004-12-04.

[^52]: [Severance, Charles](https://en.wikipedia.org/wiki/Charles_Severance_\(computer_scientist\) "Charles Severance (computer scientist)") (1998-02-20). ["An Interview with the Old Man of Floating-Point"](http://www.eecs.berkeley.edu/~wkahan/ieee754status/754story.html).

[^53]: [Kahan, William Morton](https://en.wikipedia.org/wiki/William_Morton_Kahan "William Morton Kahan") (1996-06-11). ["The Baleful Effect of Computer Benchmarks upon Applied Mathematics, Physics and Chemistry"](http://www.cs.berkeley.edu/~wkahan/ieee754status/baleful.pdf) (PDF). [Archived](https://web.archive.org/web/20131013011212/http://www.cs.berkeley.edu/~wkahan/ieee754status/baleful.pdf) (PDF) from the original on 2013-10-13.

[^54]: [IEEE 754 2019](https://en.wikipedia.org/wiki/#CITEREFIEEE_7542019), §9.2

[^55]: [IEEE 754 2008](https://en.wikipedia.org/wiki/#CITEREFIEEE_7542008), Clause 9

[^56]: [IEEE 754 2019](https://en.wikipedia.org/wiki/#CITEREFIEEE_7542019), §9.2.

[^57]: ["Too much power - pow vs powr, powd, pown, rootn, compound"](https://grouper.ieee.org/groups/msc/ANSI_IEEE-Std-754-2019/background/power.txt). *[IEEE](https://en.wikipedia.org/wiki/IEEE "IEEE")*. Retrieved 2024-01-16. Since growth rates can't be less than -1, such rates signal invalid exceptions.

[^58]: ["Re: Missing functions tanPi, asinPi and acosPi"](https://web.archive.org/web/20170706053605/http://grouper.ieee.org/groups/754/email/msg03842.html). *[IEEE](https://en.wikipedia.org/wiki/IEEE "IEEE")*. Archived from [the original](http://grouper.ieee.org/groups/754/email/msg03842.html) on 2017-07-06. Retrieved 2018-04-04.

[^59]: [IEEE 754 2008](https://en.wikipedia.org/wiki/#CITEREFIEEE_7542008), §9.3.

[^60]: [IEEE 754 2008](https://en.wikipedia.org/wiki/#CITEREFIEEE_7542008), §9.4.

[^61]: [IEEE 754 2019](https://en.wikipedia.org/wiki/#CITEREFIEEE_7542019), §9.5

[^62]: Riedy, Jason; Demmel, James. ["Augmented Arithmetic Operations Proposed for IEEE-754 2018"](http://www.ecs.umass.edu/arith-2018/pdf/arith25_34.pdf) (PDF). 25th IEEE Symbosium on Computer Arithmetic (ARITH 2018). pp. 49– 56. [Archived](https://web.archive.org/web/20190723172615/http://www.ecs.umass.edu/arith-2018/pdf/arith25_34.pdf) (PDF) from the original on 2019-07-23. Retrieved 2019-07-23.

[^63]: ["ANSI/IEEE Std 754-2019 – Background Documents"](https://grouper.ieee.org/groups/msc/ANSI_IEEE-Std-754-2019/background/). *[IEEE](https://en.wikipedia.org/wiki/IEEE "IEEE")*. Retrieved 2024-01-16.

[^64]: [IEEE 754 2019](https://en.wikipedia.org/wiki/#CITEREFIEEE_7542019), §9.6.

[^65]: Chen, David. ["The Removal/Demotion of MinNum and MaxNum Operations from IEEE 754-2018"](https://grouper.ieee.org/groups/msc/ANSI_IEEE-Std-754-2019/background/minNum_maxNum_Removal_Demotion_v3.pdf) (PDF). *[IEEE](https://en.wikipedia.org/wiki/IEEE "IEEE")*. Retrieved 2024-01-16.

[^66]: Beeraka, Gautham (2021-12-14). ["The /fp:contract flag and changes to FP modes in VS2022"](https://devblogs.microsoft.com/cppblog/the-fpcontract-flag-and-changes-to-fp-modes-in-vs2022/). *devblogs.microsoft.com*. Microsoft. Retrieved 2025-06-09.

[^67]: ["Optimize Options (Using the GNU Compiler Collection (GCC))"](https://gcc.gnu.org/onlinedocs/gcc/Optimize-Options.html). *gcc.gnu.org*.

[^68]: ["/fp (Specify floating-point behavior)"](https://learn.microsoft.com/en-us/cpp/build/reference/fp-specify-floating-point-behavior?view=msvc-170). *learn.microsoft.com*.

[^69]: ["Does any floating point-intensive code produce bit-exact results in any x86-based architecture?"](https://stackoverflow.com/a/41001110). *Stack Overflow*.

[^70]: [IEEE 754 2008](https://en.wikipedia.org/wiki/#CITEREFIEEE_7542008), §5.12.

[^71]: [IEEE 754 2008](https://en.wikipedia.org/wiki/#CITEREFIEEE_7542008), §5.12.2.

[^72]: Gay, David M. (1990-11-30), [*Correctly rounded binary-decimal and decimal-binary conversions*](http://citeseer.ist.psu.edu/viewdoc/summary?doi=10.1.1.31.4049), Numerical Analysis Manuscript, Murry Hill, NJ, US: AT&T Laboratories, 90-10

[^73]: Paxson, Vern; [Kahan, William](https://en.wikipedia.org/wiki/William_Kahan "William Kahan") (1991-05-22), *A Program for Testing IEEE Decimal–Binary Conversion*, Manuscript, [CiteSeerX](https://en.wikipedia.org/wiki/CiteSeerX_\(identifier\) "CiteSeerX (identifier)") [10.1.1.144.5889](https://citeseerx.ist.psu.edu/viewdoc/summary?doi=10.1.1.144.5889)

[^74]: [IEEE 754 2008](https://en.wikipedia.org/wiki/#CITEREFIEEE_7542008), §5.12.3

[^75]: ["6.9.3. Hexadecimal floating point literals — Glasgow Haskell Compiler 9.3.20220129 User's Guide"](https://ghc.gitlab.haskell.org/ghc/doc/users_guide/exts/hex_float_literals.html). *ghc.gitlab.haskell.org*. Retrieved 2022-01-29.