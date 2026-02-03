---
category:
  - "[[Film]]"
plan-to-watch: false
interest:
type: movie
subType: ""
title: Back to the Future
year: "1985"
dataSource: OMDbAPI
url: https://www.imdb.com/title/tt0088763/
id: tt0088763
plot: Marty McFly, a 17-year-old high school student, is accidentally sent 30 years into the past in a time-traveling DeLorean invented by his close friend, the maverick scientist Doc Brown.
genres:
  - Adventure
  - Comedy
  - Sci-Fi
director:
  - Robert Zemeckis
onlineRating: 8.5
actors:
  - Michael J. Fox
  - Christopher Lloyd
  - Lea Thompson
image: https://m.media-amazon.com/images/M/MV5BZmM3ZjE0NzctNjBiOC00MDZmLTgzMTUtNGVlOWFlOTNiZDJiXkEyXkFqcGc@._V1_SX300.jpg
released: true
premiere: 07/03/1985
watched: true
lastWatched: ""
personalRating: 7.8
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
