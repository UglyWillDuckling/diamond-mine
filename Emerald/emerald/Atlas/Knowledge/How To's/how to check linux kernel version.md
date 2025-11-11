#howto/linux 

  1. [[uname]] -a: This command displays information about the system, including
  the kernel version and architecture.

    $ uname -a
    Linux localhost 5.10.0-1033-oem #34-Ubuntu SMP Fri Mar 19 14:03:23 UTC 2021
  x86_64 x86_64 x86_64 GNU/Linux

  In this example, the kernel version is  5.10.0-1033-oem .

  2. [[uname]] -r: This command displays the kernel version only.

    $ uname -r
    5.10.0-1033-oem

  3. cat /proc/version: This command displays the kernel version and other
  information from the  /proc/version  file. [^1] 

    $ cat /proc/version
    Linux version 5.10.0-1033-oem (buildd@lcy01-amd64-024) (gcc (Ubuntu 10.2.0-
  13ubuntu1) 10.2.0, GNU ld (GNU Binutils for Ubuntu) 2.35.1) #34-Ubuntu SMP
  Fri Mar 19 14:03:23 UTC 2021

  4. ls /boot: This command lists the contents of the  /boot  directory, which
  typically includes the kernel image files. Look for the file with the
  highest version number to determine which kernel is currently in use.

    $ ls /boot
    config-5.10.0-1033-oem
    initrd.img-5.10.0-1033-oem
    System.map-5.10.0-1033-oem
    vmlinuz-5.10.0-1033-oem

  In this example, the kernel image file is  vmlinuz-5.10.0-1033-oem .

  5. dpkg -l | grep linux-image: This command lists all packages related to the
  Linux kernel image on a Debian-based system (e.g., Ubuntu).

    $ dpkg -l | grep linux-image
    ii  linux-image-5.10.0-1033-oem  5.10.0-1033.34  amd64        Signed kernel
  image oem

  In this example, the kernel image package is  linux-image-5.10.0-1033-oem .


[^1]: [[-proc-version]]