---
source: https://www.youtube.com/watch?v=_jTc1BTFdIo
author:
  - "[[TEDx Talks]]"
published: 2019-07-10
created: 2026-05-18
category:
  - "[[Video]]"
  - "[[Computer Science]]"
topics:
  - "[[Data Abstraction]]"
tags:
  - video
---
![](https://www.youtube.com/watch?v=_jTc1BTFdIo)

[[Object oriented programming]] revolutionized the world of computing forever. [[Barbara Liskov]], [[Turing Award]] winner and one of the first women to be granted a doctorate in computer science in the United States, shares the story of "the aha moment" when she thought of using object-oriented programming as a novel method for data abstraction in computing.  
Barbara Liskov is an Institute Professor and head of the Programming Methodology Group. Liskov's research interests lie in programming methodology, programming languages and systems, and distributed computing.  
  
Major projects include: the design and implementation of CLU, the first language to support data abstraction; the design and implementation of Argus, the first high-level language to support implementation of distributed programs; and the Thor object-oriented database system, which provides transactional access to persistent, highly-available objects in wide-scale distributed environments. Her current research interests include Byzantine-fault-tolerant storage systems, peer-to-peer computing, and support for automatic deployment of software upgrades in large-scale distributed systems.  
  
Liskov is a member of the National Academy of Engineering, and a fellow of the American Academy of Arts and Sciences, and the Association for Computer Machinery. She received The Society of Women Engineers' Achievement Award in 1996 and the IEEE von Neumann medal in 2004. At the ACM SIGPLAN Programming Languages Design and Implementation Conference in 2008, she was awarded the Programming Languages Achievement Award. In 2009, she received the A.M. Turing Award from ACM. This talk was given at a TEDx event using the TED conference format but independently organized by a local community. Learn more at https://www.ted.com/tedx

## Transcript

### Introduction

**0:05** · \[Music\] up on the screen I have a picture of a cellphone and I want you to think just a bit about wealth cellphones do for us they do amazing things I mean they aren't just telephones they allow us to do text they allow us to run all sorts of applications I particularly like navigation and normally that's what we get to talk to them so they do speech understanding in order to do all this stuff they run a huge amount of software

**0:37** · millions of lines of code and this code works and we expect it to work but you know it wasn't always that way and data abstraction is a big part of why that code works and I'm going to tell you today about what data abstraction is and sort of how this came about I grew up in San Francisco this is

**0:59** · the Golden Gate Bridge about that time and when I graduated from high school I went on to Berkeley this is the Campanile II we called it Cal and I was always interested in science and technology engineering not engineering science I came from a family where my father was a lawyer I didn't know much about technology I majored in math and when I finished my math degree I decided

**1:22** · I wasn't ready to go on in graduate school in math and so I decided to get a job and I looked for a job and I couldn't find anything interesting in math but I was offered a job as a computer programmer I didn't even know there were computers and of course I had no training but the truth was nobody coming out of college in those days had any training because there was no computer science program for us to have studied so they were hiring anybody who walked in the door that they thought might be able to do the job so my first

### Fortran

**1:53** · day on the job I was handed a Fortran manual and asked to write a little program to do something and there's a picture of the Fortran manual and that's a picture of John Bacchus who was one of the people who developed Fortran and I learned how to write in program I wrote

**2:11** · this program to do whatever it was they asked me to do and I found that I had discovered a field that I really light and I was really good at I worked for a year and this job doing programming in Fortran then I moved and took a different job where I was doing programming in machine language in other words directly in the language the Machine supported and part way through that second job I decided that it was

**2:36** · time to go to graduate school because I was entirely self-taught and although I was learning a lot very fast I thought I could learn a lot faster so I went to Stanford this is the quad at Stanford there actually were very few places to choose between in those days MIT was one of them but MIT didn't seem like the right choice for me and I wanted to get back to California anyway so I went to

**2:59** · Stanford they didn't have a computer science department yet they just had a program and I think there were only five or six people that were admitted in the year that I went there I ended up working with John McCarthy I'm sure John's picture was up there on that slide that was shown to you earlier he was one of the pioneers of artificial intelligence and my thesis was in chess chess was a hard problem then computers

### John McCarthy

**3:26** · were not very powerful they were not capable of doing the kind of deep search that is required to play chess and so we had to invent heuristics to try and make them work and I specifically was working on chess in games and that's a picture of me at about that time and notice up on the title page there my name is Hugh Berman that was my maiden name okay so what

**3:49** · happened when I finished graduate school this is about 1968 I had decided while I was a graduate student that I wanted to move out of AI and into computer software systems I decided to finish my thesis in AI and make the switch after I graduated since I thought I would get finished with my PhD that faster that way at this point I took a job with the same company that hired me fresh out of my undergraduate only this time I was working as a researcher rather than a programmer and my first project was to

**4:21** · design and implement an operating system a time sharing system that allowed multiple people to use the same computer at the same time because as you heard earlier computers were much too expensive in those days for anybody to have their own PC but having a time sharing system meant that you could be sharing a computer with somebody else and you got the same experience you felt like it was your computer you were online even though you were sharing it with other people now when I finished this venous

**4:50** · system now it's about 1970 I was asked to look into the software crisis so what is the software crisis we don't have a software crisis today I mean there are problems with software but nothing like what I'm talking about the software crisis was people did not know how to build software systems and it was not uncommon in those days and this is through the 60s the 70s even into the 80s to pick up a newspaper and there'd be an article there it would say company X spent millions of dollars hundreds of

### The Software Crisis

**5:20** · man years to build a program to do something or other and in the end they had to throw the whole thing out because it didn't work so there was a serious problem here the hardware was coming along nicely but people did not know how to build the software and of course without the software there was no way to get these computers to do anything interesting so what to do about this clearly a really important problem so of

### Programming Methodology

**5:45** · course I did what any sensible person does when they're moving into a new field I read the literature and there was a programming methodology community out there working on this problem and there were a lot of good papers and very good people writing these papers and what I'm showing you here are some very distinguished people in computer science whose papers I read there were other papers for I very good people that I read also so I'm not trying to limit the the task here I went back and read these

**6:14** · papers and they're very good it's good to go back and look at them so I read all these papers and I discovered that they were talking about two different but closely related topics one was the question of how do you design software the other one was the question of how

**6:31** · should the software be structured and the two problems are closely interrelated so I began to think about this and I'd pick your life started to think about this question of how should software be organized and what they were talking about was something they called a module and they

### Module

**6:48** · didn't know what a module was and in fact Dave harness and one of his papers said I know we need modules but I don't know what they are and that was actually the state of the field at that time what a module is it's a black box that's why I have a black box up here and the idea is that it has an interface and you can understand what this interface is it gives you some sort of functionality but you have no idea how it's implemented you can't see inside and here's a non computer-science analogy a radio ok a

**7:19** · radio has a simple interface it's got a few knobs you can turn it on you can turn to a different station you can change the volume inside lots of stuff is going on but you don't have to think about this this is clearly not a computer science thing but it's the very same idea so people wanted these modules that they didn't understand and they had a dream that programs would end up just being a collection of module every piece of code would be in one of these modules what I'm showing you here is a system with five modules and the arrows tell

**7:49** · you that one module is implemented making use of the interface provided by another module so think about each of these modules has an interface this interface is described by what we call today a specification and then inside

**8:05** · there's an implementation that realizes the specification and you can use a module without having to understand how it's implemented you just have to understand the specification the glory of this if we can figure out how to do it is locality we can work on that system one module at a time all separately you can hand out these modules to different people to implement and in the end you'll be able to put them back together again because if module B implements its specification then module A which is depending on that

**8:36** · specification we'll be able to use it just fine in order to make this work you want those to really be black boxes though you don't want module a to be peeking into the inside of module B to see what's really going on because then you would not you'll be violating that abstraction barrier so this was the dream we need these modules just we didn't know what they there was one modularity mechanism in

### Modularity

**9:01** · existence at that point and this was the procedure or subroutine so people knew that you can implement something like a sort routine and to the user what this meant was I can give you a list of strings and that sort routine will return that same list to me but now in sorted order and I didn't have to worry about how it was implemented I only had to worry about what a specification is what it did but sort routines were not

**9:27** · going to do the job here because we needed a lot more from our modules they had to be able to do a whole bunch of things and not only that but they had to have memory if you think about that radio that radio remembered when you turn it on it was on and after that you could change the station we needed something similar for the software so I

### Methodology

**9:46** · read these papers and others that I haven't mentioned other authors that I haven't mentioned and I realized that in the design of Venus the system I first implemented at mitre I had invented a methodology and I invented this methodology because I was concerned I had a small team of programmers working with me and I didn't know how we were going to be able to build what was really basically a very complicated system in a short period of time and so

**10:12** · I had invented a methodology this is the paper where I described it after I realized what I had done and the methodology was simply the following I had a special kind of black box which I called a partition it's just a black box like what I showed you before but it's got some more structure those lines are operations and the rule that I invented for Venus was that each partition offers

**10:36** · a set of operations all the rest of the code and the system can interact with the partition but only by calling those inter operations and then inside was hidden stuff the implementation was all inside and that included state as well as a program so if you think about this as a radio you see there's a knob there to turn it on a knob there to change the station and so on the same kind of idea of course the radio is not software so

**11:03** · here's a little example that's closer to the software kind of stuff that Venus was doing remember it was a time sharing system and so that meant the users had to share the peripherals and by the way in those days mag tape was what we use to remember stuff and this is a teletype

**11:19** · this is the kind of printer we used to use so we have a bunch of users online in Venus and they all want to use the printer simultaneously well we got to sort that out so the way we sort it out is we build a partition it's the controller for the printer each user who wants to use the printer calls an operation saying here's my job later on

**11:39** · they could call a different operation saying is my job done yet and then there was some code off on the side that was actually running the printer and when it finished one job it could notify this module and then get the next job so that's the kind of stuff I was doing in Venus with this partition okay so now it's 1972 and in 1972 I moved to MIT

### Moving to MIT

**12:03** · because they were actually looking for women then things had changed a bit and and you see me seeing here with Jack Dennis who is a well-known professor in the computer science department and he was one of the people that got me to come to MIT and he was also very helpful to me when I first arrived this is about the time I moved to MIT and it was a

**12:24** · great time for me to move to a university because when you're at a university you have the freedom to decide what research are going to work on it's both a blessing and a curse of course you have to have the ideas that lead to those research projects and I had a project that I was absolutely passionate about I really wanted to understand what this modularity stuff was and the thing I was really thinking about was it seemed to me we had several

**12:51** · papers that describe systems broken up into modules and they made a very good case for this being a good organization for the particular system they were using and you would look at and say yeah that's a good way to organize that those are sensible modules and that's what I'd like to do but when you try to take those ideas away and apply them to your own system you couldn't do it they just

**13:14** · there was just some sort of disconnect between what was written in those papers and what you needed to be able to think about these ideas in the context of your own work and so I was thinking about this I was really obsessed with this and I was thinking about it at night I would think about it going into work I was thinking about it all the time and one day in the late part of 1972 the early part of 1973 I

**13:39** · all of a sudden saw that I could relate a module to an abstract data table so it was like I made this connection I just hadn't been able to make before and I said I'm thinking about a data type and what it does is it assigns a set of objects but it also defines operations and those operations are the only way that you can interact with an object and if you think about this it's just a

### Data types

**14:05** · partition I mean that partition is an object and when I look back at the literature in this field I saw ideas that were like abstract data types floating around it's just that nobody quite made the step and what's important about this step is that it relates a thing that was just a structural idea to

**14:26** · an abstraction an abstraction is the way that we design our program so that was a very important intuition well it was just an idea so the next thing I did was to work with Steve Zyliss Steve Zyliss was a graduate student at MIT and he had a similar idea so we started to work together and we

### Working with Steve

**14:46** · worked together for maybe six months maybe nine months something like that over the course of several months until about the end of the summer of 1973 and by then we had solidified our ideas and we wrote this paper the first paper that describes the notion of abstract data types and that was in the fall that we finished up 73 ok at that point I

### Designing a programming language

**15:10** · decided to start working on a programming language so that paper had sketched out the idea of abstract data types and it had proposed a stretch a sketch of a programming language but it was by no means a language that worked it wasn't complete and I decided it was important to finish up this work I wanted to have a real language where programmers could write real program and we could see whether they found the use of data abstraction useful and we

**15:37** · should see whether they liked the constructs that we provided and whether the programs performed well enough and so on so I decided to take on this job of working on this language what we called clue it took about five years to design clue first of all so why did it

**15:53** · take so long first of all programming language design is actually really hard anybody who has worked on a project like that will tell you that but in addition we had to actually set off in new directions in many different fronts because there was nothing like this already it's a big step from having a few procedures that can do some abstract things than having all these new data types of course we had to build some mechanism that allows you to define an abstract data type that was the cluster and the name clue comes

**16:22** · from cluster but we also had to innovate in many other directions for example in those days exception handling was not built into most languages and people didn't even know what form it should take so we had to think throughout all of that the iterators had to do with the fact that data types are often collections and if you build a collection of something like a set then you often want to iterate over it in a non-destructive way doing something with all its elements so we had to figure out how to do that in some sense polymorphism is the most interesting thing we had to do polymorphism means

**16:53** · many types and as soon as you have a language where programmers can develop their own data abstractions so you're gonna have many different data types you can see that you're not going to be able to be happy with modules that are focused on a single data type I mean I

**17:09** · wouldn't want to have to write a sort routine every time I have a new data type comes into existence that would really be a pain in the neck so we need to be able to write a sort routine that works over many types and it took us a long time to figure out how to do that I should say that we were looking for what's called strong typing which meant that the compiler for the language was going to do all the type checking to enforce all the rules and there was a lot of uncertainty about whether that was all going to work out okay so now it's about 1978 and we have finished the

**17:39** · design of Clue here's the clue reference manual and the main thing I want you to notice there is all the names that are that that paper because these were all students I design clue with a bunch of graduate students I think Elliott Moss was actually an undergraduate and we all work together so it was a group project and this has been my experience at MIT it's been wonderful working with groups of students okay so now it's 1978 and

### ARPANET

**18:07** · I'm looking around for what to do next and I happen to read a paper by Bob Kahn about the ARPANET so the ARPANET was the precursor of the internet and up on the diagram up on the screen I have a little diagram of the ARPANET as it existed then it's a network it connected together a few universities and research institutions and they are represented on the slide you can see MIT there running a pdp-10 and UCLA running a

**18:37** · something-or-other so they're all running these old computers and these computers are connected to the network by these things called imps which then used the technology of the network to communicate with the different with each other and Bob wrote in this paper that he had a dream that people would write distributed programs and what this meant

**18:56** · was a program that would have components running on these different computers doing parts of that program and communicating through the network and nobody knew how to do that so I thought gee here's a great opportunity and so I jumped into distributed computing and most of my research from then on was really focused on distributed computing although I continued to work in Prolia methodology at least throughout the 80s so this is really the end of the

### Java

**19:27** · technical part I'm just going to tell you a couple of things that happen after the first one was around 1990 Java came along so Java was the first mainstream language to support object-oriented programming an object-oriented programming is actually a mixture of the

**19:44** · data abstraction work I didn't clue and the inheritance work that was coming out of small talk that was Alan Kay's group that developed small talk an East Coast team and a West cuz team I always think about that we were working on different stuff and there was a gap here of 10 or 12 years before the technology moved from research into the mainstream this is not an uncommon kind of gap to have a technology okay the second thing is when

### Turing Award

**20:11** · I got the Turing award this is now 2009 that's when I got the Turing award and this caused me when I got the Turing award to stop and think about what had been happening in my absence and the sense I've been focused on distributed computing I wasn't paying much attention to programming methodology and what I discovered was a remarkable thing programming today modularity based on

**20:36** · abstraction is the way things are done this had become so embedded in the programming culture that my own graduate students didn't realize there wasn't before you know they just thought this was the way things were and my husband was on the internet every day when I got the Turing award because there was lots and lots of stuff coming out and one day he saw a quote by someone who said why did she get the award everybody already knows this \[Applause\]

**21:13** · so I think we can see this wasn't meant in a kindly way which of course but it was actually a real justification of what I just said that was how it was and that's the end thank you \[Applause\] \[Music\] \[Music\]