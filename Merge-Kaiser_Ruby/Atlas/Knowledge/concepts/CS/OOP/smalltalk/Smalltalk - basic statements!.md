[](Atlas/Knowledge/Knowledge/concepts/CS/OOP/smalltalk/💠%20objects%20in%20Smalltalk.md)[](Atlas/Knowledge/Knowledge/concepts/CS/OOP/smalltalk/ascii%20char%20count%20draw.md)## intro

🧭 the journey starts here... 

---

## code {}
```smalltalk
x := 0.
y := 'answer'. 'answer' 
w := 'hello'. 'hello' 
z := w. 'hello'


a := #(1 2 3 4 5).

asize := a size 5

"Function call with Two Arguments"
x1 := 12.
x2 := 10.
x := x1 max: x2. 12 
y := 20 + x. 32

" page 8"
"A function call with 3 Arguments"

x 12
b := x between: 4 and: 9. false 
b := x between: 10 and: 20. true 

" subscript access"
" Array a cannot be modified"

a := #(1 2 3 4 5). #(1 2 3 4 5) 
x := a at:2. 2 
a at: 2 put: 'xxx'. " modification forbidden error"

"Here the array a can be modified"

a := {1 . 2 . 3 . 4 . 5} #(1 2 3 4 5) 
x := a at: 2. 'xxx' 
a at: 2 put: 'xxx'. 'xxx'

" Iteration "

[i < 6] whileTrue: [
	sum := sum + (a at: i).
	i := i + 1].^sum

1 to: 5 do: [:i |
	a at: i put: 0].


s := FillInTheBlank request: 'Enter line'.
f := Bag new.
s do: [:c | c isLetter ifTrue: [f add: c asLowercase ] ] 
f. a Bag($o $e $l $l $h) 

```

### input program
*comparison between Smalltalk and Pascal*
#### pascal

```pascal
program frequency;
const
size = 80;
var
s: string [size];
i: integer;
c: char;
f: array[l..26]
of integer;
k: integer;
begin
writeln('enter line');
readln(s);
for i := 1 to 26 do
f[i] := 0;
for i : = 1 to size do
begin
c : =
asLowerCase(s [i ]);
if isLetter(c) then
begin
k := ord(c)
- ord('a')
f[k] : - f[k] + 1
end
end;
for i := 1 to 26 do
write(f[i], ' ')
end.
```
#### **smalltalk**
```smalltalk
"The program above ask the user to enter a line of text from the keyboard. It then
computes the frequency of occurrence of each alphabetic character in the input text. All characters are treated as lower-case."

| s c f k |

f := Array new: 26.
s := FillInTheBlank request: 'Enter line'.

1 to: 6 do: [:i |
	f at: i put:0].
1 to: s size do: [ :i |
	c := (s at: i) asLowercase.

	c isLetter ifTrue: [
			k := c asciiValue
				- $a asciiValue
				+ 1.
			f at: k put: (f at: k) + 1
		]
	].
^f.
```
![[Atlas/Knowledge/concepts/CS/OOP/smalltalk/ascii char count draw]]
The example emphasizes the similarities of Pascal and Smalltalk syntax. The algorithm
used is identical in both cases. The input characters are examined one at a time and if they
are characters, the frequency counter for that letter is incremented.

```smalltalk
"The same program written in idiomatic Smalltalk"

s := FillInTheBlank request: 'Enter line'.
f := Bag new.
s do: [ :c | c isLetter ifTrue: [f add: c asLowercase ]].
^f.

"The Bag simply counts the number of times an item was added"
f size.
f occurrencesOf: $w.
f occurrencesOf: $h.
f occurrencesOf: $l.
```
