---
category:
  - "[[Film]]"
  - "[[Comedy]]"
interest: 8
plan-to-watch: false
personal favorite: false
type: movie
subType: ""
title: Back to the Future Part II
year: "1989"
dataSource: OMDbAPI
url: https://www.imdb.com/title/tt0096874/
id: tt0096874
plot: After visiting 2015, Marty McFly must repeat his visit to 1955 to prevent disastrous changes to 1985...without interfering with his first trip.
genres:
  - Adventure
  - Comedy
  - Sci-Fi
director:
  - Robert Zemeckis
onlineRating: 7.8
actors:
  - Michael J. Fox
  - Christopher Lloyd
  - Lea Thompson
image: https://m.media-amazon.com/images/M/MV5BMTNlOTRmOTEtMTAyMi00NjFiLTk3NDMtNWI0YzA3ZTZlYjZiXkEyXkFqcGc@._V1_SX300.jpg
released: true
premiere: 22.11.1989
watching: true
watched: true
lastWatched: ""
personalRating: 8.1
tags:
  - film/comedy
next: "[[Back to the Future Part III (1990)]]"
previous: "[[Back to the Future (1985)]]"
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
