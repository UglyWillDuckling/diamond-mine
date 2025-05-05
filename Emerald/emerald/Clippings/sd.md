---
author:
  - "[[GitHub]]"
created: 2025-04-30
published: 
source: https://github.com/chmln/sd
tags:
  - tool/cli
---
Intuitive find & replace CLI (sed alternative)

[MIT license](https://github.com/chmln/sd/blob/master/LICENSE)

[Open in github.dev](https://github.dev/) [Open in a new github.dev tab](https://github.dev/) [Open in codespace](https://github.com/codespaces/new/chmln/sd?resume=1)

<table><thead><tr><th colspan="2"><span>Name</span></th><th colspan="1"><span>Name</span></th><th><p><span>Last commit message</span></p></th><th colspan="1"><p><span>Last commit date</span></p></th></tr></thead><tbody><tr><td colspan="3"><p><span><a href="https://github.com/chmln/sd/commit/1254e03809f0102dbe8947fd6204ae23c5628cea">fix(</a><a href="https://github.com/chmln/sd/issues/313">#313</a><a href="https://github.com/chmln/sd/commit/1254e03809f0102dbe8947fd6204ae23c5628cea">): Replace unescape crate with more lenient implementation</a></span></p><p><span><a href="https://github.com/chmln/sd/commit/1254e03809f0102dbe8947fd6204ae23c5628cea">1254e03</a> ·</span></p><p><a href="https://github.com/chmln/sd/commits/master/"><span><span><span>322 Commits</span></span></span></a></p></td></tr><tr><td colspan="2"><p><a href="https://github.com/chmln/sd/tree/master/.cargo">.cargo</a></p></td><td colspan="1"><p><a href="https://github.com/chmln/sd/tree/master/.cargo">.cargo</a></p></td><td></td><td></td></tr><tr><td colspan="2"><p><a href="https://github.com/chmln/sd/tree/master/.github">.github</a></p></td><td colspan="1"><p><a href="https://github.com/chmln/sd/tree/master/.github">.github</a></p></td><td><p><a href="https://github.com/chmln/sd/commit/8f83f8fd61b4b0f12cbcebbf2b15bddcb7263996">Bump svenstaro/upload-release-action from 2.7.0 to 2.9.0</a></p></td><td></td></tr><tr><td colspan="2"><p><a href="https://github.com/chmln/sd/tree/master/gen">gen</a></p></td><td colspan="1"><p><a href="https://github.com/chmln/sd/tree/master/gen">gen</a></p></td><td><p><a href="https://github.com/chmln/sd/commit/42f7deae06d5a68d8751c7d279cf6cd27a6b5c3d">Update man page to use changed flag for string literals (</a><a href="https://github.com/chmln/sd/pull/279">#279</a><a href="https://github.com/chmln/sd/commit/42f7deae06d5a68d8751c7d279cf6cd27a6b5c3d">)</a></p></td><td></td></tr><tr><td colspan="2"><p><a href="https://github.com/chmln/sd/tree/master/proptest-regressions/replacer"><span>proptest-regressions/</span> <span>replacer</span></a></p></td><td colspan="1"><p><a href="https://github.com/chmln/sd/tree/master/proptest-regressions/replacer"><span>proptest-regressions/</span> <span>replacer</span></a></p></td><td></td><td></td></tr><tr><td colspan="2"><p><a href="https://github.com/chmln/sd/tree/master/src">src</a></p></td><td colspan="1"><p><a href="https://github.com/chmln/sd/tree/master/src">src</a></p></td><td><p><a href="https://github.com/chmln/sd/commit/1254e03809f0102dbe8947fd6204ae23c5628cea">fix(</a><a href="https://github.com/chmln/sd/issues/313">#313</a><a href="https://github.com/chmln/sd/commit/1254e03809f0102dbe8947fd6204ae23c5628cea">): Replace unescape crate with more lenient implementation</a></p></td><td></td></tr><tr><td colspan="2"><p><a href="https://github.com/chmln/sd/tree/master/tests">tests</a></p></td><td colspan="1"><p><a href="https://github.com/chmln/sd/tree/master/tests">tests</a></p></td><td></td><td></td></tr><tr><td colspan="2"><p><a href="https://github.com/chmln/sd/tree/master/xtask">xtask</a></p></td><td colspan="1"><p><a href="https://github.com/chmln/sd/tree/master/xtask">xtask</a></p></td><td><p><a href="https://github.com/chmln/sd/commit/0fd8524b29773eeae8d692d81f29718aef6befe3">docs: fix capture group example in man page</a></p></td><td></td></tr><tr><td colspan="2"><p><a href="https://github.com/chmln/sd/blob/master/.editorconfig">.editorconfig</a></p></td><td colspan="1"><p><a href="https://github.com/chmln/sd/blob/master/.editorconfig">.editorconfig</a></p></td><td></td><td></td></tr><tr><td colspan="2"><p><a href="https://github.com/chmln/sd/blob/master/.gitignore">.gitignore</a></p></td><td colspan="1"><p><a href="https://github.com/chmln/sd/blob/master/.gitignore">.gitignore</a></p></td><td><p><a href="https://github.com/chmln/sd/commit/db3fc2fcff319f1016e777a50d466240cb012aec">start</a></p></td><td></td></tr><tr><td colspan="2"><p><a href="https://github.com/chmln/sd/blob/master/.rustfmt.toml">.rustfmt.toml</a></p></td><td colspan="1"><p><a href="https://github.com/chmln/sd/blob/master/.rustfmt.toml">.rustfmt.toml</a></p></td><td></td><td></td></tr><tr><td colspan="3"></td></tr></tbody></table>

`sd` is an intuitive find & replace CLI.

## The Pitch

Why use it over any existing tools?

*Painless regular expressions.*`sd` uses regex syntax that you already know from JavaScript and Python. Forget about dealing with quirks of `sed` or `awk` - get productive immediately.

*String-literal mode.* Non-regex find & replace. No more backslashes or remembering which characters are special and need to be escaped.

*Easy to read, easy to write.* Find & replace expressions are split up, which makes them easy to read and write. No more messing with unclosed and escaped slashes.

*Smart, common-sense defaults.* Defaults follow common sense and are tailored for typical daily use.

While sed does a whole lot more, sd focuses on doing just one thing and doing it well. Here are some cherry-picked examples where sd shines.

Simpler syntax for replacing all occurrences:

- sd: `sd before after`
- sed: `sed s/before/after/g`

Replace newlines with commas:

- sd: `sd '\n' ','`
- sed: `sed ':a;N;$!ba;s/\n/,/g'`

Extracting stuff out of strings containing slashes:

- sd: `echo "sample with /path/" | sd '.*(/.*/)' '$1'`
- sed: `echo "sample with /path/" | sed -E 's/.*(\\/.*\\/)/\1/g'`
	With sed, you can make it better with a different delimiter, but it is still messy:
	`echo "sample with /path/" | sed -E 's|.*(/.*/)|\1|g'`

In place modification of files:

- sd: `sd before after file.txt`
- sed: `sed -i -e 's/before/after/g' file.txt`
	With sed, you need to remember to use `-e` or else some platforms will consider the next argument to be a backup suffix.

## Benchmarks

**Simple replacement on ~1.5 gigabytes of JSON**

```
hyperfine --warmup 3 --export-markdown out.md \
  'sed -E "s/\"/'"'"'/g" *.json > /dev/null' \
  'sed    "s/\"/'"'"'/g" *.json > /dev/null' \
  'sd     "\"" "'"'"'"   *.json > /dev/null'
```

| Command | Mean \[s\] | Min…Max \[s\] |
| --- | --- | --- |
| `sed -E "s/\"/'/g" *.json > /dev/null` | 2.338 ± 0.008 | 2.332…2.358 |
| `sed    "s/\"/'/g" *.json > /dev/null` | 2.365 ± 0.009 | 2.351…2.378 |
| `sd     "\"" "'"   *.json > /dev/null` | **0.997 ± 0.006** | 0.987…1.007 |

Result: ~2.35 times faster

**Regex replacement on a ~55M json file**:

```
hyperfine --warmup 3 --export-markdown out.md \
  'sed -E "s:(\w+):\1\1:g"    dump.json > /dev/null' \
  'sed    "s:\(\w\+\):\1\1:g" dump.json > /dev/null' \
  'sd     "(\w+)" "$1$1"      dump.json > /dev/null'
```

| Command | Mean \[s\] | Min…Max \[s\] |
| --- | --- | --- |
| `sed -E "s:(\w+):\1\1:g"    dump.json > /dev/null` | 11.315 ± 0.215 | 11.102…11.725 |
| `sed    "s:\(\w\+\):\1\1:g" dump.json > /dev/null` | 11.239 ± 0.208 | 11.057…11.762 |
| `sd     "(\w+)" "$1$1"      dump.json > /dev/null` | **0.942 ± 0.004** | 0.936…0.951 |

Result: ~11.93 times faster

## Installation

Install through [`cargo`](https://doc.rust-lang.org/cargo/getting-started/installation.html) with `cargo install sd`, or through various package managers

[![Packaging status](https://camo.githubusercontent.com/2cabe028d55a72bdcfa941e2570a01ae73fa80970ae8634eda81bf1f8d53cf0c/68747470733a2f2f7265706f6c6f67792e6f72672f62616467652f766572746963616c2d616c6c7265706f732f73642d66696e642d7265706c6163652e7376673f6578636c7564655f756e737570706f727465643d31)](https://repology.org/project/sd-find-replace/versions)

## Quick Guide

1. **String-literal mode**. By default, expressions are treated as regex. Use `-F` or `--fixed-strings` to disable regex.
	```
	> echo 'lots((([]))) of special chars' | sd -F '((([])))' ''
	lots of special chars
	```
2. **Basic regex use** - let's trim some trailing whitespace
	```
	> echo 'lorem ipsum 23   ' | sd '\s+$' ''
	lorem ipsum 23
	```
3. **Capture groups**
	Indexed capture groups:
	```
	> echo 'cargo +nightly watch' | sd '(\w+)\s+\+(\w+)\s+(\w+)' 'cmd: $1, channel: $2, subcmd: $3'
	cmd: cargo, channel: nightly, subcmd: watch
	```
	Named capture groups:
	```
	> echo "123.45" | sd '(?P<dollars>\d+)\.(?P<cents>\d+)' '$dollars dollars and $cents cents'
	123 dollars and 45 cents
	```
	In the unlikely case you stumble upon ambiguities, resolve them by using `${var}` instead of `$var`. Here's an example:
	```
	> echo '123.45' | sd '(?P<dollars>\d+)\.(?P<cents>\d+)' '$dollars_dollars and $cents_cents'
	 and
	> echo '123.45' | sd '(?P<dollars>\d+)\.(?P<cents>\d+)' '${dollars}_dollars and ${cents}_cents'
	123_dollars and 45_cents
	```
4. **Find & replace in a file**
	```
	> sd 'window.fetch' 'fetch' http.js
	```
	That's it. The file is modified in-place.
	To preview changes:
	```
	> sd -p 'window.fetch' 'fetch' http.js
	```
5. **Find & replace across project**
	This example uses [fd](https://github.com/sharkdp/fd).
	Good ol' unix philosophy to the rescue.
	```
	fd --type file --exec sd 'from "react"' 'from "preact"'
	```
	Same, but with backups (consider version control).
	```
	fd --type file --exec cp {} {}.bk \; --exec sd 'from "react"' 'from "preact"'
	```

### Edge cases

sd will interpret every argument starting with `-` as a (potentially unknown) flag. The common convention of using `--` to signal the end of flags is respected:

```
$ echo "./hello foo" | sd "foo" "-w"
error: Found argument '-w' which wasn't expected, or isn't valid in this context

USAGE:
    sd [OPTIONS] <find> <replace-with> [files]...

For more information try --help
$ echo "./hello foo" | sd "foo" -- "-w"
./hello -w
$ echo "./hello --foo" | sd -- "--foo" "-w"
./hello -w
```

To escape the `$` character, use `$$`:

```
❯ echo "foo" | sd 'foo' '$$bar'
$bar
```

## Releases 11

[\+ 10 releases](https://github.com/chmln/sd/releases)