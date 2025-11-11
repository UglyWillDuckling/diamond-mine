---
related:
  - "[[asymetric visibility in PHP]]"
tags:
  - concept/computer-science
  - feature/programming-language
---

- [ ] #task read about [[Asymmetric Visibility]]
[[asymetric visibility in PHP]]
  
  **Asymmetric visibility**, also known as asymmetric access or asymmetric
  encapsulation, refers to a **design principle** in programming where the
  visibility or accessibility of a piece of code or data is intentionally made
  unequal or asymmetrical. ==This means that certain parts of the code have more==
  ==access or visibility to certain components, data, or functionality than==
  ==others.==

  In traditional object-oriented programming (OOP), encapsulation is a
  fundamental concept that suggests hiding implementation details from the
  outside world and only exposing a controlled interface to interact with the
  object. Asymmetric visibility takes this concept a step further by
  introducing controlled asymmetry in the visibility of components, data, or
  functionality within a program.

##  Here are some reasons why asymmetric visibility is useful

  1. **Improved security:** By limiting access to sensitive data or functionality,
  you can reduce the attack surface and minimize the risk of unauthorized
  access or exploitation.
  2. **Better abstraction**: Asymmetric visibility helps to abstract away
  implementation details and expose only what is necessary for other
  components to interact with the system. This leads to a more modular,
  maintainable, and scalable architecture.
  3. Reduced coupling: By limiting the visibility of certain components or
  data, you can reduce coupling between different parts of the system, making
  it easier to modify or replace individual components without affecting the
  entire system.
  4. Enhanced modularity: Asymmetric visibility enables you to build more
  modular systems where each component has a clear, well-defined interface and
  limited access to other components.

##  Types of asymmetric visibility

  1. [[Public-Private asymmetry]]: Publicly accessible interfaces or data are made
  available to external components, while private implementation details are
  hidden from view.
  2. [[Internal-External asymmetry]] Internal components or data are made
  accessible to other components within the same module or package, while
  external components have limited or no access.
  3. [[Hierarchical asymmetry]]: Components higher up in the hierarchy have access
  to components lower down, but not vice versa.

  Techniques for implementing asymmetric visibility:

  4. [[Access modifiers]] (e.g., public, private, protected) in programming
  languages like Java, C#, or C++.
  5. [[Encapsulation]] using interfaces: Define interfaces that expose only the
  necessary functionality, hiding implementation details.
  6. [[Module or package-level access control]]: Use module or package-level access
  control mechanisms to limit visibility of components or data.
  7. [[Dependency injection]]: Use dependency injection to provide components with
  only the necessary dependencies, limiting their access to other components
  or data.
  
%%note: very interesting, suggests that this type visibility can be controlled from the outside somewhat %%

## Examples of asymmetric visibility in programming:

  8. Java's public and private access modifiers: Java's access modifiers allow
  developers to control visibility of classes, methods, and variables.
  9. C#'s internal access modifier: C#'s internal access modifier allows
  developers to **limit visibility of components to within the same assembly.**
  10. Node.js modules: Node.js modules **use a hierarchical approach to access**
  **control, where modules higher up in the hierarchy have access to modules**
  **lower down.**

##  In conclusion

  **asymmetric visibility is a powerful design principle in** **programming that enables developers to create more secure, modular, and** 
  **maintainable systems by controlling the visibility and accessibility of** **components, data, and functionality.**
