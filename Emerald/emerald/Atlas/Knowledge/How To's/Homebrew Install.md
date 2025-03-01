---
author:
  - "[[Homebrew]]"
created: 2025-02-11
source: https://brew.sh/
tags:
  - howto
  - docs/homebrew
---
part_of:: [[Homebrew]]

## Install Homebrew


```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

Paste that in a **macOS** Terminal or Linux shell prompt.

The script explains what it will do and then pauses before it does it. Read about other [installation options](https://docs.brew.sh/Installation).

If you're on macOS, try our new `.pkg` installer.
- ## What Does Homebrew Do?

Homebrew installs [the stuff you need](https://formulae.brew.sh/formula/ "List of Homebrew packages") that Apple (or your Linux system) didn’t.
- Homebrew installs packages to their own directory and then symlinks their files into `/opt/homebrew` (on Apple Silicon).

```bash
$ cd /opt/homebrew
$ find Cellar
Cellar/wget/1.16.1
Cellar/wget/1.16.1/bin/wget
Cellar/wget/1.16.1/share/man/man1/wget.1

$ ls -l bin
bin/wget -> ../Cellar/wget/1.16.1/bin/wget
```
- Homebrew won’t install files outside its prefix and you can place a Homebrew installation wherever you like.
- Trivially create your own Homebrew packages.

```bash
$ brew create https://foo.com/foo-1.0.tgz
Created /opt/homebrew/Library/Taps/homebrew/homebrew-core/Formula/foo.rb
```
- It’s all Git and Ruby underneath, so hack away with the knowledge that you can easily revert your modifications and merge upstream updates.

```bash
$ brew edit wget # opens in $EDITOR!
```
- Homebrew formulae are simple Ruby scripts:

```ruby
class Wget < Formula
  desc "Internet file retriever"
  homepage "https://www.gnu.org/software/wget/"
  url "https://ftp.gnu.org/gnu/wget/wget-1.24.5.tar.gz"
  sha256 "fa2dc35bab5184ecbc46a9ef83def2aaaa3f4c9f3c97d4bd19dcb07d4da637de"
  license "GPL-3.0-or-later"

  def install
    system "./configure", "--prefix=#{prefix}"
    system "make", "install"
  end
end
```
- Homebrew complements macOS (or your Linux system). Install your RubyGems with `gem` and their dependencies with `brew`.
- “To install, drag this icon…” no more. [Homebrew Cask](https://formulae.brew.sh/cask/) installs macOS apps, fonts and plugins and other non-open source software.

```bash
$ brew install --cask firefox
```
- Making a cask is as simple as creating a formula.

```bash
$ brew create --cask https://foo.com/foo-1.0.dmg
Editing /opt/homebrew/Library/Taps/homebrew/homebrew-cask/Casks/foo.rb
```
- ## `brew` command documentation
- ## Further Documentation

- ## Homebrew Blog
- ## Homebrew Packages
- ## Analytics Data
- ## Donate to Homebrew