#howto/linux/journal

`journalctl` is the main tool for viewing logs on systems using **systemd** (including Arch Linux). It reads logs collected by `systemd-journald`.

Here are the most useful commands.

## Basic usage

Show all logs:

```bash
journalctl
```

Show the newest logs first / follow live logs:

```bash
journalctl -f
```

(`-f` works like `tail -f`.)

Show the last 50 lines:

```bash
journalctl -n 50
```

Show the last 100 lines and follow:

```bash
journalctl -n 100 -f
```

---

## Boot-related commands

Show logs from the current boot:

```bash
journalctl -b
```

Show only errors from the current boot:

```bash
journalctl -b -p err
```

Show previous boot:

```bash
journalctl -b -1
```

List available boots:

```bash
journalctl --list-boots
```

Example:

```text
-2  abc123  Mon 2026-07-27 10:20:00
-1  def456  Tue 2026-07-28 08:15:00
 0  ghi789  Tue 2026-07-28 23:30:00
```

Then:

```bash
journalctl -b -1
```

means "show the previous boot."

---

## Filter by priority

Show only errors:

```bash
journalctl -p err
```

Available priorities:

| Priority  | Meaning          |
| --------- | ---------------- |
| `emerg`   | system unusable  |
| `alert`   | immediate action |
| `crit`    | critical         |
| `err`     | errors           |
| `warning` | warnings         |
| `notice`  | notable          |
| `info`    | informational    |
| `debug`   | debug            |

Examples:

```bash
journalctl -p warning
```

Current boot errors:

```bash
journalctl -b -p warning
```

---

## Service logs

Show logs for a service:

```bash
journalctl -u sddm
```

Current boot only:

```bash
journalctl -b -u sddm
```

Follow a service live:

```bash
journalctl -u sddm -f
```

Example services:

```bash
journalctl -u NetworkManager
journalctl -u docker
journalctl -u sshd
```

---

## Kernel logs (replacement for dmesg)

Show kernel messages:

```bash
journalctl -k
```

Current boot kernel messages:

```bash
journalctl -b -k
```

Follow kernel messages:

```bash
journalctl -k -f
```

Useful searches:

NVIDIA:

```bash
journalctl -k | grep -i nvidia
```

Disk:

```bash
journalctl -k | grep -iE "nvme|ata|ext4|error"
```

USB:

```bash
journalctl -k | grep -i usb
```

---

## Time-based queries

Since today:

```bash
journalctl --since today
```

Since yesterday:

```bash
journalctl --since yesterday
```

Between dates:

```bash
journalctl --since "2026-07-28 10:00" --until "2026-07-28 12:00"
```

---

## Find crashes

Show failed services:

```bash
systemctl --failed
```

Show crashes recorded by systemd:

```bash
coredumpctl list
```

Inspect one:

```bash
coredumpctl info <PID>
```

---

## Disk usage

See how much space logs consume:

```bash
journalctl --disk-usage
```

Clean old logs:

Keep only the last 7 days:

```bash
sudo journalctl --vacuum-time=7d
```

Limit size:

```bash
sudo journalctl --vacuum-size=500M
```

---

## Very useful troubleshooting combinations

### "Why did my machine fail to boot?"

```bash
journalctl -b -1 -p err
```

### "Why did a service fail?"

```bash
systemctl status <service>
journalctl -u <service> -b
```

### "What happened during startup?"

```bash
journalctl -b
```

### "What hardware errors happened?"

```bash
journalctl -k -p warning
```

### "Watch errors happen live"

```bash
journalctl -f -p err
```

For Arch troubleshooting, the three commands I use most are:

```bash
journalctl -b -p err
```

```bash
journalctl -b -k
```

```bash
journalctl -u <service> -f
```

They cover most boot, kernel, and service failures.
