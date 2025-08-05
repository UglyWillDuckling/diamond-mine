---
type: movie
subType: ""
title: Gremlins
year: "1984"
dataSource: OMDbAPI
url: https://www.imdb.com/title/tt0087363/
id: tt0087363
plot: After receiving an exotic small animal as a Christmas gift, a young man inadvertently breaks three important rules concerning his new pet, which unleashes a horde of malevolently mischievous creatures on a small town.
genres:
  - Comedy
  - Fantasy
  - Horror
director:
  - Joe Dante
  - "[[Joe Dante]]"
onlineRating: 7.3
actors:
  - Zach Galligan
  - Phoebe Cates
  - Hoyt Axton
image: https://m.media-amazon.com/images/M/MV5BYmMzMmIxNzYtYjk3OS00NjBiLTkxNDQtODU3ZDNjN2RiMTIxXkEyXkFqcGc@._V1_SX300.jpg
released: true
premiere: 06/08/1984
watched: true
lastWatched: ""
personalRating: 7.7
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