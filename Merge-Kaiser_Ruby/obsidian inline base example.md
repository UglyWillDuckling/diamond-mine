
```base
filters:
  and:
    - file.tags.contains("event")
    - project == link("Kuca")
views:
  - type: table
    name: View

```
