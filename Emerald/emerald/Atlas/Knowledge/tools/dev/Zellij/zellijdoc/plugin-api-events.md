- Light
- Rust
- Coal
- Navy
- Ayu

# Zellij User Guide

[Print this book](print.html "Print this book")

# [Plugin API - Events](plugin-api-events.html\#plugin-api---events)

A plugin can [subscribe](plugin-api-commands.html#subscribe) to multiple Events. These events will be sent to the plugin through its [update](plugin-lifecycle.html#update) method.

For more detailed information, please see the [`zellij-tile`](https://docs.rs/zellij-tile/latest/zellij_tile/) API documentation.

## [ModeUpdate](plugin-api-events.html\#modeupdate)

- Requires the `ReadApplicationState` [permission](plugin-api-permissions.html)

Provides information about the input modes of Zellij (eg. `Normal`, `Locked`, `Pane`, `Tab`, etc.). It also provides information about the bound keys, the style (the active theme colors) and the session name.

## [TabUpdate](plugin-api-events.html\#tabupdate)

- Requires the `ReadApplicationState` [permission](plugin-api-permissions.html)

Provides information about the active tabs in Zellij, their position, name, whether they contain a pane in full screen, how many hidden panes they contain and information on the swap layouts.

## [PaneUpdate](plugin-api-events.html\#paneupdate)

- Requires the `ReadApplicationState` [permission](plugin-api-permissions.html)

Provides information about the active panes in Zellij, their title, command and exit code (if available), etc.

## [SessionUpdate](plugin-api-events.html\#sessionupdate)

- Requires the `ReadApplicationState` [permission](plugin-api-permissions.html)

Provides information about the active sessions (of the current version) running on the machine.

## [Key](plugin-api-events.html\#key)

A user pressed a key when focused to this plugin, this event also provides the key pressed.

## [Mouse](plugin-api-events.html\#mouse)

A user issued a mouse action (click, scroll, etc.) while focused on the plugin, this event also provides the action in question.

## [Timer](plugin-api-events.html\#timer)

This event is fired when a timer the plugin set is expired. This corresponds to the `set_timeout` [plugin command](plugin-api-commands.html#set_timeout);

## [CopyToClipboard](plugin-api-events.html\#copytoclipboard)

- Requires the `ReadApplicationState` [permission](plugin-api-permissions.html)

This event is fired when the user copies a String to their clipboard

## [SystemClipboardFailure](plugin-api-events.html\#systemclipboardfailure)

- Requires the `ReadApplicationState` [permission](plugin-api-permissions.html)

This event is fired when the user fails to copy a String to their clipboard

## [InputReceived](plugin-api-events.html\#inputreceived)

This event is fired whenever any input is received in Zellij, but does not specify which input

## [Visible](plugin-api-events.html\#visible)

This event is fired when the current plugin becomes visible or invisible (eg. when switching a tab to and away from it).

## [CustomMessage](plugin-api-events.html\#custommessage)

This event corresponds to the `post_message_to` and `post_message_to_plugin` [plugin commands](plugin-api-commands.html), used for a plugin and its workers to communicate. For more information, please see: [Workers for Async Tasks](plugin-api-workers.html).

## [FileSystemCreate, FileSystemRead, FileSystemUpdate, FileSystemDelete](plugin-api-events.html\#filesystemcreate-filesystemread-filesystemupdate-filesystemdelete)

These events are fired when the user creates a file, reads a file, updates a file or deletes a file in the folder in which Zellij was started. It includes a vector of the files in question.

## [RunCommandResult](plugin-api-events.html\#runcommandresult)

Returned after the `RunCommand` [plugin command](plugin-api-commands.html). Containing the exit status, STDIN and STDOUT of the command as well as the context (an arbitrary string dictionary) provided when initiating the command.

## [WebRequestResult](plugin-api-events.html\#webrequestresult)

Returned after the `WebRequest` [plugin command](plugin-api-commands.html). Containing the status code and body of the request as well as the context (an arbitrary string dictionary) provided when initiating the command.

## [CommandPaneOpened](plugin-api-events.html\#commandpaneopened)

- Requires the `ReadApplicationState` [permission](plugin-api-permissions.html)

Returned after a pane opened with the `OpenCommandPane` [plugin command](plugin-api-commands.html) is opened. Contains the terminal pane id of the pane, the context (an arbitrary string dictionary) provided when initiating the command.

## [CommandPaneExited](plugin-api-events.html\#commandpaneexited)

- Requires the `ReadApplicationState` [permission](plugin-api-permissions.html)

Returned after a pane opened with the `OpenCommandPane` [plugin command](plugin-api-commands.html) has exited. Note that this does not mean the pane is closed, it only means the command inside it has exited. This can happen multiple times if (for example) the user reruns the command by pressing `Enter` when focused on the command pane. Contains the terminal pane id of the pane, the command's numeric exit code (if there was one) as well as the context (an arbitrary string dictionary) provided when initiating the command.

## [PaneClosed](plugin-api-events.html\#paneclosed)

- Requires the `ReadApplicationState` [permission](plugin-api-permissions.html)

A pane inside the current session was closed. Includes the pane's id.

## [EditPaneOpened](plugin-api-events.html\#editpaneopened)

- Requires the `ReadApplicationState` [permission](plugin-api-permissions.html)

Returned after a pane opened with the `OpenFile` [plugin command](plugin-api-commands.html) is opened. Contains the terminal pane id of the editor pane, the context (an arbitrary string dictionary) provided when initiating the command.

## [EditPaneExited](plugin-api-events.html\#editpaneexited)

- Requires the `ReadApplicationState` [permission](plugin-api-permissions.html)

Returned after a pane opened with the `OpenFile` [plugin command](plugin-api-commands.html) has exited. Contains the terminal pane id of the editor pane, the editor's numeric exit code (if there was one) as well as the context (an arbitrary string dictionary) provided when initiating the command.

## [CommandPaneReRun](plugin-api-events.html\#commandpanererun)

- Requires the `ReadApplicationState` [permission](plugin-api-permissions.html)

Returned after a pane opened with the `OpenCommandPane` [plugin command](plugin-api-commands.html) has been re-run. This can happen multiple times and is often (but not necessarily) a result of the user pressing `Enter` when focused on the command pane. Contains the terminal pane id of the pane, the command's numeric exit code (if there was one) as well as the context (an arbitrary string dictionary) provided when initiating the command.

## [FailedToWriteConfigToDisk](plugin-api-events.html\#failedtowriteconfigtodisk)

- Requires the `ReadApplicationState` [permission](plugin-api-permissions.html)

After the plugin attempted writing the configuration to disk (with the `Reconfigure` [plugin command](plugin-api-commands.html)) and there was an error (eg. the file was read-only), this event is sent - optionally with the relevant error.

## [ListClients](plugin-api-events.html\#listclients)

The result of the `ListClients` [plugin command](plugin-api-commands.html). Contains information about all connected clients in the session, including their id, their focused pane id, the stringified representation of the running command or plugin inside their focused pane (if any), as well as an indication of whether they are the current client or not.

## [PastedText](plugin-api-events.html\#pastedtext)

The user just pasted the given text while focused on the plugin.

[Previous chapter](plugin-api.html "Previous chapter")[Next chapter](plugin-api-commands.html "Next chapter")

[Previous chapter](plugin-api.html "Previous chapter")[Next chapter](plugin-api-commands.html "Next chapter")

