---
source: https://bbs.archlinux.org/viewtopic.php?id=233480
author: 
published: 
created: 2025-02-11
tags:
  - issue/arch/signature
  - archlinux-formus
---
During system upgrade, checking package integrity step, there was this error message:

error: jansson: signature from "Eli Schwartz <eschwartz@archlinux.org>" is marginal trust
:: File /var/cache/pacman/pkg/jansson-2.10-3-x86_64.pkg.tar.xz is corrupted (invalid or corrupted package (PGP signature)).
I read that the signture for Eli Schwartz is valid, but the second part is stopping the upgrade. First, I ran

pacman -Sy archlinux-keyring
before trying again, but it produced the same error message.  Next, I ran:

pacman-key --refresh-keys
but got the same error when trying to upgrade.

What else might work?