---
category:
  - "[[Film]]"
  - "[[Christmas Movies]]"
plan-to-watch: false
interest:
type: movie
subType: ""
title: "Home Alone 2: Lost in New York"
year: "1992"
dataSource: OMDbAPI
url: https://www.imdb.com/title/tt0104431/
id: tt0104431
plot: Kevin is separated from his family again when he accidentally boards a flight to New York City during a Christmas trip to Miami. However he crosses paths with the same burglars, who now plan to rob a toy store on Christmas eve.
genres:
  - Adventure
  - Comedy
  - Crime
director:
  - Chris Columbus
onlineRating: 6.9
actors:
  - Macaulay Culkin
  - Joe Pesci
  - Daniel Stern
image: https://m.media-amazon.com/images/M/MV5BOGEyYzRmNzYtYzJjZi00ZjhlLWJiNDktYzZhNTgxMzc1NThlXkEyXkFqcGc@._V1_SX300.jpg
released: true
premiere: 11/20/1992
watched: true
lastWatched: ""
personalRating: 0
tags:
  - mediaDB/tv/movie
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
