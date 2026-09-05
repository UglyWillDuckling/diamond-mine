---
category:
  - "[[Film]]"
interest:
plan-to-watch: true
personal favorite: false
type: movie
subType: ""
title: The Straight Story
year: "1999"
dataSource: OMDbAPI
url: https://www.imdb.com/title/tt0166896/
id: tt0166896
image: https://m.media-amazon.com/images/M/MV5BZjdjNWZhY2UtMDRiYS00M2NhLThiZmQtYTA0MzI4ZWIyYzY4XkEyXkFqcGc@._V1_SX600.jpg
japaneseTitle: ""
plot: Alvin Straight, a 73-year-old, learns that his estranged brother, Lyle is critically ill. Unable to drive, Alvin embarks on a journey from Iowa to Mt. Zion, by riding a lawn mower. Will he succeed?
genres:
  - Biography
  - Drama
director:
  - "[[David Lynch]]"
onlineRating: 8
actors:
  - Richard Farnsworth
  - Sissy Spacek
  - Jane Galloway Heitz
released: true
country:
  - United Kingdom
  - France
  - United States
boxOffice: $6,203,044
ageRating: G
premiere: 11/03/1999
watched: false
lastWatched: ""
personalRating: 0
tags: mediaDB/tv/movie
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
