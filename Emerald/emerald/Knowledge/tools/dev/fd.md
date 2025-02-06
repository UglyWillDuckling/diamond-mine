---
title: "sharkdp/fd: A simple, fast and user-friendly alternative to 'find'"
source: https://github.com/sharkdp/fd
author:
  - "[[sharkdp]]"
published: 
created: 2025-01-24
description: A simple, fast and user-friendly alternative to 'find' - sharkdp/fd
tags:
  - tool
  - command-line
aliases:
  - fdfind
related:
  - "[[GNU Parallel]]"
---
## fd

[![CICD](https://github.com/sharkdp/fd/actions/workflows/CICD.yml/badge.svg)](https://github.com/sharkdp/fd/actions/workflows/CICD.yml) [![Version info](https://camo.githubusercontent.com/46e7b8055060fc07204baffe8886b0d1da9d6e841bd3745c119905a120aaef8b/68747470733a2f2f696d672e736869656c64732e696f2f6372617465732f762f66642d66696e642e737667)](https://crates.io/crates/fd-find) \[[中文](https://github.com/cha0ran/fd-zh)\] \[[한국어](https://github.com/spearkkk/fd-kor)\]

`fd` is a program to find entries in your filesystem. It is a simple, fast and user-friendly alternative to [`find`](https://www.gnu.org/software/findutils/). While it does not aim to support all of `find`'s powerful functionality, it provides sensible (opinionated) defaults for a majority of use cases.

[Installation](https://github.com/sharkdp/#installation) • [How to use](https://github.com/sharkdp/#how-to-use) • [Troubleshooting](https://github.com/sharkdp/#troubleshooting)

## Features

- Intuitive syntax: `fd PATTERN` instead of `find -iname '*PATTERN*'`.
- Regular expression (default) and glob-based patterns.
- [Very fast](https://github.com/sharkdp/#benchmark) due to parallelized directory traversal.
- Uses colors to highlight different file types (same as `ls`).
- Supports [parallel command execution](https://github.com/sharkdp/#command-execution)
- Smart case: the search is case-insensitive by default. It switches to case-sensitive if the pattern contains an uppercase character[\*](http://vimdoc.sourceforge.net/htmldoc/options.html#'smartcase').
- Ignores hidden directories and files, by default.
- Ignores patterns from your `.gitignore`, by default.
- The command name is *50%* shorter[\*](https://github.com/ggreer/the_silver_searcher) than `find` :-).

## Demo

[![Demo](https://github.com/sharkdp/fd/raw/master/doc/screencast.svg)](https://github.com/sharkdp/fd/blob/master/doc/screencast.svg)

## How to use

First, to get an overview of all available command line options, you can either run [`fd -h`](https://github.com/sharkdp/#command-line-options) for a concise help message or `fd --help` for a more detailed version.

### Simple search

*fd* is designed to find entries in your filesystem. The most basic search you can perform is to run *fd* with a single argument: the search pattern. For example, assume that you want to find an old script of yours (the name included `netflix`):

```
> fd netfl
Software/python/imdb-ratings/netflix-details.py
```

If called with just a single argument like this, *fd* searches the current directory recursively for any entries that *contain* the pattern `netfl`.

### Regular expression search

The search pattern is treated as a regular expression. Here, we search for entries that start with `x` and end with `rc`:

```
> cd /etc
> fd '^x.*rc$'
X11/xinit/xinitrc
X11/xinit/xserverrc
```

The regular expression syntax used by `fd` is [documented here](https://docs.rs/regex/latest/regex/#syntax).

### Specifying the **root directory**

If we want to search a **specific directory**, it can be given as a second argument to *fd*:

```bash
fd passwd /etc
/etc/default/passwd
/etc/pam.d/passwd
/etc/passwd
```

### List all files, recursively

*fd* can be called with no arguments. This is very useful to get a quick overview of all entries in the current directory, recursively (similar to `ls -R`):

```bash
cd fd/tests
fd
testenv
testenv/mod.rs
tests.rs
```

> [!attention] If you want to use this functionality to list **all files in a given directory**, you have to use a *catch-all* pattern such`.` or `^`:
>```rb
fd . fd/tests/
testenv
testenv/mod.rs
tests.rs
>```

### Searching for a particular file extension

Often, we are interested in all files of a particular type. This can be done with the `-e` (or `--extension`) option. Here, we search for all Markdown files in the fd repository:

```bash
fd -e md
CONTRIBUTING.md
README.md
```

The `-e` option can be used in combination with a search pattern:

```bash
fd -e rs mod
src/fshelper/mod.rs
src/lscolors/mod.rs
tests/testenv/mod.rs
```

### Searching for a particular file name

**To find files with exactly the provided search pattern, use the `-g` (or `--glob`) option:**

```
> fd -g libc.so /usr
/usr/lib32/libc.so
/usr/lib/libc.so
```

### *Hidden* and *ignored* files

By default, *fd* does not search hidden directories and does not show hidden files in the search results. To disable this behavior, we can use the `-H` (or `--hidden`) option:

```bash
fd pre-commit
fd -H pre-commit
.git/hooks/pre-commit.sample
```

If we work in a directory that is a Git repository (or includes Git repositories), *fd* **does not search folders** (and does not show files) that match one of the `.gitignore` patterns. To disable this behavior, we can use the `-I` (or `--no-ignore`) option:

```bash
fd num_cpu
fd -I num_cpu
target/debug/deps/libnum_cpus-f5ce7ef99006aa05.rlib
```

To really search *all* files and directories, simply combine the hidden and ignore features to show everything (`-HI`) or use `-u`/`--unrestricted`.

### Matching the full path

By default, *fd* only matches the filename of each file. However, using the `--full-path` or `-p` option, you can **match against the full path.**

```bash
fd -p -g '**/.git/config'
fd -p '.*/lesson-\d+/[a-z]+.(jpg|png)'
```

### Command ==execution==

Instead of just showing the search results, you often want to *do something* with them. `fd` provides two ways to execute external commands for each of your search results:

- The `-x`/`--exec` option runs an external command *for each of the search results* (in parallel).
- The `-X`/`--exec-batch` option launches the external command once, with *all search results as arguments*.

Recursively find all zip archives and unpack them:

If there are two such files, `file1.zip` and `backup/file2.zip`, this would execute `unzip file1.zip` and `unzip backup/file2.zip`. The two `unzip` processes run in parallel (if the files are found fast enough).

Find all `*.h` and `*.cpp` files and auto-format them inplace with `clang-format -i`:

```bash
fd -e h -e cpp -x clang-format -i
```

Note how the `-i` option to `clang-format` can be passed as a separate argument. This is why we put the `-x` option last.

**Find** all `test_*.py` files and open them in your favorite **editor**:
```bash
fd -g 'test_*.py' -X vim
```

Note that we use capital `-X` here to open a single `vim` instance. If there are two such files, `test_basic.py` and `lib/test_advanced.py`, this will run `vim test_basic.py lib/test_advanced.py`.

To see details like file permissions, owners, file sizes etc., you can tell `fd` to show them by running `ls` for each result:

```bash
fd … -X ls -lhd --color=always
```

This pattern is so useful that `fd` provides a shortcut. You can use the `-l`/`--list-details` option to execute `ls` in this way: `fd … -l`.

The `-X` option is also useful when combining `fd` with [ripgrep](https://github.com/BurntSushi/ripgrep/) (`rg`) in order to search within a certain class of files, like all C++ source files:

```bash
fd -e cpp -e cxx -e h -e hpp -X rg 'std::cout'
```

Convert all `*.jpg` files to `*.png` files:

```bash
fd -e jpg -x convert {} {.}.png
```

Here, `{}` is a **placeholder** for the search result. `{.}` is the same, without the file extension. See below for more details on the placeholder syntax.

The terminal output of commands run from parallel threads using `-x` will not be interlaced or garbled, so `fd -x` can be used to rudimentarily parallelize a task run over many files. An example of this is calculating the checksum of each individual file within a directory.

```rb
fd -tf -x md5sum > file_checksums.txt
```

#### [[placeholder syntax for fd]]

![[placeholder syntax for fd]]

#### **Parallel** vs. *serial* execution 

For `-x`/`--exec`, you can control the number of parallel jobs by using the `-j`/`--threads` option. Use `--threads=1` for serial execution.
### `Excluding`  *files* or directories

Sometimes we want to ignore search results from a specific subdirectory. For example, we might want to search all hidden files and directories (`-H`) but exclude all matches from `.git` directories. We can use the `-E` (or `--exclude`) option for this. It takes an arbitrary **glob pattern** as an argument:

We can also use this to skip mounted directories:

```ruby
fd -E /mnt/external-drive …
```

.. or to skip certain file types:

To make exclude-patterns like these permanent, you can create a `.fdignore` file. They work like `.gitignore` files, but are specific to `fd`. For example:

```bash
cat ~/.fdignore
/mnt/external-drive
*.bak
```

📔Note
`fd` also supports `.ignore` files that are used by other programs such as `rg` or `ag`.

If you want `fd` to ignore these patterns globally, you can put them in `fd`'s global ignore file. This is usually located in `~/.config/fd/ignore` in macOS or Linux, and `%APPDATA%\fd\ignore` in Windows.

You may wish to include `.git/` in your `fd/ignore` file so that `.git` directories, and their contents are not included in output if you use the `--hidden` option.

### Deleting files

You can use `fd` to remove all files and directories that are matched by your search pattern. If you only want to remove files, you can use the `--exec-batch`/`-X` option to call `rm`. For example, to recursively remove all `.DS_Store` files, run:

```
> fd -H '^\.DS_Store$' -tf -X rm
```

If you are unsure, always call `fd` without `-X rm` first. Alternatively, use `rm`s "interactive" option:

```
> fd -H '^\.DS_Store$' -tf -X rm -i
```

If you also want to remove a certain class of directories, you can use the same technique. You will have to use `rm`s `--recursive`/`-r` flag to remove directories.

Note

There are scenarios where using `fd … -X rm -r` can cause race conditions: if you have a path like `…/foo/bar/foo/…` and want to remove all directories named `foo`, you can end up in a situation where the outer `foo` directory is removed first, leading to (harmless) *"'foo/bar/foo': No such file or directory"* errors in the `rm` call.

### Command-line **options**

This is the output of `fd -h`. 

```bash
Usage: fd [OPTIONS] [pattern] [path]...

Arguments:
  [pattern]  the search pattern (a regular expression, unless '--glob' is used; optional)
  [path]...  the root directories for the filesystem search (optional)

Options:
  -H, --hidden                     Search hidden files and directories
  -I, --no-ignore                  Do not respect .(git|fd)ignore files
  -s, --case-sensitive             Case-sensitive search (default: smart case)
  -i, --ignore-case                Case-insensitive search (default: smart case)
  -g, --glob                       Glob-based search (default: regular expression)
  -a, --absolute-path              Show absolute instead of relative paths
  -l, --list-details               Use a long listing format with file metadata
  -L, --follow                     Follow symbolic links
  -p, --full-path                  Search full abs. path (default: filename only)
  -d, --max-depth <depth>          Set maximum search depth (default: none)
  -E, --exclude <pattern>          Exclude entries that match the given glob pattern
  -t, --type <filetype>            Filter by type: file (f), directory (d/dir), symlink (l),
                                   executable (x), empty (e), socket (s), pipe (p), char-device
                                   (c), block-device (b)
  -e, --extension <ext>            Filter by file extension
  -S, --size <size>                Limit results based on the size of files
      --changed-within <date|dur>  Filter by file modification time (newer than)
      --changed-before <date|dur>  Filter by file modification time (older than)
  -o, --owner <user:group>         Filter by owning user and/or group
      --format <fmt>               Print results according to template
  -x, --exec <cmd>...              Execute a command for each search result
  -X, --exec-batch <cmd>...        Execute a command with all search results at once
  -c, --color <when>               When to use colors [default: auto] [possible values: auto,
                                   always, never]
      --hyperlink[=<when>]         Add hyperlinks to output paths [default: never] [possible
                                   values: auto, always, never]
  -h, --help                       Print help (see more with '--help')
  -V, --version                    Print version
```

> [!NOTE$c] use `--help` to see detailed options

- [x] remind me about --help for **fd** (@[[2025-02-05]] 10:21)
## Integration with other programs

### Using fd with `fzf`

You can use *fd* to generate input for the command-line fuzzy finder [fzf](https://github.com/junegunn/fzf):

```
export FZF_DEFAULT_COMMAND='fd --type file'
export FZF_CTRL_T_COMMAND="$FZF_DEFAULT_COMMAND"
```

Then, you can type `vim <Ctrl-T>` on your terminal to open fzf and search through the fd-results.

Alternatively, you might like to follow symbolic links and include hidden files (but exclude `.git` folders):

```
export FZF_DEFAULT_COMMAND='fd --type file --follow --hidden --exclude .git'
```

You can even use fd's colored output inside fzf by setting:

```
export FZF_DEFAULT_COMMAND="fd --type file --color=always"
export FZF_DEFAULT_OPTS="--ansi"
```

For more details, see the [Tips section](https://github.com/junegunn/fzf#tips) of the fzf README.

### Using fd with `rofi`

[*rofi*](https://github.com/davatorium/rofi) is a graphical launch menu application that is able to create menus by reading from *stdin*. Piping `fd` output into `rofi`s `-dmenu` mode creates fuzzy-searchable lists of files and directories.

#### Example

Create a case-insensitive searchable multi-select list of *PDF* files under your `$HOME` directory and open the selection with your configured PDF viewer. To list all file types, drop the `-e pdf` argument.

```
fd --type f -e pdf . $HOME | rofi -keep-right -dmenu -i -p FILES -multi-select | xargs -I {} xdg-open {}
```

To modify the list that is presented by rofi, add arguments to the `fd` command. To modify the search behaviour of rofi, add arguments to the `rofi` command.

### Using fd with `emacs`

The emacs package [find-file-in-project](https://github.com/technomancy/find-file-in-project) can use *fd* to find files.

After installing `find-file-in-project`, add the line `(setq ffip-use-rust-fd t)` to your `~/.emacs` or `~/.emacs.d/init.el` file.

In emacs, run `M-x find-file-in-project-by-selected` to find matching files. Alternatively, run `M-x find-file-in-project` to list all available files in the project.

### Printing the output as a *tree*

To format the output of `fd` as a **file-tree** you can use the `tree` command with `--fromfile`:

This can be more useful than running `tree` by itself because `tree` does not ignore any files by default, nor does it support as rich a set of options as `fd` does to control what to print:

```bash
fd --extension rs | tree --fromfile
.
├── build.rs
└── src
    ├── app.rs
    └── error.rs
```

On bash and similar you can simply create an alias:

```bash
alias as-tree='tree --fromfile'
```

### Using fd with `xargs` or `parallel`

Note that `fd` has a builtin feature for [command execution](https://github.com/sharkdp/#command-execution) with its `-x`/`--exec` and `-X`/`--exec-batch` options. If you prefer, you can still use it in combination with `xargs`:

```bash
fd -0 -e rs | xargs -0 wc -l
```

Here, the `-0` option tells *fd* to separate search results by the NULL character (instead of newlines). In the same way, the `-0` option of `xargs` tells it to read the input in this way.
