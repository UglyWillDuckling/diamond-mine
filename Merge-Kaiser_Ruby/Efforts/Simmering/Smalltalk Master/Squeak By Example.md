#book


a really good book.

Both fun and very in depth.

[[SBE-6.0.pdf]]
___

# chapters

## Getting Started

### Your first interactive object - Quinto Game

- you should always add comments to classes explaining their purpose and expectations
- methods go under protocol(messages) [^1]
- initialize super state with `super initialize`
- `initialize` is the constructor
- write in terms of methods that don't yet exist
- ..

```smalltalk
"SBEGame Class"
initialize
	| height overallBorderWidth sampleCell width |
	
	super initialize.
	sampleCell := SBECell new.
	width := sampleCell width.
	height :=sampleCell height.
	overallBorderWidth := 2 * self borderWidth.
	
	self position: 5 @ 5.
	self extent: (width * self cellsPerSide) @ (height * self cellsPerSide) + overallBorderWidth.
	cells := Matrix new: self cellsPerSide tabulate: [:i :j | self newCellAt: i at: j].
	
cellsPerSide
	"The number of cells along each side of the game. This could later actually calculate the value"
	^10
```

```smalltalk
newCellAt: i at: j
	"Create a cell for position(i,j) and add it to my on-screen
	representation at the appropriate screen position. Answer the new cell."
	| cell origin |
	
	cell := SBECell new.
	origin  := self innerBounds origin.
	self addMorph: cell.
	
	cell
		position: ((i - 1) * cell width) @ ((j - 1) * cell height) + origin;
		mouseAction: [self toggleNeighboursOfCellAt: i at: j].
```

```smalltalk
toggleNeighboursOfCellAt: i at: j
	"Toggle the four cells to the north, south, east and west."
	i > 1 ifTrue: [(cells at: i - 1 at: j) toggleState].
	i < self cellsPerSide ifTrue: [(cells at: i + 1 at: j) toggleState].
	j > 1 ifTrue: [(cells at: i at: j - 1) toggleState].
	j < self cellsPerSide ifTrue: [(cells at: i at: j + 1) toggleState]. 
```

###  Syntactic elements

Expressions are composed of the following building blocks: (i) six reserved keywords, or pseudo-variables: self, super, nil, true, false, and thisContext, (ii) constant expressions for literal objects including numbers, characters, strings, symbols, and arrays, (iii) variable declarations, (iv) assignments, (v) block closures, and (vi) messages.

| Syntax                     | What it represents                         |
| -------------------------- | ------------------------------------------ |
| `startPoint`               | a local variable name                      |
| `Transcript`               | a shared variable name                     |
| `self`                     | pseudo-variable                            |
| `1`                        | decimal integer                            |
| `2r101`                    | binary integer                             |
| `1.5`                      | floating point number                      |
| `2.4e7`                    | exponential notation                       |
| `1.79s2`                   | scaled decimal                             |
| `$a`                       | the character 'a'                          |
| `'Hello'`                  | the string "Hello"                         |
| `#Hello`                   | the symbol `#Hello`                        |
| `{1 . 2 . 1 + 2}`          | an array (brace construct)                 |
| `#(1 2 3)`                 | an array literal                           |
| `#[255 33 200 1]`          | a byte array literal                       |
| `"a comment"`              | a comment                                  |
| `\|x y\|`                  | declaration of temporary variables x and y |
| `x := 1`                   | assign 1 to x                              |
| `[x + y]`                  | a block that evaluates to x+y              |
| `<primitive: 1>`           | primitive pragma to invoke virtual machine |
| `3 factorial`              | unary message                              |
| `3 + 4`                    | binary messages                            |
| `2 raisedTo: 6 modulo: 10` | keyword message                            |
| `^ true`                   | return the value true                      |
| `.`                        | expression separator                       |
| `;`                        | message cascade                            |

**Shared variables**. Identifiers that start with upper case letters are global
variables, class variables, pool dictionaries, or class names. Transcript
is a global variable, an instance of the class TranscriptStream.

**The receiver**. self is a keyword that refers to the object in which the current
method is executing. We call it “receiver” because this object will nor-
mally have received the message that caused the method to execute.
self is called a “pseudo-variable” since we cannot assign to it.

**Integers**. In addition to ordinary decimal integers like 42, Squeak also
provides a radix notation. 2r101 is 101 in radix 2 (i.e., binary), which is
equal to decimal 5. 16rFf is FF in radix 16 (i.e., hexadecimal), which is
equal to decimal 255.

**Floating** point numbers can be specified with their base-ten exponent:
2.4e7 is 2.4 × 107 . Floats also support radix notation, but the exponent
is always in base ten: 2r0.1e2 is 0.5 × 102 , which is equal to 2.

**Scaled decimals** are fixed-point numbers with a fixed number of digits
after the decimal point. They support unbounded precision, but are
slower than floating point numbers. For example, 1.79s2 is equal to
179/100. You can omit the scale, in which case it is taken from the
number of digits specified: 1.99s is equivalent to 1.99s2 and 1s2 is
equivalent to 1.00s2.

**Strings**. Single quotes are used to define a literal string. If you want a
string with a quote inside, just double the quote, as in 'G''day'.
**Symbols** are like strings in that they contain a sequence of characters.
However, unlike a string, a literal symbol **is guaranteed to be globally**
**unique**. There is only one Symbol object #Hello but there may be
multiple String objects with the value 'Hello'. Amongst others, symbols
are used for referencing messages by their selector.
**Run-time arrays.** 
Curly braces { } create an array ==dynamically== at run-time.
Elements are expressions separated by periods. So {1 . 2 . 1 + 2} defines
an array with elements 1, 2, and the result of evaluating 1 + 2. (The
curly-brace notation is peculiar to the Squeak dialect of Smalltalk! In
other Smalltalks you must build up dynamic arrays explicitly.)

