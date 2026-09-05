---
category:
  - "[[Film]]"
  - "[[Animation]]"
plan-to-watch: true
interest:
type: movie
subType: ""
title: Hercules
year: "1997"
dataSource: OMDbAPI
url: https://www.imdb.com/title/tt0119282/
id: tt0119282
plot: The son of Zeus and Hera is stripped of his immortality as an infant and must become a true hero in order to reclaim it.
genres:
  - Animation
  - Action
  - Adventure
director:
  - Ron Clements
  - John Musker
onlineRating: 7.3
actors:
  - Tate Donovan
  - Susan Egan
  - James Woods
image: https://m.media-amazon.com/images/M/MV5BMmUyZGY1ZjItMWYwZS00MjJjLTg1YzAtY2Q5OTA4MmFhYzFjXkEyXkFqcGc@._V1_SX300.jpg
released: true
premiere: 06/27/1997
watched: false
lastWatched: ""
personalRating: 0
tags:
  - film/animated
selected: false
movie_status:
  - plan_to_watch
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
