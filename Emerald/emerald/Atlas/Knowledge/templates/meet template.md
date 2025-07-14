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

{{selected}}

___
### suggest

- [ ] #task use `multiselect` to choose **multiple** items from the vault 🆔 OlQqFg
	- [ ] think about **filtering** the files first
	- [ ] **build** the the strings at the bottom

```js quickadd
const files = app.vault.getMarkdownFiles();
const selectedFile = await this.quickAddApi.suggester(
    file => file.basename,  // Display just the filename
    files                   // Return the full file object
);

console.log(selectedFile)

return "[[" + selectedFile.path + "]]"
```
