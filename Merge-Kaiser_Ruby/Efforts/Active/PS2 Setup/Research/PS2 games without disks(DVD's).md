---
tags:
  - ticket
status: in-progress
---
> about: [[PS2]]

- [[OPL]]
- [[how to format disk partition in terminal·cli]]

We use [[OPL ]] for this. Application for [[Free McBoot]]. It can run games from usb, HDD or over the Network.

### usb method

1. first format usb to [[FAT32]], [[how to format disk partition in terminal·cli]]
2. create `DVD` folder
3. rename `ISO` to the game code `note: you can find the game code on the compatibility list.`
4. copy the game to `DVD/`  on usb
5. run `sync`
6. try usb on the PS2. It should recognize the game
7. check compatibility of the game and the recommended `mods`

for more see [OPL forum](https://www.psx-place.com/forums/openps2loader-opl.232/)
for compatibility [Open PS2 Loader Compatibility List - Games](http://sx.sytes.net/oplcl/games.aspx)

#### on drives

- Small, older drives (4 to 32 GB). They're the most reliable, since the PS2 predates big flash drives and some large ones fail to enumerate at all.
- **USB 2.0** drives over USB 3.x ones. USB 3 drives are backward compatible on paper, but older, simpler controllers seem to behave better with the PS2's USB 1.1 ports.
- External hard drives (2.5" HDD) are a popular choice for bigger libraries. They work well if they're powered properly. Many need more power than the PS2 ports provide, so use a powered USB hub or a Y-cable with a second USB plug for extra power.

- Brands people commonly report working: SanDisk Cruzer-type drives, Kingston DataTraveler, and Transcend JetFlash. These are common, but not a guarantee.
