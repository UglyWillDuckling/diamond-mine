#subticket 

The oov module needs to be notified with appropriate information whenever evaluations have been authorized.

**Confluence**:
API contracts: https://avivgroup.atlassian.net/wiki/spaces/AVIVIM/pages/1879351877/API+contracts+lambda+definitions#schedule-visit-agencies
User flow: https://avivgroup.atlassian.net/wiki/spaces/AVIVIM/whiteboard/1840120114?atl_f=PAGETREE&whiteboard-linked-object=pyNG61ZPb7MAycxQ55B2G

used in: https://avivgroup.atlassian.net/wiki/spaces/AVIVIM/whiteboard/1840120114?atl_f=PAGETREE&whiteboard-linked-object=pyNG61ZPb7MAycxQ55B2G 
(triggered by “**Autoriser les Evaluations avec email**” button)

> It triggers generation of visit links for each agency and the flow to send emails and smses with link and information about property.

- [x] implement [[authorize request oov]]
	- [x] error handling
	- [x] response transformation
	- [x] factory method, etc.
	- [x] handle missing emails
- [x] **update existing code
	- [x] trigger the [[authorize request oov]]
	- [x] handle errors
- [x] fix tests

- [x] fix `get_realtors` method on realtor
- [x] **test authorize manually** [[#manual test]]

### update existing code

`share/controller/backyard.evaluation.inc`
`tests/Backyard/Api/Oov/`
 
#### **request**

```json
empty email
{
  "projectId": "2080618680",
  "agencies": [
    {
      "id": "25235",
      "email": "contact@mavimmobilier.fr",
      "evaluationId": "2080547639"
    },
    {
      "id": "52525",
      "email": "",
      "evaluationId": "2080547640"
    },
    {
      "id": "35094",
      "email": "marcq@abrinor.fr",
      "evaluationId": "2080547638"
    }
  ],
  "propertyDetails": {
    "street": "Rue la Fayette",
    "zip": "59700",
    "city": "Marcq-en-Barœul",
    "area": "90"
  }
}
```

```json
{
  "projectId": "2080618680",
  "agencies": {
    "0": {
      "id": "25235",
      "email": "contact@mavimmobilier.fr",
      "evaluationId": "2080547639"
    },
    "2": {
      "id": "35094",
      "email": "marcq@abrinor.fr",
      "evaluationId": "2080547638"
    }
  },
  "propertyDetails": {
    "street": "Rue la Fayette",
    "zip": "59700",
    "city": "Marcq-en-Barœul",
    "area": "90"
  }
}
```

### manual test 🤙

1. find evaluation in required status or **make** one
2. remove the actual update
3. test by clicking
4. make changes/fixes
5. test again
6. test with actual update
7. make changes if needed

contact: 7795411
project: 2081173223
http://localhost:8001/contacts/7795411/projects/2081173223/evaluations

- [x] create script to find evaluations by status

- [x] test validation
- [x] test loading of evaluations
- [x] test success
- [x] test db errors
- [x] test error logging
- [x] **play** **around** with error handling

- [ ] improve exception logging
