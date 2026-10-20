#bug #issue

Issue on [[second VPS]]
related:: [[SOLVED Invalid or Corrupted package (PGP signature)  Pacman & Package Upgrade Issues]]
___

Unable to find a solution for now ...

Prevents installing allot of packages and a general upgrade.

### current

OK, something is very strange with that key. I would delete it (pacman-key --delete) then reimport it by populating they keyring again (pacman-key --populate archlinux).
```bash
pacman-key --delete 91FFE0700E80619CEB73235CA88E23E377514E00
pacman-key --populate archlinux
```

### fix

`pacman-key --refresh-keys`
✅ fixed it
