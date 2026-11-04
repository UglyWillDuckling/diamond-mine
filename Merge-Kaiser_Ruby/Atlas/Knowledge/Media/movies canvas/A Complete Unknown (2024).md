---
type: movie
title: A Complete Unknown
year: "2024"
dataSource: OMDbAPI
url: https://www.imdb.com/title/tt11563598/
id: tt11563598
plot: In 1961, an unknown 19-year-old Bob Dylan arrives in New York City with his guitar and forges relationships with musical icons on his meteoric rise, culminating in a groundbreaking performance that reverberates around the world.
genres:
  - Biography
  - Drama
  - Music
director:
  - James Mangold
onlineRating: 7.3
actors:
  - Timothée Chalamet
  - Edward Norton
  - Elle Fanning
image: https://m.media-amazon.com/images/M/MV5BYTA2NTA5NDYtMzlkOC00MTQxLWI0NDQtMzk2M2YzMGE4MTkxXkEyXkFqcGc@._V1_SX300.jpg
released: true
premiere: 25.12.2024
watched: true
lastWatched: ""
personalRating: 7
category:
  - "[[Film]]"
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