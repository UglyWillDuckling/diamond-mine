---
category:
  - "[[Film]]"
plan-to-watch: true
interest:
type: movie
subType: ""
title: Ride Your Wave
year: "2019"
dataSource: OMDbAPI
url: https://www.imdb.com/title/tt9193612/
id: tt9193612
plot: A surfer and firefighter meet and fall in love.
genres:
  - Animation
  - Comedy
  - Drama
director:
  - Masaaki Yuasa
onlineRating: 6.8
actors:
  - Ryôta Katayose
  - Rina Kawaei
  - Honoka Matsumoto
image: https://m.media-amazon.com/images/M/MV5BMzYwNGQ5ZjgtNDUwMi00NzAxLWJiNzctMjM4OTNmZjExMTAyXkEyXkFqcGc@._V1_SX300.jpg
released: true
premiere: 02/19/2020
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
