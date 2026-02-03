---
type: movie
subType: ""
title: Easy A
year: "2010"
dataSource: OMDbAPI
url: https://www.imdb.com/title/tt1282140/
id: tt1282140
plot: When Olive lies to her best friend about losing her virginity to one of the college boys, a girl overhears their conversation. Soon, her story spreads across the entire school like wildfire.
genres:
  - Comedy
  - Drama
  - Romance
director:
  - Will Gluck
onlineRating: 7
actors:
  - Emma Stone
  - Amanda Bynes
  - Penn Badgley
image: https://m.media-amazon.com/images/M/MV5BMjE1MzU1Mjg1OF5BMl5BanBnXkFtZTcwNDc3NDQ2Mw@@._V1_SX300.jpg
released: true
premiere: 09/17/2010
watched: false
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