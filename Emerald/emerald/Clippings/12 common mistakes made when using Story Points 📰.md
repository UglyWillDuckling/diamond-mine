---
source: https://medium.com/serious-scrum/12-common-mistakes-made-when-using-story-points-f0bb9212d2f7
author:
  - "[[Maarten Dalmijn]]"
published: 2017-01-04
created: 2025-02-10
tags:
  - article/agile
  - agile
related:
  - "[[Story Point Estimation 📰]]"
---
![Maarten Dalmijn](https://miro.medium.com/v2/resize:fill:88:88/1*tCmLYXqonNiGMvYK0CYeSw.jpeg)

I’ve heard many different explanations of what Story Points mean and how you should use them. Almost every Scrum team uses them, but they are not part of the official Scrum Guide. This article aims to remove some of the mystery surrounding Story Points. I will also share the most common misconceptions I have encountered.

![dice|200](https://miro.medium.com/v2/resize:fit:700/1*ivhTkYsV3i5VOY_ZFgF28Q.jpeg)

## **What do Story Points represent?**

Story Points represent **the effort** required to put a PBI (Product Backlog Item) live. Each Story Point represents **a normal distribution of time**. For example,1 Story Point could represent a range of 4–12 hours, 2 Story Points 10–20 hours, and so on. This time distribution is unknown during estimation. By using reference PBI’s relative to which to estimate, it is not necessary to know how much time it takes. You just want to have a rough indication of how much time the PBI will take to complete.

## **What are the benefits of using Story Points?**

Story Points allow a team to:

- **Quickly estimate issues**. Estimation is relative to already completed Product Backlog Items. This is faster than estimating without any reference.
- **Estimate without giving a specific time commitment.** When estimating in hours, you make a precise time commitment. Estimating in Story Points prevents giving an exact commitment. Nobody knows exactly how many hours you are appointing to a specific issue.
- **Embrace the uncertainty that comes with estimation**. Story Points specify an unknown time range. Selecting from a specific Fibonacci-like sequence of Story Points allows us to capture uncertainty.
- **Accurate enough to plan Sprints ahead.** This allows us to better manage the time expectations of stakeholders for future work.

## **12 Common mistakes made when using Story Points**

1. **Equating Story Points to just complexity, uncertainty, or value**

Some PBI’s can be complex and not require a lot of time. A PBI involves the implementation of a sophisticated algorithm. The team has already done this before, so they will be able to do it quickly. The opposite can also be true, a simple PBI that takes a lot of time. The team needs to refactor a small piece of code, affecting a lot of functionality. As a result, a lot of functionality needs to regression tested, which will take a lot of time.

The uncertainty in the estimation is captured in the Story Point Fibonacci-like sequence itself: 1, 2, 3, 5, 8, 13, 20, 40, 100. The choice of a specific number from this sequence reflects the amount of uncertainty. Of course, if the uncertainty is too great to estimate, you may use the ‘?’ card.

Story Points do not tell anything about the value of a PBI. Story Points provide a rough estimate. It could be that this item is extremely valuable, or it does not add any value at all. Story Points do help to determine the ROI of a PBI. You can use Story Points to take **the effort** into account to deliver that functionality together with the value. But since value is uncertain as well, don’t count yourself rich yet.

Story Points are about effort**.** Complexity, uncertainty, and risk are factors that influence effort, but each alone is not enough to determine effort.

**2\. Translating Story Points to hours**

**By translating Story Points to hours, you stop benefiting from the speed of relative estimation**. You start working in hours and risk giving commitment. It provides a false sense of accuracy as you reduce a story point with a time range of 10–20 hours to a precise number like 15 hours. **It will be more difficult to reach an agreement in estimates when you work in the exact realm of hours.**

**3\. Averaging Story Points**

In a planning poker session, half of the team estimates a PBI at 3 Story Points and the other half at 5 Story Points. It is easy to resolve the discussion by just putting 4 Story Points as the estimate. The team should not do this as it once again attempts to provide a false sense of accuracy. The point is not to be 100% accurate. The point is to be accurate enough to plan ahead of time. Plus, **you may lose a valuable discussion by averaging.** Maybe 5 Story Points was a better estimate.

**4\. Adjusting Story Point estimates of issues during the Sprint**

When the team starts working on an issue, the team should not adjust the Story Point estimate. Even if it turns out that their estimate was inaccurate. If the estimate was inaccurate, it is part of the final Sprint velocity. It is normal that estimations are sometimes off. You will not lose this information, and it will be part of the historical velocity of a team.

**5\. Never Story Pointing bugs**

A bug **unrelated** to the current Sprint should just be story pointed. The bug represents work the team needs to complete. This does not apply if the team reserves a fixed percentage of time for working on bugs during the sprint. A bug related to an issue in the sprint should not be story pointed as this is part of the original estimation.

**6\. Adding Story Points to small tasks**

A small spike for investigating something should just be time-boxed. It’s clear that it will take 4 hours to do, and there is no need to bring any Story Points in the mix.

**7\. Adjusting reference PBI’s every Sprint**

When a team adjusts the reference PBI’s every sprint, the velocity of different Sprints is no longer comparable. The team loses information you can no longer use the historical velocity to plan ahead. It is better to use a range of recent PBI’s as reference.

**8\. Story Pointing unfinished issues again**

When moving an unfinished PBI to the next sprint, it is not necessary to re-estimate. The estimate may not have been accurate, but that is not any problem. As a result of Sprint Planning, the team will know all necessary tasks to complete the issue. The estimation of these tasks is in hours. So the next Sprint, the team will know how much time is still necessary to complete the PBI. The fact that the PBI was not completed will be part of the velocity.

**9\. Adjusting Story Point estimate because a specific developer will work on it**

Story Pointing a PBI is relative to the reference User Story and done by the team. Team members story point the PBI and reach agreement on the estimate in a Planning Poker session. A PBI may be 3 Story Points for a senior developer, but 8 Story Points for a junior developer. The team should reach an agreement on how much work it represents for the team and use this for planning. You should not adjust the Story Points because a specific person will do the work. Maybe by the time they start working on the issue, the Senior Developer is working on a production issue. It may then be necessary for the Junior Developer to pick it up.

**10\. Never adjusting reference PBI’s**

When the team composition changes ,this can affect velocity and Story Point estimates. They are both dependent on the team performing the work. Imagine you story-pointed the issue when two Senior Developers were present. By the time you want to start working on these issues, they both left the company. Now two new Junior Developers are on the team. It is a good practice to establish a new reference User Story the whole team has worked on. This makes sure everybody is on the same page when story pointing, and gives the team some time to establish a new velocity. As the team becomes more mature and better at estimation, it may be a good idea to establish new reference PBI’s.

**11\. Conforming to the expert in the room.**

When doing Planning Poker, there is the risk that the team conforms to the obvious expert in the room. A way to resolve this is to let the expert elaborate on the work. Then have the rest of the team estimate without the expert. Building up specific expertise is unavoidable. Do not let this undercut the fact that estimation is a team effort.

**12\. Not discussing incorrectly Story-Pointed issues in retrospective.**

Every now and then, the team Story Points an issue where it is clear that the estimate was completely off. It is important to discuss these issues and try to learn, so future estimations are more accurate. In one of my teams, we forgot to take into account the creation of test data when estimating. So we made it a special point to discuss for each issue if the creation of test data was applicable. When applicable, we would ask if they took creation of test data into account. This improved our estimates a lot.

## **Conclusion**

The concept of Story Points is simple yet difficult to apply. Almost every Scrum team uses them, but they are not part of the official Scrum Guide. Because of this, people have different opinions on how you should use them. The term Story Point itself is already confusing, as you can use it for types of work other than User Stories. On top of that, ‘Point’ suggests a Story Point represents value. As a colleague pointed out, maybe the term ‘Planning Factor’ would help reduce the confusion many people experience. Being aware of mistakes that can be made when using Story Points helps to apply them the right way.

[*12 common mistakes made when using Story Points*](https://mdalmijn.com/12-common-mistakes-made-when-using-story-points/) *was originally published at* [*mdalmijn.com*](https://mdalmijn.com/)