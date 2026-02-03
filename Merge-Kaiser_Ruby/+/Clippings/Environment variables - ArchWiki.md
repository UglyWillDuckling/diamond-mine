---
source: "https://wiki.archlinux.org/title/Environment_variables#Per_Xorg_session"
author:
published:
created: 2025-05-05
tags:
---
An environment variable is a named object that contains data used by one or more applications. In simple terms, it is a variable with a name and a value. The value of an environmental variable can for example be the location of all executable files in the file system, the default editor that should be used, or the system locale settings. Users new to Linux may often find this way of managing settings a bit unmanageable. However, environment variables provide a simple way to share configuration settings between multiple applications and processes in Linux.

## Utilities

The [coreutils](https://archlinux.org/packages/?name=coreutils) package contains the programs *printenv* and *env*. To list the current environmental variables with values:

```
$ printenv
```

**Note:** Some environment variables are user-specific. Check by comparing the outputs of *printenv* as an unprivileged user and as *root*.

The *env* utility can be used to run a command under a modified environment. The following example will launch *xterm* with the environment variable `EDITOR` set to `vim`. This will not affect the global environment variable `EDITOR`.

```
$ env EDITOR=vim xterm
```

The [shell](https://wiki.archlinux.org/title/Shell "Shell") builtin [set(1p)](https://man.archlinux.org/man/set.1p) allows you to change the values of shell options, set the positional parameters and to display the names and values of shell variables.

Each process stores their environment in the `/proc/$PID/environ` file. This file contains each key value pair delimited by a nul character (`\x0`). A more human readable format can be obtained with [sed](https://wiki.archlinux.org/title/Sed "Sed"), e.g. `sed 's:\x0:\n:g' /proc/$PID/environ`.

## Defining variables

To avoid needlessly polluting the environment, you should seek to restrict the scope of variables. In fact, graphical sessions and systemd services require you to set variables in certain locations for them to take effect. The scopes of environment variables are broken down into the contexts they affect:

- [Global](https://wiki.archlinux.org/title/#Globally): All programs that any user runs, not including systemd services.
- [By user](https://wiki.archlinux.org/title/#Per_user): All programs that a particular user runs, not including user systemd services (see [Systemd/User#Environment variables](https://wiki.archlinux.org/title/Systemd/User#Environment_variables "Systemd/User")) or graphical applications (see [#Graphical environment](https://wiki.archlinux.org/title/#Graphical_environment)).

### Globally

#### Using shell initialization files

Most Linux distributions tell you to change or add environment variable definitions in `/etc/profile` or other locations. Keep in mind that there are also package-specific configuration files containing variable settings such as `/etc/locale.conf`. Be sure to maintain and manage the environment variables and pay attention to the numerous files that can contain environment variables. In principle, any shell script can be used for initializing environmental variables, but following traditional UNIX conventions, these statements should only be present in some particular files.

The following files can be used for defining global environment variables on your system, each with different limitations:

- `/etc/environment` is used by the [pam\_env module](https://wiki.archlinux.org/title/#Using_pam_env) and is shell agnostic so scripting or glob expansion cannot be used. The file only accepts `*variable=value*` pairs.
- `/etc/profile` initializes variables for login shells *only*. It does, however, run scripts (e.g. those in `/etc/profile.d/`) and can be used by all [Bourne shell](https://en.wikipedia.org/wiki/Bourne_shell "wikipedia:Bourne shell") compatible shells.
- Shell specific configuration files - Global configuration files of your [shell](https://wiki.archlinux.org/title/Shell "Shell"), initializes variables and runs scripts. For example [Bash#Configuration files](https://wiki.archlinux.org/title/Bash#Configuration_files "Bash") (e.g. `~/.bashrc`) or [Zsh#Startup/Shutdown files](https://wiki.archlinux.org/title/Zsh#Startup/Shutdown_files "Zsh") (e.g. `~/.zshrc`).

The following Bash helper function can be used to append a number of directories to the `PATH` environment variable. Add the function at the top of the file where you define your environment (e.g. `~/.environment` or `~/.bashrc`.

The function will only add directories that actually exist on the filesystem, and it will avoid creating duplicate entries.

```
add_paths() {
  for d in "$@"; do
    [[ -d "$d" && ! "$PATH" =~ (^|:)$d(:|$) ]] && PATH="$PATH:$d"
  done
}

add_paths ~/bin ~/scripts
```

One method for sharing environment variables between different shells is to create a file **without any comments, blank lines, or spaces (bash)** that can be read directly by `envsubst` (inspired by [\[1\]](https://unix.stackexchange.com/questions/176322/share-environment-variables-between-bash-and-fish)):

```
.env
```
```
EDITOR=vim
XDG_CACHE_HOME=$HOME/.cache
XDG_CONFIG_HOME=$HOME/.config
XDG_DATA_HOME=$HOME/.local/share
XDG_STATE_HOME=$HOME/.local/state
```
```
~/.bashrc
```
```
export $(envsubst < .env)
```
```
~/.config/fish/config.fish
```
```
set export (envsubst < .env)
```

#### Using pam\_env

The [PAM](https://wiki.archlinux.org/title/PAM "PAM") module [pam\_env(8)](https://man.archlinux.org/man/pam_env.8) loads the variables to be set in the environment from the following files in order: `/etc/security/pam_env.conf` and `/etc/environment`.

**Note:**
- These files are read before other files, in particular before `~/.profile`, `~/.bash_profile` and `~/.zshenv`.
- The deprecated `~/.pam_environment` is not read anymore. See [FS#68945](https://bugs.archlinux.org/task/68945).

`/etc/environment` must consist of simple `*VARIABLE*=*value*` pairs on separate lines, for example:

```
/etc/environment
```
```
EDITOR=nano
```

`/etc/security/pam_env.conf` has the following format:

```
/etc/security/pam_env.conf
```
```
VARIABLE [DEFAULT=value] [OVERRIDE=value]
```

`@{HOME} ` and `@{SHELL} ` are special variables that expand to what is defined in `/etc/passwd`. The following example illustrates how to expand the `HOME` environment variable into another variable:

```
/etc/security/pam_env.conf
```
```
XDG_CONFIG_HOME   DEFAULT=@{HOME}/.config
```

**Note:** The variables `${HOME} ` and `${SHELL} ` are not linked to the `HOME` and `SHELL` environment variables, they are not set by default.

The format also allows to expand already defined variables in the values of other variables using `${*VARIABLE*} `, like this:

```
/etc/security/pam_env.conf
```
```
GOPATH DEFAULT=${XDG_DATA_HOME}/go
```

`*VARIABLE*=*value*` pairs are also allowed, but variable expansion is not supported in those pairs. See [pam\_env.conf(5)](https://man.archlinux.org/man/pam_env.conf.5) for more information.

### Per user

You do not always want to define an environment variable globally. For instance, you might want to add `/home/my_user/bin` to the `PATH` variable but do not want all other users on your system to have that in their `PATH` too. Local environment variables can be defined in many different files:

- User configuration files of your [shell](https://wiki.archlinux.org/title/Shell "Shell"), for example [Bash#Configuration files](https://wiki.archlinux.org/title/Bash#Configuration_files "Bash") or [Zsh#Startup/Shutdown files](https://wiki.archlinux.org/title/Zsh#Startup/Shutdown_files "Zsh").
	- Unless you are restricting the scope of the variables to terminals you open (e.g. command-line applications only), you are looking to modify the login shell.
- [systemd user environment variables](https://wiki.archlinux.org/title/Systemd/User#Environment_variables "Systemd/User") are read from `~/.config/environment.d/*.conf`.

To add a directory to the `PATH` for local usage, put following in `~/.bash_profile`:

```
export PATH="${PATH}:/home/my_user/bin"
```

To update the variable, re-login or [source](https://wiki.archlinux.org/title/Source "Source") the file: `$ source ~/.bash_profile`.

**Note:** The dbus daemon and the user instance of systemd do not inherit any of the environment variables set in places like `~/.bashrc` etc. This means that, for example, dbus activated programs like [GNOME Files](https://wiki.archlinux.org/title/GNOME_Files "GNOME Files") will not use them by default. See [systemd/User#Environment variables](https://wiki.archlinux.org/title/Systemd/User#Environment_variables "Systemd/User").

**Tip:** You can issue `export -p` to review the global and local environment variables declared for the user session.

#### Graphical environment

If an environment variable only affects graphical applications, you may want to restrict the scope of it by only setting it within the graphical session. In order of decreasing scope:

- [#Per Xorg session](https://wiki.archlinux.org/title/#Per_Xorg_session) and [#Per Wayland session](https://wiki.archlinux.org/title/#Per_Wayland_session) affect the whole graphical session, certainly including the DE.
- [#Per desktop environment session](https://wiki.archlinux.org/title/#Per_desktop_environment_session) affects the applications spawned within graphical session, potentially including the DE itself.
- [#Per application](https://wiki.archlinux.org/title/#Per_application) affects just a particular graphical application.

##### Per desktop environment session

Some graphical environments, (e.g. [KDE Plasma](https://wiki.archlinux.org/title/KDE_Plasma "KDE Plasma")) support executing shell scripts at login: they can be used to set environment variables. See [KDE#Autostart](https://wiki.archlinux.org/title/KDE#Autostart "KDE") for example.

##### Per Xorg session

The procedure for modifying the environment of the Xorg session depends on how it is started:

- Most [display managers](https://wiki.archlinux.org/title/Display_manager "Display manager") source [xprofile](https://wiki.archlinux.org/title/Xprofile "Xprofile").
- [startx](https://wiki.archlinux.org/title/Startx "Startx") and [SLiM](https://wiki.archlinux.org/title/SLiM "SLiM") execute [xinitrc](https://wiki.archlinux.org/title/Xinitrc "Xinitrc").
- [XDM](https://wiki.archlinux.org/title/XDM "XDM") executes `~/.xsession`; see [XDM#Defining the session](https://wiki.archlinux.org/title/XDM#Defining_the_session "XDM").
- [LightDM](https://wiki.archlinux.org/title/LightDM "LightDM") [\[2\]](https://gitlab.archlinux.org/archlinux/packaging/packages/lightdm/-/blob/main/Xsession) and [SDDM](https://wiki.archlinux.org/title/SDDM "SDDM") [\[3\]](https://github.com/sddm/sddm/blob/master/data/scripts/Xsession) additionally source startup scripts for login shells, like `~/.bash_profile` for [bash](https://wiki.archlinux.org/title/Bash "Bash") or `~/.zprofile` and `~/.zlogin` for [zsh](https://wiki.archlinux.org/title/Zsh "Zsh").

Though the end of the script depends on which file it is, and any advanced syntax depends on the shell used, the basic usage is universal:

```
~/.xprofile, ~/.xinitrc, or ~/.xsession
```
```
...
export GUI_VAR=value
...
```

##### Per Wayland session

Since [Wayland](https://wiki.archlinux.org/title/Wayland "Wayland") does not initiate any Xorg related files, [GDM](https://wiki.archlinux.org/title/GDM "GDM") and [KDE Plasma](https://wiki.archlinux.org/title/KDE_Plasma "KDE Plasma") source [systemd user environment variables](https://wiki.archlinux.org/title/Systemd/User#Environment_variables "Systemd/User") instead.

```
~/.config/environment.d/envvars.conf
```
```
GUI_VAR=value
```

No other display managers supporting Wayland sessions (e.g. [SDDM](https://wiki.archlinux.org/title/SDDM "SDDM")) provide direct support for this yet. However, [LightDM](https://wiki.archlinux.org/title/LightDM "LightDM") and [SDDM](https://wiki.archlinux.org/title/SDDM "SDDM") source startup scripts for login shells on Wayland sessions too.

[greetd](https://wiki.archlinux.org/title/Greetd "Greetd") also sources `/etc/profile` and `~/.profile` - this behavior is controlled by its `source_profile` setting, enabled by default.

If your display manager sources startup scripts like `~/.bash_profile` and you want to use `environment.d`, you can source it like so:

```
~/.bash_profile
```
```
# use systemd-environment-d-generator(8) to generate environment, and export those variables
set -o allexport
source <(/usr/lib/systemd/user-environment-generators/30-systemd-environment-d-generator)
set +o allexport
```

**Note:** Other generators in `/usr/lib/systemd/user-environment-generators` like `60-flatpak` may not quote the values of environment variables. In this case the output should be sourced with `export -- "$(/usr/lib/systemd/user-environment-generators/60-flatpak)"`

##### Per application

To set environment variables only for a specific application instead of the whole session, edit the application's *.desktop* file. See [Desktop entries#Modify environment variables](https://wiki.archlinux.org/title/Desktop_entries#Modify_environment_variables "Desktop entries") for instructions.

For [Steam](https://wiki.archlinux.org/title/Steam "Steam") games, you can configure a program's environment by editing its launch options; see [Steam#Launch options](https://wiki.archlinux.org/title/Steam#Launch_options "Steam").

### Per session or shell

Sometimes only temporary variables are required. One might want to temporarily run executables from a specific directory created without having to type the absolute path to each one, or use the path in a short temporary shell script.

For example, you can define the `PATH` variable in your current shell, or use the *export* command to define it for all shells until you log out of the session. To add a session-specific directory to `PATH`, issue:

```
$ export PATH="${PATH}:/home/my_user/tmp/usr/bin"
```

To add only a shell-specific directory to `PATH`, issue:

```
$ PATH="${PATH}:/home/my_user/tmp/usr/bin"
```

## Examples

The following section lists a number of common environment variables used by a Linux system and describes their values.

- `XDG_CURRENT_DESKTOP` is a [freedesktop.org](https://wiki.archlinux.org/title/Freedesktop.org "Freedesktop.org") variable containing a colon separated list of strings that the current [desktop environment](https://wiki.archlinux.org/title/Desktop_environment "Desktop environment") identifies as [\[4\]](https://specifications.freedesktop.org/mime-apps-spec/latest/file.html). Standardized values for actively developed environments are `GNOME`, `GNOME-Flashback`, `KDE`, `LXDE`, `LXQt`, `MATE`, `TDE`, `Unity`, `XFCE`, `EDE`, `Cinnamon`, `Pantheon`, and `DDE` [\[5\]](https://specifications.freedesktop.org/menu-spec/latest/onlyshowin-registry.html).
	- Cinnamon was registered [later](https://gitlab.freedesktop.org/xdg/desktop-file-utils/-/commit/be0c630a19aa1788ef731def911770ce497d6ba3) than the rest of the desktop environments. As a result, some software may still be expecting its pre-registration value `X-CINNAMON`, such as [Qt](https://wiki.archlinux.org/title/Qt "Qt") [\[6\]](https://github.com/qt/qtbase/blob/dev/src/gui/platform/unix/qgenericunixtheme.cpp#L156).
	- `Hyprland` is informally recognized for [Hyprland](https://wiki.archlinux.org/title/Hyprland "Hyprland").
- `XDG_SESSION_DESKTOP` is similar to `XDG_CURRENT_DESKTOP`, but only permits a single string. Despite its name, [it is not standardized by freedesktop.org](https://gitlab.gnome.org/GNOME/gtk/-/issues/1224#note_270915).
- `DE` is a legacy variable indicating the *d* esktop *e* nvironment being used. There is no central documentation for what possible values are, but [xdg-utils](https://wiki.archlinux.org/title/Xdg-utils#Environment_variables "Xdg-utils") provides a reference for many desktop environments.
- `DESKTOP_SESSION` is another legacy variable, similar to `DE` but less common. It may be a path to the session's [desktop entry](https://wiki.archlinux.org/title/Desktop_entry "Desktop entry"), in `/usr/share/xsessions/` [\[7\]](https://github.com/qt/qtbase/blob/6.3/src/gui/platform/unix/qgenericunixservices.cpp#L92-L107).
- `WINDOW_MANAGER` is a variable sometimes used to *choose* the [window manager](https://wiki.archlinux.org/title/Window_manager "Window manager") to be used in a desktop environment, as opposed to the other variables here which are set by the already chosen display manager or desktop environment, for other programs to read.
- `PATH` contains a colon-separated list of directories in which your system looks for executable files. When a regular command (e.g. *ls*, *systemctl* or *pacman*) is interpreted by the shell (e.g. *bash* or *zsh*), the shell looks for an executable file with the same name as your command in the listed directories, and executes it. To run executables that are not listed in `PATH`, a relative or absolute path to the executable must be given, e.g. `./a.out` or `/bin/ls`.

**Note:** It is advised not to include the current working directory (`.`) into your `PATH` for security reasons, as it may trick the user to execute malicious commands.

- `HOME` contains the path to the home directory of the current user. This variable can be used by applications to associate configuration files and such like with the user running it.
- `PWD` contains the [path to the working directory](https://en.wikipedia.org/wiki/Pwd "wikipedia:Pwd").
- `OLDPWD` contains the path to the previous working directory, that is, the value of `PWD` before last *cd* was executed.
- `TERM` contains the type of the running *term* inal, e.g. `xterm-256color`. It is used by programs running in the terminal that wish to use terminal-specific capabilities.
- `MAIL` contains the location of incoming email. The traditional setting is `/var/spool/mail/$LOGNAME`.
- `ftp_proxy` and `http_proxy` contains FTP and HTTP proxy server, respectively:
```
ftp_proxy="ftp://192.168.0.1:21"
http_proxy="http://192.168.0.1:80"
```
- `MANPATH` contains a colon-separated list of directories in which *man* searches for the man pages.

**Note:** In `/etc/profile`, there is a comment that states "Man is much better than us at figuring this out", so this variable should generally be left unset. See [manpath(5)](https://man.archlinux.org/man/manpath.5).

- `INFODIR` contains a colon-separated list of directories in which the *info* command searches for the info pages, e.g., `/usr/share/info:/usr/local/share/info`
- `TZ` can be used to to set a time zone different to the system zone for a user. The zones listed in `/usr/share/zoneinfo/` can be used as reference, for example `TZ=":/usr/share/zoneinfo/Pacific/Fiji"`. When pointing the `TZ` variable to a zoneinfo file, it should start with a colon per [the GNU manual](https://www.gnu.org/software/libc/manual/html_node/TZ-Variable.html).

### Default programs

- `SHELL` contains the path to the user's [preferred shell](https://pubs.opengroup.org/onlinepubs/9799919799/basedefs/V1_chap08.html#tag_08_03). Note that this is not necessarily the shell that is currently running. In the event that it has no value, [Bash](https://wiki.archlinux.org/title/Bash "Bash") will automatically set this variable to the user's login shell as defined in `/etc/passwd` or to `/bin/sh` if this cannot be determined.
- `PAGER` contains command to run the program used to list the contents of files, e.g., `/bin/less`.
- `EDITOR` contains the command to run the lightweight program used for editing files, e.g., `/usr/bin/nano`. For example, you can write an interactive switch between *gedit* under [X](https://wiki.archlinux.org/title/X "X") or *nano*, in this example:
```
[ -n "$DISPLAY" ] && export EDITOR=gedit || export EDITOR=nano
```
- `VISUAL` contains command to run the full-fledged editor that is used for more demanding tasks, such as editing mail (e.g., `vi`, [vim](https://wiki.archlinux.org/title/Vim "Vim"), [emacs](https://wiki.archlinux.org/title/Emacs "Emacs") etc).
- `BROWSER` contains the path to the web browser. Helpful to set in an interactive shell configuration file so that it may be dynamically altered depending on the availability of a graphic environment, such as [X](https://wiki.archlinux.org/title/X "X"):
```
[ -n "$DISPLAY" ] && export BROWSER=firefox || export BROWSER=links
```

**Tip:** These default programs can also be set conditionally if a [Wayland compositor](https://wiki.archlinux.org/title/Wayland#Compositors "Wayland") is running by using the `WAYLAND_DISPLAY` environment variable.

## See also

- [Gentoo:Handbook:X86/Working/EnvVar](https://wiki.gentoo.org/wiki/Handbook:X86/Working/EnvVar "gentoo:Handbook:X86/Working/EnvVar")
- [Ubuntu Community Wiki - Environment Variables](https://help.ubuntu.com/community/EnvironmentVariables)