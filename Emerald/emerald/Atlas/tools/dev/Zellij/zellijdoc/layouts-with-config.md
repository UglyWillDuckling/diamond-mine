- Light
- Rust
- Coal
- Navy
- Ayu

# Zellij User Guide

[Print this book](print.html "Print this book")

# [Including Configuration in Layouts](layouts-with-config.html\#including-configuration-in-layouts)

Zellij layout files can include any configuration that can be defined in a Zellij [configuration file](configuration.html).

Items in this configuration take precedence over items in the loaded Zellij configuration.

**Note:** These fields are ignored when loading a layout through the [`new-tab` action](cli-actions.html#new-tab)

## [Example](layouts-with-config.html\#example)

```javascript
layout {
    pane split_direction="vertical" {
        pane
        pane split_direction="horizontal" {
            pane
            pane
        }
    }
    pane size=1 borderless=true {
        plugin location="zellij:compact-bar"
    }
}
keybinds {
    shared {
        bind "Alt 1" { Run "git" "status"; }
        bind "Alt 2" { Run "git" "diff"; }
        bind "Alt 3" { Run "exa" "--color" "always"; }
    }
}

```

This layout includes a map of panes and UI to open, as well as some keybindings to quickly open new panes with your favorite commands.

[Previous chapter](swap-layouts.html "Previous chapter")[Next chapter](layout-examples.html "Next chapter")

[Previous chapter](swap-layouts.html "Previous chapter")[Next chapter](layout-examples.html "Next chapter")

