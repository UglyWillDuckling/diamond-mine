- Light
- Rust
- Coal
- Navy
- Ayu

# Zellij User Guide

[Print this book](print.html "Print this book")

# [Migrating from old YAML layouts / configs](migrating-yaml-config.html\#migrating-from-old-yaml-layouts--configs)

Starting from Zellij `0.32.0`, Zellij uses [KDL](https://kdl.dev) layouts as described in these documents.

Up until this version, Zellij used `YAML` configuration files as described in the old documents kept [here](../old-documentation.html) for posterity.

As a matter of convenience, when Zellij is run with an old configuration / layout / theme file (either explicitly with a cli flag or if it found the file in the default locations) it will prompt the user and convert that file to the new format.

This can also be done manually:

```
$ zellij convert-config /path/to/my/config.yaml > /path/to/my/config.kdl
$ zellij convert-layout /path/to/my/layout.yaml > /path/to/my/layout.kdl
$ zellij convert-theme /path/to/my/theme.yaml > /path/to/my/theme.kdl

```

[Previous chapter](command-line-options.html "Previous chapter")[Next chapter](controlling-zellij-through-cli.html "Next chapter")

[Previous chapter](command-line-options.html "Previous chapter")[Next chapter](controlling-zellij-through-cli.html "Next chapter")

