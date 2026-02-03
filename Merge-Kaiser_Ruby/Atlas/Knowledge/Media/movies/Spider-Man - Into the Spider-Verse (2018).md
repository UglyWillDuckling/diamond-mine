---
category:
  - "[[Film]]"
  - "[[Animation]]"
plan-to-watch: false
interest:
type: movie
subType: ""
title: "Spider-Man: Into the Spider-Verse"
year: "2018"
url: https://www.imdb.com/title/tt4633694/
genres:
  - Animation
  - Action
  - Adventure
director:
  - Bob Persichetti
  - Peter Ramsey
  - Rodney Rothman
onlineRating: 8.4
actors:
  - Shameik Moore
  - Jake Johnson
  - Hailee Steinfeld
image: https://m.media-amazon.com/images/M/MV5BMjMwNDkxMTgzOF5BMl5BanBnXkFtZTgwNTkwNTQ3NjM@._V1_SX300.jpg
released: true
premiere: 12/14/2018
watched: true
lastWatched: ""
personalRating: 7.9
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
