---
type: movie
subType: ""
title: The Little Shop of Horrors
year: "1960"
dataSource: OMDbAPI
url: https://www.imdb.com/title/tt0054033/
id: tt0054033
plot: A clumsy young man working at an impoverished flower shop discovers that the strange plant he has been nurturing has an insatiable appetite for blood, forcing him to kill to feed it.
genres:
  - Comedy
  - Horror
director:
  - Roger Corman
onlineRating: 6.2
actors:
  - Jonathan Haze
  - Jackie Joseph
  - Mel Welles
image: https://m.media-amazon.com/images/M/MV5BMDY1YjQ3ZWItNDJkNC00YjBkLWI4MDAtYzc0MWM2Mjk1MDg1XkEyXkFqcGc@._V1_SX300.jpg
released: true
premiere: 08/05/1960
watched: false
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