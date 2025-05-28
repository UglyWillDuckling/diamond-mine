#ticket/pc/printer 

### related actions

[[enabled cups service]]

```set
scope:
  - type
  - actionevent
fields:
  - __bname
  - when
  - in-short
sortby:
  - - when
    - true
timestamp: 1747938641201
filter:
  - - tickets
    - hasany
    - "@link-to-this"

```
