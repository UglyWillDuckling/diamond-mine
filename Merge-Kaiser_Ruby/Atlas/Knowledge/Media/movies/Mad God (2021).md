---
type: movie
subType: ""
title: Mad God
year: "2021"
dataSource: OMDbAPI
url: https://www.imdb.com/title/tt15090124/
id: tt15090124
plot: The Assassin travels through a nightmare underworld of tortured souls, ruined cities and wretched monstrosities forged from the primordial horrors of the unconscious mind of Phil Tippett, the world's preeminent stop-motion animator.
genres:
  - Animation
  - Fantasy
  - Horror
director:
  - Phil Tippett
onlineRating: 6.8
actors:
  - Alex Cox
  - Niketa Roman
  - Satish Ratakonda
image: https://m.media-amazon.com/images/M/MV5BNTE0YzIyZjEtNDI3Mi00NTBlLTg3ZWItOWFjOWM1NGZjYmY1XkEyXkFqcGc@._V1_SX300.jpg
released: true
premiere: 16.06.2022
watched: false
lastWatched: ""
plan-to-watch: true
personalRating: 0
tags:
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