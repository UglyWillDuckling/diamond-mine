
```dataviewjs
let movies = dv.pages("#film").where(m => m.type == 'movie').sort(m => m.year);

let codeblock = "```chronos\n"

for (let m of movies) {
	let title = m.title
	let year = m.year
	
	if (!title || !year) {
		continue;
	}

// - [1879-03-14] Einstein born
	codeblock += "- " + "[" + year + "]" +  title + "\n"
}

codeblock += "```"
dv.paragraph(codeblock)
```

