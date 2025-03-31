---
related:
  - "[[movi list - wip]]"
based_on: "[[Create a movie database]]"
cssclasses:
  - cards
  - cards-cover
  - cards-2-3
  - table-max
tags:
  - Listing/movies
---

## Best of list
```dataview
table without id 
	("![](" + image + ")") as Poster,
	file.link as Title,
	string(year) as Year, 
	"by " + director as Director,
	onlineRating as "⭐ rating",
	personalRating
from #film 
SORT personalRating DESC
```
