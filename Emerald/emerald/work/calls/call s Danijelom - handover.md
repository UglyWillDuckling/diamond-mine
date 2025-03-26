---
link: 
scheduled: 2025-03-19-03-47
related:
  - "[[Transac zone update by Danijela]]"
---
#call/work
## who
- [[Danijela]]
- [[me]]
---

## 🗒notes
- [[Seller lead matching API]] is used
- [[mediaapi]] has the most changes
- 2 types of zones: [[RDVVQ]] and `media`
- `batch` jobs are **not** batch, they're just FE pages
- [[Media API Clients repo]] needs to be merged
- dijagram za deploy https://drive.google.com/file/d/19rpvZT8BmRjLOecpJWUqzpKRgAXOORSu/view?usp=sharing

### **misc**

**python** formatiranje
	ruff format path to file

## R2 algorithm

### **tokeni**
> developed in: [[Seller lead matching API]]

- dev
- preview
- live

**R2** tokeni
`dev`:           kay8u0vp245Lf470KO5Lr3f9m3M9zZjT6Bs4JZGt
`Preview`: qHUNpGXBhL2JbcXijAair5bYV7Y6vvK18aCFLBBy
`Live`:         cYhBvEsfVP4cW4NSc3WuP80P8jPrSVk37JPzCMbv

`Vault` dev pass
tee8iNgaa0eif1eith
%% vjerojatno nece trebat %%

**confluence** doc: https://avivgroup.atlassian.net/wiki/spaces/AVIVIM/pages/1417478180/R2+Algorithm+Documentation#Overview-of-the-R2-Algorithm
**jira**: https://avivgroup.atlassian.net/browse/LUNA-146

### **code**

all the calls are inside :`share/SellerLeadMatchingAPI/Actions/FetchMatchingIntermediariesFromProjectAction.php`

## automate update of **transac** zones
[[Transac zone update by Danijela]]

## Sales Force

- ! [[Alan Jaouen]] is on vacation, can't deploy till **next week**

## **PR**  redoslijed

Evo redoslijedom kojim se trebaju mergat PR-ovi za deploy transac zona:
MA-ApiClients add route to api clients lib

1. [[Media API Clients repo]] https://github.com/MeilleursAgents/MA-ApiClients/pull/361
	
2. [[SalesForceApi]] https://github.com/MeilleursAgents/MeilleursAgents/pull/10853

NAKON OVOGA POKRENIT **TRIGGER**, pa deployat ostalo
3. MediaAPI - update `iris zone view` 
	 - https://github.com/MeilleursAgents/MediaAPI/pull/338
	- PR za **revert** https://github.com/MeilleursAgents/MediaAPI/pull/347

4. BY - **ostatak** https://github.com/MeilleursAgents/MeilleursAgents/pull/10839 (edited) 
