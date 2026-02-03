---
category:
  - "[[Documentation]]"
about:
  - "[[Docker Desktop]]"
---

#doc/docker-desktop

> **Docker Desktop terms**
>
> Commercial use of Docker Desktop in larger enterprises (more than 250
> employees OR more than $10 million USD in annual revenue) requires a [paid
> subscription](https://www.docker.com/pricing/).

This page contains information on how to install, launch and upgrade Docker Desktop on an Arch-based distribution. 

## Prerequisites

To install Docker Desktop successfully, you must meet the [general system requirements](/desktop/setup/install/linux/#general-system-requirements).

## Install Docker Desktop

1. [Install the Docker client binary on Linux](/engine/install/binaries/#install-daemon-and-client-binaries-on-linux). Static binaries for the Docker client are available for Linux as `docker`. You can use:

   ```console
   $ wget https://download.docker.com/linux/static/stable/x86_64/docker-29.1.5.tgz -qO- | tar xvfz - docker/docker --strip-components=1
   $ sudo cp -rp ./docker /usr/local/bin/ && rm -r ./docker
   ```

2. Download the latest Arch package from the [Release notes](/desktop/release-notes/).

3. Install the package:

   ```console
   $ sudo pacman -U ./docker-desktop-x86_64.pkg.tar.zst
   ```

   By default, Docker Desktop is installed at `/opt/docker-desktop`.

## Launch Docker Desktop



To start Docker Desktop for Linux:

1. Navigate to the Docker Desktop application in your Gnome/KDE Desktop.

2. Select **Docker Desktop** to start Docker.

   The Docker Subscription Service Agreement displays.

3. Select **Accept** to continue. Docker Desktop starts after you accept the terms.

   Note that Docker Desktop won't run if you do not agree to the terms. You can choose to accept the terms at a later date by opening Docker Desktop.

   For more information, see [Docker Desktop Subscription Service Agreement](https://www.docker.com/legal/docker-subscription-service-agreement). It is recommended that you also read the [FAQs](https://www.docker.com/pricing/faq).

Alternatively, open a terminal and run:

```console
$ systemctl --user start docker-desktop
```

When Docker Desktop starts, it creates a dedicated [context](/engine/context/working-with-contexts) that the Docker CLI
can use as a target and sets it as the current context in use. This is to avoid
a clash with a local Docker Engine that may be running on the Linux host and
using the default context. On shutdown, Docker Desktop resets the current
context to the previous one.

The Docker Desktop installer updates Docker Compose and the Docker CLI binaries
on the host. It installs Docker Compose V2 and gives users the choice to
link it as docker-compose from the Settings panel. Docker Desktop installs
the new Docker CLI binary that includes cloud-integration capabilities in `/usr/local/bin/com.docker.cli`
and creates a symlink to the classic Docker CLI at `/usr/local/bin`.

After you’ve successfully installed Docker Desktop, you can check the versions
of these binaries by running the following commands:

```console
$ docker compose version
Docker Compose version v2.39.4

$ docker --version
Docker version 28.4.0, build d8eb465

$ docker version
Client:
 Version:           28.4.0
 API version:       1.51
 Go version:        go1.24.7
<...>
```

To enable Docker Desktop to start on sign in, from the Docker menu, select
**Settings** > **General** > **Start Docker Desktop when you sign in to your computer**.

Alternatively, open a terminal and run:

```console
$ systemctl --user enable docker-desktop
```

To stop Docker Desktop, select the Docker menu icon to open the Docker menu and select **Quit Docker Desktop**.

Alternatively, open a terminal and run:

```console
$ systemctl --user stop docker-desktop
```


## Next steps

- Explore [Docker's subscriptions](https://www.docker.com/pricing/) to see what Docker can offer you.
- Take a look at the [Docker workshop](/get-started/workshop/) to learn how to build an image and run it as a containerized application.
- [Explore Docker Desktop](/desktop/use-desktop/) and all its features.
- [Troubleshooting](/desktop/troubleshoot-and-support/troubleshoot/) describes common problems, workarounds, how to run and submit diagnostics, and submit issues.
- [FAQs](/desktop/troubleshoot-and-support/faqs/general/) provide answers to frequently asked questions.
- [Release notes](/desktop/release-notes/) lists component updates, new features, and improvements associated with Docker Desktop releases.
- [Back up and restore data](/desktop/settings-and-maintenance/backup-and-restore/) provides instructions
  on backing up and restoring data related to Docker.

