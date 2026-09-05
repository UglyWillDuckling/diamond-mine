---
type: movie
subType: ""
title: Babylon
year: "2022"
dataSource: OMDbAPI
url: https://www.imdb.com/title/tt10640346/
id: tt10640346
plot: A tale of outsized ambition and outrageous excess, it traces the rise and fall of multiple characters during an era of unbridled decadence and depravity in early Hollywood.
genres:
  - Comedy
  - Drama
director:
  - "[[Damien Chazelle]]"
onlineRating: 7.1
actors:
  - Brad Pitt
  - Margot Robbie
  - Jean Smart
image: https://m.media-amazon.com/images/M/MV5BNGY3M2NkN2QtZTdhOS00YTNjLTgyYmMtMGY3Y2U0OTk2NjA0XkEyXkFqcGc@._V1_SX300.jpg
released: true
premiere: 23.12.2022
watched: false
lastWatched: ""
personalRating: 0
tags:
  - film
plan-to-watch: true
interest: 8
movie_status:
  - plan_to_watch
selected: false
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