---
type: movie
subType: ""
title: Legally Blonde
year: "2001"
dataSource: OMDbAPI
url: https://www.imdb.com/title/tt0250494/
id: tt0250494
plot: Fashionable sorority queen Elle Woods follows her ex-boyfriend to law school, where she discovers that there is more to her than just looks.
genres:
  - Comedy
  - Romance
director:
  - Robert Luketic
onlineRating: 6.5
actors:
  - Reese Witherspoon
  - Luke Wilson
  - Selma Blair
image: https://m.media-amazon.com/images/M/MV5BNTEyNjUwMTkxMV5BMl5BanBnXkFtZTcwNjk0NDk0NA@@._V1_SX300.jpg
released: true
premiere: 07/13/2001
watched: false
lastWatched: ""
personalRating: 0
tags:
  - mediaDB/tv/movie
  - film
  - film/comfort
category:
  - "[[Film]]"
  - "[[Comfort]]"
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