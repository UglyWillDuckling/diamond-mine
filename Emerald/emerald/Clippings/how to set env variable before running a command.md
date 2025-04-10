 #howto/shell #howto/linux
  
  You can set an environment variable before running a command for a single
  run using the  export  command or the  env  command.

  Here are a few examples:

### Using the export command [^2]

    export VIRTUAL_ENV=/path/to/virtualenv
    -command-to-run

  This will set the  VIRTUAL_ENV  environment variable to  /path/to/virtualenv
  and then run the command.

###  Using env command:

> [!tip] this is the most portable and most most powerful way

> [!info] works when `executing` inside docker containers

    env VIRTUAL_ENV=/path/to/virtualenv command-to-run

  This will set the  **VIRTUAL_ENV**  environment variable to  /path/to/virtualenv
  and then run the  command-to-run .
### Using [[bash]] syntax:

    VIRTUAL_ENV=/path/to/value cmd

  Note that the  export  command only works in interactive shells, whereas the
  env [^1]  command is more **`portable`** and can be used in **non-interactive shells** as
  well.

[^1]: [[env command]]
[^2]: [[export command]]