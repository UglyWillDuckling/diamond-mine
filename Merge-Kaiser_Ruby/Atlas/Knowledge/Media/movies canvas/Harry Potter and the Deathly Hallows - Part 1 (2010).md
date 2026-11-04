---
type: movie
subType: ""
title: "Harry Potter and the Deathly Hallows: Part 1"
year: "2010"
dataSource: OMDbAPI
url: https://www.imdb.com/title/tt0926084/
id: tt0926084
plot: Harry Potter is tasked with the dangerous and seemingly impossible task of locating and destroying Voldemort's remaining Horcruxes. Harry must rely on Ron and Hermione more than ever, but dark forces threaten to tear them apart.
genres:
  - Adventure
  - Family
  - Fantasy
director:
  - David Yates
onlineRating: 7.7
actors:
  - Daniel Radcliffe
  - Emma Watson
  - Rupert Grint
image: https://m.media-amazon.com/images/M/MV5BMTQ2OTE1Mjk0N15BMl5BanBnXkFtZTcwODE3MDAwNA@@._V1_SX300.jpg
released: true
premiere: 11/19/2010
watched: true
lastWatched: ""
personalRating: 0
tags:
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