---
part of:
  - "[[Zellij]]"
tags:
  - docs/zellij
---

# Session Resurrection

![zellij-session-manager-resurrection|600](https://zellij.dev/documentation/img/zellij-session-manager-resurrection.png)

Zellij includes built-in session resurrection capabilities. This means that by default, each Zellij session is serialized and kept in the user's cache folder waiting to be recreated after an intentional quit or an unintentional crash.

These exited resurrectable sessions can be listed through the CLI or the built-in `session-manager`. They can be resurrected through the CLI by attaching to them or through the `session-manager` by selecting them in the `EXITED` section.

## [What is Resurrected and how to Configure](session-resurrection.html\#what-is-resurrected-and-how-to-configure)

By default, Zellij serializes the session layout (panes and tabs) and the command running in each pane (it will re-run them in command panes). Through configuration it's possible to have Zellij also serialize and resurrect the pane viewport and scrollback.

Zellij does not immediately run resurrected commands, but rather places them behind a "Press `ENTER` to run..." banner so as to prevent uncomfortable accidents with things like `rm -rf`.

### [`session_serialization`](session-resurrection.html\#session_serialization)

To disable session serialization (and thus also resurrection), set `session_serialization false` in the [config](configuration.html).

### [`pane_viewport_serialization`](session-resurrection.html\#pane_viewport_serialization)

When `session_serialization` is enabled, setting `pane_viewport_serialization` to `true` in the [config](configuration.html) will also serialize the pane viewport (the part of the terminal visible on screen).

### [`scrollback_lines_to_serialize`](session-resurrection.html\#scrollback_lines_to_serialize)

When `pane_viewport_serialization` is enabled, setting `scrollback_lines_to_serialize` to `0` in the [config](configuration.html) will serialize all scrollback and to any other number will serialize line number up to that scrollback. Note that this might incur higher resource utilization (and certainly a higher cache folder usage...)

## [Resurrecting Sessions through the CLI](session-resurrection.html\#resurrecting-sessions-through-the-cli)

To list exited sessions, use `zellij list-sessions` (or `zellij ls`) for short:

![zellij-list-sessions-output](img/zellij-ls-resurrection.png)

Then, in order to resurrect a session, one can `attach` to it. If you'd like to immediately run all resurrected commands and skip the "Press `ENTER` to run..." banner, you can issue the `--force-run-commands` flag.

## [Resurrecting Sessions through the session-manager](session-resurrection.html\#resurrecting-sessions-through-the-session-manager)

Sessions can also be resurrected and switched to from within a Zellij session using the `session-manager`. To do this, press `<TAB>` to toggle the `EXITED` sessions and select one with `<ENTER>`.

## [Permanently Deleting Sessions](session-resurrection.html\#permanently-deleting-sessions)

Resurrectable sessions can be permanently deleted with the `zellij delete-session` or `zellij delete-all-sessions` CLI commands. They can also be deleted from the `session-manager`.

## [Session files in the cache](session-resurrection.html\#session-files-in-the-cache)

Zellij serializes the session data into a [layout](layouts.html) every 1 second and saves it to the system's cache folder. These layouts can later be examined, altered and even shared as is across machines. They can be loaded with `zellij --layout session-layout.kdl` just like any other layout. They are intentionally Human readable to facilitate their re-use.

[Previous chapter](plugin-upgrade-0.38.0.html "Previous chapter")[Next chapter](compatibility.html "Next chapter")

[Previous chapter](plugin-upgrade-0.38.0.html "Previous chapter")[Next chapter](compatibility.html "Next chapter")

