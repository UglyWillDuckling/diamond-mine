Fonts are managed via the  `/etc/fonts/conf.d/` directory
All files inside that match a [[glob]] `[0-9][0-9]*.config`  are loaded

### Example list:
10-hinting-slight.conf -> /usr/share/fontconfig/conf.default/10-hinting-slight.conf
10-scale-bitmap-fonts.conf -> /usr/share/fontconfig/conf.default/10-scale-bitmap-fonts.conf
10-sub-pixel-rgb.conf -> /usr/share/fontconfig/conf.default/10-sub-pixel-rgb.conf
10-yes-antialias.conf -> /usr/share/fontconfig/conf.default/10-yes-antialias.conf
11-lcdfilter-default.conf -> /usr/share/fontconfig/conf.default/11-lcdfilter-default.conf
20-unhint-small-vera.conf -> /usr/share/fontconfig/conf.default/20-unhint-small-vera.conf
30-metric-aliases.conf -> /usr/share/fontconfig/conf.default/30-metric-aliases.conf
40-nonlatin.conf -> /usr/share/fontconfig/conf.default/40-nonlatin.conf
45-generic.conf -> /usr/share/fontconfig/conf.default/45-generic.conf
45-latin.conf -> /usr/share/fontconfig/conf.default/45-latin.conf
46-noto-mono.conf -> /usr/share/fontconfig/conf.default/46-noto-mono.conf
46-noto-sans.conf -> /usr/share/fontconfig/conf.default/46-noto-sans.conf
46-noto-serif.conf -> /usr/share/fontconfig/conf.default/46-noto-serif.conf
48-spacing.conf -> /usr/share/fontconfig/conf.default/48-spacing.conf
49-sansserif.conf -> /usr/share/fontconfig/conf.default/49-sansserif.conf
50-user.conf -> /usr/share/fontconfig/conf.default/50-user.conf
51-local.conf -> /usr/share/fontconfig/conf.default/51-local.conf
60-generic.conf -> /usr/share/fontconfig/conf.default/60-generic.conf
60-latin.conf -> /usr/share/fontconfig/conf.default/60-latin.conf

### on file loading
The files are loaded in numeric order, the structure of the configuration 
has led to the following conventions in usage:

| Description                                    | Range |
| ---------------------------------------------- | ----- |
| Font directories                               | 00-09 |
| System rendering defaults (AA, etc)            | 10-19 |
| Font rendering options                         | 20-29 |
| Family substitution                            | 30-39 |
| Generic identification, map family->generic    | 40-49 |
| Alternate config file loading                  | 50-59 |
| Generic aliases, map generic->family           | 60-69 |
| Select font (adjust which fonts are available) | 70-79 |
| Match target="scan" (modify scanned patterns)  | 80-89 |
| Font synthesis                                 | 90-99 |
