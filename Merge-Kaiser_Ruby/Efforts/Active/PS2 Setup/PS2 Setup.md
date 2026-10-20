---
status: Active
due_date: 2026-10-17
area: "[[Personal]]"
tags:
  - project
priority: 6
---
## Cilj

napraviti setup za ps2 konzolu koji omogucuje igranje velikog broja naslova.

- igre se mogu igrati ✅
- sve igre rade✅

- izbor igara je dovoljno velik(20+)
- ps1 igre se mogu igrati

### current situation

- ps2 works over the network using [[samba]]
- plenty of games have been downloaded
- games are hosted on the [[arch pc]]
- [[gran turismo 4 (2004)]] works 🚓

### ▶ next actions

- [ ] download more games [[ps2 download games list]]
- [ ] check [[PlayStation (console)|psx]] games again

### ✔ tasks

- [x] #task enable [[ps2 games without disks(dvd's)]]
- [x] fix [[gran turismo 4 (2004)]]
- [x] setup network again

- [ ] #task [[enable ps1 games on ps2]] ==🟢last==

### :LiWeight: decisions

- ps2 game access — network access using [[samba]]
- we will use a direct [[Ethernet]] cable link
- backup will be the USB option

### notes 🗒

- [[ethtool]]
- [[ps2 games without disks(dvd's)]]

## wip

> add new connection mapped to a specific network interface

```sh
nmcli con add type ethernet ifname enp10s0f3u3 con-name ps2_3 \
  ipv4.method manual ipv4.addresses 192.168.50.1/24
	
nmcli con up ps2_3 
```

> show the interface

```sh
ip -br addr show
# -br brief
```

```sh
ip link show enp10s0f3u3
# output
14: enp10s0f3u3: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qdisc fq_codel state UP mode DEFAULT group default qlen 1000
    link/ether 00:e0:4c:40:10:60 brd ff:ff:ff:ff:ff:ff
    altname enx00e04c401060
```

```sh
ethtool -i enp10s0f3u3
driver: r8152
version: 7.2.9-arch1-1
firmware-version: rtl8153b-2 v2 04/27/23
expansion-rom-version: 
bus-info: usb-0000:0a:00.3-3
supports-statistics: yes
supports-test: no
supports-eeprom-access: no
supports-register-dump: no
supports-priv-flags: no
```