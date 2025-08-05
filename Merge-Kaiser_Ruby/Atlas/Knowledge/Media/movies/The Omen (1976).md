---
type: movie
subType: ""
title: The Omen
year: "1976"
dataSource: OMDbAPI
url: https://www.imdb.com/title/tt0075005/
id: tt0075005
plot: Mysterious deaths surround an American ambassador. Could the child that he is raising actually be the Antichrist? The Devil's own son?
genres:
  - Horror
  - Mystery
director:
  - Richard Donner
onlineRating: 7.5
actors:
  - Gregory Peck
  - Lee Remick
  - Harvey Stephens
image: https://m.media-amazon.com/images/M/MV5BOTgxNjY0OTEtYWExOC00OWJiLWEzY2ItNzNjYTY0YjhjNjlhXkEyXkFqcGc@._V1_SX300.jpg
released: true
premiere: 06/25/1976
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