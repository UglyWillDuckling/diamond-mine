#abstraction #dev 

Refs: [Wiki: Abstraction layer](https://en.wikipedia.org/wiki/Abstraction_layer)

### from wiki
In [[computing]], an abstraction layer or abstraction level is a way of hiding the working details of a [[subsystem]]. Examples of software models that use layers of [[abstraction]] include the OSI model for network protocols, OpenGL, and other graphics libraries, which allow the[[ separation of concerns ]]to facilitate [[interoperability]] and [[platform independence]].

In[[ computer science]], an abstraction layer is a [[generalization]] of a conceptual model or [[algorithm]], away from any specific [[implementation]]. 
These generalizations arise from broad similarities that are best encapsulated by models that express similarities present in various specific implementations. The **simplification** provided by an abstraction layer allows for easy [[reuse]] by distilling a useful concept or [[design pattern]] so that situations, where it may be accurately applied, can be quickly recognized.

==Just composing lower-level elements into a construct doesn't count as an abstraction layer unless it shields users from its underlying [[complexity]].== 

A layer is considered to be on top of another if it depends on it. Every layer can exist without the layers above it, and requires the layers below it to function. 
Frequently abstraction layers can be composed into a [[hierarchy]] of abstraction levels. The OSI model comprises seven abstraction layers. Each layer of the model encapsulates and addresses a different part of the needs of digital communications, thereby reducing the complexity of the associated engineering solutions.

A famous aphorism of [[David Wheeler]] is, "All problems in computer science can be solved by another level of indirection."
This is often deliberately misquoted with "abstraction" substituted for "indirection."[citation needed] It is also sometimes misattributed to Butler Lampson. Kevlin Henney's corollary to this is, "...except for the problem of too many layers of indirection."

Related: [[abstraction]] [[encapsulation]]