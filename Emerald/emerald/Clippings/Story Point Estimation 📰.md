---
author:
  - "[[Felix Zenz]]"
published: 2024-03-12
created: 2025-02-10
source: https://medium.com/@felix.zenz/story-point-estimation-6fa79b00ffab
tags:
  - agile
  - article/agile
  - processing
  - interesting
---
- [/] #task read [[Story Point Estimation 📰]] ⏳ 2025-02-10 📅 2025-02-14
	- [ ] [[12 common mistakes made when using Story Points 📰]]

---

![Felix Zenz](https://miro.medium.com/v2/resize:fill:88:88/1*SsqzH-eGxVqXm6SRaTWXow.jpeg)


**How to use them and how to avoid common pitfalls**

![points|500](https://miro.medium.com/v2/resize:fit:700/1*fhif9hD2_7un88KXsunu2A.png)

## What are Story Points?

*Story points* are an abstract metric to estimate and measure the **effort** / **complexity** / **risks** of *User Stories*, but the concept can be applied to tasks in general. They developed as an alternative to time based estimates.

Story Points have their origin in *XP programming*, but they have since then become a very common measure for agile teams in general and are widely used by modern *SCRUM* teams.

## Story Points are relative

Other than absolute metrics like time estimates, a story point is not re-presentable by some SI-unit. Instead it is a relative metric which only makes sense in the context of a specific team. It describes the “size” or “difficulty” of a task **in relation to other tasks**.

A team might know from experience which task is a “very small” vs “very big” feature or an “easily fixable” vs “really difficult” bug for them.  
Story points help us to quantify these differences, so we can communicate with tangible numbers. **Double the amount of points should mean twice the effort.**

Effort, risk and complexity normally don’t scale linear or exponential.  
We usually choose numbers from the ***Fibonacci Sequence***:  
0 — 1 — (1) — 2 — 3 — 5 — 8 — 13 — …  
when estimating *Story Points* for a task.

**The uncertainty of an estimate increases with increasing risk and effort**, so the difference between a minimum effort task with 1 story point and a task with 2 story points is way more clear than the difference between two big tasks with 8 and 9 story points.

![fib|500](https://miro.medium.com/v2/resize:fit:700/1*6B81DncXcf0_DspHXKqogg.png)

Story Points increasing in Fibonacci Sequence

## Velocity

You may have already heard about the term *Velocity* whenever the topic of Story points comes up.

Let’s say a *Sprint* is two weeks long. So if every *Sprint* has the same length, the team will always get two weeks worth of work done per *Sprint*.  
Time alone is therefor obviously not sufficient to compare the performance between two *Sprints.* It also doesn’t really help to know, how “many” tasks were done or how “many” lines of code were written, since changing five icons is not the same amount of effort as implementing five big features.

What we really want to know is, **how “much”** was done during this time. This is the idea behind *velocity*.

> velocity = distance / time

When a team was really “fast” in a sprint compared to their last sprint, that means that they had a “high velocity”. They got more story points done.

> **velocity = story points / sprint**

## The life-cycle of a task

![cycle|600](https://miro.medium.com/v2/resize:fit:700/1*Vd0HlcKeze7WIk4bFRI1LA.png)

You might be inclined to think about the time you would need to solve a task by imagining the size and effort the implementation would take.

But if we look at the life-cycle of a task from specification to closing, we can see, that it’s not that easy.

![life|600](https://miro.medium.com/v2/resize:fit:700/1*IeMxbBvezzGf6TNFy0ehXQ.png)

1. **The person that implements a solution is not the only one who contributes to the effort of a task**. Often a review is involved. The complexity of this review depends on the size of the task, but also on the complexity and the difficulty to test it. A complex test-setup can increase effort on two sides.
2. **We need to leave room for improvements after a review.** This should not be underestimated. The more complex the task, the more likely and big potential changes are expected. This is one of the reasons why complexity increases the effort more than just linear.
3. **When estimating time effort, we get a deceiving picture of the time it takes to finish a task.** Because in addition to the time-effort that was put into a task we would need to know the waiting times in-between in order to say when a task will be done. In story point estimation this distinction is more clear.

## Signs of risk

There are some common risks that we can look out for when estimating story points for a task.

## 📑Unclear Specification

One of the greatest factors regarding uncertainty is insufficient specification.

> **If you don’t know what to do, you can’t possibly know how much effort it will take to do it.**

A bug ticket should **include steps to reproduce the bug** and there shouldn’t be any **big questions unaddressed or open discussions** when estimating a feature. Ideally there is even already consensus on a rough idea **how** to solve the task.

Any open discussions or unclear specifications should increase the amount of story points drastically.

## 📠 Technical Debts

A large commercial source code that can stay prolonged periods of time without any technical debt is in my experience an utopia.

Since they will be part of our reality we need a way to deal with technical debts. One thing that helps us with those decisions can be to have a metric on how much a debt is slowing us down. **Technical debt may impact a task and lead to more effort and risk, so we should consider this when estimating story points.**

The idea here is, that calculating technical debts into your story point estimations will not only get you a more accurate prediction, it will also quantify how much any technical debt is slowing down the velocity of the team, making the negative impact understandable for non-technical stakeholders and calculable for managers.

Compare the following two arguments:

*“I know that the client wanted that cool feature, but since it’s not so urgent, we would like to kick it out and do a refactoring instead. The technical debt on that component is becoming an issue, so we think that is more important right now.”*

*“We are planning the next sprint and it seems like the technical debt on that component* ***will slow us down by at least 5 story points*** *in the next sprint alone and likely even more over the following sprints. Therefore we would like to resolve the debt with a refactoring this sprint.* ***This will take 8 story points****, so we would need to move that medium priority feature to the next Sprint instead, but this* ***investment*** *will be worth it”*

## 🏜 Unfamiliar Terrain

Doing something for the first time is usually more difficult and the risk to make errors that slow us down is much higher as well. So it’s just logical to factor this in when we estimate story points.

This includes working on a component for a first time, but also using infrastructure, tools or processes for the first time.

## 🚧 Dependencies

Dependencies can obviously block us and while blocking per se does not increase effort (just absolute time until completion), there are other reasons why we should take them into account for story point estimation.

Dependencies on other tasks increase the amount of possible points of failure. Dependencies on other teams hint on need for communication for alignments, updates or specification. They also increase the probability of disagreements in the review stage.

## Some warning signs of high **complexity**

- 📚 High number of affected / related components
- 🧪Difficult testing / setup
- 🗣 History of long discussions about the task
- 🌏 Inconsistent standards (timezones, encoding, weak protocolls, …)

## The estimation process

There are different strategies and opinions on how to do the actual estimation process. But there are some guidelines based on my experiences and what I read, that I would like to share.

## **When** to estimate?

The estimation of a task is strongly tied to its technical details. Discussing estimates can/should bring up risks or implementation details and might even challenge decisions. Therefore it **fits best into the refinement meeting**, when following a SCRUM structure. Estimates during planning should be avoided, since they can derail from the purpose of a planning.

## **Who** estimates?

Estimation is most accurate when estimating every task with the whole team, but it’s much faster when done individually by the person assigned to a respective task. While I recommend to estimate tasks together in the team, most importantly in the beginning, we always need to keep the needs of specific teams and projects in mind.

Let’s assume you estimate with the whole team. In this case you want to first get some first impressions / opinions from everyone. This could be already a story point estimate, but if that’s a bit to abstract, a common method is to just start with T-Shirt sizes: XS — S — M — L — XL — XXL.  
If you realize that you have very different opinions about the estimates, don’t just settle with a number, investigate why. Someone might estimate more story points because they are aware of risks that you didn’t consider or someone might estimate much less story points, because they know a fast elegant solution that you didn’t consider.

The goal is of course to be accurate, but when in doubt a higher estimate is better than a lower estimate. Be careful to not spiral in endless discussions between meaningless details. In the end it is still an estimate and there is always some uncertainty. If you end up with 2 or with 3 story points might in the end just be subjective and not worth to waste everybody's time over.

## Calibration

Once the planning of the next sprint starts, you need to decide how many tickets to pull in based on the now estimated story points. Therefor team members also need to estimate their capacity based on story points. Ideally the estimated story points of all their assigned tasks line up with the capacity of an assignee. With the time this estimations will get more accurate if a feeling for story points and capacity is developed. Therefore it’s critical to evaluate in the of a sprint, if the goal was met and to track the difference between estimated velocity and actual story points.

##  **first** estimation

Calibration over time is good, but won’t help you, if this is your first experience with story points. We established that story points are relative, so were can we even **start with a reference point**?

Time and estimated effort are different, but they strongly relate to each other. For your first estimations you can **think about time equivalents** for story points. Just keep in mind, that complexity, risks and other things need to also be considered. The time equivalents should just be rough guidelines for a first start. It can also help to establish a range.

**The smallest possible unit of story points is 1** by definition. The maximum useful story point number is surely lower than the equivalent to the number of very tiny tasks achievable in a normal sprint by a single person. You also want to avoid tasks that take extreme efforts, because you should rather split them in sub tasks, so they are easier to manage. All this considered, teams with two-week sprints usually end up with **an upper limit per task of either 8, 13 or 21 story points.**

Keeping in mind our Fibonacci-rule, you will probably just need to deal with a decision between one of these story points: 1–2–3–5–8–13.

For example:  
**1** — *Can be solved in ~ 30 minutes. No risks, well specified, easy to understand, no dependencies, special test setup or discussions*

**13 —** *Will consume almost all of the sprint of the assignee, because it’s a highly difficult task with a lot of places affected, the topic is very complex and it’s not yet completely clear what is the solution and people suggested different ways how to approach it.*

In summary, story points are a flexible, relative measure of effort that, when used correctly, can enhance the agility, predictability, and efficiency of a team’s workflow. However, like any tool or process, they require understanding, experience, and sometimes adaptation to fit the unique context of each team.