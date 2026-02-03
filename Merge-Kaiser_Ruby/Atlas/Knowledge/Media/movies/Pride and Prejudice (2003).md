---

category:
  - "[[Film]]"
plan-to-watch: false
interest:
type: movie
subType: ""
title: Pride and Prejudice
year: "2003"
dataSource: OMDbAPI
url: https://www.imdb.com/title/tt0366920/
id: tt0366920
plot: Jane Austen's classic is transplanted to modern-day Utah. While her college roommates search for love, aspiring writer Elizabeth Bennet focuses on her career but constantly finds herself fighting haughty businessman Will Darcy.
genres:
  - Comedy
  - Romance
director:
  - Andrew Black
onlineRating: 5
actors:
  - Kam Heskin
  - Orlando Seale
  - Lucila Solá
image: https://m.media-amazon.com/images/M/MV5BMTI2NDkyMTU4N15BMl5BanBnXkFtZTYwMTM1NjYy._V1_SX300.jpg
released: true
premiere: 12/05/2003
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
