---
source: "https://community.kde.org/Plasma/Debugging"
author:
published:
created: 2025-03-17
tags:
---
< [Plasma](https://community.kde.org/Plasma "Plasma")

## Plasmashell debugging

This guide serves as a collection of useful resources for debugging **plasmashell**. As plasmashell controls essentially all widgets on your desktop, a faulty widget might be hard to spot at first sight. Likewise, any official widget issues should be reported to bugs.kde.org under the plasmashell product.

### Check widgets dynamically

This procedure is useful for checking for memory leaks.

- Open **Konsole** and press Meta+Right to tile it to the right.
- Run `journalctl /usr/bin/plasmashell` and check whether any warnings or errors are present.
- If there are, run `journalctl /usr/bin/plasmashell -f 2> plasmashell.log` to check logs in real time and paste it automatically into a log.
- Open the default process manager based on KSysGuard by pressing Ctrl+Esc, then press Meta+Left to tile it to the left. Write `plasmashell` to filter it for easier visualization, or just select it. Take note of memory usage.
- Click each individual widget on the panel and check if any warnings appear on Konsole as well as whether there is any change in memory usage on the process manager. If after closing a widget memory usage comes back to normal, it's fine. If this does not occur, this might indicate a memory leak, so check if it occurs repeatedly.
- You should now have a file named plasmashell.log on your home folder that you may send to the devs together with your bug report over bugs.kde.org.

Simply opening a widget may not cause an increase in memory. If you want to verify this more thoroughly, click each individual action in that widget, or check each widget individually as shown in the next section.

You may also want to use this after you've determined a way to reproduce a crash in plasmashell caused by a widget. If so, run some debug tool such as **gdb**, **valgrind**, or **strace**.

### Check widgets individually

- Open **Konsole**
- If the widget you want to check is system-wide, list all available system widgets with `ls /usr/share/plasma/plasmoids/`, then locate the widget you want to check.
- If the widget you want to check was installed by you/is made by a third-party, list all available user widgets with `ls .local/share/plasma/plasmoids/`, then locate the widget you want to check. Remember that if an issue is found with a third-party widget, it should be reported to the original developer, not to the KDE developers.
- You can use **plasmawindowed** (available by default on Plasma) or **plasmoidviewer** (made available in **plasma-sdk**) to run a widget individually. **plasmawindowed** runs the widget separately but as if running natively, **plasmoidviewer** is more developer-oriented and allows you to set positions and whatnot. For general debugging, **plasmawindowed** should suffice.
- Run a debug tool such as **gdb** like so: `gdb plasmawindowed`

If any debug symbols are missing, **GDB** will tell you. Depending on your package manager it might even tell you what command to run in order to fetch the required debug symbols, in which case you should install such packages before continuing. Follow the instructions provided by your distribution for that.

- Inside **gdb**, execute the command `set logging on` before anything else so a file named gdb.txt is created. Optionally, you may want to `set logging file filename.txt` before it to have a special filename for your log.

- Then execute `run org.kde.plasma.plasmoidname`, utilizing the correct widget name you saw in the plasma/plasmoids folder. The widget should now run standalone with a few window controls (minimize, maximize, close) on top.

The run command inside **gdb** executes the application, and anything coming after run should be its arguments or options. Thus, it works analogously to `plasmawindowed org.kde.plasma.plasmoidname`, except **GDB** will log everything or most things you need.

- Test as much as you want, then close the widget by clicking the close button.
- Back to **gdb**, run `thread apply all backtrace` to create the backtrace.

Typically your usual backtrace would be created by running `bt`, but by default it is limited to a single thread. DrKonqi, the default crash handler, retrieves the information of all threads available in order to provide context for the developer, and we use `thread apply all backtrace` here for the same reason.

- Finish by running `quit`.
- You should now have a file named gdb.txt on your home folder that you may send to the devs together with your bug report over bugs.kde.org.

### Attach gdb to the plasmashell process

It is possible to attach **GDB** to a running process, in this case **plasmashell**. With this, you should have a crash log and backtrace even if your system completely freezes somehow.

To do this, **GDB** will need to know the PID of the **plasmashell** process. It is possible to do so manually with `ps -aux | grep plasmashell`, say, 2000, and then running `gdb plasmashell 2000`, or perhaps `gdb -p 2000`, but for efficiency you may just `gdb -p $(pidof plasmashell)` (This will fetch the PID of **plasmashell** for you automatically and it should run fine in **bash**, **sh**, **ksh** and **zsh**, in **fish** you'd use `gdb -p (pidof plasmashell)` instead).

After that, it's mostly the same process described above. When **GDB** is attached to an application, the application is "stopped" temporarily while **GDB** waits for input. Run `set logging file plasmashell.txt`, then `set logging on`, then run `continue`; this should make **plasmashell** continue running as usual. Wait for the crash to happen, then return to **gdb** and type `thread apply all backtrace` to generate a backtrace. Lastly, run `quit` to exit **gdb**.

### Automate generation of backtraces with batch

**GDB** provides an easy way to automate debugging: the `-batch` flag. After enabling it, you should be able to run commands sequentially with `-ex` or `--eval-command`. If you don't want to see any output on your terminal, you might want to use `-batch-silent` instead. Let's see three examples of this:

- Run application and provide general backtrace: `gdb plasmashell -batch -ex "set logging file plasmashell.txt" -ex "set logging on" -ex "run" -ex "thread apply all backtrace" -ex "quit"`

(Note that in the case of running **plasmashell** from the start, you need to kill it first.)

- Attach to application and provide general backtrace: `gdb -pid $(pidof plasmashell) -batch  -ex "set logging file plasmashell.txt" -ex "set logging on" -ex "continue" -ex "thread apply all backtrace" -ex "quit"`

- Attach to application and be extra quiet: `gdb --silent -pid $(pidof plasmashell) -batch-silent -ex "set logging file plasmashell.txt" -ex "set logging on" -ex "continue" -ex "thread apply all backtrace" -ex "quit"`

### Full log of memory leaks with Valgrind

After checking which widgets are causing the issue, you can verify what piece of code is causing a memory leak. Where **GDB** excels for creating backtraces, **Valgrind** is most known for its use in detecting memory leaks. Unfortunately, **Valgrind** lacks the ability to attach to running processes, but this should be no issue for **Plasmashell**.

First, terminate the current **Plasmashell** session with

```
kquitapp5 plasmashell
```

Then simply initiate a **Plasmashell** process via **Valgrind**:

```
valgrind --leak-check=full --show-reachable=yes --track-origins=yes --trace-children=yes --log-file=plasmashell.log plasmashell
```

Alternatively, as mentioned above in section [Check widgets individually](https://community.kde.org/Plasma/#Check_widgets_individually), you can initiate a **plasmawindowed** process containing the faulty widget via **Valgrind**:

```
valgrind --leak-check=full --show-reachable=yes --track-origins=yes --trace-children=yes --log-file=plasmoidname.log plasmawindowed org.kde.plasma.plasmoidname
```

If any additional info is required, the developers will mention how to acquire the desired information.

![[~/×/9a025966474a5dc984c4708b106b47bd_MD5.png]]

**Note**

The produced file will be huge, so make it an attachment to the bug report. Unlike backtraces, **Valgrind** reports are not as useful for identifying duplicates, but by themselves are very useful for developers.