**Array literals** are defined by #( ), surrounding space-separated literals. Ev-
erything within the parentheses must be a compile-time constant.
These arrays are created at compile-time of the method. For example,
`#(27 #(true false) abc)` is a literal of three elements: the integer 27, the
literal array containing the two booleans, and the symbol #abc. When-
ever a method including such an array is executed the same instance
is used. That is why these arrays are often used to represent constant
values and avoid repeated array instantiations.
**Byte arrays** are defined by #[ ], surrounding integers between 0 and 255.
This creates an instance of ByteArray which can be used to work with
binary data. Just as for #( ), byte arrays that are defined using #[ ] are
static literals.
**Comments** are enclosed in double quotes. "hello" is a comment, not a string,
and is ignored by the Squeak compiler. Comments may span multiple
lines.
**Temporary** variable declaration. Vertical bars | | enclose the declaration of
one or more temporary variables in a method (and also in a block).

**Assignment**. := assigns an object to a variable. Sometimes you will see ←
used instead. Unfortunately, since this is not an ASCII character, it
will appear as an underscore unless you are using a special font. So,
x := 1 is the same as x ← 1 or x _ 1. You should use := since the other
representations have been deprecated since Squeak 3.9.

**Blocks**. Square brackets [ ] define a block, also known as a block closure or
a lexical closure, which is a ==first-class object== **representing a function.**
As we shall see, ==blocks may take arguments and can have temporary==
==variables.==

**Pragmas**. Angle brackets < > right after a method header denote a pragma
which is a possibility to add static annotations to a method. The kind
of pragma you will probably see most frequently in Squeak are primi-
tive pragmas which are indicated by the pragma selector #primitive: and
its siblings #primitive:error:, #primitive:module: etc. Primitives denote an
invocation of a virtual machine primitive. For instance, <primitive: 1> is
the VM primitive for SmallInteger»+. Any code following the primitive
is executed only if the primitive fails. 

**Unary** messages consist of a single word (such as factorial) sent to a receiver
(like the number 3).
**Binary** messages are operators (like +) sent to a receiver and taking a single
argument. In 3 + 4, the **receiver is 3 and the argument is 4.**

**Keyword messages** consist of multiple keywords (like raisedTo:modulo:),
each ending with a colon and taking a single argument. In the expres-
sion 2 raisedTo: 6 modulo: 10, the message selector raisedTo:modulo: takes
the two arguments 6 and 10, one following each colon. We send the
message to the receiver 2.

**Method** return. ^ is used to return a value from a method.

**Sequences of statements**. A ==period== or full-stop (.) is the statement separator.
Putting a period between two expressions turns them into independent statements.

**Cascades**. ==Semicolons== can be used to send a cascade of messages to a single
receiver. In Transcript show: 'hello'; cr we first send the keyword message `show: 'hello'` to the receiver `Transcript`, and then we send the unary message `cr` **to the same receiver.**

### Pseudo-variables

In Smalltalk, there are six reserved keywords, or pseudo-variables: true, false,
nil, self, super, and thisContext. They are called pseudo-variables because
they are predefined and cannot be assigned to. true, false, and nil are
constants while the values of self, super, and thisContext vary dynamically
as code is executed.
**true** and **false** are the unique instances of the Boolean classes True and
False. See Chapter 9 for more details.
**nil** is the undefined object. Instance variables, class variables, and tem-
porary variables are initialized to nil. It is the unique instance of the class
UndefinedObject.
**self** always refers to the receiver of the currently executing method.
**super** also refers to the receiver of the current method, but when you
send a message to super, the method-lookup changes so that it starts from
the superclass of the class containing the method that uses super. For
further details see Chapter 5.
**thisContext** is a pseudo-variable that represents the top frame of the
run-time stack. In other words, it represents the currently executing Context
. thisContext is normally not of interest to most programmers, but it is
essential for implementing development tools like the debugger and it is
also used to implement exception handling and continuations.

### Message sends

There are three kinds of messages in Squeak.

1. **Unary messages** take no argument. `1 factorial` sends the message `factorial` to the object `1`.
2. **Binary messages** take exactly one argument. `1 + 2` sends the message `+` with argument `2` to the object `1`.
3. **Keyword messages** take an arbitrary number of arguments. `2 raisedTo: 6 modulo: 10` sends the message consisting of the message selector `raisedTo:modulo:` and the arguments `6` and `10` to the object `2`.

---

**Unary message selectors** consist of alphanumeric characters, and start with a lower case letter.

**Binary message selectors** consist of one or more special characters. The following set are the most commonly used characters for binary message selectors:

```
+ - / \ * ~ < > = @ % | & ? ,
```

**Keyword message selectors** consist of a series of alphanumeric keywords, where each keyword starts with a lower-case letter and ends with a colon.

---

#### Precedence

Unary messages have the highest precedence, then binary messages, and finally keyword messages, so:

```
2 raisedTo: 1 + 3 factorial   →   128
```

*(First we send `factorial` to `3`, then we send `+ 6` to `1`, and finally we send `raisedTo: 7` to `2`.)*

> We use the notation `expression → result` to show the result of evaluating an expression.

Precedence aside, evaluation is strictly from left to right, so:

```smalltalk
1 + 2 * 3   →   9
```

not `7`. Parentheses must be used to alter the order of evaluation:

```
1 + (2 * 3)   →   7
```

---

#### Composing Message Sends

Message sends may be composed using periods and semi-colons. A period-separated sequence of expressions causes each expression in the series to be evaluated as a statement, one after the other.

###  Method syntax

> [!note] Programs are developed one method at a time
> ==Programs are developed one method at a time==, in the context of a given class.

