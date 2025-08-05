---
type: movie
subType: ""
title: First Man
year: "2018"
dataSource: OMDbAPI
url: https://www.imdb.com/title/tt1213641/
id: tt1213641
plot: A look back at the life of astronaut Neil Armstrong and the legendary space mission that led him to become the first man to walk on the Moon on July 20, 1969.
genres:
  - Biography
  - Drama
  - History
director:
  - "[[Damien Chazelle]]"
onlineRating: 7.3
actors:
  - Ryan Gosling
  - Claire Foy
  - Jason Clarke
image: https://m.media-amazon.com/images/M/MV5BYmIzYmViN2UtMDRhYy00OTMwLWI5YzctMTQxYzg2ODMwMTIwXkEyXkFqcGc@._V1_SX300.jpg
released: true
premiere: 12.10.2018
watched: true
lastWatched: ""
personalRating: 7.7
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