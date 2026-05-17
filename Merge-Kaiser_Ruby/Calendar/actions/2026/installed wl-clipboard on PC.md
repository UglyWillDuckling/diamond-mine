#action

Wayland copy and paste command line utilities

https://man.archlinux.org/man/wl-clipboard.1

### DESCRIPTION

wl-copy copies the given text to the Wayland clipboard. If no text is given, wl-copy copies data from its standard input.

wl-paste pastes data from the Wayland clipboard to its standard output.

Although wl-copy and wl-paste are particularly optimized for plain text and other textual content formats, they fully support content of arbitrary MIME types. wl-copy automatically infers the type of the copied content by running xdg-mime(1) on it. wl-paste tries its best to pick a type to paste based on the list of offered MIME types and the extension of the file it's pasting into. If you're not satisfied with the type they pick or don't want to rely on this implicit type inference, you can explicitly specify the type to use with the --type option.


