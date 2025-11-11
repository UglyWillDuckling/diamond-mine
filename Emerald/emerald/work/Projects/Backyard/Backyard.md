#work/app 

```base
summaries:
  new summary: values.reduce()
  Children total: values.filter(value.isType("number")).reduce(value + acc, 0).round(2)
filters:
  and:
    - file.tags.contains("ticket")
    - project == link("work/Projects/Backyard/Backyard", "Backyard")
formulas:
  children count: children.length
properties:
  file.name:
    displayName: ticket
views:
  - type: table
    name: Story View
    order:
      - file.name
      - status
      - children
      - formula.children count
    sort:
      - property: formula.children count
        direction: ASC
      - property: file.name
        direction: ASC
    summaries:
      formula.children count: Children total
    columnSize:
      file.name: 287
      note.status: 115
      note.children: 297
      formula.children count: 173

```
