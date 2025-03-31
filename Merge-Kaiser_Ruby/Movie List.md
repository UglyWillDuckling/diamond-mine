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
# to watch 👀

```dataview
table without id 
	("![](" + image + ")") as Poster,
	file.link as Title,
	string(year) as Year, 
	"by " + director as Director,
	onlineRating as "⭐ rating",
	 interest as interest,
	choice(plan-to-watch, "▶️", "") as "Plan"
from #film 
WHERE !watched OR plan-to-watch
SORT plan-to-watch DESC, interest DESC, personalRating DESC
LIMIT 22
```


# Best of list

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
