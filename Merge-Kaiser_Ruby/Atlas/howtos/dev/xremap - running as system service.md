---
source: https://github.com/xremap/xremap/blob/master/doc/running_as_system_service.md
author:
  - "[[xremap]]"
created: 2026-04-14
tags:
  - howto/xremap
about:
  - "[[xremap]]"
---
Ensure xremap is installed in `/usr/bin/xremap`, or use the right path below.

Ensure module for creating output devices is loaded. See instructions elsewhere.

### Pro

- It's the most secure way to run `xremap`.
- `xremap` is started automatically when your computer boots, and restarts xremap if it fails.

### Con

- A drawback is that the same config file is used for all users.
- The config file is inconvenient to modify because it's owned by the xremap user.
- If you launch programs from xremap they will run as the `xremap` user. Not your own normal user. Except if you use the `socket` feature, see below.
- If you want to use application-specific remappings it's only possible with the `socket` feature, see below.

## Create a system user named xremap

```sh
sudo useradd --no-create-home --shell /bin/false --user-group --groups input --system xremap
```

Note: The `xremap` user should only be used for this one purpose, to preserve security separation. Do not add your own user to the `xremap` group either for the same reason.

## Place your config file a central location

Create a folder for configuration:

```sh
sudo mkdir -p /etc/xremap
```

Copy your config file to `/etc/xremap/config.yml`

Change the ownership of the file:

```sh
sudo chown xremap:xremap /etc/xremap/config.yml
sudo chmod 644 /etc/xremap/config.yml
```

## Create groups for socket feature (Optional)

The `socket` variant of xremap lets you use application-specific remappings.

```sh
# Add a group for each user that will use xremap.
sudo groupadd --system xremap-username1
sudo groupadd --system xremap-username2

# Add each user to its respective group
sudo usermod --append --groups xremap-username1 username1re running a tagged release (which you very likely are, you can check with `hyprctl version`).

## Wayland info (especially useful for Xorg users) [](https://wiki.hypr.land/#wayland-info-especially-useful-for-xorg-users)

A Wayland compositor is a fully autonomous Display Server, like Xorg itself. It is **not** possible to mix’n’match Wayland compositors like you could on Xorg with window managers and compositors. It is also not entirely possible, nor recommended, to try and use all Xorg applications on Wayland. See [this page](https://wiki.hypr.land/Useful-Utilities/) for a list of recommended Wayland native/compatible programs.

Wayland **compositors** should not be confused with Xorg **window managers**.
sudo usermod --append --groups xremap-username2 username2
```

Note: You will have to restart for the new groups to take effect.

Note: xremap will be enabled for all users, even those that don't have a `xremap-username` group, but application-specific remapping will only work for users with a corresponding `xremap-username` group.

## Create service file

Create a service file here: `/etc/systemd/system/xremap.service`

```bash
[Unit]
Description=Xremap
After=default.target

[Service]
ExecStart=/usr/bin/xremap --watch=device /etc/xremap/config.yml
Restart=always
StandardOutput=journal
StandardError=journal
User=xremap
Group=xremap
SupplementaryGroups=input
RuntimeDirectory=xremap
RuntimeDirectoryMode=0755
RuntimeDirectoryPreserve=yes
Environment=RUST_LOG=warn # The default logging level

# Uncomment the following lines for the socket variant.
# Remember to enter the right username and their corresponding uid.
# To get the uid of the current user run "id" in the terminal, and \`sudo -u username id\` for other users.
#ExecStartPre=install --directory --mode 2770 --owner xremap --group xremap-username1 /run/xremap/uid
#SupplementaryGroups=xremap-username1
#ExecStartPre=install --directory --mode 2770 --owner xremap --group xremap-username2 /run/xremap/uid
#SupplementaryGroups=xremap-username2

[Install]
WantedBy=default.target
```

Adapt the arguments to `xremap` in `ExecStart`.

Start the service

```
sudo systemctl start xremap.service
```

If you change the service file `xremap.service` you need to restart the service:

```
sudo systemctl daemon-reload
sudo systemctl restart xremap.service
```

You can see status and logs with the following commands:

```
sudo systemctl status xremap.service
sudo journalctl -fu xremap.service
```

## Autostart xremap at boot:

Run this command once:

```
sudo systemctl enable xremap.service
```

## Application-specific remappings (socket feature)

To use this feature you must choose the right variant of xremap for the system service. On the [Releases page](https://github.com/xremap/xremap/releases) choose a version with a name like `xremap-linux-x86_64-socket.zip`. This binary will connect to another instance of xremap, which runs as your normal user. Below are instructions for the second xremap instance:

### GNOME

Ensure you are using xremap v0.14.10 or later.

The GNOME extension serves as the second instance of xremap.

Install GNOME extension version 12, or later.

In case the GNOME extension is started before the service, you must login again for the GNOME extension to work.

The GNOME extension is configured to use `/run/xremap/{uid}/xremap.sock` by default. The socket path can be changed with environment variables: set `XREMAP_SOCKET` in *xremap.service*. For the GNOME extension, set `XREMAP_GNOME_SOCKET` in `~/.config/environment.d/99-xremap.conf` or `/etc/environment.d/90-xremap.conf`.

### Other desktops than GNOME

Ensure you are using xremap v0.15.1 or later.

The second instance of xremap must match your desktop environment. So you can't avoid having two binaries. Start it by:

```
xremap --bridge
```

The only argument that `xremap` can take in bridge-mode is `xremap --bridge --no_window_logging`.

You can run the bridge as a user service or autostart file, see this as inspiration [Running as a user service](https://github.com/xremap/xremap/blob/master/doc/running_as_user_service.md).

The bridge only supports the default socket path: `/run/xremap/{uid}/xremap.sock`.

### How the socket feature works

When the `xremap.service` starts the `socket` variant of xremap it will function as the following:

`xremap.service` creates a folder for the chosen users, e.g. `/run/xremap/1000`. This folder is only accessible to `xremap.service` and that user. When the user starts the GNOME extension or the bridge will the socket be created in the right folder, and `xremap.service` can connect to this socket.

`xremap.service` monitors the active user to make sure it gets information from the right user, and launches commands as the right user (i.e. the user that controls the input devices).

Note: The service must be started at least once since system boot to create the folders.