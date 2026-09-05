---
category:
  - "[[Film]]"
interest:
plan-to-watch: true
personal favorite: false
type: movie
subType: ""
title: The Talented Mr. Ripley
year: "1999"
dataSource: OMDbAPI
url: https://www.imdb.com/title/tt0134119/
id: tt0134119
plot: In late 1950s New York, a young underachiever named Tom Ripley is sent to Italy to retrieve Dickie Greenleaf, a rich and spoiled millionaire playboy. But when the errand fails, Ripley takes extreme measures.
genres:
  - Crime
  - Drama
  - Thriller
director:
  - Anthony Minghella
onlineRating: 7.4
actors:
  - Matt Damon
  - Gwyneth Paltrow
  - Jude Law
image: https://m.media-amazon.com/images/M/MV5BYzI2ZmU3MWMtZmRlMi00ZmVlLTkwMDMtZmI1YTg4YzcwMDE0XkEyXkFqcGc@._V1_SX300.jpg
released: true
premiere: 25.12.1999
watched: false
lastWatched: ""
personalRating: 0
tags:
  - mediaDB/tv/movie
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
