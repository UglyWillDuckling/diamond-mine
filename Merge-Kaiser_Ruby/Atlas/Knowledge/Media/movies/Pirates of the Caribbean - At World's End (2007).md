---

category:
  - "[[Film]]"
plan-to-watch: false
interest:
type: movie
subType: ""
title: "Pirates of the Caribbean: At World's End"
year: "2007"
dataSource: OMDbAPI
url: https://www.imdb.com/title/tt0449088/
id: tt0449088
plot: Will Turner, Elizabeth Swann, Hector Barbossa, and the crew of the Black Pearl try and rescue Jack from davy jones locker and prepare to fight Lord Cutler Beckett, who controls Davy Jones and the Flying Dutchman.
genres:
  - Action
  - Adventure
  - Fantasy
director:
  - Gore Verbinski
onlineRating: 7.1
actors:
  - Johnny Depp
  - Geoffrey Rush
  - Orlando Bloom
image: https://m.media-amazon.com/images/M/MV5BMjIyNjkxNzEyMl5BMl5BanBnXkFtZTYwMjc3MDE3._V1_SX300.jpg
released: true
premiere: 05/25/2007
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
