---
category:
  - "[[Film]]"
interest: 8
plan-to-watch: false
personal favorite: false
type: movie
subType: ""
title: Baby Driver
year: "2017"
dataSource: OMDbAPI
url: https://www.imdb.com/title/tt3890160/
id: tt3890160
plot: Coerced into working for a crime boss, a young getaway driver must face the music when a doomed heist threatens his life, love, and freedom.
genres:
  - Action
  - Crime
  - Drama
director:
  - "[[Edgar Wright]]"
onlineRating: 7.5
actors:
  - Ansel Elgort
  - Jon Bernthal
  - Jon Hamm
image: https://m.media-amazon.com/images/M/MV5BMjM3MjQ1MzkxNl5BMl5BanBnXkFtZTgwODk1ODgyMjI@._V1_SX300.jpg
released: true
premiere: 28.06.2017
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
