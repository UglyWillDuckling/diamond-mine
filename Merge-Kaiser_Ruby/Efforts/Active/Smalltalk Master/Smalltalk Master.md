---
status: In progress
interest: 9.2
value: 9.3
about:
  - "[[Smalltalk]]"
tags:
  - "#ticket/learn/programming"
---

- [smalltalk tutorial on youtube](https://www.youtube.com/watch?v=Y73khDTURuE&list=PLZHx5heVfgEvuveKG1T7BBSuDOTHl1eLl&index=7)
- [[Learn Smalltalk in Y Minutes]]
- [[Learn Smalltalk with ProfStef]]
- [[Smalltalk - playground]]

- [ ] #task [[Smalltalk Master]] - master [[Smalltalk]]
	- [ ] #task read [[💠 objects in Smalltalk]]
	- [ ] #task read also [[Atlas/Knowledge/Media/Writings/Articles/Dev/The Early History Of Smalltalk|The Early History Of Smalltalk]]
	- [ ] **learn** the language 🧑‍🎓
	- [ ] come up with **projects**
	- [ ] make a **project** in Smalltalk
	- [ ] fix syntax highlighting
	- [x] checkout [[Learn Smalltalk with ProfStef]]
	- [ ] #task go through [[Squeak By Example]]

___
## toc
```table-of-contents
```

## blocks
- anonymous methods
- can be stored into variables
- `[]`

```smalltalk
[Transcript open].
"does not open a Transcript because the block is not executed.

Here is a block that adds 2 to its argument (its argument is named x):"
[:x | x+2].

"We can execute a block by sending it value messages."
[:x | x+2] value: 5.
[Transcript open] value.
[:x | x+2] value: 10.
[:x :y| x + y] value:3 value:5.
```

### assignment
- can be assigned to vars

```smalltalk
"Blocks can be assigned to a variable then executed later.
Note that |b| is the declaration of a variable named 'b' and that ':=' assigns a value to a variable.
Select the three lines then Print It:"
|b|
b := [:x | x+2].
b value: 12.
```

### play

```smalltalk
"you may call this block whenever you want"
drawing := [
	0 to: 2 do: [ :i | drawFlower value: 22 value: 500 + (300*i) ]
].

drawingProc := drawing fork.
drawingProc "a Process(65399) in [] in [] in Process>>terminate"
drawingProc isTerminated.
drawingProc terminate.
```

- has the `whileTrue` method
- ..
 arrays

```smalltalk
colors := #(red green blue).
pen := Pen new.
pen place: 500@500.

"foreach"
colors do: [ :colorName |
    pen color: (Color named: colorName).
    pen go: 500; turn: 120. "Draw a triangle with changing colors"
].
```

## new class

```smalltalk
"1. Create the Subclass"
Object subclass: #Counter
    instanceVariableNames: 'count'
    classVariableNames: ''
    poolDictionaries: ''
    category: 'MyExamples'.

"2. Add the Methods"
Counter compile: 'initialize
    "Set the starting value"
    count := 0'.

Counter compile: 'increment
    "Add one"
    count := count + 1'.

Counter compile: 'decrement
    "Subtract one"
    count := count - 1'.

Counter compile: 'count
    "Return the current value"
		
    ^ count'.

| c |
c := Counter new.
c increment.
c increment.
c decrement.
Transcript show: 'The count is: ', c count printString; cr.
```


## loops

```smalltalk
"draw several different polygons"
| sides |
sides := 3.
[sides <= 6]
	whileTrue: [
		sides timesRepeat: [Turtle go: 200; turn: 360 // sides].			
		sides := sides +1.
	].
```

**string char iteration**

```smalltalk
| vowels |
vowels := 0.
'Now is the time' do: [:char |
	char isVowel
		ifTrue: [vowels := vowels + 1]].
vowels.[]() "5"
```


## Files interactions

```smalltalk
"replace all c's in readme with X."
| input output charcount |
charcount := 0.
input := FileStream fileNamed: 'readme.txt'.
output := FileStream fileNamed: 'output.txt'.
input do: [:char |
	char = $c
		ifTrue: [
			output nextPut: $X.
			charcount := charcount + 1]
		ifFalse: [output nextPut: char]
].
input close.
output close.
^charcount.
```

### iterators

- each iterates every item
- select filters
- collect is like map
- reject filters opposite

```smalltalk
#(11 38 3 -2 10) do: [:each |
     Transcript show: each printString; cr].

"Some other really nice iterators"
#(11 38 3 -2 10) collect: [:each | each negated].
#(11 38 3 -2 10) collect: [:each | each odd].
#(11 38 3 -2 10) select: [:each | each odd].
#(11 38 3 -2 10) select: [:each | each > 10].
#(11 38 3 -2 10) reject: [:each | each > 10].

"seperatedBy is on the collection"
#(11 38 3 -2 10) 
     do: [:each | Transcript show: each printString]
     separatedBy: [Transcript show: '.'].
```
#### select

```smalltalk
"select"
('Now is the time' select: [ :c | c isVowel not ] ) size. 10 

"collect"
#(1 2 3 4 13 7 10) collect: [:i | i * i]. #(1 4 9 16 169 49 100) 
```

#### reject

```smalltalk
#(1 2 3 4 5 6 7 8 9 ) reject: [ :i |
	i factorial > (i * i * i * i) ].
 #(1 2 3 4 5 6) 
```

#### ==collect==

> exactly like map.

```smalltalk
"square the numbers."
#(1 2 3 4 13 7 10) collect: [:i | i * i]. 
 #(1 4 9 16 169 49 100) 
```

**reverse a file name**

```smalltalk
| name length |
name := 'Some big file name'.
length := name size.

^(name reversed reject: [:c |
	c isSeparator or: [c isVowel and: [
		c isLowercase and: [( length := length - 1 ) >= 8  ] ] ] ] "as long as the length is greater than 8"
  ) 
			reversed,'         '
				copyFrom: 1 to: 8.

```

- why reversed ==because we want to preserve the start of the name== %% remove from end %%
- why reversed again ==to get the correct order==

- what's with the string of spaces ==needed to make sure the copying has enough space==
- `copyFrom` from what? On what? ==from the reversed concatenated string==

- what's with `length` change? How does that work?
- ..

## basic data types

### arrays

**literal arrays**
- created at **parse** time
```smalltalk
"Literal arrays are created at parse time:"

#(1 2 3).
#( 1 2 3 #(4 5 6)) size. # 4
#(1 2 4) isEmpty. # false
#(1 2 3) first. # 1

#('hello' 'Javascript') at: 2 put: 'Smalltalk'; yourself.
```

**Dynamic Arrays**
- created at execution time.

```smalltalk
"Dynamic Arrays are created at execution time:"
{ (2+3) . (6*6) }.
{ (2+3) . (6*6) . 'hello', ' Stef'} size.
```

## messages

- sent to objects
- three types

**unary**

```smalltalk
"Messages are sent to objects. There are three types of message: Unary, Binary and Keyword.

Unary messages have the following form:
    anObject aMessage "
1 class. Number
false not. true
Date today.
Number pi.
```

**binary**

```smalltalk
"Binary messages have the following form:
    anObject + anotherObject"
3 * 2.
Date today year = 2011.
false | false. "or"
true & true. "and"
true & false.
10 @ 100.
10 <= 12. true
'ab', 'cd'. 'abcd'
```

**keyword**
- messages with arguments

```smalltalk
"Keyword Messages are messages with arguments. They have the following form:
    anObject akey: anotherObject akey2: anotherObject2"

'Web development is a good deal of pain.' copyFrom: 1 to: 30

1 max: 3.
Array with: 'hello' with: 2 with: Smalltalk.

"The message is with:with:with: implemented on class Array. Note you can also write"

Array
	with: 'Hi there!'
	with: 2
	with: Smalltalk.
```


### Execution order 

1. **unary**
2. binary
3. keyword

- from left to right

```smalltalk
"Unary messages are executed first, then binary messages and finally keyword messages:
    Unary > Binary > Keywords"

2.5 + 3.8 rounded. 6.5 "3.8 becomes 4 then + 2.5 = 6.5"

3 max: 2 + 2. 4
  
(0@0) class. Point

0@0 x: 100.

(0@0 x: 100) class.

"Between messages of similar precedence, expressions are executed from left to right"
-12345 negated asString reversed. "negated -> string -> reversed"
```

## Operators

### cascade
```smalltalk
Transcript 
	   show: 'hello';
	   show: 'Smalltalk' ;
	   cr.
```

## conditionals
- just messages

```smalltalk
"Conditionals are just messages sent to Boolean objects"
1 < 2
  ifTrue: [100]
  ifFalse: [42].

"Here the message is ifTrue:ifFalse
Try this:"
Transcript open.
3 > 10 
	ifTrue: [Transcript show: 'maybe there''s a bug ....']
	ifFalse: [Transcript show: 'No : 3 is less than 10'].

3 = 3 ifTrue: [ProfStef next].
```

## instantiation

```smalltalk
((Dictionary new add: ('move on!' -> ProfStef)) at: 'move on!') next
```
> the result from the () expression is the new dictionary returned from `at:`
> we call `next` on it

## Reflection

```smalltalk
"You can inspect and change the system at runtime.

Take a look at the source code of the method #and: of the class Boolean:"
(Boolean methodDictionary at: 'and:') source.

"Or all the methods it sends:"
(Boolean methodDictionary at: 'and:') messageSends.

"Here's all the methods I implement:"
ProfStef class methodDictionary.

"Let's create a new method to go to the next lesson:"
|newMethod|
newMethod := Compiler new
	install: 'goToNextLesson ProfStef next.'
	forClass: ProfStef class
	protocol: 'navigation'.

"Wow! I can't wait to use my new method!"
ProfStef goToNextLesson.
```


