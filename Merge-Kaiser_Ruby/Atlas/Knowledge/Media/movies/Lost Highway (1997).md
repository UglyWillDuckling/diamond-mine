---

category:
  - "[[Film]]"
interest:
plan-to-watch: false
personal favorite: false
type: movie
subType: ""
title: Lost Highway
year: "1997"
dataSource: OMDbAPI
url: https://www.imdb.com/title/tt0116922/
id: tt0116922
image: https://m.media-amazon.com/images/M/MV5BNjcyNmM2ODktYzk0Mi00Njk0LTljZGMtNGZhMzI4NmY1NzA1XkEyXkFqcGc@._V1_SX600.jpg
japaneseTitle: ""
plot: Anonymous videotapes presage a musician's murder conviction, and a gangster's girlfriend leads a mechanic astray.
genres:
  - Drama
  - Mystery
  - Thriller
director:
  - David Lynch
onlineRating: 7.6
actors:
  - Bill Pullman
  - Patricia Arquette
  - John Roselius
released: true
country:
  - France
  - United States
boxOffice: $3,726,792
ageRating: R
premiere: 01/15/1997
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