Whereas expressions may be evaluated anywhere in Squeak (for example, in a workspace, a debugger, or browser), methods are normally defined in a browser or debugger window. (Methods can also be filed in from an
external medium, but this is not the usual way to program in Squeak.)
==Programs are developed one method at a time==, in the context of a given class. (A class is defined by sending a message to a class, asking it to create a subclass, so there is no special syntax required for defining classes.)

Here is the method `lineCount` in the class `String`. (The usual convention is to refer to methods as ClassName»methodName, so we call this method String»lineCount.)

**Syntactically**, a method consists of:
1. the method pattern, containing the `name` (i.e., lineCount) and any `arguments` (none in this example);
2. comments (these may occur anywhere, but the convention is to put one at the top that explains what the method does);
3. declarations of temporary variables (i.e., cr and count); and
4. any number of expressions separated by dots; here there are four.

The evaluation of any expression preceded by a ^ (typed as ^) will cause the method to ==exit== at that point, returning the value of that expression. 
A method that terminates without explicitly returning some expression will ==implicitly return self==.

**Arguments** and temporary variables should always start with lower case letters. Names starting with upper-case letters are assumed to be global variables. Class names, like Character, for example, are simply global variables referring to the object representing that class.

However, you are discouraged to define your own global variables since they introduce global state which is often considered a code smell because it is hard to keep the overview of all global variables. In most cases, best practice is to define a ==class variable== and implement accessor methods on its class-side instead.

### Block syntax

- limit of 4 args
- ^ returns from the method **not** the block

Blocks provide a mechanism to defer the evaluation of expressions. A block is essentially an **anonymous function**. A block is evaluated by sending it the message value. ==The block answers the value of the last expression== in its body unless there is an explicit return (with ^), in which case it does not answer any value.
```smalltalk
[1 + 2] value  −→  3
```

Blocks may take parameters, each of which is declared with a leading colon. A vertical bar separates the parameter declaration(s) from the body of the block. To evaluate a block with one parameter, you must send it the message value: with one argument. A two-parameter block must be sent
value:value:, and so on, **up to 4 arguments.**

If you have a block with more than four parameters, you must use `valueWithArguments`: and pass the arguments in an array. (A block with a large number of parameters is often a sign of a design problem.)

Blocks may also declare temporary variables, which are surrounded by vertical bars, just like temporary variable declarations in a method. Locals are declared after any arguments:

==Blocks are actually lexical closures since they can refer to variables of the **surrounding** environment.== 
The following block refers to the variable x of its enclosing environment.
```smalltalk
|x|
x := 1.
[:y | x + y] value: 2 --> 3
```

Blocks are instances of the class `BlockClosure`. This means that they are
objects, ==so they can be assigned to variables and passed as arguments just==
==like any other object.==

**Returning inside blocks.** Returning inside blocks acts as an escaping mechanism. Return expressions inside a nested block expression will terminate the lexically enclosing method. In the following example (see method 3.2), when the expression ^ foundBlock value: element is executed, the
method `detect:ifFound:ifNone:` escapes the current iteration and returns it.

```smalltalk
Collection»detect: aBlock ifFound: foundBlock ifNone: exceptionBlock
"foundBlock takes one argument, the found object."
self do: [:element |
(aBlock value: element) ifTrue: [^ foundBlock value: element]].
^ exceptionBlock value
```

### Conditionals and loops in a nutshell ➿

Smalltalk offers no special syntax for control constructs. Instead, these are typically expressed by **sending messages to booleans, numbers, and collections, with blocks as arguments.**

**Loops** are typically expressed by sending messages to blocks, integers,
or collections. Since the exit condition for a loop may be repeatedly evalu-
ated, it should be a block rather than a boolean value. Here is an example
of a very procedural loop:
```smalltalk
n := 1.
[n < 1000] whileTrue: [n := n 2].
*n -> 1024
```

**timesRepeat**: offers a simple way to implement a fixed iteration:
```smalltalk
n := 1.
10 timesRepeat: [n := n * 2].
n -> 1024
```

We can also send the message `to:do:` to a number which then acts as the
initial value of a loop counter. The two arguments are the upper bound,
and a block that takes the current value of the loop counter as its argument:
```smalltalk
result := String new.
1 to: 10 do: [:n | result := result , n , ' '].
result -> '1 2 3 4 5 6 7 8 9 10 '
```

**Higher-order iterators.** `Collections` comprise a large number of different
classes, many of which support the same protocol. The most important
messages for iterating over collections include **do:, collect:, select:, reject:,**
detect:, and inject:into:. These messages define high-level iterators that allow
one to write very compact code.

An **Interval** is a collection that lets one iterate over a sequence of numbers
from the starting point to the end. 1 to: 10 represents the interval from 1 to
10 . Since it is a collection, we can send the message do: to it. The argument
is a block that is evaluated for each element of the collection.
```smalltalk
result := String new.
(1 to: 10) do: [:n | result := result , n , ' '].
result −→ '1 2 3 4 5 6 7 8 9 10 ' 
```

### Primitives and pragmas

In Smalltalk everything is an object, and everything happens by sending
messages. Nevertheless, at certain points, we hit rock bottom. Certain
objects can only get work done by invoking virtual machine primitives.

For example, the following are all implemented as primitives: memory
allocation (new, new:), bit manipulation (bitAnd:, bitOr:, bitShift:), pointer and
integer arithmetic `(+, -, <, >, *, / , =, ==...)`, and **array access** (at:, at:put:).

Primitives are invoked with the syntax '<primitive: aNumber>. A method
that invokes such a primitive may also include Smalltalk code, which will
be evaluated only if the primitive fails.

Here we see the code for SmallInteger»+. If the primitive fails, the expres-
sion super + aNumber will be evaluated and returned.

```smalltalk
"Primitive. Add the receiver to the argument and answer with the result
if it is a SmallInteger. Fail if the argument or the result is not a
SmallInteger Ess]ential No Lookup. See Object documentation whatIsAPrimitive."
<primitive: 1>
^ super + aNumber
```

