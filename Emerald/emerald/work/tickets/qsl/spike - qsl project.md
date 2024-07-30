#qsl #spike #requirements #confluence
## Ideas 💡

- make a **use case** diagram ✍

## Context

We need to find out how the [[listing]] is used on the page in order to be able to add a new type of listing for the [[Se Loger]] website.

## Requirements

**from JIRA**

Current behaviour: 
Currently, we do not manage the link QSL projects with listings on SeLoger & other platforms 

Sales teams contact agencies every day to collect information on the status of ongoing QSL France (RDVQ) projects, which creates loss of time of sales teams and customer frustration because most of the time there are no updates

Agencies don’t always declare their progress on their projects resulting in loss of revenue for us

However, there is currently on BackYard project pages a link “Voir annonce” towards Meilleur Agents listings (which have very low reachability and are not used very much by agents) - examples: https://backyard.meilleursagents.com/contacts/4894276/projects/2080984906 https://backyard.meilleursagents.com/contacts/5758471/projects/2080878347/contracts/2080494651/listing

When the Advisor (conseiller) clicks on the button “Sélectionner cette annonce" situated on the Mandats/Annonces Premium tab - next to the qualified that is linked
THEN 
- the label Détectée becomes “Voir annonce" and by clicking on it, the user is redirected to the ad (changing of the label to “Voir annonce" means the advisor has looked at it, and confirms that the ad is indeed related to that sales project)
- the button “Sélectionner cette annonce" becomes “Annuler cette annonce" if the need to cancel the selection is necessary (IF the ad actually is not related to the sales project)

NOTE: this functionality is reserved to CONSEILLERS (Advisors) only as they are the one taking care of the sales projects that have signed mandates (ex of Conseiller profile - Théophane Hirt )

**Improvement**:
Display to Sales people on the CRM and on QSL project pages the matched listings on SeLoger (Priority 1) & other platforms (Priority 2) 

Also, display if the matched listing is an active listing or offline (not essential as sales people will be able to click directly on the link to check)

**Benefits**:

Sales teams can contact agencies at the right time (e.g. when listing appears & when it expires) which means 

Gain of time for Sales teams to generate additional mandates & sales, and therefore earn sales commissions (25% of agent commission)

Less frustration for agencies (because they get lots of calls) and reduction of churn			

Limits fraud from agencies that declare to us that our leads have not ended up in a mandate or a sale which means additional revenue via reclaimed commissions

## Current logic for listings

![[add found drawing]]

Explanation of what is actually going on here...

---

## The new world 🗺, what will change and what we need in order to do this

The list of all the things that will change and what we need in order for this to happen.
### required fields

![[required fields#short list]]
## Investigation 🔍

**todo for now** ☑
- [x] explore the current implementation
	- [x] what is done exactly and where
	- [x] what is shown and which data is required
		- examine each of the pages that use the [[listing]] entity
		- see which data is used 
		- check if all of this is required for the new **Se Loger** listing
- [ ] take a look at the **db model**
	- [ ] see what information is there
		- determine what is actually used and needed for this use case

**entity**
name: [[listing]]
class: `listing2`
file: `share/mkt/listing.inc`

used methods:
- `get_place` - returns the [[place entity]] `ref`(**dynamic**)
- `get_url` - generates the `URL` for the listing
	- atm, links only to the [[Meilurs Agent]] website
- `get_title` - simply return the title
- `description` - a field, not mandatory, could be left empty
- `get_main_picture_url` - generates the image `URL`
- `price` - a field, the current listing **price
- `contract` - a field, contains a `ref` to the associated [[contract entity]]
- `contract_type` - a field, contains a value linked to a constant
- `start_date` - a field,  contains listings start date
- `end_date` - a field, contains the listings end date (used to check if the listing is still active)
- `created`- a date field containing the creation date
- `version`- a date field containing the date of the last modification
- `ref_from_ma` - a field, containing a `ref` back to the [[Meilurs Agent]] site
- `transaction_type` - a field, determines the type of the transaction  - matches one of the db enums

---
## exploring the current implementation

<mark style="background: #FFF3A3A6;">need to write this down for [[Natasa]]</mark>
### pages 📄

- contracts listing page - **Annonce Premium**
 - admin passerelle realtor index page
- admin passerelle realtor listings page 
#### contracts listing page - **Annonce Premium**

 `URL` example
[dev - contracts - 2080494651](https://backyard-dev.meilleursagents.tech/contacts/5758471/projects/2080878347/contracts/2080494651/listing)

**details**
- the listings are at the bottom of the page
- only basic information is displayed

**properties shown**
- image
- title
- price
- location
- description
- link to the website listing page

#### admin passerelle realtor index page 🏸

