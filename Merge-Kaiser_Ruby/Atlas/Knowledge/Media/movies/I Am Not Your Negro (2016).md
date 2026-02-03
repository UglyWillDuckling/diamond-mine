---
category:
  - "[[Film]]"
  - "[[Documentary]]"
plan-to-watch: false
interest:
type: movie
subType: ""
title: I Am Not Your Negro
year: "2016"
dataSource: OMDbAPI
url: https://www.imdb.com/title/tt5804038/
id: tt5804038
plot: Writer James Baldwin tells the story of race in modern America with his unfinished novel, Remember This House.
genres:
  - Documentary
  - History
director:
  - Raoul Peck
onlineRating: 7.9
actors:
  - Samuel L. Jackson
  - James Baldwin
  - Martin Luther King
image: https://m.media-amazon.com/images/M/MV5BMjEyNzIzMTk3Ml5BMl5BanBnXkFtZTgwNDE1Nzc1MDI@._V1_SX300.jpg
released: true
premiere: 02/17/2017
watched: false
lastWatched: ""
personalRating: 0
tags:
  - mediaDB/tv/movie
  - film/doc
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
