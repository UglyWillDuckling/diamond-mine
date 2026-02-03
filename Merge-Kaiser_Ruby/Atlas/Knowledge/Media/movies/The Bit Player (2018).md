---
type: movie
subType: ""
title: The Bit Player
year: "2018"
dataSource: OMDbAPI
url: https://www.imdb.com/title/tt5015534/
id: tt5015534
plot: The Bit Player tells the story of an overlooked genius, Claude Shannon (the "Father of Information Theory"), who revolutionized the world, but never lost his childlike curiosity.
genres:
  - Documentary
  - Biography
director:
  - Mark Levinson
onlineRating: 7.3
actors:
  - John Hutton
  - Judith Ivey
  - Kaliswa Brewster
image: https://m.media-amazon.com/images/M/MV5BYjMyZjY4YTQtMjg3Yi00ZjUxLTkxODYtNzlhNjE3MmUyYzQxXkEyXkFqcGc@._V1_SX300.jpg
released: true
premiere: 26.06.2020
watched: false
lastWatched: ""
personalRating: 0
tags:
  - film
plan-to-watch: true
about:
  - "[[Claude Shannon]]"
interest: 7.6
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