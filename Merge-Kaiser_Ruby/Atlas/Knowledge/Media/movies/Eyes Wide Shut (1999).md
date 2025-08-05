---
type: movie
subType: ""
title: Eyes Wide Shut
year: "1999"
dataSource: OMDbAPI
url: https://www.imdb.com/title/tt0120663/
id: tt0120663
plot: A Manhattan doctor embarks on a bizarre, night-long odyssey after his wife's admission of unfulfilled longing.
genres:
  - Drama
  - Mystery
  - Thriller
director:
  - "[[Stanley Cubrick]]"
onlineRating: 7.5
actors:
  - Tom Cruise
  - Nicole Kidman
  - Todd Field
image: https://m.media-amazon.com/images/M/MV5BZTQ0MmM5MDAtYmYyZS00MzlmLTlhZTAtZDJlZWY5ZTZkZjZmXkEyXkFqcGc@._V1_SX300.jpg
released: true
premiere: 07/16/1999
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