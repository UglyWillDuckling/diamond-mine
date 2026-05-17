---
source: "https://github.com/jellyfin/jellyfin-plugin-fanart"
author:
  - "[[jellyfin-bot]]"
published:
created: 2026-02-13
tags:
---

[![Plugin Banner](https://raw.githubusercontent.com/jellyfin/jellyfin-ux/master/plugins/SVG/jellyfin-plugin-fanart.svg?sanitize=true)](https://raw.githubusercontent.com/jellyfin/jellyfin-ux/master/plugins/SVG/jellyfin-plugin-fanart.svg?sanitize=true)  
  
## About

This plugin allows you to get images for your Movies and TV Shows from [Fanart](https://fanart.tv/).

## Installation

[See the official documentation for install instructions](https://jellyfin.org/docs/general/server/plugins/index.html#installing).

## Build

1. To build this plugin you will need [.Net 5.x](https://dotnet.microsoft.com/download/dotnet/5.0).
2. Build plugin with following command

```
dotnet publish --configuration Release --output bin
```

1. Place the dll-file in the `plugins/fanart` folder (you might need to create the folders) of your JF install

## Releasing

To release the plugin we recommend [JPRM](https://github.com/oddstr13/jellyfin-plugin-repository-manager) that will build and package the plugin. For additional context and for how to add the packaged plugin zip to a plugin manifest see the [JPRM documentation](https://github.com/oddstr13/jellyfin-plugin-repository-manager) for more info.

## Contributing

We welcome all contributions and pull requests! If you have a larger feature in mind please open an issue so we can discuss the implementation before you start. In general refer to our [contributing guidelines](https://github.com/jellyfin/.github/blob/master/CONTRIBUTING.md) for further information.

## Licence

This plugins code and packages are distributed under the MIT License. See [LICENSE](https://github.com/jellyfin/jellyfin-plugin-fanart/blob/master/LICENSE) for more information.

## Releases 14

[\+ 13 releases](https://github.com/jellyfin/jellyfin-plugin-fanart/releases)

## Sponsor this project

- [opencollective.com/ **jellyfin**](https://opencollective.com/jellyfin)

## Packages

No packages published  

## Languages

- [C# 96.7%](https://github.com/jellyfin/jellyfin-plugin-fanart/search?l=c%23)
- [HTML 1.8%](https://github.com/jellyfin/jellyfin-plugin-fanart/search?l=html)
- [JavaScript 1.5%](https://github.com/jellyfin/jellyfin-plugin-fanart/search?l=javascript)