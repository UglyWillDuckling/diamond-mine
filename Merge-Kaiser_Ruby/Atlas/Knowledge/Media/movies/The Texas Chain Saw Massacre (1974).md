---
type: movie
subType: ""
title: The Texas Chain Saw Massacre
year: "1974"
dataSource: OMDbAPI
url: https://www.imdb.com/title/tt0072271/
id: tt0072271
plot: Five friends head out to rural Texas to visit the grave of a grandfather. On the way they stumble across what appears to be a deserted house, only to discover something sinister within. Something armed with a chainsaw.
genres:
  - Horror
director:
  - Tobe Hooper
onlineRating: 7.4
actors:
  - Marilyn Burns
  - Edwin Neal
  - Allen Danziger
image: https://m.media-amazon.com/images/M/MV5BYjE1MGJkMjUtY2VkNi00N2U1LWI2NWEtMDExNGYzYjRkZTM0XkEyXkFqcGc@._V1_SX300.jpg
released: true
premiere: 10/11/1974
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


![[~/×/e6ba253267b4a94d539bffeb29a01751_MD5.jpg|400]]



![](https://youtu.be/BKn9QIaMgtQ?si=v4Q-AiwRCnOZlU1N)