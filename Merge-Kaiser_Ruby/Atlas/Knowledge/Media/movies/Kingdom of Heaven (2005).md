---
type: movie
subType: ""
title: Kingdom of Heaven
year: "2005"
dataSource: OMDbAPI
url: https://www.imdb.com/title/tt0320661/
id: tt0320661
plot: Balian of Ibelin travels to Jerusalem during the Crusades of the 12th century, and there he finds himself as the defender of the city and its people.
genres:
  - Action
  - Adventure
  - Drama
director:
  - Ridley Scott
onlineRating: 7.3
actors:
  - Orlando Bloom
  - Eva Green
  - Liam Neeson
image: https://m.media-amazon.com/images/M/MV5BMzdhNGZhMjQtYjVmNy00OWMyLTk1MmQtZGNhZDYwMzZlZjI3XkEyXkFqcGc@._V1_SX300.jpg
released: true
premiere: 06.05.2005
watched: false
lastWatched: ""
personalRating: 0
tags:
  - mediaDB/tv/movie
  - film
plan-to-watch: true
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

**Premiered**: `$= dv.current().premiere`