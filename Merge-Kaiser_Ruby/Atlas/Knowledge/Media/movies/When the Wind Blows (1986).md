---
type: movie
subType: ""
title: When the Wind Blows
year: "1986"
dataSource: OMDbAPI
url: https://www.imdb.com/title/tt0090315/
id: tt0090315
plot: A naive elderly British rural couple survive the initial onslaught of a nuclear war.
genres:
  - Animation
  - Drama
  - War
director:
  - Jimmy T. Murakami
onlineRating: 7.7
actors:
  - Peggy Ashcroft
  - John Mills
  - Robin Houston
image: https://m.media-amazon.com/images/M/MV5BNjM5YWZlOWEtZmY3MC00MjQ1LWJlNmYtYjRkNzE2MTMyMGZlXkEyXkFqcGc@._V1_SX300.jpg
released: true
premiere: 11.03.1988
watched: false
lastWatched: ""
personalRating: 0
tags:
  - film
plan-to-watch: true
interest: 8.1
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