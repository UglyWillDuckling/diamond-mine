---
type: movie
subType: ""
title: The Batman
year: "2022"
dataSource: OMDbAPI
url: https://www.imdb.com/title/tt1877830/
id: tt1877830
plot: When a sadistic serial killer begins murdering key political figures in Gotham, the Batman is forced to investigate the city's hidden corruption and question his family's involvement.
genres:
  - Action
  - Crime
  - Drama
director:
  - Matt Reeves
onlineRating: 7.8
actors:
  - Robert Pattinson
  - Zoë Kravitz
  - Jeffrey Wright
image: https://m.media-amazon.com/images/M/MV5BMmU5NGJlMzAtMGNmOC00YjJjLTgyMzUtNjAyYmE4Njg5YWMyXkEyXkFqcGc@._V1_SX300.jpg
premiere: 03/04/2022
released: true
plan-to-watch: true
watched: false
lastWatched: ""
personalRating: 8
tags:
  - film/2020
interest: 7
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
