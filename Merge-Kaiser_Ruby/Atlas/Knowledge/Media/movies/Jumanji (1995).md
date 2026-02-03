---
category:
  - "[[Film]]"
plan-to-watch: false
interest:
type: movie
subType: ""
title: Jumanji
year: "1995"
dataSource: OMDbAPI
url: https://www.imdb.com/title/tt0113497/
id: tt0113497
plot: A magic board game summons jungle perils and a missing boy.
genres:
  - Adventure
  - Comedy
  - Family
director:
  - Joe Johnston
onlineRating: 7.1
actors:
  - Robin Williams
  - Kirsten Dunst
  - Bonnie Hunt
image: https://m.media-amazon.com/images/M/MV5BYTFkMjFmODgtYzRiZi00NmQwLTliZWMtMzRhMWQ5ZmY3ZDExXkEyXkFqcGc@._V1_SX300.jpg
released: true
premiere: 12/15/1995
watched: true
lastWatched: ""
personalRating: 0
tags:
  - mediaDB/tv/movie
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
