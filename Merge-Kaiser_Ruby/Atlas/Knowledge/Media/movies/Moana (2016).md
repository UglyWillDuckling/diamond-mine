---
category:
  - "[[Film]]"
  - "[[Animation]]"
plan-to-watch: false
interest:
type: movie
subType: ""
title: Moana
year: "2016"
dataSource: OMDbAPI
url: https://www.imdb.com/title/tt3521164/
id: tt3521164
plot: In ancient Polynesia, when a terrible curse incurred by the demigod Maui reaches Moana's island, she answers the Ocean's call to seek out Maui to set things right.
genres:
  - Animation
  - Adventure
  - Comedy
director:
  - Ron Clements
  - John Musker
  - Don Hall
onlineRating: 7.6
actors:
  - Auli'i Cravalho
  - Dwayne Johnson
  - Rachel House
image: https://m.media-amazon.com/images/M/MV5BMjI4MzU5NTExNF5BMl5BanBnXkFtZTgwNzY1MTEwMDI@._V1_SX300.jpg
released: true
premiere: 11/23/2016
watched: true
lastWatched: ""
personalRating: 7.9
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
