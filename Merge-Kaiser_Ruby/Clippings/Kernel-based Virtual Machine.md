---
aliases:
  - KVM
published: 2006-12-13
source: https://en.wikipedia.org/wiki/Kernel-based_Virtual_Machine
tags:
  - virtualization-module/linux
---

<table><caption>KVM</caption><tbody><tr><td colspan="2"><span><a href="https://en.wikipedia.org/wiki/File:Kvmbanner-logo2_1.png"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/Kvmbanner-logo2_1.png/160px-Kvmbanner-logo2_1.png" width="160" height="51"></a></span></td></tr><tr><td colspan="2"><span><a href="https://en.wikipedia.org/wiki/File:QEMU_6.2_running_NetBSD_and_OpenIndiana_screenshot.png"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/QEMU_6.2_running_NetBSD_and_OpenIndiana_screenshot.png/300px-QEMU_6.2_running_NetBSD_and_OpenIndiana_screenshot.png" width="300" height="169"></a></span><div><p>Screenshot of QEMU/KVM running <a href="https://en.wikipedia.org/wiki/NetBSD">NetBSD</a> and <a href="https://en.wikipedia.org/wiki/OpenIndiana">OpenIndiana</a> guests on an <a href="https://en.wikipedia.org/wiki/Arch_Linux">Arch Linux</a> host.</p></div></td></tr><tr><th scope="row"><a href="https://en.wikipedia.org/wiki/Programmer">Original author(s)</a></th><td><a href="https://en.wikipedia.org/wiki/Qumranet">Qumranet</a></td></tr><tr><th scope="row"><a href="https://en.wikipedia.org/wiki/Programmer">Developer(s)</a></th><td>The <a href="https://en.wikipedia.org/wiki/Linux_Kernel">Linux Kernel</a> community</td></tr><tr><th scope="row"><a href="https://en.wikipedia.org/wiki/Repository_(version_control)">Repository</a></th><td><div><ul><li><span><a href="https://git.kernel.org/pub/scm/virt/kvm/kvm.git">git<wbr>.kernel<wbr>.org<wbr>/pub<wbr>/scm<wbr>/virt<wbr>/kvm<wbr>/kvm<wbr>.git</a></span> <span><a href="https://www.wikidata.org/wiki/Q377539#P1324"><img src="https://upload.wikimedia.org/wikipedia/en/thumb/8/8a/OOjs_UI_icon_edit-ltr-progressive.svg/10px-OOjs_UI_icon_edit-ltr-progressive.svg.png" width="10" height="10"></a></span></li></ul></div></td></tr><tr><th scope="row">Written in</th><td><a href="https://en.wikipedia.org/wiki/C_(programming_language)">C</a></td></tr><tr><th scope="row"><a href="https://en.wikipedia.org/wiki/Operating_system">Operating system</a></th><td><a href="https://en.wikipedia.org/wiki/Unix-like">Unix-like</a></td></tr><tr><th scope="row"><a href="https://en.wikipedia.org/wiki/Computing_platform">Platform</a></th><td><a href="https://en.wikipedia.org/wiki/ARM_architecture">ARM</a>, <a href="https://en.wikipedia.org/wiki/PowerPC">PowerPC</a>, <a href="https://en.wikipedia.org/wiki/IBM_ESA/390">ESA/390</a>, <a href="https://en.wikipedia.org/wiki/IA-32">IA-32</a>, <a href="https://en.wikipedia.org/wiki/X86-64">x86-64</a></td></tr><tr><th scope="row"><a href="https://en.wikipedia.org/wiki/Software_categories#Categorization_approaches">Type</a></th><td><a href="https://en.wikipedia.org/wiki/Hypervisor">Hypervisor</a></td></tr><tr><th scope="row"><a href="https://en.wikipedia.org/wiki/Software_license">License</a></th><td><a href="https://en.wikipedia.org/wiki/GNU_General_Public_License">GNU GPL</a> or <a href="https://en.wikipedia.org/wiki/GNU_Lesser_General_Public_License">LGPL</a></td></tr><tr><th scope="row">Website</th><td><span><a href="http://www.linux-kvm.org/">www<wbr>.linux-kvm<wbr>.org</a></span></td></tr></tbody></table>

