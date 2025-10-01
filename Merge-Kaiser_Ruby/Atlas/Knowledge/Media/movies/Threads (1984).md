---
type: movie
subType: ""
title: Threads
year: "1984"
dataSource: OMDbAPI
url: https://www.imdb.com/title/tt0090163/
id: tt0090163
plot: The effects of a nuclear holocaust on the working class city of Sheffield, England and the eventual long-term effects of nuclear war on civilization.
genres:
  - Drama
  - Sci-Fi
  - Thriller
director:
  - Mick Jackson
onlineRating: 7.9
actors:
  - Karen Meagher
  - Reece Dinsdale
  - David Brierly
image: https://m.media-amazon.com/images/M/MV5BZmMwNTMyZjYtZDNlZS00OGQ2LTk0MzQtZTgyNDkxNDQ4YjQxXkEyXkFqcGc@._V1_SX300.jpg
released: true
premiere: 23.09.1984
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