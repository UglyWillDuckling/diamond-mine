
## Resurrecting Sessions through the CLI

To list exited sessions, use zellij list-sessions (or zellij ls) for short:

```
zellij-list-sessions-output
```

Then, in order to resurrect a session, one can attach to it. If you'd like to immediately run all resurrected commands and skip the "Press ENTER to run..." banner, you can issue the --force-run-commands flag.

## Resurrecting Sessions through the session-manager

Sessions can also be resurrected and switched to from within a Zellij session using the session-manager. To do this, press <TAB> to toggle the EXITED sessions and select one with <ENTER>.

