---
source: "https://wiki.archlinux.org/title/Bluetooth#Interference_between_headphones_and_mouse"
author:
published:
created: 2026-01-11
tags:
---
[Bluetooth](https://en.wikipedia.org/wiki/Bluetooth "wikipedia:Bluetooth") is a standard for the short-range wireless interconnection of cellular phones, computers, and other electronic devices. In Linux, the canonical implementation of the Bluetooth protocol stack is [BlueZ](https://www.bluez.org/).

## Installation

1. [Install](https://wiki.archlinux.org/title/Install "Install") the [bluez](https://archlinux.org/packages/?name=bluez) package, providing the Bluetooth protocol stack.
2. [Install](https://wiki.archlinux.org/title/Install "Install") the [bluez-utils](https://archlinux.org/packages/?name=bluez-utils) package, providing the *bluetoothctl* utility. Additionally install [bluez-deprecated-tools](https://archlinux.org/packages/?name=bluez-deprecated-tools) to have the [deprecated BlueZ tools](https://wiki.archlinux.org/title/#Deprecated_BlueZ_tools) as well.
3. The generic Bluetooth driver is the `btusb` kernel module. [Check](https://wiki.archlinux.org/title/Kernel_module#Obtaining_information "Kernel module") whether that module is loaded. If it is not, then [load the module](https://wiki.archlinux.org/title/Load_the_module "Load the module").
4. [Start/enable](https://wiki.archlinux.org/title/Start/enable "Start/enable") `bluetooth.service`.

**Note**
- Some Bluetooth adapters are bundled with a Wi-Fi card (e.g. older Intel Centrino cards). These require that the Wi-Fi card is firstly enabled (typically a keyboard shortcut on a laptop) in order to make the Bluetooth adapter visible to the kernel.
- Some Bluetooth cards (e.g. Broadcom) conflict with the network adapter. Thus, you need to make sure that your Bluetooth device gets connected before the network service boot.
- Some tools such as hcitool and hciconfig have been deprecated upstream, and are no longer included in [bluez-utils](https://archlinux.org/packages/?name=bluez-utils). Since these tools will no longer be updated, it is recommended that scripts be updated to avoid using them. If you still desire to use them, install additionally [bluez-deprecated-tools](https://archlinux.org/packages/?name=bluez-deprecated-tools). See [FS#53110](https://bugs.archlinux.org/task/53110) and [the Bluez mailing list](https://lore.kernel.org/linux-bluetooth/20170104133401.3636-1-luiz.dentz@gmail.com/) for more information.
- Since [2024](https://gitlab.archlinux.org/archlinux/packaging/packages/bluez/-/commit/3dc43f553660cf4409532b8b0b3c2dc9c6e4f1a9), [bluez-obex](https://archlinux.org/packages/?name=bluez-obex) and [bluez-mesh](https://archlinux.org/packages/?name=bluez-mesh) have been separated from [bluez](https://archlinux.org/packages/?name=bluez). Therefore, if you plan to transfer files over Bluetooth, [bluez-obex](https://archlinux.org/packages/?name=bluez-obex) needs to be installed and the user service `obex.service` needs to be [enabled](https://wiki.archlinux.org/title/Enabled "Enabled").

### Front-ends

#### Console

- **bluetoothctl** — Pairing a device from the shell is one of the simplest and most reliable options.

[https://www.bluez.org/](https://www.bluez.org/) || [bluez-utils](https://archlinux.org/packages/?name=bluez-utils)

- **bluetui** — A TUI for managing Bluetooth devices.

[https://github.com/pythops/bluetui](https://github.com/pythops/bluetui) || [bluetui](https://archlinux.org/packages/?name=bluetui)

- **bluetuith** — Provides a Bluetooth manager via a Terminal User Interface for easier pairing and device/adapter management, with OBEX File Transfer and mouse support.

[https://www.github.com/darkhz/bluetuith](https://www.github.com/darkhz/bluetuith) || [bluetuith](https://aur.archlinux.org/packages/bluetuith/) <sup><small>AUR</small></sup>

- **bluez-tools** — Basic non-interactive tools covering some functionality missing in bluetoothctl, like sending files or managing bluetooth networks.

[https://github.com/khvzak/bluez-tools](https://github.com/khvzak/bluez-tools) || [bluez-tools](https://archlinux.org/packages/?name=bluez-tools)

**Tip** To automate bluetoothctl commands, use `echo -e "*command1*\n*command2*\n" | bluetoothctl` or `bluetoothctl -- *command*`.

#### Graphical

The following packages allow for a graphical interface to customize Bluetooth.

- [GNOME Bluetooth](https://wiki.gnome.org/Projects/GnomeBluetooth) — [GNOME](https://wiki.archlinux.org/title/GNOME "GNOME") 's Bluetooth tool.
	- [gnome-bluetooth-3.0](https://archlinux.org/packages/?name=gnome-bluetooth-3.0) provides the back-end ([gnome-bluetooth](https://aur.archlinux.org/packages/gnome-bluetooth/) <sup><small>AUR</small></sup> is now legacy)
	- [gnome-shell](https://archlinux.org/packages/?name=gnome-shell) provides the status monitor applet
	- [gnome-control-center](https://archlinux.org/packages/?name=gnome-control-center) provides the configuration front-end GUI that can be accessed by typing Bluetooth on the Activities overview, or with the `gnome-control-center bluetooth` command.
	- You can also launch the `bluetooth-sendto` command directly to send files to a remote device.
	- [nautilus-bluetooth](https://aur.archlinux.org/packages/nautilus-bluetooth/) <sup><small>AUR</small></sup> adds a "Send via Bluetooth" entry to Nautilus' right-click menu
	- To receive files, open the Bluetooth settings panel; you can only receive whilst the Bluetooth panel is open.
	- To add a Bluetooth entry to the *Send To* menu in Thunar's file properties menu, see instructions [here](https://docs.xfce.org/xfce/thunar/send-to). (The command that needs to be configured is `bluetooth-sendto %F`).
- **Bluedevil** — [KDE](https://wiki.archlinux.org/title/KDE "KDE") 's Bluetooth tool. If there is no Bluetooth icon visible in Dolphin and in the system tray, enable it in the system tray options or add a widget. You can configure Bluedevil and detect Bluetooth devices by clicking the icon. An interface is also available from the KDE System Settings.

[https://invent.kde.org/plasma/bluedevil](https://invent.kde.org/plasma/bluedevil) || [bluedevil](https://archlinux.org/packages/?name=bluedevil)

- **Blueberry** — Linux Mint's spin-off of GNOME Bluetooth, which works in all desktop environments. *Blueberry* does not support receiving files through Obex Object Push.

[https://github.com/linuxmint/blueberry](https://github.com/linuxmint/blueberry) || [blueberry](https://aur.archlinux.org/packages/blueberry/) <sup><small>AUR</small></sup>

- **[Blueman](https://wiki.archlinux.org/title/Blueman "Blueman")** — A full featured Bluetooth manager.

[https://github.com/blueman-project/blueman](https://github.com/blueman-project/blueman) || [blueman](https://archlinux.org/packages/?name=blueman)

- **[ObexFTP](https://wiki.archlinux.org/title/ObexFTP "ObexFTP")** — A tool for transferring files to/from any OBEX enabled device.

[http://dev.zuckschwerdt.org/openobex/wiki/ObexFtp](http://dev.zuckschwerdt.org/openobex/wiki/ObexFtp) || [obexftp](https://aur.archlinux.org/packages/obexftp/) <sup><small>AUR</small></sup>

- **Overskride** — A simple yet powerful Bluetooth client.

[https://github.com/kaii-lb/overskride#overskride](https://github.com/kaii-lb/overskride#overskride) || [overskride](https://aur.archlinux.org/packages/overskride/) <sup><small>AUR</small></sup>

- **btctl** — A simple Bluetooth connection manager for [fuzzel](https://archlinux.org/packages/?name=fuzzel) and other launchers.

[https://codeberg.org/kupospelov/btctl](https://codeberg.org/kupospelov/btctl) || [btctl](https://aur.archlinux.org/packages/btctl/) <sup><small>AUR</small></sup>

## Pairing

**Note** Before using the Bluetooth device, make sure that it is not blocked by [rfkill](https://wiki.archlinux.org/title/Rfkill "Rfkill").

This section describes directly configuring *bluez* via the [bluetoothctl(1)](https://man.archlinux.org/man/bluetoothctl.1) command line tool, which might not be necessary if you are using an alternative front-end tool (such as GNOME Bluetooth).

The exact procedure depends on the devices involved and their input functionality. What follows is a general outline of pairing a device using *bluetoothctl*.

Start the `bluetoothctl` interactive command. Input `help` to get a list of available commands.

1. (optional) Select a default controller with `select *MAC_address*`.
2. (optional) Enter `power on` to turn the power to the controller on if the device is set to off. It is on by default; see [#Default adapter power state](https://wiki.archlinux.org/title/#Default_adapter_power_state).
3. Enter `devices` to get the MAC address of the device with which to pair.
4. Enter device discovery mode with `scan on` command if device is not yet on the list.
5. Turn the agent on with `agent on` or choose a specific agent: if you press tab twice after `agent` you should see a list of available agents. A Bluetooth agent is what manages the Bluetooth 'pairing code'. It can either respond to a 'pairing code' coming in, or can send one out. The `default-agent` should be appropriate in most cases.[\[1\]](https://askubuntu.com/questions/763939/bluetoothctl-what-is-a-bluetooth-agent)
6. Enter `pair *MAC_address*` to do the pairing (tab completion works).
7. If using a device without a PIN, one may need to manually trust the device before it can reconnect successfully. Enter `trust *MAC_address*` to do so.
8. Enter `connect *MAC_address*` to establish a connection.

An example session may look this way:

```
$ bluetoothctl
```
```
[NEW] Controller 00:10:20:30:40:50 hostname [default]
[bluetooth]# agent KeyboardOnly
Agent registered

[bluetooth]# default-agent
Default agent request successful

[bluetooth]# power on
Changing power on succeeded
[CHG] Controller 00:10:20:30:40:50 Powered: yes

[bluetooth]# scan on
Discovery started
[CHG] Controller 00:10:20:30:40:50 Discovering: yes
[NEW] Device 00:12:34:56:78:90 device name
[CHG] Device 00:12:34:56:78:90 LegacyPairing: yes

[bluetooth]# pair 00:12:34:56:78:90
Attempting to pair with 00:12:34:56:78:90
[CHG] Device 00:12:34:56:78:90 Connected: yes
[CHG] Device 00:12:34:56:78:90 Connected: no
[CHG] Device 00:12:34:56:78:90 Connected: yes
Request PIN code
[agent] Enter PIN code: 1234
[CHG] Device 00:12:34:56:78:90 Paired: yes
Pairing successful
[CHG] Device 00:12:34:56:78:90 Connected: no

[bluetooth]# connect 00:12:34:56:78:90
Attempting to connect to 00:12:34:56:78:90
[CHG] Device 00:12:34:56:78:90 Connected: yes
Connection successful
```

For dual booting Linux systems, as shown in [#Saving the configuration](https://wiki.archlinux.org/title/#Saving_the_configuration) simply ensure all files from `/var/lib/bluetooth/*BT-Adapter-MAC-address*` are identical on each installation, either by copying or symlinking them.

With Windows or macOS, to pair devices on dual boot setups you need to change the pairing keys on your Linux install to match.

This page only describes the manual method of doing so. To automate the process, see the [bt-dualboot project](https://github.com/x2es/bt-dualboot) (does not support [Bluetooth Low Energy](https://en.wikipedia.org/wiki/Bluetooth_Low_Energy "wikipedia:Bluetooth Low Energy")) and [the related repositories](https://github.com/x2es/bt-dualboot?tab=readme-ov-file#alternatives). For a semi-automated process, use the [bluetooth-dualboot script](https://github.com/nbanks/bluetooth-dualboot) which does not edit any files, but it helps you run the right commands and cut-and-paste the correct values.

#### Setup

To do this, first pair your device on your Arch Linux install. Then reboot into the other OS and pair the device. Now you need to extract the pairing keys, but first switch off the Bluetooth devices to prevent any connection attempts.

**Note** Some devices, such as the [Logitech MX Master](https://wiki.archlinux.org/title/Logitech_MX_Master "Logitech MX Master") and Logitech 604 Lightspeed, increment an octet of their MAC address (typically the last) every time that the device is paired with a new system. You should determine whether this is the case, so that it can be accounted for at the end of the process.

#### For Windows

You can extract your Bluetooth keys on either Linux or Windows:

First, boot into Windows.

The registry key containing the link keys may only be accessed by the [SYSTEM account](https://docs.microsoft.com/en-us/windows/security/identity-protection/access-control/local-accounts#system), which cannot be logged into. Therefore, you will need Microsoft's [PsExec](https://docs.microsoft.com/en-us/sysinternals/downloads/psexec) tool from the official Windows Sysinternals site in order to run `regedit.exe` as `SYSTEM`.

Download [PsTools](https://download.sysinternals.com/files/PSTools.zip), and extract `PsExec64.exe`.

In an administrator instance of a [command shell](https://docs.microsoft.com/en-us/windows-server/administration/windows-commands/windows-commands#command-shell-overview), from the location of the extracted EXE, launch the registry editor:

```
.\PsExec64.exe -s -i regedit.exe
```

In the registry editor, navigate to the following registry key:

```
HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\BTHPORT\Parameters\Keys
```

Within this registry key is one subkey per Bluetooth adapter, named by MAC address. If there are multiple subkeys, and you are unsure of which to use, follow [this guide](https://answers.microsoft.com/en-us/windows/forum/all/how-to-view-addresses-of-generic-bluetooth-input/36ead4de-e62f-43a0-b76d-b9708460ddfd) to find the MAC address for the desired Bluetooth adapter.

In the desired adapter's registry key, there is a name-value pair for each paired device, with the name being its MAC address. Additionally, you might see some subkeys named by MAC addresses, each containing name-value pairs with names like `LTK` or `IRK`. These subkeys (if any) are for Bluetooth 5.1 devices. If the device you're trying to share has a subkey, it is a Bluetooth 5.1 device. If it does not have a subkey, only a name-value pair, it is not a Bluetooth 5.1 device.

Right click on the adapter's registry key and export it as a *.reg* file. This is a text file that you can copy keys from. As mentioned, it contains pairing keys in name-value pairs for non-Bluetooth 5.1 devices, and pairing keys (and some other information) in per-device subkeys for Bluetooth 5.1 devices. Make this file available to your Linux installation and reboot into it.

If the device you want to share is *not* a Bluetooth 5.1 device, jump to [#Saving the configuration](https://wiki.archlinux.org/title/#Saving_the_configuration). If it is a Bluetooth 5.1 device, you need to make some modifications to the pairing keys and the associated information before finishing up. Refer to [#Preparing Bluetooth 5.1 Keys](https://wiki.archlinux.org/title/#Preparing_Bluetooth_5.1_Keys) to see how.

**Note** If your Windows partition is encrypted with Bitlocker, you will not be able to access it from Linux using chntpw.

Boot into Arch. Install [chntpw](https://archlinux.org/packages/?name=chntpw). Mount your windows system drive. Change to the registry hive directory and start `chntpw` on the SYSTEM hive:

**Tip** If [rlwrap](https://archlinux.org/packages/?name=rlwrap) is installed, `chntpw` can be run as `rlwrap chntpw` to provide readline-style command-line editing and history.

```
$ cd /path/to/windows/system/Windows/System32/config
$ chntpw -e SYSTEM
```

Inside the `chntpw` environment, run:

```
> cd CurrentControlSet\Services\BTHPORT\Parameters\Keys
```

Instead of `CurrentControlSet`, you may see `ControlSet00*X*` (check using `ls`); use this instead:

```
> cd ControlSet00X\Services\BTHPORT\Parameters\Keys
```

There will probably be just one subkey, whose name is your Bluetooth adapter's MAC address. Show it with `ls` and `cd` into it:

```
> ls
> cd your-adapter's-mac-address
```

The subkey names under that adapter are the MAC addresses of the *devices* the adapter is paired to. Show them with `ls`, then `cd` into each of those you want to dual-pair:

```
> ls
> cd your-device's-mac-address
```

If this is *not* a Bluetooth 5.1 device, you will only see the pairing key:

```
> ls
```
```
Node has 0 subkeys and 1 values
size  type        value name    [value if type DWORD]
16    REG_BINARY <ab12cd34ef56>
```

If so, show a hexdump of your device's key using `hex`:

```
> hex ab12cd34ef56
```
```
:00000 XX XX XX XX XX XX XX XX XX XX XX XX XX XX XX XX (some other chars)
```

The "XX"s are the pairing key. Make note of which keys map to which MAC addresses.

If this *is* a Bluetooth 5.1 device, then you will see several keys corresponding to the one device:

```
Node has 0 subkeys and 8 values
  size     type              value name             [value if type DWORD]
    16  3 REG_BINARY         <LTK>
     4  4 REG_DWORD          <KeyLength>               16 [0x10]
     8  b REG_QWORD          <ERand>
     4  4 REG_DWORD          <EDIV>                 37520 [0x9290]
    16  3 REG_BINARY         <IRK>
     8  b REG_QWORD          <Address>
     4  4 REG_DWORD          <AddressType>              1 [0x1]
     4  4 REG_DWORD          <AuthReq>                 45 [0x2d]
```

Refer to [#Preparing Bluetooth 5.1 Keys](https://wiki.archlinux.org/title/#Preparing_Bluetooth_5.1_Keys) to see how to use these, using `hex *value_name*` to obtain the requested values.

Finally, to import the key(s) into your Linux installation, proceed to [#Saving the configuration](https://wiki.archlinux.org/title/#Saving_the_configuration).

#### For macOS

Boot into macOS:

- For macOS Monterey or newer:
	1. Open Keychain Access and search for Bluetooth.
	2. Sort by date.
	3. If you've recently removed and reconnected the device then you can simply sort the keys by date modified and pick the latest. It is probably called MobileBluetooth (for older Bluetooth devices) or is just an UUID (for Bluetooth 5.1+).
	4. Double click on the entry. Check that the MAC address in the Account field matches the MAC address of your device.
	5. Click the "Show password" checkbox. You will now need to enter your password, twice.
	6. Copy the text in the password field, it's actually an XML file (`⌘+a` `⌘+c`)
	7. Paste the text in `bt_keys.txt` in your home directory.
- For High Sierra or newer, run the following in a terminal:
	```
	# defaults read /private/var/root/Library/Preferences/com.apple.bluetoothd.plist LinkKeys > ~/bt_keys.txt
	```
- For Sierra or older, run the following in a terminal:
	```
	# defaults read /private/var/root/Library/Preferences/blued.plist LinkKeys > ~/bt_keys.txt
	```

The `~/.bt_keys.txt` file now contains the established Bluetooth keys. For older versions of macOS (High Sierra and older) you will have to reverse the keys before proceeding. For example, `98 54 2f aa bb cc dd ee ff gg hh ii jj kk ll mm` becomes `MM LL KK JJ GG FF EE DD CC BB AA 2F 54 98`.

**Note** The reversal can be done with the following [Python](https://wiki.archlinux.org/title/Python "Python") code:
```
>>> key = "98 54 2f aa bb cc dd ee ff gg hh ii jj kk ll mm"
>>> " ".join(reversed(key.split()))
```

If this is a Bluetooth 5.1 device, then there will be more than one key corresponding to one device. Refer to [#Preparing Bluetooth 5.1 Keys](https://wiki.archlinux.org/title/#Preparing_Bluetooth_5.1_Keys) to see how to use these.

Finally, to import the key(s) into your Linux installation, reboot into Linux and proceed to [#Saving the configuration](https://wiki.archlinux.org/title/#Saving_the_configuration).

If you observed the presence of Bluetooth 5.1 keys while following [#For Windows](https://wiki.archlinux.org/title/#For_Windows) or [#For macOS](https://wiki.archlinux.org/title/#For_macOS), you must apply certain transformations to their values before importing them into Linux. Create the requested files with their appropriate contents, for installation in [#Saving the configuration](https://wiki.archlinux.org/title/#Saving_the_configuration). This process will depend on the device, and some of the values have to be manipulated; code utilities for doing so are provided below.

<table><tbody><tr><th>Device</th><th>Source Key and Transformations (Windows)</th><th>Source Key and Transformations (macOS)</th><th>Destination Key File</th></tr><tr><td rowspan="3"><ul><li>Logitech MX Anywhere 3S</li><li>Logitech MX Master 3</li><li>Logitech MX Master 3S</li><li>Logitech MX Keys</li><li>Logitech MX Keys Mini</li><li>Logitech MX Mechanical</li><li>Xbox One S Wireless Controller</li></ul></td><td><ul><li>Copy <code>IRK</code>.</li><li>Remove the spaces between the hex octets.</li></ul></td><td>?</td><td><code>IdentityResolvingKey.Key</code></td></tr><tr><td><ul><li>Copy <code>LTK</code>.</li><li>Remove the spaces between the hex octets.</li></ul></td><td>?</td><td><code>SlaveLongTermKey.Key</code> and <code>PeripheralLongTermKey.Key</code></td></tr><tr><td><code>ERand</code> and <code>EDIV</code> should be <code>0</code></td><td><i>Random Number</i> and <i>Encrypted Diversifier</i> should be <code>0</code>.</td><td>–</td></tr><tr><td rowspan="6"><ul><li>Logitech MX Anywhere 2S</li><li>ELECOM Bitra</li></ul></td><td><ul><li>Copy <code>IRK</code>.</li><li>Remove the spaces between the hex octets.</li></ul></td><td>?</td><td><code>IdentityResolvingKey.Key</code></td></tr><tr><td><ul><li>Copy <code>CSRK</code>.</li><li>Remove the spaces between the hex octets.</li></ul></td><td>?</td><td><code>LocalSignatureKey.Key</code></td></tr><tr><td><ul><li>Copy <code>LTK</code>.</li><li>Remove the spaces between the hex octets.</li></ul></td><td>?</td><td><code>LongTermKey.Key</code></td></tr><tr><td><ul><li>Copy <code>KeyLength</code>.</li><li>Convert the whole number to decimal.</li></ul></td><td>?</td><td><code>LongTermKey.EncSize</code></td></tr><tr><td><ul><li>Copy <code>EDIV</code>.</li><li>Convert the whole number to decimal.</li></ul></td><td>?</td><td><code>LongTermKey.EDiv</code></td></tr><tr><td><ul><li>Copy <code>ERand</code>.</li><li>Reverse the order of the octets.</li><li>Convert the whole number to decimal.</li></ul></td><td>?</td><td><code>LongTermKey.Rand</code></td></tr><tr><td rowspan="5"><ul><li>Dygma Defy</li></ul></td><td><ul><li>Copy <code>IRK</code>.</li><li>Remove the spaces (or commas) between the hex octets.</li></ul></td><td>?</td><td><code>IdentityResolvingKey.Key</code></td></tr><tr><td><ul><li>Copy <code>LTK</code>.</li><li>Remove the spaces (or commas) between the hex octets.</li></ul></td><td>?</td><td><code>LongTermKey.Key</code></td></tr><tr><td><ul><li>Copy <code>KeyLength</code>.</li><li>Convert the whole number from hex to decimal.</li></ul></td><td>?</td><td><code>LongTermKey.EncSize</code></td></tr><tr><td><ul><li>Copy <code>EDIV</code>.</li><li>Convert the whole number from hex to decimal.</li></ul></td><td>?</td><td><code>LongTermKey.EDiv</code></td></tr><tr><td><ul><li>Copy <code>ERand</code>.</li><li>Reverse the order of the octets and remove the spaces (or commas).</li><li>Convert the whole number from hex to decimal.</li></ul></td><td>?</td><td><code>LongTermKey.Rand</code></td></tr><tr><td rowspan="1"><ul><li>Royal Kludge F68 keyboard is like the Logitech MX Anywhere 2S</li></ul></td><td><ul><li>Also copy <code>CSRKInbound</code> too.</li><li>Remove the spaces between the hex octets.</li></ul></td><td>?</td><td><code>RemoteSignatureKey.Key</code></td></tr><tr><td rowspan="4"><ul><li>ThinkPad TrackPoint Keyboard II</li><li>Pebble M350 mouse</li><li>Logitech G604 Lightspeed mouse</li></ul></td><td><ul><li>Copy <code>IRK</code>.</li><li>Reverse the order of the octets.</li></ul></td><td><ul><li>Copy <i>Remote IRK</i>.</li><li>Convert from base64 to hex.</li></ul></td><td><code>IdentityResolvingKey.Key</code></td></tr><tr><td><ul><li>Copy <code>LTK</code>.</li><li>Remove the spaces between the hexadecimal octets.</li></ul></td><td><ul><li>Copy <i>Remote Encryption</i> &gt; <i>Long-term Key</i>.</li><li>Convert from base64 to hex.</li></ul></td><td><code>LongTermKey.Key</code></td></tr><tr><td><ul><li>Copy <code>ERand</code>.</li><li>Reverse the order of the octets.</li><li>Convert the whole number to decimal.</li></ul></td><td><ul><li>Copy <i>Remote Encryption</i> &gt; <i>Random Number</i>.</li><li>Convert from base64 to a little-endian decimal number (see Python code below).</li></ul></td><td><code>LongTermKey.Rand</code></td></tr><tr><td><ul><li>Copy <code>EDIV</code>.</li><li>Reverse the order of the octets.</li><li>Convert the whole number to decimal.</li></ul></td><td><ul><li>Copy <i>Remote Encryption</i> &gt; <i>Encrypted Diversifier</i>.</li><li>Convert from base64 to a little-endian decimal number (see Python code below).</li></ul></td><td><code>LongTermKey.EDiv</code></td></tr><tr><td rowspan="3">Other devices</td><td><ul><li>Copy <code>LTK</code>.</li><li>Remove the spaces between the hex octets.</li></ul></td><td><ul><li>Copy <i>Remote IRK</i>.</li><li>Convert from base64 to hex.</li></ul></td><td><code>LongTermKey.Key</code></td></tr><tr><td><ul><li>Copy <code>ERand</code>.</li><li>Reverse the order of the octets.</li><li>Convert the whole number to decimal.</li></ul></td><td><ul><li>Copy <i>Remote Encryption</i> &gt; <i>Long-term Key</i>.</li><li>Convert from base64 to hex.</li></ul></td><td><code>LongTermKey.Rand</code></td></tr><tr><td><ul><li>Copy <code>EDIV</code>.</li><li>Remove the spaces between the hex octets.</li></ul></td><td><ul><li>Copy <i>Remote Encryption</i> &gt; <i>Encrypted Diversifier</i>.</li><li>Convert from base64 to hex.</li><li>Reverse the order of the octets.</li></ul></td><td><code>LongTermKey.EDiv</code></td></tr><tr><td rowspan="1">Xbox wireless controller</td><td><ul><li>Copy <code>LTK</code>.</li><li>Remove the spaces between the hex octets.</li></ul></td><td>?</td><td><code>SlaveLongTermKey.Key</code></td></tr></tbody></table>

**Note**
- To just remove the spaces from a value, you can use [this online tool](https://www.browserling.com/tools/remove-all-whitespace) or this [Python](https://wiki.archlinux.org/title/Python "Python") code:
```
>>> "key_value".replace(" ", "")
```
- This Python code does only the octet reversal:
```
>>> ERand=" 63 02 84 B8 5D 40 44 DF   "
>>> ERand=list(reversed(ERand.strip().split()))
```
- This Python code does the additional decimal conversion required for some:
```
>>> int("".join(ERand), 16)
16088054540146049635
```
- This Python code does the base64 to hex conversion:
```
binascii.hexlify(base64.decodebytes(b'...')).upper()
```
- This Python code does the full macOS Encrypted Diversifier conversion:
```
struct.unpack('<H', base64.decodebytes(b'...'))
```
- This Python code does the full macOS Random Number conversion:
```
struct.unpack('<Q', base64.decodebytes(b'...'))
```

For an example of the general case:

- An `LTK` of `48 4D AF CD 0F 92 22 88 0A 52 9A F4 76 DA 8B 94` makes for a `LongTermKey.Key` of `484DAFCD0F9222880A529AF476DA8B94`.
- An `ERand` of `63 02 84 B8 5D 40 44 DF` makes for a `Rand` of `16088054540146049635`.
- An `EDIV` of `37520` makes for an `EDiv` of `37520`.

Now that you have the keys change user to root, then continue with:

```
# cd /var/lib/bluetooth/BT-Adapter-MAC-address
```

Here you will find folders for each paired Bluetooth device. For each device you want to pair with Arch and your dual boot, do the following:

```
# cd device-MAC-address
```

**Note** At this point, if you are using a device which increments its MAC address on pairing, you must move the MAC address directory to the incremented path. Either copy the MAC address from Windows, or increment it yourself while minding the fact that each octet is a two-digit [hexadecimal](https://en.wikipedia.org/wiki/Hexadecimal "wikipedia:Hexadecimal") number.

If you have a pairing key (i.e. this is not a Bluetooth 5.1 device), then edit the `info` file and change the key under `[LinkKey]`. E.g.:

```
info
```
```
[LinkKey]
Key=XXXXXXXXXXXXXXX
```

**Note** You will have to make sure that all the letters are in capital case. Remove any spaces.

If you have several keys, as in Bluetooth 5.1, edit the `info` file and substitute all applicable keys with their recorded values. E.g. for an Xbox One S Wireless Controller:

```
info
```
```
[IdentityResolvingKey]
Key=<IdentityResolvingKey.Key>

[PeripheralLongTermKey]
Key=<PeripheralLongTermKey.Key>

[SlaveLongTermKey]
Key=<SlaveLongTermKey.Key>
```

Then [restart](https://wiki.archlinux.org/title/Restart "Restart") `bluetooth.service` and `pulseaudio` (with `pulseaudio -k && pulseaudio --start`).

You should be able to connect to your device now.

**Note** Depending on your Bluetooth manager, you may need to perform a full reboot in order to reconnect to the device.

## Configuration

To force Bluetooth controller to use older Bluetooth transport protocol (e.g. because its simpler to setup dual boot pairing for 3.0 device, than for 5.x BLE device), set `ControllerMode=bredr` in `/etc/bluetooth/main.conf` in the `[General]` section:

```
/etc/bluetooth/main.conf
```
```
[General]
ControllerMode=bredr
```

Default value is `ControllerMode=dual` i.e. both BR/EDR and LE enabled.

As of [bluez](https://archlinux.org/packages/?name=bluez) 5.65, BlueZ' default behavior is to power on all Bluetooth adapters when starting the service or resuming from suspend. [\[2\]](https://github.com/bluez/bluez/commit/180cf09933b2d8eb03972c8638063429fe5fece5)

If you would like the adapter to not be automatically enabled (e.g. on a portable device where you wish to save battery), set `AutoEnable=false` in `/etc/bluetooth/main.conf` in the `[Policy]` section:

```
/etc/bluetooth/main.conf
```
```
[Policy]
AutoEnable=false
```

The adapter can still be turned on manually by running `power on` as described in [#Pairing](https://wiki.archlinux.org/title/#Pairing).

If the device should always be visible and directly connectable:

```
/etc/bluetooth/main.conf
```
```
[General]
DiscoverableTimeout = 0
```

To allow Bluetooth keyboards, mice, etc. to wake the system from suspend. First, check the bios settings and make sure that wake from USB is not disabled. In many cases, Bluetooth from the motherboard is a USB device.

Add a new udev rule for Bluetooth adapter(s) ([USB Wireless Controller Base Class](https://www.usb.org/defined-class-codes#anchor_BaseClassE0h), Bluetooth Programming Interface Protocol) to enable wake from suspend:

```
/etc/udev/rules.d/91-bluetooth-wakeup.rules
```
```
ACTION=="add", SUBSYSTEM=="usb", DRIVERS=="usb", \
    ATTR{bDeviceClass}=="e0", \
    ATTR{bDeviceProtocol}=="01", \
    ATTR{bDeviceSubClass}=="01", \
ATTR{power/wakeup}="enabled"
```

To automatically re-configure your Bluetooth keyboard after wakeups to e.g. have a different keymap or key press repeat rate (for details, see [Xorg/Keyboard configuration#Adjusting typematic delay and rate](https://wiki.archlinux.org/title/Xorg/Keyboard_configuration#Adjusting_typematic_delay_and_rate "Xorg/Keyboard configuration") and [xmodmap](https://wiki.archlinux.org/title/Xmodmap "Xmodmap")), create an [executable](https://wiki.archlinux.org/title/Executable "Executable") script:

```
configure_keyboard.sh
```
```
#!/bin/sh
export DISPLAY=:0
xset r rate 220 30
xmodmap /your/path/to/.Xmodmap
```

Then create an additional udev rule like above:

```
/etc/udev/rules.d/92-keyboard-reconfiguration-wakeup.rules
```
```
ACTION=="add", SUBSYSTEM=="usb", DRIVERS=="usb", \
    ATTR{bDeviceClass}=="e0", \
    ATTR{bDeviceProtocol}=="01", \
    ATTR{bDeviceSubClass}=="01" \
RUN+="/your/path/to/configure_keyboard.sh"
```

The Bluez stack keeps new, potentially buggy features behind the D-Bus experimental and kernel experimental options. The functionality included under these varies over time, as experimental features are determined to be stable and no longer require the option (as an example: enabling D-Bus experimental interfaces currently allows to report battery level for old headsets). To enable these, uncomment the corresponding line in the configuration:

```
/etc/bluetooth/main.conf
```
```
...

# Enables D-Bus experimental interfaces
# Possible values: true or false
Experimental = true

# Enables kernel experimental features, alternatively a list of UUIDs
# can be given.
# Possible values: true,false,<UUID List>
# Possible UUIDS:
...
# Defaults to false.
KernelExperimental = true
```

Alternatively, you can [edit](https://wiki.archlinux.org/title/Edit "Edit") the `bluetooth.service` to add the `--experimental` or `--kernel` flag, like this [drop-in file](https://wiki.archlinux.org/title/Drop-in_file "Drop-in file"):

```
/etc/systemd/system/bluetooth.service.d/override.conf
```
```
[Service]
ExecStart=
ExecStart=/usr/lib/bluetooth/bluetoothd --experimental
```

Either way, you must then [restart](https://wiki.archlinux.org/title/Restart "Restart") the `bluetooth.service`.

## Audio

You will typically need to take an additional step to integrate the audio server with Bluetooth. This is detailed in the below sections.

See the [Bluetooth headset](https://wiki.archlinux.org/title/Bluetooth_headset "Bluetooth headset") page for more information about Bluetooth audio and Bluetooth headsets.

### PulseAudio

In order to be able to use audio equipment like Bluetooth headphones or speakers, you need to install the additional [pulseaudio-bluetooth](https://archlinux.org/packages/?name=pulseaudio-bluetooth) package. Make sure to restart [PulseAudio](https://wiki.archlinux.org/title/PulseAudio "PulseAudio") to make the installation take effect: `pulseaudio -k`. With a default PulseAudio installation (specifically, using a user instance with the packaged `default.pa`) you should immediately be able to stream audio from a Bluetooth device to your speakers. [\[3\]](https://gitlab.freedesktop.org/pulseaudio/pulseaudio/-/blob/stable-16.x/src/daemon/default.pa.in#L84-93)

If you have a system-wide PulseAudio setup make sure the user running the daemon (usually `pulse`) is in the `lp` group and you load the Bluetooth modules in your PulseAudio config:

```
/etc/pulse/system.pa
```
```
...
load-module module-bluetooth-policy
load-module module-bluetooth-discover
...
```

Optionally, add `load-module module-switch-on-connect` if you want to auto-switch all audio to the Bluetooth device.

### PipeWire

[PipeWire](https://wiki.archlinux.org/title/PipeWire "PipeWire") as of v0.3.19 enables its Bluetooth support by default.

### ALSA

**Note** Bluez5 has dropped direct integration for [ALSA](https://wiki.archlinux.org/title/ALSA "ALSA") and supports [PulseAudio](https://wiki.archlinux.org/title/PulseAudio "PulseAudio") only. Follow the instructions below if you cannot or do not want to use PulseAudio.

First, ensure that your Bluetooth audio device is correctly paired and connected to the system.

Then, install [bluez-alsa-git](https://aur.archlinux.org/packages/bluez-alsa-git/) <sup><small>AUR</small></sup>, start (and enable) the `bluealsa` service, and add your user to the `audio` group.

Run the following command to check if everything is working as intended (replace `*XX:XX:XX:XX:XX:XX*` and `*FILE.wav*` below):

```
$ aplay -D bluealsa:SRV=org.bluealsa,DEV=XX:XX:XX:XX:XX:XX,PROFILE=a2dp FILE.wav
```

Finally, add the following lines to your `~/.asoundrc`:

```
~/.asoundrc
```
```
defaults.bluealsa {
    service "org.bluealsa"
    device "XX:XX:XX:XX:XX:XX"
    profile "a2dp"
}
```

You can now use the `bluealsa` device to reach your Bluetooth audio device. Volume management is conducted normally via `alsamixer` with the option `-D bluealsa`.

## Bluetooth serial

To get Bluetooth serial communication working on Bluetooth-to-Serial modules (HC-05, HC-06) do the following steps:

**Pair** your Bluetooth device using `bluetoothctl` as described [above](https://wiki.archlinux.org/title/#Pairing).

Install [bluez-deprecated-tools](https://archlinux.org/packages/?name=bluez-deprecated-tools), as it provides certain functionality which is missing from newer tools.

Bind paired device MAC address to tty terminal:

```
# rfcomm bind rfcomm0 MAC_address_of_Bluetooth_device
```

Now you can open `/dev/rfcomm0` for serial communication:

```
$ picocom /dev/rfcomm0 -b 115200
```

## Troubleshooting

### General Troubleshooting

#### Debugging

In order to debug, first [stop](https://wiki.archlinux.org/title/Stop "Stop") `bluetooth.service`.

And then start it with the `-d` parameter:

```
# /usr/lib/bluetooth/bluetoothd -n -d
```

Another option is via the `btmon` tool.

Eight BlueZ tools [were deprecated](https://git.kernel.org/pub/scm/bluetooth/bluez.git/commit/?id=b1eb2c4cd057624312e0412f6c4be000f7fc3617) and removed from [bluez-utils](https://archlinux.org/packages/?name=bluez-utils), although not all of them were superseded by newer tools. The [bluez-deprecated-tools](https://archlinux.org/packages/?name=bluez-deprecated-tools) package now provides these deprecated tools.

<table><tbody><tr><th>Deprecated tool</th><th>Most likely replacement</th></tr><tr><td><a href="https://manpages.debian.org/latest/bluez/gatttool.1.en.html">gatttool</a></td><td>btgatt-client, <a href="https://git.kernel.org/cgit/bluetooth/bluez.git/tree/doc/gatt-api.txt">D-Bus Gatt API</a> <sup>[<a href="https://en.wikipedia.org/wiki/Wikipedia:Link_rot">dead link</a> 2023-10-29—HTTP 404]</sup></td></tr><tr><td><a href="https://manpages.debian.org/latest/bluez/hciattach.1.en.html">hciattach</a></td><td>btattach</td></tr><tr><td><a href="https://manpages.debian.org/latest/bluez/hciconfig.1.en.html">hciconfig</a></td><td>btmgmt (and bluetoothctl?)</td></tr><tr><td><a href="https://manpages.debian.org/latest/bluez-hcidump/hcidump.1.en.html">hcidump</a></td><td>btmon (and btsnoop)</td></tr><tr><td><a href="https://manpages.debian.org/latest/bluez/hcitool.1.en.html">hcitool</a></td><td>missing, <a href="https://git.kernel.org/cgit/bluetooth/bluez.git/tree/doc/device-api.txt">D-Bus Device API</a> <sup>[<a href="https://en.wikipedia.org/wiki/Wikipedia:Link_rot">dead link</a> 2023-10-29—HTTP 404]</sup> available</td></tr><tr><td><a href="https://manpages.debian.org/latest/bluez/rfcomm.1.en.html">rfcomm</a></td><td rowspan="2">missing, implement with <a href="https://git.kernel.org/cgit/bluetooth/bluez.git/tree/doc/profile-api.txt">D-Bus Profile1 API</a> <sup>[<a href="https://en.wikipedia.org/wiki/Wikipedia:Link_rot">dead link</a> 2023-10-29—HTTP 404]</sup>?</td></tr><tr><td><a href="https://manpages.debian.org/latest/bluez/ciptool.1.en.html">ciptool</a></td></tr><tr><td><a href="https://manpages.debian.org/latest/bluez/sdptool.1.en.html">sdptool</a></td><td>missing, functionality seems to be scattered over different D-Bus objects: <a href="https://git.kernel.org/cgit/bluetooth/bluez.git/tree/doc/profile-api.txt">Profile</a> <sup>[<a href="https://en.wikipedia.org/wiki/Wikipedia:Link_rot">dead link</a> 2023-10-29—HTTP 404]</sup>, <a href="https://git.kernel.org/cgit/bluetooth/bluez.git/tree/doc/advertising-api.txt">Advertising</a> <sup>[<a href="https://en.wikipedia.org/wiki/Wikipedia:Link_rot">dead link</a> 2023-10-29—HTTP 404]</sup>, and the UUIDs arrays in <a href="https://git.kernel.org/cgit/bluetooth/bluez.git/tree/doc/device-api.txt">device</a> <sup>[<a href="https://en.wikipedia.org/wiki/Wikipedia:Link_rot">dead link</a> 2023-10-29—HTTP 404]</sup> and <a href="https://git.kernel.org/cgit/bluetooth/bluez.git/tree/doc/adapter-api.txt">adapter</a> <sup>[<a href="https://en.wikipedia.org/wiki/Wikipedia:Link_rot">dead link</a> 2023-10-29—HTTP 404]</sup>.</td></tr></tbody></table>

### Service issues

`bluetooth.service` only requires the directory `/sys/class/bluetooth` to exist, which should be created by kernel module `bluetooth`, which is only autoloaded by `systemd-udev` if it actually finds a working Bluetooth hardware device.

If your `/sys/class/bluetooth` does not exist, check if your kernel Bluetooth module is loaded by `lsmod`. If not, and you believe you have a Bluetooth device, you can try manually starting them by [loading the Bluetooth module](https://wiki.archlinux.org/title/Kernel_module#Manual_module_handling "Kernel module") and [restarting](https://wiki.archlinux.org/title/Restart "Restart") `bluetooth.service`.

You should also load your corresponding kernel Bluetooth driver when loading the `bluetooth` module, most likely `btusb`, but can also be `btrtl,btintel,btbcm,bnep,btusb` etc.

Check `bluetooth.service` 's [unit status](https://wiki.archlinux.org/title/Unit_status "Unit status") to see whether it started.

See also [Debian Bug report logs - #853207](https://bugs.debian.org/cgi-bin/bugreport.cgi?bug=853207).

If `bluetooth.service` started successfully, there is a chance that you still cannot use Bluetooth normally (e.g. `bluetoothctl` says something like `org.Bluez.Error.NotReady` when you `scan on`). If this happens, try rebooting your computer, and double-check: whether directory `/sys/class/bluetooth` exists; whether `lsmod` includes correct Bluetooth modules; log messages in the [journal](https://wiki.archlinux.org/title/Journal "Journal"); etc. `systemd-udev` should pickup your Bluetooth hardware automatically without manual changes again.

On systems capable of [suspend-to-idle/S2idle/S0ix/Modern Standby](https://wiki.archlinux.org/title/Power_management/Suspend_and_hibernate "Power management/Suspend and hibernate"), Bluetooth controllers will stay enabled during sleep. This will usually cause the system to [wake up immediately after going to sleep](https://bugzilla.kernel.org/show_bug.cgi?id=200039) if any Bluetooth device is connected.

To prevent this, you can disable Bluetooth completely before going to sleep - install [bluez-utils](https://archlinux.org/packages/?name=bluez-utils) and create this file:

```
/etc/systemd/system/bluetooth-disable-before-sleep.service
```
```
[Unit]
Description=Disable Bluetooth before going to sleep
Before=sleep.target
Before=suspend.target
Before=hybrid-sleep.target
Before=suspend-then-hibernate.target
StopWhenUnneeded=yes

[Service]
Type=oneshot
RemainAfterExit=yes

ExecStart=/usr/bin/bluetoothctl power off
ExecStop=/usr/bin/bluetoothctl power on

[Install]
WantedBy=sleep.target
WantedBy=suspend.target
WantedBy=hybrid-sleep.target
WantedBy=suspend-then-hibernate.target
```

[Enable](https://wiki.archlinux.org/title/Enable "Enable") this service and check if Bluetooth devices disconnect when going to sleep, and whenever Bluetooth goes back up after waking up the system.

If this workaround is in use, [waking up the system with a Bluetooth mouse/keyboard](https://wiki.archlinux.org/title/#Wake_from_suspend) will not work.

This can have various causes:

- Both [PulseAudio](https://wiki.archlinux.org/title/PulseAudio "PulseAudio") and [PipeWire](https://wiki.archlinux.org/title/PipeWire "PipeWire") run as user services by default, which are terminated once the last session ends. Enable [lingering](https://wiki.archlinux.org/title/Systemd/User#Automatic_start-up_of_systemd_user_instances "Systemd/User") for the user to fix this.
- Additionally, when running [WirePlumber](https://wiki.archlinux.org/title/WirePlumber "WirePlumber") with [PipeWire](https://wiki.archlinux.org/title/PipeWire "PipeWire") (which is usually the case), WirePlumber runs a "logind-monitor" which enables Bluetooth on login and disables it on logout. See [WirePlumber#Keep Bluetooth running after logout / Headless Bluetooth](https://wiki.archlinux.org/title/WirePlumber#Keep_Bluetooth_running_after_logout_/_Headless_Bluetooth "WirePlumber") for a fix.

### Adapter issues

- On some laptops (e.g. Dell Studio 15, Lenovo Thinkpad X1) you have to switch the Bluetooth mode from HID to HCI. Install the [bluez-hid2hci](https://archlinux.org/packages/?name=bluez-hid2hci) package, then [udev](https://wiki.archlinux.org/title/Udev "Udev") should do this automatically. Alternatively, you can run this command to switch to HCI manually:
```
# /usr/lib/udev/hid2hci
```
- If the device will not show up and you have a Windows operating system on your machine, try booting it and enable the Bluetooth adapter from windows.
- Sometimes also this simple command helps:
```
# bluetoothctl power on
```

First, make sure the device is not being blocked by [rfkill](https://wiki.archlinux.org/title/Rfkill "Rfkill"). If using [USBGuard](https://wiki.archlinux.org/title/USBGuard "USBGuard"), make sure it is not blocking the device (see [USBGuard#Allow Bluetooth controllers](https://wiki.archlinux.org/title/USBGuard#Allow_Bluetooth_controllers "USBGuard")).

Otherwise, consider the following possible causes:

- Some motherboard Bluetooth controllers have a bug which causes this. To see whether this is the issue, run `journalctl | grep hci` and check whether it contains `command tx timeout` or `Reading Intel version command failed`. If it does, power off your computer and physically unplug the power cable for a few seconds. This forces the controller to reload the firmware, unlike a standard reboot (see [bug report](https://bugs.launchpad.net/ubuntu/+source/linux/+bug/1859592)).
- Some Intel cards (such as the 8260) are not picked up correctly by the Bluetooth service. In this case, using the deprecated [bluez-deprecated-tools](https://archlinux.org/packages/?name=bluez-deprecated-tools) instead of [bluez-utils](https://archlinux.org/packages/?name=bluez-utils) might fix the issue.
	- Some dongles, such as the [CSR clones](https://wiki.archlinux.org/title/#CSR_dongle_0a12:0001), have compatibility issues at the kernel level.
- Power saving measures can cause issues, in which case adding the [kernel parameter](https://wiki.archlinux.org/title/Kernel_parameters#Boot_loader_configuration "Kernel parameters") `btusb.enable_autosuspend=n` is a potential solution (see [bug report](https://bugzilla.redhat.com/show_bug.cgi?id=1573562)).

Finally, unloading and loading `btusb` without options sometimes helps to get the controller back:

```
# modprobe -r btusb
# modprobe btusb
```

If your device still soft blocked and you run [ConnMan](https://wiki.archlinux.org/title/ConnMan "ConnMan"), try this:

```
$ connmanctl enable bluetooth
```

If you are using a USB dongle, you should check that your Bluetooth dongle is recognized. You can do that by running `journalctl -f` as root when you have plugged in the USB dongle (or inspecting `/var/log/messages.log`). It should look something like the following (look out for hci):

```
Feb 20 15:00:24 hostname kernel: [ 2661.349823] usb 4-1: new full-speed USB device number 3 using uhci_hcd
Feb 20 15:00:24 hostname bluetoothd[4568]: HCI dev 0 registered
Feb 20 15:00:24 hostname bluetoothd[4568]: Listening for HCI events on hci0
Feb 20 15:00:25 hostname bluetoothd[4568]: HCI dev 0 up
Feb 20 15:00:25 hostname bluetoothd[4568]: Adapter /org/bluez/4568/hci0 has been enabled
```

If you only get the first two lines, you may see that it found the device but you need to bring it up. Example:

```
# btmgmt
```
```
[mgmt]# info
Index list with 1 item
hci0:    Primary controller
    addr 00:1A:7D:DA:71:10 version 6 manufacturer 10 class 0x000000
    supported settings: powered connectable fast-connectable discoverable bondable link-security ssp br/edr hs le advertising secure-conn debug-keys privacy static-addr
    current settings: connectable discoverable bondable ssp br/edr le secure-conn
    name Mozart
    short name

[mgmt]# select hci0
Selected index 0

[hci0]# power up
hci0 Set Powered complete, settings: powered connectable discoverable bondable ssp br/edr le secure-conn

[hci0]# info
hci0:    Primary controller
    addr 00:1A:7D:DA:71:10 version 6 manufacturer 10 class 0x1c0104
    supported settings: powered connectable fast-connectable discoverable bondable link-security ssp br/edr hs le advertising secure-conn debug-keys privacy static-addr
    current settings: powered connectable discoverable bondable ssp br/edr le secure-conn
```

Or

```
# bluetoothctl
```
```
[bluetooth]# show
Controller 00:1A:7D:DA:71:10 (public)
    Name: Mozart
    Alias: Mozart
    Class: 0x0000095c
    Powered: no
    Discoverable: yes
    Pairable: yes

[bluetooth]# power on
[CHG] Controller 00:1A:7D:DA:71:10 Class: 0x001c0104
Changing power on succeeded
[CHG] Controller 00:1A:7D:DA:71:10 Powered: yes

[bluetooth]# show
Controller 00:1A:7D:DA:71:10 (public)
    Name: Mozart
    Alias: Mozart
    Class: 0x001c0104
    Powered: yes
    Discoverable: yes
    Pairable: yes
```

To verify that the device was detected you can use `btmgmt` which is part of the `bluez-utils`. You can get a list of available devices and their identifiers and their MAC address by issuing:

```
$ btmgmt info
```
```
Index list with 1 item
hci0:    Primary controller
    addr 00:1A:7D:DA:71:10 version 6 manufacturer 10 class 0x1c0104
    supported settings: powered connectable fast-connectable discoverable bondable link-security ssp br/edr hs le advertising secure-conn debug-keys privacy static-addr
    current settings: powered connectable discoverable bondable ssp br/edr le secure-conn
```

It is possible to check the Bluetooth version as mapped to the HCI version according to the table in the [official specification](https://www.bluetooth.com/specifications/assigned-numbers/host-controller-interface/). For example, in the previous output, HCI **version 6** is Bluetooth version 4.0.

More detailed information about the device can be retrieved by using the deprecated `hciconfig`. ([bluez-deprecated-tools](https://archlinux.org/packages/?name=bluez-deprecated-tools))

```
$ hciconfig -a hci0
```
```
hci0:   Type: USB
        BD Address: 00:1B:DC:0F:DB:40 ACL MTU: 310:10 SCO MTU: 64:8
        UP RUNNING PSCAN ISCAN
        RX bytes:1226 acl:0 sco:0 events:27 errors:0
        TX bytes:351 acl:0 sco:0 commands:26 errors:0
        Features: 0xff 0xff 0x8f 0xfe 0x9b 0xf9 0x00 0x80
        Packet type: DM1 DM3 DM5 DH1 DH3 DH5 HV1 HV2 HV3
        Link policy: RSWITCH HOLD SNIFF PARK
        Link mode: SLAVE ACCEPT
        Name: 'BlueZ (0)'
        Class: 0x000100
        Service Classes: Unspecified
        Device Class: Computer, Uncategorized
        HCI Ver: 2.0 (0x3) HCI Rev: 0xc5c LMP Ver: 2.0 (0x3) LMP Subver: 0xc5c
        Manufacturer: Cambridge Silicon Radio (10)
```

If other devices share the same USB host, they can [interrupt communication with audio devices](https://bbs.archlinux.org/viewtopic.php?pid=1440161#p1440161). Make sure it is the only device attached to its bus. For example:

```
$ lsusb
```
```
Bus 002 Device 002: ID 0a12:0001 Cambridge Silicon Radio, Ltd Bluetooth Dongle (HCI mode)
Bus 002 Device 001: ID 1d6b:0002 Linux Foundation 2.0 root hub
Bus 001 Device 004: ID 048d:1345 Integrated Technology Express, Inc. Multi Cardreader
Bus 001 Device 003: ID 0424:a700 Standard Microsystems Corp. 2 Port Hub
Bus 001 Device 002: ID 8087:0024 Intel Corp. Integrated Rate Matching Hub
Bus 001 Device 001: ID 1d6b:0002 Linux Foundation 2.0 root hub
```

The device `ID 0a12:0001 Cambridge Silicon Radio, Ltd Bluetooth Dongle (HCI mode)` has a regression bug, and currently only works in the kernel version 5.17 and < 6.0. For more information, see [Kernel Bug 60824](https://bugzilla.kernel.org/show_bug.cgi?id=60824).

There are Logitech dongles (ex. Logitech MX5000) that can work in two modes: Embedded and HCI. In embedded mode dongle emulates a USB device so it seems to your PC that you are using a normal USB mouse/keyoard.

If you hold the little red Button on the USB BT mini-receiver it will enable the other mode. Hold the red button on the BT dongle and plug it into the computer, and after 3-5 seconds of holding the button, the Bluetooth icon will appear in the system tray. [Discussion](https://ubuntuforums.org/showthread.php?t=1332197)

Alternatively, you can install the [bluez-hid2hci](https://archlinux.org/packages/?name=bluez-hid2hci) package. When you connect your Logitech dongle it will automatically switch.

Some of these devices require the firmware to be flashed into the device at boot.

Some firmware is available when searching for [broadcom](https://aur.archlinux.org/packages?K=broadcom) on the [AUR](https://wiki.archlinux.org/title/AUR "AUR"), a notable package being [broadcom-bt-firmware](https://aur.archlinux.org/packages/broadcom-bt-firmware/) <sup><small>AUR</small></sup>, which provides the files for [multiple cards](https://github.com/winterheart/broadcom-bt-firmware/blob/master/DEVICES.md).

Alternatively, the firmware can be converted from a Microsoft Windows *.hex* file into a *.hcd* using [hex2hcd](https://github.com/jessesung/hex2hcd) (which is installed with [bluez-utils](https://archlinux.org/packages/?name=bluez-utils)).

In order to get the right *.hex* file, try searching the device vendor:product code obtained with *lsusb*, for example:

```
Bus 002 Device 004: ID 04ca:2006 Lite-On Technology Corp. Broadcom BCM43142A0 Bluetooth Device
```

or

```
Bus 004 Device 004: Id 0489:e031 Foxconn / Hon Hai
```

Alternatively, boot into Windows (a virtual machine installation will suffice) and get the firmware name from the Device Manager utility. If you want to know the model of your device but cannot see it in *lsusb*, you might see it in *lsusb -v* as `iProduct`.

The *.hex* file can be extracted from the downloaded Windows driver without having to run Windows for it. Download the right driver, for example [Bluetooth Widcomm](http://www.fujitsupc.com/downloads/mobile/BLUETOOTH_WIDCOMM_V6.5.0.3100_WIN7-32_FPC46-1771-01.EXE) <sup>[<a href="https://en.wikipedia.org/wiki/Wikipedia:Link_rot" title="wikipedia:Wikipedia:Link rot">dead link</a> 2023-09-16—domain name not resolved]</sup>. Depending on the format, extracting the files might need [unrar](https://archlinux.org/packages/?name=unrar) or [cabextract](https://archlinux.org/packages/?name=cabextract). To find out which of the many *.hex* files is the right one for you, look in the file `Win32/bcbtums-win7x86-brcm.inf` and search for `[RAMUSB**E031**.CopyList]`, where `E031` should be replaced with the product code (the second hex number in *lsusb*) of your device in upper-case. Underneath you should see the file name of the right *.hex* file.

Once you have the *.hcd* file, copy it into `/lib/firmware/brcm/BCM.hcd` - this filename is suggested by [dmesg](https://wiki.archlinux.org/title/Dmesg "Dmesg") and it may change in your case so check your *dmesg* output in order to verify. Then reload the *btusb* module:

```
# rmmod btusb
# modprobe btusb
```

The device should now be available. See [BBS#162688](https://bbs.archlinux.org/viewtopic.php?id=162688) for information on making these changes persistent.

See [Wireless network configuration#Bluetooth coexistence](https://wiki.archlinux.org/title/Wireless_network_configuration#Bluetooth_coexistence "Wireless network configuration").

On dual boot systems, if Bluetooth firmware versions are different for Windows and Linux, the Bluetooth adapter is not working after rebooting to Windows.

The best way to prevent this is updating the Bluetooth drivers (especially firmware) with latest version for each OS.

If you cannot find the latest version driver (or firmware) for Windows, you can copy the latest firmware file `/usr/lib/firmware/mediatek/BT_RAM_CODE_MT7961_1_2_hdr.bin.xz` from Arch Linux and extract to Windows (e.g. `C:\WINDOWS\system32\DRIVERS\`, you can find the firmware file path in the device manager on Windows).

First, find vendor and product ID of the adapter. For example:

```
$ lsusb -tv
```
```
/:  Bus 01.Port 1: Dev 1, Class=root_hub, Driver=xhci_hcd/12p, 480M
    ID 1d6b:0002 Linux Foundation 2.0 root hub
    ...
    |__ Port 3: Dev 3, If 0, Class=Wireless, Driver=btusb, 12M
        ID 8087:0025 Intel Corp.
    |__ Port 3: Dev 3, If 1, Class=Wireless, Driver=btusb, 12M
        ID 8087:0025 Intel Corp.
    ...
```

In this case, the vendor ID is 8087 and the product ID is 0025.

Then, use [usb\_modeswitch](https://archlinux.org/packages/?name=usb_modeswitch) to reset the adapter:

```
# usb_modeswitch -R -v vendor_ID -p product_ID
```

Enable discoverable mode if your computer cannot be discovered from your phone:

```
# bluetoothctl discoverable on
```

Verify that discoverable mode is on:

```
# bluetoothctl show
```
```
Powered: yes
    Discoverable: yes
    Pairable: yes
```

**Note** Check `DiscoverableTimeout` and `PairableTimeout` in `/etc/bluetooth/main.conf`.

If the computer still does not show up, try changing the device class in `/etc/bluetooth/main.conf` as follows:

```
# Default device class. Only the major and minor device class bits are
# considered.
#Class = 0x000100 # Computer Type (from default config)
Class = 0x100100 # (Object-Transfer Service & Computer Type)
```

**Note** In some cases, `Class` in `main.conf` gets overridden after device initialization, so set the class directly with `hciconfig hci0 class 100100`.

A user reported that this was the only solution to make their computer visible for their phone. LG TVs (and some others) are discoverable from their audio devices, so using `000414` (the soundbar class) will make such devices appear.

See [https://bluetooth-pentest.narod.ru/software/bluetooth\_class\_of\_device-service\_generator.html](https://bluetooth-pentest.narod.ru/software/bluetooth_class_of_device-service_generator.html) to generate Bluetooth device/service classes.

If you see messages like the following in the journal, and your device fails to connect or disconnects shortly after connecting:

```
bluetoothd: Unable to get connect data for Headset Voice gateway: getpeername: Transport endpoint is not connected (107)
bluetoothd: connect error: Connection refused (111)
```

This may be because you have already paired the device with another operating system using the same Bluetooth adapter (e.g., dual-booting). Some devices cannot handle multiple pairings associated with the same MAC address (i.e., Bluetooth adapters). Follow instructions on [#Dual boot pairing](https://wiki.archlinux.org/title/#Dual_boot_pairing) for solving this issue.

Some devices using Bluetooth low energy do not appear when scanning with bluetoothctl, for example the [Logitech MX Master](https://wiki.archlinux.org/title/Logitech_MX_Master "Logitech MX Master"). You can use `transport le` to scan it.

```
# bluetoothctl
```
```
[bluetooth]# menu scan
[bluetooth]# transport le
[bluetooth]# back
[bluetooth]# scan on
[bluetooth]# devices
...
Device XX:XX:XX:XX:XX:XX DA V2 X <---- low energy device here
```

Another way to connect them is by installing [bluez-deprecated-tools](https://archlinux.org/packages/?name=bluez-deprecated-tools), then [start](https://wiki.archlinux.org/title/Start "Start") `bluetooth.service` and do:

```
# bluetoothctl
```
```
[NEW] Controller (MAC) myhostname [default]

[bluetooth]# power on
[CHG] Controller (MAC) Class: 0x0c010c
Changing power on succeeded
[CHG] Controller (MAC) Powered: yes

[bluetooth]# scan on
Discovery started
[CHG] Controller (MAC) Discovering: yes
```

In another terminal:

```
# hcitool lescan
```

Wait until your device shows up, then `Ctrl+c` hcitool. bluetoothctl should now see your device and pair normally.

It seems that BLE passive scan is broken on this device. See [upstream bug report](https://community.intel.com/t5/Wireless/AX200-Passive-BLE-scan-linux/m-p/1227456) for more details.

You may notice that you cannot automatically reconnect to a device after it goes to sleep, or after the computer wakes from suspend.

You would for example notice the following errors in your logs:

```
bluetoothd[487]: Authentication attempt without agent
bluetoothd[487]: Access denied: org.bluez.Error.Rejected
```

This could be because the device is not marked as *trusted*. See [#Pairing](https://wiki.archlinux.org/title/#Pairing).

### Device-specific issues

See [Bluetooth mouse#Troubleshooting](https://wiki.archlinux.org/title/Bluetooth_mouse#Troubleshooting "Bluetooth mouse").

A Bluetooth audio device will fail to connect if pipewire (rather than pulseaudio-bluetooth) is being used, but an instance of pipewire is not running. [Start](https://wiki.archlinux.org/title/Start "Start") the `pipewire.service` [user unit](https://wiki.archlinux.org/title/User_unit "User unit") or play some audio to start the pipewire daemon, then try to connect the audio device again.

#### Interference between headphones and mouse

If you experience audio stuttering while using a Bluetooth mouse and keyboard simultaneously, you can try the following as referenced in #23 [https://bugs.launchpad.net/ubuntu/+source/bluez/+bug/424215](https://bugs.launchpad.net/ubuntu/+source/bluez/+bug/424215)

```ini
hciconfig hci0 lm ACCEPT,MASTER
hciconfig hci0 lp HOLD,SNIFF,PARK
```

**full comment**

> [!NOTE] full comment
The problem is not bluez but the settings bluez uses. You can use hciconfig to put your device into the correct mode.
hciconfig hci0 lm ACCEPT,MASTER
hciconfig hci0 lp HOLD,SNIFF,PARK
>
>should be enough where hci0 is your bluetooth device.
>
>I put this in a udev rule so that these changes are applied every startup.
>
>For that you can copy following text:

put this file in /etc/udev/rules.d
choose a higher rule number than the existing file at /lib/udev/rules.d/XX-bluetooth.rules
ACTION=="add", SUBSYSTEM=="bluetooth", KERNELS=="hci0", RUN+="/usr/sbin/hciconfig hci0 lm ACCEPT,MASTER", RUN+="/usr/sbin/hciconfig hci0 lp HOLD,SNIFF,PARK"

You can name the file 100-bluetooth.rules. Hope this helps.
#### Continually connect/disconnect with TP-LINK UB400 and Xbox controller

Use the settings below:

```
/etc/bluetooth/main.conf
```
```
...
[General]
JustWorksRepairing = always
FastConnectable = true
Class = 0x000100
...
[GATT]
ReconnectIntervals=1,1,2,3,5,8,13,21,34,55
AutoEnable=true
...
```

Then [restart](https://wiki.archlinux.org/title/Restart "Restart") the `bluetooth.service`.

You can see relevant [discussion on xpadneo](https://github.com/atar-axis/xpadneo/issues/166) but the xpadneo driver is not needed.

#### gnome-bluetooth

If you see this when trying to enable receiving files in bluetooth-properties:

```
Bluetooth OBEX start failed: Invalid path
Bluetooth FTP start failed: Invalid path
```

Then make sure that the [XDG user directories](https://wiki.archlinux.org/title/XDG_user_directories "XDG user directories") exist.

If incoming file transfers fail on an an otherwise functional Bluetooth connection, the problem may be due to symlinks in your file transfer path. Logs like this would appear in the journal:

```
Jun 18 11:18:13 ember obexd[3338969]: open(/home/me/.cache/obexd/MOC740): Operation not permitted (1)
```

If the path shown in the error message contains a symlink, then obexd by default [will not accept it](https://git.kernel.org/pub/scm/bluetooth/bluez.git/tree/obexd/plugins/filesystem.c#n90). The behavior can be overridden on initialization using a [drop-in file](https://wiki.archlinux.org/title/Drop-in_file "Drop-in file") for the `obex.service` [user service](https://wiki.archlinux.org/title/Systemd/User "Systemd/User"):

```
~/.config/systemd/user/obex.service.d/10-symlink.conf
```
```
[Service]
ExecStart=
ExecStart=/usr/lib/bluetooth/obexd --symlinks
```

Then [reload](https://wiki.archlinux.org/title/Reload "Reload") the *systemd* manager configuration of the calling user and [restart](https://wiki.archlinux.org/title/Restart "Restart") the `obex.service` user unit.

## See also

- [Keeping Bluetooth devices paired between Linux and Windows](https://averylarsen.com/2019/12/20/keeping-bluetooth-devices-paired-between-linux-and-windows/)
- [Bluetooth link keys on dual-boot systems](https://nullroute.eu.org/~grawity/bluetooth-key-sharing.html)