```dataview
table without id 
	file.link as Title,
	("![](" + image + ")") as Cover,
	"by " + author as Author,
	"Published: " + published as Published,
	interest,
	choice(plan-to-watch, "▶️", "") as "Plan"
from #📚Book
WHERE reading="reading"
SORT interest DESC
```