---
category:
  - "[[Film]]"
interest:
plan-to-watch: true
personal favorite: false
type: movie
subType: ""
title: Honeyland
year: "2019"
dataSource: OMDbAPI
url: https://www.imdb.com/title/tt8991268/
id: tt8991268
plot: The last female bee-hunter in Europe must save the bees and return the natural balance in Honeyland, when a family of nomadic beekeepers invade her land and threaten her livelihood.
genres:
  - Documentary
director:
  - Tamara Kotevska
  - Ljubomir Stefanov
onlineRating: 8
actors:
  - Hatidze Muratova
  - Nazife Muratova
  - Hussein Sam
image: https://m.media-amazon.com/images/M/MV5BMWViMTZlMzUtZjU3My00MzQ3LWI0YTYtNzg4NzcyOTZkZjUxXkEyXkFqcGc@._V1_SX300.jpg
released: true
premiere: 26.07.2019
watched: false
lastWatched: ""
personalRating: 0
tags:
  - film
selected: true
movie_status:
  - plan_to_watch
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
if (dv.current()['plan-to-watch']) {
	dv.paragraph(`> [!SUCCESS] \`INPUT[toggle:plan-to-watch]\` planned`);
} else {
	dv.paragraph(`> [!WARNING] \`INPUT[toggle:plan-to-watch]\` not planned`);
}
```

**Premiered**: `$= dv.current().premiere`

The last female bee-hunter in Europe must save the bees and return the natural balance in Honeyland, when a family of nomadic beekeepers invade her land and threaten her livelihood.
