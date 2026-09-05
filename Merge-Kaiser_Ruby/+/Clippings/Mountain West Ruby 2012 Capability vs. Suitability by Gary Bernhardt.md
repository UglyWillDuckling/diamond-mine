---
source: https://www.youtube.com/watch?v=NftT6HWFgq0
author:
  - "[[Confreaks]]"
published: 2012-06-05
created: 2026-05-18
tags:
  - video
topics:
  - "[[Development]]"
---
![](https://www.youtube.com/watch?v=NftT6HWFgq0)

Software marches forward; each new piece is better than the last in every way! Not quite... it's a bit more subtle than that. There are patterns in the history of our industry: each tool or practice is a reaction to something before it. By paying attention to the pattern, and to the types of reactions, we can better understand our history and our current tools' place in it. More importantly, we can avoid repeating the mistaken reactions that our predecessors have had to new tools.

### Capability vs. Suitability

**0:00** · \[Music\] \[Music\] okay as you can see I'm trying to approach looking like the image I always put up before my talks getting closer and closer every time I do this maybe I should roll my sleeves up it'll be a little bit more accurate um so the this talk is those

### Those Who Forget The Past

**0:31** · who forget the past some of you have seen this at uh scna but this is a slightly different version of it I am Gary burnhard uh I look like that on the internet and I run a company called destroy all software and this talk structure is going to look like this first of all capability and suitability I'm going to define those terms I will give you some examples of what I mean by those words then we'll look at patterns over the history of the industry uh with capability and Su

### Destroy All Software

### Capability & Suitability Examples Patterns Relationships Productivity Divination

**1:03** · suitability then the junk drawer every talk needs a junk drawer and this one is about relationships and then finally uh productivity the word productivity which I hate and then some divination about what might happen in the future so first up capability and

**1:24** · suitability by capability I mean the power for a software system to EXP Express an idea this could be a language or a practice or a tool and uh the canonical capable system is lisp and I'm thinking here of a fully

**1:42** · featured lisp with macros and everything like common lisp for example common lisp is very good at expressing uh arbitrarily abstract ideas as long as you don't care about the syntax and uh yeah so that's capability

**1:58** · suitability is is the power to take the capability you have the ability to express an idea and actually build working software that is reliable and build that software reliably so this is a different thing this is not just saying I can express an idea but this is saying I can use the idea to do useful work and the canonical example of this

**2:19** · is Java Java is in most ways an extremely boring language from a programming language perspective uh there's nothing really interesting in it it was designed to take a bunch of ideas that are existed and just make them uh make them usable to build software that works

**2:36** · reliably so that's capability and suitability those are the core ideas for this talk I'm going to give you a few examples to make it a little more concrete because that was very abstract I have six examples spanning 47 years of the industry the first of which is 1957 Fortran Fortran is pretty much a pure capability response to Assembly Language

**3:01** · it is slightly higher level uh it has things like if and variables although also it has goto and goto is extremely widely used back in the early days of Fortran but it is a slightly higher level vocabulary allows you to express slightly higher level ideas so it's a capability response to Assembly Language 11 years after Fortran you get

**3:25** · structured programming this is uh of course the idea of using IF and ws and things like that instead of just throwing go-tos everywhere and this is a pure suitability response to Fortran so you have this sequence where you have Assembly Language which is an extremely dangerous system to program in then you

**3:42** · have increased capability with Fortran and then structured programming takes some capability away to make a more suitable system to make more Reliable Software and of course this is when you get the famous paper goto considered harmful which has been the the source of many terrible jokes in the software industry since and uh this is dyra of course and I have

**4:04** · uh a quote a contemporary quote about structured programming someone reacting to this new idea of using ifs and Loops instead of just throwing go-to everywhere and here it is structured programming is a nice academic exercise which works well for small examples but I doubt that any real world program will ever be written in such a

**4:24** · style so this is if they're talking about and while and for these kinds of things so that's 68 2 years later 1970 the relational model happens uh 1969 plus or minus one years is where everything happened in software for those of you who don't know the relational model was a almost

### RELATIONAL MODEL

**4:44** · pure suitability response to Flat files flat files are very difficult to reason about you have to do a lot of work yourself so you give up a little bit of that flexibility by saying I'm going to put my data in tables and my tables are going to relate to each other and I'm going to have a fixed schema up front and then you gain a tremendous amount of reliability in your software I have another uh contemporary

**5:06** · quote at first site I doubt that anything complex enough to be of practical interest can be modeled using relations and of course uh they didn't win immediately but for about 30 years they've dominated data storage uh that might be ending now but clearly this person was extremely confused okay so that's 70 1985 C++ happens I'm skipping C and Unix because they're kind of a murky area but uh C++ is a very clear

**5:35** · capability response to C in fact it has two design criteria it must have classes and it must be backwards compatible with C its original name was C with classes which expresses both of its design constraints so C++ is just C except you can say some new things but nothing was really removed um a couple of things were changed but nothing was really removed it's almost completely backwards compatible so pure capability almost 10 years later Java which is a

**6:04** · response to C++ a suitability response Java takes C++ and rounds all the sharp edges off it removes uh pointer arithmetic and it removes uh manual memory management it does add some things like name spaces and uh it removes free floating functions but it is these are all things that are just constraining the way that you can write software and finally 9 years after after that 2004 rails and the question is should we

**6:36** · consider rails a capability change or a suitability change did rails increase the the set of things we can say or did it allow us to say things we already could say but to say them more reliably now if you asked a Java programmer in say 2006 he would tell you rails is obviously unsuitable for large

**6:56** · systems but herpy derp derp we've heard this before with the reactions to the relational model to structured programming this is what always happens when there's new stuff um so I think that rails is primarily a capability increase there are a lot of things you can say directly in rails that you could not directly say before it and one of the ways that I'm fairly

**7:19** · confidence confident in this is that rails has a culture of Brokenness as does Ruby largely as a result of rails influence most things are broken most of the time things don't compose everything is is being abandoned all the time it's a very chaotic system um now I'm a Ruby programmer so I'm not saying it sucks um it just sucks less than everything else I guess but uh so in a capability system

### Culture of brokenness

**7:42** · you see things like this you see this chaotic uh behavior of the people because everyone's excited because they can say new things uh Ruby if you're coming from java lets you say new things you get excited you build your gem uh and then you abandon it six months later because the new shiny thing comes along so this is how I know that rails and Ruby are capability increases so those are six examples four TR structure programming relational model C++ Java

**8:10** · rails now we can actually talk about the industry not just about these isolated examples I think what happens in the course of the software industry is that we gain capability and then we lose some of it as we get a more reliable system so you have this periodic uh structure

**8:28** · to the the trajectory of the industry where it's going up and down in capability this is the pessimistic view of course hopefully it looks more like this where when we retract into a more suitable system we don't lose everything we gained we we save some of it and you can see that with uh C++ expanding from C adding tons of crap and then Java Contracting from C++ removing a little bit but keeping most of the the improvements that C++ made now why does that happen

**8:59** · well I think abundant resources are the primary driving factor for expanded capability you have more CPU laying around you have more memory laying around and suddenly you can write a Fortran compiler because you're not constrained to 2 kilobytes of memory you have enough memory to actually compile another language in memory or you have enough memory in CPU to run uh your web app in Ruby instead of having to write it in a faster language the reaction to this from the

### Abundant Resources Capability

**9:28** · people who use the old older thing is always that it's too slow uh C was too slow when it was new C++ was too slow Java was too slow and of course nowadays uh all of those are considered extremely fast even Java now on the other hand I think that confusion motivates contractions into more suitable systems like C++ to

**9:51** · Java and you can see this in structured programming goto arbitrary go-tos are extremely confusing so you restrict yourself to control const like if and while it's more understandable same thing with the relational model you add some structure some rigidity and things are more understandable the reaction here from the people using the older thing is always that it's too limiting uh and you can see that in both of the quotes that I showed you about people saying they don't think you can build software in these constrained systems so primary motivating forces in

### TOO LIMITING

**10:23** · the industry abundant resources and confusion which lead to expansion and contraction phases of capability which lead to people whining that things are too slow or too limiting now on to the junk drawer

**10:38** · relationships uh so C was too slow C++ was too slow Java was too slow Ruby was too slow I don't see any reason to assume that this is the end of this list so I want to present for your consideration the idea that something is going to be slower than Ruby someday

**11:01** · now this is important because when that thing comes it is your job as Ruby programmers not to say oh my God it's so slow you can't build software in that it's not too slow even if it's slower than Ruby so that's the that's the first relationship Point second one uh

**11:18** · suitability is a stronger claim so if I say I'm capable of expressing this idea I'm making sort of the common lisp argument I can express anything in common lisp well yes you can but can you actually build a working system with a team that's suitability suitability is being able to actually use it to build real software so this is a difference between uh just because you can doesn't mean you should or just because you can doesn't mean you really can which is the lesson of lisp at least before closure which may change

**11:50** · this now on to productivity one of my least favorite words uh pragmatic is worse but but not many others are worse uh a story first to introduce this I had a client before I was running destroy all software and uh he was like the the VP of engineering or something this guy was the VP of engineering or something like that of a small company and he was ranting at me one day not about the company but about sort of the industry at large and he was complaining that people in manager type roles tend to

### story time

**12:23** · observe activity and confuse it for Progress so they say Bob is always here he's here long hours he's always typing he closes lots of bugs which is a very dangerous one or closes lots of tickets very dangerous um so he's very productive but really all he all the manager has observed is that Bob is active Bob is doing things but it a

**12:45** · different question to judge whether those things are actually moving anyone forward towards a useful goal so activity and progress are easily mistaken and are not the same thing and this is a really important point for me because I type fast and I use Unix fast I use Vim fast and people see me doing these things and they say Gary's so productive and I say well what does that mean it means that I'm typing a lot uh maybe I'm committing 23 times in two hours wow so many commits so much typing

**13:17** · but could I have done that in one commit that was one page of diff maybe um so I am very visibly active and this scares me because I might be one of those people who's active but not making any progress so what the heck is progress well uh I don't

### What is progress?

**13:37** · know judging activity is very easy you type a lot that's activity judging progress It's Kind of a historical thing you need a lot of perspective and it's sort of a subjective thing but I'm pretty sure that expansion phases increased capability lead to lots of activity like you see in Ruby for the last seven years or so like you see in JavaScript for the last 2 years or so people get excited lots of stuff happens but I think that

**14:04** · the contraction phase The increased suitability phase is where progress happens in this industry and this is a very unsexy thing to say because I'm basically saying Java is where progress happens and I don't like Java I don't want to program in Java but for the industry as a whole I think Java is what actually matters

**14:26** · unfortunately and speaking of what matters and speaking of traj now we can finally talk about what might the next thing be uh so rails was a capability increase I claim but the truth about rails is that apps are still very bad on the inside and I think that we as a community are uh really realizing this I think this is probably the year of objectoriented design finally actually happening in the rails World um because rails basically took

### Rails: Capability & Expansion

### Apps are still BAD on the inside

**14:54** · the big Angry Ball of mud School of Design from PHP where you don't have F uh you don't have well-defined boundaries you just have all these pieces randomly talking to each other uh represented graphically here so that's a PHP app

**15:12** · and what rails did is it gave us the slightly smaller big Angry Ball of mud School of Design where you shave off the edge of the app and you say that's the good part now in 0607 that small part would be the model layer the controller layer was still a big Angry Ball of mud and someone I don't know what year it was 08 or so 09 someone had this brilliant idea

### BIG ANGRY BALL OF MUD

**15:35** · that if we invert these then everything will be perfect so then you have the very thin controller layer that's welld designed and you have the giant model layer that's still a big Angry Ball of mud so clearly problem solved right everything's perfect um not so

**15:50** · much what is going to happen next what is the next thing that's going to happen rails only gives you two buckets to put code in controller model we've tried both neither of them worked very well so what are we going to do what will the post rails contraction be that will actually lead to us designing good systems I'm going to present you two possibilities that I could imagine happening of many and the first is that

### 2 possibilities of many

### GOOS

**16:16** · goose wins this is growing object-oriented software Guided by test uh by Freeman and price and it is the the canonical book about doing outside in test development where you design the lower layers of the system by building the higher layers of the system first and the higher layers stubs and mocks design the lower layers uh that probably sounds really weird if you haven't done it read the book it's good uh it's good stuff I've been doing it for five or six years the problem is this is obviously

**16:44** · impossible and I'll tell you why it's impossible it's impossible because outside in tdd is a nice academic exercise which works well for small examples but I doubt that any real world program will ever be written in such a style very easy words to say when something is new so that's the first possibility the second one is that one of these guys wins uh hascal closure

**17:08** · erlang is what those three are uh finally the functional Revolution comes after 60 years of it being coming next year for 60 years of course the problem here is that this is obviously impossible because functional programming is a nice academic exercise which works well for small examples

### Revolution

**17:29** · so those are my two possibilities uh e both of these I look at them and I say I cannot imagine these winning in the way that the relational model one that structured programming won that Java won and languages like it I can't imagine these winning even though I've been doing both of these for a long time but I also wouldn't have been able to imagine structured programming or the relational model winning in 1968 or in 1970 uh so I think that my intuition

**17:57** · about this could be wrong of course maybe neither of these will win I'm not claiming they will but I could almost imagine it in either case whatever it is I'm pretty sure it's contraction time especially in the Ruby world uh with the growing unrest about bad design and uh active record and uh the massive

### It's CONTRACTION TIME you guys

**18:18** · coupling that controllers cause rails controllers cause all of this stuff is really coming to a head right now I think something is going to happen some contraction has to happen so if you want to read more about those quotes I used uh I have them at this URL

**18:35** · this will send you to uh a PDF from I think an article from the C++ journal in the 90s that contains these it is your job to figure out whether they are satire or whether they are real and it is harder than you might think so with that uh I am Gary burnhard I run destroy all software which has screencasts about outside ndd and building smaller happier balls of mud and I think thank you guys very much for uh listening to me \[Applause\]

**19:12** · \[Music\]

**19:37** · \[Music\]