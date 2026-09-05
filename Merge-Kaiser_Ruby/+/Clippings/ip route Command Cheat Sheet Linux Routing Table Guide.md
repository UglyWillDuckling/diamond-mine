---
source: "https://www.golinuxcloud.com/ip-route-command-in-linux/"
published: 2021-12-15
created: 2026-07-14
tags:
---

| About     | ip route displays and changes the kernel routing table — default gateways, static subnets, metrics, and special drop routes. It is part of iproute2 and replaces the legacy route command on modern Linux.                 |
| --------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Tested on | Ubuntu 25.04 (Plucky Puffin); iproute2 6.14.0; kernel 7.0.0-27-generic                                                                                                                                                     |
| Package   | iproute2 (apt/deb) · iproute (dnf/rpm)                                                                                                                                                                                     |
| Man page  | [ip route(8)](https://manpages.ubuntu.com/manpages/noble/en/man8/ip-route.8.html)                                                                                                                                          |
| Privilege | root / sudo for add, del, replace, flush                                                                                                                                                                                   |
| Distros   | All distros with iproute2 (Ubuntu, Debian, Fedora, RHEL, and most modern Linux).  Full ip suite: [ip command](https://www.golinuxcloud.com/linux-ip-command/). Legacy tool: [route vs ip route](#ip-route-vs-route) below. |

## ip route — quick reference

### View routes

Inspect what the kernel will use before you change anything.

| When to use | Command |
| --- | --- |
| Show the main routing table (same as `show`) | `ip route` |
| Show routes explicitly | `ip route show` |
| Show only the main table | `ip route show table main` |
| Filter routes on one interface | `ip route show dev enp0s3` |
| Show default gateway routes | `ip route show default` |
| List routes in every table | `ip route show table all` |
| Ask which path the kernel picks for a destination | `ip route get 1.1.1.1` |

### Add and change routes

Static routes added this way are temporary until reboot unless you persist them in Netplan, NetworkManager, or similar.

| When to use | Command |
| --- | --- |
| Add a subnet via a gateway | `sudo ip route add 192.168.99.0/24 via 10.0.2.2 dev enp0s3` |
| Add a directly connected subnet on an interface | `sudo ip route add 172.16.50.0/24 dev enp0s8` |
| Set route priority with a metric (lower wins) | `sudo ip route add 192.168.99.0/24 via 10.0.2.2 dev enp0s3 metric 200` |
| Update or create a route in one step | `sudo ip route replace 192.168.99.0/24 via 10.0.2.2 dev enp0s3 metric 150` |
| Pin a preferred source address on a route | `sudo ip route add 192.168.99.0/24 via 10.0.2.2 src 10.0.2.15` |

### Delete and flush

| When to use | Command |
| --- | --- |
| Remove a route to a prefix | `sudo ip route del 192.168.99.0/24` |
| Remove a default route | `sudo ip route del default` |
| Drop the routing cache (after topology changes) | `sudo ip route flush cache` |

### Special route types

These routes control traffic without normal forwarding — useful for blacklisting subnets.

| When to use | Command |
| --- | --- |
| Silently discard packets to a network | `sudo ip route add blackhole 192.168.200.0/24` |
| Drop and send ICMP unreachable | `sudo ip route add unreachable 192.168.201.0/24` |
| Block with ICMP administratively prohibited | `sudo ip route add prohibit 192.168.202.0/24` |

---

## ip route — command syntax

Synopsis from `ip route help` on Ubuntu 25.04 (iproute2 6.14.0):

```text
ip route { list | show | flush } SELECTOR
ip route get [ ROUTE_GET_FLAGS ] [ to ] ADDRESS
       [ from ADDRESS iif STRING ] [ oif STRING ] ...
ip route { add | del | change | append | replace } ROUTE
SELECTOR := [ root PREFIX ] [ match PREFIX ] [ table TABLE_ID ] ...
ROUTE := NODE_SPEC [ INFO_SPEC ]
NODE_SPEC := [ TYPE ] PREFIX [ via ADDRESS ] [ dev STRING ] [ metric METRIC ] ...
TYPE := { unicast | blackhole | unreachable | prohibit | ... }
TABLE_ID := [ local | main | default | all | NUMBER ]
```

`ip route` updates the kernel routing table in memory. Changes from `add`, `del`, and `replace` are not saved across reboot unless you configure your distro's network stack. Most write operations need [sudo](https://www.golinuxcloud.com/sudo-command-in-linux/). See the broader [ip command](https://www.golinuxcloud.com/linux-ip-command/) for addresses, links, and rules.

---

## ip route — command examples

Expand or collapse all examples below to scan titles quickly or open every step at once.

Essential Show the routing table

Inspect the routing table before changing anything — you need to know current gateways and interfaces.

Run the command:

```bash
ip route show
```

Sample output:

```text
default via 10.0.2.2 dev enp0s3 proto dhcp src 10.0.2.15 metric 100
default via 192.168.0.1 dev enp0s8 proto dhcp src 192.168.0.4 metric 101
10.0.2.0/24 dev enp0s3 proto kernel scope link src 10.0.2.15 metric 100
192.168.0.0/24 dev enp0s8 proto kernel scope link src 192.168.0.4 metric 101
```

Each line is one route: `default` is the catch-all, `via` is the next-hop gateway, and `dev` is the outgoing interface. When two default routes exist, the lower `metric` wins (here `enp0s3` at 100 beats `enp0s8` at 101).

Essential See which route the kernel picks

When traffic fails or takes an unexpected path, `ip route get` simulates the forwarding decision for one destination.

Run the command:

```bash
ip route get 1.1.1.1
```

Sample output:

```text
1.1.1.1 via 10.0.2.2 dev enp0s3 src 10.0.2.15 uid 0
    cache
```

The kernel would send packets to `1.1.1.1` through gateway `10.0.2.2` on `enp0s3`, using source address `10.0.2.15`. Compare this with `ip route show default` when you suspect the wrong gateway is active.

Common Filter by interface and default route

On multi-homed hosts, narrow the table to one NIC or check only default routes.

Run the commands:

```bash
ip route show dev enp0s3
ip route show default
```

Sample output:

```text
default via 10.0.2.2 proto dhcp src 10.0.2.15 metric 100
10.0.2.0/24 proto kernel scope link src 10.0.2.15 metric 100
default via 10.0.2.2 dev enp0s3 proto dhcp src 10.0.2.15 metric 100
default via 192.168.0.1 dev enp0s8 proto dhcp src 192.168.0.4 metric 101
```

The first block lists routes tied to `enp0s3`; the second shows every default gateway. Use this when one interface should carry internet traffic and the other is internal-only.

Common Add a temporary static route

Reach an internal subnet through a router on your LAN. Routes added with `ip route add` disappear after reboot unless you persist them in Netplan or NetworkManager.

Run the command:

```bash
sudo ip route add 192.168.99.0/24 via 10.0.2.2 dev enp0s3 metric 200
```

Verify it landed:

```bash
ip route show 192.168.99.0/24
```

Sample output:

```text
192.168.99.0/24 via 10.0.2.2 dev enp0s3 metric 200
```

Remove the test route when you are done:

```bash
sudo ip route del 192.168.99.0/24
```

Always delete lab routes so the host returns to its original table.

Common Replace a route without a separate delete

When a gateway or metric changes, `replace` updates the matching prefix or creates it if missing.

Run the commands:

```bash
sudo ip route add 192.168.99.0/24 via 10.0.2.2 dev enp0s3 metric 200
sudo ip route replace 192.168.99.0/24 via 10.0.2.2 dev enp0s3 metric 150
ip route show 192.168.99.0/24
sudo ip route del 192.168.99.0/24
```

Sample output after replace:

```text
192.168.99.0/24 via 10.0.2.2 dev enp0s3 metric 150
```

`replace` is safer than `del` followed by `add` when scripts update routes in place.

Common Route a subnet out an interface without via

When the destination network is directly attached, specify `dev` instead of a gateway.

Run the commands:

```bash
sudo ip route add 172.16.50.0/24 dev enp0s8
ip route show 172.16.50.0/24
sudo ip route del 172.16.50.0/24
```

Sample output:

```text
172.16.50.0/24 dev enp0s8 scope link
```

The kernel treats the subnet as on-link through `enp0s8` — no `via` gateway is needed.

Advanced Blackhole, unreachable, and prohibit routes

Special route types drop or reject traffic without a firewall rule. `blackhole` is silent; `unreachable` and `prohibit` return ICMP errors.

Run the commands:

```bash
sudo ip route add blackhole 192.168.200.0/24
sudo ip route add unreachable 192.168.201.0/24
sudo ip route add prohibit 192.168.202.0/24
ip route show | grep 192.168.20
sudo ip route del blackhole 192.168.200.0/24
sudo ip route del unreachable 192.168.201.0/24
sudo ip route del prohibit 192.168.202.0/24
```

Sample output:

```text
blackhole 192.168.200.0/24
unreachable 192.168.201.0/24
prohibit 192.168.202.0/24
```

Use these for coarse traffic blocks at the routing layer; remove them after testing.

Advanced Flush the routing cache

After link or gateway changes, stale cache entries can mislead `ip route get`. Flushing the cache forces fresh lookups.

Run the command:

```bash
sudo ip route flush cache
```

There is no output on success. Re-run `ip route get` for the destination you care about to confirm the kernel picked the new path.

---

## ip route — when to use / when not

| Use ip route when | Use something else when |
| --- | --- |
| You need to **view or change the kernel routing table** on a running Linux host | You only need to **ping** a host — use [ping](https://www.golinuxcloud.com/ping-command-linux/) first |
| You are on a distro that ships **iproute2** (default on Ubuntu 25.04) | You are on a legacy script that still calls **`route`** from net-tools — migrate to `ip route` |
| You want **temporary** static routes for testing or automation | Routes must **survive reboot** — configure Netplan, NetworkManager, or systemd-networkd instead |
| You want to **simulate** which path a packet takes | You need hop-by-hop path discovery — use [traceroute](https://www.golinuxcloud.com/traceroute-command-in-linux/) |

---

## ip route vs route

|  | ip route (iproute2) | route (net-tools) |
| --- | --- | --- |
| Package | iproute2 | net-tools (deprecated) |
| Maintenance | Actively maintained | Legacy |
| Policy routing | Yes (`table`, works with `ip rule`) | No |
| Multipath / nexthop | Yes | Limited |
| Output | Structured, script-friendly | Older column layout |
| Modern default | Yes on Ubuntu, Debian, RHEL 8+ | Only if net-tools is installed |

Example equivalents:

```bash
ip route show
route -n
```

```bash
sudo ip route add default via 10.0.2.2
sudo route add default gw 10.0.2.2
```

Prefer `ip route` for new scripts and documentation.

---

## Related commands

Commands in the same networking workflow — links, addresses, reachability, and path discovery.

| Command | One line |
| --- | --- |
| [ip route](https://www.golinuxcloud.com/ip-route-command-in-linux/) | Routing table only (this page) |
| [ss](https://www.golinuxcloud.com/ss-command-in-linux/) | List sockets and listening ports |

Browse the full index in our [Linux commands](https://www.golinuxcloud.com/linux-commands-cheat-sheet/) reference.

---

## ip route — interview corner

Practice these before exams or standups. Each card explains the idea in plain language, then ends with a short answer you can say aloud.

What does ip route do in Linux?

`ip route` is the iproute2 subcommand that **reads and writes the kernel routing table**. It answers two everyday questions: where should packets for this destination go, and how do I add or remove a static path?

View the table:

```bash
ip route show
```

Simulate one forwarding decision:

```bash
ip route get 1.1.1.1
```

It replaces the older `route` command from net-tools and works alongside `ip addr`, `ip link`, and `ip rule` in the ip command suite.

**A strong answer is:**

> "ip route manages the kernel routing table — show, add, delete, and replace routes. ip route get tells me which gateway and interface the kernel would use for a destination. It is part of iproute2 and replaces legacy route on modern Linux."

What is the difference between ip route show and ip route get?

`ip route show` **lists configured routes** — everything the admin (or DHCP) installed in the table.

`ip route get` **simulates forwarding** for one destination address. It reports the chosen gateway, interface, and source IP the kernel would use right now, including cache state.

```bash
ip route get 1.1.1.1
```

Sample output:

```text
1.1.1.1 via 10.0.2.2 dev enp0s3 src 10.0.2.15 uid 0
    cache
```

Use `show` for inventory; use `get` when a host is reachable but traffic takes the wrong NIC or gateway.

**A strong answer is:**

> "show lists routes in the table; get simulates where one packet would go — gateway, dev, and src. I use get when the table looks fine but actual traffic picks the wrong path."

What does metric mean on an ip route?

**Metric** is route priority when multiple routes match the same destination. **Lower metric wins.**

On a dual-homed host you might see:

```text
default via 10.0.2.2 dev enp0s3 metric 100
default via 192.168.0.1 dev enp0s8 metric 101
```

Traffic uses `10.0.2.2` on `enp0s3` because 100 < 101. Raise the backup link's metric to keep it idle until the primary fails (depending on your routing setup).

**A strong answer is:**

> "Metric is route priority — lower number wins when several routes match. I set a low metric on the primary default gateway and a higher one on the backup NIC."

Are ip route changes permanent?

**No.** Routes added with `ip route add`, `replace`, or `del` live in the **running kernel** only. They disappear after reboot or sometimes after a network restart.

For persistence on Ubuntu, put routes in **Netplan** (`/etc/netplan/*.yaml`) or **NetworkManager** profiles with the [nmcli command](https://www.golinuxcloud.com/nmcli-command-examples-cheatsheet-centos-rhel/) (`connection modify … +ipv4.routes`). Use `ip route` for temporary routes and boot-time scripts managed by your network stack.

**A strong answer is:**

> "ip route changes are runtime-only. For persistence I configure Netplan or NetworkManager; ip route is for inspection and temporary static routes."

When would you use a blackhole route?

A **blackhole** route silently drops packets to a prefix — no ICMP reply. It is a routing-layer block, not a firewall rule.

```bash
sudo ip route add blackhole 192.168.200.0/24
```

Use cases include sinking unwanted traffic to unused RFC1918 space or absorbing probes to decommissioned subnets. **`unreachable`** and **`prohibit`** differ because they return ICMP errors to the sender.

**A strong answer is:**

> "Blackhole routes discard traffic to a prefix without notifying the sender — useful for sinkholing unwanted destinations. Unreachable and prohibit also block but send ICMP errors back."

---

## Troubleshooting

| Symptom | Likely cause | Fix |
| --- | --- | --- |
| `RTNETLINK answers: File exists` on add | Duplicate route for the same prefix | `ip route show` then `sudo ip route del PREFIX` or use `replace` |
| `RTNETLINK answers: No such process` on del | Selector does not match exactly (metric, via, dev) | Match the line from `ip route show` in the del command |
| No default route in `ip route show default` | DHCP failure or manual config removed gateway | Add with `sudo ip route add default via GATEWAY dev IFACE`; fix Netplan/NM for persistence |
| Wrong interface for internet traffic | Lower metric on the wrong default route | Adjust metrics or remove the unwanted default |
| `ip route get` shows unexpected `src` | Multiple addresses on one host | Add `src ADDRESS` on the route or use policy routing with `ip rule` |
| Routes vanish after reboot | Only runtime `ip route` changes were made | Persist in Netplan, NetworkManager, or cloud-init |

---