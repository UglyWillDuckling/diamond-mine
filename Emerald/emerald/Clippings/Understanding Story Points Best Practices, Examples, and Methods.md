---
source: "https://medium.com/novai-devops-101/understanding-story-points-best-practices-examples-and-methods-c7ea7515054d"
author:
  - "[[Nova Novriansyah]]"
published: 2024-08-16
created: 2025-02-10
tags:
  - "clippings"
---
[

![Nova Novriansyah](https://miro.medium.com/v2/resize:fill:88:88/1*2f4IfC29S1ABTn5DRiUAhw.jpeg)

](https://medium.com/@supersimplearn?source=post_page---byline--c7ea7515054d--------------------------------)

[

![NovAI- Agile & DevOPS 101](https://miro.medium.com/v2/resize:fill:48:48/1*EBXc9eJ1YRFLtkNI_djaAw.jpeg)

](https://medium.com/novai-devops-101?source=post_page---byline--c7ea7515054d--------------------------------)

![](https://miro.medium.com/v2/resize:fit:700/0*Nl5ZOgA2fwM2_Xvh.png)

Story points are a key component of Agile methodologies, particularly in Scrum, used to estimate the effort required for user stories based on complexity, effort, and uncertainty rather than time. This article provides a comprehensive understanding of story points, explores various estimation methods including Planning Poker, and introduces an alternative method that uses hours.

## What Are Story Points?

Story points measure the relative effort required to complete a user story or task. Rather than estimating in hours or days, story points use a relative scale (often a Fibonacci sequence) to reflect complexity, risk, and effort. This helps teams understand the scope of work without tying estimates to specific time durations.

## Why Use Story Points?

1. **Relative Estimation:** Story points offer a comparative measure of effort rather than an exact time prediction.
2. **Focus on Complexity:** They emphasize the complexity and uncertainties of tasks, not just the time required.
3. **Facilitate Planning:** Story points assist in understanding team capacity and planning sprints effectively.

## Practices for Assigning Story Points

![](https://miro.medium.com/v2/resize:fit:700/0*c2pT9hHM4b86etih.png)

## **1\. Use Relative Estimation**

![](https://miro.medium.com/v2/resize:fit:700/0*WJNtfwelva-LxTz7.png)

Estimate user stories relative to other tasks. This comparative approach helps gauge the effort needed based on known complexities.

**Example:**

- **User Story:** “As a user, I want to be able to reset my password using a secure email link.”
- **Previous Story:** “As a user, I want to be able to log in using a username and password.” (Estimated at 5 points)

**Estimation:**

Given the added complexity of secure email integration, the password reset feature is estimated as 8 story points.

**Method Used:**

- **Comparison Method:** By comparing to a reference story (login feature), the team determines the relative complexity.

**Why 8 Points?**

The additional security and integration effort make the password reset story more complex than the login feature, justifying a higher estimate.

## **2\. Involve the Entire Team**

Engage all team members to leverage diverse perspectives and achieve a more accurate estimate.

**Example:**

- **User Story:** “As an admin, I need to generate monthly reports on user activity.”
- **Team Discussion:** Developers estimate 5 points, while testers suggest 8 points due to potential data accuracy challenges.

**Estimation:**

After discussion, the team agrees on 8 story points.

**Method Used:**

- **Consensus Method:** Feedback from different roles ensures a comprehensive understanding of the task’s complexity.

**Why 8 Points?**

The challenges in data accuracy and report generation add to the task’s complexity, reflecting a higher estimate.

## **3\. Use Planning Poker**

Planning Poker is a consensus-based estimation technique where team members use cards with story point values to estimate tasks. **Each member privately selects a card representing their estimate , put on the table with face down.** After revealing the cards simultaneously, the team discusses discrepancies and converges on a consensus.

![](https://miro.medium.com/v2/resize:fit:639/0*hXRg0BWXJBodMJFz)

**Example:**

- **User Story:** “As a user, I want to filter search results by date range.”
- **Estimation Process:** Team members select cards with values ranging from 3 to 5 points.

**Estimation:**

The team discusses the varying estimates, considers the complexity of implementing the filter, and agrees on 5 story points.

**Method Used:**

- **Planning Poker:** Promotes discussion and consensus through simultaneous card revelation and negotiation.

**Why 5 Points?**

The feature involves moderate complexity due to additional filtering logic, fitting the 5-point estimate after team discussion.

## **4\. Establish a Baseline**

Create a reference story with a known level of effort and use it to estimate other user stories.

**Example:**

- **Baseline Story:** “As a user, I want to view my profile details.” (Estimated at 3 points)
- **New Story:** “As a user, I want to update my profile details, including uploading a profile picture.”

**Estimation:**

The new story involves additional functionality, so the team estimates it as 5 story points.

**Method Used:**

- **Baseline Comparison:** Estimation based on comparison to a known reference story.

**Why 5 Points?**

The added complexity of updating details and uploading a picture increases the effort, resulting in a higher estimate.

## **5\. Avoid Overthinking**

Story points should offer a relative measure without excessive precision. Aim for quick, consensus-driven estimates.

**Example:**

- **User Story:** “As a user, I want to receive notifications for new messages.”
- **Estimation:** The team quickly agrees on 2 story points.

**Method Used:**

- **Quick Consensus:** Aimed at fast estimation based on general understanding.

**Why 2 Points?**

The feature is relatively simple compared to more complex tasks, justifying a lower estimate.

## 6\. Alternative Method: Estimating in Hours

In some cases, teams may choose to estimate tasks in hours instead of story points. This method involves predicting the actual time required to complete a user story, which can help in contexts where precise time tracking is necessary.

**Example:**

- **User Story:** “As a user, I want to implement two-factor authentication.”
- **Estimation:** The team estimates this task will take approximately 16 hours.

**Method Used:**

- **Time-Based Estimation:** Direct prediction of time required based on team experience.

**Why 16 Hours?**

The task involves multiple components (e.g., integrating SMS services, user interface changes) that require a specific amount of time.

## Recommendations for Using Story Points

1. **Regular Review and Adjustment:** Continuously refine estimates based on team experience and past performance.
2. **Maintain Consistency:** Ensure a consistent understanding of story point values within the team.
3. **Communicate Clearly:** Clearly define what each story point value represents to the team.
4. **Leverage Historical Data:** Use past sprint data to inform future estimates and improve planning.
5. **Focus on Value Delivery:** Use story points as a tool to enhance planning and delivery, not as a rigid measure of time.

Story points are a valuable tool for Agile teams, offering a relative measure of effort and complexity. By using methods like relative estimation, Planning Poker, baseline comparison, and considering alternative methods like time-based estimates, teams can improve their sprint planning and delivery. Regular review, consistency, clear communication, and focusing on value delivery will enhance the effectiveness of story points in Agile practices.