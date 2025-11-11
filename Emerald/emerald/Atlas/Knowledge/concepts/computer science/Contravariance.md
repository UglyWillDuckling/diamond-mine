#concept/computer-science 

A fundamental concept in programming!

  Contravariance is a concept in programming that refers to a relationship
  between types [^1] , specifically in the context of subtyping and inheritance[^2] [^3] .
  
==It's a way to define a type hierarchy that allows for more flexible and expressive type relationships.==

**What is contravariance?**

In simple terms, contravariance is a relationship between types where a type
B  is a subtype of type  A  if  B  is a supertype of  A . This is the
**opposite of covariance**, where a type  B  is a subtype of  A  if  B  is a
subtype of  A .

  To illustrate this, let's consider an example:

  Suppose we have a type  Animal  and a type  Dog  that inherits from  Animal
  . In a covariance scenario,  Dog  would be a subtype of  Animal , meaning
  that a  Dog  is an  Animal .

  In contrast, in a contravariance scenario,  Animal  would be a subtype of
  Dog , meaning that an  Animal  is a  Dog . This might seem counterintuitive,
  but it's a valid relationship in certain contexts.

  How does contravariance work?

  Contravariance is typically implemented using type parameters, which are
  placeholders for types. A type parameter is said to be contravariant if it
  appears as a supertype in the subtype relationship.

  For example, in C#:

    class Animal { }
    class Dog : Animal { }

    class Container<T> { }

    // Covariant relationship
    Container<Dog> dogContainer = new Container<Dog>();
    Container<Animal> animalContainer = dogContainer; // OK

    // Contravariant relationship
    Container<Animal> animalContainer2 = new Container<Animal>();
    Container<Dog> dogContainer2 = animalContainer2; // OK

  In the contravariant relationship example, we can assign an
  Container<Animal>  to a  Container<Dog> , even though  Animal  is a
  supertype of  Dog . This is because the type parameter  T  is contravariant
  in the  Container<T>  class.

  Use cases for contravariance

  Contravariance is useful in scenarios where you want to define a type
  hierarchy that allows for more flexibility in type relationships. Some
  common use cases include:

  1. Generic type parameters: Contravariance is useful when working with
  generic type parameters, as it allows you to define more flexible type
  relationships between types.
  2. Inheritance and polymorphism: Contravariance can help you define more
  flexible inheritance relationships between types, enabling polymorphic
  behavior.
  3. Type inference: Contravariance can be used to improve type inference, as
  it allows the compiler to infer more precise type relationships.

  Programming languages that support contravariance

  Several programming languages support contravariance, including:

  4. C# (using the  in  keyword)
  5. F# (using the  ~  symbol)
  6. Rust (using the  ?  symbol)
  7. Scala (using the  -  symbol)

  Conclusion

  Contravariance is a powerful concept in programming that allows for more
  flexible type relationships. While it can be counterintuitive at first, it's
  a valuable tool in the programmer's toolbox. By understanding
  contravariance, you can write more expressive and flexible code, especially
  when working with generic types and inheritance.

[^1]: [[Type in programming]]
[^2]: [[Inheritance in programming]]
[^3]:[[Subtyping]] 