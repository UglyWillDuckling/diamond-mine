#incident/hyprland 

[[Hyperland]], [[installed hyperland]][[end-4dots-hyprland]]

docs https://ii.clsty.link/en/ii-qs/04troubleshooting/#quickshell-not-launching-no-status-bar

```sh
```

==🔴error==
```sh
pkill qs; qs -c ii
# qs: symbol lookup error: qs: undefined symbol: _ZN23QUntypedPropertyBindingC1EP23QPropertyBindingPrivate, version Qt_6_PRIVATE_API
```

### solution :LiHammer:

needed to rebuild the [[Quickshell]]
https://github.com/end-4/dots-hyprland/issues/3602

```sh
cd ~/.cache/dots-hyprland && git pull && cd sdata/dist-arch/illogical-impulse-quickshell-git
makepkg -Cfs # make package
sudo pacman -U ./illogical-impulse-quickshell-git-*.pkg.tar.zst # install the package
```
