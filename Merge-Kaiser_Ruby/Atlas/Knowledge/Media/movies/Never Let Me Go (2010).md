---
category:
  - "[[Film]]"
interest: 7.7
plan-to-watch: true
personal favorite: false
type: movie
subType: ""
title: Never Let Me Go
year: "2010"
dataSource: OMDbAPI
url: https://www.imdb.com/title/tt1334260/
id: tt1334260
plot: The lives of three friends, from their early school days into young adulthood, when the reality of the world they live in comes knocking.
genres:
  - Drama
  - Romance
director:
  - Mark Romanek
onlineRating: 7.1
actors:
  - "[[Carey Mulligan]]"
  - Andrew Garfield
  - Izzy Meikle-Small
image: https://m.media-amazon.com/images/M/MV5BMTM3NDQ1MjE2OF5BMl5BanBnXkFtZTcwNDIxNTk2Mw@@._V1_SX300.jpg
released: true
premiere: 15.10.2010
watched: false
lastWatched: ""
personalRating: 0
tags:
  - mediaDB/tv/movie
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
