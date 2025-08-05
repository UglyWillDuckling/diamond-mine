---
type: movie
subType: ""
title: Night of the Living Dead
year: "1968"
dataSource: OMDbAPI
url: https://www.imdb.com/title/tt0063350/
id: tt0063350
plot: A ragtag group of Pennsylvanians barricade themselves in an old farmhouse to remain safe from a horde of flesh-eating ghouls that are ravaging the Northeast of the United States.
genres:
  - Horror
  - Thriller
director:
  - George A. Romero
onlineRating: 7.8
actors:
  - Duane Jones
  - Judith O'Dea
  - Karl Hardman
image: https://m.media-amazon.com/images/M/MV5BZGMyZTA0MWEtZjczMS00ZDE5LTk1OTQtNmIxNGYzNDA2NDVhXkEyXkFqcGc@._V1_SX300.jpg
released: true
premiere: 10/04/1968
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