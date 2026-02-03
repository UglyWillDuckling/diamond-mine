---
category:
  - "[[Film]]"
  - "[[Fiction]]"
plan-to-watch: false
interest:
type: movie
subType: ""
title: Black Panther
year: "2018"
dataSource: OMDbAPI
url: https://www.imdb.com/title/tt1825683/
id: tt1825683
plot: T'Challa, heir to the hidden but advanced kingdom of Wakanda, must step forward to lead his people into a new future and must confront a challenger from his country's past.
genres:
  - Action
  - Adventure
  - Sci-Fi
director:
  - Ryan Coogler
onlineRating: 7.3
actors:
  - Chadwick Boseman
  - Michael B. Jordan
  - Lupita Nyong'o
image: https://m.media-amazon.com/images/M/MV5BMTg1MTY2MjYzNV5BMl5BanBnXkFtZTgwMTc4NTMwNDI@._V1_SX300.jpg
released: true
premiere: 02/16/2018
watched: true
lastWatched: ""
personalRating: 8.2
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
if (dv.current().watched) {
	dv.paragraph(`> [!SUCCESS] \`INPUT[toggle:plan-to-watch]\` planned`);
} else {
	dv.paragraph(`> [!WARNING] \`INPUT[toggle:plan-to-watch]\` not planned`);
}
```

**Rating**:  `INPUT[slider(addLabels, minValue(0), maxValue(10)):personalRating]` (`$= dv.current().personalRating` out of 10)

**Premiered**: `$= dv.current().premiere`
