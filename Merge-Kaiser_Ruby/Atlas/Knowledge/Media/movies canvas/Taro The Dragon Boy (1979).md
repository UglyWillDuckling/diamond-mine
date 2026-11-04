---
type: movie
subType: movie
title: Tatsu no Ko Tarou
year: 1979
dataSource: MALAPI
url: https://myanimelist.net/anime/1208/Tatsu_no_Ko_Tarou
id: 1208
plot: Patterned after Japanese art and silk screens, Taro, The Dragon Boy is an animated feature about Japanese mythology and cultures, focusing on Taro, a young boy who has to make a voyage to a distant lake to save his mother, who has been turned into a dragon.
genres:
  - Adventure
  - Fantasy
onlineRating: 6.76
actors: []
image: https://cdn.myanimelist.net/images/anime/1874/112893.jpg
released: true
premiere: 03/17/1979
watched: false
lastWatched: ""
personalRating: 0
tags:
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

**Type**: `$= dv.current().type`
**Online Rating**: `$= dv.current().onlineRating`
**Duration**:  `$= dv.current().duration`
**Premiered**: `$= dv.current().premiere`