---
category:
  - "[[Film]]"
  - "[[Fiction]]"
plan-to-watch: false
interest:
type: movie
subType: ""
title: "The Lord of the Rings: The Fellowship of the Ring"
year: "2001"
dataSource: OMDbAPI
url: https://www.imdb.com/title/tt0120737/
id: tt0120737
plot: A meek Hobbit from the Shire and eight companions set out on a journey to destroy the powerful One Ring and save Middle-earth from the Dark Lord Sauron.
genres:
  - Adventure
  - Drama
  - Fantasy
director:
  - Peter Jackson
onlineRating: 8.9
actors:
  - Alan Howard
  - Noel Appleby
  - Sean Astin
image: https://m.media-amazon.com/images/M/MV5BNzIxMDQ2YTctNDY4MC00ZTRhLTk4ODQtMTVlOWY4NTdiYmMwXkEyXkFqcGc@._V1_SX300.jpg
released: true
premiere: 12/19/2001
watched: true
lastWatched: ""
personalRating: 0
tags:
  - mediaDB/tv/movie
  - film/comfort
cat:
---

`$= '![Image|200](' + dv.current().image + ')'`

# `$= dv.current().title`

```dataviewjs
if (dv.current().watched) {
	dv.paragraph(`> [!SUCCESS] \`INPUT[toggle:watched]\` watched \n last watched on ${dv.current().lastWatched || '---'}`);
} else {
	dv.paragraph(`> [!WARNING] \`INPUT[toggle:watched]\` not yet watched`);
}
```

```dataviewjs
if (dv.current().watched) {
	dv.paragraph(`> [!SUCCESS] \`INPUT[toggle:plan-to-watch]\` planned`);
} else {
	dv.paragraph(`> [!WARNING] \`INPUT[toggle:plan-to-watch]\` not planned`);
}
```

**Rating**:  `INPUT[slider(addLabels, minValue(0), maxValue(10)):personalRating]` (`$= dv.current().personalRating` out of 10)

**Premiered**: `$= dv.current().premiere`
