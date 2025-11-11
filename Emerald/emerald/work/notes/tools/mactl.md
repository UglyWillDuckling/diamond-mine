---
tags:
  - work/tool
---
#work/tool


- [[Using the mactl CLI]]
- [[how to use mactl]]

```b
A CLI for interacting with mactl repository.

Usage:
  mactl [flags]
  mactl [command]

Available Commands:
  chart       Initialize a new Helm Chart
  completion  Generate the autocompletion script for the specified shell
  create      Create an environment
  db          Tools to ease databases use
  db-access   Create the configuration for accesing a database
  delete      Delete an environment
  help        Help about any command
  init        Initialize the CLI configuration
  list        Show the avaible environment
  override    Help you use the override system
  reset       Reset an environment
  sleep       Disable all the applications in an environment
  status      Show a status of the environement
  sync        Help you handle application syncing status
  update      Update mactl
  version     Print the current version of the MA CLI
  wake-up     Enable all the applications in an environment

Flags:
      --config string   config file (default is $HOME/.mactl.yml)
  -d, --debug           enable debug log level
  -h, --help            help for mactl
  -v, --verbose         enable info log level

Use "mactl [command] --help" for more information about a command.
```
