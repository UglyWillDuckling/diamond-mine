---
type: movie
subType: ""
title: Challengers
year: "2024"
dataSource: OMDbAPI
url: https://www.imdb.com/title/tt16426418/
id: tt16426418
plot: Tashi, a former tennis prodigy turned coach, transformed her husband into a champion. But to overcome a recent losing streak and redeem himself, he'll need to face off against his former best friend and Tashi's ex-boyfriend.
genres:
  - Comedy
  - Drama
  - Romance
director:
  - Luca Guadagnino
actors:
  - Mike Faist
  - Josh O'Connor
  - "[[Zendaya]]"
image: https://m.media-amazon.com/images/M/MV5BZTcyZGIyODctZGJhOS00MWUyLWI5ZWEtMjg4YzhkMDczMDBhXkEyXkFqcGc@._V1_SX300.jpg
onlineRating: 7
released: true
premiere: 04/26/2024
watched: true
lastWatched: 2025-08-15
personalRating: 6.2
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