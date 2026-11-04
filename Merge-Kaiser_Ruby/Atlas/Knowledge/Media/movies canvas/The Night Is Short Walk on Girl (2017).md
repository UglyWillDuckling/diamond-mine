---
type: movie
subType: ""
title: The Night Is Short, Walk on Girl
year: "2017"
dataSource: OMDbAPI
url: https://www.imdb.com/title/tt6335734/
id: tt6335734
plot: In this comedy about one epic night in Kyoto, a college sophomore goes on a series of surreal encounters with the local nightlife, all the while unaware of the romantic longings of her classmate Senpai.
genres:
  - Animation
  - Adventure
  - Comedy
director:
  - Masaaki Yuasa
onlineRating: 7.5
actors:
  - Gen Hoshino
  - Kana Hanazawa
  - Hiroshi Kamiya
image: https://m.media-amazon.com/images/M/MV5BMTU3ZWNkOWEtMjAyMC00NThhLThkZjEtMTJmZjFmN2UwMWMyXkEyXkFqcGc@._V1_SX300.jpg
released: true
premiere: 04/07/2017
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