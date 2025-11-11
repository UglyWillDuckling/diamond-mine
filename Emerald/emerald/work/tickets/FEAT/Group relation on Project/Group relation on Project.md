---
related:
  - "[[An Overview of Caching for PostgreSQL]]"
---
#doc 

- [/] #task work on [[Group relation on Project]] 🆔 ZEJl6X

___
## The goal

we want to load the **groups** for a collection of **Projects** at once. In general, we wish to know to which group a Project belongs to.

## notes

- **diagram** link?
- [[used queries]]

## what we know

- Project belogs to **one** `Group`
- A `Group` can hold several `Projects`

- A `Project` has an `Item`
- The `Item` **holds the relationship** `Project`<->`Group` entity %% it holds the Project<->Group rel %%

- & Groups are determined based on **geographical data**

## work 

- [x] create a **diagram** of relationships: [[Zvonimir Lokmer]] will make this
- [x]  show [[used queries]]: contacted [[Zvonimir Lokmer]]