## Understanding message syntax

Although Smalltalk’s message syntax is very simple, it is unconventional
and it can take some time to get used to it. This chapter offers some
guidance to help you get accustomed to this special syntax for sending
messages. If you already feel comfortable with the syntax, you may choose
to skip this chapter or come back to it later.

In Smalltalk the order in which messages are sent is determined by the
kind of message. There are just three kinds of messages: unary, binary,
and keyword messages. Unary messages are always sent first, then binary
messages and finally keyword ones. As in most languages, parentheses can
be used to change the order of evaluation. These rules make Smalltalk code
as easy to read as possible. We discuss the rules for evaluating messages in
detail in Section 4.2.
As most computation in Smalltalk is done by message passing, correctly
identifying messages and their evaluation order is crucial. The following
terminology will helpo us:

• A message is composed of the message selector and the optional
message arguments.
• A message is sent to a receiver.
• The combination of a message and its receiver is called a message send
as shown in Figure 4.1.p
![[msg.png]]
> Figure 4.1: Two messages composed of a receiver, a method selector, and a set
of arguments.

![[morph.png]]
> Figure 4.1: Two messages composed of a receiver, a method selector, and a set
of arguments.

**Figure 4.2** represents two message sends, Color yellow and aMorph color:
Color yellow, hence there are two ellipses. The message send Color yellow is
executed first so its ellipse is numbered 1. There are two receivers: aMorph
which receives the message color: ... and Color which receives the message
yellow. Both receivers are underlined.

> [!NOTE] message
> A message is always sent to a **receiver**, which can be	a single literal, a block or a variable or the result of evaluating another message.

The following example, which is a bit more complex (!), offers a nice
illustration that even complicated Smalltalk expressions can be read naturally:

```smalltalk
[:aClass | aClass methodDict keys sorted select: [:aMethod | (aClass>>aMethod)
isAbstract]] value: Boolean -> #(#& #==> #and: #asBit #ifFalse:
#ifFalse:ifTrue: #ifTrue: #ifTrue:ifFalse: #not #or: #|)
```

Here we want to know which methods of the Boolean class are **abstract**. We
ask some argument class, `aClass`, for the keys of its method dictionary, sort
them, and select those methods of that class that are abstract. ==Then we bind==
==the argument aClass to the concrete value Boolean==. We need parentheses
only to send the **binary message** >>, which selects a method from a class,
before sending the unary message isAbstract to that method The result shows
us which methods must be implemented by Boolean’s concrete subclasses
True and False.

### When to use [ ] or ( )

Another challenge you might face is understanding the difference between
square brackets and parentheses. The basic principle is that you should use
[ ] when you do not know how many times, potentially zero, an expression
should be evaluated. `[expression]` will create a block closure (i.e., an object)
from expression which may be evaluated any number of times (possibly
zero), depending on the context. The expression can be any code.

**Parentheses**, on the other hand, only affect the order of sending mes-
sages. So in (expression), the expression will always be evaluated exactly
once.

### Expression sequences

Expressions (i.e., messages sends, assignments. . . ) separated by periods
are evaluated in sequence. Note that there is no period between a variable
definition and the following expression. ==The value of a sequence is the==
==value of the last expression==. 
The values returned by all the expressions except the last one are ignored. Note that the period is a **separator** and not a terminator. Therefore a final period is optional.
```smalltalk
box := 20 @ 30 corner: 60 @ 90.
box containsPoint: 40 @ 50 -> true
```


# Developing in Squeak

## The Smalltalk object model

Smalltalk’s programming model is simple and uniform: Everything is an
object, and objects communicate only by sending each other messages.
However, this simplicity and uniformity can be a source of difficulty for
programmers used to other languages. In this chapter, we present the
core concepts of the Smalltalk object model; in particular we discuss the
consequences of representing classes as objects.

### The rules of the model 

The Smalltalk object model is based on a set of simple rules that are applied
uniformly. The rules are as follows:

- Rule 1. Everything is an object.
- Rule 2. Every object is an instance of a class.
- Rule 3. Every class has a superclass.
- Rule 4. Everything happens by message sends.
- Rule 5. Method lookup follows the inheritance chain.

### Everything is an object


The mantra “everything is an object” is highly contagious. After only a
short while working with Smalltalk, you will start to be surprised at how
this rule simplifies everything you do. Integers, for example, are true
objects, so you can send messages to them, just as you do to any other
object.

The representation of a number as large as 20 factorial is different from
the representation of a number as small as 7, but because they are both
objects, none of the code — not even the implementation of factorial — needs
to know about this.

==Deep in the implementation of Smalltalk, there are three different kinds==
==of objects. There are (1) ordinary objects with instance variables that are==
==passed by **references**, there are (2) immediate objects such as SmallInteger s==
==that are passed **by** **value**, and there are (3) **indexable objects** like arrays that==
==hold a **contiguous portion of memory.==** 
The beauty of Smalltalk is that you normally do not need to care about the differences between these three
kinds of objects.

### Every object is an instance of a class

A class defines the structure of its instances via instance variables, and
the behavior of its instances via methods. Each method has a name, called
its selector, which is unique within the class.
Since classes are objects, and every object is an instance of a class, it follows
that classes must also be instances of classes. A class whose instances are
classes is called a metaclass. Whenever you create a class, the system auto-
matically creates a metaclass for you. The metaclass defines the structure
and behavior of the class that is its instance. **Most of the time you will not**
**need to think about metaclasses, and may happily ignore them.** (We will
have a closer look at metaclasses in Chapter 13.)


#### Instance variables

Instance variables in Smalltalk are private to the instance itself. 
This is in contrast to Java and C++, which allow instance variables (also known as
“fields” or “member variables”) to be accessed by any other instance that
happens to be of the same class. 

