---
type: movie
subType: ""
title: Y tu mamá también
year: "2001"
dataSource: OMDbAPI
url: https://www.imdb.com/title/tt0245574/
id: tt0245574
plot: In Mexico, two teenage boys and an older woman embark on a road trip and learn a thing or two about life and each other.
genres:
  - Drama
director:
  - Alfonso Cuarón
onlineRating: 7.7
actors:
  - Maribel Verdú
  - Gael García Bernal
  - Daniel Giménez Cacho
image: https://m.media-amazon.com/images/M/MV5BNTRmZmNlMjktZDRkMi00OGNjLWJkZGUtMDljNDViMGE3MjNhXkEyXkFqcGc@._V1_SX300.jpg
released: true
premiere: 08.06.2001
watched: false
lastWatched: ""
personalRating: 0
tags:
  - film
plan-to-watch: true
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