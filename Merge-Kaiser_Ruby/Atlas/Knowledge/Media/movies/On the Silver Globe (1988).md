---
category:
  - "[[Film]]"
interest:
plan-to-watch: true
personal favorite: false
type: movie
subType: ""
title: On the Silver Globe
year: "1988"
dataSource: OMDbAPI
url: https://www.imdb.com/title/tt0093593/
id: tt0093593
plot: A team of astronauts land on an inhabitable planet and form a society. Many years later, a single astronaut is sent to the planet and becomes a messiah.
genres:
  - Adventure
  - Drama
  - Fantasy
director:
  - Andrzej Zulawski
onlineRating: 7.2
actors:
  - Andrzej Seweryn
  - Jerzy Trela
  - Grazyna Dylag
image: https://m.media-amazon.com/images/M/MV5BODBjZGZmNTQtNTdjMi00ZjkwLTg1YjktYjk2MDUwY2U4NDA2XkEyXkFqcGc@._V1_SX300.jpg
released: true
premiere: 10.02.1989
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
