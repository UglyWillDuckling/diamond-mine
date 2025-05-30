---
title: "joethei/obsidian-plantuml: Generate PlantUML Diagrams inside Obsidian.md"
source: https://github.com/joethei/obsidian-plantuml
author:
  - "[[Atlas/tools/dev/github]]"
published:
created: 2025-01-03
description: Generate PlantUML Diagrams inside Obsidian.md. Contribute to joethei/obsidian-plantuml development by creating an account on GitHub.
tags:
  - clippings
  - tool
  - plugin
  - obsidian-plugin
related:
  - "[[PlantUML]]"
---
## PlantUML Support for Obsidian

[![Maintenance](https://camo.githubusercontent.com/0c5216738e4616d93a89ef9969dbbb2ef5ecf2ed70044d6a1f6e8c3380958f2c/68747470733a2f2f696d672e736869656c64732e696f2f6d61696e74656e616e63652f7965732f32303234)](https://camo.githubusercontent.com/0c5216738e4616d93a89ef9969dbbb2ef5ecf2ed70044d6a1f6e8c3380958f2c/68747470733a2f2f696d672e736869656c64732e696f2f6d61696e74656e616e63652f7965732f32303234) [![GitHub manifest.json dynamic (path)](https://camo.githubusercontent.com/b2b34076f79ad49fdcb6dc9104fbe48f4f326e6a6a485c7d2b9b451aef3a9152/68747470733a2f2f696d672e736869656c64732e696f2f6769746875622f6d616e69666573742d6a736f6e2f6d696e41707056657273696f6e2f6a6f65746865692f6f6273696469616e2d706c616e74756d6c3f6c6162656c3d6c6f77657374253230737570706f7274656425323061707025323076657273696f6e)](https://camo.githubusercontent.com/b2b34076f79ad49fdcb6dc9104fbe48f4f326e6a6a485c7d2b9b451aef3a9152/68747470733a2f2f696d672e736869656c64732e696f2f6769746875622f6d616e69666573742d6a736f6e2f6d696e41707056657273696f6e2f6a6f65746865692f6f6273696469616e2d706c616e74756d6c3f6c6162656c3d6c6f77657374253230737570706f7274656425323061707025323076657273696f6e) [![libera manifesto](https://camo.githubusercontent.com/08fba251e5f3978248d098e9212cd8cbeac1974d7d9e0275701d097009b358fa/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f6c69626572612d6d616e69666573746f2d6c69676874677265792e737667)](https://liberamanifesto.com/)

Render [PlantUML](https://plantuml.com/) Diagrams in [Obsidian](https://obsidian.md/)

---

[![Demonstration](https://camo.githubusercontent.com/4c44eccaa255660fa2fccc37c51a38afe653cece9ffb4646a466b7df6ab143ef/68747470733a2f2f692e6a6f65746865692e73706163652f633543567030615836682e676966)](https://camo.githubusercontent.com/4c44eccaa255660fa2fccc37c51a38afe653cece9ffb4646a466b7df6ab143ef/68747470733a2f2f692e6a6f65746865692e73706163652f633543567030615836682e676966)

This plugin uses either the [PlantUML Online Server](https://plantuml.com/server), or a local `.jar` file for rendering.

You can also host your own server ([Docker](https://hub.docker.com/r/plantuml/plantuml-server) / [JEE](https://plantuml.com/de/server) / [PicoWeb](https://plantuml.com/de/picoweb)) and specify its address in the settings.

Please note that using the local rendering method is not as performant as using a server.

## Usage

Create a fenced codeblock using `plantuml` as the language. Specify your plantuml code inside. To generate a diagram with higher resolution use `plantuml-svg`

You can also use `plantuml-ascii` to generate ASCII Art.

Documentation on Plantuml can be found on [plantuml.com](https://plantuml.com/)

### Linking to notes in vault

Since the syntax for weblinks in PlantUML is the same for as for Wikilinks in Obsidian, a special syntax is used: `[[[Your other note]]]` For the content of such a link refer to the [obisidian documentation](https://help.obsidian.md/How+to/Internal+link).

Normal web links are described [here](https://plantuml.com/de/link)

### Including an `.puml` file

> ⚠️ Only works when using local rendering

This works just as describe in the [official documentation](https://plantuml.com/de/preprocessing#393335a6fd28a804).

### Examples

```plantuml-ascii
Bob -> Alice : hello
Alice -> Wonderland: hello
Wonderland -> next: hello
next -> Last: hello
Last -> next: hello
next -> Wonderland : hello
Wonderland -> Alice : hello
Alice -> Bob: hello
```


```

\`\`\`plantuml-ascii
Bob -> Alice : hello
Alice -> Wonderland: hello
Wonderland -> next: hello
next -> Last: hello
Last -> next: hello
next -> Wonderland : hello
Wonderland -> Alice : hello
Alice -> Bob: hello
\`\`\`
```

results in:

```
     ┌───┐          ┌─────┐          ┌──────────┐          ┌────┐          ┌────┐
     │Bob│          │Alice│          │Wonderland│          │next│          │Last│
     └─┬─┘          └──┬──┘          └────┬─────┘          └─┬──┘          └─┬──┘
       │    hello      │                  │                  │               │   
       │──────────────>│                  │                  │               │   
       │               │                  │                  │               │   
       │               │      hello       │                  │               │   
       │               │─────────────────>│                  │               │   
       │               │                  │                  │               │   
       │               │                  │       hello      │               │   
       │               │                  │ ─────────────────>               │   
       │               │                  │                  │               │   
       │               │                  │                  │     hello     │   
       │               │                  │                  │ ──────────────>   
       │               │                  │                  │               │   
       │               │                  │                  │     hello     │   
       │               │                  │                  │ <──────────────   
       │               │                  │                  │               │   
       │               │                  │       hello      │               │   
       │               │                  │ <─────────────────               │   
       │               │                  │                  │               │   
       │               │      hello       │                  │               │   
       │               │<─────────────────│                  │               │   
       │               │                  │                  │               │   
       │    hello      │                  │                  │               │   
       │<──────────────│                  │                  │               │   
     ┌─┴─┐          ┌──┴──┐          ┌────┴─────┐          ┌─┴──┐          ┌─┴──┐
     │Bob│          │Alice│          │Wonderland│          │next│          │Last│
     └───┘          └─────┘          └──────────┘          └────┘          └────┘
```

## Known issues

Not all methods of using PlantUML support all different diagrams. Following are a few known issues.
- [[ASCII]] can only ever generate [[sequence diagram]]s
