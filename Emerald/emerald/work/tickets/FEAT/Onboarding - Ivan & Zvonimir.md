---
related:
  - "[[2025-07-15 - onboarding official meet]]"
---
[[Ivan Majstorovic]] - ivan.majstorovic-ext@aviv-group.com, majstorovic-dev
[[Zvonimir Lokmer]] - 
___
# onboarding on By

1. explain a bit about the project
2. project structure
3. `MALegacy` directory
4. [[#by setup]]

## BY setup

### prerequisites

- GCP account setup on your machine -> [[gcloud CLI]]

## possible topics to cover 🗺
`note:can be moved to `: [[Onboarding - Ivan & Zvonimir]]

- infra setup
	- Makefile
	- `docker`, Dockerfile
	- docker-compose
- tests
	- how to ..
		- write
		- run
		- ..
	- **rules** about tests
	- best practices
	- ? **suggestions**?
- **Infrastructure**
	- deploy pipeline: Jenkins, GitHub
	- how to deploy
	-  Argo CD
- major **parts** or concepts of the **project**(BY)
	- [[Real Estate Project|project]]
	- [[realtor|agency]]
	- [[contact]]
	- [[lead]]
	- [[estima]]
	- [[mandate]]
	- [[BY task]]
	- [[BY event]]
	- [[calling campaign]]
	- [[BY communications]]
		- email
		- sms
	- ..
- important **pages**
	- **projects** overview
		- ..
	- **contacts** page
	- **my** page: performances
	-  **communications** page
	- **calls** listing
- **features**
	- search
	- calls: [[Diabolocom]]
	- permissions
- important **scenarios**
	- estimation `funnel` -> lead -> `BY` -> sales person -> project -> [[mandate]](contract)
	- basic **project** flow
- **tools** used by the project
	- [[twig]] templates `note: a little`
	- [[pest]] for testing
- [[basic git workflow]]
	- [ ] show on `GitHub`
	- [ ] demonstrate & examples

### useful to know

- `navigator` page: https://backyard.meilleursagents.com/admin/navigator
- [[Pro Git - Scott Chacon/GitHub/GitHub|GitHub]] search feature %% useful when needing to search several repos %%
- [[argocd]] - [[ArgoCD - how to find apps and their configuration]]

## next meeting 🔠 [[2025-07-17]]

- what should be covered?
- what needs to be mentioned, what needs to be known?
- possible issues that might come up?
- ? answer questions

- [x] **tools** 🧰
	- [x] [[Phpstorm]], debugger
	- [x] other IDE-s

- [x] infra setup **local**
	- [x] env variables
	- [x] Dockerfile
	- [x] [[#Makefile 🗒]]
		- [x] **variables**
		- [x] build.env
	- [x] git submodules : just static files
		- [x] `git submodule status`
 - [ ] **tests** 🧪
	- how to ..
		- write
		- run
	- **rules** about tests
	- best practices
	- ? **suggestions**?
	- vasa iskustva

### Makefile 🗒

- neke su vam komande poznade
- Vrlo jednostavna logika
- Koristi se sa `build.env` %% include build.env %%
- varijable definirane ovdje se prenose u `docker-compose.dev`
- dev-version moze biti koristan
- `docker compose test`: env varijable
	- `APP_NAME`
	- `IMAGE_TAG`

**komande**
- make `init`
- make `run`
- make `test`
- make `composer`
- make `shell`: korisno za pregled samog imagea

## tests

- [ ] how to run
- [ ] how to run specific tests
- [ ] how tests are setup
	- [ ] folder
	- [ ] xml config
- [ ] general rules for writing tests
- [ ] vas iskustva, preporuke

## git 

![[basic git workflow#steps]]

- [[basic deployment workflow on dev]]

## current

`core_link` tablica.

- Zvonimir je napravio cijeli pocetni layout za novu aplikaciju i redirect logiku
- radimo plan za migraciju `projects` index stranice, specificno kartica sa brojevima
- Zvonimir jos radi i na spajanju na bazu i autentikaciji korisnika

