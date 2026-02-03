---
category:
  - "[[Film]]"
  - "[[Animation]]"
plan-to-watch: false
interest:
type: movie
subType: ""
title: Finding Nemo
year: "2003"
dataSource: OMDbAPI
url: https://www.imdb.com/title/tt0266543/
id: tt0266543
plot: After his son is captured in the Great Barrier Reef and taken to Sydney, a timid clownfish sets out on a journey to bring him home.
genres:
  - Animation
  - Adventure
  - Comedy
director:
  - Andrew Stanton
  - Lee Unkrich
onlineRating: 8.2
actors:
  - Albert Brooks
  - Ellen DeGeneres
  - Alexander Gould
image: https://m.media-amazon.com/images/M/MV5BMTc5NjExNTA5OV5BMl5BanBnXkFtZTYwMTQ0ODY2._V1_SX300.jpg
released: true
premiere: 05/30/2003
watched: true
lastWatched: ""
personalRating: 8.4
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

```dataviewjs
if (dv.current()['plan-to-watch']) {
	dv.paragraph(`> [!SUCCESS] \`INPUT[toggle:plan-to-watch]\` planned`);
} else {
	dv.paragraph(`> [!WARNING] \`INPUT[toggle:plan-to-watch]\` not planned`);
}
```

**Premiered**: `$= dv.current().premiere`
