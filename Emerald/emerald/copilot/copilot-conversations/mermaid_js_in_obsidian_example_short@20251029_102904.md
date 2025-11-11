---
epoch: 1761730144225
modelKey: llama-3.1-8b-instant|groq
tags:
  - copilot-conversation
topic: Mermaid in Obsidian Example
---

**ai**: Here is the formatted text:

| PROJECT_STATUS          | Description          |
|-------------------------|----------------------|
| CONTRACT_PENDING        | Mandat à signer       |
| EVALUATION_CANCELED     | Evaluation annulée    |
| EVALUATION_LOST          | Refus Mandat          |
| EVALUATION_ONGOING       | Evaluation en cours   |
| EVALUATION_REQUESTED     | Evaluation demandée   |
| ONGOING                 | Mandat en cours       |
| OPPORTUNITY              | Projet identifié      |
| OPPORTUNITY_LIBERTY_ONLY | PI Refus - Liberté déjà engagé |
| OPPORTUNITY_NO_COVERED   | PI Refus - Non couvert |
| OPPORTUNITY_REFUSED      | PI Refus - Refus offre MA |
| OWNER                    | Propriétaire          |
| REFUSED                  | Evaluation refusée    |
| REV_PENDING             | REV édité             |
| SUCCESS                  | Vendu                 |
[Timestamp: 2025/10/29 10:29:04]

**user**: mermaid js in obsidian example short
[Timestamp: 2025/10/29 14:38:43]

**ai**: You can use Mermaid.js in Obsidian to create diagrams and flowcharts. Here's a simple example:

```mermaid
graph LR
    A[Start] --> B{Decision}
    B -->|Yes| C[Do this]
    B -->|No| D[Do that]
    C --> E[Success]
    D --> F[Failure]
```

This will render a simple flowchart in your Obsidian note.

To use Mermaid.js in Obsidian, you can create a new note and add the following code:

```markdown
```mermaid
graph LR
    A[Start] --> B{Decision}
    B -->|Yes| C[Do this]
    B -->|No| D[Do that]
    C --> E[Success]
    D --> F[Failure]
```
```

Then, when you render the note, Obsidian will render the Mermaid.js code as a diagram.

You can also use other Mermaid.js syntax, such as:

* `sequenceDiagram`: for sequence diagrams
* `gantt`: for Gantt charts
* `classDiagram`: for class diagrams
* `stateDiagram`: for state diagrams

Check out the [Mermaid.js documentation](https://mermaid-js.github.io/mermaid/#/flowchart?id=flowcharts) for more information on how to use these and other features.
[Timestamp: 2025/10/29 14:38:45]