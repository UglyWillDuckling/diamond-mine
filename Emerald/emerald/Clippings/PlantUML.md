---
title: PlantUML - Wikipedia
source: https://en.wikipedia.org/wiki/PlantUML
author:
  - "[[Contributors to Wikimedia projects]]"
published: 2014-08-23
created: 2025-01-03
description: 
tags:
  - clippings
  - tool
related:
  - "[[UML]]"
  - "[[Diagram]]"
  - "[[Star UML]]"
  - "[[mermaid.js]]"
---
Open-source software visualization tool

<table><caption>PlantUML</caption><tbodo
**PlantUML** is an open-source tool allowing users to create diagrams from a plain text language. Besides various [UML](https://en.wikipedia.org/wiki/Unified_Modeling_Language "Unified Modeling Language") diagrams, PlantUML has support for various other [software development](https://en.wikipedia.org/wiki/Software_development "Software development") related formats (such as [Archimate](https://en.wikipedia.org/wiki/Archimate "Archimate"), [Block diagram](https://en.wikipedia.org/wiki/Block_diagram "Block diagram"), [BPMN](https://en.wikipedia.org/wiki/Business_Process_Model_and_Notation "Business Process Model and Notation"), [C4](https://en.wikipedia.org/wiki/C4_model "C4 model"), [Computer network diagram](https://en.wikipedia.org/wiki/Computer_network_diagram "Computer network diagram"), [ERD](https://en.wikipedia.org/wiki/Entity-Relationship_Diagram "Entity-Relationship Diagram"), [Gantt chart](https://en.wikipedia.org/wiki/Gantt_chart "Gantt chart"), [Mind map](https://en.wikipedia.org/wiki/Mind_map "Mind map"), and [WBD](https://en.wikipedia.org/wiki/Work_breakdown_structure "Work breakdown structure")), as well as visualisation of [JSON](https://en.wikipedia.org/wiki/JSON "JSON") and [YAML](https://en.wikipedia.org/wiki/YAML "YAML") files.

The language of PlantUML is an example of a [domain-specific language](https://en.wikipedia.org/wiki/Domain-specific_language "Domain-specific language").[^5] Besides its own DSL, PlantUML also understands [AsciiMath](https://en.wikipedia.org/wiki/AsciiMath "AsciiMath"), [Creole](https://en.wikipedia.org/wiki/Creole_\(markup\) "Creole (markup)"), [DOT](https://en.wikipedia.org/wiki/DOT_\(graph_description_language\) "DOT (graph description language)"), and [LaTeX](https://en.wikipedia.org/wiki/LaTeX "LaTeX"). It uses [Graphviz](https://en.wikipedia.org/wiki/Graphviz "Graphviz") software to lay out its diagrams and [Tikz](https://en.wikipedia.org/wiki/Tikz "Tikz") for LaTeX support. Images can be output as [PNG](https://en.wikipedia.org/wiki/Portable_Network_Graphics "Portable Network Graphics"), [SVG](https://en.wikipedia.org/wiki/Scalable_Vector_Graphics "Scalable Vector Graphics"), LaTeX and even [ASCII art](https://en.wikipedia.org/wiki/ASCII_art "ASCII art"). PlantUML has also been used to allow blind people to design and read UML diagrams.[^6][^7]

## Applications that use PlantUML

There are various extensions or add-ons that incorporate PlantUML.[^8]

- [Atom](https://en.wikipedia.org/wiki/Atom_\(text_editor\) "Atom (text editor)") has a community maintained PlantUML syntax highlighter and viewer.
- [Confluence](https://en.wikipedia.org/wiki/Confluence_\(software\) "Confluence (software)") wiki has a PlantUML plug-in for Confluence Server, which renders diagrams on-the-fly during a page reload. There is an additional PlantUML plug-in for Confluence Cloud.
- [Doxygen](https://en.wikipedia.org/wiki/Doxygen "Doxygen") integrates diagrams for which sources are provided after the [startuml](http://www.doxygen.nl/manual/commands.html#cmdstartuml) command.
- [Eclipse](https://en.wikipedia.org/wiki/Eclipse_\(software\) "Eclipse (software)") has a PlantUML plug-in.
- [Google Docs](https://en.wikipedia.org/wiki/Google_Docs "Google Docs") has an add-on called PlantUML Gizmo that works with the PlantUML.com server.
- [IntelliJ IDEA](https://en.wikipedia.org/wiki/IntelliJ_IDEA "IntelliJ IDEA") can create and display diagrams embedded into Markdown (built-in) or in standalone files (using a plugin).
- [LaTeX](https://en.wikipedia.org/wiki/LaTeX "LaTeX") using the [Tikz](https://en.wikipedia.org/wiki/Tikz "Tikz") package has limited support for PlantUML.
- [LibreOffice](https://en.wikipedia.org/wiki/LibreOffice "LibreOffice") has Libo\_PlantUML extension to use PlantUML diagrams.
- [MediaWiki](https://en.wikipedia.org/wiki/MediaWiki "MediaWiki") has a PlantUML plug-in which renders diagrams in pages as SVG or PNG.[^9]
- [Microsoft Word](https://en.wikipedia.org/wiki/Microsoft_Word "Microsoft Word") can use PlantUML diagrams via a Word Template Add-in. There is an additional [Visual Studio Tools for Office](https://en.wikipedia.org/wiki/Visual_Studio_Tools_for_Office "Visual Studio Tools for Office") add-in called PlantUML Gizmo that works in a similar fashion.
- [NetBeans](https://en.wikipedia.org/wiki/NetBeans "NetBeans") has a PlantUML plug-in.
- [Notepad++](https://en.wikipedia.org/wiki/Notepad%2B%2B "Notepad++") has a PlantUML plug-in.[^10]
- [Obsidian](https://en.wikipedia.org/wiki/Obsidian_\(software\) "Obsidian (software)") has a PlantUML plug-in.[^11]
- [Org-mode](https://en.wikipedia.org/wiki/Org-mode "Org-mode") has a PlantUML org-babel support.
- [Rider](https://en.wikipedia.org/wiki/Rider_\(software\) "Rider (software)") has a PlantUML plug-in.
- [Sublime Text](https://en.wikipedia.org/wiki/Sublime_Text "Sublime Text") has a PlantUML package called PlantUmlDiagrams for Sublime Text 2 and 3.
- [Visual Studio Code](https://en.wikipedia.org/wiki/Visual_Studio_Code "Visual Studio Code") has various PlantUML extensions on its [marketplace](https://marketplace.visualstudio.com/), most popular being [PlantUML by jebbs](https://marketplace.visualstudio.com/items?itemName=jebbs.plantuml).
- Vnote open source notetaking markdown application has built in PlantUML support.[^12]
- [Xcode](https://en.wikipedia.org/wiki/Xcode "Xcode") has a community maintained Source Editor Extension to generate and view PlantUML class diagrams from Swift source code.[^13]

## Text format to communicate UML at source code level

PlantUML uses well-formed and human-readable code to render the diagrams.

There are other text formats for UML modelling, but PlantUML supports many diagram types, and does not need an explicit layout, though it is possible to tweak the diagrams if necessary.

```
+--------------------------------------+
|         TEDx Talks Recommendation    |
|                System                |
+--------------------------------------+
| +----------------------------------+ |
| |          Visitor                 | |
| +----------------------------------+ |
| | + View Recommended Talks         | |
| | + Search Talks                   | |
| +----------------------------------+ |
+--------------------------------------+
                   |
                   |
                   V
+--------------------------------------+
|         Authenticated User           |
+--------------------------------------+
| +----------------------------------+ |
| |          User                    | |
| +----------------------------------+ |
| | + View Recommended Talks         | |
| | + Search Talks                   | |
| | + Save Favorite Talks            | |
| +----------------------------------+ |
+--------------------------------------+
                   |
                   |
                   V
+--------------------------------------+
|         Admin                        |
+--------------------------------------+
| +----------------------------------+ |
| |          Admin                   | |
| +----------------------------------+ |
| | + CRUD Talks                     | |
| | + Manage Users                   | |
| +----------------------------------+ |
+--------------------------------------+
```

[![](https://upload.wikimedia.org/wikipedia/en/thumb/4/4a/Commons-logo.svg/30px-Commons-logo.svg.png)](https://en.wikipedia.org/wiki/File:Commons-logo.svg)

Wikimedia Commons has media related to [PlantUML](https://commons.wikimedia.org/wiki/Category:PlantUML "commons:Category:PlantUML").

- [UMLet](https://en.wikipedia.org/wiki/UMLet "UMLet")
- [AsciiDoc](https://en.wikipedia.org/wiki/AsciiDoc "AsciiDoc")
- [YEd](https://en.wikipedia.org/wiki/YEd "YEd")
- [Mermaid](https://en.wikipedia.org/w/index.php?title=Mermaid_\(software\)&action=edit&redlink=1 "Mermaid (software) (page does not exist)")
- [List of Unified Modeling Language tools](https://en.wikipedia.org/wiki/List_of_Unified_Modeling_Language_tools "List of Unified Modeling Language tools")

[^1]: ["PlantUML overview"](http://sourceforge.net/projects/plantuml/). 13 May 2023.

[^2]: ["Plantuml"](http://sourceforge.net/projects/plantuml/). 13 May 2023.

[^wikidata-117f2903f59eb8cc1d1efdedc0d01fdfa71d1450-v18-3]: ["Release v1.2024.7"](https://github.com/plantuml/plantuml/releases/tag/v1.2024.7).

[^4]: ["Embedded diagrams into source code"](https://plantuml.com/sources). *PlantUML.com*. Retrieved 2022-05-19.

[^5]: Campagne, Fabien (June 16, 2014). [*The MPS Language Workbench, Vol. 1*](https://books.google.com/books?id=nvcEAwAAQBAJ&q=%22plantuml%22&pg=PT19). CreateSpace Independent Publishing Platform. [ISBN](https://en.wikipedia.org/wiki/ISBN_\(identifier\) "ISBN (identifier)") [9781497378650](https://en.wikipedia.org/wiki/Special:BookSources/9781497378650 "Special:BookSources/9781497378650").

[^6]: Luque, L.; Veriscimo, E.S.; Pereira, G.C.; Filgueiras, L.V.L. (2014). "Can We Work Together? On the Inclusion of Blind People in UML Model-Based Tasks". In P.M. Langdon; J. Lazar; A. Heylighen; et al. (eds.). *Inclusive Designing Joining Usability, Accessibility, and Inclusion* (Aufl. 2014 ed.). Cham: Springer International Publishing. [ISBN](https://en.wikipedia.org/wiki/ISBN_\(identifier\) "ISBN (identifier)") [978-3-319-05095-9](https://en.wikipedia.org/wiki/Special:BookSources/978-3-319-05095-9 "Special:BookSources/978-3-319-05095-9").

[^7]: Müller, Karin (2012). "How to Make Unified Modeling Language Diagrams Accessible for Blind Students". In Miesenberger, Klaus (ed.). *Computers Helping People With Special Needs 13th International Conference, ICCHP 2012, Linz, Austria, July 11-13, 2012, Proceedings, Part I*. Berlin \[u.a.\]: Springer-Verlag New York Inc. pp. 186–190\. [ISBN](https://en.wikipedia.org/wiki/ISBN_\(identifier\) "ISBN (identifier)") [978-3-642-31521-3](https://en.wikipedia.org/wiki/Special:BookSources/978-3-642-31521-3 "Special:BookSources/978-3-642-31521-3").

[^8]: ["Running"](https://plantuml.com/en/running). *PlantUML*. Retrieved 2022-07-16.

[^9]: ["Extension:PlantUML - MediaWiki"](https://www.mediawiki.org/wiki/Extension:PlantUML). *www.mediawiki.org*. Retrieved 2018-10-21.

[^10]: Fruchtzwerg94. ["PlantUML Viewer"](https://github.com/Fruchtzwerg94/PlantUmlViewer). *GitHub*. Retrieved 2022-05-29.`{{[cite web](https://en.wikipedia.org/wiki/Template:Cite_web "Template:Cite web")}}`: CS1 maint: numeric names: authors list ([link](https://en.wikipedia.org/wiki/Category:CS1_maint:_numeric_names:_authors_list "Category:CS1 maint: numeric names: authors list"))

[^11]: joethei. ["PlantUML"](https://github.com/joethei/obsidian-plantuml). *GitHub*. Retrieved 2023-12-13.

[^12]: ["Vnote"](https://github.com/vnotex/vnote). *[GitHub](https://en.wikipedia.org/wiki/GitHub "GitHub")*. 13 December 2021.

[^13]: ["SwiftPlantUML-Xcode-Extension"](https://github.com/MarcoEidinger/SwiftPlantUML-Xcode-Extension). *[GitHub](https://en.wikipedia.org/wiki/GitHub "GitHub")*. 8 December 2021.

- [Official website](http://plantuml.com/)