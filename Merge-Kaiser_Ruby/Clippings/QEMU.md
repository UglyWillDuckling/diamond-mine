---
source: https://en.wikipedia.org/wiki/QEMU
author:
  - "[[Contributors to Wikimedia projects]]"
published: 2005-02-04
created: 2025-03-03
tags:
  - virtualization-software
related:
  - "[[Paravirtualization]]"
  - "[[Kernel-based Virtual Machine]]"
---
Free virtualization and emulation software

This article is about the virtual machine monitor. For the Quarterdeck expanded memory manager, see [QEMM](https://en.wikipedia.org/wiki/QEMM "QEMM").

<table><caption>QEMU</caption><tbody><tr><td colspan="2"><span><a href="https://en.wikipedia.org/wiki/File:Qemu_logo.svg"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Qemu_logo.svg/200px-Qemu_logo.svg.png" width="200" height="64"></a></span></td></tr><tr><td colspan="2"><span><a href="https://en.wikipedia.org/wiki/File:QEMU_6.2_screenshot.png"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/QEMU_6.2_screenshot.png/220px-QEMU_6.2_screenshot.png" width="220" height="124"></a></span><p>The free operating system <a href="https://en.wikipedia.org/wiki/OpenIndiana">OpenIndiana</a> running within QEMU, which runs as a process on <a href="https://en.wikipedia.org/wiki/Linux">Linux</a></p></td></tr><tr><th scope="row"><a href="https://en.wikipedia.org/wiki/Programmer">Original author(s)</a></th><td><a href="https://en.wikipedia.org/wiki/Fabrice_Bellard">Fabrice Bellard</a></td></tr><tr><th scope="row"><a href="https://en.wikipedia.org/wiki/Programmer">Developer(s)</a></th><td>QEMU team:<br>Peter Maydell, et al.</td></tr><tr><td colspan="2"></td></tr><tr><th scope="row"><a href="https://en.wikipedia.org/wiki/Software_release_life_cycle">Stable release</a></th><td><p>9.2.2<sup><a href="https://en.wikipedia.org/wiki/#cite_note-wikidata-2b0eadbdeecb5bc03517d35ee3a7e191a3ce1f26-v18-1"><span>[</span>1<span>]</span></a></sup>&nbsp;<span><a href="https://www.wikidata.org/wiki/Q624699?uselang=en#P348"><img src="https://upload.wikimedia.org/wikipedia/en/thumb/8/8a/OOjs_UI_icon_edit-ltr-progressive.svg/10px-OOjs_UI_icon_edit-ltr-progressive.svg.png" width="10" height="10"></a></span> / 25 February 2025</p></td></tr><tr><td colspan="2"></td></tr><tr><th scope="row"><a href="https://en.wikipedia.org/wiki/Repository_(version_control)">Repository</a></th><td><div><ul><li><span><a href="https://gitlab.com/qemu-project/qemu">gitlab<wbr>.com<wbr>/qemu-project<wbr>/qemu</a></span> <span><a href="https://www.wikidata.org/wiki/Q624699#P1324"><img src="https://upload.wikimedia.org/wikipedia/en/thumb/8/8a/OOjs_UI_icon_edit-ltr-progressive.svg/10px-OOjs_UI_icon_edit-ltr-progressive.svg.png" width="10" height="10"></a></span></li></ul></div></td></tr><tr><th scope="row">Written in</th><td><a href="https://en.wikipedia.org/wiki/C_(programming_language)">C</a></td></tr><tr><th scope="row"><a href="https://en.wikipedia.org/wiki/Operating_system">Operating system</a></th><td><a href="https://en.wikipedia.org/wiki/Linux">Linux</a>, <a href="https://en.wikipedia.org/wiki/Microsoft_Windows">Microsoft Windows</a>, <a href="https://en.wikipedia.org/wiki/MacOS">macOS</a> and some other <a href="https://en.wikipedia.org/wiki/UNIX">UNIX</a> platforms</td></tr><tr><th scope="row"><a href="https://en.wikipedia.org/wiki/Software_categories#Categorization_approaches">Type</a></th><td><a href="https://en.wikipedia.org/wiki/Hypervisor">Hypervisor</a>, <a href="https://en.wikipedia.org/wiki/Emulator">Emulator</a></td></tr><tr><th scope="row"><a href="https://en.wikipedia.org/wiki/Software_license">License</a></th><td><a href="https://en.wikipedia.org/wiki/GNU_General_Public_License">GPL-2.0-only</a><sup><a href="https://en.wikipedia.org/wiki/#cite_note-2"><span>[</span>2<span>]</span></a></sup></td></tr><tr><th scope="row">Website</th><td><span><a href="https://www.qemu.org/">www<wbr>.qemu<wbr>.org</a></span>&nbsp;<span><span><a href="https://www.wikidata.org/wiki/Q624699?uselang=en#P856"><img src="https://upload.wikimedia.org/wikipedia/en/thumb/8/8a/OOjs_UI_icon_edit-ltr-progressive.svg/10px-OOjs_UI_icon_edit-ltr-progressive.svg.png" width="10" height="10"></a></span></span></td></tr></tbody></table>

The **Quick Emulator** (**QEMU**)[^3] is a [free and open-source](https://en.wikipedia.org/wiki/Free_and_open-source "Free and open-source") [emulator](https://en.wikipedia.org/wiki/Emulator "Emulator") that uses dynamic [binary translation](https://en.wikipedia.org/wiki/Binary_translation "Binary translation") to emulate a [computer](https://en.wikipedia.org/wiki/Computer "Computer")'s [processor](https://en.wikipedia.org/wiki/Central_processing_unit "Central processing unit"); that is, it translates the emulated binary codes to an equivalent binary format which is executed by the machine. It provides a variety of hardware and device models for the virtual machine, enabling it to run different [guest operating systems](https://en.wikipedia.org/wiki/Guest_operating_system "Guest operating system"). QEMU can be used with a [Kernel-based Virtual Machine](https://en.wikipedia.org/wiki/Kernel-based_Virtual_Machine "Kernel-based Virtual Machine") (KVM) to emulate hardware at near-native speeds. Additionally, it supports [user-level processes](https://en.wikipedia.org/wiki/User_space_and_kernel_space "User space and kernel space"), allowing applications compiled for one processor architecture to run on another.[^hoxlz3-4]

QEMU supports the emulation of [x86](https://en.wikipedia.org/wiki/X86 "X86"), [ARM](https://en.wikipedia.org/wiki/ARM_architecture_family "ARM architecture family"), [PowerPC](https://en.wikipedia.org/wiki/PowerPC "PowerPC"), [RISC-V](https://en.wikipedia.org/wiki/RISC-V "RISC-V"), and [other architectures](https://en.wikipedia.org/wiki/#Emulated_hardware_platforms).

QEMU is [free software](https://en.wikipedia.org/wiki/Free_software "Free software") developed by [Fabrice Bellard](https://en.wikipedia.org/wiki/Fabrice_Bellard "Fabrice Bellard"). Different components of QEMU are licensed under the [GNU General Public License](https://en.wikipedia.org/wiki/GNU_General_Public_License "GNU General Public License") (GPL), [BSD license](https://en.wikipedia.org/wiki/BSD_license "BSD license"), [GNU Lesser General Public License](https://en.wikipedia.org/wiki/GNU_Lesser_General_Public_License "GNU Lesser General Public License") (LGPL), or other GPL-compatible licenses.[^tlxvo3-5]

QEMU has multiple operating modes:[^uvhfu3-6]

- **User-mode emulation.** In the user emulation mode, QEMU runs single [Linux](https://en.wikipedia.org/wiki/Linux "Linux") or [Darwin](https://en.wikipedia.org/wiki/Darwin_\(operating_system\) "Darwin (operating system)")/[macOS](https://en.wikipedia.org/wiki/MacOS "MacOS") programs that were compiled for a different [instruction set](https://en.wikipedia.org/wiki/Instruction_set "Instruction set"). [System calls](https://en.wikipedia.org/wiki/System_call "System call") are [thunked](https://en.wikipedia.org/wiki/Thunk "Thunk") for [endianness](https://en.wikipedia.org/wiki/Endianness "Endianness") and for 32/64-bit mismatches. Fast [cross-compilation](https://en.wikipedia.org/wiki/Cross-compilation "Cross-compilation") and cross-debugging are the main targets for user-mode emulation.
- **System emulation.** In the system emulation mode, QEMU emulates a full computer system, including [peripherals](https://en.wikipedia.org/wiki/Peripheral "Peripheral"). It can be used to provide virtual hosting of several virtual computers on a single computer. QEMU can boot many guest [operating systems](https://en.wikipedia.org/wiki/Operating_system "Operating system"), including [Linux](https://en.wikipedia.org/wiki/Linux "Linux"), [Solaris](https://en.wikipedia.org/wiki/Solaris_\(operating_system\) "Solaris (operating system)"), [Microsoft Windows](https://en.wikipedia.org/wiki/Microsoft_Windows "Microsoft Windows"), [DOS](https://en.wikipedia.org/wiki/DOS "DOS"), and [BSD](https://en.wikipedia.org/wiki/BSD "BSD");[^yfwuu3-7] it supports emulating several instruction sets, including [x86](https://en.wikipedia.org/wiki/X86 "X86"), [x86-64](https://en.wikipedia.org/wiki/X86-64 "X86-64"), [MIPS](https://en.wikipedia.org/wiki/MIPS_architecture "MIPS architecture"), [ARMv7](https://en.wikipedia.org/wiki/ARMv7 "ARMv7"), [ARMv8](https://en.wikipedia.org/wiki/ARMv8 "ARMv8"), [PowerPC](https://en.wikipedia.org/wiki/PowerPC "PowerPC"), [RISC-V](https://en.wikipedia.org/wiki/RISC-V "RISC-V"), [SPARC](https://en.wikipedia.org/wiki/SPARC "SPARC"), [ETRAX CRIS](https://en.wikipedia.org/wiki/ETRAX_CRIS "ETRAX CRIS") and [MicroBlaze](https://en.wikipedia.org/wiki/MicroBlaze "MicroBlaze").
- **Hypervisor support.** In the hypervisor support mode, QEMU either acts as a Virtual Machine Manager (VMM) or as a device emulation back-end for [virtual machines](https://en.wikipedia.org/wiki/Virtual_machines "Virtual machines") running under a [hypervisor](https://en.wikipedia.org/wiki/Hypervisor "Hypervisor"). The most common is Linux's [KVM](https://en.wikipedia.org/wiki/Kernel-based_Virtual_Machine "Kernel-based Virtual Machine") but the project supports a number of hypervisors including [Xen](https://en.wikipedia.org/wiki/Xen "Xen"), Apple's HVF, Windows' WHPX, and NetBSD's NVMM.[^8]

QEMU supports the emulation of various architectures, including [x86](https://en.wikipedia.org/wiki/X86 "X86"), [MIPS64](https://en.wikipedia.org/wiki/MIPS_architecture "MIPS architecture") (up to Release 6),[^aleni3-9] [SPARC](https://en.wikipedia.org/wiki/SPARC "SPARC") (sun4m and sun4u), [ARM](https://en.wikipedia.org/wiki/ARM_architecture "ARM architecture") (Integrator/CP and Versatile/PB), [SuperH](https://en.wikipedia.org/wiki/SuperH "SuperH"), [PowerPC](https://en.wikipedia.org/wiki/PowerPC "PowerPC") ([PReP](https://en.wikipedia.org/wiki/PReP "PReP") and [Power Macintosh](https://en.wikipedia.org/wiki/Power_Macintosh "Power Macintosh")), [ETRAX CRIS](https://en.wikipedia.org/wiki/ETRAX_CRIS "ETRAX CRIS"), [MicroBlaze](https://en.wikipedia.org/wiki/MicroBlaze "MicroBlaze"), and [RISC-V](https://en.wikipedia.org/wiki/RISC-V "RISC-V"). It supports saving the virtual machine state while all programs are running. Guest operating systems do not need patching to run inside QEMU.

The virtual machine can interface with many types of physical host hardware, including the user's hard disks, [CD-ROM drives](https://en.wikipedia.org/wiki/Optical_disc_drive "Optical disc drive"), [network cards](https://en.wikipedia.org/wiki/Network_interface_controller "Network interface controller"), [audio interfaces](https://en.wikipedia.org/wiki/Sound_card "Sound card"), and USB devices. USB devices can be emulated entirely, or the host's USB devices can be used, although this requires administrator privileges and does not work with some devices.

Virtual disk images can be stored in [QCOW](https://en.wikipedia.org/wiki/QCOW "QCOW") format, which can significantly reduce image size. QCOW images only occupy the actual used disk space, not the full configured capacity. This means a configured 120 GB disk may only occupy a few hundred megabytes on the host, as QCOW does not store unused disk space in the image file.

The QCOW2 format also allows the creation of overlay images, which are files that store only the changes made from an original (unmodified) base image file. This enables the emulated disk's contents to be reverted to an earlier state. For instance, a base image could contain a fresh installation of a known working operating system, and overlay images can be used to record changes. Should the guest system become unusable (through virus attack, accidental system destruction, etc.), the user can delete the overlay and use an earlier emulated disk image.

QEMU can emulate network cards (of different models) that share the host system's connectivity by translating network addresses, effectively allowing the guest to use the same network as the host. The virtual network cards can also connect to network cards of other instances of QEMU or to local [TAP](https://en.wikipedia.org/wiki/TUN/TAP "TUN/TAP") interfaces. Network connectivity can also be achieved by bridging a TUN/TAP interface used by QEMU with a non-virtual Ethernet interface on the host OS using the host OS's bridging features.

QEMU integrates several services to allow the host and guest systems to communicate for example: an integrated [SMB](https://en.wikipedia.org/wiki/Server_Message_Block "Server Message Block") server and network-port redirection (to allow incoming connections to the virtual machine). It can also boot Linux kernels without a [bootloader](https://en.wikipedia.org/wiki/Bootloader "Bootloader").

QEMU does not depend on the presence of graphical output methods on the host system. Instead, it provides access to the guest OS screen via an integrated [VNC](https://en.wikipedia.org/wiki/VNC "VNC") server. It can also use an emulated serial line without any screen, with applicable operating systems.

Simulating multiple CPUs running [SMP](https://en.wikipedia.org/wiki/Symmetric_multiprocessing "Symmetric multiprocessing") is possible.

QEMU does not require administrative rights to run unless additional kernel modules are used to improve speed (like [KQEMU](https://en.wikipedia.org/wiki/#Accelerator)) or certain modes of its network connectivity model are utilized.

### Tiny Code Generator

The Tiny Code Generator (TCG) aims to remove the shortcoming of relying on a particular version of [GCC](https://en.wikipedia.org/wiki/GNU_Compiler_Collection "GNU Compiler Collection") or any [compiler](https://en.wikipedia.org/wiki/Compiler "Compiler"), instead incorporating the compiler into other tasks performed by QEMU at run time. The whole translation task thus consists of two parts: [basic blocks](https://en.wikipedia.org/wiki/Basic_block "Basic block") of target code (*TBs*) being rewritten in *TCG ops* – a kind of machine-independent intermediate notation, and subsequently this notation being compiled for the host's architecture by TCG. Optional optimization passes are performed between them, for a [just-in-time compiler](https://en.wikipedia.org/wiki/Just-in-time_compiler "Just-in-time compiler") (JIT) mode.

TCG requires dedicated code written to support every architecture it runs on, so that the JIT knows what to translate the *TCG ops* to. If no dedicated JIT code is available for the architecture, TCG falls back to a slow [interpreter](https://en.wikipedia.org/wiki/Interpreter_\(computing\) "Interpreter (computing)") mode called TCG Interpreter (TCI). It also requires updating the target code to use TCG ops instead of the old *DynGen* ops.<sup class="noprint Inline-Template">[<i><a href="https://en.wikipedia.org/wiki/Wikipedia:Please_clarify" title="Wikipedia:Please clarify"><span title="This appears to be a unique usage of the jargon &quot;dyngen&quot;, researching this term, it appears to be more commonly used in the cellular simulation space. (December 2024)">clarification needed</span></a></i>]</sup>

Starting with QEMU Version 0.10.0, TCG ships with the QEMU stable release. It replaces *DynGen*, which relied on GCC 3.x to work.[^dhnag3-10][^8nz3y3-11]

KQEMU was a [Linux kernel](https://en.wikipedia.org/wiki/Linux_kernel "Linux kernel") [module](https://en.wikipedia.org/wiki/Loadable_kernel_module "Loadable kernel module"), also written by [Fabrice Bellard](https://en.wikipedia.org/wiki/Fabrice_Bellard "Fabrice Bellard"), which notably sped up emulation of x86 or x86-64 guests on platforms with the same CPU architecture. This worked by running [user mode](https://en.wikipedia.org/wiki/User_mode "User mode") code (and optionally some kernel code) directly on the host computer's CPU, and by using processor and peripheral emulation only for [kernel-mode](https://en.wikipedia.org/wiki/Kernel_mode "Kernel mode") and [real-mode](https://en.wikipedia.org/wiki/Real_mode "Real mode") code. KQEMU could execute code from many guest operating systems even if the host CPU did not support [hardware-assisted virtualization](https://en.wikipedia.org/wiki/Hardware-assisted_virtualization "Hardware-assisted virtualization"). KQEMU was initially a [closed-source](https://en.wikipedia.org/wiki/Closed-source "Closed-source") product available free of charge but starting from version 1.3.0pre10 (February 2007),[^xrh6q-12] it was [relicensed](https://en.wikipedia.org/wiki/Software_relicensing "Software relicensing") under the [GNU General Public License](https://en.wikipedia.org/wiki/GNU_General_Public_License "GNU General Public License"). QEMU versions starting with 0.12.0 (as of August 2009<sup class="plainlinks noexcerpt noprint asof-tag update"><a class="external text" href="https://en.wikipedia.org/w/index.php?title=QEMU&amp;action=edit">[update]</a></sup>) support large memory which makes them incompatible with KQEMU.[^kjeba-13] Newer releases of QEMU have completely removed support for KQEMU.

QVM86 was a [GNU GPLv2](https://en.wikipedia.org/wiki/GNU_General_Public_License "GNU General Public License") licensed drop-in replacement for the then closed-source KQEMU. The developers of QVM86 ceased development in January 2007.

[Kernel-based Virtual Machine](https://en.wikipedia.org/wiki/Kernel-based_Virtual_Machine "Kernel-based Virtual Machine") (*KVM*) has mostly taken over as the Linux-based hardware-assisted virtualization solution for use with QEMU following the lack of support for KQEMU and QVM86.<sup class="noprint Inline-Template Template-Fact">[<i><a href="https://en.wikipedia.org/wiki/Wikipedia:Citation_needed" title="Wikipedia:Citation needed"><span title="This claim needs references to reliable sources. (May 2014)">citation needed</span></a></i>]</sup> QEMU can also use KVM on other architectures like [ARM](https://en.wikipedia.org/wiki/ARM_architecture "ARM architecture") and [MIPS](https://en.wikipedia.org/wiki/MIPS_architecture "MIPS architecture").[^aokwh-14]

Intel's Hardware Accelerated Execution Manager (*HAXM*) is an open-source alternative[^wsj2a-15] to KVM for x86-based hardware-assisted virtualization on NetBSD, Linux, Windows and macOS using [Intel VT](https://en.wikipedia.org/wiki/Intel_VT "Intel VT"). As of 2013<sup class="plainlinks noexcerpt noprint asof-tag update"><a class="external text" href="https://en.wikipedia.org/w/index.php?title=QEMU&amp;action=edit">[update]</a></sup> Intel mostly solicits its use with QEMU for Android development.[^g4gd5-16] Starting with version 2.9.0, the official QEMU includes support for HAXM, under the name *Hax*.[^qemu-inv-17]

QEMU also supports the following accelerators:[^qemu-inv-17]

- *hvf*, Apple's `Hypervisor.framework` based on Intel VT.
- *whpx*, Microsoft's Windows Hypervisor Platform based on Intel VT or AMD-V.
- *tcg*, QEMU's own [Tiny Code Generator](https://en.wikipedia.org/wiki/#Tiny_Code_Generator). This is the default.

### Supported disk image formats

QEMU supports the following [disk image](https://en.wikipedia.org/wiki/Disk_image "Disk image") formats:[^x1qxo3-18]

- [macOS](https://en.wikipedia.org/wiki/MacOS "MacOS") [Universal Disk Image Format](https://en.wikipedia.org/wiki/Universal_Disk_Image_Format "Universal Disk Image Format") (`.dmg`) – Read-only
- [Bochs](https://en.wikipedia.org/wiki/Bochs "Bochs") – Read-only
- [Linux](https://en.wikipedia.org/wiki/Linux "Linux") [cloop](https://en.wikipedia.org/wiki/Cloop "Cloop") – Read-only
- [Parallels](https://en.wikipedia.org/wiki/Parallels,_Inc. "Parallels, Inc.") disk image (`.hdd`, `.hds`) – Read-only
- [QEMU copy-on-write](https://en.wikipedia.org/wiki/Qcow "Qcow") (`.qcow2`, `.qed`, `.qcow`, `.cow`)
- [VirtualBox](https://en.wikipedia.org/wiki/VirtualBox "VirtualBox") [Virtual Disk Image](https://en.wikipedia.org/wiki/VDI_\(file_format\) "VDI (file format)") (`.vdi`)
- [Virtual PC](https://en.wikipedia.org/wiki/Virtual_PC "Virtual PC") [Virtual Hard Disk](https://en.wikipedia.org/wiki/VHD_\(file_format\) "VHD (file format)") (`.vhd`)
- Virtual [VFAT](https://en.wikipedia.org/wiki/VFAT "VFAT")
- [VMware](https://en.wikipedia.org/wiki/VMware "VMware") [Virtual Machine Disk](https://en.wikipedia.org/wiki/VMDK "VMDK") (`.vmdk`)
- [Raw images](https://en.wikipedia.org/wiki/IMG_\(file_format\) "IMG (file format)") (`.img`) that contain sector-by-sector contents of a disk
- [CD/DVD images](https://en.wikipedia.org/wiki/ISO_image "ISO image") (`.iso`) that contain sector-by-sector contents of an optical disk (e.g. booting live OSes)[^xfzzb3-19]

The **QEMU Object Model** (QOM) provides a framework for registering types that users can make and instantiating objects from those types.[^the_qemu_object_model_(qom);_repository3-20]

QOM provides the following features:

- System for dynamically registering types
- Support for single-inheritance of types
- Multiple inheritances of stateless interfaces

Virtualization solutions that use QEMU can execute multiple virtual CPUs in parallel. For user-mode emulation, QEMU maps emulated threads to host threads. QEMU can run a host thread for each emulated virtual CPU (vCPU) for full system emulation. This depends on the guest being updated to support parallel system emulation, currently ARM, Alpha, HP-PA, PowerPC, RISC-V, s390x, x86, and Xtensa. Otherwise, a single thread is used to emulate all virtual CPUs (vCPUs), which executes each vCPU in a round-robin manner.

[VirtualBox](https://en.wikipedia.org/wiki/VirtualBox "VirtualBox"), first released in January 2007, used some of QEMU's virtual hardware devices, and had a built-in [dynamic re-compiler](https://en.wikipedia.org/wiki/Dynamic_recompilation "Dynamic recompilation") based on QEMU. As with KQEMU, VirtualBox runs nearly all guest code natively on the host via the VMM (Virtual Machine Manager) and uses the re-compiler only as a fallback mechanism – for example, when guest code executes in [real mode](https://en.wikipedia.org/wiki/Real_mode "Real mode").[^lmj9l3-21] In addition, VirtualBox did a lot of code analysis and patching using a built-in disassembler to minimize recompilation. VirtualBox is free and open-source (available under [GPL](https://en.wikipedia.org/wiki/GNU_General_Public_License "GNU General Public License")), except for certain features.

[Xen](https://en.wikipedia.org/wiki/Xen "Xen"), a virtual machine monitor, can run in HVM (hardware virtual machine) mode, using [Intel VT-x](https://en.wikipedia.org/wiki/Intel_VT-x "Intel VT-x") or [AMD-V](https://en.wikipedia.org/wiki/AMD-V "AMD-V") hardware [x86 virtualization](https://en.wikipedia.org/wiki/X86_virtualization "X86 virtualization") extensions and [ARM](https://en.wikipedia.org/wiki/ARM_architecture "ARM architecture") [Cortex-A7](https://en.wikipedia.org/wiki/ARM_Cortex-A7 "ARM Cortex-A7") and [Cortex-A15](https://en.wikipedia.org/wiki/ARM_Cortex-A15 "ARM Cortex-A15") virtualization extensions.[^zfej33-22] This means that instead of para-virtualized devices, a real set of virtual hardware is exposed to the DomU, enabling it to use real device drivers.

QEMU includes several components: CPU emulators, emulated devices, generic devices, machine descriptions, user interface, and a debugger. The emulated devices and generic devices in QEMU make up its device models for I/O virtualization.[^fu2i73-23] They comprise a PIIX3 IDE (with some rudimentary PIIX4 capabilities), Cirrus Logic or plain VGA emulated video, RTL8139 or E1000 network emulation, and ACPI support.[^29ixu3-24] APIC support is provided by Xen.

Xen-HVM utilizes device emulation based on the QEMU project to deliver I/O virtualization to virtual machines (VMs). Hardware is emulated through a QEMU "device model" daemon running as a backend in Dom0. Unlike other QEMU modes, such as dynamic translation or KVM, the hypervisor fully manages virtual CPUs, pausing them as necessary while QEMU handles memory-mapped I/O emulation.

[KVM](https://en.wikipedia.org/wiki/Kernel-based_Virtual_Machine "Kernel-based Virtual Machine") (Kernel-based Virtual Machine) is a FreeBSD and Linux kernel module that allows a [user space](https://en.wikipedia.org/wiki/User_space "User space") program access to the [hardware virtualization](https://en.wikipedia.org/wiki/Hardware-assisted_virtualization "Hardware-assisted virtualization") features of various processors, with which QEMU can offer virtualization for x86, PowerPC, and S/390 guests. When the target architecture is the same as the host architecture, QEMU can make use of KVM particular features, such as acceleration.

### Win4Lin Pro Desktop

In early 2005, [Win4Lin](https://en.wikipedia.org/wiki/Win4Lin "Win4Lin") introduced Win4Lin Pro Desktop, based on a 'tuned' version of QEMU and KQEMU and it hosts NT-versions of Windows. In June 2006,[^7mfdb3-25] Win4Lin released Win4Lin Virtual Desktop Server based on the same code base. Win4Lin Virtual Desktop Server serves Microsoft Windows sessions to thin clients from a Linux server.

In September 2006, Win4Lin announced a change of the company name to [Virtual Bridges](https://web.archive.org/web/20110613051010/http://www.vbridges.com/home.php) with the release of Win4BSD Pro Desktop, a port of the product to FreeBSD and PC-BSD. Solaris support followed in May 2007 with the release of Win4Solaris Pro Desktop and Win4Solaris Virtual Desktop Server.[^jga1d3-26]

SerialICE is a QEMU-based firmware debugging tool running system firmware inside of QEMU while accessing real hardware through a serial connection to a host system. This can be used as a cheap replacement for hardware [in-circuit emulators](https://en.wikipedia.org/wiki/In-circuit_emulation "In-circuit emulation") (ICE).[^sedrl3-27]

[WinUAE](https://en.wikipedia.org/wiki/UAE_\(emulator\) "UAE (emulator)") introduced support for the [CyberStorm PPC and Blizzard 603e boards](https://en.wikipedia.org/wiki/PowerUP_\(accelerator\) "PowerUP (accelerator)") using the QEMU PPC core in version 3.0.0.[^n2prw3-28]

Unicorn is a CPU emulation framework based on QEMU's "TCG" CPU emulator. Unlike QEMU, Unicorn focuses on the CPU *only*: no emulation of any peripherals is provided and raw binary code (outside of the context of an executable file or a system image) can be run directly. Unicorn is thread-safe and has multiple bindings and instrumentation interfaces.[^ggqxj3-29]

### Limbo x86 PC Emulator

Limbo is an x86 and [ARM64](https://en.wikipedia.org/wiki/ARM64 "ARM64") QEMU-based virtual machine for Android.[^30] It is one of the few pieces of virtual machine software available for Android capable of emulating Microsoft Windows,[^31] although it was designed to emulate Linux and DOS. Unlike other QEMU-based emulators, it does not require users to type commands to use, instead having a user interface to set the virtual machine's settings.

It is more popular in developing countries in Asia such as India, Malaysia, and Thailand on YouTube due to the high usage of the Android Operating System.[^32] Limbo was removed from the Google Play Store for unknown reasons between February 2019 and December 2020, though it can still be installed off the developer's website with an [APK](https://en.wikipedia.org/wiki/Apk_\(file_format\) "Apk (file format)") (Android Package) installation.[^33] Limbo tends to have issues regarding its audio quality and playback. No fixes have been found for these problems as of 2024.[^34] Overall, Limbo is less well-known than other virtual machine software, which leads to less available information regarding its troubleshooting.

It is required to install an application known as "Hacker's Keyboard" to use many keyboard functions that a basic Android keyboard cannot do in Limbo x86, such as the Ctrl, Alt, Del, and function keys.[^35] It is recommended to install Hacker's Keyboard with an APK file, as the Google Play version says it doesn't work with newer versions of Android.[^36]<sup class="noprint Inline-Template">[<i><a href="https://en.wikipedia.org/wiki/Wikipedia:Verifiability" title="Wikipedia:Verifiability"><span title="Could not find about APK files on the store page, is it collapsed somewhere? (October 2024)">verification needed</span></a></i>]</sup>

## Emulated hardware platforms

QEMU can emulate the [i386](https://en.wikipedia.org/wiki/I386 "I386") and [x86\_64](https://en.wikipedia.org/wiki/X86-64 "X86-64") architectures. Besides the [CPU](https://en.wikipedia.org/wiki/Central_processing_unit "Central processing unit")[^37] (which is also configurable and can emulate a number of Intel CPU models including as of 3 March 2018 [Sandy Bridge](https://en.wikipedia.org/wiki/Sandy_Bridge_\(microarchitecture\) "Sandy Bridge (microarchitecture)"),[^ajmso3-38] [Ivy Bridge](https://en.wikipedia.org/wiki/Ivy_Bridge_\(microarchitecture\) "Ivy Bridge (microarchitecture)"),[^oinga3-39] [Haswell](https://en.wikipedia.org/wiki/Haswell_\(microarchitecture\) "Haswell (microarchitecture)"),[^auto3-40] [Broadwell](https://en.wikipedia.org/wiki/Broadwell_\(microarchitecture\) "Broadwell (microarchitecture)")[^dxjgf3-41][^nstb33-42] and [Skylake](https://en.wikipedia.org/wiki/Skylake_\(microarchitecture\) "Skylake (microarchitecture)")[^auto3-40]), the following devices are emulated:

- [CD](https://en.wikipedia.org/wiki/CD-ROM "CD-ROM")/[DVD-ROM](https://en.wikipedia.org/wiki/DVD "DVD") drive using an [ISO image](https://en.wikipedia.org/wiki/ISO_image "ISO image")
- [Floppy disk](https://en.wikipedia.org/wiki/Floppy_disk "Floppy disk") drive
- [ATA](https://en.wikipedia.org/wiki/Parallel_ATA "Parallel ATA") controller or [Serial ATA](https://en.wikipedia.org/wiki/Serial_ATA "Serial ATA") [AHCI](https://en.wikipedia.org/wiki/AHCI "AHCI") controller
- [Graphics card](https://en.wikipedia.org/wiki/Video_card "Video card"): *Cirrus CLGD 5446 PCI VGA*\-card, Standard-VGA graphics card with Bochs-[VBE](https://en.wikipedia.org/wiki/VESA_BIOS_Extension "VESA BIOS Extension"), Red Hat QXL VGA
- [Network card](https://en.wikipedia.org/wiki/Network_card "Network card"): [Realtek 8139C+](https://en.wikipedia.org/wiki/RTL8139 "RTL8139") PCI, [NE2000](https://en.wikipedia.org/wiki/NE2000 "NE2000") PCI, NE2000 ISA, [PCnet](https://en.wikipedia.org/wiki/AMD_Lance_Am7990 "AMD Lance Am7990"), E1000 (PCI Intel Gigabit Ethernet) and E1000E (PCIe Intel Gigabit Ethernet)[^ibzd73-43][^a1nna3-44]
- [NVMe](https://en.wikipedia.org/wiki/NVMe "NVMe") disk interface
- [Serial port](https://en.wikipedia.org/wiki/Serial_port "Serial port")
- [Parallel port](https://en.wikipedia.org/wiki/Parallel_port "Parallel port")
- [PC speaker](https://en.wikipedia.org/wiki/PC_speaker "PC speaker")
- i440FX/PIIX3 or Q35/ICH9 chipsets
- [PS/2](https://en.wikipedia.org/wiki/PS/2_port "PS/2 port") [mouse](https://en.wikipedia.org/wiki/Mouse_\(computing\) "Mouse (computing)") and [keyboard](https://en.wikipedia.org/wiki/Keyboard_\(computing\) "Keyboard (computing)")
- [SCSI controller](https://en.wikipedia.org/wiki/SCSI_controller "SCSI controller"): LSI MegaRAID SAS 1078, LSI53C895A, NCR53C9x as found in the AMD PCscsi and Tekram DC-390 controllers
- [Sound card](https://en.wikipedia.org/wiki/Sound_card "Sound card"): [Sound Blaster 16](https://en.wikipedia.org/wiki/Sound_Blaster_16 "Sound Blaster 16"), [AudioPCI ES1370](https://en.wikipedia.org/wiki/Ensoniq_AudioPCI "Ensoniq AudioPCI"), [ICH](https://en.wikipedia.org/wiki/I/O_Controller_Hub "I/O Controller Hub") [AC'97](https://en.wikipedia.org/wiki/AC%2797 "AC'97"), [Gravis Ultrasound](https://en.wikipedia.org/wiki/Gravis_Ultrasound "Gravis Ultrasound"), and [Intel HD Audio](https://en.wikipedia.org/wiki/Intel_High_Definition_Audio "Intel High Definition Audio")[^0.143-45]
- [Watchdog timer](https://en.wikipedia.org/wiki/Watchdog_timer "Watchdog timer") (Intel 6300 ESB PCI, or iB700 ISA)
- [USB](https://en.wikipedia.org/wiki/USB "USB") 1.x/2.x/3.x controllers ([UHCI](https://en.wikipedia.org/wiki/Universal_Host_Controller_Interface "Universal Host Controller Interface"), [EHCI](https://en.wikipedia.org/wiki/EHCI "EHCI"), [xHCI](https://en.wikipedia.org/wiki/XHCI "XHCI"))
- USB devices: Audio, Bluetooth dongle, [HID](https://en.wikipedia.org/wiki/Human_Interface_Device "Human Interface Device") (keyboard/mouse/tablet), [MTP](https://en.wikipedia.org/wiki/Media_Transfer_Protocol "Media Transfer Protocol"), serial interface, [CAC](https://en.wikipedia.org/wiki/Common_Access_Card "Common Access Card") smartcard reader, storage ([bulk-only transfer](https://en.wikipedia.org/wiki/USB_mass_storage_device_class "USB mass storage device class") and [USB Attached SCSI](https://en.wikipedia.org/wiki/USB_Attached_SCSI "USB Attached SCSI")), Wacom tablet
- Paravirtualized VirtIO devices: block device, network card, SCSI controller, video device, serial interface, [balloon driver](https://en.wikipedia.org/wiki/Balloon_driver "Balloon driver"), [9pfs](https://en.wikipedia.org/wiki/9P_\(protocol\) "9P (protocol)") filesystem driver
- Paravirtualized Xen devices: block device, network card, console, framebuffer and input device

The [BIOS](https://en.wikipedia.org/wiki/BIOS "BIOS") implementation used by QEMU starting from version 0.12 is [SeaBIOS](https://en.wikipedia.org/wiki/SeaBIOS "SeaBIOS"). The VGA BIOS implementation of SeaBIOS is also used starting from version 2.0.0. The [UEFI](https://en.wikipedia.org/wiki/UEFI "UEFI") firmware for QEMU is OVMF.[^urozo3-46]

QEMU emulates the following [PowerMac](https://en.wikipedia.org/wiki/PowerMac "PowerMac") peripherals:

- UniNorth PCI bridge
- PCI-VGA-compatible graphics card which maps the *VESA Bochs Extensions*
- Two PMAC-IDE-Interfaces with hard disk and CD-ROM support.
- [NE2000](https://en.wikipedia.org/wiki/NE2000 "NE2000") PCI adapter
- Non-volatile RAM
- VIA-CUDA with [ADB](https://en.wikipedia.org/wiki/Apple_Desktop_Bus "Apple Desktop Bus") keyboard and mouse.

[OpenBIOS](https://en.wikipedia.org/wiki/OpenBIOS "OpenBIOS") is used as the firmware.

QEMU emulates the following [PREP](https://en.wikipedia.org/wiki/PowerPC_Reference_Platform "PowerPC Reference Platform") peripherals:

- PCI bridge
- PCI VGA-compatible graphics card with *VESA Bochs Extensions*
- Two IDE interfaces with hard disk and CD-ROM support
- Floppy disk drive
- [NE2000](https://en.wikipedia.org/wiki/NE2000 "NE2000") network adapter
- Serial interface
- PREP non-volatile RAM
- PC-compatible keyboard and mouse

On the PREP target, *Open Hack'Ware*, an [Open-Firmware](https://en.wikipedia.org/wiki/Open_Firmware "Open Firmware")\-compatible BIOS, is used.

QEMU can emulate the paravirtual sPAPR interface with the following peripherals:

- PCI bridge, for access to VirtIO devices, VGA-compatible graphics, USB, etc.
- Virtual I/O network adapter, SCSI controller, and serial interface
- sPAPR non-volatile RAM

On the sPAPR target, another Open-Firmware-compatible BIOS is used, called SLOF.

![](https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/QEMU_ARM_Fedora_Login1.png/220px-QEMU_ARM_Fedora_Login1.png)

QEMU booted into the ARM port of [Fedora 8](https://en.wikipedia.org/wiki/Fedora_\(operating_system\) "Fedora (operating system)")

QEMU emulates the [ARMv7](https://en.wikipedia.org/wiki/ARMv7 "ARMv7") [instruction set](https://en.wikipedia.org/wiki/Instruction_set "Instruction set") (and down to ARMv5TEJ) with NEON extension.[^mk8vo-47] It emulates full systems like Integrator/CP board, Versatile baseboard, RealView Emulation baseboard, XScale-based PDAs, Palm Tungsten|E PDA, [Nokia N800](https://en.wikipedia.org/wiki/Nokia_N800 "Nokia N800") and [Nokia N810](https://en.wikipedia.org/wiki/Nokia_N810 "Nokia N810") Internet tablets, etc. QEMU also powers the Android emulator which is part of the [Android SDK](https://en.wikipedia.org/wiki/Android_software_development "Android software development") (most current Android implementations are ARM-based). Starting from version 2.0.0 of their Bada SDK, Samsung has chosen QEMU to help development on emulated 'Wave' devices.

In 1.5.0 and 1.6.0, Samsung [Exynos](https://en.wikipedia.org/wiki/Exynos "Exynos") 4210 (dual-core Cortex-A9) and Versatile Express [ARM Cortex-A9](https://en.wikipedia.org/wiki/ARM_Cortex-A9 "ARM Cortex-A9") [ARM Cortex-A15](https://en.wikipedia.org/wiki/ARM_Cortex-A15 "ARM Cortex-A15") are emulated. In 1.6.0, the 32-bit instructions of the ARMv8 (AArch64) architecture are emulated, but 64-bit instructions are unsupported.

The Xilinx Cortex A9-based Zynq SoC includes the following components:

- Zynq-7000 ARM Cortex-A9 CPU
- Zynq-7000 ARM Cortex-A9 MPCore
- Triple Timer Counter
- DDR Memory Controller
- DMA Controller (PL330)
- Static Memory Controller (NAND/NOR Flash)
- SD/SDIO Peripheral Controller (SDHCI)
- Zynq Gigabit Ethernet Controller
- USB Controller (EHCI – Host support only)
- Zynq UART Controller
- SPI and QSPI Controllers
- I2C Controller

QEMU can emulate 64-bit "[A-profile](https://en.wikipedia.org/wiki/ARM_Cortex-A "ARM Cortex-A")" CPUs that commonly run Linux such as the [ARM Cortex-A53](https://en.wikipedia.org/wiki/ARM_Cortex-A53 "ARM Cortex-A53") and the [ARM Cortex-A72](https://en.wikipedia.org/wiki/ARM_Cortex-A72 "ARM Cortex-A72"). This allows it to emulate the [Raspberry Pi](https://en.wikipedia.org/wiki/Raspberry_Pi "Raspberry Pi") 3 and 4.[^48]

QEMU has support for both 32- and 64-bit [SPARC](https://en.wikipedia.org/wiki/SPARC "SPARC") architectures.

When the firmware in the [JavaStation](https://en.wikipedia.org/wiki/JavaStation "JavaStation") (sun4m Architecture) was updated to version 0.8.1,[^people_redhat_com_zaitcev_proll-49] Proll—a [PROM](https://en.wikipedia.org/wiki/Programmable_ROM "Programmable ROM") replacement—was replaced with [OpenBIOS](https://en.wikipedia.org/wiki/OpenBIOS "OpenBIOS") in version 0.8.2.

#### SPARC32

QEMU emulates the following *[sun4m/sun4c/sun4d](https://en.wikipedia.org/wiki/Sun-4#Sun-4_architecture "Sun-4")* peripherals:

- IOMMU or IO-UNITs
- TCX Frame buffer (graphics card)
- [Lance (Am7990)](https://en.wikipedia.org/wiki/AMD_Lance_Am7990 "AMD Lance Am7990") [Ethernet](https://en.wikipedia.org/wiki/Ethernet "Ethernet")
- Non-volatile RAM [M48T02/M48T08](https://en.wikipedia.org/wiki/SPARCstation_1#NVRAM "SPARCstation 1")
- Slave I/O: timers, interrupt controllers, [Zilog](https://en.wikipedia.org/wiki/Zilog "Zilog") serial ports, keyboard and power/reset logic
- ESP SCSI controller with hard disk and CD-ROM support
- Floppy drive (not on SS-600MP)
- CS4231 sound device (only on SS-5, not working yet)

QEMU emulates [Sun4u](https://en.wikipedia.org/wiki/Sun-4#Sun-4_architecture "Sun-4") (UltraSPARC PC-like machine), [Sun4v](https://en.wikipedia.org/wiki/Sun-4#Sun-4_architecture "Sun-4") (T1 PC-like machine), or generic [Niagara](https://en.wikipedia.org/wiki/UltraSPARC_T1 "UltraSPARC T1") (T1) machine with the following peripherals:

- [UltraSparc IIi](https://en.wikipedia.org/wiki/UltraSPARC_II#UltraSPARC_IIi "UltraSPARC II") APB PCI Bridge
- PCI VGA-compatible card with VESA Bochs Extensions
- PS/2 mouse and keyboard
- Non-volatile RAM M48T59
- PC-compatible serial ports
- 2 PCI IDE interfaces with hard disk and CD-ROM support
- Floppy disk

QEMU supports the following peripherals:

- [MicroBlaze](https://en.wikipedia.org/wiki/MicroBlaze "MicroBlaze") with or without MMU, including AXI Timer and Interrupt Controller peripherals.
- AXI External Memory Controller
- AXI DMA Controller
- Xilinx AXI Ethernet
- AXI Ethernet Lite
- AXI UART 16650 and UARTLite
- AXI SPI Controller

Supported peripherals: From the [Milkymist](https://en.wikipedia.org/wiki/Milkymist "Milkymist") SoC

- UART
- VGA
- Memory card
- Ethernet
- pfu
- timer

External trees exist, supporting the following targets:

- [Zilog Z80](https://en.wikipedia.org/wiki/Zilog_Z80 "Zilog Z80")[^homepage_ntlworld_com-z80-50] emulating a [48K ZX Spectrum](https://en.wikipedia.org/wiki/ZX_Spectrum "ZX Spectrum")
- HP [PA-RISC](https://en.wikipedia.org/wiki/PA-RISC "PA-RISC")[^nongnu_org_qemu_links-51]
- [RISC-V](https://en.wikipedia.org/wiki/RISC-V "RISC-V")

- [qcow](https://en.wikipedia.org/wiki/Qcow "Qcow")
- [Comparison of platform virtualization software](https://en.wikipedia.org/wiki/Comparison_of_platform_virtualization_software "Comparison of platform virtualization software")
- [Mtools](https://en.wikipedia.org/wiki/Mtools "Mtools")
- [OVPsim](https://en.wikipedia.org/wiki/OVPsim "OVPsim")
- [Q](https://en.wikipedia.org/wiki/Q_\(emulator\) "Q (emulator)")
- [SIMH](https://en.wikipedia.org/wiki/SIMH "SIMH")
- [SPIM](https://en.wikipedia.org/wiki/SPIM "SPIM")
- [GXemul](https://en.wikipedia.org/wiki/GXemul "GXemul")
- [GNOME Boxes](https://en.wikipedia.org/wiki/GNOME_Boxes "GNOME Boxes")
- [VirtualBox](https://en.wikipedia.org/wiki/VirtualBox "VirtualBox")

[^wikidata-2b0eadbdeecb5bc03517d35ee3a7e191a3ce1f26-v18-1]: ["\[ANNOUNCE\] QEMU 9.2.2 Stable released"](https://lists.nongnu.org/archive/html/qemu-devel/2025-02/msg04939.html). 25 February 2025. Retrieved 25 February 2025.

[^2]: ["License - QEMU"](https://wiki.qemu.org/License).

[^3]: ["Glossary"](https://csrc.nist.gov/glossary/term/qemu). *National Institute of Standards and Technology*. Retrieved 2023-04-24.

[^hoxlz3-4]: Speed, Richard (2019-04-25). ["QEMU 4 arrives with toys for Arm admirers, RISC-V revolutionaries, POWER patriots... you get the idea"](https://www.theregister.co.uk/2019/04/25/qemu_4/). *www.theregister.co.uk*. [The Register](https://en.wikipedia.org/wiki/The_Register "The Register"). [Archived](https://archive.today/20191001070134/https://www.theregister.co.uk/2019/04/25/qemu_4/) from the original on 2019-10-01. Retrieved 2019-10-01.

[^tlxvo3-5]: ["License - QEMU"](http://wiki.qemu.org/License). *wiki.qemu.org*.

[^uvhfu3-6]: ["About QEMU"](https://qemu.readthedocs.io/en/master/about/index.html). *qemu.readthedocs.io*.

[^yfwuu3-7]: ["QEMU OS Support List"](https://web.archive.org/web/20140513145837/http://www.claunia.com/qemu/). *www.claunia.com*. Archived from [the original](http://www.claunia.com/qemu/) on 2014-05-13. Retrieved 2024-03-21. Frequent changes recorded in archive in years before going offline.`{{[cite web](https://en.wikipedia.org/wiki/Template:Cite_web "Template:Cite web")}}`: CS1 maint: postscript ([link](https://en.wikipedia.org/wiki/Category:CS1_maint:_postscript "Category:CS1 maint: postscript"))

[^8]: ["Supported host architectures"](https://qemu.readthedocs.io/en/v8.1.0/about/build-platforms.html#supported-host-architectures).

[^aleni3-9]: ["QEMU PRIP 1 - support for MIPS64 Release 6 - PRPL"](https://web.archive.org/web/20170421171437/http://wiki.prplfoundation.org/wiki/QEMU_PRIP_1_-_support_for_MIPS64_Release_6). *wiki.prplfoundation.org*. Archived from [the original](http://wiki.prplfoundation.org/wiki/QEMU_PRIP_1_-_support_for_MIPS64_Release_6) on 2017-04-21. Retrieved 2014-12-22.

[^dhnag3-10]: ["\[Qemu-devel\] ANNOUNCE: Release 0.10.0 of QEMU"](http://lists.gnu.org/archive/html/qemu-devel/2009-03/msg00154.html). *lists.gnu.org*.

[^8nz3y3-11]: Filardo, Nathaniel (September 11, 2007). ["Porting QEMU to Plan 9: QEMU Internals and Port Strategy"](http://gsoc.cat-v.org/people/nwf/paper-strategy-plus.pdf) (PDF). *gsoc.cat-v.org*. -- a review of how the old dyngen worked

[^xrh6q-12]: ["KQEMU 1.3.0pre10 released - under the GPL \[LWN.net\]"](https://lwn.net/Articles/220807/). Lwn.net. February 6, 2007. Retrieved 2009-01-03.

[^kjeba-13]: Liguori, Anthony (10 August 2009). ["\[Qemu-devel\] \[PATCH 1/2\] Unbreak large mem support by removing kqemu"](http://lists.gnu.org/archive/html/qemu-devel/2009-08/msg00478.html). Retrieved 2010-03-11.

[^aokwh-14]: ["QEMU / KVM CPU model configuration"](https://www.qemu.org/docs/master/system/qemu-cpu-models.html). *QEMU 5.0.50 (v5.0.0-962-g49ee115552) documentation*.

[^wsj2a-15]: ["HAXM goes open source"](https://lists.nongnu.org/archive/html/qemu-devel/2017-11/msg02504.html). QEMU developers. 2017-11-17. Retrieved 2017-01-14. HAXM is now open source

[^g4gd5-16]: ["Intel Hardware Accelerated Execution Manager"](https://software.intel.com/en-us/android/articles/intel-hardware-accelerated-execution-manager). Intel. 2013-11-27. Retrieved 2014-05-12. The Intel Hardware Accelerated Execution Manager (Intel® HAXM) is a hardware-assisted virtualization engine (hypervisor) that uses Intel Virtualization Technology (Intel® VT) to speed up Android app emulation on a host machine.

[^qemu-inv-17]: ["Invocation"](https://www.qemu.org/docs/master/system/invocation.html). *QEMU 5.0.50 (v5.0.0-962-g49ee115552) documentation*.

[^x1qxo3-18]: ["QEMU Emulator User Documentation"](https://web.archive.org/web/20190427013412/https://qemu.weilnetz.de/doc/qemu-doc.html#disk_005fimages). *qemu.weilnetz.de*. Archived from [the original](https://qemu.weilnetz.de/doc/qemu-doc.html#disk_005fimages) on 2019-04-27. Retrieved 2018-04-10.

[^xfzzb3-19]: ["Booting from an ISO image using qemu"](https://linux-tips.com/t/booting-from-an-iso-image-using-qemu/136). *Linux Tips*. 3 August 2015.

[^the_qemu_object_model_(qom);_repository3-20]: ["Qemu Readme"](https://github.com/qemu/qemu/blob/master/docs/devel/qom.rst). *[GitHub](https://en.wikipedia.org/wiki/GitHub "GitHub")*. 26 October 2021.

[^lmj9l3-21]: ["VirtualBox Developer FAQ"](http://virtualbox.org/wiki/Developer_FAQ). Retrieved 2015-02-02.

[^zfej33-22]: ["Xen ARM with Virtualization Extensions"](http://wiki.xenproject.org/wiki/Xen_ARM_with_Virtualization_Extensions).

[^fu2i73-23]: ["Oracle and Sun Microsystems - Strategic Acquisitions - Oracle"](http://www.sun.com/blueprints/1107/820-3703.pdf) (PDF). *www.sun.com*.

[^29ixu3-24]: [Demystifying Xen HVM](http://ian.blenke.com/xen/hvm/svm/vtx/qemu) [Archived](https://web.archive.org/web/20071222101854/http://ian.blenke.com/xen/hvm/svm/vtx/qemu) December 22, 2007, at the [Wayback Machine](https://en.wikipedia.org/wiki/Wayback_Machine "Wayback Machine")

[^7mfdb3-25]: [win4lin VDS announcement](http://weblog.infoworld.com/virtualization/archives/2006/06/win4lin_announc.html) [Archived](https://web.archive.org/web/20080210042356/http://weblog.infoworld.com/virtualization/archives/2006/06/win4lin_announc.html) February 10, 2008, at the [Wayback Machine](https://en.wikipedia.org/wiki/Wayback_Machine "Wayback Machine")

[^jga1d3-26]: [Win4Solaris announcement](http://win4solaris.com/jml/index.php?option=com_content&task=view&id=17&Itemid=1) [Archived](https://web.archive.org/web/20071223221725/http://win4solaris.com/jml/index.php?option=com_content&task=view&id=17&Itemid=1) December 23, 2007, at the [Wayback Machine](https://en.wikipedia.org/wiki/Wayback_Machine "Wayback Machine")

[^sedrl3-27]: ["SerialICE"](http://serialice.com/). *serialice.com*.

[^n2prw3-28]: ["WinUAE 3.0.0"](http://eab.abime.net/showpost.php?p=992271&postcount=1). English Amiga Board. 2014-12-17. Retrieved 2016-03-25.

[^ggqxj3-29]: ["Unicorn & QEMU"](https://www.unicorn-engine.org/docs/beyond_qemu.html). *Unicorn Engine*.

[^30]: ["Limbo Emulator Tutorials"](https://virtualmachinery.weebly.com/tutorials.html). *Virtual Machinery*. Retrieved 2023-09-02.

[^31]: [*How to Install Windows on any Android Device Full Installation \[No Root\] ( Using Limbo PC Emulator )*](https://www.youtube.com/watch?v=D6Vz3plWktQ), retrieved 2023-09-02

[^32]: ["India: mobile OS share 2022"](https://www.statista.com/statistics/262157/market-share-held-by-mobile-operating-systems-in-india/). *Statista*. Retrieved 2023-09-02.

[^33]: ["Limbo Downloads"](https://virtualmachinery.weebly.com/limbo-downloads.html). *Virtual Machinery*. Retrieved 2023-09-02.

[^34]: ["Downloads"](https://github.com/limboemu/limbo/wiki/Downloads). *GitHub*. Retrieved 2023-09-02.

[^35]: Weidner, Klaus (2023-09-01), [*klausw/hackerskeyboard*](https://github.com/klausw/hackerskeyboard), retrieved 2023-09-02

[^36]: ["Hacker's Keyboard - Apps on Google Play"](https://play.google.com/store/apps/details?id=org.pocketworkstation.pckeyboard&hl=en_US). *play.google.com*. Retrieved 2023-09-02.

[^37]: Central Unit Processor

[^ajmso3-38]: ["\[Qemu-devel\] \[PATCH 3/3\] add SandyBridge CPU model"](http://lists.gnu.org/archive/html/qemu-devel/2012-02/msg03765.html). *lists.gnu.org*.

[^oinga3-39]: ["Qemu-Changelog-2.3 x86"](https://wiki.qemu.org/ChangeLog/2.3#x86). *wiki.qemu.org*.

[^auto3-40]: ["QEMU-changelog-2.6, x86 KVM"](https://wiki.qemu.org/ChangeLog/2.6#KVM_2). *wiki.qemu.org*.

[^dxjgf3-41]: ["QEMU-changelog-2.1, x86 KVM"](https://wiki.qemu.org/ChangeLog/2.1#x86). *wiki.qemu.org*.

[^nstb33-42]: ["QEMU-changelog-2.5, x86 CPU Models and Features"](https://wiki.qemu.org/ChangeLog/2.5#CPU_models_and_features). *wiki.qemu.org*.

[^ibzd73-43]: [https://qemu.weilnetz.de/doc/qemu-doc.html#pcsys\_005fnetwork](https://qemu.weilnetz.de/doc/qemu-doc.html#pcsys_005fnetwork) [Archived](https://web.archive.org/web/20190427013412/https://qemu.weilnetz.de/doc/qemu-doc.html#pcsys_005fnetwork) 2019-04-27 at the [Wayback Machine](https://en.wikipedia.org/wiki/Wayback_Machine "Wayback Machine") "i82551, i82557b, i82559er, ne2k\_pci, ne2k\_isa, pcnet, rtl8139, e1000, smc91c111, lance and mcf\_fec"

[^a1nna3-44]: [http://pclosmag.com/html/issues/201208/page11.html](http://pclosmag.com/html/issues/201208/page11.html) Networking on QEMU: Setting Up The E1000 & Novell NE2000 ISA Evaluation

[^0.143-45]: ["ChangeLog/0.14"](http://wiki.qemu.org/ChangeLog/0.14#Sound). Retrieved 2011-08-08.

[^urozo3-46]: ["UEFI/OVMF - Ubuntu Wiki"](https://wiki.ubuntu.com/UEFI/OVMF).

[^mk8vo-47]: ["gitorious.org Git - rowboat: external-qemu.git/commit"](https://gitorious.org/rowboat/external-qemu/commit/bcc6ae14820ddb24e2403d84b420ce61f371ae94). *gitorious.org*.

[^48]: ["Arm System emulator"](https://www.qemu.org/docs/master/system/target-arm.html). *QEMU documentation*. Retrieved 2024-11-23.

[^people_redhat_com_zaitcev_proll-49]: ["Zaitcev's Linux"](http://people.redhat.com/zaitcev/linux/). 090427 people.redhat.com

[^homepage_ntlworld_com-z80-50]: ["QEMU Z80 Target"](https://web.archive.org/web/20160606135712/http://homepage.ntlworld.com/wholehog/stuart/qemu/z80.html). Archived from [the original](http://homepage.ntlworld.com/wholehog/stuart/qemu/z80.html) on 2016-06-06. 090506 homepage.ntlworld.com

[^nongnu_org_qemu_links-51]: ["QEMU links"](http://wiki.qemu.org/Links). 090506 nongnu.org

[![](https://upload.wikimedia.org/wikipedia/en/thumb/4/4a/Commons-logo.svg/30px-Commons-logo.svg.png)](https://en.wikipedia.org/wiki/File:Commons-logo.svg)

Wikimedia Commons has media related to [QEMU](https://commons.wikimedia.org/wiki/QEMU "commons:QEMU").

[![](https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/Wikibooks-logo-en-noslogan.svg/40px-Wikibooks-logo-en-noslogan.svg.png)](https://en.wikipedia.org/wiki/File:Wikibooks-logo-en-noslogan.svg)

Wikibooks has more on the topic of: ***[QEMU](https://en.wikibooks.org/wiki/Special:Search/QEMU "wikibooks:Special:Search/QEMU")***

- [Official website](https://www.qemu.org/) [![Edit this at Wikidata](https://upload.wikimedia.org/wikipedia/en/thumb/8/8a/OOjs_UI_icon_edit-ltr-progressive.svg/10px-OOjs_UI_icon_edit-ltr-progressive.svg.png)](https://www.wikidata.org/wiki/Q624699#P856 "Edit this at Wikidata")
- [QEMU documentation](https://www.qemu.org/docs/master/)
- [Systems emulation with QEMU](https://web.archive.org/web/20130720074636/http://www.ibm.com/developerworks/linux/library/l-qemu/) an IBM developerWorks article by M. Tim Jones
- [QVM86 project page](http://savannah.nongnu.org/projects/qvm86/)
- [Debian on an emulated ARM machine](http://www.aurel32.net/info/debian_arm_qemu.php)
- [Fedora ARM port emulation with QEMU](https://fedoraproject.org/wiki/Architectures/ARM/HowToQemu)
- [The Wikibook "QEMU and KVM"](https://web.archive.org/web/20180620214142/http://qemu-buch.de/) (in German, or computer translated to English)
- [QEMU on Windows](http://lassauge.free.fr/qemu/)
- [QEMU Binaries for Windows](https://qemu.weilnetz.de/)
- [Microblaze emulation with QEMU](http://www.monstr.eu/qemu/)
- [UnifiedSessionsManager – An unofficial QEMU/KVM configuration file definition](http://sourceforge.net/projects/ctys-doc/)
- [Couverture, a code coverage project based on QEMU](http://www.adacore.com/uploads/technical-papers/couverture_ertss2010.pdf)
- [UTM Virtual Machines for Mac](https://mac.getutm.app/)
- [UTM Virtual Machines for iOS](https://getutm.app/)