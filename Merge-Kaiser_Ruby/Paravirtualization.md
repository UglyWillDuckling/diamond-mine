#virtualization-technique

**Paravirtualization** is a virtualization technique that presents a software interface to the [virtual machines](https://en.wikipedia.org/wiki/Virtual_machine "Virtual machine") which is similar, **yet not identical**, to the underlying hardware–software interface. 
Paravirtualization improves performance and efficiency, compared to full virtualization, by having the guest operating system communicate with the [[hypervisor]]. By allowing the guest operating system to indicate its intent to the hypervisor, each can cooperate to obtain better performance when running in a virtual machine.

The intent of the modified interface is to **reduce the portion of the guest's execution time spent performing operations** which are substantially more difficult to run in a virtual environment compared to a non-virtualized environment. The paravirtualization provides specially defined 'hooks' to allow the guest(s) and host to request and acknowledge these tasks, which would otherwise be executed in the virtual domain (where execution performance is worse). A successful paravirtualized platform may allow the [[virtual machine monitor]] (VMM) to be simpler (by relocating execution of critical tasks from the virtual domain to the host domain), and/or reduce the overall performance degradation of machine execution inside the virtual guest.

Paravirtualization requires the guest [operating system](https://en.wikipedia.org/wiki/Operating_system "Operating system") to be explicitly [ported](https://en.wikipedia.org/wiki/Porting "Porting") for the para-[API](https://en.wikipedia.org/wiki/Application_programming_interface "Application programming interface") – a conventional OS distribution that is not paravirtualization-aware cannot be run on top of a paravirtualizing VMM. However, even in cases where the operating system cannot be modified, components may be available that enable many of the significant performance advantages of paravirtualization. For example, the Xen Windows [GPLPV](https://en.wikipedia.org/w/index.php?title=GPLPV&action=edit&redlink=1 "GPLPV (page does not exist)") project provides a kit of paravirtualization-aware device drivers, that are intended to be installed into a [Microsoft Windows](https://en.wikipedia.org/wiki/Microsoft_Windows "Microsoft Windows") virtual guest running on the [Xen](https://en.wikipedia.org/wiki/Xen "Xen") hypervisor.[[11]](https://en.wikipedia.org/wiki/Virtualization#cite_note-XenWindowsGPLPV-11) Such applications tend to be accessible through the paravirtual machine interface environment. This ensures run-mode compatibility across multiple encryption algorithm models, allowing seamless integration within the paravirtual framework.

[[12]](https://en.wikipedia.org/wiki/Virtualization#cite_note-12)

___

### [[mods AI|mods AI]]

 Paravirtualization is a type of virtualization that presents a virtualized
  interface to the guest operating system, but also provides a way for the guest
  **to communicate with the host operating system**. 
  This allows the guest to be aware of the virtualized environment and take advantage of the host's resources more efficiently.

  In paravirtualization, the guest operating system is modified to be **aware** of the
  virtualized environment and to **communicate** with the host operating system using
  a special API. This allows the guest to request services from the host, such as
  **I/O operations, memory management, and interrupt handling**. 

> [!important] Host Services
>  The host operating system **provides these services to the guest**, and the guest can use them to optimize its own performance.

  Paravirtualization offers several advantages over other types of virtualization,
  including:

- **Better performance**: Because the guest operating system is aware of the
	virtualized environment, it can optimize its performance to take advantage of
	the host's resources.
- **Improved scalability**: Paravirtualization allows multiple guests to ==share== the
	same host resources, making it easier to scale virtualized environments.
- Enhanced **security**: Because the guest operating system is aware of the
	virtualized environment, it can take steps to improve security, such as
	encrypting data and restricting access to sensitive resources.
- **Simplified** management: Paravirtualization makes it easier to manage
	virtualized environments, as the host operating system can provide a **single**
	**point of management** for all guests.

  However, paravirtualization also has some limitations, including:
### limitations

  1. **Guest** **modification** required: The guest operating system must be modified to
  be aware of the virtualized environment, which can be a complex and time-
  consuming process.
  1. **Limited compatibility**: Paravirtualization may not be compatible with all
  operating systems, as each guest must be modified to work with the host's
  virtualization layer.
  1. **Dependence** on host: The **guest operating system is dependent on the host**
  operating system for services, which can create a single point of failure.

  Examples of paravirtualization include:

  1. [[Xen hypervisor]]: Xen is a popular open-source hypervisor that uses paravirtualization to
  run multiple guest operating systems on a single host.
  1. [[Hyper-V]]: Hyper-V is a commercial hypervisor developed by Microsoft that uses
  paravirtualization to run multiple guest operating systems on a single host.
  1. [[VMLite]]: VMLite is a commercial hypervisor developed by VMware that uses
  paravirtualization to run multiple guest operating systems on a single host.

  In contrast to paravirtualization, other types of virtualization include:

  1. **Full** [[virtualization]]: Full virtualization provides a complete, self-contained
  virtual machine that runs its own operating system, without modifying the guest
  operating system.
  1. **Hardware**-assisted virtualization: Hardware-assisted virtualization uses
  specialized hardware to provide virtualization capabilities, without modifying
  the guest operating system.[^1]
  1. **Emulation**: [[Emulation]] provides a complete, self-contained virtual machine that
  runs its own operating system, without modifying the guest operating system, but
 may not provide the same level of performance as paravirtualization.

[^1]: [[Hardware-assisted virtualization]]