==We say that the encapsulation boundary of objects in Java and C++ is the class, whereas in Smalltalk it is the instance.==

In Smalltalk, two instances of the same class cannot access each other’s
instance variables unless the class defines “accessor methods”. There is
no language syntax that provides direct access to the instance variables
of any other object. (Actually, a mechanism called reflection does provide
a way to ask another object for the values of its instance variables; meta-
programming is intended for writing tools like the object inspector, whose
sole purpose is to look inside other objects.)
Instance variables can be accessed by name in any of the instance meth-
ods of the class that defines them, and also in the methods defined in its
subclasses. This means that Smalltalk instance variables are similar to pro-
tected variables in C++ and Java. ==However, we prefer to say that they are==
==private because it is considered bad style in Smalltalk to access an instance==
==variable directly from a subclass.==

Method Point»dist: (see Method 5.1) computes the distance between the
receiver and another point. The instance variables x and y of the receiver
are accessed directly by the method body. **However, the instance variables**
**of the other point must be accessed by sending it the messages x and y.**

```smalltalk
dist: aPoint
	"Answer the distance between aPoint and the receiver."
	| dx dy |
	dx := aPoint x - x.
	dy := aPoint y - y.
	^ ((dx * dx) + (dy * dy)) sqrt.

1 @ 1 dist 4 @ 5 -> 5
```

The key reason to prefer instance-based encapsulation to class-based
encapsulation is that it enables different implementations of the same
abstraction to coexist. For example, method Point»dist:, need not know or
care whether the argument aPoint is an instance of the same class as the
receiver. The argument object might be represented in polar coordinates, or
as a record in a database, or on another computer in a distributed system;
as long as it can respond to the messages x and y, the code in Method 5.1
will still work.

#### Methods 

==All methods are public.== Methods are grouped into categories that indi-
cate their intent. 

Some common category names have been established by convention, for example, accessing for all accessor methods, and initialization for establishing a consistent initial state for the object. 
The protocol private is sometimes used to group methods that should not be seen from outside. ==Nothing, however, prevents you from sending a message that is implemented by such a “private” method.==

Methods can access all instance variables of the object. Some Smalltalk developers prefer to access instance variables only through their accessors. This practice has some value, but it also clutters the interface of your classes, and worse, **exposes some private state to the world.**

#### The instance side and the class side

Since classes are objects, t==hey can have their own instance variables and==
==their own methods.== We call these class instance variables and class methods, but they are really no different from ordinary instance variables and methods: 
Class instance variables are just instance variables defined by a metaclass, and class methods are just methods defined by a metaclass.
A class and its metaclass are two separate classes, even though the former is an instance of the latter. 
==However, this is largely irrelevant to you as a programmer: You are concerned with defining the behavior of your objects and the classes that create them.==

For this reason, the browser helps you to browse both class and metaclass as if they were a single thing with two “sides”: **the “instance side” and the “class side”.** 
Clicking on the instance button browses the class Color, i.e., you browse the methods that are executed when messages are sent to an instance of Color, like the color blue. 
Pressing the class button browses the class Color class, i.e., ==you see the methods that will be executed when messages are sent to the class Color itself.== For example, Color blue sends the message blue to the class Color. You will therefore find the method blue defined on the class side of Color, not on the instance side.
```smalltalk
aColor := Color blue. "Class side method blue"
aColor --> Color blue
aColor red --> 0.0
 "Instance side accessor method red"
aColor blue --> 1.0
 "Instance side accessor method blue"
```

You define a class by filling in the template proposed on the instance
side. When you accept this template, the system creates not just the class
that you defined, but also the corresponding metaclass. You can browse the
metaclass by clicking on the class button. The only part of the metaclass
creation template that makes sense for you to edit directly is the list of
instance variable names.

Once a class has been created, clicking the instance button lets you edit and browse the methods that will be possessed by instances of that class (and of its subclasses). 
For example, we can see in Figure 5.1 that the method hue is defined on instances of the class Color. In contrast, the class button lets you browse and edit the metaclass (in this case Color class).

#### Class methods

Class methods can be quite useful; browse Color class for some good exam-
ples. You will see that there are two kinds of method defined on a class:
those that create instances of the class, like Color class»blue and those that
perform a utility function, like Color class»showColorCube. This is typical,
although you will occasionally find class methods used in other ways.
It is convenient to place utility methods on the class side because they
can be executed without having to create any additional objects first. In-
deed, many of them will contain a comment designed to make it easy to
execute them.
> [!tip] notice
> Browse method Color class»showColorCube, double-click just inside the quotes
> on the comment "Color showColorCube" and type CMD –d.
`note:note` `Ctrl+r`   to restore display

For those familiar with Java and C++, class methods may seem similar
to **static** **methods**. However, the uniformity of Smalltalk means that they are
somewhat different: Whereas Java static methods are really just statically-
resolved procedures, Smalltalk class methods are dynamically-dispatched
methods. ==This means that inheritance, overriding, and super-sends work==
==for class methods in Smalltalk, whereas they do not work for static methods==
==in Java.==

#### Class instance variables

With ordinary instance variables, all the instances of a class have the same
set of variable names, and the instances of its subclasses inherit those
names. However, each instance has its own private set of values. The story
is exactly the same with class instance variables: each class has its own
private class instance variables. A subclass will inherit those class instance
variables, **but it has its own private copies of those variables.** 
==Just as objects do not share instance variables, neither do classes and their subclasses share==
==class instance variables.==

**Example**: Class instance variables are not shared with subclasses. Sup-
pose we define classes Dog and Hyena, where Hyena inherits the class instance
variable count from Dog.

