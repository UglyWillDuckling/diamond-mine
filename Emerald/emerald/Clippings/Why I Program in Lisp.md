---
author:
  - "[[Joe Marshall]]"
created: 2025-04-11
source: https://funcall.blogspot.com/2025/04/why-i-program-in-lisp.html
tags:
  - article/programming/lisp
---
- [ ] #task 👓 read a bit about [[Lisp]] [[Why I Program in Lisp]] article #read #short ⏳ 2025-07-27 📅 2025-07-27
___

[[Lisp]] is not the most popular language. It never was. Other general purpose languages are more popular and ultimately can do everything that Lisp can (if Church and Turing are correct). They have more libraries and a larger user community than Lisp does. They are more likely to be installed on a machine than Lisp is.

Yet I prefer to program in Lisp. I keep a Lisp REPL open at all times, and I write prototypes and exploratory code in Lisp. Why do I do this? Lisp is easier to remember, has fewer limitations and hoops you have to jump through, has lower “friction” between my thoughts and my program, is easily customizable, and, frankly, more fun.

Lisp's dreaded Cambridge Polish notation is uniform and universal. I don't have to remember whether a form takes curly braces or square brackets or what the operator precedency is or some weird punctuated syntax that was invented for no good reason. It is (operator operands...) for everything. Nothing to remember. I basically stopped noticing the parenthesis 40 years ago. I can indent how I please.

I program mostly functionally, and Lisp has three features that help out tremendously here. First, if you avoid side effects, it directly supports the substitution model. You can tell Lisp that when it sees this simple form, it can just replace it with that more complex one. Lisp isn't constantly pushing you into thinking imperatively. Second, since the syntax is uniform and doesn't depend on the context, you can refactor and move code around at will. Just move things in balanced parenthesis and you'll pretty much be ok.

Third, in most computer languages, you can abstract a specific value by replacing it with a variable that names a value. But you can perform a further abstraction by replacing a variable that names a quantity with a function that computes a quantity. In functional programming, you often downplay the distinction between a value and a function that produces that value. After all, the difference is only one of time spent waiting for the answer. In Lisp, you can change an expression that denotes an object into an abtraction that computes an object by simply wrapping a `lambda` around it. It's less of a big deal these days, but properly working `lambda` expressions were only available in Lisp until recently. Even so, `lambda` expressions are generally pretty clumsy in other languages.

Functional programming focuses on functions (go figure!). These are the ideal black box abstraction: values go in, answer comes out. What happens inside? Who knows! Who cares! But you can plug little simple functions together and get bigger more complex functions. There is no limit on doing this. If you can frame your problem as "I have this, I want that", then you can code it as a functional program. It is true that functional programming takes a bit of practice to get used to, but it allows you to build complex systems out of very simple parts. Once you get the hang of it, you start seeing everything as a function. (This isn't a limitation. Church's lambda calculus is a model of computation based on functional composition.)

Lisp lets me try out new ideas as quickly as I can come up with them. New programs are indistinguishable from those built in to the language, so I can build upon them just as easily. Lisp's debugger means I don't have to stop everything and restart the world from scratch every time something goes wrong. Lisp's safe memory model means that bugs don't trash my workspace as I explore the problem.

The REPL in lisp evaluates *expressions*, which are the fundamental fragments of Lisp programs. You can type in part of a Lisp program and see what it does immediately. If it works, you can simply embed the expression in a larger program. Your program takes shape in real time as you explore the problem.

Lisp's dynamic typing gives you virtually automatic ad hoc polymorphism. If you write a program that calls +, it will work on any pair of objects that have a well-defined + operator. Now this can be a problem if you are cavalier about your types, but if you exercise a little discipline (like not defining + on combinations of strings and numbers, for example), and if you avoid automatic type coercion, then you can write very generic code that works on a superset of your data types. (Dynamic typing is a two-edged sword. It allows for fast prototyping, but it can hide bugs that would be caught at compile time in a statically typed language.)

Other languages may share some of these features, but Lisp has them all together. It is a language that was designed to be used as a tool for thinking about problems, and that is the fun part of programming.