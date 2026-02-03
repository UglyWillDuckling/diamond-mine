---
type: movie
subType: ""
title: Bridge to Terabithia
year: "2007"
dataSource: OMDbAPI
url: https://www.imdb.com/title/tt0398808/
id: tt0398808
plot: Leslie and Jess create the secret kingdom of Terabithia, a land of monsters, trolls, ogres and giants where they spend their free time ruling as king and queen and fighting evil creatures.
genres:
  - Drama
  - Family
  - Fantasy
director:
  - Gabor Csupo
onlineRating: 7.2
actors:
  - Josh Hutcherson
  - AnnaSophia Robb
  - Zooey Deschanel
image: https://m.media-amazon.com/images/M/MV5BMTMzOTk1MzIyN15BMl5BanBnXkFtZTcwNTM3MjczMQ@@._V1_SX300.jpg
released: true
premiere: 02/16/2007
watched: false
lastWatched: ""
personalRating: 0
tags:
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

**Premiered**: `$= dv.current().premiere`