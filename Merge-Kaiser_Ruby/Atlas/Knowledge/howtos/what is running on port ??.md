---
related:
  - "[[web hosting]]"
  - "[[Setup hosting]]"
tags:
  - howto
  - instructions
---
  To find out what is running on port 80, you can use various command-line tools
  or
  system utilities, depending on your operating system. Here are some methods:

  Windows:

  1. Netstat command:

    netstat -tlnp | findstr 80

  This command will show you the process ID and the executable name of the program
  listening on port 80.

  2. Tasklist command:

    tasklist | findstr 80

  This command will show you the process ID, image name, and memory usage of the
  program listening on port 80.

  3. Resource Monitor:
    • Open Resource Monitor (Press  Win + R  and type  resmon  and press Enter).
    • Go to the "Network" tab.
    • Look for the process listening on port 80.


  macOS (using Terminal):

  1. lsof command:

    lsof -i :80

  This command will show you the process ID, process name, and other details of
  the program listening on port 80.

  2. netstat command:

    netstat -tlnp | grep 80

  This command will show you the process ID and the executable name of the program
  listening on port 80.

  Linux (using Terminal):

  1. netstat command:

    netstat -tlnp | grep 80

  This command will show you the process ID and the executable name of the program
  listening on port 80.

  2. lsof command:

    lsof -i :80

  This command will show you the process ID, process name, and other details of
  the program listening on port 80.

  3. fuser command:

    fuser -n tcp 80

  This command will show you the process ID of the program listening on port 80.

  Remember to run these commands with administrator/root privileges if necessary.
  Also, be cautious when investigating unknown processes, as they might be
  malicious