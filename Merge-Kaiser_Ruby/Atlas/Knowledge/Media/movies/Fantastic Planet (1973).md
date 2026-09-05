---
type: movie
subType: ""
title: Fantastic Planet
year: "1973"
dataSource: OMDbAPI
url: https://www.imdb.com/title/tt0070544/
id: tt0070544
plot: On a faraway planet where blue giants rule, oppressed humanoids rebel against their machine-like leaders.
genres:
  - Animation
  - Sci-Fi
director:
  - René Laloux
onlineRating: 7.7
actors:
  - Barry Bostwick
  - Jennifer Drake
  - Eric Baugin
image: https://m.media-amazon.com/images/M/MV5BMDRkN2MwZmEtZjEwYS00NGY3LTkyZTItNzYyNWIzNTFlOTRiXkEyXkFqcGc@._V1_SX300.jpg
released: true
premiere: 01.12.1973
watched: false
lastWatched: ""
personalRating: 0
tags:
  - film
plan-to-watch: true
interest: 8
selected: false
movie_status:
  - plan_to_watch
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