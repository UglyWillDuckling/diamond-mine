- Light
- Rust
- Coal
- Navy
- Ayu

# Zellij User Guide

[Print this book](print.html "Print this book")

# [The welcome-screen alias](welcome-screen-alias.html\#the-welcome-screen-alias)

This alias, by default translated to the internal `zellij:session-manager` plugin url with the `welcome_screen true` configuration, is loaded on startup when the built-in `welcome` [layout](layouts.html) is loaded with `zellij -l welcome`.

## [Contract](welcome-screen-alias.html\#contract)

Zellij loads the welcome-screen fullscreened without any other UI. It expects the plugin to close itself (and thus the session) once the user starts a new session, switches to a new session or resurrects an exited session.

## [User expectations](welcome-screen-alias.html\#user-expectations)

Users will likely expect the welcome-screen to:

1. Allow them to attach to an existing session
2. Allow them to resurrect an exited session
3. Allow them to start a new session

[Previous chapter](session-manager-alias.html "Previous chapter")[Next chapter](filepicker-alias.html "Next chapter")

[Previous chapter](session-manager-alias.html "Previous chapter")[Next chapter](filepicker-alias.html "Next chapter")

