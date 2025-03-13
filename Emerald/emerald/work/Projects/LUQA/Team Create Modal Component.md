---
status: In Progress
---
#ticket 
https://avivgroup.atlassian.net/browse/LUNA-368

- [/] #task [[Team Create Modal Component]] 🔼 🛫 2025-03-05 ⏳ 2025-03-12 📅 2025-03-09 🆔 hx4byP
	- [x] make draft PR
	- [x] make requested changes
	- [x] add **tests**
	- [/] expand on tests
	- [ ] add translations

___
## description

As admin, 
I want to be able to create a team, 
So that Luqa users could be organised in teams.

**Acceptance criteria:**

The user can access creation or teams from TEAMS tab of User management.

When the user starts creating a new team, 
Then he can:
- input a teams name - mandatory input. Team cannot be saved if it has no name input, at least 3 characters.
- select team members - optional
- select departments / postal codes for the teams - optional

**Figma** design: 
[figma link](https://www.figma.com/design/adnxuwYgX04UHGq6KtxmK4/Seller-Lead-CRM?node-id=242-72537&p=f&t=y9Z4rGIQhwjepIRC-0 )

[[485ddd1f4dd3778a21748ca3db44dce3_MD5.jpeg|ss.png]]
![[485ddd1f4dd3778a21748ca3db44dce3_MD5.jpeg|1000]]

### checklist ☑

- [x] add cancel button
- [x] look at the design
- [x] update **text** area to match design
- [x] update button width
- [x] Update button text
- [x] submit `draft` PR
- [x] check the logic again

- [>] add translation

## tests
> [[jest Testing Framework]]

### **test commands**

```json
"test": "jest --passWithNoTests",
"test:update": "pnpm test -- --updateSnapshot",
"test:coverage": "pnpm test -- --coverage",
"test:watch": "pnpm test -- --watch",
```

### testing a specific test

1. run `test:watch`
2. click `p` to filter by `filename`
3. enter `filename` of the test

### current

tests to add:
- server error `error message` test
- form validation error test
- form `reset` test???