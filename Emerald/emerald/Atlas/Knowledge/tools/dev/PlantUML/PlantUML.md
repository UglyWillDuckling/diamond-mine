---
title: PlantUML - Wikipedia
description: Open-source software visualization tool
source: https://en.wikipedia.org/wiki/PlantUML
created: 2025-01-03
published: 2014-08-23
tags:
  - clippings
  - tool
  - visualize-tool
  - diagram-tool
related:
  - "[[UML]]"
  - "[[Diagram]]"
  - "[[Star UML]]"
  - "[[mermaid.js]]"
  - "[[plant uml themes]]"
---
<mark style="background: #FFF3A3A6;">Open-source software visualization tool</mark>

**PlantUML** is an open-source tool allowing users to create diagrams from a plain text language. Besides various [UML](https://en.wikipedia.org/wiki/Unified_Modeling_Language "Unified Modeling Language") diagrams, PlantUML has support for various other [software development](https://en.wikipedia.org/wiki/Software_development "Software development") related formats (such as [Archimate](https://en.wikipedia.org/wiki/Archimate "Archimate"), [Block diagram](https://en.wikipedia.org/wiki/Block_diagram "Block diagram"), [BPMN](https://en.wikipedia.org/wiki/Business_Process_Model_and_Notation "Business Process Model and Notation"), [C4](https://en.wikipedia.org/wiki/C4_model "C4 model"), [Computer network diagram](https://en.wikipedia.org/wiki/Computer_network_diagram "Computer network diagram"), [ERD](https://en.wikipedia.org/wiki/Entity-Relationship_Diagram "Entity-Relationship Diagram"), [Gantt chart](https://en.wikipedia.org/wiki/Gantt_chart "Gantt chart"), [Mind map](https://en.wikipedia.org/wiki/Mind_map "Mind map"), and [WBD](https://en.wikipedia.org/wiki/Work_breakdown_structure "Work breakdown structure")), as well as visualisation of [JSON](https://en.wikipedia.org/wiki/JSON "JSON") and [YAML](https://en.wikipedia.org/wiki/YAML "YAML") files.

The language of PlantUML is an example of a [domain-specific language](https://en.wikipedia.org/wiki/Domain-specific_language "Domain-specific language").[^5] Besides its own DSL, PlantUML also understands [AsciiMath](https://en.wikipedia.org/wiki/AsciiMath "AsciiMath"), [Creole](https://en.wikipedia.org/wiki/Creole_\(markup\) "Creole (markup)"), [DOT](https://en.wikipedia.org/wiki/DOT_\(graph_description_language\) "DOT (graph description language)"), and [LaTeX](https://en.wikipedia.org/wiki/LaTeX "LaTeX"). It uses [Graphviz](https://en.wikipedia.org/wiki/Graphviz "Graphviz") software to lay out its diagrams and [Tikz](https://en.wikipedia.org/wiki/Tikz "Tikz") for LaTeX support. Images can be output as [PNG](https://en.wikipedia.org/wiki/Portable_Network_Graphics "Portable Network Graphics"), [SVG](https://en.wikipedia.org/wiki/Scalable_Vector_Graphics "Scalable Vector Graphics"), LaTeX and even [ASCII art](https://en.wikipedia.org/wiki/ASCII_art "ASCII art"). PlantUML has also been used to allow blind people to design and read UML diagrams.[^6][^7]

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