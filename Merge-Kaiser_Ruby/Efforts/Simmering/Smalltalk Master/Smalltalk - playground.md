#playground
[[Smalltalk Master]]

## drawing

```smalltalk
colors := #(yellow blue black green  purple).

drawFlower := [:sides :size |
	pen := Pen new.
	length := size // sides.

  pen
	defaultNib: 2;
	down;
	place: 500 @ 500.
	
	ci := 1.
	sides timesRepeat: [
		pen color: (Color named: (colors at: ci)).
		pen go: length.
		sides - 1 timesRepeat: [
			pen turn: 360 // sides; go: length.
			(Delay forMilliseconds: 300) wait.
		].
		"This uses modulo (\\) to keep ci within the array size"
		ci := (ci \\ colors size) + 1.
	]
]

drawing := [
	0 to: 2 do: [ :i | drawFlower value: 5 value: 500 + (300*i) ]
].

drawingProc := drawing fork.
drawingProc terminate.

```

**v2 of flower**

```smalltalk
drawFlower := [:pen :sides :size :each |
	length := size // sides.
	
	ci := 1.
	sides timesRepeat: [
		pen color: (Color named: (colors at: ci)).
		pen go: length.
		sides - 1 timesRepeat: [
			pen turn: 360 // sides; go: length.
			each value.
		].
		"This uses modulo (\\) to keep ci within the array size"
		ci := (ci \\ colors size) + 1.
	]
]

pen := Pen new. pen down; defaultNib: 2; place: 600.
[
	drawFlower value: pen value: 5 value: 500 value: [(Delay forMilliseconds: 200) wait]
] fork.
```
> [[Learn Smalltalk in Y Minutes#Arithmetic expressions]] 

```smalltalk
pen := Pen new.
pen down; defaultNib: 2;
[
 	pen place: 600 + (100*i).
	drawFlower2 value: pen value: 5 value: 500 value: [(Delay forMilliseconds: 200) wait]
] fork.
```

**polygons**

```smalltalk
3 to: 6 do: [:sides | 
sides timesRepeat: [
	Turtle
		go: 60;
		turn: 360 // sides
]].
```

### processes

```smalltalk
| children |
children := OrderedCollection new.

"Spawn 3 children"
3 timesRepeat: [ 
    children add: [ [ true ] whileTrue: [ 1 second wait ] ] fork 
].

"Kill all of them"
children do: [ :proc | proc terminate ].
children removeAll.
```
