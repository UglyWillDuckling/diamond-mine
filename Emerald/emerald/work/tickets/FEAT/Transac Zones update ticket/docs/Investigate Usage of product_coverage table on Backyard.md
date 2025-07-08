
[JIRA](https://avivgroup.atlassian.net/browse/LUNA-528)

___
## Findings

the table is used extensively on the Backyard and would be hard to replace

## solutions

### replace table usage with API calls

**pros**
- would be fully compatible with the new API

**cons**
- would require a significant amount of effort
- still unclear how this would impact other projects and systems

### combine the usage of the API with the existing implementation

**pros**
- much simpler to implement
- would ensure that all existing code on Backyard remains functional
- ensures that any other project or system that is still reliant on the table isn't affected and doesn't need to change

**cons**
- results in duplicate logic

## Proposed solution

**combine the usage of the API with the existing implementation**

### reason

proposed because of the size of the effort required to fully replace the current implementation, unknown uses of the table in other projects and the fact that Backyard is planned to be decomissioned in this year.
