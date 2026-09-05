---
category:
  - "[[Film]]"
interest: 7.5
plan-to-watch: true
personal favorite: false
type: movie
subType: ""
title: Dredd
year: "2012"
dataSource: OMDbAPI
url: https://www.imdb.com/title/tt1343727/
id: tt1343727
plot: In a violent, futuristic metropolis, a law enforcement and his rookie trainee become caught up in a high-stakes drug war.
genres:
  - Action
  - Crime
  - Sci-Fi
director:
  - Pete Travis
onlineRating: 7.1
actors:
  - Karl Urban
  - Olivia Thirlby
  - Lena Headey
image: https://m.media-amazon.com/images/M/MV5BODkyNDQzMzUzOF5BMl5BanBnXkFtZTcwODYyMDEyOA@@._V1_SX300.jpg
released: true
premiere: 21.09.2012
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
