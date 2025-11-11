#ticket


- [x] test the flow locally and write down your findings
- [x] ask ❔ what is left to be implemented so that we could present the entire flow
- [ ] get the project id or **link**

### flow test

share/controller/backyard.evaluation.inc
https://github.com/MeilleursAgents/MeilleursAgents/blob/2c6b9211b27652642bc8dc2d8d45cfbc2a2fbbfa/MALegacy/share/controller/backyard.evaluation.inc#L299

eval: 2080901240

current status: 183184837
`organised` status key: 183184836
`requested`: **183184834**

- [x] check status
- [x] update status to 'requested': 183184834
- [x] update project status to `PROJECT_STATUS.EVALUATION_REQUESTED`:`183184816`
- [x] make auth request
- [x] update to suport unknown leader name

### auth req
> [[authorize request oov]]

```json
{
"projectId":"2081115347","agencies":[
	{"evaluationId":"2080901240","id":"65013","email":"contact@icomi-france.fr","masterName":""}
],
"propertyDetails":{"street":"Route de la Trinit\u00e9","zip":"29280","city":"Plouzan\u00e9","area":"36"}
}
```

