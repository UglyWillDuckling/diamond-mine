---
type: movie
subType: ""
title: Harry Potter and the Order of the Phoenix
year: "2007"
dataSource: OMDbAPI
url: https://www.imdb.com/title/tt0373889/
id: tt0373889
plot: With their warning about Lord Voldemort's return scoffed at, Harry and Dumbledore are targeted by the Wizard authorities as an authoritarian bureaucrat slowly seizes power at Hogwarts.
genres:
  - Action
  - Adventure
  - Family
director:
  - David Yates
onlineRating: 7.5
actors:
  - Daniel Radcliffe
  - Emma Watson
  - Rupert Grint
image: https://m.media-amazon.com/images/M/MV5BYWJmM2M1YzItMjY1Ni00YzRmLTg5YWYtNDFmNTJjNzQ0ODkyXkEyXkFqcGc@._V1_SX300.jpg
released: true
premiere: 07/11/2007
watched: false
lastWatched: ""
personalRating: 0
tags:
  - film
  - film/comfort
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