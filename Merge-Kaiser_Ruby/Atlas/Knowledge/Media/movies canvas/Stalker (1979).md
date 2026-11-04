---
type: movie
title: Stalker
year: "1979"
dataSource: OMDbAPI
url: https://www.imdb.com/title/tt0079944/
id: tt0079944
plot: A guide leads two men through an area known as the Zone to find a room that grants wishes.
genres:
  - Drama
  - Sci-Fi
director:
  - Andrei Tarkovsky
  - "[[Anderei Tarkovsky]]"
actors:
  - Alisa Freyndlikh
  - Aleksandr Kaydanovskiy
  - Anatoliy Solonitsyn
image: https://m.media-amazon.com/images/M/MV5BMDIzMDRiYjgtM2U1Yy00MjlhLTliODMtM2E5NDI5Njc3YmZkXkEyXkFqcGc@._V1_SX300.jpg
onlineRating: 8
released: true
premiere: 04/17/1980
watched: false
lastWatched: ""
personalRating: 0
tags:
  - mediaDB/tv/movie
  - film
---

`$= '![Image|360](' + dv.current().image + ')'`

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