---
category:
  - "[[Film]]"
interest:
plan-to-watch: true
personal favorite: false
type: movie
subType: ""
title: The Peanut Butter Falcon
year: "2019"
dataSource: OMDbAPI
url: https://www.imdb.com/title/tt4364194/
id: tt4364194
plot: Zak, a man with Down syndrome, runs away from a residential nursing home to pursue his dream of becoming a wrestler. Later, he meets with an outlaw who becomes his friend and coach.
genres:
  - Adventure
  - Comedy
  - Drama
director:
  - Tyler Nilson
  - Michael Schwartz
onlineRating: 7.6
actors:
  - Zack Gottsagen
  - Ann Pierce
  - Dakota Johnson
image: https://m.media-amazon.com/images/M/MV5BYjgxZTE4NDctZTM1MC00YjIwLTk0MmMtNWFkZGUwMGE2ZjNhXkEyXkFqcGc@._V1_SX300.jpg
released: true
premiere: 23.08.2019
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
