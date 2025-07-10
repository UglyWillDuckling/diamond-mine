---
source: https://en.wikipedia.org/wiki/Shift_register
published: 2002-02-26
created: 2025-06-24
tags:
---
A **shift register** is a type of [digital circuit](https://en.wikipedia.org/wiki/Digital_circuit "Digital circuit") using a cascade of [flip-flops](https://en.wikipedia.org/wiki/Flip-flop_\(electronics\) "Flip-flop (electronics)") where the output of one flip-flop is connected to the input of the next. They share a single [clock signal](https://en.wikipedia.org/wiki/Clock_signal "Clock signal"), which causes the data stored in the system to shift from one location to the next. By connecting the last flip-flop back to the first, the data can cycle within the shifters for extended periods, and in this configuration they were used as [computer memory](https://en.wikipedia.org/wiki/Computer_memory "Computer memory"), displacing [delay-line memory](https://en.wikipedia.org/wiki/Delay-line_memory "Delay-line memory") systems in the late 1960s and early 1970s.

In most cases, several parallel shift registers would be used to build a larger memory pool known as a " [bit array](https://en.wikipedia.org/wiki/Bit_array "Bit array") ". Data was stored into the array and read back out in parallel, often as a [computer word](https://en.wikipedia.org/wiki/Computer_word "Computer word"), while each bit was stored serially in the shift registers. There is an inherent trade-off in the design of bit arrays; putting more flip-flops in a row allows a single shifter to store more bits, but requires more clock cycles to push the data through all of the shifters before the data can be read back out again.

Shift registers can have both [parallel](https://en.wikipedia.org/wiki/Parallel_communication "Parallel communication") and [serial](https://en.wikipedia.org/wiki/Serial_communication "Serial communication") inputs and outputs. These are often configured as ["serial-in, parallel-out" (SIPO)](https://en.wikipedia.org/wiki/#Serial-in_parallel-out_\(SIPO\)) or as ["parallel-in, serial-out" (PISO)](https://en.wikipedia.org/wiki/#Parallel-in_serial-out_\(PISO\)). There are also types that have both serial and parallel input and types with serial and parallel output. There are also "bidirectional" shift registers, which allow shifting in both directions: L → R or R → L. The serial input and serial output of a shift register are connected to create a **circular shift register**. A PIPO register (parallel in, parallel out) is simply a [D-type](https://en.wikipedia.org/wiki/D-type_flip-flop "D-type flip-flop") [register](https://en.wikipedia.org/wiki/Register_\(computer\) "Register (computer)") and is *not* a shift register, but is very fast – an output is given within a single clock pulse. A "universal" shift register provides bidirectional serial-in and serial-out, as well as parallel-in and parallel-out.

## Serial-in serial-out (SISO)

|  | Output 1 | Output 2 | Output 3 | Output 4 |
| --- | --- | --- | --- | --- |
| 0 | 0 | 0 | 0 | 0 |
| 1 | 1 | 0 | 0 | 0 |
| 2 | 0 | 1 | 0 | 0 |
| 3 | 1 | 0 | 1 | 0 |
| 4 | 1 | 1 | 0 | 1 |
| 5 | 0 | 1 | 1 | 0 |
| 6 | 0 | 0 | 1 | 1 |
| 7 | 0 | 0 | 0 | 1 |
| 8 | 0 | 0 | 0 | 0 |

**These are the simplest kind of shift registers.** The data string is presented at "data in" and is shifted right one stage each time "data advance" is brought [high](https://en.wikipedia.org/wiki/Logic_level "Logic level"). At each advance, the bit on the far left (i.e. "data in") is shifted into the first [flip-flop](https://en.wikipedia.org/wiki/Flip-flop_\(electronics\) "Flip-flop (electronics)") 's output. The bit on the far right (i.e. "data out") is shifted out and lost.

The data is stored after each on the "Q" output, so there are four storage "slots" available in this arrangement, hence it is a 4-bit register. To give an idea of the shifting pattern, imagine that the register holds 0000 (so all storage slots are empty). As "data in" presents 1,0,1,1,0,0,0,0 (in that order, with a pulse at "data advance" each time—this is called clocking or strobing) to the register, this is the result. The right hand column corresponds to the right-most flip-flop's output pin, and so on.

So the serial output of the entire value is 00010110. It can be seen that if data were to be continued to input, it would get exactly what was put in (10110000), but offset by four "data advance" cycles. This arrangement is the hardware equivalent of a [queue](https://en.wikipedia.org/wiki/Queue_\(data_structure\) "Queue (data structure)"). Also, at any time, the whole register can be set to zero by bringing the reset (R) pins high.

This arrangement performs *destructive readout* – each datum is lost once it has been shifted out of the right-most bit.

## Serial-in parallel-out (SIPO)

![[~/×/f55d31f43105f61d703fe6394fb18250_MD5.png|500]]

This configuration allows conversion from serial to parallel format. Data input is serial, as described in the SISO section above. Once the data has been clocked in, it may be either read off at each output simultaneously, or it can be shifted out.

In this configuration, each flip-flop is [edge triggered](https://en.wikipedia.org/wiki/Signal_edge "Signal edge"). All flip-flops operate at the given clock frequency. Each input bit makes its way down to the Nth output after N clock cycles, leading to parallel output.

In cases where the parallel outputs should not change during the serial loading process, it's desirable to use a latched or [buffered](https://en.wikipedia.org/wiki/Data_buffer "Data buffer") output. In a latched shift register (such as the [74595](https://en.wikipedia.org/wiki/List_of_7400_series_integrated_circuits "List of 7400 series integrated circuits")) the serial data is first loaded into an internal buffer register, then upon receipt of a load signal the state of the buffer register is copied into a set of output registers. In general, the practical application of the serial-in/parallel-out shift register is to convert data from serial format on a single wire to parallel format on multiple wires.

This configuration has the data input on lines D1 through D4 in parallel format, D1 being the most significant bit. To write the data to the register, the Write/Shift control line must be held LOW. To shift the data, the W/S control line is brought HIGH and the registers are clocked. The arrangement now acts as a PISO shift register, with D1 as the Data Input. However, as long as the number of clock cycles is not more than the length of the data-string, the Data Output, Q, will be the parallel data read off in order.

## Parallel-in serial-out (PISO)

![[~/×/21d162f4e7be0e2cf937d2015db31078_MD5.png|500]]
*4-Bit PISO Shift Register*

The animation below shows the write/shift sequence, including the internal state of the shift register.

![[~/×/505ba5cf70e7341d909a6bb9b309962c_MD5.gif]]

## Uses

![[~/×/63c5ce8fb0e271c1a27b1059a9389af1_MD5.jpg]]

Toshiba TC4015BP dual SIPO shift register

One of the most common uses of a shift register is to convert between serial and parallel interfaces.

### Delay

Serial-in serial-out shift registers can be used as simple delay circuits.[^1]

### Stack

Several bidirectional shift registers can also be connected in parallel for a hardware implementation of a [stack](https://en.wikipedia.org/wiki/Stack_\(data_structure\) "Stack (data structure)").

Shift registers are commonly attached to [microcontrollers](https://en.wikipedia.org/wiki/Microcontrollers "Microcontrollers") when more [general-purpose input/output](https://en.wikipedia.org/wiki/General-purpose_input/output "General-purpose input/output") pins are required than are available, sometimes over a [Serial Peripheral Interface in daisy chain configuration](https://en.wikipedia.org/wiki/Serial_Peripheral_Interface#Daisy_chain_configuration "Serial Peripheral Interface"), which allows any number of binary devices to be accessed using only two to four pins, though more slowly than parallel I/O.

For more outputs, SIPO shift registers are used. The parallel outputs of the shift register and the desired state for all those devices can be sent out of the microcontroller using a single serial connection.

For more inputs, PISO shift registers are used. Each binary input (such as a [button](https://en.wikipedia.org/wiki/Push-button "Push-button") or more complicated circuitry) is attached to a parallel input of the shift register, then the data is sent back serially to the microcontroller.

### Pulse extenders

Shift registers can also be used as pulse extenders. Compared to [monostable multivibrators](https://en.wikipedia.org/wiki/Monostable_multivibrator "Monostable multivibrator"), the timing does not depend on component values, but it requires an external clock, and the timing accuracy is limited by the granularity of this clock. An example of such a pulse extender is the [Ronja Twister](https://en.wikipedia.org/wiki/Ronja_Twister "Ronja Twister"), wherein five [74164 shift registers](https://en.wikipedia.org/wiki/List_of_7400-series_integrated_circuits#74x100_%E2%80%93_74x199 "List of 7400-series integrated circuits") create the core of the timing logic this way ([schematic](http://ronja.twibright.com/schematics/twister.png)).

### Data processing

In early computers, shift registers were used to handle data processing: two numbers to be added were stored in two shift registers and clocked out into an [arithmetic and logic unit (ALU)](https://en.wikipedia.org/wiki/Arithmetic_logic_unit "Arithmetic logic unit") with the result being fed back to the input of one of the shift registers (the accumulator), which was one bit longer, since binary addition can only result in an answer that has the same size or is one bit longer.

### Bitshift operations

Many computer languages include [bitwise operations](https://en.wikipedia.org/wiki/Bitwise_operations "Bitwise operations") to "shift right" and "shift left" the data in a register, effectively dividing by two or multiplying by two for each place shifted.

Very large [serial-in serial-out](https://en.wikipedia.org/wiki/#Serial-in_serial-out_\(SISO\)) shift registers (thousands of bits in size) were used in a similar manner to the earlier [delay-line memory](https://en.wikipedia.org/wiki/Delay-line_memory "Delay-line memory") in some devices built in the early 1970s. Shift registers don't need many pins or address decoding logic, so was much cheaper than [random-access memory](https://en.wikipedia.org/wiki/Random-access_memory "Random-access memory") back then.[^2] Such *shift register memory* was sometimes called *circulating memory*.

[Datapoint 3300](https://en.wikipedia.org/wiki/Datapoint_3300 "Datapoint 3300"), for example, stored its [terminal](https://en.wikipedia.org/wiki/Computer_terminal "Computer terminal") display of 25 rows of [72 columns](https://en.wikipedia.org/wiki/Characters_per_line "Characters per line") of 6-bit upper-case characters using 54 200-bit shift registers (arranged in 6 tracks of 9 packs), providing storage for 1800 characters. The shift register design meant that scrolling the terminal display could be accomplished by simply pausing the display output to skip one line of characters.[^3] A similar design was used for the [Apple I](https://en.wikipedia.org/wiki/Apple_I "Apple I") 's terminal.[^4]

## History

One of the first known examples of a shift register was in the Mark 2 [Colossus](https://en.wikipedia.org/wiki/Colossus_computer "Colossus computer"), a code-breaking machine built in 1944. It was a six-stage device built of [vacuum tubes](https://en.wikipedia.org/wiki/Vacuum_tube "Vacuum tube") and [thyratrons](https://en.wikipedia.org/wiki/Thyratron "Thyratron").[^5] A shift register was also used in the [IAS machine](https://en.wikipedia.org/wiki/IAS_machine "IAS machine"), built by [John von Neumann](https://en.wikipedia.org/wiki/John_von_Neumann "John von Neumann") and others at the [Institute for Advanced Study](https://en.wikipedia.org/wiki/Institute_for_Advanced_Study "Institute for Advanced Study") in the late 1940s. Shift registers made their way into integrated circuits in the 1960s as evidenced by early patents from [Frank Wanlass](https://en.wikipedia.org/wiki/Frank_Wanlass "Frank Wanlass") [^6] and Kent Smith [^7] working at [General Instrument](https://en.wikipedia.org/wiki/General_Instrument "General Instrument").

## See also

- [Delay-line memory](https://en.wikipedia.org/wiki/Delay-line_memory "Delay-line memory")
- [Linear-feedback shift register](https://en.wikipedia.org/wiki/Linear-feedback_shift_register "Linear-feedback shift register") (LFSR)
- [Ring counter](https://en.wikipedia.org/wiki/Ring_counter "Ring counter")
- [SerDes](https://en.wikipedia.org/wiki/SerDes "SerDes") (Serializer/Deserializer)
- [Serial Peripheral Interface Bus](https://en.wikipedia.org/wiki/Serial_Peripheral_Interface_Bus "Serial Peripheral Interface Bus")
- [Shift register lookup table](https://en.wikipedia.org/wiki/Shift_register_lookup_table "Shift register lookup table") (SRL)
- [Circular buffer](https://en.wikipedia.org/wiki/Circular_buffer "Circular buffer")

## References

[^1]: [US4530107A](https://patents.google.com/patent/US4530107A/en), Williams, Marshall, "Shift register delay circuit", issued 1985-07-16

[^2]: Shirriff, Ken (2014). ["Inside the Intel 1405: die photos of a shift register memory from 1970"](http://www.righto.com/2014/12/inside-intel-1405-die-photos-of-shift.html). *Ken Shirriff's blog*. [Archived](https://web.archive.org/web/20230728203329/https://www.righto.com/2014/12/inside-intel-1405-die-photos-of-shift.html) from the original on 2023-07-28. Retrieved 2023-08-06.

[^3]: ["DataPoint 3300 Maintenance Manual"](http://bitsavers.org/pdf/datapoint/3300/70116_3300termMaint_Dec76.pdf) (PDF). *bitsavers.org*. Datapoint Corporation. December 1976.

[^4]: Shirriff, Ken. ["Inside the Apple-1's shift-register memory"](http://www.righto.com/2022/04/inside-apple-1s-shift-register-memory.html). *Ken Shirriff's blog*. [Archived](https://web.archive.org/web/20230606065258/http://www.righto.com/2022/04/inside-apple-1s-shift-register-memory.html) from the original on 2023-06-06. Retrieved 2023-08-04.

[^5]: [Flowers, Thomas H.](https://en.wikipedia.org/wiki/Tommy_Flowers "Tommy Flowers") (1983), ["The Design of Colossus"](http://www.ivorcatt.com/47c.htm), *Annals of the History of Computing*, **5** (3): 246, [doi](https://en.wikipedia.org/wiki/Doi_\(identifier\) "Doi (identifier)"):[10.1109/MAHC.1983.10079](https://doi.org/10.1109%2FMAHC.1983.10079), [S2CID](https://en.wikipedia.org/wiki/S2CID_\(identifier\) "S2CID (identifier)") [39816473](https://api.semanticscholar.org/CorpusID:39816473)

[^6]: ["Shift register system"](https://patents.google.com/patent/US3406346A/en).

[^7]: ["Electronic shift register system"](https://patents.google.com/patent/US3683203).