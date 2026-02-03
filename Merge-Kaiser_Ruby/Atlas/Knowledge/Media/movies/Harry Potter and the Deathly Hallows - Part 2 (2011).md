---
type: movie
subType: ""
title: "Harry Potter and the Deathly Hallows: Part 2"
year: "2011"
dataSource: OMDbAPI
url: https://www.imdb.com/title/tt1201607/
id: tt1201607
plot: As the battle between the forces of good and evil in the wizarding world escalates, Harry Potter draws ever closer to his final confrontation with Voldemort.
genres:
  - Adventure
  - Family
  - Fantasy
director:
  - David Yates
onlineRating: 8.1
actors:
  - Daniel Radcliffe
  - Emma Watson
  - Rupert Grint
image: https://m.media-amazon.com/images/M/MV5BOTA1Mzc2N2ItZWRiNS00MjQzLTlmZDQtMjU0NmY1YWRkMGQ4XkEyXkFqcGc@._V1_SX300.jpg
released: true
premiere: 07/15/2011
watched: true
lastWatched: ""
personalRating: 0
tags:
  - film/comfort
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