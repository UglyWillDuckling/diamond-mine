---
category:
  - "[[Film]]"
  - "[[SuperHero Movie]]"
plan-to-watch: false
interest:
type: movie
subType: ""
title: Guardians of the Galaxy
year: "2014"
dataSource: OMDbAPI
url: https://www.imdb.com/title/tt2015381/
id: tt2015381
plot: A group of intergalactic criminals must pull together to stop a fanatical warrior with plans to purge the universe.
genres:
  - Action
  - Adventure
  - Comedy
director:
  - James Gunn
onlineRating: 8
actors:
  - Chris Pratt
  - Vin Diesel
  - Bradley Cooper
image: https://m.media-amazon.com/images/M/MV5BM2ZmNjQ2MzAtNDlhNi00MmQyLWJhZDMtNmJiMjFlOWY4MzcxXkEyXkFqcGc@._V1_SX300.jpg
released: true
premiere: 08/01/2014
watched: true
lastWatched: ""
personalRating: 8.1
tags:
  - film
  - film/superhero
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
