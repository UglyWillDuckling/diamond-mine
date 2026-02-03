---

category:
  - "[[Film]]"
interest:
plan-to-watch: false
personal favorite: false
type: movie
subType: ""
title: Me Before You
year: "2016"
dataSource: OMDbAPI
url: https://www.imdb.com/title/tt2674426/
id: tt2674426
plot: A girl in a small town forms an unlikely bond with a recently-paralyzed man she's taking care of.
genres:
  - Drama
  - Romance
director:
  - Thea Sharrock
onlineRating: 7.4
actors:
  - Emilia Clarke
  - Sam Claflin
  - Janet McTeer
image: https://m.media-amazon.com/images/M/MV5BMTQ2NjE4NDE2NV5BMl5BanBnXkFtZTgwOTcwNDE5NzE@._V1_SX300.jpg
released: true
premiere: 03.06.2016
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
