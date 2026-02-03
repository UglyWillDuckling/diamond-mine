---
category:
  - "[[Film]]"
plan-to-watch: false
interest:
type: movie
subType: ""
title: The Mummy
year: "1999"
dataSource: OMDbAPI
url: https://www.imdb.com/title/tt0120616/
id: tt0120616
plot: At an archaeological dig in the ancient city of Hamunaptra, an American serving in the French Foreign Legion accidentally awakens a mummy who begins to wreak havoc as he searches for the reincarnation of his long-lost love.
genres:
  - Action
  - Adventure
  - Fantasy
director:
  - Stephen Sommers
onlineRating: 7.1
actors:
  - Brendan Fraser
  - Rachel Weisz
  - John Hannah
image: https://m.media-amazon.com/images/M/MV5BMTY4YWE0OGMtNjU0Yi00YzIwLTk3NTktM2ZiYWQwNjM4MmMxXkEyXkFqcGc@._V1_SX300.jpg
released: true
premiere: 05/07/1999
watched: true
lastWatched: ""
personalRating: 0
tags:
  - film
  - film/comfort
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
