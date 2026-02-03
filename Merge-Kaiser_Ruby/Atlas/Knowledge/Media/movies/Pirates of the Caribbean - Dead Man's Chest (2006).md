---

category:
  - "[[Film]]"
plan-to-watch: false
interest:
type: movie
subType: ""
title: "Pirates of the Caribbean: Dead Man's Chest"
year: "2006"
dataSource: OMDbAPI
url: https://www.imdb.com/title/tt0383574/
id: tt0383574
plot: Jack Sparrow races to recover the heart of Davy Jones to avoid enslaving his soul to Jones' service, as other friends and foes seek the heart for their own agenda as well.
genres:
  - Action
  - Adventure
  - Fantasy
director:
  - Gore Verbinski
onlineRating: 7.4
actors:
  - Johnny Depp
  - Orlando Bloom
  - Keira Knightley
image: https://m.media-amazon.com/images/M/MV5BMTcwODc1MTMxM15BMl5BanBnXkFtZTYwMDg1NzY3._V1_SX300.jpg
released: true
premiere: 07/07/2006
watched: false
lastWatched: ""
personalRating: 0
tags: mediaDB/tv/movie
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
