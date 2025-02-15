>  https://github.com/jdanielmourao/obsidian-sanctum 


“hello”
‘bye’

– bye
– hello–third
## third

–**checkboxes**

- [c]  down
- [!]  hello
- [<] bye
- [l] location
- [I] idea
- [p] thumbs
- [b] bookmark
- [n] pin
- [B] bug
- [a] bell
- [?] question
- [>] forward

- [x] one

- [x] remind me (@2025-02-03 20:07)
## progress

<progress value="6" max="10">hello</progress>
%% looks quite useful, could be combined with [[Templatr]] %%

### render with dataview

**tasks**
```dataviewjs
const r = Math.round(((dv.current().file.tasks.where(t => t.completed).length) / (dv.current().file.tasks).length) * 100,0);

dv.el("progress", "", {attr: {value: r, max: 100}})
```
