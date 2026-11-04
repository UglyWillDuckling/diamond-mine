---
type: movie
subType: ""
title: Day of the Dead
year: "1985"
dataSource: OMDbAPI
url: https://www.imdb.com/title/tt0088993/
id: tt0088993
plot: As the world is overrun by zombies, a group of scientists and military personnel sheltering in an underground bunker in Florida must decide on how they should deal with the undead horde.
genres:
  - Horror
  - Thriller
director:
  - "[[George A. Romero]]"
onlineRating: 7.1
actors:
  - Lori Cardille
  - Terry Alexander
  - Joseph Pilato
image: https://m.media-amazon.com/images/M/MV5BOTg0ZTVmMDMtMTkxZC00MDY1LTliZTUtNjg5NTAzNjAxY2Y0XkEyXkFqcGc@._V1_SX300.jpg
released: true
premiere: 07/19/1985
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
**Premiered**: `$= dv.current().premiere`o

![](https://www.youtube.com/watch?v=COj7ro8AjT8)

