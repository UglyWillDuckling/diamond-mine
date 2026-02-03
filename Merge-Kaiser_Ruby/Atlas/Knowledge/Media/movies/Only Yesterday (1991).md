---

category:
  - "[[Film]]"
plan-to-watch: false
interest:
type: movie
subType: ""
title: Only Yesterday
year: "1991"
dataSource: OMDbAPI
url: https://www.imdb.com/title/tt0102587/
id: tt0102587
plot: A twenty-seven-year-old office worker travels to the countryside while reminiscing about her childhood in Tokyo.
genres:
  - Animation
  - Drama
  - Romance
director:
  - Isao Takahata
onlineRating: 7.6
actors:
  - Miki Imai
  - Toshirô Yanagiba
  - Yoko Honna
image: https://m.media-amazon.com/images/M/MV5BMTY5NjI2MjQxMl5BMl5BanBnXkFtZTgwMDA2MzM2NzE@._V1_SX300.jpg
released: true
premiere: 02/26/2016
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
