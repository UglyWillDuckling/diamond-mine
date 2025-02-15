---
source: https://babarowski.com/blog/change-gtk-file-picker-to-kde-dolphin/
published: 
created: 2025-01-19
tags:
  - article
  - error
  - issue
  - Dolphin
related:
  - "[[Dolphin File]]"
---

![GTKFileChooser window](https://babarowski.com/images/2021/gtkfilechooser.png)

GTK, while being widely adopted and utilized by thousands of apps is still suffering from that unresolved [Add an “icon view with thumbnails”\[0\]](https://gitlab.gnome.org/GNOME/gtk/-/issues/233) issue that has been residing in the project bug tracker for over 17 years (at the time of writing this article, November 2021). Personally, I’ve learned about it fairly recently reading [the article comparing GtkFileChooser to a clogged toilet\[1\]](https://jayfax.neocities.org/mediocrity/gnome-has-no-thumbnails-in-the-file-picker.html), which explains how the inconvenience caused by the issue mostly went unnoticed by many users (including me) for years. It seems like it was a turning point in the life of the issue, as now its presence is being brought up on almost a daily basis in many informal tech communities. Most often, the purpose is scapegoating GTK as an entirety. The reasoning is that if such a conceptually simple, UX-crucial and obviously present at any notable competitor feature cannot be implemented since almost beginning of the project, then something is seriously wrong with the project itself. Perhaps it’s a convoluted codebase, bad maintaining or inadequate concepts fossilized into the core of the project.

I had used GNOME as my DE for 4 years. This means I was obviously affected by the issue, but chose not to care about it for a while. Since a few months, I’ve been using only WMs for my daily work, which gave me a bit more flexibility in choosing the tools I like. This post explains how I installed alternative file chooser and set it to be the default one first in Firefox and (almost) globally on my Arch Linux setup.

## 

[\#](https://babarowski.com/blog/change-gtk-file-picker-to-kde-dolphin/#installing-dolphin) Installing Dolphin

A brief research conducts GNOME competitor – KDE includes a file chooser with said functionality implemented. File chooser is actually a part of KDE’s default file manager called [Dolphin\[2\]](https://apps.kde.org/dolphin/).

It can be installed on Arch as a separate package (without KDE and most of the dependencies). In my case, it required these dependencies to be installed:

```
$ sudo pacman -S dolphin
resolving dependencies...
:: There are 2 providers available for phonon-qt5-backend:
:: Repository extra
   1) phonon-qt5-gstreamer  2) phonon-qt5-vlc

Enter a number (default=1): 1
looking for conflicting packages...
warning: dependency cycle detected:
warning: usbmuxd will be installed before its libimobiledevice dependency
warning: dependency cycle detected:
warning: phonon-qt5-gstreamer will be installed before its phonon-qt5 dependency

Packages (82) attica-5.87.0-1  baloo-5.87.0-1  baloo-widgets-21.08.3-1  cdparanoia-10.2-8
              convertlit-1.8-10  dmraid-1.0.0.rc16.3-13  dosfstools-4.2-1
              ebook-tools-0.2.2-7  exiv2-0.27.5-1  gptfdisk-1.0.8-1
              gst-plugins-base-1.18.5-1  kactivities-5.87.0-1  karchive-5.87.0-1
              kauth-5.87.0-1  kbookmarks-5.87.0-1  kcmutils-5.87.0-1  kcodecs-5.87.0-1
              kcompletion-5.87.0-1  kconfig-5.87.0-1  kconfigwidgets-5.87.0-1
              kcoreaddons-5.87.0-1  kcrash-5.87.0-1  kdbusaddons-5.87.0-1
              kdeclarative-5.87.0-1  kded-5.87.0-1  kdnssd-5.87.0-1  kdsoap-2.0.0-1
              kdsoap-ws-discovery-client-git20200927-2  kfilemetadata-5.87.0-1
              kglobalaccel-5.87.0-1  kguiaddons-5.87.0-1  ki18n-5.87.0-1
              kiconthemes-5.87.0-1  kidletime-5.87.0-1  kio-5.87.0-1  kio-extras-21.08.3-1
              kitemviews-5.87.0-1  kjobwidgets-5.87.0-1  knewstuff-5.87.0-1
              knotifications-5.87.0-1  kpackage-5.87.0-1  kparts-5.87.0-1  kservice-5.87.0-1
              ktextwidgets-5.87.0-1  kuserfeedback-1.0.0-1  kwallet-5.87.0-1
              kwidgetsaddons-5.87.0-1  kwindowsystem-5.87.0-1  kxmlgui-5.87.0-1
              libatasmart-0.19-5  libblockdev-2.26-1  libbytesize-2.6-1
              libimobiledevice-1.3.0-3  libinih-53-1  libmtp-1.1.19-1  libplist-2.2.0-3
              libtommath-1.2.0-3  libusbmuxd-2.0.2-1  libvisual-0.4.0-8  libyaml-0.2.5-1
              libzip-1.8.0-1  mdadm-4.1-2  media-player-info-24-2  ndctl-71.1-1  parted-3.4-2
              phonon-qt5-4.11.1-2  phonon-qt5-gstreamer-4.10.0-2  polkit-qt5-0.114.0-1
              poppler-qt5-21.11.0-1  qt5-multimedia-5.15.2-1  qt5-speech-5.15.2-1
              solid-5.87.0-1  sonnet-5.87.0-1  syndication-5.87.0-1
              syntax-highlighting-5.87.0-2  taglib-1.12-1  udisks2-2.9.4-1  upower-0.99.13-1
              usbmuxd-1.1.1-1  volume_key-0.3.12-5  xfsprogs-5.13.0-1  dolphin-21.08.3-1

Total Download Size:    53.64 MiB
Total Installed Size:  200.73 MiB
```

Those caring about “not bloating screenfetch” might stop reading right here. I don’t belong to that clique, and just continue.

## 

[\#](https://babarowski.com/blog/change-gtk-file-picker-to-kde-dolphin/#enabling-dolphin-as-default-file-chooser) Enabling Dolphin as default file chooser

Now Dolphin is installed, but other applications needs to be instructed to use its component instead of GtkFileChooser. Unfortunately, whether GTK application is able to use alternative system dialogs or not depends on it implementing `xdg-desktop-portal` front-end service. Good portion of modern software does it, but be prepared to keep using GtkFileChooser in some apps.

Install packages `xdg-desktop-portal xdg-desktop-portal-kde`. Set environment variable `GTK_USE_PORTAL=1` in `/etc/environment` to apply this solution globally, or in `~/.bash_profile` to apply it for a user[\[3\]](https://wiki.archlinux.org/title/Uniform_look_for_Qt_and_GTK_applications#Consistent_file_dialog).

Reload session (log out and in). You should now be greeted with Dolphin file chooser in Firefox: !\[Dolphin file chooser window\]({{ site.baseurl }}images/2021/dolphinfilechooser.png)

Some other apps I use on a daily basis started using Dolphin instead of GTK file chooser out of a box:

- Chromium
- telegram-desktop

And some didn’t change their behavior:

- Discord (GTK)
- VSCode (GTK)
- KeePassXC (Qt)

Let’s try briefly checking what’s the problem with each of them.

### 

[\##](https://babarowski.com/blog/change-gtk-file-picker-to-kde-dolphin/#electron-apps-support-xdg_desktop_portal-since-14) Electron apps support XDG\_DESKTOP\_PORTAL since 14

Support for XDG\_DESKTOP\_PORTAL has been [merged to Electron in April 2021\[4\]](https://github.com/electron/electron/pull/19159), however it was evaluated as not stable enough to be introduced in 13.x version and postponed for the release of Electron 14. [The release happened on 31th August, 2021\[5\]](https://github.com/electron/electron/releases/tag/v14.0.0). Given the amount of time passed since then, it’s no wonder that few apps moved to Electron 14 from earlier versions.

In case of VSCode, a version of Electron it’s running on can be easily checked by opening developer console (Help > Toggle Developer Options) and executing:

```
> process.versions.electron
< "13.5.1"
```

As for now, neither Arch Linux package repositories or AUR provide any flavor of VSCode built with Electron 14. The only solution appears to be [building VSCode from scratch with custom internals\[6\]](https://github.com/Microsoft/vscode/wiki/How-to-Contribute#build-and-run). To me, it’s not worth the hassle and I’m going to just wait for VSCode to adopt Electron 14.

I had found no way of checking version of Electron Discord is running on, but I strongly suspect it’s the same cause as in VSCode case.

### 

[\##](https://babarowski.com/blog/change-gtk-file-picker-to-kde-dolphin/#qt-uses-qfiledialog) Qt uses QFileDialog

And it seems to suffer from the same issue, as GTKFileChooser.

!\[QFileDialog window\]({{ site.baseurl }}images/2021/qfiledialog.png)

[Running Qt in Flatpak Sandbox might mitigate the issue\[7\]](https://docs.flatpak.org/en/latest/portals-qt.html). Debian provides this functionality on Flatpak/Snap based environments with [`qt5-xdgdesktopportal-platformtheme`\[8\]](https://packages.debian.org/bullseye/qt5-xdgdesktopportal-platformtheme).

Unfortunately, I found no solution applicable for my setup.

## 

[\#](https://babarowski.com/blog/change-gtk-file-picker-to-kde-dolphin/#tweaking-file-chooser) Tweaking file chooser

Dolphin file chooser works wherever it’s possible now. But it still suffers from some caveats. Let’s go through the list and try to fix them.

### 

[\##](https://babarowski.com/blog/change-gtk-file-picker-to-kde-dolphin/#firefox-continuously-asks-to-be-set-as-default-browser-upon-launch) Firefox continuously asks to be set as default browser upon launch

Setting `XDG_DESKTOP_PORTAL=1` triggers another, long-lasting [bug\[9\]](https://bugzilla.mozilla.org/show_bug.cgi?id=1516290). This time, it affects Mozilla Firefox. It can be silenced by setting `browser.shell.checkDefaultBrowser` to `false` in `about:config`. Essentially equivalent of just going to *Settings* page and unchecking *Always check if Firefox is your default browser*.

### 

[\##](https://babarowski.com/blog/change-gtk-file-picker-to-kde-dolphin/#thumbnails-for-other-media-types) Thumbnails for other media types

Out of a box, Dolphin file chooser renders thumbnails for most of image file types. However, it’s not capable of generating thumbnails for videos.

!\[Dolphin file chooser window showing video files with no thumbnails\]({{ site.baseurl }}images/2021/novideothumbs.png)

Install optional dependency `ffmpegthumbs`. This provides functionality of rendering thumbnails for most video files.

You might be tempted to install other optional dependencies, like `kdegraphics-thumbnailers` or `taglib` for generating thumbnails for other types of files. Keep in mind they work in main Dolphin file browser, not in the file chooser. Unless you’re going to use Dolphin file browser itself, installing them doesn’t make any difference.

### 

[\##](https://babarowski.com/blog/change-gtk-file-picker-to-kde-dolphin/#icons) Icons

Dolphin installed separately from KDE does not feature themes. To use default icons set, install package `breeze-icons`.

### 

[\##](https://babarowski.com/blog/change-gtk-file-picker-to-kde-dolphin/#dark-theme-partially) Dark theme (partially)

Default theme of Dolphin file chooser is bright and it might not fit well with dark-color rices. While changing theme for Dolphin file browser is possible through Qt5 settings, ~~theme settings do not apply to the file chooser~~.

*UPDATE: It took several reboots for the file chooser to start respecting dark Qt5 theme, however I don’t know cause behind this behavior. Feel free to follow instructions below and it might work for you out-of-the-box or after a few days of some sort of transition.*

Changing Qt5 apps theme without KDE Plasma is somewhat challenging on its own, so I’ll explain the method I used, but unfortunately it won’t be any of help for file chooser color scheme.

Install `breeze`, `qt5ct` and run it. If you see a warning about program not properly configured, set `QT_QPA_PLATFORMTHEME=qt5ct` environment variable and run it again.

In the *Appearance* tab, select style *Breeze* and custom *Palette* called *darker*. Click *Ok* and re-run Dolphin.

It’s going to look pretty bad now. While most of the interface now has dark theme applied, background is solid white. Exit Dolphin and edit `~/.config/kdeglobals` file adding:

```
[Colors:View]
BackgroundNormal=23,23,24
```

(this setting might already be there, just replace the value then)

Use RGB format for any color you like.

To make GTK theme match new Breeze Darker, install `breeze-gtk`. You can set it using a convenient GUI called `lxappearance`.

## 

[\#](https://babarowski.com/blog/change-gtk-file-picker-to-kde-dolphin/#alternatives) Alternatives

GNOME’s powerlessness in fixing this bug yielded many unofficial, fork- or plugin-based solutions. To name one, `gtk3-patched-filechooser-icon-view` is available in AUR. If you’re all fine with GTK file chooser except for thumbnails matter, this might be a way to go. Personally, I find Dolphin file chooser much more appealing (even in its bright outfit) and admire UI transparency with full-fledged customization options. My recommendation is to try it out. In case you don’t like, just revert back to GTK.

## 

[\#](https://babarowski.com/blog/change-gtk-file-picker-to-kde-dolphin/#links) Links

```
[0]: https://gitlab.gnome.org/GNOME/gtk/-/issues/233
[1]: https://jayfax.neocities.org/mediocrity/gnome-has-no-thumbnails-in-the-file-picker.html
[2]: https://apps.kde.org/dolphin/
[3]: https://wiki.archlinux.org/title/Uniform_look_for_Qt_and_GTK_applications#Consistent_file_dialog
[4]: https://github.com/electron/electron/pull/19159
[5]: https://github.com/electron/electron/releases/tag/v14.0.0
[6]: https://github.com/Microsoft/vscode/wiki/How-to-Contribute#build-and-run
[7]: https://docs.flatpak.org/en/latest/portals-qt.html
[8]: https://packages.debian.org/bullseye/qt5-xdgdesktopportal-platformtheme
[9]: https://bugzilla.mozilla.org/show_bug.cgi?id=1516290
```