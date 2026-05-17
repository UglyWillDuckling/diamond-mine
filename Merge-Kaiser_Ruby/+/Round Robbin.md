#algorithm/scheduling

**Round-robin process management** is a scheduling algorithm used in operating
  systems to manage processes. It works as follows:

  1. Each process is assigned a time slice or time quantum, which is the
  duration of time allocated to each process for execution.
  2. The operating system switches between processes in a circular manner,
  executing each process for its allocated time slice.
  3. When a process's time slice expires, it is swapped out and the next
  process in the circle is given a chance to run.
  4. This cycle continues until all processes have been executed for their
  allocated time slice, at which point the process with the highest priority
  is executed next.

### example

Process A (time slice = 5 seconds), Process B (time slice = 3 seconds), and
Process C (time slice = 4 seconds).

  1. Process A runs for 5 seconds.
  2. Process B runs for 3 seconds.
  3. Process C runs for 4 seconds.
  4. The cycle repeats, with each process running for its allocated time slice.

Round-robin process management helps ensure that each process gets a fair
share of the CPU, and it is often used in time-sharing systems.

___
## notes 🗒

- schedule is time-based
- allocated time can be determined from the process priority