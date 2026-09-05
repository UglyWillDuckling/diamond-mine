---
category:
  - "[[Film]]"
plan-to-watch: true
interest:
type: movie
subType: ""
title: Sentimental Value
year: "2025"
dataSource: OMDbAPI
url: https://www.imdb.com/title/tt27714581/
id: tt27714581
plot: An intimate exploration of family, memories, and the reconciliatory power of art.
genres:
  - Drama
director:
  - Joachim Trier
onlineRating: 7.9
actors:
  - Renate Reinsve
  - Stellan Skarsgård
  - Inga Ibsdotter Lilleaas
image: https://m.media-amazon.com/images/M/MV5BM2Y5ZjNhZjEtOTQxNi00ZWU3LTk1MGQtYjE3MWZiNWUwNjc0XkEyXkFqcGc@._V1_SX300.jpg
released: true
premiere: 20.08.2025
watched: false
lastWatched: ""
personalRating: 0
tags:
  - fillm
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
