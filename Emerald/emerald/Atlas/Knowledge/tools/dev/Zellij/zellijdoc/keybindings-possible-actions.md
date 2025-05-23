- Light
- Rust
- Coal
- Navy
- Ayu

# Zellij User Guide

[Print this book](print.html "Print this book")

# [Possible Actions](keybindings-possible-actions.html\#possible-actions)

## [`Clear`](keybindings-possible-actions.html\#clear)

Clear the scrollback buffer of the focused pane

**Possible arguments**: None

eg.

```javascript
    bind "a" { Clear; }

```

## [`CloseFocus`](keybindings-possible-actions.html\#closefocus)

Close the focused pane

**Possible arguments**: None

eg.

```javascript
    bind "a" { CloseFocus; }

```

## [`CloseTab`](keybindings-possible-actions.html\#closetab)

Close the focused tab

**Possible arguments**: None

eg.

```javascript
    bind "a" { CloseTab; }

```

## [`Detach`](keybindings-possible-actions.html\#detach)

Detach from the current session, leaving it running in the background

**Possible arguments**: None

eg.

```javascript
    bind "a" { Detach; }

```

## [`DumpScreen`](keybindings-possible-actions.html\#dumpscreen)

Dump the contents of the focused pane, including its entire scrollback, to the specified file.

**Required arguments**: A path to a file on the hard-drive

eg.

```javascript
    bind "a" { DumpScreen "/tmp/my-dump.txt"; }

```

## [`EditScrollback`](keybindings-possible-actions.html\#editscrollback)

Edit the scrollback of the currently focused pane with the user's default editor.

**Possible arguments**: None

```javascript
    bind "a" { EditScrollback; }

```

## [`FocusNextPane`](keybindings-possible-actions.html\#focusnextpane)

Change focus to the next pane (order not guaranteed)

**Possible arguments**: None

```javascript
    bind "a" { FocusNextPane; }

```

## [`FocusPreviousPane`](keybindings-possible-actions.html\#focuspreviouspane)

Change focus to the previous pane (order not guaranteed)

**Possible arguments**: None

```javascript
    bind "a" { FocusPreviousPane; }

```

## [`GoToNextTab`](keybindings-possible-actions.html\#gotonexttab)

Change focus to the next tab

**Possible arguments**: None

```javascript
    bind "a" { GoToNextTab; }

```

## [`GoToPreviousTab`](keybindings-possible-actions.html\#gotoprevioustab)

Change focus to the previous tab

**Possible arguments**: None

```javascript
    bind "a" { GoToPreviousTab; }

```

## [`GoToTab`](keybindings-possible-actions.html\#gototab)

Change focus to a tab with a specific index

**Required arguments**: numeric tab index (eg. 1)

```javascript
    bind "a" { GoToTab 1; }

```

## [`HalfPageScrollDown`](keybindings-possible-actions.html\#halfpagescrolldown)

Scroll the focused pane half a page down

**Possible arguments**: None

```javascript
    bind "a" { HalfPageScrollDown; }

```

## [`HalfPageScrollUp`](keybindings-possible-actions.html\#halfpagescrollup)

Scroll the focused pane half a page up

**Possible arguments**: None

```javascript
    bind "a" { HalfPageScrollUp; }

```

## [`LaunchOrFocusPlugin`](keybindings-possible-actions.html\#launchorfocusplugin)

Launch a plugin if it is not already loaded somewhere in the session, focus it if it is

