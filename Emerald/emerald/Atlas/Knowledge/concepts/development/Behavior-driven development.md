---
author: 
created: 2025-05-22
published: 2005-10-22
source: https://en.wikipedia.org/wiki/Behavior-driven_development
related:
  - "[[Test Drive Development]]"
tags:
  - concept/development
---
**Behavior-driven development** (**BDD**) involves naming [software tests](https://en.wikipedia.org/wiki/Software_testing "Software testing") using [domain language](https://en.wikipedia.org/wiki/Domain_model "Domain model") to describe the behavior of the [code](https://en.wikipedia.org/wiki/Source_code "Source code").

BDD involves use of a [domain-specific language](https://en.wikipedia.org/wiki/Domain-specific_language "Domain-specific language") (DSL) using natural-language constructs (e.g., English-like sentences) that can express the behavior and the expected outcomes.

Proponents claim it encourages collaboration among developers, quality assurance experts, and customer representatives in a software project.[^1] [^2] It encourages teams to use conversation and concrete examples to formalize a shared understanding of how the application should behave.[^3] BDD is considered an effective practice especially when the *problem space* is complex.[^4]

BDD is considered a refinement of [test-driven development](https://en.wikipedia.org/wiki/Test-driven_development "Test-driven development") (TDD).[^1] [^5] [^6] [^7] [^8] BDD combines the techniques of TDD with ideas from [domain-driven design](https://en.wikipedia.org/wiki/Domain-driven_design "Domain-driven design") and [object-oriented analysis and design](https://en.wikipedia.org/wiki/Object-oriented_analysis_and_design "Object-oriented analysis and design") to provide software development and management teams with shared tools and a shared process to collaborate on software development.[^1] [^7]

At a high level, BDD is an idea about how software development should be managed by both business interests and technical insight. Its *practice* involves use of specialized tools.[^5] Some tools specifically for BDD can be used for TDD. The tools automate the [ubiquitous language](https://en.wikipedia.org/wiki/Domain-driven_design#Building_blocks "Domain-driven design").

## Overview

BDD is a process by which DSL structured natural-language statements are converted into executable tests. The result are tests that read like acceptance criteria for a given function.

As such, BDD is an extension of TDD.

BDD focuses on:

- Where to start in the process
- What to test and what not to test
- How much to test in one go
- What to call the tests
- How to understand why a test fails

At its heart, BDD is about rethinking the approach to [automated testing](https://en.wikipedia.org/wiki/Automated_testing "Automated testing") (including [unit testing](https://en.wikipedia.org/wiki/Unit_testing "Unit testing") and [acceptance testing](https://en.wikipedia.org/wiki/Acceptance_testing "Acceptance testing")) in order to avoid issues that naturally arise. For example, BDD suggests that unit test names be whole sentences starting with a conditional verb ("should" in English for example) and should be written in order of business value. Acceptance tests should be written using the standard agile framework of a [user story](https://en.wikipedia.org/wiki/User_story "User story"): "Being a \[role/actor/stakeholder\] I want a \[feature/capability\] yielding a \[benefit\]". Acceptance criteria should be written in terms of scenarios and implemented in classes: [Given \[initial context\], when \[event occurs\], then \[ensure some outcomes\]](https://en.wikipedia.org/wiki/Given-When-Then "Given-When-Then") .

Starting from this point, many people developed BDD frameworks over a period of years, finally framing it in terms of a communication and collaboration framework for developers, [QA](https://en.wikipedia.org/wiki/Quality_assurance "Quality assurance") and non-technical or business participants in a software project.[^9]

## Principles

BDD suggests that software tests should be named in terms of desired *behavior*.[^5] [^7] Borrowing from [agile software development](https://en.wikipedia.org/wiki/Agile_software_development "Agile software development") the "desired behavior" in this case consists of the requirements set by the business — that is, the desired behavior that has [business value](https://en.wikipedia.org/wiki/Business_value "Business value") for whatever entity commissioned the software unit under construction.[^5] Within BDD practice, this is referred to as BDD being an "outside-in" activity.

TDD does not differentiate tests in terms of high-level software requirements, low-level technical details or anything in between. One way of looking at BDD therefore, is that it is an evolution of TDD which makes more specific choices.

### Behavioral specifications

Another BDD suggestion relates to *how* the desired behavior should be specified. BDD suggests using a semi-formal format for behavioral specification which is borrowed from user story specifications from the field of [object-oriented analysis and design](https://en.wikipedia.org/wiki/Object-oriented_analysis_and_design "Object-oriented analysis and design"). The [scenario](https://en.wikipedia.org/wiki/Scenario_\(computing\) "Scenario (computing)") aspect of this format may be regarded as an application of [Hoare logic](https://en.wikipedia.org/wiki/Hoare_logic "Hoare logic") to behavioral specification of software using the domain-specific language.

BDD suggests that business analysts and software developers should collaborate in this area and should specify behavior in terms of user stories, which are each explicitly documented. Each user story should, to some extent, follow the structure:[^5]

Title

An explicit title.

Narrative

A short introductory section with the following structure:
- **As a**: the person or role who will benefit from the feature;
- **I want**: the feature;
- **so that**: the benefit or value of the feature.

Acceptance criteria

A description of each specific [scenario](https://en.wikipedia.org/wiki/Scenario_\(computing\) "Scenario (computing)") of the narrative with the following structure:
- **Given**: the initial context at the beginning of the scenario, in one or more clauses;
- **When**: the event that triggers the scenario;
- **Then**: the expected outcome, in one or more clauses.

BDD does not require how this information is formatted, but it does suggest that a team should decide on a relatively simple, standardized format with the above elements.[^5] It also suggests that the scenarios should be phrased declaratively rather than imperatively — in the business language, with no reference to elements of the UI through which the interactions take place.[^10] This format is referred to in [Cucumber](https://en.wikipedia.org/wiki/Cucumber_\(software\) "Cucumber (software)") as the [Gherkin language](https://en.wikipedia.org/wiki/Cucumber_\(software\)#Gherkin_language "Cucumber (software)").

BDD borrows the concept of the *ubiquitous language* from [domain driven design](https://en.wikipedia.org/wiki/Domain_driven_design "Domain driven design").[^5] [^7] A ubiquitous language is a (semi-)formal language that is shared by all members of a software development team — both software developers and non-technical personnel.[^11] The language in question is both used and developed by all team members as a common means of discussing the domain of the software in question.[^11] In this way BDD becomes a vehicle for communication between all the different roles in a software project.[^5]

A common risk with software development includes communication breakdowns between Developers and Business Stakeholders.[^12] BDD uses the specification of desired behavior as a ubiquitous language for the project Team members. This is the reason that BDD insists on a semi-formal language for behavioral specification: some formality is a requirement for being a ubiquitous language.[^5] In addition, having such a ubiquitous language creates a domain model of specifications, so that specifications may be reasoned about formally.[^13] This model is also the basis for the different BDD-supporting software tools that are available.

The example given above establishes a user story for a software system under development. This user story identifies a stakeholder, a business effect and a business value. It also describes several scenarios, each with a precondition, trigger and expected outcome. Each of these parts is exactly identified by the more formal part of the language (the term **Given** might be considered a [keyword](https://en.wikipedia.org/wiki/Keyword_\(computer_programming\) "Keyword (computer programming)"), for example) and may therefore be processed in some way by a tool that understands the formal parts of the ubiquitous language.

Most BDD applications use text-based DSLs and specification approaches. However, graphical modeling of integration scenarios has also been applied successfully in practice, e.g., for testing purposes. [^14]

## Specialized tooling

Much like TDD, BDD may involve using specialized tooling.

BDD requires not only test code as does TDD, but also a document that describes behavior in a more human-readable language. This requires a two-step process for executing the tests, reading and parsing the descriptions, and reading the test code and finding the corresponding test implementation to execute. This process makes BDD more laborious for developers. Proponents suggest that due to its human-readable nature the value of those documents extends to a relatively non-technical audience, and can hence serve as a communication means for describing requirements ("features").

### Tooling principles

In principle, a BDD support tool is a testing framework for software, much like the tools that support TDD. However, where TDD tools tend to be quite free-format in what is allowed for specifying tests, BDD tools are linked to the definition of the ubiquitous language.

The ubiquitous language allows business analysts to document behavioral requirements in a way that will also be understood by developers. The principle of BDD support tooling is to make these same requirements documents directly executable as a collection of tests. If this cannot be achieved because of reasons related to the technical tool that enables the execution of the specifications, then either the style of writing the behavioral requirements must be altered or the tool must be changed.[^15] The exact implementation of behavioral requirements varies per tool, but agile practice has come up with the following general process:

- The tooling reads a specification document.
- The tooling directly understands completely formal parts of the ubiquitous language (such as the **Given** keyword in the example above). Based on this, the tool breaks each scenario up into meaningful clauses.
- Each individual clause in a scenario is transformed into some sort of parameter for a test for the user story. This part requires project-specific work by the software developers.
- The framework then executes the test for each scenario, with the parameters from that scenario.

A separate subcategory of behavior-driven development is formed by tools that use specifications as an input language rather than user stories. Specification tools don't use user stories as an input format for [test scenarios](https://en.wikipedia.org/wiki/Scenario_testing "Scenario testing") but rather use functional specifications for units that are being tested. These specifications often have a more technical nature than user stories and are usually less convenient for communication with business personnel than are user stories.[^5] [^16] An example of a specification for a [stack](https://en.wikipedia.org/wiki/Stack_\(abstract_data_type\) "Stack (abstract data type)") might look like this:

```
Specification: Stack

When a new stack is created
Then it is empty

When an element is added to the stack
Then that element is at the top of the stack

When a stack has N elements 
And element E is on top of the stack
Then a pop operation returns E
And the new size of the stack is N-1
```

Such a specification may exactly specify the behavior of the component being tested, but is less meaningful to a business user. As a result, specification-based testing is seen in BDD practice as a complement to story-based testing and operates at a lower level. Specification testing is often seen as a replacement for free-format unit testing.[^16]

The "three amigos", also referred to as a "Specification Workshop", is a meeting where the product owner discusses the requirement in the form of specification by example with different stakeholders like the QA and development team. The key goal for this discussion is to trigger conversation and identify any missing specifications. The discussion also gives a platform for QA, development team and product owner to converge and hear out each other's perspective to enrich the requirement and also make sure if they are building the right product.[^17]

The three amigos are:

- Business - Role of the business user is to define the problem only and not venture into suggesting a solution
- Development - Role of the developers involve suggesting ways to fix the problem
- Testing - Role of testers is to question the solution, bring up as many as different possibilities for brain storming through what-if scenarios and help make the solution more precise to fix the problem.

## See also

- [Specification by example](https://en.wikipedia.org/wiki/Specification_by_example "Specification by example")
- [Behat](https://en.wikipedia.org/wiki/Behat_\(computer_science\) "Behat (computer science)") (PHP framework)
- [Cynefin framework](https://en.wikipedia.org/wiki/Cynefin_framework "Cynefin framework")
- [Concordion](https://en.wikipedia.org/wiki/Concordion "Concordion") (Java framework)
- [RSpec](https://en.wikipedia.org/wiki/RSpec "RSpec")
- [Gauge](https://en.wikipedia.org/wiki/Gauge_\(software\) "Gauge (software)")
- [Jasmine (JavaScript testing framework)](https://en.wikipedia.org/wiki/Jasmine_\(JavaScript_testing_framework\) "Jasmine (JavaScript testing framework)")
- [Squish GUI Tester](https://en.wikipedia.org/wiki/Squish_\(Froglogic\) "Squish (Froglogic)") (BDD GUI Testing Tool for JavaScript, Python, Perl, Ruby and Tcl)
- [Use case](https://en.wikipedia.org/wiki/Use_case "Use case")
- [Fitnesse](https://en.wikipedia.org/wiki/Fitnesse "Fitnesse") has been used to roll out BDD [^18]

## References

[^1]: ["Behaviour-Driven Development"](https://web.archive.org/web/20150901151029/http://behaviourdriven.org/). Archived from [the original](http://behaviour-driven.org/) on 1 September 2015. Retrieved 12 August 2012.

[^2]: Keogh, Liz (2009-09-07). ["Introduction to Behavior-Driven Development"](https://web.archive.org/web/20210225113241/https://skillsmatter.com/skillscasts/934-introduction-to-behaviour-driven-development). *SkillsMatterr*. Archived from [the original](https://skillsmatter.com/skillscasts/934-introduction-to-behaviour-driven-development) on 2021-02-25. Retrieved 1 May 2019.

[^3]: John Ferguson Smart (2014). *BDD in Action: Behavior-Driven Development for the Whole Software Lifecycle*. Manning Publications. [ISBN](https://en.wikipedia.org/wiki/ISBN_\(identifier\) "ISBN (identifier)") [9781617291654](https://en.wikipedia.org/wiki/Special:BookSources/9781617291654 "Special:BookSources/9781617291654").

[^4]: Tharayil, Ranjith (15 February 2016). ["Behavior-Driven Development: Simplifying the Complex Problem Space"](https://www.solutionsiq.com/resource/blog-post/behavior-driven-development-simplifying-the-complex-problem-space/). *SolutionsIQ*. Retrieved 15 February 2018.

[^5]: Haring, Ronald (February 2011). de Ruiter, Robert (ed.). "Behavior Driven development: Beter dan Test Driven Development". *Java Magazine* (in Dutch) (1). Veen Magazines: 14– 17. [ISSN](https://en.wikipedia.org/wiki/ISSN_\(identifier\) "ISSN (identifier)") [1571-6236](https://search.worldcat.org/issn/1571-6236).

[^6]: Solis, Carlos; Wang, Xiaofeng (2011). "A Study of the Characteristics of Behaviour Driven Development". *2011 37th EUROMICRO Conference on Software Engineering and Advanced Applications*. pp. 383– 387. [doi](https://en.wikipedia.org/wiki/Doi_\(identifier\) "Doi (identifier)"):[10.1109/SEAA.2011.76](https://doi.org/10.1109%2FSEAA.2011.76). [hdl](https://en.wikipedia.org/wiki/Hdl_\(identifier\) "Hdl (identifier)"):[10344/1256](https://hdl.handle.net/10344%2F1256). [ISBN](https://en.wikipedia.org/wiki/ISBN_\(identifier\) "ISBN (identifier)") [978-1-4577-1027-8](https://en.wikipedia.org/wiki/Special:BookSources/978-1-4577-1027-8 "Special:BookSources/978-1-4577-1027-8"). [S2CID](https://en.wikipedia.org/wiki/S2CID_\(identifier\) "S2CID (identifier)") [3392536](https://api.semanticscholar.org/CorpusID:3392536).

[^7]: Bellware, Scott (June 2008). ["Behavior-Driven Development"](https://web.archive.org/web/20120712114206/http://www.code-magazine.com/article.aspx?quickid=0805061&page=1). *Code Magazine*. Archived from [the original](http://www.code-magazine.com/article.aspx?quickid=0805061&page=1) on 12 July 2012. Retrieved 1 May 2019.

[^8]: Liz Keogh (June 27, 2011). ["ATDD vs. BDD, and a potted history of some related stuff"](https://lizkeogh.com/2011/06/27/atdd-vs-bdd-and-a-potted-history-of-some-related-stuff/). Retrieved 6 May 2019.

[^9]: . Archived from on 2009-11-07. Retrieved 2009-08-09.

[^10]: Mabey, Ben. ["Imperative vs. Declarative Scenarios in user stories"](https://web.archive.org/web/20100603235246/http://benmabey.com/2008/05/19/imperative-vs-declarative-scenarios-in-user-stories.html). Archived from [the original](http://benmabey.com/2008/05/19/imperative-vs-declarative-scenarios-in-user-stories.html) on 3 June 2010. Retrieved 19 May 2008.

[^11]: Evans, Eric (2003). [*Domain-Driven Design: Tackling Complexity in the Heart of Software*](http://www.domaindrivendesign.org/books/evans_2003). Addison-Wesley. [ISBN](https://en.wikipedia.org/wiki/ISBN_\(identifier\) "ISBN (identifier)") [978-0-321-12521-7](https://en.wikipedia.org/wiki/Special:BookSources/978-0-321-12521-7 "Special:BookSources/978-0-321-12521-7"). Retrieved August 12, 2012.

[^12]: Geneca (16 Mar 2011). ["Why Software Projects Fail"](http://www.geneca.com/75-business-executives-anticipate-software-projects-fail/). Retrieved 16 March 2011.

[^13]: Mahmudul Haque Azad (6 Feb 2011). ["Say Hello To Behavior Driven Development"](http://www.codeproject.com/Articles/148043/Say-Hello-To-Behavior-Driven-Development-BDD-Part). Retrieved 12 August 2012.

[^14]: Lübke, Daniel; van Lessen, Tammo (2016). "Modeling Test Cases in BPMN for Behavior-Driven Development". *IEEE Software*. **33** (5): 15– 21. [doi](https://en.wikipedia.org/wiki/Doi_\(identifier\) "Doi (identifier)"):[10.1109/MS.2016.117](https://doi.org/10.1109%2FMS.2016.117). [S2CID](https://en.wikipedia.org/wiki/S2CID_\(identifier\) "S2CID (identifier)") [14539297](https://api.semanticscholar.org/CorpusID:14539297).

[^15]: Adam Craven (September 21, 2015). ["Fundamentals of Enterprise-Scale Behaviour-Driven Development (BDD)"](http://www.methodsandtools.com/archive/entreprisebdd.php). Retrieved 14 January 2016.

[^16]: Roy Osherove (October 4, 2008). ["BDD: Behavior vs. Spec Frameworks"](http://osherove.com/blog/2008/10/4/bdd-behavior-vs-spec-frameworks.html). Retrieved 12 August 2012.

[^17]: ["What are the Three Amigos in Agile?"](https://www.agilealliance.org/glossary/three-amigos/). *Agile Alliance*. 2016-06-16. Retrieved 2019-06-10.

[^18]: Ketil Jensen (December 13, 2009). ["BDD with Scenario tables in Fitnesse Slim"](http://ketiljensen.wordpress.com/2009/12/13/bdd-with-scenario-tables-in-fitnesse-slim/). *Walk the walk*. Wordpress. Retrieved 12 August 2012.