---
type: movie
subType: ""
title: Memories
year: "1995"
dataSource: OMDbAPI
url: https://www.imdb.com/title/tt0113799/
id: tt0113799
plot: Three separate science-fiction stories by three prominent Japanese animators.
genres:
  - Animation
  - Drama
  - Horror
director:
  - Katsuhiro Ôtomo
  - Kôji Morimoto
  - Tensai Okamura
onlineRating: 7.5
actors:
  - Tsutomu Isobe
  - Shôzô Îzuka
  - Kôichi Yamadera
image: https://m.media-amazon.com/images/M/MV5BNmMzOTVhNjAtMmIxYS00NzA0LWFmNzYtMTQ0NjYwMjlkMzM0XkEyXkFqcGc@._V1_SX300.jpg
released: true
premiere: 23.12.1995
watched: false
lastWatched: ""
personalRating: 0
plan-to-watch: true
tags:
  - film
  - film/animated
interest: 7.8
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