---
title: "Quick Start Guide to PlantUML - PlantUML for Confluence - AppsFoundry Knowledge Base"
source: "https://appsfoundry.atlassian.net/wiki/spaces/PLANTUML/pages/464289793/Quick+Start+Guide+to+PlantUML"
author:
published:
created: 2025-01-03
description:
tags:
  - "clippings"
---
Welcome to the world of PlantUML! With this quick start guide, you'll be creating your own diagrams in no time. Whether you're drawing a class diagram or creating a use case, PlantUML makes it simple and intuitive.

- 1 [Introduction to PlantUML](https://appsfoundry.atlassian.net/wiki/spaces/PLANTUML/pages/464289793/#Introduction-to-PlantUML)
- 2 [Creating Diagrams](https://appsfoundry.atlassian.net/wiki/spaces/PLANTUML/pages/464289793/#Creating-Diagrams)
- 2.1 [Class Diagrams](https://appsfoundry.atlassian.net/wiki/spaces/PLANTUML/pages/464289793/#Class-Diagrams)
- 2.2 [Use Case Diagrams](https://appsfoundry.atlassian.net/wiki/spaces/PLANTUML/pages/464289793/#Use-Case-Diagrams)
- 2.3 [Sequence Diagrams](https://appsfoundry.atlassian.net/wiki/spaces/PLANTUML/pages/464289793/#Sequence-Diagrams)
- 3 [Adding Labels and Notes](https://appsfoundry.atlassian.net/wiki/spaces/PLANTUML/pages/464289793/#Adding-Labels-and-Notes)
- 3.1 [Labels](https://appsfoundry.atlassian.net/wiki/spaces/PLANTUML/pages/464289793/#Labels)
- 3.2 [Notes](https://appsfoundry.atlassian.net/wiki/spaces/PLANTUML/pages/464289793/#Notes)
- 4 [Viewing your diagram in Confluence](https://appsfoundry.atlassian.net/wiki/spaces/PLANTUML/pages/464289793/#Viewing-your-diagram-in-Confluence)

## **Introduction to PlantUML**

PlantUML is a tool that allows you to create UML diagrams using a simple and intuitive language. It uses plain text to describe the desired diagram, which means you can focus on the structure and content, and leave the drawing part to PlantUML.

The basic structure of the PlantUML language consists of @startuml and @enduml tags at the beginning and end of your code respectively. These tags mark where the description of your diagram begins and ends.

## **Creating Diagrams**

### **Class Diagrams**

Class diagrams represent the static structure of a system, including its classes, their attributes, methods, and relationships among objects.

Here's an example of a simple class diagram:

<table><colgroup><col><col></colgroup><tbody><tr><td rowspan="1" colspan="1"><div><p><span><code><span><span></span><span>@startuml
</span></span><span><span></span>Class01 &lt;|-- Class02
</span><span><span></span>Class03 *-- Class04
</span><span><span></span>@enduml</span></code></span></p></div></td><td rowspan="1" colspan="1"><div><p><img src="https://appsfoundry.atlassian.net/5179d546-4c2e-402e-84c3-22fcf638c1c9#media-blob-url=true&amp;id=5d083e57-a838-4bfb-8c47-b02c8fa47eb4&amp;collection=contentId-464289793&amp;contextId=464289793&amp;mimeType=image%2Fpng&amp;name=image-20230724-100538.png&amp;size=3820&amp;width=230&amp;height=175&amp;alt="></p></div></td></tr></tbody></table>

In this example, `Class01` is connected to `Class02` using a simple inheritance, represented by `<|--`, and `Class03` is connected to `Class04` using composition, represented by `*--`.

### **Use Case Diagrams**

Use case diagrams help visualize the interactions between systems and entities (external actors) in terms of use cases.

Here's a simple use case diagram:

<table><colgroup><col><col></colgroup><tbody><tr><td rowspan="1" colspan="1"><div><p><span><code><span><span></span><span>@startuml
</span></span><span><span></span>User -- (Create)
</span><span><span></span>User -- (Edit)
</span><span><span></span>@enduml</span></code></span></p></div></td><td rowspan="1" colspan="1"><div><p><img src="https://appsfoundry.atlassian.net/8769d5f6-0ade-4af6-91d5-748b74017e28#media-blob-url=true&amp;id=d797b02f-4813-47df-ab63-042abe3c8e18&amp;collection=contentId-464289793&amp;contextId=464289793&amp;mimeType=image%2Fpng&amp;name=image-20230724-100552.png&amp;size=4737&amp;width=234&amp;height=182&amp;alt="></p></div></td></tr></tbody></table>

In this example, `User` is an actor that interacts with the system to `Create` and `Edit`.

### **Sequence Diagrams**

Sequence diagrams show interactions between classes in a sequential order. They illustrate objects, classes, and their interaction throughout the sequence.

Here's an example of a sequence diagram:

<table><colgroup><col><col></colgroup><tbody><tr><td rowspan="1" colspan="1"><div><p><span><code><span><span></span><span>@startuml
</span></span><span><span></span>Alice -&gt; Bob: Authentication Request
</span><span><span></span>Bob --&gt; Alice: Authentication Response
</span><span><span></span>@enduml</span></code></span></p></div></td><td rowspan="1" colspan="1"><div><p><img src="https://appsfoundry.atlassian.net/ea3e5038-aa42-41c8-8859-19ead8a8b763#media-blob-url=true&amp;id=f0553a9f-0f0b-43f0-987b-20f420618035&amp;collection=contentId-464289793&amp;contextId=464289793&amp;mimeType=image%2Fpng&amp;name=image-20230724-100611.png&amp;size=4060&amp;width=259&amp;height=159&amp;alt="></p></div></td></tr></tbody></table>

In this example, `Alice` sends an `Authentication Request` to `Bob`, and `Bob` sends an `Authentication Response` back to `Alice`.

## **Adding Labels and Notes**

### **Labels**

You can label the relationships between classes. For example:

<table><colgroup><col><col></colgroup><tbody><tr><td rowspan="1" colspan="1"><div><p><span><code><span><span></span><span>@startuml
</span></span><span><span></span>Class01 "1" *-- "many" Class02 : contains
</span><span><span></span>@enduml</span></code></span></p></div></td><td rowspan="1" colspan="1"><div><p><img src="https://appsfoundry.atlassian.net/767ded8d-9c8d-4ab8-bd92-d401ad026bbd#media-blob-url=true&amp;id=bc3e5a06-d5e2-45fb-95bc-c58813a74ea3&amp;collection=contentId-464289793&amp;contextId=464289793&amp;mimeType=image%2Fpng&amp;name=image-20230724-100628.png&amp;size=3174&amp;width=118&amp;height=187&amp;alt="></p></div></td></tr></tbody></table>

Here, `Class01` has a one-to-many relationship with `Class02` and is labeled `contains`.

### **Notes**

To further explain certain parts of your diagram, you can add notes:

<table><colgroup><col><col></colgroup><tbody><tr><td rowspan="1" colspan="1"><div><p><span><code><span><span></span><span>@startuml
</span></span><span><span></span>Class01 &lt;|-- Class02
</span><span><span></span>note right: This is a note on the right.
</span><span><span></span>@enduml</span></code></span></p></div></td><td rowspan="1" colspan="1"><div><p><img src="https://appsfoundry.atlassian.net/b493368a-d228-48ec-9429-aeb8fe9654ab#media-blob-url=true&amp;id=07f3f78b-d579-43e3-801c-a5534c2c820a&amp;collection=contentId-464289793&amp;contextId=464289793&amp;mimeType=image%2Fpng&amp;name=image-20230724-100642.png&amp;size=4620&amp;width=331&amp;height=169&amp;alt="></p></div></td></tr></tbody></table>

This will add a note on the right side of your diagram, containing the text `This is a note on the right`.

## **Viewing your diagram in Confluence**

[Enter your PlantUML code into the field provided by the PlantUML for Confluence app](https://appsfoundry.atlassian.net/wiki/spaces/PLANTUML/pages/465305601 "/wiki/spaces/PLANTUML/pages/465305601"). Once you're done, PlantUML for Confluence will automatically generate and display your diagram on your Confluence page.

That's it! You are now ready to start creating your own UML diagrams using PlantUML. As you continue to explore and become more familiar with it, you'll discover the full range of its capabilities. Happy diagramming!