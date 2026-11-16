---
about:
  - "[[Raspberry Pi]]"
---
#howto 
# Raspberry Pi Setup and Boot Check Guide

Nov 7, 2026 · @Vladimir Sedlar

A Raspberry Pi 3, 4, 5 or Zero 2 W runs from a microSD card flashed with Raspberry Pi OS, and setup takes about 15 minutes. This guide covers flashing, first boot, and how to confirm the Pi is running.

## What you need

- Raspberry Pi and its power supply (official recommended; Pi 5 needs 5V/5A)
- microSD card, 16 GB or larger, Class 10 / A1
- A computer with an SD card reader
- For desktop use: a monitor and the right HDMI cable (Pi 4 and 5 use micro-HDMI), a keyboard, and a mouse
- Raspberry Pi Imager, free from raspberrypi.com/software

## Flash the OS

Set the Wi-Fi, username and SSH options in Imager before writing the card, so the Pi connects on first boot with no extra steps.

1. Insert the SD card into your computer and open Raspberry Pi Imager.
2. Choose your Pi model, then **Raspberry Pi OS (64-bit)**. Pick the Lite version if you don't need a desktop.
3. Select your SD card as the storage target.
4. When asked, open the customization settings and set:
   - a hostname (for example `mypi`)
   - a username and password
   - your Wi-Fi name, password, and country
   - SSH enabled, if you want remote access
5. Write the card and wait for the write and verify to finish.
6. Eject the card and put it in the Pi.

## Boot and check that it is running

Plug in power last. A flickering green LED means the Pi is reading the SD card, and first boot takes 1 to 3 minutes.

| Indicator | Healthy | Problem |
| --- | --- | --- |
| Red LED (power) | Solid on | Off or flickering: weak or faulty power supply |
| Green LED (activity) | Irregular flicker during boot | Never blinks: no bootable card found. Re-seat or re-flash the card |
| Green LED pattern | Irregular flicker | Repeating pattern (such as 4 long, 4 short): boot error, usually a bad or missing boot file. Re-flash the card |
| Screen (if connected) | Rainbow splash, boot text, then desktop or login prompt | Black for over 2 minutes with green LED flickering: try the other HDMI port or a different cable |

On a Pi 5, a single status LED near the USB-C port shows power (red) and activity (green). The screen may reboot once on first boot while it resizes the filesystem, which is normal.

## Connect without a monitor (headless)

Wait 2 to 3 minutes after powering on, then test from your computer using the hostname you set in Imager.

1. Check that the Pi is on your network:

```
ping mypi.local
```

2. If it replies, connect over SSH:

```
ssh yourusername@mypi.local
```

3. If the name does not resolve, open your router's admin page, find the device with your hostname in the connected devices list, and use its IP address instead:

```
ssh yourusername@192.168.1.50
```

The IP address above is only an example; use the one your router shows.

## Troubleshooting

Most failures trace back to power, the SD card, or a Wi-Fi typo.

| Symptom | Likely cause | Fix |
| --- | --- | --- |
| Red LED off or flickering | Weak power supply or cable | Use the official supply (5V/5A for Pi 5) |
| Green LED never blinks | No bootable SD card | Re-seat the card, or re-flash it |
| Repeating green blink pattern | Bad or missing boot files | Re-flash the card |
| Black screen, green LED flickering | Wrong HDMI port or cable | Use the HDMI port nearest the USB-C power port |
| Not on the network | Wi-Fi name, password or country entered wrongly | Re-flash with corrected settings, and confirm your Wi-Fi band suits your model |
| `ping mypi.local` fails | Hostname not resolving | Find the IP address in your router's device list |
| Still unreachable | Wi-Fi problem | Try an Ethernet cable to rule Wi-Fi out |

## After setup

Once the Pi is running, update it and then adjust settings to suit your project.

1. Update the system and reboot:

```
sudo apt update && sudo apt full-upgrade -y
sudo reboot
```

2. Run `sudo raspi-config` to change locale and time zone, or to enable VNC, I2C, or SPI.
3. For a Pi 5 or heavy use, add active cooling and consider booting from an SSD.
