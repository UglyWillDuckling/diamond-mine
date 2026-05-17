---
category:
  - "[[Film]]"
interest:
plan-to-watch: true
personal favorite: false
type: movie
subType: ""
title: Sound of Freedom
year: "2023"
dataSource: OMDbAPI
url: https://www.imdb.com/title/tt7599146/
id: tt7599146
plot: The incredible true story of a former government agent turned vigilante who embarks on a dangerous mission to rescue hundreds of children from traffickers.
genres:
  - Biography
  - Crime
  - Drama
director:
  - Alejandro Monteverde
onlineRating: 7.6
actors:
  - Jim Caviezel
  - Mira Sorvino
  - Bill Camp
image: https://m.media-amazon.com/images/M/MV5BMzU5MmVkODQtZWM5ZC00MjRiLWIwOTMtN2ViZGM5MjU5Nzc1XkEyXkFqcGc@._V1_SX300.jpg
released: true
premiere: 04.07.2023
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
