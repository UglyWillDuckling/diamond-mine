---
source: "https://www.cs.virginia.edu/~cr4bd/3130/F2023/readings/thread.html#virtual-address-spaces"
author:
published:
created: 2026-02-11
tags:
---
## 1 Terminology

## 1.1 Multitasking

**Multitasking** is a generic term for having multiple flows through code occurring concurrently.

**Preemptive multitasking** is multitasking where the scheduling of which task has access to the processor and related resources is controlled by the OS, hardware, or other system external to the task itself, and the task’s access to them can be *preempted*, or taken away, from it by an asynchronous event like an interrupt.

**Cooperative multitasking** is multitasking where the scheduling of which task has access to the processor and related resources is controlled by a library that must be manually invoked by code that is willing to lose control of the resource.

## 1.2 Processes

A **process** is a software-only operating system construct that roughly parallels the end-user idea of a running program.

A **process** has a full complement of private state: program registers, condition codes, virtual address space, kernel-managed resources like file descriptors, etc.

The process abstraction provides a kind of virtual machine, with its own equivalent of processor cores and of memory. To implement these, the operating system maintains a variety of data structures inside kernel-only memory to help track different processes. Portions of those structures relating to one process at a time are loaded into hardware-accessible registers and memory so that the hardware mechanisms will cause running code to interact with the appropriate process’s memory and other state.

### 1.2.1 Virtual address spaces

We call the process’s equivalent of memory a *virtual address space*.

Since each process has its own virtual address space, it can use memory without worrying about interfering with other programs accidentally.

