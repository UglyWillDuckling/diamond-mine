---

type: movie
subType: ""
title: Hellboy
year: "2004"
dataSource: OMDbAPI
url: https://www.imdb.com/title/tt0167190/
id: tt0167190
plot: A demon raised from infancy after being conjured by and rescued from the Nazis, grows up to become a defender against the forces of darkness.
genres:
  - Action
  - Adventure
  - Fantasy
director:
  - Guillermo del Toro
onlineRating: 6.9
actors:
  - Ron Perlman
  - Doug Jones
  - Selma Blair
image: https://m.media-amazon.com/images/M/MV5BMWZhODhmZjktNmIzNC00NGRmLTkyMDEtODVmMzVmNGQwYWU0XkEyXkFqcGc@._V1_SX300.jpg
released: true
premiere: 04/02/2004
watched: false
lastWatched: ""
personalRating: 0
tags: mediaDB/tv/movie
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