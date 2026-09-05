---
source: https://www.youtube.com/watch?v=hxXmTnb3mFU
author:
  - "[[Modern Software Engineering]]"
published: 2022-07-31
created: 2026-05-17
status: 5_Watching 👀
about:
  - "[[Agile]]"
  - "[[Scrum]]"
tags:
  - video
participants:
  - "[[Allen Holub]]"
---
![](https://www.youtube.com/watch?v=hxXmTnb3mFU)

[[Allen Holub]] is a computer scientist, author, educator, and consultant. He has written extensively on the C, C++, and Java programming languages, and on object-oriented programming in general. Allen is well known for his uncompromising view of agile adoption and in particular the assumption that Scrum is the only agile approach. In the past he has said “[[Jira]] is the work of the devil” and **“Agile has become a priesthood”.** Allen is engagingly forthright in his views.
  
___

- people don't understand what Agile is about
	- ? what if I give you something in **2 weeks**
	- ..
- systems thinking: not just dev department
	- has to be integrated
- Big organizations can't change
	- introduce TDD there, not real agile
- Cross-functional teams are important
- Metrics are problematic - they are focused on output and can easily force people to focus on the wrong things
- & No metric for **value**
	- no number for value
- Lean isn't applicable to software development
	- **rework** is bad? We do that all the time, rollback ➰, :LiPaintRoller:
	- [[Kaizen]]
	- "we need intelligence"
	- people are afraid to say what they mean
	- Life coaching isn't Agile coaching
	- [[Allen Holub's UML Quick Reference]]
	- Decisons need to be made at the place the work happens
	- **Lean**: eliminate waste
	- Teams create the processes
	- People make the decisions
	- sustainable pace: how to get that?
		- Managment support
		- team setup - self-organizing (how to get that?)
	- Data-driven is crap
	- Talk to people 👯
		- get feedback
		- talk to 1 person -> 5 -> 50 -> 100
	- ..

___



**0:00** · welcome to the engineering room this is an additional series of longer form conversational style chats with influential people from software development and it's meant to complement the regular the more regular channel content this series is sponsored by equal experts equal experts is a product software development consultancy with a network of over a thousand technology consultants globally they increase the

**0:26** · pace of innovation by using modern software engineering practices that embrace continuous delivery security and operability from the outset my guest today is alan hollow a computer scientist author educator and consultant

**0:41** · he's written extensively on the c c plus plus in java programming languages and an object-oriented programming in general he also writes about and teaches agile development and has written for many influential magazines and journals over the years including one of my old favorites the sadly miss dr dobbs journal and uh alan thank you very much for joining us today you're welcome my pleasure um i i i looked up some of the stuff

### Agile is Broken

**1:09** · some of your writing some of your videos and so on in kind of prepping for this and one of the things that resonated with me um that i like a lot and and as we were discussing before this episode one of the dangers of this is that we're going to be agreeing too much but you in one of your videos you quoted andy hunt who said that agile has come to mean doing half of scrum badly and using jira which i really like i i i

**1:38** · i laughed out loud when you said it so so what what what's broken about agile what's broken what's not broken about agile's problem you know i i still use the word um unlike some of some some of the people that i know that are kind of high-end agile people including andy right is that the the um who sign the agile manifesto um they're avoiding the word entirely is that it's turned into such a steaming pile of garbage that nobody

**2:09** · wants to touch it including the people that invented it so that's a problem you know and the the um i'm still using it because well i'm i work as a consultant and i have to use the word or else nobody will hire me but the um the thing that i do

**2:24** · has essentially nothing to do with what people think of as agile anymore yeah you know and i i don't know how many times like on twitter or some platform like that i'll see somebody saying i hate agile it's awful if we only paid attention to each other as human beings and worked small and did things iteratively we wouldn't have a pro you know i'd that'll work great we don't need any of this agile stuff and i'm going you just described this agile what's going on right

**2:52** · so you know people have come to uh basically as andy says it's half of scrum badly and jira is that it's turned into tools and bad processes and all this other stuff i tweeted the other day and i was probably being a little bit too sarcastic but i said you know i really have nothing against scrum at all his scrum is just fine if we uh all we have to do is get rid of the sprint and the

**3:16** · scrum master and the product owner and the backlog and the sprint review and the notions of accountability and the notions of commitment and the certificates and i have nothing against scrum at all

**3:35** · that's kind of my feeling right now is that you know the truth seriously the if you read the scrum guide it's not going to do much damage yeah it's mostly harmless to use douglas adam to go douglas adams is that scrum as described as essentially nothing right it's a lightweight rapper and a few ridiculous meetings that you're supposed to go to and okay fine if you really want to do that i don't care um it's all the stuff that people have

### Scrum is 'Mostly' Harmless

**4:04** · added to it over the years that has made it awful right and the the the my main issue with it is that it's so lightweight that you can just get rid of it is that you know xp works fine without scrum in fact scrum was originally invented or pushed in the original book you go go get schwaber and beatles original book on scrum um on the the on the cover of the

**4:24** · book it says scrum is basically a wrapper that you can put around extreme programming in order to make it more palatable for management and that's all that's all that scrum was when it started out and if you look at it that way well fine but um the point is is that scrum xp without scrum works fine and scrum without xp doesn't work at all

**4:45** · so what are we doing you know why why bother and the uh i don't know is that it's a source of frustration for me obviously and of course i'm going to be starting unsafe \[Laughter\]

**5:05** · i i i quite like i quite like martin fowler's description of say shitty agile for enterprises yeah exactly yeah everybody else i i i i i gather from the way that you talk obviously i agree one of one of my takes is that is that one of the reasons why why agile

**5:25** · why scrum kind of became synonymous with agile because it was the easiest one to cheat as you use i i think that's kind of saying i don't think it's so much that is what is the original intent was to make something that actually was agile more palatable to the business and by that what they mean is more acceptable to somebody who doesn't really understand or want to be agile yeah that's that's why it exists that's the very reason for it to exist

**5:54** · so of course people are going to then run with it because there's there's a there's then a focus on something that you do around agile rather than being agile itself yeah it might make sense so as soon as you start focusing on scrum rather than on being agile you end up focusing on the wrong things you focus on things that make it palatable to management rather than focusing on actually being agile yeah yeah it's built it's built in

**6:19** · it's part of the it's just you know you can't do scrum without that it's it's a it's it's built in and you know there's a bunch of stuff in scrum now which is in my cynical mind i'm going this is just pandering to large corporate clients in order to sell more certificates yeah things like the notions of accountability and commitment that's just appalling to me i hate it right so

**6:38** · they used to it's quoting bob marshall right is that he thinks of this as the language of violence and i kind of agree with that right it's you know accountability is you do what i say here and i'm going to hold you accountable for that the the that stuff was deliberately removed from scrum for for years another

**6:57** · put it back and that's kind of appalling why did they do that and all i can think of is well we need to sell more certificates and our big corporate clients are really big on accountability so back it goes into the scrum guide and you know and then all of the scrum trainers are parroting that language i just it drives me crazy when a scrum trainer just quotes the scrum guide chapter and versus if it's the bible and they talk about about inspection and adaption and

**7:26** · i go that's a weird phrase whoever says adaption what does that mean right and it's not you know an inspecting adapt has been part of agile from day one so scrum claiming that annoys me but the kind of quoting of the scrum guy back at me just drives me crazy

**7:49** · i'm gonna i'm gonna quote you back at you because another one of the things that i picked up that i really liked you said agile has become a priesthood where the priests don't understand the rituals they're telling people to follow i think that's exactly right you know and well some of them do that's the annoying thing right i know a couple of uh of the scrum.org trainers

**8:08** · um without exception i really respect them they really know what they're talking about they really understand agile properly but they still fall back onto this chapter and verse thumping you know scrum guide thumping almost biblical approach to it and i so it frustrates me that somebody who's basically good would then do that because that's what ken schwabber is requiring right is that

**8:34** · he they have to use his material and they they present the stuff that he tells them to present and how agile is that to just mimic something that somebody else gives you um i i almost wish that all of these people would just disassociate themselves from the scrum

**8:49** · organizations that they're associated with but they don't do that because because it's a business decision and in other words they're saying there's a huge market for people doing scrum training so i'm going to position myself as a scrum trainer and that i i don't have any i i can't find any fault in that there's nothing wrong with that at all right everybody's got to make a living and if they're going to position themselves as scrum trainers that's fine but i still find it frustrating is that

### It's a Business Decision

**9:10** · because it's kind of pushing but when you have good people who know what they're doing pushing something that i think of is not good um it's it's sort of driving the industry in a direction that i wish it was not driving him so um yeah it's it's it's it's a difficult it's a difficulty when commercial pressures don't allow align well with good outcomes it's it's well that's the

**9:32** · problem with scrum it's the problem with crime in general and safe even more so right is that it's as soon as money gets involved it corrupts everything yeah and i think a lot of the flaws that i see in scrum were driven by money it was you know somebody saying well we have to make this more

**9:55** · palatable i keep using the word palatable but making it more palatable to our corporate clients because that's where our money is coming from so we're going to modify scrum to make it something that's more acceptable to the big corporations because that's where our money's coming from as many as driving is driving the whole process in the direction of the status quo rather than the radical thing that agile is yes so so i wanted one of my i i've been fortunate to be close to the birth of a few good ideas

**10:26** · you know over my time and and my biggest impression is that you know the the people that came up with the ideas their their their primary response is that's not what we meant nearly always and and and when it's an important idea as i think that well i know you and i both believe that agile

**10:47** · is um then it feels quite painful i i mean i you know i i still use the term agile because i'm a consultant too but you know i i think i think of myself as kind of a card-carrying agilister you know

### I'm an Agilista!

**11:09** · i'm a believer i i think that it's it represents a significant step forward in understanding and practicing software development i i i i read i read this amazing book a few years ago which is about physics it's called the beginning of infinity by david deutsch and in it he expresses

**11:32** · the way that some ideas kind of open up an infinity of possibilities and i think agile is one of those if you think if you think of the limits of software development something like a waterfall approach to you doing all the big upfront design thing he's fundamentally constrained however smart you are

**11:49** · because you've got to get you've got to get all the decisions right at the start when you don't know anything agile is completely open-ended and an evolutionary approach to incrementally developing a system which means that you can you can build systems that you can't even imagine when you start yeah but that scares the pants off of people it does

**12:13** · yeah right but you you talk to some business people more they want a certainty yeah and they can't get it so they live in this fantasy land of imagining that they have certainty when they don't but they still keep demanding it and then when they don't when things don't work out the way they want them to they either drop into blame or they drop into craziness yeah so you know estimation right they say well that estimate was wrong so we have to get better at estimation and i'm going you can't nobody can get better at estimation it's not possible yeah right because something always comes up you

### Get Better Estimates v Get Things Done

**12:44** · know if something always comes up then whatever you estimate it is based on the wrong thing you're estimating the wrong stuff yeah and they say well we'll re-estimate and i'm going have you read any books on lean in your life is that we do some work and then something changes and then we do the work over again and then something changes and we do the same work over again and over and over and over and that takes up huge amounts of time which makes your schedule slip even further yeah and i again it's kind of crazy-making is that the the um you know agile means agile literally and the

**13:17** · they don't want that though they want it to be something predictable and rigid and and controllable embracing choices where there is no where control is not possible right yeah so there you are and it's a it's a you know often i find that

**13:36** · when i come in to a company as a consultant um depending on the company and the size it's actually possible to get people to understand and start doing agile stuff it's just that they never understood what it was the problem is not evilness their evilness and that's the word the problem is not evil the problem is lack of education so they don't really understand what it's about and often when they do understand what's sort of about what it's about they actually prefer it over what they're doing now in other words somebody who's like an estimated guy saying i have to have an estimate you know when are you going to deliver and i'm going well

**14:09** · why are you doing that and the answer comes back typically as i'm not going to invest five million dollars into a project and not know whether it's going to work or not in a year yeah so i've got to have estimates so that i can check progress against the estimate to see if we're going to deliver and i'm saying well what if we actually deliver

**14:26** · yeah what if i give you something in two weeks you can look at it and see if it's right or not and we can adjust it and if not we can move on to the next thing and we'll do the most important stuff first and that way you know that you're not going to fail because the stuff that really matters that's done yeah um often people say gosh that would be great let's do that and then they say what do you call that i go well that's agile no no no that's not \[Laughter\]

**14:55** · but the point is is that once you understand that way of thinking it kind of makes sense but the larger the organization the harder it is to get people to work in a different way than what the organization is pushing is that the system i'm a big systems guy the the agile is a system it's an organizational system and it encompasses the entire organization not just the engineering department or a team or something um the problem of course is that with

### Making Change in Big Biz

**15:24** · big systems like that is that they it's almost like they become sentient as they take on a life of their own that's completely separate from any of the people in the organizations the people leave people come and it doesn't matter the system kind of forces the people into the mold of the system and that happens even up at the sea level so you know the the in some organizations a new ceo can come along and change things but if the system is big enough and firmly

**15:50** · enough established even a ceo can't change it so that's a the only the only solution to that is basically to rip everything apart maybe put it back together differently maybe leave it and leave it apart but not many people are willing to do that particularly with a big corporation for a reason you know i understand the reasons so i've kind of given up on those guidances that the the big organizations

**16:13** · the systems that they work in don't allow them to change in any kind of significant way and the most i can do as a consultant is nibble around the edges has introduced tdd and things that will give them a five percent improvement maybe or a two percent improvement they're not going to get the you know the times x improvements that you would get if you really worked in a natural way and that's just part and parcel of the way that kind of thing works and that you know and often i i see those those same companies move backwards i i had a

**16:42** · had a consulting gig a few years ago that was for a company that was so awful that it's given me an almost infinite supply of stories about how not to do things um um they were moving backwards as fast as they possibly could but when i went in there they were doing scrum badly um but at least the teams were

**16:59** · actual cross-functional teams and i worked with them for about eight months and at the end of the eight months the the cto was forcing them back into having a front-end team and a back-end team in an architecture team and a ux team and i was going this is crazy all this is going to do is slow you down and they they would they were

**17:19** · well these were people who said we hired you to teach tdd so shut up if you talk about anything other than cdpg you are out of here and the person who was running the agile transition was a tyrant who had come up with this kind of wacky version of scrum and she helped she held the the workers in

**17:39** · contempt she was always rolling her eyes talking about oh learned helplessness where does this learned helplessness come from and i'm going this is not learned helplessness this is actual helplessness it's because you keep telling them what to do yeah as long as you're telling them what to do they can't do stuff on their own so they don't want to do stuff and you're punishing them when they do so why do you expect them to suddenly be agile if you're going to punish them if they're action um um she fired me

**18:05** · basically when i said that and then the person i was doing this as a subcontractor and the main contractor talked to her and got her to back down from that but basically if you disagreed with her you were fired that was the that was the modus apparently around there and it's it's that was you know it's an extreme case but i see stuff like that happening all the time and it's again it's frustrating um but there

**18:26** · we are right that's the reality of the way a lot of companies work it is yeah and and and there is there are some where there's just no hope of change as you say one of the things that i recognize though um very strongly is i'd agree with you i i think it's off it's often about education

**18:47** · no nobody in that kind of dysfunctional organization nobody's enjoying it much nobody thinks they're winning usually again unless they unless unless they're really crazy i i did i didn't come across one guy in an organization we did an exercise we we were doing some based on some of the accelerate stuff so we were doing an exercising kind of the western model of um organizational uh

**19:14** · evaluation and we kind of evaluated and he he just kind of scored everything to try and make sure that he just got the best score he's got everything was brilliant everything was brilliant they were releasing software kind of once every six months and had a huge backlog of bugs every individual developer was was a silo working on his

**19:33** · own but he thought it was great but but usually that's not the case usually people you know know the problems and i think a huge huge part of agile is giving allowing the people that are in the work to make the choices about how to do the make the work better well yeah in individuals and interactions because that it's all if you're not happy if you're not happy you're not doing it right if you're not having a good time you're not doing it right yeah and the the

### Individuals and Interactions: How Much Fun Are You Having?

**19:59** · that's probably the best indicator you can have about how agile the organization is is how happy is everybody it's it's that's it's funny you should say that i've not heard anybody else say that before but that's that's one of the things that i've said is for years one of my consultants tricks is going into an organization as a consultant you know you need to get that quick take on where people are at and you know to be able to start landing

**20:21** · in delivery value one of mine is absolutely that how much fun are these people having that yeah you know did the team feel like a team are they you know enjoying being one another's company are they worried about being punished are they worried about deadlines right all the things that make it not fun tend to be dysfunctional from an agile perspective yeah it's it's it's one of the things one of the things that i i'm i i don't

**20:47** · know i don't know what you think about the accelerate metrics and and that stuff but one of the things that i i really like about that is you know as well as saying you know doing certain practices allow you to do you know deliver better software faster and all those kinds of things it really focuses on things like you know your work-life balance and how much fun people are having how much they enjoy their job and they're committed to it those things matter a great deal they're not they're not only side effects of working

**21:16** · this way they're part of working this way because when people are having thought and are engaged they do a better job yeah so the the you know the accelerate metric the problem that i have with accelerate metrics is that they are still metrics and i have a problem with metrics in general and i have a problem with the notion of productivity i brought this up on twitter once and nicole came down on me to the point that we haven't really interacted since then

### Abuse of Accelerate Metrics

**21:45** · that how dare you say that this doesn't have anything to do with productivity and maybe we just have very different ideas about what the productivity meant um in fact definitely that was the problem and unfortunately we haven't had a discussion on inside so who knows but the the um i don't think that i think that the metrics are productivity metrics if you're focusing on the ops side but when you start focusing on the dev side it becomes much fuzzier and look at something like

**22:17** · deployment frequency is the deployment frequency on one hand can if it's if it is low it can be an it can be an indicator an indirect indicator so that's another problem with the metrics they're all indirect indicators they don't they're not actionable they don't tell you exactly what to work on but you go okay we've got a low deformity frequency what what does that mean and it could mean that your stories are too big it could mean that you have too much work in progress it could mean there's

**22:41** · some kind of uh dependency that needs to be resolved there's lots of reasons why that could happen the fact that it tells you there's something here well that's good right i have nothing wrong with that it's kind of like like mutation testing right his mutation testing is great but it doesn't really tell you much it says you know there's something wrong figure it out right yeah and the the um the um

**23:05** · so as long as the team is treating the metric like that and as long as the metric is not escaping to management then they're great but when the metric skate escapes to management they go our deployment frequency is low crack that whip tote that bail right is that we you know you've got to work harder and you've got to work faster you've got to start working overtime in order to bring up that deployment you're not going what is going on here right so it's like any metric it's too easy to abuse

**23:33** · and when you do abuse it you introduce dysfunction and i really i'm nervous about that so metrics in general i i tend when i do things as a consultant i tend to avoid hard metrics because they're it's too easy for them to go off the deep end with them and start

**23:52** · pushing people to do the wrong things focusing on output instead of outcomes and that kind of stuff and metrics are almost all output related particularly the lean metrics and though again i think they have real value inside the team as soon as they start escaping out to management unless management is really kind of enlightened management and understands how lean works and that's very rare um they're going to be abused is that they're going to cause damage and accelerate metrics are no different than any other metric that way it's that it's uh i i so i i i mostly agree with

**24:23** · you on that but oh good we found something not to agree the the the slight the slight cavity the slight cavity so i certainly agree you've obviously worked in some really dysfunctional places

**24:41** · if things are going well they don't call me but but the the uh i i think one of the one of the things that i like about the uh the um the dora metrics is is that that slightly indirect picture so um so you know

### Throughput, Stability and Value

**25:07** · you mentioned you mentioned the deployment frequency you can you know so it doesn't it doesn't make a value judgment on how you fix that and it doesn't tell you which thing to fix but if you've got a good score on deployment frequency if you're doing well on deployment frequency then your life's probably easier from a continuous delivery point of view

**25:29** · well the weight the way the way the way that i described continuous delivery is working so you software is always releasable so one of the ways that that means if you're working in an xp style continuous integration frame is i want to commit my code it's not a finished feature but i'm happy for it to be deployed into production right and you know if if that's happening and it doesn't affect the way that i'm working that's quite a good place to be because i'm getting very clear feedback about where i am

**25:57** · i've seen it not be a good place to be right because the deployment frequency ultimately is a function of throughput and as soon as you start focusing on throughput you're focusing on output and i've seen again maybe it's because i work for screwed up organizations but many times what i see is

**26:14** · people pushing garbage out the door faster because they're being judged on something like deployment frequency that's that's that's the biggest well that's that's the bit that i think is important is that you can't choose one of them you can't you can't choose one of the dora metrics you've got that that they are a set and so you don't well yeah there's no metric for value well there's no way to put a number on value i i i i think that's i think

**26:40** · that's fair i think that's an emission and but i think it's an understandable one so the the the the the stability metrics are our quality you know a measure of the quality of the software that we can produce through puts a measure of the the efficiency with which we can produce software of that quality and you're kind of balancing those things together it seems to me the one of the things that that i kind of like and and promote

**27:05** · is the idea of working experimentally and maybe the you know the the clearest in one of the clearer ways of thinking about that is kind of in sre type kind of terms where you're you're establishing an experiment and you're trying to define in the context of this piece of work how will i determine

**27:23** · whether this is good or not and that's where your value measures coming because they're so contextual i don't know i don't know how you'd come up with a measure of value that isn't contextual i don't think there is a measure of that i don't think you can measure so that's the first issue is people are always one and one right that wants some number for value and there isn't one but you know again you you look at

**27:44** · it's easy to have high numbers in the dorametrics and still be doing things really wrong right so deployment frequency is one mean time to recovery um well maybe the reason you have to recover is because you had an experiment the experiment didn't work right so um certainly being able to roll back quickly in that situation is good

**28:08** · but on the other hand um sometimes even that's not possible right the things like deployment frequency well sometimes it's better to move more slowly and produce more value and the which means you'll be deploying less frequently now less frequently to me means you're deploying weekly instead of daily or hourly but it's still slower

**28:29** · right and you deploy stuff and it doesn't work it's a disaster so you have to roll it back well that's sort of that's kind of because we're working in lean space with the door metrics that scene is bad right there's a lot of the thing about lean in general and dura is not doesn't

### Lean-Thinking & Kanban

**28:46** · escape this trap is that ultimately lean thinking is about running a factory that's where it all started so a lot of the basic concepts that underlying liens simply are not applicable in a software environment and even let's get something basic like a kanban board right a kanban board assumes that you have a linear process and you don't go backwards and that is the opposite of working in a natural way

**29:09** · right with an agile team is going to work in a very gestalt kind of way is that they'll they'll only be working on one thing at a time but everybody will be working on the same thing so now we have a kanban board with one column in it and what use is that and the the um the idea of you can't go backwards the rework is bad right classic lean waste rework is one of the classic eight wastes um but we go back all the time that's what agile is all about is trying stuff and rolling back and cycling around these loops inside of loops inside of loops inside of loops so as soon as you start focusing too

**29:40** · much on lean you end up thinking that things are bad that are in fact good now that's not to say there's nothing valuable there there's a huge amount of value there kaisen is essential right if we're and but that's another thing that agile teams get wrong right is they say oh we're having a retro every two weeks that's not kaizen right kaizen is continuous it's like you're always looking for problems and

**30:02** · as soon as you find them you fix them yeah we don't have a retro every two weeks we don't like sit on some problem until the next retro comes up is what's that about and the the um the we need intelligence maybe that's what i'm saying yeah yeah

**30:21** · we can't just kind of mindlessly saying lean is good right combat is good we've got to we've got to drop scum and do kanban and i'm going what's that about you can do scrum and kanban at the same time just fine is what's the problem and the you know and around and around and around is there's all this kind of weird conceptions about how to do stuff and it doesn't work i'm working on a new book right now people on twitter have been after me to write a book again i kind of stopped writing books because i got fed up with working that hard to

### New Book about What Doesn't Work, and Why

**30:48** · get some to write something and then only get a 10 return on it because the publishers took 90 for themselves and now that everything is electronic the fact that some publishers still want to take 90 percent for themselves drives me effing crazy yeah so but now that now that self-publishing has become a real option i'm sort of thinking okay i'll write another book and this the title of this book is hashtag no and it's sort of no estimates no sprints no projects

**31:16** · just kind of systematically go through everything that people do wrong in a in a faux agile shop and say here's the practice here's the problem here's how to fix it with everyone who with every one of those things and we need more of that and to too much of the coaching community is afraid to say no i pitched this book to o'reilly and o'reilly uh junked it they said it's too negative well somebody's got to be negative somebody at some point has got to say this is not working yeah

**31:49** · and you can talk about things that do work forever but that doesn't actually help people because they're doing things that aren't working thinking that they are and you need to sort of talk about what's not working as well as what's working and they just wouldn't have to buy that but that that's just reflecting an attitude that i see in a lot of the coaching community um when i say something on twitter that's explicit i mostly the the the hardcore coaching

### Twitter

**32:17** · people have given up on me at this point which is fine with me but back when i started doing that they would dump on me you know sort of on a you can't say that and you know but there's this corner case that goes so there are always corner cases so what

**32:32** · right a corner case does not prove the premise wrong yeah right all that a corner case says is that there are exceptions well i won't argue with that of course there are exceptions there are always exceptions there is no universal truth but if this is twitter there's 280 characters or two or three people and if i if i if i were to qualify every tweet with in my opinion it seems to me that in some situations this is true i wouldn't have any five characters

**33:03** · so i kind of took the position early on that when it came to twitter i was just going to say what was on my mind and if people want to discuss that that's fine yeah but um the the um all too often though in the community in the coaching community people are walking on eggshells they're kind of saying oh we can't really say it we believe this

**33:22** · we know this problem but we can't really say that because well i don't know why because you know they're thinking if we say it out loud people will rebel against it or something or you know interpret it as me throwing my weight around and i'm going you're being hired as an expert is that sharing your expertise is not throwing your weight around it's what you were hired to do yeah so i i'm i have kind of issues with a lot of the coaching community right now that and i have issues with them conflating life coaching with agile coaching is that the whole life coaching thing right

**33:53** · all the certified life coaches and all that kind of stuff yeah that has no relevance at all for agile coaches what we're coaching is is the mechanics of doing agile right we're like baseball coaches we don't care about people's lives particularly what we care about is how fast they can throw the ball and how accurately and whether they can hit it yeah you know and the if we spent our time saying well i really could help you be a better batter but let's talk about your marriage right

**34:27** · what value in my profile right but a lot of coaches are kind of doing that is that they've gone so much to the so-called soft skills i hate that term but they're going through some of the soft skills that they lose track of the fact that we're trying to develop software here guys and we're trying to develop software as effectively as we can and we're trying to develop software that provides real value to people so that the things that we're creating are the things that will actually make people's lives better and let's focus on that all right let's focus on that that's the more word that that that kind of brings

**34:56** · me to it to to thought there was so much stuff in in what you just said and there's all all different things that i want to talk about now but so so so i i i did a book on lean pub last year you should you should definitely do the self publish it's a nice experience yeah but um but um but there's so much stuff but one one of the things that i was kind of intrigued to talk to you about was um \[Music\] i i you're a very opinionated person as am

### How to Be Opinionated

**35:29** · \[Laughter\] i think that's important and it started me thinking about you know the so so how how do you make how do you make this kind of change in organization i've got the approaches that i use to try and help organizations become genuinely agile and genuinely

**35:54** · apply some of the ideas that we're talking about um um but it's hard and as you as you've alluded to i think just now it's not always about being being nice to everybody all of the time there's got to be some harsh truths at times and

**36:17** · there's the question of kind of leadership you know you you very you very vocally kind of talk about managers and and kind of leaders in organizations as has largely been dysfunctional which i would you know i see a lot of that too uh very often but there is a role for

**36:36** · leadership of technical teams there's that there are you know there's the necessity of some forms of training wheels to help people you know learn the skills that they need to get to the stage i'm not sure about that there's a role for leadership but there's no role for management yeah yeah okay and all too often people conflate those terms is the man the mere managers want to call themselves leaders makes them feel good when they're not leaders right you're not a leader you can't impose a leader on somebody yeah you know the um and the the

**37:09** · opinions let's talk about it let's start by talking about opinions i was reading a philosophy piece maybe in the atlantic i don't remember where it was a few weeks ago and the author was saying he was talking about somebody saying well i'm entitled to my opinion and the author was saying no you're not nobody's entitled to an opinion you're entitled to be able to back up your

**37:30** · opinion with logic and prove that your opinion has some validity okay but just having an opinion you're not entitled to that unless you can back it up and i kind of agree with that right and a lot of what's what i see is people

**37:45** · bowing to that i'm entitled to my opinion thing and they shouldn't right particularly if that opinion is some is a opinion that management holds and a lot of those opinions are kind of kanban or not camp kanamen style um fast thinking opinions yeah i just got gut feeling business tasks we have to do estimates that's the way businesses work yeah which is classic cannabin fasting

**38:10** · yeah i'm going no let's think about it yeah right so you know how do you do it though practically speaking kind of getting back to sort of the there are about five things to talk about and what you just said but practically hopefully i remember them all but practically speaking um what i'd

### Focus on One Problem - Try One Thing

**38:28** · like to do as a consultant is i like to spend a week or so just kind of looking around and i want to sit down with the sea levels that i want to say what's keeping you up at night what are the business problems that you're having what are the problems you're having with the way the business runs and then we try and narrow that down to the most important one and then we say okay how do we fix it

**38:50** · and i just focus on that one problem i'm not trying to do an agile transformation or whatever the hell that means right i'm just saying okay we have one problem usually that problem is we're not getting stuff at the door fast enough um not always but usually that's what that's the stated problem and then i say so let's figure out why and then you do things like put together a value stream map try and figure out where the bottlenecks are and look at work in progress and that kind of stuff and then i'd fall typically into my brother mode and it'd

**39:19** · go okay so our goal is to increase is to get stuff out and of course we want it to be valuable stuff there's no point just more and upward so let's try this one thing and see what happens and if that works let's try this other thing and if it doesn't work let's try this third thing right and sort of go with these sort of small incremental experiments that move you in the direction of the goal of getting more stuff out the door and people don't resist that

**39:46** · right because the what we're doing is we're focusing on a specific problem a specific solution that is inexpensive to try and so there's very little risk and if and uh some kind of goal you need some not necessarily a number but some way of indicating the progress is being made so if we see progress in that experiment that means this except the experiment succeeded and we can move on to the next experiment and that of course is an agile way of installing agile but the the um

**40:19** · that works for me i don't know if it can work for everybody but it works for me and too often when i see agile being installed it's like the you know big three consulting approach the deloitte approach we're going to bring in an army of people who are going to force you to completely change things into the way we say you should be doing working yeah and that never works right it's the for one thing there's no the the um

### The Toyota Thing

**40:45** · in one of the pop and dick books i don't remember which one but one of the lean software books the early lean software books they talk about the nume plant down in fremont this is down the road for me which is now the tesla plant and the originally that was a gm plant and it was the worst factory in the world just about by pretty much every measure the highest absentee rates their their output was

**41:08** · low the quality of the cars was awful and just go through every measure and marches toyota and toyota starts doing this length thing and um very quickly within six months it turned around to being one of the best factories in the world and they were producing extremely high quality stuff they had no absentee rate that kind of stuff and the toyota of course was doing the toyota thing is that they were saying okay well the decisions have to be made at the

**41:38** · place where the work happens yeah so we're going to empower the teams to come up with ways of working that are that work and we're going to give them a strategic goal they said which is right it was lean so saying your goal is to eliminate as much waste as possible and we don't care how you do it you're the ones that know how to build stuff not us so figure out how to do that and they would do it right and they all of the teams on the line came up with better ways of working so general motors being general motors they

**42:08** · said all right so we're going to document all of this which they do and then they took this giant sack of paper and plonked it down in detroit and said okay you guys are now going to do this and it was an utter and complete dismal failure it just didn't work and it's because what makes things work in the lean environment is the fact that the teams can make up processes that work for themselves yes

**42:33** · right and the whole quote agile transformation process that doesn't work that way right it's somebody telling somebody else what to do as soon as somebody tells somebody else what to do it's you failed and the the so the real way to do an agile transformation is to educate people to the point where they could make good decisions okay giving them options and explaining how things work and that kind of stuff and then allowing

**42:58** · them to make the decision that's the hard part from a management point of view is just training management to stop telling people what to do yeah but um the point is is that if you do that you'll have something that works well in your company is it going to work anywhere else no right that of course is the huge problem with scrum we want to bring this background to where we started half an hour ago is that scrum is a process that worked really well in whatever company ken schwaber was

**43:26** · working in 20 years ago yeah and i will not argue that worked well for him great will it work well for anybody else no probably not right because the the process has to be developed by the people that are doing the work and um the whole notion of agile as a process is uh sort of kind of fundamentally opposed to actual agile which is a self-organizing team self-organizing

**43:57** · right and there's no there's no it's not an accident that there are no actually there's only one actual practice in the agile manifesto right the only practice concrete practice in the agile manifesto as their retrospective and that's it the sprints and backlogs and all that

**44:16** · garbage right none of that is agile all of that is stuff that was added later later yeah it's just continuous improvement yes indeed so so i i i well and continuous delivery yeah so optimize with the continuous delivery of value it's valuable right but the agile part is the improvement part right they don't even talk really about delivery except that we should be delivering useful software to people quickly and i i agree with that right

**44:44** · continuous but they didn't do it continuous 20 years ago yeah back back when the agile manifesto was written we didn't know how to do that yet yeah so they were they were delivering every week or two which is fine yeah but the the um the um or maybe even every month or two right is that they actually bring out a month as a legitimate time interval in the manifesto i don't think anybody thinks that's a good idea anymore yeah yeah but but um the continuous improvement though that's what makes a company agile is the fact that they're constantly looking at how things they're welcoming

**45:16** · change right they're looking at how things are working and saying how can we change to make things better it's it's it's kind of related to what i was saying earlier about the um the kind of beginning of the infinity idea that the kind of thing i i think there are some

### The Agile Manifesto & Allen's Heuristics

**45:34** · deeper principles that do underpin um good great software development um and it's it's my i i think i you know we've already said you know the agile manifesto if there are any viewers that haven't read the agile

**45:58** · go manifesto go and read it it's it's it's it's it's far it's it's five five principles and twelve practices it's it's not a long read but you will understand better what it is that we're talking about you know i i i'm gonna do do a little bit of shameless self-promotion here but the um i find that people sometimes have a hard time understanding the ramifications of the magi of the manifesto because it's so terse yes i put together this list of heuristics like there's i think there's 27 of them or something

**46:31** · that basically covers the same ground but it's a little bit more specific about device and i think that might be useful to people too yeah hold up dot com slash h-e-u the first three letters of the word heuristics we'll we'll put we'll put it we'll put a link in the description yeah so but that's there's nothing in that list which is not also in the actual manifesto yeah

**46:53** · but it's just presented in a different way so you can get a somewhat different perspective on it because you know people look at the manifesto and they don't see the ramifications they say well it doesn't say this explicitly therefore it's not agile when in fact well but if you don't do this other thing you can't do the thing that's in the manifesto you know so we talk about sustainable pace for example in the manifesto how do you get that yes right so to get a sustainable pace well you've got to have management that supports it you've got to have you know

**47:23** · teams set up to be to be self-organized thing which of course it also talks about but the how do you get self-organizing teams in a you know so that's that's that's the thing that's the thing that i was i i guess i was i was kind of asking earlier on when i'm saying what i was saying about you know how do people like you and i

**47:42** · help others to um get the benefits that we think are available if you know so absolutely what you described you know let's you know we think we can we can work and we can solve a problem with somebody and you know but my my wife is not a technologist she she worked in housing uh in in the uk and

**48:04** · but she's a very agile thinker and she would act as a consultant advising companies on how to do some of this stuff for a while and she had a great idea which i i like to i like i nick from her which is what what can we do today that we can measure the impact of next week you know but what

**48:23** · what you know what's what's the small change that we can make and figure out whether that's moving us closer to we only where we want to be or or further you know a little bit like the the the microphone that's again that's sort of the rather improvement it is yeah that's right and again link in the description toyota carter we'll put that there as well yeah but i wouldn't say measure though i would say

### Not Data Driven?!

**48:49** · you need an indicator but that's not necessarily a measurement i'm nervous about the word measurement yeah i i i i i'm happy to concede that i'm talking loosely so so gathering feedback and interpreting the feedback is what i mean by measure and it doesn't have to be quantitative because the indicator could be people are happier yeah you have to measure that's right you can't measure happiness yeah and you

**49:14** · know the measure the we're producing more value added again you can't measure value it's things like like net promoter score there's been volumes written on what's wrong with net promoter score it doesn't work right and the the um it's just not measurable so i

**49:29** · engineers drop into numbers much too much too quickly and they put much much too too much emphasis on them if i hear the word data driven applied to running a software organization one more time i'm going to pull my hair out or something is that no we're not data driven and how do we find another thing to disagree on okay you know because well look at you know if often data driven means a b testing

**49:58** · but you look at companies that do a b testing and the difference between a and b is in the noise level but they still pretend that it's not yeah but i want to see a 100 improvement in b not a 1 improvement yeah right and the the but people who do the one percent improvement still you tried out that we're data-driven thing maybe it's we're back to i'm working for a lot of dysfunctional companies but i have seen that too often and the the

**50:28** · the real issue is are you making your customers lives better and can you determine that with data and i think no is you can determine things like how easy is it is to use the software and there's a loose correlation between that and making people's lives better right your life is always better if you don't have to work harder to get the same thing accomplished but \[Music\] it doesn't tell us whether we're doing the right thing and

**50:55** · i would i would rather have all of the focus be on doing the right thing to getting value how do you know what the right thing is like talking to people how do you know that they're not crazy yeah did you know that the right people by talking to you you don't need to know it's the the

**51:16** · of course there's an entire profession of project manager or product management rather than is concerned with answering that question but ultimately what a product manager does is talk to people and the the dysfunction comes into that when a product manager says well only i can speak for the customers as a group

**51:36** · you can go you you lowly engineer you can you can go talk to people but that's just one person's opinion i understand the group as a whole and that's that's nonsense and i'm trying really hard to not say but it's nonsense

**51:52** · but the the the issue here is that um there's nothing wrong with starting by talking to one person and doing what they need that's a great start and then you take that and you go off to five people and say take a look at this and give me your tell me what's wrong and what's right and they'll give you some feedback and you tweak it a little bit more until all five of them are happy at least as happy as they can be

**52:18** · and then you take it out to 50 people and you said take a look at this tell me what's wrong what's right and you know once you get about 50 that's probably all you need um you know i i rejected famously or not wasn't jacobson nielsen

**52:34** · famously said that all you need is three right in the way of feedback right and um that might be too low but certainly 50 is the most you'll ever need in order to get a good feeling for the market as a whole if you choose choose your 50 carefully but the the the point is is that there's nothing wrong with starting with one so sure absolutely i i just i just quibble over

**53:01** · what you've described to me is collecting data but but it's you know it's yeah but that's not really that that is collecting data in a fashion right because you're getting is the kind of data but it's not numbers it's not numbers it's not sure but but you know it's it's it's the same so fast but

**53:20** · the problem that i have a lot is that people demand numbers they reject that whole approach because they said there's nothing numeric there i don't think i can say that i don't i don't think that's necessarily the same as data driven the advantage of numbers is you can start playing statistical games with them but as you pointed out quite correctly you've got to be fairly sophisticated in the way of your thinking and organizing i think one of the things that i'm i'm coming to is that is that is that you know you're

**53:47** · i think like me uh you think that software developments is hard and you need smart people to do it and you need to let the smart people do it i remember back i haven't actually heard this in a while but back when i first started talking about agile somebody would come up to me and say yeah but

### SW Dev Needs Smart and Motivated People

**54:07** · isn't it true that you can't do this at all unless you have a bunch of smart and motivated people yeah yeah \[Laughter\] you can't do anything if you don't have a bunch of motivated people what's your point that we need to be able to hire idiots and have so that's not going to work that doesn't work with any kind of software development no matter how you do it \[Laughter\] i i once i once had a a um a career review in one of the organizations that i worked in and um

**54:39** · and the feedback that i got was dave has shown that he can work well with the best people the best teams but he's yet to prove that you can work with people that are less capable and i said i don't want to i'm not

**54:56** · in that situation is so let's make the less capable people more capable yeah absolutely absolutely it's it's it's one of it's one of my things so i i i have a part partly because of the continuous delivery thing i have a bit of a a bad reaction to feature branching because um it delays feedback it gets in the way i've been the clarity of whether as stuff is and i don't think it's compatible with continuous integration which you know you know we both we both value very highly so but but

### Culture & Performance

**55:29** · one of my things is you know if you're using that because you don't if you're using feature branching so that you can do pull requests so that you can kind of gatekeep access to your production system because you don't trust your teammates your problem is the trust not the version control system

**55:46** · so fix the trust problem and get the you know get the people trustworthy to work with you it's a cultural problem it's it's it drives me nuts yeah and i haven't you know i i hear this a lot from people that are coming from eastern europe for some reason but there's this i think of as the myth of the slacker right is that they're constantly bringing up slackers right you can't do that because people will will not work

**56:12** · they'll you know they'll take advantage of the situation and sit on their butts and not work and i usually i say have you ever actually seen that and the answer is well no why are we talking about it right but yeah maybe in maybe they do see it occasionally i don't know i've never seen it i i i i i i saw a i saw a great blog

**56:33** · post uh a a few years ago which was talking about servant leadership and and the woman that wrote i can't remember her name but but i i did enjoy it she said it's not really like being it's not servant leadership it's more like hosting a party you kind of put out all

**56:50** · of the stuff and you put the drinks and you you hope that people will have a nice time and occasionally you've got to throw out the drunks yeah i quite quite liked that as an analogy yeah but you know even throwing out the drunks you could you could argue well this is a you know there's a valuable person to have when they're not drunk so let's walk let's work on that drunk thing right you know in other words you can the the the when i see people that are quote underperforming almost always the problem is one of

**57:22** · training and mentorship not inherent personality problems yep and um you know i see so much active active dysfunction around that individual performance reviews which end up with finger pointing you better get better or else and then amazon has this insane thing where they if somebody is quote underperforming what they do is give them an insane amount of work to do and if they don't finish it on time they're fired yeah what the hell is this about

**57:51** · right is that the proper response to somebody who's underperforming is to find out why and fix it yeah something they don't know um maybe they're just in the wrong job that's fine let's find something else for them to do somewhere else in the company but the the the point is is that people for the most part want to do a good job they're competent they want to be happy they want to be doing something that's satisfying to them so let's figure out how to make that work and do it um it's not about punishment

**58:20** · and the the throwing out the drunks part goes to punishment too easily sometimes is that the the right is that there's a lot of steps that you should take before you go to punishment okay you know and the the you know good the other direction happens too right hiring is the

**58:39** · the teams ought to be able to hire their own people there shouldn't be some manager hiring people there certainly shouldn't be some some human resources that shudder at that term but some human resources person hiring hiring people the very fact that they're using the word resources and human in the same sentence tells me that they've got no business hiring people yet the the um

### Recruiting People You Can Work With

**59:00** · you know i my best i once back when i was doing more contract programming kind of stuff um was in an interview before they were that i was you know before to come up to a contract and it was one of these kind of google style interviews where they give them questions and answers and this was some hr person reading the questions off a list and she had a list of proper answers and she asked me a question that was an exam question that i had invented and given to my class about two semesters earlier

**59:32** · it was my question i invented it and she gave me that question clearly one of my ex students was working for that company and then the question filtered into their truck apartment and i answered and she said no that's not the right answer

**59:47** · and the question was kind of complicated i couldn't exactly explain to her why she was wrong the question which which is an interesting question that i that i this is an interesting exercise for anybody that is a c or a c plus plus programmer is right uh the question the problem was write us a function a subroutine that returns the size of its own stack frame in bytes

**1:00:11** · interesting exercise um what am i going to do try and explain to her what a stack frame is and you know what what the address of a variable means and how does recursion work and all you know all this other stuff that you need to solve that problem i'm not going to be able to say to an hr person you're wrong because

**1:00:29** · yeah they just had the questions and the answers the jumping through hoops thing right so as long as we're we can't have agile companies as long as we're hiring from laundry lists and doing these ridiculous google intelligence tests quests you know and whiteboard interviews and all this other craziness which doesn't do a damn thing you know and the the the song we started talking about the firing side the hiring side if a team says to somebody we look through your resume and you look pretty good come in and work for us for a morning and we'll pay you

**1:00:59** · right that's going to give you useful information yep no amount of whiteboard and it's agile right it's again where we are going to sort of work with somebody and incrementally make a decision about whether we want to continue to work with this person or not yeah um there are some reasons we use it yeah i i i worked in companies that did that we we used to take a very long time to hire people just just to figure out whether they've you know they've they fit with the team yeah but even then it doesn't have to take a long time it's kind of like dating right if you're going to

**1:01:31** · if you go into a dating site you try and pick somebody with those those profiles that's craziness you can't right you you know within microseconds of meeting somebody whether you're going to get along or not so so so i thought i do it on paper for hours and it won't tell you that so i think i think we've learned two important things about alan one is that he's worked for a lot of bad employers and \[Applause\] he's never had a bad date \[Laughter\]

**1:01:59** · bad days but that's the point that i'm trying that's the point that i'm making right if you're if you're taking a dating site approach right where you have this giant catalog of people and you're going through lists of skills and comparing it against your laundry list right this is a this is very much the way hiring works in many organizations yeah yeah and it doesn't work yeah right you can go through those profiles until you're blue and they tell you nothing about whether you're going to get along with the other person or not you don't find that out until you sit down and have a chat yeah right

**1:02:31** · right basically i i i i do agree i i i one of one of the things one of the things that i always i always do in interviewing people is is just imagine working with them and would would i be in would i enjoy working with them would i feel excited to be working with him like is this somebody i can learn from is this somebody kind of fun with you know i think that's yeah i think that's an important thing more than any of the other stuff yeah yeah so we're building do you know ruby

**1:03:00** · how long does it take to learn ruby what's the yeah what's the problem here right is that i'm much more interested in all that other stuff yeah abs absolutely i i've hired people that didn't have the technologies that we were working with um

**1:03:18** · we'll pick you up in no time yeah you know what made me think in these terms is that kind of my mentor when i first started programming my very first programming job the the sort of brilliant competent person who was helping me um what he did in his past life is that he was a machinist right and he came into programming knowing nothing about programming and was hired knowing nothing about broker but what he did have was uh was a

### Learning & Relevant Skills

**1:03:44** · personality that gave a lot of attention to detail and a personality that was focused on problem solving because you need both of those things in order to be a good machinist yes and those are the key skills whether he knew some programming language or another who cares in fact and the company was enlightened enough to hire him even though he didn't have those particular skills yeah

**1:04:05** · that sort of set a benchmark for me there's a lesson there right yeah here's this guy who's like the best programmer in the company and he's not really a programmer at least not he is now but he sure wasn't tired yeah the the we need more of that i think

**1:04:22** · and the whole notion of the labor shortage that people are talking about now there isn't a labor shortage there are millions of english majors that would be overjoyed to get a programming job yeah sure they don't know how to program but the things that you need to do to write a good research paper are very similar to the skills that you need to have write a good program yeah it's yeah it's it's it's one of those other failures as i see of the software

**1:04:50** · industry is that employers are not willing to allow people to learn it's ludicrous aim to try and hire people that have exactly the technology that you're using solving exactly the kind of problem that you're solving and you expect them to come in i want to hire some i want to hire somebody who's smart who's going to you know grow over time and and and be better than all of us ideally you know absolutely that this function is so built into our culture though yeah yeah all of those

**1:05:22** · moronic politicians to talk about stem right i could care less about stem makes no difference you know going through some stem program in school does not make you a good programmer it tells you nothing it's not predictive of anything useful and the the you know i'd much rather hire a philosophy major than a mathematician um but it's built in right i remember these struggles i had when my kids were young with other parents who are saying

**1:05:50** · oh these eight-year-olds have got to get on computers so they're going to be relevant and i'm going no they need to learn to interact with other human beings that's the important skill and it ain't that's the skill they should be working on not sitting in front of a damn computer all day doing some kind of bizarre exercise is that what's that going to do yeah and but they the other parents it was a heart and soul they couldn't they were so sucked into the we

**1:06:12** · have to have computer skills we have to have stem skills etc etc that they completely sidetracked the skills that they really did need to have in favor of these ones that were secondary yes and that's that's almost built into the culture right now it's very very difficult to argue in the educational system that no you don't need math to be a programmer you know that's a semester of discrete math is plenty a

**1:06:36** · little bit of stat a little bit of set theory a little bit a little bit of logic and that's fine that's all you need and but what you do need is to be able to talk to people to be able to take your thoughts to get them written down in a coherent way that other people can understand to be able to organize yourself in a way that allows that to happen uh to be able to do research right these are all these are the key skills yeah they're often

**1:07:01** · de-emphasized in the whole educational system in order to in in favor of things like np completeness i i could care less about it be completeness why are you teaching why are you you know why does your your grade depend on getting a good a good grade in a class that teaches you about big o notation and np completeness i just don't care and the the algorithm says i don't care about algorithms anymore i use they're fun i like it right maybe a good hiring criteria is you think algorithms are fun

**1:07:31** · but whether you know them or not who cares right if i need an algorithm i'll look it up and google is i'm not going to \[Laughter\] craziness so we're emphasizing the wrong things and then yeah yeah yeah i think you know agile is about emphasizing the right things yes so so so so i give you the the the heart

**1:07:53** · of that you mentioned already i think at least i think is is you know inspect and adapt which is you know one of those deeper principles which is i think agile is really aligned with kind of scientific philosophy be skeptical have an open mind you know don't trust don't trust your guesses and try and figure out how you're going to validate your thinking and all that kind of stuff and that seems to me to be you know at the heart of it we're running out of time so so so you

**1:08:20** · know we've been we've both been slightly grumpy old men through through this conversation mostly so so what what what would you pick up as advice that you'd offer to people that might be watching this that can help them to you know do a better job one thing we've mentioned already is read the read the agile manifesto you know rather than the scrum the scrum documentation read the agile manifesto as a starting point

### Advice from 2 Grumpy Old Men :-)

**1:08:50** · um part of it is that i think you need to particularly when people are very junior they need to understand what's important and what's not so that they can make choices about things like where they want to work yeah right there's often there's this level of desperation about getting a job that's working against people yeah and even if you don't know agile i would do something like read dan pink's drive

**1:09:16** · and say do i want to work for a company that works like this yeah and if the answer is yes then go out and find companies that work like that yeah don't accept whatever the first job that comes along is at least in the current job climate you can do that right maybe five years from now you won't be able to do it but right now we're sort of in a golden age for job seekers right so you can you can choose is that getting a job is not the company choosing you it's you choosing the company yes and right and

**1:09:49** · the the if a company can't hire people the problem is not that there's some kind of skills lack lacking the problem is that nobody wants to work for them yes right if you're if you're in a company that can't hire somebody then i would say fix your company yeah make your credit so everybody wants to work for you yeah absolutely and and and that's the kind of market economics i'm in favor of scanerian conditioning \[Laughter\]

**1:10:22** · is to read about stuff like that about things that are thing figure out what's going to make you happy and do that yeah you know easy enough not easy enough but basic enough yeah basic you know well we should probably wrap up that that's great i i i reinforce your points about

**1:10:43** · the the dan pink stuff and uh thinking about you know those intrinsic motivators rather than the extrinsic ones and all that kind of stuff it's it's all good stuff let me throw sort of a moment of shameless self-promotion is go to my website and hire me \[Laughter\] i'm a consultant and i'm always looking for jobs um i'm i'm always doing classes i've got a class coming up shortly on story development yeah cool stories and that kind of stuff is that

**1:11:12** · holdup.com i list all the stuff follow me on twitter we'll put some links in the description i have links in the description put links in the description and and i you know if you need some help being more agile in the sense that the two of us have been talking about for the last hour i can help with that so hire me please please please the cry of the consultant

**1:11:40** · so there's your answer everybody if you want to be really agile hi alan oh you'll be fine that's great thank you very much let me just say thank you to everybody for watching today if you've enjoyed the content today hit subscribe and if you you've really enjoyed it hit like as well um i'd like to thank alan for for

### Wrap Up

**1:12:02** · joining me for the conversation it's been a lot of fun to uh be rubbish rubbishing the world organizations and agile in particular uh but but we're as you can probably tell tell we're both uh i think real believers that there's something important here that's worthwhile studying yeah absolutely great thank you very much indeed and goodbye \[Music\]