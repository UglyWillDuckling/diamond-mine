- Light
- Rust
- Coal
- Navy
- Ayu

# Zellij User Guide

[Print this book](print.html "Print this book")

# [Plugin API - Commands](plugin-api-commands.html\#plugin-api---commands)

Zellij exports functions that allow plugins to control Zellij or change its behavior.

For more exact information, please see the [`zellij-tile`](https://docs.rs/zellij-tile/latest/zellij_tile/) API documentation.

## [subscribe](plugin-api-commands.html\#subscribe)

This method is given a list of [events](plugin-api-events.html) that the plugin is interested in. The plugin's [update](plugin-lifecycle.html#update) method will be called with the events and its payload, if any.

## [unsubscribe](plugin-api-commands.html\#unsubscribe)

Same as subscribe, only removes subscriptions to events.

## [request\_permission](plugin-api-commands.html\#request_permission)

This command should be run in the `load` method of the plugin lifecycle, and contain one or more `PermissionType` s. This will ask the user to provide the plugin said permissions.

## [set\_selectable](plugin-api-commands.html\#set_selectable)

Sets the plugin as selectable or unselectable to the user. Unselectable plugins might be desired when they do not accept user input.

## [get\_plugin\_ids](plugin-api-commands.html\#get_plugin_ids)

Returns the unique Zellij pane ID for the plugin as well as the Zellij process id.

## [get\_zellij\_version](plugin-api-commands.html\#get_zellij_version)

Returns the version of the running Zellij instance - can be useful to check plugin compatibility

## [open\_file](plugin-api-commands.html\#open_file)

- Requires the `OpenFiles` [permission](plugin-api-permissions.html)

Open a file in the user's default `$EDITOR` in a new pane

## [open\_file\_floating](plugin-api-commands.html\#open_file_floating)

- Requires the `OpenFiles` [permission](plugin-api-permissions.html)

Open a file in the user's default `$EDITOR` in a new floating pane

## [open\_file\_in\_place](plugin-api-commands.html\#open_file_in_place)

- Requires the `OpenFiles` [permission](plugin-api-permissions.html)

Open a file in the user's default `$EDITOR`, temporarily replacing the focused pane

## [open\_file\_with\_line](plugin-api-commands.html\#open_file_with_line)

- Requires the `OpenFiles` [permission](plugin-api-permissions.html)

Open a file to a specific line in the user's default `$EDITOR` (if it supports it, most do) in a new pane

## [open\_file\_with\_line\_floating](plugin-api-commands.html\#open_file_with_line_floating)

- Requires the `OpenFiles` [permission](plugin-api-permissions.html)

Open a file to a specific line in the user's default `$EDITOR` (if it supports it, most do) in a new floating pane

## [open\_file\_near\_plugin](plugin-api-commands.html\#open_file_near_plugin)

- Requires the `OpenFiles` [permission](plugin-api-permissions.html)

Open a file in the user's default `$EDITOR` in the same tab as the plugin as a tiled pane, regardless of the user's focus

## [open\_file\_floating\_near\_plugin](plugin-api-commands.html\#open_file_floating_near_plugin)

- Requires the `OpenFiles` [permission](plugin-api-permissions.html)

Open a file in the user's default `$EDITOR` in the same tab as the plugin as a floating pane, regardless of the user's focus

## [open\_file\_in\_place\_of\_plugin](plugin-api-commands.html\#open_file_in_place_of_plugin)

- Requires the `OpenFiles` [permission](plugin-api-permissions.html)

Open a file in the user's default `$EDITOR`, temporarily replacing the plugin, regardless of the user's focus.

## [open\_terminal](plugin-api-commands.html\#open_terminal)

- Requires the `OpenTerminalsOrPlugins` [permission](plugin-api-permissions.html)

Open a new terminal pane to the specified location on the host filesystem

## [open\_terminal\_floating](plugin-api-commands.html\#open_terminal_floating)

- Requires the `OpenTerminalsOrPlugins` [permission](plugin-api-permissions.html)

Open a new floating terminal pane to the specified location on the host filesystem

## [open\_terminal\_in\_place](plugin-api-commands.html\#open_terminal_in_place)

- Requires the `OpenTerminalsOrPlugins` [permission](plugin-api-permissions.html)

Open a new terminal pane to the specified location on the host filesystem, temporarily replacing the focused pane

## [open\_terminal\_near\_plugin](plugin-api-commands.html\#open_terminal_near_plugin)

- Requires the `OpenTerminalsOrPlugins` [permission](plugin-api-permissions.html)

Open a new tiled terminal in the tab where the plugin resides, regardless of the user's focus.

## [open\_terminal\_floating\_near\_plugin](plugin-api-commands.html\#open_terminal_floating_near_plugin)

- Requires the `OpenTerminalsOrPlugins` [permission](plugin-api-permissions.html)

Open a new floating terminal in the tab where the plugin resides, regardless of the user's focus.

## [open\_terminal\_in\_place\_of\_plugin](plugin-api-commands.html\#open_terminal_in_place_of_plugin)

- Requires the `OpenTerminalsOrPlugins` [permission](plugin-api-permissions.html)

Open a new terminal on top of the plugin, temporarily replacing it. Regardless of the user's focus.

## [open\_command\_pane](plugin-api-commands.html\#open_command_pane)

- Requires the `RunCommands` [permission](plugin-api-permissions.html)
Open a new command pane with the specified command and args (this sort of pane allows the user to control the command, re-run it and see its exit status through the Zellij UI).

## [open\_command\_pane\_floating](plugin-api-commands.html\#open_command_pane_floating)

- Requires the `RunCommands` [permission](plugin-api-permissions.html)

Open a new floating command pane with the specified command and args (this sort of pane allows the user to control the command, re-run it and see its exit status through the Zellij UI).

## [open\_command\_pane\_in\_place](plugin-api-commands.html\#open_command_pane_in_place)

- Requires the `RunCommands` [permission](plugin-api-permissions.html)

Open a new command pane with the specified command and args (this sort of pane allows the user to control the command, re-run it and see its exit status through the Zellij UI), temporarily replacing the focused pane

## [open\_command\_pane\_near\_plugin](plugin-api-commands.html\#open_command_pane_near_plugin)

- Requires the `RunCommands` [permission](plugin-api-permissions.html)

Open a new command pane with the specified command and args (this sort of pane allows the user to control the command, re-run it and see its exit status through the Zellij UI), as a tiled pane in the same tab as the plugin, regardless of the user's focus.

## [open\_command\_pane\_floating\_near\_plugin](plugin-api-commands.html\#open_command_pane_floating_near_plugin)

- Requires the `RunCommands` [permission](plugin-api-permissions.html)

Open a new command pane with the specified command and args (this sort of pane allows the user to control the command, re-run it and see its exit status through the Zellij UI), as a floating pane in the same tab as the plugin, regardless of the user's focus.

## [open\_command\_pane\_in\_place\_of\_plugin](plugin-api-commands.html\#open_command_pane_in_place_of_plugin)

- Requires the `RunCommands` [permission](plugin-api-permissions.html)

Open a new command pane with the specified command and args (this sort of pane allows the user to control the command, re-run it and see its exit status through the Zellij UI), on top of the plugin, temporarily replacing it, regardless of the user's focus.

## [run\_command](plugin-api-commands.html\#run_command)

- Requires the `RunCommands` [permission](plugin-api-permissions.html)
Run this host command in the background on the host machine, optionally being notified of its output if subscribed to the [`RunCommandResult`](plugin-api-events.html) Event. This API method includes a dictionary of arbitrary strings that will be returned verbatim with the `RunCommandResult` event. It can be used for things such as "request\_id" to be able to identify the output of a command, or whatever else is needed.

## [web\_request](plugin-api-commands.html\#web_request)

- Requires the `WebAccess` [permission](plugin-api-permissions.html)
Make a web request, optionally being notified of its output if subscribed to the [`WebRequestResult`](plugin-api-events.html) Event. This API method includes a dictionary of arbitrary strings that will be returned verbatim with the `WebRequestResult` event. It can be used for things such as "request\_id" to be able to identify the output of a command, or whatever else is needed.

## [switch\_tab\_to](plugin-api-commands.html\#switch_tab_to)

Change the focused tab to the specified index (corresponding with the default tab names, to starting at `1`, `0` will be considered as `1`).

## [set\_timeout](plugin-api-commands.html\#set_timeout)

Set a timeout in seconds (or fractions thereof) after which the plugins [update](plugin-lifecycle.html#update) method will be called with the [`Timer`](plugin-api-events.html#timer) event. Be sure to subscribe to it beforehand!

## [hide\_self](plugin-api-commands.html\#hide_self)

Hide the plugin pane (suppress it) from the UI

## [show\_self](plugin-api-commands.html\#show_self)

Show the plugin pane (unsuppress it if it is suppressed), focus it and switch to its tab

## [switch\_to\_input\_mode](plugin-api-commands.html\#switch_to_input_mode)

- Requires the `ChangeApplicationState` [permission](plugin-api-permissions.html)

Switch to the specified Input Mode (eg. `Normal`, `Tab`, `Pane`)

## [new\_tabs\_with\_layout](plugin-api-commands.html\#new_tabs_with_layout)

- Requires the `ChangeApplicationState` [permission](plugin-api-permissions.html)

Provide a stringified [`layout`](layouts.html) to be applied to the current session. If the layout has multiple tabs, they will all be opened.

## [new\_tabs\_with\_layout\_info](plugin-api-commands.html\#new_tabs_with_layout_info)

- Requires the `ChangeApplicationState` [permission](plugin-api-permissions.html)

Provide a [`layout`](layouts.html) name or file path to be applied to the current session. If the layout has multiple tabs, they will all be opened.

## [new\_tab](plugin-api-commands.html\#new_tab)

- Requires the `ChangeApplicationState` [permission](plugin-api-permissions.html)

Open a new tab with the default layout

## [go\_to\_next\_tab](plugin-api-commands.html\#go_to_next_tab)

- Requires the `ChangeApplicationState` [permission](plugin-api-permissions.html)

Change focus to the next tab or loop back to the first

## [go\_to\_previous\_tab](plugin-api-commands.html\#go_to_previous_tab)

- Requires the `ChangeApplicationState` [permission](plugin-api-permissions.html)

Change focus to the previous tab or loop back to the last

## [resize\_focused\_pane](plugin-api-commands.html\#resize_focused_pane)

- Requires the `ChangeApplicationState` [permission](plugin-api-permissions.html)

Either Increase or Decrease the size of the focused pane

## [resize\_focused\_pane\_with\_direction](plugin-api-commands.html\#resize_focused_pane_with_direction)

- Requires the `ChangeApplicationState` [permission](plugin-api-permissions.html)

Either Increase or Decrease the size of the focused pane in a specified direction (eg. `Left`, `Right`, `Up`, `Down`).

## [focus\_next\_pane](plugin-api-commands.html\#focus_next_pane)

- Requires the `ChangeApplicationState` [permission](plugin-api-permissions.html)

Change focus tot he next pane in chronological order

## [focus\_previous\_pane](plugin-api-commands.html\#focus_previous_pane)

- Requires the `ChangeApplicationState` [permission](plugin-api-permissions.html)

Change focus to the previous pane in chronological order

## [move\_focus](plugin-api-commands.html\#move_focus)

- Requires the `ChangeApplicationState` [permission](plugin-api-permissions.html)

Change the focused pane in the specified direction

## [move\_focus\_or\_tab](plugin-api-commands.html\#move_focus_or_tab)

- Requires the `ChangeApplicationState` [permission](plugin-api-permissions.html)

Change the focused pane in the specified direction, if the pane is on the edge of the screen, the next tab is focused (next if right edge, previous if left edge).

## [detach](plugin-api-commands.html\#detach)

- Requires the `ChangeApplicationState` [permission](plugin-api-permissions.html)

Detach the user from the active session

## [edit\_scrollback](plugin-api-commands.html\#edit_scrollback)

- Requires the `ChangeApplicationState` [permission](plugin-api-permissions.html)

Edit the scrollback of the focused pane in the user's default `$EDITOR`

## [write](plugin-api-commands.html\#write)

- Requires the `WriteToStdin` [permission](plugin-api-permissions.html)

Write bytes to the `STDIN` of the focused pane

## [write\_chars](plugin-api-commands.html\#write_chars)

- Requires the `WriteToStdin` [permission](plugin-api-permissions.html)

Write characters to the `STDIN` of the focused pane

## [toggle\_tab](plugin-api-commands.html\#toggle_tab)

- Requires the `ChangeApplicationState` [permission](plugin-api-permissions.html)

Focused the previously focused tab (regardless of the tab position)

## [move\_pane](plugin-api-commands.html\#move_pane)

- Requires the `ChangeApplicationState` [permission](plugin-api-permissions.html)

Switch the position of the focused pane with a different pane

## [move\_pane\_with\_direction](plugin-api-commands.html\#move_pane_with_direction)

- Requires the `ChangeApplicationState` [permission](plugin-api-permissions.html)

Switch the position of the focused pane with a different pane in the specified direction (eg. `Down`, `Up`, `Left`, `Right`).

## [clear\_screen](plugin-api-commands.html\#clear_screen)

- Requires the `ChangeApplicationState` [permission](plugin-api-permissions.html)

Clear the scroll buffer of the focused pane

## [scroll\_up](plugin-api-commands.html\#scroll_up)

- Requires the `ChangeApplicationState` [permission](plugin-api-permissions.html)

Scroll the focused pane up 1 line

## [scroll\_down](plugin-api-commands.html\#scroll_down)

- Requires the `ChangeApplicationState` [permission](plugin-api-permissions.html)

Scroll the focused pane down 1 line

## [scroll\_to\_top](plugin-api-commands.html\#scroll_to_top)

- Requires the `ChangeApplicationState` [permission](plugin-api-permissions.html)

Scroll the focused pane all the way to the top of the scrollbuffer

## [scroll\_to\_bottom](plugin-api-commands.html\#scroll_to_bottom)

- Requires the `ChangeApplicationState` [permission](plugin-api-permissions.html)

Scroll the focused pane all the way to the bottom of the scrollbuffer

## [page\_scroll\_up](plugin-api-commands.html\#page_scroll_up)

- Requires the `ChangeApplicationState` [permission](plugin-api-permissions.html)

Scroll the focused pane up one page

## [page\_scroll\_down](plugin-api-commands.html\#page_scroll_down)

- Requires the `ChangeApplicationState` [permission](plugin-api-permissions.html)

Scroll the focused pane down one page

## [toggle\_focus\_fullscreen](plugin-api-commands.html\#toggle_focus_fullscreen)

- Requires the `ChangeApplicationState` [permission](plugin-api-permissions.html)

Toggle the focused pane to be fullscreen or normal sized

## [toggle\_pane\_frames](plugin-api-commands.html\#toggle_pane_frames)

- Requires the `ChangeApplicationState` [permission](plugin-api-permissions.html)

Toggle the UI pane frames on or off

## [toggle\_pane\_embed\_or\_eject](plugin-api-commands.html\#toggle_pane_embed_or_eject)

- Requires the `ChangeApplicationState` [permission](plugin-api-permissions.html)

Embed the currently focused pane (make it stop floating) or turn it to a float pane if it is not

## [close\_focus](plugin-api-commands.html\#close_focus)

- Requires the `ChangeApplicationState` [permission](plugin-api-permissions.html)

Close the focused pane

## [toggle\_active\_tab\_sync](plugin-api-commands.html\#toggle_active_tab_sync)

- Requires the `ChangeApplicationState` [permission](plugin-api-permissions.html)

Turn the `STDIN` synchronization of the current tab on or off

## [close\_focused\_tab](plugin-api-commands.html\#close_focused_tab)

- Requires the `ChangeApplicationState` [permission](plugin-api-permissions.html)

Close the focused tab

## [quit\_zellij](plugin-api-commands.html\#quit_zellij)

- Requires the `ChangeApplicationState` [permission](plugin-api-permissions.html)

Compeltely quit Zellij for this and all other connected clients

## [previous\_swap\_layout](plugin-api-commands.html\#previous_swap_layout)

- Requires the `ChangeApplicationState` [permission](plugin-api-permissions.html)

Change to the previous [swap layout](swap-layouts.html)

## [next\_swap\_layout](plugin-api-commands.html\#next_swap_layout)

- Requires the `ChangeApplicationState` [permission](plugin-api-permissions.html)

Change to the next [swap layout](swap-layouts.html)

## [go\_to\_tab\_name](plugin-api-commands.html\#go_to_tab_name)

- Requires the `ChangeApplicationState` [permission](plugin-api-permissions.html)

Change focus to the tab with the specified name

## [focus\_or\_create\_tab](plugin-api-commands.html\#focus_or_create_tab)

- Requires the `ChangeApplicationState` [permission](plugin-api-permissions.html)

Change focus to the tab with the specified name or create it if it does not exist

## [post\_message\_to](plugin-api-commands.html\#post_message_to)

Post a message to a worker of this plugin, for more information please see [Plugin Workers](plugin-api-workers.html)

## [post\_message\_to\_plugin](plugin-api-commands.html\#post_message_to_plugin)

Post a message to this plugin (usually used to communicate with the worker), for more information, please see [Plugin Workers](plugin-api-workers.html)

## [close\_terminal\_pane](plugin-api-commands.html\#close_terminal_pane)

- Requires the `ChangeApplicationState` [permission](plugin-api-permissions.html)

Closes a terminal pane with the specified id

## [close\_plugin\_pane](plugin-api-commands.html\#close_plugin_pane)

- Requires the `ChangeApplicationState` [permission](plugin-api-permissions.html)

Closes a plugin pane with the specified id

## [focus\_terminal\_pane](plugin-api-commands.html\#focus_terminal_pane)

- Requires the `ChangeApplicationState` [permission](plugin-api-permissions.html)

Changes the focus to the terminal pane with the specified id, unsuppressing it if it was suppressed and switching to its tab and layer (eg. floating/tiled).

## [focus\_plugin\_pane](plugin-api-commands.html\#focus_plugin_pane)

- Requires the `ChangeApplicationState` [permission](plugin-api-permissions.html)

Changes the focus to the plugin pane with the specified id, unsuppressing it if it was suppressed and switching to its tab and layer (eg. floating/tiled).

## [rename\_terminal\_pane](plugin-api-commands.html\#rename_terminal_pane)

- Requires the `ChangeApplicationState` [permission](plugin-api-permissions.html)

Changes the name (the title that appears in the UI) of the terminal pane with the specified id.

## [rename\_plugin\_pane](plugin-api-commands.html\#rename_plugin_pane)

- Requires the `ChangeApplicationState` [permission](plugin-api-permissions.html)

Changes the name (the title that appears in the UI) of the plugin pane with the specified id.

## [rename\_tab](plugin-api-commands.html\#rename_tab)

- Requires the `ChangeApplicationState` [permission](plugin-api-permissions.html)

Changes the name (the title that appears in the UI) of the tab with the specified position.

## [switch\_session](plugin-api-commands.html\#switch_session)

- Requires the `ChangeApplicationState` [permission](plugin-api-permissions.html)

Change the session to the specified one, creating it if it does not exist

## [switch\_session\_with\_focus](plugin-api-commands.html\#switch_session_with_focus)

- Requires the `ChangeApplicationState` [permission](plugin-api-permissions.html)

Change the session to the specified one (creating it if it does not exist), if it does exist - focusing on a tab or a pane inside that session

## [switch\_session\_with\_layout](plugin-api-commands.html\#switch_session_with_layout)

- Requires the `ChangeApplicationState` [permission](plugin-api-permissions.html)

Change the session to the specified one, creating it if it does not exist, using a specified layout and optionally also a cwd (working directory).

## [block\_cli\_pipe\_input](plugin-api-commands.html\#block_cli_pipe_input)

- Requires the `ReadCliPipes` [permission](plugin-api-permissions.html)

Block the input side of a pipe, will only be released once this or another plugin unblocks it

(By default, pipes are unblocked after a plugin has handled a message unless this method is explicitly called).

## [unblock\_cli\_pipe\_input](plugin-api-commands.html\#unblock_cli_pipe_input)

- Requires the `ReadCliPipes` [permission](plugin-api-permissions.html)

Unblock the input side of a pipe, requesting the next message be sent if there is one

## [cli\_pipe\_output](plugin-api-commands.html\#cli_pipe_output)

- Requires the `ReadCliPipes` [permission](plugin-api-permissions.html)

Send output to the output side of a pipe, ths does not affect the input side of same pipe

## [pipe\_message\_to\_plugin](plugin-api-commands.html\#pipe_message_to_plugin)

- Requires the `MessageAndLaunchOtherPlugins` [permission](plugin-api-permissions.html)

Send a message to a plugin, it will be launched if it is not already running

## [delete\_dead\_session](plugin-api-commands.html\#delete_dead_session)

- Requires the `ChangeApplicationState` [permission](plugin-api-permissions.html)

Delete a dead session (one that is not running but can be resurrected) with a specific name

## [delete\_all\_dead\_sessions](plugin-api-commands.html\#delete_all_dead_sessions)

- Requires the `ChangeApplicationState` [permission](plugin-api-permissions.html)

Delete all dead sessions (sessions that are not running but can be resurrected)

## [rename\_session](plugin-api-commands.html\#rename_session)

- Requires the `ChangeApplicationState` [permission](plugin-api-permissions.html)

Rename the current session to a specific name

## [disconnect\_other\_clients](plugin-api-commands.html\#disconnect_other_clients)

- Requires the `ChangeApplicationState` [permission](plugin-api-permissions.html)

Disconnect all other clients attached to this session except the one making this call

## [kill\_sessions](plugin-api-commands.html\#kill_sessions)

- Requires the `ChangeApplicationState` [permission](plugin-api-permissions.html)

Kill all Zellij sessions in the list (can contain one or more session names)

## [scan\_host\_folder](plugin-api-commands.html\#scan_host_folder)

This is a stop-gap method that allows plugins to scan a folder on the `/host` [filesystem](plugin-api-file-system.html) and get back a list of files. The reason this is done through the API is that at the time of development, doing this through our WASI runtime is extremely slow. We hope this method will not be needed in the future.

## [dump\_session\_layout](plugin-api-commands.html\#dump_session_layout)

- Requires the `ReadApplicationState` [permission](plugin-api-permissions.html)

Request Zellij send back the serialized layout (in KDL format) of the current session. The layout will be sent back as a [`CustomMessage`](plugin-api-events.html#custom-message) with the `session_layout` name and the stringified layout as the message payload.

## [close\_self](plugin-api-commands.html\#close_self)

Will close the plugin and its pane. If the plugin is the only selectable pane in the session, the session will also exit.

## [reconfigure](plugin-api-commands.html\#reconfigure)

- Requires the `Reconfigure` [permission](plugin-api-permissions.html)

Provide a stringified [configuration](configuration.html) to be "merged" with the configuration of the current session. Optionally also written to disk and so applied to all other sessions listening to the same configuration file.

### [Use this command to bind global keys to the plugin](plugin-api-commands.html\#use-this-command-to-bind-global-keys-to-the-plugin)

It's possible to use the `reconfigure` command to bind the special `MessagePluginId` temporary keybinding (which will not be saved to disk). This keybind, along with the plugin's id obtained from `get_plugin_ids` can be used to bind a user key to trigger this plugin with a [pipe](plugin-pipes.html).

Example:

```rust
#![allow(unused)]
fn main() {
let config = format!(r#"
keybinds {{
    shared {{
        bind "Ctrl Shift r" {{
            MessagePluginId {} {{
                name "my_message_name"
            }}
        }}
    }}
}}"#);
reconfigure(config, false)
// now, whenever a user pressed `Ctrt Shift r` anywhere in the app, the plugin's pipe method will trigger with the "my_message_name" message
}
```

## [hide\_pane\_with\_id](plugin-api-commands.html\#hide_pane_with_id)

- Requires the `ChangeApplicationState` [permission](plugin-api-permissions.html)

Hide a pane (suppress id) with the specified id.

## [show\_pane\_with\_id](plugin-api-commands.html\#show_pane_with_id)

- Requires the `ChangeApplicationState` [permission](plugin-api-permissions.html)

Show a pane with the specified id, unsuppress it if it is suppressed, focus it and switch to its tab.

## [open\_command\_pane\_background](plugin-api-commands.html\#open_command_pane_background)

- Requires the `RunCommands` [permission](plugin-api-permissions.html)

Open a new hidden (background) command pane with the specified command and args (this sort of pane allows the user to control the command, re-run it and see its exit status through the Zellij UI).

## [rerun\_command\_pane](plugin-api-commands.html\#rerun_command_pane)

- Requires the `RunCommands` [permission](plugin-api-permissions.html)

Re-run command in a command pane (similar to a user focusing on it and pressing `<ENTER>`).

## [resize\_pane\_with\_id](plugin-api-commands.html\#resize_pane_with_id)

- Requires the `ChangeApplicationState` [permission](plugin-api-permissions.html)

Change the size of the specified pane (optionally in a specific direction).

## [edit\_scrollback\_for\_pane\_with\_id](plugin-api-commands.html\#edit_scrollback_for_pane_with_id)

- Requires the `ChangeApplicationState` [permission](plugin-api-permissions.html)

Edit the scrollback of the specified pane in the user's default `$EDITOR`

## [write\_to\_pane\_id](plugin-api-commands.html\#write_to_pane_id)

- Requires the `WriteToStdin` [permission](plugin-api-permissions.html)

Write bytes to the `STDIN` of the specified pane

## [write\_chars\_to\_pane\_id](plugin-api-commands.html\#write_chars_to_pane_id)

- Requires the `WriteToStdin` [permission](plugin-api-permissions.html)

Write characters to the `STDIN` of the specified pane

## [move\_pane\_with\_pane\_id](plugin-api-commands.html\#move_pane_with_pane_id)

- Requires the `ChangeApplicationState` [permission](plugin-api-permissions.html)

Switch the position of the specified pane with a different pane

## [move\_pane\_with\_pane\_id\_in\_direction](plugin-api-commands.html\#move_pane_with_pane_id_in_direction)

- Requires the `ChangeApplicationState` [permission](plugin-api-permissions.html)

Switch the position of the specified pane with a different pane in the specified direction (eg. `Down`, `Up`, `Left`, `Right`).

## [clear\_screen\_for\_pane\_id](plugin-api-commands.html\#clear_screen_for_pane_id)

- Requires the `ChangeApplicationState` [permission](plugin-api-permissions.html)

Clear the scroll buffer of the specified pane

## [scroll\_up\_in\_pane\_id](plugin-api-commands.html\#scroll_up_in_pane_id)

- Requires the `ChangeApplicationState` [permission](plugin-api-permissions.html)

Scroll the specified pane up 1 line

## [scroll\_down\_in\_pane\_id](plugin-api-commands.html\#scroll_down_in_pane_id)

- Requires the `ChangeApplicationState` [permission](plugin-api-permissions.html)

Scroll the specified pane down 1 line

## [scroll\_to\_top\_in\_pane\_id](plugin-api-commands.html\#scroll_to_top_in_pane_id)

- Requires the `ChangeApplicationState` [permission](plugin-api-permissions.html)

Scroll the specified pane all the way to the top of the scrollbuffer

## [scroll\_to\_bottom](plugin-api-commands.html\#scroll_to_bottom-1)

- Requires the `ChangeApplicationState` [permission](plugin-api-permissions.html)

Scroll the specified pane all the way to the bottom of the scrollbuffer

## [page\_scroll\_up\_in\_pane\_id](plugin-api-commands.html\#page_scroll_up_in_pane_id)

- Requires the `ChangeApplicationState` [permission](plugin-api-permissions.html)

Scroll the specified pane up one page

## [page\_scroll\_down\_in\_pane\_id](plugin-api-commands.html\#page_scroll_down_in_pane_id)

- Requires the `ChangeApplicationState` [permission](plugin-api-permissions.html)

Scroll the specified pane down one page

## [toggle\_pane\_id\_fullscreen](plugin-api-commands.html\#toggle_pane_id_fullscreen)

- Requires the `ChangeApplicationState` [permission](plugin-api-permissions.html)

Toggle the specified pane to be fullscreen or normal sized

## [toggle\_pane\_embed\_or\_eject\_for\_pane\_id](plugin-api-commands.html\#toggle_pane_embed_or_eject_for_pane_id)

- Requires the `ChangeApplicationState` [permission](plugin-api-permissions.html)

Embed the specified pane (make it stop floating) or turn it to a float pane if it is not

## [close\_tab\_with\_index](plugin-api-commands.html\#close_tab_with_index)

- Requires the `ChangeApplicationState` [permission](plugin-api-permissions.html)

Close the focused tab

## [break\_panes\_to\_new\_tab](plugin-api-commands.html\#break_panes_to_new_tab)

- Requires the `ChangeApplicationState` [permission](plugin-api-permissions.html)

Create a new tab that includes the specified pane ids

## [break\_panes\_to\_tab\_with\_index](plugin-api-commands.html\#break_panes_to_tab_with_index)

- Requires the `ChangeApplicationState` [permission](plugin-api-permissions.html)

Move the specified pane ids to the tab with the specified index

## [reload\_plugin](plugin-api-commands.html\#reload_plugin)

- Requires the `ChangeApplicationState` [permission](plugin-api-permissions.html)

Reload the plugin with the specified id

## [load\_new\_plugin](plugin-api-commands.html\#load_new_plugin)

- Requires the `ChangeApplicationState` [permission](plugin-api-permissions.html)

Load a new plugin

## [rebind\_keys](plugin-api-commands.html\#rebind_keys)

- Requires the `Reconfigure` [permission](plugin-api-permissions.html)

Given a set of keys to unbind and a set of keys to bind (in that order), this will apply them to the current session - or optionally also save them to the configuration file.

## [list\_clients](plugin-api-commands.html\#list_clients)

- Requires the `ReadApplicationState` [permission](plugin-api-permissions.html)

List information about clients connected to this session. Including their ID, their focused pane id, the command or plugin running in that pane id (if any) and whether they are the current plugin. This will be returned as the `ListClients` [Event](plugin-api-events.html) that must be subscribed to beforehand.

## [change\_host\_folder](plugin-api-commands.html\#change_host_folder)

- Requires the `FullHdAccess` [permission](plugin-api-permissions.html)

Change the location of the `/host` folder from the perspective of the plugin to somewhere else on the filesystem.

## [set\_floating\_pane\_pinned](plugin-api-commands.html\#set_floating_pane_pinned)

- Requires the `ChangeApplicationState` [permission](plugin-api-permissions.html)

Make a floating pane pinned or unpinned (always on top).

## [stack\_panes](plugin-api-commands.html\#stack_panes)

- Requires the `ChangeApplicationState` [permission](plugin-api-permissions.html)

Given a list of pane ids, turns them into a stack.

## [change\_floating\_panes\_coordinates](plugin-api-commands.html\#change_floating_panes_coordinates)

- Requires the `ChangeApplicationState` [permission](plugin-api-permissions.html)

Given a list of pane ids and corresponding coordinates (x, y, width, height) will change the location of all of these IDs to the desired coordinates.

[Previous chapter](plugin-api-events.html "Previous chapter")[Next chapter](plugin-api-permissions.html "Next chapter")

[Previous chapter](plugin-api-events.html "Previous chapter")[Next chapter](plugin-api-permissions.html "Next chapter")

