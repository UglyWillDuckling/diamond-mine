
## new

| new  |                               | old       |     |
| ---- | ----------------------------- | --------- | --- |
| id   | event                         | detail    |     |
| 5.0  | waiting                       | /         |     |
| 6.0  | away                          | /         |     |
| 10.0 | login                         | loginj    |     |
| 11.0 | logout                        | logout    |     |
| 12.0 | intercall                     | intercall |     |
| 13.0 | break                         | pause     |     |
| 14.0 | available                     | available |     |
| 20.0 | call_offered_to_agent         |           |     |
| 22.0 | dialing_to_contact            |           |     |
| 23.0 | conversation                  |           |     |
| 25.0 | wrapup                        |           |     |
| 26.0 | preview                       |           |     |
| 28.0 | hold                          |           |     |
| 30.0 | missed_call                   |           |     |
| 33.0 | interrupt                     |           |     |
| 51.0 | missed_call_origination_error |           |     |
| 52.0 | missed_call_hang_up           |           |     |
| 53.0 | missed_call_timeout           |           |     |
|      |                               |           |     |
## old

| status_detail_id | status_detail         |
| ---------------- | --------------------- |
| 10.0             | login                 |
| 11.0             | logout                |
| 12.0             | intercall             |
| 13.0             | pause                 |
| 14.0             | available             |
| 20.0             | inbound_call_offered  |
| 21.0             | outbound_call_offered |
| 22.0             | campaign_dialing      |
| 23.0             | conversation          |
| 24.0             | free_number_offered   |
| 25.0             | wrapup                |
| 26.0             | preview               |
| 27.0             | free_number_dialing   |
| 28.0             | hold                  |
| 29.0             | outbound_call_missed  |
| 30.0             | inbound_call_missed   |
| 31.0             | away                  |
| 32.0             | free_call_missed      |

## combined table

| event                             | event_id | status_detail             | status_detail_id | explain                                            |     |
| --------------------------------- | -------- | ------------------------- | ---------------- | -------------------------------------------------- | --- |
| **waiting**                       | 5.0      |                           |                  | new / timestamp doesn't exist in old               |     |
| **away**                          | 6.0      |                           |                  | moved                                              |     |
| login                             | 10.0     | login                     | 10.0             |                                                    |     |
| logout                            | 11.0     | logout                    | 11.0             |                                                    |     |
| intercall                         | 12.0     | intercall                 | 12.0             |                                                    |     |
| **break**                         | 13.0     | **pause**                 | 13.0             |                                                    |     |
| available                         | 14.0     | available                 | 14.0             |                                                    |     |
| **call_offered_to_agent**         | 20.0     | **inbound_call_offered**  | 20.0             | remapped to 22 / dialing_to_contact                |     |
|                                   |          | **outbound_call_offered** | 21               | old / timestamp missing in new                     |     |
| **dialing_to_contact**            | 22.0     | **campaign_dialing**      | 22.0             | renamed                                            |     |
| conversation                      | 23.0     | conversation              | 23.0             |                                                    |     |
|                                   |          | **free_number_offered**   | 24               | remapped to 20 / call_to_offered_agent             |     |
| wrapup                            | 25.0     | wrapup                    | 25.0             |                                                    |     |
| preview                           | 26.0     | preview                   | 26.0             |                                                    |     |
|                                   |          | **free_number_dialing**   | 27               | remapped to **22**                                 |     |
| hold                              | 28.0     | hold                      | 28.0             |                                                    |     |
|                                   |          | **outbound_call_missed**  | 29               | remapped to **51**                                 |     |
| missed_call                       | 30       | **inbound_call_missed**   | 30               | remapped and **expanded** with inbound_call_missed |     |
|                                   |          | **away**                  | 31               | moved to **6**                                     |     |
|                                   |          | **free_call_missed**      | 32               | moved to 52,                                       |     |
| **interrupt**                     | 33.0     |                           |                  | not relevant                                       |     |
| **missed_call_origination_error** | 51.0     |                           |                  |                                                    |     |
| **missed_call_hang_up**           | 52.0     |                           |                  |                                                    |     |
| **y**                             | 53.0     |                           |                  |                                                    |     |
