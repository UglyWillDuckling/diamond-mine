---
type: movie
subType: ""
title: Psycho
year: "1960"
dataSource: OMDbAPI
url: https://www.imdb.com/title/tt0054215/
id: tt0054215
plot: A secretary on the run for embezzlement takes refuge at a secluded California motel owned by a repressed man and his overbearing mother.
genres:
  - Drama
  - Horror
  - Mystery
director:
  - Alfred Hitchcock
onlineRating: 8.5
actors:
  - Anthony Perkins
  - Janet Leigh
  - Vera Miles
image: https://m.media-amazon.com/images/M/MV5BYjZhMzFiZjItODA3ZC00MmRhLWIzMGYtMmVjOWUwYTA3MTRjXkEyXkFqcGc@._V1_SX300.jpg
released: true
premiere: 09/08/1960
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