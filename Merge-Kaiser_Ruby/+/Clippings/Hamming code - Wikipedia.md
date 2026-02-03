---
source: "https://en.wikipedia.org/wiki/Hamming_code"
author:
  - 
published: 2002-02-25
created: 2025-06-20
tags:
---
In [computer science](https://en.wikipedia.org/wiki/Computer_science "Computer science") and [telecommunications](https://en.wikipedia.org/wiki/Telecommunications "Telecommunications"), **Hamming codes** are a family of [linear error-correcting codes](https://en.wikipedia.org/wiki/Linear_code "Linear code"). Hamming codes can detect one-bit and two-bit errors, or correct one-bit errors without detection of uncorrected errors. By contrast, the simple [parity code](https://en.wikipedia.org/wiki/Parity_code "Parity code") cannot correct errors, and can detect only an odd number of bits in error. Hamming codes are [perfect codes](https://en.wikipedia.org/wiki/Perfect_code "Perfect code"), that is, they achieve the highest possible [rate](https://en.wikipedia.org/wiki/Block_code#The_rate_R "Block code") for codes with their [block length](https://en.wikipedia.org/wiki/Block_length "Block length") and [minimum distance](https://en.wikipedia.org/wiki/Block_code#The_distance_d "Block code") of three.[^1] [Richard W. Hamming](https://en.wikipedia.org/wiki/Richard_W._Hamming "Richard W. Hamming") invented Hamming codes in 1950 as a way of automatically correcting errors introduced by [punched card](https://en.wikipedia.org/wiki/Punched_card "Punched card") readers. In his original paper, Hamming elaborated his general idea, but specifically focused on the [Hamming(7,4)](https://en.wikipedia.org/wiki/Hamming\(7,4\) "Hamming(7,4)") code which adds three parity bits to four bits of data.[^2]

In [mathematical](https://en.wikipedia.org/wiki/Mathematical "Mathematical") terms, Hamming codes are a class of binary linear code. For each integer *r* ≥ 2 there is a code-word with [block length](https://en.wikipedia.org/wiki/Block_length "Block length") *n* = 2 <sup><i>r</i></sup> − 1 and [message length](https://en.wikipedia.org/wiki/Block_code#The_message_length_k "Block code") *k* = 2 <sup><i>r</i></sup> − *r* − 1. Hence the rate of Hamming codes is *R* = *k* / *n* = 1 − *r* / (2 <sup><i>r</i></sup> − 1), which is the highest possible for codes with minimum distance of three (i.e., the minimal number of bit changes needed to go from any code word to any other code word is three) and block length 2 <sup><i>r</i></sup> − 1. The [parity-check matrix](https://en.wikipedia.org/wiki/Parity-check_matrix "Parity-check matrix") of a Hamming code is constructed by listing all columns of length *r* that are non-zero, which means that the [dual code](https://en.wikipedia.org/wiki/Dual_code "Dual code") of the Hamming code is the [shortened Hadamard code](https://en.wikipedia.org/wiki/Hadamard_code "Hadamard code"), also known as a Simplex code. The parity-check matrix has the property that any two columns are pairwise [linearly independent](https://en.wikipedia.org/wiki/Linearly_independent "Linearly independent").

Due to the limited redundancy that Hamming codes add to the data, they can only detect and correct errors when the error rate is low. This is the case in computer memory (usually RAM), where bit errors are extremely rare and Hamming codes are widely used, and a RAM with this correction system is an ECC RAM ([ECC memory](https://en.wikipedia.org/wiki/ECC_memory "ECC memory")). In this context, an extended Hamming code having one extra parity bit is often used. Extended Hamming codes achieve a Hamming distance of four, which allows the decoder to distinguish between when at most one one-bit error occurs and when any two-bit errors occur. In this sense, extended Hamming codes are single-error correcting and double-error detecting, abbreviated as **SECDED**.

## History

[Richard Hamming](https://en.wikipedia.org/wiki/Richard_Hamming "Richard Hamming"), the inventor of Hamming codes, worked at [Bell Labs](https://en.wikipedia.org/wiki/Bell_Labs "Bell Labs") in the late 1940s on the Bell [Model V](https://en.wikipedia.org/wiki/Model_V "Model V") computer, an [electromechanical](https://en.wikipedia.org/wiki/Electromechanical "Electromechanical") relay-based machine with cycle times in seconds. Input was fed in on [punched paper tape](https://en.wikipedia.org/wiki/Punched_paper_tape "Punched paper tape"), seven-eighths of an inch wide, which had up to six holes per row. During weekdays, when errors in the relays were detected, the machine would stop and flash lights so that the operators could correct the problem. During after-hours periods and on weekends, when there were no operators, the machine simply moved on to the next job.

Hamming worked on weekends, and grew increasingly frustrated with having to restart his programs from scratch due to detected errors. In a taped interview, Hamming said, "And so I said, 'Damn it, if the machine can detect an error, why can't it locate the position of the error and correct it?'".[^3] Over the next few years, he worked on the problem of error-correction, developing an increasingly powerful array of algorithms. In 1950, he published what is now known as Hamming code, which remains in use today in applications such as [ECC memory](https://en.wikipedia.org/wiki/ECC_memory "ECC memory").

A number of simple error-detecting codes were used before Hamming codes, but none were as effective as Hamming codes in the same overhead of space.

#### Parity

Parity adds a single [bit](https://en.wikipedia.org/wiki/Bit "Bit") that indicates whether the number of ones (bit-positions with values of one) in the preceding data was [even](https://en.wikipedia.org/wiki/Even_number "Even number") or [odd](https://en.wikipedia.org/wiki/Odd_number "Odd number"). If an odd number of bits is changed in transmission, the message will change parity and the error can be detected at this point; however, the bit that changed may have been the parity bit itself. The most common convention is that a parity value of one indicates that there is an odd number of ones in the data, and a parity value of zero indicates that there is an even number of ones. If the number of bits changed is even, the check bit will be valid and the error will not be detected.

Moreover, parity does not indicate which bit contained the error, even when it can detect it. The data must be discarded entirely and re-transmitted from scratch. On a noisy transmission medium, a successful transmission could take a long time or may never occur. However, while the quality of parity checking is poor, since it uses only a single bit, this method results in the least overhead.

#### Two-out-of-five code

A two-out-of-five code is an encoding scheme which uses five bits consisting of exactly three 0s and two 1s. This provides ${\displaystyle {\binom {5}{3}}=10}$ possible combinations, enough to represent the digits 0–9. This scheme can detect all single bit-errors, all odd numbered bit-errors and some even numbered bit-errors (for example the flipping of both 1-bits). However it still cannot correct any of these errors.

#### Repetition

Another code in use at the time repeated every data bit multiple times in order to ensure that it was sent correctly. For instance, if the data bit to be sent is a 1, an *n* = 3 *[repetition code](https://en.wikipedia.org/wiki/Repetition_code "Repetition code")* will send 111. If the three bits received are not identical, an error occurred during transmission. If the channel is clean enough, most of the time only one bit will change in each triple. Therefore, 001, 010, and 100 each correspond to a 0 bit, while 110, 101, and 011 correspond to a 1 bit, with the greater quantity of digits that are the same ('0' or a '1') indicating what the data bit should be. A code with this ability to reconstruct the original message in the presence of errors is known as an *error-correcting* code. This triple repetition code is a Hamming code with *m* = 2, since there are two parity bits, and 2 <sup>2</sup> − 2 − 1 = 1 data bit.

Such codes cannot correctly repair all errors, however. In our example, if the channel flips two bits and the receiver gets 001, the system will detect the error, but conclude that the original bit is 0, which is incorrect. If we increase the size of the bit string to four, we can detect all two-bit errors but cannot correct them (the quantity of parity bits is even); at five bits, we can both detect and correct all two-bit errors, but not all three-bit errors.

Moreover, increasing the size of the parity bit string is inefficient, reducing throughput by three times in our original case, and the efficiency drops drastically as we increase the number of times each bit is duplicated in order to detect and correct more errors.

## Description

If more error-correcting bits are included with a message, and if those bits can be arranged such that different incorrect bits produce different error results, then bad bits could be identified. In a seven-bit message, there are seven possible single bit errors, so three error control bits could potentially specify not only that an error occurred but also which bit caused the error.

Hamming studied the existing coding schemes, including two-of-five, and generalized their concepts. To start with, he developed a [nomenclature](https://en.wiktionary.org/wiki/nomenclature "wikt:nomenclature") to describe the system, including the number of data bits and error-correction bits in a block. For instance, parity includes a single bit for any data word, so assuming [ASCII](https://en.wikipedia.org/wiki/ASCII "ASCII") words with seven bits, Hamming described this as an *(8,7)* code, with eight bits in total, of which seven are data. The repetition example would be *(3,1)*, following the same logic. The [code rate](https://en.wikipedia.org/wiki/Code_rate "Code rate") is the second number divided by the first, for our repetition example, 1/3.

Hamming also noticed the problems with flipping two or more bits, and described this as the "distance" (it is now called the *[Hamming distance](https://en.wikipedia.org/wiki/Hamming_distance "Hamming distance")*, after him). Parity has a distance of 2, so one bit flip can be detected but not corrected, and any two bit flips will be invisible. The (3,1) repetition has a distance of 3, as three bits need to be flipped in the same triple to obtain another code word with no visible errors. It can correct one-bit errors or it can detect - but not correct - two-bit errors. A (4,1) repetition (each bit is repeated four times) has a distance of 4, so flipping three bits can be detected, but not corrected. When three bits flip in the same group there can be situations where attempting to correct will produce the wrong code word. In general, a code with distance *k* can detect but not correct *k* − 1 errors.

Hamming was interested in two problems at once: increasing the distance as much as possible, while at the same time increasing the code rate as much as possible. During the 1940s he developed several encoding schemes that were dramatic improvements on existing codes. The key to all of his systems was to have the parity bits overlap, such that they managed to check each other as well as the data.

### General algorithm

The following general algorithm generates a single-error correcting (SEC) code for any number of bits. The main idea is to choose the error-correcting bits such that the index-XOR (the [XOR](https://en.wikipedia.org/wiki/XOR "XOR") of all the bit positions containing a 1) is 0. We use positions 1, 10, 100, etc. (in binary) as the error-correcting bits, which guarantees it is possible to set the error-correcting bits so that the index-XOR of the whole message is 0. If the receiver receives a string with index-XOR 0, they can conclude there were no corruptions, and otherwise, the index-XOR indicates the index of the corrupted bit.

An algorithm can be deduced from the following description:

1. Number the bits starting from 1: bit 1, 2, 3, 4, 5, 6, 7, etc.
2. Write the bit numbers in binary: 1, 10, 11, 100, 101, 110, 111, etc.
3. All bit positions that are powers of two (have a single 1 bit in the binary form of their position) are parity bits: 1, 2, 4, 8, etc. (1, 10, 100, 1000)
4. All other bit positions, with two or more 1 bits in the binary form of their position, are data bits.
5. Each data bit is included in a unique set of 2 or more parity bits, as determined by the binary form of its bit position.
	1. Parity bit 1 covers all bit positions which have the **least** significant bit set: bit 1 (the parity bit itself), 3, 5, 7, 9, etc.
	2. Parity bit 2 covers all bit positions which have the **second** least significant bit set: bits 2–3, 6–7, 10–11, etc.
	3. Parity bit 4 covers all bit positions which have the **third** least significant bit set: bits 4–7, 12–15, 20–23, etc.
	4. Parity bit 8 covers all bit positions which have the **fourth** least significant bit set: bits 8–15, 24–31, 40–47, etc.
	5. In general each parity bit covers all bits where the bitwise AND of the parity position and the bit position is non-zero.

If a byte of data to be encoded is 10011010, then the data word (using \_ to represent the parity bits) would be \_\_1\_001\_1010, and the code word is 011100101010.

The choice of the parity, even or odd, is irrelevant but the same choice must be used for both encoding and decoding.

This general rule can be shown visually:

<table><tbody><tr><th colspan="2"><span>Bit position</span></th><th><span>1</span></th><th><span>2</span></th><th><span>3</span></th><th><span>4</span></th><th><span>5</span></th><th><span>6</span></th><th><span>7</span></th><th><span>8</span></th><th><span>9</span></th><th><span>10</span></th><th><span>11</span></th><th><span>12</span></th><th><span>13</span></th><th><span>14</span></th><th><span>15</span></th><th><span>16</span></th><th><span>17</span></th><th><span>18</span></th><th><span>19</span></th><th><span>20</span></th><td rowspan="7">...</td></tr><tr><th colspan="2">Encoded data bits</th><th>p1</th><th>p2</th><th>d1</th><th>p4</th><th>d2</th><th>d3</th><th>d4</th><th>p8</th><th>d5</th><th>d6</th><th>d7</th><th>d8</th><th>d9</th><th>d10</th><th>d11</th><th>p16</th><th>d12</th><th>d13</th><th>d14</th><th>d15</th></tr><tr><th rowspan="5">Parity<br>bit<br>coverage</th><th>p1</th><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr><tr><th>p2</th><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr><tr><th>p4</th><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr><tr><th>p8</th><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr><tr><th>p16</th><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr></tbody></table>

Shown are only 20 encoded bits (5 parity, 15 data) but the pattern continues indefinitely. The key thing about Hamming codes that can be seen from visual inspection is that any given bit is included in a unique set of parity bits. To check for errors, check all of the parity bits. The pattern of errors, called the [error syndrome](https://en.wikipedia.org/wiki/Error_syndrome "Error syndrome"), identifies the bit in error. If all parity bits are correct, there is no error. Otherwise, the sum of the positions of the erroneous parity bits identifies the erroneous bit. For example, if the parity bits in positions 1, 2 and 8 indicate an error, then bit 1+2+8=11 is in error. If only one parity bit indicates an error, the parity bit itself is in error.

With m parity bits, bits from 1 up to ${\displaystyle 2^{m}-1}$ can be covered. After discounting the parity bits, ${\displaystyle 2^{m}-m-1}$ bits remain for use as data. As m varies, we get all the possible Hamming codes:

<table><tbody><tr><th>Parity bits</th><th><a href="https://en.wikipedia.org/wiki/Block_code#The_block_length_n">Total bits</a></th><th><a href="https://en.wikipedia.org/wiki/Block_code#The_message_length_k">Data bits</a></th><th>Name</th><th><a href="https://en.wikipedia.org/wiki/Block_code#The_rate_R">Rate</a></th></tr><tr><td>2</td><td>3</td><td>1</td><td>Hamming(3,1)<br>(Triple <a href="https://en.wikipedia.org/wiki/Repetition_code">repetition code</a>)</td><td>1/3 ≈ 0.333</td></tr><tr><td>3</td><td>7</td><td>4</td><td><a href="https://en.wikipedia.org/wiki/Hamming(7,4)">Hamming(7,4)</a></td><td>4/7 ≈ 0.571</td></tr><tr><td>4</td><td>15</td><td>11</td><td>Hamming(15,11)</td><td>11/15 ≈ 0.733</td></tr><tr><td>5</td><td>31</td><td>26</td><td>Hamming(31,26)</td><td>26/31 ≈ 0.839</td></tr><tr><td>6</td><td>63</td><td>57</td><td>Hamming(63,57)</td><td>57/63 ≈ 0.905</td></tr><tr><td>7</td><td>127</td><td>120</td><td>Hamming(127,120)</td><td>120/127 ≈ 0.945</td></tr><tr><td>8</td><td>255</td><td>247</td><td>Hamming(255,247)</td><td>247/255 ≈ 0.969</td></tr><tr><td>9</td><td>511</td><td>502</td><td>Hamming(511,502)</td><td>502/511 ≈ 0.982</td></tr><tr><td colspan="5">...</td></tr><tr><td><span>m</span></td><td><math>{\displaystyle n=2^{m}-1}</math></td><td><math>{\displaystyle k=2^{m}-m-1}</math></td><td>Hamming <math>{\displaystyle (2^{m}-1,2^{m}-m-1)}</math></td><td><math>{\displaystyle (2^{m}-m-1)/(2^{m}-1)}</math></td></tr></tbody></table>

Hamming codes have a minimum distance of 3, which means that the decoder can detect and correct a single error, but it cannot distinguish a double bit error of some codeword from a single bit error of a different codeword. Thus, some double-bit errors will be incorrectly decoded as if they were single bit errors and therefore go undetected, unless no correction is attempted.

To remedy this shortcoming, Hamming codes can be extended by an extra parity bit. This way, it is possible to increase the minimum distance of the Hamming code to 4, which allows the decoder to distinguish between single bit errors and two-bit errors. Thus the decoder can detect and correct a single error and at the same time detect (but not correct) a double error.

If the decoder does not attempt to correct errors, it can reliably detect triple bit errors. If the decoder does correct errors, some triple errors will be mistaken for single errors and "corrected" to the wrong value. Error correction is therefore a trade-off between certainty (the ability to reliably detect triple bit errors) and resiliency (the ability to keep functioning in the face of single bit errors).

This extended Hamming code was popular in computer memory systems, starting with [IBM 7030 Stretch](https://en.wikipedia.org/wiki/IBM_7030_Stretch "IBM 7030 Stretch") in 1961,[^4] where it is known as *SECDED* (or SEC-DED, abbreviated from *single error correction, double error detection*).[^5] Server computers in 21st century, while typically keeping the SECDED level of protection, no longer use Hamming's method, relying instead on the designs with longer codewords (128 to 256 bits of data) and modified balanced parity-check trees.[^4] The (72,64) Hamming code is still popular in some hardware designs, including [Xilinx](https://en.wikipedia.org/wiki/Xilinx "Xilinx") [FPGA](https://en.wikipedia.org/wiki/FPGA "FPGA") families.[^4]

![[~/×/873d2600081f90877f5eda9cceb3ad11_MD5.png|300]]
*Graphical depiction of the four data bits and three parity bits and which parity bits apply to which data bits*

In 1950, Hamming introduced the \[7,4\] Hamming code. It encodes four data bits into seven bits by adding three parity bits. As explained earlier, it can either detect and correct single-bit errors or it can detect (but not correct) both single and double-bit errors.

With the addition of an overall parity bit, it becomes the \[8,4\] extended Hamming code and can both detect and correct single-bit errors and detect (but not correct) double-bit errors.

The matrix ${\displaystyle \mathbf {G} :={\begin{pmatrix}{\begin{array}{c|c}I_{k}&-A^{\text{T}}\\\end{array}}\end{pmatrix}}}$ is called a (canonical) generator matrix of a linear (*n*,*k*) code,

and ${\displaystyle \mathbf {H} :={\begin{pmatrix}{\begin{array}{c|c}A&I_{n-k}\\\end{array}}\end{pmatrix}}}$ is called a [parity-check matrix](https://en.wikipedia.org/wiki/Parity-check_matrix "Parity-check matrix").

This is the construction of **G** and **H** in standard (or systematic) form. Regardless of form, **G** and **H** for linear block codes must satisfy

${\displaystyle \mathbf {H} \,\mathbf {G} ^{\text{T}}=\mathbf {0} }$ , an all-zeros matrix.[^6]

Since \[7, 4, 3\] = \[*n*, *k*, *d*\] = \[2 <sup><i>m</i></sup>  − 1, 2 <sup><i>m</i></sup>  − 1 −  *m*, 3\]. The [parity-check matrix](https://en.wikipedia.org/wiki/Parity-check_matrix "Parity-check matrix") **H** of a Hamming code is constructed by listing all columns of length *m* that are pair-wise independent.

Thus **H** is a matrix whose left side is all of the nonzero *n* -tuples where order of the *n* -tuples in the columns of matrix does not matter. The right hand side is just the (*n*  −  *k*)- [identity matrix](https://en.wikipedia.org/wiki/Identity_matrix "Identity matrix").

So **G** can be obtained from **H** by taking the transpose of the left hand side of **H** with the identity *k* - [identity matrix](https://en.wikipedia.org/wiki/Identity_matrix "Identity matrix") on the left hand side of  **G**.

The code [generator matrix](https://en.wikipedia.org/wiki/Generator_matrix "Generator matrix") ${\displaystyle \mathbf {G} }$ and the [parity-check matrix](https://en.wikipedia.org/wiki/Parity-check_matrix "Parity-check matrix") ${\displaystyle \mathbf {H} }$ are:

${\displaystyle \mathbf {G} :={\begin{pmatrix}1&0&0&0&1&1&0\\0&1&0&0&1&0&1\\0&0&1&0&0&1&1\\0&0&0&1&1&1&1\end{pmatrix}}_{4,7}}$

and

${\displaystyle \mathbf {H} :={\begin{pmatrix}1&1&0&1&1&0&0\\1&0&1&1&0&1&0\\0&1&1&1&0&0&1\end{pmatrix}}_{3,7}.}$

Finally, these matrices can be mutated into equivalent non-systematic codes by the following operations:[^6]

- Column permutations (swapping columns)
- Elementary row operations (replacing a row with a linear combination of rows)

### Encoding

Example

From the above matrix we have 2 <sup>k</sup> = 2 <sup>4</sup> = 16 codewords. Let ${\displaystyle {\vec {a}}}$ be a row vector of binary data bits, ${\displaystyle {\vec {a}}=[a_{1},a_{2},a_{3},a_{4}],\quad a_{i}\in \{0,1\}}$ . The codeword ${\displaystyle {\vec {x}}}$ for any of the 16 possible data vectors ${\displaystyle {\vec {a}}}$ is given by the standard matrix product ${\displaystyle {\vec {x}}={\vec {a}}G}$ where the summing operation is done modulo-2.

For example, let ${\displaystyle {\vec {a}}=[1,0,1,1]}$ . Using the generator matrix ${\displaystyle G}$ from above, we have (after applying modulo 2, to the sum),

${\displaystyle {\vec {x}}={\vec {a}}G={\begin{pmatrix}1&0&1&1\end{pmatrix}}{\begin{pmatrix}1&0&0&0&1&1&0\\0&1&0&0&1&0&1\\0&0&1&0&0&1&1\\0&0&0&1&1&1&1\\\end{pmatrix}}={\begin{pmatrix}1&0&1&1&2&3&2\end{pmatrix}}={\begin{pmatrix}1&0&1&1&0&1&0\end{pmatrix}}}$

![[~/×/75ded72840a4370708b297933c87d812_MD5.png]]

The same \[7,4\] example from above with an extra parity bit. This diagram is not meant to correspond to the matrix H for this example.

The \[7,4\] Hamming code can easily be extended to an \[8,4\] code by adding an extra parity bit on top of the (7,4) encoded word (see [Hamming(7,4)](https://en.wikipedia.org/wiki/Hamming\(7,4\) "Hamming(7,4)")). This can be summed up with the revised matrices:

${\displaystyle \mathbf {G} :={\begin{pmatrix}1&1&1&0&0&0&0&1\\1&0&0&1&1&0&0&1\\0&1&0&1&0&1&0&1\\1&1&0&1&0&0&1&0\end{pmatrix}}_{4,8}}$

and

${\displaystyle \mathbf {H} :={\begin{pmatrix}1&0&1&0&1&0&1&0\\0&1&1&0&0&1&1&0\\0&0&0&1&1&1&1&0\\1&1&1&1&1&1&1&1\end{pmatrix}}_{4,8}.}$

  

Note that H is not in standard form. To obtain G, elementary row operations can be used to obtain an equivalent matrix to H in systematic form:

${\displaystyle \mathbf {H} =\left({\begin{array}{cccc|cccc}0&1&1&1&1&0&0&0\\1&0&1&1&0&1&0&0\\1&1&0&1&0&0&1&0\\1&1&1&0&0&0&0&1\end{array}}\right)_{4,8}.}$

For example, the first row in this matrix is the sum of the second and third rows of H in non-systematic form. Using the systematic construction for Hamming codes from above, the matrix A is apparent and the systematic form of G is written as

${\displaystyle \mathbf {G} =\left({\begin{array}{cccc|cccc}1&0&0&0&0&1&1&1\\0&1&0&0&1&0&1&1\\0&0&1&0&1&1&0&1\\0&0&0&1&1&1&1&0\end{array}}\right)_{4,8}.}$

The non-systematic form of G can be row reduced (using elementary row operations) to match this matrix.

The addition of the fourth row effectively computes the sum of all the codeword bits (data and parity) as the fourth parity bit.

For example, 1011 is encoded (using the non-systematic form of G at the start of this section) into 01 1 0 011 0 where blue digits are data; red digits are parity bits from the \[7,4\] Hamming code; and the green digit is the parity bit added by the \[8,4\] code. The green digit makes the parity of the \[7,4\] codewords even.

Finally, it can be shown that the minimum distance has increased from 3, in the \[7,4\] code, to 4 in the \[8,4\] code. Therefore, the code can be defined as \[8,4\] Hamming code.

To decode the \[8,4\] Hamming code, first check the parity bit. If the parity bit indicates an error, single error correction (the \[7,4\] Hamming code) will indicate the error location, with "no error" indicating the parity bit. If the parity bit is correct, then single error correction will indicate the (bitwise) exclusive-or of two error locations. If the locations are equal ("no error") then a double bit error either has not occurred, or has cancelled itself out. Otherwise, a double bit error has occurred.

## See also

## Notes

## References

- Hamming, Richard Wesley (1950). ["Error detecting and error correcting codes"](https://calhoun.nps.edu/bitstream/10945/46756/1/Hamming_1982.pdf) (PDF). *[Bell System Technical Journal](https://en.wikipedia.org/wiki/Bell_System_Technical_Journal "Bell System Technical Journal")*. **29** (2): 147– 160. [doi](https://en.wikipedia.org/wiki/Doi_\(identifier\) "Doi (identifier)"):[10.1002/j.1538-7305.1950.tb00463.x](https://doi.org/10.1002%2Fj.1538-7305.1950.tb00463.x). [hdl](https://en.wikipedia.org/wiki/Hdl_\(identifier\) "Hdl (identifier)"):[10945/46756](https://hdl.handle.net/10945%2F46756). [S2CID](https://en.wikipedia.org/wiki/S2CID_\(identifier\) "S2CID (identifier)") [61141773](https://api.semanticscholar.org/CorpusID:61141773). [Archived](https://ghostarchive.org/archive/20221009/https://calhoun.nps.edu/bitstream/10945/46756/1/Hamming_1982.pdf) (PDF) from the original on 2022-10-09.
- Moon, Todd K. (2005). [*Error Correction Coding*](http://www.neng.usu.edu/ece/faculty/tmoon/eccbook/book.html). [New Jersey](https://en.wikipedia.org/wiki/New_Jersey "New Jersey"): [John Wiley & Sons](https://en.wikipedia.org/wiki/John_Wiley_%26_Sons "John Wiley & Sons"). [ISBN](https://en.wikipedia.org/wiki/ISBN_\(identifier\) "ISBN (identifier)") [978-0-471-64800-0](https://en.wikipedia.org/wiki/Special:BookSources/978-0-471-64800-0 "Special:BookSources/978-0-471-64800-0").
- [MacKay, David J.C.](https://en.wikipedia.org/wiki/David_MacKay_\(scientist\) "David MacKay (scientist)") (September 2003). [*Information Theory, Inference and Learning Algorithms*](http://www.inference.phy.cam.ac.uk/mackay/itila/book.html). [Cambridge](https://en.wikipedia.org/wiki/Cambridge "Cambridge"): [Cambridge University Press](https://en.wikipedia.org/wiki/Cambridge_University_Press "Cambridge University Press"). [ISBN](https://en.wikipedia.org/wiki/ISBN_\(identifier\) "ISBN (identifier)") [0-521-64298-1](https://en.wikipedia.org/wiki/Special:BookSources/0-521-64298-1 "Special:BookSources/0-521-64298-1").
- D.K. Bhattacharryya, S. Nandi. "An efficient class of SEC-DED-AUED codes". *1997 International Symposium on Parallel Architectures, Algorithms and Networks (ISPAN '97)*. pp. 410– 415. [doi](https://en.wikipedia.org/wiki/Doi_\(identifier\) "Doi (identifier)"):[10.1109/ISPAN.1997.645128](https://doi.org/10.1109%2FISPAN.1997.645128).
- ["Mathematical Challenge April 2013 Error-correcting codes"](https://www.swissquant.com/wp-content/uploads/2017/09/Mathematical-Challenge-April-2013.pdf) (PDF). [swissQuant Group Leadership Team](https://en.wikipedia.org/w/index.php?title=SwissQuant_Group_Leadership_Team&action=edit&redlink=1 "SwissQuant Group Leadership Team (page does not exist)"). April 2013. [Archived](https://web.archive.org/web/20170912191717/https://www.swissquant.com/wp-content/uploads/2017/09/Mathematical-Challenge-April-2013.pdf) (PDF) from the original on 2017-09-12.
- Kythe, Dave K.; Kythe, Prem K. (28 July 2017). ["Extended Hamming Codes"](https://books.google.com/books?id=zJwuDwAAQBAJ&pg=PA95). *Algebraic and Stochastic Coding Theory*. CRC Press. pp. 95– 116. [ISBN](https://en.wikipedia.org/wiki/ISBN_\(identifier\) "ISBN (identifier)") [978-1-351-83245-8](https://en.wikipedia.org/wiki/Special:BookSources/978-1-351-83245-8 "Special:BookSources/978-1-351-83245-8").

## External links

- [Visual Explanation of Hamming Codes](https://www.youtube.com/watch?v=X8jsijhllIA)
- [CGI script for calculating Hamming distances (from R. Tervo, UNB, Canada)](http://www.ee.unb.ca/cgi-bin/tervo/hamming.pl)
- [Tool for calculating Hamming code](http://www.toolmenow.com/34/Hamming\(7,4\)-Code-Calculator)

[^1]: [See Lemma 12 of](https://www.cs.cmu.edu/~venkatg/teaching/codingtheory/notes/notes1.pdf)

[^2]: [Hamming (1950)](https://en.wikipedia.org/wiki/#CITEREFHamming1950), pp. 153–154.

[^3]: Thompson, Thomas M. (1983), [*From Error-Correcting Codes through Sphere Packings to Simple Groups*](https://books.google.com/books?id=ggqxuG31B3cC&q=%22From%20Error-Correcting%20Codes%20through%20Sphere%20Packings%20to%20Simple%20Groups%22&pg=PA16), The Carus Mathematical Monographs (#21), Mathematical Association of America, pp. 16– 17, [ISBN](https://en.wikipedia.org/wiki/ISBN_\(identifier\) "ISBN (identifier)") [0-88385-023-0](https://en.wikipedia.org/wiki/Special:BookSources/0-88385-023-0 "Special:BookSources/0-88385-023-0")

[^4]: [Kythe & Kythe 2017](https://en.wikipedia.org/wiki/#CITEREFKytheKythe2017), p. 115.

[^5]: [Kythe & Kythe 2017](https://en.wikipedia.org/wiki/#CITEREFKytheKythe2017), p. 95.

[^6]: Moon T. Error correction coding: Mathematical Methods and Algorithms. John Wiley and Sons, 2005.(Cap. 3) [ISBN](https://en.wikipedia.org/wiki/ISBN_\(identifier\) "ISBN (identifier)") [978-0-471-64800-0](https://en.wikipedia.org/wiki/Special:BookSources/978-0-471-64800-0 "Special:BookSources/978-0-471-64800-0")