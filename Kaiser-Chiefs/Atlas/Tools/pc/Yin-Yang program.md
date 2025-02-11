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

- [ ] remind me (@2025-03-03)

Auto Night-mode for Linux, it supports popular Desktops like KDE, GNOME, Budgie and also themes your favourite editors like VSCode or Atom.

You might also want to take a look at our [**discussions page**](https://github.com/oskarsh/Yin-Yang/discussions), where we talk about the future of the app and other cool stuff!

[![Visualization](https://github.com/oskarsh/Yin-Yang/raw/master/.github/images/header.png)](https://github.com/oskarsh/Yin-Yang/blob/master/.github/images/header.png) [![App configuration](https://github.com/oskarsh/Yin-Yang/raw/master/.github/images/settings.png)](https://github.com/oskarsh/Yin-Yang/blob/master/.github/images/settings.png)

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

[![Generic badge](https://camo.githubusercontent.com/0e03e8aa70bd498c7b546afbe84a948ddffa082d90d4db4984bd94b717ddda35/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f56697369742d57696b692d424c55452e737667)](https://github.com/oskarsh/Yin-Yang/wiki)

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

[![](https://camo.githubusercontent.com/ae6feb0bb19c500b409230017fd1e726e359711ac2c6ae1166efb185f0b6c6c7/68747470733a2f2f6f70656e636f6c6c6563746976652e636f6d2f59696e2d59616e672f636f6e7472696275746f72732e7376673f627574746f6e3d66616c7365)](https://github.com/oskarsh/Yin-Yang/graphs/contributors)

### Donate

[![](https://camo.githubusercontent.com/1062f1aa9e4f9626ea1bf3c2406f1ed697d147c4a0a57f6a2db9c9d7b2a4c347/68747470733a2f2f6f70656e636f6c6c6563746976652e636f6d2f59696e2d59616e672f6f7267616e697a6174696f6e2f302f6176617461722e737667)](https://opencollective.com/Yin-Yang/organization/0/website) [![](https://camo.githubusercontent.com/58e68c750ad8f6578529c855f83fdb6923404ab916ddbf1ed1134d319c2b28ba/68747470733a2f2f6f70656e636f6c6c6563746976652e636f6d2f59696e2d59616e672f6f7267616e697a6174696f6e2f312f6176617461722e737667)](https://opencollective.com/Yin-Yang/organization/1/website) [![](https://camo.githubusercontent.com/f24d1c2cdc4fc305445ccb541a45f5d12f333c52c1d650e2f7c9262aca7f9a08/68747470733a2f2f6f70656e636f6c6c6563746976652e636f6d2f59696e2d59616e672f6f7267616e697a6174696f6e2f322f6176617461722e737667)](https://opencollective.com/Yin-Yang/organization/2/website) [![](https://camo.githubusercontent.com/878fab8e86eb9345ad6ec1b9625a58e6b43e3eb1e324ad9fb026a06441e22d60/68747470733a2f2f6f70656e636f6c6c6563746976652e636f6d2f59696e2d59616e672f6f7267616e697a6174696f6e2f332f6176617461722e737667)](https://opencollective.com/Yin-Yang/organization/3/website) [![](https://camo.githubusercontent.com/cb4ec1c09823f5651a5430ec427fe83dba768c7c3e801432d0b1503d0073b5d0/68747470733a2f2f6f70656e636f6c6c6563746976652e636f6d2f59696e2d59616e672f6f7267616e697a6174696f6e2f342f6176617461722e737667)](https://opencollective.com/Yin-Yang/organization/4/website) [![](https://camo.githubusercontent.com/075fdcae3fe3722470d27e2f73b96ba4331cc2c3f594fe8adbe8ca01e8ca2817/68747470733a2f2f6f70656e636f6c6c6563746976652e636f6d2f59696e2d59616e672f6f7267616e697a6174696f6e2f352f6176617461722e737667)](https://opencollective.com/Yin-Yang/organization/5/website) [![](https://camo.githubusercontent.com/98926f6413b1edd2c4651cd0028eaf7eeb36998a3e8745c84411839795ff3ad0/68747470733a2f2f6f70656e636f6c6c6563746976652e636f6d2f59696e2d59616e672f6f7267616e697a6174696f6e2f362f6176617461722e737667)](https://opencollective.com/Yin-Yang/organization/6/website) [![](https://camo.githubusercontent.com/7349f25ccaf262ecc909330a03421a65874a5c65fe58e5f85689eb9fa47543d3/68747470733a2f2f6f70656e636f6c6c6563746976652e636f6d2f59696e2d59616e672f6f7267616e697a6174696f6e2f372f6176617461722e737667)](https://opencollective.com/Yin-Yang/organization/7/website) [![](https://camo.githubusercontent.com/2b78541835dbe019fd2fb85672502e6bccfe451bbf832fd8b1d46325bb059181/68747470733a2f2f6f70656e636f6c6c6563746976652e636f6d2f59696e2d59616e672f6f7267616e697a6174696f6e2f382f6176617461722e737667)](https://opencollective.com/Yin-Yang/organization/8/website) [![](https://camo.githubusercontent.com/31eb292bb8172904f245825047648311816ea5fb63e762ea4fd871dcd8c29108/68747470733a2f2f6f70656e636f6c6c6563746976652e636f6d2f59696e2d59616e672f6f7267616e697a6174696f6e2f392f6176617461722e737667)](https://opencollective.com/Yin-Yang/organization/9/website)