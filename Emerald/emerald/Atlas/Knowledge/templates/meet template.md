---
type: meeting
meeting type: "{{FIELD:meeting_type}}"
created: "{{DATE}}"
scheduled: "{{VDATE:scheduled, YYYY-MM-DDTHH:mm:ss}}"
related:
previous:
agenda:
participants: []
tags:
  - meet
---

From: {{LINKCURRENT}}
___
## who?

`=this.participants`

## why?
> what caused this to happen, why do we need to have this meeting?

## what?
> meeting agenda

`=this.agenda`

## notes 🗒

- ..

## discussion 🗨

{{selected}}
