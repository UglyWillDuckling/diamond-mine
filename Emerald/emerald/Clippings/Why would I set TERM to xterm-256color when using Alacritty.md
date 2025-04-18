---
author:
  - "[[Unix & Linux Stack Exchange]]"
created: 2025-04-18
published: 2020-07-08
source: "https://unix.stackexchange.com/questions/597445/why-would-i-set-term-to-xterm-256color-when-using-alacritty"
tags:
---
Asked

Modified [3 years, 4 months ago](https://unix.stackexchange.com/questions/597445/?lastactivity "2021-11-24 15:49:29Z")

Viewed 34k times

So, I decided to give Alacritty a try, and in their default configuration there is the following comment:

```
#env:
  # TERM variable
  #
  # This value is used to set the \`$TERM\` environment variable for
  # each instance of Alacritty. If it is not present, alacritty will
  # check the local terminfo database and use \`alacritty\` if it is
  # available, otherwise \`xterm-256color\` is used.
  #TERM: alacritty
```

What I don't get it is: why would I want to set TERM to `xterm-256color` when using alacritty? Isn't xterm the default terminal emulator for Linux? In the old OSX days I remember using iTerm2 but the variable TERM was set to `xterm-256color` if I'm not mistake - back then I never thought the reason why that was the case.

3

As a Neovim master, I'm here to save thousands of folks who want to use beautiful **true color Alacritty with tmux**. I've confirmed that this will work on both **macOS** and **ubuntu VM**. Follow me!

In [alacritty / INSTALL.md](https://github.com/alacritty/alacritty/blob/master/INSTALL.md#terminfo) from the **official Alacritty GitHub**.

## If you build alacritty yourself

great! Make sure you're in the **alacritty/** folder you cloned and run **one command**:

```
sudo tic -xe alacritty,alacritty-direct extra/alacritty.info
```

then go to your rc file (In my case `.zshrc`) and add:

```
export TERM=alacritty
```

## If you install alacritty via Homebrew

Great! I'm on the same side as you! Instead of cloning the entire **alacritty/** folder, run this **anywhere** in your computer:

```
mkdir alacritty
```

and then download the **alacritty/extra/** folder and copy it into the `alacritty/` you just create, then (the following steps the same as **bulid** step above) run:

```
sudo tic -xe alacritty,alacritty-direct extra/alacritty.info
```

then go to your rc file (In my case `.zshrc`) and add:

```
export TERM=alacritty
```

## Enjoy!

4

## You wouldn't.

The correct terminal type for Alacritty is, as the comment even says, [`alacritty`](https://invisible-island.net/ncurses/terminfo.src.html#tic-alacritty).

What the comment is telling you is that, if you don't *explicitly* specify the terminal type, Alacritty goes and looks to see whether your terminfo database has an `alacritty` entry, sets the terminal type to `alacritty` if so, and uses a *bad fallback* if it doesn't have such an entry.

`xterm-*anything*` is the wrong terminal type to set unless your terminal emulator is actually the XTerm program.

The right thing to do is to put an `alacritty` entry in your terminfo database if it is missing. terminfo both allows entries to be exported from and imported to machines, *and* allows people to locally add terminal capabilities records in their home directories.

It shouldn't be missing. Dickey terminfo has had an `alacritty` entry since 2018, and the Alacritty developers themselves have supplied a terminfo entry that one can add to one's database since 2017.

## Further reading

- [https://unix.stackexchange.com/a/515517/5132](https://unix.stackexchange.com/a/515517/5132)
- [https://unix.stackexchange.com/a/560992/5132](https://unix.stackexchange.com/a/560992/5132)

7

The [current top rated answer](https://unix.stackexchange.com/a/598416/9745) states:

> The right thing to do is to put an alacritty entry in your terminfo database if it is missing. terminfo both allows entries to be exported from and imported to machines, and allows people to locally add terminal capabilities records in their home directories.

Here is a oneliner that does the export locally and the import remotely via ssh:

```
infocmp | ssh $user@$host 'tic -x -'
```

See `man infocmp` and `man tic` for more info on the export and import commands respectively.

**Bonus Unix/Linux tip** (Don't downvote the messenger;-)

The use of `-` as a filename is a common (though not universal) convention for telling a command that expects a file argument to instead read from `/dev/stdin`. Many commands ([including `tic`](https://man.openbsd.org/tic.1)) support it without stating so in the man page. You can use the explicit device path in most cases.

```
infocmp | ssh $user@$host 'tic -x /dev/stdin'
```

1

One reason is to make sure that the output of ls is colorized: dircolors is used to set the LS\_COLORS environment variable. dircolors reads TERM to determine whether the terminal supports colors. If you run

```
dircolors --print-database | grep '^TERM'
```

you get a list of all color terminals that dircolors knows. `alacritty` is not on the list. I assume that more programs with such behavior exist or else Alacritty’s default value for TERM could be `alacritty-color` (since `*color*` is on dircolors’ list).

Because of a bug in Mono, some games do not launch. The [official workaround](https://github.com/mono/mono/issues/6752#issuecomment-365212655) is to use `TERM=xterm`.

2

[Voice to the contrary](https://wiki.archlinux.org/index.php/Alacritty#Terminal_functionality_unavailable_in_remote_shells) (and why I am contemplating switch myself):

> When connecting to a remote system from an Alacritty terminal, for instance over SSH, it can occur that the system does not have an entry for Alacritty in its terminfo database (`/usr/share/terminfo/a/alacritty*`). Therefore, all interactive terminal functionality does not work. This can be fixed by explicitly exporting the value of the `TERM` variable set to `xterm-256color` instead of the default `alacritty`.

2