**Required arguments**: The [plugin URL](plugin-loading.html#plugin-url-schema) (eg. `file:/path/to/my/plugin.wasm`)

**Optional arguments**: `floating` \- `true` or `false` (default is `false`)

```javascript
    bind "a" {
        LaunchOrFocusPlugin "zellij:strider" {
            floating true
        }
    }

```

## [`MessagePlugin`](keybindings-possible-actions.html\#messageplugin)

Send a message to one or more plugins, using a [pipe](plugin-pipes.html) \- meaning the plugin will be launched if it is not already running.

**Required arguments**: None (with no options specified, this keybind will send an empty message to all plugins)

**Optional arguments:**:
\- `launch_new` ( `true/false`): force a new plugin to launch even if one is already running
\- `skip_cache` ( `true/false`): force re-compilation (and re-download if the plugin is http), even if the plugin is already running or cached
\- `floating` ( `true/false`): if launching a new plugin, should it be floating or tiled
\- `name` ( `String`): The name of the message
\- `payload` ( `String`): The payload of the message
\- `title` ( `String`): The pane title of the pane if launching a new plugin instance
\- `cwd` ( `String`): The working directory of the plugin if launching a new instance

```javascript
    bind "a" {
        MessagePlugin "file:/path/to/my/plugin.wasm" {
            name "message_name"
            payload "message_payload"
            cwd "/path/to/my/working/directory"
        }
    }

```

## [`MoveFocus`](keybindings-possible-actions.html\#movefocus)

Move focus in a specific direction

**Required arguments**: `Left` \| `Right` \| `Up` \| `Down`

```javascript
    bind "a" { MoveFocus "Left"; }

```

## [`MoveFocusOrTab`](keybindings-possible-actions.html\#movefocusortab)

Move focus left or right, or to the next or previous tab if on screen edge

**Required arguments**: `Left` \| `Right`

```javascript
    bind "a" { MoveFocusOrTab "Left"; }

```

## [`MovePane`](keybindings-possible-actions.html\#movepane)

Move the position of the focused pane in the specific direction

**Required arguments**: `Left` \| `Right` \| `Up` \| `Down`

```javascript
    bind "a" { MovePane "Left"; }

```

## [`MoveTab`](keybindings-possible-actions.html\#movetab)

Change the position of the active tab either left or right.

**Required arguments**: the direction, either "Left" or "Right"

```javascript
    bind "a" { MoveTab "Left"; }

```

## [`NextSwapLayout`](keybindings-possible-actions.html\#nextswaplayout)

Change the layout of the current tab (either tiled or floating) to the next one

**Possible arguments**: None

```javascript
    bind "a" { NextSwapLayout; }

```

## [`NewPane`](keybindings-possible-actions.html\#newpane)

Open a new pane (in the specified direction)

**Possible arguments**: `Down` \| `Right`

**Behaviour without arguments**: Opens a pane in the largest available space or if floating panes are visible, in the next floating pane position.

```javascript
    bind "a" { NewPane "Right"; }

```

## [`NewTab`](keybindings-possible-actions.html\#newtab)

Open a new tab

**Possible arguments**: `cwd`

Current working directory for the new tab, `name` \- the name of the new tab, `layout` \- path to the layout file to load for this tab

```javascript
    bind "a" { NewTab; }

```

or:

```javascript
    bind "a" {
       NewTab {
           cwd "/tmp"
           name "My tab name"
           layout "/path/to/my/layout.kdl"
       }
    }

```

## [`PageScrollDown`](keybindings-possible-actions.html\#pagescrolldown)

Scroll the focused pane one page down

**Possible arguments**: None

```javascript
    bind "a" { PageScrollDown; }

```

## [`PageScrollUp`](keybindings-possible-actions.html\#pagescrollup)

Scroll the focused pane one page up

**Possible arguments**: None

```javascript
    bind "a" { PageScrollUp; }

```

## [`PreviousSwapLayout`](keybindings-possible-actions.html\#previousswaplayout)

Change the layout of the current tab (either tiled or floating) to the previous one

**Possible arguments**: None

```javascript
    bind "a" { PreviousSwapLayout; }

```

## [`Quit`](keybindings-possible-actions.html\#quit)

Quit Zellij :(

**Possible arguments**: None

```javascript
    bind "a" { Quit; }

```

## [`Resize`](keybindings-possible-actions.html\#resize)

Resize the focused pane either in the specified direction or increase/decrease its size automatically

**Required arguments**: `Left` \| `Right` \| `Up` \| `Down` \| `Increase` \| `Decrease`

```javascript
    bind "a" { Resize "Increase"; }

```

## [`Run`](keybindings-possible-actions.html\#run)

Run the specified command

**Required arguments**: The command to run, followed by optional arguments

**Possible arguments**: `cwd` \- current working directory, `direction` \- the direction to open the new command pane

```javascript
    // will run "tail -f /tmp/foo" in a pane opened below the focused one
    bind "a" {
        Run "tail" "-f" "foo" {
            cwd "/tmp"
            direction "Down"
        }
    }

```

## [`ScrollDown`](keybindings-possible-actions.html\#scrolldown)

Scroll the focused pane down 1 line

**Possible arguments**: None

```javascript
    bind "a" { ScrollDown; }

```

## [`ScrollToBottom`](keybindings-possible-actions.html\#scrolltobottom)

Scroll the focused pane completely down

**Possible arguments**: None

```javascript
    bind "a" { ScrollToBottom; }

```

## [`ScrollUp`](keybindings-possible-actions.html\#scrollup)

Scroll the focused pane up 1 line

**Possible arguments**: None

```javascript
    bind "a" { ScrollUp; }

```

## [`ScrollToTop`](keybindings-possible-actions.html\#scrolltotop)

Scroll the focused pane completely up

**Possible arguments**: None

```javascript
    bind "a" { ScrollToTop; }

```

## [`Search`](keybindings-possible-actions.html\#search)

When searching, move to the next or previous search occurrence

**Required arguments**: "down" \| "up"

```javascript
    bind "a" { Search "up"; }

```

## [`SearchToggleOption`](keybindings-possible-actions.html\#searchtoggleoption)

Toggle various search options on/off

**Required arguments**: "CaseSensitivity" \| "Wrap" \| "WhileWord"

```javascript
    bind "a" { SearchToggleOption "CaseSensitivity"; }

```

## [`SwitchToMode`](keybindings-possible-actions.html\#switchtomode)

Switch the current input mode

**Required arguments**: See [Modes](keybindings-possible-actions.html#modes)

```javascript
    bind "a" { SwitchToMode "locked"; }

```

## [`ToggleActiveSyncTab`](keybindings-possible-actions.html\#toggleactivesynctab)

Toggle the syncing of input between all panes in the focused tab

**Possible arguments**: None

```javascript
    bind "a" { ToggleActiveSyncTab; }

```

## [`ToggleFloatingPanes`](keybindings-possible-actions.html\#togglefloatingpanes)

Show/hide floating panes; if none are open, one will be opened

**Possible arguments**: None

```javascript
    bind "a" { ToggleFloatingPanes; }

```

## [`ToggleFocusFullscreen`](keybindings-possible-actions.html\#togglefocusfullscreen)

Toggle the focused pane as fullscreen on/off

**Possible arguments**: None

```javascript
    bind "a" { ToggleFocusFullscreen; }

```

## [`ToggleMouseMode`](keybindings-possible-actions.html\#togglemousemode)

Toggle mouse support on/off

**Possible arguments**: None

```javascript
    bind "a" { ToggleMouseMode; }

```

## [`TogglePaneEmbedOrFloating`](keybindings-possible-actions.html\#togglepaneembedorfloating)

Float focused embedded pane or embed focused floating pane

**Possible arguments**: None

```javascript
    bind "a" { TogglePaneEmbedOrFloating; }

```

## [`TogglePaneFrames`](keybindings-possible-actions.html\#togglepaneframes)

Show/hide the frames around panes (notice, these might have valuable UX info)

**Possible arguments**: None

```javascript
    bind "a" { TogglePaneFrames; }

```

## [`ToggleTab`](keybindings-possible-actions.html\#toggletab)

Change the tab focus

**Possible arguments**: None

```javascript
    bind "a" { ToggleTab; }

```

## [`UndoRenamePane`](keybindings-possible-actions.html\#undorenamepane)

Undo a rename pane operation currently in progress (reverting to the previous name)

**Possible arguments**: None

```javascript
    bind "a" { UndoRenamePane; }

```

## [`UndoRenameTab`](keybindings-possible-actions.html\#undorenametab)

Undo a rename tab operation currently in progress (reverting to the previous name)

**Possible arguments**: None

```javascript
    bind "a" { UndoRenameTab; }

```

## [`Write`](keybindings-possible-actions.html\#write)

Write bytes to the active pane

**Required arguments**: the bytes to write as integers

```javascript
    bind "a" { Write 102 111 111; }

```

## [`WriteChars`](keybindings-possible-actions.html\#writechars)

Write a string of characters to the active pane

**Required arguments**: the string of characters to write

```javascript
    bind "a" { WriteChars "hi there!"; }

```

[Previous chapter](keybindings-keys.html "Previous chapter")[Next chapter](keybindings-shared.html "Next chapter")

[Previous chapter](keybindings-keys.html "Previous chapter")[Next chapter](keybindings-shared.html "Next chapter")

