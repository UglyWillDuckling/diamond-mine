---
type: movie
subType: ""
title: Days of Heaven
year: "1978"
dataSource: OMDbAPI
url: https://www.imdb.com/title/tt0077405/
id: tt0077405
plot: A hot-tempered farm laborer convinces the woman he loves to marry their rich but dying boss so that they can have a claim to his fortune.
genres:
  - Drama
  - Romance
director:
  - Terrence Malick
onlineRating: 7.7
actors:
  - Richard Gere
  - Brooke Adams
  - Sam Shepard
image: https://m.media-amazon.com/images/M/MV5BOWM5OTcwMjMtMDk0OC00N2M3LTlmYzQtY2Q5ZmZmNjIyOGViXkEyXkFqcGc@._V1_SX300.jpg
released: true
premiere: 06.10.1978
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
**Premiered**: `$= dv.current().premiere`