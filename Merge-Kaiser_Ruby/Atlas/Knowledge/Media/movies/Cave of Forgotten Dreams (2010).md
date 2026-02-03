---
category:
  - "[[Film]]"
plan-to-watch: false
interest:
type: movie
subType: ""
title: Cave of Forgotten Dreams
year: "2010"
dataSource: OMDbAPI
url: https://www.imdb.com/title/tt1664894/
id: tt1664894
plot: Werner Herzog gains exclusive access to film inside the Chauvet caves of Southern France and captures the oldest known pictorial creations of humanity.
genres:
  - Documentary
  - History
director:
  - Werner Herzog
onlineRating: 7.4
actors:
  - Werner Herzog
  - Jean Clottes
  - Julien Monney
image: https://m.media-amazon.com/images/M/MV5BMTYxNDExMzUwMl5BMl5BanBnXkFtZTcwNjM2MzYwNQ@@._V1_SX300.jpg
released: true
premiere: 08/31/2011
watched: true
lastWatched: ""
personalRating: 7.8
tags:
  - mediaDB/tv/movie
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
if (dv.current().watched) {
	dv.paragraph(`> [!SUCCESS] \`INPUT[toggle:plan-to-watch]\` planned`);
} else {
	dv.paragraph(`> [!WARNING] \`INPUT[toggle:plan-to-watch]\` not planned`);
}
```

**Rating**:  `INPUT[slider(addLabels, minValue(0), maxValue(10)):personalRating]` (`$= dv.current().personalRating` out of 10)

**Premiered**: `$= dv.current().premiere`
