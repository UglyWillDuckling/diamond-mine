#timeline 

A movie timeline built with [[dataview]].
___

# Timeline 

```dataviewjs
function imageFrom(movie) {
	console.log(movie.image.path)
	
	let img = movie.image
	
  if (img.path) {
		img = img.path
  } 
	return "![image|150](" + img + ")";
}

let movies = dv.pages("#film").where(m => m.type == 'movie').sort(m => m.year);


let codeblock = "```timeline\n" + "[line-3, body-2]\n"

for (let movie of movies) {
	console.log(movie)
	let title = movie.title
	let year = movie.year
	let plot = movie.plot
	let link = movie.file.link
	
	if (!title || !year) {
		continue;
	}

	let entry = "+ " + year + "\n"
	entry += "+ " + imageFrom(movie) + "\n"
	entry += "+ " + link + " " + plot + "\n"
	entry += "\n"
	codeblock += entry
}

codeblock += "```"
dv.paragraph(codeblock)
```
