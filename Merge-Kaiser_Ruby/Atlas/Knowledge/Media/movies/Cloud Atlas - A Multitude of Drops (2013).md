---
type: movie
title: "Cloud Atlas: A Multitude of Drops"
year: "2013"
dataSource: OMDbAPI
url: https://www.imdb.com/title/tt4046780/
genres:
  - Documentary
  - Short
director:
  - Josh Oreck
duration: 7 min
onlineRating: .nan
actors: []
image: https://m.media-amazon.com/images/M/MV5BN2I5ODcxMGItYzE4Mi00NTU4LTgxODMtOWFlODc2MTljODk1XkEyXkFqcGc@._V1_SX300.jpg
released: true
premiere: 14.05.2013
watched: true
lastWatched: 2025-04-21
personalRating: 7.5
related:
  - "[[Cloud Atlas (novel)|Cloud Atlas]]"
tags:
  - film
---

`$= '![Image|250](' + dv.current().image + ')'`

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
**Duration**:  `$= dv.current().duration`
**Premiered**: `$= dv.current().premiere`