---
category:
  - "[[Film]]"
plan-to-watch: false
interest:
type: movie
subType: ""
title: Ghost in the Shell
year: "1995"
dataSource: OMDbAPI
url: https://www.imdb.com/title/tt0113568/
id: tt0113568
plot: A cyborg policewoman and her partner hunt a mysterious and powerful hacker called the Puppet Master.
genres:
  - Animation
  - Action
  - Crime
director:
  - Mamoru Oshii
onlineRating: 7.9
actors:
  - Atsuko Tanaka
  - Iemasa Kayumi
  - Akio Ôtsuka
image: https://m.media-amazon.com/images/M/MV5BNzljMjA3MTQtMjM1OS00OGJjLWJiYzctZDRiMTk1NWI5YzQ5XkEyXkFqcGc@._V1_SX300.jpg
released: true
premiere: 03/29/1996
watched: false
lastWatched: ""
personalRating: 9
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

```dataviewjs
if (dv.current().watched) {
	dv.paragraph(`> [!SUCCESS] \`INPUT[toggle:plan-to-watch]\` planned`);
} else {
	dv.paragraph(`> [!WARNING] \`INPUT[toggle:plan-to-watch]\` not planned`);
}
```

**Rating**:  `INPUT[slider(addLabels, minValue(0), maxValue(10)):personalRating]` (`$= dv.current().personalRating` out of 10)

**Premiered**: `$= dv.current().premiere`
