---
source: "https://en.wikipedia.org/wiki/Repetition_code"
author:
  - 
published: 2005-12-19
created: 2025-06-20
tags:
---
In [coding theory](https://en.wikipedia.org/wiki/Coding_theory "Coding theory"), the **repetition code** is one of the most basic [linear](https://en.wikipedia.org/wiki/Linear_code "Linear code") [error-correcting codes](https://en.wikipedia.org/wiki/Error-correcting_code "Error-correcting code"). In order to transmit a message over a noisy [channel](https://en.wikipedia.org/wiki/Communication_channel "Communication channel") that may corrupt the transmission in a few places, the idea of the repetition code is to just repeat the message several times. The hope is that the channel corrupts only a minority of these repetitions. This way the receiver will notice that a transmission error occurred since the received data stream is not the repetition of a single message, and moreover, the receiver can recover the original message by looking at the received message in the data stream that occurs most often.

Because of the bad error correcting performance coupled with the low [code rate](https://en.wikipedia.org/wiki/Code_rate "Code rate") (ratio between useful information symbols and actual transmitted symbols), other [error correction codes](https://en.wikipedia.org/wiki/Error_correction_codes "Error correction codes") are preferred in most cases. The chief attraction of the repetition code is the ease of implementation.

## Code parameters

In the case of a binary repetition code, there exist two code words - all ones and all zeros - which have a length of ${\displaystyle n}$ . Therefore, the minimum [Hamming distance](https://en.wikipedia.org/wiki/Hamming_distance "Hamming distance") of the code equals its length ${\displaystyle n}$ . This gives the repetition code an error correcting capacity of ${\displaystyle {\tfrac {n-1}{2}}}$ (i.e. it will correct up to ${\displaystyle {\tfrac {n-1}{2}}}$ errors in any code word).

If the length of a binary repetition code is odd, then it's a [perfect code](https://en.wikipedia.org/wiki/Perfect_code "Perfect code").[^1] The binary repetition code of length *n* is equivalent to the (*n*, 1)- [Hamming code](https://en.wikipedia.org/wiki/Hamming_code "Hamming code"). A (*n*, 1) [BCH code](https://en.wikipedia.org/wiki/BCH_code "BCH code") is also a repetition code.

## Example

Consider a binary repetition code of length 3. The user wants to transmit the information bits `101`. Then the encoding maps each bit either to the all ones or all zeros code word, so we get the `111 000 111`, which will be transmitted.

Let's say three errors corrupt the transmitted bits and the received sequence is `111 010 100`. Decoding is usually done by a simple [majority decision](https://en.wikipedia.org/wiki/Majority_logic_decoding "Majority logic decoding") for each code word. That lead us to `100` as the decoded information bits, because in the first and second code word occurred less than two errors, so the majority of the bits are correct. But in the third code word two bits are corrupted, which results in an erroneous information bit, since two errors lie above the error correcting capacity.

## Applications

Despite their poor performance as stand-alone codes, use in [Turbo code](https://en.wikipedia.org/wiki/Turbo_code "Turbo code") -like iteratively decoded [concatenated coding](https://en.wikipedia.org/wiki/Concatenated_error_correction_codes "Concatenated error correction codes") schemes, such as [repeat-accumulate](https://en.wikipedia.org/wiki/Repeat-accumulate_code "Repeat-accumulate code") (RA) and accumulate-repeat-accumulate (ARA) codes, allows for surprisingly good error correction performance.

Repetition codes are one of the few known codes whose [code rate](https://en.wikipedia.org/wiki/Code_rate "Code rate") can be automatically adjusted to varying [channel capacity](https://en.wikipedia.org/wiki/Channel_capacity "Channel capacity"), by sending more or less parity information as required to overcome the channel noise, and it is the only such code known for non- [erasure channels](https://en.wikipedia.org/wiki/Binary_erasure_channel "Binary erasure channel"). Practical adaptive codes for erasure channels have been invented only recently, and are known as [fountain codes](https://en.wikipedia.org/wiki/Fountain_code "Fountain code").

Some [UARTs](https://en.wikipedia.org/wiki/UART "UART"), such as the ones used in the [FlexRay](https://en.wikipedia.org/wiki/FlexRay "FlexRay") protocol, use a majority filter to ignore brief noise spikes. This spike-rejection filter can be seen as a kind of repetition decoder.

## See also

- [Block code](https://en.wikipedia.org/wiki/Block_code "Block code")
- [Turbo code](https://en.wikipedia.org/wiki/Turbo_code "Turbo code")

## References

[^1]: Bossert, Martin (1999). *Channel Coding for Telecommunications*. Wiley. [ISBN](https://en.wikipedia.org/wiki/ISBN_\(identifier\) "ISBN (identifier)") [9780471982777](https://en.wikipedia.org/wiki/Special:BookSources/9780471982777 "Special:BookSources/9780471982777").