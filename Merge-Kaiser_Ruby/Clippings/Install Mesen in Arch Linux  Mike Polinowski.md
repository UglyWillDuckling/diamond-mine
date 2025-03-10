---
source: "https://mpolinowski.github.io/docs/DevOps/Linux/2021-10-24--arch-linux-install-mesen/2021-10-24/"
author:
published:
created: 2025-03-10
tags:
---
![Shenzhen, China](https://mpolinowski.github.io/assets/images/photo-kt443t6d_64hdh43hfh6dgjdfhg4_d-bdb08691301ecbfc0de5c0bac3e0f0be.jpg)

- [Emulation](https://mpolinowski.github.io/docs/DevOps/Linux/2021-10-24--arch-linux-install-mesen/2021-10-24/#emulation)
- [Installing dependencies](https://mpolinowski.github.io/docs/DevOps/Linux/2021-10-24--arch-linux-install-mesen/2021-10-24/#installing-dependencies)
- [Installing Mesen](https://mpolinowski.github.io/docs/DevOps/Linux/2021-10-24--arch-linux-install-mesen/2021-10-24/#installing-mesen)
- [Installing Mesen](https://mpolinowski.github.io/docs/DevOps/Linux/2021-10-24--arch-linux-install-mesen/2021-10-24/#installing-mesen-1)

> [Mesen](https://aur.archlinux.org/packages/mesen) is a high-accuracy **NES emulator** for Windows and Linux. It offers numerous features, such as save states, video filters, netplay, rewinding, overclocking, cheat codes and HD packs.

> [Mesen-S](https://aur.archlinux.org/packages/mesen-s/) is a high-accuracy **SNES emulator** for Windows and Linux. **Game Boy** and **Game Boy Color** games are also supported, along with **Super Game Boy** emulation.

```prism
pacman -Syu
pacman -S mono mono-msbuild sdl2 clang gendesk zip
```

Start by downloading and upacking a snapshot from the [Arch Linux Repository](https://aur.archlinux.org/packages/mesen):

```prism
wget https://aur.archlinux.org/cgit/aur.git/snapshot/mesen.tar.gz
tar -xvzf mesen.tar.gz && cd mesen
```

Run the following command to execute the PKGBUILD script:

```prism
makepkg
```

Now install the build package with Pacman:

```prism
sudo pacman -U mesen-0.9.9-2-x86_64.pkg.tar.zst
```

Start by downloading and upacking a snapshot from the [Arch Linux Repository](https://aur.archlinux.org/packages/mesen-s/):

```prism
wget https://aur.archlinux.org/cgit/aur.git/snapshot/mesen-s.tar.gz
tar -xvzf mesen-s.tar.gz && cd mesen-s
```

Run the following command to execute the PKGBUILD script:

```prism
makepkg
```

Now install the build package with Pacman:

```prism
sudo pacman -U mesen-s-0.4.0-1-x86_64.pkg.tar.zst
```