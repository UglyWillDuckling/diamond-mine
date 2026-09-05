---
source: https://www.youtube.com/watch?v=prIwpKL57dM
author:
  - "[[Alan Kay]]"
published: 2016-09-05
created: 2026-05-17
topics:
  - "[[object orientation]]"
tags:
  - video
category:
  - "[[Video]]"
---
![](https://www.youtube.com/watch?v=prIwpKL57dM)

**"Not to do better, but to take care of the mess that is already there."**

## Transcript

**0:00** · let me give you the professor LK professor L K is best known for his pioneering work an object-oriented programming language and we know a graphical user interface design and for coining the phrase the best way to predict the future is to invent it into in 2003 Professor Alan can receive receive a ACM Turing Award they consider to be the Nobel Prize of computing from work on object-oriented programming let us welcome Professor Alan Kay thank you

**0:36** · okay the ground rules here are ask questions whenever you have one because these classes go quickly just think of all the money you're paying for hardly getting anything in a in an hour so

**0:55** · programming languages in programming one of the problems of talking about this in general especially in one class is that there have been several thousand programming languages designed and implemented over the years at any given time since the early 60s there have been somewhere between 150 to 200 languages in standard use and these languages are

**1:23** · rather different from each other in certain ways and rather similar to each other in other ways and so it's very hard to come up with interesting generalizations and what we're really

**1:41** · talking about here is programming and programming is the simplest thing to describe it's we do something in the computer does something and if it does what we wanted it to do both of us are successful programming languages are usually the vehicle for this and you can

**2:03** · think of user interfaces as kind of an impoverished kind of programming language they used to be richer and that the kinds of things that you did in the user interface were part and parcel of the kinds of programming you could do and I'm going to show you a few of those things today so I thought what I do is first to just look at a

**2:31** · couple of ideas in programming and programming languages and be able to do it so I don't have to explain some programming language you've never seen before I'm going to take a programming language that is currently in use by about three million children called eToys it's the parent of another widely

**2:54** · used programming language for children called scratch and some of the same people worked on both of those and so I'll first take a look at what that experience is like and so the basic idea in this style of doing programming it's now has a name called live coding but

### Live Coding

**3:20** · back live coding goes all the way back to the early 60s it just never was in the style of the punch card UNIX approach black screen by terminal way of doing things so the idea is that you

**3:40** · just make things in a variety of ways and the computer responds to them there's no no visible compiling or we're editing so pick up some paint one of the things that kids like is to do things that adults do so you can ask them why don't you draw a car from the top view put on some headlights

**4:15** · and we were at Disney for a while and so the thing we learned at Disney is you must always put on some specular reflections like that and this this

**4:31** · gives you a graphical object and it does the kind of things you'd expect with a graphical object I can give it a name here I'll call it car and what's interesting about this object is it has another view this is the symbolic view of this object and so here's a property

**4:51** · of it called the heading of it says the heading is zero and if I rotate the car you can see it's showing me the degrees from north minus and plus and this is interfaces reflexive so if I go in here and right so everything is by connected

**5:12** · here and also here here's a behavior of the car turn by five if I click it it turns the car if I drag it out it makes me a little script if I get the script is now just infinitely looping and if I

**5:38** · pull out another thing each time I'm doing this is the there's a compilation going on but it's sub-second so it's actually compiling a code underneath it and I can actually even drive my little car the zero makes it go straight but in

**6:02** · fact it's hard to drive the car this way and it's a little bit like kissing your sisters we really want to have a steering wheel so we'll just make a steering wheel and

**6:25** · we'll call it wheel and again we look inside here we see oh this is just the same kind of audit it's just got a different costume on it and again it has a heading and I get the same behavior

**6:45** · from it but notice that we got the car to turn by changing this number here and that's kind of an invitation of picking up this value and dropping it into the script and now we get to do this

**7:06** · so you're just starting out here but let me tell you if you program in the language here at UCLA that doesn't allow you to do this little demo right off the bat something is wrong because we're looking at something that goes back 40 years this is just because you don't know what you're getting into here I'm just trying to show you that there doesn't have to be a compile phase it doesn't have to be edits of files it can all be done lickety-split okay so I've

**7:40** · got a little car there and the other thing I can do is make lots of them so I'm going to play a game got a red car and a blue car and I'm going to make them small can you see them blue guy and

**8:04** · the red guy there and the two programs I'm going to run here this little kids system has automatic multitasking as many tasks as you want so I'm going to say go forward by one and turn randomly and this one says I do this guy and

**8:29** · if a blue guy sees touches a red guy then make the blue guy red so this is like an infection programming and so if I say go at the top here I'm plotting the infected against the non infected you can see that the big open space here that the village is is kind of like a

**8:53** · kind of like a long time constant the probability that the two guys are going to hit is fairly low so I'm going to get that behavior but what about a thousand

**9:17** · and all of a sudden I get that so there's another thing if your programming language doesn't allow you to make objects by the hundreds of thousands and run them in parallel then you have to worry about what kind of language you're programming it so the kids with this little program that they wrote there's no mystery here they wrote this program so now they can explore by saying well okay how about 200 and again

**9:50** · the sparseness acts like a longer time constant between infections but eventually they all die and we get this longer thing so the kids will say okay well how about 80

**10:27** · now they're starting to root for the ones that are maybe no so this is kind of an experiment in system dynamics for 10 year olds and

**10:46** · it's something that many parts the world don't actually understand on any terms because this first curve that I showed the one that went up rapidly is like typhoid and so if this last one was a disease what would it be like what these disease would it be blurt it out let's

**11:15** · see it's a disease that's already killed 100 million people yeah come on remember you're in it you're right UCLA now yeah so why does it kill that many people when typhoid is much much more virulent the answer is unless you know that a contagious

**11:39** · incurable deadly disease is always going to kill everybody off no matter what the time constant is you're not going to do anything when it doesn't look like anything's going on remember people are also being born so for a while when AIDS is doing its work the population is actually still rising and if you don't happen to know this feature of system dynamics you might just ignore it or say

**12:08** · it's just for minorities or something like that then all of a sudden you've got a majority of your population infected ok so that's a little thought experiment that children can do it's important because if you think about what is it that we need to know today it's not so much knowing that two plus two equals four or how to compute a

**12:35** · tip for a waiter actually has to do with systems dynamics because the world particularly biologically is more connected in more ways than it ever has been before and also our people in

**12:52** · Congress in Washington could do well to do a few of these experiments because they'd actually have some sense of how unstable systems are and you shouldn't monkey with them okay so back back here

**13:08** · we'll we'll turn this guy off and I got to do two other quick little experiments here first one is to make a little robot car now that we made one that can be driven and for that I will need a track so I'll get sort of a brown track here

### Robot Car

**13:32** · and robots need sensors so I need to put a sensor on this guy so I'll just draw one in here like this we'll use this to

**13:52** · track where are we where we actually are and now we need to make a program we can think out this program first so one of things we do with children is get them to go around the wall of their classroom with their eyes closed and the way to do

**14:10** · that they soon find out is you go until you hit the wall and then you turn away but as soon as you lose the wall you have to go back into it you keep on going if you don't do that right away you may lose where the wall actually is so right that that little program we

**14:33** · want the car car is always going to go forward so I can get that we're going to test whether we're touching the wall or not here's a test that will test let's see how about the cars blue color sees the walls brown color and then we have to figure out which way to turn here okay

**15:08** · I'm going to put in two turns by 5's but let's think it through so if we don't have the wall here which way do we want to turn five or minus five five okay so

**15:24** · that's no and so four yes we'll just take a guess and try minus five here and we'll just start it going okay who can see what the flaw with this program it is somebody tell me well

**15:52** · don't worry about efficiency we aren't humans aren't efficient but we're smart what's the condition under which it can lose this law it's going to do with the Sun but if I made a sharp turn right it's got a fixed radius to get back so probably when I

**16:16** · lose the wall I might even want to stop the car slowed it way way down to give me a real chance of contacting the wall again okay so that's a little experiment in making a feedback thing now what I want to do is to turn this thing into a wriggly worm and to do that I want to make a script

**16:46** · that is going to change its shape so here's my little thing it says car look like something but I don't have anything to make it look like so I will somebody

**17:05** · talking now somebody isn't talking okay so now I'm going to draw a couple of pictures for the wriggly worm part of this I'll

**17:26** · make a blue top and maybe a brown bottom here and just to test this out this one is called sketch one so if I say do it okay so that worked and but I need another one in order to make it wriggle so I will make a twin to it right here

**18:02** · but with the wriggle the other way okay now I need to move back and forth between each one of these and to choose which one of these I'm going to need something that we might call a little data structure here I'm going to put the worms in it now I'm going to look again

**18:28** · see all of the objects here have the same kind of user interface I'm going to look down here and see oh yeah here's here's the cursor here's one that says the holders player at the cursor so I'm going to put that in there and here's the cursor control so I'm going to toss that in there and we're going to say what I want to do is just increase the cursor over and over again and so now I'll start this script up and you see

**19:02** · what it's doing here okay now we could have put that in as a feature for the children but then the children wouldn't understand how to do animation so when you're trying to teach somebody something you don't want too many features you want them to actually do the programming themselves meanwhile the children have forgotten about these other scripts that are there so I could turn on this one and drive the drive the little worm

**19:35** · around or what about this one

**19:52** · okay so okay so that's kind of simple programming and the other thing that you want to be able to get a handle on pretty early in your programming career is meta programming and meta programming in this case means I want to I want to make another language other than eToys and I'm going to do it for the particle system kinds of stuff so here's the

### Meta Programming

**20:26** · these are now etoy objects in there these are the scripts for the whole interpreter I'm going to use the animate remember the animation thing so if you know a little bit about program counters the anime animation system is rather like running a program counter along when you're doing animations what you're doing is saying display that the guy that's that's there in this case we're going to execute instructions and so I'm

### Anime Animation System

**20:57** · actually going to turn on the eval here you can see it may be a little quivering a little bit here dying for some input and then the the instructions are going to be implemented using these scripts which have already written and now I just have to build the instruction and so this one's is a test that says if you can move this one says then move okay so

**21:29** · now it's executing that instruction and this one says if a blue guy hits a red guy then make them both red let's see if we're lucky here yep okay so programming

**21:49** · it and again when you're when you're taking that java class and you spent the first couple of weeks not really writing a program yet think about what's like to write another programming language in Java should be really easy but it isn't okay so so one of the one

**22:15** · of the theories about designing programming languages is because children are part of our world and children grow up into be being us we should be able to have them be able to start learning how to program this is we're learning how to program and then if you do that well the stuff that

**22:39** · children find easy and powerful or actually clues for how to design a programming language yourself okay and so what we've been looking at here is here's computer memory and down a fly

**22:58** · speck in the machine is actually some logic gates on a chip one corner of the chip and around it is nano code micro code on the chip itself and that might

**23:22** · be an 86 architecture kind of chip but most of the chips are done the same way there's some simple logic like this is the arithmetic is our registers the arithmetic unit and so forth then it's made into a slightly more complicated processor by putting a lowest level of programming they're in pretty elemental terms that's not always easy to write these low level programs and then nobody

**23:54** · wants to program in that so in this case what we're looking at is a virtual machine coded ultimately in these terms that makes the computer look like a small talk machine and at this level there's an area on there that's manifested where the display is going to go and then in that we write a development

**24:26** · system you still haven't seen yes I'm not going to but thank you for the thought that's too complicated small talk is a programming language that's all we need to know it has a development system that's written in itself and the

**24:48** · etoys system that you saw which is putting up this slide here is written in small talk and then I just made a little interpreter in the eToys machine for doing the rule-based particle system stuff and this is a very typical way of going about handling problems it's not

**25:14** · the only way some people like the program down here and write tons of programs to deal with the very same problems another way of doing it is fine languages v the problems gracefully and then the amount of code you have to write to get to the next level is not that large and all of this is kind of an example of Turing's idea of being able

**25:42** · to simulate any kind of mechanism on a relatively simple mechanism that has a few pieces of logic and a fair amount of memory okay so that's the kiddie world

**25:58** · now let's take a look at the adult world where we're going to go from programs that have tens of lines in the kiddie world but can still do interesting things to adult programs which tend to have zillions of lines and are surprisingly weak and in order to come up with a metric for this I'm going to use a metric of lines of code it's not

### Metric of Lines of Code

**26:24** · the only metric you could use but a line of code is something that a programmer has to write so it is one kind of unit of work and it's also unit of space so a 400-page book has 20,000 lines

**26:41** · could be English but it could be code could be in machine code it could be in C it could be in Java and a foot of books is about 300,000 lines and a meter of books stacked up like this is a million lines so that's a good metric million lines of code per meter and stacked up books and the Empire State

**27:11** · Building is 22,000 books high and 440 million lines of code right so if you've ever heard anybody heard of any programming systems that have 400 million lines of code yes though come on

**27:35** · yeah yeah take a look at our government sometime in fact if you look at your own little own laptop if you happen to be running Microsoft the operating system is about 120 million lines of code remember that's just the operating system it hasn't done anything for you yet just sitting there and then Microsoft Office is over a hundred million lines of code so that's 220

**28:09** · million lines of code it's about eleven thousand books of code anybody ever read all that code no way very few people who read it all have read eleven thousand books of anything I can guarantee you if

**28:28** · you read it all you're not going to read eleven thousand books of code so most of the code has never been over viewed by any single person or even any single group in fact much of the code in there is code that isn't even run but they're afraid to take it out they don't know whether it's run or not and this is it this is a problem on the

**28:52** · other hand of the looking at it from the standpoint of writing code the when you look at the actual features you get for this two hundred and twenty million lines of code it doesn't seem like it should be should take two hundred and twenty million lines of code just shouldn't back the first time around it was done at Xerox PARC did about half of this and it only took ten thousand lines of code so something

**29:22** · happened some kind of explosion of complications and complexity and here just to make you feel better I located a large financial products company whose name I will not put here that has more than 400 million lines of code in its primary offerings to its customers so

**29:45** · this is what they are actually maintaining and you can tell they're a little old-fashioned because their user interface is given in terms of screens which harks back to the days of mainframes they have 170,000 screens they have to deal with and that's about twenty thousand books or almost an Empire State Building worth of code

**30:12** · however if you're looking for a job if you came to UCLA to learn to program and get a job it's just this kind of stuff that you actually have to learn about because that is what business is mired in right now this is what they're hiring people this is why they're crying for programmers not to do better but just to take care of the mess that is already there think about that okay so I'm going to stick to I'll show

**30:47** · you a couple of examples in the time that's left of what might be done about this part of personal competed these several hundred millions of lines of code okay so let's take a look at this problem from a slightly different perspective over here we've got some gates over here we've got a problem this

**31:17** · is what we need we need to do something over here and the question is is what is it going to take us to get from there to there these days and so in terms of machine code lots of the kinds of things I'm talking about or literally billions of lines of code because machine code is written one instruction per line of code and maybe C gives eight to ten machine

**31:50** · code instructions per line of code so maybe something that would be billions would be hundreds of millions in C and we can imagine a higher-level language than C not the Java is that much higher

**32:10** · level language higher level in C but could imagine something higher level you can imagine something higher level imagine something it might do a lot of these tasks in just thousands of lines of code and the question is why do we

**32:29** · stay here down at the gear level for most of the programmatic that is still done today and this huh not a lot of the organization of code at this level which is a little bit more like the way biology organizes itself almost none of this still being done

**32:54** · okay so the programming effort comes down as we go to higher and higher level languages but computer science has not actually been up to the challenge of

**33:11** · putting in the amount of invention that's necessary to make programming systems that do this amount of work for us so we can think of an in-between is just a lot of work for any kind of programming language you do because there's packaging there's documentation there's debuggers there's an enormous amount of work that has to be done and the idea is that with more work which

**33:37** · gets tougher as you come this way you actually reduce the general programming effort so this is not popular so virtually all of the programming in business in the u.s.

**33:47** · today is done at this level still this is a level that is really not different from the level of programming in the 60s almost nothing has changed new languages have come along but they have not up to their level in any significant way but

**34:08** · just to go against the tide here even though you're going to be studying a lot of this stuff here I just want to make you aware of these ideas down here which if you're interested in research and in making things better you might poke your head into now what's funny about history is that there are people who are absolute geniuses who transcend the time in which they live so 50 years ago there

**34:42** · was no computer graphics this is the guy who invented computer graphics and he also invented object-oriented design systems so he actually did the work in

**34:58** · 62 and wrote it up in 63 so this is still the 50th anniversary of this I thought you'd like to see what this very first interactive graphic system looked like and what it could do now the first thing you have to visualize is this guy is sitting here with a pointer in his hand a light pen but he's in a computer that is about eight times maybe ten times the size of this room it was close to the size of at

### First Interactive Graphic System

**35:31** · least the first Fran's hall building it had its own roof it was the building and it was an air defense computer and from three o'clock in the morning to six o'clock in the morning they let this one guy play around with it and so here's

**35:50** · what he did and by the way this is not actually a computer display it just was an oscilloscope that put up spots so the first thing he had to do was to write programs that would make lines and arcs and and so forth and about a third of the capacity of this enormous machine was used just to make a simulated graphics display because there were no graphics displays okay so this will give you an idea so he gets some ink

**36:32** · and he just sketches in this flange because look at he's pointing at it now and he's giving it a constraint to make everybody mutually perpendicular and what you saw there was sketch pad solving the problem for him right so this way you program this system was by telling it what you wanted to have true and sketch bad and figure out how to have it be true same idea here make these two guys parallel now the

**37:03** · constraint is collinearity put these lines down these dashes I'm putting in here down on top of the guidelines

**37:22** · now he says okay let's make the guidelines transparent and now we've got a hole in the flange and you notice it has continued assuming the first clipping window ever done is that actually the drawing is done on a sheet of virtual paper about a third of a mile square now he wants to make a rivet he's

**37:48** · going to use the center here for the arc and now he's going to do the same trick he's going to say to these guys take these guys to make them all mutually poopin perpendicular that's going to drag the cross pieces that's going to drag the top of the rivet now he's going to show I'll start off with different

**38:16** · initial starting conditions and I'll still get something that obeys the constraints that I gave it now I could have put in absolute numbers in there you could have put in ratios this is why it's called sketchpad the idea is you should be able to work quickly get a rough idea of it and then tell the computer the rules that if they were solved was completed okay now he's

### Sketchpad

**38:45** · showing that what he drew is not just a rivet but it what it's what we call a class in an object-oriented language which he called a master so what he drew there was the master drawing of a rivet and what he's manipulating here is an instance of the rivet

**39:14** · so now he's showing yeah I can make more instances of the rivet and I can make them different sizes and so forth but he forgot that cross P so he goes to the master makes those guys transparent and we can see the rivet feels the instances of the rivet feels those things then the last part of this demo is that he can

**39:46** · take anything that he's constructed and make it into a master so now this is a master drawing of a flange with a rivet in it and now he's making instances of those okay so this is a yes go ahead

**40:27** · yeah yeah in fact on the larger movie which you can find online you can see the sheet is populated with lots of different things on it yes oh okay okay so so you have to realize this was a PhD thesis this is done in one year by one person and what the contributions were

**40:53** · is first interactive computer graphics object-oriented design structures constraints for programming so you didn't program it using sequential code at all and one of the great final things

**41:17** · he did was to show how you could make a bridge simulation without sketchpad knowing about bridges ahead of time because the whole point of this thing was that sketch pad was not supposed to know ahead of time what you were going to try and do in it the idea is you should be able to do everything and in fact the all of these drawings were made by sketch pad and the the text here these each text figure is

**41:45** · actually a drawing and sketch pad so there's a master for F and everywhere there's an F there's an instance of it so the whole system was done and this thing and I wants to ask Ivan how could you have done computer graphics object-oriented design and constraint

**42:07** · based programming all by yourself in one year and he said well I didn't know it was hard that's then okay so the bridge there's no movie of the bridge because it took the supercomputer back in 1962 about 20 seconds for each time step on it because of the computer power of this computer the size of a building was about that of a greeting card today but to celebrate the

**42:43** · anniversary of this system a couple of the guys at viewpoints Burke Freudenberg and Yoshi Yoshi ki Oshima made a version of this of this bridge sketch N and we put in the twinkling there so it looked like the display back then and so you can move things in you can turn on gravity you can hang away from it even

**43:18** · when it settles down it has a really settle down if I turn on the decimal points here see it's still wiggling just like wheel bridges do and I can

**43:37** · interesting to watch what happens when I stick this beam in here take a look at the numbers of the stress and strain around it when I drop this guy in here and notice this guy over on the Left felt that ripple across

**44:01** · yeah so one of the main things that's got people going from sketchpad most it was too hard for people to really know what to do with but one thing they were sure about was they need a better looking display so here's the very same thing rendered with them with a modern display and we can do a few more tricks like we can give letters wait

**44:37** · okay and we programmed this a little bit differently than fact we've done this several times now one of the students in this class last year Matthew Goldberg what did an internship with us and did a different version of this did a nice job of it we programmed it up in terms of three constraints not

**45:08** · the same kind of constraints that Ivan used but a different kind of constraint for instance this one looks suspiciously like it might have something to do with gravity so this is way to think of is this the three line program here so if I turn this off so all we've got left is the spring tension here should all null out which it does so we'll turn gravity back on again

**45:44** · and this bottom guy is the constraint for these pins so this bridge is pinned together and if I turn off the pin constraint that's holding everything together in this simulation

**46:15** · yeah so remember all those costumes that's all that bridge was and we can repurpose those costumes into something else like the user interface of the system I'm giving the right so this is a system that we programmed ourselves at viewpoints and it's a system I'm giving this talking I'm not obviously not using PowerPoint because you can't program in PowerPoint and I'm using it to show you

**46:50** · I'm going to show you one example because that's all I have time for and that is how the graphics in this system we're programmed now usually the graphics in your personal computer are about half a million to a million lines of code to do all of the compositing and

**47:19** · so forth what we're going to look at here is just take a look at the rendering part of this a render of being able to paint a pixel with the right shade so Dan a meringue here is a graduate student at UC San Diego who works with us came up with this formula so it's a nice little piece of math to represent it here's a programming

### Rendering

**47:44** · language that is as close to the formula as possible it's about twice the size of the math but it actually runs and it handles all rendering stuff done like this and I'll just to give you

**48:10** · now we have this flow of stuff with this programming graphics language sets up and what we what we wind up getting is something that's very complex to look at and debug but Brett Victor look them up on Google did this visualizer that's created automatically from the code I just showed you and this is a live system so here's a journey I'm going to

**48:41** · turn a addy into a B here and if I want to know where this pixel in the rendering comes from I can just put the mouse on it and touches this if I want to see where this guy is handled in the code if I want to see how the pipeline that's set up here of these five small

**49:10** · programs here I can just go here if I want it where did this pixel come from what happens if I turn this so when you're doing languages of the future the system is going to have to also produce the debuggers along with the languages themselves okay I think I think it's a hard stop at 10 of so I won't put any strain on you but if you're interested hang around and ask some questions and with that thank you very much