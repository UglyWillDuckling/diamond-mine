---
about:
  - "[[fd]]"
tags:
  - howto
  - fd
---
from:: [[fd]]
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

## in short

> [!check] You can use `-H` to show **hidden** files

> [!info] You can use `-I` to show **ignored** files

> [!attention] You can use `--unrestricted`, `-u` to show **all** files
