---
type: movie
subType: ""
title: Suzhou River
year: "2000"
dataSource: OMDbAPI
url: https://www.imdb.com/title/tt0234837/
id: tt0234837
plot: After getting out of prison, small-time crook Mardar stumbles upon a woman who looks exactly like his long-lost lover.
genres:
  - Drama
  - Romance
director:
  - Ye Lou
onlineRating: 7.4
actors:
  - Xun Zhou
  - Hongsheng Jia
  - Zhongkai Hua
image: https://m.media-amazon.com/images/M/MV5BNGMxM2IwZjgtNGQ0My00ZTc0LTk3MTMtYTIyNWI2OWJhZGU5XkEyXkFqcGc@._V1_SX300.jpg
released: true
premiere: 27.09.2001
watched: false
lastWatched: ""
personalRating: 0
plan-to-watch: true
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