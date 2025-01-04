---
related:
  - "[[PlantUML]]"
  - "[[JSON]]"
  - "[[Diagram]]"
  - "[[UML]]"
"":
---
## [[JSON]]

```plantuml
@startjson
{
   "fruit":"Apple",
   "size":"Large",
   "color": ["Red", "Green"]
}
@endjson
```

## [[yaml]]

```plantuml
@startyaml
doe: "a deer, a female deer"
ray: "a drop of golden sun"
pi: 3.14159
xmas: true
french-hens: 3
calling-birds: 
	- huey
	- dewey
	- louie
	- fred
xmas-fifth-day: 
	calling-birds: four
	french-hens: 3
	golden-rings: 5
	partridges: 
		count: 1
		location: "a pear tree"
	turtle-doves: two
@endyaml
```

## mindmap
- [ ] #task move to [[PlantUML]] docs
```plantuml

@startmindmap
* root node
	* some first level node
		* second level node
		* another second level node
	* another first level node
@endmindmap
```
==only works with an empty line at the start==  https://github.com/joethei/obsidian-plantuml/issues/50
