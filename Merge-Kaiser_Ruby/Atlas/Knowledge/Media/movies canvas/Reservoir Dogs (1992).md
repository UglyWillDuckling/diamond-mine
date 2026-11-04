---
type: movie
title: Reservoir Dogs
year: "1992"
dataSource: OMDbAPI
url: https://www.imdb.com/title/tt0105236/
id: tt0105236
plot: When a simple jewelry heist goes horribly wrong, the surviving criminals begin to suspect that one of them is a police informant.
genres:
  - Crime
  - Thriller
director:
  - "[[Quentin Tarantino]]"
onlineRating: 8.3
actors:
  - Harvey Keitel
  - Tim Roth
  - Michael Madsen
  - "[[Tim Roth]]"
image: https://m.media-amazon.com/images/M/MV5BMmMzYjg4NDctYWY0Mi00OGViLWIzMTMtYWNlZGY5ZDJmYjk3XkEyXkFqcGc@._V1_SX300.jpg
released: true
premiere: 09/02/1992
watched: false
lastWatched: ""
personalRating: 0
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