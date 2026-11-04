---
type: movie
subType: ""
title: Bruce Almighty
year: "2003"
dataSource: OMDbAPI
url: https://www.imdb.com/title/tt0315327/
id: tt0315327
plot: A whiny news reporter is given the chance to step into God's shoes.
genres:
  - Comedy
  - Fantasy
director:
  - Tom Shadyac
onlineRating: 6.8
actors:
  - "[[Jennifer Aniston]]"
  - "[[Morgan Freeman]]"
  - "[[Jim Carrey]]"
image: https://m.media-amazon.com/images/M/MV5BZWM2ZjA2OTctZmRhMy00ZDIzLTkwZGQtYTRlNmQwZWZmMDBlXkEyXkFqcGc@._V1_SX300.jpg
released: true
premiere: 05/23/2003
watched: false
lastWatched: ""
personalRating: 0
tags:
  - mediaDB/tv/movie
  - film/00
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