```smalltalk
Object subclass: #Dog
	instanceVariableNames: ''
	classVariableNames: ''
	poolDictionaries: ''
	category: 'SBE-CIV'

Dog class
	instanceVariableNames:'count'

Dog subclass: #Hyena
	instanceVariableNames: ''
	classVariableNames: ''
	poolDictionaries: ''
	category: 'SBE-CIV'
```

Now suppose we define class methods for Dog to initialize its count to 0,
and to increment it when new instances are created:
```smalltalk
Dog class»initialize
	super initialize.
	count := 0.

Dog class»new
	count := count +1.
^ super new

Dog class»count
	^ count
```

Now when we create a new Dog its count is incremented, and so is that
of every Hyena, but they are counted separately.

Note also that class instance variables are private to a class in exactly the
same way that instance variables are private to the instance. Since classes
and their instances are different objects, this has the following immediate
consequences:
==For this reason, instance initialization methods must always be defined on==
==the instance side== — **the class side has no access to instance variables, so**
**it cannot initialize them!** 
All that the class can do is to send initialization messages, possibly using accessors, to newly created instances. Similarly, instances can only access class instance variables indirectly,
by sending accessor messages to their class. 
**Java** has nothing equivalent to class instance variables. 
Java and C++ static variables are more like Smalltalk class variables, which we will discuss
in Section 5.7: ==all of the subclasses and all of their instances share the same== ==static variable.==


**Example**: Defining a [[Singleton]]. The Singleton pattern provides a typical
example of the use of class instance variables and class methods. 
Imagine that we would like to implement a class `SBEWebServer` and use the Singleton
pattern to ensure that it has only one instance.
```smalltalk
Object subclass: #SBEWebServer
	instanceVariableNames: 'sessions'
	classVariableNames: ''
	poolDictionaries: ''
	category: 'Web'
```

Then, we click on the class button to switch to the class side and add
the instance variable uniqueInstance there.
```smalltalk
SBEWebServer class
	instanceVariableNames: 'uniqueInstance'
```
The consequence of this is that the class SBEWebServer now has an-
other instance variable, in addition to the variables that it inherits, such as
superclass and methodDict.

We can now define a class method named `uniqueInstance`.
This method first checks whether uniqueInstance has been initialized. If it has not, the method creates an instance and assigns it to the class instance variable uniqueInstance. We use a super send, as we have forbidden the use of new for our web server class. Finally the value of `uniqueInstance` is
returned.
Since `uniqueInstance` is a class instance variable, this method can directly access it.
```smalltalk
uniqueInstance
	uniqueInstance ifNil: [uniqueInstance := super new].
^ uniqueInstance

new "disable new"
	^ self error: 'Singleton: use #uniqueInstance'
```

The first time that `SBEWebServer` `uniqueInstance` is executed, an instance of the class SBEWebServer will be created and assigned to the uniqueInstance variable. ==The next time, the previously created instance will be returned instead of creating a new one.==

Note that the instance creation code inside the conditional is written as self new and not as SBEWebServer new. **What is the difference?**

Since the uniqueInstance method is defined in `SBEWebServer` class, you might
think that they were the same. And indeed, until someone creates a subclass
of `SBEWebServer`, they are the same. But suppose that `SBEReliableWebServer`
is a **subclass** of `SBEWebServer` and inherits the uniqueInstance method. We
would clearly expect `SBEReliableWebServer` `uniqueInstance` to answer a `SBEReliableWebServer`. Using **self** ensures that this will happen since it will be bound
to the respective class. Note also that `SBEWebServer` and `SBEReliableWebServer`
will each have their own class instance variable called `uniqueInstance`. 
These two variables will of course have different values.

### Every class has a superclass

Each class in Smalltalk inherits its behavior and the description of its
structure from a single superclass. This means that Smalltalk has **single**
**inheritance.**
```smalltalk
SmallInteger superclass
 −→ Integer
Integer superclass
 −→ Number
Number superclass
 −→ Magnitude
Magnitude superclass
 −→ Object
Object superclass
 −→ ProtoObject
ProtoObject superclass
 −→ nil
```

Traditionally, the root of the Smalltalk inheritance hierarchy is the class
Object (since everything is an object). In Squeak, the root is actually a
class called ProtoObject, but you will normally not pay any attention to
this class. ProtoObject encapsulates the minimal set of messages that all
objects must have. However, most classes inherit from Object, which defines
many additional messages that almost all objects ought to understand and
respond to. Unless you have a very good reason to do otherwise, when
creating application classes, you should normally subclass Object, or one of
its subclasses.
> [!NOTEj] ProtoObject
> Actually, the only use case for directly subclassing ProtoObject is when you write a transparent decorator that implements message forwarding by overriding #doesNotUnderstand:. In Squeak, see MessageCatcher for a simple example.

Although Squeak does not provide multiple inheritance, it incorporates a mechanism called **traits** for sharing behavior across unrelated classes.
==Traits are collections of methods that can be reused by multiple classes that are not related by inheritance. Using traits allows one to share code between different classes without duplicating code.==

#### Abstract methods and abstract classes

An abstract class is a class that exists to be subclassed, rather than to be
instantiated. An abstract class is usually incomplete, in the sense that it does
not define all of the methods that it uses. The “missing” methods — those
that the other methods assume, but which are not themselves defined — are
called abstract methods.

==An abstract class is a class that exists to be subclassed,== rather than to be
instantiated. An abstract class is usually incomplete, in the sense that it does
not define all of the methods that it uses. The “missing” methods — those
that the other methods assume, but which are not themselves defined — are
called abstract methods.

Smalltalk has no dedicated syntax to specify that a method or a class
is abstract. By convention, the body of an abstract method consists of the
expression self subclassResponsibility. This is known as a “marker method”,
and indicates that subclasses have the responsibility to define a concrete
version of the method. self subclassResponsibility methods should always be
overridden, and thus should never be executed. If you forget to override
one, and it is executed, an exception will be raised.
A class is considered abstract if one of its methods is abstract. Noth-
ing actually prevents you from creating an instance of an abstract class;
everything will work until an abstract method is invoked.

