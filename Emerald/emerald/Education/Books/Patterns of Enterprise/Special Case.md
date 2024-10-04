#pattern 
#oop 
#special
#null 

[[Patterns of Enterprise Architecture]], [[Refactoring]]
[[Null Object Pattern]]

> A `subclass` that provides **special** behavior for **particular cases**.

![[special_case.jpg]]

---
## intro

**Nulls** are awkward things in object-oriented programs because they defeat [[polymorphism]]]. Usually you can invoke foo freely on a variable reference of a given type without worrying about whether the item is the exact type or a subclass. With a strongly typed language you can even have the compiler check that the call is correct. However, since a variable can contain null, you may run into a runtime error by invoking a message on null, which will get you a nice, friendly `stack trace`.

## problem 
If it’s possible for a variable to be null, you have to remember to surround it with null test code so you’ll do the right thing if a null is present. Often the right thing is the same in many contexts, so you end up writing similar code in lots of places—committing the sin of code duplication.

## in general

Nulls are a common example of such problems and others crop up regularly. In number systems you have to deal with <mark style="background: #ABF7F7A6;">infinity</mark>, which has special rules for things like addition that **break** the usual [[invariant]]'s of `real numbers`. 

One of my earliest experiences in business software was with a `utility customer` who wasn’t fully known, referred to as “<mark style="background: #FFF3A3A6;">occupant</mark>.”

> [!TIP] tip
> All of these imply altering the usual behavior of the [[type]].

## How it Works

The basic idea is to create a subclass to handle the Special Case. Thus, if you have a customer object and you want to avoid null checks, you make a null customer object. Take all of the methods for customer and override them in the Special Case to provide some harmless behavior. Then, whenever you have a null, put in an instance of null customer instead.

A null can mean **different** things. A `null` customer may mean no customer or it may mean that there’s a customer but we don’t know who it is. 
Rather than just using a null customer, consider having separate <mark style="background: #ABF7F7A6;">Special Cases</mark> for **missing** customer and **unknown** customer.

- you can usually use the [[Flyweight]] pattern
	- not always, sometimes you need to keep track of [[state]]
- you should use more than one `special case` if the problem requires it
	- don't limit yourself
	
## implementation

A common way for a Special Case to override methods is to return another `Special Case`, so if you ask an <mark style="background: #FFB86CA6;">unknown</mark> customer for his last bill, you may well get an **unknown** **bill**.

### example from arithmetic - floating points
`IEEE 754` floating-point arithmetic offers good examples of Special Case with positive infinity, negative infinity, and not-a-number (**NaN**). If you divide by zero, instead of getting an exception that you have to deal with, the system just returns **NaN**, and **NaN** participates in arithmetic just like any other `floating point number`.

## when to use it

Use Special Case whenever you have **multiple places** in the system that have the **same behavior** after a `conditional check` for a particular class [[instance]], or the same behavior after a `null check`.

## example

### C - sharp
```c#
class NullEmployee : Employee, INull
      public override String Name {
         get {return  "Null Employee";}
         set {}
      }
      public override Decimal GrossToDate {
         get {return  0m;}
      }
      public override Contract Contract {
         get {return Contract.NULL;}
      }
```

> [!TIP] The NULL Contract
> Notice that when you ask a **null** **employee** for its `contract` you get a **null** **contract** back.

The default values here avoid a lot of **null tests** if they end up with the same null values. The repeated null values are handled by the null object by default. You can also test for nullness explicitly either by giving the customer an `isNull` method or by using a type test for a marker interface.

## advantages ⏫

- removes allot of `null` checks
	- sometimes all
- removes the need for type checking each time there is a special case in the program
- in combination with [[exception handling]] and some other `patterns` can almost completely eliminate **NULL checks**, see [[null check]]

## things to watch out for
- be careful not to use the `special case` in cases where you actually **need** to check for [[null]] values
	- certain situations actually **need** to `know` if the value/entity exists or not
		- for this , you may add a `method` on the [[interface]] of the entity/value that returns if the current [[object]] is a `null object`
	- sometimes its better to use a `local` variation of the `special case` in order to not generalize things and to make the `special case` more **focused** and to **simpler** compared to the main `interface`
	- yet another solution is to make a new [[type]]  that will behave exactly as you want withing your own context
		- this new [[Type]] and the produced `object` would then either `wrap` the null object or replace it completely

## personal notes 📔
- aside from being used on a general level, can be employed **locally** within a certain [[scope]], e.g. a class or module
	- gives the benefit of the more general pattern without being global
	- allows for <mark style="background: #BBFABBA6;">fine tuning</mark> of the `special` `object` making it more **appropriate** in the given `context`
	- makes it possible to `mock`  only a **subset** of an [[interface]]'s [[feature]]'s which makes the code **simpler**, more **cohesive**, better **documented** and better **communicated**, see [[cohesion]]

## relates to 
- [[exception handling]]
- [[Null Object Pattern]] 
- [[Special Case Pattern]]