We discuss how this virtual address space is implemented in the [reading on virtual memory](https://www.cs.virginia.edu/~cr4bd/3130/F2023/readings/vm.html). Briefly, the most common mechanism uses *address translation*, where based on settings in special registers, the hardware will convert a program’s addresses to real addresses in the hardware. The operating system controls which address space is active by changing these special registers.

## 1.3 Threads

A **thread** has a limited complement of private state: primarily just program registers and condition codes. (Roughly corresponding to the state stored on an active processor core.)

Since each thread has its own program registers and program counters, each thread can use registers and change the program counter without worrying about interferring with other programs.

For the first part of the semester, we will only deal with processes that have a single thread. Later in the semester, we will discuss programming with multiple threads in more detail.

## 1.4 Multi-threaded Processes

All the threads of a given process share the same virtual address space, kernel-managed resources like file descriptors, etc. Because the stack is managed by a program register (`%rsp`), this means each thread has its own stack. Because heap, code, and globals are stored at known virtual addresses, that memory is shared by all threads.

## 2 Implementing multitasking

## 2.1 Context Switches

Changing which thread and/or process’s state is currently loaded on a processor core is called a **context switch**. Most commonly operating systems with perform context switches as part of handling an exception.

## 2.2 Preemptive multitasking

Both processes and threads are scheduled by the operating system, with periodic interrupts being used to switch between them preemptively.

All major user operating systems (but not all embedded-system operating systems) use a hardware timer to create an exception (a timer interrupt) every few dozen milliseconds to enable automated context switching and facilitate the illusion that more processes are running at a time than there are processors in the computer. Operating systems will also perform context switches at other times, such as when a program needs to wait for input before it can continue executing.

## 2.3 Cooperative multitasking

Some operating systems (including 1980s versions of Windows and Mac OS, as well as some modern systems for resource-constrained hardware) use cooperative multitasking for processes; this means, in particular, that if a process enters an infinite loop or otherwise runs forever without using the give up control system call, the entire computer can freeze.

More commonly today, cooperative multitasking is used for user-mode-only event libraries. Being user-mode software, these are relatively easy to implement and change, resulting in many names (fibers, tasklets, coroutines, promises, futures, the asyc/await pattern, event libraries, continuation-passing style, etc.) and nuances of detail.

## 2.4 Hardware multitasking

On some processors, two or more threads can be scheduled on the same core in parallel using hyperthreading or simultaneous multithreading. This hardware typically appears to the operating system as if it were multiple cores.

## 3 fork et al.

On Unix-like systems, the most common functions for handling processes are `fork` and `waitpid`:`fork` creates a new process, and `waitpid` removes one.

## 3.1 New process, what’s in memory?

When creating a new process, a challenge exists: since it has its own address space, what do we put in that memory? In particular, what code will it run?

We could say you can only create a process if you give it a file containing memory contents to initialize it with, but that decision ties the ability to create processes to the file format of a new process’s memory, which is an unnecessary limitation.

As an alternative, we could say the new process has a copy of the same memory as the old. That way we can have code that wants to create a new process set up its memory and code arbitrarily. Conversely, this involves copying a lot of memory…

Fortunately, we can avoid copying by adding a copy-on-write bit to each page table entry. If this bit is set and we try to write to that page of memory, the memory management unit (MMU) first duplicates the page table and resets the bit to 0. This way, whichever process writes to that page first gets its own copy, and if neither write, only read, then no copying is needed.

The most common implementation is the copy of memory approach, implemented by `fork`. When new contents of memory are desired, the `fork` is immediately followed by a system call to replace the entire contents of memory (i.e., via `execve` or its friends).

## 3.2 Using fork

The `fork` function wraps the process-creating system call. Its semantics are that you invoke it once and it returns twice, once in each process. We need the two to do different things next (else what was the point of `fork` ing?), so each return has a different value:

- One process (traditionally called the **child**) has a return value of 0
- The other process (traditionally called the **parent**) has as its return value the unique integer the OS uses to identify the child process.

## 3.3 Replacing memory

Because copy-on-write makes `fork` an efficient and simple way to make new processes, the usual pattern for launching a new program is

1. The launcher `fork` s.
2. The child process changes its memory to the new code using `execve` or its relatives.

The `execve` program is defined as follows:

```c
#include <unistd.h>

int execve(const char *filename, char *const argv[], char *const envp[]);
```

`filename`

The path of a binary executable.

`argv`

An array of argument strings passed to the new program. By convention, the first of these strings (i.e., `argv[0]`) should contain the filename associated with the file being executed.

The `argv` array must include a `NULL` pointer to mark the end of the array.

`envp`

An array of strings, conventionally of the form `key=value`, which are passed as environment to the new program.

The `envp` array must include a `NULL` pointer to mark the end of the array.

Assuming there are no errors in the arguments, `execve` does not return; instead, it overwrites all of user-space memory with the memory contents described in the binary executable file and jumps to the initial instruction of the newly-loaded code.

## 3.4 Using waitpid

A common use of `fork` is from a terminal, shell, or graphical launcher. In this situation, the basic flow is

1. The launcher `fork` s.
2. The child process changes its memory to the new code.
3. The child process runs.
4. The child process terminates.
5. The launcher displays something if the child crashed instead of terminating gracefully.

The first four of these steps can be done with `fork` alone, but the last requires some way for the launcher to be notified when a child terminates, with information about how it ended.

When a process ends, it becomes a **zombie** —still listed in the process list in the OS, but its memory is freed and it is never scheduled. If a parent process has a zombie child, it can **reap** that process by using the `waitpid` function. This can be run in several ways, as documented in `man waitpid`, but they all involve removing one zombie process from the list of processes in the OS and returning some information about how long it ran, what exit code it provided, etc.

The following program

```c
#include <sys/wait.h>
#include <unistd.h>
#include <stdio.h>

int main() {
    pid_t pid = fork();
    if (pid == 0) {
        printf("This is the child process\n");
        return 12;
    } else {
        printf("This is the parent process\n");
        int status;
        waitpid(pid, &status, 0);
        printf("Child exited with status code: %d\n", WEXITSTATUS(status));
        return 0;
    }
}
```

when compiled and run prints either

```c
This is the parent process
This is the child process
Child exited with status code: 12
```

or

```c
This is the child process
This is the parent process
Child exited with status code: 12
```

depending on whether the parent or child gets to its first `printf` first.

The `status` integer also has other information, such as if it was terminated with a signal and if so which signal, which can be accessed with other macros instead of `WEXITSTATUS`.

## 4 File descriptors

On POSIX systems, programs access open files using *file descriptors*. For every process, a POSIX OS track which files it has open using a table of pointers to information needed to access (read, write, etc.) an open file, which POSIX calls an *open file description*. The *file descriptor* is an integer used to index into this table.

Creating a new file descriptor such as with the `open()` function creates a new open file descirption and adds pointer to it to the table. The file descriptor is in the index at which it was added to the table. Running `close()` removes an entry from the table. (When an open file description no longer has any pointers to it, resources associated with it are freed.) By convention, file descriptor 0 corresponds to standard input (`stdin` in `<stdio.h>`), file descriptor 1 to standard output (`stdout`), and file descriptor 2 to standard error (`stderr`).

The file descriptor table is copied by `fork()`, so the new process will have pointers to the same set of open file descriptions. and not changed by `execv()`. For this reason, usually if your program is outputting to one terminal and starts a new process, by default that process also outputs to the same terminal. Unless you make an effort to change the file descrpitors, the new process’s file descriptor for stdout will specify the same process.

## 4.1 dup2

The library call `dup2()` allows one to copy a file descriptor onto another. `dup2(X, Y)` makes file descriptor Y refer to the same open file description as file descriptor X. Most notably, this can be used to reassign where stdin or stdout go. This functionality is used by shells when executing a command like`./a.out > output.txt`, which runs `./a.out` but sends its output to the file `output.txt`.

The following program

```c
#include <unistd.h>
#include <stdio.h>

int main() {
    printf("This is before open\n"); fflush(stdout);
    int fd = open("output.txt", O_WRONLY | O_CREAT | O_TRUNC);
    if (fd < 0) { printf("Error in open\n"); return 1; }
    printf("This is after open\n"); fflush(stdout);
    dup2(fd, 1);
    printf("This is after dup2\n"); fflush(stdout);
    close(fd);
    printf("This is after close\n"); fflush(stdout);
    return 0;
}
```

will output

```c
This is before open
This is after open
```

to the terminal and

```c
This is after dup2
This is after close
```

to `output.txt` (assuming it can be succesfully opened.

Note that the `close()` only effects when one file descriptor, even when there are multiple file descriptors referring to the same open file.

## 5 Using pthreads

The POSIX standard defines a set of interfaces for handling threads, which are implemented as a native threading mechanism on Linux and OS X and as an optional mechanism on Windows. POSIX threads, often abbreviated pthreads, are complicated enough to deserve [their own writeup](https://www.cs.virginia.edu/~cr4bd/3130/F2023/readings/pthreads.html).

## 6 Coordinating between threads

The topic of coordinating between threads, especially when multiple threads are accessing the same values in memory, is a very complicated topic. So we have three writeups related to this:

- on [synchronization primitives](https://www.cs.virginia.edu/~cr4bd/3130/F2023/readings/sync.html) — interfaces provided to allow programmers to coordinate how the threads work together; and
- on [deadlock](https://www.cs.virginia.edu/~cr4bd/3130/F2023/readings/deadlock.html) — a common problem that results in hanging when using synchronization primitives incorrectly
- on [consistency](https://www.cs.virginia.edu/~cr4bd/3130/F2023/readings/consistency.html) — on when other threads see modifications to values in shared storage

[^1]: or one per processor depending on the multiprocessor design

[^2]: This is an oversimplification. What if three processes were sharing the page? Keeping a count of number of copies needed works better, but that count has to be placed in a finite-sized field with special logic for if that overflows… The full details are a bit distracting, hence the simple one bit discussion above.

[^3]: We have not spent much time on environments, but every program has access to the global array of strings `extern char **environ`, which is used to communicate such things as which directories should be searched for executables and where windows should be opened. See `man 7 environ` for more.