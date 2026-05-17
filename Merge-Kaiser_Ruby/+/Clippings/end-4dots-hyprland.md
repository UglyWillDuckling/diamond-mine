---
source: https://github.com/end-4/dots-hyprland
related:
  - "[[hyprland]]"
created: 2026-04-27
tags:
  - tool/hyprland
---
## • overview •

What this is/isn't
- Technically, configuration files
- Realistically, mostly the custom graphical shell
- NOT a system setup script: no graphic drivers, no zram setup, etc.
Notable features
- **Overview**: Shows open apps with live previews
- **AI**: Gemini, Ollama, and more
- **QoL**: screen translation, anti-flashbang, Google Lens
- **Material themes**: Choose your wallpaper, done, enjoy
- **Transparent installation**: Every command is shown before it's run
Installation
- *If you're new to Linux and decide to use Hyprland, you're in for a tough ride.*
- Just run `bash <(curl -s https://ii.clsty.link/get)`
	- Or, clone this repo and run `./setup install`
		- See [the wiki](https://ii.clsty.link/en/ii-qs/01setup/) for more details
- **Keybinds**: Should be somewhat familiar to Windows or GNOME users. Important ones:
	- `Super` + `/` = keybind list
		- `Super` + `Enter` = terminal
Software overview

| Software | Purpose |
| --- | --- |
| [Hyprland](https://github.com/hyprwm/hyprland) | The compositor (manages and renders windows) |
| [Quickshell](https://quickshell.outfoxxed.me/) | A QtQuick-based widget system, used for the status bar, sidebars, etc. |
| Others | See [deps-info.md](https://github.com/end-4/dots-hyprland/blob/main/sdata/deps-info.md) |

Discord [Server link](https://discord.gg/GtdRBXgMwq) | I hope this provides a friendlier environment for support without needing me to personally accept every friend request/DM. For real issues, prefer GitHub

## • screenshots •

[![illogical-impulse logo](https://github.com/end-4/dots-hyprland/raw/main/.github/assets/illogical-impulse.svg)](https://github.com/end-4/dots-hyprland/blob/main/.github/assets/illogical-impulse.svg)

Widget system: Quickshell | Support: Yes

[Showcase video](https://www.youtube.com/watch?v=RPwovTInagE)

| AI, settings app | Some widgets |
| --- | --- |
| [![image](https://private-user-images.githubusercontent.com/97237370/576998753-5d4e7d07-d0b4-4406-a4c9-ed7ba90e3fe4.png?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NzczMDA2MDksIm5iZiI6MTc3NzMwMDMwOSwicGF0aCI6Ii85NzIzNzM3MC81NzY5OTg3NTMtNWQ0ZTdkMDctZDBiNC00NDA2LWE0YzktZWQ3YmE5MGUzZmU0LnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNjA0MjclMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjYwNDI3VDE0MzE0OVomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPWZmNGEyMjE3OWQ1YzQwMWY5YmRhMGQxZjAwMjAwODY0Y2NmYjk2YzhmMDliZmNmMDQ0MTE3NzAyZjZkYjQ5NTYmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JnJlc3BvbnNlLWNvbnRlbnQtdHlwZT1pbWFnZSUyRnBuZyJ9.x1bb8N1vDNtj0ZRxPkmnroPRgSUUJkkjQIvqgXSxSkY)](https://private-user-images.githubusercontent.com/97237370/576998753-5d4e7d07-d0b4-4406-a4c9-ed7ba90e3fe4.png?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NzczMDA2MDksIm5iZiI6MTc3NzMwMDMwOSwicGF0aCI6Ii85NzIzNzM3MC81NzY5OTg3NTMtNWQ0ZTdkMDctZDBiNC00NDA2LWE0YzktZWQ3YmE5MGUzZmU0LnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNjA0MjclMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjYwNDI3VDE0MzE0OVomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPWZmNGEyMjE3OWQ1YzQwMWY5YmRhMGQxZjAwMjAwODY0Y2NmYjk2YzhmMDliZmNmMDQ0MTE3NzAyZjZkYjQ5NTYmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JnJlc3BvbnNlLWNvbnRlbnQtdHlwZT1pbWFnZSUyRnBuZyJ9.x1bb8N1vDNtj0ZRxPkmnroPRgSUUJkkjQIvqgXSxSkY) |  |
| Window management | wow look its orange |
|  |  |

## • thank you •

- [@clsty](https://github.com/clsty) for making the dotfiles accessible by taking care of the install script and many other things
- [@midn8hustlr](https://github.com/midn8hustlr) for greatly improving the color generation system
- [@outfoxxed](https://github.com/outfoxxed/) for being extremely supportive in my Quickshell journey
- Quickshell: [Soramane](https://github.com/caelestia-dots/shell/), [FridayFaerie](https://github.com/FridayFaerie/quickshell), [nydragon](https://github.com/nydragon/nysh)
- AGS: [Aylur](https://github.com/Aylur/dotfiles/tree/ags-pre-ts), [kotontrion](https://github.com/kotontrion/dotfiles)
- EWW: [fufexan](https://github.com/fufexan/dotfiles)

## • stonks •

- I promise not to attempt an +ULTRARICOSHOT irl... Coins can go here: [https://github.com/sponsors/end-4](https://github.com/sponsors/end-4)
- Tentacle cat hub twinkle internet points

[![Stargazers over time](https://camo.githubusercontent.com/f150a1771b6e97f8cbf4b07e454a521979d3e4fb0fc52925eece9eafca2c90a6/68747470733a2f2f7374617263686172742e63632f656e642d342f646f74732d687970726c616e642e7376673f76617269616e743d6164617074697665)](https://starchart.cc/end-4/dots-hyprland)

---

## • previous styles •

- **Unsupported!**
- **Source**: illogical-impulse AGS in `ii-ags` branch, others in `archive` branch.
- List is in reverse chronological order

### illogical-impulse (AGS)

Widget system: AGS | Support: No

| AI | Common widgets |
| --- | --- |
| [![image](https://private-user-images.githubusercontent.com/97237370/431326400-9d7af13f-89ef-470d-ba78-d2288b79cf60.png?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NzczMDA2MDksIm5iZiI6MTc3NzMwMDMwOSwicGF0aCI6Ii85NzIzNzM3MC80MzEzMjY0MDAtOWQ3YWYxM2YtODllZi00NzBkLWJhNzgtZDIyODhiNzljZjYwLnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNjA0MjclMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjYwNDI3VDE0MzE0OVomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTlkYzBjZTIzZDEzZTgxNDJkZmM3NjQwNGVhZTdjMzhmY2YzNWU0N2U2NGIwNGI3ODU1Mzk5MmY5N2UwNDc4NDYmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JnJlc3BvbnNlLWNvbnRlbnQtdHlwZT1pbWFnZSUyRnBuZyJ9.qY28P-nwYeHBlMfqVy4uhr2U2NqG0XwY_uqp9PA1SMw)](https://private-user-images.githubusercontent.com/97237370/431326400-9d7af13f-89ef-470d-ba78-d2288b79cf60.png?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NzczMDA2MDksIm5iZiI6MTc3NzMwMDMwOSwicGF0aCI6Ii85NzIzNzM3MC80MzEzMjY0MDAtOWQ3YWYxM2YtODllZi00NzBkLWJhNzgtZDIyODhiNzljZjYwLnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNjA0MjclMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjYwNDI3VDE0MzE0OVomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTlkYzBjZTIzZDEzZTgxNDJkZmM3NjQwNGVhZTdjMzhmY2YzNWU0N2U2NGIwNGI3ODU1Mzk5MmY5N2UwNDc4NDYmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JnJlc3BvbnNlLWNvbnRlbnQtdHlwZT1pbWFnZSUyRnBuZyJ9.qY28P-nwYeHBlMfqVy4uhr2U2NqG0XwY_uqp9PA1SMw) |  |
| Window management | Weeb power |
|  |  |

#### m3ww

Widget system: EWW | Support: No

[![Material Eww!](https://private-user-images.githubusercontent.com/97237370/287200312-09533e64-b6d7-47eb-a840-ee90c6776adf.png?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NzczMDA2MDksIm5iZiI6MTc3NzMwMDMwOSwicGF0aCI6Ii85NzIzNzM3MC8yODcyMDAzMTItMDk1MzNlNjQtYjZkNy00N2ViLWE4NDAtZWU5MGM2Nzc2YWRmLnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNjA0MjclMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjYwNDI3VDE0MzE0OVomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPWRhYjc5ODJjOGZlZjk1M2YzYWU1MWNiZGExMDhiODIwNjA4ZjEwYTRhNGUxMjI5ZDhiYjc2ZTJiM2EzMjU3ZDEmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JnJlc3BvbnNlLWNvbnRlbnQtdHlwZT1pbWFnZSUyRnBuZyJ9.kWbDWZ40w0xaZINutMqQYwOcuNnj6iBUBo9r8kJbVx0)](https://streamable.com/85ch8x)

#### NovelKnock

Widget system: EWW | Support: No

[![Desktop Preview](https://private-user-images.githubusercontent.com/97237370/287199758-42903d03-bf6f-49d4-be7f-dd77e6cb389d.png?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NzczMDA2MDksIm5iZiI6MTc3NzMwMDMwOSwicGF0aCI6Ii85NzIzNzM3MC8yODcxOTk3NTgtNDI5MDNkMDMtYmY2Zi00OWQ0LWJlN2YtZGQ3N2U2Y2IzODlkLnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNjA0MjclMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjYwNDI3VDE0MzE0OVomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPWY4NjZkZDU0ZmNjMmJiOTQ5MDU5ZTk2OTAxZGI4NzhmYWQ3NmQwMDU3ODdhNGU1NjZkYWQwZWJjYjQxNmQ3ZTAmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JnJlc3BvbnNlLWNvbnRlbnQtdHlwZT1pbWFnZSUyRnBuZyJ9.jKYj0lQ-iNZbaVu_IuXO3xoQcj3BFsLBlxiX7rDTuDQ)](https://streamable.com/7vo61k)

#### Hybrid

Widget system: EWW | Support: No

[![click the circles!](https://private-user-images.githubusercontent.com/97237370/287201214-190deb1e-f6f5-46ce-8cf0-9b39944c079d.png?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NzczMDA2MDksIm5iZiI6MTc3NzMwMDMwOSwicGF0aCI6Ii85NzIzNzM3MC8yODcyMDEyMTQtMTkwZGViMWUtZjZmNS00NmNlLThjZjAtOWIzOTk0NGMwNzlkLnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNjA0MjclMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjYwNDI3VDE0MzE0OVomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTBlYmRhODJkMjVhMTI0YzgzMmZmMDkwNDIyODE3NmIzMzU3OWI1MTk1Mjc2Y2U0MDE0OWJkMzhhOThjZjJmY2ImWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JnJlc3BvbnNlLWNvbnRlbnQtdHlwZT1pbWFnZSUyRnBuZyJ9.zHCADt-7YG1-g-Hu3bamyb99foK3UlzLRhgNq8Q_cqI)](https://streamable.com/4oogot)

#### Windoes

Widget system: EWW | Support: No

[![Desktop Preview](https://private-user-images.githubusercontent.com/97237370/287201325-b15317b1-f295-49f5-b90c-fb6328b8d886.png?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NzczMDA2MDksIm5iZiI6MTc3NzMwMDMwOSwicGF0aCI6Ii85NzIzNzM3MC8yODcyMDEzMjUtYjE1MzE3YjEtZjI5NS00OWY1LWI5MGMtZmI2MzI4YjhkODg2LnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNjA0MjclMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjYwNDI3VDE0MzE0OVomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPWQxNGE3OWQzNTAxNTE1ZjBjMzVhMmE1MTU2ZGVjY2ExMjAxYzVlOTIxZGUxODA5YjQ4ZDY1YmY1ZWVhMGYzMDkmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JnJlc3BvbnNlLWNvbnRlbnQtdHlwZT1pbWFnZSUyRnBuZyJ9.hROgldacmJnv50VRTAo9YLxop-0_rvJsRixo8--bbxQ)](https://streamable.com/5qx614)

## • inspirations/copying •

- Inspiration: osu!lazer (Hybrid), Windows 11 (Windoes), AvdanOS (NovelKnock), Material Design 3 (m3ww & later)
- Copying: Absolutely, feel free. Just follow the license and it's all good