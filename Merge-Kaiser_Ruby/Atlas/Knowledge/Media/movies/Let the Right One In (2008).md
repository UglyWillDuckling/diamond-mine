---
type: movie
subType: ""
title: Let the Right One In
year: "2008"
dataSource: OMDbAPI
url: https://www.imdb.com/title/tt1139797/
id: tt1139797
plot: A bullied boy forms a unique friendship with his new neighbor, who is a vampire.
genres:
  - Drama
  - Fantasy
  - Horror
director:
  - "[[Tomas Alfredson]]"
onlineRating: 7.8
actors:
  - Kåre Hedebrant
  - Lina Leandersson
  - Per Ragnar
image: https://m.media-amazon.com/images/M/MV5BNjgxZGFlYjktNjE2NC00YTkzLTlhY2QtNDJmMDhmMGEzOTcwXkEyXkFqcGc@._V1_SX300.jpg
released: true
premiere: 12/12/2008
watched: false
lastWatched: ""
personalRating: 0
tags:
  - mediaDB/tv/movie
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