---
source: https://en.wikipedia.org/wiki/Field-programmable_gate_array
author:
  - 
published: 2001-08-10
created: 2025-06-21
tags:
---

![[~/×/21fa9ac9d48582a484c268f0bea78a84_MD5.jpg|300]]
*A Stratix IV FPGA from Altera*

A **field-programmable gate array** (**FPGA**) is a type of configurable [integrated circuit](https://en.wikipedia.org/wiki/Integrated_circuit "Integrated circuit") that can be repeatedly programmed after manufacturing. FPGAs are a subset of logic devices referred to as [programmable logic devices](https://en.wikipedia.org/wiki/Programmable_logic_devices "Programmable logic devices") (PLDs). They consist of an array of [programmable](https://en.wikipedia.org/wiki/Programmable_logic_device "Programmable logic device") [logic blocks](https://en.wikipedia.org/wiki/Logic_block "Logic block") with a connecting grid, that can be configured "in the field" to interconnect with other logic blocks to perform various digital functions. FPGAs are often used in limited (low) quantity production of custom-made products, and in research and development, where the higher cost of individual FPGAs is not as important, and where creating and manufacturing a custom circuit would not be feasible. Other applications for FPGAs include the telecommunications, automotive, aerospace, and industrial sectors, which benefit from their flexibility, high signal processing speed, and parallel processing abilities.

A FPGA configuration is generally written using a [hardware description language](https://en.wikipedia.org/wiki/Hardware_description_language "Hardware description language") (HDL) e.g. [VHDL](https://en.wikipedia.org/wiki/VHDL "VHDL"), similar to the ones used for [application-specific integrated circuits](https://en.wikipedia.org/wiki/Application-specific_integrated_circuit "Application-specific integrated circuit") (ASICs). [Circuit diagrams](https://en.wikipedia.org/wiki/Circuit_diagram "Circuit diagram") were formerly used to write the configuration.

The logic blocks of an FPGA can be configured to perform complex [combinational functions](https://en.wikipedia.org/wiki/Combinational_logic "Combinational logic"), or act as simple [logic gates](https://en.wikipedia.org/wiki/Logic_gate "Logic gate") like [AND](https://en.wikipedia.org/wiki/AND_gate "AND gate") and [XOR](https://en.wikipedia.org/wiki/XOR_gate "XOR gate"). In most FPGAs, logic blocks also include [memory elements](https://en.wikipedia.org/wiki/Memory_cell_\(computing\) "Memory cell (computing)"), which may be simple [flip-flops](https://en.wikipedia.org/wiki/Flip-flop_\(electronics\) "Flip-flop (electronics)") or more sophisticated blocks of memory.[^1] Many FPGAs can be reprogrammed to implement different [logic functions](https://en.wikipedia.org/wiki/Boolean_function "Boolean function"), allowing flexible [reconfigurable computing](https://en.wikipedia.org/wiki/Reconfigurable_computing "Reconfigurable computing") as performed in [computer software](https://en.wikipedia.org/wiki/Computer_software "Computer software").

FPGAs also have a role in [embedded system](https://en.wikipedia.org/wiki/Embedded_system "Embedded system") development due to their capability to start system software development simultaneously with hardware, enable system performance simulations at a very early phase of the development, and allow various system trials and design iterations before finalizing the system architecture.[^2]

FPGAs are also commonly used during the development of ASICs to speed up the simulation process.

## History

The FPGA industry sprouted from [programmable read-only memory](https://en.wikipedia.org/wiki/Programmable_read-only_memory "Programmable read-only memory") (PROM) and [programmable logic devices](https://en.wikipedia.org/wiki/Programmable_logic_device "Programmable logic device") (PLDs). 
PROMs and PLDs both had the option of being programmed in batches in a factory ==or in the field== (field-programmable).[^3]

[Altera](https://en.wikipedia.org/wiki/Altera "Altera") was founded in 1983 and delivered the industry's first reprogrammable logic device in 1984 – the EP300 – which featured a quartz window in the package that allowed users to shine an ultra-violet lamp on the [die](https://en.wikipedia.org/wiki/Die_\(integrated_circuit\) "Die (integrated circuit)") to erase the [EPROM](https://en.wikipedia.org/wiki/EPROM "EPROM") cells that held the device configuration.[^4]

[Xilinx](https://en.wikipedia.org/wiki/Xilinx "Xilinx") produced the first commercially viable field-programmable [gate array](https://en.wikipedia.org/wiki/Gate_array "Gate array") in 1985 [^3] – the XC2064.[^5] The XC2064 had programmable gates and programmable interconnects between gates, the beginnings of a new technology and market.[^6] 
The XC2064 had 64 configurable logic blocks (CLBs), with two three-input [lookup tables](https://en.wikipedia.org/wiki/Lookup_table "Lookup table") (LUTs).[^7]

In 1987, the [Naval Surface Warfare Center](https://en.wikipedia.org/wiki/Naval_Surface_Warfare_Center "Naval Surface Warfare Center") funded an experiment proposed by Steve Casselman to develop a computer that would implement 600,000 reprogrammable gates. Casselman was successful and a patent related to the system was issued in 1992.[^3]

Altera and Xilinx continued unchallenged and quickly grew from 1985 to the mid-1990s when competitors sprouted up, eroding a significant portion of their market share. By 1993, Actel (later [Microsemi](https://en.wikipedia.org/wiki/Microsemi "Microsemi"), now [Microchip](https://en.wikipedia.org/wiki/Microchip_Technology "Microchip Technology")) was serving about 18 percent of the market.[^6]

The 1990s were a period of rapid growth for FPGAs, both in circuit sophistication and the volume of production. In the early 1990s, FPGAs were primarily used in [telecommunications](https://en.wikipedia.org/wiki/Telecommunications "Telecommunications") and [networking](https://en.wikipedia.org/wiki/Computer_network "Computer network"). By the end of the decade, FPGAs found their way into consumer, automotive, and industrial applications.[^8]

By 2013, Altera (31 percent), Xilinx (36 percent) and Actel (10 percent) together represented approximately 77 percent of the FPGA market.[^9]

Companies like Microsoft have started to use FPGAs to accelerate high-performance, computationally intensive systems (like the [data centers](https://en.wikipedia.org/wiki/Data_center "Data center") that operate their [Bing search engine](https://en.wikipedia.org/wiki/Bing_search_engine "Bing search engine")), due to the [performance per watt](https://en.wikipedia.org/wiki/Performance_per_watt "Performance per watt") advantage FPGAs deliver.[^10] Microsoft began using FPGAs to [accelerate](https://en.wikipedia.org/wiki/Hardware_acceleration "Hardware acceleration") Bing in 2014, and in 2018 began deploying FPGAs across other data center workloads for their [Azure](https://en.wikipedia.org/wiki/Microsoft_Azure "Microsoft Azure") [cloud computing](https://en.wikipedia.org/wiki/Cloud_computing "Cloud computing") platform.[^11]

### Growth

The following timelines indicate progress in different aspects of FPGA design.

#### Gates

- 1987: 9,000 gates, Xilinx [^6]
- 1992: 600,000, Naval Surface Warfare Department [^3]
- Early 2000s: millions [^8]
- 2013: 50 million, Xilinx [^12]

#### Market size

- 1985: First commercial FPGA: Xilinx XC2064 [^5] [^6]
- 1987: $14 million [^6]
- c. 1993: >$385 million [^6]
- 2005: $1.9 billion [^13]
- 2010 estimates: $2.75 billion [^13]
- 2013: $5.4 billion [^14]
- 2020 estimate: $9.8 billion [^14]
- 2030 estimate: $23.34 billion [^15]

#### Design starts

A *design start* is a new custom design for implementation on an FPGA.

- 2005: 80,000 [^16]
- 2008: 90,000 [^17]

## Design

Contemporary FPGAs have ample [logic gates](https://en.wikipedia.org/wiki/Logic_gate "Logic gate") and RAM blocks to implement complex digital computations. FPGAs can be used to implement any logical function that an [ASIC](https://en.wikipedia.org/wiki/ASIC "ASIC") can perform. The ability to update the functionality after shipping, [partial re-configuration](https://en.wikipedia.org/wiki/Partial_re-configuration "Partial re-configuration") of a portion of the design [^18] and the low non-recurring engineering costs relative to an ASIC design (notwithstanding the generally higher unit cost), offer advantages for many applications.[^1]

As FPGA designs employ very fast I/O rates and bidirectional data [buses](https://en.wikipedia.org/wiki/Bus_\(computing\) "Bus (computing)"), it becomes a challenge to verify correct timing of valid data within setup time and hold time.[^19] [Floor planning](https://en.wikipedia.org/wiki/Floorplan_\(microelectronics\) "Floorplan (microelectronics)") helps resource allocation within FPGAs to meet these timing constraints.

Some FPGAs have analog features in addition to digital functions. The most common analog feature is a programmable [slew rate](https://en.wikipedia.org/wiki/Slew_rate "Slew rate") on each output pin. This allows the user to set low rates on lightly loaded pins that would otherwise [ring](https://en.wikipedia.org/wiki/Electrical_resonance "Electrical resonance") or [couple](https://en.wikipedia.org/wiki/Coupling_\(electronics\) "Coupling (electronics)") unacceptably, and to set higher rates on heavily loaded high-speed channels that would otherwise run too slowly.[^20] [^21] Also common are quartz- [crystal oscillator](https://en.wikipedia.org/wiki/Crystal_oscillator "Crystal oscillator") driver circuitry, on-chip [RC oscillators](https://en.wikipedia.org/wiki/RC_oscillator "RC oscillator"), and [phase-locked loops](https://en.wikipedia.org/wiki/Phase-locked_loop "Phase-locked loop") with embedded [voltage-controlled oscillators](https://en.wikipedia.org/wiki/Voltage-controlled_oscillator "Voltage-controlled oscillator") used for clock generation and management as well as for high-speed serializer-deserializer (SERDES) transmit clocks and receiver clock recovery. Fairly common are differential [comparators](https://en.wikipedia.org/wiki/Comparator "Comparator") on input pins designed to be connected to [differential signaling](https://en.wikipedia.org/wiki/Differential_signaling "Differential signaling") channels. A few [mixed signal](https://en.wikipedia.org/wiki/Mixed_signal "Mixed signal") FPGAs have integrated peripheral [analog-to-digital converters](https://en.wikipedia.org/wiki/Analog-to-digital_converter "Analog-to-digital converter") (ADCs) and [digital-to-analog converters](https://en.wikipedia.org/wiki/Digital-to-analog_converter "Digital-to-analog converter") (DACs) with analog signal conditioning blocks, allowing them to operate as a [system on a chip](https://en.wikipedia.org/wiki/System_on_a_chip "System on a chip") (SoC).[^22] Such devices blur the line between an FPGA, which carries digital ones and zeros on its internal programmable interconnect fabric, and [field-programmable analog array](https://en.wikipedia.org/wiki/Field-programmable_analog_array "Field-programmable analog array") (FPAA), which carries analog values on its internal programmable interconnect fabric.

### Logic blocks

![[~/×/c25050baa5bf00af92562cd93a4c270f_MD5.png|400]]
`Simplified` example illustration of a logic cell (LUT – lookup table, FA – full adder, DFF – D-type flip-flop )

The most common FPGA architecture consists of an array of [logic blocks](https://en.wikipedia.org/wiki/Logic_block "Logic block") called configurable logic blocks (CLBs) or logic array blocks (LABs) (depending on vendor), [I/O pads](https://en.wikipedia.org/wiki/I/O_address "I/O address"), and routing channels.[^1] 
Generally, all the routing channels have the same width (number of signals). Multiple I/O pads may fit into the height of one row or the width of one column in the array.

"An application circuit must be mapped into an FPGA with adequate resources. While the number of logic blocks and I/Os required is easily determined from the design, the number of routing channels needed may vary considerably even among designs with the same amount of logic. For example, a [crossbar switch](https://en.wikipedia.org/wiki/Crossbar_switch "Crossbar switch") requires much more routing than a [systolic array](https://en.wikipedia.org/wiki/Systolic_array "Systolic array") with the same gate count. Since unused routing channels increase the cost (and decrease the performance) of the FPGA without providing any benefit, FPGA manufacturers try to provide just enough channels so that most designs that will fit in terms of [lookup tables](https://en.wikipedia.org/wiki/Lookup_table#Hardware_LUTs "Lookup table") (LUTs) and I/Os can be [routed](https://en.wikipedia.org/wiki/Routing_\(electronic_design_automation\) "Routing (electronic design automation)"). This is determined by estimates such as those derived from [Rent's rule](https://en.wikipedia.org/wiki/Rent%27s_rule "Rent's rule") or by experiments with existing designs." [^23]

In general, a logic block consists of a few logical cells. A typical cell consists of a 4-input LUT, a [full adder](https://en.wikipedia.org/wiki/Adder_\(electronics\) "Adder (electronics)") (FA) and a [D-type flip-flop](https://en.wikipedia.org/wiki/D-type_flip-flop "D-type flip-flop"). The LUT might be split into two 3-input LUTs. In *normal mode* those are combined into a 4-input LUT through the first [multiplexer](https://en.wikipedia.org/wiki/Multiplexer "Multiplexer") (mux). In *arithmetic* mode, their outputs are fed to the adder. The selection of mode is programmed into the second mux. The output can be either [synchronous](https://en.wikipedia.org/wiki/Synchronous_circuit "Synchronous circuit") or [asynchronous](https://en.wikipedia.org/wiki/Asynchronous_circuit "Asynchronous circuit"), depending on the programming of the third mux. In practice, the entire adder or parts of it are [stored as functions](https://en.wikipedia.org/wiki/Shannon_expansion "Shannon expansion") into the LUTs in order to save [space](https://en.wikipedia.org/wiki/Circuit_utilization "Circuit utilization").[^24] [^25] [^26]

### Hard blocks

Modern FPGA families expand upon the above capabilities to include higher-level functionality fixed in silicon. Having these common functions embedded in the circuit reduces the area required and gives those functions increased performance compared to building them from logical primitives. Examples of these include [multipliers](https://en.wikipedia.org/wiki/Binary_multiplier "Binary multiplier"), generic [DSP blocks](https://en.wikipedia.org/wiki/Digital_signal_processor "Digital signal processor"), [embedded processors](https://en.wikipedia.org/wiki/Microprocessor "Microprocessor"), high-speed I/O logic and embedded [memories](https://en.wikipedia.org/wiki/Computer_memory "Computer memory").

Higher-end FPGAs can contain high-speed [multi-gigabit transceivers](https://en.wikipedia.org/wiki/Multi-gigabit_transceiver "Multi-gigabit transceiver") and *hard IP cores* such as [processor cores](https://en.wikipedia.org/wiki/Processor_core "Processor core"), [Ethernet](https://en.wikipedia.org/wiki/Ethernet "Ethernet") [medium access control units](https://en.wikipedia.org/wiki/Medium_access_control "Medium access control"), [PCI](https://en.wikipedia.org/wiki/Conventional_PCI "Conventional PCI") or [PCI Express](https://en.wikipedia.org/wiki/PCI_Express "PCI Express") controllers, and external [memory controllers](https://en.wikipedia.org/wiki/Memory_controller "Memory controller"). These cores exist alongside the programmable fabric, but they are built out of [transistors](https://en.wikipedia.org/wiki/Transistor "Transistor") instead of LUTs so they have ASIC-level performance and power consumption without consuming a significant amount of fabric resources, leaving more of the fabric free for the application-specific logic. The multi-gigabit transceivers also contain high-performance [signal conditioning](https://en.wikipedia.org/wiki/Signal_conditioning "Signal conditioning") circuitry along with high-speed serializers and deserializers, components that cannot be built out of LUTs. Higher-level physical layer (PHY) functionality such as [line coding](https://en.wikipedia.org/wiki/Line_coding "Line coding") may or may not be implemented alongside the serializers and deserializers in hard logic, depending on the FPGA.

### Soft core

![[~/×/6757f80fb0fb354fd02e958f92026c6a_MD5.jpg]]

A Xilinx Zynq-7000 all-programmable system on a chip

An alternate approach to using hard macro processors is to make use of [soft processor](https://en.wikipedia.org/wiki/Soft_processor "Soft processor") [IP cores](https://en.wikipedia.org/wiki/Semiconductor_intellectual_property_core "Semiconductor intellectual property core") that are implemented within the FPGA logic. [Nios II](https://en.wikipedia.org/wiki/Nios_II "Nios II"), [MicroBlaze](https://en.wikipedia.org/wiki/MicroBlaze "MicroBlaze") and [Mico32](https://en.wikipedia.org/wiki/Mico32 "Mico32") are examples of popular softcore processors. Many modern FPGAs are programmed at *run time*, which has led to the idea of [reconfigurable computing](https://en.wikipedia.org/wiki/Reconfigurable_computing "Reconfigurable computing") or reconfigurable systems – [CPUs](https://en.wikipedia.org/wiki/CPU "CPU") that reconfigure themselves to suit the task at hand. Additionally, new non-FPGA architectures are beginning to emerge. Software-configurable microprocessors such as the Stretch S5000 adopt a hybrid approach by providing an array of processor cores and FPGA-like programmable cores on the same chip.

### Integration

In 2012 the coarse-grained architectural approach was taken a step further by combining the [logic blocks](https://en.wikipedia.org/wiki/Logic_block "Logic block") and interconnects of traditional FPGAs with embedded [microprocessors](https://en.wikipedia.org/wiki/Microprocessor "Microprocessor") and related peripherals to form a complete [system on a programmable chip](https://en.wikipedia.org/wiki/System_on_a_chip "System on a chip"). Examples of such hybrid technologies can be found in the [Xilinx](https://en.wikipedia.org/wiki/Xilinx "Xilinx") Zynq-7000 all [programmable SoC](https://en.wikipedia.org/wiki/Programmable_SoC "Programmable SoC"),[^27] which includes a 1.0 [GHz](https://en.wikipedia.org/wiki/GHz "GHz") dual-core [ARM Cortex-A9](https://en.wikipedia.org/wiki/ARM_Cortex-A9 "ARM Cortex-A9") MPCore processor [embedded](https://en.wikipedia.org/wiki/Embedded_system "Embedded system") within the FPGA's logic fabric,[^28] or in the [Altera](https://en.wikipedia.org/wiki/Altera "Altera") Arria V FPGA, which includes an 800 MHz [dual-core](https://en.wikipedia.org/wiki/Dual-core "Dual-core") [ARM Cortex-A9](https://en.wikipedia.org/wiki/ARM_Cortex-A9 "ARM Cortex-A9") MPCore. The [Atmel](https://en.wikipedia.org/wiki/Atmel "Atmel") FPSLIC is another such device, which uses an [AVR](https://en.wikipedia.org/wiki/Atmel_AVR "Atmel AVR") processor in combination with Atmel's programmable logic architecture. The [Microsemi](https://en.wikipedia.org/wiki/Microsemi "Microsemi") [SmartFusion](https://en.wikipedia.org/wiki/SmartFusion "SmartFusion") devices incorporate an ARM Cortex-M3 hard processor core (with up to 512 kB of [flash](https://en.wikipedia.org/wiki/Flash_memory "Flash memory") and 64 kB of RAM) and analog [peripherals](https://en.wikipedia.org/wiki/Peripheral "Peripheral") such as a multi-channel [analog-to-digital converters](https://en.wikipedia.org/wiki/Analog-to-digital_converter "Analog-to-digital converter") and [digital-to-analog converters](https://en.wikipedia.org/wiki/Digital-to-analog_converter "Digital-to-analog converter") in their [flash memory](https://en.wikipedia.org/wiki/Flash_memory "Flash memory") -based FPGA fabric.

### Clocking

Most of the logic inside of an FPGA is [synchronous circuitry](https://en.wikipedia.org/wiki/Synchronous_circuit "Synchronous circuit") that requires a [clock signal](https://en.wikipedia.org/wiki/Clock_signal "Clock signal"). FPGAs contain dedicated global and regional routing networks for clock and reset, typically implemented as an [H tree](https://en.wikipedia.org/wiki/H_tree "H tree"), so they can be delivered with minimal [skew](https://en.wikipedia.org/wiki/Clock_skew "Clock skew"). FPGAs may contain analog [phase-locked loop](https://en.wikipedia.org/wiki/Phase-locked_loop "Phase-locked loop") or [delay-locked loop](https://en.wikipedia.org/wiki/Delay-locked_loop "Delay-locked loop") components to synthesize new [clock frequencies](https://en.wikipedia.org/wiki/Clock_frequencies "Clock frequencies") and manage [jitter](https://en.wikipedia.org/wiki/Jitter "Jitter"). Complex designs can use multiple clocks with different frequency and phase relationships, each forming separate [clock domains](https://en.wikipedia.org/wiki/Clock_domain "Clock domain"). These clock signals can be generated locally by an oscillator or they can be recovered from a [data stream](https://en.wikipedia.org/wiki/Data_stream "Data stream"). Care must be taken when building [clock domain crossing](https://en.wikipedia.org/wiki/Clock_domain_crossing "Clock domain crossing") circuitry to avoid [metastability](https://en.wikipedia.org/wiki/Metastability_\(electronics\) "Metastability (electronics)"). Some FPGAs contain [dual port RAM](https://en.wikipedia.org/wiki/Dual_port_RAM "Dual port RAM") blocks that are capable of working with different clocks, aiding in the construction of building [FIFOs](https://en.wikipedia.org/wiki/FIFO_\(computing_and_electronics\) "FIFO (computing and electronics)") and dual port buffers that bridge clock domains.

### 3D architectures

To shrink the size and power consumption of FPGAs, vendors such as [Tabula](https://en.wikipedia.org/wiki/Tabula_\(company\) "Tabula (company)") and [Xilinx](https://en.wikipedia.org/wiki/Xilinx "Xilinx") have introduced [3D or stacked architectures](https://en.wikipedia.org/wiki/Three-dimensional_integrated_circuit "Three-dimensional integrated circuit").[^29] [^30] Following the introduction of its [28 nm](https://en.wikipedia.org/w/index.php?title=28_nm&action=edit&redlink=1 "28 nm (page does not exist)") 7-series FPGAs, Xilinx said that several of the highest-density parts in those FPGA product lines will be constructed using multiple dies in one package, employing technology developed for 3D construction and stacked-die assemblies.

Xilinx's approach stacks several (three or four) active FPGA dies side by side on a silicon [interposer](https://en.wikipedia.org/wiki/Interposer "Interposer") – a single piece of silicon that carries passive interconnect.[^30] [^31] The multi-die construction also allows different parts of the FPGA to be created with different process technologies, as the process requirements are different between the FPGA fabric itself and the very high speed 28 Gbit/s serial transceivers. An FPGA built in this way is called a *[heterogeneous](https://en.wikipedia.org/wiki/Heterogeneous_computing "Heterogeneous computing") FPGA*.[^32]

Altera's heterogeneous approach involves using a single monolithic FPGA die and connecting other dies and technologies to the FPGA using Intel's embedded multi\_die interconnect bridge (EMIB) technology.[^33]

## Programming

To define the behavior of the FPGA, the user provides a design in a [hardware description language](https://en.wikipedia.org/wiki/Hardware_description_language "Hardware description language") (HDL) or as a [schematic](https://en.wikipedia.org/wiki/Schematic "Schematic") design. The HDL form is more suited to work with large structures because it's possible to specify high-level functional behavior rather than drawing every piece by hand. However, schematic entry can allow for easier visualization of a design and its [component modules](https://en.wikipedia.org/wiki/Modular_programming "Modular programming").

Using an [electronic design automation](https://en.wikipedia.org/wiki/Electronic_design_automation "Electronic design automation") tool, a technology-mapped [netlist](https://en.wikipedia.org/wiki/Netlist "Netlist") is generated. The netlist can then be fit to the actual FPGA architecture using a process called *[place and route](https://en.wikipedia.org/wiki/Place_and_route "Place and route")*, usually performed by the FPGA company's proprietary place-and-route software. The user will validate the results using [timing analysis](https://en.wikipedia.org/wiki/Static_timing_analysis "Static timing analysis"), [simulation](https://en.wikipedia.org/wiki/Simulation "Simulation"), and other [verification and validation](https://en.wikipedia.org/wiki/Verification_and_validation "Verification and validation") techniques. Once the design and validation process is complete, the binary file generated, typically using the FPGA vendor's proprietary software, is used to (re-)configure the FPGA. This file is transferred to the FPGA via a [serial interface](https://en.wikipedia.org/wiki/Serial_communication "Serial communication") ([JTAG](https://en.wikipedia.org/wiki/JTAG "JTAG")) or to an external memory device such as an [EEPROM](https://en.wikipedia.org/wiki/EEPROM "EEPROM").

The most common HDLs are [VHDL](https://en.wikipedia.org/wiki/VHDL "VHDL") and [Verilog](https://en.wikipedia.org/wiki/Verilog "Verilog"). [National Instruments](https://en.wikipedia.org/wiki/National_Instruments "National Instruments") ' [LabVIEW](https://en.wikipedia.org/wiki/LabVIEW "LabVIEW") graphical programming language (sometimes referred to as *G*) has an FPGA add-in module available to target and program FPGA hardware. Verilog was created to simplify the process making HDL more robust and flexible. Verilog has a C-like syntax, unlike VHDL.[^34]

To simplify the design of complex systems in FPGAs, there exist libraries of predefined complex functions and circuits that have been tested and optimized to speed up the design process. These predefined circuits are commonly called *[intellectual property (IP) cores](https://en.wikipedia.org/wiki/Semiconductor_intellectual_property_core "Semiconductor intellectual property core")*, and are available from FPGA vendors and third-party IP suppliers. They are rarely free, and typically released under proprietary licenses. Other predefined circuits are available from developer communities such as [OpenCores](https://en.wikipedia.org/wiki/OpenCores "OpenCores") (typically released under [free and open source](https://en.wikipedia.org/wiki/Free_and_open_source "Free and open source") licenses such as the [GPL](https://en.wikipedia.org/wiki/GPL "GPL"), [BSD](https://en.wikipedia.org/wiki/BSD_license "BSD license") or similar license). Such designs are known as [open-source hardware](https://en.wikipedia.org/wiki/Open-source_hardware "Open-source hardware").

In a typical [design flow](https://en.wikipedia.org/wiki/Design_flow "Design flow"), an FPGA application developer will simulate the design at multiple stages throughout the design process. Initially the [RTL](https://en.wikipedia.org/wiki/Register-transfer_level "Register-transfer level") description in [VHDL](https://en.wikipedia.org/wiki/VHDL "VHDL") or [Verilog](https://en.wikipedia.org/wiki/Verilog "Verilog") is simulated by creating [test benches](https://en.wikipedia.org/wiki/Test_bench "Test bench") to simulate the system and observe results. Then, after the [synthesis](https://en.wikipedia.org/wiki/Logic_synthesis "Logic synthesis") engine has mapped the design to a netlist, the netlist is translated to a [gate-level](https://en.wikipedia.org/wiki/Logic_gate "Logic gate") description where simulation is repeated to confirm the synthesis proceeded without errors. Finally, the design is laid out in the FPGA at which point [propagation delay](https://en.wikipedia.org/wiki/Propagation_delay "Propagation delay") values can be [back-annotated](https://en.wikipedia.org/wiki/Back_annotation "Back annotation") onto the netlist, and the simulation can be run again with these values.

More recently, [OpenCL](https://en.wikipedia.org/wiki/OpenCL "OpenCL") (Open Computing Language) is being used by programmers to take advantage of the performance and power efficiencies that FPGAs provide. OpenCL allows programmers to develop code in the [C programming language](https://en.wikipedia.org/wiki/C_programming_language "C programming language").[^35] For further information, see [high-level synthesis](https://en.wikipedia.org/wiki/High-level_synthesis "High-level synthesis") and [C to HDL](https://en.wikipedia.org/wiki/C_to_HDL "C to HDL").

Most FPGAs rely on an [SRAM](https://en.wikipedia.org/wiki/Static_random-access_memory "Static random-access memory") -based approach to be programmed. These FPGAs are in-system programmable and re-programmable, but require external boot devices. For example, [flash memory](https://en.wikipedia.org/wiki/Flash_memory "Flash memory") or [EEPROM](https://en.wikipedia.org/wiki/EEPROM "EEPROM") devices may load contents into internal SRAM that controls routing and logic. The SRAM approach is based on [CMOS](https://en.wikipedia.org/wiki/CMOS "CMOS").

Rarer alternatives to the SRAM approach include:

- [Fuse](https://en.wikipedia.org/wiki/Fuse_\(electrical\) "Fuse (electrical)"): one-time programmable. Bipolar. Obsolete.
- [Antifuse](https://en.wikipedia.org/wiki/Antifuse "Antifuse"): one-time programmable. CMOS. Examples: Actel SX and Axcelerator families; Quicklogic Eclipse II family.[^36]
- [PROM](https://en.wikipedia.org/wiki/Programmable_read-only_memory "Programmable read-only memory"): programmable read-only memory technology. One-time programmable because of plastic packaging. Obsolete.
- [EPROM](https://en.wikipedia.org/wiki/EPROM "EPROM"): erasable programmable read-only memory technology. One-time programmable but with window, can be erased with ultraviolet (UV) light. CMOS. Obsolete.
- [EEPROM](https://en.wikipedia.org/wiki/EEPROM "EEPROM"): electrically erasable programmable read-only memory technology. Can be erased, even in plastic packages. Some but not all EEPROM devices can be in-system programmed. CMOS.
- [Flash](https://en.wikipedia.org/wiki/Flash_memory "Flash memory"): flash-erase EPROM technology. Can be erased, even in plastic packages. Some but not all flash devices can be in-system programmed. Usually, a flash cell is smaller than an equivalent EEPROM cell and is, therefore, less expensive to manufacture. CMOS. Example: Actel ProASIC family.[^36]

## Manufacturers

In 2016, long-time industry rivals [Xilinx](https://en.wikipedia.org/wiki/Xilinx "Xilinx") (now part of [AMD](https://en.wikipedia.org/wiki/AMD "AMD")) and [Altera](https://en.wikipedia.org/wiki/Altera "Altera") (now part of [Intel](https://en.wikipedia.org/wiki/Intel "Intel")) were the FPGA market leaders.[^37] At that time, they controlled nearly 90 percent of the market.

Both Xilinx (now AMD) and Altera (now Intel) provide [proprietary](https://en.wikipedia.org/wiki/Proprietary_software "Proprietary software") [electronic design automation](https://en.wikipedia.org/wiki/Electronic_design_automation "Electronic design automation") software for [Windows](https://en.wikipedia.org/wiki/Windows "Windows") and [Linux](https://en.wikipedia.org/wiki/Linux "Linux") ([ISE](https://en.wikipedia.org/wiki/Xilinx_ISE "Xilinx ISE") / [Vivado](https://en.wikipedia.org/wiki/Vivado "Vivado") and [Quartus](https://en.wikipedia.org/wiki/Intel_Quartus_Prime "Intel Quartus Prime")) which enables engineers to [design](https://en.wikipedia.org/wiki/Hardware_design "Hardware design"), analyze, [simulate](https://en.wikipedia.org/wiki/Simulate "Simulate"), and [synthesize](https://en.wikipedia.org/wiki/Logic_synthesis "Logic synthesis") ([compile](https://en.wikipedia.org/wiki/Compile "Compile")) their designs.[^38] [^39]

In March 2010, [Tabula](https://en.wikipedia.org/wiki/Tabula_\(company\) "Tabula (company)") announced their FPGA technology that uses [time-multiplexed](https://en.wikipedia.org/wiki/Time-division_multiplexing "Time-division multiplexing") logic and interconnect that claims potential cost savings for high-density applications.[^40] On March 24, 2015, Tabula officially shut down.[^41]

On June 1, 2015, Intel announced it would acquire Altera for approximately [US$](https://en.wikipedia.org/wiki/US$ "US$") 16.7 billion and completed the acquisition on December 30, 2015.[^42]

On October 27, 2020, AMD announced it would acquire Xilinx [^43] and completed the acquisition valued at about US$50 billion in February 2022.[^44]

In February 2024 Altera became independent of Intel again.[^45]

Other manufacturers include:

- [Achronix](https://en.wikipedia.org/wiki/Achronix "Achronix"), manufacturing SRAM based FPGAs with 1.5 GHz fabric speed [^46]
- [Altium](https://en.wikipedia.org/wiki/Altium "Altium"), provides system-on-FPGA hardware-software design environment.[^47]
- Cologne Chip, German government-backed designer and producer of FPGAs [^48]
- [Efinix](https://en.wikipedia.org/w/index.php?title=Efinix&action=edit&redlink=1 "Efinix (page does not exist)") offers small to medium-sized FPGAs. They combine logic and routing interconnects into a configurable XLR cell.
- [GOWIN Semiconductors](https://en.wikipedia.org/w/index.php?title=GOWIN_Semiconductors&action=edit&redlink=1 "GOWIN Semiconductors (page does not exist)"), manufacturing small and medium-sized SRAM and flash-based FPGAs. They also offer pin-compatible replacements for a few Xilinx, Altera and Lattice products.
- [Lattice Semiconductor](https://en.wikipedia.org/wiki/Lattice_Semiconductor "Lattice Semiconductor") manufactures [low-power](https://en.wikipedia.org/wiki/Low-power_electronics "Low-power electronics") SRAM-based FPGAs featuring integrated configuration flash, [instant-on](https://en.wikipedia.org/wiki/Instant-on "Instant-on") and live [reconfiguration](https://en.wikipedia.org/wiki/Reconfigurable_computing "Reconfigurable computing")
	- [SiliconBlue Technologies](https://en.wikipedia.org/wiki/SiliconBlue_Technologies "SiliconBlue Technologies") provides extremely low-power SRAM-based FPGAs with optional integrated [nonvolatile](https://en.wikipedia.org/wiki/Non-volatile_memory "Non-volatile memory") configuration memory; acquired by Lattice in 2011
- [Microchip](https://en.wikipedia.org/wiki/Microchip_Technology "Microchip Technology"):
	- [Microsemi](https://en.wikipedia.org/wiki/Microsemi "Microsemi") (previously [Actel](https://en.wikipedia.org/wiki/Actel "Actel")), producing antifuse, flash-based, [mixed-signal](https://en.wikipedia.org/wiki/Mixed-signal "Mixed-signal") FPGAs; acquired by Microchip in 2018
	- [Atmel](https://en.wikipedia.org/wiki/Atmel "Atmel"), a second source of some Altera-compatible devices; also FPSLIC mentioned above;[^49] acquired by Microchip in 2016
- QuickLogic manufactures ultra-low-power sensor hubs, extremely-low-powered, low-density SRAM-based FPGAs, with display bridges MIPI and RGB inputs; MIPI, RGB and LVDS outputs.[^50]

## Applications

An FPGA can be used to solve any problem which is [computable](https://en.wikipedia.org/wiki/Computable "Computable"). FPGAs can be used to implement a [soft microprocessor](https://en.wikipedia.org/wiki/Soft_microprocessor "Soft microprocessor"), such as the Xilinx [MicroBlaze](https://en.wikipedia.org/wiki/MicroBlaze "MicroBlaze") or Altera [Nios II](https://en.wikipedia.org/wiki/Nios_II "Nios II"). But their advantage lies in that they are significantly faster for some applications because of their [parallel nature](https://en.wikipedia.org/wiki/Parallel_computing "Parallel computing") and [optimality](https://en.wikipedia.org/wiki/Logic_optimization "Logic optimization") in terms of the number of gates used for certain processes.[^51]

FPGAs were originally introduced as competitors to [CPLDs](https://en.wikipedia.org/wiki/Complex_programmable_logic_device "Complex programmable logic device") to implement [glue logic](https://en.wikipedia.org/wiki/Glue_logic "Glue logic") for [printed circuit boards](https://en.wikipedia.org/wiki/Printed_circuit_board "Printed circuit board"). As their size, capabilities, and speed increased, FPGAs took over additional functions to the point where some are now marketed as full [systems on chips](https://en.wikipedia.org/wiki/Systems_on_chip "Systems on chip") (SoCs). Particularly with the introduction of dedicated [multipliers](https://en.wikipedia.org/wiki/Binary_multiplier "Binary multiplier") into FPGA architectures in the late 1990s, applications that had traditionally been the sole reserve of [digital signal processors](https://en.wikipedia.org/wiki/Digital_signal_processor "Digital signal processor") (DSPs) began to use FPGAs instead.[^52] [^53]

The evolution of FPGAs has motivated an increase in the use of these devices, whose architecture allows the development of hardware solutions optimized for complex tasks, such as 3D MRI image segmentation, 3D discrete wavelet transform, tomographic image reconstruction, or PET/MRI systems.[^54] [^55] The developed solutions can perform intensive computation tasks with parallel processing, are dynamically reprogrammable, and have a low cost, all while meeting the hard real-time requirements associated with medical imaging.

Another trend in the use of FPGAs is [hardware acceleration](https://en.wikipedia.org/wiki/Hardware_acceleration "Hardware acceleration"), where one can use the FPGA to accelerate certain parts of an algorithm and share part of the computation between the FPGA and a general-purpose processor. The search engine [Bing](https://en.wikipedia.org/wiki/Bing_\(search_engine\) "Bing (search engine)") is noted for adopting FPGA acceleration for its search algorithm in 2014.[^56] As of 2018, FPGAs are seeing increased use as [AI accelerators](https://en.wikipedia.org/wiki/AI_accelerator "AI accelerator") including Microsoft's Project Catapult [^11] and for accelerating [artificial neural networks](https://en.wikipedia.org/wiki/Artificial_neural_network "Artificial neural network") for [machine learning](https://en.wikipedia.org/wiki/Machine_learning "Machine learning") applications.

Originally, FPGAs were reserved for specific [vertical applications](https://en.wikipedia.org/wiki/Vertical_application "Vertical application") where the volume of production is small. For these low-volume applications, the premium that companies pay in hardware cost per unit for a programmable chip is more affordable than the development resources spent on creating an ASIC. Often a custom-made chip would be cheaper if made in larger quantities, but FPGAs may be chosen to quickly bring a product to market. By 2017, new cost and performance dynamics broadened the range of viable applications.

Other uses for FPGAs include:

- Space (with [radiation hardening](https://en.wikipedia.org/wiki/Radiation_hardening "Radiation hardening") [^57])
- [Hardware security modules](https://en.wikipedia.org/wiki/Hardware_security_module "Hardware security module") [^58]
- High-speed financial transactions [^59] [^60]
- [Retrocomputing](https://en.wikipedia.org/wiki/Retrocomputing "Retrocomputing") (e.g. the MARS and [MiSTer](https://en.wikipedia.org/wiki/MiSTer "MiSTer") FPGA projects) [^61]
- Large scale integrated [digital differential analyzers](https://en.wikipedia.org/wiki/Digital_differential_analyzer "Digital differential analyzer"), a form of an [analog computer](https://en.wikipedia.org/wiki/Analog_computer "Analog computer") based on digital computing elements [^62]

FPGAs play a crucial role in modern military communications, especially in systems like the [Joint Tactical Radio System](https://en.wikipedia.org/wiki/Joint_Tactical_Radio_System "Joint Tactical Radio System") (JTRS) and in devices from companies such as [Thales](https://en.wikipedia.org/wiki/Thales_Group "Thales Group") and [Harris Corporation](https://en.wikipedia.org/wiki/Harris_Corporation "Harris Corporation"). Their flexibility and programmability make them ideal for military communications, offering customizable and secure signal processing. In the JTRS, used by the US military, FPGAs provide adaptability and real-time processing, crucial for meeting various communication standards and encryption methods.[^63]

## Security

Concerning [hardware security](https://en.wikipedia.org/wiki/Hardware_security "Hardware security"), FPGAs have both advantages and disadvantages as compared to ASICs or secure microprocessors. FPGAs' flexibility makes malicious modifications during [fabrication](https://en.wikipedia.org/wiki/Semiconductor_device_fabrication "Semiconductor device fabrication") a lower risk.[^64] Previously, for many FPGAs, the design [bitstream](https://en.wikipedia.org/wiki/Bitstream "Bitstream") was exposed while the FPGA loads it from external memory, typically during powerup. All major FPGA vendors now offer a spectrum of security solutions to designers such as bitstream [encryption](https://en.wikipedia.org/wiki/Encryption "Encryption") and [authentication](https://en.wikipedia.org/wiki/Authentication "Authentication"). For example, [Altera](https://en.wikipedia.org/wiki/Altera "Altera") and [Xilinx](https://en.wikipedia.org/wiki/Xilinx "Xilinx") offer [AES](https://en.wikipedia.org/wiki/Advanced_Encryption_Standard "Advanced Encryption Standard") encryption (up to 256-bit) for bitstreams stored in an external flash memory. [Physical unclonable functions](https://en.wikipedia.org/wiki/Physical_unclonable_function "Physical unclonable function") (PUFs) are integrated circuits that have their own unique signatures and can be used to secure FPGAs while taking up very little hardware space.[^65]

FPGAs that store their configuration internally in nonvolatile flash memory, such as [Microsemi](https://en.wikipedia.org/wiki/Microsemi "Microsemi") 's ProAsic 3 or [Lattice](https://en.wikipedia.org/wiki/Lattice_Semiconductor "Lattice Semiconductor") 's XP2 programmable devices, do not expose the bitstream and do not need [encryption](https://en.wikipedia.org/wiki/Encryption "Encryption"). In addition, flash memory for a [lookup table](https://en.wikipedia.org/wiki/Lookup_table "Lookup table") provides [single event upset](https://en.wikipedia.org/wiki/Single_event_upset "Single event upset") protection for space applications. Customers wanting a higher guarantee of tamper resistance can use write-once, antifuse FPGAs from vendors such as [Microsemi](https://en.wikipedia.org/wiki/Microsemi "Microsemi").

With its Stratix 10 FPGAs and SoCs, [Altera](https://en.wikipedia.org/wiki/Altera "Altera") introduced a Secure Device Manager and [physical unclonable functions](https://en.wikipedia.org/wiki/Physical_unclonable_function "Physical unclonable function") to provide high levels of protection against physical attacks.[^66]

In 2012 researchers Sergei Skorobogatov and Christopher Woods demonstrated that some FPGAs can be vulnerable to hostile intent. They discovered a critical [backdoor](https://en.wikipedia.org/wiki/Backdoor_\(computing\) "Backdoor (computing)") [vulnerability](https://en.wikipedia.org/wiki/Vulnerability_\(computing\) "Vulnerability (computing)") had been manufactured in silicon as part of the Actel/Microsemi ProAsic 3 making it vulnerable on many levels such as reprogramming crypto and [access keys](https://en.wikipedia.org/wiki/Access_key "Access key"), accessing unencrypted bitstream, modifying [low-level](https://en.wikipedia.org/wiki/Low-level "Low-level") silicon features, and extracting [configuration](https://en.wikipedia.org/wiki/Computer_configuration "Computer configuration") data.[^67]

In 2020 a critical vulnerability (named "Starbleed") was discovered in all Xilinx 7 series FPGAs that rendered bitstream encryption useless. There is no workaround. Xilinx did not produce a hardware revision. Ultrascale and later devices, already on the market at the time, were not affected.

Historically, FPGAs have been slower, less energy efficient and generally achieved less functionality than their fixed ASIC counterparts. A study from 2006 showed that designs implemented on FPGAs need on average 40 times as much area, draw 12 times as much dynamic power, and run at one third the speed of corresponding ASIC implementations.[^68]

Advantages of FPGAs include the ability to re-program when already deployed (i.e. "in the field") to fix [bugs](https://en.wikipedia.org/wiki/Bug_\(computer_programming\) "Bug (computer programming)"), and often include shorter [time to market](https://en.wikipedia.org/wiki/Time_to_market "Time to market") and lower [non-recurring engineering](https://en.wikipedia.org/wiki/Non-recurring_engineering "Non-recurring engineering") costs. Vendors can also take a middle road via [FPGA prototyping](https://en.wikipedia.org/wiki/FPGA_prototyping "FPGA prototyping"): developing their prototype hardware on FPGAs, but manufacture their final version as an ASIC so that it can no longer be modified after the design has been committed. This is often also the case with new processor designs.[^69] Some FPGAs have the capability of [partial re-configuration](https://en.wikipedia.org/wiki/Partial_re-configuration "Partial re-configuration") that lets one portion of the device be re-programmed while other portions continue running.[^70] [^71]

The primary differences between [complex programmable logic devices](https://en.wikipedia.org/wiki/Complex_programmable_logic_device "Complex programmable logic device") (CPLDs) and FPGAs are [architectural](https://en.wikipedia.org/wiki/Computer_architecture "Computer architecture"). A CPLD has a comparatively restrictive structure consisting of one or more programmable [sum-of-products](https://en.wikipedia.org/wiki/Canonical_normal_form "Canonical normal form") logic arrays feeding a relatively small number of clocked [registers](https://en.wikipedia.org/wiki/Register_\(computing\) "Register (computing)"). As a result, CPLDs are less flexible but have the advantage of more predictable [timing delays](https://en.wikipedia.org/wiki/Latency_\(engineering\) "Latency (engineering)") and a higher logic-to-interconnect ratio. FPGA architectures, on the other hand, are dominated by [interconnect](https://en.wikipedia.org/wiki/Communications_subsystem "Communications subsystem"). This makes them far more flexible (in terms of the range of designs that are practical for implementation on them) but also far more complex to design for, or at least requiring more complex [electronic design automation](https://en.wikipedia.org/wiki/Electronic_design_automation "Electronic design automation") (EDA) software. In practice, the distinction between FPGAs and CPLDs is often one of size as FPGAs are usually much larger in terms of resources than CPLDs. Typically only FPGAs contain more complex [embedded functions](https://en.wikipedia.org/wiki/Functional_unit "Functional unit") such as [adders](https://en.wikipedia.org/wiki/Adder_\(electronics\) "Adder (electronics)"), [multipliers](https://en.wikipedia.org/wiki/Binary_multiplier "Binary multiplier"), [memory](https://en.wikipedia.org/wiki/Computer_memory "Computer memory"), and [serializer/deserializers](https://en.wikipedia.org/wiki/SerDes "SerDes"). Another common distinction is that CPLDs contain embedded [flash memory](https://en.wikipedia.org/wiki/Flash_memory "Flash memory") to store their configuration while FPGAs usually require external [non-volatile memory](https://en.wikipedia.org/wiki/Non-volatile_memory "Non-volatile memory") (but not always). When a design requires simple instant-on [(logic is already configured at power-up)](https://en.wikipedia.org/wiki/Glue_logic "Glue logic") CPLDs are generally preferred. For most other applications FPGAs are generally preferred. Sometimes both CPLDs and FPGAs are used in a single system design. In those designs, CPLDs generally perform glue logic functions and are responsible for " [booting](https://en.wikipedia.org/wiki/Booting "Booting") " the FPGA as well as controlling [reset](https://en.wikipedia.org/wiki/Reset_\(computing\) "Reset (computing)") and boot sequence of the complete circuit board. Therefore, depending on the application it may be judicious to use both FPGAs and CPLDs in a single design.[^72]

## See also

- [FPGA Mezzanine Card](https://en.wikipedia.org/wiki/FPGA_Mezzanine_Card "FPGA Mezzanine Card")
- [CRUVI FPGA Card](https://en.wikipedia.org/wiki/CRUVI_FPGA_Card "CRUVI FPGA Card") FPGA daughter card standard of Standardization Group for Embedded Technologies e.V. (SGET)
- [List of HDL simulators](https://en.wikipedia.org/wiki/List_of_HDL_simulators "List of HDL simulators")

## References

## Further reading

- Sadrozinski, Hartmut F.-W.; Wu, Jinyuan (2010). *Applications of Field-Programmable Gate Arrays in Scientific Research*. Taylor & Francis. [ISBN](https://en.wikipedia.org/wiki/ISBN_\(identifier\) "ISBN (identifier)") [978-1-4398-4133-4](https://en.wikipedia.org/wiki/Special:BookSources/978-1-4398-4133-4 "Special:BookSources/978-1-4398-4133-4").
- Wirth, Niklaus (1995). *Digital Circuit Design An Introduction Textbook*. Springer. [ISBN](https://en.wikipedia.org/wiki/ISBN_\(identifier\) "ISBN (identifier)") [978-3-540-58577-0](https://en.wikipedia.org/wiki/Special:BookSources/978-3-540-58577-0 "Special:BookSources/978-3-540-58577-0").
- Mitra, Jubin (2018). ["An FPGA-Based Phase Measurement System"](https://doi.org/10.1109%2FTVLSI.2017.2758807). *IEEE Transactions on Very Large Scale Integration (VLSI) Systems*. **26**. IEEE: 133– 142. [doi](https://en.wikipedia.org/wiki/Doi_\(identifier\) "Doi (identifier)"):[10.1109/TVLSI.2017.2758807](https://doi.org/10.1109%2FTVLSI.2017.2758807). [S2CID](https://en.wikipedia.org/wiki/S2CID_\(identifier\) "S2CID (identifier)") [4920719](https://api.semanticscholar.org/CorpusID:4920719).
- Mencer, Oskar et al. (2020). "The history, status, and future of FPGAs". Communications of the ACM. ACM. Vol. 63, No. 10. [doi:10.1145/3410669](https://doi.org/10.1145/3410669 "doi:10.1145/3410669")

## External links

- [What is an FPGA?](https://www.youtube.com/watch?v=gUsHwi4M4xE) on [YouTube](https://en.wikipedia.org/wiki/YouTube_video_\(identifier\) "YouTube video (identifier)")
- [Migrating from MCU to FPGA](https://www.ikalogic.com/2023/02/18/migrating-from-mcu-to-fpga.html)

[^1]: ["FPGA Architecture for the Challenge"](http://www.eecg.toronto.edu/~vaughn/challenge/fpga_arch.html). *toronto.edu*. [University of Toronto](https://en.wikipedia.org/wiki/University_of_Toronto "University of Toronto").

[^2]: Simpson, P. A. (2015). *FPGA Design, Best Practices for Team Based Reuse, 2nd edition*. Switzerland: Springer International Publishing AG. p. 16. [ISBN](https://en.wikipedia.org/wiki/ISBN_\(identifier\) "ISBN (identifier)") [978-3-319-17924-7](https://en.wikipedia.org/wiki/Special:BookSources/978-3-319-17924-7 "Special:BookSources/978-3-319-17924-7").

[^3]: ["History of FPGAs"](https://web.archive.org/web/20070412183416/http://filebox.vt.edu/users/tmagin/history.htm). Archived from [the original](http://filebox.vt.edu/users/tmagin/history.htm) on April 12, 2007. Retrieved 2013-07-11.

[^4]: Ron Wilson (21 April 2015). ["In the Beginning"](https://web.archive.org/web/20150421045728/https://www.altera.com/solutions/technology/system-design/articles/_2013/in-the-beginning.html). *altera.com*. Archived from [the original](https://www.altera.com/solutions/technology/system-design/articles/_2013/in-the-beginning.html) on 2015-04-21.

[^5]: ["XCELL issue 32"](http://www.xilinx.com/publications/archives/xcell/Xcell32.pdf) (PDF). Xilinx. [Archived](https://web.archive.org/web/20110107140043/http://www.xilinx.com/publications/archives/xcell/Xcell32.pdf) (PDF) from the original on 2011-01-07.

[^6]: Funding Universe. " [Xilinx, Inc.](http://www.fundinguniverse.com/company-histories/Xilinx-Inc-Company-History.html)" Retrieved January 15, 2009.

[^7]: Clive Maxfield, Programmable Logic DesignLine, " [Xilinx unveil revolutionary 65nm FPGA architecture: the Virtex-5 family](http://www.pldesignline.com/products/187203173) [Archived](https://web.archive.org/web/20091225212024/http://www.pldesignline.com/products/187203173) 2009-12-25 at the [Wayback Machine](https://en.wikipedia.org/wiki/Wayback_Machine "Wayback Machine"). May 15, 2006. Retrieved February 5, 2009.

[^8]: Maxfield, Clive (2004). [*The Design Warrior's Guide to FPGAs: Devices, Tools and Flows*](https://books.google.com/books?id=ZOadcQAACAAJ&pg=PA4). Elsevier. p. 4. [ISBN](https://en.wikipedia.org/wiki/ISBN_\(identifier\) "ISBN (identifier)") [978-0-7506-7604-5](https://en.wikipedia.org/wiki/Special:BookSources/978-0-7506-7604-5 "Special:BookSources/978-0-7506-7604-5").

[^9]: ["Top FPGA Companies For 2013"](https://web.archive.org/web/20150709173535/http://sourcetech411.com/2013/04/top-fpga-companies-for-2013/). *sourcetech411.com*. 2013-04-28. Archived from [the original](http://sourcetech411.com/2013/04/top-fpga-companies-for-2013/) on 2015-07-09. Retrieved 2015-07-08.

[^10]: ["Microsoft Supercharges Bing Search With Programmable Chips"](https://www.wired.com/2014/06/microsoft-fpga/). *WIRED*. 16 June 2014.

[^11]: ["Project Catapult"](https://www.microsoft.com/en-us/research/project/project-catapult/). *Microsoft Research*. July 2018.

[^12]: Maxfield, Max. ["Xilinx UltraScale FPGA Offers 50 Million Equivalent ASIC Gates"](https://www.eetimes.com/document.asp?doc_id=1320345). *www.eetimes.com*. EE Times.

[^13]: Dylan McGrath, *EE Times*, " [FPGA Market to Pass $2.7 Billion by '10, In-Stat Says](http://www.eetimes.com/news/design/business/showArticle.jhtml?articleID=188102617) ". May 24, 2006. Retrieved February 5, 2009.

[^14]: ["Global FPGA Market Analysis And Segment Forecasts To 2020 – FPGA Industry, Outlook, Size, Application, Product, Share, Growth Prospects, Key Opportunities, Dynamics, Trends, Analysis, FPGA Report – Grand View Research Inc"](http://www.grandviewresearch.com/industry-analysis/fpga-market). *grandviewresearch.com*.

[^15]: ["Field Programmable Gate Array Market To Reach $23.34Bn By 2030"](https://www.grandviewresearch.com/press-release/global-fpga-market). *www.grandviewresearch.com*. Retrieved 2024-04-25.

[^16]: Dylan McGrath, *EE Times*, " [Gartner Dataquest Analyst Gives ASIC, FPGA Markets Clean Bill of Health](http://www.eetimes.com/conf/dac/showArticle.jhtml?articleID=164302400) ". June 13, 2005. Retrieved February 5, 2009.

[^17]: ["Virtex-4 Family Overview"](http://www.xilinx.com/support/documentation/data_sheets/ds112.pdf) (PDF). *xilinx.com*. [Archived](https://web.archive.org/web/20071122080100/http://www.xilinx.com/support/documentation/data_sheets/ds112.pdf) (PDF) from the original on 2007-11-22. Retrieved 14 April 2018.

[^18]: Wisniewski, Remigiusz (2009). [*Synthesis of compositional microprogram control units for programmable devices*](http://zbc.uz.zgora.pl/Content/27955). Zielona Góra: University of Zielona Góra. p. 153. [ISBN](https://en.wikipedia.org/wiki/ISBN_\(identifier\) "ISBN (identifier)") [978-83-7481-293-1](https://en.wikipedia.org/wiki/Special:BookSources/978-83-7481-293-1 "Special:BookSources/978-83-7481-293-1").

[^19]: Oklobdzija, Vojin G. (2017). [*Digital Design and Fabrication*](https://books.google.com/books?id=VOnyWUUUj04C&dq=fpga+logic+gates+ram+blocks&pg=SA9-PA6). CRC Press. [ISBN](https://en.wikipedia.org/wiki/ISBN_\(identifier\) "ISBN (identifier)") [9780849386046](https://en.wikipedia.org/wiki/Special:BookSources/9780849386046 "Special:BookSources/9780849386046").

[^20]: ["FPGA Signal Integrity tutorial"](https://web.archive.org/web/20160307162907/http://wiki.altium.com/display/adoh/fpga+si+tutorial+-+simulating+the+reflection+characteristics). *altium.com*. Archived from [the original](http://wiki.altium.com/display/ADOH/FPGA+SI+Tutorial+-+Simulating+the+Reflection+Characteristics) on 2016-03-07. Retrieved 2010-06-15.

[^21]: [NASA: FPGA drive strength](http://klabs.org/richcontent/fpga_content/DesignNotes/signal_quality/actel_drive_strength/index.htm) [Archived](https://web.archive.org/web/20101205230408/http://klabs.org/richcontent/fpga_content/DesignNotes/signal_quality/actel_drive_strength/index.htm) 2010-12-05 at the [Wayback Machine](https://en.wikipedia.org/wiki/Wayback_Machine "Wayback Machine")

[^22]: Mike Thompson (2007-07-02). ["Mixed-signal FPGAs provide GREEN POWER"](https://www.design-reuse.com/articles/16197/mixed-signal-fpgas-provide-green-power.html). *Design & Reuse*.

[^23]: M.b, Swami; V.p, Pawar (2014-07-31). ["VLSI DESIGN: A NEW APPROACH"](https://bioinfopublication.org/pages/article.php?id=BIA0002301). *Journal of Intelligence Systems*. **4** (1): 60– 63. [ISSN](https://en.wikipedia.org/wiki/ISSN_\(identifier\) "ISSN (identifier)") [2229-7057](https://search.worldcat.org/issn/2229-7057).

[^24]: [2\. CycloneII Architecture](http://www.altera.com/literature/hb/cyc2/cyc2_cii51002.pdf). Altera. February 2007

[^25]: ["Documentation: Stratix IV Devices"](https://web.archive.org/web/20110926214034/http://www.altera.com/literature/hb/stratix-iv/stx4_5v1_01.pdf) (PDF). Altera.com. 2008-06-11. Archived from [the original](http://www.altera.com/literature/hb/stratix-iv/stx4_5v1_01.pdf) (PDF) on 2011-09-26. Retrieved 2013-05-01.

[^26]: [Virtex-4 FPGA User Guide](http://www.xilinx.com/support/documentation/user_guides/ug070.pdf) (December 1st, 2008). Xilinx, Inc.

[^27]: ["Xilinx Inc, Form 8-K, Current Report, Filing Date Oct 19, 2011"](http://edgar.secdatabase.com/520/95012311090713/filing-main.htm). secdatabase.com. Retrieved May 6, 2018.

[^28]: ["Xilinx Inc, Form 10-K, Annual Report, Filing Date May 31, 2011"](http://edgar.secdatabase.com/1249/95012311055454/filing-main.htm). secdatabase.com. Retrieved May 6, 2018.

[^29]: Dean Takahashi, VentureBeat. " [Intel connection helped chip startup Tabula raise $108M](https://venturebeat.com/2011/05/02/intel-connection-helped-chip-startup-tabula-raise-108m)." May 2, 2011. Retrieved May 13, 2011.

[^30]: Lawrence Latif, The Inquirer. " [FPGA manufacturer claims to beat Moore's Law](https://web.archive.org/web/20101029124903/http://www.theinquirer.net/inquirer/news/1811460/fpga-manufacturer-claims-beat-moores-law)." October 27, 2010. Retrieved May 12, 2011.

[^31]: EDN Europe. " [Xilinx adopts stacked-die 3D packaging](http://www.edn-europe.com/xilinxadoptsstackeddie3dpackaging+article+4461+Europe.html) [Archived](https://web.archive.org/web/20110219182606/http://www.edn-europe.com/xilinxadoptsstackeddie3dpackaging+article+4461+Europe.html) 2011-02-19 at the [Wayback Machine](https://en.wikipedia.org/wiki/Wayback_Machine "Wayback Machine")." November 1, 2010. Retrieved May 12, 2011.

[^32]: Saban, Kirk (December 11, 2012). ["Xilinx Stacked Silicon Interconnect Technology Delivers Breakthrough FPGA Capacity, Bandwidth, and Power Efficiency"](https://www.xilinx.com/support/documentation/white_papers/wp380_Stacked_Silicon_Interconnect_Technology.pdf) (PDF). *xilinx.com*. [Archived](https://web.archive.org/web/20101105113516/http://www.xilinx.com/support/documentation/white_papers/wp380_Stacked_Silicon_Interconnect_Technology.pdf) (PDF) from the original on 2010-11-05. Retrieved 2018-11-30.

[^33]: ["Intel Custom Foundry EMIB"](https://web.archive.org/web/20150713230215/http://www.intel.com/content/www/us/en/foundry/emib.html). *Intel*. Archived from [the original](http://www.intel.com/content/www/us/en/foundry/emib.html) on 2015-07-13. Retrieved 2015-07-13.

[^34]: ["Battle Over the FPGA: VHDL vs Verilog! Who is the True Champ?"](https://web.archive.org/web/20201226074106/https://blog.digilentinc.com/battle-over-the-fpga-vhdl-vs-verilog-who-is-the-true-champ/). *digilentinc.com*. Archived from [the original](https://blog.digilentinc.com/battle-over-the-fpga-vhdl-vs-verilog-who-is-the-true-champ/) on 2020-12-26. Retrieved 2020-12-16.

[^35]: ["Why use OpenCL on FPGAs?"](https://web.archive.org/web/20170101125857/https://streamcomputing.eu/blog/2014-09-16/use-opencl-fpgas/). *StreamComputing*. 2014-09-16. Archived from [the original](http://streamcomputing.eu/blog/2014-09-16/use-opencl-fpgas/) on 2017-01-01. Retrieved 2015-07-17.

[^36]: ["All about FPGAs"](https://www.edn.com/all-about-fpgas/). 21 March 2006.

[^37]: Dillien, Paul (March 6, 2017). *EETimes*. Archived from on January 5, 2019. Retrieved September 7, 2017.

[^38]: ["Xilinx ISE Design Suite"](https://www.xilinx.com/products/design-tools/ise-design-suite.html). *www.xilinx.com*. Retrieved 2018-12-01.

[^39]: ["FPGA Design Software - Intel Quartus Prime"](https://www.altera.com/products/design-software/fpga-design/quartus-prime/overview.html). *Intel*. Retrieved 2018-12-01.

[^40]: ["Tabula's Time Machine — Micro Processor Report"](https://web.archive.org/web/20110410094902/http://www.tabula.com/news/M11_Tabula_Reprint.pdf) (PDF). Archived from [the original](http://www.tabula.com/news/M11_Tabula_Reprint.pdf) (PDF) on 2011-04-10.

[^41]: [Tabula to shut down; 120 jobs lost at fabless chip company](http://www.bizjournals.com/sanjose/news/2015/02/11/tabula-to-shut-down-120-jobs-lost-at-fabless-chip.html) Silicon Valley Business Journal

[^42]: ["Intel to buy Altera for $16.7 billion in its biggest deal ever"](https://www.reuters.com/article/us-altera-m-a-intel-idUSKBN0OH2E020150601). *Reuters*. June 2015.

[^43]: ["AMD to Acquire Xilinx, Creating the Industry's High Performance Computing Leader"](https://www.amd.com/en/press-releases/2020-10-27-amd-to-acquire-xilinx-creating-the-industry-s-high-performance-computing). October 2020.

[^44]: ["AMD closes record chip industry deal with estimated $50 billion purchase of Xilinx"](https://www.reuters.com/technology/amd-closes-biggest-chip-acquisition-with-498-bln-purchase-xilinx-2022-02-14/). *Reuters*. February 2022.

[^45]: ["Intel Launches Altera, Its New Standalone FPGA Company"](https://www.intel.com/content/www/us/en/newsroom/news/intel-launches-altera-standalone-fpga-operation.html). *Intel* (Press release). Retrieved 2024-02-29.

[^46]: ["Achronix to Use Intel's 22nm Manufacturing"](https://web.archive.org/web/20150930082224/http://newsroom.intel.com/community/intel_newsroom/blog/2010/11/01/chip-shot-achronix-to-use-intel-s-22nm-manufacturing). *Intel Newsroom* (Press release). 2010-11-01. Archived from [the original](http://newsroom.intel.com/community/intel_newsroom/blog/2010/11/01/chip-shot-achronix-to-use-intel-s-22nm-manufacturing) on 2015-09-30. Retrieved 2018-12-01.

[^47]: Maxfield, Clive (16 June 2004). [*The Design Warrior's Guide to FPGAs*](https://books.google.com/books?id=dnuwr2xOFpUC&dq=fpga+altium&pg=PA117). Elsevier Science. [ISBN](https://en.wikipedia.org/wiki/ISBN_\(identifier\) "ISBN (identifier)") [9780080477138](https://en.wikipedia.org/wiki/Special:BookSources/9780080477138 "Special:BookSources/9780080477138").

[^48]: ["About the company – Cologne Chip"](https://colognechip.com/about-the-company/). Retrieved 2024-02-27.

[^49]: ["Top FPGA Companies For 2013"](https://web.archive.org/web/20180824135219/https://sourcetech411.com/2013/04/top-fpga-companies-for-2013/). *SourceTech411*. 2013-04-28. Archived from [the original](http://sourcetech411.com/2013/04/top-fpga-companies-for-2013/) on 2018-08-24. Retrieved 2018-12-01.

[^50]: ["QuickLogic — Customizable Semiconductor Solutions for Mobile Devices"](http://www.quicklogic.com/). *www.quicklogic.com*. QuickLogic Corporation. Retrieved 2018-10-07.

[^51]: ["Xilinx Inc, Form 8-K, Current Report, Filing Date Apr 26, 2006"](http://edgar.secdatabase.com/657/110465906027899/filing-main.htm). secdatabase.com. Retrieved May 6, 2018.

[^52]: ["Publications and Presentations"](https://web.archive.org/web/20100821182813/http://www.bdti.com/articles/info_eet0207fpga.htm). *bdti.com*. Archived from [the original](https://www.bdti.com/articles/info_eet0207fpga.htm) on 2010-08-21. Retrieved 2018-11-02.

[^53]: LaPedus, Mark (5 February 2007). ["Xilinx aims 65-nm FPGAs at DSP applications"](https://www.eetimes.com/xilinx-aims-65-nm-fpgas-at-dsp-applications/#). *EETimes*.

[^54]: Alcaín, Eduardo; Fernández, Pedro R.; Nieto, Rubén; Montemayor, Antonio S.; Vilas, Jaime; Galiana-Bordera, Adrian; Martinez-Girones, Pedro Miguel; Prieto-de-la-Lastra, Carmen; Rodriguez-Vila, Borja; Bonet, Marina; Rodriguez-Sanchez, Cristina (2021-12-15). ["Hardware Architectures for Real-Time Medical Imaging"](https://doi.org/10.3390%2Felectronics10243118). *Electronics*. **10** (24): 3118. [doi](https://en.wikipedia.org/wiki/Doi_\(identifier\) "Doi (identifier)"):[10.3390/electronics10243118](https://doi.org/10.3390%2Felectronics10243118). [ISSN](https://en.wikipedia.org/wiki/ISSN_\(identifier\) "ISSN (identifier)") [2079-9292](https://search.worldcat.org/issn/2079-9292).

[^55]: Nagornov, Nikolay N.; Lyakhov, Pavel A.; Valueva, Maria V.; Bergerman, Maxim V. (2022). ["RNS-Based FPGA Accelerators for High-Quality 3D Medical Image Wavelet Processing Using Scaled Filter Coefficients"](https://doi.org/10.1109%2FACCESS.2022.3151361). *IEEE Access*. **10**: 19215– 19231. [Bibcode](https://en.wikipedia.org/wiki/Bibcode_\(identifier\) "Bibcode (identifier)"):[2022IEEEA..1019215N](https://ui.adsabs.harvard.edu/abs/2022IEEEA..1019215N). [doi](https://en.wikipedia.org/wiki/Doi_\(identifier\) "Doi (identifier)"):[10.1109/ACCESS.2022.3151361](https://doi.org/10.1109%2FACCESS.2022.3151361). [ISSN](https://en.wikipedia.org/wiki/ISSN_\(identifier\) "ISSN (identifier)") [2169-3536](https://search.worldcat.org/issn/2169-3536). [S2CID](https://en.wikipedia.org/wiki/S2CID_\(identifier\) "S2CID (identifier)") [246895876](https://api.semanticscholar.org/CorpusID:246895876).

[^56]: Morgan, Timothy Pricket (2014-09-03). ["How Microsoft Is Using FPGAs To Speed Up Bing Search"](https://www.enterprisetech.com/2014/09/03/microsoft-using-fpgas-speed-bing-search/). Enterprise Tech. Retrieved 2018-09-18.

[^57]: ["FPGA development devices for radiation-hardened space applications introduced by Microsemi"](https://www.militaryaerospace.com/articles/2016/06/radiation-hardened-space-fpga.html). *www.militaryaerospace.com*. 2016-06-03. Retrieved 2018-11-02.

[^58]: ["CrypTech: Building Transparency into Cryptography t"](https://cryptech.is/wp-content/uploads/2016/02/CrypTech_Building_Transparency.pdf) (PDF). [Archived](https://web.archive.org/web/20160807180252/https://cryptech.is/wp-content/uploads/2016/02/CrypTech_Building_Transparency.pdf) (PDF) from the original on 2016-08-07.

[^59]: Mann, Tobias (2023-03-08). ["While Intel XPUs are delayed, here's some more FPGAs to tide you over"](https://www.theregister.com/2023/03/08/intel_fpga_agilex/). *The Register*.

[^60]: Leber, Christian; Geib, Benjamin; Litz, Heiner (September 2011). [*High Frequency Trading Acceleration Using FPGAs*](https://ieeexplore.ieee.org/document/6044837). International Conference on Field Programmable Logic and Applications. IEEE. [doi](https://en.wikipedia.org/wiki/Doi_\(identifier\) "Doi (identifier)"):[10.1109/FPL.2011.64](https://doi.org/10.1109%2FFPL.2011.64).

[^61]: ["The DIY MiSTer Handheld"](https://www.retrorgb.com/the-diy-mister-handheld.html). 16 December 2024.

[^62]: [DDA on FPGA - A modern Analog Computer](https://people.ece.cornell.edu/land/courses/ece5760/DDA/index.htm)

[^63]: ["Software-defined radio and JTRS"](https://www.militaryaerospace.com/computers/article/16710419/softwaredefined-radio-and-jtrs). *Military Aerospace*. 2004-12-01. Retrieved 2024-01-17.

[^64]: Huffmire, Ted; Brotherton, Brett; Sherwood, Timothy; Kastner, Ryan; Levin, Timothy; Nguyen, Thuy D.; Irvine, Cynthia (2008). "Managing Security in FPGA-Based Embedded Systems". *IEEE Design & Test of Computers*. **25** (6): 590– 598. [doi](https://en.wikipedia.org/wiki/Doi_\(identifier\) "Doi (identifier)"):[10.1109/MDT.2008.166](https://doi.org/10.1109%2FMDT.2008.166). [hdl](https://en.wikipedia.org/wiki/Hdl_\(identifier\) "Hdl (identifier)"):[10945/7159](https://hdl.handle.net/10945%2F7159). [S2CID](https://en.wikipedia.org/wiki/S2CID_\(identifier\) "S2CID (identifier)") [115840](https://api.semanticscholar.org/CorpusID:115840).

[^65]: Babaei, Armin; Schiele, Gregor; Zohner, Michael (2022-07-26). ["Reconfigurable Security Architecture (RESA) Based on PUF for FPGA-Based IoT Devices"](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC9331300). *Sensors*. **22** (15): 5577. [Bibcode](https://en.wikipedia.org/wiki/Bibcode_\(identifier\) "Bibcode (identifier)"):[2022Senso..22.5577B](https://ui.adsabs.harvard.edu/abs/2022Senso..22.5577B). [doi](https://en.wikipedia.org/wiki/Doi_\(identifier\) "Doi (identifier)"):[10.3390/s22155577](https://doi.org/10.3390%2Fs22155577). [ISSN](https://en.wikipedia.org/wiki/ISSN_\(identifier\) "ISSN (identifier)") [1424-8220](https://search.worldcat.org/issn/1424-8220). [PMC](https://en.wikipedia.org/wiki/PMC_\(identifier\) "PMC (identifier)") [9331300](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC9331300). [PMID](https://en.wikipedia.org/wiki/PMID_\(identifier\) "PMID (identifier)") [35898079](https://pubmed.ncbi.nlm.nih.gov/35898079).

[^66]: ["EETimes on PUF: Security features for non-security experts – Intrinsic ID"](https://web.archive.org/web/20150713093531/https://www.intrinsic-id.com/eetimes-security-features-for-non-security-experts/). *Intrinsic ID*. 2015-06-09. Archived from [the original](https://www.intrinsic-id.com/eetimes-security-features-for-non-security-experts/) on 2015-07-13. Retrieved 2015-07-12.

[^67]: Skorobogatov, Sergei; Woods, Christopher (2012). "Breakthrough Silicon Scanning Discovers Backdoor in Military Chip". *Cryptographic Hardware and Embedded Systems – CHES 2012*. Lecture Notes in Computer Science. Vol. 7428. pp. 23– 40. [doi](https://en.wikipedia.org/wiki/Doi_\(identifier\) "Doi (identifier)"):[10.1007/978-3-642-33027-8\_2](https://doi.org/10.1007%2F978-3-642-33027-8_2). [ISBN](https://en.wikipedia.org/wiki/ISBN_\(identifier\) "ISBN (identifier)") [978-3-642-33026-1](https://en.wikipedia.org/wiki/Special:BookSources/978-3-642-33026-1 "Special:BookSources/978-3-642-33026-1").

[^68]: Kuon, Ian; Rose, Jonathan (2006). ["Measuring the gap between FPGAs and ASICs"](https://web.archive.org/web/20100622170541/http://ece.gmu.edu/coursewebpages/ECE/ECE448/S09/viewgraphs/Gap_between_FPGAs_and_ASICs.pdf) (PDF). *Proceedings of the international symposium on Field programmable gate arrays – FPGA'06*. New York, NY: ACM. pp. 21– 30. [doi](https://en.wikipedia.org/wiki/Doi_\(identifier\) "Doi (identifier)"):[10.1145/1117201.1117205](https://doi.org/10.1145%2F1117201.1117205). [ISBN](https://en.wikipedia.org/wiki/ISBN_\(identifier\) "ISBN (identifier)") [1-59593-292-5](https://en.wikipedia.org/wiki/Special:BookSources/1-59593-292-5 "Special:BookSources/1-59593-292-5"). Archived from [the original](http://ece.gmu.edu/coursewebpages/ECE/ECE448/S09/viewgraphs/Gap_between_FPGAs_and_ASICs.pdf) (PDF) on 2010-06-22. Retrieved 2017-10-25.

[^69]: Cutress, Ian (August 27, 2019). ["Xilinx Announces World Largest FPGA: Virtex Ultrascale+ VU19P with 9m Cells"](https://www.anandtech.com/show/14798/xilinx-announces-world-largest-fpga-virtex-ultrascale-vu19p-with-9m-cells). *[AnandTech](https://en.wikipedia.org/wiki/AnandTech "AnandTech")*.

[^70]: ["AN 818: Static Update Partial Reconfiguration Tutorial: for Intel Stratix 10 GX FPGA Development Board"](https://www.intel.com/content/www/us/en/programmable/documentation/ekx1496870149834.html). *www.intel.com*. Retrieved 2018-12-01.

[^71]: ["Can FPGAs dynamically modify their logic?"](https://electronics.stackexchange.com/questions/45115/can-fpgas-dynamically-modify-their-logic). *Electrical Engineering Stack Exchange*. Retrieved 2018-12-01.

[^72]: ["CPLD vs FPGA: Differences between them and which one to use? – Numato Lab Help Center"](https://numato.com/kb/cpld-vs-fpga-differences-one-use/). *numato.com*. 2017-11-29.