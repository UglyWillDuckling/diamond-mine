---
type: movie
subType: ""
title: The NeverEnding Story
year: "1984"
dataSource: OMDbAPI
url: https://www.imdb.com/title/tt0088323/
id: tt0088323
plot: A troubled boy dives into a wondrous fantasy world through the pages of a mysterious book.
genres:
  - Adventure
  - Drama
  - Family
director:
  - Wolfgang Petersen
onlineRating: 7.3
actors:
  - Noah Hathaway
  - Barret Oliver
  - Tami Stronach
image: https://m.media-amazon.com/images/M/MV5BYzE0Y2E0NGYtYzRmMy00ZDRjLTk1NDItNjZjYTMyMmJjMGYxXkEyXkFqcGc@._V1_SX300.jpg
released: true
premiere: 20.07.1984
watched: false
lastWatched: ""
personalRating: 8
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

**Premiered**: `$= dv.current().premiere`