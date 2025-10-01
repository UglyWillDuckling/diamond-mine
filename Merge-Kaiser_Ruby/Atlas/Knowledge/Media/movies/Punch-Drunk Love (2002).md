---
type: movie
subType: ""
title: Punch-Drunk Love
year: "2002"
dataSource: OMDbAPI
url: https://www.imdb.com/title/tt0272338/
id: tt0272338
plot: Socially frustrated Barry Egan calls a phone-sex line to curb his loneliness. Little does he know it will land him in deep trouble and will jeopardize his burgeoning romance with the mysterious Lena.
genres:
  - Comedy
  - Drama
  - Romance
director:
  - Paul Thomas Anderson
onlineRating: 7.3
actors:
  - Adam Sandler
  - Emily Watson
  - Philip Seymour Hoffman
image: https://m.media-amazon.com/images/M/MV5BZTYyMTQ2MDAtMzYzYS00YjZiLWJiNDUtZjEwNzM4YzE1ZDhhXkEyXkFqcGc@._V1_SX300.jpg
released: true
premiere: 01.11.2002
watched: false
lastWatched: ""
personalRating: 0
plan-to-watch: true
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