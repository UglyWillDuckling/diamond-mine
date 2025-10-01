---
type: movie
subType: ""
title: Mulholland Drive
year: "2001"
dataSource: OMDbAPI
url: https://www.imdb.com/title/tt0166924/
id: tt0166924
plot: After a car wreck on Mulholland Drive renders a woman amnesiac, she and a Hollywood-hopeful search for clues and answers across Los Angeles in a twisting venture beyond dreams and reality.
genres:
  - Drama
  - Mystery
  - Thriller
director:
  - David Lynch
onlineRating: 7.9
actors:
  - Naomi Watts
  - Laura Harring
  - Justin Theroux
image: https://m.media-amazon.com/images/M/MV5BNjliY2UwMjQtYjVlNi00NzExLTg1MDMtMjE2OTYwYjI0NTcxXkEyXkFqcGc@._V1_SX300.jpg
released: true
premiere: 19.10.2001
watched: false
lastWatched: ""
personalRating: 0
plan-to-watch: true
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

**Rating**:  `INPUT[slider(addLabels, minValue(0), maxValue(10)):personalRating]` (`$= dv.current().personalRating` out of 10)

**Genres**:
```dataviewjs
dv.current().genres.length === 0 ? dv.span(' - none') : dv.list(dv.current().genres)
```

```dataviewjs
if (!dv.current().released) {
	dv.span('**Not released** The movie is not yet released.')
}
```

**Type**: `$= dv.current().type`
**Online Rating**: `$= dv.current().onlineRating`
**Duration**:  `$= dv.current().duration`
**Premiered**: `$= dv.current().premiere`