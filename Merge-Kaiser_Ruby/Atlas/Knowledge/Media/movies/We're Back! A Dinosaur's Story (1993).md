---
type: movie
subType: ""
title: We're Back! A Dinosaur's Story
year: "1993"
dataSource: OMDbAPI
url: https://www.imdb.com/title/tt0108526/
id: tt0108526
plot: A time traveling scientist goes back to prehistoric times and feeds dinosaurs a magic cereal that increases their intelligence - next they land in modern New York City for a series of comic adventures.
genres:
  - Animation
  - Adventure
  - Comedy
director:
  - Phil Nibbelink
  - Simon Wells
  - Dick Zondag
onlineRating: 6
actors:
  - John Goodman
  - Charles Fleischer
  - Blaze Berdahl
image: https://m.media-amazon.com/images/M/MV5BMjM4ZTVmMmEtZjgxNC00Zjc2LWEyZmEtZTJjYmE2MzhiMjk4XkEyXkFqcGc@._V1_SX300.jpg
released: true
premiere: 24.11.1993
watched: false
lastWatched: ""
personalRating: 0
tags:
  - film
plan-to-watch: true
interest: 7
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