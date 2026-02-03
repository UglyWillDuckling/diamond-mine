---
category:
  - "[[Film]]"
interest: 8
plan-to-watch: true
personal favorite: false
type: movie
subType: ""
title: Civil War
year: "2024"
dataSource: OMDbAPI
url: https://www.imdb.com/title/tt17279496/
id: tt17279496
plot: In a dystopian future, four journalists travel across the United States during a nation-wide conflict. While trying to survive, they aim to reach the White House to interview the president before he is overthrown.
genres:
  - Action
  - Thriller
  - War
director:
  - Alex Garland
onlineRating: 7
actors:
  - Kirsten Dunst
  - Wagner Moura
  - Cailee Spaeny
image: https://m.media-amazon.com/images/M/MV5BYTkzMjc0YzgtY2E0Yi00NDBlLWI0MWUtODY1ZjExMDAyOWZiXkEyXkFqcGc@._V1_SX300.jpg
released: true
premiere: 12.04.2024
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
