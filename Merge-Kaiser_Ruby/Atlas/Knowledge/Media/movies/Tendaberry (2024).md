---
type: movie
subType: ""
title: Tendaberry
year: "2024"
dataSource: OMDbAPI
url: https://www.imdb.com/title/tt30320639/
id: tt30320639
plot: As her boyfriend returns to Ukraine to care for his ailing father, 23-year-old Dakota faces the challenges of a precarious new reality, navigating the complexities of survival in New York City on her own.
genres:
  - Drama
  - Romance
director:
  - Haley Elizabeth Anderson
onlineRating: 6.5
actors:
  - Sarae Adams
  - Janice Dias
  - Mike Donovan
image: https://m.media-amazon.com/images/M/MV5BMGE4MjNiZmItMDFkZi00MzkzLTgxYjgtZmU2NjNhNGQ5MTlhXkEyXkFqcGc@._V1_SX300.jpg
released: true
premiere: 25.03.2025
watched: false
lastWatched: ""
personalRating: 0
plan-to-watch: true
tags:
  - film/00
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