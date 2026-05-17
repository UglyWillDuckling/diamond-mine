#data-structure/process 

  A Process Control Block (PCB) is a data structure used in operating systems
  to manage processes. It stores information about each process, allowing the
  operating system to track and manipulate process behavior. A PCB typically
  includes the following components:

  ### Components of a Process Control Block (PCB)

  1. Process Identification: Unique identifier for the process, such as a
  Process ID (PID).
  2. Process State: Current state of the process, including running, waiting,
  or terminated.
  3. Program Counter: Address of the instruction currently being executed by
  the process.
  4. Registers: Values of CPU registers, such as the Accumulator (AC) and
  Program Counter (PC).
  5. Memory Management Information: Information about the process's memory
  allocation, such as virtual memory size and physical memory usage.
  6. Open Files: List of files currently open by the process.
  7. Signal Information: Information about signals sent to or received by the
  process.
  8. Security and Access Control: Information about the process's access
  rights and permissions.
  9. Resource Allocation: Information about resources allocated to the process,
  such as I/O devices and timers.

  ### Operations on a Process Control Block (PCB)

  10. Process Creation: Creating a new PCB when a process is spawned.
  11. Process Scheduling: Selecting which process to execute next based on PCB
  information.
  12. Process Termination: Deleting a PCB when a process completes or is
  terminated.
  13. Process Suspension: Suspending a process and modifying its PCB to reflect
  the new state.
  14. Process Revival: Reviving a suspended process by restoring its PCB to its
  previous state.
