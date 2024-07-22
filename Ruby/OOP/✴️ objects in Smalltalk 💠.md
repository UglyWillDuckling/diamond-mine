
## The World According to Objects

## What are objects?
![[lawyer.png]]
 
`Correspondence between our perception of the world and its representation in machine terms through Smalltalk gets at the heart of Smalltalk's power.`

!!!Related data and program pieces are **encapsulated** within a Smalltalk object, a
**communicating black box**.

...

And if an object needs something done that it does not know how to do
within its own set of methods, it sends a message to another object, in effect, asking for
assistance in the completion of a task.

**...Smalltalks object's methods do not call other objects' methods directly.**

In OOPS terms, **information hiding**—as this **encapsulation** of code and data is known in
computer science—makes for highly portable, easily modifiable and safe software. Large
applications may be easily maintained since objects may be updated, recompiled, tested
and called immediately back into service with their new behavioral capabilities on line.


`Where it is generally an exception or nuisance in conventional languages, creating new data structures is done routinely when you define a new class or subclass of objects in Smalltalk`


## How do objects communicate and behave?

`Smalltalk objects take responsibility for their own actions, responding individually to every message.`

 Each of the elementary data types knows how to perform generally required behaviors such as print, duplicate and comparison operations.

`Integers, arrays and characters take care of getting themselves represented on paper.`

 This Smalltalk characteristic of having different objects responding **uniquely** to the **same**
**message** is known as **polymorphism**.

Smalltalk guarantees that there will be a response by a message recipient. If an object
determines that it does not know how to perform a requested behavior, it will at least
answer with a "**Message not understood**" response message.

`A working prototype can be constructed quickly and enhancements integrated easily into the evolving system.`

## How does Smalltalk organize objects and their methods?

