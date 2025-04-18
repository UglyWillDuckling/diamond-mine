---
jira_ticket: https://avivgroup.atlassian.net/browse/NOVA-2213
people_involed:
  - "[[Vincent Dibiaggio]]"
  - "[[Yoan Haouzi]]"
tags:
  - ticket/explore
status:
  - finished 🏁
---
related:: [[investigate estima - lead call - lead window -lead connection]]
jira_ticket:: https://avivgroup.atlassian.net/browse/NOVA-2213

data is missing on leads.

**possible vectors**

- deprecated route:
- `core_user`: contains the `salesman_id`, possibly transferred to the `lead` entity

# core user

## updates of `user`

share/class.user.inc
 - **only in**  in `update_salesman_affectation`

## updates of `lead`

share/class.lead.inc
- **only** `set_salesman`


# how the `salesman_id` is updated on contact(user)

The salesman info comes from the `project`.

Whenever one of the projects belonging to a contact is updated, the update of the salesman is triggered.

⚠ Be careful, this **doesn't** mean that the `salesman` from the `project` being updated is assigned, reather, the method will take the **first** project it can find belonging to that user and assign the `salesman_id`from it to the `user`.

update triggers inside of `project`
- https://github.com/MeilleursAgents/MeilleursAgents/blob/c4f82bae5a20b653f885215d745923e8ea91af43/MALegacy/share/class.project.inc#L196 
- https://github.com/MeilleursAgents/MeilleursAgents/blob/c4f82bae5a20b653f885215d745923e8ea91af43/MALegacy/share/class.project.inc#L345

update method on the `user`
- https://github.com/MeilleursAgents/MeilleursAgents/blob/c4f82bae5a20b653f885215d745923e8ea91af43/MALegacy/share/class.user.inc#L1938 

**transferred** to doc: https://avivgroup.atlassian.net/wiki/x/kwGESw
clone: [[Knowledge Transfer - dm_operation.projects and dm_operation.project_status_changes]]