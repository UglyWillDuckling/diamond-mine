- Light
- Rust
- Coal
- Navy
- Ayu

# Zellij User Guide

[Print this book](print.html "Print this book")

# [Compatibility](compatibility.html\#compatibility)

## [Issues](compatibility.html\#issues)

Please report issues [here.](https://github.com/zellij-org/zellij/issues)

* * *

# [Known Issues](compatibility.html\#known-issues)

## [The status bar fonts don't render correctly:](compatibility.html\#the-status-bar-fonts-dont-render-correctly)

This most likely is caused by a missing character in the font.

Fonts from [nerdfonts](https://github.com/ryanoasis/nerd-fonts) can fix this problem.

Some Options:

Package ManagerNameaptfonts-powerlinenixnerdfonts

Post installation the appropriate environment needs to be aware of the font.

## [Alt button mapping on Mac hardware (Darwin systems):](compatibility.html\#alt-button-mapping-on-mac-hardware-darwin-systems)

This can be mitigated individually on a terminal emulator level,
see [the FAQ](faq.html#i-am-a-macos-user-how-can-i-use-the-alt-key) for more information.

## [Pane frame title has issues with kitty:](compatibility.html\#pane-frame-title-has-issues-with-kitty)

This sadly seems to be an issue that can not be mitigated easily,
more information can be found [here](https://github.com/zellij-org/zellij/issues/689#issuecomment-914057955).

## [Mouse issues:](compatibility.html\#mouse-issues)

If `mouse_mode` is turned on zellij handles these events, zellij provides an
escape mechanism in the form of the `SHIFT` Key, once it is pressed zellij lets
the terminal handle selection, clicking on links, copying, scrolling.

More information can be found [here](https://github.com/zellij-org/zellij/issues/627)

## [Clipboard not working:](compatibility.html\#clipboard-not-working)

This is a known problem which mostly occurs in specific terminal emulators
under Linux/OS X such as GNOMEs default Terminal, terminator, and more.

A workaround for this was added in zellij > 0.24.0 and enables the user to
specify a custom command that copies selected text to the system clipboard.
Refer to lines containing "copy\_command" from the output of `zellij setup --dump-config`.

For technical background, refer to [this\
issue](https://github.com/zellij-org/zellij/issues/627) and [this merge\
request](https://github.com/zellij-org/zellij/pull/996)

## [Backspace sending ctrl-h (entering into `Move` mode)](compatibility.html\#backspace-sending-ctrl-h-entering-into-move-mode)

This can happen in some terminal emulators (eg. Xterm). It can be remedied either on the terminal emulator side by getting the terminal emulator to send `^?` instead of `^H`, or on the Zellij side by remapping ctrl-h to some other key. Here's an example fix in xterm: http://www.hypexr.org/linux\_ruboff.php

## [Weird colors in certain applications running inside Zellij](compatibility.html\#weird-colors-in-certain-applications-running-inside-zellij)

This might happen due to Zellij support of the extended "styled\_underlines" feature. You can try disabling them by adding `styled_underlines false` to your config.

[Previous chapter](session-resurrection.html "Previous chapter")

[Previous chapter](session-resurrection.html "Previous chapter")

