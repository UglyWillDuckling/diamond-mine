---
color: var(--mk-color-yellow)
---
#database
#table

> we need to start setting up a DB table for the [[QSL listing]] coming from ...
[[where to find the listings atm]]

[[how the listings are loaded]]

![[Listing#db 🥞]]

The existing implementation keeps its record in the `mkt.mkt_listing` table.

We will need to create a **new table** to host the data coming in from the `export`.
After this we will also need a script for the data `import` which will fill up the database with data coming from the `export`.

1. check the current listing impl. and its **DB** table
	1. <mark style="background: #BBFABBA6;">compare</mark>
2. start <mark style="background: #FFB86CA6;">making</mark> the **new table** #phpstorm
3. see how the **new** **entity** would look like
4. <mark style="background: #ABF7F7A6;">bind</mark> the old and the new entity via [[interface]]
	1. see how to best achieve this, maybe the `interface` itself could become the [[entity]]

## notes 📔
- /home/vsedlar/dev/projects/MeilleursAgents/MALegacy/share/controller/backyard.contract.inc
	- `contract_listing`



