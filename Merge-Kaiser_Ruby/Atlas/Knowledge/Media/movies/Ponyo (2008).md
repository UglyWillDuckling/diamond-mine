---
category:
  - "[[Film]]"
  - "[[Anime]]"
  - "[[Animation]]"
plan-to-watch: false
interest:
type: movie
subType: ""
title: Ponyo
year: "2008"
dataSource: OMDbAPI
url: https://www.imdb.com/title/tt0876563/
id: tt0876563
plot: A five-year-old boy develops a relationship with Ponyo, a young goldfish princess who longs to become a human after falling in love with him.
genres:
  - Animation
  - Adventure
  - Comedy
director:
  - "[[Hayao Miyazaki]]"
onlineRating: 7.6
actors:
  - Cate Blanchett
  - Matt Damon
  - Liam Neeson
image: https://m.media-amazon.com/images/M/MV5BZDkzMzQ5ZmQtOTA3MC00MjhiLTk5M2UtNzk0MjEzZmVjN2UxXkEyXkFqcGc@._V1_SX300.jpg
released: true
premiere: 08/14/2009
watched: true
lastWatched: ""
personalRating: 9.1
tags:
  - film
  - film/animated
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
