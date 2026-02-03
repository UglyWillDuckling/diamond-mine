---
category:
  - "[[Film]]"
  - "[[Anime]]"
  - "[[Animation]]"
plan-to-watch: false
interest:
type: movie
subType: ""
title: Porco Rosso
year: "1992"
dataSource: OMDbAPI
url: https://www.imdb.com/title/tt0104652/
id: tt0104652
plot: In 1930s Italy, a veteran World War I pilot is cursed to look like an anthropomorphic pig.
genres:
  - Animation
  - Adventure
  - Comedy
director:
  - "[[Hayao Miyazaki]]"
onlineRating: 7.7
actors:
  - Shûichirô Moriyama
  - Tokiko Katô
  - Bunshi Katsura VI
image: https://m.media-amazon.com/images/M/MV5BOGNjMDM1NWEtMzI4OC00YzdlLWJmMjktNmJiYTlkNTNlODM0XkEyXkFqcGc@._V1_SX300.jpg
released: true
premiere: 12/16/1994
watched: false
lastWatched: ""
personalRating: 8.1
tags:
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
