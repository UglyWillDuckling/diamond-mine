- Light
- Rust
- Coal
- Navy
- Ayu

# Zellij User Guide

[Print this book](print.html "Print this book")

# [Commands](commands.html.md#commands)

These commands can be invoked with `zellij [SUBCOMMAND]`.
For more details, each subcommand has its own help section when run with the
`--help` flag ( `zellij [SUBCOMMAND] --help`).

## [`attach [session-name]`](commands.html.md#attach-session-name)

short: `a`

Zellij will attempt to attach to an already running session, with the name
`[session-name]`.
If given no `[session-name]` and there is only one running session, it will attach to that session.

The attach subcommand will also accept the optional `options` subcommand.

## [`list-sessions`](commands.html.md#list-sessions)

short: `ls`

Will list all the names of currently running sessions.

## [`kill-sessions [target-session]`](commands.html.md#kill-sessions-target-session)

short: `k`

Will kill the session with the name of `[target-session]`, if it is currently
running.

## [`kill-all-sessions`](commands.html.md#kill-all-sessions)

short: `ka`

Will prompt the user to kill all running sessions.

## [`options`](commands.html.md#options)

Can be used to change the behaviour of zellij on startup.
Will supercede options defined in the config file.
To see a list of options look [here](command-line-options.html).

## [`setup`](commands.html.md#setup)

Functionality to help with the setup of zellij.

FlagDescription--checkCheck the configuration--cleanStart with default configuration--dump-configDump the default configuration file to stdout--dump-layout \[LAYOUT\]Dump a specified default layout file to stdout--generate-completion \[SHELL\]Generate completions for the specified shell

# [Flags](commands.html.md#flags)

These flags can be invoked with `zellij --flag`.

FlagDescription--helpDisplay the help prompt--debugGather additional debug information--versionPrint version information

[Previous chapter](faq.html "Previous chapter")[Next chapter](rebinding-keys.html "Next chapter")

[Previous chapter](faq.html "Previous chapter")[Next chapter](rebinding-keys.html "Next chapter")

