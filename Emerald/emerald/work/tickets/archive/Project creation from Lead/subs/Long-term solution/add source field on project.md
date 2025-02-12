> This field should just specify the **type** of the source of the project. Additionally, we need to have the correct id value as well.

## Acceptance 📗
- [x] @  the `transaction` id is also present on the [[Real Estate Project]] 
- [x] $ the project contains the **source type** field with the correct value

## valid types 📑
- `estima`
- `lead`
## notes 📔
- the field `origin_estima_id` **already contains** the correct id
	- it is based on [[transaction]] entity

--- start-multi-column: ID_o3qh
```column-settings
Number of Columns: 2
Largest Column: standard
```
### notes 🗒
- `origin_estima_id` is already present on the [[Real Estate Project]]

--- column-break ---

### types
- estima
- lead

--- end-multi-column

---
## implementation

### todo ✔
- [x] add `source_type` field on transaction hdata
- [x] "" **test** to verify that it is set on the project

[[project workflow test]]
