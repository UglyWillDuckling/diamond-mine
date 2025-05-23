---
source: https://github.com/oskarsh/Yin-Yang
author:
  - "[[GitHub]]"
published: 
created: 2025-02-10
tags:
  - tool
  - tool/gui
  - tool/python
  - light-dark-mode
related:
  - "[[python language]]"
  - "[[linux]]"
---
![Yin & Yang logo|50](https://github.com/oskarsh/Yin-Yang/raw/master/resources/logo.svg)

- [x] remind me (@2025-03-10)

Auto Night-mode for Linux, it supports popular Desktops like KDE, GNOME, Budgie and also themes your favourite editors like VSCode or Atom.

You might also want to take a look at our [**discussions page**](https://github.com/oskarsh/Yin-Yang/discussions), where we talk about the future of the app and other cool stuff!

[![[~/×/cec6f7bf6161fcef3d6626f83d1db07c_MD5.png|50]]](https://github.com/oskarsh/Yin-Yang/blob/master/.github/images/header.png) [![[~/×/36917da7a2890da0375f60f4d03b6497_MD5.png|50]]](https://github.com/oskarsh/Yin-Yang/blob/master/.github/images/settings.png)

## Features

**Changes your themes at certain times or sunrise and sunset**

- Supported Desktops:
- [[GNOME]]
- Budgie
- [[KDE Plasma]]
- Supported applications:
- VSCode, Atom, gedit
- Firefox & Brave
- Kvantum
- Konsole
- OnlyOffice
- and more...
- Miscellaneous:
- Wallpaper change
- Notifications on theme change
- Play a sound
- Ability to run custom scripts

> To see planned features and the development status, visit the [project status page](https://github.com/oskarsh/Yin-Yang/projects?type=classic).

## Installation

### Arch-based distributions

Yin-Yang can be downloaded from AUR as [yin-yang](https://aur.archlinux.org/packages/yin-yang) package.

### Source

Yin-Yang depends on `python-systemd` and `pyside6` from pypi. `python-systemd` requires you have installed the systemd-headers from your package manager. You also need python development headers (e.g. `python3-devel`).

For CentOS, RHEL, and Fedora:

```
sudo dnf install gcc systemd-devel python3-devel libnotify
```

For OpenSUSE:

```
sudo zypper refresh
sudo zypper install gcc systemd-devel libnotify
```

For Debian, Ubuntu, etc.

```
sudo apt update
sudo apt install libsystemd-dev gcc pkg-config python3-dev libnotify-bin
```

Then you can install Yin-Yang in a python virtual environment:

```
# bash is necessary to run the source command
bash
# Clones the code to your local machine
git clone https://github.com/oskarsh/Yin-Yang.git
cd Yin-Yang
# Installs Yin-Yang
./scripts/install.sh
```

For development, skip the install and instead create a venv in your home directory:

```
python -m venv .venv
source .venv/bin/activate  # this is for bash, there are similar scripts in the that directory for other shells like fish
pip install -r requirements.txt
```

### Uninstall

Run `scripts/uninstall.sh` from a terminal and fill out the password.

## Documentation

Want to help out? Check out the wiki to learn how to contribute translations, plugins and more!

[![[~/×/ced02616526c8d7d11a8c4549108be00_MD5.svg|50]]](https://github.com/oskarsh/Yin-Yang/wiki)

## Related or similar projects

- Auto dark mode for Windows: [https://github.com/AutoDarkMode/Windows-Auto-Night-Mode](https://github.com/AutoDarkMode/Windows-Auto-Night-Mode)
- Auto dark mode extension for GNOME: [https://extensions.gnome.org/extension/2236/night-theme-switcher/](https://extensions.gnome.org/extension/2236/night-theme-switcher/)
- Auto dark mode for Jetbrains IDEs: [https://github.com/weisJ/auto-dark-mode](https://github.com/weisJ/auto-dark-mode)
- Sync dark mode with KDEs night color: [https://github.com/adrium/knightadjuster](https://github.com/adrium/knightadjuster)
- darkman: [https://gitlab.com/WhyNotHugo/darkman](https://gitlab.com/WhyNotHugo/darkman)
- In Firefox, you can use the system theme to sync Firefox itself and supported applications with the theme of the system. When you use [dark reader](https://darkreader.org/), you can enable the system color automation.

## Thanks to all Contributors

### Code Contributors

This project exists thanks to all the people who contribute. \[[Contribute](https://github.com/oskarsh/Yin-Yang/wiki/Contributing)\].

[![[~/×/e918591c626b401a66cc66eb71a600ff_MD5.svg|50]]](https://github.com/oskarsh/Yin-Yang/graphs/contributors)

### Donate

[![[~/×/deea9e997f72f9c5457777b55065a686_MD5.svg|50]]](https://opencollective.com/Yin-Yang/organization/0/website) [![[~/×/2fca5d2373206ddeef1346525986adb9_MD5.png|50]]](https://opencollective.com/Yin-Yang/organization/1/website) [![[~/×/2fca5d2373206ddeef1346525986adb9_MD5.png|50]]](https://opencollective.com/Yin-Yang/organization/2/website) [![[~/×/2fca5d2373206ddeef1346525986adb9_MD5.png|50]]](https://opencollective.com/Yin-Yang/organization/3/website) [![[~/×/2fca5d2373206ddeef1346525986adb9_MD5.png|50]]](https://opencollective.com/Yin-Yang/organization/4/website) [![[~/×/2fca5d2373206ddeef1346525986adb9_MD5.png|50]]](https://opencollective.com/Yin-Yang/organization/5/website) [![[~/×/2fca5d2373206ddeef1346525986adb9_MD5.png|50]]](https://opencollective.com/Yin-Yang/organization/6/website) [![[~/×/2fca5d2373206ddeef1346525986adb9_MD5.png|50]]](https://opencollective.com/Yin-Yang/organization/7/website) [![[~/×/2fca5d2373206ddeef1346525986adb9_MD5.png|50]]](https://opencollective.com/Yin-Yang/organization/8/website) [![[~/×/2fca5d2373206ddeef1346525986adb9_MD5.png|50]]](https://opencollective.com/Yin-Yang/organization/9/website)