**Kernel-based Virtual Machine** (**KVM**) is a [free and open-source](https://en.wikipedia.org/wiki/Free_and_open-source "Free and open-source") [virtualization](https://en.wikipedia.org/wiki/Virtualization "Virtualization") module in the [Linux kernel](https://en.wikipedia.org/wiki/Linux_kernel "Linux kernel") that allows the [kernel](https://en.wikipedia.org/wiki/Kernel_\(operating_system\) "Kernel (operating system)") to function as a [hypervisor](https://en.wikipedia.org/wiki/Hypervisor "Hypervisor"). It was merged into the [mainline Linux kernel](https://en.wikipedia.org/wiki/Mainline_Linux "Mainline Linux") in version 2.6.20, which was released on February 5, 2007.[^2620notes-1] KVM requires a processor with [hardware virtualization](https://en.wikipedia.org/wiki/Hardware_virtualization "Hardware virtualization") extensions, such as [Intel VT](https://en.wikipedia.org/wiki/Intel_VT "Intel VT") or [AMD-V](https://en.wikipedia.org/wiki/AMD-V "AMD-V").[^2] KVM has also been ported to other operating systems such as [FreeBSD](https://en.wikipedia.org/wiki/FreeBSD "FreeBSD")[^3] and [illumos](https://en.wikipedia.org/wiki/Illumos "Illumos")[^4] in the form of loadable kernel modules.

KVM was originally designed for [x86](https://en.wikipedia.org/wiki/X86 "X86") processors but has since been [ported](https://en.wikipedia.org/wiki/Porting "Porting") to [ESA/390](https://en.wikipedia.org/wiki/IBM_ESA/390 "IBM ESA/390"),[^5] [PowerPC](https://en.wikipedia.org/wiki/PowerPC "PowerPC"),[^6] [IA-64](https://en.wikipedia.org/wiki/IA-64 "IA-64"), and [ARM](https://en.wikipedia.org/wiki/ARM_architecture "ARM architecture").[^7][^8] The IA-64 port was removed in 2014.[^9]

KVM supports [hardware-assisted virtualization](https://en.wikipedia.org/wiki/Hardware-assisted_virtualization "Hardware-assisted virtualization") for a wide variety of guest operating systems including [BSD](https://en.wikipedia.org/wiki/BSD "BSD"), [Solaris](https://en.wikipedia.org/wiki/Solaris_\(operating_system\) "Solaris (operating system)"), [Windows](https://en.wikipedia.org/wiki/Microsoft_Windows "Microsoft Windows"), [Haiku](https://en.wikipedia.org/wiki/Haiku_\(operating_system\) "Haiku (operating system)"), [ReactOS](https://en.wikipedia.org/wiki/ReactOS "ReactOS"), [Plan 9](https://en.wikipedia.org/wiki/Plan_9_from_Bell_Labs "Plan 9 from Bell Labs"), [AROS](https://en.wikipedia.org/wiki/AROS_Research_Operating_System "AROS Research Operating System"), [macOS](https://en.wikipedia.org/wiki/MacOS "MacOS"), and even other Linux systems.[^10][^11] In addition, Android 2.2, [GNU/Hurd](https://en.wikipedia.org/wiki/GNU/Hurd "GNU/Hurd")[^12] ([Debian](https://en.wikipedia.org/wiki/Debian "Debian") K16), [Minix](https://en.wikipedia.org/wiki/MINIX_3 "MINIX 3") 3.1.2a, Solaris 10 U3 and [Darwin](https://en.wikipedia.org/wiki/Darwin_\(operating_system\) "Darwin (operating system)") 8.0.1, together with other operating systems and some newer versions of these listed, are known to work with certain limitations.[^13]

Additionally, KVM provides [paravirtualization](https://en.wikipedia.org/wiki/Paravirtualization "Paravirtualization") support for Linux, [OpenBSD](https://en.wikipedia.org/wiki/OpenBSD "OpenBSD"),[^14] FreeBSD,[^15] [NetBSD](https://en.wikipedia.org/wiki/NetBSD "NetBSD"),[^16] Plan 9[^17] and Windows guests using the VirtIO [API](https://en.wikipedia.org/wiki/API "API").[^18] This includes a paravirtual [Ethernet card](https://en.wikipedia.org/wiki/Ethernet_card "Ethernet card"), disk I/O controller,[^19] [balloon driver](https://en.wikipedia.org/wiki/Balloon_driver "Balloon driver"), and a [VGA](https://en.wikipedia.org/wiki/VGA "VGA") graphics interface using [SPICE](https://en.wikipedia.org/wiki/SPICE_\(protocol\) "SPICE (protocol)") or [VMware](https://en.wikipedia.org/wiki/VMware "VMware") drivers.

[[Avi Kivity]] began the development of KVM in mid-2006 at [Qumranet](https://en.wikipedia.org/wiki/Qumranet "Qumranet"),
a technology [startup company](https://en.wikipedia.org/wiki/Startup_company "Startup company")[^20] that was acquired by [[Red Hat]] in 2008.[^21]

KVM surfaced in October 2006[^22] and was merged into the 
Linux kernel mainline in version **2.6.20**, released on **5 February 2007**.[^2620notes-1]

KVM is maintained by [[Paolo Bonzini]].[^23]

![[400px-Kernel-based_Virtual_Machine.svg.png]]

A high-level overview of the KVM/QEMU virtualization environment[^24]

KVM provides device abstraction but no processor emulation. It exposes the **/dev/kvm** interface, which a user mode host can then use to:

- Set up the guest VM's address space. The host must also supply a firmware image (usually a custom BIOS when emulating PCs) that the guest can use to bootstrap into its main OS.
- Feed the guest simulated I/O.
- Map the guest's video display back onto the system host.

Originally, a forked version of [QEMU](https://en.wikipedia.org/wiki/QEMU "QEMU") was provided to launch guests and deal with hardware emulation that is not handled by the kernel. That support was eventually merged into the upstream project. 
There are now numerous Virtual Machine Monitors (VMMs) which can utilise the KVM interface including [[kvmtool]], [[crosvm]] and [Firecracker](https://en.wikipedia.org/wiki/Firecracker_\(software\) "Firecracker (software)") and numerous specialised VMMs built with frameworks such as rust-vmm.

Internally, KVM uses [SeaBIOS](https://en.wikipedia.org/wiki/SeaBIOS "SeaBIOS") as an open source implementation of a 16-bit x86 [BIOS](https://en.wikipedia.org/wiki/BIOS "BIOS").[^25]

KVM has had support for [hot swappable vCPUs](https://en.wikipedia.org/wiki/Hot_swapping "Hot swapping"),[^26] dynamic memory management,[^27] and [Live Migration](https://en.wikipedia.org/wiki/Live_Migration "Live Migration") since February 2007.[^28][^29] It also reduces the impact that memory write-intensive workloads have on the migration process.[^30]

KVM itself emulates very little hardware, instead deferring to a higher level client application such as [QEMU](https://en.wikipedia.org/wiki/QEMU "QEMU"), [[crosvm]], or [Firecracker](https://en.wikipedia.org/wiki/Firecracker_\(software\) "Firecracker (software)") for device emulation.

KVM provides the following emulated devices:

- Virtual [CPU](https://en.wikipedia.org/wiki/CPU "CPU") and memory[^31]
- **VirtIO**

![[300px-Libvirt_support.svg.png]]

[libvirt](https://en.wikipedia.org/wiki/Libvirt "Libvirt") supports KVM

- [Kimchi](https://en.wikipedia.org/wiki/Kimchi_\(software\) "Kimchi (software)") – web-based virtualization management tool for KVM
- [Virtual Machine Manager](https://en.wikipedia.org/wiki/Virtual_Machine_Manager "Virtual Machine Manager") – supports creating, editing, starting, and stopping KVM-based virtual machines, as well as live or cold drag-and-drop migration of VMs between hosts.
- [Proxmox Virtual Environment](https://en.wikipedia.org/wiki/Proxmox_Virtual_Environment "Proxmox Virtual Environment") – an open-source virtualization management package including KVM and [LXC](https://en.wikipedia.org/wiki/LXC "LXC"). It has a bare-metal installer, a web-based remote management GUI, a HA cluster stack, unified storage, flexible network, and optional commercial support.
- [OpenQRM](https://en.wikipedia.org/wiki/OpenQRM "OpenQRM") – management platform for managing heterogeneous data center infrastructures
- [GNOME Boxes](https://en.wikipedia.org/wiki/GNOME_Boxes "GNOME Boxes") – Gnome interface for managing libvirt guests on Linux
- [oVirt](https://en.wikipedia.org/wiki/OVirt "OVirt") – open-source virtualization management tool for KVM built on top of [libvirt](https://en.wikipedia.org/wiki/Libvirt "Libvirt")

The kernel-mode component of KVM is a part of the [Linux kernel](https://en.wikipedia.org/wiki/Linux_kernel "Linux kernel"), itself licensed under [GNU General Public License, version 2](https://en.wikipedia.org/wiki/GNU_General_Public_License#Version_2 "GNU General Public License").[^linux_licensing-32]

### See also

- [CloudStack](https://en.wikipedia.org/wiki/CloudStack "CloudStack")
- [Comparison of platform virtualization software](https://en.wikipedia.org/wiki/Comparison_of_platform_virtualization_software "Comparison of platform virtualization software")
- [Hyper-V](https://en.wikipedia.org/wiki/Hyper-V "Hyper-V")
- [Kernel same-page merging](https://en.wikipedia.org/wiki/Kernel_same-page_merging "Kernel same-page merging") (KSM)
- [Lguest](https://en.wikipedia.org/wiki/Lguest "Lguest")
- [libguestfs](https://en.wikipedia.org/wiki/Libguestfs "Libguestfs")
- [Open Virtualization Alliance](https://en.wikipedia.org/wiki/Open_Virtualization_Alliance "Open Virtualization Alliance")
- [OpenNebula](https://en.wikipedia.org/wiki/OpenNebula "OpenNebula")
- [OpenStack](https://en.wikipedia.org/wiki/OpenStack "OpenStack")
- [Red Hat Virtualization](https://en.wikipedia.org/wiki/Red_Hat_Virtualization "Red Hat Virtualization")
- [Vx32](https://en.wikipedia.org/wiki/Vx32 "Vx32")
- [Xen](https://en.wikipedia.org/wiki/Xen "Xen")

### notes

[^2620notes-1]: ["Linux kernel 2.6.20, Section 2.2. Virtualization support through KVM"](http://kernelnewbies.org/Linux_2_6_20#head-bca4fe7ffe454321118a470387c2be543ee51754). *kernelnewbies.org*. 2007-02-05. Retrieved 2014-06-16.

[^2]: [KVM FAQ: What do I need to use KVM?](http://www.linux-kvm.org/page/FAQ#What_do_I_need_to_use_KVM.3F)

[^3]: ["FreeBSD Quarterly Status Report: Porting Linux KVM to FreeBSD"](http://www.freebsd.org/news/status/report-2007-07-2007-10.html#Porting-Linux-KVM-to-FreeBSD).

[^4]: ["KVM on illumos"](http://dtrace.org/blogs/bmc/2011/08/15/kvm-on-illumos/). 15 August 2011.

[^5]: ["Gmane - Mail To News And Back Again"](https://web.archive.org/web/20070929124348/http://article.gmane.org/gmane.comp.emulators.kvm.devel/2570). Archived from [the original](http://article.gmane.org/gmane.comp.emulators.kvm.devel/2570) on 2007-09-29. Retrieved 2007-05-07.

[^6]: [Gmane Loom](http://news.gmane.org/gmane.comp.emulators.kvm.devel/2595) [Archived](https://web.archive.org/web/20070929103042/http://news.gmane.org/gmane.comp.emulators.kvm.devel/2595) 2007-09-29 at the [Wayback Machine](https://en.wikipedia.org/wiki/Wayback_Machine "Wayback Machine")

[^7]: ["KVM/ARM Open Source Project"](https://web.archive.org/web/20130310052146/http://columbia.github.com/linux-kvm-arm/). Archived from [the original](https://columbia.github.com/linux-kvm-arm) on 2013-03-10. Retrieved 2017-11-01.

[^8]: Christoffer Dall; Jason Nieh (2014). ["KVM/ARM: The Design and Implementation of the Linux ARM Hypervisor"](https://dl.acm.org/doi/10.1145/2654822.2541946). *SIGARCH Comput. Archit. News*. **42** (1). ACM International Conference on Architectural Support for Programming Languages and Operating Systems: 333–348\. [doi](https://en.wikipedia.org/wiki/Doi_\(identifier\) "Doi (identifier)"):[10.1145/2654822.2541946](https://doi.org/10.1145%2F2654822.2541946).

[^9]: ["kernel/git/torvalds/linux.git: KVM: ia64: remove"](https://git.kernel.org/pub/scm/linux/kernel/git/torvalds/linux.git/commit/?id=003f7de6258900e17f6206e8e417d76c75ca549f).

[^10]: ["KVM wiki: Guest support status"](http://www.linux-kvm.org/page/Guest_Support_Status). Retrieved 2007-05-27.

[^11]: ["Running Mac OS X as a QEMU/KVM Guest"](http://www.contrib.andrew.cmu.edu/~somlo/OSXKVM/). Retrieved 2014-08-20.

[^12]: ["status"](https://www.gnu.org/software/hurd/hurd/status.html). Gnu.org. Retrieved 2014-02-12.

[^13]: ["Guest Support Status - KVM"](http://www.linux-kvm.org/page/Guest_Support_Status). Linux-kvm.org. Retrieved 2014-02-12.

[^14]: ["OpenBSD man page virtio(4)"](https://man.openbsd.org/virtio.4). Retrieved 2018-02-04.

[^15]: ["virtio binary packages for FreeBSD"](http://people.freebsd.org/~kuriyama/virtio/). Retrieved 2012-10-29.

[^16]: ["NetBSD man page virtio(4)"](https://web.archive.org/web/20191113035952/https://netbsd.gw.com/cgi-bin/man-cgi?virtio++NetBSD-current). Archived from [the original](http://netbsd.gw.com/cgi-bin/man-cgi?virtio++NetBSD-current) on 2019-11-13. Retrieved 2013-07-15.

[^17]: ["plan9front"](https://code.google.com/p/plan9front/wiki/qemu). Retrieved 2013-02-11.

[^18]: ["An API for virtual I/O: virtio"](https://lwn.net/Articles/239238/). [LWN.net](https://en.wikipedia.org/wiki/LWN.net "LWN.net"). 2007-07-11. Retrieved 2014-04-16.

[^19]: ["SCSI target for KVM wiki"](https://web.archive.org/web/20200605120413/http://linux-iscsi.org/wiki/VHost). linux-iscsi.org. 2012-08-07. Archived from [the original](http://linux-iscsi.org/wiki/vHost) on 2020-06-05. Retrieved 2012-08-12.

[^20]: [Interview: Avi Kivity](http://kerneltrap.org/node/8088) [Archived](https://web.archive.org/web/20070426033902/http://kerneltrap.org/node/8088) 2007-04-26 at the [Wayback Machine](https://en.wikipedia.org/wiki/Wayback_Machine "Wayback Machine") on [KernelTrap](https://en.wikipedia.org/wiki/KernelTrap "KernelTrap")

[^21]: ["Red Hat Advances Virtualization Leadership with Qumranet, Inc. Acquisition"](http://www.redhat.com/en/about/press-releases/qumranet). [Red Hat](https://en.wikipedia.org/wiki/Red_Hat "Red Hat"). 4 September 2008. Retrieved 16 June 2015.

[^22]: ["KVM 15 equipped with live migration | IT World Canada News"](https://www.itworldcanada.com/article/kvm-15-equipped-with-live-migration/7901). 7 March 2007.

[^23]: Libby Clark (7 April 2015). ["Git Success Stories and Tips from KVM Maintainer Paolo Bonzini"](https://web.archive.org/web/20160315095510/http://www.linux.com/news/featured-blogs/200-libby-clark/821899-git-success-stories-and-tips-from-kvm-maintainer-paolo-bonzini). [Linux.com](https://en.wikipedia.org/wiki/Linux.com "Linux.com"). Archived from [the original](http://www.linux.com/news/featured-blogs/200-libby-clark/821899-git-success-stories-and-tips-from-kvm-maintainer-paolo-bonzini) on 15 March 2016. Retrieved 17 June 2015.

[^24]: Khoa Huynh; Stefan Hajnoczi (2010). ["KVM/QEMU Storage Stack Performance Discussion"](http://www-01.ibm.com/support/knowledgecenter/api/content/nl/en-us/linuxonibm/liaav/LPCKVMSSPV2.1.pdf) (PDF). *IBM*. Linux Plumbers Conference. Retrieved January 3, 2015.<sup class="noprint Inline-Template"><span>[<i><a href="https://en.wikipedia.org/wiki/Wikipedia:Link_rot" title="Wikipedia:Link rot"><span title="&nbsp;Dead link tagged January 2018">permanent dead link</span></a></i><span>‍</span>]</span></sup>

[^25]: ["SeaBIOS"](http://www.seabios.org/SeaBIOS). seabios.org. 2013-12-21. Retrieved 2014-06-16.

[^26]: ["Hot Plugging Virtual CPUs with Red Hat Enterprise Virtualization Manager"](https://access.redhat.com/articles/1339413). 16 February 2016.

[^27]: ["Faq - KVM"](https://www.linux-kvm.org/page/FAQ#Is_dynamic_memory_management_for_guests_supported.3F).

[^28]: ["KVM-15 release \[LWN.net\]"](https://lwn.net/Articles/223754/).

[^29]: ["Migration - KVM"](https://www.linux-kvm.org/page/Migration).

[^30]: ["Daniel P. Berrangé » Blog Archive » Analysis of techniques for ensuring migration completion with KVM"](https://www.berrange.com/posts/2016/05/12/analysis-of-techniques-for-ensuring-migration-completion-with-kvm/).

[^31]: ["The Definitive KVM (Kernel-based Virtual Machine) API Documentation — the Linux Kernel documentation"](https://www.kernel.org/doc/html/latest/virt/kvm/api.html#kvm-create-irqchip).

[^linux_licensing-32]: ["Linux kernel licensing rules — The Linux Kernel documentation"](https://www.kernel.org/doc/html/latest/process/license-rules.html#kernel-licensing). *www.kernel.org*. [Archived](https://web.archive.org/web/20200307065451/https://www.kernel.org/doc/html/latest/process/license-rules.html#kernel-licensing) from the original on 7 March 2020. Retrieved 2020-01-06.

## Bib
- Amit Shah (2016-11-02). ["Ten years of KVM"](https://lwn.net/Articles/705160/). *lwn.net*. Retrieved 2017-02-10.


- [Best practices for the Kernel-based Virtual Machine](http://public.dhe.ibm.com/software/dw/linux390/perf/ZSW03346USEN.pdf) [Archived](https://web.archive.org/web/20191106035557/http://public.dhe.ibm.com/software/dw/linux390/perf/ZSW03346USEN.pdf) 2019-11-06 at the [Wayback Machine](https://en.wikipedia.org/wiki/Wayback_Machine "Wayback Machine"), IBM, second edition, April 2012
- [Virtio-blk Performance Improvement](https://web.archive.org/web/20141021055601/http://www.linux-kvm.org/wiki/images/f/f9/2012-forum-virtio-blk-performance-improvement.pdf), KVM Forum 2012, November 8, 2012, by Asias He
- [Wikibook QEMU & KVM](https://web.archive.org/web/20101128114720/http://qemu-buch.de/e/Content)
- [crosvm - Chrome OS virtual machine monitor](https://chromium.googlesource.com/chromiumos/platform/crosvm/)
- [Firecracker VMM for KVM](https://firecracker-microvm.github.io/)
[^32]: 