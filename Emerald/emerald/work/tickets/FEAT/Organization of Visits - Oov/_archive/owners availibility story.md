#subticket 

[JIRA / TIB-64](https://avivgroup.atlassian.net/browse/TIB-63)

**Acceptance criteria**:

NOT ENTERED state
1. The system displays in the new section called Planification automatique des visites (Automatic scheduling) :
- Link with the text (link label Ajouter la disponibilité du propriétaire (Add owner’s availability)
- Status Non renseigné (not added)
- Alert message Disponibilité non renseignée. Veuillez indiquer les dates et heures de visite.
	(Availability not added. Please add the dates and hours for visits.)
1. Clicking on the link Ajouter la disponibilité du propriétaire opens the owner’s availability page in another tab PULSAR-721
 

ENTERED state
2. Once entered by clicking on the link ( PULSAR-721
 ) , the system displays:
- Link with the text (link label Ajouter la disponibilité du propriétaire (Add owner’s availability) + STATUS which now says `AJOUTÉ` (Added)
- Disponibilité du propriétaire section, with the actual selected dates (+day of the week for each entry), and time slots selected for the day
3. If salesperson/Back Office clicks on the link, he is redirected to a page - where all the selected owner’s availability dates+time slots are displayed, which is non editable.

[user flow doc](https://avivgroup.atlassian.net/wiki/spaces/AVIVIM/whiteboard/1840120114?whiteboard-linked-object=J5ckMlqf_Rvx2Fks8a7kb)
[API contract - schedule visit owner](https://avivgroup.atlassian.net/wiki/spaces/AVIVIM/pages/1879351877/API+contracts+lambda+definitions#schedule-visit-owner)

==response==
```json
{
    status: "OK",
    data: {
        link: string,
        status: enum(IN_PROGRESS, FILLED, EXPIRED),
        availability?: object<string, [string, string]>[] // see example below
    },
    metadata: {
        timestamp: datestring
    }
}
//
{
    "2025-09-15": [
        [
            "2025-09-15T10:00:00.000Z",
            "2025-09-15T15:00:00.000Z"
        ]
    ],
    "2025-09-17": [
        [
            "2025-09-17T10:00:00.000Z",
            "2025-09-17T15:00:00.000Z"
        ]
    ]
}
```

1. [x] develop the [[#Schedule API request]]
	1. [x] implementation
	2. [x] error handling
	3. [x] response transformation
	4. [x] tests
2. [x] Develop [[#Schedule Endpoint]]
	1. [ ] implementation
	2. [ ] response
	3. [ ] testse
3. [x] FE changes
	1. [ ] html
	2. [ ] js
	3. [ ] link show
	4. [ ] dates show
	5. [ ] error message
	6. [ ] switch logic
	7. [ ] styling

### Schedule API request

- [x] create requst/response classes
- [x] add method to factory
- [x] try out
- [x] test the call
- [x] script to run the call

### Schedule Endpoint

- [x] create route file
- [x] create endpoint class
- [x] decide on the response format

### Frontend
> http://localhost:8001/contacts/3840161/projects/2080618680/evaluations

- [x] implementation on fake page
- [x] use real response
- [x] rearange HTML structure
- [x] cover case without schedule
- [x] add error message

- [x] add date of week
- [x] error handling
- [x] simplify HTML structure
- [x] move to real page
- [x] use real php variable values
- [x] styling: where to?
- [x] styling: use existing values
- [x] add day of **week**

- [x] `rebase` to reduce number of commits
- [x] format the `index.php`

- [x] add **BE** tests
- [x] move `Schedule` out of share/Backyard/Oov/Bff/Endpoint.php

- [x] **translations** update
