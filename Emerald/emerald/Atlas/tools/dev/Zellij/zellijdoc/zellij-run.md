- Light
- Rust
- Coal
- Navy
- Ayu

# Zellij User Guide

[Print this book](print.html "Print this book")

# [Zellij Run](zellij-run.html\#zellij-run)

Zellij includes a top-level `run` command that can be used to launch a new Zellij pane running a specific command:

eg.

```
$ zellij run -- git diff

```

**OPTIONS**:

```
    -c, --close-on-exit            Close the pane immediately when its command exits
        --cwd <CWD>                Change the working directory of the new pane
    -d, --direction <DIRECTION>    Direction to open the new pane in
    -f, --floating                 Open the new pane in floating mode
    -h, --help                     Print help information
        --height <HEIGHT>          The height if the pane is floating as a bare integer (eg. 1) or
    -i, --in-place                 Open the new pane in place of the current pane, temporarily suspending it
    -n, --name <NAME>              Name of the new pane
    -s, --start-suspended          Start the command suspended, only running after you first presses
                                   ENTER
        --width <WIDTH>            The width if the pane is floating as a bare integer (eg. 1) or
                                   percent (eg. 10%)
    -x, --x <X>                    The x coordinates if the pane is floating as a bare integer (eg.
                                   1) or percent (eg. 10%)
    -y, --y <Y>                    The y coordinates if the pane is floating as a bare integer (eg.
                                   1) or percent (eg. 10%)

```

**Note**: to shorten this command to a more friendly length, see `Completions` under: [CLI](controlling-zellij-through-cli.html#completions)

This new pane will not immediately close when the command exits. Instead, it will show its exit status on the pane frame and allow users to press `<ENTER>` to re-run the command inside the same pane, or `<Ctrl-c>` to close the pane.

We feel this is a new and powerful way to interact with the command line.

![command-pane](img/command-pane-screenshot.png)

[Previous chapter](controlling-zellij-through-cli.html "Previous chapter")[Next chapter](zellij-edit.html "Next chapter")

[Previous chapter](controlling-zellij-through-cli.html "Previous chapter")[Next chapter](zellij-edit.html "Next chapter")

