---
status:
  - finished 🏁
---
#ticket 

> https://avivgroup.atlassian.net/browse/LUNA-368

- [x] #task [[Team Create-Edit Modal Component]] 🔼 🛫 2025-03-05 ⏳ 2025-03-12 📅 2025-03-09 🆔 hx4byP ✅ 2025-04-03
	- [x] make draft PR
	- [x] make requested changes
	- [x] add [[#tests]]
	- [/] add **update** team logic
	- [/] add translations

## **current**
- need to add update team logic [[#rewrite to support `editing` teams]]
___
## resources
- [[route list for LUQA]]
- [figma](https://www.figma.com/design/adnxuwYgX04UHGq6KtxmK4/Seller-Lead-CRM?node-id=242-72537&p=f&t=y9Z4rGIQhwjepIRC-0 )
- [[CSS Flexbox Layout Guide  CSS-Tricks]]

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


[[485ddd1f4dd3778a21748ca3db44dce3_MD5.jpeg|ss.png]]
![[485ddd1f4dd3778a21748ca3db44dce3_MD5.jpeg|1000]]

## tests
> [[how to testing a specific test on LUQA#steps]]
> [[jest Testing Framework]]

### **test commands**
```json
"test": "jest --passWithNoTests",
"test:update": "pnpm test -- --updateSnapshot",
"test:coverage": "pnpm test -- --coverage",
"test:watch": "pnpm test -- --watch",
```

## rewrite to support `editing` teams

- [x] add create button
- [/] add edit button: edit existing team

[[CSS Flexbox Layout Guide  CSS-Tricks]]
