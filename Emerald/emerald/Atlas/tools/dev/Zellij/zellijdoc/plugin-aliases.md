- Light
- Rust
- Coal
- Navy
- Ayu

# Zellij User Guide

[Print this book](print.html "Print this book")

# [Plugin Aliases](plugin-aliases.html\#plugin-aliases)

Plugin aliases are a dictionary between an arbitrary string (eg. `filepicker`) and a non-alias [plugin url](plugin-loading.html), with optional [plugin configuration](plugin-api-configuration.html). They can be configured in the [Zellij configuration file](configuration.html) under the `plugins` block.

Here's the default aliases:

```javascript
plugins {
    tab-bar location="zellij:tab-bar"
    status-bar location="zellij:status-bar"
    strider location="zellij:strider"
    compact-bar location="zellij:compact-bar"
    session-manager location="zellij:session-manager"
    welcome-screen location="zellij:session-manager" {
        welcome_screen true
    }
    filepicker location="zellij:strider" {
        cwd "/"
    }
}

```

With this plugins block, whenever the bare `tab-bar` is used to refer to a plugin (be it in a [layout](layouts.html), from the [command line](zellij-plugin.html), from a [keybinding](keybindings.html) or from [another plugin](plugin-pipes.html)), Zellij will translate it to the internal `zellij:tab-bar` url. Whenever the bare `filepicker` url is used to refer to a plugin, Zellij will translate it to the built-in `zellij:strider` url will be used with the `cwd "/"` configuration.

Aliases can be added to this block or changed to swap the default built-in plugins to other implementations. Removing the default aliases entirely might cause Zellij not to function as expected.

When swapping the default aliases for custom plugins, it's important that these plugins implement the basic contract Zellij (and indeed, other plugins) expect of them. The following sections describe the contract for each default alias.

Here's an example on how to use the plugin alias in a layout:

```javascript
layout {
  default_tab_template {
    children
    pane size=1 borderless=true {
      plugin location="compact-bar"
    }
  }
}

```

### [A note about cwd](plugin-aliases.html\#a-note-about-cwd)

When an alias defined a `cwd` for its plugin (such as the filepicker example above), Zellij will add the `caller_cwd` configuration parameter with the cwd of the focused pane in addition to the configured cwd above, instead of overriding the configured cwd of the plugin. This is so that plugins may provide a nicer user experience to their users and still have the desired cwd configuration of the alias.

[Previous chapter](plugin-upgrading.html "Previous chapter")[Next chapter](tab-bar-alias.html "Next chapter")

[Previous chapter](plugin-upgrading.html "Previous chapter")[Next chapter](tab-bar-alias.html "Next chapter")

