Whenever the user saves or makes any changes to the evaluation manually a call to oov api should be made.

- route: agency/disable
- method: POST
- params: projectId, evaluationId

- [x] develop [[#disable request]]
	- [x] unit tests
- [x] controller modifications
	- [x] call disable endpoint
	- [x] implement [[#error handling]]
	- [x] tests

### disable request

- [x] develop call
- [x] error handling
- [x] unit tests

### error handling

- status id organised: 183184836
- & the errors will be logged by the API subsystem itself

The user should be notified that the issue occurred. 
It should not cause a fatal error in the flow.
The problem should be **logged**.

- [x] test the handling manually

- [x] run **existing** tests
- [x] 🤔 think about implementing tests for the controller

- we won't implement controller test at this point, maybe in the future if the need arises
