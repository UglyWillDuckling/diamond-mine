- Light
- Rust
- Coal
- Navy
- Ayu

# Zellij User Guide

[Print this book](print.html "Print this book")

# [Zellij Plugin](zellij-plugin.html\#zellij-plugin)

Zellij includes a top-level `plugin` cli command that can be used to launch a new Zellij plugin instance from a local or remote wasm file

eg.

```
$ zellij plugin -- https://path/to/my/plugin.wasm

```

**USAGE**:

```
    zellij plugin [OPTIONS] [--] <URL>

```

**ARGS**:

```
    <URL>    Plugin URL, can either start with http(s), file: or zellij:

```

**OPTIONS**:

```
    -c, --configuration <CONFIGURATION>
            Plugin configuration

    -f, --floating
            Open the new pane in floating mode

    -h, --help
            Print help information

        --height <HEIGHT>
            The height if the pane is floating as a bare integer (eg. 1) or percent (eg. 10%)

    -i, --in-place
            Open the new pane in place of the current pane, temporarily suspending it

    -s, --skip-plugin-cache
            Skip the memory and HD cache and force recompile of the plugin (good for development)

        --width <WIDTH>
            The width if the pane is floating as a bare integer (eg. 1) or percent (eg. 10%)

    -x, --x <X>
            The x coordinates if the pane is floating as a bare integer (eg. 1) or percent (eg. 10%)

    -y, --y <Y>
            The y coordinates if the pane is floating as a bare integer (eg. 1) or percent (eg. 10%)

```

[Previous chapter](cli-actions.html "Previous chapter")[Next chapter](zellij-pipe.html "Next chapter")

[Previous chapter](cli-actions.html "Previous chapter")[Next chapter](zellij-pipe.html "Next chapter")

