---
category:
  - "[[Film]]"
plan-to-watch: false
interest:
type: movie
subType: ""
title: "Ace Ventura: When Nature Calls"
year: "1995"
dataSource: OMDbAPI
url: https://www.imdb.com/title/tt0112281/
id: tt0112281
plot: Ace Ventura, Pet Detective, returns from a spiritual quest to investigate the disappearance of a rare white bat, the sacred animal of a tribe in Africa.
genres:
  - Adventure
  - Comedy
  - Crime
director:
  - Steve Oedekerk
onlineRating: 6.4
actors:
  - Jim Carrey
  - Ian McNeice
  - Simon Callow
image: https://m.media-amazon.com/images/M/MV5BMjk3ZDUwYTMtYmQyYy00NTg1LWExOTItNTcxODM3NDZiNjMyXkEyXkFqcGc@._V1_SX300.jpg
released: true
premiere: 11/10/1995
watched: true
lastWatched: ""
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

```dataviewjs
if (dv.current()['plan-to-watch']) {
	dv.paragraph(`> [!SUCCESS] \`INPUT[toggle:plan-to-watch]\` planned`);
} else {
	dv.paragraph(`> [!WARNING] \`INPUT[toggle:plan-to-watch]\` not planned`);
}
```

**Premiered**: `$= dv.current().premiere`
