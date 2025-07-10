---
source: "https://en.wikipedia.org/wiki/Lookup_table"
author:
  - "[[Contributors to Wikimedia projects]]"
published: 2003-11-04
created: 2025-06-21
tags:
---
In [computer science](https://en.wikipedia.org/wiki/Computer_science "Computer science"), a **lookup table** (**LUT**) is an [array](https://en.wikipedia.org/wiki/Array_data_structure "Array data structure") that replaces [runtime](https://en.wikipedia.org/wiki/Runtime_\(program_lifecycle_phase\) "Runtime (program lifecycle phase)") computation of a mathematical [function](https://en.wikipedia.org/wiki/Function_\(mathematics\) "Function (mathematics)") with a simpler array indexing operation, in a process termed as ***direct addressing***. The savings in processing time can be significant, because retrieving a value from memory is often faster than carrying out an "expensive" computation or [input/output](https://en.wikipedia.org/wiki/Input/output "Input/output") operation.[^1] The tables may be [precalculated](https://en.wikipedia.org/wiki/Precomputation "Precomputation") and stored in [static](https://en.wikipedia.org/wiki/Static_memory_allocation "Static memory allocation") program storage, calculated (or ["pre-fetched"](https://en.wikipedia.org/wiki/Prefetcher "Prefetcher")) as part of a program's initialization phase (*[memoization](https://en.wikipedia.org/wiki/Memoization "Memoization")*), or even stored in hardware in application-specific platforms. Lookup tables are also used extensively to validate input values by matching against a list of valid (or invalid) items in an array and, in some programming languages, may include pointer functions (or offsets to labels) to process the matching input. [FPGAs](https://en.wikipedia.org/wiki/Field-programmable_gate_array "Field-programmable gate array") also make extensive use of reconfigurable, hardware-implemented, lookup tables to provide programmable hardware functionality. LUTs differ from [hash tables](https://en.wikipedia.org/wiki/Hash_tables "Hash tables") in a way that, to retrieve a value ${\displaystyle v}$ with key ${\displaystyle k}$ , a hash table would store the value ${\displaystyle v}$ in the slot ${\displaystyle h(k)}$ where ${\displaystyle h}$ is a [hash function](https://en.wikipedia.org/wiki/Hash_function "Hash function") i.e. ${\displaystyle k}$ is used to compute the slot, while in the case of LUT, the value ${\displaystyle v}$ is stored in slot ${\displaystyle k}$ , thus directly addressable.[^2]<sup><span title="Page: 466">: 466 </span></sup> 

## History

![[~/×/2a2122a32a9299e9c68e7f64a1b6cc4c_MD5.jpg]]

Part of a 20th-century table of common logarithms in the reference book Abramowitz and Stegun.

Before the advent of computers, lookup tables of values were used to speed up hand calculations of complex functions, such as in [trigonometry](https://en.wikipedia.org/wiki/Trigonometry "Trigonometry"), [logarithms](https://en.wikipedia.org/wiki/Common_logarithm "Common logarithm"), and statistical density functions.[^3]

In ancient (499 AD) India, [Aryabhata](https://en.wikipedia.org/wiki/Aryabhata "Aryabhata") created one of the first [sine tables](https://en.wikipedia.org/wiki/%C4%80ryabha%E1%B9%ADa%27s_sine_table "Āryabhaṭa's sine table"), which he encoded in a Sanskrit-letter-based number system. In 493 AD, [Victorius of Aquitaine](https://en.wikipedia.org/wiki/Victorius_of_Aquitaine "Victorius of Aquitaine") wrote a 98-column multiplication table which gave (in [Roman numerals](https://en.wikipedia.org/wiki/Roman_numerals "Roman numerals")) the product of every number from 2 to 50 times and the rows were "a list of numbers starting with one thousand, descending by hundreds to one hundred, then descending by tens to ten, then by ones to one, and then the fractions down to 1/144" [^4] Modern school children are often taught to memorize " [times tables](https://en.wikipedia.org/wiki/Multiplication_table "Multiplication table") " to avoid calculations of the most commonly used numbers (up to 9 x 9 or 12 x 12).

Early in the history of computers, [input/output](https://en.wikipedia.org/wiki/Input/output "Input/output") operations were particularly slow – even in comparison to processor speeds of the time. It made sense to reduce expensive read operations by a form of manual [caching](https://en.wikipedia.org/wiki/Cache_\(computing\) "Cache (computing)") by creating either static lookup tables (embedded in the program) or dynamic prefetched arrays to contain only the most commonly occurring data items. Despite the introduction of systemwide caching that now automates this process, application level lookup tables can still improve performance for data items that rarely, if ever, change.

Lookup tables were one of the earliest functionalities implemented in computer [spreadsheets](https://en.wikipedia.org/wiki/Spreadsheet "Spreadsheet"), with the initial version of [VisiCalc](https://en.wikipedia.org/wiki/VisiCalc "VisiCalc") (1979) including a `LOOKUP` function among its original 20 functions.[^5] This has been followed by subsequent spreadsheets, such as [Microsoft Excel](https://en.wikipedia.org/wiki/Microsoft_Excel "Microsoft Excel"), and complemented by specialized `VLOOKUP` and `HLOOKUP` functions to simplify lookup in a vertical or horizontal table. In Microsoft Excel the `XLOOKUP` function has been rolled out starting 28 August 2019.

## Limitations

Although the performance of a LUT is a guaranteed ${\displaystyle O(1)}$ for a lookup operation, no two entities or values can have the same key ${\displaystyle k}$ . When the size of [universe](https://en.wikipedia.org/wiki/Universe_\(mathematics\) "Universe (mathematics)") ${\displaystyle \cup }$ —where the keys are drawn—is large, it might be impractical or impossible to be stored in [memory](https://en.wikipedia.org/wiki/Computer_memory "Computer memory"). Hence, in this case, a [hash table](https://en.wikipedia.org/wiki/Hash_table "Hash table") would be a preferable alternative.[^2]<sup><span title="Page: 468">: 468 </span></sup> 

## Examples

For a [trivial hash function](https://en.wikipedia.org/wiki/Trivial_hash_function "Trivial hash function") lookup, the unsigned [raw data](https://en.wikipedia.org/wiki/Raw_data "Raw data") value is used *directly* as an index to a one-dimensional table to extract a result. For small ranges, this can be amongst the fastest lookup, even exceeding binary search speed with zero branches and executing in [constant time](https://en.wikipedia.org/wiki/Constant_time "Constant time").[^6]

One discrete problem that is expensive to solve on many computers is that of counting the number of bits that are set to 1 in a (binary) number, sometimes called the *[population function](https://en.wikipedia.org/wiki/Hamming_weight "Hamming weight")*. For example, the decimal number "37" is "00100101" in binary, so it contains three bits that are set to binary "1".[^7]<sup><span title="Page: 282">: 282 </span></sup> 

A simple example of [C](https://en.wikipedia.org/wiki/C_\(programming_language\) "C (programming language)") code, designed to count the 1 bits in a *int*, might look like this:[^7]<sup><span title="Page: 283">: 283 </span></sup> 

```
int count_ones(unsigned int x) {
  int result = 0;
  while (x != 0) {
    x = x & (x - 1);
    result++;
  }
  return result;
}
```

The above implementation requires 32 operations for an evaluation of a 32-bit value, which can potentially take several [clock cycles](https://en.wikipedia.org/wiki/Cycles_per_instruction "Cycles per instruction") due to [branching](https://en.wikipedia.org/wiki/Control_flow "Control flow"). It can be " [unrolled](https://en.wikipedia.org/wiki/Loop_unrolling "Loop unrolling") " into a lookup table which in turn uses [trivial hash function](https://en.wikipedia.org/wiki/Trivial_hash_function "Trivial hash function") for better performance.[^7]<sup><span title="Page: 282-283">: 282-283 </span></sup> 

The bits array, *bits\_set* with 256 entries is constructed by giving the number of one bits set in each possible byte value (e.g. 0x00 = 0, 0x01 = 1, 0x02 = 1, and so on). Although a [runtime](https://en.wikipedia.org/wiki/Runtime_\(program_lifecycle_phase\) "Runtime (program lifecycle phase)") algorithm can be used to generate the *bits\_set* array, it's an inefficient usage of clock cycles when the size is taken into consideration, hence a precomputed table is used—although a [compile time](https://en.wikipedia.org/wiki/Compile_time "Compile time") script could be used to dynamically generate and append the table to the [source file](https://en.wikipedia.org/wiki/Source_file "Source file"). Sum of ones in each byte of the [integer](https://en.wikipedia.org/wiki/Integer_\(computer_science\) "Integer (computer science)") can be calculated through [trivial hash function](https://en.wikipedia.org/wiki/Trivial_hash_function "Trivial hash function") lookup on each byte; thus, effectively avoiding branches resulting in considerable improvement in performance.[^7]<sup><span title="Page: 284">: 284 </span></sup> 

```
int count_ones(int input_value) {
  union four_bytes {
    int big_int;
    char each_byte[4];
  } operand = input_value;
  const int bits_set[256] = {
      0, 1, 1, 2, 1, 2, 2, 3, 1, 2, 2, 3, 2, 3, 3, 4, 1, 2, 2, 3, 2, 3, 3, 4,
      2, 3, 3, 4, 3, 4, 4, 5, 1, 2, 2, 3, 2, 3, 3, 4, 2, 3, 3, 4, 3, 4, 4, 5,
      2, 3, 3, 4, 3, 4, 4, 5, 3, 4, 4, 5, 4, 5, 5, 6, 1, 2, 2, 3, 2, 3, 3, 4,
      2, 3, 3, 4, 3, 4, 4, 5, 2, 3, 3, 4, 3, 4, 4, 5, 3, 4, 4, 5, 4, 5, 5, 6,
      2, 3, 3, 4, 3, 4, 4, 5, 3, 4, 4, 5, 4, 5, 5, 6, 3, 4, 4, 5, 4, 5, 5, 6,
      4, 5, 5, 6, 5, 6, 6, 7, 1, 2, 2, 3, 2, 3, 3, 4, 2, 3, 3, 4, 3, 4, 4, 5,
      2, 3, 3, 4, 3, 4, 4, 5, 3, 4, 4, 5, 4, 5, 5, 6, 2, 3, 3, 4, 3, 4, 4, 5,
      3, 4, 4, 5, 4, 5, 5, 6, 3, 4, 4, 5, 4, 5, 5, 6, 4, 5, 5, 6, 5, 6, 6, 7,
      2, 3, 3, 4, 3, 4, 4, 5, 3, 4, 4, 5, 4, 5, 5, 6, 3, 4, 4, 5, 4, 5, 5, 6,
      4, 5, 5, 6, 5, 6, 6, 7, 3, 4, 4, 5, 4, 5, 5, 6, 4, 5, 5, 6, 5, 6, 6, 7,
      4, 5, 5, 6, 5, 6, 6, 7, 5, 6, 6, 7, 6, 7, 7, 8};
  return (bits_set[operand.each_byte[0]] + bits_set[operand.each_byte[1]] +
          bits_set[operand.each_byte[2]] + bits_set[operand.each_byte[3]]);
}}
```

![[~/×/8a5056bfa162520765e6aecbe1dd3579_MD5.png]]

Red (A), Green (B), Blue (C) 16-bit lookup table file sample. (Lines 14 to 65524 not shown)

> "Lookup tables (LUTs) are an excellent technique for optimizing the evaluation of functions that are expensive to compute and inexpensive to cache.... For data requests that fall between the table's samples, an interpolation algorithm can generate reasonable approximations by averaging nearby samples." [^8]

In data analysis applications, such as [image processing](https://en.wikipedia.org/wiki/Image_processing "Image processing"), a lookup table (LUT) can be used to transform the input data into a more desirable output format. For example, a grayscale picture of the planet Saturn could be transformed into a color image to emphasize the differences in its rings.

In image processing, lookup tables are often called **[LUT](https://en.wikipedia.org/wiki/3D_LUT "3D LUT")** s (or 3DLUT), and give an output value for each of a range of index values. One common LUT, called the *colormap* or *[palette](https://en.wikipedia.org/wiki/Palette_\(computing\) "Palette (computing)")*, is used to determine the colors and intensity values with which a particular image will be displayed. In [computed tomography](https://en.wikipedia.org/wiki/Computed_tomography "Computed tomography"), "windowing" refers to a related concept for determining how to display the intensity of measured radiation.

A classic example of reducing run-time computations using lookup tables is to obtain the result of a [trigonometry](https://en.wikipedia.org/wiki/Trigonometry "Trigonometry") calculation, such as the [sine](https://en.wikipedia.org/wiki/Sine "Sine") of a value.[^9] Calculating trigonometric functions can substantially slow a computing application. The same application can finish much sooner when it first precalculates the sine of a number of values, for example for each whole number of degrees (The table can be defined as static variables at compile time, reducing repeated run time costs). When the program requires the sine of a value, it can use the lookup table to retrieve the closest sine value from a memory address, and may also interpolate to the sine of the desired value, instead of calculating by mathematical formula. Lookup tables can thus be used by mathematics [coprocessors](https://en.wikipedia.org/wiki/Coprocessor "Coprocessor") in computer systems. An error in a lookup table was responsible for Intel's infamous [floating-point divide bug](https://en.wikipedia.org/wiki/Pentium_FDIV_bug "Pentium FDIV bug").

Functions of a single variable (such as sine and cosine) may be implemented by a simple array. Functions involving two or more variables require multidimensional array indexing techniques. The latter case may thus employ a two-dimensional array of **power\[x\]\[y\]** to replace a function to calculate **x <sup>y</sup>** for a limited range of x and y values. Functions that have more than one result may be implemented with lookup tables that are arrays of structures.

As mentioned, there are intermediate solutions that use tables in combination with a small amount of computation, often using [interpolation](https://en.wikipedia.org/wiki/Interpolation "Interpolation"). Pre-calculation combined with interpolation can produce higher accuracy for values that fall between two precomputed values. This technique requires slightly more time to be performed but can greatly enhance accuracy in applications that require it. Depending on the values being precomputed, [precomputation](https://en.wikipedia.org/wiki/Precomputation "Precomputation") with interpolation can also be used to shrink the lookup table size while maintaining accuracy.

While often effective, employing a lookup table may nevertheless result in a severe penalty if the computation that the LUT replaces is relatively simple. Memory retrieval time and the complexity of memory requirements can increase application operation time and system complexity relative to what would be required by straight formula computation. The possibility of [polluting the cache](https://en.wikipedia.org/wiki/Cache_pollution "Cache pollution") may also become a problem. Table accesses for large tables will almost certainly cause a [cache miss](https://en.wikipedia.org/wiki/Cache_miss "Cache miss"). This phenomenon is increasingly becoming an issue as processors outpace memory. A similar issue appears in [rematerialization](https://en.wikipedia.org/wiki/Rematerialization "Rematerialization"), a [compiler optimization](https://en.wikipedia.org/wiki/Compiler_optimization "Compiler optimization"). In some environments, such as the [Java programming language](https://en.wikipedia.org/wiki/Java_\(programming_language\) "Java (programming language)"), table lookups can be even more expensive due to mandatory bounds-checking involving an additional comparison and branch for each lookup.

There are two fundamental limitations on when it is possible to construct a lookup table for a required operation. One is the amount of memory that is available: one cannot construct a lookup table larger than the space available for the table, although it is possible to construct disk-based lookup tables at the expense of lookup time. The other is the time required to compute the table values in the first instance; although this usually needs to be done only once, if it takes a prohibitively long time, it may make the use of a lookup table an inappropriate solution. As previously stated however, tables can be statically defined in many cases.

### Computing sines

Most computers only perform basic arithmetic operations and cannot directly calculate the [sine](https://en.wikipedia.org/wiki/Sine "Sine") of a given value. Instead, they use the [CORDIC](https://en.wikipedia.org/wiki/CORDIC "CORDIC") algorithm or a complex formula such as the following [Taylor series](https://en.wikipedia.org/wiki/Taylor_series "Taylor series") to compute the value of sine to a high degree of precision:[^10]<sup><span title="Page: 5">: 5 </span></sup> 

${\displaystyle \operatorname {sin} (x)\approx x-{\frac {x^{3}}{6}}+{\frac {x^{5}}{120}}-{\frac {x^{7}}{5040}}}$ (for *x* close to 0)

However, this can be expensive to compute, especially on slow processors, and there are many applications, particularly in traditional [computer graphics](https://en.wikipedia.org/wiki/Computer_graphics "Computer graphics"), that need to compute many thousands of sine values every second. A common solution is to initially compute the sine of many evenly distributed values, and then to find the sine of *x* we choose the sine of the value closest to *x* through array indexing operation. This will be close to the correct value because sine is a [continuous function](https://en.wikipedia.org/wiki/Continuous_function "Continuous function") with a bounded rate of change.[^10]<sup><span title="Page: 6">: 6 </span></sup>  For example:[^11]<sup><span title="Page: 545–548">: 545–548 </span></sup> 

```
real array sine_table[-1000..1000]
for x from -1000 to 1000
    sine_table[x] = sine(pi * x / 1000)

function lookup_sine(x)
    return sine_table[round(1000 * x / pi)]
```

![[~/×/9f09eefadb75ada551d887a5f71d8773_MD5.png]]

Linear interpolation on a portion of the sine function

Unfortunately, the table requires quite a bit of space: if IEEE double-precision floating-point numbers are used, over 16,000 bytes would be required. We can use fewer samples, but then our precision will significantly worsen. One good solution is [linear interpolation](https://en.wikipedia.org/wiki/Linear_interpolation "Linear interpolation"), which draws a line between the two points in the table on either side of the value and locates the answer on that line. This is still quick to compute, and much more accurate for [smooth functions](https://en.wikipedia.org/wiki/Smooth_function "Smooth function") such as the sine function. Here is an example using linear interpolation:

```
function lookup_sine(x)
    x1 = floor(x * 1000 / pi)
    y1 = sine_table[x1]
    y2 = sine_table[x1 + 1]
    return y1 + (y2 - y1) * (x * 1000 / pi - x1)
```

Linear interpolation provides for an interpolated function that is continuous, but will not, in general, have continuous [derivatives](https://en.wikipedia.org/wiki/Derivative "Derivative"). For smoother interpolation of table lookup that is continuous **and** has continuous [first derivative](https://en.wikipedia.org/wiki/First_derivative "First derivative"), one should use the [cubic Hermite spline](https://en.wikipedia.org/wiki/Cubic_Hermite_spline#Interpolation_on_the_unit_interval_with_matched_derivatives_at_endpoints "Cubic Hermite spline").

When using interpolation, the size of the lookup table can be reduced by using *[nonuniform sampling](https://en.wikipedia.org/wiki/Nonuniform_sampling "Nonuniform sampling")*, which means that where the function is close to straight, we use few sample points, while where it changes value quickly we use more sample points to keep the approximation close to the real curve. For more information, see [interpolation](https://en.wikipedia.org/wiki/Interpolation "Interpolation").

### Caches

Storage caches (including disk caches for files, or processor caches for either code or data) work also like a lookup table. The table is built with very fast memory instead of being stored on slower external memory, and maintains two pieces of data for a sub-range of bits composing an external memory (or disk) address (notably the lowest bits of any possible external address):

- one piece (the tag) contains the value of the remaining bits of the address; if these bits match with those from the memory address to read or write, then the other piece contains the cached value for this address.
- the other piece maintains the data associated to that address.

A single (fast) lookup is performed to read the tag in the lookup table at the index specified by the lowest bits of the desired external storage address, and to determine if the memory address is hit by the cache. When a hit is found, no access to external memory is needed (except for write operations, where the cached value may need to be updated asynchronously to the slower memory after some time, or if the position in the cache must be replaced to cache another address).

### Hardware LUTs

In [digital logic](https://en.wikipedia.org/wiki/Digital_logic "Digital logic"), a lookup table can be implemented with a [multiplexer](https://en.wikipedia.org/wiki/Multiplexer "Multiplexer") whose select lines are driven by the address signal and whose inputs are the values of the elements contained in the array. These values can either be hard-wired, as in an [ASIC](https://en.wikipedia.org/wiki/ASIC "ASIC") whose purpose is specific to a function, or provided by [D latches](https://en.wikipedia.org/wiki/D_latch "D latch") which allow for configurable values. ([ROM](https://en.wikipedia.org/wiki/ROM "ROM"), [EPROM](https://en.wikipedia.org/wiki/EPROM "EPROM"), [EEPROM](https://en.wikipedia.org/wiki/EEPROM "EEPROM"), or [RAM](https://en.wikipedia.org/wiki/Random-access_memory "Random-access memory").)

An *n* -bit LUT can encode any *n* -input [Boolean function](https://en.wikipedia.org/wiki/Boolean_function "Boolean function") by storing the [truth table](https://en.wikipedia.org/wiki/Truth_table "Truth table") of the function in the LUT. This is an efficient way of encoding [Boolean logic](https://en.wikipedia.org/wiki/Boolean_logic "Boolean logic") functions, and LUTs with 4-6 bits of input are in fact the key component of modern [field-programmable gate arrays](https://en.wikipedia.org/wiki/Field-programmable_gate_array "Field-programmable gate array") (FPGAs) which provide reconfigurable hardware logic capabilities.

In [data acquisition](https://en.wikipedia.org/wiki/Data_acquisition "Data acquisition") and [control systems](https://en.wikipedia.org/wiki/Control_system "Control system"), lookup tables are commonly used to undertake the following operations in:

- The application of [calibration](https://en.wikipedia.org/wiki/Calibration "Calibration") data, so as to apply corrections to uncalibrated measurement or [setpoint](https://en.wikipedia.org/wiki/Setpoint_\(control_system\) "Setpoint (control system)") values; and
- Undertaking [measurement unit](https://en.wikipedia.org/wiki/Measurement_unit "Measurement unit") conversion; and
- Performing generic user-defined computations.

In some systems, [polynomials](https://en.wikipedia.org/wiki/Polynomial "Polynomial") may also be defined in place of lookup tables for these calculations.

## See also

- [Associative array](https://en.wikipedia.org/wiki/Associative_array "Associative array")
- [Branch table](https://en.wikipedia.org/wiki/Branch_table "Branch table")
- [Gal's accurate tables](https://en.wikipedia.org/wiki/Gal%27s_accurate_tables "Gal's accurate tables")
- [Memoization](https://en.wikipedia.org/wiki/Memoization "Memoization")
- [Memory-bound function](https://en.wikipedia.org/wiki/Memory-bound_function "Memory-bound function")
- [Nearest-neighbor interpolation](https://en.wikipedia.org/wiki/Nearest-neighbor_interpolation "Nearest-neighbor interpolation")
- [Shift register lookup table](https://en.wikipedia.org/wiki/Shift_register_lookup_table "Shift register lookup table")
- [Palette](https://en.wikipedia.org/wiki/Palette_\(computing\) "Palette (computing)"), a.k.a. color lookup table or CLUT – for the usage in computer graphics
- [3D lookup table](https://en.wikipedia.org/wiki/3D_lookup_table "3D lookup table") – usage in film industry

## References

## External links

- [Fast table lookup using input character as index for branch table](https://en.wikibooks.org/wiki/360_Assembly/Branch_Instructions "wikibooks:360 Assembly/Branch Instructions")
- [Art of Assembly: Calculation via Table Lookups](https://web.archive.org/web/20120414190621/http://webster.cs.ucr.edu/AoA/Windows/HTML/TableLookups.html)
- ["Bit Twiddling Hacks" (includes lookup tables)](http://graphics.stanford.edu/~seander/bithacks.html#CountBitsSetTable) By Sean Eron Anderson of [Stanford University](https://en.wikipedia.org/wiki/Stanford_University "Stanford University")
- [Memoization in C++](https://web.archive.org/web/20120831094028/http://apl.jhu.edu/~paulmac/c%2B%2B-memoization.html) by Paul McNamee, [Johns Hopkins University](https://en.wikipedia.org/wiki/Johns_Hopkins_University "Johns Hopkins University") showing savings
- ["The Quest for an Accelerated Population Count"](https://books.google.com/books?id=gJrmszNHQV4C&dq=beautiful+code+%22population+count%22&pg=PT169) by Henry S. Warren Jr.

[^1]: McNamee, Paul (21 August 1998). ["Automated Memoization in C++"](https://web.archive.org/web/20190416012134/http://pmcnamee.net/c++-memoization.html). Archived from the original on 16 April 2019.

[^2]: Kwok, W.; Haghighi, K.; Kang, E. (1995). ["An efficient data structure for the advancing-front triangular mesh generation technique"](https://onlinelibrary.wiley.com/doi/10.1002/cnm.1640110511). *Communications in Numerical Methods in Engineering*. **11** (5). Wiley & Sons: 465– 473. [doi](https://en.wikipedia.org/wiki/Doi_\(identifier\) "Doi (identifier)"):[10.1002/cnm.1640110511](https://doi.org/10.1002%2Fcnm.1640110511).

[^3]: [Campbell-Kelly, Martin](https://en.wikipedia.org/wiki/Martin_Campbell-Kelly "Martin Campbell-Kelly"); [Croarken, Mary](https://en.wikipedia.org/wiki/Mary_Croarken "Mary Croarken"); [Robson, Eleanor](https://en.wikipedia.org/wiki/Eleanor_Robson "Eleanor Robson"), eds. (2003). [*The History of Mathematical Tables: From Sumer to Spreadsheets*](https://en.wikipedia.org/wiki/The_History_of_Mathematical_Tables "The History of Mathematical Tables"). Oxford University Press.

[^4]: Maher, David. W. J. and John F. Makowski. " [Literary Evidence for Roman Arithmetic With Fractions](https://ecommons.luc.edu/cgi/viewcontent.cgi?article=1024&context=classicalstudies_facpubs) ", 'Classical Philology' (2001) Vol. 96 No. 4 (2001) pp. 376–399. (See page p.383.)

[^5]: [Bill Jelen: "From 1979 – VisiCalc and LOOKUP"!](https://vlookupweek.wordpress.com/2012/03/31/bill-jelen-from-1979-visicalc-and-lookup/), by MrExcel East, 31 March 2012

[^6]: Cormen, Thomas H. (2009). [*Introduction to algorithms*](https://mitpress.mit.edu/books/introduction-algorithms) (3rd ed.). Cambridge, Mass.: MIT Press. pp. 253– 255. [ISBN](https://en.wikipedia.org/wiki/ISBN_\(identifier\) "ISBN (identifier)") [9780262033848](https://en.wikipedia.org/wiki/Special:BookSources/9780262033848 "Special:BookSources/9780262033848"). Retrieved 26 November 2015.

[^7]: Jungck P.; Dencan R.; Mulcahy D. (2011). [*Developing for Performance. In: packetC Programming*](https://link.springer.com/chapter/10.1007/978-1-4302-4159-1_26). Apress. [doi](https://en.wikipedia.org/wiki/Doi_\(identifier\) "Doi (identifier)"):[10.1007/978-1-4302-4159-1\_26](https://doi.org/10.1007%2F978-1-4302-4159-1_26). [ISBN](https://en.wikipedia.org/wiki/ISBN_\(identifier\) "ISBN (identifier)") [978-1-4302-4159-1](https://en.wikipedia.org/wiki/Special:BookSources/978-1-4302-4159-1 "Special:BookSources/978-1-4302-4159-1").

[^8]: [nvidia gpu gems2: using-lookup-tables-accelerate-color](https://developer.nvidia.com/gpugems/gpugems2/part-iii-high-quality-rendering/chapter-24-using-lookup-tables-accelerate-color)

[^9]: Sasao, T.; Butler, J. T.; Riedel, M. D. ["Application of LUT Cascades to Numerical Function Generators"](https://apps.dtic.mil/sti/citations/ADA596280). *Defence Technical Information Center*. NAVAL POSTGRADUATE SCHOOL MONTEREY CA DEPT OF ELECTRICAL AND COMPUTER ENGINEERING. Retrieved 17 May 2024.`{{[cite web](https://en.wikipedia.org/wiki/Template:Cite_web "Template:Cite web")}}`: CS1 maint: multiple names: authors list ()

[^10]: Sharif, Haidar (2014). ["High-performance mathematical functions for single-core architectures"](https://www.worldscientific.com/doi/abs/10.1142/S0218126614500510). *Journal of Circuits, Systems and Computers*. **23** (4). World Scientific. [doi](https://en.wikipedia.org/wiki/Doi_\(identifier\) "Doi (identifier)"):[10.1142/S0218126614500510](https://doi.org/10.1142%2FS0218126614500510).

[^11]: Randall Hyde (1 March 2010). [*The Art of Assembly Language, 2nd Edition*](https://www.ic.unicamp.br/~pannain/mc404/aulas/pdfs/Art%20Of%20Intel%20x86%20Assembly.pdf) (PDF). No Starch Press. [ISBN](https://en.wikipedia.org/wiki/ISBN_\(identifier\) "ISBN (identifier)") [978-1593272074](https://en.wikipedia.org/wiki/Special:BookSources/978-1593272074 "Special:BookSources/978-1593272074") – via University of Campinas Institute of Computing.