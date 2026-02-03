---
category:
  - "[[Film]]"
plan-to-watch: true
interest:
type: movie
subType: ""
title: The Animatrix (2003)
year: "2003"
dataSource: OMDbAPI
url: https://www.imdb.com/title/tt24819996/
id: tt24819996
plot: N/A
genres:
  - N/A
director:
  - N/A
onlineRating: .nan
actors:
  - N/A
image: https://wallpapercat.com/w/full/1/7/d/828028-3840x2160-desktop-4k-the-animatrix-background-photo.jpg
released: true
premiere: 11/04/2021
watched: true
lastWatched: ""
personalRating: 7.7
tags:
  - film/animated
---

`$= '![Image|400](' + dv.current().image + ')'`

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
