---
type: movie
id: tt0361748
title: Inglourious Basterds
englishTitle: Inglourious Basterds
year: "2009"
dataSource: OMDbAPI
url: https://www.imdb.com/title/tt0361748/
plot: In Nazi-occupied France during World War II, a plan to assassinate Nazi leaders by a group of Jewish U.S. soldiers coincides with a theatre owner's vengeful plans for the same.
genres:
  - Adventure
  - Drama
  - War
director:
  - "[[Quentin Tarantino]]"
writer:
  - Quentin Tarantino
duration: 153 min
onlineRating: 8.4
actors:
  - Brad Pitt
  - Diane Kruger
  - Eli Roth
image: https://m.media-amazon.com/images/M/MV5BODZhMWJlNjYtNDExNC00MTIzLTllM2ItOGQ2NGVjNDQ3MzkzXkEyXkFqcGc@._V1_SX300.jpg
released: true
streamingServices: 
premiere: 08/21/2009
watched: true
lastWatched: 2016-07-05
personalRating: 8
tags:
  - mediaDB/tv/movie
---

`$= '![Image|360](' + dv.current().image + ')'`
# `$= dv.current().title`

```dataviewjs
if (dv.current().watched) {
	dv.paragraph(`> [!SUCCESS] watched \`INPUT[toggle:watched]\``);
	
	if(dv.current().lastWatched) {
			dv.paragraph(`last watched on: ${dv.current().lastWatched}`);
	}
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
**Director**: `$= dv.current().director`
