---
category:
  - "[[Film]]"
interest: 7.7
plan-to-watch: true
personal favorite: false
type: movie
title: Earth's Greatest Enemy
year: "2025"
premiere: 09/20/2025
url: https://www.imdb.com/title/tt37547719/
plot: Abby Martin reveals how the US military, as the world's largest polluter, impacts the environment while operating with minimal accountability.
genres:
  - "[[Documentary]]"
director:
  - "[[Abby Martin]]"
  - "[[Mike Prysner]]"
onlineRating: 7.8
image: |
  https://media.kauainownews.com/file/kauainow/2026/07/Earths-Greatest-Enemy-documentary-screening-7-19-26-1024x576.jpg
released: true
watched: false
personalRating: 0
lastWatched: ""
tags:
  - film/doc
selected: false
movie_status:
  - plan_to_watch
---

`$= '![Image|300](' + dv.current().image + ')'`
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
