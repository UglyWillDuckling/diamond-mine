---
source: https://www.youtube.com/watch?v=QjJaFG63Hlo
author:
  - "[[Alan Kay]]"
published: 2017-11-13
created: 2026-05-18
tags:
  - video
topics:
  - "[[object orientation]]"
  - "[[programming]]"
---
![](https://www.youtube.com/watch?v=QjJaFG63Hlo)

Cannot tell when the talk was. Probably mid 80's.

## Transcript

### Introduction

**0:00** · \[Music\] good idea to put up a slide warning you there might be some IBM jokes of course this isn't I guess this isn't really IBM country out here although I did hear a rumor that you're still programmed in Fortran quite a bit and even the dread word COBOL was heard so maybe it's worthwhile you know object-oriented programming is actually a rather old technology it is

**0:34** · just a few years younger in fact than the kind of programming technology that most people are used to that of data structures manipulated by procedures and for various reasons it has not come into currency into vogue until the last couple of years but it's actually about 25 years ago I wrote my first program that I would call object-oriented in 1962 and people have been writing

**1:04** · programs in that style even earlier than that in my particular case I was a programmer in the Air Force at Air Training Command in 1962 the there were no standardized operating systems of course that's true today but back then there was actually a reason for it nobody had gotten around to the idea of thinking it it might be useful and Air Training Command had a problem of moving

**1:38** · tapes tapes with records of various kinds on them from one Air Training Command base to another the machines back borrows two twenties which were machines that have had about five thousand characters of of storage we're about the size of this room and we're great coffee warmers my image of them of

### Air Training Command

**2:04** · the 220 is with a this huge set of boxes with a row of pots on top trapping the heat is a came out now the problem that they had was that there is no way to standardize on what the formats of the different records were they changed and the operating system he was usually just the kind of a loading program and so there was no way of standardizing on that and they wondered how can we

**2:35** · actually read these data records if everything is constantly changing and nothing holds still somebody thought up a great idea that idea was to have the records shipped in the following format the each tape file had three sections to

**2:55** · it the front section was fairly short it had a bunch of relative pointers into the second section which contained a bunch of Burroughs 220 code and that code knew how to deal with a third section which had the actual data records and so what you got when you read a record from this machine was you read that record the first two parts of the of the record into storage use the

**3:29** · the front part of it which were these indirect jumps into the second part of it the code as the protocol for dealing with the tape they're usually about 20 or 30 what we would call messages today but 20 or 30 entries in the in that first table and the code that came along with the tape records knew how to deal with all the data so in current day terms what the

**3:55** · Air Training Command was doing I think it was as far ago as the late 50s was to ship an entire class of objects the class was shipped with the protocol with all of the code and with all of the data in a form in which you did not have to penetrate any of it in order to make use of it that was used for a number of years as a technique until COBOL came in

**4:24** · and the Air Force forced all of the all of those good ideas to go away in order to standardize and COBOL which is a much weaker conception going back to the notion of data structures that are fragile now I understand that we have a kind of a mixed audience today in that some of the people in the room are rather knowledgeable about object-oriented programming some of the people in the audience are here out of curiosity so I made a kind of a mixed

**4:55** · talk what I would like to do is to give you sort of a perspective on where object-oriented programming has been what it's what it's been done without without getting to historical about it but try and give you an understanding of why it has contributed so much in a number of areas other than just writing programs that don't break one of those

**5:21** · is user interface which is a very important area and there are some direct relations chips to the way we think about objects and the way we think about user interface and then take you into the future a little bit and show you some of the things in which object-oriented programming is being used for in research directions and then try and open up the form into issues

**5:47** · because my belief is that the basic ideas of object-oriented are quite simple maybe too simple to be popular until we absolutely require simplicity in this stage of 2 million line programs but that the most

**6:05** · interesting thing about object-oriented programming are the are the various issues and the styles for using it and those haven't settled yet so my reference to the IBM joke I think a good good way of starting out the talk is that last year it was even reported in Business Week as a significant event IBM had its first object-oriented colloquium

**6:31** · it was such an amazing thing they believe that only 25 people would attend and in fact 500 attended and they had to turn away 500 people from within IBM I got invited to give the keynote talk part of what I'm going to show you today is from that keynote talk and standing

**6:52** · there in Yorktown Heights giving the giving the talk I was reminded of William James's characterization of the three stages that an idea goes through the first stage is the new idea is characterized as the work of mad been absolutely denounced out of hand a few

**7:14** · years later goes through a different stage when it's remarked on as being commonplace and obvious all the time then the third and final stage is when the original denouncer is claimed to have invented it and we are now in that

**7:30** · third stage for object-oriented programming because now that iBM has decided to adopt I've yet I'm Jacobian program we can be quite sure that it's actually obsolete and on its way out so now before before I get into the

**7:51** · historical part what I thought I'd do is for those people who are not acquainted with it at all I thought I would just say a couple of couple of words about what it what I mean when I say object-oriented programming and I have a I have a very simple diagram here for me

**8:16** · the whole notion of objects was triggered off by seeing a number of different systems some of them in computer science but the first ones that I looked at were actually biological I have a degree in molecular biology and one of the things that struck me when I was studying molecular biology many years ago was that compared to the kinds

**8:43** · of structures that we tend to build here on earth the average biological structure is more than a thousand times as complex both as regard to the number of different parts it has and to the complexity that has to be controlled for

**9:03** · instance a grand piano is a rather complex machine has about 20,000 parts which surprises most musicians you don't even think that they're actually playing on a machine they think of it as an instrument and the instrument by definition can't be a machine but in fact it is a machine has about 20,000 parts our bodies have approximately a

**9:27** · trillion cells in them and each cell is rather complex each cell has many millions of components in its own right so one of the ways nature discovered to

**9:43** · control complexity and the kinds of interactions that are likely to happen is to try and incapsulate them in various ways this is a familiar principle to us it's something that we use in regular program as well trying to encapsulate and the

**10:00** · question you're always asking when you encapsulate we're going to ask this quite a bit later is just what is encapsulated what kinds of things are we trying to control are usually in regular programming what we encapsulate are sections of programs that occasionally will try and encapsulate with regard to a protocol for dealing with some system we don't want to inquire about the internals of what biological systems encapsulate is the actual environment in

**10:32** · which most important processing takes place there are very few object-oriented programming languages that go that far the average object-oriented programming language encapsulate snot the environment but in fact something like

**10:50** · the state of a data structure along with the procedures that know how to intimately manipulate it and try and tie those two areas together in a way that they cannot be penetrated from the outside when people speak of an

**11:09** · object-oriented programming language like Objective C or C++ they're talking about even less than that because they're the encapsulation is almost a convention it's done by means of macros the amount of protection at runtime that

**11:29** · is delivered is rather low so there all of these gradations now biological systems encapsulate with a vengeance because nature discovered that if you give each cell its own little captured ocean and let it devote about 90% of its

**11:49** · actual energies to simply protecting itself from the outside world as though the outside world were hostile then you get a situation where you can build very large structures rather safely and encapsulated is not just the saline solution not just the organic Moloch

**12:10** · skills but also encapsulated and not just the programs that drive the cell but in fact encapsulated in biological organisms as many of you are aware is the entire plan for the entire structure okay now we don't generally do that when we write an object-oriented program but in fact people are starting to do that now in artificial intelligence and people who are interested can can bring this up later so my particular

### Biological Cells

**12:52** · my particular motivation when I started thinking about objects was simply that of biological cells and

**13:11** · one of the things that is difficult to escape when you look at biological cells is first the extent to which the outside world is kept away from the cell membrane and then the other thing is is that the cells aren't completely in isolation they communicate by means of sending messages to each other and again the way we way we translate that into computer terms is done in a much more

**13:40** · restrictive way than biology does it biology generally communicates without wearing who's going to receive I'm going to talk a little bit later about a object-oriented strategy in which messages aren't sent at all they're only received you might think about what an object-oriented system might be like if you never sent a message but objects could receive what would they receive all I could do is receive the translation of this model into machine

### Recursive Design

**14:13** · terms for me 25 years ago or so was that these biological cells acted a lot as though they're on a network you can think of it as a crossbar switch or a Ethernet type network in which every object can send to every other object and each one of these things is a lot like a little computer in fact is very

**14:42** · difficult in a good object-oriented system to find out where the hardware stops and the software begins and the this notion of a little computer in the in the large here is something that is worthwhile considering when we think about making very small things now there's a principle in design that

**15:07** · people came up with many years ago it's called the basic principle of recursive design and the idea is make the parts have the same power as the whole we know in the factorial example that a

**15:25** · recursive program like factorial its charm is it's able to reinvest the conditional branches and so in some sense the program remains as long as that is true the program remains as strong as it was when you entered it because you can always reinter it instead of getting diluted away now

**15:49** · another thing that that crossed my mind when I was pondering these ideas back in the 60s was why if that is such a powerful idea why is it that we take a very powerful idea like a computer and dilute it immediately in most programming languages divided by dividing it up into data structures and procedures data structures don't have the same power as a computer they're static can take on marks but they're

**16:18** · once once you get a data structure it just sits there procedures don't have the same power as computers because they can't remember state they have to have something additional so what we did in the guise of following standard math mathematical notation in the 50s when

**16:37** · Fortran was developed was to mimic standard mathematical notation without thinking about this basic principle of recursive design because people didn't write recursive programs back in the 50s and so the baby is thrown out with the bathwater almost immediately in a standard procedure and data structure language and it occurred to me and other people who are thinking about these ideas back then what if you didn't do

**17:04** · that what if the only subdivision you ever made in a programming language was a subdivision of a computer into a computer you're never allowed to subdivide the computer into something that was less than the computer and what does that mean that means that each subdivision has to be something like a black box that has inside of it some

### Subdivisions

**17:27** · mixture of State and process from the outside you can only invoke behavioral attributes rather than invoking method attributes and what I mean by that is this is something that was even in Fortran because the earlier designers of Fortran realized that there is a very funny correspondence between procedural things and data structure things so for instance when you say Si and parentheses

**17:56** · 30 close parentheses in Fortran you can't tell by looking at that whether you're invoking a function or whether you're accessing an array and that was not accidental back then because of course they thought of arrays as being a kind of a function and they wanted you to be able to write arrays huge tables still done today in order to do

**18:25** · functional evaluation very quickly what they didn't realize is that you wanted to be able to trade-off between the two but that notion of just saying sine 30 degrees without indicating how its to compete be computed is the essence of the kind of abstraction that that object-oriented programming is all about it's carried very far here by

**18:55** · this strong membrane of the object so that what we're dealing with here are behaviors and there are two important implications that had to be worked out early on one of them is that messages in most cases can't be commands or you're

**19:16** · violating the notion of the object as being in control now most object-oriented systems today when you do what is called sending a message you are issuing a command Objective C C++ even small talk eighty all of those systems a message is actually something

**19:38** · very very close to if not identical to a certain kind of procedure call okay but in fact in the original scheme and we can talk about the implications of why this is a good idea later in the original object oriented systems that were so successful messages aren't commands at all what they are are desires I'd like to have this happen just to

**20:05** · give you an example of why imagine we have an object masquerading as a critical system file and the question is it should just anybody be able to come up and issue the command to it turn byte 5 to 0 now it's done all the time but in

### Protection

**20:25** · fact in an object-oriented system you would like the object to be able to protect itself so that even a person who has a pointer to it even a person who has the knowledge of which command is the right command that both of those do not imply that you have permission to actually change that file so in the when

**20:49** · I talk about an object-oriented system I mean an object in which the worst you can do to an object is to simply indicate to it that you would like it to do something for you and the best that can happen is it will do that the worst

**21:07** · that can happen to it internally as it will simply refuse it may put you may take your name and give it to the principal later if you've done something wrong but so this notion of absolute control that messages can't be commands and the other one is because the object is no longer a data structure in any sense that we regard it that assignment is something that can't

**21:37** · be done from the outside either so the assignment statement has to go away in the form that we know it as an irrevocable change to a variable or a slot in a data structure an assignment has to be changed by something that we can think of as being advice or influence so again this notion of

**22:01** · getting an object to to change its state is something that we normally don't do in object-oriented programming because normally in object-oriented programming we are not simply trying to imitate data structures now to be a data structure is that thing that if you send it to somebody else you're giving them permission to change it that's what I mean by a data structure so it's clear that some of the things that we call data structures in normal parlance in a

**22:34** · system with an operating system that offers some protection are not strictly classical data structures by that means certain files usually have protections on them so that in a good operating system when we send a file from us to

**22:51** · somebody else we are not can conveying to that person the same level of protection necessarily that we have been granted so in a good operating system this is this may be an operating system that you've never seen but there there have been operating systems in the past there exist operating systems now so that if you have a certain set of permissions for a file a and you wish to give it this file

**23:19** · to your friend suppose you have the the magic permission to change the any byte in the system file because you're a honcho then you might wonder should I be able to pass on those permissions to the

**23:36** · next person that I give this file to the answer to good operating system is no each person should get their own permission separately and when they receive this file a it's their permissions that are granted by the operating system that obtain not the permissions passed on to them by somebody who had the file before so you can think of taking this desperately important file passing it along and when

**24:08** · it goes to somebody who is less to be trusted with it they have fewer permissions on that there are fewer things that they can do with it and then they passed it on to somebody again that may go back to a trusted person that person should be able to reintroduce

**24:27** · that is called capability protection and capability protection is again another one of these old ideas from the 60s intertwined in a very strong way with object-oriented design that is now coming back capability is simply a technique for protecting objects in a

**24:49** · stronger way than normal digital computers allow them to be done and again at the end of the at the towards the end of the talk we'll talk a little bit about this so to me there are lots of different ways of talking about objects but probably 90% of the reason

### Data Abstraction

**25:10** · to me for dealing with objects at all has to do with their abilities to protect in various ways protect by encapsulating various kinds of things almost always state less often control

**25:27** · is encapsulated and so forth then about 10 percent of the use of object-oriented programming to has to do with its ability in whispering to you how you might design a system better and just one more note about that before I get started on the on the talk proper and that is that the way objects

**25:52** · are used today is a little bit confusing because they're intertwined with a another set of ideas that came out of the 70s that are very similar particularly in implementation these days and that's what's called data abstraction how many people are familiar with data abstraction as a idea okay so data abstraction looks a lot like object-oriented programming but its intent is different the intent of data abstraction is to take a system that

**26:24** · you're familiar with like Pascal or Fortran that is starting to run into difficulties of various kinds difficult is usually a representational ones I think everybody's had the experience programming in a language with data structures you get this big system done you decide you need to change your representation and the next thing you

**26:49** · know you're hunting down all of the procedures that think they knew about the old representation and the rule of the universe is that there's always one or two that you don't find so you slide in the new representation and a couple of months later one of those procedures is invoked and all of a sudden you have a crash and people wonder why the answer is the critical knowledge has actually

**27:15** · been spread out in such a way that it can't be recovered it's like what you have to do after you do a multiplication in order to recover the the operands you have to do much more work like the difference between differentiation and integration the same thing is true is once you've lost information in a century in a system once the entropy has gone up then it's very hard to get it back so one of the things that you try

**27:42** · and do with objects is to try and maintain the as much informational content as you possibly can in a smaller place as possible now data abstraction techniques use a similar way of wrapping an envelope around a data structure and invoke operations by means of procedures in order to try and get it

**28:07** · to be a little bit more representation independent the difference though ADA for instance is a language that is a data abstraction language is not an object-oriented language and even the the people who actually understand ADA don't claim that but you can do certain kinds of things that are now today called object-oriented in Ada so this

### Data Structures

**28:32** · envelope of procedures is wrapped around the data structure in an effort to protect it but then what happens is that this new structure that's been created is then treated as a data structure by all the rest of the program the result is in particularly in ada is that the

**28:53** · programs are not small the programs aren't any smaller than they were before and one of the hallmarks of object-oriented programming if you have any sense of whether you're doing it right or not is that the programs are remarkably smaller because there's a way

**29:11** · of using the design that is not simply imitating a bad old idea which is data structures and trying to shore it up by putting it in an orthotic brace but in fact to go beyond the notion of data structures so for instance in in a NATO way of of doing object-oriented programming one typically comes out with

**29:35** · something that looks very much like a data structure it has fields that are to be written to it has fields that data is to be taken out of the structure is static there's no actual process going on and it's essentially a slightly more abstract way of doing data typically in an object a good object will not actually permit you to write assignment statements to it at all because an object generally will not

**30:07** · look at all like a data structure just to give you an example we can contrast a personnel record as it might be done in Ada in which we still wind up with fields as we had them before some of the

**30:23** · fields might be a little bit more connected but it's still a large thing it's still passed around as a passive object we could contrast that with an object-oriented approach with which would be to try and turn the personnel record into something much more like the like a real person in other words this personnel record instead of sitting

**30:45** · there on a file waiting to be manipulated would actually be trying to participate actively in some sort of simulation instead of changing the person's age from the outside the way you might do in a data record the age of the person would change dynamically as the birthday was passed because there was something in this object that was actively looking at the clock actively running in some sense the notion of

**31:14** · being able to edit the object from the outside would be much less in the sense of editing the actual fields so objects even in a in a programming language in which everything is an object like small talk objects tend to be larger things than data structures they tend to be components active machines that fit

**31:39** · together with other active machines to make a new kind of structure just to give you an example of a modern attempt at large scale object-oriented programming which hasn't been done very much for a long time the largest object-oriented system was small talk zone system which was even though it had

**32:00** · its own user interface and its own operating system and its own sets of editors and facilities and file system and every other kind of thing the small talk ad system that is distributed by park play systems for instance is only about 40,000 lines of code which to me is is 10 approximately 4 to 10 times as large as it actually needs to be it's actually kind of junky in various ways but when

**32:32** · you consider that the UNIX kernel it's alone is 400,000 lines of C and that is thought to be a rather small kernel in the operating system domain you can see that most object-oriented programming historically the programs have been tiny

**32:48** · the all of the stuff that we did at Parc that led to the Macintosh could be summed up this includes the equivalent of about 15 different Macintosh applications including mac draw and mac paint and all of those things were summed up by approximately 175 pages of code or approximately 8,000 lines of

**33:13** · code that included the operating system the user interface and everything these programs are tiny when they're done right because of that people have been very suspicious of them in the world for instance that you come from you know does this idea really scale is it just for toy problems and so forth the most recent example of object-oriented programming in the large that I know has one done by Arthur Anderson consulting at the Brooklyn Union gas company over

**33:44** · the last year now Arthur Anderson I don't know how large the jobs typically are at McDonnell Douglas but Arthur Andersen consulting typically and I think they do some work for McDonnell Douglas but typically when they get to work on a job their clients have already failed a couple of times and implementing it they're usually called in at the last moment they charge twenty

**34:11** · to fifty million dollars a pop for one of these jobs and their jobs typically run to about one and a half million to two million lines of COBOL this this is done over a period of about a year and a half to two years by a highly trained group of people I think of as technological Marines they have a very rigorous high-spirited training facility called st.

**34:39** · Charles they have a approximately 27,000 people who do this kind of work and it's a fascinating fascinating set up I'm on their technical advisory board and I got on the board partly just because I was interested in the culture of this particular company I was really surprised that given how successful they've been that they have been shifting their entire set of operations over to objects over the last five years

**35:06** · or so it's an enormous change for them because they have it's not the change in going from a non object-oriented language to an object-oriented language the change of going from one kind of culture to another kind of culture it's a change that as Koon mentioned about paradigms the reason the paradigm shifts take 25 years or more in science is in order to have a paradigm shift in science you generally have to let the old physicists die off once once people

**35:35** · have learned a technique and have gotten comfortable with it is extremely difficult for them to go to something else the Macintosh user interface in its early stages had that difficult people had gotten so good with function keys that they actually felt diminished by

### Arthur Anderson

**35:53** · using the mouse even after was shown to them that the mouse is four times more efficient in speed over what they've been doing with the function keys it didn't seem that way to them because they've gotten so adroit with it and the same thing is true with any technique that people use so Arthur Andersen has

**36:12** · done a number of different pilot projects but last year they started the first large implementation this is a project that was a reimplementation of a system that had been done some years ago and it was originally designed to be done in the standard Arthur Anderson case tools and the estimate was 1.7

**36:35** · million lines of COBOL and approximately 2 to two and a half years of implementation time to do this enormous system which is both both an accounting system and a management information system and as an

**36:50** · experiment they decided to left a New York group which had been the pioneers in object-oriented programming do a implementation using object-oriented techniques now of course they didn't have an object-oriented language to work with for their end result this was to be done on IBM mainframes 30 90s there are

**37:12** · no object-oriented languages extant on the 30 90 so they did a trial implementation to test out the design in small talk taking a few months to do it and then wrote a set of library routines and some pre-processing macros for PL 1 and then we implemented this project

**37:39** · with about 10 programmers in PL 1 so the results of that are now in the minor interesting thing was that they got done about 6 months early the major interesting thing was that the amount of code that actually had to be written to do this Amandla to 150,000 lines of this library is PL 1 as opposed to the 1.7

**38:05** · million lines of COBOL that their estimates had done before so this is a factor of 11 less code and from their standpoint the six months was down in the noise because the the months that they're interested in are the 5 or 6 years of maintaining the code from then on and being able to reuse those modules as they are going to be able to on other 3090 implementation so in some sense the

**38:34** · the fact that you can program faster that you're you can save time and so forth in object-oriented programming in in the larger world is not nearly as interesting it as it is in research and research basically the ability to do quick prototyping dominates almost everything else in the large world the world that you come from the world that Arthur Andersen is in quick prototyping is something they'd like to do they're starting to do it but it's not nearly as important as maintainability reusability is the

**39:07** · second thing if they can reuse a module as a component in some other system then they have saved themselves an enormous amount not of time although they have certainly done that but to them it's not time but it's designer skills the thing

**39:28** · that all large companies are weak on is having enough designers to go around they're usually plenty of people to write code but the designers are few and far between and this notion that a successful design can actually be moved from one place to another in components is something that literally drives the Arthur Andersen people crazy with joy to to think about so they have now come up with an object-oriented repository and are starting to craft rather large

**39:59** · useful objects that can be used as standard components and building blocks in various systems and we'll talk a little bit later about how one goes about to me this is what object-oriented programming is about it's not saving data structures from itself it's not making a slightly fancier data structure it's not even making a data structure that can implement certain kinds of constraints within itself and so forth it's thinking of those objects as

**40:27** · independent machines going back to this whole biological notion that it's one thing to build cells and it's another thing to build tissues and for people who are just starting out in object-oriented programming they're usually thrilled that they can build cells but the real goal is to be had when you move from cells to thinking about what are the tissues what are the conglomerations of these atomic style objects into components that if you were

**40:57** · to have three or four hundred of them in a repository usable by any programmer what would you be able to build could you be able to Tinkertoy things together could end-user programmers be able to do a considerable amount of the programming and retailer and so forth so

**41:18** · the real change if there is one I think I think it's coming faster than we think that object-oriented programming is going to bring along is actually both a change in the way professional programmers do their work but even more so a change in the way these applications are designed another example for instance at Apple now we design all of the applications that we do as though they are going to be actually tailored not completed but

**41:50** · tailored by an end-user a person who has programmed almost not at all person who's used HyperCard a few times so this is a really big change and it's something that has been talked about for 20 years or more but it's something that just now is possible to actually do what does it mean well it means what you'd like when you get an application from somebody is to be able to use it right

### ObjectOriented Programming

**42:19** · out of the box read them the manual understand what it is don't have to sit down and think about it as a kit or anything but just use it the way you're used to using it now it's a temporary solution to some set of problems you have right now also you wouldn't be using it but a month later your old attitude about this ad this application has changed completely month later now

**42:44** · you're saying boy I wish this thing could do this and I wish this thing could do this everybody does that person who's never program before is only used the computer for a couple of weeks after a couple of weeks they'll say boy I wish this thing could do this and I wish it could do that and that's the point where you'd like to hit the hood latch button on the application and open it up and see something in there that was comprehensible right now if you open an

**43:10** · application on the Macintosh you open it up it's sort of like looking into the hood of a Mercedes Benz or something there's this mass of tubing and if the thing had a carburetor you find it because it's a mass of spaghetti mostly machine code on desktop micros but doesn't matter whether it's machine code or Fortran it's a mess and on the

**43:33** · other hand what the user wants to see when they open it up is something that looks like a Model T they want to see a schematic even if there's a Ferrari underneath the Model T they want to see a Model T they want to see a schematic engine of what makes that application

**43:51** · tick because they've already got an intuitive notion about how that works and then they would like to be able to make changes at the level of that schematic engine there are a bunch of applications you can buy for the Macintosh now in which that's possible an example is focal point and most many

**44:09** · other applications written in hyper card because hypercard is a an object-oriented language set up so that professional applications programmers can give you not just architectures not just a kit but working architectures working kids and then after you've used them for several months you can make the change that's going to change the whole

**44:30** · way we go about designing things professional programmers won't be designing programs for each other or F at its worst professional programmers tend to design programs that will keep them in job security there's a class of

### Early ObjectOriented Ideas

**44:46** · programmer who delights in the obscure they love the fact that they are the only ones that can understand how this program works and there's a maxim that says if you're the only one who understands how it works you don't understand how it works and so progress

**45:02** · is isn't to be made there so so I think I'm going to go into the the give you an idea about where some of these ideas came from the one thing I think you may be a little bit surprised to add is some of the earliest object-oriented ideas were some of the most sophisticated and it will be revisiting them in the next

**45:24** · five and ten years to come one of the reasons for this is that because you couldn't make money in computing in the 60s many of the people who had ideas about how computing should be done in the 60s had extremely pure conceptions those conceptions are powerful yet today and it's worthwhile showing you a few of them

**46:01** · so just just as a reference point I like I always like to start off with this slide because this is my vote for

**46:18** · the world's first personal computer this picture was taken at Lincoln labs in 1962 summer of 1962 and this is a machine called the link and it's

**46:33** · especially appropriate to mention here since the person who invented this machine West Clarke had a research project at Washington University for many years sponsored by ARPA those things that look like Dec tapes over on the side he actually invented they were called link type tapes originally and this is kind of a metaphor for our talk which is the

**46:59** · best that Dec could do with these ideas that came out of Lincoln labs as well when Dec saw this machine in the early 60s it said boy what a great way of making a small mainframe and it immediately adapted the the architecture of the link to make many computers but Dec said well people aren't used to looking at displays let's make that an option so he took the display away and people didn't understand what was

**47:32** · actually on the link tapes some obscure stuff so they said well let's put files on the link tape so I'll call him Dec tapes and out of this machine Dec was able to come up with the astounding idea of the mini computer whereas in fact about 2,000 of these were built in the 60s and an astounding as far as I've been able to determine is an astounding 900 of them seemed to be still working today now they were designed for

**48:02** · biomedical labs for technicians who needed to do their own programming and needed to do real-time experiments and it was an almost perfect machine by the way what was on those original link tapes what was on there were the pages of the virtual memory this first personal computer had it's very hard to go out today and buy a personal computer that has a real

**48:30** · virtual memory this machine had it back in 1962 so as an excellent idea but like many things thought of it it actually was so far ahead of its time that it took another decade or so for people to catch up to it one of the very first object-oriented software systems and one that's I think a particularly in this talk is Ivan

**48:55** · Sutherland sketchpad which is also done at Lincoln labs on the tx2 computer which was the last computer in America large enough to have its own roof and in fact was it was about four times the size of this room and every Thursday they would take it down and change about 10% of it because they were always

**49:20** · putting new things it had some of the earliest core memory ever devised and it's quite a remarkable machine for its day it was used as a single user machine by Ivan Sutherland to invent sketchpad and you see him here he's working with a bridge truss sketchpad is very difficult to appreciate and just by looking at slides so I thought I would show you a videotape of it in operation so if we could run the first videotape take a

**49:54** · look and see what this again is the summer of 62 is tape number one stop could you we I thought that was rewound could you rewind that please and then show it

### Sketchpad

**51:02** · now back then they didn't really have computer displays as we know them today so that tx2 here is actually simulating the lines by drawing dots rubber band technique that you've seen before now here's something that I even invented which is he's pointing at the edges and telling sketchpad he wants them all to be mutually perpendicular and sketchpad just solved that problem we see the sketch pad is the first system to have a window the virtual paper he's drawing on

**51:34** · is about a third of a mile on a side here the constraint was make the lines parallel now the constraint is collinearity so sketch pad wasn't just the first graphic system was also the first non procedural programming system

**51:56** · so everything is controlled by non procedurally giving goals that the system has to figure out here he's making the guidelines invisible to get some dashed lines

**52:16** · so he's made himself a flange now he wants to make a rivet and this is why it was called a sketchpad that you didn't want to have to be precise he wanted to be able to just sort of sketch things he's gonna use that as the center for an arc and now he's going to again point to

**52:39** · those and say make them mutually perpendicular that pulls the center which pulls the arc which makes it symmetric which makes the rivet because of the way that program is implemented you can actually see it solve the problem there's actually quite sophisticated this is a nonlinear problem that's actually solving

**53:12** · so no matter how he distorts it it comes up with the same general shape and he could constrain the ratios of the lengths if he wanted to now what he's been working on there was actually what we today would call a class he called it a master and this is an instance of that Rivet can make it larger or smaller

**53:45** · so he wants to latch it into the flange here you can see that this program rapidly led to better display designs these are other instances of the rivet and now he goes back to the master and

**54:07** · says well let's make those guidelines invisible so it looks more like a rivet and we see that the instances dynamically feel that change so these are not copies but actually dynamic instances

**54:34** · okay and now he shows that any constructed thing can be a master so he had made the plan for the rivet into a master now he's pulling instances from it and rotating them and changing them and so forth

**54:58** · okay if you stop that tape please so sketchpad even today is an amazing program you can't buy a graphics system that is nearly as as good today in the sense of it being a comprehensive system for allowing you to set up problems

**55:23** · allowing you to solve problems its implementation not just its appearance was also object oriented and the style was something that Ivan settlin came up pretty much on his own because of the

**55:39** · difficulty in dealing with many different kinds of objects and having them solve constraints and being able to make pictures for them of themselves and so forth so he got interested in this idea that each object could actually have its own drawing procedure embedded in it and all you had to do is be able to send the message draw to any of the objects and it would invoke the correct procedure although would be a different procedure each time and the same notions were later used for constraints now I

**56:13** · once I asked to Ivan I said Ivan how how is it possible for you to in one year just by yourself come up with the world's first graphics system the first non procedural programming system and the first object-oriented software system and he said to me well I didn't know it was hard

**56:35** · fortunately didn't and actually it has it has barely been improved on since there have been some improvements since the system called thing lab done at park about a decade ago or so was an improvement on it this whole area of constraint driven object-oriented

**56:55** · programming is something that is a hot topic in research right now and I think for the first time in twenty years is actually going to yield some fruit over the next five to ten years the reason is is that people who do mechanical design particularly such as you do here at McDonnell Douglas require now for the

**57:17** · first time serious simulation of the mechanical design particularly how it articulates with other parts of the design really want to have a simulation job-shop built into the design system so you can do a lot more than just finite element analysis but be able to do analysis of linkages and other kinds of situations that are too difficult to do

**57:44** · simple in analytic solutions or do finite element analysis and the answer to this is a kind of constraint driven object-oriented design the sketchpad actually invented the first kind of so let me give you another example I'm going to go to the number four tape this time though okay okay I'll pause well had some

**58:29** · interesting questions actually one of the things I should have mentioned at the beginning is I'm perfectly happy to entertain questions that at any point I believe that the the we have an hour and a half that the at least an hour of the

**58:54** · hour and a half I think we should spend talking about issues that concern all of us about object-oriented programming I have some of my own people who are starting out on it may have some crap you the trepidation they may wonder where it's going what the actual leverage is I had a a question asked

**59:19** · again about the difference between abstract data structures and what I think of as a real object-oriented style another question was asked about is there any way of preserving already written COBOL and Fortran code in an object-oriented fashion so it doesn't all have to be thrown away and maybe

**59:43** · that last question is one that's worth while answering now a lot of companies are trying to figure out what to do about object-oriented programming particularly given that there don't exist any good object-oriented programming languages for programming in the large small talk is not a good

**1:00:09** · language for programming in the large as it's currently distributed it's a great language for learning about object-oriented programming because it's written entirely in itself and so you can learn how an operating system how a user interface how applications how little things and larger things can be represented in an object-oriented form how inheritance

**1:00:37** · subclassing and so forth all those things small talk is ideal the of the small talks around to look at the one that has the best manual is the one called small talk V and it runs on both the IBM PC and the Macintosh it's not the mote it's it's a rather complete system in in a number of ways the other

**1:01:08** · system is called Park Place small talk small talk 8e and it is sort of the granddaddy of the small talks that that Xerox has released it has a even more complete set

**1:01:25** · of system tools and some very ambitious applications written in it both of those are worthwhile looking at but for programming in the large objects aren't enough I don't believe and the reason is that at some point it's not simply a matter of piecing together something that is supposed to run it's a matter of being able to verify different

**1:02:00** · sections different parts different modules independently to be able to unplug and replug and even I think in many cases it's desirable to allow different implementation languages to actually be used now if we look at the the standard

**1:02:33** · so we have a glob and the main principle in object-oriented programming is to separate the outside from the inside so on the outside we have a variety of messages that we're willing to respond to and on the inside we have some methods oh sorry

**1:03:01** · we have some methods the may or may not correspond to these things on the outside cuz whatever the idea is we're not supposed to understand what the inside looks at from looking at me on the outside and outside thing might even correspond to a little data structure

**1:03:21** · inside a thing equally innocent might correspond to an enormous amount of code there might be code in here not directly connected to this and in fact some of the messages that the object may be able to receive aren't directly characterized in terms of some outside protocol lots of different variations here but the most important one here is that we're trying to separate a protocol

**1:03:58** · from some methods at this level and then if we think about going a little bit more fine-grain where we started having zillions of objects interacting

**1:04:24** · in a sea of messages in fact some of the some of the objects might not even be on the same machine they might actually be over here a good object-oriented system

**1:04:46** · you shouldn't be able to tell what machine you're running on that's what messages are all about very quickly when we're starting to build a large system down here we've got something interesting we have absolute protection but we still have confusion right because it's you can have thousands of thousands of diamonds that are impervious to all normal wear and tear

**1:05:15** · and still not be able to build the simplest structure out of them they may need to be too shiny may not be able to pile them up they may not fit together but by god they're perfect so what I'm trying to say is that the the protection issue is a critical one but it still doesn't guarantee that you actually have an architecture now in small talk in the

**1:05:40** · most object-oriented systems how you come up with these guys is govern very much by convention there's a particular way like it's a convention in small talk systems that one of these guys will always be called print so that for every object in the system you're guaranteed that one of the messages you can send to it is print and theoretically what that

**1:06:08** · means is this little patch of green in here that corresponds to print is supposed to print for you now there's nothing in small talk or any other object oriented system right now that guarantees that printing is going to be done now there was a strictly conventional it's something that everybody agrees to it's like overloading operators in Ada when you

**1:06:39** · overload plus in order to give plus more meanings for different structures you're usually trying to adhere to something metaphorically similar to what plus originally stood for so for instance if you have a plus a plus it adds two numbers together you might overload it to apply two arrays so that the operation is some sort of point point

**1:07:07** · point addition maybe vector addition sometimes you might overload strings - what could + mean and strings well one of the one of the ways of thinking about strings algebraically is that plus means concatenation because it's a way of adding two unary numbers together and so forth and at some point you started stretching it as you stretch the metaphor but generally you don't want Plus to go off and do some sort of multiply or something else but the only

**1:07:38** · thing that controls that is some agreed on set of conventions and because of that what this protocol is how complicated it gets and so forth is the most important part in any kind of object-oriented design but it's also the most fragile the fact that there's nothing to protect print is absolutely critical let me let me give you an example of what we could do to protect print

**1:08:17** · one of the things we could do is to have instead of having print just be code we could actually have a print class and its offspring its instances are actually structures that look like this

**1:09:15** · okay in other words each offspring of print is a message method pair in which unrestricted code writing over here is not allowed does everybody understand why this is an interesting idea because

**1:09:39** · so but if you could only if you can write anything here then J random programmer often will as you go as you go along and the fact that the system seems to be conventionalized at this protocol message level which is the very charm of object-oriented programming why object-oriented programs work so well why they fit together gets destroyed as the amount of generic information in the

**1:10:09** · actual methods gets diluted but if another way of doing an object-oriented system is to actually make classes for each of the major code types that you're going to write and what you get here is something that would insert itself in here but in fact the only codes you're

**1:10:33** · allowed to write are certain little restricted boxes in here and this thing guarantees that it's going to print for you it's not going to go off in zero byte five of some system file this thing because it came from a print class and because the print class does printing type things every piece of code that goes into a protocol actually is going to do something like printing and what you're allowed now is a certain amount of parameterization a certain amount of freedom but the meaning of print now has

**1:11:04** · been nailed down because there's some actual code from the print class sticking behind here that you can't see that's going to make every effort to deliver a result that is what you want this is like types in type languages except it's stronger because it can controls the goal of the result the goal

**1:11:27** · of the result not the shape of the result right in a typed language when you have a typed variable or type procedure what you can state is that might have some integer parameters and I'm going to deliver a floating-point result what you can't say in the type statement is what the intent of that procedure was the only intent

**1:11:52** · that you could indicate is that's going to in it's going to give you some sort of floating-point result you can't say it was supposed to give you a sine or cosine or anything else that is up to the convention of the actual programmer

**1:12:09** · itself so what I'm just pointing out here is that if you take a if you take a system in which there is a protocol you can get a lot out of it just by having the protocol be a convention agreed on by everybody as you go into a larger and larger system that that inside out outside Ness will protect against the inside getting dissolved by some hostile

**1:12:40** · act action by the outside but what will get diluted as you go to a larger and larger system with more and more programmers is whether the protocol is going to have any meaning practical example in small talk has approximately

**1:12:57** · Park Place small talk has approximately 5000 of these green things each one of them is there each one of them can be reused by inheriting it from somebody else the number of red things it has is on the order of twenty one hundred that

**1:13:20** · means that the amount of how generic the code is with respect to the protocol is not much right it should the number should be more like 400 or so different red things four hundred concepts and say

**1:13:38** · five thousand realizations of those concepts now print is the happy exam exception to that because if you have a 154 different kinds of objects than their 154 different green guys and only but only one print concept so there's the same technique that people use overloading of operators for you want to reduce the concept space by making it more algebraic make take a concept make as

**1:14:07** · metaphorical as you possibly can and like equal is a good one what does equal mean some systems that means we have I'm looking at exactly the same thing some systems it's okay for the same if the same things look the same some systems is if under some

**1:14:28** · particular evaluation rule they evaluate to the same thing or they might evaluate to the same thing so equal is one of these very slippery notions because it very quickly becomes useful to think of equal as being very useful in terms of equivalent this is equivalent to that that's a generic notion so again you might imagine that one of the one of the things you might like to have be generic

**1:15:00** · are comparisons equal equal is a much stronger one of course than greater than or less than because greater than less than involve some sort of sorting but again greater than and less than don't have to apply just two numbers in small talk there's a super class called magnitudes and anything that can be sorted in any way under any kind of sorting rule is underneath magnitudes and underneath magnitudes are things

**1:15:30** · like less than and greater than so for instance dates are an example times time intervals anything that can be sorted in any in any form you can those what you might what you would call operators in a de or automatically overloaded now what happens in an

**1:15:56** · object-oriented start off with a nice set of these and then as practical programmers chew on it the heat of debugging one of the things we discovered is that even good programmers don't make up generic operators for

**1:16:14** · things what they do is they make up any old word think they can think of at the moment write a method for it and continue on the result is that what the object-oriented style was buying for you starts diluting it starts gradually diluting away the manuals get larger and all of a sudden you're back to something that is close to what you had before so I'm not I'm not sure if people didn't understand this explanation I'll be glad

**1:16:46** · to go over it again because it's it's it's one of the important examples of something that you can actually do with an object-oriented system everybody more let's get what I was talking about that you can actually legislate one of the things you can do in an object-oriented system is to legislate to some extent even what the code that the programmer is going to write is going to deliver to you you can build in to these main

**1:17:13** · concept classes the tests to see whether the code is it all behaving the way you think it is those tests can be run independently of the programmers who are writing the code now another thing you can do using these protocol ideas is horrible as it sounds there's no reason why you can't put some COBOL in here

**1:17:38** · this is not something that people do in a typical object-oriented language like small talk because it's designed to to write all of the methods in itself but if you think about this whole notion here as a binding mechanism for a component not just as a way of protecting a data structure but a binding mechanism as a component then what you really are programming in terms with is the blue and the red what the

**1:18:16** · green is is almost completely independent as long as it conforms to whatever this guy wants it to be able to do what I advise large companies when they are embarking on object-oriented programming is to do a few systems using something like small talk or preferably just to get an idea of what it's about but then think of all the things that you've already learned about controlling modules and systems and realize that the

**1:18:50** · small sizes of the code of the small talks from the 70s don't have all the protections in there that you actually need what you really need is what these days is called a configuration language a C language configuration language

**1:19:13** · and this language can be independent of all of your method languages it's it's something that is dealt with it the operating system-level it's something in which the protocols are chosen as much as possible ahead of time it's a standard vocabulary of concepts that you're going to use to write in it's one in which the protocols are controlled by active code the give you places to write

**1:19:38** · code and insert other code that allow you to bring over a COBOL routine or a Fortran routine or whatever the heck you want and bind it in it's a binding mechanism it's a way of setting up environments for debugging modules

**1:19:56** · independently of each other it's a way of assuring yourself that a module will be able to move from one place to another it's a way of discovering whether you want to use a module so at some point the ability for human to read this configuration language is going to be much more important than the ability to write it one of the embarrassments

**1:20:18** · that you often find in an object-oriented language is you have all of us we have usable code and it's too hard to find the modules you want to reuse small talk has a lot of that flavor anybody who's ever tried programming and especially in small talk 80 is bewildered by the fact that the

**1:20:39** · system is completely written in itself there are tons of usable things in there and yet it is such a pain to find those things you wind up tandem out having to read other people's code and then in order to find out whether you actually want to use the stuff so the for instance what Arthur Andersen is doing right now is to try and come up with something that is completely independent just completely x-out forget about the

**1:21:12** · interior stuff just come up with something that is basically modules in terms of blues and Red's making the the red message protocol be as powerful as possible controlled by other things and then using that as a dynamic binding mechanism for configuring programs it allows them to take large sections of database and

**1:21:38** · sequel calls that they've already done and bind it into an object-oriented framework as an example yeah yeah

**1:21:57** · so configuration let's start off with the things that you might want to have in it now the there's only I only know of one actually good configuration language that's been done as a language called C Mesa which was done by the Parc computer science lab about ten years ago and it served

**1:22:25** · exactly this this purpose and here are some of the things can have it there are some things that you'd expect just from your previous experience you'd expect that there would be some sort of message name for something you'd expect that there would be I Oh parameters so that you would have input expectations

**1:23:02** · output expectation a good configuration language has a an executable predicate you can think of as a goal that they may have a variety of

**1:23:26** · them and I connect those with when I say input expectations I mean not just the types of the parameters that you expect to send to it and the types of the results but also these predicates sorry predicates you can think of preconditions on the input side and goals on the output side

**1:24:04** · you can think of those as being executable there are environmental expectations

**1:24:22** · one of the difficulties in most object-oriented programming languages is although you can protect an object what you don't have any sense of when you want to move an object is what the object itself expects to have as environment as a give you an example in small talk you can write an object move

**1:24:49** · it for one place of a particular Smalltalk system to another but when you want to take it out of your small talk system and give it to somebody else a small talk system you often are unpleasantly surprised and it's not that the object has been solid in any way it's that it has some other assumptions about its environment that you weren't thinking about before in particular

**1:25:13** · small talk allows you to do the somewhat obscene thing of allowing you to go and change existing super classes to make them more the way you like the benefit of this is that every class and the system feels this improvement and the problem with it is if that improvement is important then you've all of a sudden have done away with your portability so

**1:25:37** · what I'm trying to point out here is that the modularity you get in object-oriented programming is slippery and one of the most critical things to do is to be able to pin down the amount of modularity that's actually there I'm gonna I'm going to go into that in a little more detail so the there are more

**1:26:00** · things that are here people have design configurations languages in such a form that you can actually from the runnable parts of the stuff that you can actually derive an explanation mechanically of what the method and what the module itself is supposed to do

**1:26:30** · okay so there are any number of things basically it's something a little bit more close closer in spirit to Parnas they've partners who did one of the original notions about information hiding although it wasn't object-oriented than what you might think of as straight object-oriented doctrine and that each one of these these things is part of

**1:27:04** · this blue no Sheena that this forms a class from which we get the various instances that our system is actually made up of so each each a little instance

**1:27:41** · now it is often the case that if these two predicates here are done correctly you can actually run you do your prototyping by running the blue thing essentially without any green things inside of it or you can think of it being just tiny little green things that come along because of what these are yes

**1:28:17** · okay the this is it's similar to ADA except that ADA for instance doesn't have inheritance and so does everybody here understand what I'm not sure I didn't come to give a tutorial so I'm not sure what I'm what I was supposed to assume everybody knows about the thing but in most object-oriented languages is this notion of inheritance that you can

**1:28:45** · define something very general and abstract like say a thing called a magnitude

**1:29:02** · in a magnitude maybe something even more abs I mean let me use the fresh sheet of paper start off with something really abstract like a general object and then one of

**1:29:25** · the operations and an object you might want to have for every object is equality then a little less abstract you might have something called a magnitude one of its operations might be less than

**1:29:46** · but there still that might not be any notion of what addition is coming down a little bit further you might have something called a number and it might have a notion of plus and there might be a various specializations of numbers so you might have an integer a fraction

**1:30:15** · these guys might have their own versions of plus the notion of inheritance is that very often you can get a compact sorry you can get a compact description of a wide variety of behaviors by

**1:30:35** · factoring out behavior as abstract li as you possibly can you move it as high as you possibly can and occasionally you may have to give your own versions of things like integer may want its own version of what plus generally is it may even want to have its own version of what less than is or may be able to use this general one up here and but

**1:31:02** · inheritance actually allows you to cascade descriptions and in a number of object-oriented systems particularly the AI ones you can actually blend them together in various ways so you can actually say this this thing is not just a number it is also a geometric object and inherit a bunch of things from the side as well so what go to when I talk about doing the configuration stuff I mean to imply all

**1:31:38** · the things that you usually do in a typed language but also applied to a system that has inheritance because it's inheritance in object or any languages is how you share things the goal of

**1:31:55** · release it has been the goal for the last 20 years of people who do this and write very small very reusable very compact code the goal goal is to make the things that are shared as abstract and inheritable as they possibly can be so you want the smallest number of maximally independent concepts that you

**1:32:24** · can Tinkertoy together and have some confidence that the active Tinkertoy is going to give you something that also still works the whole idea in object-oriented style is to linearly combine things together not a native package allows you to subsume some of

**1:32:45** · the details of a data structure it does not allow you for instance to define generic operations which are then inherited by subclasses because it simply doesn't allow you to subclass and

**1:33:03** · what that we leaves you add is a single single layer of description for something which you can get instances from but you can't you generally Eneida do not write an abstract thing that you're going to get in instances from because usually these very abstract

**1:33:20** · types like magnitude and so forth aren't things that you want to use directly they're really placeholders for general code and strategies and this is a foreign idea in the in the aid of programming world which is almost entirely concrete yes well I do to an actually ADA shouldn't

**1:33:42** · even really call them generics from but it's yeah it's okay anybody can use a name for whatever they want but it's that's a it's a different way of thinking about what generic is than what I'm thinking about here the generic power in an object-oriented programming language is your ability to not just reuse a concept sideways but also to advance it abstractly the more you can advance it abstractly the more chance it has of being involved in in an abstract

**1:34:12** · design the less probability you have of having to recode whole strategy here's is true is to avoid recoding remember we got off on this thing I'm just pointing out there's just really just an aside remark that you could make a very strong

**1:34:36** · object-oriented programming language by being completely independent of whatever the methods are actually coded yet that was the whole point behind that digression that as you build yourself object-oriented tools you're much better off worrying about the integrity of the

**1:34:57** · individual objects and then the next thing is can an object be a component and fit into some larger scale protocol when I say a component I mean something like let's say a paragraph of text or generic gear something that actually has a fair amount of meaning behind it might even have its own inference engine as part of it talking about something that can be used in a wide variety of cases in which the sharing is more than parametric you're really getting not

**1:35:28** · just a class of things you're you're sharing a notion that somebody has come up a concept a set of concepts that somebody has come up with this obscure it's the hardest it's actually the hardest thing to explain simply because I'm gonna try another pass at it one of

**1:35:55** · the reasons it's hard to explain is that the this notion because of ADA being called object oriented being taught in school as being object oriented actually has clouded the the issue considerably so it's very difficult to even explain why some of these ideas are more complex let me give you another completely different idea this has to do with

**1:36:23** · another way of thinking about modularity now in most object-oriented systems the modularity that is gotten by them is one that is regard to the state that you put in each each object what isn't modular is the control

**1:36:52** · this is another set of issues to talk about so for example one of the things that you may see when you're looking into an object-oriented programming is is you may see the state and each neatly encapsulated but you may see control going all over the place what happens when you send a message the answer is often I don't know goes here goes there and find somebody here talks to this guy dozens of things

**1:37:19** · happen and I can't even tell whether control is ever going to get back to me that's often the state of affairs now what would happen if we actually made control modular

**1:37:41** · we'd have something more like this where instead of control going through the objects the objects themselves are sitting in a sea of messages but they don't actually originate them themselves how is that possible well one way you can imagine for it to be possible is for the objects to simply say I need to know the following put needs in here

**1:38:31** · now the object there are object-oriented system is one of the ones we've just developed at Apple one that we did at MIT is an object-oriented system in which you never send a message okay you only receive how is it possible well the system contrives to make the messages get to you by looking at your needs and looking around to see who might supply those needs okay is this obscure okay so an example

**1:39:06** · is suppose your suppose you're a a button whose job it

**1:39:24** · is to move the corner of a window so one of the ways of programming that is for you to be in a loop constantly looking to see if the mouse is coming into you okay it's a polling solution to the problem where somebody is polling somewhere but you're constantly looking to see whether the mouse is coming in when the mouse comes in then you say okay now I know what to do I'm going to

**1:39:54** · latch on to the mouse's coordinates and I'm going to tell my window owner exactly how he should be moved around and so as we move around the corner the window corner moves around itself and so that's that's this kind of style of programming control is explicit we have to poll to find out things that are going on the other way of doing it is I could just say I need to know when the mouse comes in to me and then I can do

**1:40:29** · my job this is like an on condition but it's an on condition that has to be scoped because we can't have it happening every time the princess the mouse button goes down but we can imagine that this guy can say okay I have a set of conditions I'm not going to explicitly look for it I'm just going to tell the world that if I had these conditions come true for me then I would be able to fulfill my

**1:41:03** · obligations to the rest of the system I'd know what to do likewise the window that encloses this guy could also have a set of conditions that say well if the corner if my corner guy starts moving I should probably move too I'll change my size if he moves so if

**1:41:23** · only if somebody would let me know that then I'll go along see what this is like this is like constraint programming okay we're going from a procedural style which controls past explicitly around to a declarative style in which were simply indicating needs and the system without having to do any

**1:41:43** · problem-solving is picking up the slack by providing the actual information in the forms of messages HyperCard has this about half way it's a technique we've been experimenting with at Apple for the last couple of years and what it looks like it's able to do is to completely remove the necessity for actually being able to follow a control flow what does this mean when you move an object from one place to another

**1:42:19** · when you move an object from some place into this kind of situation nothing is going to happen with sorry kind of a tiny screen isn't it and you put in when you move a new object in here in this kind of situation nothing is going to happen to that object unless you go in and recode somebody else in order to send it some messages right and so my

**1:42:47** · modularity of being able to move an object from one place to another depends on me being able to do some kind of modification and the system is already there that's not so good it's good in the sense that this object is guaranteed not to hurt anybody and it's going to protect its own self from being moved around but in fact I still have to go in and make some sort of modification in order to get control the flow when I

**1:43:19** · put in a new blue guy here and he has all his needs specified is he going to be able to run why

**1:43:44** · because he doesn't have because the whole idea is that he's not intertwined with anybody else's control he's simply saying I know what I need god damn it then the question is can the system actually deliver those needs just because he's a new thing and the answer seems to be yes this is a peek into the

**1:44:07** · object-oriented programming of the next couple of years in interesting you know if this the need to do things this way came out of yet another project with children all of the object-oriented stuff has developed at Park and the Macintosh user interface came from a set of designs to try and allow children to

**1:44:30** · do serious programming on a computer that was what forced object-oriented programming out into the open the last set of stuff that we've been doing with children at Apple forced this out of the open because we wanted children younger than nine to be able to program and children younger than nine have a very hard time following control flow of course when we're thinking about that we're thinking well of course they have a hard time following control flow so do we except where you see the problem is

**1:44:59** · adults are used to suffering so it's why I like why I like to design for children so designing this new programming language for children I'm going to give you a little example of some of the stuff programmed in it this notion of

**1:45:17** · making control completely modular by going to a needs thing became apparent yes yes yeah well it's complicated because I'll

**1:45:41** · give you I'll give you a simple example and then maybe we can generalize it a little bit the motivation came from a couple of years ago of you know wondering why it was so easy to program in spreadsheets and wondering what spreadsheets would be like if there are more object oriented I've always thought of the spreadsheet cells as being almost an object and spreadsheet cells have this nice characteristic that they they are these aren't they in other words the

**1:46:13** · very act of writing the spreadsheet expression indicates to the rest of the spreadsheet system what your needs are now usually they're pretty simple needs they're just I need to know the values of so-and-so cells relative to where I I am but I got interested in generalizing that and started off with a spreadsheet

**1:46:34** · system that I did in small talk that had a spreadsheet optimizer that first started off simply trying to look at places you wanted to get values from and building a propagation network rather than executing every cell every for every change in this especially I think most of you were aware that most spreadsheets today do not execute every cell there's a propagation network built by the spreadsheet compiler that you don't see that tries to find you the

**1:47:06** · minimal number of things that have to be executed every time the change is made in the in the spreadsheet I started working on that and then the next thing is to go to billions where you're interested in whenever something like for instance whatever this is equal to that I would like to do something or whenever this is less than that I'd like to do something and the I'll just give you a hint of it

**1:47:44** · so they start out with this fairly simple idea that if you have a variable somewhere one of the things that you can do is to link you can have a link to all

**1:48:05** · of the different places that ever need the value of that variable and when this changes you simply fire off all of these guys and you get the desired result let's take an expression now so we take an expression like a is less than B or C

**1:48:39** · is greater than equal to D and then ask what we'd have to do to that to make that efficient the answer is you make this thing into a little tree and at each stage each node of the tree you hold the very the value of the things so far

**1:49:10** · so in this case the a value would be linked through here and you can think of the tree is pointing upwards

**1:49:29** · okay and we can presume that this let's make this an just for the heck of it see that this is false and we assume that this is true and that this is false

**1:49:50** · let's do it the other way I make this true this false so the idea is now if it changes the insight here is that all you have to do is compare it to whatever the current value of B is let's say this

**1:50:09** · goes to to true you don't have to recompute this guy because it didn't change it's already part of this frozen result and then you come up and recompute this guy so you bait what you basically have done in this technique is to have sorted the actual computation that you have to make this this tech this way of doing things is called a continuously evaluating expression

**1:50:41** · so it's a conglomerate of things it's actually a little computation engine designed to compute in parallel and only the stuff that needs to get computed gets computed so you the computation now the compiler instead of compiling machine code in a system like this is actually compiling a propagation people are interested in these techniques I refer you to the books on functional programming mostly being written in England these these days functional

**1:51:10** · program is about this and well-behaved functional programming languages have the property that you can take any computation that has variables in it and through a fairly simple compilation change it into a network that has no variables whatsoever but simply routing x' for values does that sound please

**1:51:33** · please interrupt me if that's it doesn't sound reasonable is that sound reason it's intuitively reasonable isn't it because what does a variable as a place you go to to get a value but of course you can what you really need in a computation is simply a value delivered you don't need the value to be anywhere except where the operator is so by using a combination of those techniques you can actually remarkably enough it's

**1:52:07** · actually it's always surprising when these things work you can actually go to a thing that's an extreme generalization of a spreadsheet cell that does an enormous amount of parallel computation but in a way in which you see none of the interactions yourself

**1:52:31** · now because of production production system it it's not at odds with the production system it's on this it's not like ops five as an example which is a production system I understand people use here it's basically it's orthogonal

**1:52:50** · to whether there's a production system trying to do things or not ops five has an example in which the you have to order the rules yourself to a certain extent in order to in order to get efficiency and so forth and you can

**1:53:08** · think of this as something which is independent of whether there are rules and I didn't say there are rules here what I said is that what we actually are interested in is whether there's whether there's a set of conditions that can deliver to me what I actually need one of the things you could implement with this idea is a production system I'm not but it doesn't lie it isn't particularly like a production system you could implement a production system using the idea though do you understand to say it just one it

**1:53:42** · yeah because it because some production systems have to be executed in sorry we're getting killed for time we only have a half an hour so what I would like to suggest is that we just sit still while they change the tape is that okay should only take them 10 seconds

**1:54:11** · I was brought up about what do you do with real time in fact what do you do with time and historically the first

**1:54:28** · object-oriented programs that were done outside of machine code were done in a programming language called Simula and Simula had this way of looking at time the Simula he had

**1:54:47** · a bunch of objects one for each entity that you're trying to model so the these guys might be modeling pipes

**1:55:14** · and so forth and the blue the blue guys might be modeling reactors in a chemical plant or something like that but basically as far as seeing they're concerned they're all objects they're all trying to execute at once trying to

**1:55:37** · get to the new trying to move advance the entire system time and they had this problem of if you have a system time the system clock that's going on how can you compute because you might actually run out of time for computing

**1:55:57** · before you can actually advance to the next system time so what the similar people realize that they wanted to do was in between the system clock so system clock might be one and the next time any of these guys had to compute was two so what it would do is it would do all of the computing in between the

**1:56:29** · ticks of the clock so the computing was actually outside the space of the simulation so Simula this is a non real-time situation simular running on a mainframe would compute an arbitrary amount in between each state change so guarantee that each as much as it could possibly do it would settle down the state of each one of these objects during this time when they were all in process as soon as that that had happened then it would say okay now I can go to the next time on the clock it is now - what do I have to do now then

**1:57:02** · the clock could be frozen would compute like mad again advance the clock again now of course there's a huge conflict that's the way you generally do it when you're doing object-oriented program huge conflict between this and when you want to do real-time things because um real-time things you don't get to stop the clock the clock is moving along

**1:57:25** · and of course one of the answers is if you don't have enough computing power to compute before the next time the clock ticks then you're dead anyway okay so let's assume that we have enough computing power and just to ask what we can do an object an object-oriented design to reconcile what time actually means and the way people generally think

**1:57:54** · about time and object-oriented programming as time has entirely to do with who can view what when so it's a viewing operation so let's suppose we have our objects here and we have some views

**1:58:18** · attached to the objects we can ask what is it like if one object is viewing another the first question I just should ask everybody this is absurdly simple once once you see it but the first question is when should I not be viewing the object when it's in transition right so

**1:58:49** · it means I have to have at least a two-phase clock so the object really has two two states it's going in one is it's trying to settle itself to what it thinks as a stable state and the other one is one that's going to allow itself to be viewed okay so mmm let's we can do that and it's sort of a sort of a diagram here

**1:59:19** · so here's the here's the object and here's the view so what we're saying is that when the object is computing we can't view and when the object is viewing we can't compute

**1:59:45** · so we're gonna have a bunch of these little phases like this now that's not always useful sometimes this viewing thing is very long so the viewing can actually hold up the progress of the computation and so what can we do there

**2:00:11** · this is suggested by actually this model so far just just curious to see if it suggests anybody what would be a good thing to do if to break this rigid synchrony we have what can you do yeah

**2:00:27** · we could that's what's called slippage so we could actually arrange a slippage model so we let the as before as we had before we let the object compute and what we take is a copy of it that we let the viewer view

**2:00:54** · and so the object in simulation can have an quite a number of phases as it goes along and every once in a while we get to view it

**2:01:13** · we take let's say we take this guy right here okay now what's interesting is in an object-oriented system this slippage model is usually computed automatically by the the object in the view both of

**2:01:29** · which are objects when you hook the view up to the object what they do is exchange information because one of the things that the object has some sense about is how long it takes it to settle it state typically the view has some sense about how long it takes to abstract the view and so they actually arrange and build a little buffer in

**2:01:53** · between themselves and that buffer has the actual amount of information to allow the slippage to happen so the way this intertwines with doing real-time and deterministic computing is almost all real-time solutions to queuing

**2:02:12** · problems knowing some sort of determinism they actually aren't completely deterministic what you usually do is you're saying I have some limits that I want to guarantee the computation is going to take place in between it I'm going to do enough buffering to make sure that those limits get down so for instance when you're doing real-time reading of records from

**2:02:36** · Fast disks and so forth you set up buffer areas because you don't want to have to have real kind time constraints in every part of your real time computation in an object-oriented system these are usually handled by having

**2:02:54** · what's called a viewing model small talk has one called models views and controllers which is quite general and has the facilities in it for generating all manner of slippage models in between by you putting on the outside what it is that you actually need to know from these objects at some point of course you can break it down there's no real time system you cannot break down but this gives you the maximum amount of automatic buffering that the system can generate without having to be explicitly programmed

**2:03:27** · yeah very very large how can you well

**2:03:51** · the way that's usually done is by trying to again it's that you know the stuff isn't a panacea but what you usually try and do is when you write a device driver in an object-oriented language what you try and do is ask what devices are likely to be like this device now what is this like so when you write when

**2:04:17** · people do a user interface and an object-oriented language usually they don't write a driver for the mouse or for a tablet or anything else what they come up with is an abstraction of what it means to it's usually call a pick device it's an abstraction of what it means to be able to do selection and tracking and then one programmer at one

**2:04:39** · time writes code for that and then if you come up in a system and it has a specific device you may have to write a line or two of additional code but it's written in a subclass below that the main driver is already written already been written in it's um it's not just doesn't just serve as the code for what you're doing it serves as the model for how you treat the actual devices when they're put in there so I'm part of the

**2:05:04** · part of the the charm of the system is to be able to get away from the from the particular as much as possible and program as much as possible in the general case the whole act of

**2:05:20** · subclassing is basically saying to something I want something just like you accept and the theory behind this which seems to work is that it is much easier to program differentially than it is to program from scratch it's much easier if you see something that is like what you want and you can get it in a way that um doesn't damage anything

**2:05:42** · else then if all you could make have to make as incremental changes to it then you should be way ahead that's not always true you know there are always pathological cases always pathological cases but generally speaking like this is an example where the whole strategy once it was thought out was realized oh

**2:06:04** · yeah this is something we can use it's not just for user interfaces we can use it for every kind of device drivers we can use it for every kind of real-time stuff where we have two different clocks going at two different rates and we're trying to synchronize in some way why should we have to write this over and over again why should some program we have to figure it out over and over again it's not that we have the solution to every possible problem but what we're saying is we've got a solution it's the 80/20 rule get a solution to the

**2:06:32** · eightieth you know 80% of all of the code you're ever going to have to write if you can put that into a superclass and then distribute it automatically as part of the solution so small so small that when you when you're doing a viewing operation and small talk you don't even have to think to yourself whether you should worry about synchronization or not until long after you may decide that you need it then you just have it oh it's already in here I just got it for free when I subclass the class view well try think like I say an

**2:07:06** · ADA it's a little bit harder because you can't do those super classes that have all those goodies lying in there you have to you can do it with a macro operation people do to super classing and ADA by making macros that allow them to do a kind of copying and stuff

**2:07:48** · No well in small talk no you can small talk allows you to dynamic basically small talk has no concept of loading code so everything is there dynamically into there and at any point you can go in examine any piece of code in the system you can rewrite any piece of code in a production case you really don't want to allow just anybody to go in and rewrite a superclass because of

**2:08:19** · course the work it's really bad if they if the superclass starts doing something different generally when people go to rewrite a super classes to improve the algorithm that hundreds of applications are already using like you may go in and improve the sort algorithm yeah

**2:08:51** · right that's why I was talking about the configuration so my belief is that in a production case you must have something like the configuration setup or else it's just too fragile it's not it's it's fragile in a funny way because in small talk we used to give $5 bills away to

**2:09:15** · anybody who could crash the Smalltalk system it's very hard to crash an a good object-oriented system because there isn't anything you can get to that where you can actually hurt more than one layer of thing and then the system's says hey wait a minute what are you doing like in the small talk debugger as you'll discover I think there's a tutorial coming up has the anytime there's any kind of an error the system

**2:09:42** · doesn't crash there was there's no concept of crashing the error is simply set aside as just another process and once when we were debugging the system we found 1,700 suspended errors waiting for somebody to take care of them and so I'll talk didn't care you know it's just an error comes up fine you know um set it aside it's right there you can go back to it anytime you want but keep on running it just keeps on running so the

**2:10:11** · that's one of the reasons why we didn't do a configuration language because we were programming in the small and you couldn't hurt yourself so as the the worst he could have happened was something annoying they would come up but it wouldn't crash what you're doing so somebody who fixed it or make a note of it but I think that's intolerable in the production sense

**2:10:33** · where you really don't well you have people who aren't part of the same group and so forth that you really have to have a configurations language and the super classes are the ones that you want to have most understood and most nailed down in particular the for instance in

**2:10:53** · small talk it's often to make things like the sorting stuff parametric so you're actually sending in sorting objects that will do sorting for you as parameters rather than even putting that in embedding that into the the code just because you don't want somebody to try and change it that way you'd rather have it be something separate that you can dynamically bind in really good superclasses don't do much except act as really good binding mechanisms for other

**2:11:27** · stuff that's going on yeah yes there is you can but again the the

**2:11:48** · original the original small talk for example didn't use a kind of procedure call in order to send it really acted as though you're on a network and if you're interested in what order things had to be done in they they could actually be stamped and recued at the other end and

**2:12:09** · people do do that when when you run small talk over the network people make the connection to the network by having what are called phantom objects and a phantom object is a stand-in from the object you're trying to send the net right because you're always sending a message to something so suppose yours suppose your

**2:12:39** · so if you're over here and you think you're sending a message what you think you're doing is sending a message from object a to object B and but they may be on different machines and so what may be really going on is object a is sending a version of object B

**2:13:11** · which is really going over the network to the real be again these are called Panem objects and usually there's just one class of them and whatever you're distributing a copy a computation usually the environment for the objects

**2:13:31** · just consists of a few local objects and the rest of them are phantom objects the phantom objects take care of all the the network stuff and synchronizations and reorderings and other kinds of things that you have to do when you're going to slower slower media that's a well-established technique and any good object-oriented language you can set that up literally in an afternoon today

**2:13:57** · oh it's quite instructive to think about what it means not to send just a message but to send an object from one place to another what part of its environment do you have to bring along with it in order for it to be understood see in theory sending an object let's say we send objects see across

**2:14:20** · well si may not be terribly understood on the other side on the other hand it's still active so if your network has the rule as ours did it park that whatever an object shows up and its class isn't there its class a clone of its class gets sucked over with it so you compare that to sending a data structure which is sending bits and how fragile they are

**2:14:50** · because you're not sure that there are procedures at the other end to know them here you're ensuring that either nothing at all happens or the right procedures are actually automatically sent along and so you can it's remember that story I told the beginning of the Vosges 220 that's exactly how the training command protected their their tapes you just make sure the procedures go along with them and it's quite easy using these phantom objects to make that automatic so you can think of the network of objects as constantly rebalancing itself

**2:15:21** · as to where the code actually is I think I believe that's true and from

**2:15:42** · Park yeah it's written it's been written up yeah well my message to you is this is the same reason I told you the Arthur Andersen story is they have exactly the same you know their their attitude to me

**2:16:01** · was kind of interesting they said they went to several phases and this is probably you're in one of these phases right now as well it went through one phase where the first phase with objects it was like magic God all the things you could do code is so small the second phase was complete disillusionment when they realize that for instance small talk which they were using as a model didn't scale they said you know what is

**2:16:26** · you know is this the emperor's new clothes or what and I said no it's just because the part of the reason small talk wasn't built to scale was simply because we were able to do an enormous amount with very tiny programs and we're designing for children anyway and when you want to use these ideas and they're in the in the large I believe that you have to do a little bit more then you can go out on the street and buy that's what I'm my message to you is that and

**2:17:00** · it was to Arthur Anderson that you know a lot about what it can once you've learned the object-oriented style which I believe is the right way a protecting state of the right way of making components the right way of making urns superclasses right way of sharing there's a whole bunch of right things about it in order to make it work in the large you then have to sit down and protect that by coming up with a configuration language and you can do yourself a lot of good by doing that

**2:17:30** · carefully because the configuration language can include languages that you already have hundreds of programmers that know how to write in in other words the configuration language can be a way of protecting programs that are already written in COBOL and Fortran as well as

**2:17:48** · new programs written in Ada it should be a really separate way you think of isn't and the architecture is opposed to the bricks of actually building the thing the architecture to me rules life is an architecture it wasn't as early as the turn of the century there are people that thought memory there's the stuff called protoplasm written about in books was supposed to be some special kind of material that you can build living things out of because people didn't believe that ordinary chemicals could bake you could

**2:18:19** · make a living thing out of it wasn't really until 20 or 30 years ago that it was really shown quite definitively that we actually are just an architecture in fact we know now that the atoms in our body are actually recycled about every seven years so you and I as individuals

**2:18:39** · are patterns in space the material is moving through we don't have the same atoms in our bodies that we had seven years ago we are a pattern and interesting things made out of the patterns you have - you know I have to have some understanding of the bricks and stuff which I think everybody is getting now but at some point you'll realize that the power of this stuff isn't from what the bricks do and that the bricks are have integrity the power

**2:19:08** · of the stuff is from the architectures that you can create and the architectures have just been scratched now up until really a couple of years ago there probably been less than a god I don't know 100 or 200 people over two decades actually doing this stuff so it's the and the problems that have been

**2:19:32** · worked on have tended to be small the reason I believe that object-oriented programming works well in the large is simply because it works well in the biological world and I see no reason why it is going to fall down in any way when we go large but in order to in order to make it work we have to either look at the biological world war which is the

**2:19:55** · biological reason of urging can a configuration language or we have to go after for other reasons of just realizing hey this stuff gets fragile at this point what do we actually need and the answer is a configuration language

**2:20:14** · but I think that there might be some immediate benefit these ideas of object-oriented design where you have existing systems that because it would nature the islands of automation approach have gotten tremendous ly complex and you need to be able to characterize various things possibly the concept of objects

**2:20:38** · to help you do that and to help them understand what are the objects of one of the Linc right well I'm trying to think of it was Rudolph's irken that said you can't if you want to be a piano player you should spend half of your time reading books and his his point was is that if you

**2:21:02** · spend all of your time just learning to move your fingers you have not absorbed any contact the context necessary to play any real piece of music that there's there's something else besides the practical application of the of the technique and I think that the somebody was asking me at the break it was a very good question actually which is and the

**2:21:26** · it had to do with she doesn't sounds like objects make you do a lot of design and anyway but you know it wasn't said stupidly at all it's just said isn't that hard and I said yes it is hard and it's hard whether you've got objects or not the main reason is that objects provide both an excuse for designing and

**2:21:51** · they also give you a framework for holding the design every little bit of design you do you get rewarded in an object-oriented system for having done it you really get rewarded where's it's hard to get rewarded in a in a procedure data structure system because often the design has nothing to hang itself on there can be local good things but you can't propagate the design forward the way you can in an object-oriented system

**2:22:21** · I don't know because I haven't hung most you know Edward de Bono's says the problem with most American companies is that when they get in trouble they redouble their efforts so you know the idea is that we're basically too industrious for our own good and once we learn a technique we tend to put our head down and just fight like mad rather than trying to smart our way out of it like I said I particularly efference to

**2:22:49** · me I had actually seen these techniques and actually programs using some of these techniques for five years for a period between 1961 and 1966 before Simula hit me on the head and hit me on the head just because at that point I had a problem that was much harder than I wanted to program it was the first time I was willing to actually see that was when I was going through insane minutes and I said to myself holy cow this is so you know there's just nothing

**2:23:20** · here all I have to do is this and that I'm done you know all of these things fall in I was actually programmed in the game of space war you know which is one of the first video games but it wasn't even a video game back in the in the 60s and they're all of these it's very hard to do in an ordinary language because you have all of these spaceships and you have planets and you have torpedoes and when I was looking at Simula I was trying to get figure a way out of doing

**2:23:48** · this I didn't want to do it in 30 pages of alcohol or so and I was trying to figure out a way and all of a sudden it occurred to me that every single thing in space war and Simula was the same thing the only thing was different was the costume they were wearing the planets were the same the spaceships were the same the torpedoes were the same there was like one line of code difference in each of their behavior and they all had to obey Newton's laws they

**2:24:13** · all were interacting with each others in exactly the same way it was trivial and I wrote that program and a half a page of code and I never looked back since because the you know the that is the thing if you don't find this folding up of complexity into simplicity then

**2:24:32** · either you're working on a truly hard problem which really really do exist or there's probably a rotation of the situation that you haven't examined yet you're probably still thinking the old way in thinking in terms of particulars rather than generalities we're so used to programming up each specific thing that's hard for us to think of avoiding that then we only have to to program up

**2:24:57** · one general thing and then write a couple of lines of code for each of the particulars and we're done that's a really good test in this stuff and it accounts for the religious fervor of people who have had this happen to themselves as after pounding your head away on a system to have it fold up like like there was nothing there it is the

**2:25:17** · most amazing thing they have an operating system go away to something that is practically a clock which is what it is in an object-oriented system because what do you need in an operating system well once you've got the ability to sustain objects and stuff like that you practically only need a clock you only need to get control routed around and everything else is written essentially as an application on top of that kernel that's a very modern way of looking at things and it's a terrific way of thinking about doing stuff

**2:25:56** · okay yeah that's a very good question some of these idea a relational database everybody knows what a relational database is right okay so the the there

**2:26:16** · are several things a relational data an item in a relational database has fields it has some of some of the things and depending on the data dictionary that the relational database wants to sustain you can occasionally do some integrity constraints the most relational database is friend for example is very difficult to do the following thing in a data record and that is make sure that Joe

**2:26:42** · blows age is always the right one when you ask it because when you ask somebody's age in a relational database what it expects to do is to go to a field and find a number and bring it back to you right in an object system what you would have there is you'd sent the message age to the object and it

**2:27:05** · could just go to a field and bring back a number but a smarter one would actually look at the guy's birthdate and compute his age for you right then and so you'd always get the right answer every time you asked aged you would always get the right answer from the object you would not get it from the relational database unless you're doing careful updates that's one difference the other difference is that in a in a relate in any kind of a relation it is

**2:27:35** · extremely difficult to embed code although people sometimes do by embedding it on the outside of the database rather than on the inside with it so for doing a dynamic simulation for instance is quite difficult a good way of understanding where relational databases is going to go comes out of one of your own products and an industry that McDonnell Douglas is one of the leaders in Amanda's CAD CAM CAD cam

**2:28:01** · can't be done on relational straight relational databases there simply aren't enough hooks in there to deal with all the things it's not you can't store the data so you can't deal with all the other things that the relational database database can't store that cad/cam requires so object-oriented

**2:28:23** · servers like the gemstone or this the ontological rated servers are ones that the CAD cam industry is going towards now these allow you to do all the things that you're used to doing with relational database but also give you this extra level of abstraction that you get from objects what's nice about it I

**2:28:46** · think for people worried about transitions is that there's a fairly reasonable transition almost everything gets better when you go to an object-oriented database server for instance I think most people would like for instance to have joins be real things rather than a made-up thing for

**2:29:07** · the moment and they can be in an object-oriented database most people would like to have views be things that you can add it back through or views that you can view whereas a view in a relational database is an extremely weak notion of the whole notion of what view is where in an object-oriented system is extremely easy to have a view look like

**2:29:29** · the set of stuff itself and so you can put another view on top of it and cascade them and so forth and all of those things are being done right at this moment with object-oriented servers excuse me yeah I think for also because

**2:29:59** · the the tutorial it's going to happen in a couple of weeks is going to be one of the people from this digital company the company that does small talk V I want to just mention again that besides the fact that it's cheap small talk V I think is only $99 on the IBM PC and 150 on the Mac so it's the cheapest small talk they have by far the best manual none of the

**2:30:24** · other manuals are even in second place because they actually don't believe that you understand about object-oriented programming in the beginning of the thing they actually write the manual there's a splendid tutorial hands-on tutorial for getting versed with all of the object-oriented lore and sub-classing and building a very powerful little application another thing that they give you for free in

**2:30:51** · with small talk I don't have any stock in the company I haven't made a cent on small talk but what they do is they also give you for free a full-blown implementation of Prolog Edinboro Prolog written in small talk okay and just to

**2:31:13** · give you an idea this whole implementation of Prolog written in small talk with its own user interface its own browser its own debugger and everything else is less than 20 pages of code okay and if you've ever tried doing anything like a programming language like this is a convince err okay and it uses object-oriented programming for

**2:31:33** · what it's really it uses the fact for instance in small talk everything is an object everything is an object and protected including the things that you think of as stack frames and ordinary languages that you can't even get to how is it the bugger written in small talk well this stack frame is simply an object so you simply write a method that allows you to ask the guy well what do you what do you have here what do you have here can you advance your PC what see I mean I mean the debugger is like a

**2:32:03** · page and a half long because it actually is part of it's just a subclass of class stack frame prologue is so simple in small type because they actually take the stack frame as an object and implement prologues control structure directly in using the small talk using

**2:32:23** · small talk sone stack frames but using a non stack protocol which is what the Prolog backtracking requires this is gorgeous stuff and it's done completely without impinging on the integrity of small talk itself the two systems are integrated together and so you can do Prolog unifications into small talk variables and vice versa so it's a

**2:32:47** · perfect example of what an embedded system in an object-oriented system looks like they give it to you for free you can do real work in it if you just want to use it but people are really interested in why this stuff is powerful that's an example of where the power of it is actually concentrated and used by some design thinking here's another one most object-oriented languages don't have a complete model so for instance when Simula for instance has classes so

**2:33:21** · you have a class paragraph or a class string but Simula doesn't have classes be objects so if you have an object-oriented one of the choices you could make is to have everything in the language be an object why not that means if there are things called classes there must be a class class a class whose instances are the classes okay that

**2:33:50** · sound shaky let me just let me just draw it cuz it's

**2:34:09** · so I'm going to draw classes in red so this might be integer might be fraction might be paragraph this might be document this might be file and there are instances I'll draw in green this might be three and this might be for this might be three quarters this is a

**2:34:40** · paragraph of text and so is this one this is a whole document this is a whole file here's another one they have lots of instances of these classes they've been on Simula these red things in an ADA these red things aren't around at runtime they're like macros they just help create the structures underneath that these green guys can work with but in small talk these are really objects and

**2:35:11** · the question is is if they're objects what are they an instance of what is common to all of these things somebody tell me they're all a class so what what's common to all of these what do they do they all make instances right I mean they're the thing that holds all of the information that's necessary to make multiple instances and so you can imagine that there might be a thing called class class whose own instances

**2:35:48** · are these guys okay that sound reasonable why not okay

**2:36:03** · down remember I can subclass what do you think it might mean to sub class class class let me do that let me use another color here so I'm going to sub class class class here look just in general what is the

**2:36:31** · sub class of class class going to be able to do it's going to no it's not gonna make some classes it's gonna make be able to make classes like these guys plus something else then I'm gonna add right there because anything that's of

**2:36:48** · class class is going to make classes so any subclass of it is going to make classes now here's an example of something we did at parc many years ago we wanted to do a system in which every instance was data-driven okay in other words we wanted to do a data flow system

**2:37:13** · inside of small talk in which the every thing that happened to some variable in an instance could be propagated to the next thing that meant that every instance had to have besides the places in it that an ordinary instance has here's what an ordinary instance looks like it's a thing that has slots in it for holding values and plus what we wanted to do was to tack onto that some

**2:37:47** · pointer information that would link all of these guys together so we'd actually have a data-driven network here now how do you suppose we did that sub class class class right the various places I could do that but what if I did it up here and put that information in here and now every

**2:38:14** · every class that this guy makes whatever it is is going to have the property that the instances of it regardless of what these guys are as I go along making up new classes for this kind of thing and that kind of thing every one of them is going to have the property that the instances are going to be instrumented this way see how high that change was made what I did is I actually change the meaning of what class this was in the

**2:38:43** · system with one operation I just subclass a very very high-level guy and all of a sudden I got essentially a new small talk with a completely different strategy for how these things strategy independent of what the new classes are going to be okay that's the power of this stuff it's not the direct stuff

**2:39:06** · that you can do that's so appealing now it's the meta stuff that you can do that's so incredibly powerful because you can literally when you have a new idea that's important you can literally distribute that idea over the entire universe with just a few changes in a system like this well let's I think we're about done let me let me give you a one of our favorite

**2:39:33** · stories and as a winch and Winston Churchill story widget Winston Churchill jokes always have them at a party after a bunch of whiskeys and I'm sure everybody knows the one of the he was incredibly drunk and a woman came up to him at two o'clock in the morning and said mr.

**2:39:55** · Churchill you're disgustingly drunk and he looked at her said and you Madame are indescribably ugly but in the morning I'll be indisputably sober so this particular this particular Churchill joke a little earlier on the party he hadn't had quite as many whiskey's and the hostess of the party came over to him quite agitated and said mr.

**2:40:23** · Churchill I'm just really upset I don't know what to do I saw a famous Earl over there steal some of my silver salt shakers what should I do Churchill thought for a minute and stuck his cigar in his mouth and went over to the Earl along the way he took a salt shaker himself and put it in his pocket and we got over to the Earl took it out of his pocket and said I think we've been noticed perhaps we should put these back so that's my version for why we won

**2:40:54** · World War two in other words if you want to get people to do something to go along with you you have to involve them in the same conspiracy and object-oriented programming is a kind of conspiracy that people are just finding out about it I hope I've been able to involve you in a little bit and I hope you will involve others thank you \[Applause\]