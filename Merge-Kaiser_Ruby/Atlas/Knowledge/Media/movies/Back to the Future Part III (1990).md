---
category:
  - "[[Film]]"
interest:
plan-to-watch: true
personal favorite: true
type: movie
subType: ""
title: Back to the Future Part III
year: "1990"
dataSource: OMDbAPI
url: https://www.imdb.com/title/tt0099088/
id: tt0099088
plot: Stranded in 1955, Marty McFly learns about the death of Doc Brown in 1885 and must travel back in time to save him. With no fuel readily available for the DeLorean, the two must figure how to escape the Old West before Emmett is m...
genres:
  - Adventure
  - Comedy
  - Sci-Fi
director:
  - Robert Zemeckis
onlineRating: 7.5
actors:
  - Michael J. Fox
  - Christopher Lloyd
  - Mary Steenburgen
image: https://m.media-amazon.com/images/M/MV5BNTNkNzJmY2MtOGNjYi00NDJmLWIyZTQtNmFmMGQ5M2VlOTI0XkEyXkFqcGc@._V1_SX300.jpg
released: true
premiere: 25.05.1990
watched: true
lastWatched: ""
personalRating: 0
tags:
  - film
  - film/comfort
comf:
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
