---
about:
  - "[[Raspberry Pi]]"
tags:
  - howto
---
A first-time setup for a Raspberry Pi running Raspberry Pi OS, with or without a monitor.

## 1. Gather your hardware

- Raspberry Pi board
- microSD card (16 GB or larger, A1/Class 10)
- microSD card reader for your computer
- Power supply (official USB-C: **27W for Pi 5**, **15W for Pi 4**)
- *For a desktop setup:* monitor, keyboard, mouse, and an HDMI cable (Pi 4 and 5 use micro-HDMI)
- Case (optional but recommended)

## 2. Install Raspberry Pi Imager

On your Windows, Mac, or Linux computer, download **Raspberry Pi Imager** from [raspberrypi.com/software](https://www.raspberrypi.com/software/) and install it. This free tool writes the operating system to your microSD card.

## 3. Flash the OS to the card

1. Put the microSD card in your reader and open Imager.
2. Choose your **Pi model**.
3. Choose the **OS**: Raspberry Pi OS (64-bit) is the best default.
4. Choose your **storage** (the microSD card).
5. When prompted for OS customisation, set:
   - Hostname
   - Username and password
   - Wi-Fi details
   - Enable **SSH**
6. Write the image and wait for it to finish.

> Setting these options in Imager lets you skip the monitor entirely if you want.

## 4. Boot the Pi

1. Insert the flashed card into the Pi's microSD slot.
2. Connect your monitor, keyboard, and mouse if you're using them.
3. Plug in the power supply **last**.

The first boot can take a minute or two. A flickering green LED means it's reading the card.

## 5. Finish first-time setup

**With a monitor:** you'll land on the desktop and a welcome wizard will walk you through country, language, and Wi-Fi.

**Without a monitor (headless):** wait a couple of minutes, then connect from your computer's terminal:

```bash
ssh yourusername@yourhostname.local
```

Use the username and hostname you entered in Imager.

## 6. Update the system

Open a terminal on the Pi and run:

```bash
sudo apt update && sudo apt full-upgrade -y
sudo reboot
```

This makes sure you have the latest security patches and firmware.

## 7. Tweak settings as needed

```bash
sudo raspi-config
```

Use it to enable things like:

- **VNC** (remote desktop)
- **I2C / SPI** (for sensors and add-on boards)
- Boot options

After that, you're ready to install software or start a project.


___


Setting up a Pi without a monitor is called a "headless" setup. You configure everything while writing the SD card, then control the Pi from your own computer over your network.

1. **Configure during flashing.** In Raspberry Pi Imager, choose your Pi model, OS, and card. When it asks about OS customisation, set:
   - a hostname (for example `mypi`)
   - a username and password
   - your Wi-Fi name, password, and country
   - SSH enabled, with password authentication

   Skip the Wi-Fi settings if you'll connect the Pi to your router with an Ethernet cable.

2. **Boot and wait.** Insert the card, plug in the power, and give it 2 to 3 minutes. The first boot is slower than later ones because it expands the filesystem and applies your settings.

3. **Find the Pi on your network.** Your computer must be on the same network. Try:
   ```bash
   ping mypi.local
   ```
   If that fails, open your router's admin page and look for the Pi in the connected devices list to get its IP address. On Windows 10/11 and macOS the `.local` name usually works, but on Linux it needs the `avahi` service.

4. **Connect with SSH.** Open a terminal (Terminal on Mac/Linux, PowerShell on Windows):
   ```bash
   ssh yourusername@mypi.local
   ```
   If you only have the IP address, use `ssh yourusername@192.168.1.50` instead. Type `yes` when asked about the fingerprint, then enter your password. When you see the Pi's prompt, you're in.

5. **Update it.**
   ```bash
   sudo apt update && sudo apt full-upgrade -y
   sudo reboot
   ```
   The SSH session will drop during the reboot. Wait a minute and reconnect.

6. **Optional: get a remote desktop.** If you want the graphical desktop, run `sudo raspi-config`, then go to Interface Options and enable VNC. Then connect with RealVNC Viewer from your computer. You can also use Raspberry Pi Connect, which gives you remote access from a web browser.

**If the Pi never shows up:**
- The most common cause is a typo in the Wi-Fi password or the wrong country code. Reflash the card and re-enter them carefully.
- The Pi Zero W and original Zero 2 W only use 2.4 GHz Wi-Fi, so make sure your network offers it.
- Plugging in an Ethernet cable is the easiest way to rule out Wi-Fi problems.
- Check that the green LED flickers after power-up. If it doesn't, the card may not be flashed correctly.