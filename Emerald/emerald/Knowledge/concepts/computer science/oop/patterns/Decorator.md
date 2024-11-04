#decorator
#oop 
#pattern
#srp
#open-closed

## wiki 📂

In object-oriented programming, the `decorator pattern` is a design pattern that allows behavior to be added to an individual object, <mark style="background: #ABF7F7A6;">dynamically</mark>, without affecting the behavior of **other instances of the same class**.[1] The decorator pattern is often useful for adhering to the Single Responsibility Principle, as it allows functionality to be divided between classes with **unique areas of concern**[2] as well as to the Open-Closed Principle, by allowing the functionality of a class to be <mark style="background: #FFF3A3A6;">extended without being modified</mark>.[3] Decorator use can be more efficient than subclassing, because an object's behavior can be augmented without defining an entirely new object. 

![[Decorator_UML_class_diagram.svg.png]]

## Thoughts 💭

The decorator pattern can only work if the decorated component does not know that it's being decorated. Furthermore, the docoratee shouldn't even know that `decorators` exist. This `mimics` the way classic derivation works using [[inheritance]] where the [[superclass]] has no knowledge(*usually*) about its descendants.
Designing the code this way makes the core kernel `component` very focused and decouples it completely from the `decorator` classes. The same is true for the `decorator` classes which in addition also become more reusable, and they  oftentimes start being used in other places where you wouldn't expect them.

This rule also works in the other direction and makes the `decorator` pattern unusable if the Component needs to have and knowledge of it being decorated or if it needs to set-up rules about the `decoration`.

If the component has to decide on which decorators apply it cannot work
If the component needs to know it is decorated to change its behavior it won't work
If the behavior of the decorators needs to vary based on the `ConcreteComponent` it will not work

There is one more rule that needs to be followed and that is the relation between the `decorator`s themselves, they also cannot know about each other. This is quite clear from the diagram but the `decorator`s have to treat anything that they decorate as the abstract `Component` type.

A good scenario of when not to use the decorator pattern is when the result needs to vary based on the combination of decorators.
For example we could have a coffe that is `decorated` with sugar, cream, and other condiments. Now, what happens if you want to apply a discount when the customer orders cream+vanilla? You would esentially need to dig through the entire `decorator` `stack` to check if the 2 condiments were there or not.

<mark style="background: #FFF3A3A6;">Whenever there's a situation in which knowledge of the applied decorator stack is need, the pattern is not applicable</mark>

### positive results of the pattern ⏫
- code is very `focused` and `cohesive`
- code is `decoupled`
- the code is overall much easier to test
- both the `Component` and the `decorator` classes are more <mark style="background: #ABF7F7A6;">reusable</mark>
- the `ConcreteComponent` classes become easier to `extend` with subclasssing and the child classes can themselves be more `focused` on their core behavior
- the new code modules are easier to understand
- the object structure is easier to understand and reason about
- makes the overall design very flexible and dynamic
- able to change at `runtime`

### negative
- makes the code execution more **complex** due to multiple calls
	- allot of <mark style="background: #ABF7F7A6;">indirection</mark>
- Difficult to remove decorators from the stack
	- will likely require a stack `rebuild`
- Not many people understand it which can lead to 😕

## when not to use 🛑
- when knowledge of the `decorator` stack is required or could be required - the `client` might get away with this, but if the `component` has any knowledge its `over`
- when the `Component` needs to <mark style="background: #BBFABBA6;">decide on the way it can be decorated</mark> 
- when the `Component` gives different kinds of **pre and post conditions**
- when the `component` limits the applicable decorators
	- cannot work as the base `Component` might already be <mark style="background: #FFF3A3A6;">decorated</mark>

## things to keep mind
- you  can keep a `reference` to a particular `decorator` in order to `communicate` with it later on

## related patterns
- [[Strategy pattern]] - decorators change the outside of the object, strategy changes the guts
- [[Composite]] 
	- both have similiar dependencies on the main `Component` interface
	- both run into the similiar knowledge problems except for [[Composite]] the problem is on the client side as it shouldn't have knowledge of the concrete tye it is talking to
- [[Chain of responsibility]]
