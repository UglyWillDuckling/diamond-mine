---
category:
  - "[[Film]]"
plan-to-watch: false
interest:
type: movie
subType: ""
title: How the Grinch Stole Christmas
year: "2000"
dataSource: OMDbAPI
url: https://www.imdb.com/title/tt0170016/
id: tt0170016
plot: On the outskirts of Whoville lives a green, revenge-seeking Grinch who plans to ruin Christmas for all of the citizens of the town.
genres:
  - Comedy
  - Family
  - Fantasy
director:
  - Ron Howard
onlineRating: 6.4
actors:
  - Jim Carrey
  - Taylor Momsen
  - Kelley
image: https://m.media-amazon.com/images/M/MV5BNDAwMjFhYTEtNzYyMS00YmY2LTg3MGEtZTRkNWNiMDI4MDRkXkEyXkFqcGc@._V1_SX300.jpg
released: true
premiere: 11/17/2000
watched: false
lastWatched: ""
personalRating: 0
tags:
  - film
  - film/christmas
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
