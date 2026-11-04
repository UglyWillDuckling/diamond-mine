---

type: movie
subType: ""
title: Jurassic Park III
year: "2001"
dataSource: OMDbAPI
url: https://www.imdb.com/title/tt0163025/
id: tt0163025
plot: A decidedly odd couple with ulterior motives convince Dr. Grant to go to Isla Sorna for a holiday, but their unexpected landing startles the island's new inhabitants.
genres:
  - Action
  - Adventure
  - Sci-Fi
director:
  - Joe Johnston
onlineRating: 6
actors:
  - Sam Neill
  - William H. Macy
  - Téa Leoni
image: https://m.media-amazon.com/images/M/MV5BN2FmMjhlZDYtNmYyMy00NTdjLTlhYzYtZWNlMDY2MmUzOGM2XkEyXkFqcGc@._V1_SX300.jpg
released: true
premiere: 18.07.2001
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

**Premiered**: `$= dv.current().premiere`