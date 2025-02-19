#ticket/bug #bug/work

parent:: [[QSL listing feature]]
related:: [[frontend implementation|qsl frontend impl]]
jira:: https://avivgroup.atlassian.net/browse/LUNA-441
___

Some of the projects are not having their [[QSL listing]] links displayed despite the fact they exist.
  http://localhost:8001/contacts/6097615/projects/2080884707
  
We will need to **reconsider** the display logic, the listings need to be **separated** from the realtors printing and should be on their own. After that, we can consider including the realtors within the `Listing header section`.
___
- [x] **render** the lstings by themselves
- [x] send `ss` to [[Natasa Bozic]]
- [x] implement changes
- [x] include realtor link
- [x] take a break 🏖
- [x] wait 🇰‍🇼
- [x] remove  old printing logic `AND`
- [x] add new logic
- [x] **test** everything
	- [x] check projects without listings
	- [x] check existing projects
	- [x] **run** old tests if any
- [?] write  tests`
