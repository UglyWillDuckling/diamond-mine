---
category:
  - "[[Film]]"
plan-to-watch: true
interest:
type: movie
subType: ""
title: Shoplifters
year: "2018"
dataSource: OMDbAPI
url: https://www.imdb.com/title/tt8075192/
id: tt8075192
plot: On the margins of Tokyo, a dysfunctional band of outsiders are united by loyalty, a penchant for petty theft and playful grifting. When the young son is arrested, secrets are exposed that upend their tenuous, below-the-radar exist...
genres:
  - Crime
  - Drama
  - Thriller
director:
  - Hirokazu Koreeda
onlineRating: 7.9
actors:
  - Lily Franky
  - Sakura Andô
  - Kirin Kiki
image: https://m.media-amazon.com/images/M/MV5BMjY2NGZlZDUtMDUwMi00YTUxLTljNzEtZTE3YjAyNTQyNzU5XkEyXkFqcGc@._V1_SX300.jpg
released: true
premiere: 11/23/2018
watched: false
lastWatched: ""
personalRating: 0
tags:
  - film
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

```dataviewjs
if (dv.current()['plan-to-watch']) {
	dv.paragraph(`> [!SUCCESS] \`INPUT[toggle:plan-to-watch]\` planned`);
} else {
	dv.paragraph(`> [!WARNING] \`INPUT[toggle:plan-to-watch]\` not planned`);
}
```

**Premiered**: `$= dv.current().premiere`
