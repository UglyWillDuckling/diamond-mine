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
- [X] task
- [I] idea
- [p] thumbs
- [b] bookmark
- [n] pin
- [B] bug
- [a] bell
- [?] question

- [ ] remind me (@2025-01-26)
## progress

<progress value="6" max="10">hello</progress>
%% looks quite useful, could be combined with [[Templatr]] %%

### render with dataview

**tasks**
```dataviewjs
const r = Math.round(((dv.current().file.tasks.where(t => t.completed).length) / (dv.current().file.tasks).length) * 100,0);

dv.el("progress", "hello", {attr: {value: r, max: 100}})
```

