---
type: movie
subType: ""
title: Universal Language
year: "2024"
dataSource: OMDbAPI
url: https://www.imdb.com/title/tt31691389/
id: tt31691389
plot: Two women find frozen cash, try to retrieve it. A tour guide leads confused tourists around Winnipeg sites. A man quits his job, visits his mother. Storylines intertwine surreally as identities blur in a disorienting comedy.
genres:
  - Comedy
  - Drama
director:
  - Matthew Rankin
onlineRating: .nan
actors:
  - Baharan BaniAhmadi
  - Rojina Esmaeili
  - Danielle Fichaud
image: https://m.media-amazon.com/images/M/MV5BZDZiMjc0NzAtMDU2OS00NTU1LWFmNWUtMmE5Njg3YjRlOTg2XkEyXkFqcGc@._V1_SX300.jpg
released: true
premiere: 09/23/2024
watched: false
lastWatched: ""
personalRating: 0
tags:
  - film
plan-to-watch: true
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