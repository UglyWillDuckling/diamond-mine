- Light
- Rust
- Coal
- Navy
- Ayu

# Zellij User Guide

[Print this book](print.html "Print this book")

# [Plugin Development Environment](plugin-dev-env.html\#plugin-development-environment)

For Rust plugins, Zellij provides an [example plugin](https://github.com/zellij-org/rust-plugin-example) that also includes a development environment for plugin developers.

This development environment is created by the following Zellij layout (truncated here for clarity)

```javascript
// plugin-development-workspace.kdl
layout {
    // ...
    pane edit="src/main.rs"
    pane edit="Cargo.toml"
    pane command="bash" { // could also be done with watchexec or something similar
        args "-c" "cargo build && zellij action start-or-reload-plugin file:target/wasm32-wasi/debug/rust-plugin-example.wasm"
    }
    pane {
        plugin location="file:target/wasm32-wasi/debug/rust-plugin-example.wasm"
    }
    // ...
}

```

_Please check the example repository for the full version_

This layout is intended to be loaded into Zellij (either in a running session or in a new session), to load the user's default `$EDITOR` to the `main.rs` and `Cargo.toml` files, show the rendered plugin in a separate pane as well as the compilation and plugin hot-reload logs.

Zellij plugins can of course be developed out of the terminal as well.

[Previous chapter](plugin-development.html "Previous chapter")[Next chapter](plugin-lifecycle.html "Next chapter")

[Previous chapter](plugin-development.html "Previous chapter")[Next chapter](plugin-lifecycle.html "Next chapter")

