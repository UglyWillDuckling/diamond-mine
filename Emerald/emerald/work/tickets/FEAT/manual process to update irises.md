about:: [[Handle usage of biz_product_coverage table]]
related:: [[process to update zones iris automatically]]
___

- will add items **only** if no matching items are present
- doesn't expect a `realtor_id`

1. receive a list of irises
2. remove existing ones
3. add the ones that don't yet exist

```python
new_row = RealtorZoneByIrisId.add_new_row(
	iris_id=iris_id,
	zone=zone,
	created_at=created_at,
	is_manual_edit=is_manual_edit,
)
```