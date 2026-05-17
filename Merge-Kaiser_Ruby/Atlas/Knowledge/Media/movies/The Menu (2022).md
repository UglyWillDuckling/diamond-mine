---
category:
  - "[[Film]]"
interest:
plan-to-watch: false
personal favorite: false
type: movie
subType: ""
title: The Menu
year: "2022"
dataSource: OMDbAPI
url: https://www.imdb.com/title/tt9764362/
id: tt9764362
plot: A young couple travels to a remote island to eat at an exclusive restaurant where the chef has prepared a lavish menu, with some shocking surprises.
genres:
  - Comedy
  - Horror
  - Thriller
director:
  - Mark Mylod
onlineRating: 7.2
actors:
  - Ralph Fiennes
  - Anya Taylor-Joy
  - Nicholas Hoult
image: https://m.media-amazon.com/images/M/MV5BN2Q0YWE1MjktODJlMi00NTRiLWI2ZTctZTAxNjkyODVjM2EyXkEyXkFqcGc@._V1_SX300.jpg
released: true
premiere: 18.11.2022
watched: false
lastWatched: ""
personalRating: 0
tags:
  - film
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
