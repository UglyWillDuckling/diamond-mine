- Light
- Rust
- Coal
- Navy
- Ayu

# Zellij User Guide

[Print this book](print.html "Print this book")

# [Plugin API - Reading from the Filesystem](plugin-api-file-system.html\#plugin-api---reading-from-the-filesystem)

Plugins can use their own native standard library to read from the filesystem.

eg.

```rust
#![allow(unused)]
fn main() {
std::fs::write("/host/my_file.txt", "hi from a plugin!").unwrap()
}
```

Zellij maps three paths for each plugin:

- `/host` \- the cwd of the last focused terminal, or the folder where Zellij was started if that's not available
- `/data` \- its own folder, shared with all loaded instances of the plugin - created on plugin load and deleted on plugin unload.
- `/tmp` \- a temporary folder located in an arbitrary position in the system's temporary filesystem.

[Previous chapter](plugin-api-configuration.html "Previous chapter")[Next chapter](plugin-api-logging.html "Next chapter")

[Previous chapter](plugin-api-configuration.html "Previous chapter")[Next chapter](plugin-api-logging.html "Next chapter")

