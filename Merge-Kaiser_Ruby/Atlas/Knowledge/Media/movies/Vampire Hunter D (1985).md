---

category:
  - "[[Film]]"
interest:
plan-to-watch: false
personal favorite: false
type: movie
subType: ""
title: Vampire Hunter D
year: "1985"
dataSource: OMDbAPI
url: https://www.imdb.com/title/tt0090248/
id: tt0090248
plot: When Doris Lang is chosen as the next bride for the vampire Count Magnus Lee, she will hire a mysterious vampire hunter known only as D in an attempt to escape her ill-gotten fate.
genres:
  - Animation
  - Action
  - Fantasy
director:
  - Toyoo Ashida
onlineRating: 7
actors:
  - Kaneto Shiozawa
  - Michie Tomizawa
  - Seizô Katô
image: https://m.media-amazon.com/images/M/MV5BNDVlYmU5N2MtYTQxMC00ODk0LThiZTYtZTFkODMwMzFhODIzXkEyXkFqcGc@._V1_SX300.jpg
released: true
premiere: 26.03.1993
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
