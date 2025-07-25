---
type: movie
subType: ""
title: The Sixth Sense
year: "1999"
dataSource: OMDbAPI
url: https://www.imdb.com/title/tt0167404/
id: tt0167404
plot: After being shot by a resentful former patient whom he failed to help, a Philadelphia child psychologist seeks redemption by treating a young boy with a disturbing secret.
genres:
  - Drama
  - Mystery
  - Thriller
director:
  - M. Night Shyamalan
onlineRating: 8.2
actors:
  - Bruce Willis
  - Haley Joel Osment
  - Toni Collette
  - "[[Bruce Willis]]"
image: https://m.media-amazon.com/images/M/MV5BZWQ2OTY0M2UtMTQxNC00MmIzLTllNDQtNDQ0MTQyYzI2M2ZiXkEyXkFqcGc@._V1_SX300.jpg
released: true
premiere: 08/06/1999
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