#### Trait

A trait is a collection of methods that can be included in the behavior of
a class without the need for inheritance. This makes it easy for classes to
have a unique superclass, yet still share useful methods with otherwise
unrelated classes.

To define a new trait, simply replace the subclass creation template by a
message to the class Trait.
```smalltalk
Trait named: #TAuthor
	uses: { }
	category: 'SBE-Quinto'
```

Here, we define the trait `TAuthor` in the category SBE-Quinto. This trait does
not use any other existing traits. In general, **we can specify a trait composition**
**expression of other traits** to use as part of the uses: keyword argument. Here
we simply provide an empty array.

Traits may contain methods, but no instance variables. Suppose we
would like to be able to add an author method to various classes, indepen-
dent of where they occur in the hierarchy. We might do this as follows:
```smalltalk
TAuthor»author
	"Returns author initials"
	^ 'taa'"the anonymous author"
```

Now we can use this trait in a class that already has its own superclass,
for instance the SBEGame class that we defined in Chapter 2. We simply
modify the class creation template for SBEGame to include a uses: keyword
argument that specifies that `TAuthor` should be used.
```smalltalk
BorderedMorph subclass: #SBEGame
	uses: TAuthor
	instanceVariableNames: 'cells'
	classVariableNames: ''
	poolDictionaries: ''
	category: 'SBE-Quinto'
```

Trait composition expressions may combine multiple traits using the +
operator. In case of conflicts (i.e., if multiple traits define methods with the
same name), these conflicts can be resolved by explicitly removing these
methods (with -), or by redefining these methods in the class or trait that
you are defining. It is also possible to alias methods (with @), providing a
new name for them.

###  Everything happens by sending messages

This rule captures the essence of programming in Smalltalk.

In procedural programming, the choice of which piece of code to execute
when a procedure is called is made by the caller. The caller chooses the
procedure or function to execute statically, by name.

In object-oriented programming, **we do not “call methods”: we “send**
**messages.”**
The choice of terminology is significant. Each object has its own responsibilities. We do not tell an object what to do by applying some procedure to it. Instead, we politely ask an object to do something for us by
sending it a message. The message is not a piece of code: it is nothing but a name and a list of arguments. T**he receiver then decides how to respond** by selecting its own method for doing what was asked. Since different objects may have different methods for responding to the same message,
the method must be chosen dynamically, when the message is received.

As a consequence, we can send the same message to different objects, each
of which may have its own method for responding to the message. We do
not tell the SmallInteger 3 or the Point 1@2 how to respond to the message + 4.
Each has its own method for +, and responds to + 4 accordingly.

One of the consequences of Smalltalk’s model of message sending is that
it encourages a style in which ==objects tend to have very small methods and==
==delegate tasks to other objects,== rather than implementing huge, procedural
methods that assume too much responsibility. [[Joseph Pelrine]] expresses this
principle succinctly as follows:

> Don not do anything that you can push off onto someone
else.

Many object-oriented languages provide both static and dynamic op-
erations for objects; **in Smalltalk there are only dynamic message sends.**
Instead of providing static class operations, for instance, classes are objects
and we simply send messages to classes.

Nearly everything in Smalltalk happens by message sends. At some
point, action must take place:

• **Variable declarations** are not message sends. In fact, variable declara-
tions are not even executable. Declaring a variable just causes space
to be allocated for an object reference.
• **Assignments** are not message sends. An assignment to a variable
causes that variable name to be freshly bound in the scope of its
definition.
• **Returns** are not message sends. A return simply causes the computed
result to be returned to the sender.
• **Primitives** are not message sends. They are implemented in the virtual
machine.

Other than these few exceptions, pretty much everything else does truly
happen by sending messages. In particular, since there are no “public
fields” in Smalltalk, the only way to update an instance variable of another
object is to send it a message asking that it update its own field. Of course,
providing setter and getter methods for all the instance variables of an
object is no good object-oriented style. Joseph Pelrine also states this very
nicely:

> Do not let anyone else play with your data.

What exactly happens when an object receives a message?
The process is quite simple: The class of the receiver looks up the
method to use to handle the message. If this class does not have a method,
it asks its superclass, and so on, up the inheritance chain. When the method
is found, the arguments are bound to the parameters of the method, and
the virtual machine executes it.

It is essentially as simple as this. Nevertheless, there are a few questions
that need some care to answer:
• What happens when a method does not explicitly return a value?
• What happens when a class reimplements a superclass method?
• What is the difference between self and super sends?
• What happens when no method is found?

**The rules for method lookup that we present here are conceptual**: Virtual
machine implementors use all kinds of tricks and optimizations to speed-up
method lookup. That is their job, but you should never be able to detect
that they are doing something different from the rules mentioned above.

#### Method lookup

Suppose we create an instance of EllipseMorph.
```smalltalk
anEllipse := EllipseMorph new.
```

If we now send this object the message defaultColor, we get the result Color
yellow:
```smalltalk
anEllipse defaultColor --> Color yellow
```

The class `EllipseMorph` implements `defaultColor`, so the appropriate method is
found immediately.

In contrast, if we send the message openInWorld to anEllipse, the method
is not immediately found, since the class EllipseMorph does not implement
openInWorld. The search therefore continues in the superclass, BorderedMorph,
and so on, until an openInWorld method is found in the class Morph (see
Figure 5.2).
```smalltalk
Morph»openInWorld
"Add this morph to the world."
self openInWorld: self currentWorld.
```

![[inherit.png|600]]
> Figure 5.2: Method lookup follows the inheritance hierarchy.

#### Returning self

