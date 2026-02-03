---
category:
  - "[[Film]]"
  - "[[Christmas Movies]]"
plan-to-watch: true
interest:
type: movie
subType: ""
title: 8-Bit Christmas
year: "2021"
dataSource: OMDbAPI
url: https://www.imdb.com/title/tt11540284/
id: tt11540284
plot: "In 1980s Chicago, a 10-year-old sets out on a quest to get the Christmas gift of his generation: the latest and greatest video-game system."
genres:
  - Comedy
  - Family
director:
  - Michael Dowse
onlineRating: 6.7
actors:
  - Winslow Fegley
  - Neil Patrick Harris
  - Steve Zahn
image: https://m.media-amazon.com/images/M/MV5BYTA0ZWI3NWItYmEwYi00YTI0LTlmNGMtMTQ4ZDExZWNiOGJmXkEyXkFqcGc@._V1_SX300.jpg
released: true
premiere: 11/24/2021
watched: false
lastWatched: ""
personalRating: 0
tags:
  - film
  - film/christmas
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
