#timeline 

A movie timeline built with [[dataview]].
___

# Timeline 

```dataviewjs
let movies = dv.pages("#film").where(m => m.type == 'movie').sort(m => m.year);

let codeblock = "```timeline\n" + "[line-3, body-2]\n"

for (let movie of movies) {
	let title = movie.title
	let year = movie.year
	let plot = movie.plot
	
	if (!title || !year) {
		continue;
	}

	let entry = "+ " + year + "\n"
	entry += "+ " + title + "\n"
	entry += "+ " + plot + "\n"
	entry += "\n"
	codeblock += entry
}

codeblock += "```"
dv.paragraph(codeblock)
```



