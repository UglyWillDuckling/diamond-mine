---
category:
  - "[[Film]]"
interest: 7.3
plan-to-watch: true
personal favorite: false
type: movie
subType: ""
title: The Fall Guy
year: "2024"
dataSource: OMDbAPI
url: https://www.imdb.com/title/tt1684562/
id: tt1684562
plot: A stuntman, fresh off an almost career-ending accident, has to track down a missing movie star, solve a conspiracy and try to win back the love of his life while still doing his day job.
genres:
  - Action
  - Comedy
  - Drama
director:
  - David Leitch
onlineRating: 6.8
actors:
  - Ryan Gosling
  - Emily Blunt
  - Aaron Taylor-Johnson
image: https://m.media-amazon.com/images/M/MV5BM2U0MTJiYTItMjNiZS00MzU4LTkxYTAtYTU0ZGY1ODJhMjRhXkEyXkFqcGc@._V1_SX300.jpg
released: true
premiere: 05/03/2024
watched: false
lastWatched: ""
personalRating: 0
tags:
  - film
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
