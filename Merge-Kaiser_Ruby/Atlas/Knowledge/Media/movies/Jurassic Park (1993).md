---
type: movie
subType: ""
title: Jurassic Park
year: "1993"
dataSource: OMDbAPI
url: https://www.imdb.com/title/tt0107290/
id: tt0107290
plot: An industrialist invites some experts to visit his theme park of cloned dinosaurs. After a power failure, the creatures run loose, putting everyone's lives, including his grandchildren's, in danger.
genres:
  - Action
  - Adventure
  - Sci-Fi
director:
  - Steven Spielberg
onlineRating: 8.2
actors:
  - Sam Neill
  - Laura Dern
  - Jeff Goldblum
image: https://m.media-amazon.com/images/M/MV5BMjM2MDgxMDg0Nl5BMl5BanBnXkFtZTgwNTM2OTM5NDE@._V1_SX300.jpg
released: true
premiere: 11.06.1993
watched: false
lastWatched: ""
personalRating: 0
tags:
  - film
plan-to-watch: true
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