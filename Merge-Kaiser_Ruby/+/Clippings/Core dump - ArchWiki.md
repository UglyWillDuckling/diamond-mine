---
source: https://wiki.archlinux.org/title/Core_dump#Analyzing_a_core_dump
author: 
published: 
created: 2025-03-14
tags:
  - howto/arch
---
A [core dump](https://en.wikipedia.org/wiki/Core_dump "wikipedia:Core dump") is a file containing a process's address space (memory) when the process terminates unexpectedly. Core dumps may be produced on-demand (such as by a [debugger](https://wiki.archlinux.org/title/#Making_a_core_dump)), or automatically upon termination. Core dumps are triggered by the kernel in response to program crashes, and may be passed to a helper program (such as [systemd-coredump(8)](https://man.archlinux.org/man/systemd-coredump.8)) for further processing. A core dump is not typically used by an average user, but developers could use it as a post-mortem snapshot of the program's state at the time of the crash, especially if the fault is hard to reliably reproduce.

**Warning:** Core dumps should be shared only with trusted parties as they may contain sensitive data (such as passwords or cryptographic keys).

## Disabling automatic core dumps

Users may wish to disable automatic core dumps for a number of reasons:

- Performance: generating core dumps for memory-heavy processes can waste system resources and delay the cleanup of memory.
- Disk space: core dumps of memory-heavy processes may consume disk space equal to, if not greater, than the process's memory footprint if not compressed.
- Security: core dumps, although typically readable only by root, may contain sensitive data (such as passwords or cryptographic keys), which are written to disk following a crash.

### Using sysctl

[sysctl](https://wiki.archlinux.org/title/Sysctl "Sysctl") can be used to set the `kernel.core_pattern` to nothing to disable core dump handling. Create this file

```
/etc/sysctl.d/50-coredump.conf
```
```
kernel.core_pattern=|/bin/false
```

To apply the setting immediately, use `sysctl`:

```
# sysctl -p /etc/sysctl.d/50-coredump.conf
```

### Using systemd

[systemd](https://wiki.archlinux.org/title/Systemd "Systemd")'s default behavior is defined in `/usr/lib/sysctl.d/50-coredump.conf`, which sets `kernel.core_pattern` to call `systemd-coredump`. It generates core dumps for all processes in `/var/lib/systemd/coredump`. `systemd-coredump` behavior can be overridden by creating a configuration snippet in the `/etc/systemd/coredump.conf.d/` directory with the following content (See [coredump.conf(5) § DESCRIPTION](https://man.archlinux.org/man/coredump.conf.5#DESCRIPTION), [\[1\]](https://bbs.archlinux.org/viewtopic.php?id=214207)):

```
/etc/systemd/coredump.conf.d/custom.conf
```
```
[Coredump]
Storage=none
ProcessSizeMax=0
```

**Note:** Do not forget to include the `[Coredump]` section name, otherwise this option will be ignored.

Then reload the systemd manager configuration with [daemon-reload](https://wiki.archlinux.org/title/Daemon-reload "Daemon-reload").

See [systemd-coredump(8) § Disabling coredump processing](https://man.archlinux.org/man/systemd-coredump.8#Disabling_coredump_processing).

### Using PAM limits

The maximum core dump size for users logged in via [PAM](https://wiki.archlinux.org/title/PAM "PAM") is enforced by [limits.conf](https://wiki.archlinux.org/title/Limits.conf "Limits.conf"). Setting it to zero disables core dumps entirely. [\[2\]](https://www.cyberciti.biz/faq/linux-disable-core-dumps/)

```
/etc/security/limits.conf
```
```
* hard core 0
```

### Using ulimit

[Command-line shells](https://wiki.archlinux.org/title/Command-line_shell "Command-line shell") such as *bash* or *zsh* provide a builtin *ulimit* command which can be used to report or set resource limits of the shell and the processes started by the shell. See [bash(1) § SHELL BUILTIN COMMANDS](https://man.archlinux.org/man/bash.1#SHELL_BUILTIN_COMMANDS) or [zshbuiltins(1)](https://man.archlinux.org/man/zshbuiltins.1) for details.

To disable core dumps in the current shell:

```
$ ulimit -c 0
```

If the system is setup to pipe coredumps into a program such as *systemd-coredump* using `kernel.core_pattern`, the Linux kernel itself ignores the *ulimit* setting (see [core(5)](https://man.archlinux.org/man/core.5)), so then it depends on the program the dump gets piped to whether this setting is respected or not (*systemd-coredump* will still use it).

For programs not using the *ulimit* setting of the crashed process, `dumpable` [prctl(2)](https://man.archlinux.org/man/prctl.2) can be used to disable coredump processing for selected processes.

## Making a core dump

To generate a core dump of an arbitrary process, first [install](https://wiki.archlinux.org/title/Install "Install") the [gdb](https://archlinux.org/packages/?name=gdb) package. Then find the PID of the running process, for example with *pgrep*:

```
$ pgrep -f firefox
```
```
2071 firefox
```

Attach to the process:

```
$ gdb -p 2071
```

Then at the `(gdb)` prompt:

```
(gdb) generate-core-file
Saved corefile core.2071
(gdb) quit
```

Now you have a coredump file called `core.2071`.

### Where do they go?

The `kernel.core_pattern` [sysctl](https://wiki.archlinux.org/title/Sysctl "Sysctl") decides where automatic core dumps go. By default, core dumps are sent to *systemd-coredump* which can be configured in `/etc/systemd/coredump.conf`. By default, all core dumps are stored in `/var/lib/systemd/coredump` (due to `Storage=external`) and they are compressed with `zstd` (due to `Compress=yes`). Additionally, various size limits for the storage can be configured.

**Note:** The default value for `kernel.core_pattern` is set in `/usr/lib/sysctl.d/50-coredump.conf`. This file may be masked or overridden to use a different setting following normal [sysctl.d(5)](https://man.archlinux.org/man/sysctl.d.5) rules.

To retrieve a core dump from the journal, see [coredumpctl(1)](https://man.archlinux.org/man/coredumpctl.1).

## Managing the core dump files

Use *coredumpctl* to find the corresponding dump. Note that regular users can run *coredumpctl* without special privileges to manage core dumps of their processes.

```
# coredumpctl list
```

### Cleanup of core dump files

The core dump files stored in `/var/lib/systemd/coredump/` will be automatically cleaned by `systemd-tmpfiles --clean`, which is triggered daily with `systemd-tmpfiles-clean.timer`. Core dumps are configured to persist for at least 3 days, see `systemd-tmpfiles --cat-config`.

## Analyzing a core dump

First, you need to uniquely identify the relevant dump. This is possible by specifying a `PID`, name of the executable, path to the executable or a [journalctl](https://wiki.archlinux.org/title/Journalctl "Journalctl") predicate (see [coredumpctl(1)](https://man.archlinux.org/man/coredumpctl.1) and [journalctl(1)](https://man.archlinux.org/man/journalctl.1) for details). To see details of the core dumps:

```
# coredumpctl info match
```

Pay attention to "Signal" row, that helps to identify crash cause. For the analysis one usually examine the backtrace using a debugger ([gdb(1)](https://man.archlinux.org/man/gdb.1) by default):

```
# coredumpctl debug match
```

When *gdb* is started, use the `bt` command to print the full backtrace:

```
(gdb) thread apply all backtrace full
```

In many cases, the output will contain question marks as placeholders for missing debugging symbols. See [Debugging/Getting traces](https://wiki.archlinux.org/title/Debugging/Getting_traces "Debugging/Getting traces") for how to obtain them.

## See also

- [american fuzzy lop](https://lcamtuf.coredump.cx/afl/) - A tool for automated tests of the kernel and programs
- [Filesystem fuzzing](https://lwn.net/Articles/637151/) - LWN article about testing filesystems for bugs