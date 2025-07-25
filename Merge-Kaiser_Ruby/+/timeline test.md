
```timeline
[line-3, body-2]
+ pre</br> 17th century
+ Origins of coffee
+ The modern version of roasted coffee originated in Arabia. During the 13th century, coffee was extremely popular with the Muslim community for its stimulant powers, which proved useful during long prayer sessions. By parching and boiling the coffee beans, rendering them infertile, the Arabs were able to corner the market on coffee crops. In fact, tradition says that not a single coffee plant existed outside of Arabia or Africa until the 1600s, when Baba Budan, an Indian pilgrim, left Mecca with fertile beans fastened to a strap across his abdomen. Baba’s beans resulted in a new and competitive European coffee trade.

+ 17th century
+ Europe and coffee
+ In 1616, the Dutch founded the first European-owned coffee estate in Sri Lanka, then Ceylon, then Java in 1696. The French began growing coffee in the Caribbean, followed by the Spanish in Central America and the Portuguese in Brazil. European coffee houses sprang up in Italy and later France, where they reached a new level of popularity. Now, it is de _rigueur_ for Parisians to indulge in a cup of coffee and a baguette or croissant at the numerous coffee cafes throughout Paris.
```

___

# movies


Should be done with [[dataview]]. Build up the txt based on the info from [[movies base.base]]. 

### format
```timeline
[line-3, body-2]

```

1. create a code block of `timeline` type. Firs line is `[line-3, body-2]`. 
	 %% Should be ok with this one. Later we can add more info as needed. %%
2. Use dataview to find the movies and sort them by `year`. 
3. Build up the text for each entry
	- every line starts with  `+ `
	- for each line add the need info

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



