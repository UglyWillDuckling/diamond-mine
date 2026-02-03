---
type: movie
subType: ""
title: Wolfwalkers
year: "2020"
dataSource: OMDbAPI
url: https://www.imdb.com/title/tt5198068/
id: tt5198068
plot: A young apprentice hunter and her father journey to Ireland to help wipe out the last wolf pack. But everything changes when she befriends a free-spirited girl from a mysterious tribe rumored to transform into wolves by night.
genres:
  - Animation
  - Action
  - Adventure
director:
  - Tomm Moore
  - Ross Stewart
onlineRating: 8
actors:
  - Honor Kneafsey
  - Eva Whittaker
  - Sean Bean
image: https://m.media-amazon.com/images/M/MV5BYzg3MjBkYmYtZjZkZS00YWVkLTk3YjMtNDBlMTVmNDZkZDJhXkEyXkFqcGc@._V1_SX300.jpg
released: true
premiere: 13.11.2020
watched: false
lastWatched: ""
personalRating: 0
tags:
  - film
plan-to-watch: true
interest: 7.4
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