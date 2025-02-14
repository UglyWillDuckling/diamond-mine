---
published: 2022-05-14
author:
  - "[[cwhiii]]"
source: https://forum.obsidian.md/t/dataview-date-formatting/37456/2
about:
  - "[[dataview]]"
tags:
  - howto/obsidian/dataview
---
### What I’m trying to do

I have a dataview as follows:

```rb
TABLE
	dateOfPurchase
	FROM #InventoryItem
	WHERE file.name = "Air Pump"
	SORT file.name asc
```

The file Air Pump looks like this:

```yaml
dateOfPurchase:: 2021-09-10
#InventoryItem
```

So far, so good. However, when the dataview is rendered, it changes the date format to “September 10, 2021”. This makes the date too long, and breaks each row into multiple lines.

I’ve attempted to use several formatting ways, such as:

- dateFormat(dateOfPurchase, “YYYY-MM-dd”)
- date(file.day, “YYYY-MM-dd”)
- date(dateOfPurchase, “YYYY-MM-dd”)
- Etc.

I’ve scoured the [Dataview documentation 1.5k](https://blacksmithgu.github.io/obsidian-dataview/query/functions/), searched these forums, and googled this.

However, no matter what I’ve tried, the date always displays as “September 10, 2021”.

Is there any way to apply a date format to a date shown in a dataview? I’m trying to get it to display as either of:

- 2021-Sep-10
- 2021-09-10

Hi!

You have to options:

1 - if you want to apply a specific format to all your date outputs, go to settings > dataview and change the output date format using luxon tokens.  

[![image](https://forum.obsidian.md/uploads/default/optimized/3X/0/a/0ae4a91ef6968abeafc374f6639cad2c35bc7780_2_690x79.png)](https://forum.obsidian.md/uploads/default/original/3X/0/a/0ae4a91ef6968abeafc374f6639cad2c35bc7780.png "image")

2 - if you want to change a specific output in the query, use the function `dateformat(field, "yyyy-MM-dd")` and use the luxon tokens.

For example, for the format “2021-09-10” use

```java
dateformat(dateofpurchase, "yyyy-MM-dd")
```

… for “2021-Sep-10” use:

```scss
dateformat(dateofpurchase, "yyyy-LLL-dd")
```

Luxon tokens: [luxon/formatting.md at master · moment/luxon · GitHub 1.4k](https://github.com/moment/luxon/blob/master/docs/formatting.md)
