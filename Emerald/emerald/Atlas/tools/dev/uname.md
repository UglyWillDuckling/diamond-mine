#tool/dev #tool/linux 

```
Usage: uname [OPTION]...
	Print certain system information.  With no OPTION, same as -s.
	
	  -a, --all                print all information, in the following order,
	                             except omit -p and -i if unknown:
	  -s, --kernel-name        print the kernel name
	  -n, --nodename           print the network node hostname
	  -r, --kernel-release     print the kernel release
	  -v, --kernel-version     print the kernel version
	  -m, --machine            print the machine hardware name
	  -p, --processor          print the processor type (non-portable)
	  -i, --hardware-platform  print the hardware platform (non-portable)
	  -o, --operating-system   print the operating system
	      --help        display this help and exit
	      --version     output version information and exit
	
	GNU coreutils online help: <https://www.gnu.org/software/coreutils/>
	Full documentation <https://www.gnu.org/software/coreutils/uname>
	or available locally via: info '(coreutils) uname invocation'
```

  Uname prints information about the machine and operating system it is run on.
  More information: https://www.gnu.org/software/coreutils/manual/html_node/uname-invocation.html.

  - Print all information:
    uname --all

  - Print the current kernel name:
    uname --kernel-name

  - Print the current network node host name:
    uname --nodename

  - Print the current kernel release:
    uname --kernel-release

  - Print the current kernel version:
    uname --kernel-version

  - Print the current machine hardware name:
    uname --machine

  - Print the current processor type:
    uname --processor

  - Print the current operating system name:
    uname --operating-system

