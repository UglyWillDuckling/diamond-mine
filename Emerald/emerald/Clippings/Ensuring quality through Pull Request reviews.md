---
author:
  - "[[Jacky Trinh]]"
created: 2025-11-05
source: https://avivgroup.atlassian.net/wiki/spaces/AVIVIM/pages/2108558868/Ensuring+quality+through+Pull+Request+reviews
tags:
  - docs/work/git
---
[original](https://avivgroup.atlassian.net/wiki/spaces/AVIVIM/pages/2108558868/Ensuring+quality+through+Pull+Request+reviews)

## Context

Every software engineer possesses the foundational knowledge of coding, as this is an essential skill we all develop during the early stages of our careers. We each develop our writing skills over time until we establish a personal coding style. But what about reading skills? Generally, writing and reading are closely interconnected. When writing code, you are simultaneously reading (though it is your own code). This allows you to comprehend how your code functions, guided by your unique style and logic.

In a team environment, working within a shared codebase provides the opportunity to read and engage with code written by others. This process helps you learn and understand the underlying logic without necessarily making judgments. However, this experience alone does not fully prepare one for the task of reviewing new code intended for integration into the codebase. In fact, **the criteria for reading code and for reviewing it are fundamentally different**. In the former, the goal is **to comprehend and accept the code as it is**; in the latter, the objective is to **critically assess and challenge it** to ensure quality, consistency, and alignment with project standards.

Very few are truly prepared for the task of code review, and when the responsibility arises, there is often little clarity on what to review or how to approach it. In the absence of structured guidance or personal insight, the review process tends to rely heavily on instinct, shaped by the reading skills developed up to that point.

This document is intended to serve as a practical guide for addressing the lack of clarity and preparedness often encountered during code reviews. Often, there are seemingly obvious points that go unrecognized. Not due to complexity, but because they have not been clearly highlighted or made visible.

This document is based exclusively on my personal experiences. Throughout my career, I have had the opportunity to read and review a significant number of pull requests. In my ongoing effort to continuously improve, I have reflected on the review process and identified the key aspects that deserve particular attention during a pull request review.

It should **not be regarded as** **an absolute or unquestionable authority**, but rather as **a collection of insights and recommendations intended for consideration**.

## Mindset

As previously mentioned, reading code and reviewing pull requests are two distinct skills, each requiring a different mindset and approach. With that in mind, there are two common **mistakes that** **should be deliberately avoided** when reviewing a pull request:

## 1\. Reviewing code as if checking for syntax correctness.

The goal of a code review is **not to verify whether the code will run** ( running is not the same as working) **or compile**. This responsibility is far better handled by automated tools such as compilers, linters, and CI/CD pipelines, which are designed to catch syntactic and formatting errors more efficiently than manual inspection. Yet, it is not uncommon to see reviewers spending considerable time scrutinizing each line, searching for minor syntax issues that could easily be detected by automated systems.

## 2\. Reviewing code with the intent to simply understand and accept it.

The purpose of a review is **not merely to comprehend the logic or embrace the author’s implementation at face value**. Code is often written from the perspective of the author's interpretation of the specifications. While understanding the code is important, the reviewer’s role is to **challenge the decisions made** (questioning the logic, structure, and assumptions) to ==ensure that the code aligns with the broader goals of the project and meets the agreed-upon standards.==

## Key points to consider

This section outlines a set of important principles to follow (in my opinion) when reviewing pull requests and commits. Each point highlights a specific area to pay attention to, contributing to better code quality, improved collaboration, and long-term maintainability.

In addition to listing those, I’m providing context and rationale for each, **explaining why they matter** and how they support the overall health of the codebase and the efficiency of the development process.

These key points are not just procedural, they reflect a shared understanding of what makes code easier to read, review, and revisit, whether in the near future or years down the line.

## Communication

A pull request is not only a technical place but also a collaborative one, it involves people. The way we, as a reviewer, communicate within a PR is as important as the technical feedback itself. Effective communication ensures that reviews are **collaborative, respectful, and productive**, with the shared goal of improving the overall quality of the codebase.

### Suggest, do not dictate

Unlike the title, it’s important to **frame comments as suggestions rather than commands** when providing feedback. This approach encourages open discussion and helps the author maintain a sense of ownership over his work. Ultimately, the goal is to **refine the author’s work** to ensure the highest quality before integration into the codebase.

> Don’t: “Change this to use `map` instead of a `for loop`
> 
> Do: “We could consider using `map` instead"

This collaborative approach is most effective when **all participants maintain a constructive mindset**. ==If the author consistently resists feedback or is unreceptive to improvement, that becomes a separate issue to address outside the PR itself.==

### Explanation

Whenever possible, a feedback should be accompanied with an **explanation of why a change is being suggested**. Providing context helps others **understand the reasoning, promotes learning**, and makes the review more meaningful. This additional context also enables the author to engage thoughtfully with the feedback. He may not necessarily agree but this will lead to constructive discussions and ultimately to improvement in the quality of the code.
`note: why`
> Example: “To improve the clarity, we could consider using `map` instead”
### Tone

**Written communication lacks tone**, and neutral comments ==can sometimes be misinterpreted as harsh or dismissive.== **Being mindful of phrasing helps prevent misunderstandings** and avoids unnecessary tension within the team.

No one feels comfortable when their work is attacked, and unnecessary friction undermines teamwork and productivity. Fostering a respectful and positive environment is therefore essential to maintaining a sustainable collaboration over the long term.

Categorizing comments (using emojis, titles, or other markers) is an essential practice in code review, as it communicates both the **importance** and **intent** of feedback. By clearly identifying the type of each comment, reviewers enable authors to:

1. **Prioritize responses**: authors can address critical issues first, ensuring that significant problems are resolved promptly.
2. **Understand context**: differentiating between suggestions, questions, or mandatory changes provides clarity on the reviewer’s expectations.
3. **Improve collaboration**: clear categorization promotes constructive discussion and reduces potential misunderstandings.

### Acknowledgment

When suggesting a change, it is either because the current implementation can be `improved` or because an alternative approach may be more `effective`. Most review comments **highlight changes that need to be made**. This means they can easily feel negative in tone. To counterbalance this, make a point to **acknowledge and praise good work**. Recognizing well-thought-out solutions, attention to edge cases, or elegant implementations reinforces good practices and fosters a positive review culture.

## Documentation

The codebase serves as the primary working environment for any software engineer. While we often interact with code that functions correctly, **we rarely gain insight into the rationale and context behind its creation**. The pull request plays a crucial role in this regard, as it is the point at which changes are proposed, reviewed, and integrated into the codebase.

It provides engineers with an opportunity to understand both the scope and the motivation behind specific modifications. In many cases, understanding why a particular line of code was introduced is essential. Since the original author **may no longer be with the organization** or **may not recall the exact reasoning** behind their changes, the pull request often becomes **the most reliable source of this information**.

Mislabeling can lead to **confusion and reduce the clarity and maintainability** of the codebase over time. By maintaining consistency and accuracy, we support better collaboration, traceability, and overall code quality.

It is essential to ensure that every pull request has a **clear, concise, and descriptive** title that adheres to the team’s established naming conventions and standards.

While this may seem tedious at times, having **well-structured titles significantly improves our ability to locate specific changes later** (especially when relying on commit history). Clear titles reduce the need to read through the full content of each commit to understand its purpose.

**Example of a poor title**

> `feat(infrastructure/controllers/api): nova-4242 refactor the api controller in the infrastructure folder in order to add the implementation made by the previous refactor about the new user model in the get user endpoints route`

This is an example of what not to do. It is **overly verbose** **and contains** **contradictory terminology**:

- It's important not to mix these terms. A refactor is not a feature, and a feature is not a refactor.
	- `feat`: introduces a new behavior or changes an existing one.
	- `refactor`: modifies the internal structure of the code **without altering its external behavior or business logic**.
- To ensure clarity and brevity, **pleonasms should be avoided**, and **concise wording should be preferred**. When multiple synonyms are available, the more succinct term is generally preferable.
	- Omitting redundant context is also acceptable when the meaning remains clear.
		- Since controllers are part of the infrastructure layer in our architecture, explicitly stating "infrastructure" is unnecessary.
		- Care should be taken with ambiguous terms such as "API" (e.g. `<type>(api): ...`), which may refer to external interfaces or adapters, and not necessarily the APIs exposed by our own services.

One of the proper title for this task could have been `refactor(controllers/api): nova-4242 add new user model in GET /user`

### Description

A description should clearly explain **why** the code was modified. This context is what matters most. The purpose behind the change should be immediately understandable from the message.

Details about **what** was changed can already be seen in the diff. The description, therefore, should focus on the rationale behind the change. If the modification involved **any technical decisions**, **trade-offs**, or alternatives that were considered, it is helpful to **include that information** as well (if it’s too minimal to be included in the description, pull request’s comments are also welcome).

Making sure that **the description is clear and thoughtful** is a small effort that significantly improves code maintainability and team collaboration.

## Team conventions

Conventions have been made in order **to** **establish a consistent way of writing code** within a project. This consistency brings several practical and strategic benefit such as improving readability, making collaboration easier, reducing ambiguity, facilitating onboarding, …

Over time, certain rules and patterns have naturally emerged within the team and are **consistently followed**, even if they were never formally documented. Maintaining this **consistency** is more important than adhering to individual preferences or personal coding styles.

When in doubt, **refer to the existing codebase**. It reflects the collective decisions and conventions established by the team.

They’re not about personal preferences but about **team alignment**. While these conventions should already be known and followed by each contributor, human error is inevitable. As such, it is helpful and expected **for reviewers to remain attentive and flag any deviations**. This shared responsibility helps maintain high quality and reinforces collective ownership of the code.

## Architecture

Our team embraces **Clean Architecture**, with a specific focus on the **Hexagonal Architecture** pattern. This approach is well-established within the team, though it is important to recognize that while the concept is widely understood, mastery takes time and experience.

As such, architectural mistakes are to be expected, particularly from team members who are still developing their expertise in this area. Therefore, extra attention must be given to how the layers within new code interact with one another.

### Common pitfalls when applying Hexagonal Architecture

In practice, many architectural and code quality issues stem not from a lack of knowledge, but from inattention or the desire to implement quickly. Based on experience, the most frequent errors caused by these factors include:

- **Improper dependencies:** importing infrastructure components directly into the domain layer, thereby **bypassing the intended abstraction provided by the port interfaces**. This violates the principle of dependency inversion and undermines the architecture’s modularity.
- **Bypassing architectural boundaries:** such as exposing domain internals (e.g. returning domain entities and enums directly to external layers). This often results in tight coupling between layers.
	- The domain layer encapsulates business logic and internal behavior, so **any modifications to its internal data structures should not affect the data exchanged with external systems**. Output data should always be decoupled from domain internals to maintain separation of concerns and prevent unintended side effects.

While speed can be important, cutting corners in these areas usually leads to technical debt and slows down the team over time. By **remaining vigilant to these issues**, we ensure that the architecture remains robust, maintainable, and aligned with our design principles.

### Understanding design decision beyond the standard approach

This is linked to [Ensuring quality through Pull Request reviews | 2. Reviewing code with the intent to simply understand and accept it.](https://avivgroup.atlassian.net/wiki/spaces/AVIVIM/pages/edit-v2/2108558868#2.-Reviewing-code-with-the-intent-to-simply-understand-and-accept-it.). In some cases, the author of a pull request may have gone beyond the straightforward approach such as the implementation of an adapter for a given port in a use case, or implementing multiple sub-use case or helpers. When this occurs, it often indicates that **they** **encountered a problem or constraint** that may not be immediately obvious to the reviewer.

It is the **reviewer's responsibility** **to understand the reasoning** behind such decisions. This includes investigating the underlying issue and assessing **whether the chosen solution is appropriate, sufficient, and aligned with architectural principles**.

While trust in the author’s expertise is important, **decisions should not be accepted at face value** without scrutiny. If the proposed solution appears unnecessarily complex, consider whether a simpler, more maintainable alternative exists. Ask yourself:

- Is this the simplest solution possible for the given problem?
- Is the implementation clear, readable, and maintainable?
- **Does it respect the separation of concerns defined by our architecture?**

## Maintainability

High-quality code is defined not only by its correctness, but by its **ability to be changed and extended easily in the future**. This flexibility is essential for maintaining long-term productivity and adaptability as requirements evolve.

Several key factors contribute to this maintainability:

### 1\. Readability

This plays a crucial role in ensuring that code can be understood and maintained over time. It allows contributors (including your future self) to **quickly grasp the purpose and behavior of the code** without requiring extensive context or background knowledge.

Code should be **straightforward and intuitive**, avoiding ambiguity or unnecessary complexity. There should be **no “guessing games”** involved in understanding what a piece of code is doing. If renaming a variable, breaking down a complex expression, or restructuring a method improves clarity, then **such efforts are** **not only justified,****they are encouraged**.

As reviewers, if we find ourselves repeatedly jumping between places or struggling to follow the logic, **it’s worth considering whether the issue lies not in our comprehension**, **but in the code’s clarity**. Difficulty in reading is often a symptom of deeper readability problems.

When such situations arise, it is entirely appropriate to suggest improvements. These may include:

- Renaming variables or methods for clarity
- Splitting complex logic into smaller, self-explanatory parts
- Adding brief comments where intent is not immediately clear
- Reorganizing code to align with natural reading flow

### 2\. Simplicity over complexity: applying the KISS principle

As a team, we adhere to the **KISS principle** (*Keep It Simple, Stupid!*) which emphasizes the importance of simplicity in software design. The goal is to avoid over-engineering solutions for hypothetical problems that may never arise.

Simplicity is directly tied to **maintainability**. Code that is straightforward and easy to understand is also **easier to test, extend, and adapt** over time. Unnecessary complexity adds **cognitive load**, increases the **likelihood of bugs**, and **slows down** future development.

It's important to remember the nature of our work: **we are building a web application**, not a high-frequency trading system where every millisecond is critical. While performance is important, **maintainability and clarity take precedence**. Optimizing prematurely or prioritizing micro-performance gains at the cost of **code quality usually leads to long-term issues**.

This does not mean performance is ignored, rather we strive for a **balanced approach**. Optimize when there is a clear, measurable need, **but not at the expense of readability or long-term flexibility**.

#### Challenging unnecessary complexity

As reviewers, it is our responsibility to **question and challenge** code that appears overly complex. If a simpler or more elegant alternative exists (one that the author may not have considered), it should be suggested.

For instance, if a proposed solution involves multiple deeply nested loops when the same result could be achieved with a single iteration, **it is worth the effort to simplify**. Reducing unnecessary complexity **improves both readability and maintainability**, making the code easier to understand and modify in the future.

Remember, the **codebase is your working environment**. Ask yourself:

- Would I feel confident maintaining or extending this code in the future?
- If not, is the hesitation due to unnecessary complexity?
- If so, how can it be simplified while preserving correctness and intent?

Challenging complexity is not about criticizing the author. It is about **ensuring that the code remains accessible, maintainable, and sustainable** for everyone who will work with it

### 3\. Sound architectural and design decisions

As previously discussed in [Ensuring quality through Pull Request reviews | Understanding design decision beyond the standard approach](https://avivgroup.atlassian.net/wiki/spaces/AVIVIM/pages/edit-v2/2108558868#Understanding-design-decision-beyond-the-standard-approach), which ensure proper separation of concerns and modularity. Without restating previous points, it is worth emphasizing that verifying the soundness and clarity of the code’s design is an essential part of **maintainability**.

No one wants to maintain code that is overly complex, disorganized, or reminiscent of “spaghetti code”. Ensuring that the design is logical, consistent, and easy to follow helps prevent such situations.

## Specifications compliance

Every pull request is created by an author who **brings their own understanding** of the assigned task or specifications. When reviewing a pull request in a **repository we have ownership** of, our responsibility extends beyond assessing the **technical correctness** of the implementation. we must also ensure that the proposed solution genuinely **addresses the intended need** or problem it was meant to solve.

If the purpose or context of the change is unclear (*not because the description is empty*), it **is the reviewer’s duty to seek clarification** **and fully understand** it before approval. In the absence of a formal QA process capable of covering all scenarios, **we share the responsibility** for verifying that the **implementation works correctly**, not only for the expected (“happy path”) cases, but also for relevant edge cases.

While not every edge case requires exhaustive handling, those with a realistic likelihood of occurring should be considered and tested appropriately.

### Taking time to reflect

During a review, it is **perfectly acceptable to pause and take a moment to reflect** on the specifications. Doing so provides the necessary space to **think through the different scenarios** that need to be handled and to verify whether the proposed solution adequately addresses them.

Taking this time helps ensure that the review does not solely focus on the obvious or superficial aspects of the code. This allows for a deeper understanding of both the problem and the solution.

### Tests

They exist to ensure that the **code behaves as intended and fulfills its defined purpose**. When considered collectively, they provide a clear way to verify that all specifications and requirements are properly covered and implemented. Comprehensive and well-structured tests not only validate correctness but also serve as a safeguard against regressions and misunderstandings of the intended behavior.

**Tests are an integral part of the codebase** and should be treated with the **same level of attention and rigor as the production code**. They provide a clear indication of whether different cases have been properly handled by the implemented functionality.

In many ways, **tests serve as living documentation**, explicitly demonstrating the expected behavior of the code. Reviewing tests allows us to verify not only coverage but also the clarity and intent behind the implementation.

When evaluating tests, it is important to ensure they are:

- **Well-defined and precise** in their assertions,
- **Consistent** with the team’s testing standards,
- **Maintainable and easy to update** as requirements evolve.

No one should feel discouraged or frustrated when working with tests. Tests ought to be **simple to understand** and **straightforward to update**. By keeping tests clear and maintainable, we ensure that developers are more willing and confident to modify them as the code evolves.

## Performance

As previously mentioned in [Ensuring quality through Pull Request reviews | 2. Simplicity over complexity: applying the KISS principle](https://avivgroup.atlassian.net/wiki/spaces/AVIVIM/pages/edit-v2/2108558868#2.-Simplicity-over-complexity%3A-applying-the-KISS-principle), we do not disregard the performance aspect of the code. While simplicity and maintainability are prioritized, the **code must still be efficient and performant**. It is important to strike a balance by considering both time and space complexity when evaluating a solution.

Reviewers should assess whether the implementation achieves **acceptable performance** for the expected use cases without introducing unnecessary complexity. **Premature optimization should be avoided**, **but clear inefficiencies or bottlenecks should be identified and addressed.**

When raising performance concerns during a review, consider those:

- **Assess the impact:** evaluate whether the performance issue is significant in the context of the application’s requirements and usage patterns.
- **Request benchmarks or profiling:** for complex or critical sections, ask the author to provide benchmarks or profiling data to support performance claims.
- **Balance trade-offs:** consider the trade-offs between performance gains and increased complexity. The **simplest solution that meets performance needs is preferred**.
- **Prioritize critical paths:** focus performance review efforts on areas of the code that are executed frequently or are known bottlenecks, rather than on isolated or rarely used code.

Ultimately, the goal is to write code that is both **simple to maintain** and **sufficiently performant** to meet the application’s requirements while taking into account its **realistic scalability**.

## Security

While we do not claim to be security experts, we possess fundamental security knowledge and recognize that **certain practices must never be introduced into the codebase**. Newly added code should be free from common and critical security vulnerabilities such as SQL injection, cross-site scripting (XSS), insecure handling of sensitive data, and improper management of credentials.

**Reviewers should remain vigilant for potential security issues**, ensuring that data validation, sanitization, and encryption best practices are followed. It is important to verify that sensitive information is handled securely throughout the code and that no secrets or credentials are hard-coded or exposed unintentionally.

When security concerns arise, they should be addressed promptly, either through code modifications or **by involving the security team** if needed.

## Adapting review quality based on author proficiency

It is important to adapt the depth and focus of our review according to the author’s experience and proficiency. As an author’s skill level improves and we become familiar with their capabilities, our review approach can naturally evolve.

For more **experienced contributors**, we may not need to be as meticulous on aspects that they have already consistently mastered. This allows us to **concentrate our attention on more critical or complex areas** that require deeper analysis.

On the other hand, when reviewing pull requests from **newcomers or less experienced** authors, a **more thorough and detailed review** is often necessary to ensure adherence to standards and to support their growth.

## Final words

Honestly, the codebase can be compared to a bed: when it is of high quality, clean, and its sheets are easy to change, we naturally feel comfortable and at ease. In the same way, a well-maintained codebase allows developers to work confidently and sleep soundly, knowing that future changes can be made smoothly and without unnecessary stress.

To authors who believe their sole responsibility is to write code and that it is entirely up to the reviewer to uncover the why, what, and how behind the changes: **nope**. Authors must provide clear context and explanations to facilitate an effective and efficient review process.