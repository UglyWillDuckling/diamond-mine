---
source: https://en.wikipedia.org/wiki/Computer_multitasking
published: 2001-10-22
created: 2026-02-10
tags:
  - task-execution-type
---
![](https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Fedora_Linux_multitasking.png/960px-Fedora_Linux_multitasking.png)

Modern desktop operating systems are capable of handling large numbers of different processes at the same time. This screenshot shows Fedora Linux running simultaneously with the KDE Plasma 6 desktop environment, Firefox, KCalc, the built-in calendar, GNU nano GIMP, and the VLC media player.

![](https://upload.wikimedia.org/wikipedia/en/7/71/Microsoft_Windows_1.01_multitasking.png)

Multitasking of Microsoft Windows 1.01 released in 1985, here shown running the MS-DOS Executive and Calculator programs

In [computing](https://en.wikipedia.org/wiki/Computing "Computing"), **multitasking** is the [concurrent](https://en.wikipedia.org/wiki/Concurrent_computing "Concurrent computing") execution of multiple tasks (also known as [processes](https://en.wikipedia.org/wiki/Process_\(computing\) "Process (computing)")) over a certain period of time. New tasks can interrupt already started ones before they finish, instead of waiting for them to end. As a result, a computer executes segments of multiple tasks in an interleaved manner, while the tasks share common processing resources such as [central processing units](https://en.wikipedia.org/wiki/Central_processing_unit "Central processing unit") (CPUs) and [main memory](https://en.wikipedia.org/wiki/Main_memory "Main memory"). Multitasking automatically interrupts the running program, saving its state (partial results, memory contents and computer register contents) and loading the saved state of another program and transferring control to it. This " [context switch](https://en.wikipedia.org/wiki/Context_switch "Context switch") " may be initiated at fixed time intervals ([pre-emptive multitasking](https://en.wikipedia.org/wiki/Pre-emptive_multitasking "Pre-emptive multitasking")), or the running program may be coded to signal to the supervisory software when it can be interrupted ([cooperative multitasking](https://en.wikipedia.org/wiki/Cooperative_multitasking "Cooperative multitasking")).

Multitasking does not require [parallel execution](https://en.wikipedia.org/wiki/Parallel_computing "Parallel computing") of multiple tasks at exactly the same time; instead, it allows more than one task to advance over a given period of time.[^1] Even on [multiprocessor](https://en.wikipedia.org/wiki/Multiprocessor "Multiprocessor") computers, multitasking allows many more tasks to be run than there are CPUs.

Multitasking is a common feature of computer operating systems since at least the 1960s. It allows more efficient use of the computer hardware; when a program is waiting for some external event such as a user input or an [input/output](https://en.wikipedia.org/wiki/Input/output "Input/output") transfer with a peripheral to complete, the central processor can still be used with another program. In a [time-sharing](https://en.wikipedia.org/wiki/Time-sharing "Time-sharing") system, multiple human operators use the same processor as if it was dedicated to their use, while behind the scenes the computer is serving many users by multitasking their individual programs. In [multiprogramming](https://en.wikipedia.org/wiki/Multiprogramming "Multiprogramming") systems, a task runs until it must wait for an external event or until the operating system's [scheduler](https://en.wikipedia.org/wiki/Scheduling_\(computing\) "Scheduling (computing)") forcibly swaps the running task out of the CPU. [Real-time](https://en.wikipedia.org/wiki/Real-time_computing "Real-time computing") systems such as those designed to control industrial robots, require timely processing; a single processor might be shared between calculations of machine movement, communications, and user interface.[^2]

Often multitasking operating systems include measures to change the priority of individual tasks, so that important jobs receive more processor time than those considered less significant. Depending on the operating system, a task might be as large as an entire application program, or might be made up of smaller [threads](https://en.wikipedia.org/wiki/Thread_\(computing\) "Thread (computing)") that carry out portions of the overall program.

A processor intended for use with multitasking operating systems may include special hardware to securely support multiple tasks, such as [memory protection](https://en.wikipedia.org/wiki/Memory_protection "Memory protection"), and [protection rings](https://en.wikipedia.org/wiki/Protection_ring "Protection ring") that ensure the supervisory software cannot be damaged or subverted by user-mode program errors.

The term "multitasking" has become an international term, as the same word is used in many other languages such as German, Italian, Dutch, Romanian, Czech, Danish and Norwegian.

## Multiprogramming

In the early days of computing, [CPU time](https://en.wikipedia.org/wiki/CPU_time "CPU time") was expensive, and [peripherals](https://en.wikipedia.org/wiki/Peripheral "Peripheral") were very slow. When the computer ran a program that needed access to a peripheral, the central processing unit (CPU) would have to stop executing program instructions while the peripheral processed the data. This was usually very inefficient. Multiprogramming is a computing technique that enables multiple programs to be concurrently loaded and executed into a computer's memory, allowing the CPU to switch between them swiftly. This optimizes CPU utilization by keeping it engaged with the execution of tasks, particularly useful when one program is waiting for I/O operations to complete.

The [Bull Gamma 60](https://en.wikipedia.org/wiki/Bull_Gamma_60 "Bull Gamma 60"), initially designed in 1957 and first released in 1960, was the first computer designed with multiprogramming in mind. Its architecture featured a central memory and a Program Distributor feeding up to twenty-five autonomous processing units with code and data, and allowing concurrent operation of multiple clusters.[^3]

Another such computer was the [LEO III](https://en.wikipedia.org/wiki/LEO_\(computer\)#Applications_and_successors "LEO (computer)"), first released in 1961. During [batch processing](https://en.wikipedia.org/wiki/Batch_processing "Batch processing"), several different programs were loaded in the computer memory, and the first one began to run. When the first program reached an instruction waiting for a peripheral, the context of this program was stored away, and the second program in memory was given a chance to run. The process continued until all programs finished running.[^4]

Multiprogramming gives no guarantee that a program will run in a timely manner. Indeed, the first program may very well run for hours without needing access to a peripheral. As there were no users waiting at an interactive terminal, this was no problem: users handed in a deck of punched cards to an operator, and came back a few hours later for printed results. Multiprogramming greatly reduced wait times when multiple batches were being processed.[^5] [^6]

## Cooperative multitasking

Early multitasking systems used applications that voluntarily ceded time to one another. This approach, which was eventually supported by many computer [operating systems](https://en.wikipedia.org/wiki/Operating_system "Operating system"), is known today as cooperative multitasking. Although it is now rarely used in larger systems except for specific applications such as [CICS](https://en.wikipedia.org/wiki/CICS "CICS") or the [JES2](https://en.wikipedia.org/wiki/JES2 "JES2") subsystem, cooperative multitasking was once the only scheduling scheme employed by [Microsoft Windows](https://en.wikipedia.org/wiki/Microsoft_Windows "Microsoft Windows") and [classic Mac OS](https://en.wikipedia.org/wiki/Classic_Mac_OS "Classic Mac OS") to enable multiple applications to run simultaneously. Cooperative multitasking is still used today on [RISC OS](https://en.wikipedia.org/wiki/RISC_OS "RISC OS") systems.[^7]

As a cooperatively multitasked system relies on each process regularly giving up time to other processes on the system, one poorly designed program can consume all of the CPU time for itself, either by performing extensive calculations or by [busy waiting](https://en.wikipedia.org/wiki/Busy_wait "Busy wait"); both would cause the whole system to [hang](https://en.wikipedia.org/wiki/Hang_\(computing\) "Hang (computing)"). In a server environment, this is a hazard that makes the entire environment unacceptably fragile.

## Preemptive multitasking

![](https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/Kubuntu_21.04_%28KDE_Plasma_5%29_-_Virtual_Desktops.png/500px-Kubuntu_21.04_%28KDE_Plasma_5%29_-_Virtual_Desktops.png)

Kubuntu (KDE Plasma 5) four Virtual desktops running multiple programs at the same time

Preemptive multitasking allows the computer system to more reliably guarantee to each process a regular "slice" of operating time. It also allows the system to deal rapidly with important external events like incoming data, which might require the immediate attention of one or another process. Operating systems were developed to take advantage of these hardware capabilities and run multiple processes preemptively. Preemptive multitasking was implemented in [the PDP-6 Monitor](https://en.wikipedia.org/wiki/TOPS-10 "TOPS-10") and [Multics](https://en.wikipedia.org/wiki/Multics "Multics") in 1964, in [OS/360 MFT](https://en.wikipedia.org/wiki/OS/360_and_successors#MFT "OS/360 and successors") in 1967, and in [Unix](https://en.wikipedia.org/wiki/Unix "Unix") in 1969, and was available in [some operating systems](https://en.wikipedia.org/wiki/PDP-8#Programming_facilities "PDP-8") for computers as small as DEC's PDP-8; it is a core feature of all [Unix-like](https://en.wikipedia.org/wiki/Unix-like "Unix-like") operating systems, such as [Linux](https://en.wikipedia.org/wiki/Linux "Linux"), [Solaris](https://en.wikipedia.org/wiki/Solaris_\(operating_system\) "Solaris (operating system)") and [BSD](https://en.wikipedia.org/wiki/Berkeley_Software_Distribution "Berkeley Software Distribution") with its [derivatives](https://en.wikipedia.org/wiki/Comparison_of_BSD_operating_systems "Comparison of BSD operating systems"),[^8] as well as modern versions of Windows.

Possibly the earliest preemptive multitasking OS available to home users was [Microware](https://en.wikipedia.org/wiki/Microware "Microware") 's [OS-9](https://en.wikipedia.org/wiki/OS-9 "OS-9"), available for computers based on the [Motorola 6809](https://en.wikipedia.org/wiki/Motorola_6809 "Motorola 6809") such as the [TRS-80 Color Computer 2](https://en.wikipedia.org/wiki/TRS-80_Color_Computer_2 "TRS-80 Color Computer 2"),[^9] with the operating system supplied by Tandy as an upgrade for disk-equipped systems.[^10] [Sinclair QDOS](https://en.wikipedia.org/wiki/Sinclair_QDOS "Sinclair QDOS") on the [Sinclair QL](https://en.wikipedia.org/wiki/Sinclair_QL "Sinclair QL") followed in 1984, but it was not a big success. Commodore's [Amiga](https://en.wikipedia.org/wiki/Amiga "Amiga") was released the following year, offering a combination of multitasking and multimedia capabilities. Microsoft made preemptive multitasking a core feature of their flagship operating system in the early 1990s when developing [Windows NT 3.1](https://en.wikipedia.org/wiki/Windows_NT_3.1 "Windows NT 3.1") and then [Windows 95](https://en.wikipedia.org/wiki/Windows_95 "Windows 95"). In 1988 Apple offered [A/UX](https://en.wikipedia.org/wiki/A/UX "A/UX") as a [UNIX System V](https://en.wikipedia.org/wiki/UNIX_System_V "UNIX System V") -based alternative to the [Classic Mac OS](https://en.wikipedia.org/wiki/Classic_Mac_OS "Classic Mac OS"). In 2001 Apple switched to the [NeXTSTEP](https://en.wikipedia.org/wiki/NeXTSTEP "NeXTSTEP") -influenced [Mac OS X](https://en.wikipedia.org/wiki/Mac_OS_X "Mac OS X").

A similar model is used in [Windows 9x](https://en.wikipedia.org/wiki/Windows_9x "Windows 9x") and the [Windows NT family](https://en.wikipedia.org/wiki/Windows_NT "Windows NT"), where native 32-bit applications are multitasked preemptively.[^11] 64-bit editions of Windows, both for the [x86-64](https://en.wikipedia.org/wiki/X86-64 "X86-64") and [Itanium](https://en.wikipedia.org/wiki/Itanium "Itanium") architectures, no longer support legacy 16-bit applications, and thus provide preemptive multitasking for all supported applications.

## Real time

Another reason for multitasking was in the design of [real-time computing](https://en.wikipedia.org/wiki/Real-time_computing "Real-time computing") systems, where there are a number of possibly unrelated external activities needed to be controlled by a single processor system. In such systems a hierarchical interrupt system is coupled with process prioritization to ensure that key activities were given a greater share of available [process time](https://en.wikipedia.org/wiki/Process_time "Process time").[^12]

## Multithreading

[Threads](https://en.wikipedia.org/wiki/Thread_\(computing\) "Thread (computing)") were born from the idea that the most efficient way for cooperating processes to exchange data would be to share their entire memory space. Thus, threads are effectively processes that run in the same memory context and share other resources with their [parent processes](https://en.wikipedia.org/wiki/Parent_process "Parent process"), such as open files. Threads are described as *lightweight processes* because switching between threads does not involve changing the memory context.[^13] [^14] [^15]

While threads are scheduled preemptively, some operating systems provide a variant to threads, named *[fibers](https://en.wikipedia.org/wiki/Fiber_\(computer_science\) "Fiber (computer science)")*, that are scheduled cooperatively. On operating systems that do not provide fibers, an application may implement its own fibers using repeated calls to worker functions. Fibers are even more lightweight than threads, and somewhat easier to program with, although they tend to lose some or all of the benefits of threads on [machines with multiple processors](https://en.wikipedia.org/wiki/Multiprocessing "Multiprocessing").[^16]

Some systems directly support [multithreading in hardware](https://en.wikipedia.org/wiki/Multithreading_\(computer_architecture\) "Multithreading (computer architecture)").

## Memory protection

Essential to any multitasking system is to safely and effectively share access to system resources. Access to memory must be strictly managed to ensure that no process can inadvertently or deliberately read or write to memory locations outside the process's address space. This is done for the purpose of general system stability and data integrity, as well as data security.

In general, memory access management is a responsibility of the operating system kernel, in combination with hardware mechanisms that provide supporting functionalities, such as a [memory management unit](https://en.wikipedia.org/wiki/Memory_management_unit "Memory management unit") (MMU). If a process attempts to access a memory location outside its memory space, the MMU denies the request and signals the kernel to take appropriate actions; this usually results in forcibly terminating the offending process. Depending on the software and kernel design and the specific error in question, the user may receive an access violation error message such as "segmentation fault".

In a well designed and correctly implemented multitasking system, a given process can never directly access memory that belongs to another process. An exception to this rule is in the case of shared memory; for example, in the [System V](https://en.wikipedia.org/wiki/UNIX_System_V "UNIX System V") inter-process communication mechanism the kernel allocates memory to be mutually shared by multiple processes. Such features are often used by database management software such as PostgreSQL.

Inadequate memory protection mechanisms, either due to flaws in their design or poor implementations, allow for security vulnerabilities that may be potentially exploited by malicious software.

## Memory swapping

Use of a [swap file](https://en.wikipedia.org/wiki/Virtual_memory "Virtual memory") or swap partition is a way for the operating system to provide more memory than is physically available by keeping portions of the primary memory in [secondary storage](https://en.wikipedia.org/wiki/Secondary_storage "Secondary storage"). While multitasking and memory swapping are two completely unrelated techniques, they are very often used together, as swapping memory allows more tasks to be loaded at the same time. Typically, a multitasking system allows another process to run when the running process hits a point where it has to wait for some portion of memory to be reloaded from secondary storage.[^17]

## Programming

Over the years, multitasking systems have been refined. Modern operating systems generally include detailed mechanisms for prioritizing processes, while [symmetric multiprocessing](https://en.wikipedia.org/wiki/Symmetric_multiprocessing "Symmetric multiprocessing") has introduced new complexities and capabilities.[^18]

## See also

- [Process state](https://en.wikipedia.org/wiki/Process_state "Process state")
- [Task switching](https://en.wikipedia.org/wiki/Context_switch "Context switch")

## References

[^1]: ["Concurrency vs Parallelism, Concurrent Programming vs Parallel Programming"](https://web.archive.org/web/20160407121734/https://blogs.oracle.com/yuanlin/entry/concurrency_vs_parallelism_concurrent_programming). Oracle. Archived from [the original](https://blogs.oracle.com/yuanlin/entry/concurrency_vs_parallelism_concurrent_programming) on April 7, 2016. Retrieved March 23, 2016.

[^2]: Anthony Ralston, Edwin D. Reilly (ed),*Encyclopedia of Computer Science Third Edition*, Van Nostrand Reinhold, 1993, [ISBN](https://en.wikipedia.org/wiki/ISBN_\(identifier\) "ISBN (identifier)") [0-442-27679-6](https://en.wikipedia.org/wiki/Special:BookSources/0-442-27679-6 "Special:BookSources/0-442-27679-6"), articles "Multitasking" and "Multiprogramming"

[^3]: Bataille, M. (1972-04-01). "Something old: the Gamma 60 the computer that was ahead of its time". ACM SIGARCH Computer Architecture News. 1 (2): 10–15. doi:10.1145/641276.641278. ISSN 0163-5964.

[^4]: [*MASTER PROGRAME AND PROGRAMME TRIALS SYSTEM PART 1 MASTER PROGRAMME SPECIFICATION*](http://settle.ddns.net/LeoMan/Vol4P1.htm). February 1965. section 6 "PRIORITY CONTROL ROUTINES".

[^5]: Lithmee (2019-05-20). ["What is the Difference Between Batch Processing and Multiprogramming"](https://pediaa.com/what-is-the-difference-between-batch-processing-and-multiprogramming/). *Pediaa.Com*. Retrieved 2020-04-14.

[^6]: ["Evolution of Operating System"](https://www.notesjam.com/2017/09/evolution-of-operating-system.html). 2017-09-29. Retrieved 2020-04-14.

[^7]: ["Preemptive multitasking"](http://www.riscos.info/index.php/Preemptive_multitasking). *riscos.info*. 2009-11-03. Retrieved 2014-07-27.

[^8]: ["UNIX, Part One"](http://www.ibiblio.org/team/intro/unix/what.html). *The Digital Research Initiative*. ibiblio.org. 2002-01-30. Retrieved 2014-01-09.

[^9]: Downard, Dan (September 1983). ["Dynamic Uno"](https://archive.org/details/198309Rainbow/page/236/mode/2up). *The Rainbow*. pp. 236– 240. Retrieved 9 May 2024.

[^10]: [*1984 TRS-80 Catalog*](https://archive.org/details/RSC-11_Computer_Catalog_1984_Radio_Shack_a/page/n52/mode/1up). Tandy Corporation. 1984. pp. 53– 54. Retrieved 14 May 2024.

[^11]: Joseph Moran (June 2006). ["Windows 2000 &16-Bit Applications"](https://web.archive.org/web/20090125104811/http://www.smartcomputing.com/editorial/article.asp?article=articles%2F2005%2Fs1606%2F08s06%2F08s06.asp). *[Smart Computing](https://en.wikipedia.org/wiki/Smart_Computing "Smart Computing")*. Vol. 16, no. 6. pp. 32– 33. Archived from [the original](http://www.smartcomputing.com/editorial/article.asp?article=articles%2F2005%2Fs1606%2F08s06%2F08s06.asp) on January 25, 2009.

[^12]: Liu, C. L.; Layland, James W. (1973-01-01). ["Scheduling Algorithms for Multiprogramming in a Hard-Real-Time Environment"](https://doi.org/10.1145%2F321738.321743). *Journal of the ACM*. **20** (1): 46– 61. [doi](https://en.wikipedia.org/wiki/Doi_\(identifier\) "Doi (identifier)"):[10.1145/321738.321743](https://doi.org/10.1145%2F321738.321743). [ISSN](https://en.wikipedia.org/wiki/ISSN_\(identifier\) "ISSN (identifier)") [0004-5411](https://search.worldcat.org/issn/0004-5411). [S2CID](https://en.wikipedia.org/wiki/S2CID_\(identifier\) "S2CID (identifier)") [59896693](https://api.semanticscholar.org/CorpusID:59896693).

[^13]: Eduardo Ciliendo; Takechika Kunimasa (April 25, 2008). ["Linux Performance and Tuning Guidelines"](https://web.archive.org/web/20150226022205/http://www.redbooks.ibm.com/redpapers/pdfs/redp4285.pdf) (PDF). *redbooks.ibm.com*. [IBM](https://en.wikipedia.org/wiki/IBM "IBM"). p. 4. Archived from [the original](http://www.redbooks.ibm.com/redpapers/pdfs/redp4285.pdf) (PDF) on February 26, 2015. Retrieved March 1, 2015.

[^14]: ["Context Switch Definition"](https://web.archive.org/web/20100218115342/http://www.linfo.org/context_switch.html). *linfo.org*. May 28, 2006. Archived from [the original](http://www.linfo.org/context_switch.html) on February 18, 2010. Retrieved February 26, 2015.

[^15]: ["What are threads (user/kernel)?"](http://www.tldp.org/FAQ/Threads-FAQ/Types.html). *tldp.org*. September 8, 1997. Retrieved February 26, 2015.

[^16]: [Multitasking different methods](http://csmoraitis.weebly.com/uploads/1/4/1/9/14190245/multitasking_-_different_methods.pdf) Accessed on February 19, 2019

[^17]: ["What is a swap file?"](https://kb.iu.edu/d/aagb). *kb.iu.edu*. Retrieved 2018-03-26.

[^18]: ["Operating Systems Architecture"](http://cis2.oc.ctc.edu/oc_apps/Westlund/xbook/xbook.php?unit=04&proc=page&numb=5). *cis2.oc.ctc.edu*. Retrieved 2018-03-17.