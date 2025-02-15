[JIRA](https://avivgroup.atlassian.net/browse/LUNA-226)
[local project](http://localhost:8001/contacts/6529808/projects/2081060465/edit?success%5B%5D=)

## notes 📔

> [!blank-container]
>- [[evalution]]'s need to be added to the [[Real Estate Project]] before it can be moved from [[project status list#Evaluation demandée]] forward #mcl/list-column
>- multiple [[evalution]]'s are possible
>- [[project status list]]
>- [[acceptance criteria test]]

---
## required fields and rules per section

### **Projet immobilier**
-  `contract_opportunity_ongoing_contract`: ==Commercialisation déjà démarré==
- ...

## workflow 💮

### P1
1.  after clicking on `Evaluation demandée`, the [[Real Estate Project]] will go into the **Evaluation demandée** status
2. new [[evalution]]'s need to be added under the **Evaluations** table
	1. these are assigned to [[agency/realtor]]'s
3. The [[Quality Team]] verifies the [[evalution]]'s by clicking the **Autoriser les Evaluations avec email** button
	 <mark style="background: #BBFABBA6;">Les demandes d'évaluation ont été acceptées.</mark>
	1. A new task is created - **Evaluation à organiser**
	2. The [[Real Estate Project]] can now be found under `Evaluations à organiser` header tab

### P2
1. WHEN the Back Office organises the evaluation meets by calling both the agencies and user,
fills all the necessary info for each agency (date and time of visit, and changes status to “Organisee")
AND confirms the meets by click on “Confirmer RDV éval au client (email & SMS)” button
	1. <mark style="background: #BBFABBA6;">Evaluation organisée.</mark>
	2. A new [[task]] is created for **Relance signature mandat**
	3. A confirmation email is sent to the [[contact]]
2. **WHEN** the Back Office goes to “Mandats"> Nouveau Mandat> Sérénité
	1. THEN

## future tasks
1. create `documentation` for the [[Real Estate Project]] screen and its sections
	1. add Edit header
	2. add required fields
2. ...