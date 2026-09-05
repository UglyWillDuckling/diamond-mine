---
category:
  - "[[Film]]"
interest: 8
plan-to-watch: false
personal favorite: false
type: movie
subType: ""
title: The Matrix Resurrections
year: "2021"
dataSource: OMDbAPI
url: https://www.imdb.com/title/tt10838180/
id: tt10838180
plot: "Return to a world of two realities: one, everyday life; the other, what lies behind it. To find out if his reality is a construct, to truly know himself, Mr. Anderson will have to choose to follow the white rabbit once more."
genres:
  - Action
  - Sci-Fi
director:
  - Lana Wachowski
onlineRating: 5.6
actors:
  - Keanu Reeves
  - Carrie-Anne Moss
  - Yahya Abdul-Mateen II
image: https://m.media-amazon.com/images/M/MV5BMDMyNDIzYzMtZTMyMy00NjUyLWI3Y2MtYzYzOGE1NzQ1MTBiXkEyXkFqcGc@._V1_SX300.jpg
released: true
premiere: 22.12.2021
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
