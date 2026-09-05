---
category:
  - "[[Film]]"
interest:
plan-to-watch: true
personal favorite: false
type: movie
subType: ""
title: Monster House
year: "2006"
dataSource: OMDbAPI
url: https://www.imdb.com/title/tt0385880/
id: tt0385880
plot: Three teens discover that their neighbor's house is really a living, breathing, scary monster.
genres:
  - Animation
  - Comedy
  - Family
director:
  - Gil Kenan
onlineRating: 6.7
actors:
  - Mitchel Musso
  - Sam Lerner
  - Spencer Locke
image: https://m.media-amazon.com/images/M/MV5BMTIzNjE1NDg1N15BMl5BanBnXkFtZTcwOTg2NTMzMQ@@._V1_SX300.jpg
released: true
premiere: 21.07.2006
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
