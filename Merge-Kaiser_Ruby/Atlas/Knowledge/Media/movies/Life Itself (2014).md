---
category:
  - "[[Film]]"
interest:
plan-to-watch: true
personal favorite: false
type: movie
subType: ""
title: Life Itself
year: "2014"
dataSource: OMDbAPI
url: https://www.imdb.com/title/tt2382298/
id: tt2382298
plot: The life and career of the renowned film critic and social commentator, Roger Ebert.
genres:
  - Documentary
  - Biography
director:
  - Steve James
onlineRating: 7.8
actors:
  - Roger Ebert
  - Chaz Ebert
  - Gene Siskel
image: https://m.media-amazon.com/images/M/MV5BMTQ2OTQzMjcxNF5BMl5BanBnXkFtZTgwMzc2Njk3MTE@._V1_SX300.jpg
released: true
premiere: 04.07.2014
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