Notice that `EllipseMorph»defaultColor` (method 5.13) explicitly returns Color
yellow whereas Morph»openInWorld (method 5.14) does not appear to return
anything.
Actually, a method always answers a message with a value — which is,
of course, an object. The answer may be defined by the ^ construct in the
method, but if execution reaches the end of the method without executing
a ^, the method still answers a value: It answers the object that received
the message. We usually say that the method “answers self”, because in
Smalltalk the pseudo-variable **self** represents the receiver of the message,
==rather like this in Java.==

Why is writing ^ self explicitly not a good thing to do? Well, when you
return something explicitly, you are communicating that you are returning
something of interest to the sender. When you explicitly return self, you are
saying that you expect the sender to use the returned value. This is not the
case here, so it is best not to explicitly return self.
This is a common idiom in Smalltalk, which Kent Beck refers to as
> [!quote] Interesting return value
> Return a value only when you intend for the sender to
> use the value.

#### Overriding and extension

If we look again at the EllipseMorph class hierarchy in Figure 5.2, we see that
the classes Morph and EllipseMorph both implement defaultColor. In fact, if we
open a new morph (Morph new openInWorld) we see that we get a blue morph,
whereas an ellipse will be yellow by default.
We say that EllipseMorph overrides the defaultColor method that it inherits
from Morph. The inherited method no longer exists from the point of view
of anEllipse.
Sometimes, we do not want to override inherited methods, but rather
extend them with some new functionality, that is, we would like to be able
to invoke the overridden method in addition to the new functionality we are
defining in the subclass. In Smalltalk, as in many object-oriented languages
that support single inheritance, this can be done with the help of super
sends.

The most important application of this mechanism is in the initialize
method. Whenever a new instance of a class is initialized, it is critical to
also initialize any inherited instance variables. However, the knowledge
of how to do this is already captured in the initialize methods of each of
the superclass in the inheritance chain. The subclass has no business even
trying to initialize inherited instance variables!

It is therefore good practice whenever implementing an initialize method
to send super initialize before performing any further initialization:
```smalltalk
BorderedMorph»initialize
	"Initialize the state of the receiver."
	super initialize.
	self initializeBorder.
```

> [!NOTE] note
> An initialize method should always start by sending super initialize.

#### Self sends and super sends

A super send triggers a static method lookup starting in
the superclass of the class of the method performing the
super send.

#### Message not understood

What happens if the method we are looking for is not found?
Suppose we send the message foo to our ellipse. First, the normal
method lookup would go through the inheritance chain all the way up to
Object (or rather ProtoObject) looking for this method. When this method
is not found, the virtual machine will notify the object of the failure by
causing it to send self doesNotUnderstand: #foo.

What happens if the method we are looking for is not found?
Suppose we send the message foo to our ellipse. First, the normal
method lookup would go through the inheritance chain all the way up to
Object (or rather ProtoObject) looking for this method. When this method
is not found, the virtual machine will notify the object of the failure by
causing it to send self doesNotUnderstand: #foo.


###  Shared variables

Next, we will look at an aspect of Smalltalk that is not so easily covered by
our five rules: shared variables.
Smalltalk provides three kinds of shared variables: 
- (1) **globally** shared variables; 
- (2) variables shared between instances and classes (**class** variables),
- (3) variables shared amongst a group of classes (**pool** variables). The
	names of all of these shared variables start with a capital letter, to warn us
	that they are indeed shared between multiple objects.

#### Class variables

Sometimes, we need to share some data amongst all the instances of a class
and the class itself. This is possible using class variables. The term class
variable indicates that the lifetime of the variable is the same as that of
the class. ==However, what the term does not convey is that these variables==
==are shared amongst all the instances of a class as well as the class itself,== as
shown in Figure 5.5. Indeed, a better name would have been **shared variables**
since this expresses more clearly their role, and also warns of the danger of
using them, particularly if they are modified.

In Figure 5.5 we see that rgb and cachedDepth are instance variables of
Color, hence only accessible to instances of Color. We also see that superclass,
subclass, methodDict and so on are class instance variables, i.e., instance
variables only accessible to the **Color** class.
![[shared.png|500]]

```smalltalk
Object subclass: #Color
instanceVariableNames: 'rgb cachedDepth cachedBitPattern'
classVariableNames: 'Black Blue BlueShift Brown CachedColormaps ColorChart
ColorNames ComponentMask ComponentMax Cyan DarkGray Gray
GrayToIndexMap Green GreenShift HalfComponentMask HighLightBitmaps
IndexedColors LightBlue LightBrown LightCyan LightGray LightGreen
LightMagenta LightOrange LightRed LightYellow Magenta MaskingMap Orange
PaleBlue PaleBuff PaleGreen PaleMagenta PaleOrange PalePeach PaleRed
PaleTan PaleYellow PureBlue PureCyan PureGreen PureMagenta PureRed
PureYellow RandomStream Red RedShift TranslucentPatterns Transparent
VeryDarkGray VeryLightGray VeryPaleRed VeryVeryDarkGray
VeryVeryLightGray White Yellow'
poolDictionaries: ''
category: 'Graphics-Primitives'
```


#### Class initialization

The presence of class variables raises the question: How do we initialize
them? One solution is lazy initialization. This can be done by introducing
an accessor method which, when executed, initializes the variable if it has
not yet been initialized. This implies that we must use the accessor all the
time and never use the class variable directly. This furthermore imposes the
cost of the accessor send and the initialization test. It also arguably defeats
the point of using a class variable, since in fact it is no longer shared.

**Another solution is to override the class method initialize.**

If you adopt this solution, you need to remember to invoke the initialize
method after you define it, e.g., by evaluating **Color initialize.** Although class
side initialize methods are executed automatically when code is loaded into
memory, they are not executed automatically when they are first typed into
the browser and compiled, or when they are edited and re-compiled.

## The Squeak programming environment





[^1]: [[message passing]]