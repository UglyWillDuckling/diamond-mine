related:: [[manual process to update irises]]
___

- **requires** a `realtor_id`
- will delete **old**
- entries and add new ones

old: [1,2, 3,4]
new: [ 3,4,5]
1. add new items [3,4,5] -> state: [1,2,3,4,5]
2. delete old [1,2] -> state: [3,4,5]
