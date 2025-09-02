---
type: movie
title: The Postman
year: "1997"
dataSource: OMDbAPI
url: https://www.imdb.com/title/tt0119925/
id: tt0119925
plot: A nameless drifter dons a postman's uniform and bag of mail as he begins a quest to inspire hope to the survivors living in post-apocalyptic America.
genres:
  - Action
  - Adventure
  - Drama
director:
  - Kevin Costner
onlineRating: 6.1
actors:
  - Kevin Costner
  - Will Patton
  - Larenz Tate
image: https://m.media-amazon.com/images/M/MV5BMGNiZjA3ODMtYmExMS00MzRiLWI3N2QtNDQxYzRlYzAwNjBhXkEyXkFqcGc@._V1_SX300.jpg
released: true
premiere: 25.12.1997
watched: true
lastWatched: ""
personalRating: 7
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