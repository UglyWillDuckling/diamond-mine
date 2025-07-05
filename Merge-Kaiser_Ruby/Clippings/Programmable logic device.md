---
source: "https://en.wikipedia.org/wiki/Programmable_logic_device"
author:
  - "[[Contributors to Wikimedia projects]]"
published: 2002-08-19
created: 2025-06-21
tags:
---
![[~/×/77eea29b121115ad28a1e1336fcea643_MD5.png|400]]

A simplified PAL device. The programmable elements (shown as a fuse) connect both the true and complemented inputs to the AND gates. These AND gates, also known as product terms, are ORed together to form a sum-of-products logic array.

A **programmable logic device** (**PLD**) is an [electronic](https://en.wikipedia.org/wiki/Electronics "Electronics") component used to build [reconfigurable](https://en.wikipedia.org/wiki/Reconfigurable_computing "Reconfigurable computing") [digital circuits](https://en.wikipedia.org/wiki/Digital_circuits "Digital circuits"). Unlike digital logic constructed using discrete [logic gates](https://en.wikipedia.org/wiki/Logic_gate "Logic gate") with fixed functions, the function of a PLD is undefined at the time of manufacture. Before the PLD can be used in a circuit it must be programmed to implement the desired function.[^1] Compared to fixed logic devices, programmable logic devices simplify the design of complex logic and may offer superior performance.[^2] Unlike for [microprocessors](https://en.wikipedia.org/wiki/Microprocessors "Microprocessors"), programming a PLD changes the connections made between the gates in the device.

PLDs can broadly be categorised into, in increasing order of complexity, [simple programmable logic devices (SPLDs)](https://en.wikipedia.org/wiki/Simple_programmable_logic_device "Simple programmable logic device"), comprising [programmable array logic](https://en.wikipedia.org/wiki/Programmable_array_logic "Programmable array logic"), [programmable logic array](https://en.wikipedia.org/wiki/Programmable_logic_array "Programmable logic array") and [generic array logic](https://en.wikipedia.org/wiki/Generic_array_logic "Generic array logic"); [complex programmable logic devices (CPLDs)](https://en.wikipedia.org/wiki/Complex_programmable_logic_device "Complex programmable logic device"); and [field-programmable gate arrays (FPGAs)](https://en.wikipedia.org/wiki/Field-Programmable_Gate_Array "Field-Programmable Gate Array").

## History

In 1969, [Motorola](https://en.wikipedia.org/wiki/Motorola "Motorola") offered the XC157, a mask-programmed gate array with 12 gates and 30 uncommitted input/output pins.[^3]

In 1970, [Texas Instruments](https://en.wikipedia.org/wiki/Texas_Instruments "Texas Instruments") developed a mask-programmable IC based on the [IBM](https://en.wikipedia.org/wiki/IBM "IBM") read-only associative memory or ROAM. This device, the TMS2000, was programmed by altering the metal layer during the production of the IC. The TMS2000 had up to 17 inputs and 18 outputs with 8 [JK flip-flops](https://en.wikipedia.org/wiki/JK_flip-flop "JK flip-flop") for memory. TI coined the term *[programmable logic array](https://en.wikipedia.org/wiki/Programmable_logic_array "Programmable logic array")* (PLA) for this device.[^4]

In 1971, [General Electric](https://en.wikipedia.org/wiki/General_Electric "General Electric") Company (GE) was developing a programmable logic device based on the new [programmable read-only memory](https://en.wikipedia.org/wiki/Programmable_read-only_memory "Programmable read-only memory") (PROM) technology. This experimental device improved on IBM's ROAM by allowing multilevel logic. Intel had just introduced the floating-gate [UV EPROM](https://en.wikipedia.org/wiki/UV_EPROM "UV EPROM") so the researcher at GE incorporated that technology. The GE device was the first erasable PLD ever developed, predating the [Altera](https://en.wikipedia.org/wiki/Altera "Altera") EPLD by over a decade. GE obtained several early patents on programmable logic devices.[^5] [^6] [^7]

In 1973 [National Semiconductor](https://en.wikipedia.org/wiki/National_Semiconductor "National Semiconductor") introduced a mask-programmable PLA device (DM7575) with 14 inputs and 8 outputs with no memory registers. This was more popular than the TI part but the cost of making the metal mask limited its use. The device is significant because it was the basis for the field programmable logic array produced by [Signetics](https://en.wikipedia.org/wiki/Signetics "Signetics") in 1975, the 82S100. ([Intersil](https://en.wikipedia.org/wiki/Intersil "Intersil") actually beat Signetics to market but poor yield doomed their part.) [^8] [^9]

In 1974 GE entered into an agreement with [Monolithic Memories](https://en.wikipedia.org/wiki/Monolithic_Memories "Monolithic Memories") (MMI) to develop a mask-programmable logic device incorporating the GE innovations. The device was named *programmable associative logic array* or PALA. The MMI 5760 was completed in 1976 and could implement multilevel or sequential circuits of over 100 gates. The device was supported by a GE design environment where Boolean equations would be converted to mask patterns for configuring the device. The part was never brought to market.[^10]

## PLA

In 1970, [Texas Instruments](https://en.wikipedia.org/wiki/Texas_Instruments "Texas Instruments") developed a mask-programmable IC based on the [IBM](https://en.wikipedia.org/wiki/IBM "IBM") read-only associative memory or ROAM. This device, the TMS2000, was programmed by altering the metal layer during the production of the IC. The TMS2000 had up to 17 inputs and 18 outputs with 8 [JK flip-flops](https://en.wikipedia.org/wiki/JK_flip-flops "JK flip-flops") for memory. TI coined the term [programmable logic array](https://en.wikipedia.org/wiki/Programmable_logic_array "Programmable logic array") for this device.[^4]

A programmable logic array (PLA) has a programmable AND gate array, which links to a programmable OR gate array, which can then be conditionally complemented to produce an output. A PLA is similar to a ROM concept, however a PLA does not provide full decoding of a variable and does not generate all the [minterms](https://en.wikipedia.org/wiki/Minterms "Minterms") as in a ROM.

The programmable logic sequencer (PLS/FPLS) is similar to a PLA, but with integral registered outputs using a number of [flip-flops](https://en.wikipedia.org/wiki/Flip-flops "Flip-flops") to allow creation of some [state machines](https://en.wikipedia.org/wiki/State_machine "State machine"). [Signetics](https://en.wikipedia.org/wiki/Signetics "Signetics") introduced the first FPLS in 1979.[^11]

## PAL

PAL devices have arrays of transistor cells arranged in a "fixed-OR, programmable-AND" plane used to implement "sum-of-products" binary logic equations for each of the outputs in terms of the inputs and either synchronous or asynchronous feedback from the outputs.

MMI introduced a breakthrough device in 1978, the [programmable array logic](https://en.wikipedia.org/wiki/Programmable_array_logic "Programmable array logic") or PAL. The architecture was simpler than that of Signetics' FPLA because it omitted the programmable OR array. This made the parts faster, smaller and cheaper. They were available in 20-pin 300-mil DIP packages, while the FPLAs came in 28-pin 600-mil packages. The PAL Handbook demystified the design process. The PALASM design software (PAL assembler) converted the engineers' Boolean equations into the fuse pattern required to program the part. The PAL devices were soon [second-sourced](https://en.wikipedia.org/wiki/Second_source "Second source") by National Semiconductor, Texas Instruments and AMD.

After MMI succeeded with the 20-pin PAL parts, [AMD](https://en.wikipedia.org/wiki/AMD "AMD") introduced the 24-pin [22V10](https://en.wikipedia.org/w/index.php?title=22V10&action=edit&redlink=1 "22V10 (page does not exist)") PAL with additional features. After buying out MMI (1987), AMD spun off a consolidated operation as [Vantis](https://en.wikipedia.org/wiki/Vantis "Vantis"), and that business was acquired by [Lattice Semiconductor](https://en.wikipedia.org/wiki/Lattice_Semiconductor "Lattice Semiconductor") in 1999.

## GALs

![[~/×/c473b2ff2ab9cb5220b48f5fdc99a780_MD5.jpg]]

Lattice GAL 16V8 and 20V8. These are 35 nanosecond devices.

An improvement on the PAL was the generic array logic device, or GAL, invented by [Lattice Semiconductor](https://en.wikipedia.org/wiki/Lattice_Semiconductor "Lattice Semiconductor") in 1985. This device has the same logical properties as the PAL but can be erased and reprogrammed. The GAL is very useful in the prototyping stage of a design when any [bugs](https://en.wikipedia.org/wiki/Computer_bug "Computer bug") in the logic can be corrected by reprogramming. GALs are programmed and reprogrammed using a PAL programmer, or, in the case of chips that support it, by using the [in-circuit programming](https://en.wikipedia.org/wiki/In-circuit_programming "In-circuit programming") technique.

Lattice GALs combine [CMOS](https://en.wikipedia.org/wiki/CMOS "CMOS") and electrically erasable (E <sup>2</sup>) floating gate technology for a high-speed, low-power logic device. A similar device called a PEEL (programmable electrically erasable logic) was introduced by the International CMOS Technology (ICT) corporation.

Sometimes GAL chips are referred as simple programmable logic device (SPLD), analogous to complex programmable logic device (CPLD) below.

## CPLDs

PALs and GALs are available only in small sizes, equivalent to a few hundred logic gates. For bigger logic circuits, complex PLDs or [CPLDs](https://en.wikipedia.org/wiki/CPLD "CPLD") can be used. These contain the equivalent of several PALs linked by programmable interconnections, all in one [integrated circuit](https://en.wikipedia.org/wiki/Integrated_circuit "Integrated circuit"). CPLDs can replace thousands, or even hundreds of thousands, of logic gates.

Some CPLDs are programmed using a PAL programmer, but this method becomes inconvenient for devices with hundreds of pins. A second method of programming is to solder the device to its printed circuit board, then feed it with a serial data stream from a personal computer. The CPLD contains a circuit that decodes the data stream and configures the CPLD to perform its specified logic function. Some manufacturers, such as [Altera](https://en.wikipedia.org/wiki/Altera "Altera") and [Atmel (now Microchip)](https://en.wikipedia.org/wiki/Atmel "Atmel"), use [JTAG](https://en.wikipedia.org/wiki/JTAG "JTAG") to program CPLDs in-circuit from [.JAM](https://en.wikipedia.org/wiki/Standard_Test_and_Programming_Language "Standard Test and Programming Language") files.

## FPGAs

While PALs were being developed into GALs and CPLDs (all discussed above), a separate stream of development was happening. This type of device is based on [gate array](https://en.wikipedia.org/wiki/Gate_array "Gate array") technology and is called the [field-programmable gate array](https://en.wikipedia.org/wiki/Field-programmable_gate_array "Field-programmable gate array") (FPGA). Early examples of FPGAs are the 82S100 array, and 82S105 sequencer, by Signetics, introduced in the late 1970s. The 82S100 was an array of AND terms. The 82S105 also had flip-flop functions.

(Remark: 82S100 and similar ICs from Signetics have PLA structure, AND-plane + OR-plane.)

FPGAs use a grid of [logic gates](https://en.wikipedia.org/wiki/Logic_gate "Logic gate"), and once stored, the data doesn't change, similar to that of an ordinary gate array. The term *field-programmable* means the device is programmed by the customer, not the manufacturer. FPGAs and gate arrays are similar but gate arrays can only be configured at the factory during fabrication.[^12] [^13] [^14]

FPGAs are usually programmed after being soldered down to the circuit board, in a manner similar to that of larger CPLDs. In most larger FPGAs, the configuration is volatile and must be re-loaded into the device whenever power is applied or different functionality is required. Configuration is typically stored in a configuration [PROM](https://en.wikipedia.org/wiki/Programmable_read-only_memory "Programmable read-only memory"), [EEPROM](https://en.wikipedia.org/wiki/EEPROM "EEPROM") or flash memory.[^15] EEPROM versions may be in-system programmable (typically via [JTAG](https://en.wikipedia.org/wiki/JTAG "JTAG")).

The difference between FPGAs and CPLDs is that FPGAs are internally based on [look-up tables](https://en.wikipedia.org/wiki/Lookup_table "Lookup table") (LUTs), whereas CPLDs form the logic functions with sea-of-gates (e.g. [sum of products](https://en.wikipedia.org/wiki/Canonical_normal_form "Canonical normal form")). CPLDs are meant for simpler designs while FPGAs are meant for more complex designs. In general, CPLDs are a good choice for wide [combinational logic](https://en.wikipedia.org/wiki/Combinational_logic "Combinational logic") applications, whereas FPGAs are more suitable for large [state machines](https://en.wikipedia.org/wiki/State_machine "State machine") such as [microprocessors](https://en.wikipedia.org/wiki/Microprocessors "Microprocessors").

## EPLDs

![[~/×/d4f32445a74a8a795f7df15d4916c5d0_MD5.jpg]]

An EPLD from Cypress in a PLCC - package

Using the same technology as [EPROMs](https://en.wikipedia.org/wiki/EPROM "EPROM"), **EPLD** s have a quartz window in the package that allows them to be erased on exposure to UV light.[^16] [^17]

Using the same technology as [EEPROMs](https://en.wikipedia.org/wiki/EEPROM "EEPROM"), **EEPLDs** can be erased electrically.[^16] [^17]

An **erasable programmable logic device** (**EPLD**) is an integrated circuit that comprises an array of PLDs that do not come pre-connected; the connections are programmed electrically by the user. Most GAL and FPGA devices are examples of EPLDs.

## Other variants

These are microprocessor circuits that contain some [fixed functions](https://en.wikipedia.org/wiki/Fixed-function "Fixed-function") and other functions that can be altered by code running on the processor. Designing self-altering systems requires that engineers learn new methods and that new software tools be developed.

PLDs are being sold now that contain a microprocessor with a fixed function (the so-called *core*) surrounded by programmable logic. These devices let designers concentrate on adding new features to designs without having to worry about making the microprocessor work. Also, the fixed-function microprocessor takes less space on the chip than a part of the programmable gate array implementing the same processor, leaving more space for the programmable gate array to contain the designer's specialized circuits.

A PLD is a combination of a logic device and a [memory](https://en.wikipedia.org/wiki/Computer_memory "Computer memory") device. The memory is used to store the pattern that was given to the chip during programming. Most of the methods for storing data in an integrated circuit have been adapted for use in PLDs. These include:

- [Silicon](https://en.wikipedia.org/wiki/Silicon "Silicon") [antifuses](https://en.wikipedia.org/wiki/Antifuse "Antifuse")
- [SRAM](https://en.wikipedia.org/wiki/Static_random_access_memory "Static random access memory")
- [EPROM](https://en.wikipedia.org/wiki/EPROM "EPROM") or [EEPROM](https://en.wikipedia.org/wiki/EEPROM "EEPROM") [memory cells](https://en.wikipedia.org/wiki/Memory_cell_\(computing\) "Memory cell (computing)")
- [Flash memory](https://en.wikipedia.org/wiki/Flash_memory "Flash memory")

Silicon antifuses are connections that are made by applying a voltage across a modified area of silicon inside the chip. They are called *antifuses* because they work in the opposite way to normal fuses, which begin life as connections until they are broken by an electric current.

SRAM, or static RAM, is a volatile type of memory, meaning that its contents are lost each time the power is switched off. SRAM-based PLDs therefore have to be programmed every time the circuit is switched on. This is usually done automatically by another part of the circuit.

An EPROM memory cell is a [MOSFET](https://en.wikipedia.org/wiki/MOSFET "MOSFET") (metal-oxide-semiconductor field-effect transistor, or MOS transistor) that can be switched on by trapping an electric charge permanently on its gate electrode. This is done by a PAL programmer. The charge remains for many years and can only be removed by exposing the chip to strong [ultraviolet](https://en.wikipedia.org/wiki/Ultraviolet "Ultraviolet") light in a device called an EPROM eraser.

Flash memory is non-volatile, retaining its contents even when the power is switched off. It is stored on [floating-gate MOSFET](https://en.wikipedia.org/wiki/Floating-gate_MOSFET "Floating-gate MOSFET") memory cells, and can be erased and reprogrammed as required. This makes it useful in PLDs that may be reprogrammed frequently, such as PLDs used in prototypes. Flash memory is a kind of EEPROM that holds information using trapped electric charges similar to EPROM. Consequently, flash memory can hold information for years, but possibly not as many years as EPROM.

As of 2005, most CPLDs are electrically programmable and erasable, and non-volatile. This is because they are too small to justify the inconvenience of programming internal SRAM cells every time they start up, and EPROM cells are more expensive due to their ceramic package with a quartz window.

Many PAL programming devices accept input in a standard file format, commonly referred to as ' [JEDEC](https://en.wikipedia.org/wiki/JEDEC "JEDEC") files'. They are analogous to [software](https://en.wikipedia.org/wiki/Software "Software") [compilers](https://en.wikipedia.org/wiki/Compiler "Compiler"). The languages used as [source code](https://en.wikipedia.org/wiki/Source_code "Source code") for logic compilers are called [hardware description languages](https://en.wikipedia.org/wiki/Hardware_description_language "Hardware description language"), or HDLs.[^1]

[PALASM](https://en.wikipedia.org/wiki/PALASM "PALASM"), [ABEL](https://en.wikipedia.org/wiki/Advanced_Boolean_Expression_Language "Advanced Boolean Expression Language") and [CUPL](https://en.wikipedia.org/wiki/Programmable_Array_Logic#CUPL "Programmable Array Logic") are frequently used for low-complexity devices, while [Verilog](https://en.wikipedia.org/wiki/Verilog "Verilog") and [VHDL](https://en.wikipedia.org/wiki/VHDL "VHDL") are popular higher-level description languages for more complex devices. The more limited ABEL is often used for historical reasons, but for new designs, VHDL is more popular, even for low-complexity designs.

For modern PLD programming languages, design flows, and tools, see [FPGA](https://en.wikipedia.org/wiki/FPGA "FPGA") and [reconfigurable computing](https://en.wikipedia.org/wiki/Reconfigurable_computing "Reconfigurable computing").

A [device programmer](https://en.wikipedia.org/wiki/Device_programmer "Device programmer") is used to transfer the Boolean logic pattern into the programmable device. In the early days of programmable logic, every PLD manufacturer also produced a specialized device programmer for its family of logic devices. Later, universal device programmers came onto the market that supported several logic device families from different manufacturers. Today's device programmers usually can program common PLDs (mostly PAL/GAL equivalents) from all existing manufacturers. Common file formats used to store the Boolean logic pattern (fuses) are JEDEC, Altera POF (programmable object file), or Xilinx BITstream.[^18]

## See also

- [Complex programmable logic device](https://en.wikipedia.org/wiki/Complex_programmable_logic_device "Complex programmable logic device") (CPLD)
- [Field-programmable gate array](https://en.wikipedia.org/wiki/Field-programmable_gate_array "Field-programmable gate array") (FPGA)
- [Macrocell array](https://en.wikipedia.org/wiki/Macrocell_array "Macrocell array")
- [Programmable array logic](https://en.wikipedia.org/wiki/Programmable_array_logic "Programmable array logic") (PAL)

## References

## External links

- ["PLD Tools Creating SVF, JAM, STAPL and other formats"](https://web.archive.org/web/20120318182807/http://www.corelis.com/blog/index.php/blog/2010/12/01/pld-tools-creating-svf-jam-stapl-and-other-formats). *JTAG / boundary-scan*. Corelis. Dec 1, 2010. Archived from [the original](http://www.corelis.com/blog/index.php/blog/2010/12/01/pld-tools-creating-svf-jam-stapl-and-other-formats) on March 18, 2012. Retrieved July 18, 2011.
- ["FPGAs and CPLDs"](http://www.latticesemi.com/Products/FPGAandCPLD.aspx). Lattice Semiconductor.

[^1]: Horowitz, Paul; Hill, Winfield (2015). *Horowitz P., Hill W. - The Art of Electronics*. New York. p. 764. [ISBN](https://en.wikipedia.org/wiki/ISBN_\(identifier\) "ISBN (identifier)") [978-0-521-80926-9](https://en.wikipedia.org/wiki/Special:BookSources/978-0-521-80926-9 "Special:BookSources/978-0-521-80926-9").`{{[cite book](https://en.wikipedia.org/wiki/Template:Cite_book "Template:Cite book")}}`: CS1 maint: location missing publisher ([link](https://en.wikipedia.org/wiki/Category:CS1_maint:_location_missing_publisher "Category:CS1 maint: location missing publisher"))

[^2]: Holdsworth, B.; Woods, R. C. (2003). [*Digital Logic Design*](https://www.sciencedirect.com/book/9780750645829/digital-logic-design) (4th ed.). Elsevier. [ISBN](https://en.wikipedia.org/wiki/ISBN_\(identifier\) "ISBN (identifier)") [978-0-7506-4582-9](https://en.wikipedia.org/wiki/Special:BookSources/978-0-7506-4582-9 "Special:BookSources/978-0-7506-4582-9").

[^3]: *Motorola Semiconductor Data Book, Fourth Edition*. Motorola Inc. 1969. p. IC-73.

[^4]: Andres, Kent (October 1970). *A Texas Instruments Application Report: MOS programmable logic arrays*. Texas Instruments. Bulletin CA-158. Report introduces the TMS2000 and TMS2200 series of mask programmable PLAs.

[^5]: Greer, David L. *Electrically Programmable Logic Circuits* [US Patent 3,818,452](https://patents.google.com/patent/US3818452). Assignee: General Electric, Filed: April 28, 1972, Granted: June 18, 1974

[^6]: Greer, David L. *Multiple Level Associative Logic Circuits* [US Patent 3,816,725](https://patents.google.com/patent/US3816725). Assignee: General Electric, Filed: April 28, 1972, Granted: June 11, 1974

[^7]: Greer, David L. *Segmented Associative Logic Circuits* [US Patent 3,849,638](https://patents.google.com/patent/US3849638). Assignee: General Electric, Filed: July 18, 1973, Granted: November 19, 1974

[^8]: "Semiconductors and IC's: FPLA". *EDN*. **20** (13). Boston, MA: Cahners Publishing: 66. July 20, 1975. Press release on Intersil IM5200 field programmable logic array. Fourteen inputs pins and 48 product terms. Avalanched-induced-migration programming. Unit price was $37.50

[^9]: "FPLA's give quick custom logic". *EDN*. **20** (13). Boston, MA: Cahners Publishing: 61. July 20, 1975. Press release on Signetics 82S100 and 82S101 field programmable logic arrays. Fourteen inputs pins, 8 output pins and 48 product terms. NiCr fuse link programming.

[^10]: Pellerin, David; Michael Holley (1991). *Practical Design Using Programmable Logic*. Prentice-Hall. p. 15. [ISBN](https://en.wikipedia.org/wiki/ISBN_\(identifier\) "ISBN (identifier)") [0-13-723834-7](https://en.wikipedia.org/wiki/Special:BookSources/0-13-723834-7 "Special:BookSources/0-13-723834-7").

[^11]: Alford, Roger C. (1989). [*Programmable Logic Designer's Guide*](https://archive.org/details/programmablelogi0000alfo/). Howard W. Sams. pp. 67– 69. [ISBN](https://en.wikipedia.org/wiki/ISBN_\(identifier\) "ISBN (identifier)") [0-672-22575-1](https://en.wikipedia.org/wiki/Special:BookSources/0-672-22575-1 "Special:BookSources/0-672-22575-1"). The registers can be dynamically or permanently configured as D, J-K, or T flip-flops, because of the flexibility offered by the inclusion of the "M" inverters (M <sub>0</sub> -M <sub>5</sub>). The outputs of the registers are fed back into the AND-array *before* reaching the tri-state output buffers, allowing for Mealy and Moore state machine development.

[^12]: Dorf, Richard C. (3 October 2018). [*Electronics, Power Electronics, Optoelectronics, Microwaves, Electromagnetics, and Radar*](https://books.google.com/books?id=mZRsBgAAQBAJ&dq=gate+array+custom&pg=SA4-PA28). CRC Press. [ISBN](https://en.wikipedia.org/wiki/ISBN_\(identifier\) "ISBN (identifier)") [978-1-4200-0315-4](https://en.wikipedia.org/wiki/Special:BookSources/978-1-4200-0315-4 "Special:BookSources/978-1-4200-0315-4").

[^13]: Vahid, Frank; Givargis, Tony D. (17 October 2001). [*Embedded System Design: A Unified Hardware / Software Introduction*](https://books.google.com/books?id=ymoCEAAAQBAJ&dq=gate+array+custom&pg=PA276). John Wiley & Sons. [ISBN](https://en.wikipedia.org/wiki/ISBN_\(identifier\) "ISBN (identifier)") [978-0-471-38678-0](https://en.wikipedia.org/wiki/Special:BookSources/978-0-471-38678-0 "Special:BookSources/978-0-471-38678-0").

[^14]: Chen, Wai-Kai (3 October 2018). [*The VLSI Handbook*](https://books.google.com/books?id=rMsqBgAAQBAJ&dq=gate+array+custom&pg=SA47-PA12). CRC Press. [ISBN](https://en.wikipedia.org/wiki/ISBN_\(identifier\) "ISBN (identifier)") [978-1-4200-0596-7](https://en.wikipedia.org/wiki/Special:BookSources/978-1-4200-0596-7 "Special:BookSources/978-1-4200-0596-7").

[^15]: ["Using Flash Memory to Configure FPGAs"](https://cdrdv2-public.intel.com/654742/cfg_cf52010.pdf) (PDF). [Altera](https://en.wikipedia.org/wiki/Altera "Altera"). Retrieved 2024-08-21.

[^16]: Tertulien Ndjountche.["Digital Electronics 2: Sequential and Arithmetic Logic Circuits"](https://books.google.com/books?id=P7jeDAAAQBAJ). 2016. p. 224.

[^17]: Clive Maxfield.["The Design Warrior's Guide to FPGAs"](https://books.google.com/books?id=dnuwr2xOFpUC). 2004. p. 20

[^18]: [PLD File Formats](http://www.pldtool.com/pld-file-formats)