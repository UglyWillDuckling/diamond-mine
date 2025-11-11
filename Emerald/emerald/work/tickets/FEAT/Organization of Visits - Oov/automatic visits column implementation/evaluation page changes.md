#sub-ticket

TIB-84
https://avivgroup.atlassian.net/browse/TIB-64


> If the visit status is **Rejected**, **Expired** or **Manual** - the warning message is not displayed.

http://localhost:8001/contacts/3840161/projects/2080618680/evaluations/2080547639

- [x] implement the warning message
	- [x] API request
	- [x] display warning conditionally
- [x] wrap up
- [x] check the other ticket for displaying visit info
- [x] add [[#rejection reason section]]

## rejection reason section
[TIB-78](https://avivgroup.atlassian.net/browse/TIB-78)

- [x] fix the tests ⚠
- [x] refactor FakeFactory, move

- [ ] sidebar container
	- [x] update current html structure
	- [x] add classes, etc.
	- [x] add danger section 😸
	- [ ] rename stuff, refactor
- [x] display logic
	- [x] API call
	- [x] js show logic
	- [x] create HTML elements
- [ ] ..
- [ ]  **styling**
	- [x] make first version
	- [x] fix styling for empty container
	- [ ] think if it's necessary to move the styling to a less file

#### template

**Planif. auto visites**: REJETTE
`reason of rejection`

```html
<style>
	.alert-content {
		color: #333;
		font-size: 14px;
		font-weight: 600;
	}

	.sidebar-status.rejected {
		color: white;
		background: #EF9D95;
		padding: 5px;
		display: inline-block;
		border: 1px solid black;
	}

	.well.alert.rejected {
		background-color: #FDD0EC;
		color: #C9372C;
	}

	.well.alert.rejected .alert-item > h3 {
		display: inline-block;
	}

	.well.alert.rejected .alert-item > span {
		padding-left: 10px;
	}
</style>
<div class="alert-item">
	<h3>Planif. auto visites</h3><span>REJETTE</span>
	<p class="alert-content">reason</p>
</div>
```

to test with:
http://localhost:8001/api/visits/bff/visit/status?id=2080547639&project_id=111
