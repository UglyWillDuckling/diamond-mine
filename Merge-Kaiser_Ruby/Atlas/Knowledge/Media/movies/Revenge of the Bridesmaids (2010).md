---
type: movie
subType: ""
title: Revenge of the Bridesmaids
year: "2010"
dataSource: OMDbAPI
url: https://www.imdb.com/title/tt1666642/
id: tt1666642
plot: Two women plot revenge against the woman marrying their friend's ex-boyfriend.
genres:
  - Comedy
  - Romance
director:
  - James Hayman
onlineRating: 5.9
actors:
  - Raven-Symoné
  - JoAnna Garcia Swisher
  - Beth Broderick
image: https://m.media-amazon.com/images/M/MV5BNzRhNTI0NzItNTk3NC00ZDVlLTllZjUtYWIzNTcxNDc5MzRjXkEyXkFqcGc@._V1_SX300.jpg
released: true
premiere: 07/18/2010
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