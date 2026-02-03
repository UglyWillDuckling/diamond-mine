---
category:
  - "[[Film]]"
  - "[[Christmas Movies]]"
plan-to-watch: false
interest:
type: movie
subType: ""
title: Home Alone
year: "1990"
dataSource: OMDbAPI
url: https://www.imdb.com/title/tt0099785/
id: tt0099785
plot: An eight-year-old troublemaker, mistakenly left home alone, must defend his home against a pair of burglars on Christmas Eve.
genres:
  - Comedy
  - Family
director:
  - Chris Columbus
onlineRating: 7.7
actors:
  - Macaulay Culkin
  - Joe Pesci
  - Daniel Stern
image: https://m.media-amazon.com/images/M/MV5BNzNmNmQ2ZDEtMTc1MS00NjNiLThlMGUtZmQxNTg1Nzg5NWMzXkEyXkFqcGc@._V1_SX300.jpg
released: true
premiere: 11/16/1990
watched: false
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
