
Use [[inxi]]
___

```python
inxi -F
```

**output**

```python
System:
  Host: vsedlar-Latitude-7440 Kernel: 6.14.0-24-generic arch: x86_64 bits: 64
  Desktop: KDE Plasma v: 6.4.3 Distro: KDE neon 24.04 User Edition noble
Machine:
  Type: Laptop System: Dell product: Latitude 7440 v: N/A
    serial: <superuser required>
  Mobo: Dell model: 03P3R5 v: A03 serial: <superuser required> UEFI: Dell
    v: 1.22.0 date: 02/26/2025
Battery:
  ID-1: BAT0 charge: 43.5 Wh (100.0%) condition: 43.5/57.0 Wh (76.4%)
CPU:
  Info: 14-core (6-mt/8-st) model: 13th Gen Intel Core i7-1370P bits: 64
    type: MST AMCP cache: L2: 11.5 MiB
  Speed (MHz): avg: 898 min/max: 400/5000:5200:3900 cores: 1: 643 2: 400
    3: 771 4: 1450 5: 514 6: 835 7: 900 8: 1068 9: 547 10: 2829 11: 777 12: 1013
    13: 900 14: 824 15: 834 16: 625 17: 763 18: 745 19: 726 20: 797
Graphics:
  Device-1: Intel Raptor Lake-P [Iris Xe Graphics] driver: i915 v: kernel
  Device-2: Logitech C920 PRO HD Webcam driver: snd-usb-audio,uvcvideo
    type: USB
  Display: wayland server: X.org v: 1.21.1.11 with: Xwayland v: 24.1.6
    compositor: kwin_wayland driver: X: loaded: modesetting unloaded: fbdev,vesa
    dri: iris gpu: i915 resolution: 3072x1728
  API: EGL v: 1.5 drivers: iris,swrast
    platforms: gbm,wayland,x11,surfaceless,device
  API: OpenGL v: 4.6 compat-v: 4.5 vendor: intel mesa
    v: 24.2.8-1ubuntu1~24.04.1 renderer: Mesa Intel Graphics (RPL-P)
  API: Vulkan v: 1.3.275 drivers: N/A surfaces: xcb,xlib,wayland
Audio:
  Device-1: Intel driver: intel-ipu6
  Device-2: Intel Raptor Lake-P/U/H cAVS driver: snd_hda_intel
  Device-3: Logitech C920 PRO HD Webcam driver: snd-usb-audio,uvcvideo
    type: USB
  API: ALSA v: k6.14.0-24-generic status: kernel-api
  Server-1: PipeWire v: 1.2.6 status: active
Network:
  Device-1: Intel Raptor Lake PCH CNVi WiFi driver: iwlwifi
  IF: wlp0s20f3 state: up mac: f0:20:ff:9c:3f:06
  IF-ID-1: CloudflareWARP state: unknown speed: 10000 Mbps duplex: full
    mac: N/A
  IF-ID-2: docker0 state: down mac: fe:3e:aa:bc:11:41
Bluetooth:
  Device-1: Intel AX211 Bluetooth driver: btusb type: USB
  Report: hciconfig ID: hci0 state: up address: F0:20:FF:9C:3F:0A bt-v: 5.3
Drives:
  Local Storage: total: 476.94 GiB used: 223.22 GiB (46.8%)
  ID-1: /dev/nvme0n1 vendor: Western Digital model: PC SN740 NVMe WD 512GB
    size: 476.94 GiB
Partition:
  ID-1: / size: 464.35 GiB used: 221.84 GiB (47.8%) fs: ext4 dev: /dev/dm-1
  ID-2: /boot size: 1.61 GiB used: 1.33 GiB (82.7%) fs: ext4
    dev: /dev/nvme0n1p2
  ID-3: /boot/efi size: 511 MiB used: 49.9 MiB (9.8%) fs: vfat
    dev: /dev/nvme0n1p1
Swap:
  Alert: No swap data was found.
Sensors:
  System Temperatures: cpu: 56.0 C mobo: N/A
  Fan Speeds (rpm): N/A
Info:
  Memory: total: 32 GiB note: est. available: 30.73 GiB
    used: 12.23 GiB (39.8%)
  Processes: 628 Uptime: 4h 8m Shell: Zsh inxi: 3.3.34
```