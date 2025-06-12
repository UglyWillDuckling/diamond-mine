---
source: https://unix.stackexchange.com/questions/79064/how-to-export-variables-from-a-file
published: 2013-06-11
created: 2025-01-17
tags:
  - howto
  - shell
  - bash
  - dev
  - unix
---
```bash
set -a
. ./tmp.txt
set +a
```

`set -a` causes variables¹ defined from now on to be automatically exported. It's available in any Bourne-like shell. `.` is the standard and Bourne name for the `source` command so I prefer it for portability (`source` comes from `csh` and is now available in most modern Bourne-like shells including `bash` though (sometimes with a slightly different behaviour)).
%% [[Bourne shell]] %%

In [[POSIX]] shells, you can also use
[^1]
[^1]
[^a named footnote]

```bash
set -o allexport
. ./tmp.txt
set +o allexport
```

You can make it a [[function]] with:
[^a named footnote]
```bash
export_from() {
  # local is not a standard command but is pretty common. It's needed here
  # for this code to be re-entrant (for the case where sourced files to
  # call export_from). We still use _export_from_ prefix to namespace
  # those variables to reduce the risk of those variables being some of
  # those exported by the sourced file.
  
  local _export_from_ret _export_from_restore _export_from_file

  _export_from_ret=0

  # record current state of the allexport option. Some shells (ksh93/zsh)
  # have support for local scope for options, but there's no standard
  # equivalent.
  case $- in
    (*a*) _export_from_restore=;;
    (*)   _export_from_restore='set +a';;
  esac

  for _export_from_file do
    # using the command prefix removes the "special" attribute of the "."
    # command so that it doesn't exit the shell when failing.
    command . "$_export_from_file" || _export_from_ret="$?"
  done
  eval "$_export_from_restore"
  return "$_export_from_ret"
}
```

---

<sup>¹ In <code>bash</code>, beware that it also causes all <strong>functions</strong> declared while <code>allexport</code> is on to be exported to the environment (as <code>BASH_FUNC_myfunction%%</code> environment variables that are then imported by all <code>bash</code> shells run in that environment, even when running as <code>sh</code>).</sup>

- [x] remind me(@[[2025-01-31]])
- [x] 2 week (@[[2025-02-18]] 10:00)

[^1]: a new footnote

[^a named footnote]: Hello
[^another one]: hello