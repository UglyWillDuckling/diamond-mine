---
part of:
  - "[[Digital Electronics]]"
type: digital-circuit
tags:
  - digital-circuit
---
- moves bits over left or right
- consists of a series of [[flip-flop|flip-flops]](bistabil)
- 3 types
	- **SISO**
	- **SIPO**
	- **PISO**

  **A shift register** is a type of digital circuit that can shift (move) the bits of
  a binary number in a sequence, **either to the left or to the right,** by a
  specified number of positions. It is a sequential logic circuit that can store
  and shift binary data, which is essential in many digital systems, such as
  computers, communication networks, and digital signal processing systems.

  A simple shift register consists of a **series of flip-flops** connected in a chain,
  with each flip-flop storing a single bit of data. The shift register can be
  thought of as a digital bucket brigade, where each flip-flop passes its data to
  the next flip-flop in the sequence.

  There are **three main types** of shift registers:

  1. Serial-in, Serial-out (**SISO**) Shift Register: In this type, data is shifted
  one bit at a time, in a serial manner, through a single input line. Each clock
  pulse shifts the data one position to the right or left.
  2. Serial-in, Parallel-out (**SIPO**) Shift Register: In this type, data is shifted
  serially into the register, but it can be accessed in parallel, meaning all the
  bits are available simultaneously.
  3. Parallel-in, Serial-out (**PISO**) Shift Register: In this type, data is loaded
  into the register in parallel, but it is shifted out serially, one bit at a time.

### usage

  Shift registers can be used for various purposes, such as:

  4. Data storage and retrieval: Shift registers can store binary data and
  retrieve it in a **sequential** manner.
  5. Data transmission: Shift registers can be used to **transmit data serially over**
  **a communication channel.**
  6. Binary counters: Shift registers can be used to implement **binary counters,**
  which are essential in many digital systems.
  7. Sequence generators: Shift registers can be used to **generate a sequence of**
  **binary numbers**, such as pseudorandom number generators.

  Some common applications of shift registers include:

  8. Digital watches and calculators: Shift registers are used to display the time
  or numbers on an LCD display.
  9. Microcontrollers and microprocessors: Shift registers are used to implement
  registers, counters, and other sequential logic circuits.
  10. Telecommunications: Shift registers are used in data transmission and
  reception systems, such as modems and network routers.
  11. Digital signal processing: Shift registers are used in digital signal
  processing systems, such as audio and image processing.

___
## SIPO

- pisanje je serijski
- citanje je paralelno
- svaki output(Q) svakog bita je spojen zasebno sto omogucava paralelno citanje
- moguce koristenje buffera za spremanje vrijednosti

## PISO

- 

## SISO

- destruktivno citanje
- dolazi do kasnjena u citanju ovisno o velicini registra
- ..

These are the simplest kind of shift registers. The data string is presented at "data in" and is shifted right one stage each time "data advance" is brought high. At each advance, the bit on the far left (i.e. "data in") is shifted into the first flip-flop's output. The bit on the far right (i.e. "data out") **is shifted out and lost**.

The data is stored after each on the "Q" output, so there are four storage "slots" available in this arrangement, hence it is a **4-bit register.** To give an idea of the shifting pattern, imagine that the register holds 0000 (so all storage slots are empty). As "data in" presents 1,0,1,1,0,0,0,0 (in that order, with a pulse at "data advance" each time—this is called clocking or strobing) to the register, this is the result. The right hand column corresponds to the right-most flip-flop's output pin, and so on.

%%note: dolazi do kasnjenja od 4 ciklusa(4 bita).  %%

So the serial output of the entire value is **00010110**. It can be seen that if data were to be continued to input, it would get exactly what was put in (10110000), but **offset** by four "data advance" cycles. This arrangement is the hardware equivalent of a `queue`. Also, at any time, the whole register can be set to zero by bringing the **reset** (R) pins high.

==This arrangement performs destructive readout – each datum is lost once it has been shifted out of the right-most bit.==