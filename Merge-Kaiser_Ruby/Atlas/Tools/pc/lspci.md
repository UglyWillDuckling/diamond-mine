#command/cli #command/unix 

  lspci  is a command that lists all **PCI** **devices** on a Linux system. PCI
  (Peripheral Component Interconnect) is a bus standard that connects peripheral
  devices, such as network cards, sound cards, and graphics cards, to the
  motherboard.

  When you run  lspci , the command lists all PCI devices detected by the system,
  including:

  • Device name and description
  • Vendor and device IDs
  • Class (e.g., network, storage, video)
  • Subclass and programming interface
  • IRQ (interrupt request) and I/O address

## options

  •  -v  for verbose output
  •  -n  to show numeric IDs instead of names
  •  -k  to show kernel modules loaded for each device
  •  -t  to show a tree-like hierarchy of devices
