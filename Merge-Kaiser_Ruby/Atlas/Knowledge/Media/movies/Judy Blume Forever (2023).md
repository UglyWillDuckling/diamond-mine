---
category:
  - "[[Film]]"
plan-to-watch: false
interest:
type: movie
subType: ""
title: Judy Blume Forever
year: "2023"
dataSource: OMDbAPI
url: https://www.imdb.com/title/tt18787516/
id: tt18787516
plot: This documentary on Judy Blume and the generations of readers who have sparked to her work examines her impact on pop culture and the occasional controversies over her frankness about puberty and sex.
genres:
  - Documentary
  - Biography
director:
  - Davina Pardo
  - Leah Wolchok
onlineRating: 7.6
actors:
  - Judy Blume
  - Molly Ringwald
  - Tayari Jones
image: https://m.media-amazon.com/images/M/MV5BMjIyOWQzZGMtNjhkZS00ZDhkLThkNzMtZWU5MGNlNGM5ODk0XkEyXkFqcGc@._V1_SX300.jpg
released: true
premiere: 04/21/2023
watched: true
lastWatched: ""
personalRating: 0
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
