---
type: movie
subType: ""
title: Perfect Blue
year: "1997"
dataSource: OMDbAPI
url: https://www.imdb.com/title/tt0156887/
id: tt0156887
plot: A pop singer gives up her career to become an actress, but she slowly goes insane when she starts being stalked by an obsessed fan and what seems to be a ghost of her past.
genres:
  - Animation
  - Crime
  - Drama
director:
  - Satoshi Kon
onlineRating: 8
actors:
  - Junko Iwao
  - Rica Matsumoto
  - Shinpachi Tsuji
image: https://m.media-amazon.com/images/M/MV5BMzAwNDIzMzEtZDZkNC00ZDQ4LTk3ZDMtZjVhMTU2YzgzZTZiXkEyXkFqcGc@._V1_SX300.jpg
released: true
premiere: 02/28/1998
watched: false
lastWatched: ""
personalRating: 0
tags:
  - film
  - film/animated
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