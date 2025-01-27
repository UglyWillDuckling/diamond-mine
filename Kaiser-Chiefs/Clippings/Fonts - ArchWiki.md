---
source: "https://wiki.archlinux.org/title/Fonts#Installation"
author:
published:
created: 2025-01-27
tags:
related:
---
![icon|50](https://wiki.archlinux.org/favicon.ico)

Related articles

- [Font configuration](https://wiki.archlinux.org/title/Font_configuration "Font configuration")
- [List of applications/Utilities#Font viewers](https://wiki.archlinux.org/title/List_of_applications/Utilities#Font_viewers "List of applications/Utilities")
- [List of applications/Multimedia#Font editors](https://wiki.archlinux.org/title/List_of_applications/Multimedia#Font_editors "List of applications/Multimedia")
- [Java Runtime Environment fonts](https://wiki.archlinux.org/title/Java_Runtime_Environment_fonts "Java Runtime Environment fonts")
- [Linux console#Fonts](https://wiki.archlinux.org/title/Linux_console#Fonts "Linux console")
- [Metric-compatible fonts](https://wiki.archlinux.org/title/Metric-compatible_fonts "Metric-compatible fonts")
- [Microsoft fonts](https://wiki.archlinux.org/title/Microsoft_fonts "Microsoft fonts")

From [Wikipedia:Computer font](https://en.wikipedia.org/wiki/Computer_font "wikipedia:Computer font"):

A computer font is implemented as a digital data file containing a set of graphically related [glyphs](https://en.wikipedia.org/wiki/glyph "wikipedia:glyph"). A computer font is designed and created using a font editor. A computer font specifically designed for the computer screen, and not for printing, is a screen font.

Note that certain font licenses may impose some legal limitations.

## Font formats

Most computer fonts used today are in either *bitmap* or *outline* data formats.

Bitmap fonts

Consist of a matrix of dots or pixels representing the image of each glyph in each face and size.

Outline or *vector* fonts

Use Bézier curves, drawing instructions and mathematical formulae to describe each glyph, which make the character outlines scalable to any size.

### Bitmap formats

- [Bitmap Distribution Format](https://en.wikipedia.org/wiki/Glyph_Bitmap_Distribution_Format "wikipedia:Glyph Bitmap Distribution Format") (BDF) by Adobe
- [OpenType Bitmap Fonts](https://fedoraproject.org/wiki/Changes/ProvideOpenTypeBitmapFonts "fedora:Changes/ProvideOpenTypeBitmapFonts") (OTB)
- [PC Screen Font](https://en.wikipedia.org/wiki/PC_Screen_Font "wikipedia:PC Screen Font") (PSF) used by the Kernel for console fonts, not supported by Xorg (for Unicode PSF files the extension is `psfu`)
- [Portable Compiled Format](https://en.wikipedia.org/wiki/Portable_Compiled_Format "wikipedia:Portable Compiled Format") (PCF) by Xorg

These formats can also be gzipped. See [#Bitmap](https://wiki.archlinux.org/title/#Bitmap) for the available bitmap fonts.

### Outline formats

- [PostScript fonts](https://en.wikipedia.org/wiki/PostScript_fonts "wikipedia:PostScript fonts") by Adobe – has various formats, e.g: Printer Font ASCII (PFA) and Printer Font Binary (PFB)
- [TrueType](https://en.wikipedia.org/wiki/TrueType "wikipedia:TrueType") by Apple and Microsoft (file extension: `ttf`)
- [OpenType](https://en.wikipedia.org/wiki/OpenType "wikipedia:OpenType") by Microsoft, built on TrueType (file extensions: `otf`, `ttf`)

For most purposes, the technical differences between TrueType and OpenType can be ignored.

### Other formats

The font editing application [FontForge](https://fontforge.github.io/en-US/) ([fontforge](https://archlinux.org/packages/?name=fontforge)) can store fonts in its native text-based format—Spline Font Database (`.sfd`).

The typesetting application [TeX Live](https://wiki.archlinux.org/title/TeX_Live "TeX Live") and its companion font software [Metafont](https://en.wikipedia.org/wiki/Metafont "wikipedia:Metafont") traditionally renders characters using its own methods. Some file extensions used for fonts from these two programs are `*pk`, `*gf`, `mf` and `vf`. Modern versions can also use TrueType and OpenType fonts.

The [SVG](https://www.w3.org/TR/SVG/fonts.html) format also has its own font description method.

## Installation

There are various methods for installing fonts.

### Pacman

Fonts and font collections in the enabled repositories can be installed using [pacman](https://wiki.archlinux.org/title/Pacman "Pacman").

Available fonts may be found by [querying packages](https://wiki.archlinux.org/title/Pacman#Querying_package_databases "Pacman") (e.g. for `font` or `ttf`).

### Creating a package

You should give pacman the ability to manage your fonts, which is done by [creating an Arch package](https://wiki.archlinux.org/title/Creating_packages "Creating packages"). These can also be shared with the community in the [AUR](https://wiki.archlinux.org/title/AUR "AUR"). The packages to install fonts are particularly similar; see [Font packaging guidelines](https://wiki.archlinux.org/title/Font_packaging_guidelines "Font packaging guidelines").

The family name of a font file can be acquired with the use of `fc-query` for example: `fc-query -f '%{family[0]}\n' /path/to/file`. The formatting is described in [FcPatternFormat(3)](https://man.archlinux.org/man/FcPatternFormat.3).

### Manual installation

The recommended way of adding fonts that are not in the repositories of your system is described in [#Creating a package](https://wiki.archlinux.org/title/#Creating_a_package). This gives pacman the ability to remove or update them at a later time.

Alternatively, fonts can be installed manually:

- For a single user, install fonts to `~/.local/share/fonts/`.
- In many cases this suffices, unless you run graphical applications as other users.
- In the past `~/.fonts/` was used, but is now deprecated.
- For system-wide (all users) installation, place your fonts under `/usr/local/share/fonts/`.
- You may need to create the directory first: `mkdir -p /usr/local/share/fonts`.
- `/usr/share/fonts/` is under the purview of the package manager, and should not be modified manually.

The creation of a subdirectory structure is up to the user, and varies among Linux distributions. For clarity, it is good to keep each font in its own directory. [Fontconfig](https://wiki.archlinux.org/title/Fontconfig "Fontconfig") will search its default paths recursively, ensuring nested files get picked up.

An example structure might be:

```
/usr/local/share/fonts/
├── otf
│   └── SourceCodeVariable
│       ├── SourceCodeVariable-Italic.otf
│       └── SourceCodeVariable-Roman.otf
└── ttf
    ├── AnonymousPro
    │   ├── Anonymous-Pro-B.ttf
    │   ├── Anonymous-Pro-I.ttf
    │   └── Anonymous-Pro.ttf
    └── CascadiaCode
        ├── CascadiaCode-Bold.ttf
        ├── CascadiaCode-Light.ttf
        └── CascadiaCode-Regular.ttf
```

The font files need to have sufficient read permissions for all users, i.e. at least [chmod](https://wiki.archlinux.org/title/Chmod "Chmod") `444` for files, and `555` for directories.

For the Xserver to load fonts directly (as opposed to the use of a *font server*), the directory for your newly added font must be added with a FontPath entry. This entry is located in the *Files* section of your [Xorg configuration file](https://wiki.archlinux.org/title/Xorg#Configuration "Xorg") (e.g. `/etc/X11/xorg.conf` or `/etc/xorg.conf`). See [#Older applications](https://wiki.archlinux.org/title/#Older_applications) for more detail.

Finally, update the Fontconfig cache (usually unnecessary as software using the Fontconfig library does this):

```
$ fc-cache
```

### Older applications

With older applications that do not support Fontconfig (e.g. GTK 1.x applications, and `xfontsel`) the index will need to be created in the font directory:

```
$ mkfontscale
$ mkfontdir
```

Or to include more than one folder with one command:

```
$ for dir in /font/dir1/ /font/dir2/; do xset +fp $dir; done && xset fp rehash
```

Or if fonts were installed in a different sub-folders under the e.g. `/usr/share/fonts`:

```
$ for dir in * ; do if [  -d  "$dir"  ]; then cd "$dir";xset +fp "$PWD" ;mkfontscale; mkfontdir;cd .. ;fi; done && xset fp rehash
```

At times the X server may fail to load the fonts directory and you will need to rescan all the `fonts.dir` files:

```
# xset +fp /usr/share/fonts/misc # Inform the X server of new directories
# xset fp rehash                # Forces a new rescan
```

To check that the font(s) is included:

```
$ xlsfonts | grep fontname
```

**Note:** Many packages will automatically configure Xorg to use the font upon installation. If that is the case with your font, this step is not necessary.

This can also be set globally in `/etc/X11/xorg.conf` or `/etc/X11/xorg.conf.d`.

Here is an example of the section that must be added to `/etc/X11/xorg.conf`. Add or remove paths based on your particular font requirements.

```
# Let X.Org know about the custom font directories
Section "Files"
    FontPath    "/usr/share/fonts/100dpi"
    FontPath    "/usr/share/fonts/75dpi"
    FontPath    "/usr/share/fonts/cantarell"
    FontPath    "/usr/share/fonts/cyrillic"
    FontPath    "/usr/share/fonts/encodings"
    FontPath    "/usr/share/fonts/misc"
    FontPath    "/usr/share/fonts/truetype"
    FontPath    "/usr/share/fonts/TTF"
    FontPath    "/usr/share/fonts/util"
EndSection
```

### Pango warnings

When [Pango](https://www.pango.org/) is in use on your system it will read from [Fontconfig](https://wiki.archlinux.org/title/Fontconfig "Fontconfig") to sort out where to source fonts.

```
(process:5741): Pango-WARNING **: failed to choose a font, expect ugly output. engine-type='PangoRenderFc', script='common'
(process:5741): Pango-WARNING **: failed to choose a font, expect ugly output. engine-type='PangoRenderFc', script='latin'
```

If you are seeing errors similar to this and/or seeing blocks instead of characters in your application then you need to add fonts and update the font cache. This example uses the [ttf-liberation](https://archlinux.org/packages/?name=ttf-liberation) fonts to illustrate the solution (after successful installation of the package) and runs as root to enable them system-wide.

```
# fc-cache
```
```
/usr/share/fonts: caching, new cache contents: 0 fonts, 3 dirs
/usr/share/fonts/TTF: caching, new cache contents: 16 fonts, 0 dirs
/usr/share/fonts/encodings: caching, new cache contents: 0 fonts, 1 dirs
/usr/share/fonts/encodings/large: caching, new cache contents: 0 fonts, 0 dirs
/usr/share/fonts/util: caching, new cache contents: 0 fonts, 0 dirs
/var/cache/fontconfig: cleaning cache directory
fc-cache: succeeded
```

You can test for a default font being set like so:

```
$ fc-match
```
```
LiberationMono-Regular.ttf: "Liberation Mono" "Regular"
```

## Font packages

This is a selective list that includes many font packages from the [AUR](https://wiki.archlinux.org/title/AUR "AUR") along with those in the official repositories.

**Tip:** [Archfonts](https://github.com/ternstor/distrofonts) is a Python script that can be used to generate an overview of all the TTF fonts found in the official repositories and in the AUR.

### Bitmap

- Default 8×16
- [Berry](https://github.com/seraxis/pcf-spectrum-berry) ([pcf-spectrum-berry](https://aur.archlinux.org/packages/pcf-spectrum-berry/)<sup><small>AUR</small></sup>) – 8px
- [Dina](https://www.dcmembers.com/jibsen/download/61/) ([dina-font](https://aur.archlinux.org/packages/dina-font/)<sup><small>AUR</small></sup>) – 6pt, 8pt, 9pt, 10pt, monospaced, based on Proggy
- [Efont](http://openlab.jp/efont/unicode/) ([efont-unicode-bdf](https://aur.archlinux.org/packages/efont-unicode-bdf/)<sup><small>AUR</small></sup>) – 10px, 12px, 14px, 16px, 24px, normal, bold and italic
- [GNU Unifont](https://unifoundry.com/unifont.html) ([bdf-unifont](https://aur.archlinux.org/packages/bdf-unifont/)<sup><small>AUR</small></sup>) – 8×16, 16×16 ([most extensive](https://en.wikipedia.org/wiki/Unicode_font#Comparison_of_fonts "wikipedia:Unicode font") Unicode coverage of any font)
- [Gohu](https://font.gohu.org/) ([gohufont](https://aur.archlinux.org/packages/gohufont/)<sup><small>AUR</small></sup>) – 11px, 14px, normal and bold
- [Kissinger 2](https://typedesign.replit.app/kissinger2.html) – 8×16, 16×16 (Unifont competitor)
- [Lime](https://artwizaleczapka.sourceforge.net/) ([artwiz-fonts](https://aur.archlinux.org/packages/artwiz-fonts/)<sup><small>AUR</small></sup>)
- [ProFont](https://tobiasjung.name/profont/) ([ttf-profont-iix](https://aur.archlinux.org/packages/ttf-profont-iix/)<sup><small>AUR</small></sup>) – 10px, 11px, 12px, 15px, 17px, 22px, 29px, normal
- [Proggy](https://en.wikipedia.org/wiki/Proggy_programming_fonts "wikipedia:Proggy programming fonts") ([proggyfonts](https://aur.archlinux.org/packages/proggyfonts/)<sup><small>AUR</small></sup>) – Has different variants
- [Tamsyn](http://www.fial.com/~scott/tamsyn-font/) ([tamsyn-font](https://aur.archlinux.org/packages/tamsyn-font/)<sup><small>AUR</small></sup>)
- [Tewi](https://github.com/lucy/tewi-font) ([bdf-tewi-git](https://aur.archlinux.org/packages/bdf-tewi-git/)<sup><small>AUR</small></sup>)

Works with Pango 1.44 and later:

- [Cozette](https://github.com/slavfox/Cozette/) ([cozette-otb](https://aur.archlinux.org/packages/cozette-otb/)<sup><small>AUR</small></sup>)
- [Gohufont](https://font.gohu.org/) ([gohufont-otb](https://aur.archlinux.org/packages/gohufont-otb/)<sup><small>AUR</small></sup>)
- [Misc Fixed](https://xorg.freedesktop.org/releases/individual/font/) ([xorg-fonts-misc-otb](https://aur.archlinux.org/packages/xorg-fonts-misc-otb/)<sup><small>AUR</small></sup>)
- [ProFont](https://tobiasjung.name/profont/) ([profont-otb](https://aur.archlinux.org/packages/profont-otb/)<sup><small>AUR</small></sup>) – OpenType Bitmap (OTB) variant of ProFont
- [Terminus](https://terminus-font.sourceforge.net/) ([terminus-font](https://archlinux.org/packages/?name=terminus-font))
- More [OTB](https://aur.archlinux.org/packages/?O=0&SeB=n&K=-otb&outdated=&SB=n&SO=a&PP=50&do_Search=Go) fonts on the AUR

### Latin script

#### Families

Packages [providing a base font set](https://wiki.archlinux.org/title/Font_package_guidelines#Provides "Font package guidelines"):

- [Bitstream Vera](https://en.wikipedia.org/wiki/Bitstream_Vera "wikipedia:Bitstream Vera") ([ttf-bitstream-vera](https://archlinux.org/packages/?name=ttf-bitstream-vera)) – Includes sans-serif, serif, and monospaced fonts. Bitstream Vera Sans is metrically compatible with [Verdana](https://en.wikipedia.org/wiki/Verdana "wikipedia:Verdana").
- [Croscore fonts](https://en.wikipedia.org/wiki/Croscore_fonts "wikipedia:Croscore fonts") ([ttf-croscore](https://archlinux.org/packages/?name=ttf-croscore)) – [Metric-compatible fonts](https://wiki.archlinux.org/title/Metric-compatible_fonts "Metric-compatible fonts") for Helvetica, Times, Courier and Georgia — named Arimo, Tinos, Cousine and Gelasio respectively, shipped with Chrome OS
- [DejaVu fonts](https://en.wikipedia.org/wiki/DejaVu_fonts "wikipedia:DejaVu fonts") ([ttf-dejavu](https://archlinux.org/packages/?name=ttf-dejavu)) – Bitstream Vera modified for greater Unicode coverage
- [Droid](https://en.wikipedia.org/wiki/Droid_\(font\) "wikipedia:Droid (font)") ([ttf-droid](https://archlinux.org/packages/?name=ttf-droid)) – Default font for older Android versions with wide Unicode coverage including CJK but not symbols and emojis
- [GNU FreeFont](https://en.wikipedia.org/wiki/GNU_FreeFont "wikipedia:GNU FreeFont") ([gnu-free-fonts](https://archlinux.org/packages/?name=gnu-free-fonts)) – Includes three fonts — FreeSans, FreeSerif and FreeMono — that are clones of Helvetica, Times, and Courier respectively. Most Latin characters are from [URW](https://en.wikipedia.org/wiki/URW_Type_Foundry "wikipedia:URW Type Foundry") [Ghostscript](https://en.wikipedia.org/wiki/Ghostscript#Free_fonts "wikipedia:Ghostscript") fonts (e.g., [Nimbus Roman](https://en.wikipedia.org/wiki/Nimbus_Roman_No._9_L "wikipedia:Nimbus Roman No. 9 L"), [Nimbus Sans](https://en.wikipedia.org/wiki/Nimbus_Sans "wikipedia:Nimbus Sans")), non-Latin characters come from many sources with good Unicode coverage, but do not include CJK.
- [IBM Plex](https://en.wikipedia.org/wiki/IBM_Plex "wikipedia:IBM Plex") ([ttf-ibm-plex](https://archlinux.org/packages/?name=ttf-ibm-plex)) – Serif, sans-serif, condensed sans-serif and monospace with true italics
- [Input](https://input.djr.com/info/) ([ttf-input](https://archlinux.org/packages/?name=ttf-input)) – Fonts for code from DJR & Font Bureau
- [Liberation fonts](https://en.wikipedia.org/wiki/Liberation_fonts "wikipedia:Liberation fonts") ([ttf-liberation](https://archlinux.org/packages/?name=ttf-liberation)) – [Metric-compatible fonts](https://wiki.archlinux.org/title/Metric-compatible_fonts "Metric-compatible fonts") for Helvetica, Times, and Courier, but are visually different
- [Libertinus Fonts](https://github.com/alerque/libertinus) ([otf-libertinus](https://archlinux.org/packages/?name=otf-libertinus)) – Forks of [Linux Libertine](https://en.wikipedia.org/wiki/Linux_Libertine "wikipedia:Linux Libertine") and Linux Biolinum, with extended math support, see [#Math](https://wiki.archlinux.org/title/#Math)
- [Microsoft fonts](https://wiki.archlinux.org/title/Microsoft_fonts "Microsoft fonts") ([ttf-ms-win11](https://aur.archlinux.org/packages/ttf-ms-win11/)<sup><small>AUR</small></sup>) – Windows 11 fonts (Windows 11 installation or installation medium needed)
- [Noto fonts](https://en.wikipedia.org/wiki/Noto_fonts "wikipedia:Noto fonts") ([noto-fonts](https://archlinux.org/packages/?name=noto-fonts)) – Google font family with full Unicode coverage if installed with its emoji and CJK optional dependencies

Packages not providing a base font set:

- [B612](https://b612-font.com/) ([ttf-b612](https://aur.archlinux.org/packages/ttf-b612/)<sup><small>AUR</small></sup>) – Open-source font family (sans and mono) sponsored by Airbus, designed for comfort of reading on aircraft cockpit screens
- [Ghostscript](https://en.wikipedia.org/wiki/Ghostscript#Free_fonts "wikipedia:Ghostscript") ([gsfonts](https://archlinux.org/packages/?name=gsfonts)) – The Ghostscript fonts donated by [URW](https://en.wikipedia.org/wiki/URW_Type_Foundry "wikipedia:URW Type Foundry"), includes clones of Helvetica, Times, Courier, and others. GNU FreeFont ([gnu-free-fonts](https://archlinux.org/packages/?name=gnu-free-fonts)) and TeX Gyre fonts ([tex-gyre-fonts](https://archlinux.org/packages/?name=tex-gyre-fonts)) are both partially based on the Ghostscript fonts
- [Luxi fonts](https://en.wikipedia.org/wiki/Luxi_fonts "wikipedia:Luxi fonts") ([font-bh-ttf](https://aur.archlinux.org/packages/font-bh-ttf/)<sup><small>AUR</small></sup>) – X.Org font family similar to Lucida
- [Roboto](https://en.wikipedia.org/wiki/Roboto "wikipedia:Roboto") ([ttf-roboto](https://archlinux.org/packages/?name=ttf-roboto)) – Default font for newer Android versions where it is complemented by Noto fonts for languages not supported like CJK
- [TeX Gyre fonts](https://www.gust.org.pl/projects/e-foundry/tex-gyre/index_html) ([tex-gyre-fonts](https://archlinux.org/packages/?name=tex-gyre-fonts)) – Created by the Polish GUST association of TeX users, mostly based on [URW](https://en.wikipedia.org/wiki/URW_Type_Foundry "wikipedia:URW Type Foundry") [Ghostscript](https://en.wikipedia.org/wiki/Ghostscript#Free_fonts "wikipedia:Ghostscript") fonts, includes clones of Helvetica, Times, Courier, and others. Some have their own math companion fonts, see [#Math](https://wiki.archlinux.org/title/#Math).
- [Ubuntu font family](https://en.wikipedia.org/wiki/Ubuntu_Font_Family "wikipedia:Ubuntu Font Family") ([ttf-ubuntu-font-family](https://archlinux.org/packages/?name=ttf-ubuntu-font-family))

Legacy Microsoft font packages:

- [Microsoft fonts](https://corefonts.sourceforge.net/) ([ttf-ms-fonts](https://aur.archlinux.org/packages/ttf-ms-fonts/)<sup><small>AUR</small></sup>) – Andalé Mono, Courier New, Arial, Arial Black, Comic Sans, Impact, Lucida Sans, Microsoft Sans Serif, Trebuchet, Verdana, Georgia, Times New Roman
- Vista fonts ([ttf-vista-fonts](https://aur.archlinux.org/packages/ttf-vista-fonts/)<sup><small>AUR</small></sup>) – Consolas, Calibri, Candara, Corbel, Cambria, Constantia

#### Monospaced

Fonts supporting "programming ligatures" (e.g., the display of the "->" sequence as a double-width "⟶" glyph) are identified below with a ⟶ sign. For more monospaced fonts, also see [#Bitmap](https://wiki.archlinux.org/title/#Bitmap) and [#Families](https://wiki.archlinux.org/title/#Families).

- [Anonymous Pro](https://www.marksimonson.com/fonts/view/anonymous-pro) ([ttf-anonymous-pro](https://archlinux.org/packages/?name=ttf-anonymous-pro), included in [ttf-google-fonts-git](https://aur.archlinux.org/packages/ttf-google-fonts-git/)<sup><small>AUR</small></sup>)
- [Cascadia Code](https://github.com/microsoft/cascadia-code) ([ttf-cascadia-code](https://archlinux.org/packages/?name=ttf-cascadia-code)) ⟶ – Designed to enhance the look of the Windows Terminal, with programming ligatures, released by Microsoft under the Open Font License
- [Courier Prime](https://quoteunquoteapps.com/courierprime/) ([ttf-courier-prime](https://aur.archlinux.org/packages/ttf-courier-prime/)<sup><small>AUR</small></sup>) – Courier alternative which has been supplemented by a sans serif font and a version optimized for programming, released under the Open Font License
- [Envy Code R](https://damieng.com/envy-code-r) ([ttf-envy-code-r](https://aur.archlinux.org/packages/ttf-envy-code-r/)<sup><small>AUR</small></sup>) – Font designed for programmers
- Fantasque Sans Mono ([ttf-fantasque-sans-mono](https://archlinux.org/packages/?name=ttf-fantasque-sans-mono), [otf-fantasque-sans-mono](https://archlinux.org/packages/?name=otf-fantasque-sans-mono))
- [Fira Mono](https://en.wikipedia.org/wiki/Fira_\(typeface\) "wikipedia:Fira (typeface)") ([ttf-fira-mono](https://archlinux.org/packages/?name=ttf-fira-mono), [otf-fira-mono](https://archlinux.org/packages/?name=otf-fira-mono)) – Font optimized for small screens and adopted by Mozilla for the Firefox OS
- [Fira Code](https://en.wikipedia.org/wiki/Fira_\(typeface\)#Fira_Code "wikipedia:Fira (typeface)") ([ttf-fira-code](https://archlinux.org/packages/?name=ttf-fira-code)) ⟶ – Extension of Fira Mono with programming ligatures for common programming multi-character combinations
- [Hack](https://sourcefoundry.org/hack/) ([ttf-hack](https://archlinux.org/packages/?name=ttf-hack)) - Open-source monospaced font, used as the default in KDE Plasma
- [Hasklig](https://github.com/i-tu/Hasklig) ([otf-hasklig](https://aur.archlinux.org/packages/otf-hasklig/)<sup><small>AUR</small></sup>) - A code font with monospaced ligatures
- [Hermit](https://pcaro.es/p/hermit/) ([otf-hermit](https://archlinux.org/packages/?name=otf-hermit)) - A font for programmers, by a programmer
- [Inconsolata](https://en.wikipedia.org/wiki/Inconsolata "wikipedia:Inconsolata") ([ttf-inconsolata](https://archlinux.org/packages/?name=ttf-inconsolata), included in [ttf-google-fonts-git](https://aur.archlinux.org/packages/ttf-google-fonts-git/)<sup><small>AUR</small></sup>) – Designed for source code listing, inspired by Consolas and Letter Gothic
- [Inconsolata-g](https://leonardo-m.livejournal.com/77079.html) ([ttf-inconsolata-g](https://aur.archlinux.org/packages/ttf-inconsolata-g/)<sup><small>AUR</small></sup>) – Adds some programmer-friendly modifications
- [Iosevka](https://be5invis.github.io/Iosevka/) ([ttc-iosevka](https://archlinux.org/packages/?name=ttc-iosevka)) ⟶ – Slender sans-serif and slab-serif typeface inspired by Pragmata Pro, M+ and PF DIN Mono, designed to be the ideal font for programming; it supports programming ligatures and over 2000 latin, greek, cyrillic, phonetic and PowerLine glyphs
- [JetBrains Mono](https://www.jetbrains.com/lp/mono/) ([ttf-jetbrains-mono](https://archlinux.org/packages/?name=ttf-jetbrains-mono)) ⟶ – Free and open-source font developed by JetBrains
- [Lilex](https://mishamyrt.github.io/Lilex/) ([ttf-lilex](https://aur.archlinux.org/packages/ttf-lilex/)<sup><small>AUR</small></sup>) ⟶ – Free and open-source modern programming font containing a set of ligatures for common programming multi-character combinations
- [Lucida Typewriter](https://en.wikipedia.org/wiki/Lucida_Typewriter "wikipedia:Lucida Typewriter") (included in package [jre](https://aur.archlinux.org/packages/jre/)<sup><small>AUR</small></sup>)
- [Menlo](https://en.wikipedia.org/wiki/Menlo_\(typeface\) "wikipedia:Menlo (typeface)") ([ttf-meslo](https://aur.archlinux.org/packages/ttf-meslo/)<sup><small>AUR</small></sup>) – Customized version of Apple's Menlo Regular font for OS X with larger vertical gap spacing
- [Monaco](https://en.wikipedia.org/wiki/Monaco_\(typeface\) "wikipedia:Monaco (typeface)") ([ttf-monaco](https://aur.archlinux.org/packages/ttf-monaco/)<sup><small>AUR</small></sup>) – Proprietary font designed by Apple for OS X
- Monofur ([ttf-monofur](https://archlinux.org/packages/?name=ttf-monofur))
- [Mononoki](https://madmalik.github.io/mononoki) ([ttf-mononoki](https://aur.archlinux.org/packages/ttf-mononoki/)<sup><small>AUR</small></sup>) – A font for programming and code review
- [Roboto Mono](https://en.wikipedia.org/wiki/Roboto#Roboto_Mono "wikipedia:Roboto") ([ttf-roboto-mono](https://archlinux.org/packages/?name=ttf-roboto-mono)) – Based on Roboto ([ttf-roboto](https://archlinux.org/packages/?name=ttf-roboto))
- [Source Code Pro](https://en.wikipedia.org/wiki/Source_Code_Pro "wikipedia:Source Code Pro") ([adobe-source-code-pro-fonts](https://archlinux.org/packages/?name=adobe-source-code-pro-fonts), included in [ttf-google-fonts-git](https://aur.archlinux.org/packages/ttf-google-fonts-git/)<sup><small>AUR</small></sup>)
- [Comic Mono](https://dtinth.github.io/comic-mono-font/) ([ttf-comic-mono-git](https://aur.archlinux.org/packages/ttf-comic-mono-git/)<sup><small>AUR</small></sup>) A legible monospace font… the very typeface you’ve been trained to recognize since childhood, ergo Comic Sans

Relevant websites:

- [Trevor Lowing's font list](http://www.lowing.org/fonts/)
- [Slant: What are the best programming fonts?](https://www.slant.co/topics/67/~what-are-the-best-programming-fonts)
- [Stack Overflow: Recommended fonts for programming](https://stackoverflow.com/questions/4689/recommended-fonts-for-programming)
- [Programming Fonts - Test Drive](https://www.programmingfonts.org/)
- [Programming Fonts Compare](http://s9w.io/font_compare)
- [Coding Font by Typogram](https://www.codingfont.com/)

#### Sans-serif

- [Andika](https://software.sil.org/andika/) ([ttf-andika](https://aur.archlinux.org/packages/ttf-andika/)<sup><small>AUR</small></sup>)
- [Cantarell](https://en.wikipedia.org/wiki/Cantarell_\(typeface\) "wikipedia:Cantarell (typeface)") ([cantarell-fonts](https://archlinux.org/packages/?name=cantarell-fonts)) – Default font supplied with GNOME, it is required by the GNOME and GTK 3 related packages
- [DMCA Sans Serif](https://typedesign.replit.app/dmcasansserif.html) ([ttf-dmcasansserif](https://aur.archlinux.org/packages/ttf-dmcasansserif/)<sup><small>AUR</small></sup>) – General purpose sans serif font metric-compatible with Microsoft Consolas
- [Fira Sans](https://en.wikipedia.org/wiki/Fira_\(typeface\) "wikipedia:Fira (typeface)") ([ttf-fira-sans](https://archlinux.org/packages/?name=ttf-fira-sans), [otf-fira-sans](https://archlinux.org/packages/?name=otf-fira-sans)) – Sans serif font designed by Erik Spiekermann for Mozilla and the Firefox OS. Fira Mono and Fira Code are monospaced companions of Fira Sans (see [#Monospaced](https://wiki.archlinux.org/title/#Monospaced)).
- [FreeSans](https://en.wikipedia.org/wiki/FreeSans "wikipedia:FreeSans") ([gnu-free-fonts](https://archlinux.org/packages/?name=gnu-free-fonts)) – [Visually similar](https://commons.wikimedia.org/wiki/File:FreeSansDemonstration.png "commons:File:FreeSansDemonstration.png") to Helvetica but metrically different, see [#Families](https://wiki.archlinux.org/title/#Families)
- [Inter](https://github.com/rsms/inter) ([inter-font](https://archlinux.org/packages/?name=inter-font)) – A geometric neo-grotesque font designed for user interfaces
- [Jost\*](https://indestructibletype.com/Jost.html) ([otf-jost](https://aur.archlinux.org/packages/otf-jost/)<sup><small>AUR</small></sup>) – An open-source typeface based on [Futura](https://en.wikipedia.org/wiki/Futura_\(typeface\) "wikipedia:Futura (typeface)")
- [Liberation Sans](https://en.wikipedia.org/wiki/Liberation_Sans "wikipedia:Liberation Sans") ([ttf-liberation](https://archlinux.org/packages/?name=ttf-liberation)) – Metric-compatible with Helvetica but [visually distinct](https://commons.wikimedia.org/wiki/File:Font_Sample_-_Liberation_Sans.svg "commons:File:Font Sample - Liberation Sans.svg"), see [#Families](https://wiki.archlinux.org/title/#Families)
- [Montserrat](https://fonts.google.com/specimen/Montserrat) ([otf-montserrat](https://archlinux.org/packages/?name=otf-montserrat)) – An open-source font that shares similarities with [Gotham](https://en.wikipedia.org/wiki/Gotham_\(typeface\) "wikipedia:Gotham (typeface)") and [Proxima Nova](https://en.wikipedia.org/wiki/Proxima_Nova "wikipedia:Proxima Nova")
- [Nunito](https://fonts.google.com/specimen/Nunito) ([ttf-nunito](https://archlinux.org/packages/?name=ttf-nunito)) – An open-source font with rounded terminal, hence shares similarities with [Gotham Rounded](https://en.wikipedia.org/wiki/Gotham_\(typeface\)#Variations "wikipedia:Gotham (typeface)") and [Proxima Soft](https://fonts.adobe.com/fonts/proxima-soft)
- [Open Sans](https://en.wikipedia.org/wiki/Open_Sans "wikipedia:Open Sans") ([ttf-opensans](https://archlinux.org/packages/?name=ttf-opensans)) – Sans serif font commissioned by Google, based on Droid sans but slightly wider
- [PT Sans](https://en.wikipedia.org/wiki/PT_Sans "wikipedia:PT Sans") ([ttf-google-fonts-git](https://aur.archlinux.org/packages/ttf-google-fonts-git/)<sup><small>AUR</small></sup>) – 3 major variations: normal, narrow, and caption - Unicode: Latin, Cyrillic
- [Source Sans](https://en.wikipedia.org/wiki/Source_Sans "wikipedia:Source Sans") ([adobe-source-sans-fonts](https://archlinux.org/packages/?name=adobe-source-sans-fonts)) – Open-source sans serif font from Adobe with a design based on News Gothic and Franklin Gothic
- [Tahoma (Wine Replacement)](https://www.winehq.org/announce/0.9.47) ([ttf-tahoma](https://aur.archlinux.org/packages/ttf-tahoma/)<sup><small>AUR</small></sup>) – Open-source substitute for [Tahoma](https://en.wikipedia.org/wiki/Tahoma_\(typeface\) "wikipedia:Tahoma (typeface)") developed by the [Wine](https://wiki.archlinux.org/title/Wine "Wine") project. It was created because many Windows applications expected Tahoma to be available.

#### Serif

- [Bitstream Charter](https://en.wikipedia.org/wiki/Bitstream_Charter "wikipedia:Bitstream Charter") ([ttf-bitstream-charter](https://aur.archlinux.org/packages/ttf-bitstream-charter/)<sup><small>AUR</small></sup>, [otf-bitstream-charter](https://aur.archlinux.org/packages/otf-bitstream-charter/)<sup><small>AUR</small></sup>) – Originally a commercial font designed by [Matthew Carter](https://en.wikipedia.org/wiki/Matthew_Carter "wikipedia:Matthew Carter"). A version was released under a free license and later [converted](https://practicaltypography.com/charter.html) to modern formats (provided as the aforementioned packages).
- [Bodoni\*](https://indestructibletype.com/Bodoni.html) ([otf-bodoni](https://aur.archlinux.org/packages/otf-bodoni/)<sup><small>AUR</small></sup>) – An open-source [Bodoni](https://en.wikipedia.org/wiki/Bodoni "wikipedia:Bodoni") revival
- [Crimson](https://github.com/skosch/Crimson) ([otf-crimson](https://archlinux.org/packages/?name=otf-crimson)) – An open-source font that shares similarities with [Minion](https://en.wikipedia.org/wiki/Minion_\(typeface\) "wikipedia:Minion (typeface)")
- [EB Garamond](https://en.wikipedia.org/wiki/EB_Garamond "wikipedia:EB Garamond") ([ebgaramond-otf](https://aur.archlinux.org/packages/ebgaramond-otf/)<sup><small>AUR</small></sup>) – An open-source [Garamond](https://en.wikipedia.org/wiki/Garamond "wikipedia:Garamond") revival, the aforementioned package is the version developed by [Octavio Pardo](https://github.com/octaviopardo/EBGaramond12)
- [FreeSerif](https://en.wikipedia.org/wiki/FreeSerif "wikipedia:FreeSerif") ([gnu-free-fonts](https://archlinux.org/packages/?name=gnu-free-fonts)) – [Visually similar](https://commons.wikimedia.org/wiki/File:FreeSerifDemonstration.png "commons:File:FreeSerifDemonstration.png") to Times New Roman but [metrically different](https://askubuntu.com/questions/346552/closest-alternative-to-times-new-roman/1148247#1148247), see [#Families](https://wiki.archlinux.org/title/#Families)
- [Gentium](https://en.wikipedia.org/wiki/Gentium "wikipedia:Gentium") ([ttf-gentium-plus](https://archlinux.org/packages/?name=ttf-gentium-plus)) – Unicode, comprehensive support for Latin, Greek, Cyrillic, International Phonetic Alphabet (IPA) characters
- [Heuristica](https://en.wikipedia.org/wiki/Utopia_\(typeface\)#Derived_typefaces "wikipedia:Utopia (typeface)") ([ttf-heuristica](https://aur.archlinux.org/packages/ttf-heuristica/)<sup><small>AUR</small></sup>) – Based on a version of [Utopia](https://en.wikipedia.org/wiki/Utopia_\(typeface\) "wikipedia:Utopia (typeface)") that was released under a free license
- [Liberation Serif](https://en.wikipedia.org/wiki/Liberation_Serif "wikipedia:Liberation Serif") ([ttf-liberation](https://archlinux.org/packages/?name=ttf-liberation)) – Metric-compatible with Times New Roman but [visually distinct](https://en.wikipedia.org/wiki/File:Times_New_Roman_Liberation_Serif_comparison.png "wikipedia:File:Times New Roman Liberation Serif comparison.png"), see [#Families](https://wiki.archlinux.org/title/#Families)
- [Libre Baskerville](https://fonts.google.com/specimen/Libre+Baskerville) ([ttf-librebaskerville](https://aur.archlinux.org/packages/ttf-librebaskerville/)<sup><small>AUR</small></sup>) – An open-source [Baskerville](https://en.wikipedia.org/wiki/Baskerville "wikipedia:Baskerville") revival designed by Impallari Type
- [BaskervilleF](https://ctan.org/pkg/baskervillef) ([otf-baskervillef](https://aur.archlinux.org/packages/otf-baskervillef/)<sup><small>AUR</small></sup>) – A PDF-optimized serif font, fork of Libre Baskerville, with added Bold Italic style
- [Libre Caslon](https://fonts.google.com/specimen/Libre+Caslon+Text) ([otf-libre-caslon](https://aur.archlinux.org/packages/otf-libre-caslon/)<sup><small>AUR</small></sup>) – An open-source [Caslon](https://en.wikipedia.org/wiki/Caslon "wikipedia:Caslon") revival designed by Impallari Type
- [Linux Libertine](https://en.wikipedia.org/wiki/Linux_Libertine "wikipedia:Linux Libertine") ([ttf-linux-libertine](https://archlinux.org/packages/?name=ttf-linux-libertine)) – Developed as a substitute of Times New Roman, but different both visually and metrically (the metric differences are more notable for italic and bold fonts). Its fork [Libertinus Fonts](https://en.wikipedia.org/wiki/Linux_Libertine#Derivative_works "wikipedia:Linux Libertine") ([otf-libertinus](https://archlinux.org/packages/?name=otf-libertinus)) is the version that is under active development.
- [TeX Gyre Termes](https://www.gust.org.pl/projects/e-foundry/tex-gyre/index_html) ([tex-gyre-fonts](https://archlinux.org/packages/?name=tex-gyre-fonts)) – Visually similar to Times New Roman (but there are some minor metric differences), see [#Families](https://wiki.archlinux.org/title/#Families)
- [Tinos](https://en.wikipedia.org/wiki/Croscore_fonts "wikipedia:Croscore fonts") ([ttf-croscore](https://archlinux.org/packages/?name=ttf-croscore)) – Metric-compatible with Times New Roman but visually distinct (and looks similar to Liberation Serif), see [#Families](https://wiki.archlinux.org/title/#Families)

#### Handwriting

- [ttf-nothingyoucoulddo](https://aur.archlinux.org/packages/ttf-nothingyoucoulddo/)<sup><small>AUR</small></sup> – Handwriting of a photographer
- [ttf-indieflower](https://aur.archlinux.org/packages/ttf-indieflower/)<sup><small>AUR</small></sup> – Handwriting sans-serif font with bubbly and rounded edges
- [ttf-pacifico](https://aur.archlinux.org/packages/ttf-pacifico/)<sup><small>AUR</small></sup> – Brush script handwriting font which was inspired by the 1950s American surf culture and expanded to Cyrillic
- [otf-londrina](https://aur.archlinux.org/packages/otf-londrina/)<sup><small>AUR</small></sup> – Handwriting font inspired from the streets of Sao Paulo, Brazil
- [otf-tesla](https://aur.archlinux.org/packages/otf-tesla/)<sup><small>AUR</small></sup> – Script font based on a reconstruction of Nikola Tesla's handwriting
- [ttf-architects-daughter](https://aur.archlinux.org/packages/ttf-architects-daughter/)<sup><small>AUR</small></sup> – Font incorporating the graphic, squared look of architectural writing and the natural feel of daily handwriting

#### Unsorted

![](https://wiki.archlinux.org/images/5/53/Tango-edit-clear.svg)**This article or section needs language, wiki syntax or style improvements. See [Help:Style](https://wiki.archlinux.org/title/Help:Style "Help:Style") for reference.**

**Reason:** This section should be absorbed into the Monospace/Serif/Sans-Serif structure (Discuss in [Talk:Fonts](https://wiki.archlinux.org/title/Talk:Fonts))

- [all-repository-fonts](https://aur.archlinux.org/packages/all-repository-fonts/)<sup><small>AUR</small></sup> – Meta package for all fonts in the official repositories
- [ttf-cheapskate](https://aur.archlinux.org/packages/ttf-cheapskate/)<sup><small>AUR</small></sup> – Font collection from *dustismo.com*
- [ttf-google-fonts-git](https://aur.archlinux.org/packages/ttf-google-fonts-git/)<sup><small>AUR</small></sup> – A huge collection of free fonts (including Ubuntu, Inconsolata, Roboto, etc.)

**Note:** Your font dialog might get very long as more than 100 fonts will be added.
- [ttf-junicode](https://archlinux.org/packages/?name=ttf-junicode) – Junius font containing almost complete medieval Latin script glyphs
- [ttf-mph-2b-damase](https://aur.archlinux.org/packages/ttf-mph-2b-damase/)<sup><small>AUR</small></sup> – Covers full plane 1 and several scripts
- [ttf-opendyslexic](https://aur.archlinux.org/packages/ttf-opendyslexic/)<sup><small>AUR</small></sup> – [OpenDyslexic](https://en.wikipedia.org/wiki/OpenDyslexic "wikipedia:OpenDyslexic") font for readers with dyslexia
- [xorg-fonts-type1](https://archlinux.org/packages/?name=xorg-fonts-type1) – IBM Courier and Adobe Utopia sets of [PostScript fonts](https://en.wikipedia.org/wiki/PostScript_fonts "wikipedia:PostScript fonts")

### Non-latin scripts

#### Ancient Scripts

- [ttf-ancient-fonts](https://aur.archlinux.org/packages/ttf-ancient-fonts/)<sup><small>AUR</small></sup> – Font containing Unicode symbols for Aegean, Egyptian, Cuneiform, Anatolian, Maya, and Analecta scripts

#### Arabic

See [Localization/Arabic#Fonts](https://wiki.archlinux.org/title/Localization/Arabic#Fonts "Localization/Arabic").

#### Bengali

Read [Localization/Bengali#Fonts](https://wiki.archlinux.org/title/Localization/Bengali#Fonts "Localization/Bengali") for details.

#### Braille

- [ttf-ubraille](https://aur.archlinux.org/packages/ttf-ubraille/)<sup><small>AUR</small></sup> – Font containing Unicode symbols for *braille*

#### Chinese, Japanese, Korean, Vietnamese

##### Pan-CJK

Adobe Source Han fonts and Noto CJK fonts have [identical glyphs and metrics](https://github.com/adobe-fonts/source-han-sans/issues/122), but with different branding since the project was commissioned by both Adobe and Google.

Both collections comprehensively support Simplified Chinese, Traditional Chinese, Japanese, and Korean, with a consistent design and look. Noto Sans CJK fonts lack localized menu names, that are not required, but may make fonts more user-friendly for customers whose native language is that of the target language of the font.

- Adobe Source Han fonts
- [Source Han Sans](https://en.wikipedia.org/wiki/Source_Han_Sans "wikipedia:Source Han Sans") ([adobe-source-han-sans-otc-fonts](https://archlinux.org/packages/?name=adobe-source-han-sans-otc-fonts))
- [Source Han Serif](https://en.wikipedia.org/wiki/Source_Han_Serif "wikipedia:Source Han Serif") ([adobe-source-han-serif-otc-fonts](https://archlinux.org/packages/?name=adobe-source-han-serif-otc-fonts))
- [Noto CJK fonts](https://en.wikipedia.org/wiki/Noto_fonts#CJK "wikipedia:Noto fonts") ([noto-fonts-cjk](https://archlinux.org/packages/?name=noto-fonts-cjk)) – Includes both Noto Sans CJK and Noto Serif CJK

##### Chinese

See [Localization/Chinese#Fonts](https://wiki.archlinux.org/title/Localization/Chinese#Fonts "Localization/Chinese").

##### Japanese

See [Localization/Japanese#Fonts](https://wiki.archlinux.org/title/Localization/Japanese#Fonts "Localization/Japanese").

##### Korean

See [Localization/Korean#Fonts](https://wiki.archlinux.org/title/Localization/Korean#Fonts "Localization/Korean").

##### Vietnamese

- [ttf-hannom](https://archlinux.org/packages/?name=ttf-hannom) – Vietnamese TrueType font for chữ Nôm characters

#### Cyrillic

See also [#Latin script](https://wiki.archlinux.org/title/#Latin_script).

- [ttf-paratype](https://aur.archlinux.org/packages/ttf-paratype/)<sup><small>AUR</small></sup> – Font family by ParaType: sans, serif, mono, extended cyrillic and latin, OFL license
- [otf-russkopis](https://aur.archlinux.org/packages/otf-russkopis/)<sup><small>AUR</small></sup> – A free OpenType cursive font for Cyrillic script

#### Greek

Almost all Unicode fonts contain the Greek character set (polytonic included). Some additional font packages, which might not contain the complete Unicode set but utilize high quality Greek (and Latin, of course) typefaces are:

- [otf-gfs](https://aur.archlinux.org/packages/otf-gfs/)<sup><small>AUR</small></sup> – Selection of OpenType fonts from the Greek Font Society
- [ttf-mgopen](https://aur.archlinux.org/packages/ttf-mgopen/)<sup><small>AUR</small></sup> – Professional TrueType fonts from Magenta
- [ttf-sbl-greek](https://aur.archlinux.org/packages/ttf-sbl-greek/)<sup><small>AUR</small></sup> – SBL Greek, created by the Society of Biblical Literature (SBL)
- [ttf-sbl-biblit](https://aur.archlinux.org/packages/ttf-sbl-biblit/)<sup><small>AUR</small></sup> – SBL BibLit, includes characters from both SBL Greek and SBL Hebrew

#### Hebrew

- [opensiddur-hebrew-fonts](https://aur.archlinux.org/packages/opensiddur-hebrew-fonts/)<sup><small>AUR</small></sup> – Large collection of Open-source licensed Hebrew fonts. There are also few Latin, Greek, Cyrillic, Arabic, and Amharic.
- [culmus](https://aur.archlinux.org/packages/culmus/)<sup><small>AUR</small></sup> – Nice collection of free Hebrew fonts
- [alefbet](https://aur.archlinux.org/packages/alefbet/)<sup><small>AUR</small></sup> – 4 Hebrew fonts (at the moment): the commonly used "David Libre", the handwriting font "Gveret Levin", "Varela Round" and "open-sans"
- [ttf-ms-fonts](https://aur.archlinux.org/packages/ttf-ms-fonts/)<sup><small>AUR</small></sup> – contains Arial and other fonts
- [ttf-sbl-hebrew](https://aur.archlinux.org/packages/ttf-sbl-hebrew/)<sup><small>AUR</small></sup> – SBL Hebrew, created by the Society of Biblical Literature (SBL)
- [ttf-sbl-biblit](https://aur.archlinux.org/packages/ttf-sbl-biblit/)<sup><small>AUR</small></sup> – SBL BibLit, includes characters from both SBL Hebrew and SBL Greek

##### Monospaced

- **Cousine** ([ttf-croscore](https://archlinux.org/packages/?name=ttf-croscore)) – part of the [Chrome OS Core Fonts](https://en.wikipedia.org/wiki/Croscore_fonts "wikipedia:Croscore fonts")
- [Everson Mono](https://www.evertype.com/emono/) ([ttf-everson-mono](https://aur.archlinux.org/packages/ttf-everson-mono/)<sup><small>AUR</small></sup>) – is lighter and a bit looser than Courier, with wide range of supported Unicode blocks
- **FreeMono** ([gnu-free-fonts](https://archlinux.org/packages/?name=gnu-free-fonts)) – part of the [GNU FreeFont](https://en.wikipedia.org/wiki/GNU_FreeFont "wikipedia:GNU FreeFont")

#### Indic

See [Localization/Indic#Fonts](https://wiki.archlinux.org/title/Localization/Indic#Fonts "Localization/Indic").

#### Khmer

- [ttf-khmer](https://archlinux.org/packages/?name=ttf-khmer) – Font covering glyphs for Khmer language
- [Hanuman](https://www.google.com/fonts/specimen/Hanuman) ([ttf-google-fonts-git](https://aur.archlinux.org/packages/ttf-google-fonts-git/)<sup><small>AUR</small></sup>)

#### Mongolic and Tungusic

- [ttf-abkai](https://aur.archlinux.org/packages/ttf-abkai/)<sup><small>AUR</small></sup> – Fonts for Sibe, Manchu and Daur scripts (incomplete, currently in development)

#### Persian

Arabic fonts like [ttf-scheherazade-new](https://archlinux.org/packages/?name=ttf-scheherazade-new) also cover Persian letters. A list of Arabic fonts can be checked in [Localization/Arabic#Fonts](https://wiki.archlinux.org/title/Localization/Arabic#Fonts "Localization/Arabic").

- [persian-fonts](https://aur.archlinux.org/packages/persian-fonts/)<sup><small>AUR</small></sup> – Meta package for installing all Persian fonts in AUR
- [borna-fonts](https://aur.archlinux.org/packages/borna-fonts/)<sup><small>AUR</small></sup> – Borna Rayaneh Co. Persian B font series
- [iran-nastaliq-fonts](https://aur.archlinux.org/packages/iran-nastaliq-fonts/)<sup><small>AUR</small></sup> – A free Unicode calligraphic Persian font
- [iranian-fonts](https://aur.archlinux.org/packages/iranian-fonts/)<sup><small>AUR</small></sup> – Iranian-Sans and Iranian-Serif Persian font family
- [ir-standard-fonts](https://aur.archlinux.org/packages/ir-standard-fonts/)<sup><small>AUR</small></sup> – Iran Supreme Council of Information and Communication Technology (SCICT) standard Persian fonts
- [persian-hm-ftx-fonts](https://aur.archlinux.org/packages/persian-hm-ftx-fonts/)<sup><small>AUR</small></sup> – A Persian font series derived from X Series 2, Metafont and FarsiTeX fonts with Kashida feature
- [persian-hm-xs2-fonts](https://aur.archlinux.org/packages/persian-hm-xs2-fonts/)<sup><small>AUR</small></sup> – A Persian font series derived from X Series 2 fonts with Kashida feature
- [gandom-fonts](https://aur.archlinux.org/packages/gandom-fonts/)<sup><small>AUR</small></sup>, [parastoo-fonts](https://aur.archlinux.org/packages/parastoo-fonts/)<sup><small>AUR</small></sup>, [sahel-fonts](https://aur.archlinux.org/packages/sahel-fonts/)<sup><small>AUR</small></sup>, [samim-fonts](https://aur.archlinux.org/packages/samim-fonts/)<sup><small>AUR</small></sup>, [shabnam-fonts](https://aur.archlinux.org/packages/shabnam-fonts/)<sup><small>AUR</small></sup>, [tanha-fonts](https://aur.archlinux.org/packages/tanha-fonts/)<sup><small>AUR</small></sup>, [vazirmatn-fonts](https://aur.archlinux.org/packages/vazirmatn-fonts/)<sup><small>AUR</small></sup>, [vazir-code-fonts](https://aur.archlinux.org/packages/vazir-code-fonts/)<sup><small>AUR</small></sup> – Beautiful Persian fonts made by Saber RastiKerdar
- [ttf-yas](https://aur.archlinux.org/packages/ttf-yas/)<sup><small>AUR</small></sup> – The Yas Persian font series (with **hollow zero**)
- [ttf-x2](https://aur.archlinux.org/packages/ttf-x2/)<sup><small>AUR</small></sup> – Free fonts with support for Persian, Arabic, Urdu, Pashto, Dari, Uzbek, Kurdish, Uighur, old Turkish (Ottoman) and modern Turkish (Roman)

#### Tai–Kadai

- [fonts-tlwg](https://aur.archlinux.org/packages/fonts-tlwg/)<sup><small>AUR</small></sup> – Collection of scalable Thai fonts
- [ttf-google-thai](https://aur.archlinux.org/packages/ttf-google-thai/)<sup><small>AUR</small></sup> – High-quality Thai fonts from Google and new [improvement](https://cadsondemak.github.io/) for Thai National Fonts
- [ttf-lao](https://aur.archlinux.org/packages/ttf-lao/)<sup><small>AUR</small></sup> – Lao TTF font (Phetsarath\_OT)

#### Tibeto-Burman

- [ttf-tibetan-machine](https://archlinux.org/packages/?name=ttf-tibetan-machine) – Tibetan Machine TTFont
- [ttf-sil-padauk](https://aur.archlinux.org/packages/ttf-sil-padauk/)<sup><small>AUR</small></sup> – Unicode font that supports the many diverse languages that use the Myanmar script

### Emoji and symbols

A section of the Unicode standard is designated for pictographic characters called "emoji".

[Emoji](https://en.wikipedia.org/wiki/Emoji "wikipedia:Emoji") fonts come in different formats: CBDT/CBLC (Google), SBIX (Apple), COLR/CPAL (Microsoft), SVG (Mozilla/Adobe).

Emojis should work out of the box once you have at least one emoji font installed of a supported format. However, some of the emoji fonts encode their glyphs as large fixed-size bitmaps and thus, for the purpose of displaying at the intended size, rely on [bitmap font downscaling](https://wiki.archlinux.org/title/Font_configuration#Disable_scaling_of_bitmap_fonts "Font configuration"), which is enabled by default.

Emoji font fallback according to [the standard](https://en.wikipedia.org/wiki/Emoji#Emoji_versus_text_presentation "wikipedia:Emoji") requires [extra code to handle emoji](https://github.com/google/emoji-segmenter).

For the discovery and input of Emoji see [List of applications/Utilities#Text input](https://wiki.archlinux.org/title/List_of_applications/Utilities#Text_input "List of applications/Utilities").

<table><tbody><tr><th>Software</th><th>CBDT/CBLC</th><th>SBIX</th><th>COLR/CPAL</th><th>SVG</th><th>Emoji font fallback</th></tr><tr><th><a href="https://en.wikipedia.org/wiki/FreeType">FreeType</a></th><td>Yes</td><td>Yes</td><td>Yes</td><td><a href="https://savannah.nongnu.org/bugs/?46141">No</a></td><td>–</td></tr><tr><th><a href="https://wiki.archlinux.org/title/Chromium">Chromium</a></th><td colspan="3">FreeType</td><td>–</td><td><a href="https://chromium.googlesource.com/chromium/src.git/+/671511b00e2d6c374a3079c1c379d2d0dfad32fe">Yes</a></td></tr><tr><th><a href="https://wiki.archlinux.org/title/Firefox">Firefox</a></th><td colspan="3">FreeType</td><td>Yes</td><td><a href="https://bugzilla.mozilla.org/show_bug.cgi?id=1509988">No</a>, see <a href="https://wiki.archlinux.org/title/Firefox#Font_troubleshooting">Firefox#Font troubleshooting</a> for workaround.</td></tr><tr><th><a href="https://en.wikipedia.org/wiki/Pango">Pango</a></th><td colspan="3">FreeType</td><td>–</td><td><a href="https://gitlab.gnome.org/GNOME/pango/-/issues/298">Yes</a></td></tr><tr><th><a href="https://wiki.archlinux.org/title/Qt">Qt</a></th><td colspan="3">FreeType</td><td>–</td><td>No <a href="https://bugreports.qt.io/browse/QTBUG-71568">[1]</a> <a href="https://bugreports.qt.io/browse/QTBUG-85014">[2]</a> <a href="https://bugreports.qt.io/browse/QTBUG-85744">[3]</a></td></tr><tr><th><a href="https://wiki.archlinux.org/title/List_of_applications/Internet#WebKitGTK-based">WebKitGTK</a></th><td colspan="3">FreeType</td><td>–</td><td><a href="https://trac.webkit.org/changeset/239822/webkit">Yes</a></td></tr></tbody></table>

**Note:** Qt can only use first 255 fonts at a time [\[4\]](https://bugreports.qt.io/browse/QTBUG-80434). Make sure you have an emoji font in your list of [preferred fallback fonts](https://wiki.archlinux.org/title/Font_configuration#Set_default_or_fallback_fonts "Font configuration").

- [Font Awesome](https://en.wikipedia.org/wiki/Font_Awesome "wikipedia:Font Awesome") ([ttf-font-awesome](https://archlinux.org/packages/?name=ttf-font-awesome)) – the iconic SVG font
- [JoyPixels](https://joypixels.com/emoji) ([ttf-joypixels](https://archlinux.org/packages/?name=ttf-joypixels)) – formerly EmojiOne, part of Emoji as a Service, proprietary
- [Nerd Fonts](https://github.com/ryanoasis/nerd-fonts/?tab=readme-ov-file#--) ([nerd-fonts](https://archlinux.org/groups/x86_64/nerd-fonts/)) – developer targeted fonts patched with a high number of icons
- [Noto Color Emoji](https://fonts.google.com/noto/specimen/Noto+Color+Emoji/glyphs) ([noto-fonts-emoji](https://archlinux.org/packages/?name=noto-fonts-emoji)) – Google open-source emoji font, color
- [Noto Emoji](https://fonts.google.com/noto/specimen/Noto+Emoji/glyphs) ([ttf-noto-emoji-monochrome](https://aur.archlinux.org/packages/ttf-noto-emoji-monochrome/)<sup><small>AUR</small></sup>) – Google open-source emoji font, black and white
- [OpenMoji](https://openmoji.org/) ([otf-openmoji](https://aur.archlinux.org/packages/otf-openmoji/)<sup><small>AUR</small></sup>) – German University of Design in Schwäbisch Gmünd open-source emoji
- [Symbola](https://dn-works.com/ufas/) ([ttf-symbola-free](https://aur.archlinux.org/packages/ttf-symbola-free/)<sup><small>AUR</small></sup>) – part of Unicode Fonts for Ancient Scripts; version 9 was the last free version, current version is licensed as "pay for any use"
- [Twemoji (Twitter Emoji)](https://github.com/jdecked/twemoji) ([ttf-twemoji](https://aur.archlinux.org/packages/ttf-twemoji/)<sup><small>AUR</small></sup>) – emoji for everyone, originally created by Twitter
- [Twitter Color Emoji](https://github.com/13rac1/twemoji-color-font) ([ttf-twemoji-color](https://aur.archlinux.org/packages/ttf-twemoji-color/)<sup><small>AUR</small></sup>) – SVG-OpenType (SVGinOT) font built from the Twemoji artwork; this font also contains black and white emoji, and the original Twemoji font contains color emoji too

[Kaomoji](https://en.wikipedia.org/wiki/Emoticon#Japanese_style "wikipedia:Emoticon") are sometimes referred to as "Japanese emoticons" and are composed of characters from various character sets, including CJK and Indic fonts. The following set of packages covers most of existing kaomoji:

- [gnu-free-fonts](https://archlinux.org/packages/?name=gnu-free-fonts)
- [ttf-arphic-uming](https://archlinux.org/packages/?name=ttf-arphic-uming)
- [ttf-indic-otf](https://archlinux.org/packages/?name=ttf-indic-otf)

[Teranoptia](https://www.tunera.xyz/fonts/teranoptia/) ([ttf-teranoptia-furiae](https://aur.archlinux.org/packages/ttf-teranoptia-furiae/)<sup><small>AUR</small></sup>) – is a typeface without letters (an illustrative font), a peculiar contraption that allows you to imagine chimeric creatures just by typing letters with your keyboard.

### Math

- [Computer Modern](https://en.wikipedia.org/wiki/Computer_Modern "wikipedia:Computer Modern") ([ttf-cm-unicode](https://aur.archlinux.org/packages/ttf-cm-unicode/)<sup><small>AUR</small></sup>, [otf-cm-unicode](https://aur.archlinux.org/packages/otf-cm-unicode/)<sup><small>AUR</small></sup>)
- Computer Modern ([otf-latin-modern](https://archlinux.org/packages/?name=otf-latin-modern), [otf-latinmodern-math](https://archlinux.org/packages/?name=otf-latinmodern-math)) – Improved version used in LaTeX
- [Libertinus Math](https://en.wikipedia.org/wiki/Linux_Libertine#Derivative_works "wikipedia:Linux Libertine") ([otf-libertinus](https://archlinux.org/packages/?name=otf-libertinus)) – A math font based on Libertinus Serif which is a fork of [Linux Libertine](https://en.wikipedia.org/wiki/Linux_Libertine "wikipedia:Linux Libertine") ([ttf-linux-libertine](https://archlinux.org/packages/?name=ttf-linux-libertine))
- [STIX fonts](https://en.wikipedia.org/wiki/STIX_Fonts_project "wikipedia:STIX Fonts project") ([otf-stix](https://aur.archlinux.org/packages/otf-stix/)<sup><small>AUR</small></sup>) – STIX is designed to be a royalty-free alternative that resembles Times New Roman. The current version is called STIX Two and includes a math companion named STIX Two Math.
- [TeX Gyre math fonts](https://www.gust.org.pl/projects/e-foundry/tg-math) ([tex-gyre-math-fonts](https://aur.archlinux.org/packages/tex-gyre-math-fonts/)<sup><small>AUR</small></sup>) – Math companions of TeX Gyre fonts (see [#Families](https://wiki.archlinux.org/title/#Families)). Notably, TeX Gyre Termes Math is a math companion of Times New Roman.

Additionally, [texlive-basic](https://archlinux.org/packages/?name=texlive-basic) and [texlive-fontsextra](https://archlinux.org/packages/?name=texlive-fontsextra) contain many math fonts such as Latin Modern Math and STIX fonts. See [TeX Live#Making fonts available to Fontconfig](https://wiki.archlinux.org/title/TeX_Live#Making_fonts_available_to_Fontconfig "TeX Live") for configuration.

### Other operating system fonts

- [ttf-mac-fonts](https://aur.archlinux.org/packages/ttf-mac-fonts/)<sup><small>AUR</small></sup> - Apple MacOS TrueType fonts

## Font alias

![](https://wiki.archlinux.org/images/7/77/Merge-arrows-2.svg)**This article or section is a candidate for merging with [Fontconfig](https://wiki.archlinux.org/title/Fontconfig "Fontconfig").**

**Notes:** This section is Fontconfig-specific. (Discuss in [Talk:Fonts](https://wiki.archlinux.org/title/Talk:Fonts))

There are several font aliases which represent other fonts in order that applications may use similar fonts. The most common aliases are: `serif` for a font of the serif type (e.g. DejaVu Serif); `sans-serif` for a font of the sans-serif type (e.g. DejaVu Sans); and `monospace` for a monospaced font (e.g. DejaVu Sans Mono). However, the fonts which these aliases represent may vary and the relationship is often not shown in font management tools, such as those found in [KDE Plasma](https://wiki.archlinux.org/title/KDE_Plasma "KDE Plasma") and other [desktop environments](https://wiki.archlinux.org/title/Desktop_environments "Desktop environments").

To reverse an alias and find which font it is representing, run:

```
$ fc-match monospace
```
```
DejaVuSansMono.ttf: "DejaVu Sans Mono" "Book"
```

In this case, `DejaVuSansMono.ttf` is the font represented by the `monospace` alias.

## Fallback font order

![](https://wiki.archlinux.org/images/7/77/Merge-arrows-2.svg)**This article or section is a candidate for merging with [Fontconfig](https://wiki.archlinux.org/title/Fontconfig "Fontconfig").**

**Notes:** This section contains Fontconfig-only related information. (Discuss in [Talk:Fonts](https://wiki.archlinux.org/title/Talk:Fonts))

Fontconfig automatically chooses a font that matches the current requirement. That is to say, if one is looking at a window containing English and Chinese for example, it will switch to another font for the Chinese text if the default one does not support it.

Fontconfig lets every user configure the order they want via `$XDG_CONFIG_HOME/fontconfig/fonts.conf`. If you want a particular Chinese font to be selected after your favorite Serif font, your file would look like this:

```
<?xml version="1.0"?>
<!DOCTYPE fontconfig SYSTEM "fonts.dtd">
<fontconfig>
<alias>
   <family>serif</family>
   <prefer>
     <family>Your favorite Latin Serif font name</family>
     <family>Your Chinese font name</family>
   </prefer>
 </alias>
</fontconfig>
```

**Tip:**

- If you use a Chinese locale, set `LC_LANG` to `und` to make this work. Otherwise both English and Chinese text will be rendered in the Chinese font.
- If you want to see a list of fonts against ambiguous patterns (i.e. which might not match exactly) such as a generic family names, you can use `fc-match --sort` or `fc-match --all`.
- `fc-match --sort` does not show a font if its Unicode coverage is provided by already shown font, see [fc-match(1)](https://man.archlinux.org/man/fc-match.1) and [FcFontSort(3)](https://man.archlinux.org/man/FcFontSort.3).
- After changing the configuration run `fc-match --all serif | head` to verify your fallback font is set correctly.

You can add a section for `sans-serif` and `monospace` as well.

For more information, have a look at the Fontconfig manual. See also [Font configuration#Set default or fallback fonts](https://wiki.archlinux.org/title/Font_configuration#Set_default_or_fallback_fonts "Font configuration").

## Tips and tricks

### List installed fonts for a particular language

![](https://wiki.archlinux.org/images/7/77/Merge-arrows-2.svg)**This article or section is a candidate for merging with [Fontconfig](https://wiki.archlinux.org/title/Fontconfig "Fontconfig").**

**Notes:** This section is Fontconfig-specific. (Discuss in [Talk:Fonts](https://wiki.archlinux.org/title/Talk:Fonts))

Applications select and display fonts depending upon Fontconfig preferences and available font glyphs for Unicode text. To list installed fonts for a particular language, issue a command `fc-list :lang="*two letter language code*"`. For instance, to list installed Arabic fonts or fonts supporting Arabic glyphs:

```
$ fc-list -f '%{file}\n' :lang=ar
```
```
/usr/share/fonts/TTF/FreeMono.ttf
/usr/share/fonts/TTF/DejaVuSansCondensed.ttf
/usr/share/fonts/truetype/custom/DroidKufi-Bold.ttf
/usr/share/fonts/TTF/DejaVuSansMono.ttf
/usr/share/fonts/TTF/FreeSerif.ttf
```

### List installed fonts for a particular Unicode character

![](https://wiki.archlinux.org/images/7/77/Merge-arrows-2.svg)**This article or section is a candidate for merging with [Fontconfig](https://wiki.archlinux.org/title/Fontconfig "Fontconfig").**

**Notes:** This section is Fontconfig-specific. (Discuss in [Talk:Fonts](https://wiki.archlinux.org/title/Talk:Fonts))

To list all fonts supporting a particular Unicode codepoint—[black upwards equilateral arrowhead](https://graphemica.com/%E2%AE%9D) (⮝) in this case:

```
$ fc-list :charset=2B9D
```

*fc-list* does not normalize requests, it is going to list fonts which exactly matches. It is not suitable for generic family names (like `monospace`) and other ambiguous patterns. To search for monospaced fonts supporting a particular Unicode codepoint you could try the following:

```
$ fc-match --sort monospace:charset=2B9D | head
```

but you have to interpret the result on your own. *fc-match* by its nature does not guarantee that fonts in the output list are monospaced, nor that they contain the codepoint in question at all.

### Application-specific font cache

Matplotlib ([python-matplotlib](https://archlinux.org/packages/?name=python-matplotlib)) uses its own font cache, so after updating fonts, be sure to remove `~/.matplotlib/fontList.cache`, `~/.cache/matplotlib/fontList.cache`, `~/.sage/matplotlib-1.2.1/fontList.cache`, etc. so it will regenerate its cache and find the new fonts [\[5\]](https://discourse.matplotlib.org/t/getting-matplotlib-to-recognize-a-new-font/17754).

### Bidirectional text support

See [Bidirectional text](https://wiki.archlinux.org/title/Bidirectional_text "Bidirectional text") for troubleshooting problems related to RTL languages.

### Braille font not displaying correctly inside terminals

If braille characters in terminals exhibit [rendering issues](https://www.reddit.com/r/archlinux/comments/gf2vgb/the_braille_fonts_dont_show_properly_anywhere/), try [installing](https://wiki.archlinux.org/title/Install "Install") a braille font and uninstalling [gnu-free-fonts](https://archlinux.org/packages/?name=gnu-free-fonts).

### Application-specific font configuration tips

#### Emacs

Emacs calculates sizes differently than standard Linux desktop applications, and Emacs packages do not all use the same config format, so if points or raw pixel size doesn't work, try using the other value.

#### Visual Studio Code

Change the setting **Editor: Experimental Whitespace Rendering** from "svg" to "font" if your monospace fonts have problems scaling certain characters correctly. This is known to help with "Terminus (TTF)" and "IBM 3270" fonts.

## See also

- [State of Text Rendering](https://behdad.org/text/)
- [Font Library](https://fontlibrary.org/en) — Fonts under free licenses