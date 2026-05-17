---
category:
  - "[[Film]]"
interest:
plan-to-watch: false
personal favorite: false
type: movie
subType: ""
title: A House of Dynamite
year: "2025"
dataSource: OMDbAPI
url: https://www.imdb.com/title/tt32376165/
id: tt32376165
plot: When a single, unattributed missile is launched at the United States, a race begins to determine who is responsible and how to respond.
genres:
  - Drama
  - Thriller
director:
  - Kathryn Bigelow
onlineRating: 6.4
actors:
  - Idris Elba
  - Rebecca Ferguson
  - Gabriel Basso
image: https://m.media-amazon.com/images/M/MV5BNjAzMjQ4YTUtOGI1Yy00YTFkLTlkMDQtMDEwOWNjYmE3MTU1XkEyXkFqcGc@._V1_SX300.jpg
released: true
premiere: 24.10.2025
watched: true
lastWatched: 2026-03-01
personalRating: 7.7
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
