#backyard
#category

🎟 [JIRA](https://avivgroup.atlassian.net/browse/LUNA-89)
## Story Description

As a user using Backyard, I want to be able to create tasks with “Relance Signature Mandat" category and later filter tasks with that category, So that I could easily and quickly find the tasks and projects with that task category.

## Acceptance Criteria

When creating a new task, the user can choose from the “Catégory" dropdown a new value “Relance Signature Mandat":

**related to**
- [Notion event category](https://www.notion.so/v-sedlar/add-new-EVENT-category-enum-3a5a3fa2a69c403ab207e8a5fe803992#e38927e069dc49629ec38eca039224ca)

## Dev

### adding new event category types
1. add new value to the db -> Media API
2. add new category to the Task class
	1. update array
	2. update translation file
3. add value to the test assets

![[how to run the mediaAPI migration - alembic]]

## Work

Crated **PR's** for media API
[PR - 319](https://github.com/MeilleursAgents/MediaAPI/pull/319), [asgs production PR](https://github.com/MeilleursAgents/asg-apps-k8s/pull/9981)

- [x] make the tests pass

## Deploy 🚀

- merge Media API
	- check if the new enum exists in PROD: [enums](https://backyard.meilleursagents.com/admin/enum/)
- merge MA PR
	- deploy
	- verify backyard