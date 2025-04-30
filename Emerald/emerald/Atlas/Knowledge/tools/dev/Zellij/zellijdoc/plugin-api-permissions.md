- Light
- Rust
- Coal
- Navy
- Ayu

# Zellij User Guide

[Print this book](print.html "Print this book")

# [Permissions](plugin-api-permissions.html\#permissions)

The plugin system provides a permission system to provide extra security and protection to the user.

The system places certain [Events](plugin-api-events.html) and [Commands](plugin-api-commands.html) behind certain permissions.
Plugins who want to listen to these events or use these commands should prompt the user to grant them these permissions with the `request_permission` command.

## [Permissions](plugin-api-permissions.html\#permissions-1)

### [ReadApplicationState](plugin-api-permissions.html\#readapplicationstate)

Access Zellij state (Panes, Tabs and UI)

### [ChangeApplicationState](plugin-api-permissions.html\#changeapplicationstate)

Change Zellij state (Panes, Tabs and UI)

### [OpenFiles](plugin-api-permissions.html\#openfiles)

Open files (eg. for editing)

### [RunCommand](plugin-api-permissions.html\#runcommand)

Run commands in panes or silently

### [OpenTerminalsOrPlugins](plugin-api-permissions.html\#openterminalsorplugins)

Start new terminals and plugins

### [WriteToStdin](plugin-api-permissions.html\#writetostdin)

Write to STDIN as if it were the user

### [Reconfigure](plugin-api-permissions.html\#reconfigure)

Change the [configuration](configuration.html) (running and also saved in the configuration file) of Zellij.

### [FullHdAccess](plugin-api-permissions.html\#fullhdaccess)

Access the full HD on the machine rather than just the folder in which Zellij was started.

[Previous chapter](plugin-api-commands.html "Previous chapter")[Next chapter](plugin-api-configuration.html "Next chapter")

[Previous chapter](plugin-api-commands.html "Previous chapter")[Next chapter](plugin-api-configuration.html "Next chapter")

