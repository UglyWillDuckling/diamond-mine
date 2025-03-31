---
source: https://linuxconfig.org/how-to-disable-blacklist-nouveau-nvidia-driver-on-ubuntu-20-04-focal-fossa-linux
author:
  - "[[LinuxConfig]]"
published: 2019-12-22
created: 2025-03-31
tags:
  - howto/dev/linux
---
The objective is to disable the default Nouveau kernel driver on [Ubuntu 20.04](https://linuxconfig.org/ubuntu-20-04-guide) Focal Fossa Linux Desktop.

**In this tutorial you will learn:**

- How to blacklist Nouveau nvidia driver
- How to update kernel initramfs
[![How to disable/blacklist Nouveau nvidia driver on Ubuntu 20.04 Focal Fossa Linux](https://linuxconfig.org/wp-content/uploads/2019/12/01-how-to-disable-nouveau-nvidia-driver-on-ubuntu-20-04-focal-fossa-linux.avif)](https://linuxconfig.org/wp-content/uploads/2019/12/01-how-to-disable-nouveau-nvidia-driver-on-ubuntu-20-04-focal-fossa-linux.avif "How to disable/blacklist Nouveau nvidia driver on Ubuntu 20.04 Focal Fossa Linux") How to disable/blacklist Nouveau nvidia driver on Ubuntu 20.04 Focal Fossa Linux

## Software Requirements and Conventions Used

| Category | Requirements, Conventions or Software Version Used |
| --- | --- |
| System | Installed or [upgraded Ubuntu 20.04 Focal Fossa](https://linuxconfig.org/how-to-upgrade-ubuntu-to-20-04-lts-focal-fossa) |
| Software | N/A |
| Other | Privileged access to your Linux system as root or via the `sudo` command. |
| Conventions | **#** – requires given [linux commands](https://linuxconfig.org/linux-commands) to be executed with root privileges either directly as a root user or by use of `sudo` command   **$** – requires given [linux commands](https://linuxconfig.org/linux-commands) to be executed as a regular non-privileged user |

## Disable/blacklist Nouveau nvidia driver on Ubuntu 20.04 step by step instructions

1. First step is to Blacklist Nvidia nouveau driver. [Open up terminal](https://linuxconfig.org/shortcuts-to-access-terminal-on-ubuntu-20-04-focal-fossa) and enter the following commands:
	```
	$ sudo bash -c "echo blacklist nouveau > /etc/modprobe.d/blacklist-nvidia-nouveau.conf"
	$ sudo bash -c "echo options nouveau modeset=0 >> /etc/modprobe.d/blacklist-nvidia-nouveau.conf"
	```
2. Confirm the content of the newly created modeprobe file `blacklist-nvidia-nouveau.conf`:
	```
	$ cat /etc/modprobe.d/blacklist-nvidia-nouveau.conf
	blacklist nouveau
	options nouveau modeset=0
	```
3. Enter the following Linux command to update kernel `initramfs`:
	```
	$ sudo update-initramfs -u
	```

---

---

6. Last step is to reboot your system:
	```
	$ sudo reboot
	```

---