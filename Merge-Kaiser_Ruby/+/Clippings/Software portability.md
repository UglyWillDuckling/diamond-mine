---
source: https://en.wikipedia.org/wiki/Software_portability
author:
  - "[[Contributors to Wikimedia projects]]"
published: 2006-12-12
created: 2026-02-10
tags:
  - design-goal
---
![game|200](https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Utd_platforms.jpg/500px-Utd_platforms.jpg)
> Software portability can be exemplified with multiple devices running the same video game.

**Software portability** is a design objective for [source code](https://en.wikipedia.org/wiki/Source_code "Source code") to be easily made to run on different [platforms](https://en.wikipedia.org/wiki/Computing_platform "Computing platform"). An aid to portability is the generalized [abstraction](https://en.wikipedia.org/wiki/Abstraction_\(computer_science\) "Abstraction (computer science)") between the application logic and [system interfaces](https://en.wikipedia.org/wiki/Interface_\(computer_science\) "Interface (computer science)"). When software with the same functionality is produced for several [computing platforms](https://en.wikipedia.org/wiki/Computing_platform "Computing platform"), portability is the key issue for development cost reduction.

## Strategies

Software portability may involve:

- Transferring installed program files to another computer of basically the same architecture.
- Reinstalling a program from distribution files on another computer of basically the same architecture.
- [Building](https://en.wikipedia.org/wiki/Compiler "Compiler") [executable](https://en.wikipedia.org/wiki/Executable "Executable") programs for different platforms from [source code](https://en.wikipedia.org/wiki/Source_code "Source code"); this is what is usually understood by " [porting](https://en.wikipedia.org/wiki/Porting "Porting") ".

When [operating systems](https://en.wikipedia.org/wiki/Operating_system "Operating system") of the same family are installed on two computers with [processors](https://en.wikipedia.org/wiki/CPU "CPU") with similar [instruction sets](https://en.wikipedia.org/wiki/Instruction_set "Instruction set") it is often possible to transfer the files implementing program files between them.

In the simplest case, the file or files may simply be copied from one machine to the other. However, in many cases, the software is [installed](https://en.wikipedia.org/wiki/Installation_\(computer_programs\) "Installation (computer programs)") on a computer in a way which depends upon its detailed hardware, software, and setup, with [device drivers](https://en.wikipedia.org/wiki/Device_driver "Device driver") for particular devices, using installed operating system and supporting software components, and using different [drives](https://en.wikipedia.org/wiki/Logical_drive "Logical drive") or [directories](https://en.wikipedia.org/wiki/Directory_\(file_systems\) "Directory (file systems)").

In some cases, software, usually described as " [portable software](https://en.wikipedia.org/wiki/Portable_application "Portable application") ", is specifically designed to run on different computers with compatible operating systems and processors, without any machine-dependent installation. Porting is no more than transferring specified directories and their contents. Software installed on portable [mass storage](https://en.wikipedia.org/wiki/Mass_storage "Mass storage") devices such as [USB sticks](https://en.wikipedia.org/wiki/USB_stick "USB stick") can be used on any compatible computer on simply plugging the storage device in, and stores all configuration information on the removable device. Hardware- and software-specific information is often stored in [configuration files](https://en.wikipedia.org/wiki/Configuration_file "Configuration file") in specified locations such as the [registry](https://en.wikipedia.org/wiki/Windows_registry "Windows registry") on [Windows](https://en.wikipedia.org/wiki/Microsoft_Windows "Microsoft Windows")).

Software which is not portable in this sense must be modified much more to support the environment on the destination machine.

### Different processors

As of 2011 the majority of desktop and laptop computers used [microprocessors](https://en.wikipedia.org/wiki/Microprocessor "Microprocessor") compatible with the 32- and 64-bit [x86](https://en.wikipedia.org/wiki/X86 "X86") instruction sets. Smaller portable devices use processors with different and incompatible instruction sets, such as [ARM](https://en.wikipedia.org/wiki/ARM_architecture "ARM architecture"). The difference between larger and smaller devices is such that detailed software operation is different; an application designed to display suitably on a large screen cannot simply be ported to a pocket-sized smartphone with a tiny screen even if the functionality is similar.

[Web applications](https://en.wikipedia.org/wiki/Web_applications "Web applications") are required to be processor independent, so portability can be achieved by using web programming techniques, writing in [JavaScript](https://en.wikipedia.org/wiki/JavaScript "JavaScript"). Such a program can run in a common web browser. Such [web applications](https://en.wikipedia.org/wiki/Web_application "Web application") must, for security reasons, have limited control over the host computer, especially regarding reading and writing files. Non-web programs, installed upon a computer in the normal manner, can have more control, and yet achieve system portability by linking to portable libraries providing the same interface on different systems.

Software can be compiled and [linked](https://en.wikipedia.org/wiki/Linker_\(computing\) "Linker (computing)") from source code for different operating systems and processors if written in a programming language supporting compilation for the platforms. This is usually a task for the program developers; typical users have neither access to the source code nor the required skills.

In [open-source](https://en.wikipedia.org/wiki/Open-source_software "Open-source software") environments such as Linux the source code is available to all. In earlier days source code was often distributed in a standardised format, and could be built into executable code with a standard [Make tool](https://en.wikipedia.org/wiki/Make_\(software\) "Make (software)") for any particular system by moderately knowledgeable users if no errors occurred during the build. Some [Linux distributions](https://en.wikipedia.org/wiki/Linux_distribution "Linux distribution") distribute software to users in source form. In these cases there is usually no need for detailed adaptation of the software for the system; it is distributed in a way which [modifies the compilation process to match the system](https://en.wikipedia.org/wiki/Conditional_compilation "Conditional compilation").

Even with seemingly portable languages like [C](https://en.wikipedia.org/wiki/C_\(programming_language\) "C (programming language)") and [C++](https://en.wikipedia.org/wiki/C%2B%2B "C++"), the effort to port source code can vary considerably. The authors of [UNIX/32V](https://en.wikipedia.org/wiki/UNIX/32V "UNIX/32V") (1979) reported that "\[t\]he [(Bourne) shell](https://en.wikipedia.org/wiki/Bourne_shell "Bourne shell") \[...\] required by far the largest conversion effort of any supposedly portable program, for the simple reason that it is not portable." [^1]

Sometimes the effort consists of recompiling the source code, but sometimes it is necessary to rewrite major parts of the software. Many language specifications describe implementation defined behaviour (e.g. right shifting a signed integer in C can do a [logical](https://en.wikipedia.org/wiki/Logical_shift "Logical shift") or an [arithmetic](https://en.wikipedia.org/wiki/Arithmetic_shift "Arithmetic shift") shift). Operating system functions or third party libraries might not be available on the target system. Some functions can be available on a target system, but exhibit slightly different behavior such as `utime()` fails under Windows with EACCES, when it is called for a directory). The program code can contain unportable things, like the paths of include files, drive letters, or the backslash. Implementation defined things like [byte order](https://en.wikipedia.org/wiki/Endianness "Endianness") and the size of an [int](https://en.wikipedia.org/wiki/Integer_\(computer_science\) "Integer (computer science)") can also raise the porting effort. In practice the claim of languages, like [C](https://en.wikipedia.org/wiki/C_\(programming_language\) "C (programming language)") and [C++](https://en.wikipedia.org/wiki/C%2B%2B "C++"), to have the WOCA ([write once, compile anywhere](https://en.wikipedia.org/wiki/Write_once,_compile_anywhere "Write once, compile anywhere")) is arguable.

## See also

- [C (programming language)](https://en.wikipedia.org/wiki/C_\(programming_language\) "C (programming language)")
- [Cross-platform software](https://en.wikipedia.org/wiki/Cross-platform_software "Cross-platform software")
- [Data portability](https://en.wikipedia.org/wiki/Data_portability "Data portability")
- [Hardware-dependent software](https://en.wikipedia.org/wiki/Hardware-dependent_software "Hardware-dependent software")
- [Interoperability](https://en.wikipedia.org/wiki/Interoperability "Interoperability")
- [Language interoperability](https://en.wikipedia.org/wiki/Language_interoperability "Language interoperability")
- [Portability testing](https://en.wikipedia.org/wiki/Portability_testing "Portability testing")
- [Porting](https://en.wikipedia.org/wiki/Porting "Porting")
- [Source-to-source compiler](https://en.wikipedia.org/wiki/Source-to-source_compiler "Source-to-source compiler")

## References

## Sources

- Mooney (1997). ["Bringing Portability to the Software Process"](https://web.archive.org/web/20080725004932/http://www.cs.wvu.edu/~jdm/research/portability/reports/TR_97-1.pdf) (PDF). *(help)*. West Virginia University. Dept. of Statistics and Computer Science. Archived from [the original](http://www.cs.wvu.edu/~jdm/research/portability/reports/TR_97-1.pdf) (PDF) on 2008-07-25. Retrieved 2008-03-17.
- Garen (2007). ["Software Portability: Weighing Options, Making Choices"](https://web.archive.org/web/20100708221340/http://findarticles.com/p/articles/mi_qa5346/is_200711/ai_n21298624/). *The CPA Journal*. **77** (11): 3. Archived from [the original](http://findarticles.com/p/articles/mi_qa5346/is_200711/ai_n21298624/) on 2010-07-08.
- Lehey (1995). ["Porting UNIX Software: From Download to Debug"](http://www.lemis.com/grog/Documentation/PUS/) (PDF). *(help)*. Retrieved 2010-05-27.

[^1]: Thomas B. London and John F. Reiser (1978). [A Unix operating system for the DEC VAX-11/780 computer](https://www.bell-labs.com/usr/dmr/www/otherports/32vscan.pdf). Bell Labs internal memo 78-1353-4.