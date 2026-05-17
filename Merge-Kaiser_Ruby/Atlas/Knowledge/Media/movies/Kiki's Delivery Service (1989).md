---
category:
  - "[[Film]]"
interest:
plan-to-watch: false
personal favorite: true
type: movie
subType: ""
title: Kiki's Delivery Service
year: "1989"
dataSource: OMDbAPI
url: https://www.imdb.com/title/tt0097814/
id: tt0097814
plot: Along with her black cat Jiji, Kiki settles in a seaside town and starts a high-flying delivery service. Here begins her magical encounter with independence and responsibility, making lifelong friends and finding her place in the ...
genres:
  - Animation
  - Family
  - Fantasy
director:
  - "[[Hayao Miyazaki]]"
onlineRating: 7.8
actors:
  - Minami Takayama
  - Rei Sakuma
  - Mieko Nobusawa
image: https://m.media-amazon.com/images/M/MV5BOTFhYWI1NGUtZWFhZS00MTdkLWIzZTItMDBhNWNiZDNlMjYyXkEyXkFqcGc@._V1_SX300.jpg
released: true
premiere: 12/20/1990
watched: true
lastWatched: 2025-02-04
personalRating: 9
tags:
  - film/comfort
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
