#ticket 
- [x] #task see how to setup rulesets on [[qsl dataset]] ✅ 2025-01-10
---
## info
- rules go here [github](https://github.com/axel-springer-kugawana/aviv_data-fraudulentactordetection-contracts/blob/master/src/aviv_data_fraudulentactordetection_contracts/quality/live/qsl_boost.py#L13-L20)

## background / context
[[Marc Jonot]] already made some recommended changes to the ruleset. He also gave us the recommendations that were auto-generated.

[[list of possible dataset rules]]

**autogenerated**
 ```
 Rules = [
   RowCount between 159 and 638,
   IsComplete "project_id",
   StandardDeviation "project_id" between 48457.76 and 53558.57,
   Uniqueness "project_id" > 0.95,
   ColumnValues "project_id" between 2080684590 and 2081073807,
   IsComplete "realtor_id",
   StandardDeviation "realtor_id" between 24231.67 and 26782.37,
   ColumnValues "realtor_id" between 747 and 89685,
   Completeness "contract_id" >= 0.86,
   StandardDeviation "contract_id" between 899.72 and 994.43,
   ColumnValues "contract_id" between 2080504110 and 2080507918,
   IsComplete "city_id",
   StandardDeviation "city_id" between 116840534.36 and 129139537.97,
   ColumnValues "city_id" between 1304 and 2080778198,
   IsComplete "region_id",
   ColumnValues "region_id" in ["20","29","2080777910","2080777909","2080777908","2080777906","14"] with threshold >= 0.87,
   StandardDeviation "region_id" between 919491205.31 and 1016279753.24,
   ColumnValues "region_id" between 13 and 2080777911,
   IsComplete "subregion_id",
   ColumnValues "subregion_id" in ["114","131","132","133","117","51","73","108","134","122","116","44","130","72","70","83","113","98","55","81","115","102","48","103","84","66"] with threshold >= 0.87,
   StandardDeviation "subregion_id" between 27.22 and 30.08,
   ColumnValues "subregion_id" between 39 and 135,
   IsComplete "classified_id",
   StandardDeviation "classified_id" between 1971978.5 and 2179555.19,
   Uniqueness "classified_id" > 0.95,
   ColumnValues "classified_id" between 215761470 and 232294810,
   Completeness "start_date" >= 0.96,
   IsComplete "title",
   Uniqueness "title" > 0.95,
   ColumnLength "title" between 5 and 65,
   IsComplete "description",
   Uniqueness "description" > 0.95,
   ColumnLength "description" between 206 and 2827,
   Completeness "price" >= 0.89,
   StandardDeviation "price" between 183302.51 and 202597.51,
   ColumnValues "price" between 44899 and 1650001,
   IsComplete "created",
   Uniqueness "created" > 0.95,
   Completeness "picture_data" >= 0.84,
   ColumnLength "picture_data" <= 1290
]
 ```

**recommended**
 ```
 ruleset = (
        "Rules = ["
        'IsComplete "classified_id",'
        'IsComplete "project_id",'
        'IsComplete "realtor_id",'
        'IsComplete "contract_id"'
        "]"
 ```

**list of known rules**
 - RowCount
 - IsComplete
 - StandardDeviation
 - Uniqueness
 - ColumnValues
 - ColumnLength
