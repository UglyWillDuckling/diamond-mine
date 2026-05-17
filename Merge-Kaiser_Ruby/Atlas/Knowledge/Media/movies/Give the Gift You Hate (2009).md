---
category:
  - "[[Film]]"
interest:
plan-to-watch: true
personal favorite: false
type: movie
subType: ""
title: Give the Gift You Hate
year: "2009"
dataSource: OMDbAPI
url: https://www.imdb.com/title/tt1478380/
id: tt1478380
plot: N/A
genres:
  - Documentary
  - Short
director:
  - Kaylynn Raschke
onlineRating: .nan
actors:
  - N/A
image: N/A
released: true
premiere: unknown
watched: false
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
