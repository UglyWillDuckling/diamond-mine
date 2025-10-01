---
type: movie
subType: ""
title: Paris, Texas
year: "1984"
dataSource: OMDbAPI
url: https://www.imdb.com/title/tt0087884/
id: tt0087884
plot: Travis Henderson, an aimless drifter who has been missing for four years, wanders out of the desert and must reconnect with society, himself, his life, and his family.
genres:
  - Drama
director:
  - Wim Wenders
onlineRating: 8.1
actors:
  - Harry Dean Stanton
  - Nastassja Kinski
  - Dean Stockwell
image: https://m.media-amazon.com/images/M/MV5BYWY5YzE4YmUtZWFhMS00YjYxLWI5ZGUtNDEyNmMzNDVjMGEwXkEyXkFqcGc@._V1_SX300.jpg
released: true
premiere: 23.08.1984
watched: false
lastWatched: ""
plan-to-watch: true
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