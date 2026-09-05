---
source: "https://holub.com/reading/"
author:
  - "[[Allen Holub]]"
published: 2021-06-09
created: 2026-05-18
tags:
---
![](https://holub.com/wp/wp-content/uploads/2021/07/All.png)

As is the case with many of the people who actually know what they’re talking about, I’ve come to shudder when I hear the word “Agile,” at least until I can figure out whether the person who uttered the word actually knows what they’ve just said. More often than not, they don’t.

The word *Agile* has taken on a meaning that the folks who coined the term at [Snowbird](http://agilemanifesto.org/history.html) wouldn’t recognize—a rigid process, mindlessly followed by a small part of an organization that isn’t the least bit agile (lower case). The word *agile* means nimble, flexible, adaptable, quick. If you aren’t all of those things, you’re not agile, whether or not you’re using some “Agile” technique. Agile is a frame of mind and a culture, not a process. You can implement Scrum perfectly and not be in the least bit agile.

What’s important, then, is *agility*, not Agile™.

I’ve found in my teaching that the best way to really *get* agility is to start with the basics and work towards the practices (and to actually *do* it, of course). Parroting the practices of some framework without knowing *why* they’re important and what problems those practices solve usually leads to an ineffective and empty faux Agile. This article is a curriculum of sorts that will get you up to speed on those basics.

There are a boatload of books on Agile, and many are worth reading, but I’ve tried to keep this list short. I focus on the essential background that you need to truly understand what you’re doing. The list is, nonetheless, a tad longer than I’d like. There is no one source that covers everything, however.

If you’re interested in my take on the state of Agile, watch my [*Death of Agile*](https://holub.com/videos#deathofagile) keynote.

## Definitive Documents

*Agile* is literally defined by the ***[The Agile Manifesto](http://agilemanifesto.org/)*** and associated [Principles](http://agilemanifesto.org/principles.html). If whatever you're doing aligns with the Manifesto and Principles, it's Agile. If it doesn't, it's not. Period. Do bear in mind, however, that the Manifesto is a snapshot of the thinking of only a dozen people almost 20 years ago. The core thinking is solid, but the details have evolved, and it's so terse that many don't *get* those details. Consequently, I've written ***[Heuristics for Effective Software Development Organizations: A continuously evolving list.](https://holub.com/heuristics)*** that cover the same ground as the Manifesto, but are more up to date and a bit less terse, so easier to absorb. You may find them more accessible.

I'm not a big fan of Scrum, but it is popular (bearing in mind that most "Scrum" shops follow a process vaguely similar to Scrum, not Scrum itself). Scrum is defined in the ***[The Scrum Guide](http://www.scrumguides.org/)***. There's a lot of pseudo-Scrum out there, and a lot of things that people imagine are part of Scrum which are not. For example, stories, story points, velocity, burn-down charts, and tools like Jira are not part of Scrum. Project managers are not mentioned in the *Guide* so are not part of Scrum—agile teams are self organizing (and managing). If your team has a dedicated traditional Project Manager, it is not a Scrum Team. (Facilitation activites are done by your SM.)  
  
If you want to know what Scrum really is, read the [Guide](https://scrumguides.org/). Note that the *Scrum Guide* is updated periodically. It’s worth reading it every few years just to make sure that your understanding of Scrum is the current one. Things we’ve come to understand as suboptimal ways if working (e.g. the Sprint "commitment") have been removed as the framework evolves.

## Systems Thinking

More and more, I come to think that Systems Thinking is really at the core of getting things to work.  
Agility requires an entire system to support it, from the CEO to the janitors. As is the  
case with all systems, you can't change the parts without impacting the whole. A car, for example,  
is a system for transporting people. If you want to get there faster, you may be tempted to put in  
a bigger engine, but if you do that, you also have to increase the strength of the drive train,  
which requires changes to the attachments to the body, which requires changes to the body itself.  
You have to change the brakes to deal with the additional speed. It doesn't stop until you've changed pretty much everything but the radio.

The pieces that comprise an Agile system are similarly intertwined. Change anything,  
and everything has to change, from org structure, to company culture, to the mechanics of how you build and deploy your software. Agile is *not* something that you can do in Engineeering.

To change successfully, then, you need to understand systems thinking. Here are a few books and  
other resources. They're all good, but if you're pressed for time, Peter Senge's book is the most accessible and the fastest read.

- Start with [[Russ Ackoff]]'s [short talk](https://youtu.be/OqEeIG8aPPk). If TED had existed back then, this would have been his TED talk. [This longer talk](https://www.youtube.com/watch?v=EbLh7rZ3rhU) is also well worth listening to.
- [[Peter Senge]]*, [The Fifth Discipline: The Art & Practice of The Learning Organization](https://amzn.to/2Tqne8b)*.
- [[Donella Meadows]]*, [Thinking in Systems: A Primer](https://amzn.to/3BlofQ2)*.
- Russell Ackoff*, [Ackoff's Best: His Classic Writings on Management](https://amzn.to/3kWf4jx)*.
- [[Gerald Weinberg]], *[An Introduction to General Systems Thinking](https://amzn.to/3xYGKHV)*.
- Gerald Weinberg, *[Quality Software Management, Volume 1: Systems Thinking](https://amzn.to/3kJ2oMI)*.
- [[John Gall]]*, [The Systems Bible](https://amzn.to/3kFsShV)*.
- W. Edwards Deming*, [Out of the Crisis](https://amzn.to/3zBhbxh)* (and also the [Red Beads](https://youtube.com/watch?v=7pXu0qxtWPg]) video).

Goldratt's *The Goal*, discussed [below](#thegoal) 
is also really about systems thinking, but in a Lean context.

## Agile Culture and The Workplace

**Agile is not a process.** **It's a culture and a philosophy that you can apply in many ways, with**  
**many different processes.** 
Given its cultural nature, the biggest difference between fully Agile shops and traditional ones are the ways  
that they treat people. To paraphrase a friend of mine, traditional organizations  
assume that the workers are conscripts, agile shops assume they're volunteers.

Agile workplaces, then, are completely and utterly different from traditional workplaces.  
There are no people telling other people what to do,  
there are very shallow hierarchies and many fewer departments,  
internal systems are based on trust, not control.  
The idea of *accountability* is gone, replaced by *responsibility*.  
You're not in Kansas any more, and this is definitely not your father's company.

So, you cannot become agile simply by training a few people in Engineering.  
Everything has to change.

Spotify, with almost 1000 programmers working in three countries on two continents is a poster child for  
a functional Agile workplace. They're also proof that Agile scales just fine without having to use an  
elaborate prescriptive framework like SAFe (which I think of a way for a big corporation to pretend to  
be agile while maintaining the status quo—it's a sham). Spotify is the ultimate answer to the *that-can't-possibly-work* crowd.  
If you think it won't work, they're probably doing it, and it works.  
For example, the "squads" (teams) don't have a budget. There's a big pot of money, and if a squad needs something, they just buy it.  
They don't ask for permission first (which would slow them down—if you need the tool/training/resource now, you need it *now!*).  
A dozen of them traveled from London to NYC so they could interact face to face with another team.  
They didn't ask permission. They just went.  
Working that way saved them vast amounts of time, as compared to the mistrust-based system  
of permissions that you see in traditional organizations. That said, there's a lot of dreck written on the so-called *Spotify Model*. There is no such thing—never was. The resources I list describe things that various parts of Spotify have done at some point in time. It is *not* something you can cut and paste, and Spotify itself doesn't do all of this any more. The *real* Spotify model is continuous improvement, coupled with Dan Pink's *Drive* principles. The details are just a snapshot in time of an evolving organization.

[Drive: The Surprising Truth About What Motivates Us](http://amzn.to/2jAZryf) by Daniel H. Pink

This book is the most important one that I'll discuss. **If you read nothing else, read *Drive***.  
Daniel Pink talks ostensibly about what motivates people, but a functional agile shop is full of  
motivated people who want to go to work every day and finish the day satisfied.  
Turnover in fully agile shops is very low.

*Drive* talks about how to do that by following three principles: Autonomy, Mastery, and Purpose.  
Spotify's culture is built on those principles, and they work spectacularly well.  
Without a *Drive* -style culture, you can't really be fully agile.

*Drive* is actually a popularization of Deci and Ryan's work on  
Self-Determination Theory. If you want to look at the original research  
I recommend their [Handbook  
of Self-Determination Research](http://amzn.to/2tBg5SJ).

[  
The Fearless Organization: Creating Psychological Safety in the Workplace for Learning, Innovation, and Growth](https://amzn.to/2XaPknW) by Amy Edmondson.

If you've ever held back in a meeting, or didn't bring something up because  
of political or social issues, then you are not working in a safe organization.  
Psychological safety is central to effective Agile because, without it, essential  
ideas get swept under the rug and the organization can't evolve.  
You cannot be Agile without it. Psychologically safe organizations also tend to be  
vastly more productive than others (if you needed some other reason). Edmondson invented the concept, and though there have been volumes written on the  
subject, the primary source is always best.

[  
The Culture Code: The Secrets of Highly Successful Groups](https://amzn.to/2mQ7JCz)  
by Daniel Coyle.

Building a strong psychologically safe culture where the teams  
can operate effectively and autonomously is essential to agility. When it comes to team building, virtually none  
of the literature on "leadership" or "team building" is worth the paper it's printed on.  
This book shows you how to build highly effective teams. To me, at least, you can't have any real agility  
if you're not creating teams that work like the ones described in this book.

[Scaling Agile @ Spotify, with Tribes, Squads, Chapters & Guilds](https://holub.com/goodies/SpotifyScaling.pdf) by Henrik Kniberg & Anders Ivarsson.

Spotify's internal workings first came to everyone's attention with this white paper (from 2012).  
This paper does *not* describe "The Spotify Model." There is no such thing. Spotify is an Agile company, so they  
continuously apply the inspect-and-adapt principle to their own processes and structure. They've evolved. Also, the paper is in many ways aspirational, describing things that were done in various parts of Spotify, but there was never an integrated "model" applied across the entire organization. (How agile would that be in any event? Agile teams are self organizing.) Nonetheless, there are lots of great ideas here that you can leverage in your own organization.

[  
Spotify Engineering Culture (video), Part 1  
](https://labs.spotify.com/2014/03/27/spotify-engineering-culture-part-1/)  
and  
[  
Part 2  
](https://labs.spotify.com/2014/09/20/spotify-engineering-culture-part-2/)  
by Henrik Kniberg.

This video goes into more detail than the white paper, and talks a bit about Spotify's internal philosophy and culture.  
The white paper is more about company structure.

On the subject of servant leadership, I'd supplement the above with:  
L. David Marquet's  
[Turn the Ship Around!: A True Story of Turning Followers into Leaders](https://amzn.to/2OoiIzE). Having to constantly ask for permission does nothing but add impediments to  
progress. This book talks about how to build autonomous teams that don't need to ask, because they make the  
right decisions without asking.

Also on the management-thinking front, Jurgen Appelo's  
[Management 3.0: Leading Agile Developers, Developing Agile Leaders](https://amzn.to/2T24r1z) is very good.

## Teaming

### Self-selecting teams

There's a basic Lean concept that you bring people and resources (like equipment and software and training) to the place where there's the highest demand. As strategic goals shift or the work changes, the teams re-form themselves to best handle the new situation. In a traditional command-focused organization, people are moved around like chess pieces. In an agile one, the teams manage themselves and select their members. Here are some great resources:

Amber Field has a great case study:[  
**Self-selecting Teams: Could It Work For You?**](https://www.linkedin.com/pulse/self-selecting-teams-could-work-you-amber-king/).

At Valve, teams are self managing and self selecting. The[  
**Valve Employee Handbook**](https://cdn.akamai.steamstatic.com/apps/valve/Valve_NewEmployeeHandbook.pdf) is a great read on both topics.

Finally, if you really want to dig in, read Mamoli and Mole's book:  
[  
**Creating Great Teams: How Self-Selection Lets People Excel**](https://amzn.to/3VgWOAo).

### Ensemble (Mob) Programming

In addition to self selection, there's also the Agile principle of working as a "whole team." To me, that means that we don't work as isolated individuals, checking in only once a day, but that we literally work together as an ensemble. The best way to do that is to use Ensemble Programming (originally called "Mob Programming" or "Mobbing", but the joke didn't translate 😄). In addition to being a highly effective way to work, many hard-core introverts and ppl with ADHD or on the spectrum love it because it's so relaxed—E.g., you can leave the mob any time you want and the work continues. I think it's way better than pair programming, which can be much more intense. (It's like a relaxed dinner with friends, as compared to a first date.)

The best compendium of resources on this topic is  
[  
**Chris Lucien's Trello page**](https://trello.com/b/1lfMkCOh/software-profession-resources), which includes many books, articles, and videos.

Chris also put together a great list of  
[  
**Companies that Mob/Ensemble Program**](https://trello.com/b/EFSFnE4W/companies-that-mob-ensemble-program), which lists not just companies but also coaches and trainers.

One good case study (of many) is James Simone's description of what they do at SalesForce:  
[  
**An Intro To Mob Programming**](https://engineering.salesforce.com/an-intro-to-mob-programming-1a95da040b8b/).

Finally, the best book on the subject is written by Woody Zuill and Kevin Meadows—Woody's team at Hunter Industries invented the technique:  
[  
**Software Teaming: A Mob Programming, Whole-Team Approach**](https://amzn.to/3Vtw13u).

## Lean Thinking

You can't understand Agile if you don't understand Lean.  
Many agile practices like short cycles, non-negotiable quality, regular retrospectives, pulling work from a  
"backlog," come from Lean.  
So do important cultural values  
like trusting the people who do the work to decide *how* to do the  
work, continuous process improvement, and the notions of servant leadership.  
It's essential that you know Lean in order to understand both *why* we do what we  
do and *how* we do it.

The four essential books on Lean for the programmer are:

[The Goal: A Process of Ongoing Improvement](http://amzn.to/2iLeAsp)  
by Eliyahu M. Goldratt.

This book describes the *Theory of Constraints*, from which various Lean practices  
derive. It talks about workflow, what makes it fail, and how to optimize it. Sounds boring,  
but the book is written in novel form, and is quite readable. Understanding the theory of  
constraints makes a lot of agile thinking make sense. For example, the notion of a multi-disciplinary  
team solves problems associated with bottlenecks and handoff inefficiencies. There's also a  
[graphic-novel version](http://amzn.to/2EFSF2N), which is  
condensed, but not bad if you're pressed for time.

[The Phoenix Project: A Novel about IT, DevOps, and Helping Your Business Win](http://amzn.to/2jB3N8C)  
by Gene Kim, Kevin Behr, and George Spafford.

*The Phoenix Project* takes the ideas laid out in *The Goal* and applies them to the software world. The focus is on  
DevOps (think: automated and continuous deployment driven by the development process), not software development  
*per se*, but pretty much everything here applies outside of "operations." The book does gloss over a lot of the  
details covered by Goldratt, so it can't hurt to read *The Goal* first. You might also want to augment this book  
with  
Humble and Farley's  
[  
Continuous Delivery: Reliable Software Releases through Build, Test, and Deployment Automation  
](http://amzn.to/2jDb2gI), which has a lot of detailed, nuts-and-bolts advice, but is short on the big picture.

[Implementing Lean Software Development: From Concept to Cash](http://amzn.to/2iDsZMn)  
by Mary and Tom Poppendieck.

The Poppendieck's have written a lot of books, and they're all worth reading. I think this one is the best practical  
introduction to Lean, as applied to software development. Their  
[Lean Software Development: An Agile Toolkit](https://amzn.to/3eB5JI2) is also very good.

[The Lean Startup: How Today's Entrepreneurs Use Continuous Innovation to Create Radically Successful Businesses](http://amzn.to/2jt7Bqp)  
by Eric Ries.

This book is about neither Lean (in the manufacturing sense) nor Startups,  
but it's essential reading nonetheless. Reis lays out an agile-friendly approach to business  
planning that centers around customer interaction, short cycles, experiments, and making business decisions based on the results of  
those experiments.  
Lean manufacturing is a development process (and philosophy);  
lean startup is a business process (and philosophy).  
You need both.

I've not listed Reinertsen's [The Principles of Product Development Flow: Second Generation Lean Product Development](https://amzn.to/2LA8Ge9) only because it's a dense book, inaccessible to many. Read this book if you want a deep discussion (including the math) of many of the things in Goldratt's *The Goal*.

In order to optimize flow, you have to understand the flow of development in your own organization, of course. That process is best done with *value-stream mapping*. The best book is Martin and Osterling's [Value Stream Mapping: How to Visualize Work and Align Leadership for Organizational Transformation](https://amzn.to/2BSGLlz). Mike Rother's original book on the subject, *Learning to See* is also good, but it focuses on factory optimization and is pretty hard to find.

I should also mention two practical books on Kanban (a software development framework built on Lean principles):

Klaus Leopold's[  
Practical Kanban: From Team Focus to Creating Value](https://amzn.to/2V4MEoU) and  
Marcus Hammarberg and Joakim Sundeno's  
[Kanban in Action](http://amzn.to/2jQVq6v),  
are both good nuts-and-bolts practical guides to implementing a Lean process (i.e Kanban) in a software development shop.  
Neither are a complete introduction to Lean thinking by any means, but are a great practical introductions to a Lean/Agile process. I should also mention  
David J. Anderson's  
[Kanban: Successful Evolutionary Change for Your Technology Business](http://amzn.to/2jD2RRv), though I don't actually recommend the book.  
This was the first book to suggest applying Lean thinking (Kanban) to software development in a formal way. His discussion of introducing  
Lean at Microsoft is priceless, but the book is otherwise lacking: long on war stories and short on practical information.

Finally, I'd be remiss if I didn't list a few books on traditional Lean thinking. Taiichi Ohno's [Toyota Production System: Beyond Large-Scale Production](http://amzn.to/2jBDAod) describes the fundamentals. Ono invented Lean. This book is about making cars (which is why it's not in the main list), and is really about how to run a lean business, but it's a great read.

In the more-essential category is Mike Rother's [Toyota Kata](http://amzn.to/2jMap24), which is a discussion of *why* Toyota succeeds, not *how*, but also contains  
practical advice. Rother's *Improvement Kata* describes a great way to transition incrementally to new ways of working (and to improve the ways you work now). Definitely worth a read.

The subject of management is also important, and the key thinking behind Lean management  
is the notion of continuous improvement and Gemba (instead of information flowing up, managers walk down to and work with the teams). Check out Masaaki Imai's  
[  
Gemba Kaizen: A Commonsense Approach to a Continuous Improvement Strategy, Second Edition](https://amzn.to/2JKzJmQ). Also, Liker’s [The Toyota Way](https://amzn.to/2Xj7iCE) is a great description of Toyota’s management philosophy and practices.

## Planning and Process

I'm a little reluctant to list books about process, though I did list a couple of Kanban books,  
[earlier](#kanban-books).

First of all, Agile is a organization-wide philosophy and culture, not a process.  
Agile and Scrum are not the same thing, for example, and Scrum is neither the only nor the best approach  
to agility at the engineering level.  
Moreover, none of the processes (Scrum in particular) are complete.  
You can implement them perfectly and not be in the least bit agile.  
Finally, you cannot achieve agility by implementing some process "in a bubble"  
(an existing engineering team doing Scrum, for example).  
True agility typically requires a massive cultural shift in the organization as a whole,  
and probably a major reorganization and a major rethinking of things like governance practices.  
Reading the books, though, you'd never get any of that.

I'm also not a big fan of proscribed process in general. You can't be rigid about what you're doing and be agile at the same time.  
It's best for the team to get some training, then working with an experienced coach, develop a process that they think will work for them.  
I do that sort of work and enjoy it immensely ([get in touch!](mailto:allen@holub.com)).  
The process is one of *education* (literally, "to lead from"). You can't successfully impose process from outside.

If you don't have adequate experience in house or can't find a competent consultant/coach,  
and you want a well-documented place to start your agile journey, then implementing a documented process (like Scrum or XP)  
is a good start. Just bear in mind that something you read about (or take a class in) is just a start, and given that the notion of continuous improvement is an essential aspect of Agile, if you're still doing exactly that process a year after you start, you're doing something wrong.

I'm deliberately not listing books on the big so-called "enterprise"  
processes (e.g. SAFe). To my mind, these big processes are actively destructive.  
They are ways for expensive consultants to make  
a lot of money working for big corporations that don't understand agility, and probably never will.  
Don't waste your time on them. In any event, Spotify is proof that you don't need an over-elaborate  
pseudo-agile process like SAFe to scale agile.

[User Story Mapping: Discover the Whole Story, Build the Right Product](http://amzn.to/2iOXE4g)  
by Jeff Patton.

This book isn't about process, per se, but the so-called *story* is at the heart of agile planning.  
A story is a simple narrative that describes an end user in some domain-level role going through some domain-level process to  
achieve a domain-level, and valuable, outcome. It does not describe a computer program. All agile processes  
require you to organize your stories by value to decide what to work on next, and Story mapping is the best way  
that I know to do that.

[Extreme Programming Explained: Embrace Change, 2nd Edition](http://amzn.to/2iLfSnB)  
by Kent Beck and Cynthia Andres

Extreme Programming (XP) was the first Agile process that anybody ever heard of.  
Scrum was quite obscure at the time, and XP is actually a much more complete  
process than Scrum, which describes itself as a "framework" for a process. This book describes XP, but more  
importantly, describes the philosophy and culture that underlies it. Most Scrum implementations use XP  
to do day-to-day work. Read this book, even if you never plan to implement XP, so that you can  
understand Agile thinking. Also worth reading is Jeffries, Anderson, and Hendrickson's [Extreme Programming Installed](https://amzn.to/39wKIuL), which is full of practical advice. [Ron Jeffries's blog](https://ronjeffries.com/) is also a great resource.

The other essential book on practical Agile is Kent's [Test Driven Development: By Example](https://amzn.to/3jKIMVX) (also on [Safari](https://tinyurl.com/y25cs4kt)). TDD is a *design* strategy that uses examples of how the code will be used to drive an incremental design-and-development process (and it creates a nice set of unit tests as a side effect). I can't imagine programming without it. Another great book on TDD (with more extensive examples) is: Freeman and Pryce's [Growing Object-Oriented Software, Guided by Tests.](https://amzn.to/3nd2m0d)

[Accelerate: The Science of Lean Software and DevOps: Building and Scaling High Performing Technology Organizations](https://amzn.to/2JvVMjg)  
by Nicole Forsgren, Jez Humble, and Gene Kim

You need data to assess your process effectiveness. This book talks about  
exactly what data you need and what to do with it to both assess and improve  
your software-development process. For example, by using real  
data, the book finally puts an end to the ridiculous notion  
that adding tests somehow slows you down or doesn't have business value. The main negative of the book is that they're focusing on Ops more than software development. I'd augment this book with Dan Vacanti's [Actionable Agile Metrics for Predictability: An Introduction](https://amzn.to/356bytq).

Also, the word "productivity" often comes up in this context. There is no single (or even combination) of hard metrics that you can use to assess productivity. Read Forsgren et al's essay [The SPACE of Developer Productivity  
There's more to it than you think](https://queue.acm.org/detail.cfm?id=3454124).

[Escaping the Build Trap: How Effective Product Management Creates Real Value](https://amzn.to/2WXaO4L)  
by Melissa Peri

Effective *Agile*  
product management is an essential part of any Agile company.  
Most companies get this wrong, and this book gets it right.

[Essential Scrum: A Practical Guide To The Most Popular Agile Process](https://amzn.to/2qCeihl)  
by Kenneth S. Rubin.

If you do opt to go the Scrum route, Rubin's book is the best introduction. Of course, you should also read the current version of the  
[Scrum Guide](http://scrumguides.org/), which is definitive. I'd augment this book with Ryan Ripley and Todd Miller's [Fixing Your Scrum: Practical Solutions to Common Scrum Problems](https://amzn.to/3qyV1Il), which talks about common misconcptions that contribute to Dark Scrum and how to fix them.

## The Plus Ça Change Department

For some reason, even after 40 years (or more) we still haven't gotten the basics  
right. These are classic books, every one of which is just as essential today  
as it was the day it was written. Everybody should read all of these.
- Fred Books, [The Mythical Man Month](https://amzn.to/2UD5mFp)
- Tom DeMarco & Timothy Lister, [Peopleware](https://amzn.to/2H5TqnJ)
- Tom DeMarco, [Slack](https://amzn.to/37g9XQu)
- Gerald Weinberg, [The Psychology of Computer Programming](https://amzn.to/31GyPQi). Literally everything Weinberg ever wrote is worth reading. This one is a start.
- Donald Norman, [The Design of Everyday Things](https://amzn.to/2ulVQvL)
- Andy Hunt and David Thomas, [The Pragmatic Programmer](https://amzn.to/379ABKN)
- W. Edwards Deming, [Out of the Crisis](https://amzn.to/2HdPJwh) and [The New Economics](https://amzn.to/39ixBgL)
- C. Northcote Parkinson, [Parkinson's Law, and other studies in administration](https://www.academia.edu/2035710/Parkinsons_law_and_other_studies_in_administration)

## Miscellaneous

This section holds books that aren't "essential," but I find myself recommending them regularly:
- **Architecture**. It's very difficult to have any real agility if your architecture can't stand up to the stress of constant change. Though there are piles of books on specific architectures (like microservices), there aren't that many on architecture itself—on how to design software. I'd start with Neal Ford and Mark Richard's **[Fundamentals of Software Architecture](https://amzn.to/3tY5AGv)**, Vaughn Vernon's **[Domain Driven Design Distilled](https://amzn.to/3qhIp7O)**, and any good book on design patterns (I'm partial to my own *Holub on Patterns* 😄).
- We do a lot of visual thinking in Agile. The best books on creating visual representations  
	are Edward Tufte's series:  
	[The Visual Display of Quantitative Information](https://www.edwardtufte.com/tufte/books_vdqi),  
	[Envisioning Information](https://www.edwardtufte.com/tufte/books_ei),  
	[Visual Explanations](https://www.edwardtufte.com/tufte/books_visex), and  
	[Beautiful Evidence](https://www.edwardtufte.com/tufte/books_be).  
	I'd [**buy all four**](https://www.edwardtufte.com/tufte/books_be).
- Tom Coens and Mary Jenkins,  
	**[Abolishing Performance Appraisals: Why They Backfire and What to Do Instead](http://amzn.to/2nlCQYQ)**.  
	Individual performance appraisals do a lot of damage with no up-side whatever.
- Jeffrey Pfeffer and Robert Sutton,  
	**[Hard Facts, Dangerous Half-Truths, and Total Nonsense](https://amzn.to/2AiuOHA)** also has a great section on the myth of the  
	performance appraisal and how destructive it is. This book is more rooted in hard research than Coens and Jenkins.
- Stepping on other people's sentences is a common source of tension. Though the problem is often cast  
	as one of respect or politeness, that's a simplistic and not-very-helpful framing  
	of the issue. Communication styles, even if gender based, are cultural (e.g. NYC vs. most of the Southern USA), and cultural/gender-related communications issues are at the core of many workplace dysfunctions. The solution is to understand and accommodate disparate styles, not censure.  
	Deborah Tannen's,  
	**[Talking from 9 to 5: Women and Men at Work](https://amzn.to/2yiTFKy)** talks about gender-based differences in communication styles and how those impact our day to day work. Everybody needs to read it. (And don't be fooled by the fact that Dr. Tannen's books are often misfiled under *Relationships*. She's a serious linguist.)

So that’s my list. If you have a favorite book of your own, tell the rest of us about it by leaving a comment.