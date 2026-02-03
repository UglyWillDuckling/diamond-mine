****Error Detection Codes:**** The binary information is transferred from one location to another location through some communication medium. The external noise can change bits from 1 to 0 or 0 to 1. This change in values changes the meaning of the actual message and is called an error. For efficient data transfer, there should be error detection and correction codes. An error detection code is a binary code that detects digital errors during transmission. To detect errors in the received message, we add some extra bits to the actual data.

Without the addition of redundant bits, it is not possible to detect errors in the received message. There are 3 ways in which we can detect errors in the received message:

****1\. Parity Bit****

****2\. CheckSum****

****3\. Cyclic Redundancy Check**** (****CRC****)

## What is parity bit?

A parity bit is an extra bit that is added to the message bits or data-word bits on the sender side. Data-word bits along with parity bits is called a codeword. The parity bit is added to the message bits on the sender side, to help in error detection at the receiver side.

## Parity Bit Method

We'll be understanding the parity bit method in this article in depth:

A parity bit is an extra bit included in the binary message to make a total number of 1’s either odd or even. Parity word denotes the number of 1’s in a binary string. There are two parity systems - even and odd parity checks.

### Even Parity

Total number of 1's in the given data bit should be even. So if the total number of 1's in the data bit is odd then a single 1 will be appended to make total number of 1's even else 0 will be appended(if total number of 1's are already even). Hence, if any error occurs, the parity check circuit will detect it at the receiver's end. Let's understand this with example, see the below diagram.

![[~/×/4b406a6befcae0279090c1c8ad5c4093_MD5.png]]

Even Parity Check (fig - 1.1)

In the above image, as we can see the data bits are *****'1011000'***** and since this is even parity check that we're talking about, 1 will be appended as the parity bit (highlighted in red) to make total count of 1's even in the data sent. So here, our parity bit is 1. If the total count of 1 in the given data bits were already even, then 0 would've been appended.

![[~/×/8076778a915c24906ce48be90337a98e_MD5.png]]

### Odd Parity

In odd parity system, if the total number of 1's in the given binary string (or data bits) are even then 1 is appended to make the total count of 1's as odd else 0 is appended. The receiver knows that whether sender is an odd parity generator or even parity generator. Suppose if sender is an odd parity generator then there must be an odd number of 1’s in received binary string. If an error occurs to a single bit that is either bit is changed to 1 to 0 or 0 to 1, received binary bit will have an even number of 1’s which will indicate an error.

Take reference from ****fig(1.1)**** and rather than appending the 1 as parity bit, append 0 because total number of 1's are already odd.

![[~/×/2ef7fe95acb3727c0617d88f718393e4_MD5.png]]

****Example:****

| Message (XYZ) | P(Odd) | P(Even) |
| --- | --- | --- |
| 000 | 1 | 0 |
| 001 | 0 | 1 |
| 010 | 0 | 1 |
| 011 | 1 | 0 |
| 100 | 0 | 1 |
| 101 | 1 | 0 |
| 110 | 1 | 0 |
| 111 | 0 | 1 |

![[~/×/84bd986e048bb1d0dafc0287670d927a_MD5.png]] ****Figure -**** Error Detection with Odd Parity Bit

## Advantages of Parity Bit Method

- Parity bit method is a promising method to detect any odd bit error at the receiver side.
- Overhead in data transmission is low, as only one parity bit is added to the message bits at sender side before transmission.
- Also, this is a simple method for odd bits error detection.

## Disadvantages of Parity Bit Method

- The limitation of this method is that only error in a odd number of bits are identified and we also cannot determine the exact location of error in the data bit, therefore, error correction is not possible in this method.
- If the number of bits in even parity check increase or decrease (data changed) but remained to be even then it won't be able to detect error as the number of bits are still even and same goes for odd parity check.

See the below image for more details:

![[~/×/adc8e5f3a29bf20ed4d09d1fa46bbdea_MD5.png]]

Can't detect error (Even Parity Check)

In the above example, the the data bits has been changed but as we can see the total count of 1's remain to be even, the error can't be detected even though the message's meaning has been changed. You can visualize the same for odd parity check the number of 1's will remain odd, even if the data bits have been changed and the odd parity check won't be able to detect error.

## Points to Remember

- In 1's complement of signed number +0 and -0 has two different representation.
- The range of signed magnitude representation of an 8-bit number in which 1-bit is used as a signed bit as follows -2 <sup><span>7</span></sup> to +2 <sup><span>7</span></sup>.
- [Floating point number](https://www.geeksforgeeks.org/floating-point-representation-basics/) is said to be normalized if most significant digit of mantissa is one. For example, 6-bit binary number 001101 is normalized because of two leading 0's.
- [Booth algorithm](https://www.geeksforgeeks.org/computer-organization-booths-algorithm/) that uses two n bit numbers for multiplication gives results in 2n bits.
- The booth algorithm uses 2's complement representation of numbers and work for both positive and negative numbers.
- If k-bits are used to represent exponent then bits number = (2 <sup><span>k-1</span></sup>) and range of exponent = - (2 <sup><span>k-1</span></sup> \-1) to (2 <sup><span>k</span></sup> \-1).

## Conclusion

Parity bit method is a simple method which uses only one bit extra parity with the message bits to make codeword at sender side. It is used to detect errors of odd number of bits at receiver side. However, it can neither detect errors of even number of bits, nor can it correct any detected error as the location of bits where error occurred can't be identified in this method.

  

[Next Article](https://www.geeksforgeeks.org/physics/logic-gates/)

[Logic Gates - Definition, Types, Uses](https://www.geeksforgeeks.org/physics/logic-gates/)

Login Modal | GeeksforGeeks