---
author: 
created: 2025-02-21
published: 
source: https://bashly.dev/configuration/command/
tags:
  - docs/bashly
---
The `command` object serves two purposes, it:

1. Defines the root CLI application (command).
2. Defines any nested subcommands, if any.

bashly.yml

```yaml
name: rush
help: Personal package manager
version: 0.6.5

commands:
- name: add
  alias: a
  help: Register a local repository
  args:
  - name: repo
    required: true
    help: Repository name.

  - name: path
    required: true
    help: Path to the repository.

  examples:
  - rush add default ~/rush-repos/default

- name: remove
  alias: r
  help: Unregister a local repository
  args:
  - name: repo
    required: true
    help: Repository name.

  flags:
  - long: --purge
    short: -p
    help: Also remove the local directory.

  examples:
  - rush remove bobby
  - rush remove bobby --purge
```

Unless otherwise specified, these definitions can be used for both the root command and subcommands (under the `commands` definition).

## Basic Options

### name

StringRequired

The name of the script or subcommand.

### alias

String / Array of StringsSubcommands Only

One or more additional optional names for this command. This can be used to create a shortcut for a command, or provide alternative names for it.

This option accepts either a string, or an array of strings.

You can add `*` as a suffix, to denote a *starts with* pattern - for example:

bashly.yml

```yaml
name: index
alias: i  # simple shortcut

name: download
alias: d*  # anything that starts with d

name: upload
alias: [u, push]  # upload, u and push will all run the same command
```

[Command Aliases Example](https://github.com/DannyBen/bashly/tree/master/examples/command-aliases#readme)

### help

String

The header text to display when using `--help`.

This option can have multiple lines. In this case, the first line will be used as summary wherever appropriate.

### args

Array of Arguments

Specify the array of positional arguments this script needs.

### flags

Array of Flags

Specify the array of option flags this script needs.

### commands

Array of Commands

Specify the array of commands. Each command will have its own args and flags.

[Commands Example](https://github.com/DannyBen/bashly/tree/master/examples/commands#readme) [Subcommands Example](https://github.com/DannyBen/bashly/tree/master/examples/commands-nested#readme)

### version

StringRoot Command Only

The string to display when using `--version`.

## Common Options

### default

Boolean / StringSubcommands Only

- Setting this to `true` on any command, will cause any **unrecognized** command line to be passed to this command.
- Settings this to `force` will also execute this command (instead of showing the root usage text) when executed without any arguments.

[Default Command Example](https://github.com/DannyBen/bashly/tree/master/examples/command-default#readme) [Forced Command Example](https://github.com/DannyBen/bashly/tree/master/examples/command-default-force#readme)

### environment\_variables

Array of Environment Variables

Specify an array of environment variables required or desired by your script.

Environment Variable

../environment-variable/

### examples

String / Array of Strings

Specify an array of examples to show when using `--help`, or a multi-line string.

[Command Examples Example](https://github.com/DannyBen/bashly/tree/master/examples/command-examples#readme)

String

Add a custom message that will be displayed at the end of the `--help` text.

[Footer Example](https://github.com/DannyBen/bashly/tree/master/examples/footer#readme)

### group

StringSubcommands Only

In case you have many commands, use this option to specify a caption to display before this command.

This option is purely for display purposes.

[Command Groups Example](https://github.com/DannyBen/bashly/tree/master/examples/command-groups#readme)

### variables

Array of Variables

Specify an array of variables that can be accessed globally in your script, or subcommands.

## Advanced Options

### catch_all

Boolean / String / Hash

Specify that this command should allow for additional arbitrary arguments or flags.

It can be set in one of three ways:

- Set to `true` to just enable it.
- Set to a string, to show this string in the usage help text.
- Set to a hash containing `label`, `help` and `required` keys, to show a detailed help for it when running with `--help`. By default, `catch_all` arguments are optional, but you can specify `required: true` to require at least one argument.

To access arguments captured by `catch_all` in your script, use the `$other_args` array (or call the `inspect_args` command to see them).

[Catch All Example](https://github.com/DannyBen/bashly/tree/master/examples/catch-all#readme) [Catch All Advanced Example](https://github.com/DannyBen/bashly/tree/master/examples/catch-all-advanced#readme)

### completions

Array of Strings

Specify an array of additional completion suggestions when used in conjunction with `bashly add completions`.

Bash Completion

../../advanced/bash-completion/

### dependencies

Array of Strings / Hash / Array of Dependencies

Specify a list of required external dependencies (commands) required by your script.

### expose

Boolean / StringSubcommands Only

Setting this to `true` or `always` on any command that has subcommands, will show its subcommands in the help or usage text of the parent command.

- Set to `true` to show the subcommands only when the parent command is executed with `--help`.
- Set to `always` to show the subcommands also when the parent command is executed without any arguments.

You can use `expose` with the [`group`](https://bashly.dev/configuration/command/#group) option, to show subcommands in a logical, visual grouping.

[Commands Expose Example](https://github.com/DannyBen/bashly/tree/master/examples/commands-expose#readme)

### extensible

Boolean / StringRoot Command Only

Specify that this command can be extended by external means.

Extensible Scripts

../../advanced/extensible-scripts/

### filename

String

The path (relative to `src`) to the partial source code file, in case you wish to store your source files in a different path than the default one.

[Command Filenames Example](https://github.com/DannyBen/bashly/tree/master/examples/command-filenames#readme)

### filters

Array of Strings

Add custom filter functions that will prevent the command from running unless certain conditions are met.

Custom Filters

../../advanced/filters/

### function

String

The base name of the internal functions bashly will use when generating the script.

This is useful for scripts that contain several commands that otherwise evaluate to the same internal function name.

Note that the name specified here is just used as a base name. Bashly will generate several functions from it:

- `<cli name>_<base function name>_command`
- `<cli name>_<base function name>_usage`
- and possibly more

[Command Function Example](https://github.com/DannyBen/bashly/tree/master/examples/command-function#readme)

### private

BooleanSubcommands Only

Setting this to `true` on any command, will hide it from the command list.

[Private Command Example](https://github.com/DannyBen/bashly/tree/master/examples/command-private#readme)