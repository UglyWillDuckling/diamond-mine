---
type: movie
subType: ""
title: Soy Frankelda
year: "2025"
dataSource: OMDbAPI
url: https://www.imdb.com/title/tt36639986/
id: tt36639986
plot: Frankelda, a determined 19th-century Mexican writer, journeys into her subconscious to face the monsters she's written about. Guided by a tormented prince, she must restore the balance between fiction and reality before it's too l...
genres:
  - Animation
director:
  - Arturo Ambriz
  - Roy Ambriz
image: https://m.media-amazon.com/images/M/MV5BOGI4OTEyZWEtMGIyNy00MzYxLTg2ZjktNzRjZjBlYTc2MTdmXkEyXkFqcGc@._V1_SX300.jpg
released: true
premiere: unknown
watched: false
lastWatched: ""
personalRating: 0
tags:
  - mediaDB/tv/movie
  - film/animated
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

https://www.youtube.com/watch?v=tqFupiroiSQ
![](https://www.youtube.com/watch?v=tqFupiroiSQ)