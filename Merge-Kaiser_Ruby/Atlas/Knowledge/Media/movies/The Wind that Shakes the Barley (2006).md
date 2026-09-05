---
category:
  - "[[Film]]"
interest:
plan-to-watch: true
personal favorite: false
type: movie
subType: ""
title: The Wind that Shakes the Barley
year: "2006"
dataSource: OMDbAPI
url: https://www.imdb.com/title/tt0460989/
id: tt0460989
plot: Against the backdrop of the Irish War of Independence, two brothers fight a guerrilla war against British forces.
genres:
  - Drama
  - War
director:
  - Ken Loach
onlineRating: 7.5
actors:
  - "[[Cillian Murphy]]"
  - Pádraic Delaney
  - Liam Cunningham
image: https://m.media-amazon.com/images/M/MV5BNjA0NDhkZDMtM2E2ZS00ZjY1LTgxN2UtMjNhN2NlMGQ5ZGIxXkEyXkFqcGc@._V1_SX300.jpg
released: true
premiere: 23.03.2007
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
