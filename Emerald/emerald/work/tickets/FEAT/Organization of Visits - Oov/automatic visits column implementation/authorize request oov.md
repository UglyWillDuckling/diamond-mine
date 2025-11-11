
[API contracts doc](https://avivgroup.atlassian.net/wiki/spaces/AVIVIM/pages/1879351877/API+contracts+lambda+definitions#schedule-visit-agencies)

Should call  the `schedule-visit-agencies` endpoint on [[oov module]].

schedule-visit-agencies
path: /agency/schedule

**request**
```json
{
  projectId: string,
  agencies: [{
    id: string,
    evaluationId: string,
    email: string, // agency's master email to send link to
  },], // multiple agencies
  propertyDetails: {
    street: string,
    zip: string,
    city: string,
    area: string
  }
}
```

- accepts a project
- accepts a list of   evaluations that have been authorized
- should retrieve property details from [[biz_item]]

```php
function req($project, $evalutions) {
	$details = build_details_from($project);
	$agencies = build_agencies_from($evaluations);
	
	request = [
		'projectId' => project->id,
		'agencies' => $agencies,
		'propertyDetails' => $details
	];
	
	$data = send($petition);
	
	return new Response($data);
}
```

- [x] first implementation
	- [x] check details
	- [x] check realtor(agency) data
	- [x] handle case **when there is no email**
	- [x] finish response
- [x] start writing some tests

- ! some realtors don't have an email address!!!
### when there's no emails

- [x] check how many of the agencies don't have emails
	- [x] write script
	- [x] log missing emails
- [x] decide and confirm what we should do
