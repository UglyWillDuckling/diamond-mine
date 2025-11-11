---
author:
  - "[[Abhay Amin]]"
created: 2025-11-05
published: 2023-05-01
source: https://medium.com/@abhay.pixolo/naming-conventions-for-git-branches-a-cheatsheet-8549feca2534
tags:
  - howto/git/naming/branches
---
![Git branches and naming conventions by Abhay Amin|400](https://miro.medium.com/v2/resize:fit:640/format:webp/0*bXftjehuGYhy16uk.jpg)

Git branches and naming conventions by Abhay Amin

Git is a distributed version control system that allows software developers to keep track of changes made to their code over time. A crucial aspect of using Git effectively is the proper usage and naming of branches. A branch in Git is essentially a unique set of code changes with a unique name.

When working in a team, a consistent Git branch naming convention provides clarity about the work done in a specific branch. It also makes it easier to locate a particular branch in a repository. Below we delve into some best practices when it comes to Git branch naming conventions. Use this as a cheat sheet for your daily Git use, and you’ll see your workflow efficiency skyrocket.

## Basic Rules

1. **Lowercase and Hyphen-separated**: Stick to lowercase for branch names and use hyphens to separate words. For instance, `feature/new-login` or `bugfix/header-styling`.
2. **Alphanumeric Characters:** Use only alphanumeric characters (a-z, A-Z, 0–9) and hyphens. Avoid punctuation, spaces, underscores, or any non-alphanumeric character.
3. **No Continuous Hyphens:** Do not use continuous hyphens. `feature--new-login` can be confusing and hard to read.
4. **No Trailing Hyphens:** Do not end your branch name with a hyphen. For example, `feature-new-login-` is not a good practice.
5. **Descriptive:** The name should be descriptive and concise, ideally reflecting the work done on the branch.

## Branch Prefixes

Using prefixes in branch names helps to quickly identify the purpose of the branches. Here are some common types of branches with their corresponding prefixes:

1. **Feature Branches:** These branches are used for developing new features. Use the prefix `feature/`. For instance, `feature/login-system`.
2. **Bugfix Branches:** These branches are used to fix bugs in the code. Use the prefix `bugfix/`. For example, `bugfix/header-styling`.
3. **Hotfix Branches:** These branches are made directly from the production branch to fix critical bugs in the production environment. Use the prefix `hotfix/`. For instance, `hotfix/critical-security-issue`.
4. **Release Branches:** These branches are used to prepare for a new production release. They allow for last-minute dotting of i’s and crossing t’s. Use the prefix `release/`. For example, `release/v1.0.1`.
5. **Documentation Branches:** These branches are used to write, update, or fix documentation eg. the README.md file. Use the prefix `docs/`. For instance, `docs/api-endpoints`.

## Including Jira (or other Project Management Tool) Ticket Numbers

In some workflows, especially in larger teams, it’s common to include the ticket number from a project management tool like Jira in the branch name. This makes it easy to track the work done on a specific ticket. For instance, if you are working on a ticket numbered “T-123” for adding a new login system, the branch name could be `feature/T-123-new-login-system`.

## Sample Branch Names

Here are some samples of good branch names following the above conventions:

1. `feature/T-456-user-authentication`
2. `bugfix/T-789-fix-header-styling`
3. ==`hotfix`== `/T-321-security-patch`
4. `release/v2.0.1`
5. `docs/T-654-update-readme`

## Conclusion

Branch naming conventions in Git, while not enforced by the system itself, are crucial for maintaining a clean and understandable codebase, especially when working in a team. By following these conventions, you can ensure that your branches are easily identifiable

I’m a web developer and graphic designer living in Mumbai. I spend my time with many different teams, from startups, dev teams and also a football team.

## Responses (10)

Write a response[What are your thoughts?](https://medium.com/m/signin?operation=register&redirect=https%3A%2F%2Fmedium.com%2F%40abhay.pixolo%2Fnaming-conventions-for-git-branches-a-cheatsheet-8549feca2534&source=---post_responses--8549feca2534---------------------respond_sidebar------------------)

```sh
Basic Rules #1 & #2 don't allow for dots [.] but your "Sample Branch Names" #4 (release/v2.0.1) has them (and they're essential for versioning).Could you update your rules? This page was one of the top hits on a Google query so some people may treat this as gospel.Thank you.
```

16

```sh
Very good read. Thank you!
```

55

## More from Abhay Amin

## Recommended from Medium

[

See more recommendations

](https://medium.com/?source=post_page---read_next_recirc--8549feca2534---------------------------------------)