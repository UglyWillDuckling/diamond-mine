#howto/fix/kde 

about:: [[KDE Plasma]]
___

**Delete** all configuration files

```shell
rm -rf .config/plasma.emojierrc .config/plasma-interactiveconsolerc .config/plasma-localerc .config/plasmanotifyrc .config/plasma-org.kde.plasma.desktop-appletsrc .config/plasmaparc .config/plasmarc .config/plasmashellrc .config/plasma-welcomerc .config/plasma-workspace 
rm -rf .config/kded5rc .config/kdedefaults .config/kdeglobals .config/kde.org .config/xdg-desktop-portal-kderc 
rm -rf .cache/kde*
rm -rf .cache/org.kde.unitconversion .cache/polkit-kde-authentication-agent-1/
```