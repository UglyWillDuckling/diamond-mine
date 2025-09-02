```dataview
table without id 
	file.link as Title,
	("![](" + image + ")") as Cover,
	"by " + author as Author,
	"Published: " + published as Published,
	"interest: " + interest as interest,
	choice(plan-to-read, "▶️", "") as "Plan"
FROM #📚Book
WHERE !read AND !reading
SORT interest DESC
LIMIT 11
```