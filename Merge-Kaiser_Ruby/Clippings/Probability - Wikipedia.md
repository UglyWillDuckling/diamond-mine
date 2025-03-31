---
source: "https://en.m.wikipedia.org/wiki/Probability"
author:
  - "[[Contributors to Wikimedia projects]]"
published: 2001-08-05
created: 2025-03-17
tags:
---
**Probability** is a branch of [mathematics](https://en.m.wikipedia.org/wiki/Mathematics "Mathematics") and [statistics](https://en.m.wikipedia.org/wiki/Statistics "Statistics") concerning [events](https://en.m.wikipedia.org/wiki/Event_\(probability_theory\) "Event (probability theory)") and numerical descriptions of how likely they are to occur. The probability of an event is a number between 0 and 1; the larger the probability, the more likely an event is to occur.[^1][^stuart_and_ord_2009-2][^feller-3] This number is often expressed as a percentage (%), ranging from 0% to 100%. A simple example is the tossing of a fair (unbiased) coin. Since the coin is fair, the two outcomes ("heads" and "tails") are both equally probable; the probability of "heads" equals the probability of "tails"; and since no other outcomes are possible, the probability of either "heads" or "tails" is 1/2 (which could also be written as 0.5 or 50%).

![](https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Dice_Distribution_%28bar%29.svg/250px-Dice_Distribution_%28bar%29.svg.png)

The probabilities of rolling several numbers using two dice

These concepts have been given an [axiomatic](https://en.m.wikipedia.org/wiki/Probability_axioms "Probability axioms") mathematical formalization in *[probability theory](https://en.m.wikipedia.org/wiki/Probability_theory "Probability theory")*, which is used widely in [areas of study](https://en.m.wikipedia.org/wiki/Areas_of_study "Areas of study") such as [statistics](https://en.m.wikipedia.org/wiki/Statistics "Statistics"), [mathematics](https://en.m.wikipedia.org/wiki/Mathematics "Mathematics"), [science](https://en.m.wikipedia.org/wiki/Science "Science"), [finance](https://en.m.wikipedia.org/wiki/Finance "Finance"), [gambling](https://en.m.wikipedia.org/wiki/Gambling "Gambling"), [artificial intelligence](https://en.m.wikipedia.org/wiki/Artificial_intelligence "Artificial intelligence"), [machine learning](https://en.m.wikipedia.org/wiki/Machine_learning "Machine learning"), [computer science](https://en.m.wikipedia.org/wiki/Computer_science "Computer science"), [game theory](https://en.m.wikipedia.org/wiki/Game_theory "Game theory"), and [philosophy](https://en.m.wikipedia.org/wiki/Philosophy "Philosophy") to, for example, draw inferences about the expected frequency of events. Probability theory is also used to describe the underlying mechanics and regularities of [complex systems](https://en.m.wikipedia.org/wiki/Complex_systems "Complex systems").[^4]

Like other [theories](https://en.m.wikipedia.org/wiki/Theory "Theory"), the [theory of probability](https://en.m.wikipedia.org/wiki/Probability_theory "Probability theory") is a representation of its concepts in formal terms – that is, in terms that can be considered separately from their meaning. These formal terms are manipulated by the rules of mathematics and logic, and any results are interpreted or translated back into the problem domain.

There have been at least two successful attempts to formalize probability, namely the [Kolmogorov](https://en.m.wikipedia.org/wiki/Kolmogorov "Kolmogorov") formulation and the [Cox](https://en.m.wikipedia.org/wiki/Richard_Threlkeld_Cox "Richard Threlkeld Cox") formulation. In Kolmogorov's formulation (see also [probability space](https://en.m.wikipedia.org/wiki/Probability_space "Probability space")), [sets](https://en.m.wikipedia.org/wiki/Set_\(mathematics\) "Set (mathematics)") are interpreted as [events](https://en.m.wikipedia.org/wiki/Event_\(probability_theory\) "Event (probability theory)") and probability as a [measure](https://en.m.wikipedia.org/wiki/Measure_\(mathematics\) "Measure (mathematics)") on a class of sets. In [Cox's theorem](https://en.m.wikipedia.org/wiki/Cox%27s_theorem "Cox's theorem"), probability is taken as a primitive (i.e., not further analyzed), and the emphasis is on constructing a consistent assignment of probability values to propositions. In both cases, the [laws of probability](https://en.m.wikipedia.org/wiki/Probability_axioms "Probability axioms") are the same, except for technical details.

There are other methods for quantifying uncertainty, such as the [Dempster–Shafer theory](https://en.m.wikipedia.org/wiki/Dempster%E2%80%93Shafer_theory "Dempster–Shafer theory") or [possibility theory](https://en.m.wikipedia.org/wiki/Possibility_theory "Possibility theory"), but those are essentially different and not compatible with the usually-understood laws of probability.

## Mathematical treatment

![](https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Probability_vs_odds.svg/220px-Probability_vs_odds.svg.png)

Calculation of probability (risk) vs odds

Consider an experiment that can produce a number of results. The collection of all possible results is called the [sample space](https://en.m.wikipedia.org/wiki/Sample_space "Sample space") of the experiment, sometimes denoted as ${\displaystyle \Omega }$  . The [power set](https://en.m.wikipedia.org/wiki/Power_set "Power set") of the sample space is formed by considering all different collections of possible results. For example, rolling a die can produce six possible results. One collection of possible results gives an odd number on the die. Thus, the subset {1,3,5} is an element of the [power set](https://en.m.wikipedia.org/wiki/Power_set "Power set") of the sample space of dice rolls. These collections are called "events". In this case, {1,3,5} is the event that the die falls on some odd number. If the results that actually occur fall in a given event, the event is said to have occurred.

A probability is a [way of assigning](https://en.m.wikipedia.org/wiki/Function_\(mathematics\) "Function (mathematics)") every event a value between zero and one, with the requirement that the event made up of all possible results (in our example, the event {1,2,3,4,5,6}) is assigned a value of one. To qualify as a probability, the assignment of values must satisfy the requirement that for any collection of mutually exclusive events (events with no common results, such as the events {1,6}, {3}, and {2,4}), the probability that at least one of the events will occur is given by the sum of the probabilities of all the individual events.[^30]

The probability of an [event](https://en.m.wikipedia.org/wiki/Event_\(probability_theory\) "Event (probability theory)") *A* is written as ${\displaystyle P(A)}$  ,[^:2-31] ${\displaystyle p(A)}$  , or ${\displaystyle {\text{Pr}}(A)}$  .[^32] This mathematical definition of probability can extend to infinite sample spaces, and even uncountable sample spaces, using the concept of a measure.

The *opposite* or *complement* of an event *A* is the event \[not *A*\] (that is, the event of *A* not occurring), often denoted as ${\displaystyle A',A^{c}}$  , ${\displaystyle {\overline {A}},A^{\complement },\neg A}$  , or ${\displaystyle {\sim }A}$  ; its probability is given by *P*(not *A*) = 1 − *P*(*A*).[^33] As an example, the chance of not rolling a six on a six-sided die is 1 – (chance of rolling a six) = 1 − ⁠1/6⁠ = ⁠5/6⁠. For a more comprehensive treatment, see [Complementary event](https://en.m.wikipedia.org/wiki/Complementary_event "Complementary event").

If two events *A* and *B* occur on a single performance of an experiment, this is called the intersection or [joint probability](https://en.m.wikipedia.org/wiki/Joint_distribution "Joint distribution") of *A* and *B*, denoted as ${\displaystyle P(A\cap B).}$ 

If two events, *A* and *B* are [independent](https://en.m.wikipedia.org/wiki/Independence_\(probability_theory\) "Independence (probability theory)") then the joint probability is[^:2-31]

${\displaystyle P(A{\mbox{ and }}B)=P(A\cap B)=P(A)P(B).}$ 

![](https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Independent_and_Non-independent_Probability_Events.jpg/220px-Independent_and_Non-independent_Probability_Events.jpg)

Events A and B depicted as independent vs non-independent in space Ω

For example, if two coins are flipped, then the chance of both being heads is ${\displaystyle {\tfrac {1}{2}}\times {\tfrac {1}{2}}={\tfrac {1}{4}}.}$  [^34]

### Mutually exclusive events

If either event *A* or event *B* can occur but never both simultaneously, then they are called mutually exclusive events.

If two events are [mutually exclusive](https://en.m.wikipedia.org/wiki/Mutually_exclusive_events "Mutually exclusive events"), then the probability of *both* occurring is denoted as ${\displaystyle P(A\cap B)}$ and  ${\displaystyle P(A{\mbox{ and }}B)=P(A\cap B)=0}$  If two events are [mutually exclusive](https://en.m.wikipedia.org/wiki/Mutually_exclusive_events "Mutually exclusive events"), then the probability of *either* occurring is denoted as ${\displaystyle P(A\cup B)}$ and  ${\displaystyle P(A{\mbox{ or }}B)=P(A\cup B)=P(A)+P(B)-P(A\cap B)=P(A)+P(B)-0=P(A)+P(B)}$ 

For example, the chance of rolling a 1 or 2 on a six-sided die is ${\displaystyle P(1{\mbox{ or }}2)=P(1)+P(2)={\tfrac {1}{6}}+{\tfrac {1}{6}}={\tfrac {1}{3}}.}$ 

### Not (necessarily) mutually exclusive events

If the events are **not** (necessarily) mutually **exclusive** then  ${\displaystyle P\left(A{\hbox{ or }}B\right)=P(A\cup B)=P\left(A\right)+P\left(B\right)-P\left(A{\mbox{ and }}B\right).}$  Rewritten,  ${\displaystyle P\left(A\cup B\right)=P\left(A\right)+P\left(B\right)-P\left(A\cap B\right)}$ 

For example, when drawing a card from a deck of cards, the chance of getting a heart or a face card (J, Q, K) (or both) is ${\displaystyle {\tfrac {13}{52}}+{\tfrac {12}{52}}-{\tfrac {3}{52}}={\tfrac {11}{26}},}$ since among the 52 cards of a deck, 13 are hearts, 12 are face cards, and 3 are both: here the possibilities included in the "3 that are both" **are included** in each of the "13 hearts" and the "12 face cards", but should only be counted once.

This can be expanded further for multiple not (necessarily) mutually exclusive events. For three events, this proceeds as follows:  ${\displaystyle {\begin{aligned}P\left(A\cup B\cup C\right)=&P\left(\left(A\cup B\right)\cup C\right)\\=&P\left(A\cup B\right)+P\left(C\right)-P\left(\left(A\cup B\right)\cap C\right)\\=&P\left(A\right)+P\left(B\right)-P\left(A\cap B\right)+P\left(C\right)-P\left(\left(A\cap C\right)\cup \left(B\cap C\right)\right)\\=&P\left(A\right)+P\left(B\right)+P\left(C\right)-P\left(A\cap B\right)-\left(P\left(A\cap C\right)+P\left(B\cap C\right)-P\left(\left(A\cap C\right)\cap \left(B\cap C\right)\right)\right)\\P\left(A\cup B\cup C\right)=&P\left(A\right)+P\left(B\right)+P\left(C\right)-P\left(A\cap B\right)-P\left(A\cap C\right)-P\left(B\cap C\right)+P\left(A\cap B\cap C\right)\end{aligned}}}$  It can be seen, then, that this pattern can be repeated for any number of events.

### Conditional probability

*[Conditional probability](https://en.m.wikipedia.org/wiki/Conditional_probability "Conditional probability")* is the probability of some event *A*, given the occurrence of some other event *B*. Conditional probability is written ${\displaystyle P(A\mid B)}$  , and is read "the probability of *A*, given *B*". It is defined by[^35]

${\displaystyle P(A\mid B)={\frac {P(A\cap B)}{P(B)}}\,}$ 

If ${\displaystyle P(B)=0}$ then ${\displaystyle P(A\mid B)}$ is formally [undefined](https://en.m.wikipedia.org/wiki/Undefined_\(mathematics\) "Undefined (mathematics)") by this expression. In this case ${\displaystyle A}$ and ${\displaystyle B}$ are independent, since ${\displaystyle P(A\cap B)=P(A)P(B)=0.}$ However, it is possible to define a conditional probability for some zero-probability events, for example by using a [σ-algebra](https://en.m.wikipedia.org/wiki/%CE%A3-algebra "Σ-algebra") of such events (such as those arising from a [continuous random variable](https://en.m.wikipedia.org/wiki/Continuous_random_variable "Continuous random variable")).[^36]

For example, in a bag of 2 red balls and 2 blue balls (4 balls in total), the probability of taking a red ball is ${\displaystyle 1/2;}$ however, when taking a second ball, the probability of it being either a red ball or a blue ball depends on the ball previously taken. For example, if a red ball was taken, then the probability of picking a red ball again would be ${\displaystyle 1/3,}$ since only 1 red and 2 blue balls would have been remaining. And if a blue ball was taken previously, the probability of taking a red ball will be ${\displaystyle 2/3.}$ 

In [probability theory](https://en.m.wikipedia.org/wiki/Probability_theory "Probability theory") and applications, *[Bayes' rule](https://en.m.wikipedia.org/wiki/Bayes%27_theorem "Bayes' theorem")* relates the [odds](https://en.m.wikipedia.org/wiki/Odds "Odds") of event ${\displaystyle A_{1}}$ to event ${\displaystyle A_{2},}$ before (prior to) and after (posterior to) [conditioning](https://en.m.wikipedia.org/wiki/Conditional_probability "Conditional probability") on another event ${\displaystyle B.}$ The odds on ${\displaystyle A_{1}}$ to event ${\displaystyle A_{2}}$ is simply the ratio of the probabilities of the two events. When arbitrarily many events ${\displaystyle A}$ are of interest, not just two, the rule can be rephrased as *posterior is proportional to prior times likelihood*, ${\displaystyle P(A|B)\propto P(A)P(B|A)}$ where the proportionality symbol means that the left hand side is proportional to (i.e., equals a constant times) the right hand side as ${\displaystyle A}$ varies, for fixed or given ${\displaystyle B}$ (Lee, 2012; Bertsch McGrayne, 2012). In this form it goes back to Laplace (1774) and to Cournot (1843); see Fienberg (2005).

### Summary of probabilities

## Relation to randomness and probability in quantum mechanics

In a [deterministic](https://en.m.wikipedia.org/wiki/Determinism "Determinism") universe, based on [Newtonian](https://en.m.wikipedia.org/wiki/Newtonian_mechanics "Newtonian mechanics") concepts, there would be no probability if all conditions were known ([Laplace's demon](https://en.m.wikipedia.org/wiki/Laplace%27s_demon "Laplace's demon")) (but there are situations in which [sensitivity to initial conditions](https://en.m.wikipedia.org/wiki/Chaos_theory "Chaos theory") exceeds our ability to measure them, i.e. know them). In the case of a [roulette](https://en.m.wikipedia.org/wiki/Roulette "Roulette") wheel, if the force of the hand and the period of that force are known, the number on which the ball will stop would be a certainty (though as a practical matter, this would likely be true only of a roulette wheel that had not been exactly levelled – as Thomas A. Bass' [Newtonian Casino](https://en.m.wikipedia.org/wiki/Eudaemons "Eudaemons") revealed). This also assumes knowledge of inertia and friction of the wheel, weight, smoothness, and roundness of the ball, variations in hand speed during the turning, and so forth. A probabilistic description can thus be more useful than Newtonian mechanics for analyzing the pattern of outcomes of repeated rolls of a roulette wheel. Physicists face the same situation in the [kinetic theory of gases](https://en.m.wikipedia.org/wiki/Kinetic_theory_of_gases "Kinetic theory of gases"), where the system, while deterministic *in principle*, is so complex (with the number of molecules typically the order of magnitude of the [Avogadro constant](https://en.m.wikipedia.org/wiki/Avogadro_constant "Avogadro constant") 6.02×10<sup>23</sup>) that only a statistical description of its properties is feasible.[^37]

[Probability theory](https://en.m.wikipedia.org/wiki/Probability_theory "Probability theory") is required to describe quantum phenomena.[^38] A revolutionary discovery of early 20th century [physics](https://en.m.wikipedia.org/wiki/Physics "Physics") was the random character of all physical processes that occur at sub-atomic scales and are governed by the laws of [quantum mechanics](https://en.m.wikipedia.org/wiki/Quantum_mechanics "Quantum mechanics"). The objective [wave function](https://en.m.wikipedia.org/wiki/Wave_function "Wave function") evolves deterministically but, according to the [Copenhagen interpretation](https://en.m.wikipedia.org/wiki/Copenhagen_interpretation "Copenhagen interpretation"), it deals with probabilities of observing, the outcome being explained by a [wave function collapse](https://en.m.wikipedia.org/wiki/Wave_function_collapse "Wave function collapse") when an observation is made. However, the loss of [determinism](https://en.m.wikipedia.org/wiki/Determinism "Determinism") for the sake of [instrumentalism](https://en.m.wikipedia.org/wiki/Instrumentalism "Instrumentalism") did not meet with universal approval. [Albert Einstein](https://en.m.wikipedia.org/wiki/Albert_Einstein "Albert Einstein") famously [remarked](https://de.wikipedia.org/wiki/Albert_Einstein#Quellenangaben_und_Anmerkungen "de:Albert Einstein") in a letter to [Max Born](https://en.m.wikipedia.org/wiki/Max_Born "Max Born"): "I am convinced that God does not play dice".[^39] Like Einstein, [Erwin Schrödinger](https://en.m.wikipedia.org/wiki/Erwin_Schr%C3%B6dinger "Erwin Schrödinger"), who [discovered](https://en.m.wikipedia.org/wiki/Schr%C3%B6dinger_equation#Historical_background_and_development "Schrödinger equation") the wave function, believed quantum mechanics is a [statistical](https://en.m.wikipedia.org/wiki/Statistical "Statistical") approximation of an underlying deterministic [reality](https://en.m.wikipedia.org/wiki/Reality "Reality").[^40] In some modern interpretations of the statistical mechanics of measurement, [quantum decoherence](https://en.m.wikipedia.org/wiki/Quantum_decoherence "Quantum decoherence") is invoked to account for the appearance of subjectively probabilistic experimental outcomes.

[^stuart_and_ord_2009-2]: "Kendall's Advanced Theory of Statistics, Volume 1: Distribution Theory", Alan Stuart and Keith Ord, 6th ed., (2009), [ISBN](https://en.m.wikipedia.org/wiki/ISBN_\(identifier\) "ISBN (identifier)") [978-0-534-24312-8](https://en.m.wikipedia.org/wiki/Special:BookSources/978-0-534-24312-8 "Special:BookSources/978-0-534-24312-8").

[^feller-3]: William Feller, *An Introduction to Probability Theory and Its Applications*, vol. 1, 3rd ed., (1968), Wiley, [ISBN](https://en.m.wikipedia.org/wiki/ISBN_\(identifier\) "ISBN (identifier)") [0-471-25708-7](https://en.m.wikipedia.org/wiki/Special:BookSources/0-471-25708-7 "Special:BookSources/0-471-25708-7").

[^4]: [Probability Theory](http://www.britannica.com/EBchecked/topic/477530/probability-theory). The Britannica website.

[^emergence-5]: [Hacking, I.](https://en.m.wikipedia.org/wiki/Ian_Hacking "Ian Hacking") (2006) *The Emergence of Probability: A Philosophical Study of Early Ideas about Probability, Induction and Statistical Inference*, Cambridge University Press, [ISBN](https://en.m.wikipedia.org/wiki/ISBN_\(identifier\) "ISBN (identifier)") [978-0-521-68557-3](https://en.m.wikipedia.org/wiki/Special:BookSources/978-0-521-68557-3 "Special:BookSources/978-0-521-68557-3") <sup class="noprint Inline-Template">[<i><a href="https://en.m.wikipedia.org/wiki/Wikipedia:Citing_sources" title="Wikipedia:Citing sources"><span title="This citation requires a reference to the specific page or range of pages in which the material appears. (June 2012)">page&nbsp;needed</span></a></i>]</sup>

[^6]: [Hacking, Ian](https://en.m.wikipedia.org/wiki/Ian_Hacking "Ian Hacking") (1965). *The Logic of Statistical Inference*. Cambridge University Press. [ISBN](https://en.m.wikipedia.org/wiki/ISBN_\(identifier\) "ISBN (identifier)") [978-0-521-05165-1](https://en.m.wikipedia.org/wiki/Special:BookSources/978-0-521-05165-1 "Special:BookSources/978-0-521-05165-1").<sup class="noprint Inline-Template">[<i><a href="https://en.m.wikipedia.org/wiki/Wikipedia:Citing_sources" title="Wikipedia:Citing sources"><span title="This citation requires a reference to the specific page or range of pages in which the material appears. (June 2012)">page&nbsp;needed</span></a></i>]</sup>

[^7]: Finetti, Bruno de (1970). "Logical foundations and measurement of subjective probability". *Acta Psychologica*. **34**: 129–145\. [doi](https://en.m.wikipedia.org/wiki/Doi_\(identifier\) "Doi (identifier)"):[10.1016/0001-6918(70)90012-0](https://doi.org/10.1016%2F0001-6918%2870%2990012-0).

[^8]: Hájek, Alan (21 October 2002). Edward N. Zalta (ed.). ["Interpretations of Probability"](http://plato.stanford.edu/archives/win2012/entries/probability-interpret/). *The Stanford Encyclopedia of Philosophy* (Winter 2012 ed.). Retrieved 22 April 2013.

[^9]: Jaynes, E.T. (2003). "Section A.2 The de Finetti system of probability". In Bretthorst, G. Larry (ed.). *Probability Theory: The Logic of Science* (1 ed.). Cambridge University Press. [ISBN](https://en.m.wikipedia.org/wiki/ISBN_\(identifier\) "ISBN (identifier)") [978-0-521-59271-0](https://en.m.wikipedia.org/wiki/Special:BookSources/978-0-521-59271-0 "Special:BookSources/978-0-521-59271-0").

[^10]: Hogg, Robert V.; Craig, Allen; McKean, Joseph W. (2004). *Introduction to Mathematical Statistics* (6th ed.). Upper Saddle River: Pearson. [ISBN](https://en.m.wikipedia.org/wiki/ISBN_\(identifier\) "ISBN (identifier)") [978-0-13-008507-8](https://en.m.wikipedia.org/wiki/Special:BookSources/978-0-13-008507-8 "Special:BookSources/978-0-13-008507-8").<sup class="noprint Inline-Template">[<i><a href="https://en.m.wikipedia.org/wiki/Wikipedia:Citing_sources" title="Wikipedia:Citing sources"><span title="This citation requires a reference to the specific page or range of pages in which the material appears. (June 2012)">page&nbsp;needed</span></a></i>]</sup>

[^11]: Jaynes, E.T. (2003). "Section 5.3 Converging and diverging views". In Bretthorst, G. Larry (ed.). *Probability Theory: The Logic of Science* (1 ed.). Cambridge University Press. [ISBN](https://en.m.wikipedia.org/wiki/ISBN_\(identifier\) "ISBN (identifier)") [978-0-521-59271-0](https://en.m.wikipedia.org/wiki/Special:BookSources/978-0-521-59271-0 "Special:BookSources/978-0-521-59271-0").

[^13]: [Freund, John.](https://en.m.wikipedia.org/wiki/John_E._Freund "John E. Freund") (1973) *Introduction to Probability*. Dickenson [ISBN](https://en.m.wikipedia.org/wiki/ISBN_\(identifier\) "ISBN (identifier)") [978-0-8221-0078-2](https://en.m.wikipedia.org/wiki/Special:BookSources/978-0-8221-0078-2 "Special:BookSources/978-0-8221-0078-2") (p. 1)

[^jeffrey-14]: Jeffrey, R.C., *Probability and the Art of Judgment,* Cambridge University Press. (1992). pp. 54–55 . [ISBN](https://en.m.wikipedia.org/wiki/ISBN_\(identifier\) "ISBN (identifier)") [0-521-39459-7](https://en.m.wikipedia.org/wiki/Special:BookSources/0-521-39459-7 "Special:BookSources/0-521-39459-7")

[^franklin-15]: Franklin, J. (2001) *The Science of Conjecture: Evidence and Probability Before Pascal,* Johns Hopkins University Press. (pp. 22, 113, 127)

[^16]: ["*Some laws and problems in classical probability and how Cardano anticipated them* Gorrochum, P. *Chance* magazine 2012"](http://www.columbia.edu/~pg2113/index_files/Gorroochurn-Some%20Laws.pdf) (PDF).

[^17]: Abrams, William. [*A Brief History of Probability*](https://web.archive.org/web/20170724052656/http://www.secondmoment.org/articles/probability.php). Second Moment. Archived from [the original](http://www.secondmoment.org/articles/probability.php) on 24 July 2017. Retrieved 23 May 2008.

[^18]: Ivancevic, Vladimir G.; Ivancevic, Tijana T. (2008). *Quantum leap : from Dirac and Feynman, across the universe, to human body and mind*. Singapore; Hackensack, NJ: World Scientific. p. 16. [ISBN](https://en.m.wikipedia.org/wiki/ISBN_\(identifier\) "ISBN (identifier)") [978-981-281-927-7](https://en.m.wikipedia.org/wiki/Special:BookSources/978-981-281-927-7 "Special:BookSources/978-981-281-927-7").

[^19]: Franklin, James (2001). *The Science of Conjecture: Evidence and Probability Before Pascal*. Johns Hopkins University Press. [ISBN](https://en.m.wikipedia.org/wiki/ISBN_\(identifier\) "ISBN (identifier)") [978-0-8018-6569-5](https://en.m.wikipedia.org/wiki/Special:BookSources/978-0-8018-6569-5 "Special:BookSources/978-0-8018-6569-5").

[^20]: Shoesmith, Eddie (November 1985). ["Thomas Simpson and the arithmetic mean"](https://doi.org/10.1016%2F0315-0860%2885%2990044-8). *Historia Mathematica*. **12** (4): 352–355\. [doi](https://en.m.wikipedia.org/wiki/Doi_\(identifier\) "Doi (identifier)"):[10.1016/0315-0860(85)90044-8](https://doi.org/10.1016%2F0315-0860%2885%2990044-8).

[^wilson1923-21]: Wilson EB (1923) "First and second laws of error". [Journal of the American Statistical Association](https://en.m.wikipedia.org/wiki/Journal_of_the_American_Statistical_Association "Journal of the American Statistical Association"), 18, 143

[^22]: Seneta, Eugene William. [""Adrien-Marie Legendre" (version 9)"](https://web.archive.org/web/20160203070724/http://statprob.com/encyclopedia/AdrienMarieLegendre.html). *StatProb: The Encyclopedia Sponsored by Statistics and Probability Societies*. Archived from [the original](http://statprob.com/encyclopedia/AdrienMarieLegendre.html) on 3 February 2016. Retrieved 27 January 2016.

[^23]: Weber, Richard. ["Markov Chains"](http://www.statslab.cam.ac.uk/~rrw1/markov/M.pdf) (PDF). *Statistical Laboratory*. University of Cambridge.

[^24]: Vitanyi, Paul M.B. (1988). ["Andrei Nikolaevich Kolmogorov"](http://homepages.cwi.nl/~paulv/KOLMOGOROV.BIOGRAPHY.html). *CWI Quarterly* (1): 3–18. Retrieved 27 January 2016.

[^25]: Wilcox, Rand R. (2016). *Understanding and applying basic statistical methods using R*. Hoboken, New Jersey. [ISBN](https://en.m.wikipedia.org/wiki/ISBN_\(identifier\) "ISBN (identifier)") [978-1-119-06140-3](https://en.m.wikipedia.org/wiki/Special:BookSources/978-1-119-06140-3 "Special:BookSources/978-1-119-06140-3"). [OCLC](https://en.m.wikipedia.org/wiki/OCLC_\(identifier\) "OCLC (identifier)") [949759319](https://search.worldcat.org/oclc/949759319).`{{[cite book](https://en.m.wikipedia.org/wiki/Template:Cite_book "Template:Cite book")}}`: CS1 maint: location missing publisher ([link](https://en.m.wikipedia.org/wiki/Category:CS1_maint:_location_missing_publisher "Category:CS1 maint: location missing publisher"))

[^26]: Singh, Laurie (2010) "Whither Efficient Markets? Efficient Market Theory and Behavioral Finance". The Finance Professionals' Post, 2010.

[^edwards_2012_2-27]: [Edwards, Anthony William Fairbank](https://en.m.wikipedia.org/wiki/Anthony_William_Fairbank_Edwards "Anthony William Fairbank Edwards") (September 2012). ["Reginald Crundall Punnett: First Arthur Balfour Professor of Genetics, Cambridge, 1912"](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3430543). Perspectives. *[Genetics](https://en.m.wikipedia.org/wiki/Genetics_\(journal\) "Genetics (journal)")*. **192** (1). Gonville and Caius College, Cambridge, UK: [Genetics Society of America](https://en.m.wikipedia.org/wiki/Genetics_Society_of_America "Genetics Society of America"): 3–13\. [doi](https://en.m.wikipedia.org/wiki/Doi_\(identifier\) "Doi (identifier)"):[10.1534/genetics.112.143552](https://doi.org/10.1534%2Fgenetics.112.143552). [PMC](https://en.m.wikipedia.org/wiki/PMC_\(identifier\) "PMC (identifier)") [3430543](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3430543). [PMID](https://en.m.wikipedia.org/wiki/PMID_\(identifier\) "PMID (identifier)") [22964834](https://pubmed.ncbi.nlm.nih.gov/22964834). pp. 5–6: \[…\] Punnett's square seems to have been a development of 1905, too late for the first edition of his *Mendelism* (May 1905) but much in evidence in *Report III to the Evolution Committee of the Royal Society* \[(Bateson et al. 1906b) "received March 16, 1906"\]. The earliest mention is contained in a letter to Bateson from Francis Galton dated October 1, 1905 (Edwards 2012). We have the testimony of Bateson (1909, p. 57) that "For the introduction of this system \[the 'graphic method'\], which greatly simplifies difficult cases, I am indebted to Mr. Punnett." \[…\] The first published diagrams appeared in 1906. \[…\] when Punnett published the second edition of his *Mendelism*, he used a slightly different format (\[…\] Punnett 1907, p. 45) \[…\] In the third edition (Punnett 1911, p. 34) he reverted to the arrangement \[…\] with a description of the construction of what he called the "chessboard" method (although in truth it is more like a multiplication table). \[…\] (11 pages)

[^28]: Gao, J.Z.; Fong, D.; Liu, X. (April 2011). "Mathematical analyses of casino rebate systems for VIP gambling". *International Gambling Studies*. **11** (1): 93–106\. [doi](https://en.m.wikipedia.org/wiki/Doi_\(identifier\) "Doi (identifier)"):[10.1080/14459795.2011.552575](https://doi.org/10.1080%2F14459795.2011.552575). [S2CID](https://en.m.wikipedia.org/wiki/S2CID_\(identifier\) "S2CID (identifier)") [144540412](https://api.semanticscholar.org/CorpusID:144540412).

[^29]: Gorman, Michael F. (2010). "Management Insights". *Management Science*. **56**: iv–vii. [doi](https://en.m.wikipedia.org/wiki/Doi_\(identifier\) "Doi (identifier)"):[10.1287/mnsc.1090.1132](https://doi.org/10.1287%2Fmnsc.1090.1132).

[^30]: Ross, Sheldon M. (2010). *A First course in Probability* (8th ed.). Pearson Prentice Hall. pp. 26–27\. [ISBN](https://en.m.wikipedia.org/wiki/ISBN_\(identifier\) "ISBN (identifier)") [9780136033134](https://en.m.wikipedia.org/wiki/Special:BookSources/9780136033134 "Special:BookSources/9780136033134").

[^:2-31]: Weisstein, Eric W. ["Probability"](https://mathworld.wolfram.com/Probability.html). *mathworld.wolfram.com*. Retrieved 10 September 2020.

[^32]: Olofsson (2005) p. 8.

[^33]: Olofsson (2005), p. 9

[^34]: Olofsson (2005) p. 35.

[^35]: Olofsson (2005) p. 29.

[^36]: ["Conditional probability with respect to a sigma-algebra"](https://www.statlect.com/fundamentals-of-probability/conditional-probability-as-a-random-variable). *statlect.com*. Retrieved 4 July 2022.

[^37]: Riedi, P.C. (1976). Kinetic Theory of Gases-I. In: Thermal Physics. Palgrave, London. [https://doi.org/10.1007/978-1-349-15669-6\_8](https://doi.org/10.1007/978-1-349-15669-6_8)

[^38]: Burgin, Mark (2010). "Interpretations of Negative Probabilities". p. 1. [arXiv](https://en.m.wikipedia.org/wiki/ArXiv_\(identifier\) "ArXiv (identifier)"):[1008.1287v1](https://arxiv.org/abs/1008.1287v1) \[[physics.data-an](https://arxiv.org/archive/physics.data-an)\].

[^39]: *Jedenfalls bin ich überzeugt, daß der Alte nicht würfelt.* Letter to Max Born, 4 December 1926, in: [Einstein/Born Briefwechsel 1916–1955](https://books.google.com/books?id=LQIsAQAAIAAJ&q=achtung-gebietend).

[^40]: Moore, W.J. (1992). *Schrödinger: Life and Thought*. [Cambridge University Press](https://en.m.wikipedia.org/wiki/Cambridge_University_Press "Cambridge University Press"). p. 479. [ISBN](https://en.m.wikipedia.org/wiki/ISBN_\(identifier\) "ISBN (identifier)") [978-0-521-43767-7](https://en.m.wikipedia.org/wiki/Special:BookSources/978-0-521-43767-7 "Special:BookSources/978-0-521-43767-7").