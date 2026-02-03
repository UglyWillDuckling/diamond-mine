---
category:
  - "[[Film]]"
interest:
plan-to-watch: false
personal favorite: false
type: movie
subType: ""
title: Real Steel
year: "2011"
dataSource: OMDbAPI
url: https://www.imdb.com/title/tt0433035/
id: tt0433035
plot: In a near future where robot boxing is a top sport, a struggling ex-boxer feels he's found a champion in a discarded robot.
genres:
  - Action
  - Drama
  - Sci-Fi
director:
  - Shawn Levy
onlineRating: 7.1
actors:
  - Hugh Jackman
  - Evangeline Lilly
  - Dakota Goyo
image: https://m.media-amazon.com/images/M/MV5BMjEzMzEzNjg0N15BMl5BanBnXkFtZTcwMzg4NDk0Ng@@._V1_SX300.jpg
released: true
premiere: 07.10.2011
watched: false
lastWatched: ""
personalRating: 0
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
