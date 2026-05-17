---
source: https://www.jr-it-services.de/vivaldi-browser-on-arch-linux-with-hyprland-and-wayland-fixing-flickering-on-nvidia-3080/
author:
  - "[[Johannes Rest]]"
published: 2025-01-25
created: 2026-04-12
tags:
  - howto/vivaldi
category:
  - "[[How To]]"
  - "[[Browsers]]"
about:
  - "[[Vivaldi Browser]]"
---
Using the Vivaldi browser on Arch Linux with a Wayland compositor like Hyprland can be an adventure, especially if you’re using an NVIDIA GPU. As someone running a NVIDIA 3080, I’ve spent countless hours troubleshooting flickering issues when trying to get Vivaldi running smoothly. Finally, after a lot of trial and error, I found the perfect combination of launch parameters to eliminate the flickering and achieve a buttery-smooth browsing experience. Here’s how you can do it too.

## The Problem

When running Vivaldi with Wayland on Hyprland, flickering is a common issue for NVIDIA users. This is largely due to the way Vivaldi handles rendering and interacts with the Wayland display server. By default, Vivaldi may fall back to XWayland or misconfigure hardware acceleration, causing visual artifacts and stuttering.

## The Solution: Correct Launch Parameters

To fix this, you need to launch Vivaldi with specific flags that ensure it runs natively on Wayland and properly utilizes the NVIDIA GPU. Here are the parameters:

```bash
vivaldi --ozone-platform=wayland \
        --enable-features=UseOzonePlatform \
        --use-cmd-decoder=validating \
        --use-gl=desktop
```

### What These Flags Do

1. `**--ozone-platform=wayland**`: This forces Vivaldi to use the Wayland platform instead of XWayland.
2. `**--enable-features=UseOzonePlatform**`: Enables the Ozone platform, which is required for proper Wayland support in Chromium-based browsers like Vivaldi.
3. `**--use-cmd-decoder=validating**`: Ensures that command decoding is handled correctly, reducing rendering glitches.
4. `**--use-gl=desktop**`: Tells Vivaldi to use the native OpenGL implementation provided by your NVIDIA drivers, which optimizes hardware acceleration.

### Setting the Flags Permanently

To avoid typing these parameters every time, you can create a custom desktop entry for Vivaldi:

1. Edit the existing Vivaldi desktop entry:`sudo nano /usr/share/applications/vivaldi.desktop`
2. Locate the `Exec` line and modify it to include the parameters:
	 `Exec=/usr/bin/vivaldi --ozone-platform=wayland --enable-features=UseOzonePlatform --use-cmd-decoder=validating --use-gl=desktop %U`
3. Save and exit the file.

Alternatively, if you’re launching Vivaldi from the terminal, you can add an alias in your shell configuration file (e.g., `~/.bashrc` or `~/.zshrc`):

```
alias vivaldi='vivaldi --ozone-platform=wayland --enable-features=UseOzonePlatform --use-cmd-decoder=validating --use-gl=desktop'
```

## Additional Tips for Hyprland and NVIDIA

1. **Ensure NVIDIA Wayland Support**: Install the required drivers and dependencies for NVIDIA Wayland support. On Arch Linux, this typically means installing:`sudo pacman -S nvidia nvidia-utils`. Ensure that the `nvidia-drm.modeset=1` kernel parameter is set in your bootloader configuration.
2. **Configure Hyprland for NVIDIA**: In your Hyprland configuration file, ensure that hardware acceleration is enabled and set up correctly for NVIDIA. For example:`exec = env __GLX_VENDOR_LIBRARY_NAME=nvidia __GL_VRR_ALLOWED=0 /usr/bin/vivaldi`
3. **Enable Wayland in Vivaldi Settings**: Make sure to enable hardware acceleration in the Vivaldi settings (`vivaldi://settings`) for the best performance.

## Summary

Getting Vivaldi to run smoothly on Arch Linux with Hyprland and a Wayland setup using an NVIDIA 3080 is possible, but it takes some fine-tuning. The key is using the right launch parameters:

```
vivaldi --ozone-platform=wayland --enable-features=UseOzonePlatform --use-cmd-decoder=validating --use-gl=desktop
```

With these settings, you can enjoy a flicker-free browsing experience while leveraging the full potential of your NVIDIA GPU. By making these changes, I’ve transformed my Vivaldi experience, and I hope this guide helps you do the same. If you’ve been struggling with similar issues, give this a try—it’s a game-changer

Views: 1513