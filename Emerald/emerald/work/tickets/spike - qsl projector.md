> 
## Ideas 💡

- make a **use case** diagram


## Context

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

### required fields, so far

```typescript
type response = {
	classified_id: number,
	project_id: number,
	realtor_id: number,
	contract_id: number,
	offline: boolean | 0 | 1,
	?contact_id: number, // would make it easier for us link the listing to a contact
	?url_to_seloger: string // would be good to have it here
}
```

**todo for now** ☑
- [ ] explore the current implementation
	- [ ] what is done exactly and where
	- [ ] what is shown and which data is required
		- examine each of the pages that use the [[listing]] entity
		- see which data is used 
		- check if all of this is required for the new **Se Loger** listing
- [ ] take a look at the **db model**
	- [ ] see what information is there
		- determine what is actually used and needed for this use case
## Investigation 🔍

**entity**

name: [[listing]]
class: `listing2`
file: `share/mkt/listing.inc`

used methods:
- [ ] `get_place` - returns the [[place entity]] `ref`
- `get_url` - generates the `URL` for the listing
	- atm, links only to the [[Meilurs Agent]] website
- `get_title` - simply return the title
- `description` - a field, not mandatory, could be left empty
- `get_main_picture_url` - generates the image `URL`
- `price` - a field, the current listing **price
- `contract` - a field, contains a `ref` to the associated [[contract entity]]
