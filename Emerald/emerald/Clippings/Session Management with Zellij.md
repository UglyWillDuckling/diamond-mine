---
author: 
created: 2025-04-30
published: 
source: https://zellij.dev/tutorials/session-management/
tags:
  - howto/zellij
about: "[[Zellij]]"
---
**This tutorial shows how to use Zellij to manage sessions in the terminal.**

## Why use Zellij to manage sessions?

Do you find yourself jumping between tasks a lot?

When using the terminal, we often open new terminal windows for different tasks, ending up with a mess of open terminals. This can lead to difficulty and overhead when switching contexts: we often end up searching for commands through our shell history, keeping complex notes and having to rebuild our environment every time we return to a task. Zellij can solve these problems and more for us with the `session-manager` and `welcome-screen`.

## What we’ll cover

- [The Zellij Welcome Screen](https://zellij.dev/tutorials/session-management/#the-zellij-welcome-screen)
- [Setting up the Welcome Screen to Open on Terminal Startup](https://zellij.dev/tutorials/session-management/#setting-up-the-welcome-screen-to-open-on-terminal-startup)
- [Starting a new session in a specific folder](https://zellij.dev/tutorials/session-management/#starting-a-new-session-in-a-specific-folder)
- [Starting a new session in a specific folder and layout from the session-manager](https://zellij.dev/tutorials/session-management/#starting-a-new-session-in-a-specific-folder-and-layout-from-the-session-manager)
- [Switching between running sessions to manage context](https://zellij.dev/tutorials/session-management/#switching-between-running-sessions-to-manage-context)
- [Resurrecting exited sessions to revive old contexts](https://zellij.dev/tutorials/session-management/#resurrecting-exited-sessions-to-revive-old-contexts)
- [Do you like Zellij?](https://zellij.dev/tutorials/session-management/#do-you-like-zellij-)

## The Zellij Welcome Screen

![An image of Zellij welcome screen.](https://zellij.dev/img/tutorial-3-preview.png)

An image of Zellij welcome screen.

The Zellij `welcome-screen` is a friendly start-up menu that allows users to:
1. Start a new sessions, optionally in a specific folder and/or with a specific [layout](https://zellij.dev/tutorials/layouts).
2. Attach to currently running sessions and switch between them.
3. Resurrect exited sessions, creating a new session from old context.

## Setting up the Welcome Screen to open on Terminal startup

In most terminals, it’s possible to set up the Zellij `welcome-screen` to start up every time the terminal window is opened. Doing this will create a powerful integration between Zellij and your favorite terminal, allowing Zellij to manage not only your panes, layouts and tabs - but also your sessions and contexts.

### In Alacritty

Open the Alacritty [configuration file](https://github.com/alacritty/alacritty?tab=readme-ov-file#configuration) and replace the `[shell]` section with the following:

```toml
[shell]
program = "zellij"
args = ["-l", "welcome"]
TOML
```

### In gnome-terminal

Follow [these instructions](https://help.gnome.org/users/gnome-terminal/stable/pref-custom-command.html.en) and pass the command `zellij -l welcome`.

### In Konsole

In the Settings menu, start a new `profile` and set the command to be `zellij -l welcome`. Set it as the Default profile and restart Konsole.

### In WezTerm

Set the `config.default_prog` to:

```lua
config.default_prog = { 'zellij', '-l', 'welcome' }
Lua
```

[See the WezTerm documentation](https://wezfurlong.org/wezterm/config/launch.html#changing-the-default-program) for more information.

## Starting a new session in a specific folder

![An image of Zellij welcome screen with the filepicker opened.](https://zellij.dev/img/tutorial-3-specific-folder.png)

An image of Zellij welcome screen with the filepicker opened.

To start a new session in a specific folder, we:
1. Optionally type in a session name
2. Press `Ctrl-f` to open up the `filepicker`, explore our filesystem to search for the new folder, entering folders with `<TAB>` and once we’re inside the folder we want, pressing `<ENTER>`. The folder will appear in the `New session folder:` section on the bottom of the `New session` form.
3. We choose a [layout](https://zellij.dev/tutorials/layouts) or stick with the `default` layout.
4. Press `<ENTER>` to start the new session

## Starting a new session in a specific folder and layout from the session-manager

![An image of Zellij session-manager pointed to the 'default-rust' layout.](https://zellij.dev/img/tutorial-3-specific-layout.png)

An image of Zellij session-manager pointed to the 'default-rust' layout.

Similarly, to start a new session with a specific layout - we follow the above steps but choose a different layout instead of the `default` one.

We could either choose one of the built-in layouts (for example: `compact`), or one of our custom layouts that we saved to the `layouts` subfolder of the [Zellij configuration](https://zellij.dev/documentation/configuration#where-does-zellij-look-for-the-config-file). For more info on creating layouts, please see the [layout screencast and tutorial](https://zellij.dev/tutorials/layouts).

## Switching between running sessions to manage context

![An image of Zellij session-manager about to attach to a new session.](https://zellij.dev/img/tutorial-3-switch-session.png)

An image of Zellij session-manager about to attach to a new session.

It’s possible to attach to a currently running session either from the `welcome-screen` or from the `session-manager` (exactly like the `welcome-screen` only running inside an existing Zellij session). To launch the `session-manager`, press `Ctrl o` + `w`.

In the menu, navigate with `<TAB>` to `Attach to Session` and select the session you would like to attach to from the list.

It’s very helpful to keep different context for different tasks in separate sessions, thus allowing you to label them, switch between them at will and even resurrect them after a reboot.

## Resurrecting exited sessions to revive old contexts

![An image of Zellij welcome-screen about to resurrect a new session.](https://zellij.dev/img/tutorial-3-resurrect-session.png)

An image of Zellij welcome-screen about to resurrect a new session.

When a Zellij session exits, Zellij keeps its metadata around: meaning the layout of the panes and tabs as well as which program was running in each pane or tab. This can be very useful to label and keep around old contexts.

Imagine you were in a debugging session and opened several panes, each one with a specific command that helped you discover a problem in your system. Once you’ve solved this problem, instead of closing the session immediately, you can rename: start the `session-manager` with `Ctrl o` + `w`, rename the session with `Ctrl r` to a descriptive name and then quit Zellij with `Ctrl q`.

You can then in the future open a new terminal window to the `welcome-screen`, press `<TAB>` until you reach `Resurrect Session`, search through your sessions for the descriptive name you gave the old session and press `<ENTER>` to have Zellij resurrect ths session and rebuild your own context. Allowing you to solve the same problem again rather than struggling to remember your steps from the past.

## Do you like Zellij? ❤️

Me too. So much so that I spend 100% of my time developing and maintaining it and have no other income.

Zellij will always be free and open-source. Zellij will never contain ads or collect your data.

If the tool gives you value and you are able, please consider [a recurring monthly donation](https://github.com/sponsors/imsnif) of 5-10$ to help me pay my bills. There are Zellij stickers in it for you!