---
source: https://github.com/ohmyzsh/ohmyzsh/wiki/Installing-ZSH
published: 
created: 2025-02-11
tags:
  - docs/zsh
  - github
---
> *This wiki is automatically published from [ohmyzsh/wiki](https://github.com/ohmyzsh/wiki). To edit this page,* *go to [ohmyzsh/wiki](https://github.com/ohmyzsh/wiki), make your changes and submit a Pull Request.*

## Zsh?

**Oh My Zsh** is a framework for [Zsh](https://www.zsh.org/), the Z shell.

- In order for **Oh My Zsh** to work, **Zsh must be installed**.
- Please run `zsh --version` to confirm.
- Expected result: `zsh 5.0.8` or more recent
- Additionally, Zsh should be set as your default shell.
- Please run `echo $SHELL` from a new terminal to confirm.
- Expected result: `/usr/bin/zsh` or similar

## Install and set up zsh as default

If necessary, follow these steps to install Zsh:

1. There are two main ways to install Zsh:

- With the package manager of your choice, *e.g.* `sudo apt install zsh` (see [below for more examples](https://github.com/ohmyzsh/ohmyzsh/wiki/#how-to-install-zsh-on-many-platforms))
- From [source](https://zsh.sourceforge.io/Arc/source.html), following [the instructions from the Zsh FAQ](https://zsh.sourceforge.io/FAQ/zshfaq01.html#l7).
2. Verify installation by running `zsh --version`. Expected result: `zsh 5.0.8` or more recent.
3. Make it your default shell: `chsh -s $(which zsh)`.  
If you are on Fedora, use `sudo chsh $USER` for recent versions or `sudo lchsh $USER` for older versions.

- Note that this will not work if Zsh is not in your authorized shells list (`/etc/shells`) or if you don't have permission to use `chsh`. If that's the case [you'll need to use a different procedure](https://www.google.com/search?q=zsh+default+without+chsh).
- If you run just `chsh` you need to type `/bin/zsh` to make it your default shell.
4. Log out and log back in again to use your new default shell.
5. Test that it worked with `echo $SHELL`. Expected result: `/bin/zsh` or similar.
6. Test with `$SHELL --version`. Expected result: 'zsh 5.8' or similar

## How to install zsh on many platforms

### macOS

**Try `zsh --version` before installing it from Homebrew. Preferably newer than or equal to `5.0.8`.**

To set zsh as your default shell, execute the following assuming a default install of Homebrew

- Recent macOS versions:

For m1 macs:

For intel macs:

```
chsh -s /usr/local/bin/zsh
```
- macOS **High Sierra** and older:

If you get an error for non-stadard shell you can try running first

```
sudo sh -c "echo $(which zsh) >> /etc/shells"
```

Assuming you have [Homebrew](https://brew.sh/) installed. If not, most versions of **macOS** ship zsh by default, but it's normally an older version. Alternatively, you may also use [MacPorts](https://www.macports.org/)

```
sudo port install zsh zsh-completions
```

### Ubuntu, Debian & derivatives (Windows 10 WSL | Native Linux kernel with Windows 10 build 1903)

If you don't have `apt`, the recommended package manager for end users [\[1\]](https://askubuntu.com/a/446484) [\[2\]](https://askubuntu.com/a/775264) [\[3\]](https://help.ubuntu.com/lts/serverguide/apt.html) [\[4\]](https://www.howtogeek.com/234583/simplify-command-line-package-management-with-apt-instead-of-apt-get/) , you can try `apt-get` or `aptitude`.

[Other distributions that apply](https://en.wikipedia.org/wiki/List_of_Linux_distributions#Debian-based) include: Linux Mint, elementary OS, Zorin OS, Raspbian, MX Linux, Deepin.

### OpenSUSE

### Arch Linux or Manjaro

### Void Linux

### Fedora

### OpenBSD

To install the package:

### FreeBSD

To install the package:

To install the port:

```
cd /usr/ports/shells/zsh/ && make install clean
```

To reduce memory usage, optionally enable zsh-mem options with ![installation screen to enable zsh-mem](https://camo.githubusercontent.com/89be01fcc215dac4fc9dc3ac80f1f9d81378e6fd54debf5e4cc63e1146650910/68747470733a2f2f692e696d6775722e636f6d2f6c34696436456b2e706e67)

before running "make install".

### Centos/RHEL

```
sudo yum update && sudo yum -y install zsh
```

### Cygwin

Install the zsh package using the installer. Unfortunately Cygwin doesn't have a standard command line interface. You could, however, setup [apt-cyg](https://github.com/kou1okada/apt-cyg) and install zsh as follows:

The easiest way to change the default shell is to set your SHELL user environment variable. Search for "Edit Environment variables for your account" to bring up the environment variables window, create a new variable named "SHELL" and give it the value "/usr/bin/zsh/".

*Alternatively:* Open Cygwin (in BASH) then type:

Once the .bashrc file is open, add this line to the very top:

Close and save the file. Close and reopen Cygwin. It will execute the command every time you load the terminal and run your zsh shell.

### Solus

### Funtoo/Gentoo

### Alpine Linux

### MSYS2

### Termux (Android)

Termux is an terminal emulator for Android but has modern feature like Debian and Ubuntu (Termux has Bash shell and Busybox GNU-like programs). For the package manager, Termux using an Debian/Ubuntu package manager, APT. To install the package, run this command:

The command looks like FreeBSD package manager (`pkg`). Or you can run this command:

```
apt update && apt upgrade
apt install zsh
```

To set zsh as your default shell, run this command:

### KISS Linux

To install zsh, you must add the [community](https://github.com/kiss-community/repo-community/) repo to your `$KISS_PATH`.
