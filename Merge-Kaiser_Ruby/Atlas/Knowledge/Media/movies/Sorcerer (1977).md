---
type: movie
subType: ""
title: Sorcerer
year: "1977"
dataSource: OMDbAPI
url: https://www.imdb.com/title/tt0076740/
id: tt0076740
plot: Four unfortunate men from different parts of the globe agree to risk their lives transporting gallons of nitroglycerin across dangerous Latin American jungle.
genres:
  - Adventure
  - Drama
  - Thriller
director:
  - William Friedkin
onlineRating: 7.7
actors:
  - Roy Scheider
  - Bruno Cremer
  - Francisco Rabal
image: https://m.media-amazon.com/images/M/MV5BY2I4ZDBlM2ItNTcxZS00ZDA0LTljMDAtYjdlYmFiYzA1NGZjXkEyXkFqcGc@._V1_SX300.jpg
released: true
premiere: 24.06.1977
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