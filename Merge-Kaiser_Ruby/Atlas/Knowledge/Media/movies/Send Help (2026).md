---
category:
  - "[[Film]]"
interest:
plan-to-watch: true
personal favorite: false
type: movie
subType: ""
title: Send Help
year: "2026"
dataSource: OMDbAPI
url: https://www.imdb.com/title/tt8036976/
id: tt8036976
plot: Two colleagues become stranded on a deserted island, the only survivors of a plane crash. On the island, they must overcome past grievances and work together to survive, but ultimately, it's a battle of wills and wits to make it o...
genres:
  - Horror
  - Thriller
director:
  - "[[Sam Raimi]]"
onlineRating: .nan
actors:
  - "[[Rachel McAdams]]"
  - Dylan O'Brien
  - Bruce Campbell
image: https://m.media-amazon.com/images/M/MV5BNTk0YTYyZjctOTZhZS00YjZkLTlhYTctZmJmM2ZjZjRiZTQ1XkEyXkFqcGc@._V1_SX300.jpg
released: true
premiere: 30.01.2026
watched: false
lastWatched: ""
personalRating: 0
tags:
  - film
selected: false
movie_status:
  - plan_to_watch
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
