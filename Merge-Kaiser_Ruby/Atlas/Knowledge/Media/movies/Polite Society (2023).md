---
category:
  - "[[Film]]"
  - "[[Comedy]]"
plan-to-watch: false
interest:
type: movie
subType: ""
title: Polite Society
year: "2023"
dataSource: OMDbAPI
url: https://www.imdb.com/title/tt18257464/
id: tt18257464
plot: Ria Khan believes she must save her older sister Lena from her impending marriage. After enlisting her friends' help, she attempts to pull off the most ambitious of all wedding heists in the name of independence and sisterhood.
genres:
  - Action
  - Comedy
director:
  - Nida Manzoor
onlineRating: 6.6
actors:
  - Priya Kansara
  - Ritu Arya
  - Renu Brindle
image: https://m.media-amazon.com/images/M/MV5BYmQ2ZDNhNjQtYjdjMS00MjEzLWJlYzYtM2U0OGE1OGNlZTNiXkEyXkFqcGc@._V1_SX300.jpg
released: true
premiere: 04/28/2023
watched: true
lastWatched: ""
personalRating: 7.7
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
