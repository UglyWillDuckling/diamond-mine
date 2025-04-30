- Light
- Rust
- Coal
- Navy
- Ayu

# Zellij User Guide

[Print this book](print.html "Print this book")

# [Plugin API](plugin-api.html\#plugin-api)

**Please also see the Rust-specific documentation: [zellij-tile](https://docs.rs/zellij-tile/latest/zellij_tile/).**

The plugin API provides plugins with several capabilities:

- [Events](plugin-api-events.html) \- A plugin can subscribe to one or more of these and receive an update whenever they happen.
- [Commands](plugin-api-commands.html) \- These are functions exported to the plugin, allowing it to affect Zellij and add functionality to it.
- [Accessing the HD](plugin-api-file-system.html) \- A plugin can use its development language's own standard library to access the filesystem folder in which Zellij was opened.
- [Workers for Async Tasks](plugin-api-workers.html) \- A plugin can have multiple workers to which it can offload heavy or long-running tasks without blocking its own rendering.
- [Log debug or error messages](plugin-api-logging.html) \- A plugin can log messages to STDERR which will in the Zellij logs.

[Previous chapter](plugin-loading.html "Previous chapter")[Next chapter](plugin-api-events.html "Next chapter")

[Previous chapter](plugin-loading.html "Previous chapter")[Next chapter](plugin-api-events.html "Next chapter")

