---
source: https://en.wikipedia.org/wiki/System_call
author:
published: 2002-10-13
created: 2026-02-10
tags:
  - term
  - service/computer
---
![](https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/Linux_kernel_interfaces.svg/500px-Linux_kernel_interfaces.svg.png)

A high-level overview of the Linux kernel's system call interface, which handles communication between its various components and the userspace

In computing, a **system call** (**syscall**) is the programmatic way in which a [computer program](https://en.wikipedia.org/wiki/Computer_program "Computer program") requests a service from the [operating system](https://en.wikipedia.org/wiki/Operating_system "Operating system") [^1] on which it is executed. This may include hardware-related services (for example, accessing a [hard disk drive](https://en.wikipedia.org/wiki/Hard_disk_drive "Hard disk drive") or accessing the device's camera), creation and execution of new [processes](https://en.wikipedia.org/wiki/Process_\(computing\) "Process (computing)"), and communication with integral [kernel services](https://en.wikipedia.org/wiki/Kernel_service "Kernel service") such as [process scheduling](https://en.wikipedia.org/wiki/Process_scheduling "Process scheduling"). System calls provide an essential interface between a process and the operating system.

In most systems, system calls can only be made from [userspace](https://en.wikipedia.org/wiki/Userspace "Userspace") processes, while in some systems, [OS/360 and successors](https://en.wikipedia.org/wiki/OS/360_and_successors "OS/360 and successors") for example, privileged system code also issues system calls.[^4]

For [embedded systems](https://en.wikipedia.org/wiki/Embedded_system "Embedded system"), system calls typically do not change the [privilege mode](https://en.wikipedia.org/wiki/CPU_modes "CPU modes") of the CPU.

## Privileges

The [architecture](https://en.wikipedia.org/wiki/Instruction_set "Instruction set") of most modern processors, with the exception of some embedded systems, involves a [security model](https://en.wikipedia.org/wiki/CPU_modes "CPU modes"). For example, the *[rings](https://en.wikipedia.org/wiki/Ring_\(computer_security\) "Ring (computer security)")* model specifies multiple privilege levels under which software may be executed: a program is usually limited to its own [address space](https://en.wikipedia.org/wiki/Address_space "Address space") so that it cannot access or modify other running programs or the operating system itself, and is usually prevented from directly manipulating hardware devices (e.g. the [frame buffer](https://en.wikipedia.org/wiki/Frame_buffer "Frame buffer") or [network](https://en.wikipedia.org/wiki/Computer_network "Computer network") devices).

However, many applications need access to these components, so system calls are made available by the operating system to provide well-defined, safe implementations for such operations. The operating system executes at the highest level of privilege, and allows applications to request services via system calls, which are often initiated via [interrupts](https://en.wikipedia.org/wiki/Interrupt "Interrupt"). An interrupt automatically puts the CPU into some elevated privilege level and then passes control to the kernel, which determines whether the calling program should be granted the requested service. If the service is granted, the kernel executes a specific set of instructions over which the calling program has no direct control, returns the privilege level to that of the calling program, and then returns control to the calling program.

Generally, systems provide a [library](https://en.wikipedia.org/wiki/Library_\(computing\) "Library (computing)") or [API](https://en.wikipedia.org/wiki/API "API") that sits between normal programs and the operating system. On [Unix-like](https://en.wikipedia.org/wiki/Unix-like "Unix-like") systems, that API is usually part of an implementation of the [C library](https://en.wikipedia.org/wiki/C_standard_library "C standard library") (libc), such as [glibc](https://en.wikipedia.org/wiki/Glibc "Glibc"), that provides [wrapper functions](https://en.wikipedia.org/wiki/Wrapper_function "Wrapper function") for the system calls, often named the same as the system calls they invoke. On [Windows NT](https://en.wikipedia.org/wiki/Windows_NT "Windows NT"), that API is part of the [Native API](https://en.wikipedia.org/wiki/Native_API "Native API"), in the ntdll.dll library; this is an undocumented API used by implementations of the regular [Windows API](https://en.wikipedia.org/wiki/Windows_API "Windows API") and directly used by some system programs on Windows. The library's wrapper functions expose an ordinary function [calling convention](https://en.wikipedia.org/wiki/Calling_convention "Calling convention") (a [subroutine](https://en.wikipedia.org/wiki/Subroutine "Subroutine") call on the [assembly](https://en.wikipedia.org/wiki/Assembly_language "Assembly language") level) for using the system call, as well as making the system call more [modular](https://en.wikipedia.org/wiki/Modularity "Modularity"). Here, the primary function of the wrapper is to place all the arguments to be passed to the system call in the appropriate [processor registers](https://en.wikipedia.org/wiki/Processor_register "Processor register") (and maybe on the [call stack](https://en.wikipedia.org/wiki/Call_stack "Call stack") as well), and also setting a unique system call number for the kernel to call. In this way the library, which exists between the OS and the application, increases [portability](https://en.wikipedia.org/wiki/Software_portability "Software portability").

The call to the library function itself does not cause a switch to [kernel mode](https://en.wikipedia.org/wiki/Kernel_mode "Kernel mode") and is usually a normal [subroutine call](https://en.wikipedia.org/wiki/Subroutine_call "Subroutine call") (using, for example, a "CALL" assembly instruction in some [Instruction set architectures](https://en.wikipedia.org/wiki/Instruction_set_architecture "Instruction set architecture") (ISAs)). The actual system call does transfer control to the kernel (and is more implementation-dependent and platform-dependent than the library call abstracting it). For example, in [Unix-like](https://en.wikipedia.org/wiki/Unix-like "Unix-like") systems, `fork` and `execve` are C library functions that in turn execute instructions that invoke the `fork` and `exec` system calls. Making the system call directly in the [application code](https://en.wikipedia.org/wiki/Application_code "Application code") is more complicated and may require embedded assembly code to be used (in [C](https://en.wikipedia.org/wiki/C_\(programming_language\) "C (programming language)") and [C++](https://en.wikipedia.org/wiki/C%2B%2B "C++")), as well as requiring knowledge of the low-level binary interface for the system call operation, which may be subject to change over time and thus not be part of the [application binary interface](https://en.wikipedia.org/wiki/Application_binary_interface "Application binary interface"); the library functions are meant to abstract this away.

On [exokernel](https://en.wikipedia.org/wiki/Exokernel "Exokernel") based systems, the library is especially important as an intermediary. On exokernels, libraries shield user applications from the very low level kernel [API](https://en.wikipedia.org/wiki/Application_programming_interface "Application programming interface"), and provide [abstractions](https://en.wikipedia.org/wiki/Abstraction_\(computer_science\) "Abstraction (computer science)") and [resource](https://en.wikipedia.org/wiki/Resource_\(computer_science\) "Resource (computer science)") management.

IBM's [OS/360](https://en.wikipedia.org/wiki/OS/360_and_successors "OS/360 and successors"), [DOS/360](https://en.wikipedia.org/wiki/DOS/360_and_successors "DOS/360 and successors") and [TSS/360](https://en.wikipedia.org/wiki/TSS/360 "TSS/360") implement most system calls through a library of assembly language [macros](https://en.wikipedia.org/wiki/Macro_\(computer_science\) "Macro (computer science)"),[^2] although there are a few services with a call linkage. This reflects their origin at a time when programming in assembly language was more common than [high-level language](https://en.wikipedia.org/wiki/High-level_programming_language "High-level programming language") usage. IBM system calls were therefore not directly executable by high-level language programs, but required a callable assembly language wrapper subroutine. Since then, IBM has added many services that can be called from high level languages in, e.g., [z/OS](https://en.wikipedia.org/wiki/Z/OS "Z/OS") and [z/VSE](https://en.wikipedia.org/wiki/VSE_\(operating_system\) "VSE (operating system)"). In more recent release of [MVS/SP](https://en.wikipedia.org/wiki/MVS/SP "MVS/SP") and in all later MVS versions, some system call macros generate Program Call (PC).

On [Unix](https://en.wikipedia.org/wiki/Unix "Unix"), [Unix-like](https://en.wikipedia.org/wiki/Unix-like "Unix-like") and other [POSIX](https://en.wikipedia.org/wiki/POSIX "POSIX") -compliant operating systems, popular system calls are `[open](https://en.wikipedia.org/wiki/Open_\(system_call\) "Open (system call)")`, `[read](https://en.wikipedia.org/wiki/Read_\(system_call\) "Read (system call)")`, `[write](https://en.wikipedia.org/wiki/Write_\(system_call\) "Write (system call)")`, `[close](https://en.wikipedia.org/wiki/Close_\(system_call\) "Close (system call)")`, `[wait](https://en.wikipedia.org/wiki/Wait_\(system_call\) "Wait (system call)")`, `[exec](https://en.wikipedia.org/wiki/Exec_\(system_call\) "Exec (system call)")`, `[fork](https://en.wikipedia.org/wiki/Fork_\(system_call\) "Fork (system call)")`, `[exit](https://en.wikipedia.org/wiki/Exit_\(system_call\) "Exit (system call)")`, and `[kill](https://en.wikipedia.org/wiki/Kill_\(system_call\) "Kill (system call)")`. Many modern operating systems have hundreds of system calls. For example, [Linux](https://en.wikipedia.org/wiki/Linux_kernel "Linux kernel") and [OpenBSD](https://en.wikipedia.org/wiki/OpenBSD "OpenBSD") each have over 300 different calls,[^5] [^6] [NetBSD](https://en.wikipedia.org/wiki/NetBSD "NetBSD") has close to 500,[^7] [FreeBSD](https://en.wikipedia.org/wiki/FreeBSD "FreeBSD") has over 500,[^8] Windows has close to 2000, divided between win32k (graphical) and ntdll (core) system calls [^9] while [Plan 9](https://en.wikipedia.org/wiki/Plan_9_from_Bell_Labs "Plan 9 from Bell Labs") has 54.[^10]

Tools such as [strace](https://en.wikipedia.org/wiki/Strace "Strace"), [ftrace](https://en.wikipedia.org/wiki/Ftrace "Ftrace") and truss allow a process to execute from start and report all system calls the process invokes, or can attach to an already running process and intercept any system call made by the said process if the operation does not violate the permissions of the user. This special ability of the program is usually also implemented with system calls such as [ptrace](https://en.wikipedia.org/wiki/Ptrace "Ptrace") or system calls on files in [procfs](https://en.wikipedia.org/wiki/Procfs "Procfs").

## Typical implementations

Implementing system calls requires a transfer of control from user space to kernel space, which involves some sort of architecture-specific feature. A typical way to implement this is to use a [software interrupt](https://en.wikipedia.org/wiki/Software_interrupt "Software interrupt") or [trap](https://en.wikipedia.org/wiki/Trap_\(computing\) "Trap (computing)"). Interrupts transfer control to the operating system [kernel](https://en.wikipedia.org/wiki/Kernel_\(operating_system\) "Kernel (operating system)"), so software simply needs to set up some register with the system call number needed, and execute the software interrupt.

This is the only technique provided for many [RISC](https://en.wikipedia.org/wiki/RISC "RISC") processors, but [CISC](https://en.wikipedia.org/wiki/Complex_instruction_set_computer "Complex instruction set computer") architectures such as [x86](https://en.wikipedia.org/wiki/X86 "X86") support additional techniques. For example, the x86 [instruction set](https://en.wikipedia.org/wiki/Instruction_set "Instruction set") contains the instructions `SYSCALL` / `SYSRET` and `SYSENTER` / `SYSEXIT` (these two mechanisms were independently created by [AMD](https://en.wikipedia.org/wiki/AMD "AMD") and [Intel](https://en.wikipedia.org/wiki/Intel "Intel"), respectively, but in essence they do the same thing). These are "fast" control transfer instructions that are designed to quickly transfer control to the kernel for a system call without the overhead of an interrupt.[^11] [Linux](https://en.wikipedia.org/wiki/Linux "Linux") 2.5 began using this on the [x86](https://en.wikipedia.org/wiki/X86 "X86"), where available; formerly it used the `[INT](https://en.wikipedia.org/wiki/INT_\(x86_instruction\) "INT (x86 instruction)")` instruction, where the system call number was placed in the `EAX` [register](https://en.wikipedia.org/wiki/Processor_register "Processor register") before [interrupt](https://en.wikipedia.org/wiki/INT_\(x86_instruction\) "INT (x86 instruction)") 0x80 was executed.[^12] [^13]

An older mechanism is the [call gate](https://en.wikipedia.org/wiki/Call_gate "Call gate"); originally used in [Multics](https://en.wikipedia.org/wiki/Multics "Multics") and later, for example, see [call gate](https://en.wikipedia.org/wiki/Call_gate_\(Intel\) "Call gate (Intel)") on the Intel [x86](https://en.wikipedia.org/wiki/X86 "X86"). It allows a program to call a kernel function directly using a safe control transfer mechanism, which the operating system sets up in advance. This approach has been unpopular on x86, presumably due to the requirement of a far call (a call to a procedure located in a different segment than the current code segment [^14]) which uses [x86 memory segmentation](https://en.wikipedia.org/wiki/X86_memory_segmentation "X86 memory segmentation") and the resulting lack of [portability](https://en.wikipedia.org/wiki/Portability_\(software\) "Portability (software)") it causes, and the existence of the faster instructions mentioned above.

For [IA-64](https://en.wikipedia.org/wiki/IA-64 "IA-64") architecture, `EPC` (Enter Privileged Code) instruction is used. The first eight system call arguments are passed in registers, and the rest are passed on the stack.

In the [IBM System/360](https://en.wikipedia.org/wiki/IBM_System/360 "IBM System/360") mainframe family, and its successors, a [Supervisor Call instruction](https://en.wikipedia.org/wiki/Supervisor_Call_instruction "Supervisor Call instruction") (SVC), with the number in the instruction rather than in a register, implements a system call for legacy facilities in most of [^3] IBM's own operating systems, and for all system calls in Linux. In later versions of MVS, IBM uses the Program Call (PC) instruction for many newer facilities. In particular, PC is used when the caller might be in [Service Request Block](https://en.wikipedia.org/wiki/Service_Request_Block "Service Request Block") (SRB) mode.

The [PDP-11](https://en.wikipedia.org/wiki/PDP-11 "PDP-11") [minicomputer](https://en.wikipedia.org/wiki/Minicomputer "Minicomputer") used the EMT, TRAP and IOT instructions, which, similar to the IBM System/360 SVC and x86 INT, put the code in the instruction; they generate interrupts to specific addresses, transferring control to the operating system. The [VAX](https://en.wikipedia.org/wiki/VAX "VAX") 32-bit successor to the PDP-11 series used the CHMK, CHME, and CHMS instructions to make system calls to privileged code at various levels; the code is an argument to the instruction.

System calls can be grouped roughly into six major categories:[^15]

1. Process control
	- create process (for example, `[fork](https://en.wikipedia.org/wiki/Fork_\(system_call\) "Fork (system call)")` on Unix-like systems, or `NtCreateProcess` in the [Windows NT](https://en.wikipedia.org/wiki/Windows_NT "Windows NT") [Native API](https://en.wikipedia.org/wiki/Native_API "Native API"))
	- [terminate process](https://en.wikipedia.org/wiki/Kill_\(command\) "Kill (command)")
	- [load](https://en.wikipedia.org/wiki/Loader_\(computing\) "Loader (computing)"), [execute](https://en.wikipedia.org/wiki/Exec_\(system_call\) "Exec (system call)")
	- get/set process attributes
	- [wait](https://en.wikipedia.org/wiki/Wait_\(system_call\) "Wait (system call)") for time, wait event, [signal](https://en.wikipedia.org/wiki/Signal_\(IPC\) "Signal (IPC)") event
	- [allocate](https://en.wikipedia.org/wiki/Memory_allocation "Memory allocation") and [free](https://en.wikipedia.org/wiki/Garbage_collection_\(computer_science\) "Garbage collection (computer science)") memory
2. File management
	- create file, delete file
	- open, close
	- read, write, reposition
	- get/set file attributes
3. Device management
	- request device, release device
	- read, write, reposition
	- get/set device attributes
	- logically attach or detach devices
4. Information maintenance
	- get/set total system information (including time, date, computer name, enterprise etc.)
	- get/set process, file, or device metadata (including author, opener, creation time and date, etc.)
5. Communication
	- create, delete communication connection
	- send, receive messages
	- transfer status information
	- attach or detach remote devices
6. Protection
	- get/set file permissions

System calls in most [Unix-like](https://en.wikipedia.org/wiki/Unix-like "Unix-like") systems are processed in [kernel mode](https://en.wikipedia.org/wiki/Kernel_mode "Kernel mode"), which is accomplished by changing the processor execution mode to a more privileged one, but no *process* [context switch](https://en.wikipedia.org/wiki/Context_switch "Context switch") is necessary – although a *privilege* context switch does occur. The hardware sees the world in terms of the execution mode according to the processor [status register](https://en.wikipedia.org/wiki/Status_register "Status register"), and processes are an abstraction provided by the operating system. A system call does not generally require a context switch to another process; instead, it is processed in the context of whichever process invoked it.[^16] [^17]

In a [multithreaded](https://en.wikipedia.org/wiki/Multithreading_\(computer_architecture\) "Multithreading (computer architecture)") process, system calls can be made from multiple [threads](https://en.wikipedia.org/wiki/Thread_\(computing\) "Thread (computing)"). The handling of such calls is dependent on the design of the specific operating system kernel and the application runtime environment. The following list shows typical models followed by operating systems:[^18] [^19]

- *Many-to-one* model: All system calls from any user thread in a process are handled by a single kernel-level thread. This model has a serious drawback – any blocking system call (like awaiting input from the user) can freeze all the other threads. Also, since only one thread can access the kernel at a time, this model cannot utilize multiple cores of processors.
- *One-to-one* model: Every user thread gets attached to a distinct kernel-level thread during a system call. This model solves the above problem of blocking system calls. It is found in all major [Linux distributions](https://en.wikipedia.org/wiki/Linux_distribution "Linux distribution"), [macOS](https://en.wikipedia.org/wiki/MacOS "MacOS"), [iOS](https://en.wikipedia.org/wiki/IOS "IOS"), recent [Windows](https://en.wikipedia.org/wiki/Microsoft_Windows "Microsoft Windows") and [Solaris](https://en.wikipedia.org/wiki/Solaris_\(operating_system\) "Solaris (operating system)") versions.
- *Many-to-many* model: In this model, a pool of user threads is mapped to a pool of kernel threads. All system calls from a user thread pool are handled by the threads in their corresponding kernel [thread pool](https://en.wikipedia.org/wiki/Thread_pool "Thread pool").
- *Hybrid* model: This model implements both many-to-many and one-to-one models depending upon the choice made by the kernel. This is found in old versions of [IRIX](https://en.wikipedia.org/wiki/IRIX "IRIX"), [HP-UX](https://en.wikipedia.org/wiki/HP-UX "HP-UX") and [Solaris](https://en.wikipedia.org/wiki/Solaris_\(operating_system\) "Solaris (operating system)").

## See also

- [DOS API](https://en.wikipedia.org/wiki/DOS_API "DOS API")
- [Linux kernel API](https://en.wikipedia.org/wiki/Linux_kernel_API "Linux kernel API")
- [vDSO](https://en.wikipedia.org/wiki/VDSO "VDSO")

## Notes

## References

## Further reading

- ["Kernel command using Linux system calls"](https://web.archive.org/web/20170211232040/https://www.ibm.com/developerworks/linux/library/l-system-calls/). *IBM developerWorks*. 10 February 2010. Archived from [the original](https://www.ibm.com/developerworks/linux/library/l-system-calls/) on 11 February 2017.
- Choudhary, Amit; [HOWTO for Implementing a System Call on Linux 2.6](http://tldp.org/HOWTO/html_single/Implement-Sys-Call-Linux-2.6-i386)
- Jorrit N. Herder, Herbert Bos, Ben Gras, Philip Homburg, and Andrew S. Tanenbaum, [Modular system programming on Minix 3](https://www.usenix.org/publications/login/april-2006-volume-31-number-2/modular-system-programming-minix-3), *;login:* 31, no. 2 (April 2006); 19–28, accessed 5 March 2018
- Gulbrandsen, John; [*System Call Optimization with the SYSENTER Instruction*](http://www.codeguru.com/cpp/misc/misc/system/article.php/c8223/System-Call-Optimization-with-the-SYSENTER-Instruction.htm), CodeGuru.com, 8 October 2004

## External links

- [A list of modern Unix-like system calls](http://fxr.watson.org/fxr/source/kern/syscalls.master)
- [How System Calls Work on Linux/i86](http://www.tldp.org/LDP/khg/HyperNews/get/syscall/syscall86.html) (1996, based on the 1993 0.99.2 kernel)
- [Sysenter Based System Call Mechanism in Linux 2.6](http://articles.manugarg.com/systemcallinlinux2_6.html) (2006)
- [A simple open Unix Shell in C language](http://task3.cc/projects/bd-shell/) – examples on System Calls under Unix
- [osdev wiki](https://wiki.osdev.org/System_Calls)

[^1]: In [UNIX-like](https://en.wikipedia.org/wiki/UNIX-like "UNIX-like") operating systems, system calls are used only for the [kernel](https://en.wikipedia.org/wiki/Kernel_\(operating_system\) "Kernel (operating system)").

[^2]: In many but not all cases, IBM documented, e.g., the SVC number, the parameter registers.

[^3]: The CP components of [CP-67](https://en.wikipedia.org/wiki/CP-67 "CP-67") and [VM](https://en.wikipedia.org/wiki/VM_\(operating_system\) "VM (operating system)") use the Diagnose (DIAG) instruction as a Hypervisor CALL (HVC) from a virtual machine to CP.

[^4]: "Writing SVC Routines". [*IBM System/360 Operating System System Programmer's Guide*](http://bitsavers.org/pdf/ibm/360/os/R01-08/C28-6550-2_OSsysPrmg_Mar67.pdf) (PDF). Third Edition. IBM. March 1967. pp. 32– 36. C28-6550-2.

[^5]: ["syscalls(2) - Linux manual page"](http://man7.org/linux/man-pages/man2/syscalls.2.html).

[^6]: OpenBSD (14 September 2013). ["System call names (kern/syscalls.c)"](http://bxr.su/OpenBSD/sys/kern/syscalls.c). *BSD Cross Reference*.

[^7]: NetBSD (17 October 2013). ["System call names (kern/syscalls.c)"](http://bxr.su/NetBSD/sys/kern/syscalls.c). *BSD Cross Reference*.

[^8]: ["FreeBSD syscalls.c, the list of syscall names and IDs"](http://fxr.watson.org/fxr/source/kern/syscalls.c).

[^9]: Mateusz "j00ru" Jurczyk (5 November 2017). ["Windows WIN32K.SYS System Call Table (NT/2000/XP/2003/Vista/2008/7/8/10)"](http://j00ru.vexillium.org/syscalls/win32k/32/).`{{[cite web](https://en.wikipedia.org/wiki/Template:Cite_web "Template:Cite web")}}`: CS1 maint: numeric names: authors list ()

[^10]: ["sys.h"](http://9p.io/sources/plan9/sys/src/libc/9syscall/sys.h). *Plan 9 from Bell Labs*. [Archived](https://web.archive.org/web/20230908211500/http://9p.io/sources/plan9/sys/src/libc/9syscall/sys.h) from the original on 8 September 2023, the list of syscall names and IDs.

[^11]: ["SYSENTER"](http://wiki.osdev.org/SYSENTER). *OSDev wiki*. [Archived](https://web.archive.org/web/20231108202438/https://wiki.osdev.org/Sysenter) from the original on 8 November 2023.

[^12]: Anonymous (19 December 2002). ["Linux 2.5 gets vsyscalls, sysenter support"](http://kerneltrap.org/node/531). *[KernelTrap](https://en.wikipedia.org/wiki/KernelTrap "KernelTrap")*. Retrieved 1 January 2008.

[^13]: Manu Garg (2006). ["Sysenter Based System Call Mechanism in Linux 2.6"](http://articles.manugarg.com/systemcallinlinux2_6.html).

[^14]: ["Liberation: x86 Instruction Set Reference"](http://x86.renejeschke.de/html/file_module_x86_id_26.html). *renejeschke.de*. Retrieved 4 July 2015.

[^15]: Silberschatz, Abraham (2018). *Operating System Concepts*. Peter B Galvin; Greg Gagne (10th ed.). Hoboken, New Jersey: [Wiley](https://en.wikipedia.org/wiki/Wiley_\(publisher\) "Wiley (publisher)"). p. 67. [ISBN](https://en.wikipedia.org/wiki/ISBN_\(identifier\) "ISBN (identifier)") [9781119320913](https://en.wikipedia.org/wiki/Special:BookSources/9781119320913 "Special:BookSources/9781119320913"). [OCLC](https://en.wikipedia.org/wiki/OCLC_\(identifier\) "OCLC (identifier)") [1004849022](https://search.worldcat.org/oclc/1004849022).

[^16]: Bach, Maurice J. (1986), *The Design of the UNIX Operating System*, Prentice Hall, pp. 15–16.

[^17]: Elliot, John (1 October 2011). ["Discussion of system call implementation at ProgClub including quote from Bach 1986"](https://web.archive.org/web/20120724153438/https://www.progclub.org/pipermail/list/2011-October/000150.html). Archived from [the original](http://www.progclub.org/pipermail/list/2011-October/000150.html) on 24 July 2012. Retrieved 1 October 2011.

[^18]: ["Threads"](http://www.cs.uic.edu/~jbell/CourseNotes/OperatingSystems/4_Threads.html).

[^19]: ["Threading Models"](http://kevinmarquet.net/wp-content/uploads/threading.pdf) (PDF).